const escodegen = require("escodegen");
const logger = require("./logger");
const wx_api = require("./wx_api");
/**
 * 在field.visit中访问的节点类型
 */
const VISIT_TYPE_LIST = [
    "ObjectExpression",
    "FunctionExpression",
    "FunctionDeclaration",
    "MemberExpression",
    "VariableDeclaration",
    "SequenceExpression",
    "LogicalExpression",
    "BinaryExpression",
    "CallExpression",
    "AssignmentExpression",
    "Property",
    "ConditionalExpression",
    "UnaryExpression",
    "UpdateExpression",
    "IfStatement",
    "ExpressionStatement",
    "ReturnStatement",
    "ForStatement",
    "ForInStatement",
    "ForOfStatement",
    "WhileStatement",
    "DoWhileStatement",
    "TryStatement",
    "SwitchStatement",
    // "BlockStatement",
];
/**
 * 给定根路径、本文件路径和目标文件的相对路径，返回目标文件的绝对路径
 */
function toAbsolutePath(root, this_path, that_path) {
    if (root && this_path && that_path) {
        let this_l = this_path.split("/");
        if (that_path.startsWith("/"))
            return root + that_path;
        let that_l = that_path.split("/");
        this_l.pop();
        for (let i of that_l) {
            if (i == "..") {
                this_l.pop();
            }
        }
        let a = [...this_l, ...(that_l.filter(e => e != ".." && e != "."))].join("/") + (that_path.endsWith(".js") ? "" : ".js");
        return a;
    }
}
class Field {
    static sp_count = 1;
    static FieldID = 0;
    constructor(app, file, node, parentField) {
        this.id = Field.FieldID++;
        this.app = app;
        this.entity_type = "Field";
        this.file = file;
        this.shortFile = this.file.replace(this.app.root, '').replace(/\\/g, '/');
        this.node = node;
        this.node.entity = this;
        this.subFields = [];
        this.parentField = parentField;
        if (parentField)
            parentField.subFields.push(this);

        // fieldVar的obj_field是this
        this.fieldVar;

        /**
         * 全局的可以加到app.js的field内，这个field小程序内全部的js文件都可以访问，可以预先定义global data，getApp等实体
         * 对于任何特殊变量、特殊方法的值都可以将其通过var进行扩展，将其实际引用的函数体或者变量域加入find ref的引用范围
         */
        this.declared_vars = [];

        // 本《函数》作用域所有的函数调用
        this.calls = [];

        // 文件field
        if (this.node.type == "Script") {
            // 初始化保留变量
            this.setReservedVar();

            // 需要进行ref构建的var列表
            this.export_comp = [];
        }


        // 如果本field是函数field，保存参数对应的数据流
        this.paramFlowCache;

    }
    /**
     * 初始化保留变量，即wx或js特有的变量
     */
    setReservedVar() {
        let initAndPushReserved = (name) => {
            let v = new Var(this.file, this, name, { type: "reserved", id: -(Var.sp_count++) });
            v.reserved = true;
            this.declared_vars.push(v);
            return v;
        }
        let existCall = (name) => {
            return this.node.traverse(e => e.type == "Identifier" && e.parent.type == "CallExpression" && escodegen.generate(e.es_node) == name, true);
        }

        initAndPushReserved("wx");
        initAndPushReserved("console");
        initAndPushReserved("require");

        let moduleVar = initAndPushReserved("module");
        let moduleExportsVar = this.getVarEntityFromField({ raw: "module.exports", split: ["module", "exports"] }, true, moduleVar);
        let exportsVar = initAndPushReserved("exports");
        exportsVar.setObjField(moduleExportsVar[0].obj_field);


        existCall("Page") && initAndPushReserved("Page");
        existCall("App") && initAndPushReserved("App");
        existCall("getApp") && initAndPushReserved("getApp");

    }
    /**
     * 返回文件field
     */
    getRootField() {
        let cur = this;
        while (cur.parentField) {
            cur = cur.parentField;
        }
        return cur;
    }
    /**
     * 返回函数级别作用域，即函数field 或 文件field
     */
    toFunctionField() {
        let cur = this;
        while (cur) {
            if (["FunctionExpression", "Script", "FunctionDeclaration"].includes(cur.node.type)) {
                return cur;
            }
            cur = cur.parentField;
        }
        return cur;
    }
    /**
     * 返回需要后续分析的作用域，包括函数、文件、对象定义作用域
     */
    getPendingResolveField() {
        let cur = this;
        while (cur) {
            if (["FunctionExpression", "Script", "FunctionDeclaration", "ArrowFunctionExpression", "ObjectExpression"].includes(cur.node.type)) {
                return cur;
            }
            cur = cur.parentField;
        }
        return cur;
    }
    /**
     * 给定实参索引，返回形参
     */
    getParamVars(argIndex) {
        let paramVars = [];
        let paramIndex = this.node.es_node.id ? argIndex + 1 : argIndex;
        let param = this.node.children[paramIndex];
        if (param && param.type == "Identifier") {
            // 按名查找形参的var实体
            let t = this.declared_vars.find(e => e.name == escodegen.generate(param.es_node));
            t && paramVars.push(t);
        }
        let arguments_var = this.declared_vars.find(e => e.name == "arguments");
        if (arguments_var) {
            let arguments_index = String(argIndex);
            let arguments_used = arguments_var.getObjFieldDeclaredVar(e => e.name == arguments_index);
            arguments_used && paramVars.push(arguments_used);
        }
        return paramVars;
    }
    /**
     * 给定形参的var，从缓存返回其数据流
     */
    getParamFlow(paramVar, done) {
        done || (done = { nodeDone: [], funcDone: [] });
        this.paramFlowCache || (this.paramFlowCache = {});
        // 先找缓存
        if (paramVar.node.id in this.paramFlowCache) {
            return this.paramFlowCache[paramVar.node.id];
        } else {
            let flow = paramVar.flow(done);
            // 缓存形参的数据流
            this.paramFlowCache[paramVar.node.id] = flow;
            return flow;
        }
    }
    /**
     * 对给定变量名搜索其对应的var实体
     * outer为true则搜索上层作用域
     * var_entity参数指定初始的搜索var实体，如果没有这个参数，则根据name中的主变量在field的声明变量中搜索
     */
    getVarEntityFromField(name, outer_field, var_entity, branch, branch_id) {
        if (this.app.jsReserved.isReserved(name.raw)) {
            let reservedVar = new Var(this.file, this, name.raw, { type: "--reserved--", id: -(Var.sp_count++) })
            return [reservedVar];
        }
        // 将this删去，然后逐层寻找定义
        if (name.raw.startsWith("this.")) {
            name = Object.assign(name, { raw: name.raw.replace("this.", ""), split: name.split.slice(1) });
        }
        // 如果是对象属性赋值的右值，则跳出对象的所在的作用域找
        // 用来避免 {
        //     prop:prop
        // }
        // 的情况
        if (name.inObj && this.parentField) {
            name.inObj = false;
            return this.parentField.getVarEntityFromField(name, true, var_entity, branch, branch_id);
        }
        // 找主变量
        var_entity || (var_entity = this.declared_vars.find(e => e.name == name.split[0]));
        if (var_entity) {
            // 找属性
            let var_res = var_entity.getPropertyVar(name.split, branch, branch_id);
            if (var_res && var_res.length > 0) {
                return var_res;
            } else {
                // this.getRootField().skip_vars.push(name.raw.length > 70 ? (name.raw.slice(0, 50) + "..." + name.raw.slice(name.raw.length - 20)) : name.raw)
            }
        }
        else if (outer_field && this.parentField)
            return this.parentField.getVarEntityFromField(name, true, var_entity, branch, branch_id);
    }
    /**
     * 对外接口，返回module.exports对应的var实体
     */
    getModuleExportsVarEntity() {
        let res = this.declared_vars.find(e => e.name == "module");
        if (res) {
            let cur = res.getObjFieldDeclaredVar(e => e.name == "exports");
            if (cur) {
                return cur;
            }
        }
    }
    /**
     * 对外接口，返回App对应的var实体
     */
    getAppInstanceVarEntity() {
        let res = this.declared_vars.find(e => e.name == "App");
        if (res)
            return res;
    }
    /**
     * 为引用的文件添加依赖
     * 检查“占位”的变量(__object__require/__object__getApp)的values所保存的field，如果与引用源的具有相同的属性，就创建一个ref
     */
    createModuleRef() {
        if (this.export_comp.length > 0) {
            this.export_comp = this.export_comp
                .map(e => {
                    let thatObjVar;
                    let v = e.src_var.getObjVarByAssign();
                    if (v.length > 1) {
                        logger.log("uncaught export:", e.this_var.file, "require", e.src_var.file);
                    } else if (v.length == 1) {
                        thatObjVar = v[0];
                    } else {
                        thatObjVar = e.src_var;
                    }
                    return {
                        src_var: thatObjVar,
                        this_var: e.this_var
                    }
                })
                .filter(e => e.src_var);


            let addRefs = (tf, sf) => {
                if (tf.refs.length == 0) {
                    sf.refed_by.push(tf);
                    tf.refs.push(sf);
                    this.app.ref_res.push({
                        this: tf,
                        that: sf
                    });
                }
            }

            let single_var = (this_var, src_var) => {
                let this_vars = this_var.getObjVarByAssign();
                let src_vars = src_var.getObjVarWithRefs();
                for (let this_var of this_vars) {
                    for (let src_var of src_vars) {
                        addRefs(this_var, src_var);
                        if (this_var.obj_field && src_var.obj_field) {
                            single_field(this_var.obj_field, src_var.obj_field);
                        }
                    }
                }

            }
            let single_field = (this_field, src_field) => {
                for (let tf of this_field.declared_vars) {
                    for (let sf of src_field.declared_vars) {
                        if (tf.name == sf.name && tf.name != "this") {
                            addRefs(tf, sf);
                            single_var(tf, sf);
                        }
                    }
                }
            }
            this.export_comp.forEach(e => single_var(e.this_var, e.src_var));
        }
    }
    /**
     * 遍历所有节点创建索引
     */
    index() {
        let queue = [this.node];
        while (queue.length > 0) {
            let e = queue.shift();
            // 如果在_init中生成了新的field，就不再遍历其子节点
            if (!this._index(e))
                for (let c of e.children) {
                    queue.push(c);
                }
        }
    }
    /**
     * 根据节点类型，为本field添加索引，即将声明的变量和属性添加到this.declared_vars中，同时为object、function添加新的field
     * 如果生成了新的field，就向init返回新的field，通知其不需要再遍历这个field下的子节点
     * 对于生成了新的field的节点类型，为了防止无限递归，需要判断node是否是本field的头节点
     */
    _index(node) {
        let new_field;

        /**
         * 创建新作用域
         */
        let createNewFieldAndIndex = (node) => {
            new_field = new Field(this.app, this.file, node, this);
            new_field.index();
            return new_field;
        };


        if (node.type == "ForStatement" || node.type == "ForInStatement"
            || node.type == "ForOfStatement" || node.type == "WhileStatement"
            || node.type == "DoWhileStatement") {
            if (this.node.id != node.id) {
                createNewFieldAndIndex(node);
            }

        } else if (node.type == "ObjectExpression") {
            /**
             * 创建新的子field，在子field中调用index
             */
            if (this.node.id == node.id) {
                /**
                 * 新增: 访问this.val时，会将this删去,通过val逐层向外寻找定义
                 */
                // 在父作用域找不到this定义时，初始化this变量
                // 避免在
                // this.setData({
                //     data:this.another_data
                // })
                // 中的this.another_data的this挂错位置
                // 不是很严格的处理方式，没有用到Page/App函数的信息
                let res = this.getVarEntityFromField({ raw: "this", split: ["this"] }, true);
                if (!res || res.length == 0) {
                    let thisVar = new Var(this.file, this, "this", { type: "dynamic", id: -(Var.sp_count++) });
                    this.declared_vars.push(thisVar);

                    // 添加setdata变量
                    if (!this.getRootField().declared_vars.some(e => e.name == "App")) {
                        let setdataVar = new Var(this.file, this, "setData", { type: "--setdata--", id: -(Var.sp_count++) });
                        this.declared_vars.push(setdataVar);
                    }
                }
            } else {
                new_field = new Field(this.app, this.file, node, this);
                // 加入var列表，作为obj
                let objectVar = new Var(this.file, this, "__object__" + String(node.loc.line), node);
                this.declared_vars.push(objectVar);
                objectVar.setObjField(new_field);

                new_field.index();
            }

        } else if (node.type == "NewExpression") {
            if (node.id != this.node.id) {
                let newField = createNewFieldAndIndex(node);
                let newVar = new Var(this.file, this, "__object__new", node);
                newVar.setObjField(newField);
                this.declared_vars.push(newVar);
            }

        } else if (node.type == "VariableDeclaration") {
            // 将每个声明的变量加入vars中
            let init_type = node.attr.kind;
            let field_belonged;
            for (let declarator of node.children) {
                let variable = declarator.children[0];
                if (variable) {
                    if (init_type == "var") {
                        // var具有函数作用域
                        field_belonged = this.toFunctionField();
                    } else {
                        // let, const 具有块作用域
                        field_belonged = this;
                    }
                    let new_var = new Var(this.file, field_belonged, variable.attr.name, variable);
                    field_belonged.declared_vars.push(new_var);
                }
            }

        } else if (node.type == "Property") {
            // 将property声明的属性加入vars中
            let propVar = new Var(this.file, this, escodegen.generate(node.children[0].es_node).replace(/['"]/g, ""), node.children[0]);
            propVar.obj_var = this.fieldVar;
            this.declared_vars.push(propVar);

        } else if (node.type == "FunctionExpression" || node.type == "FunctionDeclaration" || node.type == "ArrowFunctionExpression") {
            if (this.node.id == node.id) {
                // 新产生的field里调用的index，将参数加入vars中
                let startIndex = node.es_node.id ? 1 : 0;
                let paramIndex = 0;

                this.paramCount = 0;
                for (let i = startIndex; i < node.children.length - 1; ++i) {
                    let param = node.children[i];
                    let paramVar = new Var(this.file, this, param.attr.name, param);
                    paramVar.paramIndex = paramIndex++;
                    this.declared_vars.push(paramVar);
                    ++this.paramCount;
                }
                // arguments參數
                let argumentsVar = new Var(this.file, this, "arguments", { id: -(Var.sp_count++), type: "dynamic" });
                argumentsVar.isParam = true;
                this.declared_vars.push(argumentsVar);
            } else {
                // 创建新的field，特别的，如果是function declaration，将函数名加入本field的vars中
                let functionField = createNewFieldAndIndex(node);

                let funcVar = new Var(this.file, this, "__function__" + String(node.loc.line), node);
                funcVar.setObjField(functionField);

                // func_var 指向 一个obj_field为this的Var
                functionField.func_var = funcVar;

                this.declared_vars.push(funcVar);

                // expression和declatation都可能有id
                if (node.es_node.id) {
                    let variable = node.children[0];
                    if (variable.type == "Identifier"
                        // 避免 success: function success (e){}，造成success变量名重复的情况
                        && !this.declared_vars.find(e => e.name == variable.attr.name)
                    ) {
                        // 只注册了函数名，赋值在visit中进行
                        let funcNameVar = new Var(this.file, this, variable.attr.name, variable);
                        this.declared_vars.push(funcNameVar);
                    }
                }
            }

        } else if (node.type == "BlockStatement"
            && node.parent && ["IfStatement", "TryStatement", "SwitchCase"].includes(node.parent.type)
        ) {
            if (node.id != this.node.id) {
                createNewFieldAndIndex(node);
            }

        } else if (node.type == "CatchClause") {
            if (node.id == this.node.id) {
                let param = node.children[0];
                if (param.type == "Identifier") { // 是参数
                    let paramVar = new Var(this.file, this, param.attr.name, param);
                    this.declared_vars.push(paramVar);
                }
            } else {
                createNewFieldAndIndex(node);
            }
        }
        // 为node添加所属的field
        if (!new_field) node.field = this.node.id;
        return new_field;
    }
    /**
     * 分析入口。dfs当前作用域，并在最后分析当前作用域的直接子函数作用域
     */
    build(branch, branch_id) {
        if (!branch) {
            this.branch = new Branch();
            branch = this.branch;
        }
        branch_id = branch_id != undefined ? branch_id : null; // undefined = 未定义，null = 根分支

        this.dfs(branch, branch_id);

        // 函数定义在可执行语句后分析
        if (this.pending) {
            for (let field of this.pending) {
                let funcBranchId = branch.registerBranchUnder(branch_id);
                field.build(branch, funcBranchId);
                branch.merge([funcBranchId], { do_not_set_latest: true, branch_field: field });
            }
        }
    }
    /**
     * DFS
     */
    dfs(branch, branch_id) {
        let skip = [];
        if (this.node.type == "FunctionDeclaration") {
            // 在visit FunctionDeclaration时单独处理，在此排除
            skip.push(this.node.children[0].id);
        }
        let route = [];

        // 开始DFS
        // 会跳过根节点
        let stack = [[this.node, 0]];
        while (stack.length > 0) {
            let pop = stack.pop();
            let obj = pop[0];
            let this_index = pop[1];
            if (obj.children[this_index]) {
                let visit = obj.children[this_index];

                // 对每个遍历到的节点，如果它被visit调用访问过
                // 那么它已经递归的访问了子节点，这里不需要再访问其子节点
                let stop = VISIT_TYPE_LIST.includes(visit.type);
                skip.includes(visit.id) || this.visit(visit, branch, branch_id);
                route.push(visit.id);

                stack.push([obj, this_index + 1]);
                if (!stop && visit.children.length > 0) {
                    let init_index = 0;
                    stack.push([visit, init_index]);
                }
            }
        }
    }
    /**
     * visit 赋值类型的语句，求值，返回左值Var实体
     */
    visitAssignment(expr, branch, branch_id) {
        let var_nodes = [];
        if (expr.children.length < 2) {
            this.visit(expr.children[0], branch, branch_id);
            return;
        }
        // 求值顺序先右后左
        let right = this.visit(expr.children[1], branch, branch_id);
        let left = this.visit(expr.children[0], branch, branch_id);
        if (expr.type == "Property") {
            // 可能是动态计算的属性名，要比对一下是否定义，没有定义的要加定义，然后再visit一遍
            // {
            //     [expression]:value
            // }
            for (let prop of left.var_nodes) {
                let propVar = prop.var_entity;
                if (propVar) {
                    let obj_fieldOfProp = propVar.belonged_field;
                    if (obj_fieldOfProp) {
                        let propExist = obj_fieldOfProp.declared_vars.find(e => e.name == propVar.name);
                        if (!propExist) {
                            let name = propVar.name.replace(/['"]/g, "");
                            this.getVarEntityFromField({ raw: name, split: [name] }, true, obj_fieldOfProp.fieldVar, branch, branch_id);
                            left = this.visit(expr.children[0], branch, branch_id);
                        }
                    }
                }
            }
        }
        if (left && right) {
            // var_item = {
            //     node:
            //     var_entity:
            // }
            for (let left_var_item of left.var_nodes) {
                for (let right_var_item of right.var_nodes) {
                    right_var_item.var_entity.addAssignDep(
                        left_var_item.var_entity,
                        branch,
                        branch_id
                    )
                }
                var_nodes.push(left_var_item);
            }
            return { var_nodes };
        }
    }

    visitCallExpression(visit, branch, branch_id) {
        // 先对参数依次调用visit
        // 再对callee调用visit
        let var_nodes = [];
        let argVisitRes = [];
        let appendCalls = false;
        let callee = visit.children[0];
        // 对参数调用visit
        if (visit.children.length > 1) {
            let args = visit.children.slice(1);
            for (let i = 0; i < args.length; ++i) {
                let arg = args[i];
                let e = this.visit(arg, branch, branch_id);
                e && argVisitRes.push({
                    visit_res: e,
                    arg_index: i
                });
            }
        }
        // 对callee调用visit
        let calleeVisitRes = this.visit(callee, branch, branch_id);
        if (calleeVisitRes) {
            let argVarSet = [];

            let dealInstance = (type) => {
                if (escodegen.generate(callee.es_node) == type) {
                    if (argVisitRes.length == 1) {
                        let argVar = argVisitRes[0].visit_res.var_nodes[0];
                        if (argVar && argVar.var_entity) {
                            let objVars = argVar.var_entity.getObjVarByAssign(branch, branch_id);
                            let instanceVar = this.getRootField().declared_vars.find(e => e.name == type);
                            objVars.forEach(objVar => objVar.recordAssignTo({ type: "assign to", var_entity: instanceVar, rec: new Rec(callee, this) }));
                            return objVars[0];
                        }
                    }
                }
            }

            let dealRequire = () => {
                // 处理require
                // 将一个新的空obj var作为require调用的返回值，在分析结束后，将这个obj var与export出的对象进行比较并添加依赖
                // 这样做是为了简化require().prop的处理，同时保证本文件不能对require的源进行任何修改
                if (calleeVisitRes.var_nodes.length > 0 && calleeVisitRes.var_nodes[0].var_entity.name == "require") {
                    if (argVisitRes.length == 1) {
                        let urlArg = argVisitRes[0].visit_res.var_nodes[0];
                        if (urlArg && urlArg.var_entity) {
                            let src;
                            if (urlArg.var_entity.node.type == "Literal") {
                                src = toAbsolutePath(this.app.root, this.file, urlArg.var_entity.name);
                            } else {
                                // e.node && e.node.type == "Literal" 防止对branch里的伪var判断报错
                                let urlArgVar = urlArg.var_entity.getRecordValue(e => e.node && e.node.type == "Literal", { branch, branch_id });
                                if (urlArgVar) {
                                    src = toAbsolutePath(this.app.root, this.file, urlArgVar.name);
                                }
                            }
                            if (src) {
                                this.app.add_file_dep(this.file, src);
                                let export_res = this.app.toExportsVar(src);
                                if (export_res) {
                                    let requireRec = new Rec(visit, this.toFunctionField());
                                    let requireVar = new Var(
                                        this.file,
                                        this,
                                        "__object__require__" + "<" + urlArg.var_entity.name.replace(this.app.root, "") + ">",
                                        { type: "dynamic", id: -(Var.sp_count++) },
                                    );

                                    requireVar.rec_list.push([requireRec]);
                                    requireVar.setLatestRec([requireRec]);

                                    this.getRootField().export_comp.push({
                                        this_var: requireVar,
                                        src_var: export_res
                                    });

                                    var_nodes.push({
                                        var_entity: requireVar,
                                        node: visit,
                                        rec: requireRec
                                    });
                                }
                            }
                        }
                    }
                }
            }

            let dealGetApp = () => {
                // 处理getApp
                // 仿照require 创建一个占位的shadow
                // 因为getApp引用的部分是确定（唯一）的
                // 所有只保留一个app instance，在第一次处理getApp的时候求值，后面再遇到就引用这个值
                if (calleeVisitRes.var_nodes.length > 0 && calleeVisitRes.var_nodes[0].var_entity.name == "getApp") {
                    let getAppVar;
                    let getAppRec = new Rec(visit, this.toFunctionField());
                    if (this.getRootField().appInstance) {
                        getAppVar = this.getRootField().appInstance;
                    } else {
                        let appInstance = this.app.getAppInstance();
                        if (appInstance) {
                            getAppVar = new Var(
                                this.file,
                                this,
                                "__object__getApp",
                                { type: "dynamic", id: -(Var.sp_count++) },
                            );

                            getAppVar.rec_list.push([getAppRec]);
                            getAppVar.setLatestRec([getAppRec]);

                            this.getRootField().export_comp.push({
                                this_var: getAppVar,
                                src_var: appInstance
                            });

                            getAppVar.isAppInstanceData = true;
                            this.app.add_file_dep(this.file, this.app.appjs);
                            this.getRootField().appInstance = getAppVar;
                        }
                    }
                    getAppVar && var_nodes.push({
                        var_entity: getAppVar,
                        node: visit,
                        rec: getAppRec
                    });
                }
            }

            let dealString = () => {
                var_nodes.push(...argVisitRes.reduce((pre, cur) =>
                    cur.visit_res.var_nodes && pre.concat(cur.visit_res.var_nodes)
                    , []));
            }

            let dealPushAndUnshift = (calleeVar) => {
                let arrVar = calleeVar.obj_var;
                arrVar && argVarSet.map(e => e.visit_res.var_entity).forEach(e => e.addAssignDep(arrVar, branch, branch_id));
            }

            let dealSetData = (calleeVisitResItem) => {
                // 因为这个时候page函数还没分析到，所以只能在callee的obj_var里面找data
                let calleeVar = calleeVisitResItem.var_entity;
                let found = false;
                if (calleeVar.obj_var) {
                    let pageDataVar = calleeVar.obj_var.getObjFieldDeclaredVar(e => e.name == "data");
                    if (argVarSet.length == 1 && argVarSet[0].visit_res.var_entity && pageDataVar) {
                        let setDataObjVar = argVarSet[0].visit_res.var_entity;
                        for (let setDataProp of setDataObjVar.obj_field.declared_vars) {
                            for (let pageDataProp of pageDataVar.obj_field.declared_vars) {
                                let propLatestRec = pageDataProp.getLatestRecInBranch(branch, branch_id);
                                if (propLatestRec && setDataProp.name == pageDataProp.name) {
                                    found = true;
                                    // 不适用branchid，直接添加到定义处
                                    setDataProp.addDependence({
                                        type: "assign to",
                                        var_entity: pageDataProp,
                                        recs: propLatestRec
                                    });
                                }
                            }
                        }
                    }
                }
                if (found) return;
                dealDefault(calleeVisitResItem);
            }

            let dealObjectAssign = (calleeVisitResItem) => {
                // arg1 -> arg0, return arg1
                let calleeVar = calleeVisitResItem.var_entity;
                if (calleeVar.getFullName == "Object.assign") {
                    if (argVarSet.length == 2) {
                        let source = argVarSet.find(e => e.arg_index == 1); // 第二个参数
                        let target = argVarSet.find(e => e.arg_index == 0);
                        if (source && target) {
                            let sourceVar = source.visit_res.var_entity;
                            let targetVar = target.visit_res.var_entity;
                            sourceVar && targetVar && sourceVar.addAssignDep(targetVar, branch, branch_id);
                            var_nodes.push(...source.visit_res);
                        }
                    }
                }
                dealDefault(calleeVisitResItem);
            }

            let dealModify = (calleeVar) => {
                let calleeVarParent = calleeVar.obj_var;
                if (calleeVarParent) {
                    let res = {
                        var_entity: calleeVarParent,
                        // 其实依赖和节点都无所谓，如果调用作为右值，构建依赖时会自动获取调用者parent的latest rec
                        node: visit,
                        rec: [new Rec(visit, this.toFunctionField())]
                    }
                    var_nodes.push(res);
                }
            }

            let dealDefault = (calleeVisitResItem) => {
                appendCalls = true;
                let calleeVar = calleeVisitResItem.var_entity;
                let calleeVisitNode = calleeVisitResItem.node;
                for (let arg_var_item of argVarSet) {
                    if (arg_var_item.visit_res.var_entity) {
                        arg_var_item.visit_res.var_entity.addDependence(
                            {
                                type: "to callee",
                                var_entity: calleeVar,
                                arg_index: arg_var_item.arg_index,
                                recs: [new Rec(calleeVisitNode, this.toFunctionField())],
                            },
                            branch,
                            branch_id
                        );
                    }
                }
            }

            // 构造所有参数的var set
            // 对于同一个var实体多次出现在参数列表中时，只添加最后一次访问该var实体对应节点的依赖，因此要逆序遍历
            // arg_var_item
            // {
            //     visit_res:e,
            //     arg_index:i
            // }

            for (let i = argVisitRes.length - 1; i > -1; --i) {
                if (argVisitRes[i]) {
                    let arg_var_item = argVisitRes[i];
                    for (let item of arg_var_item.visit_res.var_nodes) {
                        if (!argVarSet.some(ai => item.var_entity && item.var_entity.isIdenticalWith(ai.visit_res.var_entity)))
                            argVarSet.push({
                                visit_res: item,
                                arg_index: arg_var_item.arg_index
                            });
                    }
                }
            }


            // 处理特殊函数
            if (calleeVisitRes) {
                for (let calleeVisitResItem of calleeVisitRes.var_nodes) {
                    let calleeVar = calleeVisitResItem.var_entity;
                    switch (calleeVar.name) {
                        case "require":
                            dealRequire();
                            break;
                        case "getApp":
                            dealGetApp();
                            break;
                        case "Page": {
                            let pageInstance = dealInstance("Page");
                            if (pageInstance) {
                                this.getRootField().pageInstance = pageInstance;
                                this.getRootField().pageDataInstance = pageInstance.getObjFieldDeclaredVar(e => e.name == "data");

                                // 为page instance下的所有instance函数添加type
                                for (let prop of pageInstance.obj_field.declared_vars.filter(e => !e.name.startsWith("__"))) {
                                    prop.getFunctionFields(branch, branch_id).map(e => e.fieldVar).forEach(e => e.functionType = 'ofPageInstance: ' + prop.name);
                                }
                            }
                            break;
                        }
                        case "App": {
                            let appInstance = dealInstance("App");
                            if (appInstance) {
                                this.getRootField().appInstance = appInstance

                                // 为page instance下的所有instance函数添加type
                                for (let prop of appInstance.obj_field.declared_vars.filter(e => !e.name.startsWith("__"))) {
                                    prop.getFunctionFields(branch, branch_id).map(e => e.fieldVar).forEach(e => e.functionType = 'ofAppInstance: ' + prop.name);
                                }
                            }
                            break;
                        }
                        case "String":
                        case "fromCharCode":
                        case "parse":
                        case "stringify":
                            dealString();
                            break;
                        case "push":
                        case "unshift":
                            // 为所有参数构建到calleeVar的obj_var的赋值依赖
                            dealPushAndUnshift(calleeVar);
                            break;
                        case "substring":
                        case "pop":
                        case "shift":
                        case "slice":
                        case "splice":
                        case "map":
                        case "reduce":
                            // 直接添加calleeVar的obj_var
                            dealModify(calleeVar)
                            break;
                        case "concat":
                            dealModify(calleeVar);
                            dealPushAndUnshift(this, calleeVar);
                            break;
                        case "setData":
                            dealSetData(calleeVisitResItem);
                            break;
                        case "assign":
                            dealObjectAssign(calleeVisitResItem);
                            break;
                        default:
                            dealDefault(calleeVisitResItem);
                    }
                }
            }

            // 如果没有添加返回值，将callee作为返回值
            if (var_nodes.length == 0) {
                var_nodes = calleeVisitRes.var_nodes;
            }

            // 添加calls
            if (appendCalls) {
                let callItem = {
                    callee: calleeVisitRes.var_nodes,
                    args: argVarSet,
                    expr: visit,
                }
                let callee_snapshot = calleeVisitRes.var_nodes.map(e => e.var_entity.getFunctionFields(branch, branch_id));
                let arg_snapshot = argVarSet.map(e => {
                    return {
                        snapshot: e.visit_res.var_entity.getRecordValue(e =>
                            e.name.startsWith("__object__") || e.name.startsWith("__function__"), { branch, branch_id }
                        ),
                        arg_index: e.arg_index
                    }
                }).filter(e => e.snapshot.length > 0);

                callee_snapshot && (callItem.callee_snapshot = callee_snapshot);
                arg_snapshot && (callItem.arg_snapshot = arg_snapshot);

                this.toFunctionField().calls.push(callItem);
            }

            return { var_nodes };
        }
    }
    visit(visit, branch, branch_id, branchIdsForIfStatement, doNotbuildDep) {

        if (visit.id == 9981)
            console.log(1)

        this.app.checkTimeOut();
        visit.file = this.shortFile;

        let var_nodes = [];

        let visitIdentifier = () => {
            let name = escodegen.generate(visit.es_node).replace(/['"]/g, "");
            let inObj = false;
            // 对象属性赋值的右值必须在对象作用域的父作用域定义
            if (visit.parent && visit.parent.type == "Property" && visit.parent.children[1].id == visit.id) {
                inObj = true;
            }
            let var_res = this.getVarEntityFromField({ raw: name, split: [name], inObj }, true);
            let backTo = visit.backTo(e => ["AssignmentExpression", "CallExpression"].includes(e.type) || e.type.endsWith("Statement"));
            let type = "read";
            if (backTo && backTo.type == "AssignmentExpression" && backTo.children[0].has_descendant(visit)) {
                // 变量作为左值，不构建其之前的访问记录与该处访问记录之间的数据流
                type = "left";
            }
            var_res && var_res.forEach(v => {
                let new_rec = new Rec(visit, this.toFunctionField());
                visit.member_variable().id == visit.id && v.addDependence({ type, recs: [new_rec] }, branch, branch_id, branch, branch_id);
                var_nodes.push({ node: visit, var_entity: v, rec: new_rec });
            });
        }

        let warpNameWithObjectPrefix = (str) => {
            if (str == "require" || str == "getApp") return "__object__" + str;
            if (str.startsWith("new ")) return "__object__new";
            return str;
        }

        if (visit.type == "ExpressionStatement" || visit.type == "UnaryExpression"
            || visit.type == "UpdateExpression") {
            return this.visit(visit.children[0], branch, branch_id);

        } else if (visit.type == "ObjectExpression" || visit.type == "NewExpression") {
            // 根据节点在本作用域中搜索对应的field，在对应field下递归调用seq
            let res_field = this.subFields.find(sf => sf.node.id == visit.id);
            let var_res = this.declared_vars.find(sb => sb.node.id == visit.id);

            if (res_field && var_res) {
                // 只在obj的field内搜索this，不搜索父作用域
                let thisVar = res_field.getVarEntityFromField({ raw: "this", split: ["this"] });
                thisVar && thisVar.forEach(thisv => {
                    let virtualRec = new Rec({ type: "--visit--this", id: -(Var.sp_count++) }, this.toFunctionField());
                    thisv.addDependence({ type: "pass", recs: [virtualRec] }, branch, branch_id);
                    var_res.recordAssignTo({ var_entity: thisv }, branch, branch_id);
                });

                res_field.build(branch, branch_id);
                let new_rec = new Rec(visit, this.toFunctionField());
                var_nodes.push({ node: visit, var_entity: var_res, rec: new_rec });
                return { var_nodes: var_nodes };
            }

        } else if (visit.type == "FunctionExpression" || visit.type == "FunctionDeclaration") {
            let res_field = this.subFields.find(sf => sf.node.id == visit.id);
            if (res_field) {
                // 立即分析
                // let func_branch = branch.registerBranchUnder(branch_id);
                // res_field.build(branch, func_branch);
                // branch.merge([func_branch], { do_not_set_latest: true, branch_field: res_field });

                // 后分析
                let functionField = this.getPendingResolveField();
                if (!functionField.pending)
                    functionField.pending = [];
                functionField.pending.push(res_field);

                // 函数体定义到函数id的赋值依赖
                if (visit.es_node.id) {
                    let functionId = visit.children[0];
                    let IdVar = this.visit(functionId, branch, branch_id).var_nodes[0].var_entity;
                    let functionVar = this.declared_vars.find(v => v.node.id == visit.id);
                    if (IdVar && functionVar) {
                        // 函数体到id
                        let funcIdRec = new Rec(functionId, functionField);
                        functionVar.addDependence(
                            {
                                type: "assign to",
                                recs: [funcIdRec],
                                var_entity: IdVar
                            },
                            branch,
                            branch_id
                        );
                        var_nodes.push({ node: functionId, var_entity: IdVar, rec: funcIdRec });
                        return { var_nodes: var_nodes };
                    }
                }
                if (visit.type == "FunctionExpression") {
                    let var_res = this.declared_vars.find(sb => sb.node.id == visit.id);
                    let new_rec = new Rec(visit, this.toFunctionField());
                    var_res && var_nodes.push({ node: visit, var_entity: var_res, rec: new_rec });
                    return { var_nodes: var_nodes };
                }
            }

        } else if (visit.type == "Literal") {
            if ((visit.parent.type == "Property" && visit.parent.children[0].id == visit.id)
                || visit.parent.type == "MemberExpression"
            ) {
                visitIdentifier();
            } else {
                let newVar = new Var(this.file, this, String(visit.attr.value), visit);
                let newRec = new Rec(visit, this.toFunctionField());
                var_nodes.push({ node: visit, var_entity: newVar, rec: newRec });
            }
            return { var_nodes: var_nodes };

        } else if (visit.type == "Identifier" || visit.type == "ThisExpression") {
            // 只有当前identifier是主变量（不是属性，或者不是在member expr中）时才返回var实体
            // 即对于member expr的属性，不返回var实体
            if (visit.member_obj().id == visit.id) {
                visitIdentifier();
            }
            return { var_nodes: var_nodes };

        } else if (visit.type == "MemberExpression") {
            let obj_res = this.visit(visit.children[0], branch, branch_id);
            let prop_res = this.visit(visit.children[1], branch, branch_id);
            if (obj_res) {
                if (obj_res.var_nodes.length == 1) {
                    let name_split = visit.split_member_expr()
                        .map(e => escodegen.generate(e.es_node).replace(/['"]/g, ""))
                    name_split[0] = warpNameWithObjectPrefix(name_split[0]);

                    let var_res = this.getVarEntityFromField({ raw: escodegen.generate(visit.es_node), split: name_split }, true, obj_res.var_nodes[0].var_entity, branch, branch_id);
                    var_res && var_res.forEach(v => {
                        let new_rec = new Rec(visit, this.toFunctionField());
                        visit.member_variable().id == visit.id && v.addDependence({ type: "read", recs: [new_rec] }, branch, branch_id);
                        var_nodes.push({ var_entity: v, node: visit, rec: new_rec });
                    });
                } else if (obj_res.length > 1) {
                    var_nodes = obj_res.var_nodes.map(e => ({ node: e.node.member_variable(), var_entity: e.var_entity }));
                }
                return { var_nodes: var_nodes };
            }

        } else if (visit.type == "ArrayExpression") {
            for (let element of visit.children) {
                let elementRes = this.visit(element, branch, branch_id);
                elementRes && var_nodes.push(...elementRes.var_nodes);
            }
            return { var_nodes: var_nodes };

        } else if (visit.type == "SequenceExpression") {
            for (let s of visit.children) {
                let e = this.visit(s, branch, branch_id);
                if (e) {
                    var_nodes = e.var_nodes;
                }
            }
            return { var_nodes: var_nodes };

        } else if (visit.type == "LogicalExpression" || visit.type == "BinaryExpression") {
            for (let s of visit.children) {
                let e = this.visit(s, branch, branch_id);
                e && e.var_nodes.forEach(v => var_nodes.some(e => e.var_entity.node.id == v.var_entity.node.id) || var_nodes.push(v));
            }
            return { var_nodes: var_nodes };

        } else if (visit.type == "ConditionalExpression") {
            let branch_true_id = branch.registerBranchUnder(branch_id);
            let branch_false_id = branch.registerBranchUnder(branch_id);
            let test = this.visit(visit.children[0], branch, branch_id);
            let consiquent = this.visit(visit.children[1], branch, branch_true_id);
            let alternate = this.visit(visit.children[2], branch, branch_false_id);
            branch.merge([branch_true_id, branch_false_id]);
            if (test && consiquent && alternate) {
                return { var_nodes: [...consiquent.var_nodes, ...alternate.var_nodes] }
            }

        } else if (visit.type == "CallExpression") {
            return this.visitCallExpression(visit, branch, branch_id);

        } else if (visit.type == "AssignmentExpression" || visit.type == "Property") {
            return this.visitAssignment(visit, branch, branch_id);

        } else if (visit.type == "VariableDeclaration") {
            for (let declarator of visit.children) {
                this.visitAssignment(declarator, branch, branch_id);
            }

        } else if (visit.type == "ForStatement" || visit.type == "ForInStatement"
            || visit.type == "ForOfStatement" || visit.type == "WhileStatement"
            || visit.type == "DoWhileStatement") {
            let res = this.subFields.find(e => e.node.id == visit.id);
            res && res.build(branch, branch_id);

        } else if (visit.type == "SwitchStatement") {
            this.visit(visit.children[0], branch, branch_id);
            let cases = visit.children.slice(1);
            let case_branch_ids = [];
            for (let c of cases) {
                // 对每个case，注册一个分支进行分析
                let case_branch_id = branch.registerBranchUnder(branch_id);
                case_branch_ids.push(case_branch_id);
                this.visit(c, branch, case_branch_id);
            }
            branch.merge(case_branch_ids);

        } else if (visit.type == "SwitchCase") {
            for (let c of visit.children) {
                // blk产生了新的作用域，要求优先找到本作用域的变量，使用build
                if (c.type == "BlockStatement") {
                    let blkField = this.subFields.find(sf => sf.node.id == c.id);
                    if (blkField) {
                        blkField.build(branch, branch_id);
                    }
                } else {
                    this.visit(c, branch, branch_id);
                }
            }

        } else if (visit.type == "IfStatement") {
            let test_res = this.visit(visit.children[0], branch, branch_id);
            if (test_res) {
                let if_branch_ids = branchIdsForIfStatement ? branchIdsForIfStatement : [];
                // 把出现分支的部分切出来
                let blks = visit.children.slice(1);
                for (let blk of blks) {
                    // 如果产生了新的field，就在新field下使用seq分析
                    if (blk.type == "BlockStatement") {
                        let blkField = this.subFields.find(sf => sf.node.id == blk.id);
                        if (blkField) {
                            let if_branch_id = branch.registerBranchUnder(branch_id);
                            if_branch_ids.push(if_branch_id);
                            // 新field的seq必须使用本vist使用的分支，否则会默认使用null分支，merge将使add dep到null分支而将if分支的依赖信息直接更新到var实体上
                            blkField.build(branch, if_branch_id);
                        }
                    } else {
                        // 可能套了if（即else if）
                        // 套了if则把本层的branch ids传进visit
                        // 保证嵌套的if产生的新分支与本层的id产生的分支有同一个父分支
                        // 同时要把嵌套的if分支的分支id统一收集，在本层进行归并
                        if (blk.type == "IfStatement") {
                            this.visit(blk, branch, branch_id, if_branch_ids);
                        } else {
                            // 单语句，创建一个新分支分析
                            let if_branch_id = branch.registerBranchUnder(branch_id);
                            if_branch_ids.push(if_branch_id);
                            this.visit(blk, branch, if_branch_id);
                        }
                    }
                }

                // 至少存在一个没有alternate的ifstatement，即if可能被全部跳过
                if (blks.length < 2) {
                    if_branch_ids.push(-1);
                }

                // 顶层if，执行merge
                if (!branchIdsForIfStatement) {
                    let lenBefore = if_branch_ids.length;
                    if_branch_ids = if_branch_ids.filter(e => e > -1);
                    let noAlt = lenBefore > if_branch_ids.length;
                    branch.merge(if_branch_ids, { noAlt });
                }
            }

        } else if (visit.type == "TryStatement") {
            for (let node of visit.children) {
                let fieldRes = this.subFields.find(e => e.node.id == node.id);
                fieldRes && fieldRes.build(branch, branch_id);
            }

        } else if (visit.type == "ReturnStatement") {
            if (visit.children.length > 0) {
                let ret_val = this.visit(visit.children[0], branch, branch_id);
                if (ret_val) {
                    let functionField = this.toFunctionField();

                    functionField.return_value || (functionField.return_value = [])
                    functionField.return_value.push(ret_val);

                    ret_val.var_nodes.forEach(v => {
                        v.var_entity.returnedBy || (v.var_entity.returnedBy = []);
                        v.var_entity.returnedBy.push(functionField.func_var);
                    })
                }
            }
        }
    }
    /**
     * 返回包括本作用域及所有子作用域在内的作用域列表
     */
    getAllSubFields(func, res) {
        res || (res = [this]);
        for (let f of this.subFields) {
            func
                ? (func(f) && res.push(f))
                : res.push(f);
            f.getAllSubFields(func, res);
        }
        return res;
    }
    /**
     * 判断是this否为给定作用域的子作用域
     */
    isSubFieldOf(parent) {
        if (parent) {
            let cur = this.parentField;
            while (cur) {
                if (cur.node.id == parent.node.id)
                    return true;
                cur = cur.parentField;
            }
        }
    }

    getParams() {
        return this.paramCount ? this.declared_vars.slice(0, this.paramCount) : [];
    }

    asFunc() {
        return {
            id: this.node.id,
            file: this.shortFile,
            loc: this.node.loc,
        }
    }
}

/**
 * 已知问题：状态爆炸。
 * 连续n个分支，合并的m1-mn分支中都访问一个变量时，合并的rec个数为 m1*m2*...*mn，几乎是指数增长
 * 处理：drop out
 */

class Branch {
    static count = 1;
    constructor() {
        this.vars = [];
        this.all_branches = [];
    }
    /**
     * 给定当前的分支 id，注册一个新的分支
     * 返回新分支 id
     */
    registerBranchUnder(parent_branch_uid) {
        let new_uid = Branch.count++;
        let new_branch = {
            uid: new_uid,
            parent_branch_uid: parent_branch_uid
        }
        this.all_branches.push(new_branch);
        return new_uid;
    }
    /**
     * 创建一个给定var实体在branch中的缓存对象
     */
    createNewVarItem(var_entity) {
        if (!this.vars.some(v => v.var_entity.node.id == var_entity.node.id)) {
            let new_item = {
                var_entity: var_entity,
                branches: []
            };
            this.vars.push(new_item);
            return new_item;
        }
    }
    /**
     * 给定一个变量、一个当前分支id
     * 返回离当前分支最近的，存在于变量的分支列表中的父分支
     */
    getParentBranchOf(var_item, cur_branch_id) {
        let cur = this.all_branches.find(e => e.uid == cur_branch_id);
        if (cur) {
            while (true) {
                cur = this.all_branches.find(e => e.uid == cur.parent_branch_uid);
                if (cur) {
                    let res = var_item.branches.find(vb => vb.uid == cur.uid);
                    if (res) return res;
                } else {
                    break;
                }
            }
        }
    }
    /**
     * 给定一个实体和一个分支 id，返回对应的分支
     * 如果var不存在，创建一个新的var，在var下以给定的分支 uid创建一个新的分支
     * 如果var存在，分支不存在，则在var下以给定分支 uid创建一个分支，然后将给定分支id对应的父分支中节点依赖栈的最后一个节点作为初始节点加入新的分支中
     */
    getVarOfBranch(var_entity, branch_uid) {

        let createNewVarBranch = (var_entity) => {
            return {
                name: var_entity.name,
                uid: branch_uid,
                deps: [],
                rec_list: var_entity.latest_rec ? [var_entity.latest_rec] : [],
                latest_rec: var_entity.latest_rec,
                inherited: true && var_entity.latest_rec
            }
        }

        let branch_registered = this.all_branches.find(b => b.uid == branch_uid);
        if (!branch_registered) {
            console.log(branch_uid, this.all_branches.map(e => e.uid));
            throw "access unregisted branch";
        }

        let res = this.vars.find(v => (v.var_entity.node.id == var_entity.node.id));
        // 如果不存在var
        if (!res) {
            // 新的var，init是实体的依赖栈栈顶
            res = this.createNewVarItem(var_entity);
            // 加入新var的分支列表中
            let new_branch = createNewVarBranch(var_entity)
            res.branches.push(new_branch);
            return new_branch;
        }
        // 存在var
        else {
            // 在var的分支中搜索给定分支id对应的分支返回
            let branch = res.branches.find(b => b.uid == branch_uid);
            if (branch) {
                return branch;
            } else {
                // var存在，分支不存在
                // 创建一个分支，然后将给定分支id对应的父分支中节点依赖栈的最后一个节点作为初始节点加入新的分支中
                // 在变量的分支列表中查找父分支
                let parent_branch_in_var = this.getParentBranchOf(res, branch_uid);
                if (parent_branch_in_var) {
                    let new_branch = createNewVarBranch(parent_branch_in_var);
                    res.branches.push(new_branch);
                    return new_branch;
                }
                // 在本分支的父分支都没访问过
                else {
                    let new_branch = createNewVarBranch(res.var_entity);
                    res.branches.push(new_branch);
                    return new_branch;
                }
            }
        }
    }
    /**
     * 给定一组分支id，将所有给定分支的依赖信息合并到父分支上，然后从分支列表中注销所有给定分支，然后将没有分支的变量删除
     * add_rec控制是否将分支中最近的rec合并到父分支
     * 如果这些分支的父分支不同，将扔出一个错误
     */
    merge(branch_uids, options) {
        /**
         * 仅设置latest_rec
         */
        let setLatest = (var_entity, tos, parent_branch_uid) => var_entity.setLatestRec(tos, this, parent_branch_uid);

        /**
         * a,b -> [Rec]
         * 比较a和b中装的rec是不是一样的
         */
        let isSameRecs = (a, b) => {
            return a.length == b.length
                && a.map(e => String((e.id ^ 2) % 13)).join("") == a.map(e => String((e.id ^ 2) % 13)).join("");
        }
        if (branch_uids.length > 0) {
            if (!options) options = {};
            let parent_uids = branch_uids.map(uid => {
                let res = this.all_branches.find(ab => ab.uid == uid);
                if (res) {
                    return res.parent_branch_uid;
                } else {
                    throw "access unregisted branch";
                }
            });
            let parent_branch_uid = parent_uids[0];
            for (let i = 0; i < parent_uids.length - 1; ++i) {
                parent_branch_uid = parent_uids[i];
                if (parent_uids[i] != parent_uids[i + 1]) {
                    throw "mergeing branches has different parent branch";
                }
            }
            // 对每个var
            for (let var_item of this.vars) {
                // 搜索当前var实体中需要合并的分支
                let merging_branches = var_item.branches.filter(b => branch_uids.includes(b.uid));
                let recsOfAllMergingBranch = [];
                // 将所有分支的依赖节点栈顶归并在一起
                // 只需要关注分支的依赖节点栈顶节点，因为其他节点已经构建了依赖
                for (let merging_branch of merging_branches) {
                    let latestRecsOfTheBranch = merging_branch.latest_rec;
                    if (latestRecsOfTheBranch) {
                        latestRecsOfTheBranch = latestRecsOfTheBranch.length ? [...latestRecsOfTheBranch] : [latestRecsOfTheBranch];
                        recsOfAllMergingBranch =
                            isSameRecs(recsOfAllMergingBranch, latestRecsOfTheBranch)
                                ? latestRecsOfTheBranch
                                : [...recsOfAllMergingBranch, ...latestRecsOfTheBranch];
                    }
                    // 将各个分支各自构建的依赖都拷贝到父分支中
                    merging_branch.deps.forEach(d => var_item.var_entity.deps.push(d));

                    let mergingRecList = merging_branch.inherited
                        ? merging_branch.rec_list.slice(1)
                        : merging_branch.rec_list;
                    var_item.var_entity.rec_list.push(...mergingRecList);

                    // 将产生的所有rec都拷贝到var实体的rec list中，rec list应该是顺序无关的
                    // var_item.var_entity.rec_list.push(...(merging_branch.rec_list.slice(0, -1)));
                }
                // 设置父分支上的latest_rec
                if (recsOfAllMergingBranch.length > 0) {
                    if (options.do_not_set_latest) {
                        if (
                            // 保留变量，强制添加
                            var_item.var_entity.reserved
                            // 同作用域声明的
                            || var_item.var_entity.belonged_field.node.id == options.branch_field.node.id
                            // 子作用域声明的
                            || var_item.var_entity.belonged_field.isSubFieldOf(options.branch_field)
                        ) {
                            setLatest(var_item.var_entity, recsOfAllMergingBranch, parent_branch_uid);
                        }
                    } else {
                        setLatest(var_item.var_entity, recsOfAllMergingBranch, parent_branch_uid);
                    }
                }
                // 删除当前var中被归并的分支
                let filterRes = var_item.branches.filter(b => !branch_uids.includes(b.uid));
                var_item.branches = filterRes;
                // 如果当前var已经没有分支了，则从分支的vars中删除当前var
                if (var_item.branches.length == 0) {
                    var_item.delete = true;
                }
            }
            this.vars = this.vars.filter(vi => !vi.delete);
            // 将已合并的分支删除
            this.all_branches = this.all_branches.filter(e => !branch_uids.includes(e.uid));
        }
    }
}
class Var {
    static sp_count = 1;
    static getSPCount() {
        return -(Var.sp_count++);
    }
    constructor(file, belonged_field, name, node) {
        this.entity_type = "Var";
        this.node = node;
        if (node)
            this.node.entity = this;
        if (name === "") {
            this.name = "__empty_str__";
        } else {
            this.name = name ? name : "__unknown__";
        }
        this.file = file;
        this.belonged_field = belonged_field;
        this.shortFile = this.file.replace(this.belonged_field.app.root, '').replace(/\\/g, '/');

        // 对每个var实体，初始化属性域
        this.obj_field = new Field(
            this.belonged_field.app,
            this.belonged_field.file,
            { type: "ObjectExpression", id: -(Field.sp_count++) },
            this.belonged_field
        );
        this.obj_field.fieldVar = this;

        // 访问记录和依赖构建
        this.latest_rec = undefined;
        this.rec_list = [];
        this.deps = [];

        // 跨文件引用
        this.refed_by = [];
        this.refs = [];

        // 是否为保留变量，决定是否强制更新跨作用域的访问记录
        this.reserved;

        // 赋值关系，记录参与的所有赋值与被赋值
        this.assignsTo = [];
        this.assignedBy = [];

        this.propAfter;

        // 本var创建于obj_var的obj_field中
        this.obj_var;

    }
    /**
     * 将本var的obj_field设置为给定field，同时更改给定field的fieldVar
     */
    setObjField(o) {
        this.obj_field = o;
        o.fieldVar = this;
    }
    /**
     * 返回满足func的本作用域声明的var
     */
    getObjFieldDeclaredVar(func) {
        return this.obj_field.declared_vars.find(e => func(e));
    }
    /**
     * 在assignedBy中搜索给定rec id对应的var
     */
    searchValueAssignedBy(recId) {
        let res = this.assignedBy.find(e => e.rec_id == recId);
        if (res) return res.var_entity;
    }
    /**
     * 在assigns to中搜索给定rec id对应的var
     */
    searchValueAssignedTo(recId) {
        let res = this.assignsTo.find(e => e.rec_id == recId);
        if (res) return res.var_entity;
    }
    /**
     * 返回本var在给定分支下的last rec
     */
    getLatestRecInBranch(branch, branch_id) {
        let var_entity = this;
        if (branch_id) {
            var_entity = branch.getVarOfBranch(this, branch_id);
        }
        return var_entity.latest_rec;
    }
    /**
     * 设置给定分支下的本var缓存中的last rec
     */
    setLatestRec(recs, branch, branch_id) {
        let var_entity = this;
        if (branch_id) {
            var_entity = branch.getVarOfBranch(this, branch_id);
        }
        var_entity.latest_rec = recs;
    }
    /**
     * 返回本var所在属性的顶层对象var
     */
    toTopLevelObjVar() {
        let cur = this;
        while (cur.obj_var) cur = cur.obj_var;
        return cur;
    }
    /**
     * 返回由objvar确定的全名
     */
    getFullName() {
        let cur = this;
        let res = this.name;
        while (cur.obj_var) {
            res = cur.obj_var.name + "." + res;
            cur = cur.obj_var;
        }
        return res;
    }
    /**
     * 判断本var是否与给定var是同一个对象
     */
    isIdenticalWith(another) {
        return another.var_entity
            && another.var_entity == "Var"
            && this.node.id == another.node.id;
    }
    /**
     * 对给定的左值var，构建assign to类型的依赖
     */
    addAssignDep(leftVar, branch, branch_id) {
        if (!leftVar.isIdenticalWith(this) && !leftVar.hasPropOf(this) && !this.hasPropOf(leftVar)) {
            // 上一次read dep的时候添加的dep，使用这个dep能保证dep里to的value被正确记录
            let leftRec = leftVar.getLatestRecInBranch(branch, branch_id);

            // 依赖关系
            // 右 -> 左
            leftRec && this.addDependence(
                {
                    type: "assign to",
                    var_entity: leftVar,
                    recs: leftRec
                },
                branch,
                branch_id
            );
        }
    }
    /**
     * 返回本var所在对象的所有前序属性
     */
    getPropertiesBefore() {
        let before = [];
        let cur = this;
        while (cur.obj_var) {
            before.push(cur.obj_var);
            cur = cur.obj_var;
        }
        return before;
    }
    /**
     * 返回本var的所有后续属性
     */
    getPropertiesAfter(branch, branch_id, doCal, done) {
        let calPropAfter = () => {
            done || (done = []);
            let after = [];
            if (!done.includes(this.node.id)) {
                done.push(this.node.id)
                let objVars = this.getObjVarByAssign(branch, branch_id);
                for (let objVar of objVars) {

                    let propOfThis = objVar.obj_field.declared_vars.filter(e =>
                        !e.name.startsWith("__")
                        && e.name != "this"
                    );
                    after.push(...propOfThis);
                    for (let prop of propOfThis) {
                        after.push(...prop.getPropertiesAfter(branch, branch_id, false, done))
                    }
                }
                this.propAfter = after;
            }
            return after;
        }
        return (doCal || !this.propAfter)
            ? calPropAfter()
            : this.propAfter;
    }
    refreshPropertiesAfter(branch, branch_id, done) {
        // 从顶层对象向下逐层强制计算更新
        this.toTopLevelObjVar().getPropertiesAfter(branch, branch_id, true);

        // 因为只用objVar判断前序对象时，到一个实际存在的ObjectExpression时就到头了
        // 如果这个ObjectExpression被赋值给其他对象，是找不到被赋值的对象的，所以还要检查toplevel对象的assigns to
        // 同时使用done避免赋值形成的环
        done || (done = [])
        if (!done.includes(this.node.id)) {
            done.push(this.node.id);
            this.getPropertiesBefore().forEach(prop => prop.assignsTo.forEach(e => e.refreshPropertiesAfter(branch, branch_id, done)));
        }
    }
    /**
     * 判断给定var是否是本var的后序属性
     */
    hasPropOf(objVar, branch, branch_id) {
        let before = objVar.getPropertiesBefore(branch, branch_id);
        return before.some(e => e.node.id == this.node.id);
    }
    /**
     * 构建对象依赖，考虑其前序属性和后序属性
     */
    addDependence(info, branch, branch_id) {
        let addBefore = () => {
            let before = this.getPropertiesBefore().reduce((pre, cur) => pre.concat(cur), []);
            let beforeInfo = Object.assign({ informing: true }, info);
            before.forEach(v => v.addDependenceSingle(beforeInfo, branch, branch_id));
        }

        let addAfter = () => {
            let after = this.getPropertiesAfter(branch, branch_id);
            let afterInfo = Object.assign({ informing: true }, info);
            after.forEach(v => v.addDependenceSingle(afterInfo, branch, branch_id));
        }
        if (info.type != "pass") {
            if (info.type != "assign to") {
                addBefore();
            }
            addAfter();
        }
        this.addDependenceSingle(info, branch, branch_id);
    }
    /**
     * 对单个对象构建依赖
     */
    addDependenceSingle(info, branch, branch_id) {
        let recs_copy = info.type == "read" ? info.recs.map(e => e.shallowCopy()) : info.recs;
        let var_from = branch_id ? branch.getVarOfBranch(this, branch_id) : this;
        let from = var_from.latest_rec;
        let rec_list = var_from.rec_list;
        let deps = var_from.deps;
        if (!["pass", "left"].includes(info.type) && from
            // 当分支合并时（info.type = pass），不添加依赖，只把记录加入rec list
            // 对reserved的变量，不记录其read类型的依赖，其信息通过call列表进行统计
            && !(this.reserved && info.type == "read")
        ) {
            // 对每个from，都构建一个到to的依赖
            for (let f of from) {
                for (let t of recs_copy) {
                    // from 不能是 to 的子作用域, from 不是 to 的子节点
                    if (!t.expr.has_descendant(f.expr) && !f.field.isSubFieldOf(t.field)) {
                        let dep = new Dep(info.type, f, t);
                        info.type == "read" && t.after(f);

                        // 保存当前的引用快照
                        // 避免后续引用分析时，使用了错误的引用对象
                        if (info.type == "to callee") {
                            let function_snapshot = info.var_entity.getFunctionFields(branch, branch_id);
                            function_snapshot.length > 0 && (dep.function_snapshot = function_snapshot);
                        }
                        deps.push(dep);
                    }
                }
            }
        }
        // 同一expr对应的rec不会重复加入rec list
        let latest = rec_list[rec_list.length - 1];
        for (let t of recs_copy) {
            if (latest && latest.some(e => e.expr.id == t.expr.id)) {
                return;
            }
        }


        if (info.type == "assign to") {
            this.recordAssignTo(info, branch, branch_id);
        } else if (info.type == "to callee") {
            this.recordAsArgOf(info, branch, branch_id);
        } else {
            this.setLatestRec(recs_copy, branch, branch_id);
            rec_list.push(recs_copy);
        }

    }
    /**
     * 添加值，记录在latest rec中
     */
    recordAssignTo(info, branch, branch_id) {
        let left = info.var_entity;
        let this_latest = this.getLatestRecInBranch(branch, branch_id);
        if (this_latest) {
            info.informing
                ? this_latest.forEach(e => e.write({ im_assigns_to: [left] }))
                : this_latest.forEach(e => e.write({ ex_assigns_to: [left] }));
        }
        let left_latest = left.getLatestRecInBranch(branch, branch_id);
        if (left_latest) {
            info.informing
                ? left_latest.forEach(e => e.write({ im_value: [this] }))
                : left_latest.forEach(e => e.write({ ex_value: [this] }));
        }

        this.assignsTo.push(left);
        left.assignedBy.push(this);
        // 刷新left的propafter
        info.informing || left.refreshPropertiesAfter(branch, branch_id);

    }
    recordCallee(args, branch, branch_id) {
        let this_latest = this.getLatestRecInBranch(branch, branch_id);
        if (this_latest) {
            args.forEach(arg => this_latest.forEach(e => e.write({ ex_has_arg: [{ arg }] })));
        }
    }
    /**
     * 添加调用依赖
     */
    recordAsArgOf(info, branch, branch_id) {
        let callee = info.var_entity;
        let argIndex = info.arg_index;
        let thisLatest = this.getLatestRecInBranch(branch, branch_id);
        if (thisLatest) {
            info.informing
                ? thisLatest.forEach(e => e.write({ im_as_arg_of: [{ callee: callee, arg_index: argIndex }] }))
                : thisLatest.forEach(e => e.write({ ex_as_arg_of: [{ callee: callee, arg_index: argIndex }] }));
        }
        let calleeLatest = callee.getLatestRecInBranch(branch, branch_id);
        if (calleeLatest && !info.informing) {
            calleeLatest.forEach(e => e.write({ ex_has_arg: [{ argVar: this, argIndex: argIndex }] }))
        }
    }
    /**
     * 给定变量名按ast分割的属性名列表，返回相应var
     */
    getPropertyVar(name_split, branch, branch_id) {
        /**
         * objVar: 属性添加的field的fieldVar
         * cur_prop_var: 访问属性的var
         */
        let getVarFromObjVar = (objVar, cur_prop_name) => {
            let field = objVar.obj_field;
            if (field) {
                let isNewProp = false;
                let propVar = field.declared_vars.find(e => e.name == cur_prop_name);
                if (!propVar) {
                    // 属性找不到，动态添加
                    propVar = new Var(field.file, field, cur_prop_name, { type: "dynamic", id: -(Var.sp_count++) });
                    isNewProp = true;
                }
                propVar.obj_var || (propVar.obj_var = objVar);
                propVar.reserved || (propVar.reserved = objVar.reserved);
                propVar.isParam || (propVar.isParam = objVar.isParam);

                if (objVar.isAppInstanceData)
                    propVar.isAppInstanceData = true;
                if (isNewProp) {
                    let propBefore = propVar.getPropertiesBefore();
                    propBefore.forEach(e => e.getPropertiesAfter(branch, branch_id).push(propVar));
                    field.declared_vars.push(propVar);
                }

                return propVar;
            }
        }
        if (name_split.some(s => s.startsWith(this.name)) || name_split[0].startsWith("__")) {
            // 为了不排除getApp和require还要算__开头
            // 因为是从本var指向的属性出发的，所以要让name_split把本var之前的属性都删掉
            let this_name_index = name_split.findIndex(e => e.startsWith(this.name));
            this_name_index > -1 && (name_split = name_split.slice(this_name_index + 1));
            if (this_name_index < 0) {
                this_name_index = name_split.findIndex(e => e.startsWith("__"));
                this_name_index > -1 && (name_split = name_split.slice(this_name_index + 1));
            }
            let CurrentProperties = [this];
            while (name_split.length > 0) {
                let cur_prop_name = name_split.shift();
                let NextProperty = [];
                for (let cur of CurrentProperties) {
                    let objectVars = cur.getObjVarByAssign(branch, branch_id);
                    for (let o of objectVars) {
                        let prop_var = getVarFromObjVar(o, cur_prop_name);
                        prop_var && NextProperty.push(prop_var);
                    }
                }
                CurrentProperties = NextProperty;
            }
            return CurrentProperties;
        }
    }
    /**
     * 根据调用关系，查询满足func的var实体
     * options.short为true时，返回var
     * 否则返回结果的array
    */
    getRecordValue(func, options) {
        let defaultOptions = {
            done: [],
            res: []
        };
        options = options ? Object.assign(defaultOptions, options) : defaultOptions;
        options.done.push(this.node.id);
        let var_from_branch = this;
        let latest_rec = this.latest_rec;
        if (options.branch_id) {
            var_from_branch = options.branch.getVarOfBranch(this, options.branch_id);
            latest_rec = var_from_branch.latest_rec;
        }
        if (func(var_from_branch)) {
            if (options.short)
                return this;
            options.res.push(this);
        }
        if ((!this.name.startsWith("__") && latest_rec)) {
            for (let rec of latest_rec) {
                if (rec.ex_value) {
                    for (let v of rec.ex_value) {
                        if (!options.done.includes(v.node.id)) {
                            let r = v.getRecordValue(func, options);
                            if (options.short && r)
                                return r;
                        }
                    }
                }
            }
        }
        if (!options.short)
            return options.res;
    }
    /**
     * 返回赋值链中最初始的var
     */
    getOriginVarEntity(branch, branch_id) {
        // 返回引用链尾部的变量
        let fromAssign = this.getRecordValue(e => !e.latest_rec || !e.latest_rec[0] || !e.latest_rec[0].ex_value, { branch, branch_id, short: true });
        // let t = wx_api.getStorage时，
        // t的所有属性引用会记录在getStorage上，同时getStorage又是记录全局调用的，所以此处的t的属性可能会与其他地方的同名属性产生冲突，通过reserved排除
        if (fromAssign && !fromAssign.reserved)
            return fromAssign;
        return this;
    }
    /**
     * 根据赋值关系，查找满足func的var实体
     */
    getVarSatisfying(func, options) {
        let res = []
        res.push(...this.getRecordValue(func, options));
        if (res.length == 0) {
            let origin = this.getOriginVarEntity();
            func(origin) && res.push(origin);
        }
        return res;
    }
    /**
     * 根据赋值关系，查找表示对象的var实体
     * 如果找不到，返回origin var
     * 会排除function var
     */
    getObjVarByAssign(branch, branch_id) {
        let res = [];
        res = res.concat(this.getRecordValue(e => e.name.startsWith("__object__"), { branch, branch_id }));
        if (res.length == 0) {
            let origin = this.getOriginVarEntity(branch, branch_id);
            origin.name.startsWith("__function__") || res.push(origin);
            res.length == 0 && (origin.node.id == this.node.id || res.push(this));
        }
        return res;
    }
    getObjVarWithRefs() {
        let assignRes = this.getObjVarByAssign();
        return assignRes.reduce((pre, cur) =>
            pre.concat(cur.refs.length > 0
                ? cur.refs.reduce((pre, cur) => pre.concat(cur.getObjVarWithRefs()), [])
                : cur
            ), []);
    }
    /**
     * 回溯调用链，查找本var在第一个存在函数域定义的调用链节点上的所有函数定义
     */
    getFunctionFieldsTracebackParam() {
        return this.tracebackParams(e => e.getFunctionFields().length)
            .reduce((pre, cur) => pre.concat(cur.getFunctionFields()), []);
    }
    /**
     * 如果本var与参数相关，返回相关的参数
     */
    getparamRelativeVar() {
        let res = this.paramIndex > -1;
        return res
            ? this
            // 由参数直接赋值
            : this.getRecordValue(e => e.paramIndex > -1, { short: true });
    }
    /**
     * 递归回溯调用链，查找满足func的参数var
     */
    tracebackParams(func, res, done) {
        res || (res = []);
        done || (done = []);
        if (done.includes(this.node.id))
            return res;
        done.push(this.node.id);
        let RelativeParamVar = this.getparamRelativeVar();
        if (RelativeParamVar) {
            let thisFunctionField = RelativeParamVar.belonged_field.toFunctionField();
            thisFunctionField.calledByFunction && thisFunctionField.calledByFunction.forEach(e => {
                // 实参的Var实体
                let theArg = e.call.args.find(e => e.arg_index == RelativeParamVar.paramIndex);
                if (theArg) {
                    let argVar = theArg.visit_res.var_entity;
                    let theArgSnapshot = e.call.arg_snapshot
                        ? e.call.arg_snapshot.filter(e => e.arg_index == RelativeParamVar.paramIndex)
                            .map(e => e.snapshot).reduce((pre, cur) => pre.concat(cur), [])
                        : [];
                    // 先查快照
                    let resTemp = theArgSnapshot.filter(e => func(e));
                    resTemp.length || resTemp.push(...argVar.getVarSatisfying(func));
                    if (resTemp.length == 0) {
                        // 如果没有结果，递归
                        argVar.tracebackParams(func, res, done);
                    } else {
                        res.push(...resTemp);
                    }
                }
            })
        }
        return res;
    }
    /**
     * 查询ref和赋值关系，返回本var携带的函数定义
     */
    getFunctionFields(branch, branch_id) {
        let res = [];
        if (!branch) {
            // 创建ref在分析完成后，此时branch参数应为undefined
            this.getRecordValue(e => e.refs.length > 0, { branch, branch_id }).forEach(e => {
                let from_refs = e.refs[0].getFunctionFields();
                res.push(...from_refs);
            });
        }
        let from_expression = this.getRecordValue(e => e.name.startsWith("__function__"), { branch, branch_id }).map(e => e.obj_field);
        res.push(...from_expression);
        return res;
    }
    /**
     * 返回本var写的其他变量，以及写操作之后的流
     */
    flowOfReadThisVar() {
        /**
         * 截取从该dep之后的dep流列表
         */
        let DepsAfter = (dep) => {
            let cur = [dep.to.expr.id];
            let res = [dep];
            let s = [];
            while (cur.length) {
                let p = cur.pop();
                if (p in depsSet.startsWithNode) {
                    if (s.includes(p))
                        continue;
                    s.push(p);
                    res.push(...depsSet.startsWithNode[p]);
                    cur.push(...(depsSet.startsWithNode[p].map(e => e.to.expr.id)))
                }
            }
            return res;
        }
        if (!this.depsSet) this.flow();
        let depsSet = this.depsSet;

        // 本var写其他var，即对本var的读
        let readDeps = this.deps.filter(e => e.type == "assign to").map(e => {
            return ({
                // 排除其他无关的值
                thisVar: e.to.getAllValue().filter(e => e.node.id == this.node.id),
                thatVar: e.from.getAllAssignsTo(),
                flow: DepsAfter(e)
            })
        });
        return readDeps;
    }
    /**
     * 返回本var写的其他满足func(dep)的变量，以及写操作之前的流
     */
    flowBeforeWriteSatisfying(func) {
        /**
         * 截取从该dep之前的dep流列表
         */
        let DepsBefore = (dep) => {
            let cur = [dep.from.expr.id];
            let res = [dep];
            while (cur.length) {
                let p = cur.pop();
                if (p in depsSet.endsWithNode) {
                    res.push(...depsSet.endsWithNode[p]);
                    cur.push(...(depsSet.endsWithNode[p].map(e => e.from.expr.id)))
                }
            }
            return res;
        }

        if (!this.depsSet) this.flow();
        let depsSet = this.depsSet;
        let res = [];
        let depsOfThisAndAfter = this.getPropertiesAfter().reduce((pre, cur) => pre.concat(cur.deps), []).concat(this.deps);
        // 本var写满足func条件的var，抽出写操作之前本var的流
        depsOfThisAndAfter.filter(e => e.type == "assign to" && func(e))
            .forEach(e => {
                res.push(({
                    thisVar: e.to.getAllValue(), // 本地的
                    thatVar: e.from.getAllAssignsTo(), //跨域的
                    flow: DepsBefore(e)
                }));
            });
        return res;

    }
    flow(done) {
        // 如果分析的函数有递归就走不出来了，参数done用来避免此类情况
        let res = [];
        // 已经访问过的节点，处理分支合并时节点被访问两次的情况
        let node_done = [];
        // 已经访问过的var实体，处理赋值 a = c(a)重复处理a变量的情况
        let var_done = [];
        if (!done) done = { nodeDone: [], funcDone: [] };


        let createDependenceSet = (var_entity, res, select) => {
            if (!res) res = {
                startsWithNode: {},
                endsWithNode: {}
            };
            //  防止t = t.data重复分析t爆堆
            if (var_done.includes(var_entity.node.id)) return;
            var_done.push(var_entity.node.id);
            for (let dep of var_entity.deps) {
                if (!select || select.includes(dep.type)) {
                    res.startsWithNode[dep.from.expr.id] || (res.startsWithNode[dep.from.expr.id] = []);
                    res.startsWithNode[dep.from.expr.id].some(e => e.to.expr.id == dep.to.expr.id) || res.startsWithNode[dep.from.expr.id].push(dep);

                    res.endsWithNode[dep.to.expr.id] || (res.endsWithNode[dep.to.expr.id] = []);
                    res.endsWithNode[dep.to.expr.id].some(e => e.from.expr.id == dep.from.expr.id) || res.endsWithNode[dep.to.expr.id].push(dep);
                }
            }
            // 在子属性的assign和call依赖不向前传递的情况下，需要递归子属性
            for (let v of var_entity.obj_field.declared_vars) {
                createDependenceSet(v, res, ["assign to", "to callee"]);
            }
            return res;
        }

        let forCallDependence = (callee, dep, functionField, argIndex, done) => {
            // 先找函数实体，找不到就找跨文件的函数引用
            // 如果找到，将对应参数的依赖加到deps obj中,构建实参到形参的依赖
            // 检查函数是否有返回值，如果有，检查是否有某条依赖的终点指向返回值节点
            // 如果没有，结束；如果有，检查callee的assign to，将左值的依赖加到deps obj中

            // 第一个参数 --> index = 0
            if (done.nodeDone.includes(callee.node.id)) return;
            done.nodeDone.push(callee.node.id);
            let paramVars = functionField.getParamVars(argIndex);
            if (paramVars.length == 0) {
                logger.log("no param in func def", JSON.stringify(functionField.node.loc) + " in " + functionField.file,
                    "corresponding to arg index", argIndex, "of call", JSON.stringify(dep.to.expr.loc), "in", this.file)
                return;
            }
            // 对找到的参数var求数据流
            for (let p of paramVars) {
                // 递归求数据流
                let param_flow_res = functionField.getParamFlow(p, done);
                // 创建实参到形参的依赖
                let d = new Dep("arg to param", dep.from, p.rec_list[0][0]);
                res.push(d);
                res = res.concat(param_flow_res);
                // 检查函数返回值
                let call_is_assigned_to = callee.deps.find(e => e.type == "assign to" && e.from.expr.id == dep.to.expr.id);
                // 如果函数有返回值且作为赋值语句的右值
                if (call_is_assigned_to && functionField.return_value) {
                    let all_fin = param_flow_res.map(e => e.to.expr.id);
                    for (let rv_item of functionField.return_value) {
                        for (let rv of rv_item.var_nodes) {
                            if (all_fin.includes(rv.node.id)) {
                                // 如果存在一条数据流的终点指向了返回值的节点，构建返回值到赋值语句左值的依赖
                                let d = new Dep("ret to left", rv.rec, call_is_assigned_to.to);
                                res.push(d);
                                let left_vars = call_is_assigned_to.from.ex_assigns_to;
                                left_vars.forEach(e => createDependenceSet(e, depsSet));
                            }
                        }
                    }
                }
            }
        }

        let getFunctionFieldOf = (callee, dep) => {
            let res = [];
            // 跨文件引用
            callee.getRecordValue(e => e.refs.length > 0).forEach(e => {
                let temp = e.getFunctionFields();
                res.push(...temp);
            });
            // 快照
            dep.function_snapshot && (res = res.concat(dep.function_snapshot));
            // 如果此时结果为空，就在最后的分析结果中get record value
            if (res.length == 0) {
                // this.xx中xx被赋值在调用处之后，这时snapshot结果为空，使用callee的getvalue补充，可能出现错误：
                // function (some_func) {
                //     some_func(a)
                //     some_func = xxx
                // }
                // 中，调用some_func(a)时，some_func的定义会在此被计算成xxx
                if (callee.latest_rec) {
                    for (let rec of callee.latest_rec) {
                        let assign_rec = rec.assign_rec ? rec.assign_rec : rec;
                        let fieldOfWhereAssigned = assign_rec.field;
                        if (fieldOfWhereAssigned.node.id != dep.to.field.node.id) {
                            // 定义和调用不能在一条执行路径上
                            let funcFields = callee.getFunctionFields();
                            res.push(...funcFields);
                        }
                    }
                }
            }
            // 如果还是空，traceParam
            if (res.length == 0) {
                let fromArg = callee.tracebackParams(e => e.getFunctionFields().length)
                    .reduce((pre, cur) => pre.concat(cur.getFunctionFields()), []);
                res.push(...fromArg);
            }
            return res;
        }

        let isSpecialCall = (name) => {
            return ["setData", "push", "unshift", "assign"].includes(name);
        }

        let last = [];
        let depsSet = createDependenceSet(this);
        if (this.node.id < 0) {
            last.push(...Object.keys(depsSet.startsWithNode).map(e => Number(e)));
        } else {
            last.push(this.node.id);
        }
        while (last.length > 0) {
            let node_id = last.shift();
            // 分支合并时并列的两条依赖的终点会被访问两次，要排除
            if (node_done.includes(node_id))
                continue;
            node_done.push(node_id);
            let deps_starts_with_node = depsSet.startsWithNode[node_id];
            if (deps_starts_with_node) {
                for (let dep of deps_starts_with_node) {
                    // 对dep传入的函数进行分析
                    let dep_to_id = dep.to.expr.id;
                    last.push(dep_to_id);
                    res.push(dep);

                    if (dep.type == "assign to") {
                        let left_vars = dep.from.getAllAssignsTo();
                        // 将所有左值的依赖加入set中
                        left_vars.forEach(e => createDependenceSet(e, depsSet));

                    } else if (dep.type == "to callee") {
                        // 使用all as args of 可能带来一些冗余的依赖
                        // this.setData({
                        //     data1:t2.data3
                        // })
                        // 中，data1，t2，data3（不出意外）各有一个到setData的依赖，但其实都是同一个source：data3 到setData的依赖
                        // 但是如果只考虑ex as arg of 就会丢失data3->setData的依赖
                        let calleeInfos = dep.from.getAllAsArgOf();
                        for (let callee_info of calleeInfos) {
                            let callee = callee_info.callee;
                            // 已分析且无结果，跳过
                            if (callee.noFuncDef) continue;
                            let funcName = callee.getFullName();

                            // 找origin，看是否是加密函数
                            let originFunc = callee.getOriginVarEntity();
                            if (originFunc && wx_api.isEncryptAPI(originFunc.getFullName())) {
                                dep.to.expr.isEncryptAPI = true;
                                let app = this.belonged_field.app;
                                app.recordEncryptInSource(app.nowSourcing.getFullName(), dep.to.expr.parent);
                            }

                            if (!callee.reserved) {
                                // 根据callee 的var实体，找func field定义
                                let functionFieldRes = getFunctionFieldOf(callee, dep);
                                if (functionFieldRes.length > 0) {
                                    for (let functionField of functionFieldRes) {
                                        let index = callee_info.arg_index;
                                        if (done.funcDone.includes(functionField.node.id))
                                            continue;
                                        done.funcDone.push(functionField.node.id);
                                        forCallDependence(callee, dep, functionField, index, done);
                                    }
                                } else if (!isSpecialCall(callee.name)) {
                                    callee.noFuncDef = true;

                                    // 找不到函数定义的to callee依赖可能会重复报 “can not find ...” 因为没有缓存其参数的分析结果
                                    logger.log("dep " + dep.id + " of flowing " + this.node.id +
                                        " <" + escodegen.generate(dep.from.expr.es_node) + ">"
                                        + ": can not find func def of:", callee.node.id, "<" + funcName + ">", callee.file, JSON.stringify(dep.to.expr.loc)
                                    );
                                    //统计找不到定义的函数
                                    this.belonged_field.app.undefinedFunc.push({
                                        name: funcName,
                                        loc: this.file + " " + String(dep.to.expr.loc.line)
                                    });
                                }
                            }
                        }
                    } else {

                    }
                }
            }
        }

        this.depsSet = depsSet;
        return res;
    }

    toJson() {
        return {
            id: this.node.id,
            declaredName: this.getFullName(),
            declaredLoc: this.node.loc,
            file: this.shortFile,
            type: wx_api.classify(this.getFullName())
        }
    }

    toEchartsNodeAsCallee() {
        return {
            name: String(this.node.id),
            declaredName: this.getFullName(),
            declaredLoc: this.node.loc,
            file: this.shortFile,
            type: this.functionType ? this.functionType : wx_api.classify(this.getFullName())
        }
    }
}
class Rec {
    static REC_ID = 0;
    constructor(expr, field) {
        this.expr = expr;
        this.id = Rec.REC_ID++;
        this.field = field;
    }

    shallowCopy() {
        let n = new Rec(null, null);
        let id = n.id;
        for (let p in this) n[p] = this[p];
        n.id = id;
        return n;
    }
    /**
     * 为访问记录添加新的信息
     */
    write(info) {

        for (let p in info) {
            if (p in this) {
                if (p == "ex_value") {
                    this.assign_rec = undefined;
                    // 追加
                    // this[p].push(...info[p].filter(e => !this[p].some(a => a.node && a.node.id == e.node.id)));
                    // 重写
                    this.ex_value = info.ex_value;
                }
            } else {
                this[p] = [...info[p]];
            }
        }
    }
    /**
     * 赋值，将给定访问记录的value属性拷贝到自身的value属性
     */
    after(right) {
        if (right.ex_value) {
            this.ex_value = [...right.ex_value];
            this.assign_rec = right.assign_rec ? right.assign_rec : right
        }
    }
    getAllAsArgOf() {
        let res = [];
        this.ex_as_arg_of && res.push(...this.ex_as_arg_of);
        this.im_as_arg_of && res.push(...this.im_as_arg_of);
        return res;
    }

    getAllValue() {
        let res = [];
        this.ex_value && res.push(...this.ex_value);
        this.im_value && res.push(...this.im_value);
        return res;
    }

    getAllAssignsTo() {
        let res = [];
        this.ex_assigns_to && res.push(...this.ex_assigns_to);
        this.im_assigns_to && res.push(...this.im_assigns_to);
        return res;
    }
}

class Dep {
    static DepID = 0;
    constructor(type, from, to) {
        this.id = Dep.DepID++;
        this.from = from;
        this.to = to;
        this.type = type;
    }
    toNormalWithNode() {
        return {
            type: this.type,
            from: {
                name: escodegen.generate(this.from.expr.es_node),
                node: this.from.expr,
                loc: this.from.expr.loc
            },
            to: {
                name: escodegen.generate(this.to.expr.es_node),
                node: this.to.expr,
                loc: this.to.expr.loc
            },
        }
    }

    toNormalOutput() {
        let res = {
            type: this.type,
            from: {
                name: escodegen.generate(this.from.expr.es_node),
                loc: this.from.expr.loc,
                id: this.from.expr.id,
                file:this.from.field.file,
            },
            to: {
                name: escodegen.generate(this.to.expr.es_node),
                loc: this.to.expr.loc,
                id: this.to.expr.id,
                file:this.to.field.file,
            },
            crossFile: this.fileCross,
            crossField: this.fieldCross
        }
        if (this.from.expr.fromSource)
            res.from.fromSource = this.from.expr.fromSource;
        if (wx_api.isSourceAPI(res.from.name)){
            res.from.fromSource = {"api":res.from.name,"loc":res.from.loc,"type":"API:return-value","file":this.from.field.file};
        }      
           
        if (wx_api.isSinkAPI(res.to.name))
            res.to.sink = true;
        if (this.to.expr.isEncryptAPI)
            res.to.isEncryptAPI = true;
        return res;
    }

    addSourceType(sourceInfo, suffix, recorder) {

        let compSuffix = (name) => {
            for (let s in suffix) {
                if (name.endsWith(s)) return { from: sourceInfo, ill: suffix[s] };
            }
        }

        // 记录api对应的数据流中变量后缀匹配属性
        let record = (api, node, ill) => {
            recorder[api].some(e => e.id == node.id) || recorder[api].push({
                id: node.id,
                file: sourceInfo.file,
                loc: node.loc,
                codeText: escodegen.generate(node.es_node),
                ill: ill
            })
        }

        let node = this.from.expr;
        let fromName = escodegen.generate(node.es_node);
        let res = compSuffix(fromName);
        if (res) {
            let api = res.from.api;
            api in recorder || (recorder[api] = []);

            this.from.expr.sourceType = res;
            record(api, this.from.expr, res.ill);
            if (this.type == "assign to") {
                this.to.expr.sourceType = res;
                // record(api, this.to.expr);
            }

        }
        return this;
    }
}
module.exports = {
    Field
}