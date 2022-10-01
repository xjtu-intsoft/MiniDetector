function t(t) {
    wx.navigateTo({
        url: "../inputBill/inputBill?position=" + t
    });
}

function e(t) {
    wx.navigateTo({
        url: "../ebankLogin/ebankLogin?position=" + t
    });
}

function a(a, n) {
    var i = a.data.cardsInfo[n];
    f.showLoading(), l.setCardInfo(i), l.setCallBack({
        onUpdateByNormal: function() {
            f.dismissLoading(), t(n);
        },
        onUpdateByVip: function() {
            f.dismissLoading(), e(n);
        },
        onUpdateError: function(t) {
            f.dismissLoading();
            var a = "加载账单失败，是否手动填写账单";
            t && (a = t), wx.showModal({
                title: "提示",
                content: a,
                success: function(t) {
                    t.confirm && e(n);
                }
            });
        },
        onNeedSmsCode: function(t) {
            f.dismissLoading(), a.setData({
                needSmsCodeTip: t,
                hiddenSmsCode: !1,
                smsCodeValue: ""
            });
        },
        onInputSmsCode: function(t) {
            f.dismissLoading(), a.setData({
                needInputSmsCodeTip: t,
                hiddenInputSmsCode: !1,
                afterSmsCodeValue: ""
            });
        },
        onSuccess: function(t) {
            f.dismissLoading(), o(a);
            var e = new Object();
            e.cardId = i.cardId, d(a, e), wx.showModal({
                title: "提示",
                content: t
            });
        }
    }), l.loadBill();
}

function n(t) {
    var e = t.data.currentCard;
    0 == e.accountDay && 0 == e.repaymentDay && (e.credit = "", e.balance = ""), t.setData({
        currentCard: e,
        accountDateIndex: e.accountDay - 1,
        repaymentDateIndex: e.repaymentDay - 1
    });
}

function o(t) {
    var e = new Object();
    e.cardId = t.data.currentCard.cardId, f.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "bank/showBankCardInfo.do",
        data: h.addBaseRequest(e),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            var a = f.transformSuccessData(e);
            if (p.checkResultCode(a)) {
                var o = a.resultBody, i = t.data.currentPosition, s = t.data.cardsInfo;
                t.data.cardsInfo[i] = o, getApp().globalData.homeCardsInfo = s, t.setData({
                    cardsInfo: s,
                    currentCard: o
                }), n(t);
            }
        },
        fail: function(t) {
            f.showNetError();
        },
        complete: function(t) {
            f.dismissLoading();
        }
    });
}

function i(t, e) {
    f.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "bank/modifyBankCard.do",
        data: h.addBaseRequest(e),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            f.dismissLoading();
            var a = f.transformSuccessData(e);
            p.checkResultCode(a) && (f.showToast("修改成功!"), o(t));
        },
        fail: function(t) {
            f.dismissLoading(), f.showNetError();
        },
        complete: function(t) {}
    });
}

function s(t, e) {
    f.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "bank/fillBankBill.do",
        data: h.addBaseRequest(e),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            f.dismissLoading();
            var a = f.transformSuccessData(e);
            p.checkResultCode(a) && (f.showToast("更正成功!"), o(t));
        },
        fail: function(t) {
            f.dismissLoading(), f.showNetError();
        },
        complete: function(t) {}
    });
}

function d(t, e) {
    f.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "bank/showBillBillDate.do",
        data: h.addBaseRequest(e),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            f.dismissLoading();
            var a = f.transformSuccessData(e);
            if (p.checkResultCode(a)) {
                for (var n = a.resultBody, o = 0; o < n.length; o++) n[o].hiddenChild = !0;
                t.setData({
                    billInfo: n
                });
            }
        },
        fail: function(t) {
            f.dismissLoading(), f.showNetError();
        },
        complete: function(t) {}
    });
}

function r(t, e, a) {
    f.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "bank/showBillDetail.do",
        data: h.addBaseRequest(e),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            f.dismissLoading();
            var n = f.transformSuccessData(e);
            if (p.checkResultCode(n)) {
                var o = n.resultBody, i = t.data.billInfo;
                i[a].bills = o, t.setData({
                    billInfo: i
                });
            }
        },
        fail: function(t) {
            f.dismissLoading(), f.showNetError();
        },
        complete: function(t) {}
    });
}

Page({
    data: {
        hiddenInputSmsCode: !0,
        afterSmsCodeValue: "",
        hiddenSmsCode: !0,
        smsCodeValue: "",
        needSmsCodeTip: "请输入验证码",
        needInputSmsCodeTip: "请输入验证码",
        accountDateIndex: 0,
        repaymentDateIndex: 0,
        date: [],
        currentMenuPosition: 0,
        cardsInfo: {},
        currentCard: {},
        currentPosition: 0,
        billInfo: []
    },
    onLoad: function(t) {
        for (var e = new Array(), a = 0; a < 30; a++) e[a] = a + 1;
        var o = t.position;
        o || (o = 0);
        var i = getApp().globalData.homeCardsInfo;
        this.setData({
            date: e,
            cardsInfo: i,
            currentPosition: t.position || 0,
            currentCard: i[o]
        }), n(this), wx.setNavigationBarTitle({
            title: this.data.currentCard.bankName
        });
    },
    onShow: function() {},
    onPageChange: function(t) {
        var e = t.detail.current, a = this.data.cardsInfo[e];
        this.setData({
            currentPosition: e,
            currentCard: a,
            currentMenuPosition: 0
        }), n(this), wx.setNavigationBarTitle({
            title: this.data.currentCard.bankName
        });
    },
    onClickMenuItem: function(t) {
        var e = t.currentTarget.dataset.position;
        if (this.setData({
            currentMenuPosition: e
        }), 1 == e) {
            var a = new Object();
            a.cardId = this.data.currentCard.cardId, d(this, a);
        }
    },
    bindPickerAccountDateChange: function(t) {
        var e = t.detail.value;
        this.setData({
            accountDateIndex: e
        });
    },
    bindPickerRepaymentDateChange: function(t) {
        var e = t.detail.value;
        this.setData({
            repaymentDateIndex: e
        });
    },
    updateCard: function(t) {
        var e = t.detail.value;
        if (e.credit && e.balance) {
            var a = this;
            wx.showModal({
                title: "提示",
                content: "是否修改卡信息",
                success: function(t) {
                    t.confirm && i(a, e);
                }
            });
        } else f.showToast("请输入额度值");
    },
    showHelp: function(t) {
        wx.showModal({
            title: "帮助",
            content: "点击需要修改的数据，更改后提交，该数据可致电发卡行查询。",
            showCancel: !1,
            confirmColor: "#e96958",
            success: function(t) {}
        });
    },
    onUpdateBill: function(t) {
        a(this, this.data.currentPosition);
    },
    cancelInputSmsCode: function(t) {
        this.setData({
            hiddenInputSmsCode: !0
        });
    },
    inputAfterSmsCode: function(t) {
        c = t.detail.value;
    },
    confirmInputSmsCode: function(t) {
        this.setData({
            hiddenInputSmsCode: !0
        }), c && (f.showLoading(), l.authSmsCode(c));
    },
    cancelSmsCode: function(t) {
        this.setData({
            hiddenSmsCode: !0
        });
    },
    inputSmsCode: function(t) {
        u = t.detail.value;
    },
    confirmSmsCode: function(t) {
        this.setData({
            hiddenSmsCode: !0
        }), u && (f.showLoading(), l.setSmsCode(u));
    },
    updateBillSum: function(t) {
        var e = t.detail.value;
        e.billSum && (e.billSum = Math.ceil(e.billSum), s(this, e));
    },
    onClickBillInfo: function(t) {
        var e = t.currentTarget.dataset.position, a = this.data.billInfo;
        if (a[e].hiddenChild = !a[e].hiddenChild, this.setData({
            billInfo: a
        }), 0 == a[e].hiddenChild && !a[e].bills) {
            var n = new Object();
            n.cardId = this.data.currentCard.cardId, n.billDate = a[e].billDate, r(this, n, e);
        }
    },
    onShareAppMessage: function(t) {
        return f.getShareInfo();
    }
});

var c = "", u = "", l = (require("../../utils/bankUtil.js"), require("../../utils/ebankLoginUtil.js")), f = require("../../utils/util.js"), h = require("../../utils/requestUtil.js"), p = require("../../utils/resultCodeUtil.js");