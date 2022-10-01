var t = require("../../../7931C4950691379C1F57AC929AD2E9B3.js");

Page({
    data: {},
    onShow: function() {
        t.showtoast("该名片链接已过期", "none", 2e3), setTimeout(function() {
            wx.switchTab({
                url: "../../cardMain/cardMain"
            });
        }, 1500);
    }
});