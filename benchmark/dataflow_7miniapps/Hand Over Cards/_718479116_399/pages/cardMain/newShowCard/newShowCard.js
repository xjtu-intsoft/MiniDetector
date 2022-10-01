var a, t = getApp(), e = require("../../../7931C4950691379C1F57AC929AD2E9B3.js");

Page({
    data: {
        canvasCheck: !1,
        backSrc: t.source.my_introBack,
        showVideoAirWindow: !1
    },
    onLoad: function(e) {
        console.log("showcard.onload", e), a = e, this.sortFun(), this.setData({
            canvasCheck: !0
        }), t.compatibleManage.shareMenu && wx.showShareMenu({
            withShareTicket: !0
        });
    },
    onShow: function() {
        var a = this;
        t.setRequest({
            url: "mycard"
        }, function(t) {
            a.setData({
                mycard: t.defCard
            }), console.log("我的名片", t);
        });
    },
    playVideo: function() {
        try {
            this.setData({
                showVideoAirWindow: !0
            });
        } catch (a) {}
    },
    getDialog: function() {
        try {
            this.setData({
                showVideoAirWindow: !1
            });
        } catch (a) {}
    },
    iKnown: function() {
        try {
            this.setData({
                showVideoAirWindow: !1
            });
        } catch (a) {}
    },
    sortFun: function() {
        var t = getCurrentPages();
        if (t.length > 1) {
            var e = t[t.length - 2].route;
            t[t.length - 2].data;
            "pages/cardAll/howEnter/howEnter" == e && ("true" == a.intransitIf || "ishowenter" != a.pageOrigin && this.autoExchange(a.id, a.fromOpenid));
        }
    },
    autoExchange: function(a, e) {
        t.setRequest({
            url: "returnCard",
            method: "POST",
            data: {
                id: a,
                othersOpenid: e
            }
        }), t.rsListObj.ifFresh = !0;
    },
    toHome: function() {
        var a, e = wx.getStorageSync("showCardMainShadHc");
        console.log(e, "showCardMainShade变量"), a = e ? "" : "cardShade", console.log(a, "缓存变量"), 
        wx.setStorageSync("showCardMainShadHc", a), t.burying.setPoint(t, 287), wx.switchTab({
            url: "../cardMain"
        });
    },
    onShareAppMessage: function() {
        "ios" == t.systemInfo.platform ? wx.switchTab({
            url: "../cardMain"
        }) : setTimeout(function() {
            wx.switchTab({
                url: "../cardMain"
            });
        }, 120);
        var o = t.source.sharePrefix + a.urlName;
        return e.shareAppMessa({
            title: "我是" + a.name + "，邀请您与我交换名片",
            path: "pages/cardAll/howEnter/howEnter?id=" + a.id + "&shareOthers=1&shareType=01&formtoken=" + this.data.mycard.formtoken,
            imageUrl: o
        });
    }
});