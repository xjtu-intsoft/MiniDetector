getApp();

var t = require("../../../comm/script/fetch");

Page({
    data: {
        storeAdd: [],
        shopList: [],
        scorollHeight: ""
    },
    onLoad: function(e) {
        var a = this;
        wx.showLoading(), t.getStoreList(null, function(t) {
            t.map(function(t, e) {
                return t.active = 0 == e;
            }), console.log(t[0].weixiucenter), t[0].weixiucenter.map(function(t) {
                return t.active = !1;
            }), a.setData({
                storeAdd: t,
                shopList: t[0].weixiucenter
            }), wx.hideLoading();
        }, function(t) {});
    },
    onReady: function() {
        var t = this;
        wx.getSystemInfoSync().windowHeight, wx.createSelectorQuery().select(".scrollview").boundingClientRect(function(e) {
            console.log(e.height), t.setData({
                scorollHeight: wx.getSystemInfoSync().windowHeight - e.height + "px"
            });
        }).exec();
    },
    selectLocation: function(t) {
        var e = t.currentTarget.dataset.index, a = this.data.storeAdd;
        a.map(function(t, a) {
            return t.active = e == a;
        }), a[e].weixiucenter.map(function(t) {
            return t.active = !1;
        }), this.setData({
            storeAdd: a,
            shopList: a[e].weixiucenter
        });
    },
    contcatShop: function(t) {
        var e = t.currentTarget.dataset.tel;
        wx.makePhoneCall({
            phoneNumber: e
        });
    },
    clipBoard: function(t) {
        wx.setClipboardData({
            data: t.currentTarget.dataset.address,
            success: function(t) {
                wx.getClipboardData({
                    success: function(t) {
                        wx.showToast({
                            title: "复制成功"
                        });
                    }
                });
            }
        });
    },
    intoMap: function(t) {
        var e = t.currentTarget.dataset;
        wx.openLocation({
            latitude: Number(e.lat),
            longitude: Number(e.lng),
            name: e.name,
            address: e.address,
            scale: 28
        });
    },
    selectAddress: function(t) {
        var e = t.currentTarget.dataset.address;
        if (!e.active) {
            var a = t.currentTarget.dataset.index;
            console.log("index--=-="), console.log(a);
            var n = this.data.shopList;
            n.map(function(t, e) {
                return t.active = a == e;
            }), console.log(n), this.setData({
                shopList: n
            });
            var o = getCurrentPages();
            o[o.length - 2].setData({
                locationShopName: e.name,
                locationShop: e,
                getShop: !0
            }), wx.navigateBack();
        }
    }
});