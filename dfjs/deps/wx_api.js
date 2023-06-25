const fs = require("fs");

let wx_api_json = "./general/deps/dict/wx_api.json";
const WX_API_DICT = read_source_api(wx_api_json);

let sourceAPIList = WX_API_DICT.reduce((pre, cur) => cur.type.includes("Source") ? pre.concat(cur.api) : pre, []);
let sinkAPIList = WX_API_DICT.reduce((pre, cur) => cur.type.includes("Sink") ? pre.concat(cur.api) : pre, []);

// 加密API
let encriptApiList = [
    "md5",
    "encrypt",
    "aes",
    "base32", "base64", "b32", "b64", "btoa",
    "sha128", "sha256", "sha512",
    "hmac"
]

function read_source_api(path) {
    let str = fs.readFileSync(path);
    return JSON.parse(str);
}

function is_array(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}

function is_obj(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]' && obj.length == undefined;
}

function isEncryptAPI(api) {
    let lc = api.toLowerCase();
    return encriptApiList.some(e => lc.includes(e));
}

// wx.getStorageSync().attr
let nameCheck = (test, api) => test == api || (test.includes(api) && (test.replace(api, "").startsWith(".") || test.replace(api, "").startsWith("(")));

function isSourceAPI(test) {
    return sourceAPIList.some(e => nameCheck(test, e));
}

function isSinkAPI(test) {
    return sinkAPIList.some(e => nameCheck(test, e));
}

function getDictItem(api) {
    return WX_API_DICT.find(e => nameCheck(api, e.api));
}

function getDscp(api) {
    let res = getDictItem(api);
    if (res) return res.info_type_zh;
}

function classify(api) {
    let res = [];
    if (isSourceAPI(api)) res.push("source");
    if (isSinkAPI(api)) res.push("sink");
    return res.length > 0 ? res.join() : "normal";
}

function suffix(api) {

    let res = {};
    let item = getDictItem(api);
    if (item) {
        res["__api__"] = item.info_type_zh; // api描述
        let retType = [];
        if ('success_callback_parameters' in item && is_array(item['success_callback_parameters']))
            retType.push('success_callback_parameters');
        if ('return_value' in item && is_array(item['return_value']))
            retType.push('return_value');

        if (retType.length > 0) {
            for (let ret_type of retType) {
                for (let ret of item[ret_type]) {
                    if ('attributes' in ret) {
                        for (let ret_attr of ret['attributes']) {
                            let sfx = '.' + ret_attr.attribute;
                            let irasuto = ret_attr.illustration;
                            res[sfx] = irasuto;

                            if ('sub_attributes' in ret_attr) {
                                let stack = [
                                    [ret_attr, sfx]
                                ];
                                while (stack.length > 0) {
                                    let pop = stack.pop();
                                    for (let sb_attr of pop[0]['sub_attributes']) {
                                        let sbsfx = '.' + sb_attr.attribute;
                                        // let sbsfx = pop[1] + '.' + sb_attr.attribute;
                                        let sbirasuto = sb_attr.illustration;
                                        res[sbsfx] = sbirasuto;
                                        if ('sub_attributes' in sb_attr) {
                                            stack.push([sb_attr, sbsfx]);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return res;
}


console.log(isSourceAPI("...join"))

module.exports = {
    isSinkAPI,
    isSourceAPI,
    getDictItem,
    classify,
    suffix,
    getDscp,
    isEncryptAPI,
}