App({
    globalData: {
        guidance_showModal: null,
        refer: "",
        timers: "",
        waiter: !1,
        userInfo: "",
        latitude: null,
        longitude: null,
        addr_saved: !1,
        shared: 0,
        state: null,
        news: [],
        transmit_title: "买卖二手挖机直接和车主联系，卖车快！非中介！",
        transmit_image: "http://images.998jx.com/micro/head_wajue.jpg",
        zuohua_animate: ""
    },
    onShow: function() {
        var a = this;
        wx.checkSession({
            fail: function() {
                a.onLaunch({});
            }
        });
    },
    onLaunch: function(a) {
        var t = this;
        a.query && a.query.t && (t.globalData.refer = a.query.t), t.globalData.guidance_showModal = !0, 
        wx.getSetting && wx.hideLoading ? wx.checkSession({
            fail: function() {
                t.globalData.userInfo = null;
            }
        }) : wx.showModal({
            title: "提示",
            showCancel: !1,
            content: "您的微信版本过低，无法使用该应用，请升级到最新微信版本后重试。"
        });
    },
    storage_tag: function() {
        var a = new Date(), t = a.getFullYear(), e = a.getMonth() + 1, o = a.getDate();
        return e >= 1 && e <= 9 && (e = "0" + e), o >= 0 && o <= 9 && (o = "0" + o), t + "" + e + o;
    },
    getcsid: function() {
        return this.globalData.userInfo.cs ? this.globalData.userInfo.cs.substr(10) : "";
    },
    checklogin: function() {
        return !!this.globalData.userInfo && (!!this.globalData.userInfo.mobile || (wx.showModal({
            title: "温馨提示",
            content: "你需要注册才能使用该功能",
            confirmText: "前往注册",
            success: function(a) {
                a.confirm && wx.navigateTo({
                    url: "/pages/login/login"
                });
            }
        }), !1));
    },
    auth: function(a) {
        var t = this;
        if (clearInterval(t.globalData.timers), this.globalData.userInfo) "function" == typeof a && a(this.globalData.userInfo); else {
            if (t.globalData.Wtimer) return t.globalData.Wtimer = !1, void wx.reLaunch({
                url: "/pages/index/index"
            });
            wx.login({
                success: function(e) {
                    var o = e.code;
                    o ? wx.request({
                        method: "POST",
                        header: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        url: "https://api.998jx.com/micro/account/login",
                        data: {
                            code: o,
                            t: t.globalData.refer,
                            site_id: "wajue"
                        },
                        success: function(e) {
                            "-1" == e.data.ret ? t.show_erro(e.data.msg, "faild") : e.data.ret ? (console.log("远程登录成功"), 
                            t.globalData.userInfo = e.data.userInfo, "function" == typeof a && a(e.data.userInfo)) : (console.log("用户不存在转注册"), 
                            t.globalData.userInfo = {
                                token: e.data.token
                            }, "function" == typeof a && a(t.globalData.userInfo)), t.globalData.waiter && (t.globalData.waiter = !1, 
                            wx.reLaunch({
                                url: "/pages/index/index"
                            }));
                        },
                        fail: function(a) {
                            t.globalData.waiter = !0, t.show_erro("网络不给力", "faild"), t.globalData.timers = setInterval(function() {
                                t.auth();
                            }, 5e3);
                        }
                    }) : (t.show_erro("登录失败", "faild"), "function" == typeof a && a(!1));
                },
                fail: function(a) {
                    t.globalData.waiter = !0, t.show_erro("网络不给力", "faild"), t.globalData.timers = setInterval(function() {
                        t.auth();
                    }, 5e3);
                }
            });
        }
    },
    refresh: function() {
        var a = this;
        this.globalData.userInfo = null, this.globalData.addr_saved = !1, wx.clearStorage(), 
        wx.clearStorageSync(), a.auth(function(a) {
            wx.reLaunch({
                url: "/pages/index/index"
            });
        });
    },
    show_erro: function(a, t) {
        var e = "warng.png";
        t ? (e = t + ".png", wx.showToast({
            title: a,
            image: "/images/icon/" + e,
            duration: 2e3
        })) : wx.showToast({
            title: a
        });
    },
    tohome: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    callout: function(a) {
        var t = this, e = a.currentTarget.dataset.micro_id, o = a.currentTarget.dataset.device_id;
        t.m_to_id = a.currentTarget.dataset.micro_id, t.m_device_id = a.currentTarget.dataset.device_id, 
        wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/trade/call_out",
            data: {
                token: app.globalData.userInfo.token,
                toid: e,
                device_id: o,
                shared: app.globalData.shared
            },
            success: function(a) {
                if ("-3" != a.data.ret) {
                    if ("-1" != a.data.ret) return "-4" == a.data.ret ? (t.data.m_msg = a.data.upgrade.msg, 
                    t.data.m_content = a.data.upgrade.details, t.data.m_call_fee = a.data.upgrade.call_fee, 
                    void t.setData({
                        modaltitle: a.data.msg,
                        modalcontent: a.data.details,
                        showModal: !0
                    })) : void ("-2" == a.data.ret ? wx.showModal({
                        title: a.data.msg,
                        content: a.data.details,
                        cancelColor: "#999999",
                        cancelText: "付费拨打",
                        confirmText: "升级会员",
                        success: function(a) {
                            a.confirm ? wx.navigateTo({
                                url: "/pages/upgrade/index"
                            }) : a.cancel && wx.showActionSheet({
                                itemList: [ "打赏平台" + t.data.m_call_fee + "元立即拨打车主电话", "升级会员" ],
                                success: function(a) {
                                    0 == a.tapIndex && t.makecall(t.m_to_id, t.m_device_id), 1 == a.tapIndex && wx.navigateTo({
                                        url: "/pages/upgrade/index"
                                    });
                                }
                            });
                        }
                    }) : a.data.ret && wx.makePhoneCall({
                        phoneNumber: a.data.phoneNumber,
                        fail: function(a) {
                            app.show_erro("拨号取消", "error");
                        }
                    }));
                    t.setData({
                        getPhone_showModal: !0
                    });
                } else app.show_erro(a.data.msg, "faild");
            }
        });
    }
});