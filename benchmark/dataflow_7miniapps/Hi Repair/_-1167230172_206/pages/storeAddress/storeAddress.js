require("../../util/util");

var t = require("../../comm/script/fetch");

require("../../comm/script/config"), getApp();

Page({
    data: {
        storeAdd: [],
        TabCur: 0,
        MainCur: 0,
        VerticalNavTop: 0,
        isShow: !1
    },
    onLoad: function(e) {
        var a = this;
        wx.showLoading({
            title: "加载中",
            mask: !0
        }), t.getStoreList(null, function(t) {
            a.setData({
                isShow: !0,
                storeAdd: t
            }), wx.hideLoading();
        }, function(t) {});
    },
    provinceSelect: function(t) {
        console.log(t), this.setData({
            TabCur: t.currentTarget.dataset.id,
            MainCur: t.currentTarget.dataset.id,
            VerticalNavTop: 50 * (t.currentTarget.dataset.id - 1)
        });
    },
    VerticalMain: function(t) {
        console.log("121221"), console.log(t);
        for (var e = this.data.storeAdd, a = 0, r = function(t) {
            wx.createSelectorQuery().select("#main-" + t).fields({
                size: !0
            }, function(r) {
                e[t].top = a, a += r.height, e[t].bottom = a;
            }).exec();
        }, o = 0; o < e.length; o++) r(o);
        for (var i = t.detail.scrollTop + 20, n = 0; n < e.length; n++) if (i > e[n].top && i < e[n].bottom) return this.setData({
            VerticalNavTop: 50 * (n - 1),
            TabCur: n
        }), !1;
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
    callphone: function(t) {
        var e = t.currentTarget.dataset;
        wx.makePhoneCall({
            phoneNumber: e.phone
        });
    }
});