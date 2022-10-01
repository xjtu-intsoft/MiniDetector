var e = require("comm/script/config"), t = require("comm/script/fetch"), o = require("util/util");

require("./util/mtj-wx-sdk.js");

App({
    globalData: {
        wxUserInfo: null,
        wxDeviceInfo: null,
        hwxUserInfo: null,
        hwxDeviceInfo: null,
        timeDifference: "0",
        configLists: {},
        code: "",
        encryptedData: "",
        iv: "",
        openid: "",
        isFullSucreen: !1,
        platform: "IOS",
        ref: "",
        statusBarHeight: 0,
        navBarHeight: 0,
        version: "",
        menuHeight: ""
    },
    onLaunch: function(e) {
        this.initStorage(), console.log("opts+++"), console.log(e), this.getWxDeviceInfo(), 
        1044 == e.scene && (console.log(e.shareTicket), wx.showToast({
            image: "https://pic.hiweixiu.com/images/miniprogram/tip.png",
            title: e.shareTicket
        })), this.checkFullSucreen();
        var t = wx.getAccountInfoSync().miniProgram.version;
        console.log("version====="), console.log(t), this.globalData.version = t, wx.setStorageSync("createOrder", !0), 
        wx.login({
            success: function(e) {
                console.log("result+++++"), console.log(e), wx.setStorage({
                    key: "CODE",
                    data: e.code
                });
            },
            fail: function() {},
            complete: function() {}
        });
    },
    checkFullSucreen: function() {
        var e = this;
        wx.getSystemInfo({
            success: function(t) {
                t.screenHeight - t.safeArea.height >= 44 && (e.globalData.isFullSucreen = !0);
            }
        });
    },
    getWxDeviceInfo: function(e) {
        try {
            var t = wx.getSystemInfoSync();
            this.globalData.wxDeviceInfo = t, this.globalData.statusBarHeight = t.statusBarHeight;
            var o = wx.getMenuButtonBoundingClientRect();
            this.globalData.menuHeight = o.height, this.globalData.navBarHeight = 2 * (o.top - t.statusBarHeight) + o.height, 
            this.globalData.winRate = t.windowWidth / 750, "function" == typeof e && e(this.globalData.wxDeviceInfo), 
            "devtools" == t.platform ? this.setData({
                platform: "pc"
            }) : "ios" == t.platform ? this.setData({
                platform: "IOS"
            }) : "android" == t.platform && this.setData({
                platform: "android"
            });
        } catch (e) {
            console.log(JSON.stringify(e));
        }
    },
    setHwxUserInfo: function(t, o) {
        var a = {};
        a.token = t, a.phone = o, this.globalData.hwxUserInfo = a, wx.setStorage({
            key: e.storageKeys.currentUser,
            data: a
        });
    },
    setHiDeviceInfo: function(t) {
        this.globalData.hwxDeviceInfo = t, wx.setStorage({
            key: e.storageKeys.currentDevice,
            data: t
        });
    },
    setTimeDifference: function(t) {
        this.globalData.timeDifference = t, wx.setStorage({
            key: e.storageKeys.timeDifference,
            data: t
        });
    },
    initStorage: function() {
        var t = this;
        wx.getStorage({
            key: e.storageKeys.currentDevice,
            success: function(e) {
                t.globalData.hwxDeviceInfo = e.data;
            }
        });
        try {
            var a = wx.getStorageSync(e.storageKeys.currentUser);
            if (o.isExist(a)) t.globalData.hwxUserInfo = a; else {
                var i = {
                    token: "",
                    phone: ""
                };
                t.globalData.hwxUserInfo = i;
            }
        } catch (e) {
            console.log(JSON.stringify(e));
        }
        try {
            var n = wx.getStorageSync(e.storageKeys.timeDifference);
            o.isBlank(n) ? t.globalData.timeDifference = n : t.globalData.timeDifference = 0;
        } catch (e) {
            console.log(JSON.stringify(e));
        }
    },
    checkIsLogin: function(o, a) {
        var i = wx.getStorageSync(e.storageKeys.currentUser).token;
        t.getIsLogin(i, function(e) {
            console.log(e), "1" == e.is_login ? o.setData({
                isLogin: !0
            }) : o.setData({
                isLogin: !1
            }), a && "1" != e.is_login && wx.navigateTo({
                url: "/pages/personal/chooseLogin/chooseLogin"
            });
        }, function(e) {
            console.log("err6666"), console.log(e), o.setData({
                isLogin: !1
            });
        });
    },
    handleModel: function(e, t) {
        var o = e.toUpperCase();
        if ("DEVTOOLS" == o) return t;
        if ("IPHONE" == o) {
            var a = t.indexOf("<"), i = (g = t.slice(0, a)).indexOf("("), n = g.indexOf("China");
            if (i > 0) {
                var s = g.slice(0, i - 1);
                console.log(s);
            } else if (n > 0) {
                s = g.slice(0, n - 1);
                console.log("newkeyvalue"), console.log(s);
            } else s = g;
            return s;
        }
        if ("HUAWEI" == o) {
            var r = t.toUpperCase(), l = r.lastIndexOf("-");
            return g = r.slice(l - 3, l);
        }
        if ("HONOR" == o) {
            var c = t.toUpperCase();
            l = c.lastIndexOf("-");
            return g = c.slice(l - 3, l);
        }
        if ("SMARTISAN" == o) {
            var g, f = t.toUpperCase();
            return g = f.slice(f.length - 5, f.length);
        }
        return t.toUpperCase();
    },
    getParams: function(e) {
        var t = "";
        for (var o in e) t += o + "=" + e[o] + "&";
        return "?" + t;
    }
});