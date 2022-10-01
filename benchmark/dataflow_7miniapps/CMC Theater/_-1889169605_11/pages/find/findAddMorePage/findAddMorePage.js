var t = getApp().urlService, o = require("../findHome/findAllSelectGoodsCart.js").allSelectGoodsCart, a = require("../../../util/publicTool.js").getAllValueWithObjc, e = require("../../../util/strUtil.js");

Page({
    data: {
        promoid: "",
        cartKey: "",
        cartGoods: null,
        superGood: null,
        addMoreGoods: null,
        isOverlap: "0"
    },
    onLoad: function(t) {
        wx.setNavigationBarTitle({
            title: "换购商品"
        });
        var e = this;
        if (t.promoid) {
            e.data.promoid = t.promoid;
            var d = a(o.getCart(t.cartKey)), r = o.getGood(t.cartKey, {
                id: t.goodid
            });
            e.setData({
                cartKey: t.cartKey,
                superGood: r,
                cartGoods: d
            });
        }
        e.startDownLoad();
    },
    startDownLoad: function() {
        var o = this, a = t.urls.getAddMoreGoods, e = t.urlParameter({
            promo_id: o.data.promoid
        });
        t.wxRequest.getRequest(a, e).then(function(t) {
            console.log(t);
            var a = t.data;
            "0" == a.errcode && o.decryRequestData(a.data);
        }).finally(function() {});
    },
    decryRequestData: function(t) {
        console.log(t), t.list && t.list.length > 0 && (this.decryGoodListData(t.list), 
        this.setData({
            addMoreGoods: t.list,
            isOverlap: t.is_overlap
        }));
    },
    decryGoodListData: function(t) {
        for (var o in t) {
            var a = t[o];
            a.isSelect = !1, a.price = e.priceFormat(a.price);
            for (var d in this.data.superGood.moreGoods) if (this.data.superGood.moreGoods[d].id == a.id) {
                a.isSelect = !0;
                break;
            }
        }
    },
    clickSelectGood: function(t) {
        var o = t.currentTarget.dataset.index, a = this.data.addMoreGoods[o];
        if (a.isSelect = !a.isSelect, 1 != this.data.isOverlap && 1 == a.isSelect) for (var e in this.data.addMoreGoods) {
            var d = this.data.addMoreGoods[e];
            d.id != a.id && (d.isSelect = !1);
        }
        this.setData({
            addMoreGoods: this.data.addMoreGoods
        });
    },
    clickConfirBtn: function() {
        var t = [];
        for (var a in this.data.addMoreGoods) {
            var e = this.data.addMoreGoods[a];
            1 == e.isSelect && t.push(e);
        }
        this.data.superGood.moreGoods = t, o.setGood(this.data.cartKey, this.data.superGood), 
        wx.navigateBack();
    }
});