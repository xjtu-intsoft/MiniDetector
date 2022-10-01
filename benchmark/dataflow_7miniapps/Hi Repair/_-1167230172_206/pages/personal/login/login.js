var t = require("../../../comm/script/fetch"), e = getApp();

Page({
    data: {
        phone: "",
        phoneFocus: !1,
        sms_id: "",
        smsFocus: !1,
        code: "",
        codeFocus: !1,
        second: 60,
        phoneImgUrl: "",
        codeImgUrl: "",
        getSmsCode: "获取验证码",
        getAuthCodeTextColor: "#ACA3A3",
        disabled: !0,
        hasSubmit: !1,
        imgData: "",
        img_id: "",
        img_code: ""
    },
    onLoad: function(t) {
        this.getImgCode(), this.setData({
            phoneImgUrl: "https://pic.hiweixiu.com/hiweixiu-app/weapp/img/17020409.png",
            codeImgUrl: "https://pic.hiweixiu.com/hiweixiu-app/weapp/img/17020410.png",
            getAuthCodeTextColor: "#ACA3A3",
            loginBackgroundColor: "#ACA3A3"
        });
    },
    toUserAgreement: function() {
        wx.navigateTo({
            url: "../../repair/userAgreementWeb/userAgreementWeb"
        });
    },
    inputPhone: function(t) {
        this.setData({
            phone: t.detail.value
        });
    },
    inputPhoneFocus: function() {
        this.setData({
            phoneFocus: !0
        });
    },
    inputPhoneBlur: function() {
        this.data.phone ? this.setData({
            phoneFocus: !0
        }) : this.setData({
            phoneFocus: !1
        });
    },
    inputImgCode: function(t) {
        this.setData({
            img_code: t.detail.value
        }), t.detail.value.length < 4 && this.setData({
            disabled: !0,
            getAuthCodeTextColor: "#ACA3A3"
        }), 4 === t.detail.value.length && this.data.disabled && this.setData({
            disabled: !1,
            getAuthCodeTextColor: "#FF7A00"
        });
    },
    inputImgCodeFocus: function() {
        this.setData({
            codeFocus: !0
        });
    },
    inputImgCodeBlur: function() {
        this.data.img_code ? this.setData({
            codeFocus: !0
        }) : this.setData({
            codeFocus: !1
        });
    },
    inputCode: function(t) {
        this.setData({
            code: t.detail.value
        });
    },
    inputCodeFocus: function() {
        this.setData({
            smsFocus: !0
        });
    },
    inputCodeBlur: function() {
        this.data.code ? this.setData({
            smsFocus: !0
        }) : this.setData({
            smsFocus: !1
        });
    },
    countdown: function(t) {
        var e = t.data.second;
        if (0 === e) return t.setData({
            second: 60,
            getSmsCode: "获取验证码"
        }), void (11 === t.data.phone.length && t.data.disabled && this.setData({
            disabled: !1,
            getAuthCodeTextColor: "#FF7A00"
        }));
        setTimeout(function() {
            t.setData({
                second: e - 1,
                getSmsCode: "(" + e + ")重新发送",
                getAuthCodeTextColor: "#ACA3A3"
            }), t.countdown(t);
        }, 1e3);
    },
    sendCode: function(e) {
        var o = this;
        if (60 === o.data.second) {
            if (!o.bindCheckMobile(o.data.phone)) return;
            o.setData({
                disabled: !0,
                loginBackgroundColor: "#FF7A00"
            }), console.log(1), t.getVerifyCode.call(o, o.data.img_code, o.data.img_id, o.data.phone, o.data.sms_id, function(t) {
                console.log(t), o.countdown(o), wx.showToast({
                    title: "已发送",
                    icon: "success"
                });
            }, function(t) {
                o.getImgCode(), console.log(t), o.setData({
                    disabled: !1
                }), wx.showToast({
                    title: t,
                    icon: "none"
                });
            });
        }
    },
    submit: function(o) {
        var a = this;
        a.bindCheckMobile(a.data.phone) && (a.data.hasSubmit || (a.setData({
            hasSubmit: !0
        }), t.doLoginWithPhone.call(a, a.data.phone, a.data.code, function(t) {
            e.setHwxUserInfo(t.token, a.data.phone), console.log(t), wx.navigateBack({
                delta: 1,
                success: function(t) {},
                fail: function() {},
                complete: function() {}
            });
        }, function(t) {
            wx.showToast({
                title: t,
                icon: "none"
            }), a.setData({
                hasSubmit: !1
            });
        })));
    },
    bindCheckMobile: function(t) {
        return !!t.match(/^1[3-9][0-9]\d{8}$/) || (wx.showToast({
            title: "手机号格式不正确",
            icon: "none"
        }), !1);
    },
    getImgCode: function() {
        var e = this;
        t.getImgCode.call(e, e.data.img_id, function(t) {
            console.log(t), e.setData({
                imgData: t.data,
                img_id: t.id
            });
        });
    },
    stopTouchMove: function() {},
    stopTap: function() {}
});