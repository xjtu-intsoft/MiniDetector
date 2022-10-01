var t, a = require("../../../@babel/runtime/helpers/interopRequireDefault"), e = a(require("../../../595319F00691379C3F3571F767A1E9B3.js")), s = a(require("../../../4F4638B00691379C292050B78222E9B3.js")), r = require("../../../771936D20691379C117F5ED59280E9B3.js"), o = getApp(), i = require("../../../7931C4950691379C1F57AC929AD2E9B3.js");

(0, s.default)(e.default, {
    data: {
        addrMartchData: [],
        valueStatus: !1,
        setting: !1,
        ifDelete: {
            show: !1
        },
        addrVal: null,
        hasUpdateAddr: null
    },
    onLoad: function(a) {
        console.log("addrMatch.onload", a);
        var e = this.store.data.cbData;
        e[(t = a).type] && this.setData({
            addrVal: e[a.type],
            focus: !0
        }), this.getAddrStorage();
    },
    onShow: function() {
        o.temporaryData.edit.enterMark = "addrMatch", this.settingMessage();
    },
    settingMessage: function() {
        var t = this;
        try {
            wx.getSetting && wx.getSetting({
                success: function(a) {
                    a.authSetting["scope.userLocation"] || null == a.authSetting["scope.userLocation"] ? t.setData({
                        setting: !0
                    }) : t.setData({
                        setting: !1
                    });
                }
            });
        } catch (t) {}
    },
    clear: function() {
        this.store.data.cbData[t.type] = "", this.store.data.hasUpdateAddr = t.type, this.formDataGet(t.type, ""), 
        this.update(), this.setAddrStorage("");
    },
    focus: function(t) {
        var a = this;
        t.detail.value && (0, r.matchFun)(t.detail.value, this).then(function(t) {
            a.setData({
                addrMartchData: t
            });
        });
    },
    input: function(a) {
        var e = this;
        this.store.data.cbData[t.type] = a.detail.value, this.store.data.hasUpdateAddr = t.type, 
        this.formDataGet(t.type, a.detail.value), this.update(), a.detail.value && (0, r.matchFun)(a.detail.value, this).then(function(t) {
            e.setData({
                addrMartchData: t
            });
        });
    },
    confirm: function(a) {
        console.log("confirm", e);
        var e = a.currentTarget.dataset.detail;
        this.store.data.cbData[t.type] = e, this.store.data.hasUpdateAddr = t.type, this.formDataGet(t.type, e), 
        this.update(), this.setAddrStorage(e), wx.navigateBack({
            delta: 1
        });
    },
    getPosition: function() {
        var a = this, e = this.store.data.cbData;
        this.data.loading || (this.setData({
            loading: !0
        }), wx.getLocation({
            success: function(s) {
                wx.chooseLocation({
                    latitude: s.latitude,
                    longitude: s.longitude,
                    success: function(s) {
                        e[t.type] = s.address, a.store.data.hasUpdateAddr = t.type, a.formDataGet(t.type, s.address), 
                        a.update(), a.setAddrStorage(s.address), wx.navigateBack({
                            delta: 1
                        });
                    },
                    fail: function() {
                        i.showtoast("获取位置失败", "loading", 1500), a.setData({
                            loading: !1
                        });
                    }
                });
            },
            fail: function(t) {
                i.showtoast("获取位置失败", "loading", 1500), a.setData({
                    loading: !1
                }), a.settingMessage();
            }
        }));
    },
    setAddrStorage: function(a) {
        var e = "";
        if (console.log("optionsL.from", t.from), "howEnter" == t.from ? e = "quickMakeStorage" : "cardmain" == t.from && (e = "nullMain"), 
        wx.getStorageSync(e)) try {
            var s = wx.getStorageSync(e).val;
            s && s.forEach(function(t) {
                "addr1" == t[0] && (t[2] = a);
            }), wx.setStorageSync(e, {
                val: s
            });
        } catch (t) {}
    },
    getAddrStorage: function() {
        var a = this, e = "";
        if (console.log("optionsL.from", t.from), "howEnter" == t.from ? e = "quickMakeStorage" : "cardmain" == t.from && (e = "nullMain"), 
        wx.getStorageSync(e)) try {
            var s = wx.getStorageSync(e).val;
            s && s.forEach(function(t) {
                "addr1" == t[0] && a.setData({
                    addrVal: t[2]
                });
            }), wx.setStorageSync(e, {
                val: s
            });
        } catch (t) {}
    },
    blur: function(a) {
        this.store.data.cbData[t.type] = a.detail.value, this.store.data.hasUpdateAddr = t.type, 
        this.formDataGet(t.type, a.detail.value), this.update(), this.setAddrStorage(a.detail.value);
    },
    selectAddr: function(a) {
        var e = a.currentTarget.dataset.detail, s = this.store.data.cbData;
        console.log("valN", e), s[t.type] = e, this.store.data.hasUpdateAddr = t.type, this.formDataGet(t.type, e), 
        this.update(), this.setData({
            cardAddr: e
        }), this.setAddrStorage(e), wx.navigateBack({
            delta: 1
        });
    },
    formDataGet: function(t, a) {
        (console.log("formdataget", a), this.store.data.initData && this.store.data.initData.length) && this.store.data.initData.formData.form.forEach(function(e, s) {
            e[0] == t && (e[2] = a);
        });
    },
    onShareAppMessage: function() {
        return i.shareAppMessa({
            title: "我向您推荐“递名片”",
            path: "pages/cardMy/about/about?shareOthers=addrMatch&shareType=05",
            imageUrl: o.source.shareImage
        });
    }
});