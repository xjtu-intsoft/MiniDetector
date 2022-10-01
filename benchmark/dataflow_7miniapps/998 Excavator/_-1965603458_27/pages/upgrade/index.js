var a = getApp();

Page({
    data: {
        group_level: null,
        call_fee: null,
        active_level: null,
        userInfo: null,
        accept: !1
    },
    onLoad: function() {
        var e = this;
        a.auth(function(t) {
            wx.request({
                method: "POST",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                url: "https://api.998jx.com/micro/upgrade/index",
                data: {
                    token: a.globalData.userInfo.token
                },
                success: function(t) {
                    e.setData({
                        group_level: t.data.group,
                        call_fee: t.data.call_fee,
                        active_level: 3,
                        userInfo: a.globalData.userInfo
                    });
                }
            });
        });
    },
    checkboxChange: function(a) {
        var e = this;
        e.data.accept = a.detail.value.length, e.setData({
            accept: e.data.accept
        });
    },
    changelevel: function(a) {
        var e = this, t = a.currentTarget.dataset.id;
        e.setData({
            active_level: t
        });
    },
    paynow: function() {
        var e = this;
        if (e.data.accept) {
            var t = e.data.group_level[e.data.active_level].price, o = e.data.group_level[e.data.active_level].customer_group_name + e.data.group_level[e.data.active_level].month + "个月";
            wx.request({
                method: "POST",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                url: "https://api.998jx.com/micro/payment/create_payment",
                data: {
                    token: a.globalData.userInfo.token,
                    total_fee: t,
                    body: o,
                    doid: "TOG" + e.data.active_level
                },
                success: function(e) {
                    e.data.ret ? wx.requestPayment({
                        timeStamp: String(e.data.data.timeStamp),
                        nonceStr: e.data.data.nonceStr,
                        package: e.data.data.package,
                        signType: e.data.data.signType,
                        paySign: e.data.data.paySign,
                        success: function(t) {
                            wx.request({
                                method: "POST",
                                header: {
                                    "Content-Type": "application/x-www-form-urlencoded"
                                },
                                url: "https://api.998jx.com/micro/account/flashuser",
                                data: {
                                    token: a.globalData.userInfo.token
                                },
                                success: function(t) {
                                    t.data.data && (a.globalData.userInfo = t.data.data), a.show_erro(t.data.msg), wx.request({
                                        method: "POST",
                                        header: {
                                            "Content-Type": "application/x-www-form-urlencoded"
                                        },
                                        url: "https://api.998jx.com/micro/payment/success_msg",
                                        data: {
                                            token: a.globalData.userInfo.token,
                                            prepay_id: e.data.data.package.substring(10)
                                        }
                                    }), setTimeout(function() {
                                        wx.reLaunch({
                                            url: "/pages/index/index"
                                        });
                                    }, "2000");
                                }
                            });
                        },
                        fail: function(e) {
                            console.log(e), a.show_erro("支付取消", "faild");
                        },
                        complete: function(a) {}
                    }) : a.show_erro(e.data.msg, "faild");
                }
            });
        } else a.show_erro("请阅读相关服务条款", "error");
    }
});