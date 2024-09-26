const App = require("./deps/app").App;
const fs = require("fs");
const logger = require("./deps/logger");
const path = require("path");

function analyze(name, root){
    let cfg = JSON.parse(fs.readFileSync('./__cfg__'));
    cfg.name = name;
    cfg.root = root;
    let target = new App(cfg)
    console.log(target.getCFG());
    target.start();
    target.getUnlabelCsv();
    target.getSource2SinkResult();
    
}

// base_dir = "D:/WORK/2022/论文相关/TOSEM/MiniApp-review/flow-baseline/datasetPopular/"
// analyze("标标商标查询", base_dir + "标标商标查询/__APP__")

root = "D:/WORK/2022/论文相关/TOSEM/MiniApp-review/flow-baseline/datasetPopular"
let batch_apps = fs.readdirSync(root);
let record = []
for(let mp of batch_apps){
    let dirs = fs.readdirSync(path.join(root, mp));
    let mp_true = dirs.find(e => fs.lstatSync(path.join(root,mp,e)).isDirectory() && fs.readdirSync(path.join(root,mp,e)).some(n => n == "app.js"));
    if (mp_true) {
        suc = false;
        var startTime = (new Date()).getTime();
    
        try{
            analyze(mp, path.join(root,mp,mp_true))
            suc = true;
        }
        catch (e) {
            suc = false;
            console.log(e)
        }

        var endTime = (new Date()).getTime();
        let time_cost = endTime - startTime;
        record.push({"name":mp, "cost":time_cost, "success":true})
        fs.writeFileSync(root + "/../multi_res.json", JSON.stringify(record));
        logger.log("finish:", mp, suc);
    }
}
