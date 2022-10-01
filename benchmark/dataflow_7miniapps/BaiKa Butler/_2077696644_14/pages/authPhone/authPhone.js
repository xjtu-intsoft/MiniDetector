function e(e) {
    n.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "user/authOldPhoneInfo.do",
        data: a.addBaseRequest(e),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            n.dismissLoading();
            var t = n.transformSuccessData(e);
            if (s.checkResult(e)) {
                var o = t.resultBody.token;
                wx.navigateTo({
                    url: "../exchangePhone/exchangePhone?token=" + o
                });
            }
        },
        fail: function(e) {
            n.dismissLoading(), n.showNetError();
        },
        complete: function(e) {}
    });
}

function t(e) {
    n.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "user/sendOldAuthPhoneSmsCode.do",
        data: a.getBaseRequest(),
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
        phone: "",
        codeButtonEnable: !1,
        codeStr: "发送验证码"
    },
    onLoad: function(e) {
        this.setData({
            phone: getApp().globalData.userInfo.phone
        });
    },
    onSendSms: function(e) {
        this.data.codeButtonEnable || t(this);
    },
    onSubmit: function(t) {
        t.detail.value.smsCode ? e(t.detail.value) : n.showToast("请输入验证码");
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