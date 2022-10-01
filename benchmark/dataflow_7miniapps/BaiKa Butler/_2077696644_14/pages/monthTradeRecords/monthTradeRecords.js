function t(t) {
    wx.showNavigationBarLoading(), wx.request({
        url: getApp().globalData.urlHost + "user/showAllSubUserTradeAmount.do",
        data: o.getBaseRequest(),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(o) {
            var a = e.transformSuccessData(o);
            if (n.checkResultCode(a)) {
                var i = a.resultBody;
                t.setData({
                    list: i
                });
            }
        },
        fail: function(t) {
            e.showNetError();
        },
        complete: function(t) {
            wx.hideNavigationBarLoading();
        }
    });
}

Page({
    data: {},
    onLoad: function(e) {
        t(this);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});

var e = require("../../utils/util.js"), o = require("../../utils/requestUtil.js"), n = require("../../utils/resultCodeUtil.js");