var t = require("../../utils/util.js"), e = require("../../utils/event.js");

Page({
    data: {
        comfirmActive: !1,
        codeActive: !1,
        code: "",
        phoneNum: "",
        codeText: "发送验证码",
        codeSecond: 30,
        countDown: !1,
        tipText: "",
        isHideTip: !0,
        isComfirmLoadData: !1
    },
    onShow: function() {
        var t = wx.getStorageSync("user_Id");
        e.mtaEvent("bindPhonePageView", t);
    },
    confirm: function() {
        var a = this, i = this.data;
        if (!i.isComfirmLoadData) {
            i.isComfirmLoadData = !0;
            var o = i.phoneNum + "", n = i.code + "";
            /^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(o) ? 4 == n.length ? (t.pageFun.loadding(), 
            t.pageAjax.callAjax({
                url: "check_sms_code",
                params: {
                    phone: o,
                    code: n
                },
                success: function(n) {
                    i.isComfirmLoadData = !1, t.pageFun.closeLoadding(), 1 == n.result.check_ok ? (a.showTip("绑定成功"), 
                    wx.setStorageSync("user_phone", o), wx.navigateBack(), e.mtaEvent("bindPhonePageResult", o, 1)) : (a.showTip(n.result.msg), 
                    e.mtaEvent("bindPhonePageResult", o, 0));
                },
                fail: function() {
                    e.mtaEvent("bindPhonePageResult", o, 0), i.isComfirmLoadData = !1, t.pageFun.closeLoadding();
                }
            })) : this.showTip("验证码错误") : this.showTip("手机号格式不正确");
        }
    },
    showTip: function(t) {
        var e = this;
        e.setData({
            isHideTip: !1,
            tipText: t
        }), setTimeout(function() {
            e.setData({
                isHideTip: !0,
                tipText: ""
            });
        }, 2e3);
    },
    inputPhone: function(t) {
        this.data.phoneNum = t.detail.value, this.calCodeBtn();
    },
    calCodeBtn: function() {
        var t = this.data, e = t.codeActive;
        11 != this.data.phoneNum.length || t.countDown ? e && this.setData({
            codeActive: !1
        }) : this.setData({
            codeActive: !0
        }), this.calConfirm();
    },
    inputCode: function(t) {
        this.data.code = t.detail.value, this.calConfirm();
    },
    calConfirm: function() {
        var t = this.data, e = t.comfirmActive;
        t.codeActive || t.code ? e || this.setData({
            comfirmActive: !0
        }) : e && this.setData({
            comfirmActive: !1
        });
    },
    sendCode: function() {
        var e = this.data, a = this, i = e.codeSecond;
        if (e.codeActive && !e.countDown) {
            t.pageAjax.callAjax({
                url: "sms_code",
                params: {
                    phone: e.phoneNum
                },
                method: "GET",
                success: function(t) {
                    console.log(t);
                },
                fail: function(t) {
                    console.log(t);
                }
            }), e.countDown = !0, this.setData({
                codeActive: !1
            });
            var o = setInterval(function() {
                i < 0 ? (e.countDown = !1, a.calCodeBtn(), a.setData({
                    codeText: "发送验证码"
                }), clearInterval(o)) : a.setData({
                    codeText: i-- + "s后重新发送"
                });
            }, 1e3);
        }
    }
});