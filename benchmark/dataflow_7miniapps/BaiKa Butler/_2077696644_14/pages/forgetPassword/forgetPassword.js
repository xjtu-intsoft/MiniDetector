function e(e) {
    s.showLoading(), e.password = i.hexMD5(e.password), wx.request({
        url: getApp().globalData.urlHost + "user/modifyPassword.do",
        data: o.addBaseRequest(e),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            s.dismissLoading();
            var t = s.transformSuccessData(e);
            n.checkResult(e) && wx.showModal({
                title: "提示",
                content: t.resultMsg,
                success: function(e) {
                    e.confirm && wx.navigateBack();
                }
            });
        },
        fail: function(e) {
            s.dismissLoading(), s.showNetError();
        },
        complete: function(e) {}
    });
}

function t(e) {
    s.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "user/sendModifyPasswordSmsCode.do",
        data: o.addBaseRequest({
            phone: e.data.phone
        }),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(t) {
            s.dismissLoading();
            s.transformSuccessData(t);
            n.checkResult(t) && (u = 120, e.setData({
                codeStr: "120",
                codeButtonEnable: !0
            }), a(e));
        },
        fail: function(e) {
            s.dismissLoading(), s.showNetError();
        },
        complete: function(e) {}
    });
}

function a(e) {
    if (u <= 0) e.setData({
        codeStr: "获取",
        codeButtonEnable: !1
    }); else setTimeout(function() {
        u--, e.setData({
            codeStr: u + ""
        }), a(e);
    }, 1e3);
}

var s = require("../../utils/util.js"), o = require("../../utils/requestUtil.js"), n = require("../../utils/resultCodeUtil.js"), i = require("../../utils/md5.js");

Page({
    data: {
        phone: "",
        codeButtonEnable: !1,
        codeStr: "获取验证码"
    },
    navigateBack: function() {
        wx.navigateBack();
    },
    inputPhone: function(e) {
        this.setData({
            phone: e.detail.value
        });
    },
    onSendSms: function(e) {
        if (!this.data.codeButtonEnable) return this.data.phone ? void t(this) : wx.showToast({
            title: "请输入手机号",
            image: "../../images/ic_sad.png"
        });
    },
    onForgetPassword: function(t) {
        t.detail.value.phone ? t.detail.value.smsCode ? t.detail.value.password ? e(t.detail.value) : s.showToast("请输入密码") : s.showToast("请输入验证码") : s.showToast("请输入手机号码");
    }
});

var u = 120;