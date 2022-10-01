var o = getApp().urlService, e = require("../../../request/findPromListRequest.js").findPromListRequest;

Page({
    data: {
        findHomeJumpType: "none",
        showGoods: !1,
        showFoods: !1
    },
    onLoad: function() {
        getApp().isIos8() || getApp().isChoseCity("entry") && getApp().isChoseCinema("entry") && this.loadFindData();
    },
    onShow: function() {
        getApp().userIsLogin() || getApp().globalData.didLoadQuickLogin ? this.setShowData() : getApp().wxQuickLogin(this);
    },
    backAfterQuickLogin: function() {
        this.setShowData();
    },
    setShowData: function() {
        "food" == this.data.findHomeJumpType && getApp().userIsLogin() ? this.goFood() : "shop" == this.data.findHomeJumpType && getApp().userIsLogin() ? this.goShop() : this.data.findHomeJumpType = "none";
    },
    onPullDownRefresh: function() {
        this.loadFindData();
    },
    loadFindData: function() {
        var t = this, n = o.urls.findPromList, s = o.urlParameter({
            promotion_type: "1"
        });
        o.wxRequest.getRequest(n, s).then(function(o) {
            console.log(o), e.decodeRes(o) && t.setData({
                showGoods: e.successObj.goods.length > 0,
                showFoods: e.successObj.foods.length > 0
            });
        }).finally(function(o) {
            wx.stopPullDownRefresh();
        });
    },
    goMovie: function() {
        console.log("去购票"), wx.switchTab({
            url: "/pages/home/cinema/cinema"
        });
    },
    goFood: function() {
        console.log("去卖品"), getApp().globalData.goodsFrom = "entry", wx.reLaunch({
            url: "/pages/find/findFoodHome/findFoodHome"
        });
    },
    goShop: function() {
        console.log("去商城"), getApp().globalData.goodsFrom = "entry", wx.reLaunch({
            url: "/pages/find/findShopHome/findShopHome"
        });
    }
});