var a = getApp();

Page({
    data: {
        userInfo: {},
        indicatorDots: !1,
        autoplay: !1,
        interval: 3e3,
        duration: 500,
        ret_data: "",
        info: "",
        option_ids: "",
        showModal: !1,
        show_bargain: !1,
        item_id: "",
        user_ret: "",
        getPhone_showModal: !1,
        tixing: !0,
        show_remind: !1,
        show_none: "none",
        review: [],
        has_val: !1,
        btn_color: "#3392ff",
        usepoint: 0
    },
    onLoad: function(t) {
        var e = this;
        t.t && (a.globalData.refer = t.t), e.data.option_ids = t.ids, a.auth(function(o) {
            if (!o.token) return !1;
            e.data.userInfo = a.globalData.userInfo, wx.showLoading({
                title: "加载中"
            }), e.get_info(), e.checkuser(), wx.hideLoading(), t.discuss && (wx.pageScrollTo({
                scrollTop: "2000",
                duration: "500"
            }), e.setData({
                show_none: "block"
            }));
        });
    },
    bargain: function() {
        var t = this;
        a.auth(function(e) {
            a.checklogin() && t.setData({
                show_bargain: !0
            });
        });
    },
    formSubmit: function(t) {
        var e = this;
        e.data.formId = t.detail.formId, console.log(t.detail.value.price), wx.request({
            url: "https://api.998jx.com/micro/device/kanjia",
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: {
                token: a.globalData.userInfo.token,
                price: t.detail.value.price,
                device_id: e.data.item_id
            },
            success: function(a) {
                e.setData({
                    show_bargain: !1
                }), wx.showModal({
                    title: "出价成功",
                    content: "等待车主与您联系。",
                    showCancel: !1
                });
            }
        });
    },
    checkuser: function() {
        var t = this;
        a.auth(function(e) {
            wx.request({
                url: "https://api.998jx.com/micro/account/index",
                method: "POST",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                data: {
                    token: a.globalData.userInfo.token
                },
                success: function(a) {
                    1 == a.data.ret && t.setData({
                        userInfo: a.data.data.user_info
                    });
                }
            });
        });
    },
    get_info: function() {
        var t = this;
        wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/data/info",
            data: {
                token: a.globalData.userInfo.token,
                device_id: t.data.option_ids
            },
            success: function(a) {
                t.data.m_to_id = a.data.data.micro_id, t.data.m_device_id = a.data.data.itemid, 
                t.data.info = a.data.data;
                var e = a.data;
                t.setData({
                    option_ids: t.data.option_ids,
                    ret_data: e,
                    ret_image: e.data.image,
                    favorite_stur: e.data.favorite,
                    item_id: e.data.itemid,
                    user_ret: a.data.ret,
                    review: a.data.data.review
                });
            }
        });
    },
    show_remind: function() {
        this.setData({
            show_remind: !this.data.show_remind
        });
    },
    delet_modal: function() {
        this.setData({
            showModal: !1,
            show_bargain: !1
        });
    },
    hide_tx: function() {
        this.setData({
            tixing: !1
        });
    },
    collections: function(t) {
        if (a.checklogin()) {
            var e = this, o = t.currentTarget.dataset.colle_id, n = "";
            n = 0 == t.currentTarget.dataset.favorite ? "add_favorite" : "cancel_favorite", 
            wx.showLoading({
                title: "加载中",
                mask: !0
            }), wx.request({
                method: "POST",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                url: "https://api.998jx.com/micro/device/" + n,
                data: {
                    token: a.globalData.userInfo.token,
                    device_id: o
                },
                success: function(t) {
                    wx.hideLoading(), a.show_erro(t.data.msg), "收藏成功" == t.data.msg ? e.setData({
                        favorite_stur: 1
                    }) : e.setData({
                        favorite_stur: 0
                    });
                }
            });
        }
    },
    onShareAppMessage: function(t) {
        var e = this, o = e.data.info.itemid, n = e.data.info.price + e.data.info.title, i = e.data.info.image[0];
        if (console.log(t), "button" == t.from) {
            var r = t.target.dataset.title;
            if ("share" == r) return console.log("..."), {
                title: n,
                path: "/pages/equipment/equipment?t=" + a.getcsid() + "&ids=" + o,
                imageUrl: i,
                success: function(a) {}
            };
            if ("share_home" == r) return console.log("???"), {
                title: a.globalData.transmit_title,
                imageUrl: a.globalData.transmit_image,
                path: "/pages/index/index?t=" + a.getcsid(),
                success: function(a) {}
            };
        }
        if ("menu" == t.from) return console.log("!!!"), {
            title: a.globalData.transmit_title,
            imageUrl: a.globalData.transmit_image,
            path: "/pages/equipment/equipment?t=" + a.getcsid() + "&ids=" + o,
            success: function(a) {}
        };
    },
    makecall: function(t) {
        if (a.checklogin()) {
            var e = this;
            wx.request({
                method: "POST",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                url: "https://api.998jx.com/micro/trade/call_out",
                data: {
                    token: a.globalData.userInfo.token,
                    device_id: t,
                    toid: e.data.m_to_id,
                    shared: a.globalData.shared
                },
                success: function(t) {
                    "1" == t.data.ret ? wx.makePhoneCall({
                        phoneNumber: t.data.phoneNumber,
                        fail: function(t) {
                            a.show_erro("拨号取消", "error");
                        }
                    }) : "-3" == t.data.ret ? a.show_erro(t.data.msg, "faild") : "-1" == t.data.ret && e.paycall(t.data.price, t.data.phoneNumber, e.data.m_device_id);
                }
            });
        }
    },
    paycall: function(t, e, o) {
        if (a.checklogin()) {
            var n = this;
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
                            n.makecall(o);
                        },
                        fail: function(t) {
                            a.show_erro("支付取消", "faild");
                        }
                    }) : a.show_erro(t.data.msg, "faild");
                }
            });
        }
    },
    gouser: function(a) {
        var t = a.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/pages/userinfo/index?id=" + t
        });
    },
    call_to: function(t) {
        if (!a.checklogin()) return !1;
        var e = this;
        t && (e.data.temp_to_id = t.currentTarget.dataset.id), wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/trade/call_out",
            data: {
                token: a.globalData.userInfo.token,
                toid: e.data.temp_to_id,
                shared: a.globalData.shared,
                usepoint: e.data.usepoint
            },
            success: function(t) {
                if ("-3" == t.data.ret) a.show_erro(t.data.msg, "faild"); else {
                    if ("-1" == t.data.ret) return void e.setData({
                        getPhone_showModal: !0
                    });
                    if ("-5" == t.data.ret) wx.showModal({
                        title: t.data.msg,
                        content: t.data.details,
                        success: function(a) {
                            a.confirm && (e.data.usepoint = 1, e.call_to(), e.data.usepoint = 0);
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
    },
    callout: function(t) {
        if (!a.checklogin()) return !1;
        var e = this, o = e.data.option_ids;
        wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/trade/call_out",
            data: {
                token: a.globalData.userInfo.token,
                device_id: o,
                shared: a.globalData.shared,
                usepoint: e.data.usepoint
            },
            success: function(t) {
                if ("-3" == t.data.ret) a.show_erro(t.data.msg, "faild"); else {
                    if ("-1" == t.data.ret) return void e.setData({
                        getPhone_showModal: !0
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
    },
    hidegetPhone: function() {
        this.setData({
            getPhone_showModal: !1
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
    tohome: function() {
        wx.switchTab({
            url: "/pages/index/index"
        });
    },
    jubao: function(a) {
        var t = a.currentTarget.dataset.itemid, e = a.currentTarget.dataset.micro_id;
        wx.navigateTo({
            url: "/pages/report/report?user=" + e + "&item=" + t
        });
    },
    getPhoneNumber: function(t) {
        var e = this;
        e.setData({
            getPhone_showModal: !1
        }), "getPhoneNumber:ok" == t.detail.errMsg ? a.auth(function(o) {
            if (!o.token) return !1;
            wx.request({
                url: "https://api.998jx.com/micro/account/decode_phone",
                method: "POST",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                data: {
                    token: a.globalData.userInfo.token,
                    encryptedData: t.detail.encryptedData,
                    iv: t.detail.iv
                },
                success: function(t) {
                    t.data.ret ? (a.show_erro("获取成功"), e.setData({
                        ck_ownerphone: !1,
                        ownerphone: t.data.data
                    })) : (a.show_erro("获取失败", "faild"), setTimeout(function() {
                        wx.navigateTo({
                            url: "/pages/phonenumber/phonenumber?bind=1"
                        });
                    }, 1500));
                }
            });
        }) : wx.navigateTo({
            url: "/pages/phonenumber/phonenumber?bind=1"
        });
    },
    previewlmg: function(a) {
        var t = this;
        wx.previewImage({
            urls: t.data.ret_image
        });
    },
    show_val: function(t) {
        var e = this;
        a.auth(function(t) {
            a.checklogin() && e.setData({
                show_none: "block",
                active_menu: !1
            });
        });
    },
    addreviews: function(t) {
        var e = this;
        e.data.formId = t.detail.formId;
        a.globalData.userInfo.cs.slice(10);
        var o = t.detail.value.reviews, n = e.data.item_id;
        o ? (e.setData({
            review_default: "",
            show_none: "none"
        }), wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/device/add_review",
            data: {
                token: a.globalData.userInfo.token,
                device_id: n,
                content: o
            },
            success: function(t) {
                "-1" != t.data.ret ? "-2" != t.data.ret ? (a.show_erro(t.data.msg), e.get_info()) : a.show_erro(t.data.msg, "error") : wx.navigateTo({
                    url: "/pages/phonenumber/phonenumber?bind=1"
                });
            }
        })) : e.setData({
            show_none: "none"
        });
    },
    has_val: function(a) {
        var t = this;
        "" != a.detail.value ? t.setData({
            has_val: !0,
            btn_color: "#1AAD19"
        }) : t.setData({
            has_val: !1,
            btn_color: "#3392ff"
        });
    },
    user_home: function(a) {
        wx.navigateTo({
            url: "/pages/userinfo/index?id=" + a.currentTarget.dataset.id
        });
    }
});