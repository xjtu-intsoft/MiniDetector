var t = getApp();

Page({
    data: {
        canRoll: !1,
        num: 0,
        allow_num: 0,
        lottery: [ "三一STC", "三一SCC", "50积分", "30元红包", "5元红包", "凯迪威模型" ],
        rightNum: 0,
        resuts: "",
        msg: "",
        shownote: !0,
        showjp: !1,
        showlist: !1,
        mjplist: []
    },
    shownote: function() {
        this.setData({
            shownote: !0,
            showjp: !1,
            showlist: !1
        });
    },
    showlist: function() {
        var a = this;
        a.setData({
            shownote: !1,
            showlist: !0,
            showjp: !1
        }), wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/answer/jplist",
            data: {
                token: t.globalData.userInfo.token
            },
            success: function(t) {
                a.setData({
                    jplist: t.data.data
                });
            }
        });
    },
    showjp: function() {
        var a = this;
        a.setData({
            shownote: !1,
            showlist: !1,
            showjp: !0
        }), wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/answer/myjp",
            data: {
                token: t.globalData.userInfo.token
            },
            success: function(t) {
                a.setData({
                    ckmobile: t.data.ckmobile,
                    mjplist: t.data.data
                });
            }
        });
    },
    onLoad: function() {
        var a = this;
        t.auth(function() {
            var t = wx.createAnimation({
                duration: 4e3,
                timingFunction: "ease"
            });
            a.aniData = t;
        });
    },
    gostart: function() {
        wx.redirectTo({
            url: "/pages/answer/start"
        });
    },
    getPhoneNumber: function(a) {
        var e = this;
        "getPhoneNumber:ok" == a.detail.errMsg && wx.request({
            url: "https://api.998jx.com/micro/answer/bind_phone",
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: {
                token: t.globalData.userInfo.token,
                encryptedData: a.detail.encryptedData,
                iv: a.detail.iv
            },
            success: function(a) {
                1 == a.data.ret ? e.showjp() : t.show_erro(a.data.msg, "error");
            }
        });
    },
    formSubmit: function(a) {
        var e = this, o = a.detail.formId, n = a.detail.value.mobile, s = !1, r = !0;
        n < 11 ? (s = !0, r = !1) : s = !1, e.setData({
            ckmobile: s
        }), r && wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/answer/savejp",
            data: {
                token: t.globalData.userInfo.token,
                formId: o,
                phone: n,
                rightNum: e.data.rightNum
            },
            success: function(t) {
                wx.showToast({
                    title: "领奖成功",
                    icon: "success",
                    duration: 2e3
                }), setTimeout(function() {
                    wx.redirectTo({
                        url: "/pages/answer/start"
                    });
                }, 2e3);
            }
        });
    },
    trun: function() {
        var t = this;
        if (t.data.canRoll) {
            t.setData({
                resuts: "抽奖中.."
            }), t.data.canRoll = !1;
            var a = this.aniData, e = t.data.rightNum;
            a.rotate(3600 * (t.data.num + 1) - 360 / t.data.lottery.length * e).step(), this.setData({
                aniData: a.export()
            }), setTimeout(function() {
                t.setData({
                    resuts: t.data.msg,
                    showphone: !0
                }), wx.showModal({
                    title: "",
                    content: t.data.msg,
                    showCancel: !1
                });
            }, 5e3), t.data.num++, console.log(t.data.num), t.data.num < t.data.allow_num && (t.data.canRoll = !0);
        } else t.data.msg && wx.showModal({
            title: "",
            content: t.data.msg,
            showCancel: !1
        });
    },
    gotop: function() {
        wx.redirectTo({
            url: "/pages/answertop/index?page=game"
        });
    },
    startRollTap: function() {
        var a = this;
        t.auth(function(e) {
            wx.request({
                method: "POST",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                url: "https://api.998jx.com/micro/answer/roundjp",
                data: {
                    token: t.globalData.userInfo.token
                },
                success: function(t) {
                    1 == t.data.ret ? (a.data.canRoll = !0, a.data.rightNum = t.data.rightNum, a.data.msg = t.data.msg, 
                    a.data.allow_num = t.data.allow_num, a.setData({
                        canRoll: a.data.canRoll
                    })) : a.data.msg = t.data.msg, a.trun();
                }
            });
        });
    },
    onShareAppMessage: function() {
        return {
            title: "吊装江湖为王者而战！闯关赢大奖，吊友们赶快来抢吧",
            path: "/pages/answer/start?t=" + t.getcsid(),
            success: function(t) {}
        };
    }
});