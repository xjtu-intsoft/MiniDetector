function e(e, t) {
    a.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "user/withdrawRewardAmount.do",
        data: o.addBaseRequest(t),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            a.dismissLoading();
            var t = a.transformSuccessData(e);
            n.checkResultCode(t) && wx.showModal({
                title: "提示",
                content: t.resultMsg,
                success: function(e) {
                    wx.navigateBack({});
                }
            });
        },
        fail: function(e) {
            a.dismissLoading(), a.showNetError();
        },
        complete: function(e) {}
    });
}

function t(e) {
    wx.request({
        url: getApp().globalData.urlHost + "user/findSystemWithdrawParam.do",
        data: o.getBaseRequest(),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(t) {
            a.dismissLoading();
            var o = a.transformSuccessData(t);
            if (n.checkResultCode(o)) {
                var r = o.resultBody.rate, s = o.resultBody.fee, i = o.resultBody.text;
                e.setData({
                    fee: s,
                    rate: r,
                    chargeTip: i
                });
            }
        },
        fail: function(e) {
            a.showNetError();
        },
        complete: function(e) {}
    });
}

Page({
    data: {
        chargeMoney: 0,
        actuallyMoney: 0,
        chargeTip: "",
        fee: 0,
        rate: 0
    },
    onLoad: function(e) {
        var a = getApp().globalData.earnInfo.rewardBalance;
        this.setData({
            maxMoney: a
        }), t(this);
    },
    onShow: function() {},
    onInputAmount: function(e) {
        var t = e.detail.value, a = 0;
        t && (a = parseInt(t));
        var o = this.data.fee;
        if (a >= o + 1) {
            var n = this.data.rate, r = Math.round(n / 100 * a), s = a - r / 100 - o;
            this.setData({
                chargeMoney: r / 100 + o,
                actuallyMoney: s
            });
        } else this.setData({
            chargeMoney: 0,
            actuallyMoney: 0
        });
    },
    onResetWeichat: function(e) {
        wx.navigateTo({
            url: "../resetWeichat/resetWeichat"
        });
    },
    onWithdraw: function(t) {
        var a = t.detail.value.amount;
        if (a && "0" != a) {
            var o = new Object();
            o.amount = a, e(0, o);
        }
    },
    onShareAppMessage: function() {
        return a.getShareInfo();
    }
});

var a = require("../../utils/util.js"), o = require("../../utils/requestUtil.js"), n = require("../../utils/resultCodeUtil.js");