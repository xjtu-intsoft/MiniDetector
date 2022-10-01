var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
    return typeof n;
} : function(n) {
    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
};

!function(n, o) {
    "object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = o() : "function" == typeof define && define.amd ? define(o) : n.Ald = o();
}(void 0, function() {
    function n(n) {
        this.app = n;
    }
    function o(o) {
        O = o, this.aldstat = new n(this), v("app", "launch");
    }
    function t(n) {
        if (O = n, C = n.query.ald_share_src, j = n.query.aldsrc || "", F = n.query.ald_share_src, 
        A = Date.now(), T = Date.now(), !on) {
            R = "" + Date.now() + Math.floor(1e7 * Math.random()), E = !1;
            try {
                wx.setStorageSync("ald_ifo", !1);
            } catch (n) {}
        }
        on = !1, 0 !== U && Date.now() - U > 3e5 && (I = "" + Date.now() + Math.floor(1e7 * Math.random()), 
        T = Date.now()), n.query.ald_share_src && "1044" == n.scene && n.shareTicket ? wx.getShareInfo({
            shareTicket: n.shareTicket,
            success: function(n) {
                G = n, _("event", "ald_share_click", JSON.stringify(n));
            }
        }) : n.query.ald_share_src && _("event", "ald_share_click", 1), "" === K && wx.getSetting({
            withCredentials: !0,
            success: function(n) {
                n.authSetting["scope.userInfo"] && wx.getUserInfo({
                    withCredentials: !0,
                    success: function(n) {
                        var o = p();
                        K = n, o.ufo = w(n), q = g(n.userInfo.avatarUrl.split("/")), h(o);
                    }
                });
            }
        }), v("app", "show");
    }
    function e() {
        U = Date.now(), "" === K && wx.getSetting({
            success: function(n) {
                n.authSetting["scope.userInfo"] && wx.getUserInfo({
                    withCredentials: !0,
                    success: function(n) {
                        K = n, q = g(n.userInfo.avatarUrl.split("/"));
                        var o = p();
                        o.ufo = w(n), h(o);
                    }
                });
            }
        }), v("app", "hide");
    }
    function a(n) {
        J++, _("event", "ald_error_message", n);
    }
    function r(n) {
        X = n;
    }
    function i() {
        z = this.route, Y = Date.now(), $ = 0, Z = 0;
    }
    function s() {
        S("page", "hide"), Q = this.route;
    }
    function c() {
        S("page", "unload"), Q = this.route;
    }
    function u() {
        $++;
    }
    function f() {
        Z++;
    }
    function l(n) {
        var o = y(n.path), t = {};
        for (var e in O.query) "ald_share_src" === e && (t[e] = O.query[e]);
        var a = "";
        if (a = -1 == n.path.indexOf("?") ? n.path + "?" : n.path.substr(0, n.path.indexOf("?")) + "?", 
        "" !== o) for (var e in o) t[e] = o[e];
        t.ald_share_src ? -1 == t.ald_share_src.indexOf(N) && t.ald_share_src.length < 200 && (t.ald_share_src = t.ald_share_src + "," + N) : t.ald_share_src = N;
        for (var r in t) -1 == r.indexOf("ald") && (a += r + "=" + t[r] + "&");
        return n.path = a + "ald_share_src=" + t.ald_share_src, _("event", "ald_share_status", n), 
        n;
    }
    function d() {
        function n() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
        }
        return n() + n() + n() + n() + n() + n() + n() + n();
    }
    function h(n) {
        var o = n, t = 0, e = 0;
        !function a(r) {
            e++, r ? (n = {}, n.et = Date.now(), n.at = R, n.uu = N, n.v = M, n.ak = o.ak, n.life = o.life, 
            n.ev = o.ev, n.err = "err", n.status = t) : (H++, n.at = R, n.et = Date.now(), n.uu = N, 
            n.v = M, n.ak = b.app_key, n.wsr = O, n.oifo = E, n.rq_c = H), wx.request({
                url: "https://" + P + ".aldwx.com/d.html",
                data: n,
                header: {
                    AldStat: "MiniApp-Stat",
                    waid: b.appid || "",
                    wst: b.appsecret || "",
                    se: L || "",
                    op: k || "",
                    img: q
                },
                method: "GET",
                success: function(n) {
                    t = n.statusCode, 200 != n.statusCode && e <= 3 && a("errorsend");
                },
                fail: function() {
                    e <= 3 && a("errorsend");
                }
            });
        }();
    }
    function p() {
        var n = {};
        for (var o in V) n[o] = V[o];
        return n;
    }
    function g(n) {
        for (var o = "", t = 0; t < n.length; t++) n[t].length > o.length && (o = n[t]);
        return o;
    }
    function w(n) {
        var o = {};
        for (var t in n) "rawData" != t && "errMsg" != t && (o[t] = n[t]);
        return o;
    }
    function y(n) {
        if (-1 == n.indexOf("?")) return "";
        var o = {};
        return n.split("?")[1].split("&").forEach(function(n) {
            var t = n.split("=")[1];
            o[n.split("=")[0]] = t;
        }), o;
    }
    function v(n, o) {
        var t = p();
        t.ev = n, t.life = o, t.ec = J, t.st = B, j && (t.qr = j, t.sr = j), C && (t.usr = C), 
        "launch" !== o && (t.ahs = I), "hide" === o && (t.hdr = Date.now() - T, t.dr = Date.now() - A, 
        t.ifo = !!E), h(t);
    }
    function S(n, o) {
        var t = p();
        t.ev = n, t.st = Date.now(), t.life = o, t.pp = z, t.pc = Q, t.dr = Date.now() - B, 
        t.ndr = Date.now() - Y, t.rc = $, t.bc = Z, t.ahs = I, X && "{}" != JSON.stringify(X) && (t.ag = X), 
        j && (t.qr = j, t.sr = j), C && (t.usr = C), W || (nn = z, W = !0, t.ifp = W, t.fp = z), 
        h(t);
    }
    function _(n, o, t) {
        var e = p();
        e.ev = n, e.tp = o, e.st = B, t && (e.ct = t), h(e);
    }
    function m(n, o, t) {
        if (n[o]) {
            var e = n[o];
            n[o] = function(n) {
                t.call(this, n, o), e.call(this, n);
            };
        } else n[o] = function(n) {
            t.call(this, n, o);
        };
    }
    function x(n) {
        var r = {};
        for (var i in n) "onLaunch" !== i && "onShow" !== i && "onHide" !== i && "onError" !== i && "onPageNotFound" !== i && "onUnlaunch" !== i && (r[i] = n[i]);
        r.onLaunch = function(t) {
            o.call(this, t), "function" == typeof n.onLaunch && n.onLaunch.call(this, t);
        }, r.onShow = function(o) {
            t.call(this, o), n.onShow && "function" == typeof n.onShow && n.onShow.call(this, o);
        }, r.onHide = function() {
            e.call(this), n.onHide && "function" == typeof n.onHide && n.onHide.call(this);
        }, r.onError = function(o) {
            a.call(this, o), n.onError && "function" == typeof n.onError && n.onError.call(this, o);
        }, r.onUnlaunch = function() {
            n.onUnlaunch && "function" == typeof n.onUnlaunch && n.onUnlaunch.call(this);
        }, r.onPageNotFound = function(o) {
            n.onPageNotFound && "function" == typeof n.onPageNotFound && n.onPageNotFound.call(this, o);
        }, App(r);
    }
    function D(n) {
        var o = {};
        for (var t in n) "onLoad" !== t && "onReady" !== t && "onShow" !== t && "onHide" !== t && "onUnload" !== t && "onPullDownRefresh" !== t && "onReachBottom" !== t && "onShareAppMessage" !== t && "onPageScroll" !== t && "onTabItemTap" !== t && (o[t] = n[t]);
        o.onLoad = function(o) {
            r.call(this, o), "function" == typeof n.onLoad && n.onLoad.call(this, o);
        }, o.onShow = function(o) {
            i.call(this), "function" == typeof n.onShow && n.onShow.call(this, o);
        }, o.onHide = function(o) {
            s.call(this), "function" == typeof n.onHide && n.onHide.call(this, o);
        }, o.onUnload = function(o) {
            c.call(this), "function" == typeof n.onUnload && n.onUnload.call(this, o);
        }, o.onReady = function(o) {
            n.onReady && "function" == typeof n.onReady && n.onReady.call(this, o);
        }, o.onReachBottom = function(o) {
            f(), n.onReachBottom && "function" == typeof n.onReachBottom && n.onReachBottom.call(this, o);
        }, o.onPullDownRefresh = function(o) {
            u(), n.onPullDownRefresh && "function" == typeof n.onPullDownRefresh && n.onPullDownRefresh.call(this, o);
        }, o.onPageScroll = function(o) {
            n.onPageScroll && "function" == typeof n.onPageScroll && n.onPageScroll.call(this, o);
        }, o.onTabItemTap = function(o) {
            n.onTabItemTap && "function" == typeof n.onTabItemTap && n.onTabItemTap.call(this, o);
        }, n.onShareAppMessage && "function" == typeof n.onShareAppMessage && (o.onShareAppMessage = function(o) {
            var t = n.onShareAppMessage.call(this, o);
            return void 0 === t ? (t = {}, t.path = this.route) : void 0 === t.path && (t.path = this.route), 
            l.call(this, t);
        }), Page(o);
    }
    var b = require("./ald-stat-conf.js"), M = "7.0.0", P = "log", R = "" + Date.now() + Math.floor(1e7 * Math.random()), I = "" + Date.now() + Math.floor(1e7 * Math.random()), T = "", A = 0, U = 0, L = "", k = "", q = "", H = 0, O = "", E = "", N = function() {
        var n = "";
        try {
            n = wx.getStorageSync("aldstat_uuid");
        } catch (o) {
            n = "uuid_getstoragesync";
        }
        if (n) E = !1; else {
            n = d(), E = !0;
            try {
                wx.setStorageSync("aldstat_uuid", n), wx.setStorageSync("ald_ifo", !0);
            } catch (n) {
                wx.setStorageSync("aldstat_uuid", "uuid_getstoragesync");
            }
        }
        return n;
    }(), B = Date.now(), C = "", j = "", F = "", J = 0, G = "", K = "", V = {}, W = !1, z = "", Q = "", X = "", Y = "", Z = 0, $ = 0, nn = "", on = !0;
    !function() {
        wx.request({
            url: "https://" + P + ".aldwx.com/config/app.json",
            header: {
                AldStat: "MiniApp-Stat"
            },
            method: "GET",
            success: function(n) {
                200 === n.statusCode && (n.data.version != M && console.warn("您的SDK不是最新版本，请尽快升级！"), 
                n.data.warn && console.warn(n.data.warn), n.data.error && console.error(n.data.error));
            }
        });
    }();
    try {
        var tn = wx.getSystemInfoSync();
        V.br = tn.brand, V.pm = tn.model, V.pr = tn.pixelRatio, V.ww = tn.windowWidth, V.wh = tn.windowHeight, 
        V.lang = tn.language, V.wv = tn.version, V.wvv = tn.platform, V.wsdk = tn.SDKVersion, 
        V.sv = tn.system;
    } catch (n) {}
    return wx.getNetworkType({
        success: function(n) {
            V.nt = n.networkType;
        }
    }), wx.getSetting({
        success: function(n) {
            n.authSetting["scope.userLocation"] ? wx.getLocation({
                type: "wgs84",
                success: function(n) {
                    V.lat = n.latitude, V.lng = n.longitude, V.spd = n.speed;
                }
            }) : b.getLocation && wx.getLocation({
                type: "wgs84",
                success: function(n) {
                    V.lat = n.latitude, V.lng = n.longitude, V.spd = n.speed;
                }
            });
        }
    }), n.prototype.debug = function(n) {
        _("debug", "0", n);
    }, n.prototype.warn = function(n) {
        _("warn", "1", n);
    }, n.prototype.sendEvent = function(n, o) {
        if ("" !== n && "string" == typeof n && n.length <= 255) if ("string" == typeof o && o.length <= 255) _("event", n, o); else if ("object" == (void 0 === o ? "undefined" : _typeof(o))) {
            if (JSON.stringify(o).length >= 255) return void console.error("自定义事件参数不能超过255个字符");
            _("event", n, JSON.stringify(o));
        } else void 0 === o ? _("event", n, !1) : console.error("事件参数必须为String,Object类型,且参数长度不能超过255个字符"); else console.error("事件名称必须为String类型且不能超过255个字符");
    }, n.prototype.sendSession = function(n) {
        if ("" === n || !n) return void console.error("请传入从后台获取的session_key");
        if ("" === b.appid || "" === b.appsecret) return void console.error("请在配置文件中填写小程序的appid和appsecret！");
        L = n;
        var o = p();
        o.st = Date.now(), o.tp = "session", o.ct = "session", o.ev = "event", "" === K ? wx.getSetting({
            success: function(n) {
                n.authSetting["scope.userInfo"] ? wx.getUserInfo({
                    success: function(n) {
                        o.ufo = w(n), q = g(n.userInfo.avatarUrl.split("/")), "" !== G && (o.gid = G), h(o);
                    }
                }) : "" !== G ? (o.gid = G, h(o)) : console.warn("用户未授权");
            }
        }) : (o.ufo = K, "" !== G && (o.gid = G), h(o));
    }, n.prototype.sendOpenid = function(n) {
        if ("" === n || !n) return void console.error("openID不能为空");
        k = n;
        var o = p();
        o.st = Date.now(), o.tp = "openid", o.ev = "event", o.ct = "openid", h(o);
    }, b.plugin ? {
        App: x,
        Page: D
    } : function(n) {
        !function() {
            var n = App, d = Page;
            App = function(r) {
                m(r, "onLaunch", o), m(r, "onShow", t), m(r, "onHide", e), m(r, "onError", a), n(r);
            }, Page = function(n) {
                var o = n.onShareAppMessage;
                m(n, "onLoad", r), m(n, "onUnload", c), m(n, "onShow", i), m(n, "onHide", s), m(n, "onReachBottom", f), 
                m(n, "onPullDownRefresh", u), void 0 !== o && null !== o && (n.onShareAppMessage = function(n) {
                    if (void 0 !== o) {
                        var t = o.call(this, n);
                        return void 0 === t ? (t = {}, t.path = this.route) : void 0 === t.path && (t.path = this.route), 
                        l(t);
                    }
                }), d(n);
            };
        }();
    }();
});