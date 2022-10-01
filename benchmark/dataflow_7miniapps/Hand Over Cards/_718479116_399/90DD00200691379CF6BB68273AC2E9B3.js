var e = require("@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getCommon = function() {
    var e = Math.floor(Math.random() * a.default.data.length);
    return a.default.data[e].name;
}, exports.getMinimalist = function() {
    var e = Math.floor(Math.random() * o.default.data.length);
    return o.default.data[e].name;
}, exports.getDiscardNew = function() {
    console.log(t.default);
    var e = Math.floor(Math.random() * t.default.dataCommon.length);
    return t.default.dataCommon[e].name;
}, exports.getDiscardOld = function() {
    console.log(t.default);
    var e = Math.floor(Math.random() * t.default.dataCommonImg.length);
    return t.default.dataCommonImg[e].name;
};

var a = e(require("33214DE30691379C554725E498EFD9B3.js")), t = e(require("2C7D27350691379C4A1B4F32E3FFD9B3.js")), o = e(require("52320AA70691379C345462A0E510E9B3.js"));