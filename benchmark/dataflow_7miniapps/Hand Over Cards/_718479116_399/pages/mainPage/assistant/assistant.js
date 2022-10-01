var t = require("../../../7931C4950691379C1F57AC929AD2E9B3.js"), i = getApp();

Page({
    data: {
        systemInfo: i.systemInfo,
        activity: {},
        mycard: {}
    },
    onLoad: function(t) {},
    onShow: function() {
        this.mycardGet(), this.getMinicardConfig();
    },
    mycardGet: function(n) {
        var a = this;
        i.setRequest({
            url: "mycard"
        }, function(t) {
            a.setData({
                mycard: t,
                freshNum: new Date().getTime()
            });
        }, function() {
            i.mycard.pic_prefix || a.setData({
                "netError.show": !0
            });
        }, function() {
            t.hidetoast(), i.compatibleManage.navigationBarLoading && wx.hideNavigationBarLoading(), 
            wx.stopPullDownRefresh();
        });
    },
    toMyPage: function() {
        i.burying.setPoint(i, 640);
    },
    getMinicardConfig: function() {
        var t = this;
        i.getMinicardConfig(function(i) {
            t.setData({
                activity: i.activity ? i.activity : {
                    show: !1
                }
            });
        });
    },
    onShareAppMessage: function() {}
});