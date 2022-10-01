var a = getApp().urlService, t = require("../../../request/cinemaListRequest.js").cinemaListRequest, e = require("../../../util/locationUtil.js").getLocation;

Page({
    data: {
        choseCity: {},
        cinemaArr: [],
        isShowCity: !1,
        fromFlag: "",
        locationResult: {},
        fromentry: !1,
        isCityBack: !1,
        cityText: "当前城市"
    },
    onLoad: function(a) {
        var t = a.chosecity ? getApp().decodeDataAndJsonParse(a.chosecity) : "", e = a.type;
        if (e && (this.data.fromFlag = e), console.log("fromFlag=" + this.data.fromFlag), 
        this.data.fromFlag && "openCard" == this.data.fromFlag) {
            var i = a.cardLevelId;
            return i && (this.data.cardLevelId = i), this.data.exchange_code = a.exchange_code, 
            console.log("exchange_code=" + this.data.exchange_code), console.log("cardLevelId=" + this.data.cardLevelId), 
            void wx.setNavigationBarTitle({
                title: "请选择发卡影城"
            });
        }
        if (this.data.fromentry = "true" == a.fromentry, t) this.data.choseCity = t; else {
            var o = getApp().getCity();
            o ? this.data.choseCity = o : alert("出错了"), this.setData({
                choseCity: o,
                isShowCity: !0
            });
        }
    },
    onShow: function() {
        this.location(), this.data.fromFlag && "openCard" == this.data.fromFlag ? this.setCodeOpenCardCinemas() : this.startDownLoad();
    },
    onUnload: function() {
        getApp().globalData.openCardCinemas = null;
    },
    onPullDownRefresh: function() {
        this.startDownLoad();
    },
    startDownLoad: function() {
        var e = this;
        if (this.data.choseCity && this.data.choseCity.id) ; else {
            if (this.data.choseCity && this.data.choseCity.id && this.data.choseCity.id.length <= 0) return;
            if (!getApp().isChoseCity(this.data.fromFlag)) return;
        }
        var i = a.urls.cinemaList, o = a.urlParameter({
            city_id: this.data.choseCity.id ? this.data.choseCity.id : ""
        }), s = this;
        a.wxRequest.getRequest(i, o).then(function(a) {
            t.decodeRes(a, e.data.choseCity.name) && e.setData({
                fromFlag: s.data.fromFlag,
                cinemaArr: t.successObj.cinemaArr
            });
        }).finally(function(a) {
            wx.stopPullDownRefresh();
        });
    },
    choseCinema: function(a) {
        var t = a.currentTarget.dataset.cinema;
        if (getApp().globalData.mainNeedRefush = !0, console.log("fromFlag=" + this.data.fromFlag + ";chosecinema = ", t), 
        "bindcard" == this.data.fromFlag) return (i = (e = getCurrentPages())[e.length - 2]).setData({
            cinemaInfo: t,
            choseCity: this.data.choseCity
        }), void wx.navigateBack();
        if ("openCard" != this.data.fromFlag) {
            if ("bindOfflineCoupon" == this.data.fromFlag) return (i = (e = getCurrentPages())[e.length - 2]).setData({
                cinemaInfo: t
            }), void wx.navigateBack();
            if (this.data.choseCity && getApp().setCity(this.data.choseCity), getApp().globalData.isCinemaChange = !0, 
            getApp().setCinema(t), "shouldback" != this.data.fromFlag) if ("entry" != this.data.fromFlag) if ("findhome" != this.data.fromFlag) if ("movielist" != this.data.fromFlag) if ("personcenter" != this.data.fromFlag) if ("findfoodhome" != this.data.fromFlag && "singlegood" != this.data.fromFlag && "sanurlqrcode" != this.data.fromFlag) if ("wx_gzh_jump" != this.data.fromFlag && "wx_youjia_jump" != this.data.fromFlag) {
                if ("cinema_home" == this.data.fromFlag) {
                    var e = getCurrentPages(), i = e[e.length - 2];
                    i.setData({
                        isCinameChange: !0
                    });
                }
                wx.switchTab({
                    url: "../cinema/cinema"
                });
            } else wx.reLaunch({
                url: "/pages/card/bind/bindCard?fromFlag=" + this.data.fromFlag
            }); else wx.reLaunch({
                url: "/pages/find/findFoodHome/findFoodHome?fromFlag=" + this.data.fromFlag
            }); else wx.switchTab({
                url: "/pages/mime/personCenter"
            }); else wx.switchTab({
                url: "/pages/movieList/movie"
            }); else wx.switchTab({
                url: "/pages/find/findHome/findHome"
            }); else wx.reLaunch({
                url: "/pages/login/entry/entry"
            }); else wx.navigateBack();
        } else {
            (i = (e = getCurrentPages())[e.length - 2]).setData({
                cinemaInfo: t,
                choseCity: this.data.choseCity
            });
            var o = {};
            o.id = this.data.cardLevelId, o.bind_cinema_id = t.id, o.exchange_code = this.data.exchange_code;
            var s = getApp().encodeDataAndJsonStringify(o);
            wx.redirectTo({
                url: "/pages/card/onlinecard/ecardDetails?fromType=exchangeCode&bean=" + s
            });
        }
    },
    goChoseCity: function() {
        wx.navigateTo({
            url: "../cityList/cityList?needback=true&type=" + this.data.fromFlag
        });
    },
    setCodeOpenCardCinemas: function() {
        var a = getApp().globalData.openCardCinemas;
        if (a && a.length > 0) {
            var e = [];
            if (this.data.isCityBack && this.data.choseCity && this.data.choseCity.id) {
                console.log("选择城市后返回---------------"), console.log(this.data.choseCity);
                for (var i in a) if (a[i].id == this.data.choseCity.id) {
                    e = a[i].cinemas, t.decryCinemaList(e, this.data.choseCity.name);
                    break;
                }
            } else this.data.choseCity = a[0], e = this.data.choseCity.cinemas, t.decryCinemaList(e, this.data.choseCity.name);
            console.log("end========================"), console.log(e), this.setData({
                fromFlag: this.data.fromFlag,
                choseCity: this.data.choseCity,
                isShowCity: !0,
                cityText: "选择城市",
                cinemaArr: e
            });
        }
    },
    location: function() {
        var a = this;
        a.data.locationResult.address = "定位中...", a.setData({
            locationResult: a.data.locationResult
        }), e(!0).then(function(e) {
            console.log("影院列表 定位", e), t.decryCinemaList(a.data.cinemaArr, a.data.choseCity.name), 
            a.setData({
                cinemaArr: a.data.cinemaArr,
                locationResult: e
            }), a.data.fromFlag && "openCard" == a.data.fromFlag && a.setCodeOpenCardCinemas();
        });
    }
});