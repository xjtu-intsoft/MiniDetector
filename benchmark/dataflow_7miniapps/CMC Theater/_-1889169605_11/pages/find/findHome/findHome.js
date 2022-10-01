var o = getApp().urlService, e = require("../../../request/findPromListRequest.js").findPromListRequest, t = require("../../../request/advertListRequest.js").advertListRequest;

Page({
    data: {
        promotionData: [],
        advertListData: [],
        goods: [],
        foods: []
    },
    onLoad: function() {
        getApp().isIos8();
    },
    onShow: function() {
        getApp().isChoseCity("findhome") && getApp().isChoseCinema("findhome") && this.startDownLoad();
    },
    isChoseCity: function() {
        return !!getApp().getCity();
    },
    isChoseCinema: function() {
        return !!getApp().getCinema();
    },
    onPullDownRefresh: function() {
        this.startDownLoad();
    },
    clickPromCell: function(o) {
        var e = o.currentTarget.dataset.index, t = this.data.promotionData[e];
        if (1 == t.jump_type) return getApp().userIsLogin() ? void wx.navigateTo({
            url: "/pages/card/bind/bindCard?isFromAdvert=true"
        }) : void wx.navigateTo({
            url: "/pages/login/wxLogin/wxLogin"
        });
        if (10 != t.jump_type) if (2 != t.activity_type || getApp().userIsLogin()) {
            var a = encodeURIComponent(t.promotion_url), i = t.promotion_name;
            wx.navigateTo({
                url: "/pages/find/promotionDetial/promotionDetial?promotion_url=" + a + "&title=" + i + "&share=" + getApp().encodeDataAndJsonStringify(t.share)
            });
        } else wx.navigateTo({
            url: "/pages/login/wxLogin/wxLogin"
        }); else {
            var n = t.target_id;
            wx.navigateTo({
                url: "/pages/find/findShopCouponPackageDetail/findShopCouponPackageDetail?coupon_package_id=" + n
            });
        }
    },
    startDownLoad: function() {
        this.loadFindData(), this.loadAdlist();
    },
    loadFindData: function() {
        var t = this, a = o.urls.findPromList, i = o.urlParameter({
            promotion_type: "1"
        });
        o.wxRequest.getRequest(a, i).then(function(o) {
            e.decodeRes(o) && t.setData({
                promotionData: e.successObj.promotionData,
                goods: e.successObj.goods,
                foods: e.successObj.foods
            }), getApp().globalData.goodsLogin && (getApp().globalData.goodsLogin = !1, wx.showToast({
                duration: 3e3,
                icon: "none",
                showCancel: !1,
                title: "登录后请重新选择商品"
            }));
        }).finally(function(o) {
            wx.stopPullDownRefresh();
        });
    },
    loadAdlist: function() {
        var e = this, a = o.urls.advertList, i = o.urlParameter({
            promotion_type: "4"
        });
        o.wxRequest.getRequest(a, i).then(function(o) {
            t.decodeRes(o) && e.setData({
                advertListData: t.successObj.advertListData,
                currentSwiper: 0
            });
        }).finally(function(o) {
            wx.stopPullDownRefresh();
        });
    },
    clickswiper: function(o) {
        var e = o.currentTarget.dataset.index, t = this.data.advertListData[e];
        if (1 == t.jump_type) return getApp().userIsLogin() ? void wx.navigateTo({
            url: "/pages/card/bind/bindCard?isFromAdvert=true"
        }) : void wx.navigateTo({
            url: "/pages/login/wxLogin/wxLogin"
        });
        if (10 != t.jump_type) {
            if (console.log("clickswiper item", t), t.advert_url && t.advert_url.length > 0) {
                var a = encodeURIComponent(t.advert_url);
                wx.navigateTo({
                    url: "/pages/find/promotionDetial/promotionDetial?promotion_url=" + a
                });
            }
        } else {
            var i = t.target_id;
            wx.navigateTo({
                url: "/pages/find/findShopCouponPackageDetail/findShopCouponPackageDetail?coupon_package_id=" + i
            });
        }
    },
    choseMoreGoods: function() {
        getApp().globalData.goodsFrom = "find", wx.navigateTo({
            url: "/pages/find/findShopHome/findShopHome"
        });
    },
    choseMoreFoods: function() {
        getApp().globalData.goodsFrom = "find", wx.navigateTo({
            url: "/pages/find/findFoodHome/findFoodHome"
        });
    },
    goGoodDetail: function(o) {
        var e = o.currentTarget.dataset.index, t = this.data.goods[e], a = t.id;
        if ("10" != t.goods_type) {
            var i = o.currentTarget.dataset.cartkey;
            getApp().globalData.goodsFrom = "find", wx.navigateTo({
                url: "/pages/find/findGoodDetail/findGoodDetail?goodid=" + a + "&cartKey=" + i
            });
        } else wx.navigateTo({
            url: "/pages/find/findShopCouponPackageDetail/findShopCouponPackageDetail?coupon_package_id=" + a
        });
    },
    goFoodDetail: function(o) {
        var e = o.currentTarget.dataset.goodid, t = o.currentTarget.dataset.cartkey;
        getApp().globalData.goodsFrom = "find", wx.navigateTo({
            url: "/pages/find/findGoodDetail/findGoodDetail?goodid=" + e + "&cartKey=" + t
        });
    },
    onShareAppMessage: function() {
        return {
            path: "/pages/find/findHome/findHome?type=findhome"
        };
    }
});