function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function unflattenActionCreators(e, t) {
    function r(t, a, n) {
        var s = (0, _camelCase.default)(n.shift());
        (0, _isEmpty.default)(n) ? a[s] = e[t] : (a[s] || (a[s] = {}), r(t, a[s], n));
    }
    var a = void 0 === t ? {} : t, n = a.namespace, s = void 0 === n ? _constants.DEFAULT_NAMESPACE : n, u = a.prefix, i = {};
    return Object.getOwnPropertyNames(e).forEach(function(e) {
        var t = u ? e.replace("" + u + s, "") : e;
        return r(e, i, t.split(s));
    }), i;
}

exports.__esModule = !0, exports.default = unflattenActionCreators;

var _constants = require("./../constants.js"), _isEmpty = _interopRequireDefault(require("./isEmpty.js")), _camelCase = _interopRequireDefault(require("./camelCase.js"));