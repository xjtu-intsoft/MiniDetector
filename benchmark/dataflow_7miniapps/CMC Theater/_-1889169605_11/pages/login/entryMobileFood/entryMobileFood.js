var e = getApp().urlService, i = require("../../../request/cinemaDetailRequest.js").cinemaDetailRequest;

Page({
    data: {
        url: ""
    },
    onLoad: function(e) {
        if (!getApp().isIos8() && e.q) {
            if (this.data.url = decodeURIComponent(e.q), !getApp().userIsLogin() && !getApp().globalData.didLoadQuickLogin) return void getApp().wxQuickLogin(this);
            this.getDataWithUrlParameters();
        }
    },
    backAfterQuickLogin: function() {
        this.getDataWithUrlParameters();
    },
    getDataWithUrlParameters: function() {
        var e = this.data.url, i = {};
        if (-1 != e.indexOf("?")) for (var a = e.substr(e.indexOf("?") + 1).split("&"), t = 0; t < a.length; t++) {
            var n = a[t].split("=");
            n.length > 1 && (i[n[0]] = n[1]);
        }
        i.cinema_id && i.cinema_id.length > 0 ? this.startDownLoad(i.cinema_id, i.hall_id) : wx.reLaunch({
            url: "/pages/home/cinema/cinema"
        });
    },
    startDownLoad: function(a, t) {
        var n = this, r = e.urls.cinemaDetail, s = e.urlParameter({
            cinema_id: a
        });
        e.wxRequest.getRequest(r, s).then(function(e) {
            if (console.log(e), i.decodeRes(e)) {
                console.log(i.successObj.cinemaDetailData);
                var r = i.successObj.cinemaDetailData, s = {
                    id: a,
                    name: r.name,
                    address: r.address,
                    tel: r.phone,
                    is_app_aes_encrypt: r.is_app_aes_encrypt,
                    is_mobile_verification_needed: r.is_mobile_verification_needed
                };
                if (!r.city_id || r.city_id.length <= 0) return void wx.reLaunch({
                    url: "/pages/home/cinema/cinema"
                });
                var o = {
                    id: r.city_id,
                    name: r.city_name
                };
                getApp().setCity(o), getApp().setCinema(s), t && t.length > 0 ? getApp().hall_id = t : getApp().hall_id = "", 
                n.jumpShopPage();
            } else wx.reLaunch({
                url: "/pages/home/cinema/cinema"
            });
        }).finally(function(e) {});
    },
    jumpShopPage: function() {
        getApp().globalData.entryEdition ? wx.reLaunch({
            url: "/pages/login/entry/entry"
        }) : wx.reLaunch({
            url: "/pages/find/findFoodHome/findFoodHome"
        });
    }
});