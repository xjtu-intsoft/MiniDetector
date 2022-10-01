function e(e, s) {
    t.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "bank/modifyBankCard3Elements.do",
        data: a.addBaseRequest(s),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            t.dismissLoading();
            var a = t.transformSuccessData(e);
            if (o.checkResultCode(a)) {
                var s = a.resultMsg;
                wx.showModal({
                    title: "提示",
                    content: s,
                    success: function(e) {
                        wx.navigateTo({
                            url: "../moreAuthBank/moreAuthBank"
                        });
                    }
                });
            }
        },
        fail: function(e) {
            t.dismissLoading(), t.showNetError();
        },
        complete: function(e) {}
    });
}

Page({
    data: {},
    onLoad: function(e) {
        var t = JSON.parse(decodeURIComponent(e.data));
        this.setData({
            cardInfo: t
        });
    },
    onUpdateCard: function(t) {
        e(0, t.detail.value);
    },
    onShareAppMessage: function() {
        return t.getShareInfo();
    }
});

var t = require("../../utils/util.js"), a = require("../../utils/requestUtil.js"), o = require("../../utils/resultCodeUtil.js");