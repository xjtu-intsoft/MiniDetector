var t = getApp();

Page({
    data: {
        userInfo: null,
        menu: [],
        datalist: [],
        data_list: [],
        guestlist: [],
        page: 1,
        sub_catid: "",
        city_id: "",
        brand: "",
        model: "",
        years: "",
        sort: "",
        keywords: "",
        none: "none",
        block: "blcok",
        whole: "",
        index_s: "",
        display_none: "none",
        show_none: "none",
        show_hide: "none",
        srolltop: "",
        img_touxiang: "/images/logo/touxiang.png",
        active_menu: !1,
        active_id: "",
        text_value: "",
        state: "",
        city_vule: "",
        city_vules: "",
        class_values: "",
        brand_vlaues: "",
        year_values: "",
        bboolean: !1,
        tboolean: !0,
        iffalse: !1,
        one: "1",
        two: "2",
        three: "3",
        four: "4",
        review_item: null,
        loaded: !1,
        diplay_true: !1,
        show_loading: !0,
        inputShowed: !1,
        inputVal: "",
        animation: "",
        cnt: "",
        showModal: !1,
        top_show: !1,
        back_animate: "",
        guidance_showModal: !1,
        getPhone_showModal: !1,
        popbanner: "",
        qizhong_bg: [],
        user_cityname: "",
        user_cityid: "",
        m_call_fee: "",
        more_app: null,
        m_content_width: "",
        show_foot: !1,
        huodong_red: !0,
        font_color: "",
        dt_msg: "",
        tabs: [ "最新设备", "浏览最多", "猜你喜欢" ],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,
        login_tishi: !1,
        show_images: !1,
        image_url: [],
        imageindex: "",
        usepoint: 0
    },
    onLoad: function(a) {
        a.t && (t.globalData.refer = a.t);
        var e = this;
        wx.getSystemInfo({
            success: function(t) {
                e.setData({
                    sliderLeft: (t.windowWidth / e.data.tabs.length - 120) / 2,
                    sliderOffset: t.windowWidth / e.data.tabs.length * e.data.activeIndex
                });
            }
        }), t.auth(function(t) {
            e.setData({
                userInfo: t,
                city_vule: "全国"
            }), t.cs || e.setData({
                login_tishi: !0
            }), e.setMenu(), e.getList(), e.more_app(), e.get_selled();
        });
    },
    entrance: function(t) {
        var a = this, e = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: a.data.qizhong_bg[e].url
        });
    },
    more_app: function() {
        var a = this;
        a.data.more_app || wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/account/open",
            data: {
                token: t.globalData.userInfo.token
            },
            success: function(t) {
                if (t.data) {
                    var e = 21 * t.data.length + "%";
                    a.setData({
                        m_content_width: e,
                        more_app: t.data
                    });
                }
            }
        });
    },
    app_skip: function(a) {
        "zu" == a.currentTarget.dataset.site ? wx.navigateToMiniProgram({
            appId: a.currentTarget.dataset.id,
            envVersion: "release",
            extraData: {
                id: a.currentTarget.dataset.catid
            },
            success: function() {
                console.log("跳转成功");
            },
            fail: function() {
                t.show_erro("网络连接失败", "faild");
            }
        }) : "rencai" == a.currentTarget.dataset.site ? wx.navigateToMiniProgram({
            appId: a.currentTarget.dataset.id,
            envVersion: "release",
            extraData: {
                id: a.currentTarget.dataset.catid
            },
            success: function() {
                console.log("跳转成功");
            },
            fail: function() {
                t.show_erro("网络连接失败", "faild");
            }
        }) : wx.navigateToMiniProgram({
            appId: a.currentTarget.dataset.id,
            envVersion: "release",
            success: function() {
                console.log("跳转成功");
            },
            fail: function() {
                t.show_erro("网络连接失败", "faild");
            }
        });
    },
    return_tap: function() {
        this.setData({
            none: "none",
            index_s: 4,
            four: 6,
            lookr: !1,
            onrear: !1
        });
    },
    click_catchtap: function() {
        this.setData({
            index_s: "6",
            display_none: "none"
        });
    },
    goaddr: function(t) {
        wx.openLocation({
            latitude: parseFloat(t.currentTarget.dataset.y),
            longitude: parseFloat(t.currentTarget.dataset.x),
            name: "设备所在地",
            address: t.currentTarget.dataset.title
        });
    },
    addreviews: function(a) {
        var e = this, i = t.globalData.userInfo.cs.slice(10), o = a.detail.value.reviews, n = e.data.review_item;
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
                token: t.globalData.userInfo.token,
                device_id: n,
                content: o
            },
            success: function(a) {
                "-1" != a.data.ret ? "-2" != a.data.ret ? (t.show_erro(a.data.msg), setTimeout(function() {
                    for (var t = e.data.datalist, a = 0; a < t.length; a++) if (t[a].itemid == n) {
                        var s = {
                            review_content: o,
                            user_name: e.data.userInfo.username,
                            customer_id: i
                        };
                        t[a].review = t[a].review.concat(s);
                    }
                    e.setData({
                        datalist: t
                    });
                }, 1e3)) : t.show_erro(a.data.msg, "error") : wx.navigateTo({
                    url: "/pages/phonenumber/phonenumber?bind=1"
                });
            }
        })) : t.show_erro("请填写评论内容", "error");
    },
    show_hide: function(a) {
        if (t.checklogin()) {
            var e = this;
            e.data.active_id != a.currentTarget.dataset.itemid ? (e.data.active_id = a.currentTarget.dataset.itemid, 
            e.data.active_menu = !0) : e.data.active_menu = !e.data.active_menu, e.setData({
                active_id: e.data.active_id,
                active_menu: e.data.active_menu
            });
        }
    },
    click_hide: function() {
        this.setData({
            active_menu: !1,
            active_id: "",
            show_none: "none"
        });
    },
    show_val: function(a) {
        this.data.review_item = a.target.dataset.id, t.auth(function(e) {
            t.checklogin() && wx.navigateTo({
                url: "/pages/equipment/equipment?ids=" + a.target.dataset.id + "&discuss=1"
            });
        });
    },
    onShareAppMessage: function(a) {
        if (console.log(a), "button" === a.from) {
            console.log("???");
            var e = a.target.dataset.id, i = a.target.dataset.image;
            return {
                title: a.target.dataset.price + a.target.dataset.title,
                imageUrl: i,
                path: "/pages/equipment/equipment?t=" + t.getcsid() + "&ids=" + e,
                success: function(t) {}
            };
        }
        if ("menu" === a.from) return console.log("..."), {
            title: t.globalData.transmit_title,
            path: "/pages/index/index?t=" + t.getcsid(),
            imageUrl: t.globalData.transmit_image,
            success: function(t) {}
        };
    },
    makecall: function(a, e) {
        var i = this;
        wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/trade/checkcall",
            data: {
                token: t.globalData.userInfo.token,
                device_id: e,
                to_id: a
            },
            success: function(o) {
                "-3" != o.data.ret ? "1" == o.data.ret ? wx.makePhoneCall({
                    phoneNumber: o.data.phoneNumber,
                    fail: function(a) {
                        t.show_erro("拨号取消", "error");
                    }
                }) : "-3" == o.data.ret ? t.show_erro(o.data.msg, "faild") : "-1" == o.data.ret && i.paycall(o.data.price, o.data.phoneNumber, a, e) : t.show_erro(o.data.msg, "faild");
            }
        });
    },
    paycall: function(a, e, i, o) {
        var n = this;
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
                        n.makecall(i, o);
                    },
                    fail: function(a) {
                        t.show_erro("支付取消", "faild");
                    }
                }) : t.show_erro(a.data.msg, "faild");
            }
        });
    },
    callout: function(a) {
        if (t.checklogin()) {
            var e = this;
            wx.request({
                method: "POST",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                url: "https://api.998jx.com/micro/trade/call_out",
                data: {
                    token: t.globalData.userInfo.token,
                    to_id: e.data.micro_id,
                    device_id: e.data.item_id,
                    shared: t.globalData.shared,
                    usepoint: e.data.usepoint
                },
                success: function(a) {
                    if ("-3" == a.data.ret) t.show_erro(a.data.msg, "faild"); else {
                        if ("-1" == a.data.ret) return void e.setData({
                            getPhone_showModal: !0
                        });
                        if ("-5" == a.data.ret) wx.showModal({
                            title: a.data.msg,
                            content: a.data.details,
                            success: function(t) {
                                t.confirm && (e.data.usepoint = 1, e.callout(), e.data.usepoint = 0);
                            }
                        }); else {
                            if ("-4" == a.data.ret) return void e.setData({
                                modaltitle: a.data.msg,
                                modalcontent: a.data.details,
                                showModal: !0
                            });
                            a.data.ret && wx.makePhoneCall({
                                phoneNumber: a.data.phoneNumber,
                                fail: function(a) {
                                    t.show_erro("拨号取消", "error");
                                }
                            });
                        }
                    }
                }
            });
        }
    },
    onCancel: function(t) {
        wx.navigateTo({
            url: "/pages/upgrade/index"
        }), this.setData({
            showModal: !1
        });
    },
    onConfirm: function() {
        wx.navigateTo({
            url: "/pages/recharge/recharge"
        }), this.setData({
            showModal: !1
        });
    },
    navbar: function() {
        this.setData({
            index_s: "4",
            display_none: "none",
            none: "block",
            lookr: !0,
            onrear: !0
        });
    },
    itemid1: function(t) {
        var a = this, e = t.currentTarget.dataset.ids;
        "查看全国" == t.currentTarget.dataset.city_vule && (t.currentTarget.dataset.city_vule = "全国");
        var i = t.currentTarget.dataset.city_vule;
        a.data.city_id = e, a.setData({
            none: "none",
            city_vules: i,
            city_vule: t.currentTarget.dataset.city_vule,
            lookr: !1,
            onrear: !1
        }), a.list_reset();
    },
    clik_tap: function(t) {
        var a = this, e = t.currentTarget.dataset.index_s, i = a.data.display_none;
        i = e == a.data.index_s ? "none" == a.data.display_none ? "block" : "none" : "block", 
        "1" == a.data.index_s && "block" == a.data.display_none ? a.setData({
            one: 4
        }) : a.setData({
            one: 1
        }), "2" == a.data.index_s && "block" == a.data.display_none ? a.setData({
            two: 4
        }) : a.setData({
            two: 2
        }), "3" == a.data.index_s && "block" == a.data.display_none ? a.setData({
            three: 4
        }) : a.setData({
            three: 3
        }), "4" == a.data.index_s && "block" == a.data.display_none ? a.setData({
            four: 5
        }) : a.setData({
            four: 4
        }), a.setData({
            index_s: e,
            display_none: i,
            none: "none"
        }), 1 == e ? a.setData({
            whole: a.data.menu.catalog_list
        }) : 2 == e ? a.setData({
            whole: a.data.menu.option_list
        }) : 3 == e && a.setData({
            whole: a.data.menu.yearoption
        });
    },
    dynamic_options: function() {
        var a = this;
        t.auth(function(e) {
            if (!e.token) return !1;
            wx.request({
                method: "POST",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                url: "https://api.998jx.com/micro/device/dynamic_options",
                data: {
                    token: t.globalData.userInfo.token,
                    sub_catid: a.data.sub_catid
                },
                success: function(t) {
                    a.data.menu.option_list = t.data.data;
                }
            });
        });
    },
    obtain_catid: function(t) {
        var a = this, e = t.currentTarget.dataset.catids, i = t.currentTarget.dataset.fclass_value;
        if (a.data.sub_catid = e, a.data.sub_catid && a.dynamic_options(), a.list_reset(), 
        a.click_reset(), i) var o = !!e;
        a.setData({
            class_values: i,
            class_value: i,
            bboolean: o,
            four: 6
        });
    },
    obtain_text: function(t) {
        var a = this, e = t.currentTarget.dataset.text;
        if (a.data.brand = "不限" == e ? "" : e, a.list_reset(), a.click_reset(), e) var i = "不限" != e;
        a.setData({
            brand_vlaues: e,
            brand_vlaue: e,
            bboolean: i,
            four: 6
        });
    },
    obtain_year: function(t) {
        var a = this, e = t.currentTarget.dataset.year, i = t.currentTarget.dataset.year;
        if (a.data.years = "不限" == e ? "" : e, a.list_reset(), a.click_reset(), i) var o = "不限" != i;
        a.setData({
            year_values: e,
            year_value: e,
            bboolean: o,
            four: 6
        });
    },
    obtain_paixu: function(t) {
        var a = this, e = t.target.dataset.sj;
        a.data.sort = e, a.setData({
            four: 6
        }), a.list_reset();
    },
    click_reset: function() {
        this.setData({
            display_none: "none",
            index_s: "6"
        });
    },
    list_reset: function() {
        var t = this;
        t.data.page = 1, t.data.datalist = [], t.getList();
    },
    resetcontent: function() {
        var t = this;
        t.setData({
            bboolean: !1,
            sub_catid: "",
            city_id: "",
            brand: "",
            years: "",
            city_vule: "",
            class_value: "",
            brand_vlaue: "",
            year_value: "",
            city_vules: "",
            class_values: "",
            brand_vlaues: "",
            year_values: ""
        }), t.list_reset();
    },
    check_condition: function() {
        var t = this;
        t.data.sub_catid || t.data.brand || t.data.years || (t.data.bboolean = !1);
    },
    bolljudge: function() {
        var t = this, a = t.data.iffalse;
        t.data.city_id = "", t.check_condition(), t.setData({
            city_vules: a,
            city_id: t.data.city_id,
            bboolean: t.data.bboolean,
            four: 6
        }), "" == t.data.city_id && t.list_reset();
    },
    bollification: function() {
        var t = this, a = t.data.iffalse;
        t.data.sub_catid = "", t.check_condition(), t.setData({
            class_values: a,
            sub_catid: t.data.sub_catid,
            bboolean: t.data.bboolean,
            four: 6
        }), t.list_reset();
    },
    bollbrand: function() {
        var t = this, a = t.data.iffalse;
        t.data.brand = "", t.check_condition(), t.setData({
            brand_vlaues: a,
            brand: t.data.brand,
            bboolean: t.data.bboolean,
            four: 6
        }), t.list_reset();
    },
    boll_year: function() {
        var t = this, a = t.data.iffalse;
        t.data.years = "", t.check_condition(), t.setData({
            year_values: a,
            years: t.data.years,
            bboolean: t.data.bboolean,
            four: 6
        }), t.list_reset();
    },
    tabClick: function(t) {
        var a = this;
        a.setData({
            sliderOffset: t.currentTarget.offsetLeft,
            activeIndex: t.currentTarget.id
        }), 0 == t.currentTarget.id && (a.data.sort = "", a.getList()), 1 == t.currentTarget.id && (a.data.sort = "browse", 
        a.getList()), 2 == t.currentTarget.id && a.guestlist();
    },
    accredit: function() {
        var a = this;
        wx.getLocation({
            success: function(e) {
                a.data.latitude = e.latitude, a.data.longitude = e.longitude, setTimeout(function() {
                    wx.request({
                        method: "POST",
                        header: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        url: "https://api.998jx.com/micro/account/savexy",
                        data: {
                            token: t.globalData.userInfo.token,
                            x: a.data.latitude,
                            y: a.data.longitude
                        },
                        success: function(t) {
                            a.setData({
                                user_cityname: t.data.province,
                                user_cityid: t.data.province_id
                            }), a.data.city_vule = t.data.province, a.data.city_id = t.data.province_id, a.list_reset();
                        }
                    });
                }, 800);
            },
            fail: function() {
                a.setData({
                    city_vule: "全国"
                }), a.list_reset();
            }
        });
    },
    guestlist: function() {
        var a = this;
        wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/data/guestlist",
            data: {
                token: t.globalData.userInfo.token
            },
            success: function(t) {
                a.setData({
                    guestlist: t.data.data
                });
            }
        });
    },
    delet_modal: function() {
        this.setData({
            showModal: !1
        });
    },
    delet_guidance: function() {
        this.setData({
            guidance_showModal: !1
        });
    },
    link_to: function() {
        if (t.checklogin()) {
            var a = this;
            wx.navigateTo({
                url: "/pages/activity/activity"
            }), a.setData({
                guidance_showModal: !1
            });
        }
    },
    setMenu: function() {
        var a = this, e = wx.getStorageSync("option");
        if (e) {
            if ("查看全国" != e.citys[0].name) {
                var i = {
                    id: "0",
                    name: "港澳台",
                    sub: ""
                };
                e.citys.splice(32, 3, i), e.citys[0].name = "查看全国";
            }
            a.setData({
                menu: e
            });
        } else wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/data/get_option",
            data: {
                token: t.globalData.userInfo.token,
                sub_catid: a.data.sub_catid
            },
            success: function(t) {
                var i = {
                    id: "0",
                    name: "港澳台",
                    sub: ""
                };
                (e = t.data.data).citys.splice(32, 3, i), e.citys[0].name = "查看全国", a.setData({
                    menu: e
                }), wx.setStorageSync("option", e);
            }
        });
    },
    getList: function() {
        var a = this;
        t.auth(function(t) {
            if (!t.token) return !1;
        }), wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/data/get_sell",
            data: {
                token: t.globalData.userInfo.token,
                page: a.data.page,
                sub_catid: a.data.sub_catid,
                city_id: a.data.city_id,
                brand: a.data.brand,
                model: a.data.model,
                years: a.data.years,
                sort: a.data.sort,
                keywords: a.data.keywords
            },
            success: function(e) {
                if (1 == e.data.ret) {
                    a.data.total_page = e.data.total_page;
                    for (var i = e.data.data, o = 0; o < i.length; o++) {
                        var n = i[o].price + i[o].title;
                        t.globalData.news.push({
                            user_name: i[o].micro_id > 0 ? i[o].adder : i[o].ownername,
                            news_title: n
                        });
                    }
                    a.setData({
                        cnt: e.data.cnt,
                        show_loading: !0,
                        show_foot: !1
                    }), 1 == a.data.bboolean && (a.setData({
                        showcnt: !0
                    }), setTimeout(function() {
                        a.setData({
                            showcnt: !1
                        });
                    }, 2e3));
                }
                if (0 == e.data.ret && (wx.hideLoading(), t.show_erro(e.data.msg, "faild"), a.setData({
                    show_loading: !1,
                    show_foot: !0
                })), 1 == a.data.activeIndex) {
                    for (s = 0; s < e.data.data.length; s++) a.data.data_list.push(e.data.data[s]);
                    a.data.loaded = !0, a.setData({
                        loaded: a.data.loaded,
                        data_list: a.data.data_list,
                        city_vule: a.data.city_vule
                    });
                } else {
                    for (var s = 0; s < e.data.data.length; s++) a.data.datalist.push(e.data.data[s]);
                    a.data.loaded = !0, a.setData({
                        loaded: a.data.loaded,
                        datalist: a.data.datalist,
                        city_vule: a.data.city_vule
                    });
                }
                wx.hideLoading();
            }
        });
    },
    onReachBottom: function() {
        var t = this;
        if (1 == t.data.onrear) return !1;
        0 == t.data.diplay_true && t.setData({
            diplay_true: !0
        }), t.data.page = t.data.page + 1, 0 == t.data.activeIndex && (t.data.sort = "", 
        t.getList()), 1 == t.data.activeIndex && (t.data.sort = "browse", t.getList()), 
        2 == t.data.activeIndex && t.guestlist(), t.data.bboolean = !1;
    },
    back_top: function() {
        var t = this;
        wx.pageScrollTo({
            scrollTop: "0",
            duration: "800"
        }), t.setData({
            top_show: !1
        });
    },
    onPageScroll: function(t) {
        var a = this, e = t.scrollTop;
        return e > 3e3 && (a.data.top_show || (a.data.top_show = !0, a.setData({
            top_show: !0,
            back_animate: "animation: back_top 1s;animation-iteration-count:2;"
        }))), e > 160 ? (a.data.havefixed || (a.data.havefixed = !0, a.setData({
            fixed: "fixed"
        })), !1) : (a.data.havefixed && (a.data.havefixed = !1, a.setData({
            fixed: ""
        })), !1);
    },
    scroll: function(t) {
        this.setData({
            scrollTop: t.detail.scrollTop
        });
    },
    show_images: function(t) {
        var a = this;
        a.data.item_id = t.target.dataset.item_id, a.data.micro_id = t.target.dataset.micro_id, 
        a.data.share_title = t.target.dataset.price + t.target.dataset.title, a.data.share_itemid = t.target.dataset.item_id;
        t.target.dataset.src.replace("small.", ""), t.currentTarget.dataset.key;
        var e = t.target.dataset.item_id, i = t.currentTarget.dataset.imageindex;
        console.log(i);
        var o = a.data.datalist, n = a.data.data_list, s = a.data.guestlist;
        if (0 == a.data.activeIndex) for (var d = 0; d < o.length; d++) o[d].itemid == e && a.setData({
            imageindex: i,
            show_images: !0,
            image_url: o[d].image
        });
        if (1 == a.data.activeIndex) for (var r = 0; r < n.length; r++) n[r].itemid == e && a.setData({
            imageindex: i,
            show_images: !0,
            image_url: n[r].image
        });
        if (2 == a.data.activeIndex) for (var c = 0; c < s.length; c++) s[c].itemid == e && a.setData({
            imageindex: i,
            show_images: !0,
            image_url: s[c].image
        });
        a.setData({
            show_images: !0
        });
    },
    hide_images: function(t) {
        this.setData({
            show_images: !1
        });
    },
    onPullDownRefresh: function() {
        var a = this;
        wx.showLoading({
            title: "刷新数据..."
        }), a.setData({
            userInfo: t.globalData.userInfo,
            inputVal: "",
            inputShowed: !1
        }), a.more_app(), a.get_selled(), a.data.keywords = "", a.list_reset(), a.data.bboolean = !1, 
        t.auth(function(t) {
            t.token;
        }), setTimeout(function() {
            wx.hideLoading(), wx.stopPullDownRefresh(), a.setData({
                showcnt_text: !0
            }), setTimeout(function() {
                a.setData({
                    showcnt_text: !1
                });
            }, 1e3);
        }, 1e3);
    },
    collections: function(a) {
        if (t.checklogin()) {
            var e = this;
            wx.showLoading({
                title: "加载中",
                mask: !0
            });
            var i = a.currentTarget.dataset.colle_id, o = "";
            o = 0 == a.currentTarget.dataset.favorite ? "add_favorite" : "cancel_favorite", 
            wx.request({
                method: "POST",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                url: "https://api.998jx.com/micro/device/" + o,
                data: {
                    token: t.globalData.userInfo.token,
                    device_id: i
                },
                success: function(a) {
                    if (wx.hideLoading(), t.show_erro(a.data.msg), 1 == a.data.ret) {
                        if (0 == e.data.activeIndex) n = e.data.datalist;
                        if (1 == e.data.activeIndex) n = e.data.data_list;
                        if (2 == e.data.activeIndex) var n = e.data.guestlist;
                        if ("add_favorite" == o) for (s = 0; s < n.length; s++) n[s].itemid == i && (n[s].favorite = 1, 
                        n[s].favorite_cnt = n[s].favorite_cnt + 1); else for (var s = 0; s < n.length; s++) n[s].itemid == i && (n[s].favorite = 0, 
                        n[s].favorite_cnt = n[s].favorite_cnt - 1);
                        e.setData({
                            datalist: e.data.datalist,
                            data_list: e.data.data_list,
                            guestlist: e.data.guestlist
                        });
                    }
                }
            });
        }
    },
    show_complaint: function(t) {
        wx.showModal({
            title: "风险提醒",
            showCancel: !1,
            content: "该用户被举报 " + t.currentTarget.dataset.total + " 次"
        });
    },
    showInput: function() {
        this.setData({
            inputShowed: !0
        });
    },
    hideInput: function() {
        var t = this;
        this.setData({
            inputVal: "",
            inputShowed: !1
        }), t.data.keywords && (t.data.keywords = "", wx.showLoading({
            title: "搜索中..."
        }), t.list_reset());
    },
    search: function(t) {
        var a = this;
        a.data.keywords = t.detail.value, wx.showLoading({
            title: "搜索中..."
        }), a.list_reset();
    },
    release: function() {
        wx.switchTab({
            url: "../deviceadd/index"
        });
    },
    hidegetPhone: function() {
        this.setData({
            getPhone_showModal: !1
        });
    },
    getPhoneNumber: function(a) {
        var e = this;
        e.setData({
            getPhone_showModal: !1
        }), "getPhoneNumber:ok" == a.detail.errMsg ? t.auth(function(i) {
            if (!i.token) return !1;
            wx.request({
                url: "https://api.998jx.com/micro/account/decode_phone",
                method: "POST",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                data: {
                    token: t.globalData.userInfo.token,
                    encryptedData: a.detail.encryptedData,
                    iv: a.detail.iv
                },
                success: function(a) {
                    a.data.ret ? (t.show_erro("获取成功"), e.setData({
                        ck_ownerphone: !1,
                        ownerphone: a.data.data
                    })) : (t.show_erro("获取失败", "faild"), setTimeout(function() {
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
    preventTouchMove: function() {},
    onHide: function() {
        this.setData({
            show_more: !1,
            show_none: "none",
            show_images: !1
        });
    },
    closepop: function() {
        this.setData({
            popbanner: ""
        });
    },
    get_selled: function() {
        var a = this;
        wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/data/get_selled",
            data: {
                token: t.globalData.userInfo.token,
                page: 1
            },
            success: function(t) {
                t.data.popbanner && a.setData({
                    popbanner: t.data.popbanner
                }), t.data.swiper && a.setData({
                    qizhong_bg: t.data.swiper
                });
                for (var e = [], i = 0; i < t.data.data.length; i++) {
                    var o = t.data.data[i].address.slice(0, 2), n = t.data.data[i].title.replace("转让", "");
                    e.push({
                        msg: o + "车主近期成交" + n
                    });
                }
                a.setData({
                    dt_msg: e
                });
            }
        });
    },
    form_id: function(a) {
        wx.request({
            url: "https://api.998jx.com/micro/account/saveform",
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: {
                token: t.globalData.userInfo.token,
                formId: a.detail.formId
            },
            success: function(t) {
                wx.navigateTo({
                    url: "/pages/equipment/equipment?ids=" + a.detail.target.dataset.itemid
                });
            }
        });
    },
    login: function() {
        wx.navigateTo({
            url: "/pages/login/login"
        });
    },
    catchTouchMove: function(t) {
        return !1;
    }
});