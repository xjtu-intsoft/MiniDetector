var e = require("../../../@babel/runtime/helpers/toConsumableArray"), t = require("../../../comm/script/fetch"), a = (require("../../../comm/script/config"), 
getApp());

Page({
    data: {
        isFullSucreen: !!a.globalData.isFullSucreen,
        isAddress: !1,
        defaultAddress: null,
        dateList: [],
        periods: [],
        isModelShow: !1,
        reserve_time: "",
        reserve_time2: "",
        reserveDateText: "",
        reserveTimeText: "",
        faultPrice: null,
        zengzhiquanCount: 0,
        voucherInfo: null,
        totalPrice: 0,
        payUsername: "",
        payPhone: "",
        orderTypeList: [],
        typeIndex: 0,
        aliName: "",
        aliAccount: "",
        showReseverTime: !1,
        locationAuth: !1,
        nearByRepairCenter: null,
        denyAuth: 2,
        wxCenterCityList: [],
        wxCenterShopList: [],
        showRules: !1,
        SFDateList: [],
        SFTimeList: [],
        SFDateText: "",
        SFTimeText: "",
        SFItem: null,
        isShowShop: !1,
        tempreserve_time: "",
        tempreserve_time2: "",
        tempreserveTimeText: "",
        tempSFTimeText: "",
        tempSFItem: "",
        tempnearByRepairCenter: ""
    },
    onLoad: function(e) {
        var t = e.faultprice ? JSON.parse(e.faultprice) : wx.getStorageSync("FAULTPRICE");
        this.setData({
            faultPrice: t,
            totalPrice: t.recycle_info.price
        }), this.getMyCouponList();
        var a = this;
        this.getSFTime(), e.typeIndex && this.setData({
            typeIndex: e.typeIndex
        }), wx.getSetting({
            success: function(e) {
                0 == e.authSetting["scope.userLocation"] ? (a.setData({
                    locationAuth: !1,
                    denyAuth: 0
                }), console.log(11111111), a.getRepairCenterList({})) : 1 == e.authSetting["scope.userLocation"] && (a.setData({
                    locationAuth: !0,
                    denyAuth: 1
                }), console.log(11111111), a.getWxLocation());
            }
        });
    },
    onShow: function() {
        this.getDefaultAddress(), this.getCoupon(), wx.getStorageSync("VOUCHER").data ? this.setData({
            voucherInfo: wx.getStorageSync("VOUCHER").data,
            totalPrice: Number(this.data.faultPrice.recycle_info.price) + Number(wx.getStorageSync("VOUCHER").data.add_price)
        }) : this.setData({
            voucherInfo: null,
            totalPrice: Number(this.data.faultPrice.recycle_info.price)
        });
    },
    getSFTime: function() {
        var e = this;
        t.getSFTime(function(t) {
            t.forEach(function(e, t) {
                e.active = !1, 0 == t && (e.active = !0), e.periods.forEach(function(e) {
                    e.active = !1;
                });
            }), e.setData({
                SFDateList: t,
                SFTimeList: t[0].periods,
                SFDateText: t[0].date
            });
        });
    },
    getRepairCenter: function(e) {
        var a = this, i = this;
        t.getNearbyRepaircenter(e, function(e) {
            e.nearDistance = "", console.log(e.nearDistance), e.distance < 100 && e.distance ? e.nearDistance = e.distance.toFixed(1) + "m" : e.nearDistance = (e.distance / 1e3).toFixed(1) + "km", 
            i.setData({
                nearByRepairCenter: e
            }), a.getReserveTime(e.city, e.district);
        }, function(e) {
            console.log("err"), console.log(e);
        });
    },
    getWxLocation: function() {
        var e = this;
        wx.getLocation({
            type: "wgs84",
            success: function(t) {
                var a = t.latitude, i = {
                    lng: t.longitude,
                    lat: a
                };
                e.getRepairCenter(i), e.getRepairCenterList(i);
            },
            fail: function(t) {
                console.log(11111), e.getRepairCenterList({});
            }
        });
    },
    getDefaultAddress: function() {
        var e = this, i = a.globalData.hwxUserInfo.token;
        t.getDefaultAddress(i, function(t) {
            var a = wx.getStorageSync("recycleAddress") ? wx.getStorageSync("recycleAddress") : t;
            e.setData({
                isAddress: !0,
                defaultAddress: a
            }), e.getRecycleType(a.city_id, a.district_id);
        }, function(t) {
            e.setData({
                isAddress: !1
            });
        });
    },
    getLocation: function() {
        var e = this;
        wx.authorize({
            scope: "scope.userLocation",
            success: function() {
                e.setData({
                    locationAuth: !0,
                    denyAuth: 1
                }), e.getWxLocation();
            },
            fail: function() {
                e.setData({
                    locationAuth: !1,
                    denyAuth: 0
                });
            }
        });
    },
    getRepairCenterList: function(e) {
        var a = this;
        t.getStoreList(e, function(e) {
            console.log(e), e.forEach(function(e, t) {
                e.active = !1, 0 == t && (e.active = !0), e.weixiucenter.forEach(function(e) {
                    e.active = !1, e.distance < 100 && e.distance ? e.nearDistance = e.distance.toFixed(1) + "m" : e.nearDistance = (e.distance / 1e3).toFixed(1) + "km";
                });
            }), a.setData({
                wxCenterCityList: e,
                wxCenterShopList: e[0].weixiucenter
            }), wx.hideLoading();
        }, function(e) {});
    },
    getReserveTime: function(e, a) {
        var i = this, s = {
            city: e,
            district: a
        };
        t.getRepairTime.call(i, s, function(e) {
            e.forEach(function(e, t) {
                e.active = !1, 0 == t && (e.active = !0), e.periods.forEach(function(e, t) {
                    e.active = !1;
                });
            }), i.setData({
                dateList: e,
                periods: e[0].periods,
                reserveDateText: e[0].date
            });
        }, function(e) {
            wx.showToast({
                title: e,
                icon: "none",
                duration: 1e3
            });
        });
    },
    confirmSelected: function() {
        if (console.log(this.data.typeIndex, this.data.isShowShop), 0 == this.data.typeIndex || 1 == this.data.typeIndex && !this.data.isShowShop) {
            if (!this.data.tempreserve_time) return void wx.showToast({
                title: "请选择预约时间",
                duration: 1500,
                mask: !1
            });
            this.setData({
                reserve_time: this.data.tempreserve_time,
                reserve_time2: this.data.tempreserve_time2,
                reserveTimeText: this.data.tempreserveTimeText,
                showReseverTime: !1
            });
        } else if (1 == this.data.typeIndex && this.data.isShowShop) {
            if (!this.data.tempnearByRepairCenter) return void wx.showToast({
                title: "请选择门店",
                duration: 1500,
                mask: !1
            });
            this.setData({
                nearByRepairCenter: this.data.tempnearByRepairCenter,
                showReseverTime: !1
            }), this.getReserveTime(this.data.tempnearByRepairCenter.city, this.data.tempnearByRepairCenter.district);
        } else if (2 == this.data.typeIndex) {
            if (!this.data.tempSFTimeText) return void wx.showToast({
                title: "请选择预约时间",
                duration: 1500,
                mask: !1
            });
            this.setData({
                SFTimeText: this.data.tempSFTimeText,
                SFItem: this.data.tempSFItem,
                showReseverTime: !1
            });
        }
    },
    changeDate: function(t) {
        var a = t.currentTarget.dataset.index, i = e(this.data.dateList), s = "";
        i.forEach(function(e, t) {
            e.active = !1, t == a && (e.active = !0, s = e.date);
        }), this.setData({
            dateList: i,
            periods: i[a].periods,
            reserveDateText: s
        });
    },
    changeTime: function(t) {
        t.currentTarget.dataset.index;
        var a = e(this.data.periods), i = t.currentTarget.dataset.item;
        e(this.data.dateList).forEach(function(e, t) {
            e.periods.forEach(function(e, t) {
                e.active = !1, e.week == i.week && e.start_time == i.start_time && (e.active = !0);
            });
        }), this.setData({
            periods: a,
            tempreserve_time: i.start_datetime,
            tempreserve_time2: i.next_datetime,
            tempreserveTimeText: this.data.reserveDateText + " " + i.start_time + " - " + i.next_time
        });
    },
    changeSFDate: function(t) {
        var a = t.currentTarget.dataset.index, i = e(this.data.SFDateList), s = "";
        i.forEach(function(e, t) {
            e.active = !1, t == a && (e.active = !0, s = e.date);
        }), this.setData({
            SFDateList: i,
            SFTimeList: i[a].periods,
            SFDateText: s
        });
    },
    changeSFTime: function(t) {
        var a = e(this.data.SFTimeList), i = t.currentTarget.dataset.item;
        e(this.data.SFDateList).forEach(function(e, t) {
            e.periods.forEach(function(e, t) {
                e.active = !1, e.week == i.week && e.start_time == i.start_time && (e.active = !0);
            });
        }), console.log(this.data.SFDateText, i), this.setData({
            SFTimeList: a,
            tempSFTimeText: this.data.SFDateText + " " + i.start_time + " - " + i.stop_time,
            tempSFItem: i
        });
    },
    reseverTimeModal: function(e) {
        var t = e.currentTarget.dataset.isshow, a = e.currentTarget.dataset.showshop;
        console.log(e.currentTarget), 0 == t && this.setData({
            showRules: !1
        }), console.log(a, this.data.typeIndex, !!a), this.setData({
            showReseverTime: 0 != t,
            isShowShop: !!a
        });
    },
    luruAli: function() {
        this.setData({
            aliName: this.data.defaultAddress.user_name,
            aliAccount: this.data.defaultAddress.mobile
        });
    },
    inputChange: function(e) {
        "name" == e.currentTarget.dataset.type ? this.setData({
            aliName: e.detail.value
        }) : this.setData({
            aliAccount: e.detail.value
        });
    },
    changeCity: function(t) {
        var a = t.currentTarget.dataset.index, i = e(this.data.wxCenterCityList);
        i.forEach(function(e, t) {
            e.active = !1, t == a && (e.active = !0);
        }), this.setData({
            wxCenterCityList: i,
            wxCenterShopList: i[a].weixiucenter
        });
    },
    selectShop: function(t) {
        var a = t.currentTarget.dataset.index, i = t.currentTarget.dataset.item;
        console.log(i);
        var s = e(this.data.wxCenterCityList), r = e(this.data.wxCenterShopList);
        r[a].active = !0, s.forEach(function(e) {
            e.weixiucenter.forEach(function(e) {
                e.active = !1, e.id == i.id && (e.active = !0);
            });
        }), this.setData({
            wxCenterCityList: s,
            wxCenterShopList: r,
            tempnearByRepairCenter: i
        });
    },
    showYfsm: function() {
        this.setData({
            showReseverTime: !0,
            showRules: !0
        });
    },
    goAddress: function() {
        this.data.isAddress ? wx.navigateTo({
            url: "../addressList/addressList?typeIndex=" + this.data.typeIndex
        }) : wx.navigateTo({
            url: "../addAddress/addAddress"
        });
    },
    rePrice: function() {
        wx.redirectTo({
            url: "../faultprice/faultprice?mid=" + this.data.faultPrice.model_info.id + "&name=" + this.data.faultPrice.model_info.name
        });
    },
    getMyCouponList: function() {
        wx.setStorageSync("VOUCHER", ""), this.getCoupon();
    },
    getCoupon: function() {
        var e = this, i = a.globalData.hwxUserInfo.token, s = this, r = {
            evaluated_price: this.data.faultPrice.recycle_info.price ? this.data.faultPrice.recycle_info.price : 0
        };
        t.getRecycleVoucher(i, r, function(t) {
            var a = 0;
            t.list.forEach(function(e) {
                1 == e.useable && a++;
            }), s.setData({
                zengzhiquanCount: a
            }), t.list.forEach(function(e, t) {
                e.index = t;
            }), wx.getStorageSync("VOUCHER").data || 0 == wx.getStorageSync("VOUCHER").use || 1 == t.list[0].useable && s.setData({
                voucherInfo: 1 == t.list[0].useable ? t.list[0] : null,
                totalPrice: Number(e.data.faultPrice.recycle_info.price) + Number(t.list[0].add_price)
            });
        }, function(e) {});
    },
    goZengzhiquan: function() {
        if (this.data.zengzhiquanCount) {
            var e = this.data.voucherInfo ? this.data.voucherInfo.index : null;
            wx.navigateTo({
                url: "../voucher/voucher?index=" + e + "&price=" + this.data.faultPrice.recycle_info.price
            });
        } else wx.showToast({
            title: "暂无券可用",
            icon: "none",
            duration: 1500,
            mask: !0
        });
    },
    userNameInput: function(e) {
        this.setData({
            payUsername: e.detail.value
        });
    },
    phoneNameInput: function(e) {
        this.setData({
            payPhone: e.detail.value
        });
    },
    changeOrderType: function(e) {
        var t = e.currentTarget.dataset.index;
        this.setData({
            typeIndex: t
        });
    },
    getRecycleType: function(e, i) {
        var s = this, r = a.globalData.hwxUserInfo.token, n = {
            city_id: e
        };
        t.getRecycleType(r, n, function(t) {
            s.setData({
                orderTypeList: t
            }), t[0].active && s.getReserveTime(e, i);
        });
    },
    goUserXieyi: function() {
        wx.navigateTo({
            url: "../../repair/recycleuserAgreementWeb/recycleuserAgreementWeb"
        });
    },
    commitOrder: function() {
        var e = this;
        if (!this.data.orderTypeList[this.data.typeIndex].active) return wx.showToast({
            title: "暂不支持该维修方式",
            icon: "none",
            duration: 1500,
            mask: !0
        });
        if (0 == this.data.typeIndex) {
            if (!this.data.defaultAddress) return void wx.showToast({
                title: "请选择上门地址",
                icon: "none",
                duration: 1500,
                mask: !0
            });
            if (!this.data.reserveTimeText) return void wx.showToast({
                title: "请选择预约时间",
                icon: "none",
                duration: 1500,
                mask: !0
            });
        } else if (1 == this.data.typeIndex) {
            if (!this.data.nearByRepairCenter) return void wx.showToast({
                title: "请选择维修中心",
                icon: "none",
                duration: 1500,
                mask: !0
            });
            if (!this.data.reserveTimeText) return void wx.showToast({
                title: "请选择到店时间",
                icon: "none",
                duration: 1500,
                mask: !0
            });
        } else {
            if (!this.data.defaultAddress) return void wx.showToast({
                title: "请选择取件地址",
                icon: "none",
                duration: 1500,
                mask: !0
            });
            if (!this.data.SFTimeText) return void wx.showToast({
                title: "请选择预约时间",
                icon: "none",
                duration: 1500,
                mask: !0
            });
        }
        if (this.data.aliName) if (this.data.aliAccount) {
            wx.showLoading({
                mask: !0
            });
            var i = [], s = this.data.faultPrice.model_info.id, r = this.data.faultPrice.recycle_info.price, n = this.data.faultPrice.recycle_info.recycler_id, o = this.data.defaultAddress.user_name, d = this.data.defaultAddress.mobile, c = "", u = "", h = "", l = this.data.aliName, f = this.data.aliAccount, m = "", p = this.data.typeIndex, x = [ {
                coupon_code: this.data.voucherInfo ? this.data.voucherInfo.code : ""
            } ], g = "";
            this.data.faultPrice.model_fault_attrs.forEach(function(e) {
                i.push(e.descr_id);
            }), 1 == this.data.typeIndex ? (c = this.data.nearByRepairCenter.city, u = this.data.nearByRepairCenter.district, 
            h = this.data.nearByRepairCenter.address, g = this.data.nearByRepairCenter.id) : (c = this.data.defaultAddress.city_id, 
            u = this.data.defaultAddress.district_id, h = this.data.defaultAddress.address), 
            m = 2 == this.data.typeIndex ? this.data.SFItem.submission_time : this.data.reserveTimeText;
            var y = {
                model_attrs: i,
                model_id: s,
                model_price: r,
                recycler_id: n,
                user_name: o,
                user_phone: d,
                city: c,
                district: u,
                address: h,
                payment_method: "1",
                payment_username: l,
                payment_account: f,
                reserved_at: m,
                project_type: p,
                type: 1,
                coupons: x,
                weixiucenter_id: g
            }, v = a.globalData.hwxUserInfo.token;
            t.createRecycleOrder(v, y, function(t) {
                wx.showToast({
                    title: "创建成功",
                    duration: 1500,
                    mask: !0
                });
                var a = {
                    time: 2 == e.data.typeIndex ? e.data.SFTimeText : e.data.reserveTimeText,
                    user_name: o,
                    user_phone: d,
                    user_address: e.data.defaultAddress.province_name + e.data.defaultAddress.city_name + e.data.defaultAddress.district_name + e.data.defaultAddress.address,
                    address: h,
                    lng: 1 == e.data.typeIndex ? e.data.nearByRepairCenter.lng : e.data.defaultAddress.lng,
                    lat: 1 == e.data.typeIndex ? e.data.nearByRepairCenter.lat : e.data.defaultAddress.lat,
                    shopName: 1 == e.data.typeIndex ? e.data.nearByRepairCenter.name : "",
                    tel: 1 == e.data.typeIndex ? e.data.nearByRepairCenter.tel : "",
                    totalPrice: e.data.totalPrice,
                    lx: e.data.typeIndex
                };
                setTimeout(function() {
                    wx.redirectTo({
                        url: "../ordersuccess/ordersuccess?order_sn=" + t.order_sn + "&type=" + t.category_type + "&order_id=" + t.orders_data[0].order_id + "&info=" + JSON.stringify(a)
                    }), wx.hideToast(), wx.hideLoading();
                }, 1e3);
            }, function(e) {
                wx.hideLoading(), wx.showToast({
                    title: e,
                    icon: "none",
                    image: "",
                    duration: 1500,
                    mask: !0
                });
            });
        } else wx.showToast({
            title: "请输入收款方式",
            icon: "none",
            duration: 1500,
            mask: !0
        }); else wx.showToast({
            title: "请输入收款人",
            icon: "none",
            duration: 1500,
            mask: !0
        });
    }
});