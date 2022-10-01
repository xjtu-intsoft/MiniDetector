var e = getApp();

Page({
    data: {
        contact_name: "",
        mobile: ""
    },
    onLoad: function(a) {
        e.auth(function(e) {});
    },
    getPhoneNumber: function(a) {
        var t = this;
        "getPhoneNumber:ok" == a.detail.errMsg && wx.request({
            url: "https://api.998jx.com/micro/account/decode_phone",
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: {
                token: e.globalData.userInfo.token,
                encryptedData: a.detail.encryptedData,
                iv: a.detail.iv
            },
            success: function(a) {
                1 == a.data.ret ? t.setData({
                    mobile: a.data.data
                }) : e.show_erro(a.data.msg, "error");
            }
        });
    },
    formSubmit: function(e) {
        var a = this;
        a.data.contact_name = e.detail.value.contact_name, a.data.mobile = e.detail.value.mobile;
    },
    register: function(a) {
        var t = this, o = !1, n = !1, r = !0;
        if (t.data.contact_name.length < 2 ? (o = !0, r = !1) : o = !1, t.data.mobile.length < 11 ? (n = !0, 
        r = !1) : n = !1, t.setData({
            ckname: o,
            ckmobile: n
        }), a.detail.encryptedData && r) {
            var c = {
                token: e.globalData.userInfo.token,
                encryptedData: a.detail.encryptedData,
                iv: a.detail.iv,
                contact_name: t.data.contact_name,
                mobile: t.data.mobile
            };
            wx.request({
                url: "https://api.998jx.com/micro/account/user_register",
                method: "POST",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                data: c,
                success: function(a) {
                    0 == a.data.ret ? e.show_erro(a.data.msg, "error") : (e.globalData.userInfo = a.data.userInfo, 
                    wx.reLaunch({
                        url: "/pages/index/index"
                    }));
                }
            });
        } else console.log("need");
    }
});