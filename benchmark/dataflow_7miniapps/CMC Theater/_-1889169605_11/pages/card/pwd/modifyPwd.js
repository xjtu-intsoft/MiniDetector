var a = require("./../../../config/httpHtlper.js"), t = require("./../../../util/strUtil.js"), e = require("./../../../util/md5.js"), i = null;

Page({
    data: {
        memberCard: {},
        mobile: "",
        code: "",
        pwd: "",
        isShowPwd: !1,
        time: "获取验证码",
        currentTime: 60,
        disabled: !1,
        pwdSrc: "/images/common/mima_yincang_hui.png",
        message: ""
    },
    onLoad: function(a) {
        var t = getApp().decodeDataAndJsonParse(a.bean);
        this.setData({
            mobile: t.mobile,
            memberCard: t
        });
    },
    onUnload: function() {
        clearInterval(i);
    },
    input_code: function(a) {
        var t = a.detail.value;
        this.setData({
            code: t
        });
    },
    input_pwd: function(a) {
        var t = a.detail.value;
        t && t.length > 0 && (t = t.replace(/\D/g, "")), this.setData({
            pwd: t
        });
    },
    clearInput: function() {},
    clearInput_pwd: function() {
        this.data.isShowPwd ? this.setData({
            isShowPwd: !1,
            pwdSrc: "/images/common/mima_xianshi_hui.png"
        }) : this.setData({
            isShowPwd: !0,
            pwdSrc: "/images/common/mima_yincang_hui.png"
        });
    },
    getCode: function(e) {
        if (!this.data.disabled) {
            var i = this, n = t.trimStr(this.data.memberCard.card_num);
            a.modifyCardPwdVerifyCode(n).then(function(a) {
                console.log(a), 0 == a.data.status || (a.data.data.message && i.setData({
                    message: a.data.data.message
                }), i.timeRun(), getApp().showModalApp(a.data.data.message));
            });
        }
    },
    timeRun: function() {
        var a = this, t = a.data.currentTime;
        a.setData({
            time: t + "秒后重新发送",
            disabled: !0
        }), i = setInterval(function() {
            t--, a.setData({
                time: t + "秒后重新发送"
            }), t <= 0 && (clearInterval(i), a.setData({
                time: "重新获取",
                currentTime: 61,
                disabled: !1
            }));
        }, 1e3);
    },
    okClick: function() {
        var i = t.trimStr(this.data.memberCard.card_num);
        if (this.data.code) if (this.data.pwd) {
            var n = e.hex_md5(this.data.pwd);
            a.modifyCardPwd(i, n, this.data.memberCard.cinema_id, this.data.code).then(function(a) {
                console.log(a), 0 == a.data.status || wx.showModal({
                    showCancel: !1,
                    content: "密码修改成功",
                    confirmText: "我知道了",
                    success: function(a) {
                        a.confirm && wx.navigateBack();
                    }
                });
            });
        } else wx.showToast({
            icon: "none",
            title: "请输入密码"
        }); else wx.showToast({
            icon: "none",
            title: "请输入手机验证码"
        });
    }
});