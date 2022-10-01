function t(t) {
    var a = new Object();
    a.cardId = t.data.cardId, a.billDate = t.data.billInfo.billDate, a.statu = t.data.stateData[t.data.stateIndex].flag, 
    e(t, a);
}

function e(t, e) {
    n.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "business/showCostAndRepaymentBillDetail.do",
        data: i.addBaseRequest(e),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            n.dismissLoading();
            var a = n.transformSuccessData(e);
            if (r.checkResultCode(a)) {
                var o = a.resultBody, s = t.data.billInfo;
                s.costAmount = o.costAmount, s.repaymentAmount = o.repaymentAmount, t.setData({
                    record: o.rows,
                    billInfo: s
                });
            }
        },
        fail: function(t) {
            n.dismissLoading(), n.showNetError();
        },
        complete: function(t) {}
    });
}

function a(e, a) {
    n.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "business/modifyBillDate.do",
        data: i.addBaseRequest(a),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(a) {
            n.dismissLoading();
            var o = n.transformSuccessData(a);
            if (r.checkResultCode(o)) {
                var s = o.resultBody.billDate, i = e.data.billInfo;
                i.billDate = s;
                var d = o.resultBody.time.split("-");
                d[0] = d[0].replace(".", "/"), d[1] = d[1].replace(".", "/"), i.time = d, e.setData({
                    billInfo: i
                }), t(e);
            }
        },
        fail: function(t) {
            n.dismissLoading(), n.showNetError();
        },
        complete: function(t) {}
    });
}

function o(t, e) {
    n.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "business/showRepaymentSplitDetail.do",
        data: i.addBaseRequest(e),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            n.dismissLoading();
            var a = n.transformSuccessData(e);
            if (r.checkResultCode(a)) {
                var o = a.resultBody;
                t.setData({
                    hiddenRepayDetail: !1,
                    repayDetail: o
                });
            }
        },
        fail: function(t) {
            n.dismissLoading(), n.showNetError();
        },
        complete: function(t) {}
    });
}

function s(e, a) {
    wx.request({
        url: getApp().globalData.urlHost + "bank/userChangeChannel.do",
        data: i.addBaseRequest(a),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(a) {
            var o = n.transformSuccessData(a);
            r.checkResultCode(o) && t(e);
        },
        fail: function(t) {
            n.showNetError();
        },
        complete: function(t) {}
    });
}

Page({
    data: {
        stateData: [ {
            name: "成功",
            flag: 1
        }, {
            name: "失败",
            flag: 2
        } ],
        stateIndex: 0,
        showChoseState: !1,
        record: [],
        hiddenRepayDetail: !0
    },
    onLoad: function(e) {
        var a = JSON.parse(decodeURIComponent(e.data)), o = e.cardId, s = a.date.split("/")[1], n = a.time.split("-");
        n[0] = n[0].replace(".", "/"), n[1] = n[1].replace(".", "/"), a.time = n, a.month = s;
        for (var i = new Array(), r = 1; r <= 30; r++) i[r - 1] = r;
        this.setData({
            stateIndex: e.stateIndex,
            billInfo: a,
            cardId: o,
            date: i
        }), t(this);
    },
    onChangeDate: function(t) {
        var e = parseInt(t.detail.value) + 1;
        e < 10 && (e = "0" + e);
        var o = this.data.billInfo.billDate;
        o = o.substring(0, 8) + e;
        var s = new Object();
        s.srcBillDate = this.data.billInfo.billDate, s.toBillDate = o, s.cardId = this.data.cardId, 
        a(this, s);
    },
    onHiddenStateOption: function(e) {
        var a = e.currentTarget.dataset.position;
        this.setData({
            stateIndex: a,
            showChoseState: !1
        }), t(this);
    },
    onSwitchState: function(t) {
        var e = this.data.showChoseState;
        this.setData({
            showChoseState: !e
        });
    },
    onDissmissModal: function(t) {
        this.setData({
            hiddenRepayDetail: !0
        });
    },
    onItemClick: function(t) {
        var e = t.currentTarget.dataset.position, a = this.data.record[e];
        if (1 == this.data.stateIndex) wx.showModal({
            title: "失败原因",
            content: a.reason
        }); else if (2 == a.tradeType) {
            var s = new Object();
            s.tradeId = a.tradeId, o(this, s);
        }
    },
    onCommentGood: function(t) {
        var e = t.currentTarget.dataset.position, a = this.data.record[e], o = new Object();
        o.tradeId = a.tradeId, o.bool = 1, s(this, o);
    },
    onCommentBad: function(t) {
        var e = t.currentTarget.dataset.position, a = this.data.record[e], o = new Object();
        o.tradeId = a.tradeId, o.bool = 1, s(this, o);
    },
    onShow: function() {},
    onShareAppMessage: function() {
        return n.getShareInfo();
    }
});

var n = require("../../utils/util.js"), i = (require("../../utils/bankUtil.js"), 
require("../../utils/requestUtil.js")), r = require("../../utils/resultCodeUtil.js");