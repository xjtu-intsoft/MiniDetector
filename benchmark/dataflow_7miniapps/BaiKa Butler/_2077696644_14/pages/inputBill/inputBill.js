function e(e, a) {
    s && (clearTimeout(s), s = null), s = setTimeout(function() {
        t(e, a);
    }, 500);
}

function t(e, t) {
    wx.request({
        url: getApp().globalData.urlHost + "user/findRepaymentFee.do",
        data: i.addBaseRequest(t),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(t) {
            var a = n.transformSuccessData(t);
            o.checkResultCode(a) && e.setData({
                chargeInfo: a.resultBody
            });
        },
        fail: function(e) {},
        complete: function(e) {}
    });
}

function a(e, t) {
    n.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "bank/fillBankBill.do",
        data: i.addBaseRequest(t),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(t) {
            n.dismissLoading();
            var a = n.transformSuccessData(t);
            if (o.checkResultCode(a)) {
                var i = a.resultMsg;
                i.indexOf("即将自动消费") >= 0 ? e.setData({
                    maskHidden: !1
                }) : wx.showModal({
                    title: "提示",
                    content: i,
                    success: function(e) {
                        wx.navigateBack({});
                    }
                });
            }
        },
        fail: function(e) {
            n.dismissLoading(), n.showNetError();
        },
        complete: function(e) {}
    });
}

Page({
    data: {
        cardInfo: {},
        chargeInfo: {
            flag: 0
        },
        maskHidden: !0
    },
    onLoad: function(e) {
        var t = e.position, a = getApp().globalData.homeCardsInfo;
        this.setData({
            cardInfo: a[t]
        });
    },
    onShow: function() {},
    onCancelMask: function(e) {
        this.setData({
            maskHidden: !0
        }), wx.navigateBack({});
    },
    onInputBillSum: function(t) {
        var a = t.detail.value;
        if (!a || a <= 0) this.setData({
            billSumTip: ""
        }); else {
            var n = new Object();
            n.amount = a, e(this, n);
        }
    },
    onClickBillTip: function(e) {
        switch (this.data.chargeInfo.flag) {
          case 1:
            wx.navigateTo({
                url: "../member/member"
            });
        }
    },
    updateBillSum: function(e) {
        var t = e.detail.value;
        t.billSum && (t.billSum = Math.ceil(t.billSum), a(this, t));
    },
    onShareAppMessage: function() {
        return n.getShareInfo();
    }
});

require("../../utils/bankUtil.js");

var n = require("../../utils/util.js"), i = require("../../utils/requestUtil.js"), o = require("../../utils/resultCodeUtil.js"), s = null;