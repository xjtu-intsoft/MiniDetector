const fs = require("fs");
module.exports = {
    log: function () {
        console.log(...arguments);
        // fs.writeFileSync("./test-files/log.txt", "=========>" + [...arguments].join(" ") + "\n", { flag: "a" })
    },
    logFunctionDetection() {
        console.log([...arguments].join(" ") + "\n");
        fs.writeFileSync("./test-files/functionD.txt", [...arguments].join() + "\n", { flag: "a" })
    },

    logDataflowTime() {
        fs.writeFileSync("./test-files/timecost.txt", [...arguments].join() + "\n", { flag: "a" })
    }
}
