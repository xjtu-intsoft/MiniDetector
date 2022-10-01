function e(e, t) {
    a.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "user/sendAuthWeixinInfoSmsCode.do",
        data: s.addBaseRequest(t),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(t) {
            a.dismissLoading();
            var s = a.transformSuccessData(t);
            n.checkResultCode(s) && (i = 60, o(e), e.setData({
                codeStr: "60",
                codeButtonEnable: !0
            }));
        },
        fail: function(e) {
            a.dismissLoading(), a.showNetError();
        },
        complete: function(e) {}
    });
}

function t(e, t) {
    a.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "user/authWeixinInfo.do",
        data: s.addBaseRequest(t),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            a.dismissLoading();
            var t = a.transformSuccessData(e);
            n.checkResultCode(t) && wx.showModal({
                title: "提示",
                content: t.resultMsg,
                success: function(e) {
                    wx.navigateBack({});
                }
            });
        },
        fail: function(e) {
            a.dismissLoading(), a.showNetError();
        },
        complete: function(e) {}
    });
}

function o(e) {
    if (i <= 0) e.setData({
        codeStr: "发送",
        codeButtonEnable: !1
    }); else setTimeout(function() {
        i--, e.setData({
            codeStr: i + ""
        }), o(e);
    }, 1e3);
}

Page({
    data: {
        codeButtonEnable: !1,
        codeStr: "发送"
    },
    onLoad: function(e) {
        var t = getApp().globalData.userInfo.userName;
        this.setData({
            actualName: t
        });
    },
    onShow: function() {},
    onSendSmsCode: function(t) {
        this.data.codeButtonEnable || e(this, t.detail.value);
    },
    onResetWeichat: function(e) {
        var o = e.detail.value;
        if (o.smsCode) {
            wx.login({
                success: function(e) {
                    o.jsCode = e.code, t(0, o);
                }
            });
        } else a.showToast("请填写验证码");
    },
    onShareAppMessage: function() {
        return a.getShareInfo();
    }
});

var a = require("../../utils/util.js"), s = require("../../utils/requestUtil.js"), n = require("../../utils/resultCodeUtil.js"), i = 60;