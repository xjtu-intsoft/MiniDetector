var a, t = getApp(), e = require("../../../7931C4950691379C1F57AC929AD2E9B3.js"), n = !1;

Page({
    data: {
        canvasCheck: !1,
        backSrc: t.source.my_introBack,
        topTitle: "递名片",
        systemInfo: t.systemInfo,
        pname: "",
        mycard: ""
    },
    onLoad: function(e) {
        var r = this;
        console.log("showcard.onload", e), a = e, this.mycardGet(function() {
            r.sortFun();
        }), this.setData({
            canvasCheck: !0,
            options: a,
            pname: wx.getStorageSync("pname")
        }), n = !0, t.compatibleManage.shareMenu && wx.showShareMenu({
            withShareTicket: !0
        });
    },
    onShow: function() {
        t.autoJumpIknow = !1, n ? n = !1 : this.data.videoShow && "1131" == t.gloabelOptions.scene && wx.switchTab({
            url: "../cardMain"
        });
    },
    mycardGet: function(a) {
        var n = this;
        if (t.ifFresh.mycard) t.setRequest({
            url: "mycard"
        }, function(t) {
            n.setData({
                mycard: t,
                freshNum: new Date().getTime()
            });
            try {
                wx.setStorageSync("customAvatar", t.defCard.customAvatar);
            } catch (a) {}
            a && a();
        }, function() {
            t.mycard.pic_prefix || n.setData({
                "netError.show": !0
            });
        }, function() {
            e.hidetoast(), t.compatibleManage.navigationBarLoading && wx.hideNavigationBarLoading(), 
            wx.stopPullDownRefresh();
        }); else {
            console.log("huancun", t.mycard), this.setData({
                mycard: t.mycard
            });
            try {
                wx.setStorageSync("customAvatar", t.mycard.defCard.customAvatar);
            } catch (a) {}
            a && a(), t.compatibleManage.navigationBarLoading && wx.hideNavigationBarLoading();
        }
    },
    sortFun: function() {
        var t = getCurrentPages();
        if (t.length > 1) {
            var e = t[t.length - 3].route;
            t[t.length - 3].data;
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
    iknown: function() {
        wx.switchTab({
            url: "/pages/cardMain/cardMain"
        });
    },
    buildBack: function() {
        wx.navigateBack({
            delta: 3
        });
    },
    toSendCard: function() {
        t.burying.setPoint(t, 557);
    },
    clickCard: function() {
        t.burying.setPoint(t, 688);
    },
    toHome: function() {
        t.burying.setPoint(t, 687);
    },
    onShareAppMessage: function(n) {
        n.target && "1" == n.target.dataset.t && this.setData({
            videoShow: !0
        }), n.target && "2" == n.target.dataset.t && ("ios" == t.systemInfo.platform ? setTimeout(function() {
            wx.switchTab({
                url: "../cardMain"
            });
        }, 17.5) : setTimeout(function() {
            wx.switchTab({
                url: "../cardMain"
            });
        }, 120));
        var r = t.source.sharePrefix + a.urlName;
        return console.log("imageUrl", r), e.shareAppMessa({
            title: "我是" + a.name + "，邀请您与我交换名片",
            path: "pages/cardAll/howEnter/howEnter?id=" + a.id + "&shareOthers=1&shareType=01&formtoken=" + this.data.mycard.defCard.formtoken,
            imageUrl: r
        });
    }
});