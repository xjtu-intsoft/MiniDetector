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
                    var o = t[i](a), s = o.value;
                } catch (e) {
                    return void n(e);
                }
                if (!o.done) return Promise.resolve(s).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(s);
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
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _mixin = require("./../mixin/index.js"), _mixin2 = _interopRequireDefault(_mixin), _common = require("./../utils/common.js"), List = function(e) {
    function t() {
        var e, n, r, i, a = this;
        _classCallCheck(this, t);
        for (var o = arguments.length, s = Array(o), u = 0; u < o; u++) s[u] = arguments[u];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        r.mixins = [ _mixin2.default ], r.data = {
            page: [ 1, 1 ],
            balance: "-",
            activeIndex: "0",
            sliderOffset: 0,
            sliderLeft: 0,
            myActivity: [],
            myCreateAC: [],
            footerText: "",
            tabs: [ "我的报名", "我的创建" ]
        }, r.components = {}, r.computed = {
            list: function() {
                return 0 == +r.activeIndex ? r.myActivity : r.myCreateAC;
            }
        }, r.methods = {
            toggleClick: function(e) {
                this.sliderOffset = e.currentTarget.offsetLeft, this.activeIndex = e.currentTarget.id, 
                this.footerText = "", this.$apply();
            },
            handleJump: function() {
                wx.navigateTo({
                    url: "enroll"
                });
            },
            handleJumpRollOut: function() {
                wx.navigateTo({
                    url: "balance"
                });
            },
            handleJumpServer: function() {
                wx.navigateTo({
                    url: "server"
                });
            },
            handleJumpList: function(e) {
                wx.navigateTo({
                    url: "roll?activity_id=" + e + "&index=" + this.activeIndex
                });
            }
        }, r.handleCreate = function() {
            _wepy2.default.request({
                url: "/newsite/mycreateInfo",
                data: {
                    openid: r.openid,
                    page: r.page[1]
                }
            }).then(function(e) {
                var t = e.myCreateAC, n = e.balance;
                t.length && t.map(function(e) {
                    return e.top_img = e.top_img.split(",")[0] || [ e.top_img ];
                }), r.myCreateAC = r.myCreateAC.concat(t), r.balance = n / 100, r.footerText = "", 
                r.$apply();
            });
        }, r.handleJoin = function() {
            _wepy2.default.request({
                url: "/newsite/myjoinInfo",
                data: {
                    openid: r.openid,
                    page: r.page[0]
                }
            }).then(function(e) {
                var t = e.myActivity, n = e.balance;
                t.length && t.map(function(e) {
                    return e.top_img = e.top_img.split(",")[0] || [ e.top_img ];
                }), r.myActivity = r.myActivity.concat(t), r.balance = n, r.footerText = "", r.$apply();
            });
        }, r.handleDetail = function() {
            var e = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        r.openid = t, r.$apply(), r.handleCreate(), r.handleJoin();

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e, a);
            }));
            return function(t) {
                return e.apply(this, arguments);
            };
        }(), i = n, _possibleConstructorReturn(r, i);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onReachBottom",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (console.log(this.myActivity.length, this.myCreateAC.length), this.footerText = "数据加载中...", 
                        "0" !== +this.activeIndex || this.myActivity.length !== 10 * this.page[0]) {
                            e.next = 9;
                            break;
                        }
                        return this.page[0]++, this.$apply(), e.next = 7, this.handleJoin();

                      case 7:
                        e.next = 17;
                        break;

                      case 9:
                        if (0 == +this.activeIndex || this.myCreateAC.length !== 10 * this.page[1]) {
                            e.next = 16;
                            break;
                        }
                        return this.page[1]++, this.$apply(), e.next = 14, this.handleCreate();

                      case 14:
                        e.next = 17;
                        break;

                      case 16:
                        this.footerText = "没有更多数据了...";

                      case 17:
                        _wepy2.default.stopPullDownRefresh();

                      case 18:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onLoad",
        value: function() {
            var e = this.$parent.globalData.systemInfoSync;
            this.sliderLeft = (e.windowWidth / this.tabs.length - 100) / 2, this.sliderOffset = e.windowWidth / this.tabs.length * this.activeIndex;
        }
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

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(List, "pages/list"));