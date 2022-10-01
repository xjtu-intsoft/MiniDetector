var e = getApp();

Page({
    data: {
        user_default: null,
        ck_name: !1,
        ck_mobile: !1,
        ck_address: !1
    },
    onLoad: function(a) {
        var t = this;
        t.data.order_id = a.order_id, wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/trade/confirm_order",
            data: {
                token: e.globalData.userInfo.token,
                order_id: a.order_id
            },
            success: function(e) {
                t.setData({
                    user_default: e.data.data
                });
            }
        });
    },
    formSubmit: function(a) {
        var t = this;
        if (console.log(a), !a.detail.value.user_name || !a.detail.value.user_mobile || !a.detail.value.user_address) return t.setData({
            ck_name: !a.detail.value.user_name,
            ck_mobile: !a.detail.value.user_mobile,
            ck_address: !a.detail.value.user_address
        }), void e.show_erro("请完善收件信息", "error");
        wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/trade/confirm_order",
            data: {
                token: e.globalData.userInfo.token,
                order_id: t.data.order_id,
                name: a.detail.value.user_name,
                mobile: a.detail.value.user_mobile,
                address: a.detail.value.user_address
            },
            success: function(e) {
                wx.showModal({
                    title: "下单成功",
                    content: "请保持电话畅通，客服将会在发货前与您联系.",
                    showCancel: !1,
                    success: function(e) {
                        e.confirm && wx.navigateTo({
                            url: "/pages/accountpoint/index"
                        });
                    }
                });
            }
        });
    },
    hasval: function(e) {
        var a = this;
        "name" == e.target.dataset.id && ("" == e.detail.value ? a.setData({
            ck_name: !0
        }) : a.setData({
            ck_name: !1
        })), "mobile" == e.target.dataset.id && ("" == e.detail.value ? a.setData({
            ck_mobile: !0
        }) : a.setData({
            ck_mobile: !1
        })), "address" == e.target.dataset.id && ("" == e.detail.value ? a.setData({
            ck_address: !0
        }) : a.setData({
            ck_address: !1
        }));
    }
});