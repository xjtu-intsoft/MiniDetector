var t = require("../../../util/publicTool.js").getAllValueWithObjc, o = require("../findHome/findAllSelectGoodsCart.js").allSelectGoodsCart, r = require("../../../util/strUtil.js");

Page({
    data: {
        cartGoods: [],
        totalPrice: "0"
    },
    onLoad: function(t) {
        wx.setNavigationBarTitle({
            title: "购物车"
        });
    },
    onShow: function() {
        var r = t(o.getCart("shopCart"));
        this.setData({
            cartGoods: r,
            totalPrice: this.getTotalPrice(r)
        });
    },
    isSelectGood: function(r) {
        var e = r.currentTarget.dataset.shopitem, a = o.getGood("shopCart", e);
        a.isSelect = !a.isSelect;
        var i = t(o.getCart("shopCart"));
        this.setData({
            cartGoods: i,
            totalPrice: this.getTotalPrice(i)
        });
    },
    goAddMorePage: function(t) {
        var o = t.currentTarget.dataset.good;
        wx.navigateTo({
            url: "/pages/find/findAddMorePage/findAddMorePage?promoid=" + o.promo_id + "&cartKey=shopCart&goodid=" + o.id
        });
    },
    goBuy: function() {
        this.data.cartGoods.length <= 0 || this.data.totalPrice <= 0 || wx.navigateTo({
            url: "/pages/find/findConfirmOrder/findConfirmOrder?cartKey=shopCart"
        });
    },
    getTotalPrice: function(t) {
        var o = 0;
        for (var e in t) {
            var a = t[e];
            if (a.isSelect) if (a.promo_id && a.promo_id.length > 0) if (1 == a.promo_is_addition_type) {
                o += parseFloat(a.price) * a.buyCount;
                for (var i in a.moreGoods) o += parseFloat(a.moreGoods[i].price);
            } else if (0 == a.promo_num || a.promo_num >= a.buyCount) o += parseFloat(a.promo_price) * a.buyCount; else {
                var s = parseInt(a.promo_num);
                o += parseFloat(a.promo_price) * s + parseFloat(a.price) * (a.buyCount - s);
            } else o += parseFloat(a.price) * a.buyCount;
        }
        return r.priceFormat(o.toFixed(2));
    },
    clickgoodsadd: function(r) {
        var e = r.currentTarget.dataset.shopitem;
        o.addGoods("shopCart", e);
        var a = t(o.getCart("shopCart"));
        this.setData({
            cartGoods: a,
            totalPrice: this.getTotalPrice(a)
        });
    },
    clickgoodsdel: function(t) {
        var o = t.currentTarget.dataset.shopitem, r = this;
        o.buyCount <= 1 ? wx.showModal({
            confirmColor: "#ff9500",
            content: "删除该商品",
            success: function(t) {
                t.confirm && r.goodsDel(o);
            }
        }) : r.goodsDel(o);
    },
    goodsDel: function(r) {
        o.descGoodsCart("shopCart", r);
        var e = t(o.getCart("shopCart"));
        this.setData({
            cartGoods: e,
            totalPrice: this.getTotalPrice(e)
        });
    },
    nothing: function() {}
});