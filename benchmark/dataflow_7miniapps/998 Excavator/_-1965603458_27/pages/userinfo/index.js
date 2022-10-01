var a = getApp();

Page({
    data: {
        device_list: [],
        from_me: "",
        bg_da: "bg_da",
        page: 1,
        userifno: "",
        cs: "",
        attention: "关注",
        add: "/images/icon/add.png",
        background: "http://images.998jx.com/micro/account_wajue.jpg",
        showModal: !1
    },
    delet_modal: function() {
        this.setData({
            showModal: !1
        });
    },
    follow: function(t) {
        if (a.checklogin()) {
            var e = this;
            e.data.bg_da, e.data.attention, e.data.add;
            if (0 == e.data.from_me) {
                e.req();
                var o = "已关注", n = "bg_ff";
                e.setData({
                    add: "/images/icon/guanzhu.png",
                    from_me: 1,
                    attention: o
                });
            } else wx.showModal({
                title: "操作提示",
                content: "确定要取消关注此用户吗？",
                success: function(a) {
                    if (a.confirm) {
                        e.req();
                        e.setData({
                            from_me: 0,
                            bg_da: "bg_da",
                            add: "/images/icon/add.png",
                            attention: "关注"
                        });
                    } else a.cancel && e.setData({
                        attention: "已关注",
                        add: "/images/icon/guanzhu.png",
                        from_me: 1
                    });
                }
            });
            e.setData({
                bg_da: n,
                attention: o
            });
        }
    },
    req: function() {
        var t = this;
        wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/account/attention",
            data: {
                token: a.globalData.userInfo.token,
                to_id: t.data.userifno.customer_id
            },
            success: function(t) {
                "-2" == t.data.ret ? (a.show_erro(t.data.msg, "error"), setTimeout(function() {
                    wx.navigateTo({
                        url: "/pages/phonenumber/phonenumber?bind=1"
                    });
                }, "3000")) : a.show_erro(t.data.msg);
            }
        });
    },
    previewimg: function(a) {
        var t = this, e = a.target.dataset.src, o = a.currentTarget.dataset.list, n = t.data.device_list[o].image;
        wx.previewImage({
            current: e,
            urls: n
        });
    },
    onLoad: function(t) {
        t.t && (a.globalData.refer = t.t);
        var e = this;
        e.data.info_userid = t.id, e.load_account();
    },
    onShareAppMessage: function(t) {
        var e = this;
        if ("button" === t.from) {
            var o = t.target.dataset.id, n = t.target.dataset.price + t.target.dataset.title, i = t.target.dataset.image;
            return "share" == t.target.dataset.title ? (console.log("..."), {
                title: a.globalData.transmit_title,
                path: "/pages/index/index?t=" + a.getcsid(),
                imageUrl: a.globalData.transmit_image,
                success: function(a) {}
            }) : (console.log("@@@"), {
                title: n,
                imageUrl: i,
                path: "/pages/equipment/equipment?t=" + a.getcsid() + "&ids=" + o,
                success: function(a) {}
            });
        }
        if ("menu" === t.from) return console.log("!!!"), {
            title: "小程序名片",
            path: "/pages/userinfo/index?t=" + a.getcsid() + "&id=" + e.data.userifno.customer_id,
            success: function(a) {}
        };
    },
    load_account: function() {
        var t = this;
        a.auth(function(e) {
            wx.showLoading({
                title: "加载中"
            }), wx.request({
                method: "POST",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                url: "https://api.998jx.com/micro/account/userinfo",
                data: {
                    token: a.globalData.userInfo.token,
                    user_id: t.data.info_userid,
                    page: t.data.page
                },
                success: function(e) {
                    if (wx.hideLoading(), "-1" != e.data.ret) {
                        if (1 == e.data.data.from_me) {
                            t.setData({
                                add: "/images/icon/guanzhu.png",
                                from_me: 1,
                                bg_da: "bg_ff",
                                attention: "已关注"
                            });
                        }
                        t.data.total_page = e.data.data.total_page;
                        for (var o = 0; o < e.data.data.device_list.length; o++) t.data.device_list.push(e.data.data.device_list[o]);
                        1 == e.data.data.user_info.customer_group_id && (e.data.data.user_info.jx_bg = t.data.background), 
                        t.setData({
                            cs: e.data.data.cs,
                            userifno: e.data.data.user_info,
                            device_list: t.data.device_list,
                            image_one: e.data.data.device_list.length ? e.data.data.device_list[0].image[0] : "",
                            from_me: e.data.data.from_me,
                            background: e.data.data.user_info.jx_bg ? e.data.data.user_info.jx_bg : t.data.background
                        });
                    } else a.show_erro("账户未绑定", "faild");
                }
            });
        });
    },
    onReachBottom: function() {
        var a = this;
        a.data.page < a.data.total_page && (wx.showLoading({
            title: "加载中..."
        }), setTimeout(function() {
            wx.hideLoading();
        }, 500), a.data.page = a.data.page + 1, a.load_account());
    },
    makecall: function() {
        var t = this;
        wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/trade/checkcall",
            data: {
                token: a.globalData.userInfo.token,
                to_id: t.data.info_userid
            },
            success: function(e) {
                "1" == e.data.ret ? wx.makePhoneCall({
                    phoneNumber: e.data.phoneNumber,
                    fail: function(t) {
                        a.show_erro("拨号取消", "error");
                    }
                }) : "-3" == e.data.ret ? a.show_erro(e.data.msg, "faild") : "-1" == e.data.ret && t.paycall(e.data.price, e.data.phoneNumber);
            }
        });
    },
    paycall: function(t, e) {
        var o = this;
        wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/payment/create_payment",
            data: {
                token: a.globalData.userInfo.token,
                total_fee: t,
                body: "单次拨打电话",
                doid: "TOP" + e
            },
            success: function(t) {
                t.data.ret ? wx.requestPayment({
                    timeStamp: String(t.data.data.timeStamp),
                    nonceStr: t.data.data.nonceStr,
                    package: t.data.data.package,
                    signType: t.data.data.signType,
                    paySign: t.data.data.paySign,
                    success: function(a) {
                        o.makecall();
                    },
                    fail: function(t) {
                        a.show_erro("支付取消", "faild");
                    }
                }) : a.show_erro(t.data.msg, "faild");
            }
        });
    },
    callout: function(t) {
        if (a.checklogin()) {
            var e = this;
            a.auth(function(t) {
                wx.request({
                    method: "POST",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    url: "https://api.998jx.com/micro/trade/call_out",
                    data: {
                        token: a.globalData.userInfo.token,
                        toid: e.data.info_userid,
                        usepoint: e.data.usepoint
                    },
                    success: function(t) {
                        if ("-3" == t.data.ret) a.show_erro(t.data.msg, "faild"); else {
                            if ("-1" == t.data.ret) return void wx.navigateTo({
                                url: "/pages/phonenumber/phonenumber?bind=1"
                            });
                            if ("-5" == t.data.ret) wx.showModal({
                                title: t.data.msg,
                                content: t.data.details,
                                success: function(a) {
                                    a.confirm && (e.data.usepoint = 1, e.callout(), e.data.usepoint = 0);
                                }
                            }); else {
                                if ("-4" == t.data.ret) return void e.setData({
                                    modaltitle: t.data.msg,
                                    modalcontent: t.data.details,
                                    showModal: !0
                                });
                                t.data.ret && wx.makePhoneCall({
                                    phoneNumber: t.data.phoneNumber,
                                    fail: function(t) {
                                        a.show_erro("拨号取消", "error");
                                    }
                                });
                            }
                        }
                    }
                });
            });
        }
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
    tohome: function() {
        wx.switchTab({
            url: "../index/index"
        });
    }
});