var a = getApp();

Page({
    data: {
        recharge_option: [ {
            recharge: 50,
            recharge_text: "充50积分",
            price: 50
        }, {
            recharge: 255,
            recharge_text: "充255积分",
            price: 200
        }, {
            recharge: 1e3,
            recharge_text: "充1000积分",
            price: 800
        } ],
        current: "background:#1aad19;color:#fff;",
        current_id: 200,
        recharge: 200,
        accept: !1
    },
    onLoad: function(e) {
        a.auth(function(a) {});
    },
    recharge: function(a) {
        var e = this;
        e.data.recharge = a.currentTarget.dataset.recharge, console.log(a.currentTarget.dataset.price), 
        e.setData({
            current_id: a.currentTarget.dataset.price
        });
        for (var t = 0; t < e.data.recharge_option.length; t++) e.data.recharge_option[t].price == a.currentTarget.dataset.price && e.setData({
            current: "background:#1aad19;color:#fff;"
        });
    },
    checkboxChange: function(a) {
        var e = this;
        e.data.accept = a.detail.value.length, e.setData({
            accept: e.data.accept
        });
    },
    paynow: function() {
        var e = this;
        if ("" != e.data.recharge) {
            var t = e.data.current_id, r = "积分充值" + t + "元";
            wx.request({
                method: "POST",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                url: "https://api.998jx.com/micro/payment/create_payment",
                data: {
                    token: a.globalData.userInfo.token,
                    total_fee: t,
                    body: r,
                    doid: "TOJ" + e.data.recharge
                },
                success: function(e) {
                    e.data.ret ? wx.requestPayment({
                        timeStamp: String(e.data.data.timeStamp),
                        nonceStr: e.data.data.nonceStr,
                        package: e.data.data.package,
                        signType: e.data.data.signType,
                        paySign: e.data.data.paySign,
                        success: function(a) {
                            wx.showToast({
                                title: "充值成功",
                                icon: "success"
                            }), setTimeout(function() {
                                wx.navigateTo({
                                    url: "/pages/accountpoint/index"
                                });
                            }, 2e3);
                        },
                        fail: function(e) {
                            a.show_erro("支付取消", "faild");
                        }
                    }) : a.show_erro(e.data.msg, "faild");
                }
            });
        } else a.show_erro("请选择充值金额", "faild");
    }
});