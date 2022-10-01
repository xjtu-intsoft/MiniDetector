var e = getApp(), n = require("../../../7931C4950691379C1F57AC929AD2E9B3.js");

Page({
    data: {},
    onLoad: function(t) {
        t;
        if (!e.systemInfo["v7.0.0"]) return n.showtoast("微信版本过低，影响编辑功能的使用，请升级微信后操作", "none", 4e3), 
        setTimeout(function() {
            wx.navigateBack({
                delta: 1
            });
        }, 4e3), 0;
    },
    onShow: function() {},
    bindmessage: function(n) {
        e.ifFresh.mycard = !0;
    },
    onShareAppMessage: function() {}
});