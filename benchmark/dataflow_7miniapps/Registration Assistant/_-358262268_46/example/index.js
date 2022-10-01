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
}), exports.default = void 0;

var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
    };
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _store = require("./../store/index.js"), _store2 = _interopRequireDefault(_store), Index = function(e) {
    function t() {
        var e, n, o, r;
        _classCallCheck(this, t);
        for (var a = arguments.length, i = Array(a), s = 0; s < a; s++) i[s] = arguments[s];
        return n = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        o.data = {
            animationData: {},
            list: [ {
                id: "form",
                name: "表单",
                open: !1,
                pages: [ "button", "list", "input", "slider", "uploader" ]
            }, {
                id: "widget",
                name: "基础组件",
                open: !1,
                pages: [ "article", "badge", "flex", "footer", "gallery", "grid", "icons", "loadmore", "panel", "preview", "progress" ]
            }, {
                id: "feedback",
                name: "操作反馈",
                open: !1,
                pages: [ "actionsheet", "dialog", "msg", "picker", "toast" ]
            }, {
                id: "nav",
                name: "导航相关",
                open: !1,
                pages: [ "navbar", "tabbar" ]
            }, {
                id: "search",
                name: "搜索相关",
                open: !1,
                pages: [ "searchbar" ]
            } ]
        }, o.methods = {
            toggle: function(e) {
                this.list.forEach(function(t) {
                    return t.open = t.id === e && !t.open;
                });
            },
            handleShow: function() {
                this.animation.bottom(0).step(), this.animationData = this.animation.export();
            },
            handleHide: function() {
                this.animation.bottom(-1e3).step(), this.animationData = this.animation.export();
            }
        }, r = n, _possibleConstructorReturn(o, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            this.animation = wx.createAnimation({
                duration: 600,
                timingFunction: "ease"
            });
        }
    } ]), t;
}(_wepy2.default.page);

exports.default = Index;