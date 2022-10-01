var a = getApp().urlService, t = require("../../../request/cinemaDetailRequest.js").cinemaDetailRequest, e = require("../../../util/qqmap-wx-jssdk/qqmap-wx-jssdk.js");

Page({
    data: {
        cinemaDetailData: {},
        baseInfo: [],
        feature: [],
        lat: 0,
        lng: 0,
        markers: null,
        isShowGoHome: !0
    },
    onLoad: function(a) {
        var t = a.fromFlag, e = a.cinema_id, i = a.city_id;
        "app_cinema_detail" == t && (this.data.fromFlag = t, this.data.cinemaId = e, this.data.cityId = i, 
        this.data.isShowGoHome = !1), console.log("cinemaId = " + e + " city_id =" + i + " appFlag=" + t), 
        this.startDownLoad();
    },
    callPhone: function() {
        var a = this.data.cinemaDetailData.phone.split(",");
        wx.showActionSheet({
            itemList: a,
            success: function(t) {
                wx.makePhoneCall({
                    phoneNumber: a[t.tapIndex]
                });
            }
        });
    },
    goMovie: function() {
        wx.switchTab({
            url: "/pages/home/cinema/cinema"
        });
    },
    goCinemaMap: function() {
        console.log("去地图页");
    },
    clickRoadlineCell: function(a) {
        var t = a.currentTarget.dataset.index, e = this.data.baseInfo[t];
        e.isOpen = !e.isOpen, this.setData({
            baseInfo: this.data.baseInfo
        });
    },
    clickFeatureCell: function(a) {
        var t = a.currentTarget.dataset.index, e = this.data.feature[t];
        e.isOpen = !e.isOpen, console.log(e), this.setData({
            feature: this.data.feature
        });
    },
    clickNoticeCell: function() {
        this.data.cinemaDetailData.noticeOpen = !this.data.cinemaDetailData.noticeOpen, 
        this.setData({
            cinemaDetailData: this.data.cinemaDetailData
        });
    },
    clickCallout: function(a) {
        wx.openLocation({
            latitude: parseFloat(this.data.lat),
            longitude: parseFloat(this.data.lng),
            scale: 16,
            name: this.data.cinemaDetailData.name,
            address: this.data.cinemaDetailData.address
        });
    },
    photoClick: function(a) {
        var t = a.currentTarget.dataset.index, e = [];
        for (var t in this.data.cinemaDetailData.photo) e.push({
            original_poster_url: this.data.cinemaDetailData.photo[t]
        });
        wx.navigateTo({
            url: "/moviePages/pages/gallerydetail/gdetail?index=" + t + "&list=" + getApp().encodeDataAndJsonStringify(e)
        });
    },
    imageError: function(a) {
        console.log(a);
    },
    startDownLoad: function() {
        var e = this, i = a.urls.cinemaDetail, n = {};
        "app_cinema_detail" == this.data.fromFlag && (n = {
            cinema_id: this.data.cinemaId,
            city_id: this.data.cityId
        });
        var o = a.urlParameter(n);
        a.wxRequest.getRequest(i, o).then(function(a) {
            console.log(a), t.decodeRes(a) && (e.setData({
                cinemaDetailData: t.successObj.cinemaDetailData,
                baseInfo: t.successObj.cinemaDetailData.baseInfo,
                feature: t.successObj.cinemaDetailData.feature,
                isShowGoHome: e.data.isShowGoHome
            }), e.reverseLocation(e.data.cinemaDetailData.lat, e.data.cinemaDetailData.lng));
        }).finally(function(a) {});
    },
    reverseLocation: function(a, t) {
        var i = this;
        console.log("前", a, t), new e({
            key: "T7FBZ-ZG3K4-M4OUJ-X7PWM-76EBS-2NBPD"
        }).reverseGeocoder({
            location: {
                latitude: a,
                longitude: t
            },
            coord_type: 3,
            success: function(a) {
                var t = a.result.location;
                console.log("后", t.lat, t.lng);
                var e = [ {
                    iconPath: "/images/cinemaDetail/yingyuanxingxi-dingwei.png",
                    id: 0,
                    latitude: t.lat,
                    longitude: t.lng,
                    width: 30,
                    height: 30,
                    callout: {
                        content: i.data.cinemaDetailData.name + " : 去导航",
                        fontSize: 15,
                        borderRadius: 4,
                        padding: 8,
                        display: "ALWAYS",
                        textAlign: "center"
                    }
                } ];
                i.setData({
                    lat: t.lat,
                    lng: t.lng,
                    markers: e
                });
            },
            fail: function(a) {}
        });
    },
    onShareAppMessage: function() {
        var a = this.data.cinemaDetailData.name, t = "", e = "", i = "";
        this.data.fromFlag && "app_cinema_detail" == this.data.fromFlag ? (i = this.data.cinemaId, 
        e = this.data.cityId) : (i = getApp().getCinema().id, e = getApp().getCity().id);
        return console.log("title=" + a + " cityId =" + e + " cinemaId =" + i), t = "/pages/home/cinemaDetail/cinemaDetail?fromFlag=app_cinema_detail&city_id=" + e + "&cinema_id=" + i, 
        {
            title: a,
            imageUrl: "",
            path: t,
            desc: ""
        };
    }
});