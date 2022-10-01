var e = getApp().urlService, t = require("../../../request/cityListRequest.js").cityListRequest, a = require("../../../util/locationUtil.js").getLocation;

Page({
    data: {
        cityHeaders: [],
        cityArrs: [],
        needBack: !1,
        fromentry: "false",
        fromType: ""
    },
    onLoad: function(e) {
        if (this.data.needBack = "true" == e.needback, this.data.fromentry = "true" == e.fromentry ? "true" : "false", 
        this.data.fromType = e.type, console.log(e), "openCard" != this.data.fromType) this.startDownLoad(); else {
            wx.setNavigationBarTitle({
                title: "请选择城市"
            });
            var a = {
                data: {
                    data: {
                        all_city: getApp().globalData.openCardCinemas
                    },
                    errcode: "0"
                }
            };
            if (t.decodeRes(a)) {
                var i = t.successObj.cityHeaders, s = t.successObj.cityArrs;
                this.setData({
                    cityHeaders: i,
                    cityArrs: s
                });
            }
        }
    },
    startDownLoad: function() {
        var i = this, s = getApp().getCity(), r = e.urls.cityList, c = e.urlParameter({});
        e.wxRequest.getRequest(r, c).then(function(e) {
            if (t.decodeRes(e)) {
                var s = t.successObj.cityHeaders, r = t.successObj.cityArrs;
                i.setData({
                    cityHeaders: s,
                    cityArrs: r
                });
            }
            return a(!1);
        }).then(function(e) {
            var t = {}, a = i.data.cityHeaders, r = i.data.cityArrs;
            for (var c in r) for (var n in r[c]) {
                var o = r[c][n];
                if (-1 != e.cityName.indexOf(o.name) || -1 != o.name.indexOf(e.cityName)) {
                    t.name = o.name, t.id = o.id;
                    break;
                }
            }
            Object.keys(t).length || (t.nocanSelect = !0, "定位失败" == e.cityName ? t.name = e.cityName : t.name = e.cityName + "-该城市下无影院信息"), 
            a.unshift("定位城市"), r.unshift([ t ]), s && (a.unshift("当前选择城市"), r.unshift([ s ])), 
            i.setData({
                cityHeaders: a,
                cityArrs: r
            });
        });
    },
    choseCity: function(e) {
        var t = e.currentTarget.dataset.city;
        if (!t.nocanSelect) if (this.data.needBack) {
            var a = getCurrentPages();
            a[a.length - 2].setData({
                choseCity: t,
                isCityBack: !0
            }), wx.navigateBack();
        } else wx.navigateTo({
            url: "../cinemaList/cinemaList?chosecity=" + getApp().encodeDataAndJsonStringify(t) + "&type=" + this.data.fromType
        });
    }
});