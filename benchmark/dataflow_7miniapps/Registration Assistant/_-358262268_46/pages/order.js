function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _defineProperty(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
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
}(), _dec, _class, _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _mixin = require("./../mixin/index.js"), _mixin2 = _interopRequireDefault(_mixin), _cDialog = require("./../components/cDialog.js"), _cDialog2 = _interopRequireDefault(_cDialog), _actions = require("./../store/actions/index.js"), _common = require("./../utils/common.js"), _wepyRedux = require("./../npm/wepy-redux/lib/index.js"), Tag = (_dec = (0, 
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
        r.mixins = [ _mixin2.default ], r.data = {
            stranger_see: !0
        }, r.components = {
            cDialog: _cDialog2.default
        }, r.methods = {
            handleSet: function(e, t, n) {
                this.curActivity[e][t].value = n.detail.value;
            },
            bindSwitchChange: function(e) {
                this.stranger_see = e.detail.value;
            },
            formSubmit: function() {
                function e(e) {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                    var n;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (!(n = this.handleCheckData(this.userInfo))) {
                                e.next = 13;
                                break;
                            }
                            if (!(this.curActivity.price > 0)) {
                                e.next = 7;
                                break;
                            }
                            return e.next = 5, this.handlePay(n);

                          case 5:
                            e.next = 9;
                            break;

                          case 7:
                            return e.next = 9, _wepy2.default.request({
                                url: "/newsite/activity_detail",
                                method: "post",
                                data: n
                            });

                          case 9:
                            return e.next = 11, _wepy2.default.request({
                                url: "/newsite/report",
                                data: {
                                    activity_id: n.activity_id,
                                    nickName: n.nickName,
                                    formid: t.detail.formId,
                                    openid: n.openid
                                }
                            });

                          case 11:
                            wx.reLaunch({
                                url: "detail?query=" + this.curActivity.activity_id + "&enroll=2"
                            }), _wepy2.default.hideLoading();

                          case 13:
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
        key: "handleCheckData",
        value: function() {
            var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            _wepy2.default.showLoading({
                title: "提交中"
            });
            var n = !0, r = _extends((e = {
                openid: this.$parent.globalData.openid,
                activity_id: this.curActivity.activity_id,
                price: this.curActivity.price + "",
                date: new Date().toLocaleString(),
                setIdentity: JSON.stringify(this.curActivity.setIdentity),
                identity: JSON.stringify(this.curActivity.identity)
            }, _defineProperty(e, "price", this.curActivity.price), _defineProperty(e, "type", 2), 
            e), t);
            return this.curActivity.setIdentity.length && this.curActivity.setIdentity.forEach(function(e) {
                if (!e.value) return void (n = !1);
            }), this.curActivity.identity && this.curActivity.identity.forEach(function(e) {
                if (!e.value) return void (n = !1);
            }), n ? r : (_wepy2.default.hideLoading(), _wepy2.default.showToast({
                icon: "none",
                title: "不能为空"
            }), !1);
        }
    }, {
        key: "handlePay",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var n, r, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _wepy2.default.request({
                            url: "/newsite/wxpay",
                            method: "post",
                            data: t
                        });

                      case 2:
                        return n = e.sent, r = n.result, i = {
                            timeStamp: r.timeStamp,
                            nonceStr: r.nonceStr,
                            package: r.package,
                            signType: r.signType,
                            paySign: r.paySign
                        }, e.next = 7, _wepy2.default.requestPayment(i).then(function(e) {
                            return wx.navigateBack();
                        });

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page)) || _class;

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Tag, "pages/order"));