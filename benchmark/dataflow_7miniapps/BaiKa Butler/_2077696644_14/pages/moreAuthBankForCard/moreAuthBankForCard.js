function a(a) {
    wx.showNavigationBarLoading(), wx.request({
        url: getApp().globalData.urlHost + "bank/showCardNeedBindChannels.do",
        data: d.addBaseRequest({
            cardId: a.data.cardInfo.cardId
        }),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            var t = n.transformSuccessData(e);
            s.checkResultCode(t) && a.setData({
                hadBindChannelIds: t.resultBody.hadBindChannelIds,
                unBindChannelIds: t.resultBody.unBindChannelIds
            });
        },
        fail: function(a) {
            n.showNetError();
        },
        complete: function(a) {
            wx.hideNavigationBarLoading();
        }
    });
}

function e(a, e) {
    wx.showNavigationBarLoading(), wx.request({
        url: getApp().globalData.urlHost + "bank/sendBindChannleSmsCode.do",
        data: d.addBaseRequest({
            channelId: e.id,
            cardId: a.data.cardInfo.cardId
        }),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            var t = n.transformSuccessData(e);
            if (s.checkResultCode(t)) {
                a.setData({
                    smsCodeCount: 60
                });
                var d = setInterval(function() {
                    a.setData({
                        smsCodeCount: a.data.smsCodeCount - 1
                    }), 0 == a.data.smsCodeCount && clearInterval(d);
                }, 1e3);
            }
        },
        fail: function(a) {
            n.showNetError();
        },
        complete: function(a) {
            wx.hideNavigationBarLoading();
        }
    });
}

function t(e, t) {
    wx.showNavigationBarLoading(), wx.request({
        url: getApp().globalData.urlHost + "bank/submitBindChannleSmsCode.do",
        data: d.addBaseRequest({
            channelId: t.id,
            cardId: e.data.cardInfo.cardId,
            smsCode: t.smsCode
        }),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(t) {
            var d = n.transformSuccessData(t);
            s.checkResultCode(d) && (wx.showToast({
                title: "绑定成功"
            }), a(e));
        },
        fail: function(a) {
            n.showNetError();
        },
        complete: function(a) {
            wx.hideNavigationBarLoading();
        }
    });
}

Page({
    data: {
        cardInfo: {},
        unBindChannelIds: [],
        seleChannel: 0,
        smsCodeCount: 0
    },
    onLoad: function(a) {
        this.setData({
            cardInfo: JSON.parse(decodeURIComponent(a.cardInfo))
        });
    },
    onShow: function() {
        a(this);
    },
    sendSmsCode: function(a) {
        this.data.smsCodeCount > 0 || (this.setData({
            seleChannel: a.target.id
        }), e(this, this.data.unBindChannelIds[a.target.id]));
    },
    smsCode: function(a) {
        var e = this.data.unBindChannelIds;
        e[a.target.id].smsCode = a.detail.value, this.setData({
            unBindChannelIds: e
        });
    },
    bindChannel: function(a) {
        t(this, this.data.unBindChannelIds[this.data.seleChannel]);
    },
    onShareAppMessage: function() {
        return n.getShareInfo();
    }
});

var n = require("../../utils/util.js"), d = require("../../utils/requestUtil.js"), s = require("../../utils/resultCodeUtil.js");