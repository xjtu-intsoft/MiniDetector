const jieba = require("nodejieba");
const fs = require("fs");
// "./gui/dict/privacy.json"
const privacy_path = "D:/WORK/2022/mpdf_dev/mpdf-df/gui/dict/privacy_v3_format.json"
const privacy_buffer = fs.readFileSync(privacy_path)
const privacy_dict = JSON.parse(privacy_buffer)
const getType = require("./nlp.js").getType()

function test(method,threshold){
    // 此函数用于评测类型提取方法的准确性
    console.log("CurrentTest",method,threshold)
    const label_data_path = "D:/WORK/2021/MPDF/baseline/pp/v3/label_part1.json"
    const label_data = JSON.parse(fs.readFileSync(label_data_path))
    const all_sub_label = getALLSubType(label_data)
    let a_pre = 0
    let a_rec = 0
    let a_acc = 0
    let sen_num = 0
    for(let mp of label_data){
        for(let sen of mp.sentences){
            console.log(sen.text)
            const res = getType(sen.text, method, threshold)
            let tp = []
            let label_tp = []
            res.forEach(r=>{
                if(tp.indexOf(r.type) === -1) tp.push(r.type)
            })
            sen.pairs.forEach(p=>{
                p.type.forEach(t=>{
                    if(label_tp.indexOf(t) === -1) label_tp.push(t)
                })
            })

            console.log("tp",JSON.stringify(tp))
            console.log("ltp",JSON.stringify(label_tp))
            // console.log("atp",JSON.stringify(all_sub_label))

            let ans = compare(tp, label_tp, all_sub_label)
            console.log(ans)
            console.log("---------------")
            if(ans[0] > 0 && ans[1] > 0){
                a_pre += ans[0]
                a_rec += ans[1]
                a_acc += ans[2]
                sen_num += 1
            }
        }
    }
    console.log("ALL-pre",a_pre/sen_num)
    console.log("ALL-rec",a_rec/sen_num)
    console.log("ALL-acc",a_acc/sen_num)
    console.log("Error-words", error_words)

    return [a_pre/sen_num, a_rec/sen_num, a_acc/sen_num]
}

function compare(base_label, test_label, all_label){
    let tp = 0
    let fp = 0
    let fn = 0
    let tn = 0

    for (const i of base_label){
        if(test_label.indexOf(i)) tp += 1
    }
    for (const i of test_label){
        if(base_label.indexOf(i) === -1) fp += 1
        error_words.push(i)
    }
    for (const i of base_label){
        if(test_label.indexOf(i) === -1) fn += 1
    }
    for (const i of all_label){
        if(test_label.indexOf(i) === -1 && base_label.indexOf(i) === -1) tn += 1
    }

    const acc = (tp + tn) / (tp + tn + fp + fn)
    const pre =  tp + fp > 0 ? tp / (tp + fp) : -1
    const rec = tp + fn > 0 ? tp / (tp + fn) :  -1

    return [pre, rec, acc]
}

function getALLSubType(){
    let dict = []
    for (const item of privacy_dict) {
        for (const category of item["value"]) {
            if (!dict.includes(category.category_zh)) dict.push(category.category_zh)
        }
    }
    return dict
}

let error_words = []
let res = []
for(const thre of [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0]){
    const overlap_res = test("overlap",thre)
    const contain_res = test("contain",thre)
    res.push({"method":"overlap","thre":thre,"result":overlap_res})
    res.push({"method":"contain","thre":thre,"result":contain_res})
}
for(const thre of [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0]){
    const cosine_res = test("consine",thre)
    const l2_res = test("l2",thre)
    const dice_res = test("dice",thre)
    res.push({"method":"cosine","thre":thre,"result":cosine_res})
    res.push({"method":"l2","thre":thre,"result":l2_res})
    res.push({"method":"dice","thre":thre,"result":dice_res})}


console.log(JSON.stringify(res))

fs.writeFileSync("D:/WORK/2022/mpdf_dev/mpdf-nlp/similarity_result", JSON.stringify(res));