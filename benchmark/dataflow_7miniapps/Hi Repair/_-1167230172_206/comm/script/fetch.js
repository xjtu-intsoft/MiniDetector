var e = require("./config.js"), t = require("../../util/util"), i = require("../../util/md5");

function o(o, n, a, r, s, c, p, u) {
    var d = {}, l = wx.getStorageSync("weixinadinfoaid"), g = getCurrentPages(), f = null;
    g.length && (f = g[g.length - 1]);
    var L = f.route;
    if (console.log(L), d = l ? {
        "x-hi-marketing-user-actions": JSON.stringify(l),
        "X-HIWEIXIU-USER-AGENT": "Miniapp/" + getApp().globalData.version,
        "X-HIWEIXIU-PAGE": encodeURIComponent(L),
        cookie: wx.getStorageSync("Set-Cookie"),
        "Access-token": wx.getStorageSync("kCurrentUser").token
    } : {
        "X-HIWEIXIU-USER-AGENT": "Miniapp/" + getApp().globalData.version,
        "X-HIWEIXIU-PAGE": encodeURIComponent(L),
        cookie: wx.getStorageSync("Set-Cookie"),
        "Access-token": wx.getStorageSync("kCurrentUser").token
    }, c && !t.isEmpty(n)) {
        n.clientType = e.clientType, n.version = e.version;
        var y = Object.keys(n), _ = "";
        y.forEach(function(e, t, i) {
            _ += "".concat(e).concat(n[e]);
        }), _ = i.hexMD5(_);
        var m = i.hexMD5(_ + e.recycleKey);
        n.sign = m;
    } else console.log(e);
    wx.request({
        url: o,
        data: n,
        method: a,
        header: d,
        success: function(t) {
            if (u && r(t.data), 0 == t.data.status && r(t.data.result), t.data.code == e.apiCode.success) "" != t.header["Set-Cookie"] && t.header["Set-Cookie"] && wx.setStorageSync("Set-Cookie", t.header["Set-Cookie"]), 
            p ? "function" == typeof r && r(t.data) : "function" == typeof r && r(t.data.data ? t.data.data : t.data); else if (t.data.code == e.apiCode.unauthorized) "function" == typeof s && s(t.data.mes), 
            wx.navigateTo({
                url: "/pages/personal/chooseLogin/chooseLogin",
                success: function(e) {},
                fail: function() {},
                complete: function() {}
            }); else if ("function" == typeof s) {
                if (t.data.mes) return void s(t.data.mes);
                if (t.data.message) return void s(t.data.message);
                s(t.data.msg);
            }
        },
        fail: function(t) {
            "function" == typeof s && s(e.strings.requestFail), t.data.code == e.apiCode.unauthorized && ("function" == typeof s && s(t.data.mes), 
            wx.navigateTo({
                url: "/pages/personal/chooseLogin/chooseLogin",
                success: function(e) {},
                fail: function() {},
                complete: function() {}
            }));
        },
        complete: function() {}
    });
}

module.exports = {
    request: o,
    postWeixinAid: function(t, i, n) {
        var a = t;
        o(e.apiList.weixinAid, a, "POST", i, n);
    },
    getNowtime: function(t, i) {
        o(e.apiList.nowTime, {}, "GET", t, i);
    },
    getVerifyCode: function(t, i, n, a, r, s) {
        var c = {
            img_code: t,
            img_id: i,
            phone_number: n,
            sms_id: a
        };
        o(e.apiList.sendCode, c, "POST", r, s);
    },
    doLoginWithPhone: function(t, i, n, a) {
        var r = {
            phone: t,
            verification_code: i
        };
        o(e.apiList.doLogin, r, "POST", n, a);
    },
    getBrands: function(t, i) {
        o(e.apiList.brandList, {}, "POST", t, i);
    },
    getDevices: function(t, i, n) {
        t = t, o(e.apiList.mouldList, t, "POST", i, n);
    },
    getBannerList: function(t, i) {
        wx.getStorageSync("kCurrentUser"), o(e.apiList.homeBanner, {}, "GET", t, i);
    },
    getRepairCenter: function(t, i, n, a) {
        var r = {
            lat: t,
            lng: i
        };
        o(e.apiList.center, r, "POST", n, a);
    },
    getRepairMsg: function(t, i, n, a, r, s, c, p, u, d) {
        var l = {
            moudleid: t,
            faulttype: i,
            brandid: n,
            colorid: a,
            productid: r,
            type: s,
            name: c,
            repairprice_colorid: p
        };
        o(e.apiList.repairMsg, l, "GET", u, d);
    },
    getMouldMine: function(t, i, n) {
        t = t, o(e.apiList.mineMould, t, "GET", i, n);
    },
    getHotMould: function(t, i, n, a) {
        var r = {
            mould_name: i,
            brands: t
        };
        o(e.apiList.hotMould, r, "GET", n, a);
    },
    getactivityInfo: function(t, i, n) {
        var a = {
            site: "miniprogram",
            position: t
        };
        o(e.apiList.activityInfo, a, "GET", i, n);
    },
    getMouldDetail: function(t, i, n) {
        t = t, o(e.apiList.mouldDetail, t, "GET", i, n);
    },
    getMouldAttr: function(t, i, n) {
        t = t, o(e.apiList.mouldAttr, t, "POST", i, n);
    },
    getIsLogin: function(t, i, n) {
        var a = {
            token: t
        };
        o(e.apiList.isLogin, a, "GET", i, n);
    },
    getWxLogin: function(t, i, n, a, r) {
        var s = {
            code: t,
            encryptedData: i,
            iv: n
        };
        o(e.apiList.wxLogin, s, "POST", a, r);
    },
    getWayList: function(t, i, n, a) {
        var r = {
            city_id: t,
            rp_id: i
        };
        o(e.apiList.wayList, r, "GET", n, a);
    },
    getRepairTime: function(t, i, n) {
        o(e.apiList.repairTime, t, "POST", i, n);
    },
    getCenterList: function(t, i) {
        o(e.apiList.centerList, {}, "GET", t, i);
    },
    getCouponUseable: function(t, i, n, a, r, s) {
        var c = {
            rp_id: i,
            city: n,
            useable_status: 0,
            price: a
        };
        o(e.apiList.couponUseable + "?token=" + t, c, "POST", r, s);
    },
    getUseCoupon: function(t, i, n, a) {
        var r = {
            coupon_code: i.coupon_code,
            city: i.city,
            district: i.district,
            plan_id: i.plan_id,
            is_warrantable: i.is_warrantable,
            category: i.category,
            reserve_time: i.reserve_time,
            reserve_time2: i.reserve_time2
        };
        i.plan_id2 && (r.plan_id2 = i.plan_id2), o(getApp().globalData.ref ? e.apiList.useCoupon + "?ref=" + getApp().globalData.ref + "&token=" + t : e.apiList.useCoupon + "?token=" + t, r, "POST", n, a);
    },
    getMyCoupon: function(t, i, n, a) {
        var r = {
            type: i
        };
        o(e.apiList.myCoupon + "?token=" + t, r, "POST", n, a);
    },
    getUserDataList: function(t, i, n) {
        o(e.apiList.userDataList + "?token=" + t, {}, "GET", i, n);
    },
    getCityPrice: function(t, i, n) {
        var a = {
            city_id: t.city_id,
            rp_id: t.rp_id,
            is_warrantable: t.is_warrantable,
            category: t.category,
            district_id: t.district_id,
            reserve_time: t.reserve_time,
            reserve_time2: t.reserve_time2
        };
        t.rp_id2 && (a.rp_id2 = t.rp_id2), o(getApp().globalData.ref ? e.apiList.cityPrice + "?ref=" + getApp().globalData.ref : e.apiList.cityPrice, a, "POST", i, n);
    },
    getCreateOrder: function(t, i, n, a, r) {
        var s = "";
        n && (s = "&ref=" + n);
        var c = {
            rp_id: i.rp_id,
            coupon_code: i.coupon_code,
            imei: i.imei,
            weixiucenter_id: i.weixiucenter_id,
            category: i.category,
            is_warrantable: i.is_warrantable,
            reserve_time: i.reserve_time,
            reserve_time2: i.reserve_time2,
            remark: i.remark,
            user_address_id: i.user_address_id
        };
        i.rp_id2 && (c.rp_id2 = i.rp_id2), o(e.apiList.createOrder + "?token=" + t + s, c, "POST", a, r);
    },
    getQuickOrder: function(t, i, n, a) {
        var r = {
            user_address_id: i.user_address_id,
            user_name: i.user_name,
            phone_number: i.phone_number,
            province: i.province,
            city: i.city,
            district: i.district,
            is_default_address: i.is_default_address,
            address_detail: i.address_detail
        };
        o(e.apiList.quickOrder + "?token=" + t, r, "POST", n, a);
    },
    getDefaultAddress: function(t, i, n) {
        var a = {
            token: t
        };
        o(e.apiList.defaultAddress, a, "GET", i, n);
    },
    getPackCoupon: function(t, i, n) {
        var a = {
            rp_id: t
        };
        o(getApp().globalData.ref ? e.apiList.packCoupon + "?ref=" + getApp().globalData.ref : e.apiList.packCoupon, a, "GET", i, n);
    },
    getSaveAddress: function(t, i, n, a) {
        i = {
            id: i.id,
            user_name: i.user_name,
            mobile: i.mobile,
            province_id: i.province_id,
            city_id: i.city_id,
            district_id: i.district_id,
            address: i.address,
            is_default: i.is_default
        }, o(e.apiList.saveAddress + "?token=" + t, i, "POST", n, a);
    },
    getAllCityData: function(t, i) {
        o(e.apiList.getAllCity, {
            type: "1"
        }, "POST", t, i);
    },
    getAddressList: function(t, i, n) {
        var a = {
            token: t
        };
        o(e.apiList.addressList, a, "GET", i, n);
    },
    getDelateAddress: function(t, i, n, a) {
        var r = {
            id: i
        };
        o(e.apiList.delateAddress + "?token=" + t, r, "POST", n, a);
    },
    getSearchDevice: function(t, i, n) {
        var a = {
            word: t
        };
        o(e.apiList.searchDevice, a, "POST", i, n);
    },
    getAllFaults: function(t, i) {
        o(e.apiList.faultList, {
            type: "2x"
        }, "GET", t, i);
    },
    getStoreList: function(t, i, n) {
        var a = t || {};
        o(e.apiList.storeList, a, "GET", i, n);
    },
    getReminders: function(t, i) {
        o(e.apiList.reminders, {}, "POST", t, i);
    },
    getMemoryUp: function(t, i) {
        o(e.apiList.memoryUp, {}, "POST", t, i);
    },
    getImgCode: function(t, i, n) {
        var a = {
            img_id: t
        };
        o(e.apiList.imgCode, a, "POST", i, n);
    },
    getInvalidImgCode: function(t, i, n, a) {
        var r = {
            img_code: t,
            img_id: i
        };
        o(e.apiList.invalidImgCode, r, "POST", n, a, "", "", !0);
    },
    getPersonalOrderList: function(t, i, n, a) {
        var r = {
            type: i
        };
        o(e.apiList.personalOrderList + "?token=" + t, r, "POST", n, a);
    },
    getOrderDetail: function(t, i, n, a, r, s) {
        var c = {
            type: i,
            order_id: n,
            order_sn: a
        };
        o(e.apiList.orderDetail + "?token=" + t, c, "post", r, s);
    },
    refreshEngineerLocation: function(t, i, n, a) {
        var r = {
            number: i
        };
        o(e.apiList.engineerLocation + "?token=" + t, r, "post", n, a);
    },
    getExpressList: function(t, i, n) {
        o(e.apiList.expressList + "?token=" + t, {}, "post", i, n);
    },
    postDevice: function(t, i, n, a) {
        o(e.apiList.devicePost + "?token=" + t, i, "post", n, a);
    },
    getExpressInfo: function(t, i, n, a, r) {
        var s = {
            brand_id: i,
            express_code: n
        };
        o(e.apiList.expressInfo + "?token=" + t, s, "post", a, r);
    },
    getCancelReason: function(t, i, n, a) {
        var r = {
            type: i
        };
        o(e.apiList.cancelReason + "?token=" + t, r, "post", n, a);
    },
    cancelOrder: function(t, i, n, a, r, s, c, p) {
        var u = {
            order_id: i,
            order_sn: n,
            type: a,
            cancel_id: r,
            cancel: s
        };
        o(e.apiList.orderCancel + "?token=" + t, u, "post", c, p);
    },
    commentOrder: function(t, i, n, a) {
        o(e.apiList.commentOrder + "?token=" + t, i, "post", n, a);
    },
    getOpenid: function(t, i, n) {
        o(e.apiList.openid, t, "post", i, n);
    },
    getHotRecycle: function(t, i) {
        o(e.apiList.hotRecycle, {}, "post", t, i);
    },
    getMyDevicePrice: function(t, i, n) {
        o(e.apiList.myDevicePrice, t, "post", i, n);
    },
    getNearbyRepaircenter: function(t, i, n) {
        o(e.apiList.nearbyRepaircenter, t, "post", i, n);
    },
    getMyCouponList: function(t, i, n, a) {
        var r = {
            type: i
        };
        o(e.apiList.myCoupon + "?token=" + t, r, "POST", n, a);
    },
    searchModel: function(t, i, n) {
        o(e.apiList.modelSearch, t, "post", i, n);
    },
    getRecycleModelList: function(t, i) {
        o(e.apiList.recycleModelList, {}, "post", t, i);
    },
    getFaultSelect: function(t, i, n) {
        o(e.apiList.faultSelect, t, "get", i, n);
    },
    getFaultPrice: function(t, i, n) {
        o(e.apiList.faultPrice, t, "post", i, n);
    },
    getRecycleVoucher: function(t, i, n, a) {
        o(e.apiList.recycleVoucher + "?token=" + t, i || {}, "post", n, a);
    },
    phoneSheild: function(e, t, i, n) {
        var a = {};
        t && (a.order_type = t), o(e, a, "get", i, n);
    },
    createRecycleOrder: function(t, i, n, a) {
        o(e.apiList.createRecycleOrder + "?token=" + t, i, "post", n, a);
    },
    getIndexPageNav: function(t, i) {
        o(e.apiList.indexPageNav, {}, "GET", t, i);
    },
    getFuliBanner: function(t, i, n) {
        o(e.apiList.fuliBanner + "?token=" + t, {}, "GET", i, n);
    },
    getFulicouponList: function(t, i, n, a) {
        o(e.apiList.fulicouponList + "?token=" + t, i, "POST", n, a);
    },
    getFulishecoupon: function(t, i, n, a) {
        o(e.apiList.fulishecouponget + "?token=" + t, i, "POST", n, a);
    },
    getRecyclecoupon: function(t, i, n, a) {
        o(e.apiList.recyclecouponget + "?token=" + t, i, "POST", n, a);
    },
    getQuestionAndAnswer: function(t, i) {
        o(e.apiList.questionAndAnswer, {}, "GET", t, i);
    },
    editPayers: function(t, i, n, a) {
        o(e.apiList.ordersShoukuan + "?token=" + t, i, "POST", n, a);
    },
    getUserCoupon: function(t, i, n, a) {
        o(e.apiList.userCoupon + "?token=" + t, i, "POST", n, a);
    },
    bindCoupon: function(t, i, n, a) {
        o(e.apiList.couponBind + "?token=" + t, i, "POST", n, a);
    },
    getDefaultCoupon: function(t, i, n, a) {
        o(getApp().globalData.ref ? e.apiList.defaultCoupon + "?ref=" + getApp().globalData.ref + "&token=" + t : e.apiList.defaultCoupon + "?token=" + t, i, "POST", n, a);
    },
    getLybInfo: function(t, i, n) {
        o(e.apiList.lybActivity + "?token=" + t, {}, "GET", i, n);
    },
    getGeocoder: function(t, i, n) {
        o(e.apiList.geocoder, t, "GET", i, n);
    },
    getActivityConfig: function(t, i, n, a) {
        console.log("data------"), console.log(i), o(e.apiList.activityConfig + "?token=" + t, i, "GET", n, a);
    },
    getRecycleType: function(t, i, n, a) {
        o(e.apiList.recycleType + "?token=" + t, i, "GET", n, a);
    },
    getSFTime: function(t, i) {
        o(e.apiList.sfTime, {}, "GET", t, i);
    },
    cfRecycle: function(t, i, n, a) {
        o(e.apiList.cfRecycle + "?token=" + t, i, "POST", n, a);
    },
    getSfRoute: function(t, i, n, a) {
        o(e.apiList.sfRoute + "?token=" + t, i, "GET", n, a);
    },
    appleOrder: function(t, i, n, a) {
        o(e.apiList.orderapple + "?token=" + t, i, "post", n, a);
    },
    getCouponUse: function(t, i, n, a, r, s) {
        var c = {
            rp_id: i,
            city: n,
            useable_status: 2,
            price: a
        };
        o(e.apiList.couponUseable + "?token=" + t, c, "POST", r, s);
    },
    getHomeView: function(t, i, n) {
        o(getApp().globalData.ref ? e.apiList.homeView + "?ref=" + getApp().globalData.ref : e.apiList.homeView, t, "post", i, n);
    },
    getAppleFault: function(t, i, n) {
        o(e.apiList.appleFault, t, "post", i, n);
    },
    switchLngLat: function(t, i, n) {
        o(e.apiList.latlng, t, "post", i, n);
    },
    oneKeyOrder: function(t, i, n, a) {
        o(e.apiList.oneKeyOrder + "?token=" + t, i, "post", n, a);
    },
    getRecycleBanner: function(t, i) {
        o(e.apiList.recycleBanner, {}, "post", t, i);
    },
    getRecycleModal: function(t, i) {
        o(e.apiList.recycleModal, {}, "get", t, i);
    },
    getRepairFaultCoupon: function(t, i) {
        o(e.apiList.repairFaultCoupon, {}, "get", t, i);
    },
    PostRepairFaultCouponReceive: function(t, i, n) {
        o(e.apiList.repairFaultCouponReceive, t, "post", i, n);
    },
    getRepairHomeCoupon: function(t, i, n, a) {
        o(e.apiList.repairHomeCoupon, i, "post", n, a);
    },
    getRepairPopularSearch: function(t, i) {
        o(e.apiList.repairPopularSearch, {}, "get", t, i);
    },
    getRepairSearchList: function(t, i) {
        o(e.apiList.repairSearchList, {}, "get", t, i);
    }
};