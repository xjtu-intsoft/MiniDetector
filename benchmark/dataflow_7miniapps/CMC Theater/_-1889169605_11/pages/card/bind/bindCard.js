var t = null, a = require("./../../../config/httpHtlper.js"), e = require("./../../../util/md5.js"), i = (require("./../../../config/appStorage.js"), 
require("./../../../request/cinemaListRequest.js").cinemaListRequest), o = getApp().urlService, n = require("./../../../util/aes.js"), s = n.enc.Utf8.parse("1de&^*-#gsol&^*-"), l = n.enc.Utf8.parse("1rue%#ls;1&8^*-#");

Page({
    data: {
        inputVal: "",
        pwdVal: "",
        codeVal: "",
        isHot: !1,
        isComing: !0,
        isVertify: !1,
        time: "获取验证码",
        currentTime: 60,
        disabled: !1,
        isFromAdvert: !0,
        choseCity: {},
        cinemaInfo: {},
        src: "/images/common/bangding_icon_zhankai.png",
        onlineDatas: [],
        shouldBackMovie: !1
    },
    onLoad: function(t) {
        t.qr_code && t.qr_code.length > 0 && this.setData({
            shouldBackMovie: !0
        }), this.data.isFromAdvert = !!t.isFromAdvert && t.isFromAdvert, t.fromFlag && t.fromFlag.length > 0 ? (this.data.fromFlag = t.fromFlag, 
        console.log("fromFlag===============" + t.fromFlag), "wx_gzh_jump" != this.data.fromFlag && "wx_youjia_jump" != this.data.fromFlag || (this.data.shouldBackMovie = !0)) : this.data.isFromAdvert && (this.data.fromFlag = "home_advert"), 
        wx.setNavigationBarTitle({
            title: "添加会员卡"
        });
        var a = t.cinemaInfo ? getApp().decodeDataAndJsonParse(t.cinemaInfo) : void 0, e = t.choseCity ? getApp().decodeDataAndJsonParse(t.choseCity) : void 0;
        console.log("onLoad ============= isFromAdvert=" + this.data.isFromAdvert), a && (this.data.cinemaInfo = a, 
        this.data.choseCity = e);
    },
    onShow: function() {
        if (getApp().isChoseCity(this.data.fromFlag) && getApp().isChoseCinema(this.data.fromFlag)) if (getApp().userIsLogin() || getApp().globalData.didLoadQuickLogin) {
            console.log("cinemaInfo = " + this.data.cinemaInfo.name), console.log("onShow ============ city_name = " + this.data.choseCity.name), 
            this.data.cinemaInfo.name ? this.initData(this.data.cinemaInfo) : this.backAfterQuickLogin();
        } else getApp().wxQuickLogin(this);
    },
    backAfterQuickLogin: function() {
        if (getApp().userIsLogin()) {
            var t = getApp().getCinema();
            t && (this.initData(t), this.getCinemaList());
        } else wx.navigateTo({
            url: "/pages/login/wxLogin/wxLogin"
        });
    },
    getCinemaList: function() {
        var t = this, a = o.urls.cinemaList, e = getApp().getCity();
        if (e) {
            var n = o.urlParameter({
                city_id: e.id
            });
            o.wxRequest.getRequest(a, n).then(function(a) {
                if (i.decodeRes(a)) {
                    console.log(a);
                    var e = i.successObj.cinemaArr;
                    if (e) for (var o = e.length, n = 0; n < o; n++) {
                        var s = e[n];
                        if (s.id == t.data.cinemaInfo.id) return void (t.data.cinemaInfo.is_mobile_verification_needed == s.is_mobile_verification_needed || (t.data.cinemaInfo.is_mobile_verification_needed = s.is_mobile_verification_needed, 
                        t.initData(t.data.cinemaInfo)));
                    }
                }
            }).finally({});
        }
    },
    onUnload: function() {
        clearInterval(t);
    },
    initData: function(t) {
        var a;
        a = "0" == t.is_mobile_verification_needed, console.log("isVertifyTemp" + a), this.getOnLineListData(t.id), 
        this.data.isFromAdvert && wx.setNavigationBarTitle({
            title: "办理会员卡"
        }), this.setData({
            cinemaInfo: t,
            isFromAdvert: this.data.isFromAdvert,
            isVertify: a
        }), console.log("isVertify" + this.data.isVertify);
    },
    input: function(t) {
        var a = t.detail.value;
        a && (console.log("value = " + a.trim()), this.setData({
            inputVal: a.trim()
        }));
    },
    clearInput: function(t) {
        this.setData({
            inputVal: ""
        });
    },
    inputPwd: function(t) {
        var a = t.detail.value;
        console.log("value = " + a), a && this.setData({
            pwdVal: a
        });
    },
    pwdClear: function(t) {
        this.setData({
            pwdVal: ""
        });
    },
    inputCode: function(t) {
        var a = t.detail.value;
        console.log("value = " + a), a && this.setData({
            codeVal: a
        });
    },
    getCode: function(t) {
        if (!this.data.disabled) if (this.data.inputVal) if (this.data.pwdVal) {
            var i = this;
            console.log("pwd = " + o);
            var o = "";
            this.data.cinemaInfo.is_app_aes_encrypt && "1" == this.data.cinemaInfo.is_app_aes_encrypt ? (console.log("进行aes加密 = "), 
            console.log("key = " + s), console.log("iv = " + l), o = n.encrypt(this.data.pwdVal, s, l)) : (console.log("进行MD5Encoder加密 = "), 
            o = e.hex_md5(this.data.pwdVal)), a.bindCardVerifyMobile(this.data.cinemaInfo.id, this.data.inputVal.trim(), o).then(function(t) {
                console.log(t), 0 == t.data.status || (getApp().showModalApp(t.data.data.content), 
                i.timeRun());
            });
        } else wx.showToast({
            icon: "none",
            title: "请输入密码"
        }); else wx.showToast({
            icon: "none",
            title: "请输入卡号"
        });
    },
    timeRun: function() {
        var a = this, e = a.data.currentTime;
        a.setData({
            time: e + "秒后重新发送",
            disabled: !0
        }), t = setInterval(function() {
            e--, a.setData({
                time: e + "秒后重新发送"
            }), e <= 0 && (clearInterval(t), a.setData({
                time: "重新获取",
                currentTime: 61,
                disabled: !1
            }));
        }, 1e3);
    },
    bindCard: function() {
        if (this.data.inputVal) if (this.data.pwdVal) if (this.data.isVertify || this.data.codeVal) {
            var t = "";
            this.data.cinemaInfo.is_app_aes_encrypt && "1" == this.data.cinemaInfo.is_app_aes_encrypt ? (console.log("进行aes加密 = "), 
            console.log("key = " + s), console.log("iv = " + l), t = n.encrypt(this.data.pwdVal, s, l)) : (console.log("进行MD5Encoder加密 = "), 
            t = e.hex_md5(this.data.pwdVal));
            var i = this;
            a.bind_card(this.data.cinemaInfo.id, this.data.inputVal, t, "", this.data.codeVal, "1").then(function(t) {
                if (console.log(t), 1 == t.data.status) wx.showToast({
                    icon: "none",
                    title: "绑卡成功"
                }), i.setData({
                    inputVal: "",
                    pwdVal: ""
                }), getApp().globalData.isLoadCardList = !0, setTimeout(function() {
                    i.data.shouldBackMovie ? i.goMovie() : wx.navigateBack();
                }, 1e3); else {
                    if (t.cancelShowError = !0, "815" == t.data.errcode) return void wx.showModal({
                        confirmColor: "#ff9500",
                        showCancel: !1,
                        content: t.data.msg,
                        confirmText: "我知道了",
                        success: function(t) {
                            t.confirm && wx.navigateBack({});
                        }
                    });
                    getApp().showModalApp(t.data.msg);
                }
            });
        } else wx.showToast({
            icon: "none",
            title: "请输入验证码"
        }); else wx.showToast({
            icon: "none",
            title: "请输入密码"
        }); else wx.showToast({
            icon: "none",
            title: "请输入卡号"
        });
    },
    selectCinema: function(t) {
        console.log(t), wx.navigateTo({
            url: "/pages/home/cinemaList/cinemaList?type=bindcard"
        });
    },
    hotClick: function() {
        console.log("isHot = " + this.data.isHot), this.data.isHot ? this.data.isComing = !1 : this.data.isComing && (console.log("====================="), 
        this.setData({
            isHot: !0,
            isComing: !1
        }));
    },
    comingClick: function() {
        this.data.isComing ? this.data.isHot = !1 : this.setData({
            isHot: !1,
            isComing: !0
        });
    },
    getOnLineListData: function(t) {
        var e = this;
        a.getOnLineList(t).then(function(t) {
            if (t.data.status = 1) {
                console.log(t);
                var a = t.data.data;
                if (a && a.length > 0) {
                    var i = a.length, o = {
                        golden: "#de8b09",
                        red: "#f76264",
                        purple: "#7b64d1",
                        green: "#06b1bc",
                        blue: "#2881d8",
                        black: "#575660"
                    }, n = {
                        golden: "ecz_bg1",
                        red: "ecz_bg2",
                        purple: "ecz_bg3",
                        green: "ecz_bg4",
                        blue: "ecz_bg5",
                        black: "ecz_bg6"
                    };
                    console.log("--------size----------" + i);
                    for (var s = 0; s < i; s++) {
                        var l = a[s];
                        l.card_bg = n[l.color], l.wx_text_color = o[l.color], l.price = parseFloat(l.price) + "";
                    }
                } else wx.showToast({
                    icon: "none",
                    title: "暂无数据"
                });
                e.setData({
                    onlineDatas: a,
                    isHot: !1,
                    isComing: !0
                });
            }
        });
    },
    onlineClick: function(t) {
        var a = t.currentTarget.dataset.bean, e = this.data.choseCity, i = getApp().encodeDataAndJsonStringify(a), o = getApp().encodeDataAndJsonStringify(e), n = "";
        a && (n = n + (n.length > 0 ? "&" : "?") + "bean=" + i, e.name && (n = n + (n.length > 0 ? "&" : "?") + "city=" + o), 
        this.data.shouldBackMovie && (n = n + (n.length > 0 ? "&" : "?") + "backmovie=true"), 
        "wx_gzh_jump" != this.data.fromFlag && "wx_youjia_jump" != this.data.fromFlag && "guagauka" != this.data.fromFlag && "home_advert" != this.data.fromFlag || (n = n + (n.length > 0 ? "&" : "?") + "fromType=" + this.data.fromFlag), 
        wx.navigateTo({
            url: "/pages/card/onlinecard/ecardDetails" + n
        }));
    },
    goMovie: function() {
        wx.switchTab({
            url: "/pages/home/cinema/cinema"
        });
    },
    phoneClick: function() {
        if (this.data.cinemaInfo.tel && this.data.cinemaInfo.tel.length > 0) {
            var t = this.data.cinemaInfo.tel.split(",");
            wx.showActionSheet({
                itemList: t,
                success: function(a) {
                    wx.makePhoneCall({
                        phoneNumber: t[a.tapIndex]
                    });
                }
            });
        }
    }
});