function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function r(i, o) {
                try {
                    var a = t[i](o), u = a.value;
                } catch (e) {
                    return void n(e);
                }
                if (!a.done) return Promise.resolve(u).then(function(e) {
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
}(), _dec, _class, _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _mixin = require("./../mixin/index.js"), _mixin2 = _interopRequireDefault(_mixin), _actions = require("./../store/actions/index.js"), _common = require("./../utils/common.js"), _wepyRedux = require("./../npm/wepy-redux/lib/index.js"), Found = (_dec = (0, 
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
        var e, n, r, i;
        _classCallCheck(this, t);
        for (var o = arguments.length, a = Array(o), u = 0; u < o; u++) a[u] = arguments[u];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        r.mixins = [ _mixin2.default ], r.config = {
            navigationBarTitleText: "首页",
            enablePullDownRefresh: !0
        }, r.data = {
            inputShowed: !1,
            inputVal: "",
            page: 1,
            list: []
        }, r.customData = {}, r.methods = {
            handleChhoseActivity: function(e) {
                this.methods.saveCurActivity(e);
            }
        }, r.handleDetail = function() {
            _wepy2.default.request({
                url: "/newsite/index",
                data: {
                    page: r.page + ""
                }
            }).then(function(e) {
                e.list.length && e.list.map(function(e) {
                    return e.top_img = e.top_img.split(",")[0] || [ e.top_img ];
                }), r.page > 1 ? r.list = r.list.concat(e.list) : r.list = e.list, r.$apply();
            });
        }, i = n, _possibleConstructorReturn(r, i);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onPullDownRefresh",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.page = 1, this.$apply(), e.next = 4, this.handleDetail();

                      case 4:
                        _wepy2.default.stopPullDownRefresh();

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onReachBottom",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (this.list.length !== 10 * this.page) {
                            e.next = 6;
                            break;
                        }
                        return this.page++, this.$apply(), e.next = 5, this.handleDetail();

                      case 5:
                        _wepy2.default.stopPullDownRefresh();

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onLoad",
        value: function(e) {
            this.handleGetInfo();
        }
    }, {
        key: "onShow",
        value: function() {
            this.beforeQuest(this.handleDetail);
        }
    }, {
        key: "onShareAppMessage",
        value: function() {
            return shareConfig();
        }
    } ]), t;
}(_wepy2.default.page)) || _class;

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Found, "pages/found"));