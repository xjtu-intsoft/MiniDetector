require("@babel/runtime/helpers/Arrayincludes.js"), global.l = console.log;

var n = require("sensor/path.js"), e = require("sensor/fs.js"), i = require("sensor/node-xlsx.js").default, r = e.readdirSync(__dirname), t = r.findIndex(function(n) {
    return n.includes(".xlsx");
}), s = i.parse("".concat(__dirname, "/").concat(r[t])), c = s[s.findIndex(function(n) {
    return "小程序需埋点的按钮" === n.name;
})].data, o = e.existsSync(n.join(__dirname, "sensorClick")), a = function() {
    var n = {}, i = {}, r = [];
    c.map(function(e, t) {
        e && e[0] && (i[t + 1] = {
            PageTitle: e[0],
            ButtonTitle: e[1]
        }, "未废弃" == e[2] ? n[t + 1] = {
            PageTitle: e[0],
            ButtonTitle: e[1]
        } : r.push(t + 1));
    }), e.writeFile("".concat(__dirname, "/sensorClick/sensor.js"), "export const POINTMAP = ".concat(JSON.stringify(n)), function(n, e) {
        l("事件埋点生成成功，请在sensorClick目录下查看（sensor.js）！");
    });
};

o ? a() : e.mkdir("".concat(__dirname, "/sensorClick"), function(n) {
    n ? l("创建目录操作失败") : (l("创建文件目录成功"), a());
});