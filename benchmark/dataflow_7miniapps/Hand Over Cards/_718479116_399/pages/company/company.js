var t = require("../../7931C4950691379C1F57AC929AD2E9B3.js");

function e(t) {
    if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
        if (Array.isArray(t) || (t = function(t, e) {
            if (!t) return;
            if ("string" == typeof t) return a(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(t, e);
        }(t))) {
            var e = 0, n = function() {};
            return {
                s: n,
                n: function() {
                    return e >= t.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: t[e++]
                    };
                },
                e: function(t) {
                    throw t;
                },
                f: n
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o, r, s = !0, i = !1;
    return {
        s: function() {
            o = t[Symbol.iterator]();
        },
        n: function() {
            var t = o.next();
            return s = t.done, t;
        },
        e: function(t) {
            i = !0, r = t;
        },
        f: function() {
            try {
                s || null == o.return || o.return();
            } finally {
                if (i) throw r;
            }
        }
    };
}

function a(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var a = 0, n = new Array(e); a < e; a++) n[a] = t[a];
    return n;
}

var n = require("../../7931C4950691379C1F57AC929AD2E9B3.js"), o = getApp();

Page({
    data: {
        systemInfo: o.systemInfo,
        zIndex: 101,
        teamList: [],
        enterprisesData: {},
        pageStatus: "",
        topIconColor: "black",
        topBgColor: "rgba(255,255,255,1)",
        isTop: !0,
        preOpera: "",
        companyData: {}
    },
    onPullDownRefresh: function() {
        var t = this;
        this.businessGet(function(e) {
            t.updatePageData(e), t.updateBubbleFun(e), wx.stopPullDownRefresh();
        }), this.setData({
            refreshTimer: new Date().getTime()
        });
    },
    onPageScroll: function(e) {
        if (clearTimeout(null), "detail" == this.data.pageStatus) {
            (0, t.changeTabarBg)(this, e), console.log(this.data.isTop), this.data.isTop || wx.setNavigationBarColor({
                frontColor: "#ffffff",
                backgroundColor: "#000000"
            });
        }
    },
    onLoad: function(t) {
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: "#ffffff"
        });
    },
    onShow: function() {
        var t = this;
        o.setToken(function() {
            t.businessGet(function(e) {
                t.updatePageData(e), t.logFun(), t.updateBubbleFun(e);
            }), t.addCardSuccess();
        });
    },
    onHide: function() {},
    updateCompany: function(t) {
        this.setData({
            companyData: t.detail
        });
    },
    businessGet: function(t) {
        var a = this;
        o.setRequest({
            url: "checkPerson",
            data: {
                openId: o.client.openid
            }
        }, function(n) {
            if (n.length > 0 && a.setData({
                pageStatus: "detail"
            }), n && n.length) {
                var r, s = e(n);
                try {
                    for (s.s(); !(r = s.n()).done; ) {
                        r.value.userOpenId = o.client.openid;
                    }
                } catch (t) {
                    s.e(t);
                } finally {
                    s.f();
                }
            }
            t && t(n);
        });
    },
    updateBubbleFun: function(t) {
        this.showSucc(), this.setData({
            updateBubble: {
                timer: new Date().getTime(),
                bussnessData: t || []
            }
        });
    },
    closeModel: function() {
        var t = this;
        o.burying.setPoint(o, 941), this.setData({
            stickSuc: !1
        }), this.businessGet(function(e) {
            t.updatePageData(e), t.updateBubbleFun(e);
        });
    },
    updatePageData: function(t) {
        var e = this, a = t;
        this.setData({
            teamList: a
        }), this.statusFunNew(a), this.enterprisesFun(a, function(t) {
            e.setData({
                enterprisesData: t
            }), o.enterprisesData = e.data.enterprisesData;
        });
    },
    statusFunNew: function(t) {
        var e = this.data.pageStatus, a = t, n = "", o = 101;
        e || (n = a.length > 0 ? "detail" : "build"), e && (n = a.length > 0 ? e : "build"), 
        "detail" == n && (o = 120), wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: "#000000"
        }), this.setData({
            pageStatus: n,
            zIndex: o
        });
    },
    fontColorFun: function(t) {
        var e = this.data.pageStatus;
        console.log("fontColorFun", e, t.length);
        try {
            t.length ? wx.setNavigationBarColor({
                frontColor: "#ffffff",
                backgroundColor: "#000000"
            }) : wx.setNavigationBarColor({
                frontColor: "#000000",
                backgroundColor: "#ffffff"
            });
        } catch (t) {}
    },
    logFun: function() {
        var t = this.data.pageStatus, e = this.data.enterprisesData;
        switch (t) {
          case "build":
            o.burying.setSensorEvent(o, {
                CardType: "空企业页"
            }, "CompanyViewScreen");
            break;

          case "detail":
            0 == e.entState ? o.burying.setSensorEvent(o, {
                CardType: "企业功能列表（已过期）"
            }, "CompanyViewScreen") : o.burying.setSensorEvent(o, {
                CardType: "企业功能列表（未过期）"
            }, "CompanyViewScreen");
        }
    },
    enterprisesFun: function(t, e) {
        var a = wx.getStorageSync("entId"), n = {};
        t[0] && (n = t[0]);
        for (var o = 0; o < t.length; o++) if (t[o].entId == a) {
            n = t[o];
            break;
        }
        e && e(n), t.length > 0 && !a && wx.setStorageSync("entId", n.entId);
    },
    addCardSuccess: function() {
        try {
            wx.getStorageSync("cardAddSuccessShow") && (n.showtoast("名片已添加", "success", 2e3), 
            wx.setStorageSync("cardAddSuccessShow", !1));
        } catch (t) {}
    },
    showSucc: function() {
        o.createTeam && (o.createTeam = !1, this.setData({
            stickSuc: !0
        }));
    },
    confirmCompany: function(t) {
        this.showSucc();
    },
    dismissComplete: function() {
        var t = this;
        this.businessGet(function(e) {
            t.updatePageData(e), t.updateBubbleFun(e), t.logFun();
        });
    },
    exitCompany: function() {
        var t = this;
        this.businessGet(function(e) {
            t.updatePageData(e), t.updateBubbleFun(e), t.logFun();
        });
    },
    addCardtoCompany: function() {
        var t = this;
        this.businessGet(function(e) {
            t.updatePageData(e), t.updateBubbleFun(e);
        });
    },
    onShareAppMessage: function(t) {
        var e = "", a = {};
        return "detail" == this.data.pageStatus ? (a = this.data.enterprisesData, e = o.source.shareClaimfilling + encodeURIComponent(a.entName), 
        n.shareAppMessa({
            title: "邀请你加入企业，一起使用电子名片",
            path: "pages/companyManage/inviteBindingWechat/inviteBindingWechat?entId=" + a.entId,
            imageUrl: e
        })) : n.shareAppMessa({
            title: "我向您推荐“递名片”",
            path: "pages/cardMy/about/about?shareOthers=company&shareType=05",
            imageUrl: o.source.shareImage
        });
    }
});