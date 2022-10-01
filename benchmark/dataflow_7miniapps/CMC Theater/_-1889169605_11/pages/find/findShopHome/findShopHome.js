var e = getApp().urlService, t = require("../../../request/goodsIndexRequest.js").goodsIndexRequest, a = require("../findHome/findAllSelectGoodsCart.js").allSelectGoodsCart, o = require("../../../util/publicTool.js").getAllValueWithObjc;

Page({
    data: {
        goodTypes: [],
        goodList: [],
        totalCount: 0,
        cinema: {}
    },
    onLoad: function(e) {
        if (!getApp().isIos8()) {
            if (e.cinema) {
                var t = getApp().decodeDataAndJsonParse(e.cinema), a = getApp().decodeDataAndJsonParse(e.city);
                getApp().setCity(a), getApp().setCinema(t);
            }
            wx.setNavigationBarTitle({
                title: "商城"
            }), getApp().globalData.isCinemaChange = !1;
            t = getApp().getCinema();
            this.setData({
                cinema: t
            }), this.startDownLoad();
        }
    },
    onShow: function() {
        if (!getApp().isIos8()) {
            if (getApp().globalData.isCinemaChange || getApp().globalData.shopNeedRef) {
                getApp().globalData.shopNeedRef = !1, this.startDownLoad();
                var e = getApp().getCinema();
                this.setData({
                    cinema: e
                });
            }
            this.setData({
                totalCount: this.getTotalCount()
            });
        }
    },
    onShareAppMessage: function() {
        var e = getApp().getCity(), t = getApp().getCinema();
        return getApp().globalData.entryEdition ? {
            title: "小程序",
            path: "/pages/login/entry/entry",
            desc: ""
        } : {
            title: "小程序",
            desc: "",
            path: "pages/find/findShopHome/findShopHome?cinema=" + getApp().encodeDataAndJsonStringify(t) + "&city=" + getApp().encodeDataAndJsonStringify(e)
        };
    },
    onPullDownRefresh: function() {
        this.startDownLoad();
    },
    getTotalCount: function() {
        var e = o(a.getCart("shopCart")), t = 0;
        for (var n in e) t += e[n].buyCount;
        return t;
    },
    startDownLoad: function() {
        var a = this, o = e.urls.goodsIndex, n = e.urlParameter({
            page: "1",
            page_count: "100"
        });
        e.wxRequest.getRequest(o, n).then(function(e) {
            console.log(e), t.decodeRes(e) && a.setData({
                goodTypes: t.successObj.goodTypes,
                goodList: t.successObj.goodListData
            });
        }).finally(function() {
            wx.stopPullDownRefresh();
        });
    },
    changeCinema: function() {
        getApp().globalData.isCinemaChange = !1, wx.navigateTo({
            url: "/pages/home/cinemaList/cinemaList?type=shouldback"
        });
    },
    goCinemaDetail: function() {
        wx.navigateTo({
            url: "/pages/home/cinemaDetail/cinemaDetail"
        });
    },
    goEntry: function() {
        getApp().globalData.entryEdition ? wx.reLaunch({
            url: "/pages/login/entry/entry"
        }) : wx.reLaunch({
            url: "/pages/home/cinema/cinema"
        });
    },
    choseChildShop: function(e) {
        var t = e.currentTarget.dataset.item, a = t.id, o = t.name;
        wx.navigateTo({
            url: "/pages/find/findShopList/findShopList?type=" + a + "&name=" + o
        });
    },
    goGoodDetail: function(e) {
        console.log("商品 详情");
        var t = e.currentTarget.dataset.index, a = this.data.goodList[t], o = a.id;
        "10" != a.goods_type ? wx.navigateTo({
            url: "/pages/find/findGoodDetail/findGoodDetail?goodid=" + o + "&cartKey=shopCart"
        }) : wx.navigateTo({
            url: "/pages/find/findShopCouponPackageDetail/findShopCouponPackageDetail?coupon_package_id=" + o
        });
    },
    goShopCart: function() {
        wx.navigateTo({
            url: "/pages/find/findShopCart/findShopCart"
        });
    },
    onReachBottom: function() {
        console.log("---------on reach bottom------------");
    }
});