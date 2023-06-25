const esprima = require("esprima");
const escodegen = require("escodegen");
const fs = require("fs");
const wx_api = require("./wx_api");
const logger = require("./logger");

function is_array(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}
function is_obj(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]' && obj.length == undefined;
}
function create_node_recur(obj, node) {
    for (var i in obj) {
        if (i == "loc") {
            node.set_loc(obj[i]["start"]);
        }
        else if (i == "range" || i == "regex" ||
            (i != "type" && !is_array(obj[i]) && !is_obj(obj[i]))) {
            node.set_attr(i, obj[i]);
        } else if (is_array(obj[i])) {
            // if (obj[i].length > 0) {
            //     node.set_attr(i, obj[i]);
            // }
            for (var el in obj[i]) {
                if (is_obj(obj[i][el])) {
                    create_node(obj[i][el], node, { "name": i, "type": "array" });
                }
            }
        } else if (is_obj(obj[i])) {
            create_node(obj[i], node, { "name": i, "type": "object" });
        }
    }
}
function create_node(child, parent, role) {
    if ("type" in child) {
        var node = new Node();
        node.set_type(child["type"]);
        node.set_es_node(child);
        node.set_parent(parent);
        node.set_role(role);
        parent.set_child(node);
        create_node_recur(child, node);
    }
}
class Node {
    static count = 1
    constructor() {
        this.id = Node.count++;
        this.type = "Script";
        this.parent = undefined;
        this.children = [];
        this.loc = undefined;
        this.es_node = undefined;
        this.role = undefined;
        this.attr = {};

        this.dep_children = [];
        this.dep_parent = [];

        /**
         * 新增
         * 求值顺序的下一个求值节点，存的是Node对象
         */
        this.next = [];
        /**
         * 该节点对应的实体
         */
        this.entity = [];
        /**
         * 节点所在的field
         */
        this.field = undefined;
    }
    set_parent(parent) {
        this.parent = parent;
    }
    set_loc(loc) {
        this.loc = loc;
    }
    set_type(type) {
        this.type = type;
    }
    set_child(child) {
        this.children.push(child);
    }
    set_attr(attr_name, attr_val) {
        this.attr[attr_name] = attr_val;
    }
    set_role(role) {
        this.role = role
    }
    set_es_node(es_node) {
        this.es_node = es_node;
    }
    /**
     * 新增
     * 调试用
     * 对象化node，使其可以被json化打印
     */
    to_json() {
        return {
            id: this.id,
            type: this.type,
            // loc: this.loc,
            attrs: this.attr,
            loc: this.loc.line,
            // field: String(this.field),
            children: this.children.map(c => c.to_json())
        }
    }
    to_json_single() {
        return {
            id: this.id,
            type: this.type,
            // loc: this.loc,
            attrs: this.attr,
            loc: this.loc.line,
            text: escodegen.generate(this.es_node)
        }
    }
    /**
     * 如果是变量类型 member expression、identifier
     * 返回变量名
     * 否则看是否是可以求变量的类型 sequence expression
     */
    member_variable() {
        let cur = this.parent;
        let pre = this;
        while (true) {
            if (cur.type == "MemberExpression")
                pre = cur, cur = cur.parent;
            else if (cur.type == "CallExpression" && cur.children[0].id == pre.id)
                cur = cur.parent;
            else
                break;
        }
        // while (pre.type == "MemberExpression") pre = pre.children[0];
        return pre;
    }
    member_obj() {
        let cur = this.member_variable();
        while (true) {
            if (cur.type == "MemberExpression" || cur.type == "CallExpression")
                cur = cur.children[0];
            else break;
        }
        return cur;
    }
    split_member_expr() {
        if (this.type == "MemberExpression") {
            let res = [];
            let cur = this;
            while (true) {
                if (cur.type == "MemberExpression") {
                    res.unshift(cur.children[1]);
                    cur = cur.children[0];
                } else if (cur.type == "CallExpression") {
                    cur = cur.children[0];
                } else if (cur.type == "AssignmentExpression") {
                    cur = cur.children[0];
                } else {
                    break;
                }
            }
            res.unshift(cur);
            return res;
        }
    }
    traverse(func, short = false) {
        // BFS遍历子节点
        // 默认返回所有满足func的子节点，short为true返回第一个满足func的子节点
        var q = [this];
        var res = [];
        while (q.length > 0) {
            var sh = q.shift();
            if (func(sh)) {
                if (short) return sh;
                res.push(sh);
            }
            for (var i in sh.children) {
                q.push(sh.children[i]);
            }
        }
        return short ? null : res;
    }
    backTo(func) {
        let cur = this.parent;
        while (cur) {
            if (func(cur)) return cur;
            cur = cur.parent;
        }
    }
    has_descendant(node) {
        // node是否存在于该节点的子节点中
        return this.traverse((e => e.id == node.id), true) != null;
    }
    index_of(parent) {
        // 返回某节点在指定节点的children中的索引
        if (parent) {
            for (var i = 0; i < parent.children.length; ++i) {
                if (parent.children[i].has_descendant(this)) return i;
            }
            return -1;
        }
    }
    /**
     * 在echarts里输出的node信息
     */
    toEchartsNode() {
        let codeText = escodegen.generate(this.es_node);
        let res = {
            name: String(this.id),
            value: {
                text: codeText,
                loc: "line " + this.loc.line + ", col: " + this.loc.column,
                file: this.file
            }
        }

        // 如果自己是source api，添加自己获取的信息类型描述
        let dscp = wx_api.getDscp(codeText);
        dscp && (res.value.sourceDscp = dscp);

        // 该变量的source api信息
        this.sourceInfo && (res.value.sourceInfo = this.sourceInfo);

        // 该变量对应source api返回值的属性
        this.sourceType && (res.value.sourceType = this.sourceType);

        // source api本身节点和source api的回调参数 type属性会被设置为source
        res.value.type = wx_api.classify(this.sourceInfo ? this.sourceInfo.value.text : codeText);

        // 是否是加密api
        this.isEncryptAPI && (res.isEncryptAPI = true);

        return res;
    }

    toEchartsNodeAsCallee() {
        let sliceLen = 33;
        let text = escodegen.generate(this.es_node).replace(/\s/g, "");
        if (text.length > sliceLen) {
            text = text.slice(0, sliceLen) + "...";
        }
        return {
            name: String(this.id),
            declaredName: text,
            declaredLoc: this.loc,
            file: this.file,
            type: wx_api.classify(text),
        }
    }
}

// Node.prototype.toString = function () { return this.id; }


class AST {
    constructor(js_file) {
        this.js_file = js_file;
        let text = fs.readFileSync(js_file).toString('utf-8');
        try {
            this.es_ast = esprima.parse(text, { loc: true });
        } catch (e) {
            logger.log("ast error:", js_file)
        }
        // this.es_ast = esprima.parse(text);
        // dump_ast(this.es_ast);

        // 创建Node语法树
        this.ast = new Node();
        create_node_recur(this.es_ast, this.ast);

    }
}
module.exports = {
    AST
}