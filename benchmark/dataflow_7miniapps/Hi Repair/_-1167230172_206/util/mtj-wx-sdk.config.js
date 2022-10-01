var c = wx.getAccountInfoSync();

console.log("accountInfo.miniProgram.appId // 小程序 appId"), console.log(c.miniProgram.appId);

var a = c.miniProgram.appId, o = "6d99a78f2f";

o = "wx05185e3a17bda81d" == a ? "e6bbe6299e" : "wxe08337c90b776049" == a ? "6fbb16f8fc" : "wxc7bcf857f391d584" == a ? "d8c6d80500" : "wx7c7359754439a070" == a ? "63b0867d5e" : "wx0d0cc843ccbec5d9" == a ? "b37992f877" : "wx334a3d2d97182aa5" == a ? "4cf7ac4698" : "6d99a78f2f", 
console.log(o), module.exports = {
    appKey: o,
    hasPlugin: !1,
    getLocation: !1
};