function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, r) {
            function n(a, o) {
                try {
                    var i = t[a](o), u = i.value;
                } catch (e) {
                    return void r(e);
                }
                if (!i.done) return Promise.resolve(u).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(u);
            }
            return n("next");
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

var _createClass = function() {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
    };
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), Tag = function(e) {
    function t() {
        var e, r, n, a;
        _classCallCheck(this, t);
        for (var o = arguments.length, i = Array(o), u = 0; u < o; u++) i[u] = arguments[u];
        return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        n.data = {
            can_submit: !0,
            balance: "-",
            userName: "",
            price: ""
        }, n.methods = {
            bindKeyInput: function(e, t) {
                this[e] = t.detail.value;
            },
            handleSubmit: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var t, r, n = this;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (this.can_submit = !1, _wepy2.default.showLoading({
                                title: "提交中"
                            }), this.userName) {
                                e.next = 5;
                                break;
                            }
                            return this.err("请输入您的真实姓名"), e.abrupt("return");

                          case 5:
                            if (!(!("" + this.price).match(/^(0|[1-9]\d*)$/g) || this.price < 5 || this.price > this.balance)) {
                                e.next = 8;
                                break;
                            }
                            return this.err("提现最低门槛5元并且为不超过可提现余额的整元金额"), e.abrupt("return");

                          case 8:
                            return e.next = 10, _wepy2.default.login();

                          case 10:
                            t = e.sent, r = t.code, _wepy2.default.request({
                                url: "/newsite/transfers",
                                method: "post",
                                data: {
                                    userName: this.userName,
                                    code: r,
                                    price: this.price
                                }
                            }).then(function(e) {
                                0 !== e.err ? _wepy2.default.redirectTo({
                                    url: "payErr"
                                }) : (n.can_submit = !0, n.$apply(), _wepy2.default.showModal({
                                    title: "提现成功",
                                    content: "提现金额已付款到您的微信零钱，请前往查收~"
                                }).then(function(e) {
                                    _wepy2.default.navigateBack({
                                        delta: 1
                                    });
                                }));
                            }).catch(function(e) {
                                n.can_submit = !0, _wepy2.default.hideLoading(), console.log(e), _wepy2.default.showToast({
                                    icon: "none",
                                    title: "string" == typeof e ? e.errmsg : "提现出错"
                                }).then(function() {
                                    setTimeout(function() {
                                        _wepy2.default.redirectTo({
                                            url: "payErr"
                                        });
                                    }, 2e3);
                                });
                            });

                          case 13:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }()
        }, n.err = function(e) {
            _wepy2.default.hideLoading(), _wepy2.default.showToast({
                icon: "none",
                title: e
            }), n.can_submit = !0, n.$apply();
        }, a = r, _possibleConstructorReturn(n, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e) {
            this.balance = e.balance;
        }
    } ]), t;
}(_wepy2.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Tag, "pages/rollOut"));