function t(t) {
    var a = new Object();
    a.page = 1, e(t, a);
}

function e(t, e) {
    u = !0, wx.showNavigationBarLoading(), wx.request({
        url: getApp().globalData.urlHost + "business/showUserWithdrawDetail.do",
        data: i.addBaseRequest(e),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            var a = s.transformSuccessData(e);
            if (r.checkResultCode(a)) {
                var i = a.resultBody.rows, u = a.resultBody.total, l = t.data.records;
                1 == n && (l = new Array());
                for (var c = 0; c < i.length; c++) {
                    var h = i[c];
                    h.bg = o.getWithdrawBankBg(h.bankName);
                }
                (i = l.concat(i)).length >= u ? d = !1 : (d = !0, n++), t.setData({
                    records: i
                });
            }
        },
        fail: function(t) {
            s.showNetError();
        },
        complete: function(t) {
            wx.hideNavigationBarLoading(), u = !1;
        }
    });
}

function a(t, e) {
    s.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "business/showRepaymentSplitDetail.do",
        data: i.addBaseRequest(e),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            s.dismissLoading();
            var a = s.transformSuccessData(e);
            if (r.checkResultCode(a)) {
                var o = a.resultBody;
                t.setData({
                    hiddenRepayDetail: !1,
                    repayDetail: o
                });
            }
        },
        fail: function(t) {
            s.dismissLoading(), s.showNetError();
        },
        complete: function(t) {}
    });
}

Page({
    data: {
        records: [],
        hiddenRepayDetail: !0
    },
    onLoad: function(e) {
        n = 1, t(this);
    },
    onShow: function() {},
    onItemClick: function(t) {
        var e = t.currentTarget.dataset.position, o = this.data.records[e];
        if (2 == o.statu) wx.showModal({
            title: "失败原因",
            content: o.reason
        }); else if (1 == o.statu) {
            var s = new Object();
            s.tradeId = o.tradeId, a(this, s);
        }
    },
    onDissmissModal: function(t) {
        this.setData({
            hiddenRepayDetail: !0
        });
    },
    onReachBottom: function() {
        !u && d && t(this);
    },
    onShareAppMessage: function() {
        return s.getShareInfo();
    }
});

var o = require("../../utils/bankUtil.js"), s = require("../../utils/util.js"), i = require("../../utils/requestUtil.js"), r = require("../../utils/resultCodeUtil.js"), n = 1, u = !1, d = !1;