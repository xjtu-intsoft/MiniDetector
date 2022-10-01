function t() {
    wx.showModal({
        title: "提示",
        content: "为了保障用户的财产安全，当用户使用本产品并且添加卡成功后，本产品会自动免费给用户投保。保障期为一个月。若每个月正常使用本产品，系统将会自动免费续保。"
    }), wx.setStorageSync("insuranceDialogShow", "true");
}

function e(t) {
    wx.showNavigationBarLoading(), wx.request({
        url: getApp().globalData.urlHost + "user/showInsurance.do",
        data: n.getBaseRequest(),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            var n = o.transformSuccessData(e);
            a.checkResultCode(n) && t.setData({
                insuranceInfo: n.resultBody
            });
        },
        fail: function(t) {
            o.showNetError();
        },
        complete: function(t) {
            wx.hideNavigationBarLoading();
        }
    });
}

Page({
    data: {},
    onLoad: function(t) {
        e(this);
    },
    onShow: function() {
        wx.getStorageSync("insuranceDialogShow") || t();
    },
    onCopy: function() {
        this.data.insuranceInfo && wx.setClipboardData({
            data: this.data.insuranceInfo.policyNo,
            success: function(t) {
                wx.showToast({
                    title: "已复制"
                });
            }
        });
    },
    onShowRule: function(e) {
        t();
    },
    onShareAppMessage: function() {
        return o.getShareInfo();
    }
});

var o = require("../../utils/util.js"), n = require("../../utils/requestUtil.js"), a = require("../../utils/resultCodeUtil.js");