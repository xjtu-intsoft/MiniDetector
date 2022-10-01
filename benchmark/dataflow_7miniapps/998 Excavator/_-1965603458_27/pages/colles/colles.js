var t = getApp();

Page({
    data: {
        device_list: [],
        total: 0,
        page: "1",
        loadmore: !1,
        showModal: !1
    },
    delet_modal: function() {
        this.setData({
            showModal: !1
        });
    },
    previewimg: function(t) {
        var a = this, e = t.target.dataset.src, o = t.currentTarget.dataset.list, i = a.data.device_list[o].image;
        wx.previewImage({
            current: e,
            urls: i
        });
    },
    colle_detel: function(a) {
        var e = a.currentTarget.dataset.id, o = this;
        wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/device/cancel_favorite",
            data: {
                token: t.globalData.userInfo.token,
                device_id: e
            },
            success: function(a) {
                for (var i = o.data.device_list, d = 0; d < i.length; d++) i[d].itemid == e && i.splice(d, 1);
                o.setData({
                    device_list: i
                }), o.data.total = a.data.total, wx.setNavigationBarTitle({
                    title: "我的收藏 (" + a.data.total + ")"
                }), t.show_erro("删除成功");
            }
        });
    },
    onLoad: function() {
        this.getlist();
    },
    getlist: function() {
        var a = this;
        t.auth(function(e) {
            if (!e.token) return !1;
            wx.showLoading({
                title: "加载中"
            }), wx.request({
                method: "POST",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                url: "https://api.998jx.com/micro/device/favorite_list",
                data: {
                    token: t.globalData.userInfo.token,
                    page: a.data.page
                },
                success: function(t) {
                    if (wx.hideLoading(), t.data.ret) {
                        null == t.data.total ? wx.setNavigationBarTitle({
                            title: "我的收藏 (0)"
                        }) : wx.setNavigationBarTitle({
                            title: "我的收藏 (" + t.data.total + ")"
                        });
                        for (var e = 0; e < t.data.data.length; e++) a.data.device_list.push(t.data.data[e]);
                        a.data.total = t.data.total, a.setData({
                            device_list: a.data.device_list,
                            loadmore: !1
                        });
                    }
                }
            });
        });
    },
    makecall: function(a) {
        var e = this;
        wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/trade/checkcall",
            data: {
                token: t.globalData.userInfo.token,
                device_id: a
            },
            success: function(o) {
                "1" == o.data.ret ? wx.makePhoneCall({
                    phoneNumber: o.data.phoneNumber,
                    fail: function(a) {
                        t.show_erro("拨号取消", "error");
                    }
                }) : "-3" == o.data.ret ? t.show_erro(o.data.msg, "faild") : "-1" == o.data.ret && e.paycall(o.data.price, o.data.phoneNumber, a);
            }
        });
    },
    paycall: function(a, e, o) {
        var i = this;
        wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/payment/create_payment",
            data: {
                token: t.globalData.userInfo.token,
                total_fee: a,
                body: "单次拨打电话",
                doid: "TOP" + e
            },
            success: function(a) {
                a.data.ret ? wx.requestPayment({
                    timeStamp: String(a.data.data.timeStamp),
                    nonceStr: a.data.data.nonceStr,
                    package: a.data.data.package,
                    signType: a.data.data.signType,
                    paySign: a.data.data.paySign,
                    success: function(t) {
                        i.makecall(o);
                    },
                    fail: function(a) {
                        t.show_erro("支付取消", "faild");
                    }
                }) : t.show_erro(a.data.msg, "faild");
            }
        });
    },
    choose_number: function(t) {
        var a = this;
        a.data.to_id = t.currentTarget.dataset.micro_id, a.data.device_id = t.currentTarget.dataset.device_id, 
        a.callout();
    },
    callout: function() {
        var a = this;
        wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/trade/call_out",
            data: {
                token: t.globalData.userInfo.token,
                toid: a.data.to_id,
                device_id: a.data.device_id,
                usepoint: a.data.usepoint
            },
            success: function(e) {
                if ("-3" != e.data.ret) if ("-1" != e.data.ret) if ("-5" == e.data.ret) wx.showModal({
                    title: e.data.msg,
                    content: e.data.details,
                    success: function(t) {
                        t.confirm && (a.data.usepoint = 1, a.callout(), a.data.usepoint = 0);
                    }
                }); else {
                    if ("-4" == e.data.ret) return void a.setData({
                        modaltitle: e.data.msg,
                        modalcontent: e.data.details,
                        showModal: !0
                    });
                    e.data.ret && wx.makePhoneCall({
                        phoneNumber: e.data.phoneNumber,
                        fail: function(a) {
                            t.show_erro("拨号取消", "error");
                        }
                    });
                } else a.setData({
                    getPhone_showModal: !0
                }); else t.show_erro(e.data.msg, "faild");
            }
        });
    },
    onCancel: function() {
        this.setData({
            showModal: !1
        }), wx.navigateTo({
            url: "/pages/upgrade/index"
        });
    },
    onConfirm: function() {
        this.setData({
            showModal: !1
        }), wx.navigateTo({
            url: "/pages/recharge/recharge"
        });
    },
    onReachBottom: function() {
        var t = this;
        if (t.data.device_list.length == t.data.total) return !1;
        t.data.page++, t.setData({
            loadmore: !0
        }), t.getlist();
    },
    onShareAppMessage: function(a) {
        if ("button" === a.from) {
            if ("share" == a.target.dataset.title) return {
                title: t.globalData.transmit_title,
                path: "/pages/index/index?t=" + t.getcsid(),
                imageUrl: "http://images.998jx.com/micro/head_qizhong.jpg",
                success: function(t) {}
            };
        } else if ("menu" === a.from) return {
            title: t.globalData.transmit_title,
            path: "/pages/index/index?t=" + t.getcsid(),
            success: function(t) {
                t.shareTickets;
            }
        };
    }
});