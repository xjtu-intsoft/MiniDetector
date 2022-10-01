var o = require("../../../util/publicTool.js").getAllValueWithObjc, t = require("../findHome/findAllSelectGoodsCart.js").allSelectGoodsCart, e = getApp().urlService, a = require("../../../util/strUtil.js");

Page({
    data: {
        type: "",
        goodList: [],
        totalCount: 0,
        currentPage: 1
    },
    onLoad: function(o) {
        var t = this;
        wx.setNavigationBarTitle({
            title: o.name ? o.name : ""
        }), o.type && (t.data.type = o.type), t.startDownLoad();
    },
    onShow: function() {
        getApp().globalData.shopNeedRef && (this.data.goodList = [], this.data.currentPage = 1, 
        this.startDownLoad());
    },
    startDownLoad: function() {
        var o = this, t = e.urls.goodsList, a = e.urlParameter({
            cinema_goods_type_id: o.data.type,
            page: o.data.currentPage.toFixed(0),
            page_count: "20"
        });
        e.wxRequest.getRequest(t, a).then(function(t) {
            console.log(t);
            var e = t.data;
            if ("0" == e.errcode) {
                var a = e.data;
                o.decryGoodList(a.list.good), o.setBuyCountWithcartGoods(a.list.good), o.setData({
                    goodList: o.data.goodList.concat(a.list.good),
                    totalCount: parseInt(a.list.count)
                });
            }
        }).finally(function() {
            wx.stopPullDownRefresh();
        });
    },
    decryGoodList: function(o) {
        for (var t in o) {
            var e = o[t];
            e.price = a.priceFormat(e.price), 1 == e.over_inventory_sell_flag && (e.inventory = "999"), 
            this.theGoodisPromo(e);
        }
    },
    theGoodisPromo: function(o) {
        o.showPrice = a.priceFormat(o.price), o.promo_id && o.promo_id.length > 0 ? (o.havePromo = !0, 
        o.promo_is_addition_type && 1 == o.promo_is_addition_type ? (o.promoPic = "/images/addmore/Tag_jiajiagou_1.png", 
        o.promoPicW = "70rpx", o.promoTextIndexW = "75rpx", o.isAddMore = !0) : (o.showPrice = a.priceFormat(o.promo_price), 
        o.promoPic = "/images/addmore/Tag_tehui.png", o.promoPicW = "50rpx", o.promoTextIndexW = "55rpx", 
        o.isAddMore = !1)) : (o.havePromo = !1, o.promoPic = "", o.promoPicW = "0", o.promoTextIndexW = "0");
    },
    setBuyCountWithcartGoods: function(e) {
        var a = o(t.getCart("shopCart"));
        if (!(a.length <= 0)) for (var i in a) {
            var r = a[i];
            for (var n in e) if (r.id == e[n].id) {
                e[n].buyCount = r.buyCount, r.price = e[n].price;
                break;
            }
        }
    },
    goGoodDetail: function(o) {
        console.log("商品 详情");
        var t = o.currentTarget.dataset.index, e = this.data.goodList[t], a = e.id;
        "10" != e.goods_type ? wx.navigateTo({
            url: "/pages/find/findGoodDetail/findGoodDetail?goodid=" + a + "&cartKey=shopCart"
        }) : wx.navigateTo({
            url: "/pages/find/findShopCouponPackageDetail/findShopCouponPackageDetail?coupon_package_id=" + a
        });
    },
    loadMoreGoods: function() {
        console.log("上拉加载更多"), this.data.goodList.length >= this.data.totalCount ? wx.showToast({
            icom: "none",
            title: "没有更多商品了"
        }) : (this.data.currentPage += 1, this.startDownLoad());
    }
});