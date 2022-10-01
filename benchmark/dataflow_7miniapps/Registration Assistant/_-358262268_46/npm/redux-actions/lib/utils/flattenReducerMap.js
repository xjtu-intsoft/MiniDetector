function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

exports.__esModule = !0, exports.default = void 0;

var _isPlainObject = _interopRequireDefault(require("./isPlainObject.js")), _isMap = _interopRequireDefault(require("./isMap.js")), _hasGeneratorInterface = _interopRequireDefault(require("./hasGeneratorInterface.js")), _flattenWhenNode = _interopRequireDefault(require("./flattenWhenNode.js")), _default = (0, 
_flattenWhenNode.default)(function(e) {
    return ((0, _isPlainObject.default)(e) || (0, _isMap.default)(e)) && !(0, _hasGeneratorInterface.default)(e);
});

exports.default = _default;