var t = getApp();

Page({
    data: {
        pointdata: {},
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,
        show_integral: !1,
        convert_data: []
    },
    tabClick: function(t) {
        this.setData({
            sliderOffset: t.currentTarget.offsetLeft,
            activeIndex: t.currentTarget.id
        });
    },
    onLoad: function(t) {
        var e = this;
        wx.getSystemInfo({
            success: function(t) {
                e.setData({
                    sliderLeft: t.windowWidth / 10,
                    sliderOffset: t.windowWidth / 3 * e.data.activeIndex
                });
            }
        }), e.get_pointdata(), e.get_shops();
    },
    convert: function(e) {
        console.log(e.currentTarget.dataset.product_id);
        var a = this;
        wx.showModal({
            title: "温馨提示",
            content: "兑换该物品将会消耗" + e.currentTarget.dataset.point + "积分,兑换成功后请填写收件信息",
            success: function(o) {
                o.confirm && wx.request({
                    method: "POST",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    url: "https://api.998jx.com/micro/trade/order",
                    data: {
                        token: t.globalData.userInfo.token,
                        pid: e.currentTarget.dataset.product_id
                    },
                    success: function(e) {
                        1 == e.data.ret ? (wx.navigateTo({
                            url: "/pages/shops/shops?order_id=" + e.data.order_id
                        }), a.get_pointdata()) : t.show_erro(e.data.msg, "faild");
                    }
                });
            }
        });
    },
    get_pointdata: function() {
        var e = this;
        t.auth(function(a) {
            wx.request({
                method: "POST",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                url: "https://api.998jx.com/micro/account/point_details",
                data: {
                    token: t.globalData.userInfo.token
                },
                success: function(t) {
                    t.data.point_list.reverse(), e.setData({
                        pointdata: t.data,
                        show_money: t.data.show_money
                    });
                }
            });
        });
    },
    get_shops: function() {
        var e = this;
        wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/product",
            data: {
                token: t.globalData.userInfo.token
            },
            success: function(t) {
                e.setData({
                    convert_data: t.data.data
                });
            }
        });
    },
    show_integral: function() {
        this.setData({
            show_integral: !0
        });
    },
    hideModal: function() {
        this.setData({
            show_integral: !1
        });
    },
    delet_modal: function() {
        this.setData({
            show_integral: !1
        });
    },
    previewImage: function(t) {
        wx.previewImage({
            current: t.target.dataset.big_image,
            urls: t.target.dataset.big_image
        });
    },
    onShareAppMessage: function() {
        return {
            title: t.globalData.transmit_title,
            path: "/pages/index/index?t=" + t.getcsid(),
            imageUrl: t.globalData.transmit_image,
            success: function() {
                wx.showModal({
                    title: "推荐提示",
                    content: "分享后送积分（对方注册成功生效）",
                    showCancel: !1
                });
            },
            fail: function() {
                wx.showModal({
                    title: "推荐提示",
                    content: "分享后送积分（对方注册成功生效）",
                    showCancel: !1
                });
            }
        };
    }
});