function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function r(o, a) {
                try {
                    var i = t[o](a), u = i.value;
                } catch (e) {
                    return void n(e);
                }
                if (!i.done) return Promise.resolve(u).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(u);
            }
            return r("next");
        });
    };
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _extends = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
}, _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
    };
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _mixin = require("./../mixin/index.js"), _mixin2 = _interopRequireDefault(_mixin), _common = require("./../utils/common.js"), List = function(e) {
    function t() {
        var e, n, r, o, a = this;
        _classCallCheck(this, t);
        for (var i = arguments.length, u = Array(i), c = 0; c < i; c++) u[c] = arguments[c];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(u))), 
        r.mixins = [ _mixin2.default ], r.data = {
            balance: "-",
            list: []
        }, r.components = {}, r.methods = {
            handleJumpServer: function() {
                wx.navigateTo({
                    url: "server"
                });
            },
            handleJumpRollOut: function() {
                if (this.balance < 500) return void _wepy2.default.showToast({
                    title: "低于5元无法提现",
                    icon: "none"
                });
                wx.navigateTo({
                    url: "rollOut?balance=" + this.balance
                });
            },
            handleJumpList: function(e) {
                wx.navigateTo({
                    url: "roll?activity_id=" + e
                });
            }
        }, r.handleDetail = function() {
            var e = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var n, o, i, u;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _wepy2.default.request({
                            url: "/newsite/tipping",
                            data: {
                                openid: t
                            }
                        });

                      case 2:
                        n = e.sent, o = n.playtour.map(function(e) {
                            return _extends({}, e, {
                                price: "+" + e.price / 100 + "元",
                                title: 2 == +e.type ? "报名收入" : "打赏收入",
                                date: (0, _common.dateStr)(e.date)
                            });
                        }), i = n.transfers.map(function(e) {
                            return _extends({}, e, {
                                price: "-" + e.price / 100 + "元",
                                title: "提现",
                                date: (0, _common.dateStr)(e.date)
                            });
                        }), u = o.concat(i).sort(function(e, t) {
                            return new Date(t.date) - new Date(e.date);
                        }), r.balance = n.balance, r.list = u, r.$apply();

                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e, a);
            }));
            return function(t) {
                return e.apply(this, arguments);
            };
        }(), o = n, _possibleConstructorReturn(r, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {}
    }, {
        key: "onShow",
        value: function() {
            this.beforeQuest(this.handleDetail);
        }
    }, {
        key: "onShareAppMessage",
        value: function() {
            return (0, _common.shareConfig)();
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(List, "pages/balance"));