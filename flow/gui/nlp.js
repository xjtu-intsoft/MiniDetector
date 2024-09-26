const jieba = require("nodejieba");
const fs = require("fs");
const logger = require("../deps/logger");

const stop_words = ["_", ".", ",", "http", "https", ":", "com", "www", "/", "，", " ", "{", "}", "-", "?", "|"]
// "./gui/dict/privacy.json"
const privacy_path = "./general/gui/dict/privacy.json"
console.log(fs.readdirSync('./general/gui/dict'))
const privacy_buffer = fs.readFileSync(privacy_path)
const privacy_dict = JSON.parse(privacy_buffer)
const similarity_methods = ["cosine", "l2", "dice", "overlap", "contain"]

//输入描述，返回预测类型
function getType(description, method, threshold, tokenizer = false) {
    //是否启用分词器，启用：词->类型，不启用：句子->类型
    let phrases = []
    if (tokenizer) phrases = formatStatement(description)
    else phrases = [description]
    // logger.log("<TokenizerResult>", JSON.stringify(phrases))
    let res = []
    for (const ph of phrases) {
        //至少2个字符
        if (ph.length > 1) {
            //是否已分析完毕，避免重复分析
            let done = false
            for (const item of privacy_dict) {
                for (const category of item["value"]) {
                    var exceptFlag = false
                    if(category.except_word){
                        for(const eword of category["except_word"]){
                            if(eword.includes(ph)){
                                exceptFlag = true
                            }
                        }
                    }
                 
                    if(!exceptFlag){
                        for (const word of category["words_set"]) {
                            const simi = StrSimilarity(ph, word, method)
                            if (simi >= threshold && !done) {
                                if (tokenizer) done = true
                                res.push({ "type": category["category_zh"], "text": ph, "word": word, "simi": simi, "method": method })
                            }
                        }
                    } 
                }
            }
        }
    }

    // if (res.length > 0)
    //     logger.log("<GetTypeRESULT>", JSON.stringify(res));
    return res
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

function StrSimilarity(s1, s2, method) {
    if (["cosine", "l2"].includes(method)) return VectorDistance(s1, s2, method)
    else if (method === "dice") return DiceDistance(s1, s2)
    else if (method === "overlap") return OverLapCoefficientDistance(s1, s2)
    else if (method === "contain") return ContainMatch(s1, s2)
}

// cosine距离
function VectorDistance(s1, s2, method) {
    const s1_format = formatStatement(s1)
    const s2_format = formatStatement(s2)
    let token_space = new Set(s1_format.concat(s2_format))
    let s1_vec = []
    let s2_vec = []
    for (let token of token_space) {
        let s1_token_count = 0
        let s2_token_count = 0
        s1_format.forEach(s => { if (s === token) s1_token_count += 1 })
        s2_format.forEach(s => { if (s === token) s2_token_count += 1 })
        s1_vec.push(s1_token_count)
        s2_vec.push(s2_token_count)
    }

    if (method == "cosine") {
        let molecular = 0
        let denominator_x = 0
        let denominator_y = 0
        for (let i = 0; i < token_space.size; i++) {
            molecular += s1_vec[i] * s2_vec[i]
            denominator_x += s1_vec[i] * s1_vec[i]
            denominator_y += s2_vec[i] * s2_vec[i]
        }
        return molecular / Math.sqrt(denominator_x * denominator_y)
    }
    else if (method == "l2") {
        let l2 = 0
        let l2_base = 0
        for (let i = 0; i < token_space.size; i++) {
            l2 += (s1_vec[i] - s2_vec[i]) * (s1_vec[i] - s2_vec[i])
            l2_base += Math.max(s1_vec[i], s2_vec[i]) * Math.max(s1_vec[i], s2_vec[i])
        }
        return 1 - Math.sqrt(l2 / l2_base)
    }

}

// Dice距离
function DiceDistance(s1, s2) {
    return 2 * CommonCharater(s1, s2) / (s1.length + s2.length)
}

function CommonCharater(s1, s2) {
    let count = 0
    for (let s1_char of s1) {
        { if (s2.includes(s1_char)) count += 1 }
    }
    return count
}

//最长公共子串距离
function OverLapCoefficientDistance(s1, s2) {
    if (s1.length > s2.length) {
        [s1, s2] = [s2, s1]
    }
    let result = "";
    const len = s1.length;
    for (let j = len; j > 0; j--) {
        for (let i = 0; i <= len - j; i++) {
            result = s1.substr(i, j);
            if (s2.includes(result) && result.length > 1)
                return result.length / Math.min(s1.length, s2.length)
        }
    }
    return 0
}

function ContainMatch(s1, s2) {
    if (s2.includes(s1) || s1.includes(s2)) return 1
    else return 0
}


function test(method, threshold, ltp = false) {
    // 此函数用于评测类型提取方法的准确性
    console.log("CurrentTest", method, threshold)
    const all_sub_label = getALLSubType()
    let a_pre = 0
    let a_rec = 0
    let a_acc = 0
    let a_f1 = 0
    let sen_num = 0
    if (!ltp) {
        const label_data_path = "D:/WORK/2021/MPDF/baseline/pp/v3/label_part1.json"
        const label_data = JSON.parse(fs.readFileSync(label_data_path))
        for (let mp of label_data) {
            for (let sen of mp.sentences) {
                console.log(sen.text)
                const res = getType(sen.text, method, threshold, openToken)
                let tp = []
                let label_tp = []
                res.forEach(r => {
                    if (tp.indexOf(r.type) === -1) tp.push(r.type)
                })
                sen.pairs.forEach(p => {
                    p.type.forEach(t => {
                        if (label_tp.indexOf(t) === -1) label_tp.push(t)
                    })
                })

                console.log("tp", JSON.stringify(tp))
                console.log("ltp", JSON.stringify(label_tp), JSON.stringify(trans_type_str_to_category(label_tp)))
                // console.log("atp",JSON.stringify(all_sub_label))
                if (label_tp.length > 0) {
                    let ans = compare(tp, trans_type_str_to_category(label_tp), all_sub_label)
                    console.log(ans)
                    console.log("---------------")
                    a_pre += ans[0]
                    a_rec += ans[1]
                    a_acc += ans[2]
                    a_f1 += ans[3]
                    sen_num += 1
                }
            }
        }
        console.log("ALL-pre", a_pre / sen_num)
        console.log("ALL-rec", a_rec / sen_num)
        console.log("ALL-acc", a_acc / sen_num)
        console.log("ALL-f1", a_f1 / sen_num)
        console.log("Error-words", error_words)

        return [a_pre / sen_num, a_rec / sen_num, a_acc / sen_num, a_f1 / sen_num]
    }
    else {
        const ltp_data_path = "D:/WORK/2022/论文相关/ASE/data/extracted_data_test.json"
        const ltp_label_data = JSON.parse(fs.readFileSync(ltp_data_path))
        for (let mp of ltp_label_data) {
            for (let r of mp.res) {
                console.log(r.label.text)
                let tp = []
                let label_tp = []
                for (let ltp of r.ltp_result.ltp_res) {
                    const text = ltp.seg
                    const text_tp = getType(text, method, threshold, openToken)
                    console.log("<SEG>", text)
                    text_tp.forEach(t => {
                        if (tp.indexOf(t.type) === -1) tp.push(t.type)
                    })
                }
                r.label.pairs.forEach(p => {
                    p.type.forEach(t => {
                        if (label_tp.indexOf(t) === -1) label_tp.push(t)
                    })
                })

                console.log("tp", JSON.stringify(tp))
                console.log("ltp", JSON.stringify(label_tp), JSON.stringify(trans_type_str_to_category(label_tp)))

                if (label_tp.length > 0) {
                    let ans = compare(tp, trans_type_str_to_category(label_tp), all_sub_label)
                    console.log(ans)
                    console.log("---------------")
                    a_pre += ans[0]
                    a_rec += ans[1]
                    a_acc += ans[2]
                    a_f1 += ans[3]
                    sen_num += 1
                }
            }
        }
        console.log("ALL-pre", a_pre / sen_num)
        console.log("ALL-rec", a_rec / sen_num)
        console.log("ALL-acc", a_acc / sen_num)
        console.log("ALL-f1", a_f1 / sen_num)
        console.log("Sen Num", sen_num)
        console.log("Error-words", error_words)

        return [a_pre / sen_num, a_rec / sen_num, a_acc / sen_num, a_f1 / sen_num]
    }
}

function trans_type_str_to_category(type_list) {
    let res = []
    for (let tp_str of type_list) {
        for (let k of privacy_dict) {
            for (let category of k.value) {
                for (let w of category.words_set) {
                    if ((category.words_set.indexOf(tp_str) >= 0 || tp_str.includes(w)) && res.indexOf(category.category_zh) === -1) {
                        res.push(category.category_zh)
                    }
                }
            }
        }
    }
    return res
}

function compare(base_label, test_label, all_label) {
    let tp = 0
    let fp = 0
    let fn = 0
    let tn = 0

    for (const i of base_label) {
        if (test_label.indexOf(i) >= 0) tp += 1
    }
    for (const i of test_label) {
        if (base_label.indexOf(i) === -1) fp += 1
        error_words.push(i)
    }
    for (const i of base_label) {
        if (test_label.indexOf(i) === -1) fn += 1
    }
    for (const i of all_label) {
        if (test_label.indexOf(i) === -1 && base_label.indexOf(i) === -1) tn += 1
    }

    const pre = tp + fp > 0 ? tp / (tp + fp) : 0
    const rec = tp + fn > 0 ? tp / (tp + fn) : 0
    const acc = (tp + tn) / (tp + tn + fp + fn)
    const f1 = pre > 0 & rec > 0 ? 2 * pre * rec / (pre + rec) : 0

    return [pre, rec, acc, f1]
}

function getALLSubType() {
    let dict = []
    for (const item of privacy_dict) {
        for (const category of item["value"]) {
            if (!dict.includes(category.category_zh)) dict.push(category.category_zh)
        }
    }
    return dict
}

module.exports = {
    getType
}