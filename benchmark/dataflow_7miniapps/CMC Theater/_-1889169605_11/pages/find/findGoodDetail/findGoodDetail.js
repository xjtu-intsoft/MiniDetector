function t(t, a, o) {
    return a in t ? Object.defineProperty(t, a, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = o, t;
}

var a, o = require("../findFoodHome/findFoodBall.js"), e = getApp().urlService, i = require("../../../util/publicTool.js").getAllValueWithObjc, d = require("../findHome/findAllSelectGoodsCart.js").allSelectGoodsCart, r = require("../../../util/strUtil.js");

Page((a = {
    data: {
        goodid: "",
        detailData: {},
        cartKey: "",
        display: !1,
        displayAnimation: !1,
        cartGoods: [],
        totalCount: 0,
        totalPrice: 0,
        cartFood_id: "",
        isShowAddMoreAlert: !1,
        hall_id: ""
    },
    onLoad: function(t) {
        wx.setNavigationBarTitle({
            title: "详情"
        });
        var a = this;
        if (o.setDelegate(a), console.log(t), t.hall_id && (this.data.hall_id = t.hall_id), 
        t.goodid) {
            a.data.goodid = t.goodid;
            var e = i(d.getCart(t.cartKey));
            a.setData({
                cartKey: t.cartKey,
                cartGoods: e,
                totalPrice: this.getTotalPrice(e)
            });
        }
        a.startDownLoad();
    },
    onShow: function() {
        this.data.detailData && 3 == this.data.detailData.goods_type && (this.data.detailData.buyCount = d.getOptionGoodEdgeCount(this.data.cartKey, this.data.detailData), 
        this.setData({
            detailData: this.data.detailData
        }));
        var t = i(d.getCart(this.data.cartKey));
        this.setData({
            cartGoods: t,
            totalPrice: this.getTotalPrice(t)
        }), getApp().globalData.shopNeedRef && this.startDownLoad();
    },
    startDownLoad: function() {
        var t = this, a = e.urls.goodsDetail, o = e.urlParameter({
            id: t.data.goodid
        });
        e.wxRequest.getRequest(a, o).then(function(a) {
            console.log(a);
            var o = a.data;
            if ("0" == o.errcode) {
                var e = o.data;
                if (e.price = r.priceFormat(e.price), e.scroll_id = "food" + e.id, "1" == e.over_inventory_sell_flag && (e.inventory = "999"), 
                t.theGoodisPromo(e), 3 == e.goods_type) e.buyCount = d.getOptionGoodEdgeCount(t.data.cartKey, e); else {
                    var i = d.getGood(t.data.cartKey, e);
                    e.buyCount = i ? i.buyCount : 0;
                }
                t.setData({
                    detailData: e
                });
            }
        }).finally(function() {
            wx.stopPullDownRefresh();
        });
    },
    theGoodisPromo: function(t) {
        t.showPrice = r.priceFormat(t.price), t.promo_id && t.promo_id.length > 0 ? (t.havePromo = !0, 
        t.promo_is_addition_type && 1 == t.promo_is_addition_type ? (t.promoPic = "/images/addmore/Tag_jiajiagou_1.png", 
        t.promoPicW = "70rpx", t.promoTextIndexW = "75rpx", t.isAddMore = !0) : (t.showPrice = r.priceFormat(t.promo_price), 
        t.promoPic = "/images/addmore/Tag_tehui.png", t.promoPicW = "50rpx", t.promoTextIndexW = "55rpx", 
        t.isAddMore = !1)) : (t.havePromo = !1, t.promoPic = "", t.promoPicW = "0", t.promoTextIndexW = "0");
    },
    addShopCart: function(t) {
        var a = t.currentTarget.dataset.shopitem;
        d.getGood("shopCart", a) ? a = d.getGood("shopCart", a) : a.isSelect = !0, (a = d.addGoods(this.data.cartKey, a)).addSuccess && (t.touches[0].clientX = 189, 
        t.touches[0].clientY = 557, o.showBallWithEvent(t), this.getTotalPrice(i(d.getCart(this.data.cartKey))));
    },
    goShopCart: function() {
        wx.navigateTo({
            url: "/pages/find/findShopCart/findShopCart"
        });
    },
    goAddMorePage: function(t) {
        var a = t.currentTarget.dataset.good;
        wx.navigateTo({
            url: "/pages/find/findAddMorePage/findAddMorePage?promoid=" + a.promo_id + "&cartKey=" + this.data.cartKey + "&goodid=" + a.map_key
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
        }, 320);
    },
    clickcart: function() {
        this.data.cartGoods.length <= 0 || this.showCart();
    },
    clearCart: function() {
        console.log("清空购物车"), d.clearCartWithType(this.data.cartKey);
        var t = i(d.getCart(cartKey));
        this.setData({
            cartGoods: t,
            totalPrice: this.getTotalPrice(t),
            foodsList: this.data.foodsList
        });
    },
    clickgoodsadd: function(t) {
        var a = t.currentTarget.dataset.fooditem;
        if (a && !(a.id.length <= 0)) {
            if (this.data.detailData.id == a.id) {
                if (!(e = d.addGoods(this.data.cartKey, this.data.detailData)).addSuccess) return;
                this.setData({
                    detailData: e,
                    cartGoods: i(d.getCart(this.data.cartKey))
                });
            } else {
                var e = d.addGoods(this.data.cartKey, a);
                if (!e.addSuccess) return;
                this.setData({
                    cartGoods: i(d.getCart(this.data.cartKey))
                });
            }
            o.showBallWithEvent(t), this.setData({
                totalPrice: this.getTotalPrice(this.data.cartGoods)
            });
        }
    },
    clickcartgoodsadd: function(t) {
        var a = t.currentTarget.dataset.cartgoodsIndex, o = (n = this.data.cartGoods)[a];
        if (o.goods_type && 3 == o.goods_type) {
            var e = this.data.cartKey, r = o.promo_num, s = d.getOptionGoodEdgeCount(e, o);
            if (r && r > 0 && s >= r) return void getApp().showModalApp("特惠商品限购" + r + "份");
            if (!(o = d.addGoods(e, o)).addSuccess) return;
            var n = i(d.getCart(e));
            this.data.detailData.buyCount = d.getOptionGoodEdgeCount(e, this.data.detailData), 
            this.setData({
                cartGoods: n,
                totalPrice: this.getTotalPrice(n),
                detailData: this.data.detailData
            });
        } else this.clickgoodsadd(t);
    },
    clickgoodsdel: function(t) {
        var a = t.currentTarget.dataset.fooditem;
        a.buyCount <= 0 || (this.data.detailData.id == a.id ? (this.data.detailData = d.descGoodsCart(this.data.cartKey, this.data.detailData), 
        this.setData({
            detailData: this.data.detailData,
            cartGoods: i(d.getCart(this.data.cartKey))
        })) : (d.descGoodsCart(this.data.cartKey, a), this.setData({
            cartGoods: i(d.getCart(this.data.cartKey))
        })), this.setData({
            totalPrice: this.getTotalPrice(this.data.cartGoods)
        }));
    },
    clickcartgoodsdel: function(t) {
        var a = t.currentTarget.dataset.cartgoodsIndex, o = this.data.cartGoods, e = o[a];
        if (e.goods_type && 3 == e.goods_type) {
            var r = this.data.cartKey;
            d.descGoodsCart(r, e), (o = i(d.getCart(r))).length <= 0 && this.hiddenCart(), this.data.detailData.buyCount = d.getOptionGoodEdgeCount(r, this.data.detailData), 
            this.setData({
                cartGoods: o,
                totalPrice: this.getTotalPrice(o),
                detailData: this.data.detailData
            });
        } else this.clickgoodsdel(t);
    },
    getTotalPrice: function(t) {
        var a = 0, o = 0;
        for (var e in t) {
            var i = t[e];
            if (o += i.buyCount, i.promo_id && i.promo_id.length > 0) if (1 == i.promo_is_addition_type) {
                a += parseFloat(i.price) * i.buyCount;
                for (var d in i.moreGoods) a += parseFloat(i.moreGoods[d].price);
            } else if (0 == i.promo_num || i.promo_num >= i.buyCount) a += parseFloat(i.showPrice) * i.buyCount; else {
                var s = parseInt(i.promo_num);
                a += parseFloat(i.showPrice) * s + parseFloat(i.price) * (i.buyCount - s);
            } else a += parseFloat(i.price) * i.buyCount;
        }
        return this.setData({
            totalCount: o
        }), r.priceFormat(a.toFixed(2));
    },
    gobuy: function() {
        var t = this;
        if (!(t.data.cartGoods.length <= 0)) {
            var a = t.isNeedAlertAddMore();
            if (a.length > 0 && !t.data.isShowAddMoreAlert) return t.data.isShowAddMoreAlert = !0, 
            void wx.showModal({
                confirmColor: "#ff9500",
                content: "您购物车里包含加价购的商品哟",
                confirmText: "去支付",
                cancelText: "去换购",
                success: function(o) {
                    o.confirm ? t.goShopOrderConfirm() : o.cancel && (t.showCart(), t.setData({
                        cartFood_id: a
                    }));
                }
            });
            t.goShopOrderConfirm();
        }
    },
    goShopOrderConfirm: function() {
        wx.navigateTo({
            url: "/pages/find/findConfirmOrder/findConfirmOrder?cartKey=" + this.data.cartKey + "&hall_id=" + this.data.hall_id
        });
    }
}, t(a, "clearCart", function() {
    console.log("清空购物车");
    var t = this;
    wx.showModal({
        confirmColor: "#ff9500",
        content: "是否清空购物车内的商品",
        success: function(a) {
            a.confirm && t.didClear();
        }
    });
}), t(a, "didClear", function() {
    a = i(d.getCart("foodCart"));
    for (var t in a) a[t].buyCount = 0;
    d.clearCartWithType("foodCart");
    var a = i(d.getCart("foodCart"));
    this.data.detailData.buyCount = 0, this.setData({
        cartGoods: a,
        totalPrice: this.getTotalPrice(a),
        detailData: this.data.detailData
    }), this.hiddenCart();
}), t(a, "isNeedAlertAddMore", function() {
    var t = i(d.getCart(this.data.cartKey)), a = !1, o = "";
    for (var e in t) {
        var r = t[e];
        if (r.promo_id.length > 0 && 1 == r.promo_is_addition_type) {
            if (r.moreGoods && r.moreGoods.length > 0) return a = !1, o = r.scroll_id, a ? o : "";
            a = !0, o = r.scroll_id;
        }
    }
    return a ? o : "";
}), t(a, "nothing", function() {}), t(a, "optionGoodsClick", function(t) {
    var a = t.currentTarget.dataset.goodid, o = this.data.detailData.promo_num, e = d.getOptionGoodEdgeCount(this.data.cartKey, this.data.detailData);
    o && o > 0 && e >= o ? getApp().showModalApp("特惠商品限购" + o + "份") : wx.navigateTo({
        url: "/pages/find/findOptionGoods/findOptionGoods?good_id=" + a + "&fromFlag=find"
    });
}), t(a, "expandClick", function(t) {
    var a = t.currentTarget.dataset.index, o = this.data.cartGoods[a];
    o.expand ? o.expand = !o.expand : o.expand = !0, this.setData({
        cartGoods: this.data.cartGoods
    });
}), a));