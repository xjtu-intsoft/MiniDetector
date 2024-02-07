const App = require("./deps/app").App;
const fs = require("fs");
const logger = require("./deps/logger");

let cfg = JSON.parse(fs.readFileSync('./__cfg__'));

var startTime = (new Date()).getTime();

let target = new App(cfg)
console.log(target.getCFG());
target.start();
target.getUnlabelCsv();
target.getSource2SinkResult();

var endTime = (new Date()).getTime();
console.log(endTime - startTime) 