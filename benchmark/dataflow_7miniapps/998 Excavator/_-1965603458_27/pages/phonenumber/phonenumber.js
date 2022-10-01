var e = getApp();

Page({
    data: {
        contact_name: null,
        mobile: null,
        verifycode: null,
        from_url: null,
        getcodetxt: "获取验证码",
        ckmobile: "dpy_none",
        ckname: "dpy_none",
        ckcode: "dpy_none"
    },
    onLoad: function(t) {
        var a = this;
        a.data.from_url = t.from_url, "1" == t.bind ? wx.setNavigationBarTitle({
            title: "绑定手机号码"
        }) : (wx.setNavigationBarTitle({
            title: "修改手机号码"
        }), e.auth(function(t) {
            t ? wx.request({
                url: "https://zu.998jx.com/micro/account/getinfo",
                method: "POST",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                data: {
                    token: e.globalData.userInfo.token
                },
                success: function(e) {
                    a.setData({
                        contact_name: e.data.data.contact_name,
                        mobile: e.data.data.mobile
                    });
                },
                fail: function(e) {}
            }) : e.show_erro("登录失败", "faild");
        }));
    },
    getmobile: function(e) {},
    counttime: function(e, t) {
        var a = this;
        if ("undefined" == typeof time) var o = t;
        if (0 == t) a.setData({
            getcodetxt: "重获验证码",
            disable: ""
        }), t = o; else {
            var n = t;
            n < 10 && (n = "0" + n), a.setData({
                getcodetxt: "已发送(" + n + "s)",
                disable: "disable"
            }), t--, setTimeout(function() {
                a.counttime(e, t);
            }, 1e3);
        }
    },
    getsms: function(t) {
        var a = this;
        "获取验证码" == a.data.getcodetxt || "重获验证码" == a.data.getcodetxt ? a.data.mobile && a.data.mobile.match(/^1[3|4|5|7|8]{1}[0-9]{9}$/) ? (a.setData({
            ckmobile: "dpy_none"
        }), a.counttime("", 60), e.auth(function(t) {
            wx.request({
                url: "https://api.998jx.com/micro/sms/send",
                method: "POST",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                data: {
                    token: e.globalData.userInfo.token,
                    mobile: a.data.mobile
                },
                success: function(t) {
                    t.data.ret ? (a.data.verifycode = t.data.code, setTimeout(function() {
                        a.setData({
                            verifycode: t.data.code
                        });
                    }, 3e3), wx.showToast({
                        title: "发送成功",
                        icon: "success",
                        duration: 2e3
                    })) : e.show_erro(t.data.msg);
                }
            });
        })) : a.setData({
            ckmobile: null
        }) : e.show_erro("请勿重复发送", "warng");
    },
    bindKeyInput: function(e) {
        this.data.mobile = e.detail.value;
    },
    formSubmit: function(t) {
        var a = this, o = !1, n = t.detail.value.contact_name, i = t.detail.value.mobile, c = t.detail.value.verification;
        if (n.length < 2 && (o = !0), i.match(/^1[3|4|5|7|8]{1}[0-9]{9}$/) || (o = !0), 
        6 != c.length && (o = !0), c != a.data.verifycode && (o = !0, e.show_erro("短信验证错误", "error")), 
        a.setData({
            ckmobile: i.match(/^1[3|4|5|7|8]{1}[0-9]{9}$/) ? "dpy_none" : null,
            ckname: n.length < 2 ? null : "dpy_none",
            ckcode: c.length < 6 ? null : "dpy_none"
        }), o) return !1;
        e.auth(function(t) {
            wx.request({
                url: "https://api.998jx.com/micro/account/bindmobile",
                method: "POST",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                data: {
                    token: e.globalData.userInfo.token,
                    contact_name: n,
                    mobile: i
                },
                success: function(t) {
                    t.data.ret ? (e.show_erro("绑定成功"), setTimeout(function() {
                        wx.navigateBack({
                            delta: 1
                        });
                    }, 1500)) : e.show_erro(t.data.msg, "error");
                }
            });
        });
    },
    getPhoneNumber: function(t) {
        var a = this;
        "getPhoneNumber:ok" == t.detail.errMsg && e.auth(function(o) {
            if (!o.token) return !1;
            wx.request({
                url: "https://api.998jx.com/micro/account/decode_phone",
                method: "POST",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                data: {
                    token: e.globalData.userInfo.token,
                    encryptedData: t.detail.encryptedData,
                    iv: t.detail.iv
                },
                success: function(t) {
                    t.data.ret ? (e.show_erro("获取成功"), a.setData({
                        ck_ownerphone: !1,
                        ownerphone: t.data.data
                    }), wx.switchTab({
                        url: "/pages/index/index"
                    })) : (e.show_erro("获取失败", "faild"), setTimeout(function() {
                        wx.navigateTo({
                            url: "/pages/phonenumber/phonenumber?bind=1"
                        });
                    }, 1500));
                }
            });
        });
    }
});