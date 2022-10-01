const jieba = require("nodejieba");
const fs = require("fs");
const logger = require("../deps/logger");

const stop_words = ["_", ".", ",", "http", "https", ":", "com", "www", "/", "，", " ", "{", "}", "-", "?", "|"]
const privacy_buffer = fs.readFileSync("./gui/dict/privacy.json")
//输入描述，返回预测类型
function getType(description) {
    const privacy_dict = JSON.parse(privacy_buffer)

    const phrases = formatStatement(description)
    let res = []
    for (const ph of phrases) {
        for (const item of privacy_dict) {
            for (const category of item["value"]) {
                let except = false
                if (category.hasOwnProperty("except_word") && category.except_word.indexOf(ph)) except = true
                if (!except) {
                    for (const word of category["words_set"]) {
                        const match_result = match(ph, word)
                        if (match_result) res.push({ "type": category["category_zh"], "word": word, "match": match_result })
                    }
                }
            }
        }
    }
    if (res.length > 0)
        logger.log("<RESULT>", res.map(e => JSON.stringify(e)));
    return res
}
//词组匹配：完全包含/部分包含/不包含
function match(phrase, string) {
    if (phrase === string) return "COMPLETELY CONTAIN"
    else if (phrase.includes(string)) return "PARTIALLY CONTAIN"
    else return false
}
//是否包含中文
function haveChinese(description) {
    for (const char of description) {
        if (/.*[\u4e00-\u9fa5]+.*$/.test(char))
            return true;
    }
    return false;
}
//输入描述格式化
function formatStatement(description) {
    let res = []
    const words = jieba.cut(description, true)
    let en = []
    words.forEach(w => {
        if (stop_words.indexOf(w) === -1)
            haveChinese(w) ? res.push(w) : en.push(w);
    })
    en.forEach(e => {
        let end = 0
        let counter = 0
        let en_res = []
        for (const i in e) {
            if ((/[A-Z]/).test(e[i])) {
                counter = counter + 1
                if (end) en_res.push(e.substring(end, i))
                end = i
            }
        }
        en_res.push(e.substring(end, e.length))
        //全为大写不切分
        if (counter === e.length) en_res = [e]
        en_res.forEach(r => res.push(r.toLowerCase()))
    })
    // console.log("<FORMAT>", res)
    return res
}




module.exports = {
    getType
}