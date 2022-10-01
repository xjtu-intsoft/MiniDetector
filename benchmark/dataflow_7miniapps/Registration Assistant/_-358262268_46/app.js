function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
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
            var o = t[r];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(t, r, o) {
        return r && e(t.prototype, r), o && e(t, o), t;
    };
}(), _wepy = require("./npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy);

require("./npm/wepy-async-function/index.js"), require("./utils/ald-stat.js");

var _wepyRedux = require("./npm/wepy-redux/lib/index.js"), _common = require("./utils/common.js"), _store = require("./store/index.js"), _store2 = _interopRequireDefault(_store), store = (0, 
_store2.default)();

(0, _wepyRedux.setStore)(store);

var _default = function(e) {
    function t() {
        _classCallCheck(this, t);
        var e = _possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return e.config = {
            pages: [ "pages/index", "pages/detail", "pages/apply", "pages/list", "pages/enroll", "pages/tags", "pages/found", "pages/order", "pages/roll", "pages/rollOut", "pages/sharePic", "pages/reward", "pages/balance", "pages/pay", "pages/server", "pages/payErr", "pages/download", "pages/protocol" ],
            window: {
                navigationBarTextStyle: "black",
                navigationBarTitleText: "报名工具助手",
                navigationBarBackgroundColor: "#f8f8f8",
                backgroundColor: "#f8f8f8"
            },
            networkTimeout: {
                request: 1e4,
                connectSocket: 1e4,
                uploadFile: 1e4,
                downloadFile: 1e4
            },
            tabBar: {
                selectedColor: "#ff5001",
                list: [ {
                    pagePath: "pages/index",
                    text: "创建",
                    iconPath: "./img/add_off.png",
                    selectedIconPath: "./img/add_on.png"
                }, {
                    pagePath: "pages/list",
                    text: "我的",
                    iconPath: "./img/me_off.png",
                    selectedIconPath: "./img/me_on.png"
                } ]
            },
            navigateToMiniProgramAppIdList: [ "wxd6939488c1ba2ae2", "wxa4eebe8cb549b4c8" ]
        }, e.globalData = {}, e.use("promisify"), e.use("requestfix"), e.intercept("request", {
            config: function(e) {
                return e.url = "https://www.feituns.com" + e.url, e;
            },
            success: function(e) {
                return new Promise(function(t, r) {
                    502 === e.statusCode && wx.showModal({
                        content: "服務器繁忙，請稍後重試。",
                        showCancel: !1
                    }), 0 == +e.data.err ? t(e.data) : r(e.data);
                });
            },
            fail: function(e) {
                return console.log(e), Promise.reject(e);
            }
        }), e;
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLaunch",
        value: function() {
            var e = this;
            _wepy2.default.getSystemInfo().then(function(t) {
                return e.globalData.systemInfoSync = t;
            }), _common.getOpenid.call(this), (0, _common.update)();
        }
    } ]), t;
}(_wepy2.default.app);

App(require("./npm/wepy/lib/wepy.js").default.$createApp(_default, {
    noPromiseAPI: [ "createSelectorQuery" ]
}));