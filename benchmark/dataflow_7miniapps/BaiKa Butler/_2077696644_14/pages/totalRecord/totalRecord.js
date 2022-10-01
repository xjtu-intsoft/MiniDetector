function t(t) {
    o.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "business/showAllCostAndRepaymentCount.do",
        data: a.getBaseRequest(),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            o.dismissLoading();
            var a = o.transformSuccessData(e);
            if (s.checkResultCode(a)) {
                var n = a.resultBody;
                t.setData({
                    totalRecord: n
                });
            }
        },
        fail: function(t) {
            o.dismissLoading(), o.showNetError();
        },
        complete: function(t) {}
    });
}

function e(t) {
    o.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "business/showSingleCostAndRepaymentCount.do",
        data: a.getBaseRequest(),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            o.dismissLoading();
            var a = o.transformSuccessData(e);
            if (s.checkResultCode(a)) {
                var n = a.resultBody;
                t.setData({
                    record: n
                });
            }
        },
        fail: function(t) {
            o.dismissLoading(), o.showNetError();
        },
        complete: function(t) {}
    });
}

Page({
    data: {
        totalRecord: {},
        totalSum: 0
    },
    onLoad: function(t) {
        var e = getApp().globalData.totalSum.merchantAmount;
        this.setData({
            totalSum: e
        });
    },
    onItemClick: function(t) {
        var e = t.currentTarget.dataset.position, o = this.data.record[e], a = encodeURIComponent(JSON.stringify(o));
        wx.navigateTo({
            url: "../recordInfo/recordInfo?data=" + a
        });
    },
    onShow: function() {
        t(this), e(this);
    },
    onShareAppMessage: function() {
        return o.getShareInfo();
    }
});

var o = require("../../utils/util.js"), a = (require("../../utils/bankUtil.js"), 
require("../../utils/requestUtil.js")), s = require("../../utils/resultCodeUtil.js");