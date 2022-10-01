function e(e) {
    wx.showNavigationBarLoading(), wx.request({
        url: getApp().globalData.urlHost + "bank/showUserApplyBigChannel.do",
        data: r.getBaseRequest(),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(a) {
            var t = s.transformSuccessData(a);
            i.checkResultCode(t) && e.setData(t.resultBody);
        }
    }), wx.request({
        url: getApp().globalData.urlHost + "bank/showChannelBindCardSum.do",
        data: r.getBaseRequest(),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(t) {
            var n = s.transformSuccessData(t);
            i.checkResultCode(n) && (n.resultBody.map(function(a, t) {
                a.progress = 0 != a.allCards ? a.hadBindCards / a.allCards * 120 : 0, e.data.choseChannelId && a.channelId == e.data.choseChannelId ? e.setData({
                    currentChannelPosition: t,
                    choseChannelId: ""
                }) : 1 == a.isSelect && e.setData({
                    currentChannelPosition: t
                });
            }), e.setData({
                channelData: n.resultBody
            }), a(e));
        },
        fail: function(e) {
            s.showNetError();
        },
        complete: function(e) {
            wx.hideNavigationBarLoading();
        }
    });
}

function a(e) {
    var a = e.data.currentChannelPosition, n = e.data.channelData[a].channelId, o = new Object();
    o.channelId = n, t(e, o);
}

function t(e, a) {
    s.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "bank/showUnBindCardsList.do",
        data: r.addBaseRequest(a),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(a) {
            s.dismissLoading();
            var t = s.transformSuccessData(a);
            if (i.checkResultCode(t)) {
                for (var n = t.resultBody, r = 0; r < n.length; r++) {
                    var l = n[r].bankName, c = o.getChannelBankBG(l);
                    n[r].itemBG = c;
                }
                e.setData({
                    cards: n
                });
            }
        },
        fail: function(e) {
            s.dismissLoading(), s.showNetError();
        }
    });
}

function n(e) {
    s.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "bank/applyAuthBindBigChannel.do",
        data: r.getBaseRequest(),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(a) {
            s.dismissLoading();
            var t = s.transformSuccessData(a);
            i.checkResultCode(t) && (wx.showToast({
                title: "开通成功"
            }), e.onShow(), e.changeLargeOpeningTip());
        },
        fail: function(e) {
            s.dismissLoading(), s.showNetError();
        }
    });
}

Page({
    data: {
        channelData: [],
        currentChannelPosition: 0,
        isSupportBigChannel: 0,
        showLargeOpeningTip: !1,
        msg: "",
        cards: [],
        choseChannelId: "",
        formType: 0
    },
    onLoad: function(e) {
        console.log(e), this.setData({
            choseChannelId: e.channelId || "",
            formType: e.formType || 0
        }), console.log(this.data);
    },
    onShow: function() {
        e(this);
    },
    onChoseChannel: function(e) {
        var t = e.currentTarget.dataset.position;
        this.setData({
            currentChannelPosition: t
        }), a(this);
    },
    changeLargeOpeningTip: function() {
        this.setData({
            showLargeOpeningTip: !this.data.showLargeOpeningTip
        });
    },
    largeOpening: function() {
        n(this);
    },
    toMemberPage: function() {
        wx.navigateTo({
            url: "../member/member"
        });
    },
    onRebind: function(e) {
        var a = e.currentTarget.dataset.position, t = this.data.cards[a], n = this.data.channelData[this.data.currentChannelPosition];
        t.channelId = n.channelId, t.channelName = n.name, wx.navigateTo({
            url: "../RebindCard/RebindCard?formType=" + this.data.formType + "&cardInfo=" + encodeURIComponent(JSON.stringify(t))
        });
    },
    onShareAppMessage: function() {
        return s.getShareInfo();
    }
});

var o = require("../../utils/bankUtil.js"), s = require("../../utils/util.js"), r = require("../../utils/requestUtil.js"), i = require("../../utils/resultCodeUtil.js");