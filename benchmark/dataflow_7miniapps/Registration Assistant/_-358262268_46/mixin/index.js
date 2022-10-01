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
}), exports.default = void 0;

var _createClass = function() {
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
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _common = require("./../utils/common.js"), TestMixin = function(e) {
    function t() {
        return _classCallCheck(this, t), _possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "beforeQuest",
        value: function(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            this.$parent.globalData.openid ? e.apply(void 0, [ this.$parent.globalData.openid ].concat(n)) : this.$parent.employIdCallback = function(t) {
                t && e.apply(void 0, [ t ].concat(n));
            };
        }
    }, {
        key: "handleGetInfo",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var n, r, o, a, i, u = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (!this.userInfo) {
                            e.next = 3;
                            break;
                        }
                        return t && t(this.userInfo), e.abrupt("return");

                      case 3:
                        return e.next = 5, _wepy2.default.getSetting();

                      case 5:
                        if (n = e.sent, r = n.authSetting, !r["scope.userInfo"]) {
                            e.next = 17;
                            break;
                        }
                        return e.next = 10, _wepy2.default.getUserInfo();

                      case 10:
                        o = e.sent, a = o.userInfo, this.methods.saveUserInfo(a), t && t(a), this.$apply(), 
                        e.next = 19;
                        break;

                      case 17:
                        i = this, this.$broadcast("showDialog", {
                            desc: "同意小程序向您发出的用户授权请求",
                            cancelText: "放弃",
                            btnList: [ {
                                open_type: "getUserInfo",
                                value: "授权",
                                callback: function(e) {
                                    var n = e.userInfo;
                                    u.methods.saveUserInfo(n), t && t(n), u.$apply();
                                }
                            } ]
                        });

                      case 19:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onLaunch",
        value: function() {
            _common.getOpenid.call(this);
        }
    } ]), t;
}(_wepy2.default.mixin);

exports.default = TestMixin;