var e = require("@babel/runtime/helpers/interopRequireDefault.js"), t = e(require("@babel/runtime/helpers/typeof.js")), n = e(require("@babel/runtime/helpers/classCallCheck.js")), i = e(require("@babel/runtime/helpers/createClass.js"));

function r(e) {
    if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (e = function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return a(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t);
        }(e))) {
            var t = 0, n = function() {};
            return {
                s: n,
                n: function() {
                    return t >= e.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: e[t++]
                    };
                },
                e: function(e) {
                    throw e;
                },
                f: n
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var i, r, o = !0, s = !1;
    return {
        s: function() {
            i = e[Symbol.iterator]();
        },
        n: function() {
            var e = i.next();
            return o = e.done, e;
        },
        e: function(e) {
            s = !0, r = e;
        },
        f: function() {
            try {
                o || null == i.return || i.return();
            } finally {
                if (s) throw r;
            }
        }
    };
}

function a(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
    return i;
}

var o = function() {
    function e(t, i) {
        (0, n.default)(this, e), this.host = "https://vcard.microvcard.com/api/growingio", 
        this.messageQueue = [], this.uploadingQueue = [], this.uploadTimer = null, this.projectId = t, 
        this.appId = i, this.url = "".concat(this.host, "/projects/").concat(this.projectId, "/apps/").concat(this.appId, "/collect");
    }
    return (0, i.default)(e, [ {
        key: "setHost",
        value: function(e) {
            0 != e.indexOf("http") && (this.host = "https://" + e), this.url = "".concat(this.host, "/projects/").concat(this.projectId, "/apps/").concat(this.appId, "/collect");
        }
    }, {
        key: "upload",
        value: function(e) {
            var t = this;
            this.messageQueue.push(e), this.uploadTimer || (this.uploadTimer = setTimeout(function() {
                t._flush(), t.uploadTimer = null;
            }, 1e3));
        }
    }, {
        key: "forceFlush",
        value: function() {
            this.uploadTimer && (clearTimeout(this.uploadTimer), this.uploadTimer = null), this._flush();
        }
    }, {
        key: "_flush",
        value: function() {
            var e = this;
            this.uploadingQueue = this.messageQueue.slice(), this.messageQueue = [], this.uploadingQueue.length > 0 && wx.request({
                url: "".concat(this.url, "?stm=").concat(Date.now()),
                header: {
                    "content-type": "application/json"
                },
                method: "POST",
                data: this.uploadingQueue,
                success: function() {
                    e.messageQueue.length > 0 && e._flush();
                },
                fail: function() {
                    e.messageQueue = e.uploadingQueue.concat(e.messageQueue);
                }
            });
        }
    } ]), e;
}(), s = "1.2", u = function() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
        var t = 16 * Math.random() | 0;
        return ("x" == e ? t : 3 & t | 8).toString(16);
    });
}, c = function(e) {
    return Math.round(e.screenHeight * e.pixelRatio);
}, l = function(e) {
    return Math.round(e.screenWidth * e.pixelRatio);
}, h = function(e) {
    if (e) {
        var t = e.toLowerCase();
        return -1 != t.indexOf("android") ? "Weixin-Android" : -1 != t.indexOf("ios") ? "Weixin-iOS" : e;
    }
}, g = function(e) {
    return "Weixin ".concat(e);
}, p = function(e) {
    for (var t in e) if (e.hasOwnProperty(t)) return !1;
    return !0;
}, f = function() {
    function e() {
        (0, n.default)(this, e), this.queries = {};
    }
    return (0, i.default)(e, [ {
        key: "touch",
        value: function(e) {
            this.path = e.route, this.time = Date.now(), this.query = this.queries[e.route] ? this.queries[e.route] : void 0;
        }
    }, {
        key: "addQuery",
        value: function(e, t) {
            this.queries[e.route] = t ? this._getQuery(t) : null;
        }
    }, {
        key: "_getQuery",
        value: function(e) {
            return Object.keys(e).map(function(t) {
                return "".concat(t, "=").concat(e[t]);
            }).join("&");
        }
    } ]), e;
}(), d = {
    tap: [ "tap", "click" ],
    longtap: [ "longtap" ],
    input: [ "input" ],
    blur: [ "change", "blur" ],
    submit: [ "submit" ],
    focus: [ "focus" ]
}, v = /^function [^\(]*\([^\)]+\).*[^\.]+\.([^\(]+)\(.*$/;

function y(e) {
    return e && e.$attrs ? e.$attrs.mpcomid : "0";
}

var _ = function() {
    function e(t) {
        (0, n.default)(this, e), this.vueVM = t;
    }
    return (0, i.default)(e, [ {
        key: "getHandle",
        value: function(e) {
            var t = e.type, n = e.target;
            void 0 === n && (n = {});
            var i = (e.currentTarget || n).dataset;
            void 0 === i && (i = {});
            var r = i.comkey;
            void 0 === r && (r = "");
            var a = i.eventid, o = function(e, t) {
                void 0 === t && (t = []);
                var n = t.slice(1);
                return n.length ? n.reduce(function(e, t) {
                    for (var n = e.$children.length, i = 0; n > i; i++) {
                        var r = e.$children[i];
                        if (y(r) === t) return r;
                    }
                    return e;
                }, e) : e;
            }(this.vueVM, r.split(","));
            if (o) {
                var s = function e(t, n, i) {
                    void 0 === i && (i = []);
                    var r = [];
                    if (!t || !t.tag) return r;
                    var a = t || {}, o = a.data;
                    void 0 === o && (o = {});
                    var s = a.children;
                    void 0 === s && (s = []);
                    var u = a.componentInstance;
                    u ? Object.keys(u.$slots).forEach(function(t) {
                        var a = u.$slots[t];
                        (Array.isArray(a) ? a : [ a ]).forEach(function(t) {
                            r = r.concat(e(t, n, i));
                        });
                    }) : s.forEach(function(t) {
                        r = r.concat(e(t, n, i));
                    });
                    var c = o.attrs, l = o.on;
                    return c && l && c.eventid === n && i.forEach(function(e) {
                        var t = l[e];
                        "function" == typeof t ? r.push(t) : Array.isArray(t) && (r = r.concat(t));
                    }), r;
                }(o._vnode, a, d[t] || [ t ]);
                if (s.length) {
                    var u = s[0];
                    if (u.isProxied) return u.proxiedName;
                    try {
                        var c = ("" + u).replace(/\n/g, "");
                        if (c.match(v)) {
                            var l = v.exec(c);
                            if (l && l.length > 1) return l[1];
                        }
                    } catch (e) {}
                    return u.name;
                }
            }
        }
    } ]), e;
}(), m = function() {
    function e(t) {
        (0, n.default)(this, e), this.growingio = t, this.weixin = t.weixin, this.currentPage = new f(), 
        this.scene = null, this.sessionId = null, this.cs1 = null, this.lastPageEvent = void 0, 
        this.isOnShareAppMessage = !1, this.CLICK_TYPE = {
            tap: "clck",
            longpress: "lngprss",
            longtap: "lngprss"
        };
    }
    return (0, i.default)(e, [ {
        key: "setUserId",
        value: function(e) {
            var t = e + "";
            t && 100 > t.length && (this.cs1 = t, this.lastPageEvent && this._sendEvent(this.lastPageEvent));
        }
    }, {
        key: "clearUserId",
        value: function() {
            this.cs1 = null;
        }
    }, {
        key: "appListener",
        value: function(e, t, n) {
            this.isOnShareAppMessage || (this.growingio.debug && console.log("App.", t, Date.now()), 
            "onShow" == t ? (this.sessionId = u(), this.lastPageEvent = void 0, this.sendVisitEvent(n)) : "onHide" == t ? (this.growingio.forceFlush(), 
            this.weixin.syncStorage(), this.isOnShareAppMessage || this.sendVisitCloseEvent()) : "onError" == t && this.sendErrorEvent(n));
        }
    }, {
        key: "pageListener",
        value: function(e, t, n) {
            if (this.growingio.debug && console.log("Page.", e.route, "#", t, Date.now()), "onShow" === t) this.isOnShareAppMessage ? this.isOnShareAppMessage = !1 : (this.currentPage.touch(e), 
            this.sendPage(e)); else if ("onLoad" === t) p(i = n[0]) || this.currentPage.addQuery(e, i); else if ("onShareAppMessage" === t) {
                var i = null, r = null;
                2 > n.length ? 1 === n.length && (n[0].from ? i = n[0] : n[0].title && (r = n[0])) : (i = n[0], 
                r = n[1]), this.isOnShareAppMessage = !0, this.sendPageShare(e, i, r);
            } else "onTabItemTap" === t && this.sendTabClick(n[0]);
        }
    }, {
        key: "actionListener",
        value: function(e, t) {
            if ("handleProxy" === t && this.growingio.vueRootVMs && this.growingio.vueRootVMs[this.currentPage.path]) {
                var n = new _(this.growingio.vueRootVMs[this.currentPage.path]).getHandle(e);
                n && (t = n);
            }
            this.growingio.debug && console.log("Click on ", t, Date.now()), "tap" === e.type || "longpress" === e.type ? this.sendClick(e, t) : -1 !== [ "change", "confirm", "blur" ].indexOf(e.type) ? this.sendChange(e, t) : "getuserinfo" === e.type && (this.sendClick(e, t), 
            e.detail && e.detail.userInfo && this.setVisitor(e.detail.userInfo));
        }
    }, {
        key: "track",
        value: function(e, n) {
            if (null != e && 0 !== e.length) {
                var i = {
                    t: "cstm",
                    ptm: this.currentPage.time,
                    p: this.currentPage.path,
                    q: this.currentPage.query,
                    n: e
                };
                null !== n && "object" == (0, t.default)(n) && (i.var = n), this._sendEvent(i);
            }
        }
    }, {
        key: "identify",
        value: function(e, t) {
            void 0 !== e && 0 !== e.length && (this.growingio.login(e), this._sendEvent({
                t: "vstr",
                var: {
                    openid: e,
                    unionid: t
                }
            }));
        }
    }, {
        key: "setVisitor",
        value: function(e) {
            this._sendEvent({
                t: "vstr",
                var: e
            });
        }
    }, {
        key: "setUser",
        value: function(e) {
            this._sendEvent({
                t: "ppl",
                var: e
            });
        }
    }, {
        key: "setPage",
        value: function(e) {
            this._sendEvent({
                t: "pvar",
                ptm: this.currentPage.time,
                p: this.currentPage.path,
                q: this.currentPage.query,
                var: e
            });
        }
    }, {
        key: "setEvar",
        value: function(e) {
            this._sendEvent({
                t: "evar",
                var: e
            });
        }
    }, {
        key: "sendVisitEvent",
        value: function(e) {
            var t = this, n = this.weixin.systemInfo, i = {
                t: "vst",
                tm: Date.now(),
                av: s,
                db: n.brand,
                dm: n.model ? n.model.replace(/<.*>/, "no") : "",
                sh: c(n),
                sw: l(n),
                os: h(n.platform),
                osv: g(n.version),
                l: n.language
            };
            if (this.growingio.appVer && (i.cv = this.growingio.appVer + ""), e.length > 0) {
                var r = e[0];
                i.p = r.path, p(r.query) || (i.q = this.currentPage._getQuery(r.query)), i.ch = "scn:".concat(r.scene), 
                r.referrerInfo && r.referrerInfo.appId && (i.rf = r.referrerInfo.appId), this.scene = r.scene;
            }
            this.weixin.requestLocation().then(function() {
                null != t.weixin.location && (i.lat = t.weixin.location.latitude, i.lng = t.weixin.location.longitude), 
                t.weixin.getNetworkType().then(function(e) {
                    e && (i.nt = e.networkType), t._sendEvent(i);
                });
            });
        }
    }, {
        key: "sendVisitCloseEvent",
        value: function() {
            this._sendEvent({
                t: "cls",
                p: this.currentPage.path,
                q: this.currentPage.query
            });
        }
    }, {
        key: "sendErrorEvent",
        value: function(e) {
            try {
                if (e && e.length > 0) {
                    var t = e[0].split("\n");
                    if (t && t.length > 1) {
                        var n = t[1].split(";");
                        if (n && n.length > 1) {
                            var i = n[1].match(/at ([^ ]+) page (.*) function/), r = {
                                key: t[0],
                                error: n[0]
                            };
                            i && i.length > 2 && (r.page = i[1], r.function = i[2]), this._sendEvent({
                                t: "cstm",
                                ptm: this.currentPage.time,
                                p: this.currentPage.path,
                                q: this.currentPage.query,
                                n: "onError",
                                var: r
                            });
                        }
                    }
                }
            } catch (e) {}
        }
    }, {
        key: "sendPage",
        value: function(e) {
            var t = {
                t: "page",
                tm: this.currentPage.time,
                p: this.currentPage.path,
                q: this.currentPage.query
            };
            t.rp = this.lastPageEvent ? this.lastPageEvent.p : this.scene ? "scn:".concat(this.scene) : null, 
            e.data && e.data.pvar && (t.var = e.data.pvar);
            var n = this.weixin.getPageTitle(e);
            n && n.length > 0 && (t.tl = n), this._sendEvent(t), this.lastPageEvent = t;
        }
    }, {
        key: "sendPageShare",
        value: function(e, t, n) {
            this._sendEvent({
                t: "cstm",
                ptm: this.currentPage.time,
                p: this.currentPage.path,
                q: this.currentPage.query,
                n: "onShareAppMessage",
                var: {
                    from: t ? t.from : void 0,
                    target: t && t.target ? t.target.id : void 0,
                    title: n ? n.title : void 0,
                    path: n ? n.path : void 0
                }
            });
        }
    }, {
        key: "sendClick",
        value: function(e, t) {
            var n = {
                t: this.CLICK_TYPE[e.type],
                ptm: this.currentPage.time,
                p: this.currentPage.path,
                q: this.currentPage.query
            }, i = e.currentTarget, r = {
                x: "".concat(i.id, "#").concat(t)
            };
            i.dataset.title ? r.v = i.dataset.title : i.dataset.src && (r.h = i.dataset.src), 
            void 0 !== i.dataset.index && (r.idx = i.dataset.index), n.e = [ r ], this._sendEvent(n);
        }
    }, {
        key: "sendChange",
        value: function(e, t) {
            var n = {
                t: "chng",
                ptm: this.currentPage.time,
                p: this.currentPage.path,
                q: this.currentPage.query
            }, i = e.currentTarget, r = {
                x: "".concat(i.id, "#").concat(t)
            };
            if (-1 !== [ "blur", "change", "confirm" ].indexOf(e.type) && i.dataset.growingTrack) {
                if (!e.detail.value || 0 === e.detail.value.length) return;
                "string" == typeof e.detail.value ? r.v = e.detail.value : "[object Array]" === Object.prototype.toString.call(e.detail.value) && (r.v = e.detail.value.join(","));
            }
            "change" === e.type && e.detail && e.detail.source && "autoplay" === e.detail.source || (n.e = [ r ], 
            this._sendEvent(n));
        }
    }, {
        key: "sendTabClick",
        value: function(e) {
            this._sendEvent({
                t: "clck",
                ptm: this.currentPage.time,
                p: this.currentPage.path,
                q: this.currentPage.query,
                e: [ {
                    x: "#onTabItemTap",
                    v: e.text,
                    idx: e.index,
                    h: e.pagePath
                } ]
            });
        }
    }, {
        key: "_sendEvent",
        value: function(e) {
            e.u = this.weixin.uid, e.s = this.sessionId, e.tm = e.tm || Date.now(), e.d = this.growingio.appId, 
            e.b = "MinP", null !== this.cs1 && (e.cs1 = this.cs1), this.growingio.upload(e);
        }
    } ]), e;
}(), w = function() {
    function e(t) {
        (0, n.default)(this, e), this._location = null, this._systemInfo = null, this._uid = wx.getStorageSync("_growing_uid_"), 
        this._uid && 36 !== this._uid.length && (t.forceLogin = !1), this._esid = wx.getStorageSync("_growing_esid_");
    }
    return (0, i.default)(e, [ {
        key: "syncStorage",
        value: function() {
            wx.getStorageSync("_growing_uid_") || wx.setStorageSync("_growing_uid_", this._uid);
        }
    }, {
        key: "requestLocation",
        value: function() {
            var e = this;
            return new Promise(function(t) {
                e._getSetting().then(function(n) {
                    if (!(n && n.authSetting && n.authSetting["scope.userLocation"])) return t(null);
                    e._getLocation().then(function(n) {
                        return e._location = n, t(n);
                    });
                });
            });
        }
    }, {
        key: "getNetworkType",
        value: function() {
            return new Promise(function(e) {
                wx.getNetworkType({
                    success: function(t) {
                        return e(t);
                    },
                    fail: function() {
                        return e(null);
                    }
                });
            });
        }
    }, {
        key: "getPageTitle",
        value: function(e) {
            var t = "";
            try {
                if (e.data.title && e.data.title.length > 0 && (t = Array.isArray(e.data.title) ? e.data.title.join(" ") : e.data.title), 
                0 === t.length && __wxConfig) {
                    if (__wxConfig.tabBar) {
                        var n = __wxConfig.tabBar.list.find(function(t) {
                            return t.pathPath == e.route || t.pagePath == "".concat(e.route, ".html");
                        });
                        n && n.text && (t = n.text);
                    }
                    if (0 == t.length) {
                        var i = __wxConfig.page[e.route] || __wxConfig.page["".concat(e.route, ".html")];
                        t = i ? i.window.navigationBarTitleText : __wxConfig.global.window.navigationBarTitleText;
                    }
                }
            } catch (e) {}
            return t;
        }
    }, {
        key: "_getSetting",
        value: function() {
            return new Promise(function(e) {
                try {
                    wx.getSetting({
                        success: e,
                        fail: e
                    });
                } catch (e) {}
            });
        }
    }, {
        key: "_getLocation",
        value: function() {
            return new Promise(function(e) {
                try {
                    wx.getLocation({
                        success: e,
                        fail: function() {
                            return e(null);
                        }
                    });
                } catch (t) {
                    return e(null);
                }
            });
        }
    }, {
        key: "location",
        get: function() {
            return this._location;
        }
    }, {
        key: "systemInfo",
        get: function() {
            return null == this._systemInfo && (this._systemInfo = wx.getSystemInfoSync()), 
            this._systemInfo;
        }
    }, {
        key: "esid",
        set: function(e) {
            this._esid = e, wx.setStorageSync("_growing_esid_", this._esid);
        },
        get: function() {
            return this._esid || (this._esid = 1), this._esid;
        }
    }, {
        key: "uid",
        set: function(e) {
            this._uid = e, wx.setStorageSync("_growing_uid_", this._uid);
        },
        get: function() {
            return this._uid || (this.uid = u()), this._uid;
        }
    } ]), e;
}(), x = {
    defaultPageCallbacks: {},
    defaultAppCallbacks: {},
    appHandlers: [ "onShow", "onHide", "onError" ],
    pageHandlers: [ "onLoad", "onShow", "onShareAppMessage", "onTabItemTap" ],
    actionEventTypes: [ "tap", "longpress", "blur", "change", "confirm", "getuserinfo" ],
    originalPage: Page,
    originalApp: App,
    hook: function(e, t) {
        return function() {
            var n, i = arguments ? arguments[0] : void 0;
            if (i && i.currentTarget && -1 != x.actionEventTypes.indexOf(i.type)) try {
                x.observer.actionListener(i, e);
            } catch (e) {
                console.error(e);
            }
            if (this._growing_page_ && -1 !== [ "onShow", "onLoad", "onTabItemTap" ].indexOf(e) || (n = t.apply(this, arguments)), 
            this._growing_app_ && -1 != x.appHandlers.indexOf(e)) try {
                x.defaultAppCallbacks[e].apply(this, arguments);
            } catch (e) {
                console.error(e);
            }
            if (this._growing_page_ && -1 != x.pageHandlers.indexOf(e)) {
                var r = Array.prototype.slice.call(arguments);
                n && r.push(n);
                try {
                    x.defaultPageCallbacks[e].apply(this, r);
                } catch (e) {
                    console.error(e);
                }
                if (-1 != [ "onShow", "onLoad", "onTabItemTap" ].indexOf(e)) n = t.apply(this, arguments); else {
                    var a = x.observer.growingio;
                    a && a.followShare && n.path && (n.path = -1 === n.path.indexOf("?") ? n.path + "?suid=" + a.weixin.uid : n.path + "&suid=" + a.weixin.uid);
                }
            }
            return n;
        };
    },
    instrument: function(e) {
        for (var t in e) "function" == typeof e[t] && (e[t] = this.hook(t, e[t]));
        return e._growing_app_ && x.appHandlers.map(function(t) {
            e[t] || (e[t] = x.defaultAppCallbacks[t]);
        }), e._growing_page_ && x.pageHandlers.map(function(t) {
            e[t] || "onShareAppMessage" === t || (e[t] = x.defaultPageCallbacks[t]);
        }), e;
    },
    GrowingPage: function(e) {
        e._growing_page_ = !0, x.originalPage(x.instrument(e));
    },
    GrowingApp: function(e) {
        e._growing_app_ = !0, x.originalApp(x.instrument(e));
    },
    initInstrument: function(e) {
        x.observer = e, x.pageHandlers.forEach(function(e) {
            x.defaultPageCallbacks[e] = function() {
                this.__route__ && x.observer.pageListener(this, e, arguments);
            };
        }), x.appHandlers.forEach(function(e) {
            x.defaultAppCallbacks[e] = function() {
                x.observer.appListener(this, e, arguments);
            };
        }), Page = function() {
            return x.GrowingPage(arguments[0]);
        }, App = function() {
            return x.GrowingApp(arguments[0]);
        };
    }
}, k = new (function() {
    function e() {
        (0, n.default)(this, e), this.uploadingMessages = [];
    }
    return (0, i.default)(e, [ {
        key: "init",
        value: function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.projectId = e, this.appId = t, this.appVer = n.version, this.debug = n.debug || !1, 
            this.forceLogin = n.forceLogin || !1, this.followShare = n.followShare || !1, this.weixin = new w(this), 
            this.esid = this.weixin.esid, this.uploader = new o(this.projectId, this.appId), 
            this.observer = new m(this), n.vue && (this.vueRootVMs = {}, this._proxyVue(n.vue)), 
            this._start();
        }
    }, {
        key: "setHost",
        value: function(e) {
            this.uploader.setHost(e);
        }
    }, {
        key: "setVue",
        value: function(e) {
            this.vueRootVMs || (this.vueRootVMs = {}), this._proxyVue(e);
        }
    }, {
        key: "login",
        value: function(e) {
            if (this.forceLogin) {
                var t, n = r((this.weixin.uid = e, this.forceLogin = !1, this.uploadingMessages));
                try {
                    for (n.s(); !(t = n.n()).done; ) {
                        var i = t.value;
                        i.u = e, this._upload(i);
                    }
                } catch (e) {
                    n.e(e);
                } finally {
                    n.f();
                }
            }
        }
    }, {
        key: "upload",
        value: function(e) {
            this.forceLogin ? this.uploadingMessages.push(e) : this._upload(e);
        }
    }, {
        key: "forceFlush",
        value: function() {
            this.weixin.esid = this.esid, this.uploader.forceFlush();
        }
    }, {
        key: "proxy",
        value: function(e, t) {
            try {
                "setVue" === e ? this.setVue(t[0]) : this.observer && this.observer[e] && this.observer[e].apply(this.observer, t);
            } catch (e) {
                console.error(e);
            }
        }
    }, {
        key: "_start",
        value: function() {
            x.initInstrument(this.observer);
            try {
                global && global["__core-js_shared__"] && (global.App = App, global.Page = Page);
            } catch (e) {
                console.error(e);
            }
        }
    }, {
        key: "_upload",
        value: function(e) {
            e.esid = this.esid++, this.debug && console.info("generate new event", JSON.stringify(e, 0, 2)), 
            this.uploader.upload(e);
        }
    }, {
        key: "_proxyVue",
        value: function(e) {
            if (void 0 !== e.mixin) {
                var t = this;
                e.mixin({
                    created: function() {
                        if (this.$options.methods) for (var e = Object.keys(this.$options.methods), t = 0, n = Object.keys(this); t < n.length; t++) {
                            var i = n[t];
                            0 > e.indexOf(i) || (Object.defineProperty(this[i], "proxiedName", {
                                value: i
                            }), Object.defineProperty(this[i], "isProxied", {
                                value: !0
                            }));
                        }
                    },
                    beforeMount: function() {
                        var e = this.$root;
                        e.$mp && "page" === e.$mp.mpType && e.$mp.page && (t.vueRootVMs[e.$mp.page.route] = e);
                    }
                });
            }
        }
    } ]), e;
}())();

console.log("init growingio..."), module.exports = function() {
    var e = arguments[0];
    if (e) {
        var t = 2 > arguments.length ? [] : [].slice.call(arguments, 1);
        if ("init" === e) {
            if (2 > t.length) return void console.log("初始化 GrowingIO SDK 失败。请使用 gio('init', '你的GrowingIO项目ID', '你的微信APP_ID', options);");
            k.init(t[0], t[1], t[2]);
        } else k.proxy(e, t);
    }
};