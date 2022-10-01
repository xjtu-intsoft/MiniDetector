function t(t, n) {
    a.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "bank/withdrawAmount.do",
        data: e.addBaseRequest(n),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            a.dismissLoading();
            var n = a.transformSuccessData(e);
            o.checkResultCode(n) && (t.setData({
                hiddenWithdraw: !0,
                withdrawNumber: 0
            }), wx.showToast({
                title: "正在处理还款操作"
            }));
        },
        fail: function(t) {
            a.dismissLoading(), a.showNetError();
        },
        complete: function(t) {}
    });
}

Page({
    data: {
        cards: [],
        card: {
            bankName: "[请选择要还款的银行]",
            last4CardNo: ""
        },
        totalMoney: 0,
        currentCardIndex: 0
    },
    onLoad: function(t) {
        this.setData({
            cards: getApp().globalData.homeCardsInfo,
            totalMoney: getApp().globalData.totalSum.merchantAmount
        });
    },
    onChoseCard: function(t) {
        this.setData({
            card: this.data.cards[t.detail.value],
            currentCardIndex: t.detail.value
        });
    },
    onWithdrawRecord: function(t) {
        wx.navigateTo({
            url: "../accountWithdrawRecord/accountWithdrawRecord"
        });
    },
    onAllWithdraw: function(t) {
        var a = this.data.totalMoney;
        this.setData({
            inputMoney: a
        });
    },
    onWithdraw: function(a) {
        var e = a.detail.value, o = e.amount;
        if (o) {
            if (o || 0 == o) {
                var n = this;
                wx.showModal({
                    title: "提示",
                    content: "请确认是否还款",
                    success: function(a) {
                        a.confirm && t(n, e);
                    }
                });
            }
        } else wx.showToast({
            title: "请输入还款金额"
        });
    },
    onShareAppMessage: function() {
        return a.getShareInfo();
    }
});

require("../../utils/bankUtil.js");

var a = require("../../utils/util.js"), e = require("../../utils/requestUtil.js"), o = require("../../utils/resultCodeUtil.js");