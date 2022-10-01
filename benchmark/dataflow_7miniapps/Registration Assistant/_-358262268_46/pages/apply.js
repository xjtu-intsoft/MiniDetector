function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function i(r, o) {
                try {
                    var a = t[r](o), u = a.value;
                } catch (e) {
                    return void n(e);
                }
                if (!a.done) return Promise.resolve(u).then(function(e) {
                    i("next", e);
                }, function(e) {
                    i("throw", e);
                });
                e(u);
            }
            return i("next");
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
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
}, _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t;
    };
}(), _dec, _class, _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _cPanel = require("./../components/cPanel.js"), _cPanel2 = _interopRequireDefault(_cPanel), _cShare = require("./../components/cShare.js"), _cShare2 = _interopRequireDefault(_cShare), _cDialog = require("./../components/cDialog.js"), _cDialog2 = _interopRequireDefault(_cDialog), _cDropdown = require("./../components/cDropdown.js"), _cDropdown2 = _interopRequireDefault(_cDropdown), _mixin = require("./../mixin/index.js"), _mixin2 = _interopRequireDefault(_mixin), _actions = require("./../store/actions/index.js"), _common = require("./../utils/common.js"), _wepyRedux = require("./../npm/wepy-redux/lib/index.js"), Apply = (_dec = (0, 
_wepyRedux.connect)({
    userInfo: function(e) {
        return e.user.userInfo;
    },
    userTagsChoosable: function(e) {
        return e.user.userTagsChoosable;
    },
    curActivity: function(e) {
        return e.user.curActivity;
    }
}, {
    saveUserInfo: _actions.saveUserInfo,
    saveCurActivity: _actions.saveCurActivity
}))(_class = function(e) {
    function t() {
        var e, n, i, r;
        _classCallCheck(this, t);
        for (var o = arguments.length, a = Array(o), u = 0; u < o; u++) a[u] = arguments[u];
        return n = i = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        i.mixins = [ _mixin2.default ], i.data = {
            activity_id: "",
            day: 1,
            can_submit: !0
        }, i.components = {
            panel: _cPanel2.default,
            cDialog: _cDialog2.default
        }, i.computed = {
            price: function() {
                return (0 * i.day).toFixed(2);
            }
        }, i.methods = {
            bindKeyInput: function(e, t) {
                this[e] = t.detail.value;
            },
            goPay: function(e) {
                wx.navigateTo({
                    url: "pay?activity_id=" + e
                });
            },
            handleSave: function(e) {
                var t = this;
                _wepy2.default.showLoading(), this.handleGetInfo(_asyncToGenerator(regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            _wepy2.default.request({
                                url: "/newsite/apply",
                                method: "GET",
                                data: {
                                    openid: t.$parent.globalData.openid,
                                    id: t.activity_id
                                }
                            }).then(function(e) {
                                _wepy2.default.hideLoading(), _wepy2.default.showModal({
                                    title: "申请成功",
                                    content: "我们会在48小时内审核完成,请耐心等待~",
                                    showCancel: !1
                                }).then(function(e) {
                                    wx.navigateBack();
                                });
                            }, function(e) {
                                t.can_submit = !0, t.$apply(), _wepy2.default.hideLoading(), _wepy2.default.showToast({
                                    icon: "none",
                                    title: "提交失败"
                                });
                            });

                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e, t);
                })));
            }
        }, i.handleDetail = function(e, t) {
            _wepy2.default.request({
                url: "/newsite/detail",
                data: {
                    openid: e,
                    activity_id: t
                }
            }).then(function(e) {
                i.detail = _extends({}, e, {
                    top_img: e.top_img.split(","),
                    setIdentity: JSON.parse(e.setIdentity),
                    identity: JSON.parse(e.identity)
                }), i.methods.saveCurActivity(i.detail), i.$apply();
            });
        }, r = n, _possibleConstructorReturn(i, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function(e) {
            this.activity_id = e.activity_id, this.handleGetInfo();
        }
    }, {
        key: "onUnload",
        value: function() {}
    }, {
        key: "onHide",
        value: function() {}
    }, {
        key: "onShow",
        value: function() {
            this.beforeQuest(this.handleDetail, this.activity_id);
        }
    }, {
        key: "onShareAppMessage",
        value: function() {
            return {
                title: this.detail.title,
                imageUrl: this.detail.top_img[0],
                path: "/pages/detail?query=" + this.detail.activity_id
            };
        }
    } ]), t;
}(_wepy2.default.page)) || _class;

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Apply, "pages/apply"));