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
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _cMask = require("./cMask.js"), _cMask2 = _interopRequireDefault(_cMask), cPopup = function(e) {
    function t() {
        var e, n, o, i;
        _classCallCheck(this, t);
        for (var s = arguments.length, a = Array(s), r = 0; r < s; r++) a[r] = arguments[r];
        return n = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        o.data = {
            time: 100,
            animationType: "center",
            autoHidden: !1,
            cDialogType: ""
        }, o.props = {
            title: {
                type: String,
                default: "通知"
            },
            desc: {
                type: String,
                default: ""
            },
            direction: {
                type: String,
                default: ""
            },
            showConfirm: {
                type: Boolean,
                default: !1
            },
            confirmText: {
                type: String,
                default: "确认"
            },
            confirmStyle: {
                type: String,
                default: ""
            },
            showCancel: {
                type: Boolean,
                default: !0
            },
            cancelText: {
                type: String,
                default: ""
            },
            btnList: {
                type: Array,
                default: []
            }
        }, o.$repeat = {}, o.$props = {
            mask: {
                "xmlns:v-bind": "",
                "v-bind:animationTime.once": "time",
                "v-bind:animationType.once": "animationType",
                "v-bind:autoHidden.once": "autoHidden"
            }
        }, o.$events = {}, o.components = {
            mask: _cMask2.default
        }, o.customFunction = {
            createPromise: function(e) {
                return Promise.resolve(e);
            }
        }, o.methods = {
            handleCustom: function(e, t) {
                var n = this.btnList[e];
                n.callback && n.callback(t), this.$broadcast("closeMask");
            },
            handleClick: function(e) {
                this.closeDialog(e);
            },
            handleGotUserInfo: function(e, t) {
                var n = this.btnList[e];
                n.callback && n.callback(t.detail), this.$broadcast("closeMask");
            }
        }, o.events = {
            showDialog: function(e) {
                var t = e.title, n = e.desc, o = e.direction, i = e.showConfirm, s = e.confirmText, a = e.confirmStyle, r = e.showCancel, c = e.cancelStyle, l = e.cancelText, u = e.btnList, f = e.success;
                this.title = t, this.desc = n, this.direction = o, this.showConfirm = i, this.confirmText = s, 
                this.confirmStyle = a, this.showCancel = r, this.cancelStyle = c, this.cancelText = l || i ? "取消" : "知道了", 
                this.btnList = u, this.success = f, this.$broadcast("openMask");
            },
            closeMask: function() {
                this.closeDialog(!1);
            }
        }, i = n, _possibleConstructorReturn(o, i);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "closeDialog",
        value: function(e) {
            this.success && this.success({
                confirm: !!+e,
                cancel: !+e
            }), this.$broadcast("closeMask");
        }
    }, {
        key: "onLaunch",
        value: function() {}
    } ]), t;
}(_wepy2.default.component);

exports.default = cPopup;