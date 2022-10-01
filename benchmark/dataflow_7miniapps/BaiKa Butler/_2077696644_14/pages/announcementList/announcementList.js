function e(e) {
    wx.request({
        url: getApp().globalData.urlHost + "user/queryProclamationConfig.do",
        data: n.getBaseRequest(),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(n) {
            var o = t.transformSuccessData(n);
            1e4 == o.resultCode && e.setData({
                announcementList: o.resultBody
            });
        },
        fail: function(e) {}
    });
}

Page({
    data: {},
    onLoad: function(e) {},
    onReady: function() {},
    onShow: function() {
        e(this);
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});

var t = require("../../utils/util.js"), n = require("../../utils/requestUtil.js");

require("../../utils/resultCodeUtil.js");