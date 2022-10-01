function t(t) {
    wx.request({
        url: getApp().globalData.urlHost + "bank/showEroorMsgDetail.do",
        data: o.getBaseRequest(),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            var o = a.transformSuccessData(e);
            n.checkResultCode(o) && t.setData({
                list: o.resultBody
            });
        },
        fail: function(t) {
            a.showNetError();
        },
        complete: function(t) {}
    });
}

function e(e, i) {
    a.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "user/modifyLocation.do",
        data: o.addBaseRequest(i),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(o) {
            a.dismissLoading();
            var i = a.transformSuccessData(o);
            n.checkResultCode(i) && (wx.showToast({
                title: "修改成功!"
            }), a.reportErrorMessageOperate(4, ""), t(e));
        },
        fail: function(t) {
            a.dismissLoading(), a.showNetError();
        },
        complete: function(t) {}
    });
}

Page({
    data: {
        list: [],
        region: {},
        showRegionDialog: !1
    },
    onLoad: function(t) {},
    onReady: function() {},
    onShow: function() {
        t(this);
    },
    onUpdateCredit: function(t) {
        var e = t.currentTarget.dataset.position, a = this.data.list[e];
        wx.navigateTo({
            url: "../updateCardInfo/updateCardInfo?cardId=" + a.cardId + "&type=0"
        });
    },
    onUpdateRepayDay: function(t) {
        var e = t.currentTarget.dataset.position, a = this.data.list[e];
        wx.navigateTo({
            url: "../updateCardInfo/updateCardInfo?cardId=" + a.cardId + "&type=1"
        });
    },
    onUpdateBillSum: function(t) {
        var e = t.currentTarget.dataset.position, a = this.data.list[e];
        wx.navigateTo({
            url: "../updateCardInfo/updateCardInfo?cardId=" + a.cardId + "&type=2"
        });
    },
    onBindChannel: function(t) {
        var e = t.currentTarget.dataset.position, a = this.data.list[e].channel;
        wx.navigateTo({
            url: "../moreAuthBank/moreAuthBank?formType=1&channelId=" + a
        });
    },
    bindRegionChange: function(t) {
        var e = t.detail.value, a = t.detail.code, o = new Object();
        o.province = e[0], o.city = e[1], o.provinceCode = a[0], o.cityCode = a[1], this.setData({
            region: o,
            showRegionDialog: !0
        });
    },
    cancelResetRegion: function() {
        this.setData({
            showRegionDialog: !1
        });
    },
    confirmResetRegion: function() {
        this.setData({
            showRegionDialog: !1
        }), e(this, this.data.region);
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});

var a = require("../../utils/util.js"), o = (require("../../utils/bankUtil.js"), 
require("../../utils/requestUtil.js")), n = require("../../utils/resultCodeUtil.js");