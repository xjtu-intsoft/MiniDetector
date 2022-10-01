function e(e, n) {
    t.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "user/setPassword.do",
        data: o.addBaseRequest(n),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            t.dismissLoading();
            var o = t.transformSuccessData(e);
            s.checkResultCode(o) && wx.showModal({
                title: "提示",
                content: o.resultMsg,
                success: function(e) {
                    wx.navigateBack({});
                }
            });
        },
        fail: function(e) {
            t.dismissLoading(), t.showNetError();
        },
        complete: function(e) {}
    });
}

Page({
    data: {},
    onLoad: function(e) {},
    onReady: function() {},
    onShow: function() {},
    resetPassword: function(t) {
        var o = t.detail.value.password;
        if (o) {
            o = n.hexMD5(o);
            var s = new Object();
            s.password = o;
            wx.showModal({
                title: "提示",
                content: "是否修改密码?",
                success: function(t) {
                    t.confirm && e(0, s);
                }
            });
        }
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});

var t = require("../../utils/util.js"), o = require("../../utils/requestUtil.js"), s = require("../../utils/resultCodeUtil.js"), n = require("../../utils/md5.js");