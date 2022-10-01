function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function r(i, a) {
                try {
                    var o = t[i](a), u = o.value;
                } catch (e) {
                    return void n(e);
                }
                if (!o.done) return Promise.resolve(u).then(function(e) {
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
}(), _dec, _class, _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _actions = require("./../store/actions/index.js"), _common = require("./../utils/common.js"), _wepyRedux = require("./../npm/wepy-redux/lib/index.js"), Tag = (_dec = (0, 
_wepyRedux.connect)({
    userInfo: function(e) {
        return e.user.userInfo;
    },
    curActivity: function(e) {
        return e.user.curActivity;
    }
}, {
    saveUserInfo: _actions.saveUserInfo,
    saveCurActivity: _actions.saveCurActivity
}))(_class = function(e) {
    function t() {
        var e, n, r, i;
        _classCallCheck(this, t);
        for (var a = arguments.length, o = Array(a), u = 0; u < a; u++) o[u] = arguments[u];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        r.data = {
            grids: [ .5, 1, 2, 5, 10, 20 ],
            price: ""
        }, r.computed = {
            isHide: function() {
                return this.grids.includes(this.price);
            }
        }, r.methods = {
            bindKeyInput: function(e, t) {
                this[e] = t.detail.value;
            },
            setprice: function(e) {
                this.price = e;
            },
            handleSubmit: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var t, n, r;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (("" + this.price).match(/^(0|[1-9]\d*)?(\.\d{1,2})?$/g) && this.price) {
                                e.next = 3;
                                break;
                            }
                            return _wepy2.default.showToast({
                                icon: "none",
                                title: "价格格式不对"
                            }), e.abrupt("return", !1);

                          case 3:
                            return e.next = 5, _wepy2.default.request({
                                url: "/newsite/wxpay",
                                method: "post",
                                data: {
                                    activity_id: this.activity_id,
                                    nickName: this.userInfo.nickName,
                                    avatarUrl: this.userInfo.avatarUrl,
                                    openid: this.$parent.globalData.openid,
                                    price: this.price,
                                    type: 1
                                }
                            });

                          case 5:
                            return t = e.sent, n = t.result, r = {
                                timeStamp: n.timeStamp,
                                nonceStr: n.nonceStr,
                                package: n.package,
                                signType: n.signType,
                                paySign: n.paySign
                            }, e.next = 10, _wepy2.default.requestPayment(r).then(function(e) {
                                return wx.navigateBack();
                            });

                          case 10:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }()
        }, i = n, _possibleConstructorReturn(r, i);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e) {
            this.activity_id = e.activity_id;
        }
    } ]), t;
}(_wepy2.default.page)) || _class;

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Tag, "pages/pay"));