function e() {
    var e = o.getBaseRequest();
    wx.request({
        url: getApp().globalData.urlHost + "user/unBindWeixin.do",
        data: e,
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        }
    }), getApp().globalData.userSessionId = "", wx.setStorageSync("account", ""), wx.setStorageSync("password", ""), 
    wx.setStorageSync("userSessionId", ""), wx.redirectTo({
        url: "../login/login"
    });
}

function t(e) {
    wx.request({
        url: getApp().globalData.urlHost + "user/bindOfficeAccount.do",
        data: o.addBaseRequest(e),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            n.dismissLoading();
            var t = n.transformSuccessData(e).resultMsg;
            wx.showModal({
                title: "提示",
                content: t
            });
        },
        fail: function(e) {
            n.showNetError();
        },
        complete: function(e) {}
    });
}

Page({
    onLoad: function(e) {
        var t = getApp().globalData.userInfo;
        this.setData({
            userBeen: t
        });
    },
    onResetPassword: function() {
        wx.navigateTo({
            url: "../resetPassword/resetPassword"
        });
    },
    onExchangePhone: function() {
        wx.navigateTo({
            url: "../authPhone/authPhone"
        });
    },
    onBindOfficial: function(e) {
        wx.login({
            success: function(e) {
                var n = new Object();
                n.jsCode = e.code, t(n);
            }
        });
    },
    onInstrance: function(e) {
        wx.navigateTo({
            url: "../myInsurance/myInsurance"
        });
    },
    inputReferrer: function(e) {
        wx.navigateTo({
            url: "../inputReferrer/inputReferrer"
        });
    },
    onWithdrawWay: function(e) {
        wx.navigateTo({
            url: "../withdrawTip/withdrawTip"
        });
    },
    myReferrer: function(e) {
        var t = this.data.userBeen.referrer;
        wx.showModal({
            title: "我的推荐人",
            content: t
        });
    },
    onAddWechat: function() {
        wx.navigateTo({
            url: "../customerServiceWeChat/customerServiceWeChat"
        });
    },
    onResetWeichat: function(e) {
        wx.navigateTo({
            url: "../resetWeichat/resetWeichat"
        });
    },
    onPush: function(e) {
        wx.navigateTo({
            url: "../pushNotification/pushNotification"
        });
    },
    exit: function(t) {
        wx.showModal({
            title: "提示",
            content: "是否退出",
            success: function(t) {
                t.confirm && e();
            }
        });
    },
    onShareAppMessage: function() {
        return n.getShareInfo();
    }
});

var n = require("../../utils/util.js"), o = require("../../utils/requestUtil.js");

require("../../utils/resultCodeUtil.js");