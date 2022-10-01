const fs = require("fs");
const logger = require("./logger");
const Js = require("./js_entity").Js;
const escodegen = require("escodegen");
const dataList = require("./crossFieldDataList").CrossFieldDataList;
const Wxml = require("../gui/wxml_entity").Wxml;
const path = require("path");
const wx_api = require('./wx_api');

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

function isLargeFile(js_entity) {
    let fileStat = fs.lstatSync(js_entity.path);
    // 可以使用变量来决定大文件标准
    return fileStat.size > (500 * 1024) || js_entity.lines > 2000;
}
class App {
    constructor(root, options) {
        this.root = root;
        // test
        this.ref_res = [];

        this.jsfiles = {};
        this.wxmlfiles = {};
        this.appjs =  path.join(this.root , "app.js");

        this.flow_res = [];
        this.normal_flow_res = [];
        this.echarts_flow_res = [];

        this.functionCallDep = [];

        this.lines = 0;

        this.appInstanceDataList = new dataList();

        this.res_dir = path.join(this.root, "___res___");
        this.file_res_dir = path.join(this.root , "___file-res___");
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

        //招不到定义的调用
        this.undefinedFunc = [];

        this.jsReserved = new JsReserved();

        this.timeStamp = Date.now();

        this.wxCallStat = {
            source: {},
            sink: {},
        };

        this.stained = {};

        this.sourceType = {};

        let defaultOptions = {
            // 是否分析大文件 >500kb 或超过3000行
            doLargeSize: true,
            // 是否分析UI组件和事件处理函数
            doUIAndEventHandler: true,
            // 是否分析实例数据读写流
            doInstanceData: true,
            // time out
            timeout: 20 * 1000
        }

        this.options = options ? Object.assign(defaultOptions, options) : defaultOptions;

        if (fs.existsSync(root)) {
            let q = [root];
            while (q.length > 0) {
                let sh = q.shift();
                sh = path.normalize(sh);
                if (fs.lstatSync(sh).isDirectory()) {
                    fs.readdirSync(sh).forEach(e => q.push(path.join(sh ,  e)));
                } else {
                    if (sh.endsWith(".js")) {
                        this.jsfiles[sh] = new Js(sh, this);
                        this.lines += this.jsfiles[sh].lines;
                    }
                    // console.log("<DEBUG>",sh)
                    const shw = sh.replace(".js",".wxml")
                    this.wxmlfiles[sh] = {wxml_entity: new Wxml(shw, this), exist:fs.existsSync(shw), done:false};
                }
            }
        }

        let file_list = fs.readdirSync(this.root);
        if (file_list.includes("app.json")) {
            try {
                this.pages = JSON.parse(fs.readFileSync(path.join(this.root, "app.json")).pages);
            } catch (e) {
                logger.log("app json error")
            }
        }

    }

    updateTimeStamp() {
        this.timeStamp = Date.now();
    }

    checkTimeOut() {
        if (Date.now() - this.timeStamp > this.options.timeout) {
            throw "time out for this file";
        }
    }

    start() {
        this.source()
        this.getCallDep()
        this.sourceResOutputFormat();
        this.getStained();
        this.appInstanceData = this.appInstanceDataList.outputAppDataList()
        // fs.writeFileSync("./test-files/refs.json", JSON.stringify(this.ref_res));
        // fs.writeFileSync("./test-files/echarts_flow.json", JSON.stringify(this.echarts_flow_res));
        // fs.writeFileSync("./test-files/normal_flow.json", JSON.stringify(this.normal_flow_res));


        // 文件间依赖
        fs.writeFileSync(path.join(this.res_dir, "refs.json"), JSON.stringify(this.ref_res.map(e => ({ this: { name: e.this.name, file: e.this.file }, that: { name: e.that.name, file: e.that.file } }))));
        // echarts数据流
        fs.writeFileSync(path.join(this.res_dir,"echarts_flow.json"), JSON.stringify(this.echarts_flow_res));
        // 函数调用流/函数定义寻找结果
        fs.writeFileSync(path.join(this.res_dir ,"function_call_expt_reserved.json"), JSON.stringify(this.functionCallDep));
        // 调试用数据流  
        fs.writeFileSync(path.join(this.res_dir , "normal_flow.json"), JSON.stringify(this.normal_flow_res));
        // 找不到回调函数
        fs.writeFileSync(path.join(this.res_dir , "canNotHandle.json"), JSON.stringify(this.canNOTHandle));
        // app实例数据
        fs.writeFileSync(path.join(this.res_dir , "instance_data.json"), JSON.stringify(this.appInstanceDataList.outputAppDataList()));
        // 调用流
        fs.writeFileSync(path.join(this.res_dir , 'call_flow.json'), JSON.stringify(this.stained));
        // 收集信息类型
        fs.writeFileSync(path.join(this.res_dir , 'source_type.json'), JSON.stringify(this.sourceType));
        // source api数据
        fs.writeFileSync(path.join(this.res_dir , 'source_type.json'), JSON.stringify(this.wxCallStat));
        // 文件信息
        for (let f in this.jsfiles) {
            let res = this.jsfiles[f].outputPageInstanceData();
            res && fs.writeFileSync(path.join(this.file_res_dir , JSON.stringify(this.jsfiles[f].id)), JSON.stringify(res));
        }

        console.log(1)
    }

    /**
     * 返回给定路径js文件的export对应的对象field
     */
    toExportsVar(target) {
        if (target in this.jsfiles) {
            return this.jsfiles[target].field.getModuleExportsVarEntity();
        }
    }
    toAppVar() {
        if (this.appjs in this.jsfiles) {
            return this.jsfiles[this.appjs].field.getAppInstanceVarEntity();
        }
    }

    add_file_dep(this_file, src_file) {
        if (this.jsfiles[this_file] && this.jsfiles[src_file]) {
            this.jsfiles[this_file].add_requires(src_file);
            this.jsfiles[src_file].add_required_by(this_file);
        }
    }

    source() {
        // 引用分析
        for (let f in this.jsfiles) {
            let js_entity = this.jsfiles[f];
            this.updateTimeStamp();
            try {
                this.options.doLargeSize
                    ? js_entity.build_dep()
                    : isLargeFile(js_entity) || js_entity.build_dep();
            } catch (e) {
                console.log(f + ": " + e);
            }
        }
        // 文件依赖分析
        for (let f in this.jsfiles) {
            this.jsfiles[f].field.createModuleRef();
        }
        // 消除分析顺序带来的影响
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
            js_flow_res.flow_count = this.jsfiles[f].flow_res.sources.length;
            this.flow_res.push(js_flow_res);
        }

        // ui部分Source分析
        for(let f in this.wxmlfiles){
            if (this.wxmlfiles[f].exist) {
                this.wxmlfiles[f].wxml_entity.source();
                this.flow_res.push(this.wxmlfiles[f].wxml_entity.flow_res);
            }
        }

        if (this.options.doInstanceData) {
            // 构建跨域变量数据流，包括 app instance和 page instance
            let AppInstanceDataListsOfPages = Object.values(this.jsfiles).map(e => e.appInstanceVars).filter(e => e.VarList.length > 0);
            this.appInstanceDataList.dealApp(AppInstanceDataListsOfPages);
            console.log(1)
        }
    }

    sourceResOutputFormat() {
        let that = this;
        this.normal_flow_res = this.flow_res.map(e => {
            let flowOutput = e.sources.map(s => {
                s.source.file = e.file.replace(that.root, '').replace(/\\/g, '/');
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
                file: e.file.replace(this.root, "").replace(/\\/g, "/"),
                nodes: gather_nodes(flowWithNode).map(n => n.toEchartsNode()),
                edges: gather_edges(flowWithNode)
            }
        }).filter(e => e.nodes.length + e.edges.length > 0);

        console.log(this.echarts_flow_res.length)

        let n = { has_flow: this.flow_res.filter(e => e.sources.length > 0).map(e => e.file.split("\\").pop()) };
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

    getStained() {
        function traceBack(funcVar, res) {
            res || (res = {
                funcs: [],
                calls: [],
            });
            res.funcs.push(funcVar.toJson());
            if (funcVar.calledByFunction) {
                for (let calledBy of funcVar.calledByFunction) {
                    let calledByFuncVar = calledBy.funcVar;
                    if (typeof calledByFuncVar.toJson == "function") {
                        res.calls.push({
                            source: calledByFuncVar.toJson(),
                            target: funcVar.toJson()
                        });
                        res.funcs.some(e => e.id == calledByFuncVar.node.id) || traceBack(calledByFuncVar, res);
                    } else {
                        res.calls.push({
                            source: calledByFuncVar.name,
                            target: funcVar.toJson()
                        });
                    }
                }
            }
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

    recordSourceStat(callee) {
        this.wxCallStat.source[callee.getFullName()] || (this.wxCallStat.source[callee.getFullName()] = 0);
        ++this.wxCallStat.source[callee.getFullName()];
    }

    recordSinkStat(callee) {
        this.wxCallStat.sink[callee.getFullName()] || (this.wxCallStat.sink[callee.getFullName()] = 0);
        ++this.wxCallStat.sink[callee.getFullName()];
    }

    recordStained(funcVar) {
        this.stained[funcVar.file] || (this.stained[funcVar.file] = []);
        this.stained[funcVar.file].some(e => e.getFullName() == funcVar.getFullName()) || this.stained[funcVar.file].push(funcVar);
    }
}

class JsReserved {
    constructor() {
        this.reservedFuncList = [
            "String"
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