require("../../../request/offLineCouponList.js");

var e = require("../../../request/wxPhoneLogin.js"), o = getApp().urlService;

Page({
    data: {
        msg: "",
        phoneInfo: "",
        showUserProtocol: !1,
        qr_code: "",
        wx_code: ""
    },
    onLoad: function(e) {
        if (console.log("options=======" + e), !getApp().isIos8()) {
            var o = this;
            if (wx.login({
                success: function(e) {
                    e.code && (console.log("微信code：", e.code), o.data.wx_code = e.code);
                }
            }), this.setData({
                showUserProtocol: getApp().globalData.isShowedUserProtocol
            }), e.qr_code && e.qr_code.length > 0) {
                if (this.data.qr_code = e.qr_code, !getApp().userIsLogin() && !getApp().globalData.didLoadQuickLogin) return void getApp().wxQuickLogin(this);
                this.setDataWithQrCode();
            }
        }
    },
    backAfterQuickLogin: function() {
        this.setDataWithQrCode();
    },
    setDataWithQrCode: function() {
        var e = this.data.qr_code.split("-")[0];
        e && e.length > 0 ? this.updateCinemaAndCityData(e) : this.needGoCardBind(this.data.qr_code, e);
    },
    updateCinemaAndCityData: function(e) {
        var t = this, a = o.urls.cinemaDetail, n = o.urlParameter({
            cinema_id: e
        });
        o.wxRequest.getRequest(a, n).then(function(o) {
            if ("0" == o.data.errcode) {
                var a = o.data.data.cinema_data, n = {
                    id: e,
                    name: a.name,
                    address: a.address,
                    tel: a.phone,
                    is_app_aes_encrypt: a.is_app_aes_encrypt,
                    is_mobile_verification_needed: a.is_mobile_verification_needed
                };
                if (!a.city_id || a.city_id.length <= 0) t.needGoCardBind(this.data.qr_code, ""); else {
                    var i = {
                        id: a.city_id,
                        name: a.city_name
                    };
                    getApp().setCity(i), getApp().setCinema(n), t.needGoCardBind(t.data.qr_code, e);
                }
            } else t.needGoCardBind(this.data.qr_code, "");
        });
    },
    needGoCardBind: function(e, t) {
        if (getApp().userIsLogin()) {
            var a = o.urls.saveUserRelationShip, n = o.urlParameter({
                qr_code: e
            });
            o.wxRequest.getRequest(a, n).then(function(e) {}).finally(function() {
                t && t.length > 0 ? wx.reLaunch({
                    url: "/pages/card/bind/bindCard?qr_code=" + e
                }) : wx.reLaunch({
                    url: "/pages/home/cinema/cinema"
                });
            });
        }
    },
    backWhenLoginSuccess: function(e) {
        this.data.qr_code && this.data.qr_code.length > 0 ? this.backAfterQuickLogin() : wx.navigateBack();
    },
    onShow: function() {
        getApp().userIsLogin() && wx.navigateBack();
    },
    not_agree: function(e) {
        wx.navigateBack();
    },
    agree: function() {
        this.setData({
            showUserProtocol: !0
        });
    },
    showCodeLogin: function() {
        wx.navigateTo({
            url: "/pages/login/login/login?qr_code1=" + this.data.qr_code
        });
    },
    wxLoginClick: function() {},
    showUserProtocol: function() {
        wx.navigateTo({
            url: "/pages/login/agreement/agreement"
        });
    },
    showPolicy: function() {
        var e = "/pages/find/promotionDetial/promotionDetial?promotion_url=" + encodeURIComponent("http://group.leying.com/app-privacy-policy/index") + "&flag=yinsizhengce";
        wx.navigateTo({
            url: e
        });
    },
    scanClick: function() {
        var e = this;
        wx.scanCode({
            success: function(o) {
                console.log("success", o), e.setData({
                    scan: "success:" + o.result
                });
            },
            fail: function(o) {
                console.log("fail", o), e.setData({
                    scan: "fail:" + JSON.stringify(o)
                });
            }
        });
    },
    getPhoneNumber: function(o) {
        console.log("手机号获取"), console.log(o), console.log(o.detail.errMsg), console.log("iv = ", o.detail.iv), 
        console.log("encryptedData = ", o.detail.encryptedData), this.setData({
            phoneInfo: JSON.stringify(o.detail)
        });
        var t = this, a = o.detail.iv, n = o.detail.encryptedData;
        if (a && n) {
            var i = e.getParam(n, a, this.data.wx_code);
            i.channel = getApp().getChannel(), i.from_scene = getApp().getFromScene(), console.log("params", i), 
            e.wx_phone_fast_login(i).then(function(e) {
                console.log("微信授权登陆界面 res", e), e && 1 == e.data.status && t.backWhenLoginSuccess();
            });
        }
    },
    getUserInfo: function(e) {
        console.log(e);
        var o = e.detail, t = (o.encryptedData, o.errMsg, o.iv, o.rawData, o.signature, 
        o.userInfo);
        console.log("userinfo -------------- "), console.log(t), this.setData({
            msg: JSON.stringify(t)
        });
    },
    openClick: function() {
        var e = this;
        wx.getImageInfo({
            src: "http://img.cdn.yinghezhong.com/zyds/img/2019/08/20/1eb09eaa8c4a65c3e1c2d254d7cfe65e.png",
            success: function(o) {
                console.log("res"), console.log(o), e.clipImage(o.path, o.width, o.height, function(e) {
                    console.log(e);
                });
            }
        });
    },
    clipImage: function(e, o, t, a) {
        var n = this, i = wx.createCanvasContext("canvas"), s = t;
        console.log(o, t, 750, s), console.log(1), console.log(o, t, 750, s), i.drawImage(e, 0, 0, 750, t, (750 - o) / 2, 0, 750, s), 
        i.draw(!0), setTimeout(function() {
            console.log(123), wx.canvasToTempFilePath({
                width: 750,
                height: s,
                destWidth: 750,
                destHeight: s,
                canvasId: "canvas",
                fileType: "jpg",
                success: function(e) {
                    n.data.image_url = e.tempFilePath, n.setData({
                        image_url: e.tempFilePath
                    }), console.log(e);
                },
                fail: function(e) {
                    console.log(e);
                }
            });
        }, 1e3);
    },
    onShareAppMessage: function() {
        return {
            title: "小程序",
            imageUrl: this.data.image_url,
            path: "/pages/find/promotionDetial/promotionDetial?promotion_url=123",
            desc: ""
        };
    }
});