var t, a, e = require("../../../C2DAF6850691379CA4BC9E829E80E9B3.js"), r = getApp(), n = require("../../../7931C4950691379C1F57AC929AD2E9B3.js");

Page({
    data: {
        addrMartchData: [],
        valueStatus: !1,
        setting: !1,
        ifDelete: {
            show: !1
        }
    },
    onLoad: function(e) {
        console.log("addrMatch.onload", e);
        var r = {};
        e.current = e.current, t = e, a = getCurrentPages()[getCurrentPages().length - 2].data;
        var n = this.getAddr();
        n && (r.value = n, r.valueStatus = !0), r.focus = !0, this.setData(r);
    },
    onShow: function() {
        r.temporaryData.edit.enterMark = "addrMatch", this.settingMessage();
    },
    getAddr: function() {
        return "entAddr" == t.current ? a.entAddr : (t.current = Number(t.current), a.formData[t.current][2]);
    },
    setAddr: function(e) {
        "entAddr" == t.current ? a.entAddr = e : (t.current = Number(t.current), a.formData[t.current][2] = e);
    },
    clearAddr: function() {
        "entAddr" == t.current ? a.entAddr = "" : (t.current = Number(t.current), a.formData[t.current][2] = "");
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
        this.setData({
            addrMartchData: [],
            value: "",
            valueStatus: !1,
            focus: !0
        }), this.clearAddr();
    },
    focus: function(t) {
        (0, e.matchFun)(t.detail.value, this);
    },
    input: function(t) {
        (0, e.matchFun)(t.detail.value, this), t.detail.value.trim() ? !this.data.valueStatus && this.setData({
            valueStatus: !0
        }) : this.data.valueStatus && this.setData({
            valueStatus: !1
        });
        var a = t.detail.value.trim() ? t.detail.value : "";
        this.setAddr(a);
    },
    confirm: function(t) {
        wx.navigateBack({
            delta: 1
        });
    },
    getPosition: function() {
        var t = this;
        this.data.loading || (this.setData({
            loading: !0
        }), wx.getLocation({
            success: function(a) {
                wx.chooseLocation({
                    latitude: a.latitude,
                    longitude: a.longitude,
                    success: function(a) {
                        var e = a.address.trim() ? a.address : "";
                        t.setAddr(e), wx.navigateBack({
                            delta: 1
                        });
                    },
                    fail: function() {
                        n.showtoast("获取位置失败", "loading", 1500), t.setData({
                            loading: !1
                        });
                    }
                });
            },
            fail: function(a) {
                n.showtoast("获取位置失败", "loading", 1500), t.setData({
                    loading: !1
                }), t.settingMessage();
            }
        }));
    },
    blur: function(t) {},
    selectAddr: function(t) {
        var a = t.currentTarget.dataset.detail;
        a = a.trim() ? a : "", this.setAddr(a), wx.navigateBack({
            delta: 1
        });
    },
    onShareAppMessage: function() {
        return n.shareAppMessa({
            title: "我向您推荐“递名片”",
            path: "pages/cardMy/about/about?shareOthers=addrMatch&shareType=05",
            imageUrl: r.source.shareImage
        });
    }
});