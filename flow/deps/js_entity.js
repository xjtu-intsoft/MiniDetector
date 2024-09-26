const Field = require("./field").Field;
const AST = require("./ast").AST;
const wx_api = require("./wx_api");
const fs = require("fs");
const logger = require("./logger");
const DataList = require("./crossFieldDataList").CrossFieldDataList;
const path = require("path");

// GUI
// const WxmlEntity = require("../gui/WxmlEntity").WxmlEntity;

class Js {
    static JSID = 0;
    constructor(path, app) {
        this.id = Js.JSID++;
        this.app = app;
        this.path = path;
        let newAST = new AST(path);
        this.ast = newAST.ast;
        this.size = fs.lstatSync(path).size;
        this.lines = 0;
        newAST.es_ast && (this.lines = newAST.es_ast.loc.end.line);
        this.require = [];
        this.export = [];
        this.requires = [];
        this.required_by = [];

        this.field = new Field(this.app, this.path, this.ast, null);
        this.field.index();
        this.flow_res = {
            file: this.path,
            flow_count: 0,
            sources: []
        }

        // 存储app instance的变量读写，会合并到app实体的cross field var 上
        // 写与source相关，读无限制
        this.appInstanceVars = new DataList();
        // 存储本文件page instance的变量读写
        // 读写都没有限制，需要加限制也可以改
        this.pageInstanceVars = new DataList();

    }
    getPageInstance() {
        return this.field.pageInstance;
    }
    add_requires(f) {
        if (!this.requires.includes(f))
            this.requires.push(f)
    }
    add_required_by(f) {
        if (!this.required_by.includes(f))
            this.required_by.push(f)
    }
    build_dep() {
        console.log("start:", this.path);
        this.field.build();
    }
    /**
     * 找数据流分析起点
     * 只写了API的部分，事件处理函数还没写
     * 事件处理函数的参数直接调用param.flow就可以输出数据流
     */
    source() {
        let res = [];
        let wx_calls = [];
        let returnValueWxAPIDone = [];

        let dealInstanceData = (var_entity) => {
            // 跨域变量写，只抽source相关
            // app instance data
            if (this.app.options.doInstance) {
                let writeAppInstanceDataRes = var_entity.flowBeforeWriteSatisfying(dep => dep.from.getAllAssignsTo().some(e => e.isAppInstanceData));
                this.appInstanceVars.addWriteForFile(writeAppInstanceDataRes);
                // page instance data
                let writePageInstanceDataRes = var_entity.flowBeforeWriteSatisfying(dep => dep.from.getAllAssignsTo().some(e => e.isPageInstanceData));
                pageInstanceVarsTemp && pageInstanceVarsTemp.addWriteForFile(writePageInstanceDataRes);
            }
        }

        let selectCall = (selector) => all_fields.reduce((preF, curF) =>
            preF.concat(
                curF.calls.reduce((preC, curC) => {
                    let v = curC.callee.find(e => e.var_entity && e.var_entity.getFullName() && selector(e.var_entity.getFullName()));
                    return v ?
                        preC.concat({
                            callee: v,
                            args: curC.args,
                            expr: curC.expr
                        }) :
                        preC;
                }, [])
            ), []
        );


        let forSourceCall = (call) => {
            let calleeVar = call.callee.var_entity;
            let calleeNode = call.callee.node;
            let urlStrs = [];
            let api_item = wx_api.getDictItem(calleeVar.getFullName());

            this.app.recordSourceStat(calleeVar);
            this.app.recordStainedVar(calleeVar);

            this.app.nowSourcing = calleeVar;

            if ("return_value" in api_item
                // 一个页面中，对返回值类型的wxAPI的数据流会全部被记录在同一个Var中（即，将API本身看成一个变量），所以只分析对应的Var一次
                &&
                !returnValueWxAPIDone.includes(calleeVar.getFullName())
            ) {

                // if ("wx.getStorageSync" == calleeVar.getFullName())
                //     console.log(1)
                returnValueWxAPIDone.push(calleeVar.getFullName());
                let calleeRes = calleeVar.flow();
                // 数据流标定文件用 
                if (calleeRes.length > 0) {
                    for (let calleeDep of calleeRes) {
                        calleeDep.fieldCross = false;
                        calleeDep.fileCross = false;
                        // 跨作用域
                        if (calleeDep.from.field.id !== calleeDep.to.field.id) {
                            calleeDep.fieldCross = true;
                        }
                        // 跨文件
                        if (calleeDep.from.field.file !== calleeDep.to.field.file) {
                            calleeDep.fileCross = true;
                        }
                    }
                    this.flow_res.sources.push({
                        source: {
                            api: calleeVar.getFullName(),
                            type: "API:return-value",
                            loc: call.callee.node.loc
                        },
                        flow: calleeRes
                    });
                }

                // 处理跨域变量
                dealInstanceData(calleeVar);
            }
            if ("success_callback_parameters" in api_item) {
                let directlyFound = false;
                let tracebackFound = false;

                // 统计应具有回调函数的wxcall
                ++this.app.sourceStat.sourceCount;

                if (call.args.length == 1) {
                    let argVar = call.args[0].visit_res.var_entity;
                    let arg_objs = [];
                    let flowsOfThisAPI = [];

                    let filterFunc = e => e.obj_field.declared_vars.some(e => e.name == "success" || e.name == "complete");

                    // 考虑参数可能是一个函数的情况，查返回值
                    if (call.args[0].visit_res.node.parent.type == "CallExpression"
                        // 考虑到visitCall返回的是callee的var和对应的member/identifier，需要通过判断父节点是否是与本call相异的call
                        &&
                        call.args[0].visit_res.node.parent.id != call.expr.id
                    ) {
                        let funcFields = argVar.getFunctionFields();
                        if (funcFields.length == 0) {
                            let tracebackRes = argVar.getFunctionFieldsTracebackParam();
                            funcFields.push(...tracebackRes);
                        }
                        // 扁平funcFields的返回值
                        let temp = funcFields.reduce((pre, cur) =>
                            cur.return_value ?
                            pre.concat(cur.return_value.map(e => e.var_nodes)
                                .reduce((pre, cur) =>
                                    pre.concat(cur.map(e => e.var_entity)), [])) :
                            pre, [])
                        // 对返回值找满足条件的对象参数
                        temp = temp.reduce((pre, cur) =>
                            pre.concat(cur.getVarSatisfying(filterFunc))
                            .concat(cur.tracebackParams(filterFunc)), []);

                        arg_objs.push(...temp);
                    }

                    // 直接找参数
                    arg_objs.push(...argVar.getRecordValue(filterFunc));
                    arg_objs.length && ++this.app.sourceStat.directlyFoundArgObject;

                    // 如果没找到，回溯调用链
                    if (arg_objs.length == 0) {
                        arg_objs.push(...argVar.tracebackParams(filterFunc));
                        arg_objs.length && ++this.app.sourceStat.tracebackFoundArgObject;
                    }

                    for (let arg_obj of arg_objs) {
                        let arg_obj_field = arg_obj.obj_field;
                        let callbackProps = arg_obj_field.declared_vars.filter(e => e.name == "success" || e.name == "complete");
                        // 直接找函数定义
                        for (let callbackProp of callbackProps) {
                            let successCallbackFunctionFields = callbackProp.getFunctionFields();

                            // 统计直接找到函数定义
                            directlyFound = directlyFound || successCallbackFunctionFields.length > 0;

                            // 如果没找到，尝试回溯参数
                            if (successCallbackFunctionFields.length == 0) {
                                let tracebackRes = callbackProp.getFunctionFieldsTracebackParam();
                                successCallbackFunctionFields.push(...tracebackRes);

                                // 统计回溯找到函数定义
                                tracebackFound = tracebackFound || successCallbackFunctionFields.length > 0;

                            }
                            for (let func_field of successCallbackFunctionFields) {
                                if (func_field.node.children.length > 1) {
                                    let param = func_field.declared_vars[0];
                                    // 数据流标定文件用 
                                    if (param) param.node.fromSource = {
                                        "api": calleeVar.getFullName(),
                                        "loc": call.expr.loc,
                                        "type": "API:callback",
                                        "file": path.relative(this.app.root, calleeVar.file)
                                    };
                                    param && res.push(param);

                                    // 为参数添加sourceinfo
                                    param.node.sourceInfo = calleeNode.toEchartsNode();

                                    let flow_res = func_field.getParamFlow(param);
                                    flowsOfThisAPI.push(...flow_res);

                                    // 处理跨域变量
                                    dealInstanceData(param);
                                } else {
                                    logger.log("callback has no params:", calleeVar.getFullName(), this.path, JSON.stringify(arg_obj_field.node.loc));
                                }
                            }
                        }

                        // request url
                        let urlProp = arg_obj_field.declared_vars.find(e => e.name == "url");
                        if (urlProp) {
                            urlStrs.push(...urlProp.getRecordValue(e => e.node.type == "Literal").map(e => e.name));
                        }
                    }
                    // 数据流标定文件用 
                    for (let calleeDep of flowsOfThisAPI) {
                        calleeDep.fieldCross = false;
                        calleeDep.fileCross = false;
                        // 跨作用域
                        if (calleeDep.from.field.id !== calleeDep.to.field.id) {
                            calleeDep.fieldCross = true;
                        }
                        // 跨文件
                        if (calleeDep.from.field.file !== calleeDep.to.field.file) {
                            calleeDep.fileCross = true;
                        }
                    }

                    let flowRes = {
                        source: {
                            api: calleeVar.getFullName(),
                            loc: call.expr.loc,
                            type: "API:callback"
                        },
                        flow: flowsOfThisAPI
                    }
                    urlStrs.length && (flowRes.source.targetUrls = urlStrs);
                    this.flow_res.sources.push(flowRes);
                }

                // 统计
                directlyFound
                    ?
                    ++this.app.sourceStat.directlyFoundSuccessCallbackFunction :
                    (tracebackFound && ++this.app.sourceStat.tracebackFoundSuccessCallbackFunction);
                // 未找到回调函数
                if (!(directlyFound || tracebackFound)) {
                    this.app.canNOTHandle.push({
                        api: calleeVar.getFullName(),
                        file: call.expr.file.replace(/\\/g, "/"),
                        loc: call.expr.loc.line
                    });
                }
            }

            this.app.recordSourceTypeFromAPI(calleeVar, calleeNode, urlStrs);
        }

        let forSinkCall = (call) => {
            // 记录sink调用次数
            let calleeVar = call.callee.var_entity;
            this.app.recordSinkStat(calleeVar);
        }

        let getInstanceDataFlow = () => {
            // appinstance
            if (this.field.appInstance && this.field.appInstance.getPropertiesAfter()) {
                for (let AppInstanceDataProp of this.field.appInstance.getPropertiesAfter()) {
                    let readRes = AppInstanceDataProp.flowOfReadThisVar();
                    this.appInstanceVars.addReadForFile(readRes);
                }
            }

            // pageInstance
            if (this.field.pageInstance && this.field.pageInstance.getPropertiesAfter()) {
                for (let piv of this.field.pageInstance.getPropertiesAfter()) {
                    let readRes = piv.flowOfReadThisVar(); //赋值给其他变量
                    pageInstanceVarsTemp.addReadForFile(readRes);
                }
                this.pageInstanceVars.dealApp([pageInstanceVarsTemp]);
            }
        }

        // 如果是页面文件，标记所有page instance 变量
        let pageInstanceVarsTemp;
        if (this.app.options.doInstance && this.field.pageInstance && this.field.pageInstance.getPropertiesAfter()) {
            this.field.pageInstance.getPropertiesAfter().forEach(e => e.isPageInstanceData = true);
            pageInstanceVarsTemp = new DataList();
        }

        // 找所有wx.*的api调用
        let all_fields = this.field.getAllSubFields(e => e.node.id > 0);
        for (let field of all_fields) {
            let s = field.calls.map(c => {
                let v = c.callee.find(e => e.var_entity && e.var_entity.getFullName() && e.var_entity.getFullName().startsWith("wx.") && e.var_entity.getFullName().split(".").length == 2);
                if (v) return {
                    callee: v,
                    args: c.args,
                    expr: c.expr
                };
            }).filter(e => e !== undefined);
            wx_calls = wx_calls.concat(s);
        }

        // 找所有source调用
        let sourceCalls = selectCall(wx_api.isSourceAPI);
        let sinkCalls = selectCall(wx_api.isSinkAPI);

        for (let call of sourceCalls) {
            forSourceCall(call);
        }
        for (let call of sinkCalls) {
            forSinkCall(call);
        }

        // 统计wx调用总数
        this.app.sourceStat.wx_all += wx_calls.length;
        this.wxcalls > -1 || (this.wxcalls = 0)
        this.wxcalls += wx_calls.length;

        // instance数据流分析
        this.app.options.doInstance && getInstanceDataFlow();
    }



    getFunctionCallDependence() {

        let pushCalledByFunction = (fieldOfCalledFunc, varOfCallerFunc, call) => {
            fieldOfCalledFunc.calledByFunction || (fieldOfCalledFunc.calledByFunction = []);
            fieldOfCalledFunc.calledByFunction.some(e => e.funcVar.node.id == fieldOfCalledFunc.node.id) ||
                fieldOfCalledFunc.calledByFunction.push({
                    funcVar: varOfCallerFunc,
                    call: call
                });
        }

        let dealCalls = (funcField, funcVar) => {
            let res = [];
            // 对funcField中所有的调用
            funcField.calls.forEach(e => {
                for (let callee_var_node of e.callee) {
                    let calleeVar = callee_var_node.var_entity;
                    let calleeName = calleeVar.getFullName() ?
                        calleeVar.getFullName() :
                        calleeVar.name;
                    let ResultObject = {
                        callee: calleeName,
                        call_expr_loc: callee_var_node.node.loc,
                    };
                    if (calleeName.startsWith("wx.")) {
                        pushCalledByFunction(calleeVar, funcVar, e); // funcVar一般为wx.
                        ResultObject.defined = true;
                        res.push(ResultObject);
                    } else {
                        // 找这个var引用的函数实体
                        let funcFieldRes = calleeVar.getFunctionFields();
                        funcFieldRes.forEach(funcField => {
                            pushCalledByFunction(funcField.fieldVar, funcVar, e); // funcVar一般为__function__
                        });
                        ResultObject.defined = funcFieldRes.length > 0;
                        res.push(ResultObject);
                    }
                }
            });
            return res;
        }

        let res = [];
        // 只有实际存在的作用域才可能找到函数定义
        let allFields = this.field.getAllSubFields(e => e.node.id > 0)
        for (let field of allFields) {
            if (field.node.type == "Script") {
                // 构造虚拟的表示全局的变量，不属于任何作用域
                let virtualGlobalVar = {
                    name: "__global__" + this.path.replace(this.app.root, ""),
                    node: field.node
                };
                res.push({
                    func_def: virtualGlobalVar.name,
                    calls: dealCalls(field, virtualGlobalVar)
                })
            }
            for (let v of field.declared_vars) {
                if (v.name.startsWith("__function__")) {
                    let funcField = v.obj_field;
                    let inAFunction = dealCalls(funcField, v);
                    res.push({
                        func_def: v.name,
                        calls: inAFunction
                    })
                }
            }
        }
        return res;
    }

    outputPageInstanceData() {
        let res = this.pageInstanceVars.outputAppDataList();
        if (res.definedData.length + res.dynamicDefinedData.length > 0) return res;
    }
}

module.exports = {
    Js
}