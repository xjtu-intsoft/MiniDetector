function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

exports.__esModule = !0, exports.default = void 0;

var _toCamelCase = _interopRequireDefault(require("./../../../to-camel-case/index.js")), namespacer = "/", _default = function(e) {
    return -1 === e.indexOf(namespacer) ? (0, _toCamelCase.default)(e) : e.split(namespacer).map(_toCamelCase.default).join(namespacer);
};

exports.default = _default;