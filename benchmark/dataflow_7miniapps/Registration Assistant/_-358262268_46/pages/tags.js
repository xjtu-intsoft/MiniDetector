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
        for (var a = 0; a < t.length; a++) {
            var n = t[a];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, a, n) {
        return a && e(t.prototype, a), n && e(t, n), t;
    };
}(), _dec, _class, _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _wepyRedux = require("./../npm/wepy-redux/lib/index.js"), _actions = require("./../store/actions/index.js"), Tag = (_dec = (0, 
_wepyRedux.connect)({
    userTagsMandatory: function(e) {
        return e.user.userTagsMandatory;
    },
    userTagsChoosable: function(e) {
        return e.user.userTagsChoosable;
    }
}, {
    saveTagsNandatory: _actions.saveTagsNandatory,
    saveTagsChoosable: _actions.saveTagsChoosable
}))(_class = function(e) {
    function t() {
        var e, a, n, o;
        _classCallCheck(this, t);
        for (var s = arguments.length, r = Array(s), c = 0; c < s; c++) r[c] = arguments[c];
        return a = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(r))), 
        n.data = {
            new_tag: "",
            checkMandatory: [],
            checkChoosable: []
        }, n.computed = {}, n.methods = {
            bindKeyInput: function(e, t) {
                this[e] = t.detail.value;
            },
            checkboxChange: function(e, t) {
                var a = t.detail.value;
                this[e].map(function(e, t) {
                    a.includes(e.index) ? e.checked = !0 : e.checked = !1;
                });
            },
            handleAdd: function(e) {
                var t = this.new_tag, a = this.checkChoosable.length + "";
                t && (this.checkChoosable.push({
                    name: t,
                    index: a,
                    checked: !1
                }), this.new_tag = "");
            },
            handelSave: function() {
                this.methods.saveTagsNandatory(this.checkMandatory), this.methods.saveTagsChoosable(this.checkChoosable), 
                wx.navigateBack();
            }
        }, o = a, _possibleConstructorReturn(n, o);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {
            this.checkMandatory = this.userTagsMandatory, this.checkChoosable = this.userTagsChoosable;
        }
    } ]), t;
}(_wepy2.default.page)) || _class;

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Tag, "pages/tags"));