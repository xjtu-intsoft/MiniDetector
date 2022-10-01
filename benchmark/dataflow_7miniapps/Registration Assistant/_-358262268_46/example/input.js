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
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), Input = function(e) {
    function t() {
        var e, n, o, a;
        _classCallCheck(this, t);
        for (var i = arguments.length, r = Array(i), c = 0; c < i; c++) r[c] = arguments[c];
        return n = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(r))), 
        o.data = {
            tipsFlag: !1,
            radioItems: [ {
                name: "cell standard",
                value: "0",
                checked: !1
            }, {
                name: "cell standard",
                value: "1",
                checked: !0
            } ],
            checkboxItems: [ {
                name: "standard is dealt for u.",
                value: "0",
                checked: !0
            }, {
                name: "standard is dealicient for u.",
                value: "1",
                checked: !1
            } ],
            date: "2016-09-01",
            time: "12:01",
            countryCodes: [ "+86", "+80", "+84", "+87" ],
            countryCodeIndex: 0,
            countries: [ "中国", "美国", "英国" ],
            countryIndex: 0,
            accounts: [ "微信号", "QQ", "Email" ],
            accountIndex: 0,
            isAgree: !1
        }, o.methods = {
            radioChange: function(e) {
                console.log("radio发生change事件，携带value值为：", e.detail.value), this.radioItems.forEach(function(t) {
                    t.checked = t.value === e.detail.value;
                });
            },
            checkboxChange: function(e) {
                console.log("checkbox发生change事件，携带value值为：", e.detail.value);
                for (var t = this.checkboxItems, n = e.detail.value, o = 0, a = t.length; o < a; ++o) {
                    t[o].checked = !1;
                    for (var i = 0, r = n.length; i < r; ++i) if (t[o].value === n[i]) {
                        t[o].checked = !0;
                        break;
                    }
                }
                this.checkboxItems = t;
            },
            bindDateChange: function(e) {
                this.data = e.detail.value;
            },
            bindTimeChange: function(e) {
                this.time = e.detail.value;
            },
            bindCountryCodeChange: function(e) {
                console.log("picker country code 发生选择改变，携带值为", e.detail.value), this.countryCodeIndex = e.detail.value;
            },
            bindAccountChange: function(e) {
                console.log("picker country 发生选择改变，携带值为", e.detail.value), this.accountIndex = e.detail.value;
            },
            bindCountryChange: function(e) {
                this.countryIndex = e.detail.value;
            },
            bindAgreeChange: function(e) {
                this.isAgree = !!e.detail.value.length;
            },
            showTopTips: function() {
                var e = this;
                this.tipsFlag = !0, setTimeout(function() {
                    e.tipsFlag = !1, e.$apply();
                }, 3e3);
            }
        }, a = n, _possibleConstructorReturn(o, a);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            this.icon = require("./../images/base64.js").icon20;
        }
    } ]), t;
}(_wepy2.default.page);

exports.default = Input;