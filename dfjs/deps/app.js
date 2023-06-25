const fs = require("fs");
const logger = require("./logger");
const Js = require("./js_entity").Js;
const escodegen = require("escodegen");
const Wxml = require("../gui/wxml_entity").Wxml;
const wx_api = require('./wx_api');
const dataList = require("./crossFieldDataList").CrossFieldDataList;
const path = require("path");

function gather_nodes(deps) {
    let o = {};
    // 使用对象键值的唯一性实现一个set
    for (let d of deps) {
        if (!(d.from.node.id in o)) {
            o[d.from.node.id] = d.from.node;
        }
        if (!(d.to.node.id in o)) {
            o[d.to.node.id] = d.to.node;
        }
    }
    return Object.values(o);
}
function gather_edges(deps) {
    return deps.map(d => ({
        source: String(d.from.node.id),
        target: String(d.to.node.id),
        type: d.type,
        fromTo: {
            from: escodegen.generate(d.from.node.es_node),
            to: escodegen.generate(d.to.node.es_node),
        }
    }));
}

class App {
    constructor(options) {

        let defaultOptions = {
            // 是否分析大文件 >500kb 或超过3000行
            doALL: true,
            // 是否分析UI组件和事件处理函数
            doUI: false,
            // 是否分析实例数据读写流
            doInstance: true,
            // time out
            timeLimit: 20 * 1000,
            sizeLimit: 500 * 1000
        };
        this.options = Object.assign(defaultOptions, options);
        if (this.options.doALL) {
            this.sizeLimit = 0;
            this.timeLimit = 0
        };

        this.root = options.root;
        // test
        this.ref_res = [];

        this.jsfiles = {};
        this.wxmlfiles = {};

        this.appjs = this.root + "/app.js";

        this.flow_res = [];
        this.normal_flow_res = [];
        this.echarts_flow_res = [];

        this.functionCallDep = [];

        this.lines = 0;

        this.appInstanceDataList = new dataList();

        this.res_dir = this.root + "/___res___";
        this.file_res_dir = this.root + "/___file-res___";
        fs.existsSync(this.res_dir) || fs.mkdirSync(this.res_dir);
        fs.existsSync(this.file_res_dir) || fs.mkdirSync(this.file_res_dir);

        this.sourceStat = {
            wx_all: 0,
            sourceCount: 0,
            directlyFoundArgObject: 0,
            tracebackFoundArgObject: 0,
            directlyFoundSuccessCallbackFunction: 0,
            tracebackFoundSuccessCallbackFunction: 0,
        }
        this.canNOTHandle = [];

        //找不到定义的调用
        this.undefinedFunc = [];

        this.jsReserved = new JsReserved();

        this.timeStamp = Date.now();

        this.timeStartStamp = this.timeStamp;

        this.wxCallStat = {
            source: {},
            sink: {},
        };

        this.stained = {};

        this.sourceType = {
            fromUI: [],
            fromAPI: {},
            fromVar: {}
        };

        // 当前正在source的api
        this.nowSourcing;

        if (fs.existsSync(this.root)) {
            let q = [this.root];
            while (q.length > 0) {
                let sh = q.shift();
                if (fs.lstatSync(sh).isDirectory()) {
                    fs.readdirSync(sh).forEach(e => q.push(sh + "/" + e));
                } else {
                    if (sh.endsWith(".js")) {
                        this.jsfiles[sh] = new Js(sh, this);
                        this.lines += this.jsfiles[sh].lines;
                    } else if (sh.endsWith(".wxml")) {
                        this.wxmlfiles[sh] = new Wxml(sh, this);
                    }
                }
            }
        }

        let file_list = fs.readdirSync(this.root);
        if (file_list.includes("app.json")) {
            try {
                this.pages = JSON.parse(fs.readFileSync(this.root + "/app.json")).pages;
            } catch (e) {
                logger.log("app json error")
            }
        }

    }

    getCFG() {
        return this.options;
    }

    updateTimeStamp() {
        this.timeStamp = Date.now();
    }

    checkTimeOut() {
        if (this.options.timeLimit != 0 && Date.now() - this.timeStamp > this.options.timeLimit) {
            throw "time out for this file";
        }
    }

    checkOverSize(js_entity) {
        // 可以使用变量来决定大文件标准
        return this.options.sizeLimit == 0 || fs.lstatSync(js_entity.path).size < this.options.sizeLimit;
    }

    start() {
        this.source()
        this.getCallDep()
        this.sourceResOutputFormat();
        this.getStained();
        this.getSourceType();
        this.appInstanceData = this.appInstanceDataList.outputAppDataList()
        
        // 文件间依赖
        fs.writeFileSync(this.res_dir + "/refs.json", JSON.stringify(this.ref_res.map(e => ({ this: { name: e.this.name, file: e.this.file }, that: { name: e.that.name, file: e.that.file } }))));
        // echarts数据流
        fs.writeFileSync(this.res_dir + "/echarts_flow.json", JSON.stringify(this.echarts_flow_res));
        // 函数调用流/函数定义寻找结果
        fs.writeFileSync(this.res_dir + "/function_call_expt_reserved.json", JSON.stringify(this.functionCallDep));
        // 调试用数据流  
        fs.writeFileSync(this.res_dir + "/normal_flow.json", JSON.stringify(this.normal_flow_res));
        // 找不到回调函数
        fs.writeFileSync(this.res_dir + "/canNotHandle.json", JSON.stringify(this.canNOTHandle));
        // app实例数据
        fs.writeFileSync(this.res_dir + "/instance_data.json", JSON.stringify(this.appInstanceDataList.outputAppDataList()));
        // 调用流
        fs.writeFileSync(this.res_dir + '/call_flow.json', JSON.stringify(this.stained));
        // 收集信息类型和相关数据流
        fs.writeFileSync(this.res_dir + '/source_type.json', JSON.stringify((this.sourceType.timeCost = Date.now() - this.timeStartStamp, this.sourceType)));
        // source api调用统计数据
        fs.writeFileSync(this.res_dir + '/source_api.json', JSON.stringify(this.wxCallStat));
        // Page示例数据
        for (let f in this.jsfiles) {
            let res = this.jsfiles[f].outputPageInstanceData();
            res && fs.writeFileSync(this.file_res_dir + '/' + this.jsfiles[f].id + "_" + path.basename(this.jsfiles[f].path).replace(".js",".json"), JSON.stringify(res));
        }
        console.log(1)// 打断点语句
    }

    /**
     * 返回给定路径js文件的export对应的对象field
     */
    toExportsVar(target) {
        if (target in this.jsfiles) {
            return this.jsfiles[target].field.getModuleExportsVarEntity();
        }
    }

    /**
     * 返回app 实例
     */
    getAppInstance() {
        if (this.appjs in this.jsfiles) {
            return this.jsfiles[this.appjs].field.getAppInstanceVarEntity();
        }
    }

    /**
     * 返回page实例
     */
    getPageInstance(f) {
        if (f in this.jsfiles) {
            return this.jsfiles[f].getPageInstance();
        }
    }

    /**
     * 添加文件间依赖
     */
    add_file_dep(this_file, src_file) {
        if (this.jsfiles[this_file] && this.jsfiles[src_file]) {
            this.jsfiles[this_file].add_requires(src_file);
            this.jsfiles[src_file].add_required_by(this_file);
        }
    }

    source() {
        for (let f in this.jsfiles) {
            let js_entity = this.jsfiles[f];
            try {
                this.updateTimeStamp();
                if (this.checkOverSize(js_entity)) {
                    js_entity.build_dep();
                }
            } catch (e) {
                console.log(f + ": " + e);
            }
        }
        // 文件依赖分析
        for (let f in this.jsfiles) {
            this.jsfiles[f].field.createModuleRef();
        }
        // 消除分析顺序带来的影响，二次分析
        for (let f in this.jsfiles) {
            this.jsfiles[f].field.createModuleRef();
        }
        // 函数调用流分析
        for (let f in this.jsfiles) {
            this.functionCallDep.push({
                file: f,
                res: this.jsfiles[f].getFunctionCallDependence()
            });
        }
        // 构建source API数据流
        for (let f in this.jsfiles) {
            this.jsfiles[f].source();
            let js_flow_res = this.jsfiles[f].flow_res;
            js_flow_res.flow_count = js_flow_res.sources.length;

            this.flow_res.push(js_flow_res);
        }

        // 构建跨域变量数据流，包括 app instance和 page instance
        if (this.options.doInstance) {
            let AppInstanceDataListsOfPages = Object.values(this.jsfiles).map(e => e.appInstanceVars).filter(e => e.VarList.length > 0);
            this.appInstanceDataList.dealApp(AppInstanceDataListsOfPages);
        }

        // ui部分Source分析
        if (this.options.doUI) {
            for (let f in this.wxmlfiles) {
                this.wxmlfiles[f].getDom();
                this.wxmlfiles[f].source();
                let wxmlFlowRes = this.wxmlfiles[f].flow_res;
                wxmlFlowRes.flow_count = wxmlFlowRes.sources.length;
                // this.flow_res.push(wxmlFlowRes); // 会使结果多出来
                if (wxmlFlowRes.file in this.jsfiles) {
                    this.jsfiles[wxmlFlowRes.file].flow_res.flow_count += wxmlFlowRes.flow_count;
                    this.jsfiles[wxmlFlowRes.file].flow_res.sources.push(...wxmlFlowRes.sources);
                }
            }
        }
    }

    sourceResOutputFormat() {
        this.normal_flow_res = this.flow_res.map(e => {
            let flowOutput = e.sources.map(s => {
                s.source.file = e.file.replace(this.root, '');
                let api = s.source.api;
                let suffix = wx_api.suffix(api);
                return { source: s.source, flow: s.flow.map(e => (e.addSourceType(s.source, suffix, this.sourceType.fromVar).toNormalOutput())) }
            });
            return {
                file: e.file,
                flow_count: e.flow_count,
                flow: flowOutput
            }
        }).filter(e => e.flow.length > 0);

        // 后算echart，因为要先利用source信息匹配变量名
        this.echarts_flow_res = this.flow_res.map(e => {
            let flowWithNode = e.sources.reduce((pre, cur) =>
                (pre.concat(cur.flow.map(e => e.toNormalWithNode())))
                , []
            );
            return {
                file: e.file.replace(this.root, ""),
                nodes: gather_nodes(flowWithNode).map(n => n.toEchartsNode()),
                edges: gather_edges(flowWithNode)
            }
        }).filter(e => e.nodes.length + e.edges.length > 0);

        let n = { has_flow: this.flow_res.filter(e => e.sources.length > 0).map(e => e.file.split("/").pop()) };
        n.count = n.has_flow.length;
        this.flow_res.unshift(n)
    }
    getCallDep() {
        // 输出
        // int int int int int 
        let all = 0;
        let defined = 0;
        let skip = [];
        this.functionCallDep = this.functionCallDep.map(file => ({
            file: file.file,
            res: file.res.map(func => ({
                func_def: func.func_def,
                calls: func.calls.filter(call => {
                    let record = true;
                    let ArrayReserved = new RegExp(/.*\.?(unshift|shift|push|pop|map|find|reduce|forEach|filter|findIndex|indexOf|some|concat|slice|splice)/);
                    let StringReserved = new RegExp(/.*\.?(charAt|charCodeAt|substring|startsWith|endsWith|replace|replaceAll|split|toUpperCase)/);
                    let otherReserved = new RegExp(/.*\.?(toString|setData|then|hasOwnProperty|apply)/);
                    if (
                        call.callee.startsWith("wx")
                        || call.callee.startsWith("console")
                        || call.callee.startsWith("Object")
                        || call.callee.startsWith("Math")
                        || call.callee.startsWith("JSON")
                        || call.callee == "getApp"
                        || call.callee == "require"
                        || call.callee == "Page"
                        || call.callee == "App"
                    ) {
                        record = false;
                    } else if (
                        ArrayReserved.test(call.callee)
                        || StringReserved.test(call.callee)
                        || otherReserved.test(call.callee)
                    ) {
                        skip.push(call.callee);
                        record = false;
                    } else {
                        all++;
                        if (call.defined) defined++;
                    }
                    return record;
                })
            }))
        }));
        this.functionDetectionRate = [
            this.sourceStat.sourceCount,
            this.sourceStat.directlyFoundArgObject,
            this.sourceStat.tracebackFoundArgObject,
            this.sourceStat.directlyFoundSuccessCallbackFunction,
            this.sourceStat.tracebackFoundSuccessCallbackFunction,
        ].join();
    }

    /**
     * 获取调用流
     */
    getStained() {
        function traceBack(funcVar, res) {
            if (res) {
                if (res.visited.includes(funcVar.node.id)) {
                    return;
                } else {
                    res.visited.push(funcVar.node.id);
                }
            } else {
                res = { visited: [], funcs: [], calls: [], }
            }
            if (funcVar.calledByFunction) {
                for (let calledBy of funcVar.calledByFunction) {
                    let calledByFuncVar = calledBy.funcVar;
                    let calledByNode = calledBy.call.expr;
                    let target = funcVar.node.id < 0
                        ? calledByNode.toEchartsNodeAsCallee()
                        : funcVar.toEchartsNodeAsCallee();
                    if (typeof calledByFuncVar.toEchartsNodeAsCallee == "function") {
                        let s = calledByFuncVar.toEchartsNodeAsCallee();
                        res.calls.push({
                            source: s.name,
                            target: target.name,
                        });
                        res.funcs.some(e => e.name == String(calledByFuncVar.node.id)) || traceBack(calledByFuncVar, res);
                    } else {
                        // let virtualGlobalVar = { name: "__global__" + this.path.replace(this.app.root, ""), node: field.node };
                        let s = String(calledByFuncVar.node.id);
                        res.calls.push({
                            source: s,
                            target: target.name
                        });
                    }
                    funcVar.node.id < 0 && res.funcs.push(target);
                }
            }

            funcVar.node.id > 0 && res.funcs.push(funcVar.toEchartsNodeAsCallee());
            return res;
        }

        for (let file in this.stained) {
            let stainInAFile = this.stained[file];
            this.stained[file] = stainInAFile.map(sourceAPI => {
                let res = traceBack(sourceAPI);
                return {
                    stained: sourceAPI.getFullName(),
                    nodes: res.funcs,
                    edges: res.calls
                }
            })
        }
    }

    getSourceType() {
        for (let f in this.wxmlfiles) {
            this.sourceType.fromUI.push(this.wxmlfiles[f].source_type);
        }
    }

    /**
     * source api数量统计
     */
    recordSourceStat(calleeVar) {
        let dictItem = wx_api.getDictItem(calleeVar.getFullName());
        if (!dictItem) {
            console.log((api));
            return;
        }
        let api = dictItem.api;
        this.wxCallStat.source[api] || (this.wxCallStat.source[api] = { count: 0 });
        ++this.wxCallStat.source[api].count;
    }

    /**
     * source api 传输中加密行为记录
     */
    recordEncryptInSource(api, call) {
        this.wxCallStat.source[api].encrypt || (this.wxCallStat.source[api].encrypt = []);
        this.wxCallStat.source[api].encrypt.push({
            text: escodegen.generate(call.es_node),
            loc: call.loc,
            file: call.file
        });
    }

    /**
     * sink api数量统计
     */
    recordSinkStat(calleeVar) {
        let dictItem = wx_api.getDictItem(calleeVar.getFullName());
        if (!dictItem) {
            console.log((api));
            return;
        }
        let api = dictItem.api;
        this.wxCallStat.sink[api] || (this.wxCallStat.sink[api] = 0);
        ++this.wxCallStat.sink[api];
    }
    /**
     * 记录source api对应的var，后续分析调用流
     */
    recordStainedVar(funcVar) {
        let dictItem = wx_api.getDictItem(funcVar.getFullName());
        if (!dictItem) {
            console.log((api));
            return;
        }
        let api = dictItem.api;
        if (funcVar.getFullName().replace(api).startsWith("."))
            return;
        let shorPath = funcVar.file.replace(this.root, '');
        this.stained[shorPath] || (this.stained[shorPath] = []);
        this.stained[shorPath].some(e => e.getFullName() == funcVar.getFullName()) || this.stained[shorPath].push(funcVar);
    }
    /**
     * 记录source api的描述和所有的调用处
     */
    recordSourceTypeFromAPI(calleeVar, calleeNode, urlStrs) {
        let dictItem = wx_api.getDictItem(calleeVar.getFullName());
        if (!dictItem) {
            console.log((api));
            return;
        }
        let api = dictItem.api;
        api in this.sourceType.fromAPI || (this.sourceType.fromAPI[api] = { ill: dictItem.info_type_zh, ocr: [] });
        let rec = {
            id: calleeNode.id,
            file: calleeNode.file.replace(this.root, ''),
            loc: calleeNode.loc
        };
        // request的url
        urlStrs && urlStrs.length && (rec.targetUrls = urlStrs);
        this.sourceType.fromAPI[api].ocr.push(rec);
    }

     /**
     * 将数据流结果文件转化为便于标注的csv文件
     */
    getUnlabelCsv(){
        var csv_item = []
        this.normal_flow_res.map(file_res=>{
            file_res.flow.map(source_flow=>{
                let cur_source = source_flow.source
                let all_source_loc = ""
                let crossField = false;
                let crossFile = false;
                source_flow.flow.map(edge=>{
                    if(edge.from.fromSource){
                        all_source_loc = all_source_loc + "&" + edge.from.fromSource.loc.line
                    }
                    if(edge.crossField) crossField = true;
                    if(edge.crossFile) crossFile = true;
                    if(edge.to.sink) {
                        const new_item = {
                            "source_file":path.relative(this.root, file_res.file.replace(/\\/g, "/")),
                            "source":cur_source.api,
                            "source_loc": all_source_loc.slice(1),
                            "sink_file":path.relative(this.root,edge.to.file.replace(/\\/g, "/") ),
                            "sink": edge.to.name,
                            "sink_loc":edge.to.loc?edge.to.loc.line:"undefine",
                            "type":cur_source.type,
                            "cross_field": crossField,
                            "cross_file": crossFile,
                            "correct":"unlabel"
                        }
                        if(this.doInstance) new_item.instance_props = "None"
                        if(new_item.source_file !== new_item.sink_file){
                            new_item.cross_file = true;
                            new_item.cross_field = true;
                        }
                        else{
                            new_item.cross_file = false;
                        }
                        if(new_item.cross_file) new_item.cross_field = true;
                        csv_item.push(new_item)
                    }
                })

            })
        })

        let source = []
        let sink = []
        this.appInstanceData.definedData.map(df_data=>{
            let var_props = df_data.trueData.declaredName.split(".").slice(1)
            // 找Source
            df_data.writeShadows.forEach(ws=>{
                ws.writeAccess.forEach(wa=>{
                    wa.writeFlow.forEach(wf=>{
                        if(wf.from.fromSource) {
                            let new_source = wf.from.fromSource
                            new_source.var_props = var_props
                            new_source.var_props_type = "defineData"
                            source.push(new_source)
                        }
                    })
                })
            })
            // 找Sink
            df_data.readShadows.forEach(ws=> {
                ws.readAccess.forEach(wa => {
                    wa.readFlow.forEach(wf => {
                        if (wf.to.sink) sink.push({"api": wf.to.name, "loc": wf.to.loc,"var_props":var_props,"file":wf.to.file})
                    })
                })
            })
        })
        this.appInstanceData.dynamicDefinedData.find(dy_data=>dy_data.shadowObjectVar==="__object__getApp") &&
        this.appInstanceData.dynamicDefinedData.find(dy_data=>dy_data.shadowObjectVar==="__object__getApp").dynamicDefinedProps.map(dy_prop=>{
            let dy_props = dy_prop.propName.split(".").slice(2)
            dy_prop.writeShadows.forEach(ws=>{
                ws.writeAccess.forEach(wa=>{
                    wa.writeFlow.forEach(wf=>{
                        if(wf.from.fromSource) {
                            let new_source = wf.from.fromSource
                            new_source.var_props = dy_props
                            new_source.var_props_type = "dynamicDefinedData"
                            // new_source.file = ws.shadowVar.file
                            source.push(new_source)
                        }
                    })
                })
            })
            // 找Sink
            dy_prop.readShadows.forEach(ws=> {
                ws.readAccess.forEach(wa => {
                    wa.readFlow.forEach(wf => {
                        if (wf.to.sink) sink.push({"api": wf.to.name, "loc": wf.to.loc,"var_props":dy_props,"file":wf.to.file})
                    })
                })
            })

        })

        source.forEach(sc=>{
            sink.forEach(sk=>{
                const compare_length = Math.min(sc.var_props.length, sk.var_props.length)
                let isFlow = true
                for(let i = 1; i < compare_length; i++){
                    if(sc.var_props[i] !== sk.var_props[i]) isFlow = false
                }
                const new_item = {
                    "source_file":sc.file,
                    "source":sc.api,
                    "source_loc": sc.loc.line,
                    "sink_file":path.relative(this.root,sk.file.replace(/\\/g, "/")),
                    "sink": sk.api,
                    "sink_loc":sk.loc.line,
                    "type":sc.type +"__instanceConnection__",
                    // "instance_props":sc.var_props_type + ":" + sc.var_props.join(','),
                    "cross_field": true,
                    "cross_file": sc.file === path.relative(this.root,sk.file.replace(/\\/g, "/")),
                    "correct":"unlabel"
                }
                if(isFlow) csv_item.push(new_item)
            })
        })
        let title = []
        if(csv_item.length > 0) title = Object.keys(csv_item[0])
        let csvContent = '\ufeff' + title.join(',') + '\n'
        csv_item.forEach((item, index) => {
            let c = Object.values(item).join(',') + '\n'
            csvContent += c
        })
        fs.writeFileSync(this.res_dir + "\\label"+ Math.random() +".csv", csvContent)

        return "success"
    }
    getSource2SinkResult(){
        let res = []
        this.normal_flow_res.map(jsfile=>{
            const relative_path = jsfile.file.replace(this.root, "").replace(/\\/g, "/")
            // 每个文件数据流的分析结果
            let source2sink = {
                "source":[],
                "sink":[],
                "pairsOfSource2Sink":[]
            }

            jsfile.flow.map(f=>{
                if(f.source){
                    const source_name = f.source.api
                    if(source2sink.source.indexOf(source_name) === -1) source2sink.source.push(source_name)
                }
                
                let visited_node_content = []
                f.flow.map(edge=>{
                    visited_node_content.push(edge.from.name)
                    if(edge.to.sink){
                        if(source2sink.sink.indexOf(edge.to.name) === -1) source2sink.sink.push(edge.to.name)

                        source2sink.pairsOfSource2Sink.push({
                            "source":f.source.api,
                            "sink": edge.to.name,
                            "visitedContent": visited_node_content,
                            "uiString": f.source.type==="UI"?f.source.text:[]
                        })

                    }
                 })
            })
    
            // jsfile.flow.map(source_and_flow=>{
            //     let source_loc = []
            //     if(source_and_flow.source){
            //         const source = source_and_flow.source.api
            //         if(source2sink.source.indexOf(source) === -1) source2sink.source.push(source)
    
            //         if(source_and_flow.source.loc){
            //             source_loc = [source_and_flow.source.loc]
            //         }
            //         else {
            //             source_and_flow.flow.map(edge=>{
            //                 if(wx_api.isSourceAPI(edge.from.name)) source_loc.push(edge.from.loc)
            //             })
            //         }
            //     }
    
            //     source_and_flow.flow.map(edge=>{
            //         if(edge.to.sink) {
            //             if(source2sink.sink.indexOf(edge.to.name) === -1) source2sink.sink.push(edge.to.name)
    
            //             source2sink.pairsOfSource2Sink.push({
            //                 "source":source_and_flow.source.api,
            //                 "source_loc": source_loc,
            //                 "sink": edge.to.name,
            //                 "sink_loc":edge.to.loc?edge.to.loc.line:"undefine",
            //                 "ui_type": source_and_flow.source.type==="UI"?source_and_flow.source.text_unformat:[]
            //             })
            //         }
            //     })
            // })
    
            res.push({"file":relative_path,"source2sink":source2sink})
        })
        const save_path = path.join(this.res_dir , "analysis.json");
        fs.writeFileSync(save_path, JSON.stringify(res));
    }
}

class JsReserved {
    constructor() {
        this.reservedFuncList = [
            "String",
            "JSON",
        ];
    }
    /**
     * 给定一个变量名，判断是否属于js保留的api
     * 如果是，则返回一个不属于任何field的var实体
     */
    isReserved(name) { return this.reservedFuncList.includes(name); }
}

module.exports = {
    App

}