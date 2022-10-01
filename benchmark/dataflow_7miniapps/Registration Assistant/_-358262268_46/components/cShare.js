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
        var e, n, o, r;
        _classCallCheck(this, t);
        for (var a = arguments.length, i = Array(a), s = 0; s < a; s++) i[s] = arguments[s];
        return n = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        o.data = {
            time: 200,
            animationType: "bottom"
        }, o.props = {
            shareStatus: {
                type: String,
                default: "0"
            },
            activity_id: {
                type: String,
                default: ""
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
        }, o.customData = {}, o.methods = {
            cShareHide: function(e) {
                this.$broadcast("closeMask");
            }
        }, o.events = {
            showShare: function(e) {
                var t = e.shareStatus, n = e.activity_id;
                this.shareStatus = t, this.activity_id = n, this.$broadcast("openMask");
            }
        }, r = n, _possibleConstructorReturn(o, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLaunch",
        value: function() {}
    } ]), t;
}(_wepy2.default.component);

exports.default = cPopup;