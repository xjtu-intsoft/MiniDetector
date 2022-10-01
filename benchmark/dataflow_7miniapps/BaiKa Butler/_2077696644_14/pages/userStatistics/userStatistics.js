function e(e) {
    wx.request({
        url: getApp().globalData.urlHost + "user/showUserCountResult.do",
        data: o.getBaseRequest(),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(t) {
            var o = r.transformSuccessData(t);
            if (a.checkResultCode(o)) {
                var s = o.resultBody;
                e.setData({
                    userSum: s
                });
            }
        },
        fail: function(e) {
            r.showNetError();
        },
        complete: function(e) {}
    });
}

function t(e) {
    wx.request({
        url: getApp().globalData.urlHost + "user/showUserTradeCountResult.do",
        data: o.getBaseRequest(),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(t) {
            var o = r.transformSuccessData(t);
            if (a.checkResultCode(o)) {
                var s = o.resultBody;
                e.setData({
                    tradeSum: s
                });
            }
        },
        fail: function(e) {
            r.showNetError();
        },
        complete: function(e) {}
    });
}

Page({
    data: {},
    onLoad: function(r) {
        e(this), t(this);
    },
    onTotalCustomer: function() {
        var e = this.data.userSum.subUserSum, t = this.data.userSum.yestodayUserSum;
        wx.navigateTo({
            url: "../myCustomer/myCustomer?total=" + e + "&yestoday=" + t
        });
    },
    onMonthTradeRecord: function(e) {
        wx.navigateTo({
            url: "../monthTradeRecords/monthTradeRecords"
        });
    },
    onCustomer: function(e) {
        var t = e.currentTarget.dataset.type;
        wx.navigateTo({
            url: "../activateCustomers/activateCustomers?type=" + t
        });
    },
    onLowerLevel: function(e) {
        wx.navigateTo({
            url: "../lowerLevelMemberLis/lowerLevelMemberLis"
        });
    },
    onShareAppMessage: function() {
        return r.getShareInfo();
    }
});

var r = require("../../utils/util.js"), o = require("../../utils/requestUtil.js"), a = require("../../utils/resultCodeUtil.js");