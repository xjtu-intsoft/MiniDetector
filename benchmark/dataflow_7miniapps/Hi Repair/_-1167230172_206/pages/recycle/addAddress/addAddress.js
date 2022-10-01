require("../../../comm/script/config");

var i = require("../../../comm/script/fetch"), t = (require("../../../util/util"), 
getApp());

Page({
    data: {
        isFullSucreen: !!t.globalData.isFullSucreen,
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
        }), this.getSaveAddress()) : wx.showToast({
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
    getSaveAddress: function() {
        var s = t.globalData.hwxUserInfo.token, e = {};
        e.id = this.data.id, e.user_name = this.data.name, e.mobile = this.data.phone, e.province_id = this.data.province_id, 
        e.city_id = this.data.city_id, e.district_id = this.data.district_id, e.address = this.data.detailAddress, 
        e.is_default = this.data.is_default_num;
        var a = e;
        a.province_name = this.data.province, a.city_name = this.data.city, a.district_name = this.data.district, 
        i.getSaveAddress(s, e, function(i) {
            wx.showToast({
                title: "保存成功",
                icon: "success",
                duration: 1e3
            }), setTimeout(function() {
                wx.redirectTo({
                    url: "../addressList/addressList"
                });
            }, 1e3);
        }, function(i) {
            wx.showToast({
                title: i,
                icon: "none",
                duration: 1e3
            });
        });
    },
    onLoad: function(s) {
        console.log("onLoad");
        var e = this;
        e.setData({
            origin: s.origin ? s.origin : ""
        });
        var a = t.globalData.hwxUserInfo.phone;
        if (this.setData({
            phone: a
        }), s.info) {
            var d = JSON.parse(s.info);
            e.setData({
                province: d.province_name,
                province_id: d.province_id,
                city: d.city_name,
                city_id: d.city_id,
                district: d.district_name,
                district_id: d.district_id,
                phone: d.mobile,
                id: d.id,
                pcdShow: !0,
                name: d.user_name,
                detailAddress: d.address,
                is_default: d.is_default
            });
        }
        i.getAllCityData.call(e, function(i) {
            console.log(i), e.setData({
                cityData: i.provinces
            });
            for (var t = e.data.cityData, d = [], n = [], c = [], o = 0; o < t.length; o++) d.push(t[o].name);
            console.log("省份完成");
            for (var r = 0; r < t[0].cities.length; r++) n.push(t[0].cities[r].name);
            console.log("city完成");
            for (var l = 0; l < t[0].cities[0].districts.length; l++) c.push(t[0].cities[0].districts[l].name);
            if (s.info) {
                var h = JSON.parse(s.info);
                console.log(h), e.setData({
                    provinces: d,
                    citys: n,
                    districts: c
                });
            } else e.setData({
                provinces: d,
                citys: n,
                districts: c,
                province: t[0].name,
                province_id: t[0].id,
                city: t[0].cities[0].name,
                city_id: t[0].cities[0].id,
                district: t[0].cities[0].districts[0].name,
                district_id: t[0].cities[0].districts[0].id,
                phone: a
            });
            e.pcdAnimation = wx.createAnimation({
                duration: 300
            }), console.log("初始化完成");
        }, function(i) {});
    }
});