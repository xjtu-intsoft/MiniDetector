function e(e, t) {
    c && (clearTimeout(c), c = null), c = setTimeout(function() {
        n(e, t);
    }, 500);
}

function t(e) {
    i.showLoading(), o.setCardInfo(e.data.cardInfo), o.setCallBack({
        onUpdateByNormal: function() {
            i.dismissLoading();
        },
        onUpdateByVip: function() {
            i.dismissLoading();
        },
        onUpdateError: function(e) {
            i.dismissLoading();
            var t = "加载账单失败，请重试";
            e && (t = e), i.showToast(t);
        },
        onNeedSmsCode: function(t) {
            i.dismissLoading(), e.setData({
                needSmsCodeTip: t,
                hiddenSmsCode: !1
            });
        },
        onInputSmsCode: function(t) {
            i.dismissLoading(), e.setData({
                needInputSmsCodeTip: t,
                hiddenInputSmsCode: !1
            });
        },
        onSuccess: function(t) {
            i.dismissLoading(), t.indexOf("即将自动消费") >= 0 ? e.setData({
                maskHidden: !1
            }) : wx.showModal({
                title: "提示",
                content: t,
                success: function(e) {
                    wx.navigateBack();
                }
            });
        }
    }), o.loadBill();
}

function a(e, t) {
    i.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "bank/fillBankBill.do",
        data: d.addBaseRequest(t),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(t) {
            i.dismissLoading();
            var a = i.transformSuccessData(t);
            if (r.checkResultCode(a)) {
                var n = a.resultMsg;
                n.indexOf("即将自动消费") >= 0 ? e.setData({
                    maskHidden: !1
                }) : wx.showModal({
                    title: "提示",
                    content: n,
                    success: function(e) {
                        wx.navigateBack();
                    }
                });
            }
        },
        fail: function(e) {
            i.dismissLoading(), i.showNetError();
        }
    });
}

function n(e, t) {
    wx.request({
        url: getApp().globalData.urlHost + "user/findRepaymentFee.do",
        data: d.addBaseRequest(t),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(t) {
            var a = i.transformSuccessData(t);
            r.checkResultCode(a) && e.setData({
                chargeInfo: a.resultBody
            });
        }
    });
}

Page({
    data: {
        hiddenInputSmsCode: !0,
        hiddenSmsCode: !0,
        needSmsCodeTip: "请输入验证码",
        needInputSmsCodeTip: "请输入验证码",
        menuPosition: 1,
        cardInfo: {},
        ebankLoginInfo: {},
        isShowAgreement: !0,
        maskHidden: !0,
        chargeInfo: {
            flag: 0
        }
    },
    onLoad: function(e) {
        n(this, {});
        var t = e.position, a = getApp().globalData.homeCardsInfo, i = a[t], o = a[t].ebankConfig, d = o.tip;
        d && (o.tip = d.replace(new RegExp("@_@", "gm"), "\n"));
        var r = new Object();
        1 == o.loginType && (r.account = i.cardNumber);
        var c = wx.getStorageSync("ebankCardId" + i.cardId);
        if (c) {
            var u = JSON.parse(c);
            if (u) {
                r.extracode = u.extracode;
                var l = s.decryptPwd(u.encodedStr);
                if (l) {
                    var m = l.split(":")[0], f = l.split(":")[1];
                    r.account = m, r.password = f;
                }
            }
        }
        this.setData({
            loginInfo: r,
            cardInfo: i,
            ebankLoginInfo: o
        });
    },
    onShow: function() {
        this.setData({
            isShowAgreement: !!wx.getStorageSync("isShowAgreement")
        });
    },
    onChangeAgreement: function(e) {
        var t = !1;
        1 == e.detail.value.length && (t = !0), this.setData({
            isShowAgreement: t
        });
    },
    onInputBillSum: function(t) {
        var a = t.detail.value;
        !a || a <= 0 ? this.setData({
            billSumTip: ""
        }) : e(this, {
            amount: a
        });
    },
    onClickBillTip: function(e) {
        switch (this.data.chargeInfo.flag) {
          case 1:
            wx.navigateTo({
                url: "../member/member"
            });
        }
    },
    onAgreement: function(e) {
        wx.navigateTo({
            url: "../userAgreement/userAgreement"
        });
    },
    choseMenu: function(e) {
        var t = e.currentTarget.dataset.position;
        this.setData({
            menuPosition: t
        });
    },
    onCancelMask: function(e) {
        this.setData({
            maskHidden: !0
        }), wx.navigateBack();
    },
    updateBillSum: function(e) {
        var t = e.detail.value;
        t.billSum && (t.billSum = Math.ceil(t.billSum), a(this, t));
    },
    saveAccount: function(e) {
        var a = e.detail.value.account, n = e.detail.value.password, i = e.detail.value.extracode;
        if (a && (1 != this.data.ebankLoginInfo.isExtracode || i) && (1 != this.data.ebankLoginInfo.isPassword || n)) {
            n || (n = "888888");
            var o = a + ":" + n, d = s.encryptPwd(o), r = this.data.cardInfo.cardId, c = new Object();
            c.cardId = r, c.extracode = i, c.encodedStr = d;
            var u = JSON.stringify(c);
            try {
                wx.setStorageSync("ebankCardId" + r, u);
            } catch (e) {
                console.log("error");
            }
            t(this);
        }
    },
    cancelInputSmsCode: function(e) {
        this.setData({
            hiddenInputSmsCode: !0
        });
    },
    confirmInputSmsCode: function(e) {
        var t = e.detail.value.smsCode;
        t && (i.showLoading(), o.authSmsCode(t), this.setData({
            hiddenInputSmsCode: !0
        }));
    },
    cancelSmsCode: function(e) {
        this.setData({
            hiddenSmsCode: !0
        });
    },
    confirmSmsCode: function(e) {
        var t = e.detail.value.smsCode;
        t && (i.showLoading(), o.setSmsCode(t), this.setData({
            hiddenSmsCode: !0
        }));
    }
});

require("../../utils/bankUtil.js");

var i = require("../../utils/util.js"), o = require("../../utils/ebankLoginUtil.js"), s = require("../../utils/encryptUtil.js"), d = require("../../utils/requestUtil.js"), r = require("../../utils/resultCodeUtil.js"), c = void 0;