function t(t, e) {
    wx.request({
        url: getApp().globalData.urlHost + "bank/showBankCardInfo.do",
        data: n.addBaseRequest(e),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            var a = o.transformSuccessData(e);
            if (s.checkResultCode(a)) {
                var n = a.resultBody;
                t.setData({
                    cardInfo: n
                });
            }
        },
        fail: function(t) {
            o.showNetError();
        },
        complete: function(t) {}
    });
}

function e(t, e) {
    o.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "bank/modifyBankCard.do",
        data: n.addBaseRequest(e),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            o.dismissLoading();
            var a = o.transformSuccessData(e);
            s.checkResultCode(a) && (o.reportErrorMessageOperate(t.data.type, request.cardId), 
            wx.showModal({
                title: "提示",
                content: a.resultMsg,
                success: function(t) {
                    wx.navigateBack({});
                }
            }));
        },
        fail: function(t) {
            o.dismissLoading(), o.showNetError();
        },
        complete: function(t) {}
    });
}

function a(t, e) {
    o.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "bank/fillBankBill.do",
        data: n.addBaseRequest(e),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(a) {
            o.dismissLoading();
            var n = o.transformSuccessData(a);
            s.checkResultCode(n) && (wx.showModal({
                title: "提示",
                content: "修改成功",
                success: function(t) {
                    wx.navigateBack({});
                }
            }), o.reportErrorMessageOperate(t.data.type, e.cardId));
        },
        fail: function(t) {
            o.dismissLoading(), o.showNetError();
        },
        complete: function(t) {}
    });
}

Page({
    data: {
        cardInfo: {},
        type: 0,
        date: []
    },
    onLoad: function(e) {
        for (var a = [], o = 0; o < 30; o++) a[o] = 1 + o;
        this.setData({
            date: a,
            type: e.type
        });
        var n = new Object(), s = e.cardId;
        n.cardId = s, t(this, n);
    },
    onPickerChange: function(t) {
        var e = t.detail.value, a = this.data.cardInfo;
        a.repaymentDay = this.data.date[e], this.setData({
            cardInfo: a
        });
    },
    updateCard: function(t) {
        var o = t.detail.value, n = this;
        2 == this.data.type ? wx.showModal({
            title: "提示",
            content: "是否修改账单额?",
            success: function(t) {
                t.confirm && a(n, o);
            }
        }) : wx.showModal({
            title: "提示",
            content: "是否修改卡信息?",
            success: function(t) {
                t.confirm && e(n, o);
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return o.getShareInfo();
    }
});

var o = require("../../utils/util.js"), n = require("../../utils/requestUtil.js"), s = require("../../utils/resultCodeUtil.js");