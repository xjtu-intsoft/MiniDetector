var t = require("../../../comm/script/fetch"), o = getApp();

Page({
    data: {
        pageData: {},
        isLogin: !1,
        showModal: !1,
        params: {}
    },
    closeModal: function() {
        this.setData({
            showModal: !1
        });
    },
    getLoginStatus: function() {
        var a = this, e = o.globalData.hwxUserInfo.phone, n = o.globalData.hwxUserInfo.token;
        e && n ? t.getIsLogin(n, function(t) {
            "1" == t.is_login ? a.setData({
                isLogin: !0
            }) : (a.setData({
                isLogin: !1
            }), wx.login({
                success: function(t) {
                    console.log("result-----"), console.log(t), wx.setStorage({
                        key: "CODE",
                        data: t.code
                    });
                },
                fail: function() {},
                complete: function() {}
            })), a.getActivityConfig(a.data.params);
        }, function(t) {
            console.log("err6666"), console.log(t), a.setData({
                isLogin: !1
            }), a.getActivityConfig(a.data.params), wx.login({
                success: function(t) {
                    console.log("result+++++"), console.log(t), wx.setStorage({
                        key: "CODE",
                        data: t.code
                    });
                },
                fail: function() {},
                complete: function() {}
            });
        }) : (a.getActivityConfig(a.data.params), wx.login({
            success: function(t) {
                console.log("result-----"), console.log(t), wx.setStorage({
                    key: "CODE",
                    data: t.code
                });
            },
            fail: function() {},
            complete: function() {}
        }));
    },
    onLoad: function(t) {
        console.log("options----"), console.log(t), o.globalData.ref || (o.globalData.ref = t.ref), 
        this.setData({
            params: {
                id: t.id,
                type: 1
            }
        }), this.getLoginStatus();
    },
    getActivityConfig: function(a) {
        var e = this, n = o.globalData.hwxUserInfo.token;
        t.getActivityConfig(n, a, function(t) {
            e.setData({
                pageData: t
            }), 1 != t.activityStatus && 3 != t.activityStatus || e.setData({
                showModal: !0
            }), o.globalData.ref || (o.globalData.ref = t.config.ref), wx.setNavigationBarTitle({
                title: e.data.pageData.config.name
            });
        }, function(t) {});
    },
    onShareAppMessage: function() {}
});