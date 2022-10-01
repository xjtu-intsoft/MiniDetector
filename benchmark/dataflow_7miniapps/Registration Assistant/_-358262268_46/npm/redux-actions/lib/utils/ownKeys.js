function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function ownKeys(e) {
    if ((0, _isMap.default)(e)) return Array.from(e.keys());
    if ("undefined" != typeof Reflect && "function" == typeof Reflect.ownKeys) return Reflect.ownKeys(e);
    var t = Object.getOwnPropertyNames(e);
    return "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(e))), 
    t;
}

exports.__esModule = !0, exports.default = ownKeys;

var _isMap = _interopRequireDefault(require("./isMap.js"));