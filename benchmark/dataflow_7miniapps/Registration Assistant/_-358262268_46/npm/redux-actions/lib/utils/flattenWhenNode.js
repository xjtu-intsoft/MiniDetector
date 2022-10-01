function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

exports.__esModule = !0, exports.default = void 0;

var _constants = require("./../constants.js"), _ownKeys = _interopRequireDefault(require("./ownKeys.js")), _get = _interopRequireDefault(require("./get.js")), _default = function(e) {
    return function t(n, r, u, o) {
        function a(e) {
            var t;
            if (!o) return e;
            var n = e.toString().split(_constants.ACTION_TYPE_DELIMITER), r = o.split(_constants.ACTION_TYPE_DELIMITER);
            return (t = []).concat.apply(t, r.map(function(e) {
                return n.map(function(t) {
                    return "" + e + f + t;
                });
            })).join(_constants.ACTION_TYPE_DELIMITER);
        }
        function i(e) {
            return o || !c || c && new RegExp("^" + c + f).test(e) ? e : "" + c + f + e;
        }
        var s = void 0 === r ? {} : r, _ = s.namespace, f = void 0 === _ ? _constants.DEFAULT_NAMESPACE : _, c = s.prefix;
        return void 0 === u && (u = {}), void 0 === o && (o = ""), (0, _ownKeys.default)(n).forEach(function(r) {
            var o = i(a(r)), s = (0, _get.default)(r, n);
            e(s) ? t(s, {
                namespace: f,
                prefix: c
            }, u, o) : u[o] = s;
        }), u;
    };
};

exports.default = _default;