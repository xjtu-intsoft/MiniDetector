function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function createAction(e, t, i) {
    void 0 === t && (t = _identity.default), (0, _invariant.default)((0, _isFunction.default)(t) || (0, 
    _isNull.default)(t), "Expected payloadCreator to be a function, undefined or null");
    var r = (0, _isNull.default)(t) || t === _identity.default ? _identity.default : function(e) {
        for (var i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++) r[n - 1] = arguments[n];
        return e instanceof Error ? e : t.apply(void 0, [ e ].concat(r));
    }, n = (0, _isFunction.default)(i), u = e.toString(), a = function() {
        var t = r.apply(void 0, arguments), u = {
            type: e
        };
        return t instanceof Error && (u.error = !0), void 0 !== t && (u.payload = t), n && (u.meta = i.apply(void 0, arguments)), 
        u;
    };
    return a.toString = function() {
        return u;
    }, a;
}

exports.__esModule = !0, exports.default = createAction;

var _invariant = _interopRequireDefault(require("./../../invariant/browser.js")), _isFunction = _interopRequireDefault(require("./utils/isFunction.js")), _identity = _interopRequireDefault(require("./utils/identity.js")), _isNull = _interopRequireDefault(require("./utils/isNull.js"));