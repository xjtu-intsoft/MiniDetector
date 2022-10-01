function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e;
}

function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), Searchbar = function(t) {
    function e() {
        var t, n, r, o;
        _classCallCheck(this, e);
        for (var i = arguments.length, u = Array(i), a = 0; a < i; a++) u[a] = arguments[a];
        return n = r = _possibleConstructorReturn(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [ this ].concat(u))), 
        r.data = {
            inputShowed: !1,
            inputVal: ""
        }, r.methods = {
            showInput: function() {
                this.inputShowed = !0;
            },
            hideInput: function() {
                this.inputVal = "", this.inputShowed = !1;
            },
            clearInput: function() {
                this.inputVal = "";
            },
            inputTyping: function(t) {
                this.inputVal = t.detail.value;
            }
        }, o = n, _possibleConstructorReturn(r, o);
    }
    return _inherits(e, t), e;
}(_wepy2.default.page);

exports.default = Searchbar;