function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function hasGeneratorInterface(e) {
    var r = (0, _ownKeys.default)(e), t = r.every(function(e) {
        return "next" === e || "throw" === e;
    });
    return r.length && r.length <= 2 && t;
}

exports.__esModule = !0, exports.default = hasGeneratorInterface;

var _ownKeys = _interopRequireDefault(require("./ownKeys.js"));