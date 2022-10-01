var e = require("utils/mta_analysis.js"), t = require("utils/util.js"), a = wx.getUpdateManager();

a.onUpdateReady(function() {
    wx.showModal({
        title: "更新提示",
        content: "新版本已经准备好，是否重启应用？",
        success: function(e) {
            e.confirm && a.applyUpdate();
        }
    });
}), App({
    globalData: {
        userInfo: wx.getStorageSync("userInfo"),
        currentVedio: "",
        currentMe: "",
        slidetIndex: 0,
        openCount: wx.getStorageSync("openCount")
    },
    updateVedio: function(e) {
        var t = this.globalData.currentVedio;
        t && t.pause();
        var a = this.globalData.currentMe;
        a && a.setData({
            hiddenVideo: !0
        }), "videoHidden" == e ? (getApp().globalData.currentVedio = "", getApp().globalData.currentMe = "") : ((t = wx.createVideoContext("myVideo", e)).play(), 
        getApp().globalData.currentVedio = t, getApp().globalData.currentMe = e);
    },
    pauseVideo: function() {
        var e = this.globalData.currentMe;
        e.data && wx.createVideoContext("myVideo", e).pause();
    },
    getLogin: function(e) {
        var a = this;
        wx.login({
            success: function(n) {
                var o = n.code;
                o ? t.pageAjax.callAjax({
                    url: "wx_oath",
                    callAjaxNoUser: !0,
                    params: {
                        authcode: o
                    },
                    success: function(t) {
                        var n = t.result;
                        wx.setStorageSync("openId", n), a._getSetting(n, e);
                    }
                }) : wx.showToast({
                    title: t.apiFailUserInfo,
                    icon: "none"
                });
            },
            fail: function() {
                wx.showToast({
                    title: t.apiFailUserInfo,
                    icon: "none"
                });
            }
        });
    },
    _getSetting: function(e, a) {
        var n = this;
        wx.getSetting({
            success: function(t) {
                if (t.authSetting["scope.userInfo"]) n._getUserInfo(e, a); else {
                    var o = getCurrentPages(), i = "/" + o[o.length - 1].route;
                    wx.setStorageSync("launch_path", i), wx.redirectTo({
                        url: "/pages/guide/guide"
                    });
                }
            },
            fail: function() {
                wx.showToast({
                    title: t.apiFailUserInfo,
                    icon: "none"
                });
            }
        });
    },
    _getUserInfo: function(e, a) {
        wx.getUserInfo({
            success: function(n) {
                var o = n.userInfo;
                wx.setStorageSync("userInfo", o), getApp().globalData.userInfo = o, t.pageAjax.callAjax({
                    url: "bind_mini",
                    callAjaxNoUser: !0,
                    params: {
                        token: e,
                        gender: o.gender,
                        avatar: o.avatarUrl,
                        nick: o.nickName
                    },
                    success: function(e) {
                        wx.setStorageSync("user_Id", e.result.user_id), wx.setStorageSync("user_phone", e.result.phone), 
                        a && a();
                    }
                });
            },
            fail: function() {
                wx.showToast({
                    title: t.apiFailUserInfo,
                    icon: "none"
                });
            }
        });
    },
    onLaunch: function(t) {
        e.App.init({
            appID: "500620439",
            eventID: "500620440",
            statPullDownFresh: !0,
            statShareApp: !0,
            statReachBottom: !0
        });
    }
});