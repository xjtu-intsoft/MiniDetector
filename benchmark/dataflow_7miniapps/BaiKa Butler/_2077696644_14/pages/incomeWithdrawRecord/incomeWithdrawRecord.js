function t(t) {
    var a = new Object();
    a.page = r, e(t, a);
}

function e(t, e) {
    o = !0, wx.request({
        url: getApp().globalData.urlHost + "user/showRewardWithdrawDetail.do",
        data: s.addBaseRequest(e),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            var o = n.transformSuccessData(e);
            if (u.checkResultCode(o)) {
                var s = o.resultBody.rows, c = o.resultBody.total, i = t.data.records;
                1 == r && (i = new Array()), (s = i.concat(s)).length >= c ? a = !1 : (a = !0, r++), 
                t.setData({
                    records: s
                });
            }
        },
        fail: function(t) {
            n.showNetError();
        },
        complete: function(t) {
            o = !1;
        }
    });
}

Page({
    data: {
        records: [],
        totalAmount: 0
    },
    onLoad: function(e) {
        var a = getApp().globalData.earnInfo, o = a.rewardAmount - a.rewardBalance;
        this.setData({
            totalAmount: o
        }), r = 1, t(this);
    },
    onShow: function() {},
    onReachBottom: function() {
        !o && a && t(this);
    },
    onShareAppMessage: function() {
        return n.getShareInfo();
    }
});

var a = !1, o = !1, r = 1, n = require("../../utils/util.js"), s = require("../../utils/requestUtil.js"), u = require("../../utils/resultCodeUtil.js");