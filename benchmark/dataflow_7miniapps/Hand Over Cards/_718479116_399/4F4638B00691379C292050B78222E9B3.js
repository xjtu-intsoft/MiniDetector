var t = require("@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(t, e) {
    var n = null;
    if (2 === arguments.length) {
        e.data && Object.keys(e.data).length > 0 && (n = u(e.data), s(t.data, e.data)), 
        a || (a = JSON.parse(JSON.stringify(t.data)), r = t, t.instances = {}, t.update = b, 
        t.push = p, t.pull = j, t.add = m, t.remove = P, t.originData = a, t.env && h(t.env), 
        k()), getApp().globalData && (getApp().globalData.store = t);
        var o = e.onLoad;
        E(t.data), e.data && Object.keys(e.data).length > 0 && (n = u(e.data), s(t.data, e.data)), 
        e.onLoad = function(e) {
            this.store = t, this._updatePath = n, y(this), t.instances[this.route] = [], t.instances[this.route].push(this), 
            o && o.call(this, e), s(t.data, this.data), this.setData(this.data);
        };
        var i = e.onUnload;
        e.onUnload = function() {
            i && i.call(this), t.instances[this.route] = [];
        }, Page(e);
    } else {
        t.lifetimes = t.lifetimes || {};
        var c = t.ready || t.lifetimes.ready, f = t.pure, l = u(t.data);
        t.ready = t.lifetimes.ready = function() {
            f ? (this.store = {
                data: t.data || {}
            }, this.store.originData = t.data ? JSON.parse(JSON.stringify(t.data)) : {}, E(t.data || {}), 
            d(this)) : (this.page = getCurrentPages()[getCurrentPages().length - 1], this.store = this.page.store, 
            this._updatePath = l, s(this.store.data, t.data), E(t.data || {}), this.setData.call(this, this.store.data), 
            y(this), this.store.instances[this.page.route].push(this)), c && c.call(this);
        }, Component(t);
    }
}, require("@babel/runtime/helpers/Arrayincludes.js");

var e = t(require("@babel/runtime/helpers/typeof.js")), n = t(require("7EB7EDE00691379C18D185E77542E9B3.js")), a = null, r = null, o = {}, i = "[object Array]", c = "[object Object]";

function s(t, e) {
    Object.keys(e).forEach(function(n) {
        t.hasOwnProperty(n) && (e[n] = t[n]);
    });
}

function u(t) {
    var e = {};
    return function(t, e) {
        Object.keys(t).forEach(function(n) {
            e[n] = !0;
            var a = Object.prototype.toString.call(t[n]);
            a === c ? f(t[n], n, e) : a === i && l(t[n], n, e);
        });
    }(t, e), e;
}

function f(t, e, n) {
    Object.keys(t).forEach(function(a) {
        n[e + "." + a] = !0, delete n[e];
        var r = Object.prototype.toString.call(t[a]);
        r === c ? f(t[a], e + "." + a, n) : r === i && l(t[a], e + "." + a, n);
    });
}

function l(t, e, n) {
    t.forEach(function(t, a) {
        n[e + "[" + a + "]"] = !0, delete n[e];
        var r = Object.prototype.toString.call(t);
        r === c ? f(t, e + "[" + a + "]", n) : r === i && l(t, e + "[" + a + "]", n);
    });
}

function d(t) {
    t.update = function(t) {
        var a = this.store, r = this;
        return new Promise(function(o) {
            if (t) for (var i in t) O(a.data, i, t[i]);
            var c = (0, n.default)(a.data, a.originData), s = [];
            if (Object.keys(c).length > 0) for (var u in s.push(new Promise(function(t) {
                return r.setData(c, t);
            })), a.onChange && a.onChange(c), c) O(a.originData, u, "object" === (0, e.default)(c[u]) ? JSON.parse(JSON.stringify(c[u])) : c[u]);
            Promise.all(s).then(function(t) {
                return o(c);
            });
        });
    };
}

function h(t) {
    wx.cloud.init(), r.db = wx.cloud.database({
        env: t
    });
}

function p(t) {
    return new Promise(function(e, n) {
        !function(t, e) {
            var n = function(t) {
                var e = {};
                return Object.keys(t).forEach(function(n) {
                    !function(t, e, n) {
                        for (var a = t.replace(/]/g, "").replace(/\[/g, ".").split("."), r = {}, o = null, i = a.length, c = 2; c < i; c++) if (3 === i) r[a[c]] = e; else if (c === i - 1) o[a[c]] = e; else {
                            var s = o;
                            o = {}, 2 === c ? r[a[c]] = o : s[a[c]] = o;
                        }
                        var u = a[0] + "-" + a[1];
                        n[u] = Object.assign(n[u] || {}, r);
                    }(n, t[n], e);
                }), e;
            }(t);
            Object.keys(n).forEach(function(t) {
                var a = t.split("-"), o = r.data[a[0]][parseInt(a[1])]._id, i = n[t];
                r.methods && r.methods[a[0]] && Object.keys(r.methods[a[0]]).forEach(function(t) {
                    i.hasOwnProperty(t) && delete i[t];
                }), r.db.collection(a[0]).doc(o).update({
                    data: i
                }).then(function(t) {
                    e(t);
                });
            });
        }(b(t), e);
    });
}

function b(t) {
    return new Promise(function(o) {
        if (t) for (var i in t) O(r.data, i, t[i]);
        var c = (0, n.default)(r.data, a);
        "" == Object.keys(c)[0] && (c = c[""]);
        var s = function(t) {
            if (!r.globalData) return !1;
            for (var e in t) {
                if (r.globalData.indexOf(e) > -1) return !0;
                for (var n = 0, a = r.globalData.length; n < a; n++) if (v(e, r.globalData[n])) return !0;
            }
            return !1;
        }(c), u = [];
        if (Object.keys(c).length > 0) {
            for (var f in r.instances) r.instances[f].forEach(function(t) {
                if (s || r.updateAll || t._updatePath) {
                    var n = g(c, t._updatePath);
                    if (n.length) {
                        var a = {};
                        for (var o in c) n.includes(o) && (a[o] = "object" === (0, e.default)(c[o]) ? JSON.parse(JSON.stringify(c[o])) : c[o]);
                        u.push(new Promise(function(e) {
                            t.setData.call(t, a, e);
                        }));
                    }
                }
            });
            for (var l in r.onChange && r.onChange(c), c) O(a, l, "object" === (0, e.default)(c[l]) ? JSON.parse(JSON.stringify(c[l])) : c[l]);
        }
        Promise.all(u).then(function(t) {
            o(c);
        });
    });
}

function g(t, e) {
    var n = [];
    for (var a in t) for (var r in e[a] && n.push(a), e) v(a, r) && n.push(a);
    return n;
}

function v(t, e) {
    if (0 === t.indexOf(e)) {
        var n = t.substr(e.length, 1);
        if ("[" === n || "." === n) return !0;
    }
    return !1;
}

function y(t) {
    t.update = b;
}

function O(t, e, n) {
    for (var a = e.replace(/]/g, "").replace(/\[/g, ".").split("."), r = t, o = 0, i = a.length; o < i; o++) o === i - 1 ? r[a[o]] = n : r = r[a[o]];
}

function j(t, e) {
    return new Promise(function(n) {
        r.db.collection(t).where(e || {}).get().then(function(e) {
            !function(t, e) {
                t.data.forEach(function(t) {
                    var n = r.methods[e];
                    n && Object.keys(n).forEach(function(e) {
                        Object.defineProperty(t, e, {
                            enumerable: !0,
                            get: function() {
                                return n[e].call(t);
                            },
                            set: function() {}
                        });
                    });
                });
            }(e, t), n(e);
        });
    });
}

function m(t, e) {
    return r.db.collection(t).add({
        data: e
    });
}

function P(t, e) {
    return r.db.collection(t).doc(e).remove();
}

function k() {
    r.method = function(t, e) {
        o[t] = e;
        var n = D(t);
        Object.defineProperty(n.obj, n.key, {
            enumerable: !0,
            get: function() {
                return o[t].call(r.data);
            },
            set: function() {
                console.warn("Please using store.method to set method prop of data!");
            }
        });
    };
}

function D(t) {
    var e = t.replace(/]/g, "").replace(/\[/g, ".").split("."), n = e.length;
    if (n > 1) {
        for (var a = r.data[e[0]], o = 1; o < n - 1; o++) a = a[e[o]];
        return {
            obj: a,
            key: e[n - 1]
        };
    }
    return {
        obj: r.data,
        key: e[0]
    };
}

function E(t) {
    Object.keys(t).forEach(function(e) {
        var n = t[e], a = J(n);
        "[object Function]" == a ? w(e, n) : a == c ? Object.keys(n).forEach(function(t) {
            S(n[t], e + "." + t);
        }) : a == i && n.forEach(function(t, n) {
            S(t, e + "[" + n + "]");
        });
    });
}

function S(t, e) {
    var n = J(t);
    "[object Function]" == n ? w(e, t) : n == c ? Object.keys(t).forEach(function(n) {
        S(t[n], e + "." + n);
    }) : n == i && t.forEach(function(t, n) {
        S(t, e + "[" + n + "]");
    });
}

function w(t, e) {
    var n = D(t);
    o[t] = e, Object.defineProperty(n.obj, n.key, {
        enumerable: !0,
        get: function() {
            return o[t].call(r.data);
        },
        set: function() {
            console.warn("Please using store.method to set method prop of data!");
        }
    });
}

function J(t) {
    return Object.prototype.toString.call(t);
}