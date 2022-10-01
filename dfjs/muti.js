const App = require("./deps/app").App;
const fs = require("fs");
const logger = require("./deps/logger");
const wx_api = require("./deps/wx_api");
const path = require("path");

// console.time("mm")
// var app = new App("D:/WORK/2022/论文相关/benchmark/miniapp_icse/998二手挖机圈/_-1965603458_27");
// app.start();
// getSource2SinkResult(app);
// console.timeEnd("mm")

record = []

if (
    true
) {
    let root = "/data1/wy/miniapp_dataset_10w/mp_icse/"
    let allmp = fs.readdirSync(root);
    let count = 1;
    let time_count = 0;

    for (let mp of allmp) {
        let dirs = fs.readdirSync(path.join(root, mp));
        let mp_true = dirs.find(e => fs.lstatSync(path.join(root,mp,e)).isDirectory() && fs.readdirSync(path.join(root,mp,e)).some(n => n == "app.js"));
        if (mp_true
            // && count >= 160   // 62  66
        ) {
            logger.log("start:", count, mp);
            let start = Date.now();
            suc = false;
            // console.time(mp);
            try{
                var app = new App(path.join(root,mp,mp_true));
                app.start();
                getSource2SinkResult(app);
                suc = true;
            }
            catch (e) {
                suc = false;
            }
            // console.timeEnd(mp);

            let time_cost = Date.now() - start;
            record.push({"dir":mp, "cost":time_cost, "success":true})
            fs.writeFileSync("multi_res", JSON.stringify(record));
            logger.log("finish:", count, mp);
        }
        ++count;
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