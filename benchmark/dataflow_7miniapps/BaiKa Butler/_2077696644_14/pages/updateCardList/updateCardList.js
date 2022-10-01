function t(t) {
    e.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "bank/showValidBankCards.do",
        data: n.getBaseRequest(),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(n) {
            e.dismissLoading();
            var i = e.transformSuccessData(n);
            if (a.checkResultCode(i)) {
                for (var s = i.resultBody, r = 0; r < s.length; r++) {
                    var u = o.getUpdateCardBg(s[r].bankName);
                    s[r].bg = u;
                }
                t.setData({
                    items: s
                });
            }
        },
        fail: function(t) {
            e.dismissLoading(), e.showNetError();
        },
        complete: function(t) {}
    });
}

Page({
    data: {
        items: []
    },
    onLoad: function(t) {},
    onClickItem: function(t) {
        var e = t.currentTarget.dataset.position, n = this.data.items[e], a = encodeURIComponent(JSON.stringify(n));
        wx.navigateTo({
            url: "../updateCard/updateCard?data=" + a
        });
    },
    onReady: function() {},
    onShow: function() {
        t(this);
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return e.getShareInfo();
    }
});

var e = require("../../utils/util.js"), n = require("../../utils/requestUtil.js"), a = require("../../utils/resultCodeUtil.js"), o = require("../../utils/bankUtil.js");