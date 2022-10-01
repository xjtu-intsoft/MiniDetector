var t = getApp(), i = require("../../../comm/script/fetch");

Page({
    data: {
        imgData: "",
        img_id: "",
        sendText: "发送",
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
        disabled: !1,
        isModelShow: !1,
        reserve_time: "",
        reserve_time2: "",
        timeValues: [ 0, 0 ],
        timeval: [ 0, 0 ],
        orderTime: "",
        model_name: "",
        model_color: "",
        model_price: "",
        official_price: "",
        totalPrice: "",
        isFullSucreen: !!t.globalData.isFullSucreen,
        tipsShow: !1,
        wenXinTiShi: [],
        repairType: 1,
        fault_name: "",
        fault_desc: "",
        rp_id: "",
        selectedWay: 0,
        showModal: !1,
        locationShopName: null,
        locationShop: null,
        couponData: null,
        couponIndex: -1,
        nickname: "",
        tel: "",
        imgcode: "",
        smscode: "",
        address: "",
        imei: "",
        remark: "",
        error: "",
        isLogin: !0,
        showReg: !1,
        initNickname: "",
        initTel: "",
        isDisabled: !0,
        initAddress: "",
        couponCount: 0,
        tmp_province: null,
        tmp_province_id: null,
        tmp_city: null,
        tmp_city_id: null,
        tmp_citys: null,
        tmp_district: null,
        tmp_district_id: null,
        tmp_districts: null,
        tmp_values: null,
        tmp_value: null,
        tmp_orderTime: null,
        tmp_reserve_time: null,
        tmp_reserve_time2: null,
        isShowDetail: !1,
        cityCouponPrice: 0,
        visit_fee: 0,
        night_fee: 0,
        holidayFee: "",
        holidayName: "",
        getShop: !0
    },
    onLoad: function(t) {
        this.getImgCode(), this.getCityData(), this.getReminder(), this.timeAnimation = wx.createAnimation({
            duration: 300
        });
        var i = JSON.parse(t.data);
        console.log("data===="), console.log(i), this.setData({
            model_name: i.model_name,
            model_color: i.color_name,
            model_price: i.price,
            official_price: i.official_price,
            totalPrice: i.price,
            repairType: i.type,
            fault_name: i.fault_name,
            fault_desc: i.fault_desc,
            rp_id: i.repair_id,
            holidayFee: i.holiday_manual_fee,
            holidayName: i.holiday_name
        }), this.imeiAnimation = wx.createAnimation({
            duration: 300
        });
    },
    onShow: function() {
        var i = t.globalData.hwxUserInfo.phone;
        t.globalData.hwxUserInfo.token;
        console.log("userPhone====="), console.log(i), this.data.tel ? this.data.tel == i ? this.setData({
            showReg: !1
        }) : this.setData({
            showReg: !0
        }) : this.getDefaultAddress(), this.data.couponData && this.setData({
            totalPrice: this.data.couponData.payprice
        }), this.data.getShop && this.getCityPrice();
    },
    getDefaultAddress: function() {
        var e = this, a = t.globalData.hwxUserInfo.token;
        i.getDefaultAddress.call(e, a, function(t) {
            console.log("data=="), console.log(t), e.setData({
                city_id: t.city_id,
                province: t.province_name,
                province_id: t.province_id,
                city: t.city_name,
                district: t.district_name,
                district_id: t.district_id,
                address: t.address,
                initAddress: t.address,
                initNickname: t.user_name,
                nickname: t.user_name,
                initTel: t.mobile,
                tel: t.mobile
            }), e.getReserveTime(e.data.city_id, e.data.district_id), e.getRepairType(e.data.district_id, e.data.rp_id);
        }, function(t) {
            wx.hideLoading(), e.setData({
                isDisabled: !1
            });
        });
    },
    getPhoneNumber: function(e) {
        var a = encodeURIComponent(e.detail.iv), s = encodeURIComponent(e.detail.encryptedData), o = this, r = wx.getStorageSync("CODE");
        "undefined" != s ? i.getWxLogin(encodeURIComponent(r), s, a, function(i) {
            console.log(i), t.setHwxUserInfo(i.token, i.phone_number), o.setData({
                isLogin: !0,
                showReg: !1
            }), o.getDefaultAddress();
        }, function(t) {
            console.log("err6666"), console.log(t), wx.showToast({
                title: "微信授权登录失败",
                icon: "none",
                duration: 1e3,
                complete: function() {
                    wx.navigateTo({
                        url: "../../personal/login/login"
                    });
                }
            });
        }) : wx.navigateTo({
            url: "../../personal/login/login"
        });
    },
    getImgCode: function() {
        var t = this;
        i.getImgCode.call(t, t.data.img_id, function(i) {
            t.setData({
                imgData: i.data,
                img_id: i.id
            });
        });
    },
    popUp: function() {
        this.pcdAnimation.translateY(0).step(), this.setData({
            pcdAnimation: this.pcdAnimation.export(),
            condition: !0
        });
    },
    popDown: function(t) {
        var i = 1 == t.currentTarget.dataset.bool;
        if (this.pcdAnimation.translateY("100%").step(), i) {
            if (0 == this.data.value[0] && 0 == this.data.value[1] && 0 == this.data.value[2]) {
                for (var e = this.data.value, a = [], s = [], o = this.data.cityData, r = 0; r < o[e[0]].cities.length; r++) a.push(o[e[0]].cities[r].name);
                for (var n = 0; n < o[e[0]].cities[0].districts.length; n++) s.push(o[e[0]].cities[0].districts[n].name);
                this.setData({
                    province: this.data.provinces[e[0]],
                    province_id: o[e[0]].id,
                    city: o[e[0]].cities[0].name,
                    city_id: o[e[0]].cities[0].id,
                    citys: a,
                    district: o[e[0]].cities[0].districts[0].name,
                    district_id: o[e[0]].cities[0].districts[0].id,
                    districts: s,
                    values: e,
                    value: [ e[0], 0, 0 ],
                    reserve_time: "",
                    reserve_time2: "",
                    couponData: null
                });
            } else this.setData({
                province: this.data.tmp_province,
                province_id: this.data.tmp_province_id,
                city: this.data.tmp_city,
                city_id: this.data.tmp_city_id,
                district: this.data.tmp_district,
                district_id: this.data.tmp_district_id,
                reserve_time: "",
                reserve_time2: "",
                couponData: null,
                couponIndex: -1
            });
            this.getReserveTime(this.data.city_id, this.data.district_id), this.getRepairType();
        } else this.data.province || this.setData({
            province: "",
            province_id: "",
            city: "",
            city_id: "",
            district: "",
            district_id: ""
        });
        this.setData({
            pcdAnimation: this.pcdAnimation.export(),
            condition: !1
        });
    },
    bindChange: function(t) {
        var i = t.detail.value, e = this.data.values, a = this.data.cityData;
        if (i[0] == e[0]) if (i[1] == e[1]) i[2] == e[2] || this.setData({
            tmp_province: this.data.provinces[i[0]],
            tmp_province_id: a[i[0]].id,
            tmp_city: this.data.citys[i[1]],
            tmp_city_id: a[i[0]].cities[i[1]].id,
            tmp_district: this.data.districts[i[2]],
            tmp_district_id: a[i[0]].cities[i[1]].districts[i[2]].id,
            values: i
        }); else {
            for (var s = [], o = 0; o < a[i[0]].cities[i[1]].districts.length; o++) s.push(a[i[0]].cities[i[1]].districts[o].name);
            this.setData({
                tmp_province: this.data.provinces[i[0]],
                tmp_province_id: a[i[0]].id,
                tmp_city: this.data.citys[i[1]],
                tmp_city_id: a[i[0]].cities[i[1]].id,
                tmp_district: a[i[0]].cities[i[1]].districts[0].name,
                tmp_district_id: a[i[0]].cities[i[1]].districts[0].id,
                districts: s,
                values: i,
                value: [ i[0], i[1], 0 ]
            });
        } else {
            for (var r = [], n = [], d = 0; d < a[i[0]].cities.length; d++) r.push(a[i[0]].cities[d].name);
            for (var c = 0; c < a[i[0]].cities[0].districts.length; c++) n.push(a[i[0]].cities[0].districts[c].name);
            this.setData({
                tmp_province: this.data.provinces[i[0]],
                tmp_province_id: a[i[0]].id,
                tmp_city: a[i[0]].cities[0].name,
                tmp_city_id: a[i[0]].cities[0].id,
                citys: r,
                tmp_district: a[i[0]].cities[0].districts[0].name,
                tmp_district_id: a[i[0]].cities[0].districts[0].id,
                districts: n,
                values: i,
                value: [ i[0], 0, 0 ]
            });
        }
    },
    showDetail: function() {
        this.setData({
            condition: !this.data.condition,
            isShowDetail: !this.data.isShowDetail
        });
    },
    getCityData: function() {
        var t = this;
        i.getAllCityData.call(t, function(i) {
            t.setData({
                cityData: i.provinces
            });
            for (var e = t.data.cityData, a = [], s = [], o = [], r = 0; r < e.length; r++) a.push(e[r].name);
            for (var n = 0; n < e[0].cities.length; n++) s.push(e[0].cities[n].name);
            for (var d = 0; d < e[0].cities[0].districts.length; d++) o.push(e[0].cities[0].districts[d].name);
            t.setData({
                provinces: a,
                citys: s,
                districts: o
            }), t.pcdAnimation = wx.createAnimation({
                duration: 300
            });
        }, function(t) {});
    },
    bindCheckMobile: function(t) {
        return console.log(t), !!t.match(/^1[3-9][0-9]\d{8}$/) || (wx.showToast({
            title: "手机号格式不正确",
            icon: "none"
        }), !1);
    },
    sendCode: function(t) {
        var e = this;
        e.bindCheckMobile(e.data.tel) && (this.data.disabled || (e.setData({
            disabled: !0,
            loginBackgroundColor: "#FF7A00"
        }), i.getVerifyCode.call(e, e.data.imgcode, e.data.img_id, e.data.tel, e.data.sms_id, function(t) {
            e.countdown(e), wx.showToast({
                title: "已发送",
                icon: "none"
            });
        }, function(t) {
            e.getImgCode(), e.setData({
                disabled: !1
            }), wx.showToast({
                title: t,
                icon: "none"
            });
        })));
    },
    countdown: function() {
        var t = this, i = 60, e = setInterval(function() {
            if (0 == i) return t.setData({
                sendText: "再次获取",
                disabled: !1
            }), clearInterval(e);
            t.setData({
                sendText: i + "s后获取"
            }), i--;
        }, 1e3);
    },
    timeUp: function() {
        this.data.city_id || this.data.district_id ? (this.timeAnimation.translateY(0).step(), 
        this.setData({
            timeAnimation: this.timeAnimation.export(),
            condition: !0
        })) : wx.showToast({
            title: "请先添加地址",
            icon: "none",
            duration: 2e3,
            mask: !0
        });
    },
    timeChange: function(t) {
        var i = t.detail.value;
        console.log(i);
        var e = this.data.timeValues, a = [ i[0], i[1] != e[1] && i[0] == e[0] ? i[1] : 0 ], s = this.data.dateList[a[0]].date + " " + this.data.dateList[a[0]].periods[a[1]].start_time + "~" + this.data.dateList[a[0]].periods[a[1]].next_time;
        this.setData({
            periods: this.data.dateList[i[0]].periods,
            timeval: a,
            timeValues: i,
            tmp_orderTime: s,
            tmp_reserve_time: this.data.dateList[a[0]].periods[a[1]].start_datetime,
            tmp_reserve_time2: this.data.dateList[a[0]].periods[a[1]].next_datetime
        });
    },
    popDownTime: function(t) {
        var i = !1;
        if (i = !t || 1 == t.currentTarget.dataset.bool, this.timeAnimation.translateY("100%").step(), 
        i) {
            if (0 == this.data.timeval[0] && 0 == this.data.timeval[1]) {
                var e = this.data.dateList[0].date + " " + this.data.dateList[0].periods[0].start_time + "~" + this.data.dateList[0].periods[0].next_time;
                this.setData({
                    periods: this.data.dateList[0].periods,
                    timeval: [ 0, 0 ],
                    timeValues: [ 0, 0 ],
                    orderTime: e,
                    reserve_time: this.data.dateList[0].periods[0].start_datetime,
                    reserve_time2: this.data.dateList[0].periods[0].next_datetime
                });
            } else this.setData({
                orderTime: this.data.tmp_orderTime,
                reserve_time: this.data.tmp_reserve_time,
                reserve_time2: this.data.tmp_reserve_time2,
                couponData: null,
                couponIndex: -1
            });
            this.getCityPrice();
        } else this.data.reserve_time || this.setData({
            orderTime: ""
        });
        this.setData({
            timeAnimation: this.timeAnimation.export(),
            condition: !1
        });
    },
    getCityPrice: function() {
        var t = {};
        t.city_id = this.data.city_id, t.rp_id = this.data.rp_id, t.is_warrantable = 0, 
        t.category = this.data.repairType, t.district_id = this.data.district_id, t.reserve_time = this.data.reserve_time, 
        t.reserve_time2 = this.data.reserve_time2, t.rp_id2 = "", 1 != this.data.repairType && (t.city_id = this.data.locationShop ? this.data.locationShop.city : "", 
        t.district_id = this.data.locationShop ? this.data.locationShop.district : "");
        var e = this;
        i.getCityPrice.call(e, t, function(i) {
            e.setData({
                totalPrice: i.payprice,
                cityCouponPrice: i.totalPrice - i.payprice,
                visit_fee: i.visit_fee,
                night_fee: i.night_fee
            }), e.getCouponUseable(t.rp_id, t.city_id, i.payprice);
        }, function(t) {});
    },
    getCouponUseable: function(e, a, s) {
        var o = t.globalData.hwxUserInfo.token, r = this;
        i.getCouponUse.call(r, o, e, a, s, function(t) {
            r.setData({
                couponCount: t.count
            });
        }, function(t) {
            console.log(t);
        });
    },
    getReserveTime: function(t, e) {
        var a = this;
        console.log(12321321321);
        var s = {
            city: t,
            district: e
        };
        i.getRepairTime.call(a, s, function(t) {
            a.setData({
                dateList: t,
                periods: t[0].periods
            }), a.popDownTime();
        }, function(t) {
            wx.showToast({
                title: t,
                icon: "none",
                duration: 1e3
            });
        });
    },
    tipsOpen: function() {
        this.setData({
            tipsShow: !this.data.tipsShow
        });
    },
    getReminder: function() {
        var t = this;
        i.getReminders.call(t, function(i) {
            t.setData({
                wenXinTiShi: i.content
            });
        }, function(t) {});
    },
    toUserAgreement: function() {
        wx.navigateTo({
            url: "../../repair/userAgreementWeb/userAgreementWeb"
        });
    },
    selectWay: function(t) {
        console.log(111);
        var i = t.currentTarget.dataset.index;
        this.setData({
            selectedWay: i,
            repairType: i,
            showModal: !1
        });
    },
    closeModel: function() {
        this.setData({
            showModal: !1
        });
    },
    getRepairType: function() {
        var t = this;
        i.getWayList.call(t, t.data.city_id, t.data.rp_id, function(i) {
            i.forEach(function(i) {
                if (i.id == t.data.repairType && !i.active) return t.setData({
                    showModal: !0
                });
            });
        }, function(t) {});
    },
    selectLocation: function() {
        this.setData({
            getShop: !1
        }), wx.navigateTo({
            url: "../locationshop/locationshop"
        });
    },
    imeiUp: function() {
        this.imeiAnimation.translateY(0).step(), this.setData({
            imeiAnimation: this.imeiAnimation.export(),
            isModelShow: !0,
            condition: !0
        });
    },
    IMEIpopDown: function() {
        this.imeiAnimation.translateY("100%").step(), this.setData({
            imeiAnimation: this.imeiAnimation.export(),
            condition: !1
        });
    },
    selectCoupon: function() {
        if (1 == this.data.repairType) {
            if (!this.data.city) return wx.showToast({
                title: "请选择城市",
                icon: "none"
            });
            if (!this.data.reserve_time) return wx.showToast({
                title: "请选择上门时间",
                icon: "none"
            });
        } else if ((3 == this.data.repairType || 2 == this.data.repairType) && !this.data.locationShopName) return wx.showToast({
            title: "请选择门店",
            icon: "none"
        });
        if (this.data.couponCount) {
            var t = {
                city: 1 == this.data.repairType ? this.data.city_id : this.data.locationShop.city,
                rp_id: this.data.rp_id,
                district: 1 == this.data.repairType ? this.data.district_id : this.data.locationShop.district,
                is_warrantable: 0,
                category: this.data.repairType,
                reserve_time: this.data.reserve_time,
                reserve_time2: this.data.reserve_time2
            };
            this.setData({
                getShop: !1
            }), wx.navigateTo({
                url: "../coupon/coupon?price=" + this.data.model_price + "&info=" + JSON.stringify(t) + "&index=" + this.data.couponIndex
            });
        }
    },
    setNickname: function(t) {
        this.setData({
            nickname: t.detail.value
        });
    },
    settel: function(t) {
        var i = !1;
        this.data.initTel != t.detail.value && (i = !0), this.setData({
            tel: t.detail.value,
            showReg: i
        });
    },
    setImgcode: function(t) {
        this.setData({
            imgcode: t.detail.value
        });
    },
    setSmscode: function(t) {
        this.setData({
            smscode: t.detail.value
        });
    },
    setAddress: function(t) {
        this.setData({
            address: t.detail.value
        });
    },
    setIMEI: function(t) {
        this.setData({
            imei: t.detail.value
        });
    },
    setRemark: function(t) {
        this.setData({
            remark: t.detail.value
        });
    },
    errorToast: function(t) {
        wx.showToast({
            title: t,
            icon: "none"
        });
    },
    commitOrder: function() {
        if (this.setData({
            error: ""
        }), !this.data.nickname) return this.setData({
            error: "nickname"
        }), this.errorToast("请输入昵称");
        if (!this.data.tel) return this.setData({
            error: "tel"
        }), this.errorToast("请输入联系电话");
        if (!(this.data.imgcode || this.data.isLogin && !this.data.showReg)) return this.setData({
            error: "imgcode"
        }), this.errorToast("请输入图形验证码");
        if (!(this.data.smscode || this.data.isLogin && !this.data.showReg)) return this.setData({
            error: "smscode"
        }), this.errorToast("请输入短信验证码");
        if (!this.data.province) return this.setData({
            error: "province"
        }), this.errorToast("请选择地址");
        if (!this.data.address) return this.setData({
            error: "address"
        }), this.errorToast("请输入详细地址");
        if (this.data.reserve_time) {
            if (this.data.locationShop) {
                if (!this.data.imei && 2 == this.data.repairType) return this.setData({
                    error: "imei"
                }), this.errorToast("请输入IMEI码");
            } else if (3 == this.data.repairType || 2 == this.data.repairType) return this.setData({
                error: "locationShopName"
            }), this.errorToast("请选择门店");
        } else if (1 == this.data.repairType) return this.setData({
            error: "reserve_time"
        }), this.errorToast("请选择预约时间");
        wx.showLoading({
            mask: !0
        });
        var e = {
            realname: this.data.nickname,
            phonenum: this.data.tel,
            yzm: this.data.smscode,
            address: this.data.address,
            remark: this.data.remark,
            weixiucenter: this.data.locationShop ? this.data.locationShop.id : "",
            type: this.data.repairType,
            city: this.data.city_id,
            distrcit: this.data.district_id,
            plid: this.data.rp_id,
            couponid: "",
            inputcouponcode: this.data.couponData ? this.data.couponData.coupon_code : "",
            reservetime: this.data.reserve_time,
            reservetime2: this.data.reserve_time2,
            imei: this.data.imei
        };
        console.log("data==="), console.log(e);
        var a = t.globalData.hwxUserInfo.token;
        i.appleOrder(a, e, function(t) {
            console.log("res===="), console.log(t);
            var i = {
                order_sn: t.order_sn,
                type: t.category_type,
                order_id: t.oid
            };
            wx.hideLoading(), wx.navigateTo({
                url: "../ordersuccess/ordersuccess?data=" + JSON.stringify(i)
            });
        }, function(t) {
            wx.hideLoading(), wx.showToast({
                title: t,
                icon: "none",
                duration: 1500
            });
        });
    },
    goPage: function(t) {
        1 == t.currentTarget.dataset.type ? wx.navigateTo({
            url: "../commonproblem/commonproblem"
        }) : 2 == t.currentTarget.dataset.type ? wx.navigateTo({
            url: "../repairwarranty/repairwarranty"
        }) : 3 == t.currentTarget.dataset.type && wx.navigateTo({
            url: "../paytype/paytype"
        });
    }
});