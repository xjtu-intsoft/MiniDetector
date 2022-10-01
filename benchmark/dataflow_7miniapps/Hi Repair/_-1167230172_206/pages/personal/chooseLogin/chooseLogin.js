require("../../../util/util");

var e = require("../../../comm/script/fetch"), o = (require("../../../comm/script/config"), 
getApp());

Page({
    data: {},
    onLoad: function() {
        wx.login({
            success: function(e) {
                wx.setStorageSync("CODE", e.code);
            },
            fail: function() {},
            complete: function() {}
        });
    },
    login: function() {},
    goToUserTerms: function() {
        wx.navigateTo({
            url: "../../repair/userAgreementWeb/userAgreementWeb"
        });
    },
    getUserInfo: function(n) {
        console.log("e----"), console.log(n);
        var t = encodeURIComponent(n.detail.iv), i = encodeURIComponent(n.detail.encryptedData), g = this, c = wx.getStorageSync("CODE");
        e.getWxLogin(encodeURIComponent(c), i, t, function(e) {
            o.setHwxUserInfo(e.token, e.phone_number);
            var n = getCurrentPages();
            n[n.length - 2].setData({
                isLogin: !0
            }), wx.navigateBack({
                delta: 1
            });
        }, function(e) {
            console.log("err6666"), console.log(e), g.goToLogin();
        });
    },
    getPhoneNumber: function(n) {
        var t = encodeURIComponent(n.detail.iv), i = encodeURIComponent(n.detail.encryptedData), g = this;
        if (console.log("telObj----"), console.log(i ? 1 : 2), "undefined" != i) {
            var c = wx.getStorageSync("CODE");
            e.getWxLogin(encodeURIComponent(c), i, t, function(e) {
                o.setHwxUserInfo(e.token, e.phone_number);
                var n = getCurrentPages();
                n[n.length - 2].setData({
                    isLogin: !0
                }), wx.navigateBack({
                    delta: 1
                });
            }, function(e) {
                console.log("err6666"), console.log(e), g.goToLogin();
            });
        } else g.goToLogin();
    },
    goToLogin: function() {
        wx.redirectTo({
            url: "../login/login"
        });
    }
});