const App = require("./deps/app").App;
const fs = require("fs");
const logger = require("./deps/logger");
const wx_api = require("./deps/wx_api");
const path = require("path");

console.time("mm")
var app = new App("D:/WORK/2022/论文相关/benchmark/miniapp_icse/998二手挖机圈/_-1965603458_27");
// var app = new App("E:\\dataset\\v1\\泸州老窖官方旗舰店\\_-36094559_263");
app.start();
getSource2SinkResult(app);
getUnlabelCsv(app);
console.timeEnd("mm")

if (
    false
) {
    let root = "E:\\dataset\\v1"
    let allmp = fs.readdirSync(root);
    let count = 1;
    let time_count = 0;

    for (let mp of allmp) {
        let dirs = fs.readdirSync(root + "\\" + mp);
        let mp_true = dirs.find(e => fs.lstatSync(root + "\\" + mp + "\\" + e).isDirectory() && fs.readdirSync(root + "\\" + mp + "\\" + e).some(n => n == "app.js"));
        if (mp_true
            && count >= 160   // 62  66
        ) {
            logger.log("start:", count, mp);
            let start = Date.now();

            // console.time(mp);
            var app = new App(root + "\\" + mp + "\\" + mp_true);
            // console.timeEnd(mp);

            let time_cost = Date.now() - start;
            time_count += time_cost;
            logger.logFunctionDetection(app.functionDetectionRate, mp);

            logger.log("done:", count, mp, time_cost, "ms");
            logger.logDataflowTime(count, mp, app.lines, time_cost);
        }
        ++count;
        // break;
    }
}

function getSource2SinkResult(app){
    let res = []
    app.normal_flow_res.map(jsfile=>{
        const relative_path = jsfile.file.replace(app.root, "").replace(/\\/g, "/")
        // 每个文件数据流的分析结果
        let source2sink = {
            "source":[],
            "sink":[],
            "pairsOfSource2Sink":[]
        }

        jsfile.flow.map(source_and_flow=>{
            let source_loc = []
            if(source_and_flow.source){
                const source = source_and_flow.source.api
                if(source2sink.source.indexOf(source) === -1) source2sink.source.push(source)

                if(source_and_flow.source.loc){
                    source_loc = [source_and_flow.source.loc]
                }
                else {
                    source_and_flow.flow.map(edge=>{
                        if(wx_api.isSourceAPI(edge.from.name)) source_loc.push(edge.from.loc)
                    })
                }
            }

            source_and_flow.flow.map(edge=>{
                if(edge.to.sink) {
                    if(source2sink.sink.indexOf(edge.to.name) === -1) source2sink.sink.push(edge.to.name)

                    source2sink.pairsOfSource2Sink.push({
                        "source":source_and_flow.source.api,
                        "source_loc": source_loc,
                        "sink": edge.to.name,
                        "sink_loc":edge.to.loc?edge.to.loc.line:"undefine",
                        "ui_type": source_and_flow.source.type==="UI"?source_and_flow.source.text:[]
                    })
                }
            })
        })

        res.push({"file":relative_path,"source2sink":source2sink})
    })
    const save_path = path.join(app.res_dir , "analysis.json");
    fs.writeFileSync(save_path, JSON.stringify(res));
}

function getUnlabelCsv(app){
    // 用于将escharts_flow结果文件转化为便于标注的csv文件
    var csv_item = []
    app.normal_flow_res.map(file_res=>{
        file_res.flow.map(source_flow=>{
            let cur_source = source_flow.source
            let all_source_loc = ""
            source_flow.flow.map(edge=>{
                if(edge.from.fromSource){
                    all_source_loc = all_source_loc + "&" + edge.from.fromSource.loc.line
                }
                if(edge.to.sink) {
                    const new_item = {
                        "source_file":file_res.file.replace(/\\/g, "/").replace(app.root, ""),
                        "source":cur_source.api,
                        "source_loc": all_source_loc.slice(1),
                        "sink_file":edge.to.file.replace(/\\/g, "/").replace(app.root, ""),
                        "sink": edge.to.name,
                        "sink_loc":edge.to.loc?edge.to.loc.line:"undefine",
                        "type":cur_source.type,
                        "correct":"unlabel"
                    }
                    csv_item.push(new_item)
                }
                // else {
                //     const new_item = {
                //         "source_file": file_res.file.replace(/\\/g, "/").replace(app.root, ""),
                //         "source": source_flow.source.api,
                //         "source_loc": source_flow.source.loc ? source_flow.source.loc.line : "undefine",
                //         "sink_file": "NOT_SINK",
                //         "sink": "NOT_SINK",
                //         "sink_loc": "NOT_SINK",
                //         "type": source_flow.source.type,
                //         "correct": "unlabel"
                //     }
                //     csv_item.push(new_item)
                // }
            })

        })
    })

    let source = []
    let sink = []
    app.appInstanceData.definedData.map(df_data=>{
        let var_props = df_data.trueData.declaredName.split(".").slice(1)
        // 找Source
        df_data.writeShadows.forEach(ws=>{
            ws.writeAccess.forEach(wa=>{
                wa.writeFlow.forEach(wf=>{
                    if(wf.from.fromSource) {
                        let new_source = wf.from.fromSource
                        new_source.var_props = var_props
                        source.push(new_source)
                    }
                })
            })
        })
        // 找Sink
        df_data.readShadows.forEach(ws=> {
            ws.readAccess.forEach(wa => {
                wa.readFlow.forEach(wf => {
                    if (wf.to.sink) sink.push({"api": wf.to.name, "loc": wf.to.loc,"var_props":var_props,"file":wf.to.file})
                })
            })
        })
    })
    app.appInstanceData.dynamicDefinedData.find(dy_data=>dy_data.shadowObjectVar==="__object__getApp") &&
    app.appInstanceData.dynamicDefinedData.find(dy_data=>dy_data.shadowObjectVar==="__object__getApp").dynamicDefinedProps.map(dy_prop=>{
        let dy_props = dy_prop.propName.split(".").slice(2)
        dy_prop.writeShadows.forEach(ws=>{
            ws.writeAccess.forEach(wa=>{
                wa.writeFlow.forEach(wf=>{
                    if(wf.from.fromSource) {
                        let new_source = wf.from.fromSource
                        new_source.var_props = dy_props
                        new_source.file = ws.shadowVar.file
                        source.push(new_source)
                    }
                })
            })
        })
        // 找Sink
        dy_prop.readShadows.forEach(ws=> {
            ws.readAccess.forEach(wa => {
                wa.readFlow.forEach(wf => {
                    if (wf.to.sink) sink.push({"api": wf.to.name, "loc": wf.to.loc,"var_props":dy_props,"file":wf.to.file})
                })
            })
        })

    })

    source.forEach(sc=>{
        sink.forEach(sk=>{
            const compare_length = Math.min(sc.var_props.length, sk.var_props.length)
            let isFlow = true
            for(let i = 1; i < compare_length; i++){
                if(sc.var_props[i] !== sk.var_props[i]) isFlow = false
            }
            const new_item = {
                "source_file":sc.file.replace(/\\/g, "/").replace(app.root, ""),
                "source":sc.api,
                "source_loc": sc.loc.line,
                "sink_file":sk.file.replace(/\\/g, "/").replace(app.root, ""),
                "sink": sk.api,
                "sink_loc":sk.loc.line,
                "type":sc.type +"__crossFile__",
                "correct":"unlabel"
            }
            if(isFlow) csv_item.push(new_item)
        })
    })
    let title = []
    if(csv_item.length > 0) title = Object.keys(csv_item[0])
    let csvContent = '\ufeff' + title.join(',') + '\n'
    csv_item.forEach((item, index) => {
        let c = Object.values(item).join(',') + '\n'
        csvContent += c
    })
    fs.writeFileSync(app.res_dir + "\\label.csv", csvContent)

    return "success"
}