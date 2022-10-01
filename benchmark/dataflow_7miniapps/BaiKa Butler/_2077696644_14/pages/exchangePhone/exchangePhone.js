function e(e) {
    n.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "user/authNewPhoneInfo.do",
        data: a.addBaseRequest(e),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            n.dismissLoading();
            var t = n.transformSuccessData(e);
            s.checkResult(e) && wx.showModal({
                title: "提示",
                content: t.resultMsg,
                success: function(e) {
                    wx.reLaunch({
                        url: "../login/login"
                    });
                }
            });
        },
        fail: function(e) {
            n.dismissLoading(), n.showNetError();
        },
        complete: function(e) {}
    });
}

function t(e, t) {
    n.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "user/sendAuthNewPhoneSmsCode.do",
        data: a.addBaseRequest(t),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(t) {
            n.dismissLoading();
            n.transformSuccessData(t);
            s.checkResult(t) && (u = 120, e.setData({
                codeStr: "120",
                codeButtonEnable: !0
            }), o(e));
        },
        fail: function(e) {
            n.dismissLoading(), n.showNetError();
        },
        complete: function(e) {}
    });
}

function o(e) {
    if (u <= 0) e.setData({
        codeStr: "发送验证码",
        codeButtonEnable: !1
    }); else setTimeout(function() {
        u--, e.setData({
            codeStr: u + ""
        }), o(e);
    }, 1e3);
}

var n = require("../../utils/util.js"), a = require("../../utils/requestUtil.js"), s = require("../../utils/resultCodeUtil.js");

Page({
    data: {
        token: "",
        oldPhone: "",
        codeStr: "发送验证码",
        codeButtonEnable: !1
    },
    onLoad: function(e) {
        this.setData({
            token: e.token,
            oldPhone: getApp().globalData.userInfo.phone
        });
    },
    onSendSms: function(e) {
        this.data.codeButtonEnable || (e.detail.value.phone ? t(this, e.detail.value) : n.showToast("请输入手机号"));
    },
    onSubmit: function(t) {
        t.detail.value.smsCode ? t.detail.value.phone ? e(t.detail.value) : n.showToast("请输入手机号") : n.showToast("请输入验证码");
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});

var u = 120;