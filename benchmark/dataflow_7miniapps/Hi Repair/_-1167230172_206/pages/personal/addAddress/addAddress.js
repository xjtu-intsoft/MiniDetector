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
        var t = i.detail.value, e = this.data.values, s = this.data.cityData;
        if (console.log("val,t-=-=-=-=--=-=-=-=-=-=-=-=-=--=-=-"), console.log(t, e), t[0] == e[0]) if (t[1] == e[1]) {
            if (t[2] != e[2]) return console.log("district no"), void this.setData({
                province: this.data.provinces[t[0]],
                province_id: s[t[0]].id,
                city: this.data.citys[t[1]],
                city_id: s[t[0]].cities[t[1]].id,
                district: this.data.districts[t[2]],
                district_id: s[t[0]].cities[t[1]].districts[t[2]].id,
                values: t
            });
        } else {
            console.log("city no");
            for (var a = [], d = 0; d < s[t[0]].cities[t[1]].districts.length; d++) a.push(s[t[0]].cities[t[1]].districts[d].name);
            this.setData({
                province: this.data.provinces[t[0]],
                province_id: s[t[0]].id,
                city: this.data.citys[t[1]],
                city_id: s[t[0]].cities[t[1]].id,
                district: s[t[0]].cities[t[1]].districts[0].name,
                district_id: s[t[0]].cities[t[1]].districts[0].id,
                districts: a,
                values: t,
                value: [ t[0], t[1], 0 ]
            });
        } else {
            console.log("province no ");
            for (var n = [], c = [], r = 0; r < s[t[0]].cities.length; r++) n.push(s[t[0]].cities[r].name);
            for (var o = 0; o < s[t[0]].cities[0].districts.length; o++) c.push(s[t[0]].cities[0].districts[o].name);
            this.setData({
                province: this.data.provinces[t[0]],
                province_id: s[t[0]].id,
                city: s[t[0]].cities[0].name,
                city_id: s[t[0]].cities[0].id,
                citys: n,
                district: s[t[0]].cities[0].districts[0].name,
                district_id: s[t[0]].cities[0].districts[0].id,
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
        var e = this, s = t.globalData.hwxUserInfo.token, a = {};
        a.id = e.data.id, a.user_name = e.data.name, a.mobile = e.data.phone, a.province_id = e.data.province_id, 
        a.city_id = e.data.city_id, a.district_id = e.data.district_id, a.address = e.data.detailAddress, 
        a.is_default = e.data.is_default_num;
        var d = a;
        d.province_name = e.data.province, d.city_name = e.data.city, d.district_name = e.data.district, 
        i.getSaveAddress(s, a, function(i) {
            wx.showToast({
                title: "保存成功",
                icon: "success",
                duration: 1e3
            }), setTimeout(function() {
                "createOrder" == e.data.origin ? (wx.setStorageSync("address", d), wx.redirectTo({
                    url: "../../repair/createOrder/createOrder?origin=createOrder"
                })) : "addressList" == e.data.origin ? wx.redirectTo({
                    url: "../../personal/addressList/addressList"
                }) : "memory" == e.data.origin && wx.redirectTo({
                    url: "../../repair/memoryUp-createOrder/memoryUp-createOrder"
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
    onLoad: function(e) {
        console.log("onLoad");
        var s = this;
        s.setData({
            origin: e.origin ? e.origin : ""
        });
        var a = t.globalData.hwxUserInfo.phone;
        if (this.setData({
            phone: a
        }), e.info) {
            var d = JSON.parse(e.info);
            s.setData({
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
        i.getAllCityData.call(s, function(i) {
            console.log(i), s.setData({
                cityData: i.provinces
            });
            for (var t = s.data.cityData, a = [], d = [], n = [], c = 0; c < t.length; c++) a.push(t[c].name);
            console.log("省份完成");
            for (var r = 0; r < t[0].cities.length; r++) d.push(t[0].cities[r].name);
            console.log("city完成");
            for (var o = 0; o < t[0].cities[0].districts.length; o++) n.push(t[0].cities[0].districts[o].name);
            if (e.info) {
                var l = JSON.parse(e.info);
                console.log(l), s.setData({
                    provinces: a,
                    citys: d,
                    districts: n
                });
            } else s.setData({
                provinces: a,
                citys: d,
                districts: n,
                province: t[0].name,
                province_id: t[0].id,
                city: t[0].cities[0].name,
                city_id: t[0].cities[0].id,
                district: t[0].cities[0].districts[0].name,
                district_id: t[0].cities[0].districts[0].id
            });
            s.pcdAnimation = wx.createAnimation({
                duration: 300
            }), console.log("初始化完成");
        }, function(i) {});
    }
});