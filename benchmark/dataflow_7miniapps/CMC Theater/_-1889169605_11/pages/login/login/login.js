var e = require("../../../util/md5.js"), t = getApp().urlService, o = require("../../../util/wxApi.js");

Page({
    data: {
        currentTemplate: "mineCodeLogin",
        currentTemplateData: "",
        phoneNum: "",
        codeInputStr: "    ",
        codeInputFirst: !1,
        qr_code: "",
        tiemDownText: "",
        isLogining: !1,
        seatLogin: !1,
        showPassWord: !1,
        showUserProtocol: !0
    },
    onLoad: function(e) {
        var t = e.flag;
        if (!getApp().isIos8()) {
            if (e.qr_code && e.qr_code.length > 0) return this.data.qr_code = e.qr_code, console.log("---------"), 
            void wx.reLaunch({
                url: "/pages/login/wxLogin/wxLogin?qr_code=" + e.qr_code
            });
            if (this.setData({
                phoneNum: getApp().globalData.oldLoginPhoneNum,
                accountLoginPhoneNum: getApp().globalData.oldLoginPhoneNum,
                codeLoginPhoneNum: getApp().globalData.oldLoginPhoneNum,
                showUserProtocol: getApp().globalData.isShowedUserProtocol
            }), t ? (this.setData({
                seatLogin: !0
            }), this.showAccountLogin()) : this.showCodeLogin(), e.qr_code1 && e.qr_code1.length > 0) {
                if (this.data.qr_code = e.qr_code1, !getApp().userIsLogin() && !getApp().globalData.didLoadQuickLogin) return void getApp().wxQuickLogin(this);
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
    onShow: function() {
        this.data.tiemDownText = "";
    },
    needGoCardBind: function(e, o) {
        if (getApp().userIsLogin()) {
            var n = t.urls.saveUserRelationShip, a = t.urlParameter({
                qr_code: e
            });
            t.wxRequest.getRequest(n, a).then(function(e) {}).finally(function() {
                o && o.length > 0 ? wx.reLaunch({
                    url: "/pages/card/bind/bindCard?qr_code=" + e
                }) : wx.reLaunch({
                    url: "/pages/home/cinema/cinema"
                });
            });
        }
    },
    showAccountLogin: function() {
        wx.setNavigationBarTitle({
            title: "账号登录"
        }), this.setData({
            currentTemplate: "mineAccountLogin",
            accountLoginPhoneNum: this.data.accountLoginPhoneNum ? this.data.accountLoginPhoneNum : ""
        });
    },
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
    showCodeLogin: function() {
        wx.setNavigationBarTitle({
            title: "验证码登录"
        }), this.setData({
            currentTemplate: "mineCodeLogin",
            phoneNum: this.data.codeLoginPhoneNum ? this.data.codeLoginPhoneNum : ""
        });
    },
    showCodeInput: function() {
        this.clearCodeInput(), this.setData({
            currentTemplate: "mineCodeInput",
            codeInputFirst: !0,
            codeInputNum: this.data.phoneNum.substring(0, 3) + "****" + this.data.phoneNum.substring(this.data.phoneNum.length - 4)
        });
    },
    showSafeCode: function(e) {
        e = e + "?mobile=" + this.data.phoneNum;
        var o = t.urlParameter({});
        this.setData({
            currentTemplate: "mineSafeCode",
            codeUrl: e,
            showCodeUrl: e + "&group=" + o.group + "&time=" + Number(new Date()),
            safeCodeStr: ""
        });
    },
    codeInputBecomeFirst: function() {
        this.setData({
            codeInputFirst: !0
        });
    },
    showCodeLoginPhoneNum: function(e) {
        var t = e.detail.value;
        this.setData({
            codeLoginPhoneNum: t
        });
    },
    showAccountLoginPhoneNum: function(e) {
        var t = e.detail.value;
        this.setData({
            accountLoginPhoneNum: t
        });
    },
    showAccountLoginPassWord: function(e) {
        var t = e.detail.value;
        this.setData({
            accountLoginPassWord: t
        });
    },
    showCodeInputStr: function(e) {
        var t = e.detail.value;
        return t.length > 4 ? t.substring(0, 4) : (t.length < 4 && (t += "    "), t = t.substring(0, 4), 
        this.setData({
            codeInputStr: t
        }), 4 != (t = t.replace(/ /g, "")).length || this.data.isLogining || (this.data.isLogining = !0, 
        this.getWxCodeToStartCodeLogin(t)), t);
    },
    clearCodeInput: function() {
        this.setData({
            codeInputValue: ""
        }), this.showCodeInputStr({
            detail: {
                value: ""
            }
        });
    },
    codeLoginSendBtnClick: function(e) {
        if (!(this.data.tiemDownText && this.data.tiemDownText.length > 0)) {
            var t = e.detail.value;
            this.isPhoneNum(t.phonenum) && (this.data.phoneNum = t.phonenum, this.sendMessage({
                mobile: t.phonenum,
                graph_validate_code: ""
            }));
        }
    },
    accountLoginBtnClick: function(e) {
        var t = e.detail.value;
        this.isPhoneNum(t.phonenum) && this.isNotDefine(t.password, "请输入密码") && (this.data.loginCodeUrl && !this.isNotDefine(t.safecode, "请输入安全码") || this.data.isLogining || (this.data.isLogining = !0, 
        this.getWxCodeToStartAccountLogin(t.phonenum, t.password, t.safecode.length ? t.safecode : "")));
    },
    codeInputGetMessageAgain: function() {
        this.data.tiemDownText && this.data.tiemDownText.length > 0 || this.isPhoneNum(this.data.phoneNum) && this.sendMessage({
            mobile: this.data.phoneNum,
            graph_validate_code: ""
        });
    },
    safeCodeSendBtnClick: function(e) {
        var t = e.detail.value;
        this.isNotDefine(t.safeCode, "请输入图形码") && this.sendMessage({
            mobile: this.data.phoneNum,
            graph_validate_code: t.safeCode
        });
    },
    updateSafeCode: function() {
        if (this.data.codeUrl && this.data.codeUrl.length > 0) {
            var e = t.urlParameter({});
            this.setData({
                showCodeUrl: this.data.codeUrl + "&group=" + e.group + "&time=" + Number(new Date()),
                safeCodeStr: ""
            });
        }
    },
    sendMessage: function(e) {
        var o = this, n = t.urls.sendLoginMessage, a = t.urlParameter(e);
        t.wxRequest.getRequest(n, a).then(function(e) {
            if (e.cancelShowError = !0, "0" == e.data.errcode) o.beginTimeDown(), o.showCodeInput(); else if ("868" == e.data.errcode) (t = e.data.codeurl).length > 0 && o.showSafeCode(t); else if ("866" == e.data.errcode) {
                var t = e.data.codeurl;
                wx.showModal({
                    showCancel: !1,
                    content: e.data.msg,
                    confirmText: "我知道了",
                    success: function(e) {
                        e.confirm && t.length > 0 && o.showSafeCode(t);
                    }
                });
            } else wx.showModal({
                showCancel: !1,
                content: e.data.msg,
                confirmText: "我知道了",
                success: function(e) {
                    e.confirm && o.updateSafeCode();
                }
            });
        });
    },
    getWxCodeToStartAccountLogin: function(e, t, n) {
        var a = this;
        o.wxLogin()().then(function(o) {
            console.log(o), o.code.length > 0 ? a.startAccountLogin(e, t, n, o.code) : a.startAccountLogin(e, t, n, "");
        }).catch(function(o) {
            a.startAccountLogin(e, t, n, "");
        });
    },
    startAccountLogin: function(o, n, a, i) {
        var s = this, d = t.urls.userLogin, c = t.urlParameter({
            user_name: o,
            user_password: e.hex_md5(n),
            code: a,
            wx_code: i && i.length > 0 ? i : "",
            qr_code: s.data.qr_code
        });
        t.wxRequest.getRequest(d, c).then(function(e) {
            if ("0" != e.data.errcode) return e.data.codeurl && e.data.codeurl.length > 0 && s.setData({
                loginCodeUrl: e.data.codeurl
            }), void (s.data.isLogining = !1);
            getApp().globalData.session_id = e.data.data.session_id, getApp().globalData.didLoadQuickLogin = !0, 
            s.getUserInfo();
        });
    },
    getUserInfo: function() {
        var e = this, o = t.urls.user_info, n = t.urlParameter({});
        t.wxRequest.getRequest(o, n).then(function(t) {
            if ("0" == t.data.errcode) {
                var o = t.data.data.user_data;
                o.session_id = getApp().globalData.session_id, getApp().setUserInfo(o), e.backWhenLoginSuccess(o);
            }
        }).finally(function() {
            e.data.isLogining = !1;
        });
    },
    getWxCodeToStartCodeLogin: function(e) {
        var t = this;
        o.wxLogin()().then(function(o) {
            o.code.length > 0 ? t.startCodeLogin(e, o.code) : t.startCodeLogin(e, "");
        }).catch(function() {
            t.startCodeLogin(e, "");
        });
    },
    startCodeLogin: function(e, o) {
        var n = this, a = t.urls.codeLogin, i = getApp().getChannel(), s = getApp().getFromScene(), d = t.urlParameter({
            mobile: n.data.phoneNum,
            code: e,
            wx_code: o,
            qr_code: this.data.qr_code,
            channel: i,
            from_scene: s
        });
        t.wxRequest.getRequest(a, d).then(function(e) {
            if (console.log(e.data), "0" == e.data.errcode) {
                var t = e.data.data.user_data;
                getApp().globalData.didLoadQuickLogin = !0, getApp().setUserInfo(t), n.backWhenLoginSuccess(t);
            } else "827" == e.data.errcode || "828" == e.data.errcode ? (e.cancelShowError = !0, 
            wx.showModal({
                showCancel: !1,
                content: e.data.msg,
                success: function(e) {
                    e.confirm && n.showCodeLogin();
                }
            })) : "819" == e.data.errcode && (e.cancelShowError = !0, wx.showModal({
                showCancel: !1,
                content: e.data.msg,
                success: function(e) {
                    e.confirm && n.clearCodeInput();
                }
            }));
        }).finally(function() {
            n.data.isLogining = !1;
        });
    },
    backWhenLoginSuccess: function(e) {
        this.data.qr_code && this.data.qr_code.length > 0 ? this.backAfterQuickLogin() : wx.navigateBack();
    },
    isPhoneNum: function(e) {
        return e && !e.length ? (wx.showToast({
            icon: "none",
            title: "请输入手机号"
        }), !1) : !!/^1\d{10}$/.test(e) || (wx.showToast({
            icon: "none",
            title: "请输入正确的手机号"
        }), !1);
    },
    isNotDefine: function(e, t) {
        return !!e.length || (wx.showToast({
            icon: "none",
            title: t
        }), !1);
    },
    upDateLoginSafeCode: function(e) {
        var t = this, o = e.currentTarget.dataset.codeurl, n = new Date().getTime(), a = o.split("&")[0] + "&" + n;
        t.setData({
            loginCodeUrl: a
        });
    },
    beginTimeDown: function() {
        var e = this, t = 60;
        e.setData({
            tiemDownText: t + "s后重新获取"
        });
        var o = setInterval(function() {
            t -= 1, e.setData({
                tiemDownText: t + "s后重新获取"
            }), 0 == t && (clearInterval(o), e.setData({
                tiemDownText: ""
            }));
        }, 1e3);
    },
    updateCinemaAndCityData: function(e) {
        var o = this, n = t.urls.cinemaDetail, a = t.urlParameter({
            cinema_id: e
        });
        t.wxRequest.getRequest(n, a).then(function(t) {
            if ("0" == t.data.errcode) {
                var n = t.data.data.cinema_data, a = {
                    id: e,
                    name: n.name,
                    address: n.address,
                    tel: n.phone,
                    is_app_aes_encrypt: n.is_app_aes_encrypt,
                    is_mobile_verification_needed: n.is_mobile_verification_needed
                };
                if (!n.city_id || n.city_id.length <= 0) o.needGoCardBind(this.data.qr_code, ""); else {
                    var i = {
                        id: n.city_id,
                        name: n.city_name
                    };
                    getApp().setCity(i), getApp().setCinema(a), o.needGoCardBind(o.data.qr_code, e);
                }
            } else o.needGoCardBind(this.data.qr_code, "");
        });
    },
    codeClearPhoneMum: function() {
        this.setData({
            codeLoginPhoneNum: ""
        });
    },
    accountClearPhoneMum: function() {
        this.setData({
            accountLoginPhoneNum: "",
            accountLoginPassWord: ""
        });
    },
    accountShowPassWord: function() {
        this.setData({
            showPassWord: !this.data.showPassWord
        });
    },
    nouse: function() {},
    not_agree: function(e) {
        wx.navigateBack();
    },
    agree: function() {
        this.setData({
            showUserProtocol: !0
        });
    },
    showWxLogin: function() {
        wx.setNavigationBarTitle({
            title: "登录"
        }), this.setData({
            currentTemplate: "wxLogin",
            phoneNum: this.data.codeLoginPhoneNum ? this.data.codeLoginPhoneNum : ""
        });
    }
});