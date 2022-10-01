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

var _createClass = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(t, o.key, o);
        }
    }
    return function(e, n, o) {
        return n && t(e.prototype, n), o && t(e, o), e;
    };
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), cPopup = function(t) {
    function e() {
        var t, n, o, i;
        _classCallCheck(this, e);
        for (var a = arguments.length, r = Array(a), s = 0; s < a; s++) r[s] = arguments[s];
        return n = o = _possibleConstructorReturn(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [ this ].concat(r))), 
        o.data = {
            maskStatus: !1,
            contentAnimate: {}
        }, o.props = {
            animationTime: {
                type: Number,
                default: 300
            },
            animationType: {
                type: String,
                default: ""
            },
            maskShow: {
                type: Boolean,
                default: !0
            },
            autoHidden: {
                type: Boolean,
                default: !0
            }
        }, o.methods = {
            closeMask: function() {
                this.$emit("closeMask"), this.closeMask();
            },
            handleMove: function() {
                return !1;
            }
        }, o.events = {
            openMask: function() {
                var t = this, e = this.createAnimation();
                switch (this.animationType) {
                  case "center":
                    e.opacity(1).step();
                    break;

                  case "bottom":
                    e.translateY(0).step();
                }
                this.maskStatus = !0, this.animationTime ? setTimeout(function() {
                    t.contentAnimate = e.export(), t.$apply();
                }, this.animationTime) : this.contentAnimate = e.export();
            },
            closeMask: function() {
                this.closeMask();
            }
        }, i = n, _possibleConstructorReturn(o, i);
    }
    return _inherits(e, t), _createClass(e, [ {
        key: "closeMask",
        value: function() {
            var t = this, e = this.createAnimation();
            switch (this.animationType) {
              case "center":
                e.opacity(0).step();
                break;

              case "bottom":
                e.translateY("100%").step();
            }
            this.contentAnimate = e.export(), this.animationTime ? setTimeout(function() {
                t.maskStatus = !1, t.$apply();
            }, this.animationTime) : this.maskStatus = !1;
        }
    }, {
        key: "createAnimation",
        value: function() {
            return _wepy2.default.createAnimation({
                timingFunction: "ease",
                duration: this.animationTime
            });
        }
    } ]), e;
}(_wepy2.default.component);

exports.default = cPopup;