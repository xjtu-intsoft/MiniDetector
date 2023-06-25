// 此文件为wxml中ast的最小节点

let insensitive_attributes = ["class", "maxlength", "type", "value", "color", "size", "style", "lang", "data-event-opts", "src", "mode"]
let form_tags = ["button", "checkbox", "checkbox-group", "editor", "form", "input", "picker", "picker-view", "picker-view",
    "picker-view-column", "radio", "radio-group", "slider", "switch", "textarea"]
const getType = require("./nlp.js").getType;

class DomNode {
    constructor(xml_content, locate_file_entity) {
        global.dom_id = global.dom_id + 1

        this.node_id = global.dom_id;
        this.xml = xml_content;
        this.locate_file_entity = locate_file_entity;

        this.root = locate_file_entity.dom_root;
        this.children = [];
        this.parent = null;

        this.self_string = []
        this.fill_string = []

        this.getInfo()

        this.event_info = null
        this.isEvent = false
        this.event()
    }
    getInfo() {
        // console.log(this.xml)
        this.xml.children.forEach(child => {
            if (child.type === "text" && !child.data.match(/\n(\s)*/) && this.self_string.indexOf(child.data) === -1)
                this.self_string.push(child.data)
            for (const attr in child.attribs) {
                if (insensitive_attributes.indexOf(attr) === -1 && this.self_string.indexOf(child.attribs[attr]) === -1) {
                    this.self_string.push(child.attribs[attr])
                }
            }
        })

        this.fill_string = this.self_string
    }
    setChild(child_node) {
        this.children.push(child_node);
    }
    //递归迭代返回满足filter_function的AST节点，return_first指是否返回满足首个满足条件的节点
    traverse(filter_function, return_first = false) {
        let queue = [this];
        let res = [];
        while (queue.length > 0) {
            let top = queue.shift();
            if (filter_function(top)) {
                if (return_first) return top;
                res.push(top);
            }
            for (const i in top.children) {
                queue.push(top.children[i]);
            }
        }
        return return_first ? null : res;
    }
    event() {
        if (this.xml.attribs) {
            let opentypeApi = null
            let eventFunction = []
            let data_vars = []
            Object.keys(this.xml.attribs).forEach(a => {
                if (a === "opentype") {
                    opentypeApi = this.xml.attribs.opentype
                }
                if (a.indexOf("data-") !== -1) {
                    data_vars.push(a.substring(5))
                }
                if (a.indexOf("bind") !== -1 || a.indexOf("catch") !== -1) {
                    eventFunction.push(this.xml.attribs[a])
                }
            })
            if (opentypeApi || form_tags.indexOf(this.xml.name) !== -1) {
                this.event_info = { "opentypeApi": opentypeApi, "data_vars": data_vars, "eventFunction": eventFunction, "tag": this.xml.name }
                this.isEvent = true
            }
        }
    }
    getText(){
        let checked_string = []
        if (this.isEvent) {
            for (const s of this.fill_string) {
                if (checked_string.indexOf(s) === -1) {
                    checked_string.push(s)
                }
            }
            for (const e of this.event_info.eventFunction) {
                if (checked_string.indexOf(e) === -1) {
                    checked_string.push(e)
                }
            }
        }
        return checked_string
    }
    text2type() {
        let tp = []
        let formatStrType = ""
        if (this.isEvent) {
            let checked_string = []
            for (const s of this.fill_string) {
                if (checked_string.indexOf(s) === -1) {
                    checked_string.push(s)
                    getType(s, "overlap", 1).forEach(r => { 
                        var existTP = false;
                        var newTP = { "text": s, "type": r.type, "from": "ui-string" };
                        for(let etp of tp){
                            if(JSON.stringify(etp) === JSON.stringify(newTP)) {
                                existTP = true
                            }
                        }
                        if(!existTP) tp.push(newTP);
                    })
                }
            }
            for (const e of this.event_info.eventFunction) {
                if (checked_string.indexOf(e) === -1) {
                    checked_string.push(e)
                    getType(e, "overlap", 1).forEach(r => {
                        var existTP = false;
                        var newTP = { "text": e, "type": r.type, "from": "event-func" };    
                        for(let etp of tp){
                            if(JSON.stringify(etp) === JSON.stringify(newTP)) {
                                existTP = true
                            }
                        }
                        if(!existTP)  tp.push(newTP);
                        })
                }
            }
            formatStrType = tp.map(r => "text " + "<" + r.text + ">" + " of type " + "<" + r.type + ">" + " from " + "<" + r.from + ">")
                .join(";")
        }
        else {
            console.log("Error: not event node")

        }
        return { formatStrType, tp }
    }
}

function buildTreeDom(xml_content, root_node) {
    for (const child in xml_content.children) {
        createTreeNode(xml_content.children[child], root_node)
    }
}

function createTreeNode(xml_content, root_node) {
    if (xml_content.type === "tag") {
        const new_node = new DomNode(xml_content, root_node.locate_file_entity);
        new_node.parent = root_node;
        root_node.setChild(new_node);

        buildTreeDom(xml_content, new_node);
    }
}

module.exports = {
    DomNode: DomNode,
    buildTreeDom
}