const path = require("path");
const fs = require("fs");
const htmlparser2 = require("htmlparser2");
const DomNode = require("./dom.js").DomNode
const buildTreeDom = require("./dom.js").buildTreeDom


class Wxml {
    constructor(file_path, app) {
        // this.file_path = path.normalize(file_path)
        this.file_path = file_path;
        this.app = app

        // this.relative_path = path.relative(this.app.root, this.file_path)

        this.limited_search_depth = 1

        this.flow_res = {
            file: this.file_path.replace(".wxml", ".js"),
            flow_count: 0,
            sources: []
        }

        this.source_type = { file: this.file_path.replace(this.app.root, '').replace(/\\/g, '/'), infoType: [] };
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
            if (n.isEvent) {
                let cur_node = n
                while (n.fill_string.length === 0 && search_depth <= this.limited_search_depth) {
                    n.fill_string = this.getParentString(cur_node)
                    search_depth += 1
                    cur_node = cur_node.parent
                }
            }
        })
    }
    getParentString(node) {
        return node.parent.fill_string
    }
    source() {
        let uiSource = [];
        let jsPath = this.file_path.replace('.wxml', '.js');
        let pageInstance = this.app.getPageInstance(jsPath);
        if (pageInstance) {
            this.dom_root.traverse(n => {
                if (n.isEvent) {
                    uiSource.push(n.event_info)

                    for (let event_f of n.event_info.eventFunction) {
                        let flowsOfUI = [];
                        let eventFuncExprLoc;

                        let prop = pageInstance.obj_field.declared_vars.find(e => e.name == event_f);
                        if (prop) {
                            let funcDefs = prop.getFunctionFields();
                            for (let funcDef of funcDefs) {
                                let paramList = funcDef.getParams();
                                for (let vn of paramList) {
                                    eventFuncExprLoc = vn.node.loc
                                    vn.node.fromSource = {
                                        api: event_f,
                                        loc: eventFuncExprLoc,
                                        file: this.file_path.replace(".wxml", ".js"),
                                        text: n.getText(),
                                        type: "UI"
                                    }
                                    let flow_res = vn.flow()
                                    flowsOfUI.push(...flow_res);
                                }
                            }
                        }
                        this.flow_res.sources.push({
                            source: {
                                api: event_f,
                                loc: eventFuncExprLoc,
                                text: n.getText(),
                                type: "UI"
                            },
                            flow: flowsOfUI
                        });
                        this.source_type.infoType.push({
                            api: "PageInstance." + event_f,
                            loc: eventFuncExprLoc,
                            text: n.getText(),
                        });
                    }
                }
            })
        }
    }
}
//
// let test = new Wxml("D:\\WORK\\2022\\论文相关\\benchmark\\miniapp\\998二手挖机圈\\_-1965603458_27\\pages\\report\\report.wxml", {"root":null})
// test.getDom()
// test.dom_root.traverse(n=>{
//     if(n.isEvent){
//         console.log(n)
//     }
// },)


module.exports = {
    Wxml: Wxml
}