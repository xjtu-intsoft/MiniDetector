var t = require("../../../@babel/runtime/helpers/interopRequireDefault"), e = t(require("../../../@babel/runtime/regenerator")), r = t(require("../../../@babel/runtime/helpers/asyncToGenerator"));

function n(t) {
    if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
        if (Array.isArray(t) || (t = function(t, e) {
            if (!t) return;
            if ("string" == typeof t) return i(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(r);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return i(t, e);
        }(t))) {
            var e = 0, r = function() {};
            return {
                s: r,
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
                f: r
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var n, o, a = !0, u = !1;
    return {
        s: function() {
            n = t[Symbol.iterator]();
        },
        n: function() {
            var t = n.next();
            return a = t.done, t;
        },
        e: function(t) {
            u = !0, o = t;
        },
        f: function() {
            try {
                a || null == n.return || n.return();
            } finally {
                if (u) throw o;
            }
        }
    };
}

function i(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n;
}

getApp();

var o, a, u = 0, s = 0;

Component({
    options: {
        multipleSlots: !0
    },
    properties: {
        roofPlacementList: {
            type: Array,
            value: []
        },
        otherCardData: {
            type: Array,
            value: []
        },
        sortBy: String
    },
    data: {
        leftList: [],
        rightList: []
    },
    observers: {
        "roofPlacementList, otherCardData": function(t, e) {}
    },
    methods: {
        _initData: function(t, e) {
            var r;
            r = this._mixedroofPlacementAndOthers(t, e), this._isLeft(r);
        },
        _isLeft: (a = (0, r.default)(e.default.mark(function t(r) {
            var i, a, l, c, f;
            return e.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    i = [], a = [], o = this.createSelectorQuery(), l = n(r), t.prev = 3, l.s();

                  case 5:
                    if ((c = l.n()).done) {
                        t.next = 13;
                        break;
                    }
                    return f = c.value, console.log("leftHeight <= rightHeight ", u, s), u <= s ? i.push(f) : a.push(f), 
                    t.next = 11, this._getBoxHeight(i, a);

                  case 11:
                    t.next = 5;
                    break;

                  case 13:
                    t.next = 18;
                    break;

                  case 15:
                    t.prev = 15, t.t0 = t.catch(3), l.e(t.t0);

                  case 18:
                    return t.prev = 18, l.f(), t.finish(18);

                  case 21:
                  case "end":
                    return t.stop();
                }
            }, t, this, [ [ 3, 15, 18, 21 ] ]);
        })), function(t) {
            return a.apply(this, arguments);
        }),
        _mixedroofPlacementAndOthers: function(t, e) {
            var r = [];
            t = t || [], e = e || [];
            for (var n = 0; n < t.length; n++) t[n].isTop = !0, r.push(t[n]);
            for (var i = 0; i < e.length; i++) e[i].isTop = !1, r.push(e[i]);
            return r;
        },
        _getBoxHeight: function(t, e) {
            var r = this;
            return new Promise(function(n, i) {
                r.setData({
                    leftList: t,
                    rightList: e
                }, function() {
                    o.select("#left").boundingClientRect(), o.select("#right").boundingClientRect(), 
                    o.exec(function(t) {
                        u = t[0].height, s = t[1].height, n();
                    });
                });
            });
        },
        _toWallDetail: function(t) {
            this.triggerEvent("toWallDetail", t);
        },
        _toEdit: function() {
            this.triggerEvent("toEdit");
        }
    }
});