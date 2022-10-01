var t = getApp().urlService, e = require("../../../request/foodsIndexRequest.js").foodsIndexRequest, i = require("../../../request/cinemaDetailRequest.js").cinemaDetailRequest, a = require("../findHome/findAllSelectGoodsCart.js").allSelectGoodsCart, o = require("../../../util/publicTool.js").getAllValueWithObjc, s = require("../../../util/strUtil.js"), d = require("./findFoodBall.js"), n = "foodCart";

Page({
    data: {
        needRefush: !1,
        cinema: {},
        hotfoods: [],
        indexList: [],
        foodsList: {},
        isTop: !1,
        display: !1,
        displayAnimation: !1,
        cartGoods: [],
        totalPrice: "0",
        selectHeaderIndex: 0,
        scroll_id: "",
        cartFood_id: "",
        isIndexClick: !1,
        totalCount: 0,
        scrollHeight: 0,
        isShowAddMoreAlert: !1,
        onlyGoods: !1,
        fromFlag: "",
        q: "",
        hall_id: ""
    },
    onLoad: function(t) {
        if (!getApp().isIos8()) {
            console.log("================="), console.log(t);
            var e = t.fromFlag, i = t.isSingleGoods;
            if (i && "1" == i && (getApp().globalData.onlyGoods = !0, wx.hideHomeButton && wx.hideHomeButton()), 
            e) if (this.data.fromFlag = e, "findfoodhome" == e) ; else if ("singlegood" == e) getApp().globalData.onlyGoods = !0, 
            wx.hideHomeButton && wx.hideHomeButton(); else if ("sanurlqrcode" == e) {
                var a = t.q;
                if (console.log("fromFlag =" + e + " q = " + a), a) {
                    a = decodeURIComponent(a), this.data.q = a;
                    var o = a.substring(a.indexOf("?") + 1, a.length), s = this.getQueryString(o, "group_id"), d = this.getQueryString(o, "cinema_id"), n = this.getQueryString(o, "hall_id");
                    if (!d) return void wx.reLaunch({
                        url: "/pages/home/cinema/cinema"
                    });
                    this.getCinemaDetail(d), n ? (this.data.hall_id = n, getApp().globalData.hall_id = n) : (this.data.hall_id = "", 
                    getApp().globalData.hall_id = "");
                    var r = this.getQueryString(o, "cinema_name"), c = this.getQueryString(o, "city_id");
                    console.log("group:" + s + " cinema_id:" + d + " hall_id:" + n), console.log("city_id:" + c + " cinema_name:" + r), 
                    d && (getApp().getCinema().id = d), c && (getApp().getCity().id = c);
                }
            }
            if (t.cinema) {
                var l = getApp().decodeDataAndJsonParse(t.cinema), g = getApp().decodeDataAndJsonParse(t.city);
                getApp().setCity(g), getApp().setCinema(l);
            }
            wx.setNavigationBarTitle({
                title: "餐饮"
            }), getApp().globalData.isCinemaChange = !0, this.setData({
                onlyGoods: getApp().globalData.onlyGoods
            }), this.setScrollHeight(this.data.hotfoods);
        }
    },
    getQueryString: function(t, e) {
        var i = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"), a = t.match(i);
        return null != a ? unescape(a[2]) : "";
    },
    onShow: function() {
        if (wx.hideHomeButton && getApp().globalData.onlyGoods && wx.hideHomeButton(), this.data.q) ; else {
            if (!getApp().isChoseCity("findfoodhome")) return;
            if (!getApp().isChoseCinema("findfoodhome")) return;
        }
        getApp().userIsLogin() || getApp().globalData.didLoadQuickLogin ? this.setShowData() : getApp().wxQuickLogin(this);
    },
    changeCinema: function() {
        getApp().globalData.isCinemaChange = !1;
        !getApp().getCity().id || getApp().getCity().id.length <= 0 ? wx.reLaunch({
            url: "/pages/home/cinema/cinema"
        }) : wx.navigateTo({
            url: "/pages/home/cinemaList/cinemaList?type=shouldback"
        });
    },
    backAfterQuickLogin: function() {
        this.setShowData();
    },
    setShowData: function() {
        if (d.setDelegate(this), getApp().globalData.isCinemaChange || this.data.needRefush) {
            console.log("更换了影院"), getApp().globalData.isCinemaChange = !1, this.data.needRefush = !1;
            var t = getApp().getCinema();
            this.setData({
                cinema: t,
                selectHeaderIndex: 0
            }), this.startDownLoad();
        } else this.updateFoodsData();
    },
    onShareAppMessage: function() {
        var t = getApp().getCity(), e = getApp().getCinema();
        return getApp().globalData.entryEdition ? {
            title: "小程序",
            path: "/pages/login/entry/entry",
            desc: ""
        } : {
            title: "小程序",
            desc: "",
            path: "/pages/find/findFoodHome/findFoodHome?cinema=" + getApp().encodeDataAndJsonStringify(e) + "&city=" + getApp().encodeDataAndJsonStringify(t)
        };
    },
    setScrollHeight: function(t) {
        var e = this;
        wx.getSystemInfo({
            success: function(i) {
                var a = 750 * i.windowHeight / i.windowWidth - 124;
                t && t.length > 0 && (a -= 336), e.setData({
                    scrollHeight: a
                });
            }
        });
    },
    updateFoodsData: function() {
        var t = o(a.getCart(n));
        this.setCurrentBuyCount(t), this.setData({
            cartGoods: t,
            totalPrice: this.getTotalPrice(t)
        });
    },
    showCart: function() {
        var t = this;
        t.setData({
            display: !0
        }), setTimeout(function() {
            t.setData({
                displayAnimation: !0
            });
        }, 100);
    },
    hiddenCart: function() {
        var t = this;
        t.setData({
            displayAnimation: !1
        }), setTimeout(function() {
            t.setData({
                display: !1
            });
        }, 320), this.updateFoodsData();
    },
    startDownLoad: function() {
        var i = this, a = t.urls.foodsIndex, o = t.urlParameter({});
        t.wxRequest.getRequest(a, o).then(function(t) {
            console.log(t), e.decodeRes(t) ? (i.setData({
                hotfoods: e.successObj.hotfoods,
                indexList: e.successObj.indexList,
                foodsList: e.successObj.foodsList
            }), i.setScrollHeight(e.successObj.hotfoods)) : (console.log(t), "205" == t.data.errcode && (i.data.needRefush = !0));
        }).finally(function() {
            wx.stopPullDownRefresh(), i.updateFoodsData();
        });
    },
    didscroll: function(t) {
        if (this.data.isIndexClick) this.data.isIndexClick = !1; else {
            var e = t.detail.scrollTop;
            for (var i in this.data.indexList) if (e < this.data.indexList[i].offectMaxY) {
                this.setData({
                    selectHeaderIndex: i
                });
                break;
            }
        }
    },
    goCinemaDetail: function() {
        wx.navigateTo({
            url: "/pages/home/cinemaDetail/cinemaDetail"
        });
    },
    goEntry: function() {
        this.data.onlyGoods ? wx.navigateTo({
            url: "/pages/mime/goodsMime/goodsMime"
        }) : getApp().globalData.entryEdition ? wx.reLaunch({
            url: "/pages/login/entry/entry"
        }) : wx.reLaunch({
            url: "/pages/home/cinema/cinema"
        });
    },
    goAddMorePage: function(t) {
        var e = t.currentTarget.dataset.good;
        wx.navigateTo({
            url: "/pages/find/findAddMorePage/findAddMorePage?promoid=" + e.promo_id + "&cartKey=" + n + "&goodid=" + e.map_key
        });
    },
    clickcartgoodsadd: function(t) {
        var e = t.currentTarget.dataset.cartgoodsIndex, i = (h = this.data.cartGoods)[e], s = (t.currentTarget.dataset.index, 
        t.currentTarget.dataset.listid);
        if (i.goods_type && 3 == i.goods_type) {
            var d = i.promo_num, r = a.getOptionGoodEdgeCount(n, i);
            if (d && d > 0 && r >= d) return void getApp().showModalApp("特惠商品限购" + d + "份");
            if (!(i = a.addGoods(n, i)).addSuccess) return;
            for (var c in this.data.indexList) {
                var l = this.data.indexList[c], g = this.data.foodsList[s];
                for (var u in g) if (l.id == g[u].cinema_goods_type_id) {
                    l.selectCount += 1;
                    break;
                }
            }
            var h = o(a.getCart(n));
            this.setData({
                cartGoods: h,
                totalPrice: this.getTotalPrice(h),
                indexList: this.data.indexList
            });
        } else this.clickgoodsadd(t);
    },
    clickgoodsadd: function(t) {
        var e, i = t.currentTarget.dataset.index, s = t.currentTarget.dataset.listid;
        if (-1 != i) {
            e = this.data.foodsList[s][i];
            var r = this.data.foodsList[e.cinema_goods_type_id];
            for (var c in r) if (e.id == r[c].id) {
                e.rowIndex = c;
                break;
            }
            if ((e = a.addGoods(n, e)).addSuccess) {
                d.showBallWithEvent(t), this.data.foodsList[s][i] = e;
                for (var c in this.data.indexList) {
                    var l = this.data.indexList[c];
                    if (l.id == this.data.foodsList[s][i].cinema_goods_type_id) {
                        l.selectCount += 1;
                        break;
                    }
                }
                g = o(a.getCart(n));
                this.ergodicAllGoods(e), this.setData({
                    cartGoods: g,
                    totalPrice: this.getTotalPrice(g),
                    foodsList: this.data.foodsList,
                    indexList: this.data.indexList
                });
            }
        } else {
            if (!(e = a.addGoods(n, t.currentTarget.dataset.item)).addSuccess) return;
            d.showBallWithEvent(t);
            var g = o(a.getCart(n));
            this.setData({
                cartGoods: g,
                totalPrice: this.getTotalPrice(g)
            });
        }
    },
    clickgoodsdel: function(t) {
        var e = t.currentTarget.dataset.index, i = t.currentTarget.dataset.listid, s = this.data.foodsList[i][e];
        if (s.rowIndex = e, !(s.buyCount <= 0)) {
            this.data.foodsList[i][e] = a.descGoodsCart(n, s);
            var d = o(a.getCart(n));
            d.length <= 0 && this.hiddenCart();
            for (var r in this.data.indexList) {
                var c = this.data.indexList[r];
                if (c.id == this.data.foodsList[i][e].cinema_goods_type_id && c.selectCount > 0) {
                    c.selectCount -= 1;
                    break;
                }
            }
            this.ergodicAllGoods(this.data.foodsList[i][e]), this.setData({
                cartGoods: d,
                totalPrice: this.getTotalPrice(d),
                foodsList: this.data.foodsList,
                indexList: this.data.indexList
            });
        }
    },
    clickcartgoodsdel: function(t) {
        var e = t.currentTarget.dataset.cartgoodsIndex, i = this.data.cartGoods, s = i[e], d = (t.currentTarget.dataset.index, 
        t.currentTarget.dataset.listid);
        if (console.log(s), s.goods_type && 3 == s.goods_type) {
            a.descGoodsCart(n, s), (i = o(a.getCart(n))).length <= 0 && this.hiddenCart();
            for (var r in this.data.indexList) {
                var c = this.data.indexList[r], l = this.data.foodsList[d];
                for (var g in l) if (c.id == l[g].cinema_goods_type_id) {
                    c.selectCount -= 1;
                    break;
                }
            }
            this.setData({
                cartGoods: i,
                totalPrice: this.getTotalPrice(i),
                indexList: this.data.indexList
            });
        } else this.clickgoodsdel(t);
    },
    ergodicAllGoods: function(t) {
        var e = o(this.data.foodsList);
        for (var i in e) for (var a in e[i]) {
            var s = e[i][a];
            s.id == t.id && (s.buyCount = t.buyCount);
        }
    },
    clickIndexView: function(t) {
        var e = t.currentTarget.dataset.index;
        this.setData({
            isIndexClick: !0,
            selectHeaderIndex: e,
            scroll_id: this.data.indexList[e].scroll_id
        });
    },
    clickcart: function() {
        this.data.cartGoods.length <= 0 || this.showCart();
    },
    clearCart: function() {
        var t = this;
        wx.showModal({
            confirmColor: "#ff9500",
            content: "是否清空购物车内的商品",
            success: function(e) {
                e.confirm && t.didClear();
            }
        });
    },
    didClear: function() {
        var t = o(this.data.foodsList);
        for (var e in t) for (var i in t[e]) t[e][i].buyCount = 0;
        for (var e in this.data.indexList) this.data.indexList[e].selectCount = 0;
        a.clearCartWithType(n);
        var s = o(a.getCart(n));
        this.setData({
            cartGoods: s,
            totalPrice: this.getTotalPrice(s),
            foodsList: this.data.foodsList,
            indexList: this.data.indexList
        }), this.hiddenCart();
    },
    gobuy: function() {
        var t = this;
        if (!(t.data.cartGoods.length <= 0)) {
            var e = t.isNeedAlertAddMore();
            if (e.length > 0 && !t.data.isShowAddMoreAlert) return t.data.isShowAddMoreAlert = !0, 
            void wx.showModal({
                confirmColor: "#ff9500",
                content: "您购物车里包含加价购的商品哟",
                confirmText: "去支付",
                cancelText: "去换购",
                success: function(i) {
                    i.confirm ? t.goShopOrderConfirm() : i.cancel && (t.showCart(), t.setData({
                        cartFood_id: e
                    }));
                }
            });
            t.goShopOrderConfirm();
        }
    },
    goShopOrderConfirm: function() {
        wx.navigateTo({
            url: "/pages/find/findConfirmOrder/findConfirmOrder?cartKey=foodCart"
        });
    },
    goGoodDetail: function(t) {
        console.log("商品 详情");
        var e = t.currentTarget.dataset.goodid;
        wx.navigateTo({
            url: "/pages/find/findGoodDetail/findGoodDetail?goodid=" + e + "&cartKey=" + n
        });
    },
    goFoodDetail: function(t) {
        this.goGoodDetail(t);
    },
    isNeedAlertAddMore: function() {
        var t = o(a.getCart(n)), e = !1, i = "";
        for (var s in t) {
            var d = t[s];
            if (d.promo_id.length > 0 && 1 == d.promo_is_addition_type) {
                if (d.moreGoods && d.moreGoods.length > 0) return e = !1, i = d.scroll_id, e ? i : "";
                e = !0, i = d.scroll_id;
            }
        }
        return e ? i : "";
    },
    getTotalPrice: function(t) {
        var e = 0, i = 0;
        for (var a in t) {
            var o = t[a];
            if (i += o.buyCount, o.promo_id && o.promo_id.length > 0) if (1 == o.promo_is_addition_type) {
                e += parseFloat(o.price) * o.buyCount;
                for (var d in o.moreGoods) e += parseFloat(o.moreGoods[d].price);
            } else if (0 == o.promo_num || o.promo_num >= o.buyCount) e += parseFloat(o.showPrice) * o.buyCount; else {
                var n = parseInt(o.promo_num);
                e += parseFloat(o.showPrice) * n + parseFloat(o.price) * (o.buyCount - n);
            } else e += parseFloat(o.price) * o.buyCount;
        }
        return this.setData({
            totalCount: i
        }), s.priceFormat(e.toFixed(2));
    },
    setCurrentBuyCount: function(t) {
        for (var e in this.data.indexList) {
            var i = this.data.indexList[e];
            i.selectCount = 0;
            var o = this.data.foodsList[i.id];
            for (var s in o) {
                var d = o[s];
                if (3 != d.goods_type) {
                    var r = a.getGood(n, d);
                    r ? (d.buyCount = r.buyCount, r.rowIndex = s, (!r.cinema_goods_type_id || r.cinema_goods_type_id.length <= 0) && (r.cinema_goods_type_id = d.cinema_goods_type_id), 
                    i.id == r.cinema_goods_type_id && 3 != i.type && (i.selectCount += r.buyCount)) : d.buyCount = 0;
                } else d.buyCount = a.getOptionGoodEdgeCount(n, d), i.id == d.cinema_goods_type_id && 3 != i.type && (i.selectCount += d.buyCount);
            }
        }
        this.setData({
            foodsList: this.data.foodsList,
            indexList: this.data.indexList
        });
    },
    nothing: function() {},
    getCinemaDetail: function(e) {
        var a = this, o = t.urls.cinemaDetail, s = {
            cinema_id: e
        }, d = t.urlParameter(s);
        t.wxRequest.getRequest(o, d).then(function(t) {
            if (i.decodeRes(t)) {
                if (console.log(i.successObj.cinemaDetailData), !i.successObj.cinemaDetailData.city_id || i.successObj.cinemaDetailData.city_id.length <= 0) return void wx.reLaunch({
                    url: "/pages/home/cinema/cinema"
                });
                var o = {
                    id: i.successObj.cinemaDetailData.city_id,
                    name: i.successObj.cinemaDetailData.city_name
                };
                getApp().setCity(o), i.successObj.cinemaDetailData.id = e, getApp().setCinema(i.successObj.cinemaDetailData), 
                a.setData({
                    cinema: i.successObj.cinemaDetailData
                });
            }
        }).finally(function(t) {});
    },
    optionGoodsClick: function(t) {
        var e = t.currentTarget.dataset.goodid, i = t.currentTarget.dataset.promo_num, o = a.getOptionGoodEdgeCount(n, {
            id: e
        });
        i && i > 0 && o >= i ? getApp().showModalApp("特惠商品限购" + i + "份") : wx.navigateTo({
            url: "/pages/find/findOptionGoods/findOptionGoods?good_id=" + e + "&fromFlag=find"
        });
    },
    expandClick: function(t) {
        var e = t.currentTarget.dataset.index, i = this.data.cartGoods[e];
        i.expand ? i.expand = !i.expand : i.expand = !0, this.setData({
            cartGoods: this.data.cartGoods
        });
    }
});