require("../../../comm/script/config");

var i = require("../../../comm/script/fetch"), t = (require("../../../util/util"), 
getApp());

Page({
    data: {
        origin: "",
        id: "",
        provinces: [],
        province: "",
        province_id: "",
        citys: [],
        city: "",
        city_id: "",
        districts: [],
        district: "",
        district_id: "",
        value: [ 0, 0, 0 ],
        values: [ 0, 0, 0 ],
        condition: !1,
        pcdShow: !1,
        name: "",
        phone: "",
        detailAddress: "",
        is_default: !1,
        is_default_num: 0
    },
    bindChange: function(i) {
        var t = i.detail.value, s = this.data.values, e = this.data.cityData;
        if (console.log(t, s), t[0] == s[0]) if (t[1] == s[1]) {
            if (t[2] != s[2]) return console.log("district no"), void this.setData({
                province: this.data.provinces[t[0]],
                province_id: e[t[0]].id,
                city: this.data.citys[t[1]],
                city_id: e[t[0]].cities[t[1]].id,
                district: this.data.districts[t[2]],
                district_id: e[t[0]].cities[t[1]].districts[t[2]].id,
                values: t
            });
        } else {
            console.log("city no");
            for (var a = [], d = 0; d < e[t[0]].cities[t[1]].districts.length; d++) a.push(e[t[0]].cities[t[1]].districts[d].name);
            this.setData({
                province: this.data.provinces[t[0]],
                province_id: e[t[0]].id,
                city: this.data.citys[t[1]],
                city_id: e[t[0]].cities[t[1]].id,
                district: e[t[0]].cities[t[1]].districts[0].name,
                district_id: e[t[0]].cities[t[1]].districts[0].id,
                districts: a,
                values: t,
                value: [ t[0], t[1], 0 ]
            });
        } else {
            console.log("province no ");
            for (var n = [], c = [], o = 0; o < e[t[0]].cities.length; o++) n.push(e[t[0]].cities[o].name);
            for (var r = 0; r < e[t[0]].cities[0].districts.length; r++) c.push(e[t[0]].cities[0].districts[r].name);
            this.setData({
                province: this.data.provinces[t[0]],
                province_id: e[t[0]].id,
                city: e[t[0]].cities[0].name,
                city_id: e[t[0]].cities[0].id,
                citys: n,
                district: e[t[0]].cities[0].districts[0].name,
                district_id: e[t[0]].cities[0].districts[0].id,
                districts: c,
                values: t,
                value: [ t[0], 0, 0 ]
            });
        }
    },
    popUp: function() {
        this.pcdAnimation.translateY(0).step(), this.setData({
            pcdAnimation: this.pcdAnimation.export(),
            condition: !0,
            pcdShow: !0
        });
    },
    popDown: function() {
        this.pcdAnimation.translateY("100%").step(), this.setData({
            pcdAnimation: this.pcdAnimation.export(),
            condition: !1
        });
    },
    setName: function(i) {
        this.setData({
            name: i.detail.value
        });
    },
    setPhone: function(i) {
        this.setData({
            phone: i.detail.value
        });
    },
    setDetailAddress: function(i) {
        this.setData({
            detailAddress: i.detail.value
        });
    },
    changeSwitch: function() {
        this.setData({
            is_default: !this.data.is_default
        });
    },
    saveAddress: function() {
        "" != this.data.name ? "" != this.data.phone ? 0 != this.data.pcdShow ? "" != this.data.detailAddress ? (this.data.is_default ? this.setData({
            is_default_num: 1
        }) : this.setData({
            is_default_num: 0
        }), this.getQuickOrder()) : wx.showToast({
            title: "详细地址未填写",
            image: "../../../img/wx_index/warning.png",
            duration: 1500
        }) : wx.showToast({
            title: "省市区未选择",
            image: "../../../img/wx_index/warning.png",
            duration: 1500
        }) : wx.showToast({
            title: "联系方式为空",
            image: "../../../img/wx_index/warning.png",
            duration: 1500
        }) : wx.showToast({
            title: "请输入姓名",
            image: "../../../img/wx_index/warning.png",
            duration: 1500
        });
    },
    getQuickOrder: function() {
        wx.showLoading({
            title: "正在下单"
        });
        var s = t.globalData.hwxUserInfo.token, e = {};
        this.data.id ? e.user_address_id = this.data.id : e.user_address_id = "0", e.user_name = this.data.name, 
        e.phone_number = this.data.phone, e.province = this.data.province_id, e.city = this.data.city_id, 
        e.district = this.data.district_id, e.is_default_address = this.data.is_default_num, 
        e.address_detail = this.data.detailAddress;
        i.getQuickOrder.call(this, s, e, function(i) {
            console.log(i), wx.hideLoading(), wx.redirectTo({
                url: "../orderSubmitted/orderSubmitted?data=" + JSON.stringify(i)
            });
        }, function(i) {
            wx.hideLoading(), wx.showToast({
                title: i,
                icon: "none",
                duration: 1500
            });
        });
    },
    onLoad: function(s) {
        console.log("onLoad");
        var e = this;
        if (e.setData({
            origin: s.origin ? s.origin : ""
        }), s.info) {
            var a = JSON.parse(s.info);
            e.setData({
                province: a.province_name,
                province_id: a.province_id,
                city: a.city_name,
                city_id: a.city_id,
                district: a.district_name,
                district_id: a.district_id,
                phone: a.mobile,
                id: a.id,
                pcdShow: !0,
                name: a.user_name,
                detailAddress: a.address,
                is_default: a.is_default
            });
        } else {
            var d = t.globalData.hwxUserInfo.phone;
            e.setData({
                phone: d
            });
        }
        i.getAllCityData.call(e, function(i) {
            console.log(i), e.setData({
                cityData: i.provinces
            });
            for (var a = e.data.cityData, d = [], n = [], c = [], o = 0; o < a.length; o++) d.push(a[o].name);
            console.log("省份完成");
            for (var r = 0; r < a[0].cities.length; r++) n.push(a[0].cities[r].name);
            console.log("city完成");
            for (var l = 0; l < a[0].cities[0].districts.length; l++) c.push(a[0].cities[0].districts[l].name);
            var h = t.globalData.hwxUserInfo.phone;
            if (s.info) {
                var u = JSON.parse(s.info);
                console.log(u), e.setData({
                    provinces: d,
                    citys: n,
                    districts: c
                });
            } else e.setData({
                provinces: d,
                citys: n,
                districts: c,
                province: a[0].name,
                province_id: a[0].id,
                city: a[0].cities[0].name,
                city_id: a[0].cities[0].id,
                district: a[0].cities[0].districts[0].name,
                district_id: a[0].cities[0].districts[0].id,
                phone: h
            });
            e.pcdAnimation = wx.createAnimation({
                duration: 300
            }), console.log("初始化完成");
        }, function(i) {});
    }
});