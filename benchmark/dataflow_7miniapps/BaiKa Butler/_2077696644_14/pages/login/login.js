function e(e) {
    n.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "user/login.do",
        data: i.addBaseRequest(e),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(s) {
            n.dismissLoading();
            var o = n.transformSuccessData(s);
            r.checkResult(s) && t(o.resultBody.userSessionId, e);
        },
        fail: function(e) {
            n.dismissLoading(), n.showNetError();
        }
    });
}

function t(e, t) {
    getApp().globalData.userSessionId = e;
    try {
        wx.setStorageSync("userSessionId", e), t.phone && wx.setStorageSync("account", t.phone);
    } catch (e) {}
    wx.switchTab({
        url: "../home/home"
    });
}

function s(e) {
    n.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "user/sendRegisterSmsCode.do",
        data: i.addBaseRequest({
            phone: e.data.phone
        }),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(t) {
            n.dismissLoading();
            n.transformSuccessData(t);
            r.checkResult(t) && (d = 120, e.setData({
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
    if (d <= 0) e.setData({
        codeStr: "获取",
        codeButtonEnable: !1
    }); else setTimeout(function() {
        d--, e.setData({
            codeStr: d + ""
        }), o(e);
    }, 1e3);
}

function a(t) {
    n.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "user/register.do",
        data: i.addBaseRequest(t),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(s) {
            n.dismissLoading();
            var o = n.transformSuccessData(s);
            r.checkResult(s) && wx.showModal({
                title: "提示",
                content: o.resultMsg,
                success: function(s) {
                    wx.login({
                        success: function(s) {
                            t.jsCode = s.code, e(t);
                        }
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

var n = require("../../utils/util.js"), i = require("../../utils/requestUtil.js"), r = require("../../utils/resultCodeUtil.js"), u = require("../../utils/md5.js");

Page({
    data: {
        tabIndex: "0",
        phone: "",
        codeButtonEnable: !1,
        codeStr: "获取验证码"
    },
    navigateBack: function() {
        getCurrentPages().length > 1 ? wx.navigateBack() : t();
    },
    changeTab: function(e) {
        this.setData({
            tabIndex: e.target.id
        });
    },
    inputPhone: function(e) {
        this.setData({
            phone: e.detail.value
        });
    },
    onForgetPassword: function(e) {
        wx.navigateTo({
            url: "../forgetPassword/forgetPassword"
        });
    },
    onLogin: function(t) {
        var s = this.data.phone;
        wx.login({
            success: function(o) {
                e({
                    phone: s,
                    password: u.hexMD5(t.detail.value.password),
                    jsCode: o.code
                });
            }
        });
    },
    onSendSms: function(e) {
        if (!this.data.codeButtonEnable) return this.data.phone ? void s(this) : wx.showToast({
            title: "请输入手机号",
            image: "../../images/ic_sad.png"
        });
    },
    onRegister: function(e) {
        var t = this.data.phone, s = e.detail.value.password, o = e.detail.value.smsCode;
        t ? o ? s ? a({
            phone: t,
            password: u.hexMD5(s),
            smsCode: o
        }) : n.showToast("请输入密码") : n.showToast("请输入验证码") : n.showToast("请输入手机号码");
    }
});

var d = 120;