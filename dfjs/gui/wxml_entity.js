const path = require("path");
const fs = require("fs");
const htmlparser2 = require("htmlparser2");
const DomNode = require("./dom.js").DomNode
const buildTreeDom = require("./dom.js").buildTreeDom


class Wxml {
    constructor(file_path, app) {
        this.file_path = path.normalize(file_path)
        this.app = app

        this.relative_path = path.relative(this.app.root, this.file_path)

        this.limited_search_depth = 1

        this.flow_res = {
            file: this.file_path.replace(".wxml",".js"),
            flow_count: 0,
            sources: []
        }
    }
    getDom() {
        //wxml文件->wxml组件树
        const file = fs.readFileSync(this.file_path)
        const xml = htmlparser2.parseDocument(file)
        this.dom_root = new DomNode(xml, this)
        buildTreeDom(xml, this.dom_root)
        // 获取子节点信息
        this.dom_root.traverse(n => {
            n.traverse(n_child => {
                n_child.self_string.forEach(s => {
                    if (n.fill_string.indexOf(s) === -1)
                        n.fill_string.push(s)
                })
            })
        })
        // 填充剩余事件节点
        let search_depth = 0
        this.dom_root.traverse(n => {
            if(n.isEvent){
                let cur_node = n
                while(n.fill_string.length === 0 && search_depth <= this.limited_search_depth){
                    n.fill_string = this.getParentString(cur_node)
                    search_depth += 1
                    cur_node = cur_node.parent
                }
            }
        })
    }
    getParentString(node){
        return node.parent.fill_string
    }
    source(){
        let uiSource = [];
        this.getDom();
        this.dom_root.traverse(n=>{
            if(n.isEvent){
                uiSource.push(n.event_info)
                for(let event_f of n.event_info.eventFunction){
                    let flowsOfUI = [];
                    let eventFuncExprLoc= undefined
                    this.app.jsfiles[this.file_path.replace(".wxml",".js")] &&
                    this.app.jsfiles[this.file_path.replace(".wxml",".js")].field.subFields.forEach(subField=>{
                        if(subField.node.type === "ObjectExpression" && subField.node.parent && subField.node.parent.type == "CallExpression"
                            && subField.node.parent.es_node.callee.name == "Page" && subField.pending){
                            subField.pending.forEach(p=>{
                                if(p.node.parent.type==="Property" && p.node.parent.es_node.key.name===event_f){
                                    p.node.es_node.params.forEach(m=>{
                                        p.declared_vars.forEach(vn=>{
                                            if (m.name === vn.name) {
                                                eventFuncExprLoc = p.node.loc
                                                vn.node.fromSource = {
                                                    api: event_f,
                                                    loc: eventFuncExprLoc,
                                                    file:this.file_path.replace(".wxml",".js"),
                                                    text: n.fill_string,
                                                    type: "UI"
                                                }
                                                let flow_res = vn.flow()
                                                flowsOfUI.push(...flow_res);
                                            }
                                        })
                                    })
                                }
                            })
                        }
                    })

                    this.flow_res.sources.push({
                        source: {
                            api: event_f,
                            loc: eventFuncExprLoc,
                            text: n.fill_string,
                            type: "UI"
                        },
                        flow: flowsOfUI
                    });
                }
            }
        })
    }
}

module.exports = {
    Wxml: Wxml
}