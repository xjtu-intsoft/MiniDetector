var a = getApp(), t = wx.getBackgroundAudioManager();

Page({
    data: {
        userInfo: "",
        misc_time: 0,
        popbox: !1
    },
    onLoad: function(t) {
        var e = this;
        t.t && (a.globalData.refer = t.t), a.auth(function(t) {
            e.setData({
                userInfo: t
            }), wx.request({
                url: "https://api.998jx.com/micro/answer/start",
                method: "POST",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                data: {
                    token: a.globalData.userInfo.token
                },
                success: function(a) {
                    e.setData({
                        ad: a.data.ad,
                        statustxt: a.data.statustxt
                    });
                }
            });
        });
    },
    gohome: function() {
        wx.switchTab({
            url: "/pages/index/index"
        });
    },
    register: function(t) {
        if (t.detail.encryptedData) {
            var e = {
                token: a.globalData.userInfo.token,
                encryptedData: t.detail.encryptedData,
                iv: t.detail.iv
            };
            wx.request({
                url: "https://api.998jx.com/micro/account/user_register",
                method: "POST",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                data: e,
                success: function(t) {
                    0 == t.data.ret ? a.show_erro(t.data.msg, "error") : (a.globalData.userInfo = t.data.userInfo, 
                    wx.redirectTo({
                        url: "/pages/answer/index"
                    }));
                }
            });
        }
    },
    startgame: function(a) {
        this.data.userInfo.avatars ? wx.navigateTo({
            url: "/pages/answer/index"
        }) : console.log("未注册");
    },
    paihang: function(a) {
        this.data.userInfo.avatars ? wx.navigateTo({
            url: "/pages/answertop/index"
        }) : console.log("未注册");
    },
    tiaozhan: function(a) {
        this.data.userInfo.avatars || console.log("未注册");
    },
    playsound: function(a) {
        t.title = "江湖王者", t.epname = "江湖王者", t.singer = "none", t.src = "http://images.998jx.com/youxi/start.mp3";
    },
    onReady: function() {
        this.playsound();
    },
    choujiang: function() {
        this.data.userInfo.avatars ? wx.navigateTo({
            url: "/pages/turntable/turntable"
        }) : console.log("未注册");
    },
    onShow: function() {
        this.setData({
            popbox: !1
        });
    },
    onShareAppMessage: function(t) {
        return {
            title: "除了徐三中，你还认识多少铲车？",
            path: "/pages/answer/start?t=" + a.getcsid()
        };
    }
});