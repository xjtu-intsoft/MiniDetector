function e(e, o) {
    t.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "user/bindReferrer.do",
        data: a.addBaseRequest(o),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(a) {
            t.dismissLoading();
            var o = t.transformSuccessData(a);
            n.checkResultCode(o) && (e.setData({
                hiddenInputReferrer: !0
            }), wx.showModal({
                title: "提示",
                content: "绑定推荐人成功!",
                success: function(e) {
                    wx.navigateBack({
                        delta: 2
                    });
                }
            }));
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
    bindReferrer: function(t) {
        t.detail.value.phone ? e(this, t.detail.value) : wx.showToast({
            title: "请输入推荐人账号"
        });
    },
    onShareAppMessage: function() {
        return t.getShareInfo();
    }
});

var t = require("../../utils/util.js"), a = require("../../utils/requestUtil.js"), n = require("../../utils/resultCodeUtil.js");