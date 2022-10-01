function e(e, a, t) {
    return a in e ? Object.defineProperty(e, a, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[a] = t, e;
}

var a, t = getApp().urlService, o = require("../../../request/cinemaRequest.js").cinemaRequest, i = require("../../../request/advertListRequest.js").advertListRequest, n = require("../../../util/codecontol.js"), r = require("../../../config/httpHtlper.js"), s = require("./../../../util/strUtil.js");

Page((a = {
    data: {
        error: {},
        showMovieid: "",
        cinemaData: {},
        movieData: [],
        selectMovie: null,
        selectMovieIndex: 0,
        selectDateData: [],
        selectDateIndex: 0,
        advertListData: [],
        popAd: {},
        popCoupon: {},
        popOrder: {},
        showFirst: !0,
        canLoad: !0,
        cinemaName: "",
        lastOrder: null,
        show_expire_coupon: !1,
        entryEdition: !1,
        ticket_qrcode_data: [],
        lastLoadedTime: 0,
        memberDelayArray: [],
        timeOutIdentifier: 0,
        refrushSelectDateData: [],
        refrushSelectDateIndex: 0,
        fromFlag: "",
        isCinameChange: !1
    },
    onLoad: function(e) {
        if (console.log("cinema==============="), console.log(e), console.log("朋友圈分享 fromFlag = ", e.fromFlag), 
        console.log("朋友圈分享 city_id = ", e.city_id), console.log("朋友圈分享 cinema_id = ", e.cinema_id), 
        this.data.share_city_id = e.city_id, this.data.share_cinema_id = e.cinema_id, this.data.share_cinema_name = e.cinema_name, 
        this.data.fromFlag = e.fromFlag, getApp().globalData.movie_id_share && getApp().globalData.movie_id_share.length > 0 && (this.data.gzh_enter_movie_id = getApp().globalData.movie_id_share), 
        !getApp().isIos8()) if (getApp().globalData.onlyGoods) wx.reLaunch({
            url: "/pages/find/findFoodHome/findFoodHome"
        }); else {
            if (this.setData({
                entryEdition: getApp().globalData.entryEdition
            }), e.cinema) {
                var a = getApp().decodeDataAndJsonParse(e.cinema), t = getApp().decodeDataAndJsonParse(e.city);
                getApp().setCity(t), getApp().setCinema(a);
            }
            this.data.popAd.showAnimation = !1, this.data.popAd.show = !1, this.data.popCoupon.showAnimation = !1, 
            this.data.popCoupon.show = !1, this.data.popOrder.showAnimation = !1, this.data.popOrder.show = !1, 
            this.setData({
                popAd: this.data.popAd,
                popCoupon: this.data.popCoupon,
                popOrder: this.data.popOrder,
                canLoad: !1
            }), this.setData({
                canLoad: !0
            }), this.data.fromFlag = e.fromFlag;
        }
    },
    onShow: function() {
        this.checkUpDate(), this.data.isCinameChange && this.data.fromFlag && "share_time_line" == this.data.fromFlag && (this.data.fromFlag = ""), 
        this.data.fromFlag && "share_time_line" == this.data.fromFlag ? this.setShowData() : getApp().isChoseCity("") && getApp().isChoseCinema("") && (getApp().userIsLogin() || getApp().globalData.didLoadQuickLogin || "logoutAccount" == this.data.fromFlag ? this.setShowData() : getApp().wxQuickLogin(this));
    },
    backAfterQuickLogin: function() {
        this.setShowData();
    },
    goEntry: function() {
        wx.reLaunch({
            url: "/pages/login/entry/entry"
        });
    },
    goMineCard: function() {
        if (getApp().userIsLogin()) {
            var e = getApp().getUserInfo();
            e && e.card_num > 0 ? wx.navigateTo({
                url: "/pages/card/cardlist/cardList"
            }) : wx.navigateTo({
                url: "/pages/card/bind/bindCard"
            });
        } else wx.navigateTo({
            url: "/pages/login/wxLogin/wxLogin"
        });
    },
    clickNoticeTitle: function() {
        if (console.log(this.data.cinemaData.discounts_notice.discounts_notice_url), this.data.cinemaData.discounts_notice.discounts_notice_url && this.data.cinemaData.discounts_notice.discounts_notice_url.length > 0) {
            getApp().globalData.mainNeedRefush = !1;
            var e = encodeURIComponent(this.data.cinemaData.discounts_notice.discounts_notice_url);
            wx.navigateTo({
                url: "/pages/find/promotionDetial/promotionDetial?promotion_url=" + e
            });
        }
    },
    clickswiper: function(e) {
        var a = e.currentTarget.dataset.index, t = this.data.advertListData[a];
        if ("" != t.jump_type) {
            if (!getApp().userIsLogin()) return void wx.navigateTo({
                url: "/pages/login/wxLogin/wxLogin"
            });
            if (1 == t.jump_type) return void wx.navigateTo({
                url: "/pages/card/bind/bindCard?isFromAdvert=true"
            });
            if (2 == t.jump_type) return void wx.navigateTo({
                url: "/pages/card/cardlist/cardList"
            });
            if (10 == t.jump_type) {
                var o = t.target_id;
                return void this.gotoCouponPackageDetail(o);
            }
        }
        if (t.advert_url && t.advert_url.length > 0) {
            var i = encodeURIComponent(t.advert_url);
            wx.navigateTo({
                url: "/pages/find/promotionDetial/promotionDetial?promotion_url=" + i
            });
        }
    },
    onPullDownRefresh: function() {
        this.startDownLoad();
    },
    selectMovie: function(e) {
        var a = e.currentTarget.dataset.index;
        if (1 == this.data.movieData[a].isSelect) {
            if (!this.data.selectMovie) return;
            return getApp().globalData.mainNeedRefush = !1, void wx.navigateTo({
                url: "/moviePages/pages/detail/movieDetails?fromFlag=cinema&id=" + this.data.selectMovie.movie_id
            });
        }
        var t = this.data.movieData, o = this.data.showMovieid, i = this.data.selectMovie, n = this.data.selectDateData, r = this.data.selectDateIndex;
        for (var s in t) s == a ? (o = s >= 2 ? t[s - 2].scroll_id : t[0].scroll_id, t[s].isSelect = !0, 
        this.data.selectMovieIndex = s - 2, i = t[s], n = i.shows[i.days[0].show_date] ? i.shows[i.days[0].show_date] : [], 
        r = 0) : t[s].isSelect = !1;
        this.setData({
            showMovieid: o
        }), this.data.refrushSelectDateData = n, this.data.refrushSelectDateIndex = r, clearTimeout(this.data.timeOutIdentifier), 
        this.data.memberDelayArray = [], this.formatShowData(i, this.data.cinemaData.today), 
        this.setData({
            movieData: t,
            selectMovie: i,
            selectDateData: n,
            selectDateIndex: r
        });
    },
    selectShowDate: function(e) {
        if (this.data.selectMovie) {
            var a = e.currentTarget.dataset.date, t = this.data.selectMovie.days, o = this.data.selectDateIndex;
            for (var i in t) a == t[i].show_date ? (t[i].is_select = !0, o = i) : t[i].is_select = !1;
            var n = this.data.selectMovie.shows[a];
            clearTimeout(this.data.timeOutIdentifier), this.data.memberDelayArray = [], this.data.refrushSelectDateData = n, 
            this.data.refrushSelectDateIndex = o, this.formatShowData(this.data.selectMovie, a), 
            this.setData({
                selectMovie: this.data.selectMovie,
                selectDateData: n,
                selectDateIndex: o
            });
        }
    },
    chosecinema: function() {
        getApp().globalData.mainNeedRefush = !1, wx.navigateTo({
            url: "/pages/home/cinemaList/cinemaList?type=cinema_home"
        });
    },
    goToCinemaDetail: function() {
        getApp().globalData.mainNeedRefush = !1, wx.navigateTo({
            url: "../cinemaDetail/cinemaDetail"
        });
    },
    callPhone: function() {
        if (this.data.cinemaData.tel && this.data.cinemaData.tel.length > 0) {
            var e = this.data.cinemaData.tel.split(",");
            wx.showActionSheet({
                itemList: e,
                success: function(a) {
                    wx.makePhoneCall({
                        phoneNumber: e[a.tapIndex]
                    });
                }
            });
        }
    },
    startDownLoad: function() {
        this.data.showFirst = !1, this.loadCinemaData(), this.loadAdlist();
    },
    loadCinemaData: function() {
        var e = this;
        console.log("--------loadCinemaData----------");
        var a = t.urls.cinemaShow, i = getApp().getCity().id, n = getApp().getCinema().id;
        this.data.fromFlag && "share_time_line" == this.data.fromFlag && (i = this.data.share_city_id, 
        n = this.data.share_cinema_id, getApp().getCity().id = i, getApp().getCinema().id = n);
        var r = t.urlParameter({
            width: "500",
            city_id: i,
            cinema_id: n
        });
        t.wxRequest.getRequest(a, r).then(function(a) {
            if (wx.stopPullDownRefresh(), console.log(a), o.decodeRes(a, e.data.selectMovieIndex, e.data.selectDateIndex)) {
                var t = o.successObj.movieData.length;
                e.data.selectMovieIndex = o.successObj.selectMovieIndex;
                var i = t ? o.successObj.movieData[e.data.selectMovieIndex] : {};
                e.data.selectDateIndex = i.selectDateIndex;
                var n = i.shows[i.days[e.data.selectDateIndex].show_date] ? i.shows[i.days[e.data.selectDateIndex].show_date] : [], r = e.data.selectDateIndex;
                e.data.refrushSelectDateData = n, e.data.refrushSelectDateIndex = r, e.data.memberDelayArray = [], 
                console.log("cinemaRequest.successObj", o.successObj), e.data.lastLoadedTime = new Date(), 
                e.formatShowData(i, i.days[e.data.selectDateIndex].show_date);
                var s = o.successObj.movieData;
                s.unshift({
                    scroll_id: "scroll0000",
                    isSelect: !1,
                    needHidden: !0
                }, {
                    scroll_id: "scroll1111",
                    isSelect: !1,
                    needHidden: !0
                }), s.push({
                    scroll_id: "scroll2222",
                    isSelect: !1,
                    needHidden: !0
                }, {
                    scroll_id: "scroll3333",
                    isSelect: !1,
                    needHidden: !0
                });
                var p = s[e.data.selectMovieIndex].scroll_id;
                e.setData({
                    error: o.failObj,
                    cinemaData: o.successObj.cinemaData,
                    movieData: s,
                    selectMovie: i,
                    selectDateData: n,
                    selectDateIndex: r,
                    showMovieid: p
                }), e.enterMovieIdSelected();
            } else o.successObj.cinemaData && (e.data.cinemaData = o.successObj.cinemaData), 
            e.setData({
                error: o.failObj
            });
        }).finally(function(e) {
            wx.stopPullDownRefresh();
        });
    },
    loadAdlist: function() {
        var e = this;
        console.log("--------loadAdlist----------");
        var a = t.urls.advertList, o = t.urlParameter({
            promotion_type: "1"
        });
        t.wxRequest.getRequest(a, o).then(function(a) {
            console.log(a), i.decodeRes(a) && (console.log(a), e.setData({
                advertListData: i.successObj.advertListData,
                currentSwiper: 0
            }));
        }).finally(function(e) {});
    },
    goToSeat: function(e) {
        var a = e.target.dataset.buybtntype;
        if (!(a < 3)) {
            var t = e.target.dataset.index, o = e.target.dataset.id;
            if (o) {
                var i = this.data.refrushSelectDateData[t];
                if (console.log(i), "1" == i.preemption.is_preemption_show) {
                    var n = i.preemption.preemption_remind, r = n.length > 0 ? n[0] : "", s = n.length > 1 ? n[1] : "";
                    if (6 == a) return void wx.showModal({
                        title: "场次待开售",
                        content: r,
                        showCancel: !1,
                        confirmText: "知道了"
                    });
                    if (7 == a) return void wx.showModal({
                        title: "场次待开售",
                        content: r,
                        cancelText: "知道了",
                        confirmText: "去开通",
                        confirmColor: "#ff9500",
                        success: function(e) {
                            e.confirm && (getApp().userIsLogin() ? wx.navigateTo({
                                url: "/pages/card/bind/bindCard?isFromAdvert=true"
                            }) : wx.navigateTo({
                                url: "/pages/login/wxLogin/wxLogin"
                            }));
                        }
                    });
                    if (8 == a && !i.isMember) return void wx.showModal({
                        title: "场次待开售",
                        content: s,
                        cancelText: "知道了",
                        confirmText: "去开通",
                        confirmColor: "#ff9500",
                        success: function(e) {
                            e.confirm && (getApp().userIsLogin() ? wx.navigateTo({
                                url: "/pages/card/bind/bindCard?isFromAdvert=true"
                            }) : wx.navigateTo({
                                url: "/pages/login/wxLogin/wxLogin"
                            }));
                        }
                    });
                }
                var p = e.target.dataset.showmedia && e.target.dataset.showmedia.length > 0 ? e.target.dataset.showmedia : "", d = this.data.movieData;
                for (var l in d) {
                    var c = d[l];
                    if (c.isSelect) return c.movie_img_url = "", c.backBlurImg = "", c.movie_format = p, 
                    getApp().globalData.movie = c, void wx.navigateTo({
                        url: "/pages/seat/seatSelect?show_id=" + o + "&today=" + this.data.cinemaData.today
                    });
                }
            }
        }
    },
    hiddenPopAd: function() {
        var e = this;
        e.data.popAd.showAnimation = !1, e.setData({
            popAd: e.data.popAd
        }), setTimeout(function() {
            e.data.popAd.show = !1, e.setData({
                popAd: e.data.popAd
            });
        }, 320);
    },
    clickPopAd: function() {
        if (this.hiddenPopAd(), "10" != this.data.popAd.pop_data.jump_type) {
            if ("1" == this.data.popAd.pop_data.jump_type) return getApp().userIsLogin() ? void wx.navigateTo({
                url: "/pages/card/bind/bindCard?isFromAdvert=true"
            }) : void wx.navigateTo({
                url: "/pages/login/wxLogin/wxLogin"
            });
            if (this.data.popAd.pop_data.pop_url && this.data.popAd.pop_data.pop_url.length > 0) {
                getApp().globalData.mainNeedRefush = !1;
                var e = encodeURIComponent(this.data.popAd.pop_data.pop_url);
                wx.navigateTo({
                    url: "/pages/find/promotionDetial/promotionDetial?promotion_url=" + e
                });
            }
        } else {
            var a = this.data.popAd.pop_data.target_id;
            this.gotoCouponPackageDetail(a);
        }
    },
    clickNoGetOrder: function() {
        var e = this, a = t.urls.noGetOrder, o = t.urlParameter({
            order_num: e.data.lastOrder.order_num
        });
        t.wxRequest.getRequest(a, o).then(function(e) {}), e.hiddenPopOrder();
    },
    goMineCoupon: function() {
        getApp().globalData.mainNeedRefush = !1, getApp().globalData.newCouponID = "0", 
        wx.hideTabBarRedDot({
            index: 3
        }), wx.navigateTo({
            url: "/minePages/pages/coupon/coupon"
        }), this.hiddenPopCoupon();
    },
    popCouponClose: function() {
        this.hiddenPopCoupon(), this.isHaveNewOrder(), this.showExpireCoupon();
    },
    hiddenPopCoupon: function() {
        var e = this;
        e.data.popCoupon.showAnimation = !1, e.setData({
            popCoupon: e.data.popCoupon
        }), setTimeout(function() {
            e.data.popCoupon.show = !1, e.setData({
                popCoupon: e.data.popCoupon
            });
        }, 320);
    },
    hiddenPopOrder: function() {
        var e = this;
        e.data.popOrder.showAnimation = !1, e.setData({
            popOrder: e.data.popOrder
        }), setTimeout(function() {
            e.data.popOrder.show = !1, e.setData({
                popOrder: e.data.popOrder
            });
        }, 320);
    },
    isHaveNewOrder: function() {
        if (getApp().userIsLogin() && !this.data.popCoupon.showAnimation) {
            var e = this, a = t.urls.getLastOrder, o = t.urlParameter({});
            t.wxRequest.getRequest(a, o).then(function(a) {
                if (0 == a.data.errcode) {
                    var t = getApp().getUserInfo();
                    t && a.data.data.bind_card_count && (t.card_num = a.data.data.bind_card_count);
                    var o = a.data.data.ticket_order ? a.data.data.ticket_order : {};
                    console.log(o), o.order_num && o.order_num.length > 0 && o.order_num != getApp().globalData.newOrderNum && (getApp().globalData.newOrderNum = o.order_num, 
                    o.is_show_qrcode = a.data.data.is_show_qrcode, o.showTicketCode = o.ticket_code.replace(/,/g, " "), 
                    o.barTicketCode = o.ticket_code.replace(/,/g, ""), o.showTime = o.show_start_time.substring(11, 16), 
                    "2" == o.checkin_code_type || o.checkin_code_type, n.qrcode("neworder_code", o.barTicketCode, "380", "350"), 
                    n.barcode("neworder_bar", o.barTicketCode, "490", "100"), o.ticket_qrcode_data.length > 0 ? o.qrcode_enable : o.qrcode_enable = 0, 
                    e.data.ticket_qrcode_data = o.ticket_qrcode_data, e.data.popOrder.showAnimation = !0, 
                    e.data.popOrder.show = !0, e.setData({
                        popOrder: e.data.popOrder,
                        lastOrder: o
                    }));
                }
            });
        }
    },
    isHaveNewCoupon: function() {
        if (getApp().userIsLogin()) {
            var e = this, a = t.urls.checkCoupon, o = t.urlParameter({});
            t.wxRequest.getRequest(a, o).then(function(a) {
                console.log("parseRedEnvelopAndCouon", a), e.parseRedEnvelopAndCouon(a);
            });
        }
    },
    loadInit: function() {
        var e = this;
        r.init().then(function(a) {
            if (1 == a.data.status) {
                getApp().globalData.init = a.data.data;
                var t = a.data.data;
                console.log(a.data.data), a.data.data.service_phone && a.data.data.service_phone.length > 0 && (getApp().globalData.appServicePhone = a.data.data.service_phone), 
                t.pop_data && !getApp().globalData.popAdIsShow && (e.data.popAd.pop_data = t.pop_data, 
                getApp().globalData.popAdIsShow = !0, t.pop_data.pop_img_url && t.pop_data.pop_img_url.length > 0 && (e.data.popAd.show = !0, 
                e.data.popAd.showAnimation = !0, e.setData({
                    popAd: e.data.popAd
                })));
            }
        });
    },
    clickExpireCoupon: function(e) {
        wx.navigateTo({
            url: "/minePages/pages/coupon/coupon"
        });
    },
    showExpireCoupon: function() {
        if (this.data.show_expire_coupon) {
            wx.showTabBarRedDot({
                index: 3
            }), this.setData({
                show_expire_coupon: !0,
                anim_name: "expire_coupon_anim_left"
            });
            var e = this;
            setTimeout(function() {
                e.setData({
                    anim_name: "expire_coupon_anim_right"
                }), e.data.show_expire_coupon = !1;
            }, 5e3), setTimeout(function() {
                e.setData({
                    show_expire_coupon: !1
                });
            }, 5300);
        }
    },
    setShowData: function() {
        var e = getApp().getCinema().name;
        if (this.data.fromFlag && "share_time_line" == this.data.fromFlag && (e = this.data.share_cinema_name), 
        console.log("------setShowData------- cinema_name = ", e), wx.setNavigationBarTitle({
            title: e || ""
        }), this.setData({
            cinemaName: e
        }), (this.data.showFirst || 1 == getApp().globalData.mainNeedRefush) && this.startDownLoad(), 
        0 == getApp().globalData.mainNeedRefush && (getApp().globalData.mainNeedRefush = !0), 
        getApp().globalData.willShowMovieId.length > 0) {
            for (var a in this.data.movieData) if (this.data.movieData[a].movie_id == getApp().globalData.willShowMovieId) {
                if (1 == this.data.movieData[a].isSelect) break;
                var t = {};
                t.currentTarget = {}, t.currentTarget.dataset = {}, t.currentTarget.dataset.index = parseInt(a), 
                console.log(parseInt(a)), this.selectMovie(t);
                break;
            }
            getApp().globalData.willShowMovieId = "";
        }
        this.data.canLoad && !getApp().globalData.popAdIsShow && this.loadInit(), this.isHaveNewCoupon();
    },
    enterMovieIdSelected: function() {
        if (this.data.gzh_enter_movie_id && this.data.gzh_enter_movie_id.length > 0) {
            for (var e in this.data.movieData) if (this.data.movieData[e].movie_id == this.data.gzh_enter_movie_id) {
                if (1 == this.data.movieData[e].isSelect) break;
                this.data.showMovieid = this.data.gzh_enter_movie_id;
                var a = {};
                a.currentTarget = {}, a.currentTarget.dataset = {}, a.currentTarget.dataset.index = parseInt(e), 
                console.log("=================" + parseInt(e)), this.selectMovie(a);
                break;
            }
            this.data.gzh_enter_movie_id = "";
        }
    },
    move: function() {},
    vipClick: function() {
        getApp().userIsLogin() ? wx.navigateTo({
            url: "/pages/card/bind/bindCard?isFromAdvert=true"
        }) : wx.navigateTo({
            url: "/pages/login/wxLogin/wxLogin"
        });
    },
    couponSeeClick: function() {
        this.goMineCoupon();
    },
    parseRedEnvelopAndCouon: function(e) {
        var a = this;
        if (0 == e.data.errcode) {
            var t = e.data.data.have_new_coupon, o = e.data.data.date, i = e.data.data.will_be_expire_coupon;
            if ("" == t && (t = "0"), "" == i && (i = "0"), "0" != i && o != getApp().globalData.date) {
                console.log("------------有过期券"), getApp().globalData.date = o, a.data.show_expire_coupon = !0;
                var n = "您有" + i + "张优惠券即将过期！";
                a.setData({
                    expire_coupon_info: n
                }), getApp().setExpireDate(o);
            } else console.log("------------没有过期券"), i = "0", a.data.show_expire_coupon = !1;
            if (getApp().globalData.will_be_expire_coupon = i, "0" != t && t != getApp().globalData.newCouponID && 0 == a.data.popAd.show) {
                console.log("------有新券发送-------");
                var r = e.data.data.new_coupon_data, p = [], d = [];
                if (console.log(r.length), r && r.length > 0) for (var l in r) {
                    var c = r[l];
                    c.coupon_bg = "/images/cinema/honbao_youhuiquan_lijian.png", c.coupon_price_margin = "home_coupon_daijin", 
                    c.constant_price = s.priceFormat(c.constant_price), c.replace_price = s.priceFormat(c.replace_price), 
                    c.condition_price = s.priceFormat(c.condition_price), c.desc_style = "", c.face_desc && c.face_desc.desc1 && c.face_desc.desc1.length > 0 && (c.desc_style = "home_coupon_item_desc_weight"), 
                    "1" == c.coupon_type ? (c.price = c.constant_price, c.coupon_bg = "/images/cinema/honbao_youhuiquan_duihuan.png", 
                    c.coupon_price_margin = "home_coupon_duihuan") : (c.price = c.replace_price, parseFloat(c.condition_price)), 
                    "1" == c.channel || ("4" == c.channel ? (c.coupon_bg = "/images/cinema/tankuang_youhuiquan_shangjia.png", 
                    c.coupon_price_margin = "home_coupon_duihuan", c.price = s.priceFormat(c.coupon_show_price)) : (c.coupon_bg = "/images/cinema/tankuang_youhuiquan_xianxia.png", 
                    c.coupon_title_name = "电影券", "2" == c.category ? c.coupon_title_name = "卖品券" : "3" == c.category && (c.coupon_title_name = "通用券"))), 
                    "1" == c.is_share ? (a.data.popCoupon.share_title = "", "0" == c.share_time ? a.data.popCoupon.share_title = "分享给好友再领1张" : a.data.popCoupon.share_title = "分享给好友", 
                    p.push(c)) : d.push(c);
                }
                a.data.redEnvelops = p, a.data.coupons = d, a.data.popCoupon.list = [], a.data.popCoupon.type = "1";
                d.length;
                p.length > 0 ? (a.data.popCoupon.type = "2", 1, a.data.popCoupon.list = p, a.getCouonShareInfo()) : a.data.popCoupon.list = d, 
                console.log(p), console.log(d), console.log(a.data.popCoupon.list), a.data.popCoupon.src_line = "/images/cinema/hongbao_fengexian_red.png", 
                "1" == a.data.popCoupon.type ? (a.data.popCoupon.title_src = "/images/newcoupon/hongbao_biaoti_red.png", 
                a.data.popCoupon.list && a.data.popCoupon.list.length > 2 ? (a.data.popCoupon.coupon_style = "home_coupon_three", 
                a.data.popCoupon.sv_style = "home_coupon_sv2") : a.data.popCoupon.list && 2 == a.data.popCoupon.list.length ? (a.data.popCoupon.coupon_style = "home_coupon_double", 
                a.data.popCoupon.sv_style = "home_coupon_sv2") : (a.data.popCoupon.coupon_style = "home_coupon_single", 
                a.data.popCoupon.sv_style = "home_coupon_sv")) : (a.data.popCoupon.src_line = "/images/cinema/hongbao_fengexian_gold.png", 
                a.data.popCoupon.coupon_style = "home_coupon_red_env", a.data.popCoupon.sv_style = "home_coupon_sv", 
                a.data.popCoupon.title_src = "/images/newcoupon/hongbao_biaoti_gold.png"), console.log("popCoupon ------------------- ---------------"), 
                console.log(a.data.popCoupon), "1" == a.data.popCoupon.type && (a.data.popCoupon.showAnimation = !0, 
                a.data.popCoupon.show = !0, a.setData({
                    popCoupon: a.data.popCoupon
                })), wx.showTabBarRedDot({
                    index: 3
                });
            } else console.log("------无新券发送-------"), a.data.show_expire_coupon || "0" != getApp().globalData.newCouponID || wx.hideTabBarRedDot({
                index: 3
            }), a.showExpireCoupon(), a.isHaveNewOrder();
            getApp().globalData.newCouponID = t;
        }
    },
    getCouonShareInfo: function() {
        var e = this, a = this.data.redEnvelops;
        a && a.length > 0 && r.couponShare(a[0].share_activity_id, "").then(function(a) {
            console.log(a), console.log("-------------------红包"), "1" == a.data.status && (e.data.popCoupon.showAnimation = !0, 
            e.data.popCoupon.show = !0, e.data.couponShare = a.data.data, e.setData({
                popCoupon: e.data.popCoupon
            }));
        });
    },
    gotoAutoTicket: function() {
        if (this.data.lastOrder && this.data.lastOrder.checkin_code_type) {
            var e = this.data.lastOrder.serial_number_1, a = this.data.lastOrder.serial_number_2, t = this.data.lastOrder.group_member_id, o = this.data.lastOrder.cinema_num, i = this.data.lastOrder.checkin_code_type;
            if (i && ("2" == i || "3" == i)) return i = "2" == i ? "2" : "1", void wx.navigateToMiniProgram({
                appId: "wxd47a439504db41ec",
                path: "/pages/tickets/enter/index",
                envVersion: "trial",
                extraData: {
                    ssc1: e,
                    ssc2: a,
                    form_openid: t,
                    m_num: o,
                    qr_type: i
                }
            });
        }
        wx.navigateTo({
            url: "../orderDetial/autoTicket/autoTicket?ticket_qrcode_data=" + getApp().encodeDataAndJsonStringify(this.data.ticket_qrcode_data)
        });
    },
    formatShowData: function(e, a) {
        for (var t = e.refrushTimeData.get(a), o = 0; o < t.length; o++) {
            var i = t[o], n = 0;
            "-1" == i.preemption.status ? n = parseInt(i.preemption.member_buy_count_down) : "1" == i.preemption.status && (n = parseInt(i.preemption.nonmember_buy_count_down)), 
            i.countDown = n;
        }
        t.sort(function(e, a) {
            return e.countDown - a.countDown;
        });
        var r = [], s = {};
        t.length > 0 && (s = t[0], r.push(s), this.data.memberDelayArray.push(r));
        for (o = 1; o < t.length; o++) {
            var p = t[o];
            s.countDown != p.countDown ? ((r = []).push(p), this.data.memberDelayArray.push(r)) : r.push(p);
        }
        this.delayRefrushUI();
    },
    delayRefrushUI: function() {
        var e = this, a = this.data.memberDelayArray.length ? this.data.memberDelayArray[0] : [], t = a.length ? a[0].countDown : -1, o = new Date() - this.data.lastLoadedTime;
        if (-1 == t) return clearTimeout(this.data.timeOutIdentifier), void (this.data.memberDelayArray = []);
        t = 1e3 * t - o, this.data.timeOutIdentifier = setTimeout(function() {
            for (var t = [], o = [], i = 0; i < a.length; i++) {
                var n = a[i];
                if ("-1" == n.preemption.status) {
                    if (n.preemption.status = "1", n.preemption.member_buy_count_down = "0", n.buyBtnType = "8", 
                    n.buyBtnDesc = "优先购", n.isMember) n.isShowPreemption = !1; else if (n.preemption.member_priority_tip && n.preemption.member_priority_tip.length > 1) {
                        var r = n.preemption.member_priority_tip[1].length > 0 ? n.preemption.member_priority_tip[1][0].split("{$}") : [], s = n.preemption.member_priority_tip[1].length > 1 ? n.preemption.member_priority_tip[1][1] : "";
                        console.log(s), r.length >= 2 && (r[0].length > 0 ? n.preemption.selltimeRightTip0 = r[0] : n.preemption.selltimeRightTip0 = "", 
                        r[1].length > 0 ? (n.preemption.selltimeRightTip2 = r[1], n.preemption.selltimeRightTip1 = s) : (n.preemption.selltimeRightTip2 = "", 
                        n.preemption.selltimeRightTip1 = s));
                    }
                    var p = parseInt(n.preemption.nonmember_buy_count_down);
                    if (p == n.countDown) continue;
                    n.countDown = p, o.push(n), console.log("thisShow1", n, new Date());
                } else n.preemption.status = "0", n.preemption.nonmember_buy_count_down = "0", n.isShowPreemption = !1, 
                n.buyBtnDesc = "购票", n.buyBtnType = "4", n.countDown = 0, t.push(n), console.log("thisShow0", n, new Date());
                for (u = 0; u < e.data.refrushSelectDateData.length; u++) if (e.data.refrushSelectDateData[u].show_id == n.show_id) {
                    e.data.refrushSelectDateData[u] = n;
                    break;
                }
            }
            if (e.setData({
                selectDateData: e.data.refrushSelectDateData,
                selectDateIndex: e.data.refrushSelectDateIndex
            }), t.length == a.length) e.data.memberDelayArray.splice(0, 1); else {
                for (u = 0; u < t.length; u++) for (var d = t[u], l = 0; l < a.length; l++) if (a[l] == d) {
                    a.splice(l, 1);
                    break;
                }
                for (u = 0; u < o.length; u++) for (var c = o[u], l = 0; l < a.length; l++) if (a[l] == c) {
                    a.splice(l, 1);
                    break;
                }
                0 == a.length ? e.data.memberDelayArray.splice(0, 1) : e.data.memberDelayArray.splice(0, 1, a), 
                console.log("memberDelayArray", e.data.memberDelayArray);
                for (var u = 0; u < o.length; u++) {
                    for (var c = o[u], h = !1, g = 0; g < e.data.memberDelayArray.length; g++) {
                        var m = e.data.memberDelayArray[g];
                        if (m.length) {
                            var _ = m[0].countDown;
                            if (c.countDown < _) {
                                0 == g ? e.data.memberDelayArray.unshift([ c ]) : e.data.memberDelayArray.splice(g - 1, 0, [ c ]), 
                                h = !0;
                                break;
                            }
                            if (c.countDown == _) {
                                m.push(c), h = !0;
                                break;
                            }
                        } else ;
                    }
                    h || e.data.memberDelayArray.push([ c ]);
                }
            }
            e.delayRefrushUI();
        }, t);
    },
    gotoCardList: function() {
        getApp().userIsLogin() ? wx.navigateTo({
            url: "/pages/card/bind/bindCard?isFromAdvert=true"
        }) : wx.navigateTo({
            url: "/pages/login/wxLogin/wxLogin"
        });
    },
    gotoCouponPackageDetail: function(e) {
        wx.navigateTo({
            url: "/pages/find/findShopCouponPackageDetail/findShopCouponPackageDetail?coupon_package_id=" + e
        });
    },
    checkUpDate: function() {
        var e = wx.getUpdateManager();
        console.log("update manager = ", e), e && e.onCheckForUpdate(function(a) {
            console.log("has update = ", a.hasUpdate), a.hasUpdate && (e.onUpdateReady(function() {
                wx.showModal({
                    title: "更新提示",
                    confirmText: "更新",
                    showCancel: !1,
                    content: "小程序已经全新升级，请点击更新体验新版本功能",
                    success: function(a) {
                        a.confirm && e.applyUpdate();
                    }
                });
            }), e.onUpdateFailed(function() {}));
        });
    },
    onShareAppMessage: function() {
        var e = getApp().getCity(), a = getApp().getCinema();
        return getApp().globalData.entryEdition ? {
            title: "小程序",
            path: "/pages/login/entry/entry",
            desc: ""
        } : {
            title: "小程序",
            desc: "",
            path: "/pages/home/cinema/cinema?cinema=" + getApp().encodeDataAndJsonStringify(a) + "&city=" + getApp().encodeDataAndJsonStringify(e)
        };
    }
}, e(a, "onShareAppMessage", function(e) {
    if (console.log("share_url ================="), console.log(this.data.couponShare), 
    this.data.couponShare && this.data.couponShare.url.length > 0) {
        this.hiddenPopCoupon();
        var a = encodeURIComponent(this.data.couponShare.url);
        return {
            title: this.data.couponShare.title,
            imageUrl: this.data.couponShare.image_url,
            path: "/pages/find/promotionDetial/promotionDetial?promotion_url=" + a + "&share=" + getApp().encodeDataAndJsonStringify(this.data.couponShare),
            desc: ""
        };
    }
}), e(a, "onShareTimeline", function(e) {
    return {
        title: getApp().getCinema().name,
        query: "fromFlag=share_time_line&city_id=" + getApp().getCity().id + "&cinema_id=" + getApp().getCinema().id + "&cinema_name=" + getApp().getCinema().name
    };
}), a));