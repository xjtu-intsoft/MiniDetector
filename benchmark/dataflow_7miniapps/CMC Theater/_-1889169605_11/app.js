function e(e, t, o) {
    return t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = o, e;
}

var t, o = require("./config/url.js"), a = require("./config/appStorage.js"), i = (require("./util/util"), 
require("./util/wxApi")), n = require("./util/wxRequest"), s = require("./config/httpHtlper.js"), l = require("./util/aopFile.js").runAop;

App({
    onLaunch: function() {
        l();
        var e = this;
        e.getLocalStorageData(), wx.getSystemInfo({
            success: function(t) {
                var o = t.system;
                console.log("system info ", t);
                var a = o.indexOf("iOS");
                if (-1 != a) {
                    e.globalData.isIOS = !0;
                    var i = o.substring(a + 3).split(".");
                    i.length > 0 && parseInt(i[0]) <= 8 && (e.globalData.isIOS8 = !0);
                } else e.globalData.isIOS = !1, e.globalData.isIOS8 = !1;
            }
        });
    },
    onShow: function(e) {
        var t = e.referrerInfo || {};
        if ("wxd47a439504db41ec" == (t.appId || "")) {
            var o = t.extraData || {}, a = o.channel || "", i = o.from_scene || "";
            this.setChannelAndFromScene(a, i);
        }
        console.log("App Show", e);
    },
    onHide: function() {
        console.log("App Hide");
    },
    globalData: (t = {
        hasLogin: !1,
        load_more: "加载更多",
        loading_title: "正在加载数据",
        hall_id: "",
        isIOS8: !1,
        isIOS: !1,
        goodsFrom: "",
        entryEdition: !1,
        onlyGoods: !1
    }, e(t, "hall_id", ""), e(t, "shopNeedRef", !1), e(t, "newOrderNum", "0"), e(t, "newCouponID", "0"), 
    e(t, "confirOpenObjc", null), e(t, "appServicePhone", "400 815 5556"), e(t, "popAdIsShow", !1), 
    e(t, "willShowMovieId", ""), e(t, "mainNeedRefush", !0), e(t, "couponNeedRefush", !1), 
    e(t, "isLoadCardList", !1), e(t, "isUnLockSeat", !1), e(t, "isUserInfo", !1), e(t, "isCinemaChange", !1), 
    e(t, "pay_code", "weixinLite"), e(t, "userInfo", {}), e(t, "session_id", ""), e(t, "city", {}), 
    e(t, "cinema", {}), e(t, "init", {}), e(t, "date", ""), e(t, "will_be_expire_coupon", "0"), 
    e(t, "didLoadQuickLogin", !1), e(t, "oldLoginPhoneNum", ""), e(t, "isLogin", !1), 
    e(t, "goodsLogin", !1), e(t, "isReadProtocol", ""), e(t, "protocolUpdateTime", ""), 
    e(t, "movie", {}), e(t, "isShowedUserProtocol", !1), e(t, "isUnRegisterDeleteCard", !1), 
    e(t, "channel", ""), e(t, "from_scene", ""), t),
    getLocalStorageData: function() {
        this.globalData.date = wx.getStorageSync(a.storageKeys.EXPIRE_DATE), this.globalData.city = wx.getStorageSync(a.storageKeys.CITY_APP_INFO), 
        this.globalData.cinema = wx.getStorageSync(a.storageKeys.CINEMA_APP_INFO), this.globalData.oldLoginPhoneNum = wx.getStorageSync(a.storageKeys.OLD_LOGINPHONE), 
        this.globalData.isShowedUserProtocol = wx.getStorageSync(a.storageKeys.ISSHOWEDUSERPROTOCOL) || !1, 
        this.globalData.channel = wx.getStorageSync(a.storageKeys.CHANNEL) || "", this.globalData.from_scene = wx.getStorageSync(a.storageKeys.FROM_SCENE) || "";
        try {
            this.globalData.city && this.globalData.city.id && this.globalData.city.id.length > 0 || (this.globalData.city = {}, 
            this.globalData.cinema = {});
            var e = wx.getStorageSync(a.storageKeys.ACCOUNT_INFO);
            e && e.session_id && e.session_id.length > 0 && (this.globalData.didLoadQuickLogin = !0, 
            this.globalData.session_id = e.session_id, this.globalData.userInfo = e, this.getProtocalValue());
        } catch (e) {}
    },
    setCity: function(e) {
        e && (wx.setStorageSync(a.storageKeys.CITY_APP_INFO, e), this.globalData.city = e);
    },
    setCinema: function(e) {
        e && (wx.setStorageSync(a.storageKeys.CINEMA_APP_INFO, e), this.globalData.cinema = e);
    },
    setOldLoginPhone: function(e) {
        e && e.length >= 11 && (wx.setStorageSync(a.storageKeys.OLD_LOGINPHONE, e), this.globalData.oldLoginPhoneNum = e);
    },
    setIsShowedUserProtocol: function(e) {
        wx.setStorageSync(a.storageKeys.ISSHOWEDUSERPROTOCOL, e), this.globalData.isShowedUserProtocol = e;
    },
    setUserInfo: function(e) {
        wx.setStorageSync(a.storageKeys.ACCOUNT_INFO, e), this.globalData.userInfo = e, 
        this.globalData.session_id = e.session_id ? e.session_id : "", this.globalData.isLogin = !0, 
        this.setOldLoginPhone(e.mobile ? e.mobile : ""), this.globalData.session_id && this.globalData.session_id.length > 0 && this.setIsShowedUserProtocol(!0), 
        this.getProtocalValue();
    },
    setChannelAndFromScene: function(e, t) {
        wx.setStorageSync(a.storageKeys.CHANNEL, e), this.globalData.channel = e, wx.setStorageSync(a.storageKeys.FROM_SCENE, t), 
        this.globalData.from_scene = t;
    },
    getProtocalValue: function() {
        var e = this.globalData.userInfo, t = a.storageKeys.ISREADPROTOCOL + e.mobile + this.globalData.cinema.id;
        this.globalData.isReadProtocol = wx.getStorageSync(t);
        a.storageKeys.PROTOCOLUPDATETIME, e.mobile, this.globalData.cinema.id;
        this.globalData.protocolUpdateTime = wx.getStorageSync(t);
    },
    getIsShowedUserProtocol: function() {
        return this.globalData.isShowedUserProtocol;
    },
    getCity: function() {
        return this.globalData.city;
    },
    getCinema: function() {
        return this.globalData.cinema;
    },
    getUserInfo: function() {
        return this.globalData.userInfo;
    },
    getChannel: function() {
        return this.globalData.channel;
    },
    getFromScene: function() {
        return this.globalData.from_scene;
    },
    userIsLogin: function() {
        return !!(this.globalData.session_id && this.globalData.session_id.length > 0);
    },
    clearUserInfo: function() {
        wx.setStorageSync(a.storageKeys.ACCOUNT_INFO, {}), this.globalData.userInfo = {}, 
        this.globalData.session_id = "", this.globalData.date = "", this.globalData.newCouponID = "0", 
        this.globalData.will_be_expire_coupon = "0", this.setExpireDate("");
    },
    setLoginData: function(e) {
        this.setUserInfo(e);
    },
    setExpireDate: function(e) {
        wx.setStorageSync(a.storageKeys.EXPIRE_DATE, e);
    },
    alignLogin: function() {
        this.globalData.session_id && this.globalData.session_id.length > 0 && (this.clearUserInfo(), 
        wx.showModal({
            showCancel: !1,
            content: "您的账号在其他设备上登录，请重新登录",
            success: function(e) {
                e.confirm && wx.navigateTo({
                    url: "/pages/login/wxLogin/wxLogin"
                });
            }
        }));
    },
    isIos8: function() {
        return !!this.globalData.isIOS8 && (wx.showModal({
            showCancel: !1,
            content: "不支持 iOS8及以下版本",
            success: function(e) {
                e.confirm && wx.reLaunch({
                    url: "/pages/login/noUseIos8/noUseIos8"
                });
            }
        }), !0);
    },
    isChoseCity: function(e) {
        var t = getApp().getCity();
        return !!(t && t.id && t.id.length > 0) || (wx.redirectTo({
            url: "/pages/home/cityList/cityList?type=" + e
        }), !1);
    },
    isChoseCinema: function(e) {
        var t = getApp().getCinema();
        return !!(t && t.id && t.id.length > 0) || (wx.redirectTo({
            url: "/pages/home/cinemaList/cinemaList?type=" + e
        }), !1);
    },
    wxQuickLogin: function(e) {
        var t = this;
        t.globalData.didLoadQuickLogin = !0, e.backAfterQuickLogin && wx.login({
            success: function(o) {
                o.code ? t.loginByOpenId(o.code, e) : e.backAfterQuickLogin();
            },
            fail: function() {
                e.backAfterQuickLogin();
            }
        });
    },
    loginByOpenId: function(e, t) {
        var o = this;
        s.loginByOpenId(e).then(function(e) {
            if (e.cancelShowError = !0, 1 == e.data.status) {
                var a = e.data.data.user_data;
                o.setLoginData(a);
            }
            t.backAfterQuickLogin();
        }).catch(function() {
            t.backAfterQuickLogin();
        });
    },
    encodeDataAndJsonStringify: function(e) {
        return encodeURIComponent(JSON.stringify(e));
    },
    decodeDataAndJsonParse: function(e) {
        return JSON.parse(decodeURIComponent(e));
    },
    showToast: function(e) {
        wx.showToast({
            icon: "none",
            title: e
        });
    },
    showModalApp: function(e) {
        this.showModalBase(e, "我知道了", !1);
    },
    showModalAppWithTitle: function(e, t) {
        wx.showModal({
            showCancel: !1,
            content: e,
            title: t,
            confirmText: "我知道了"
        });
    },
    showModalBase: function(e, t, o) {
        wx.showModal({
            showCancel: o,
            content: e,
            title: "",
            confirmText: t
        });
    },
    showModalBaseCallBack: function(e, t, o, a) {
        a ? wx.showModal({
            showCancel: o,
            content: e,
            title: "",
            confirmText: t,
            success: a
        }) : this.showModalBase(e, t, o);
    },
    showModalCallBackTitle: function(e, t, o, a, i, n) {
        n ? wx.showModal({
            showCancel: i,
            content: e,
            title: a,
            confirmText: t,
            cancelText: o,
            success: n
        }) : this.showModalBase(e, t, i);
    },
    getStorage: function() {
        return a;
    },
    urlService: {
        urls: o.urlPath,
        urlParameter: o.urlParameter,
        wxRequest: n,
        wxApi: i
    }
});