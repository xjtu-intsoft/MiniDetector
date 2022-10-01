function t(o) {
    if (i <= 0) return o.setData({
        codeStr: "0"
    }), void e(o);
    setTimeout(function() {
        i--, o.setData({
            showRefreshButton: !1,
            codeStr: i + ""
        }), t(o);
    }, 1e3);
}

function e(t) {
    var e = new Object();
    e.out_trade_no = "", o(t, e);
}

function o(t, e) {
    s.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "user/queryWeixinPayOrder.do",
        data: n.addBaseRequest(e),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            s.dismissLoading();
            var o = s.transformSuccessData(e);
            a.checkResultCode(o) ? wx.showModal({
                title: "提示",
                content: "支付成功",
                success: function(t) {
                    wx.navigateBack({
                        delta: 2
                    });
                }
            }) : t.setData({
                showRefreshButton: !0
            });
        },
        fail: function(e) {
            s.dismissLoading(), t.setData({
                showRefreshButton: !0
            });
        },
        complete: function(t) {}
    });
}

Page({
    data: {
        codeStr: 5,
        showRefreshButton: !1
    },
    onLoad: function(e) {
        t(this);
    },
    onShow: function() {},
    onRefresh: function(t) {
        e(this);
    },
    onShareAppMessage: function() {}
});

var s = require("../../utils/util.js"), n = require("../../utils/requestUtil.js"), a = require("../../utils/resultCodeUtil.js"), i = 5;