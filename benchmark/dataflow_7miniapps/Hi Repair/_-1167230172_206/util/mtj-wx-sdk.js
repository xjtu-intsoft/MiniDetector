!function(e) {
    function t() {
        return "undefined" != typeof crypto && crypto.getRandomValues ? crypto.getRandomValues(new Uint32Array(1))[0] : Math.floor(4294967295 * Math.random());
    }
    function n(e, t) {
        return "[object " + t + "]" === {}.toString.call(e);
    }
    function r(e) {
        return (n(e, "Object") || n(e, "Array")) && Object.keys(e).forEach(function(t) {
            var o = e[t];
            n(o, "Object") || n(o, "Array") ? e[t] = r(o) : e[t] = "" + o;
        }), e;
    }
    function o(e) {
        return n(e, "String") && /^\d{11}$/.test(e);
    }
    function i(e) {
        return n(e, "String") && 28 === e.length;
    }
    function a(e) {
        return new Promise(function(t, n) {
            return e.data = e.data || {}, x.blacklist && (-1 < x.blacklist.indexOf("all") && e.data.et || -1 < x.blacklist.indexOf("behavior") && "behavior" === e.data.et) ? t() : (e.data.v = O, 
            e.data.rqc = ++M, function(e) {
                return JSON.stringify(e).length <= 204800;
            }(e.data) ? (e.success = function(e) {
                return t(e);
            }, e.fail = function(e) {
                return n(e);
            }, void function(e) {
                if (!1 !== x.trackStatus) {
                    var t = e.data.et ? {
                        mtj_ii: e.data.uuid || "",
                        mtj_et: e.data.et,
                        mtj_en: e.data.en
                    } : {};
                    j.request({
                        url: e.url,
                        data: e.data,
                        header: Object.assign({
                            "content-type": "application/json"
                        }, t, e.header),
                        method: e.method || "POST",
                        dataType: e.dataType || "json",
                        success: function(t) {
                            e.success && e.success(t);
                        },
                        fail: function(t) {
                            e.fail && e.fail(t);
                        }
                    });
                }
            }(e)) : (M--, n(new Error("invalid data"))));
        });
    }
    function c(e, r) {
        var o = n(r, "Object") ? JSON.stringify(r) : "" + r;
        a({
            url: S,
            dataType: "string",
            data: Object.assign({}, A, {
                et: "error",
                en: e,
                ep: {
                    ex: o
                },
                rid: t()
            })
        });
    }
    function u(e) {
        e.rid = t(), e.aso = e.aso || {};
        var n = {
            url: S,
            dataType: "string",
            data: Object.assign({}, A, e)
        };
        a(n), (N.circleToken || N.circleByThreeFingers) && ("page" === e.et && "show" === e.en || "behavior" === e.et && "tap" === e.en) && (n.url = "https://hmma.baidu.com/mini.gif?circle=1", 
        n.data.token = N.circleToken, a(n).catch(function(e) {
            return console.error(e);
        }));
    }
    function s(e) {
        try {
            return j.getStorageSync(e);
        } catch (e) {
            c("getStorageSync", e);
        }
    }
    function f(e, t) {
        try {
            j.setStorageSync(e, t);
        } catch (e) {
            c("setStorageSync", e);
        }
    }
    function l() {
        return b || (A.sid = t(), A.rqc = 0, b = Promise.all([ Promise.resolve().then(function() {
            var e = s(_);
            return n(e, "String") && 32 === e.length || (e = ([ 1e7 ] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, function(e) {
                return (e ^ ("undefined" != typeof crypto && crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] : Math.floor(255 * Math.random())) & 15 >> e / 4).toString(16);
            }), f(_, e)), e;
        }), new Promise(function(e) {
            j.getSystemInfo({
                success: function(t) {
                    delete t.errMsg, e(t);
                },
                fail: function() {
                    e({});
                }
            });
        }), new Promise(function(e) {
            j.getNetworkType({
                success: function(t) {
                    delete t.errMsg, e(t);
                },
                fail: function() {
                    e({});
                }
            });
        }), Promise.resolve().then(function() {
            var e = s(P), t = n(e, "Object") ? e : {};
            return new Promise(function(e) {
                j.getSetting({
                    success: function(n) {
                        n.authSetting && n.authSetting["scope.userInfo"] ? j.getUserInfo({
                            success: function(n) {
                                delete n.userInfo.errMsg, e(Object.assign(t, n.userInfo));
                            },
                            fail: function() {
                                e(t);
                            }
                        }) : e(t);
                    },
                    fail: function() {
                        e(t);
                    }
                });
            });
        }), new Promise(function(e) {
            if (!x.getLocation) return e({});
            j.getLocation({
                type: "wgs84",
                success: function(t) {
                    delete t.errMsg, e(t);
                },
                fail: function() {
                    e({});
                }
            });
        }), Promise.resolve().then(function() {
            var e = s(I);
            return n(e, "Object") ? e : {};
        }) ]).then(function(e) {
            A.uuid = e[0], q.system = r(e[1]), q.network = r(e[2]), 0 < Object.keys(e[3]).length && (q.user = r(e[3])), 
            0 < Object.keys(e[4]).length && (q.location = r(e[4])), 0 < Object.keys(e[5]).length && (q.userProperty = JSON.stringify(e[5])), 
            "devtools" === q.system.platform && x.latestVersion && function(e, t) {
                for (var n = e.split("."), r = t.split("."), o = 0; o < 3; o++) {
                    var i = +n[o] || 0, a = +r[o] || 0;
                    if (a < i) return 1;
                    if (i < a) return -1;
                }
                return 0;
            }(O, x.latestVersion) < 0 && console.warn("百度移动统计微信小程序SDK已更新，为不影响您的正常使用，请到SDK下载中心 https://mtj.baidu.com/web/sdk/index 下载最新版本");
        }));
    }
    function h() {
        return k || (k = new Promise(function(e) {
            var t = q.system.system.match(/^iOS (\d+)/i);
            if (t && 13 < +t[1]) return e("");
            j.getClipboardData({
                success: function(t) {
                    e(t.data);
                },
                fail: function() {
                    e();
                }
            });
        }).then(function(e) {
            if (!x.disableCircling && 36 === e.length) {
                var t = e.match(/^mtj_(\w{8})(\w{4})(\w{4})(\w{4})(\w{12})$/);
                return t ? (N.circleToken = "".concat(t[1], "-").concat(t[2], "-").concat(t[3], "-").concat(t[4], "-").concat(t[5]), 
                new Promise(function(e) {
                    j.setClipboardData({
                        data: "",
                        complete: function() {
                            e();
                        }
                    });
                })) : void 0;
            }
        }));
    }
    function p(e, t, n) {
        var r = t[e];
        t[e] = function(t) {
            if (n.call(this, t, e), r) return r.apply(this, arguments);
        };
    }
    function d(e) {
        w.app.forEach(function(t) {
            p(t, e, U[t]);
        }), e.mtj = V, $(e);
    }
    function g(e) {
        w.page.forEach(function(t) {
            p(t, e, D[t]);
        }), w.share.forEach(function(t) {
            !function(e, t, n) {
                var r = t[e];
                t[e] = function(e) {
                    var t = r && r.apply(this, arguments);
                    return n.call(this, e, t);
                };
            }(t, e, D[t]);
        }), Object.keys(e).forEach(function(t) {
            "function" == typeof e[t] && -1 === w.page.indexOf(t) && -1 === w.share.indexOf(t) && p(t, e, D.onAction);
        }), B(e);
    }
    function m(e) {
        return w.page.forEach(function(t) {
            p(t, e.methods, D[t]);
        }), K(e);
    }
    function y(e) {
        return w.page.forEach(function(t) {
            p(t, e.methods, D[t]);
        }), L(e);
    }
    function v() {
        var e;
        !function(e) {
            j = e;
        }(wx);
        try {
            e = require("./mtj-wx-sdk.config");
        } catch (e) {
            return void console.error("请把mtj-wx-sdk.config.js文件拷贝到utils目录中");
        }
        e && e.appKey ? (A.key = e.appKey, x.getLocation = e.getLocation || !1, x.disableCircling = e.disableCircling || !1, 
        x.trackStatus = !(!1 === s(T)), function() {
            var e = s(E);
            if (e) {
                Object.keys(e).forEach(function(t) {
                    x[t] = e[t];
                });
                var t = e.updateTimestamp || 0;
                if (+new Date() - t < 864e5) return Promise.resolve();
            }
            a({
                url: "https://hmma.baidu.com/mini.conf",
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                data: {
                    type: "wx",
                    key: A.key
                }
            }).then(function(e) {
                if (e && e.data) {
                    var t = e.data;
                    Object.keys(t).forEach(function(e) {
                        x[e] = t[e];
                    }), t.updateTimestamp = +new Date(), f(E, t);
                } else c("remoteConfig", e);
            }).catch(function(e) {
                c("sendRequest", e);
            });
        }(), m.prototype.constructor = K, e.hasPlugin || (App = d, Page = g), module.exports = {
            App: d,
            Page: g,
            Behavior: m,
            Component: y
        }) : console.error("请设置mtj-wx-sdk.config.js文件中的appKey字段");
    }
    var j, b, k, O = "1.10.10", S = "https://hmma.baidu.com/mini.gif", w = {
        app: [ "onShow", "onHide", "onError" ],
        page: [ "onShow", "onHide" ],
        share: [ "onShareAppMessage" ],
        behavior: [ "tap" ]
    }, _ = "mtj_uuid", P = "mtj_user", I = "mtj_user_property", T = "mtj_track_status", E = "mtj_remote_config", x = {}, A = {
        type: 1
    }, q = {
        aso: {}
    }, N = {}, M = 0, U = {
        onLaunch: function() {
            u({
                et: "app",
                en: "launch"
            });
        },
        onShow: function(e) {
            var t = 0 < arguments.length && void 0 !== e ? e : {}, n = (q.aso.query || []).filter(function(e) {
                return 0 === e.key.indexOf("mtj_");
            });
            return q.aso.scene = "" + (t.scene || ""), t.referrerInfo && t.referrerInfo.appId ? q.aso.referrerInfo = t.referrerInfo : delete q.aso.referrerInfo, 
            q.aso.path = t.path || "", q.aso.query = Object.keys(t.query || {}).map(function(e) {
                return {
                    key: e,
                    value: t.query[e]
                };
            }), 0 < n.length && !/(^|,)mtj_/.test(Object.keys(t.query || {}).join(",")) && (q.aso.query = q.aso.query.concat(n)), 
            l().then(function() {
                return function(e) {
                    return new Promise(function(t) {
                        if (!e) return t();
                        j.getShareInfo({
                            shareTicket: e,
                            success: function(e) {
                                delete e.errMsg, t(e);
                            },
                            fail: function() {
                                t({});
                            }
                        });
                    });
                }(t.shareTicket);
            }).then(function(e) {
                e ? q.aso.shareInfo = e : delete q.aso.shareInfo, u(Object.assign({
                    et: "app",
                    en: "show"
                }, q));
            }).catch(function(e) {
                c("app.onShow", e);
            });
        },
        onHide: function() {
            k = null, u({
                et: "app",
                en: "hide"
            });
        },
        onError: function(e) {
            u({
                et: "app",
                en: "error",
                ep: {
                    ex: n(e, "Object") ? JSON.stringify(r(e)) : "" + e
                }
            });
        }
    }, C = -1, J = -1, R = 0, D = {
        onShow: function() {
            var e = getCurrentPages(), t = e[e.length - 1];
            return A.path = t.route, A.query = Object.keys(t.options).map(function(e) {
                return {
                    key: e,
                    value: t.options[e]
                };
            }).filter(function(e) {
                return "mtj_qrid" !== e.key && "mtj_lkid" !== e.key && "mtj_shuuid" !== e.key;
            }), l().then(h).then(function() {
                u(Object.assign({
                    et: "page",
                    en: "show"
                }, q));
            }).catch(function(e) {
                c("page.onShow", e);
            });
        },
        onHide: function() {
            u({
                et: "page",
                en: "hide",
                ep: void 0
            });
        },
        onShareAppMessage: function(e, t) {
            var n = 1 < arguments.length && void 0 !== t ? t : {}, r = {
                from: e.from,
                path: n.path
            };
            if (!r.path) {
                var o = A.query.map(function(e) {
                    return e.key + "=" + e.value;
                }).join("&");
                r.path = A.path + (o ? "?" + o : "");
            }
            n.title && (r.title = "" + n.title), e.target && (r.target = JSON.stringify(e.target)), 
            u(Object.assign({
                et: "share",
                en: "action",
                ep: r
            }, q));
            var i = q.aso.query.filter(function(e) {
                return "mtj_shuuid" === e.key;
            }), a = i[0] ? i[0].value.split("_") : [];
            A.uuid !== a[a.length - 1] && a.push(A.uuid);
            var c = a.slice(Math.max(0, a.length - 3)).join("_");
            return n.path = function(e, t, n) {
                var r = 0 < (e = e.replace(new RegExp(t + "=[^&]*", "g"), "").replace(/(\?|&)&/g, "$1").replace(/(\?|&)$/g, "")).indexOf("?") ? "&" : "?";
                return e + r + t + "=" + encodeURIComponent(n);
            }(r.path, "mtj_shuuid", c), n;
        },
        onAction: function(e, t) {
            if (e && e.type && e.currentTarget) if ("tap" !== e.type) {
                if ("touchmove" === e.type && e.touches instanceof Array) {
                    if (-1 !== C) return;
                    if (3 === e.touches.length) {
                        if (R += 1, clearTimeout(J), 3 === R) return N.circleByThreeFingers = !0, N.circleToken = void 0, 
                        void u(Object.assign({
                            et: "page",
                            en: "show"
                        }, q));
                        C = setTimeout(function() {
                            C = -1, J = setTimeout(function() {
                                R = 0;
                            }, 500);
                        }, 1e3);
                    }
                }
            } else {
                var n = [ {
                    key: "xpath",
                    value: "#" + (e.currentTarget.id || t)
                } ];
                u(Object.assign({
                    et: "behavior",
                    en: "tap",
                    ep: {
                        data: n
                    }
                }, q));
            }
        }
    }, V = {
        trackEvent: function(e, t) {
            var r = 1 < arguments.length && void 0 !== t ? t : {};
            if (!function(e) {
                return n(e, "String") && /^[a-z][a-z0-9_]{0,31}$/.test(e);
            }(e)) return Promise.reject(new Error("事件名称不合法"));
            var o = Object.keys(r).filter(function(e) {
                return function(e) {
                    return n(e, "String") && /^[a-z0-9_]{1,32}$/.test(e);
                }(e) && function(e) {
                    return n(e, "String") || n(e, "Number");
                }(r[e]);
            }).map(function(e) {
                return {
                    key: "" + e,
                    value: "" + r[e],
                    type: n(r[e], "String") ? "string" : "number"
                };
            });
            return l().then(function() {
                u(Object.assign({
                    et: "event",
                    en: "" + e,
                    ep: {
                        data: o
                    }
                }, q));
            }).catch(function(e) {
                c("trackEvent", e);
            });
        },
        setTrackStatus: function(e) {
            n(e, "Boolean") && (x.trackStatus = e, f(T, e));
        },
        setUserInfo: function(e) {
            var t = 0 < arguments.length && void 0 !== e ? e : {}, r = t.tel, a = t.openId;
            return l().then(function() {
                var e = s(P), t = n(e, "Object") ? e : {};
                o(r) && (t.tel = q.user.tel = r.substr(r.length - 11)), i(a) && (t.openId = q.user.openId = a), 
                (t.tel || t.openId) && f(P, t), n(r, "Undefined") || o(r) || console.error("手机号 ".concat(r, " 不合法")), 
                n(a, "Undefined") || i(a) || console.error("openid ".concat(a, " 不合法"));
            }).catch(function(e) {
                c("setUserInfo", e);
            });
        },
        setUserId: function(e) {
            return Promise.resolve().then(function() {
                if (!(n(e, "String") || n(e, "Number") && Number.isFinite(e))) return Promise.reject(new Error("userId只能是字符串或数字"));
                var t = "" + e, r = s(I), o = n(r, "Object") ? r : {};
                if (!o.uid_ || o.uid_[0] !== t) {
                    o.uid_ = [ t, "1" ], f(I, o), q.userProperty = JSON.stringify(o);
                    var i = [ {
                        key: "uid",
                        value: t
                    } ];
                    return l().then(function() {
                        u(Object.assign({
                            et: "api",
                            en: "setUserId",
                            ep: {
                                data: i
                            }
                        }, q));
                    }).catch(function(e) {
                        c("setUserId", e);
                    });
                }
            });
        },
        setUserProperty: function(e) {
            return Promise.resolve().then(function() {
                var t = s(I), r = n(t, "Object") ? t : {};
                if (n(e, "Null")) Object.keys(r).forEach(function(e) {
                    "_" !== e.charAt(0) && "_" !== e.charAt(e.length - 1) && delete r[e];
                }); else if (!n(e, "Object")) return Promise.reject(new Error("userProperty必须是对象"));
                var o = Object.keys(r).filter(function(e) {
                    return "_" !== e.charAt(0) && "_" !== e.charAt(e.length - 1);
                }).length;
                Object.keys(e || {}).forEach(function(t) {
                    var i = e[t];
                    "" !== t && "_" !== t.charAt(0) && "_" !== t.charAt(t.length - 1) && (n(i, "Null") ? r[t] && (delete r[t], 
                    o--) : !(n(i, "String") || n(i, "Number") && Number.isFinite(i)) || 256 < t.length || 256 < ("" + i).length || !r[t] && 100 <= o || (r[t] || o++, 
                    r[t] = [ i, "1" ]));
                }), f(I, r), q.userProperty = JSON.stringify(r);
            });
        }
    }, $ = App, B = Page, K = Behavior, L = Component;
    v(), e.init = v;
}({});