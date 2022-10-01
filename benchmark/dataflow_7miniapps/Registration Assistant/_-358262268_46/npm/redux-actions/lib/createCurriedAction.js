function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

exports.__esModule = !0, exports.default = void 0;

var _justCurryIt = _interopRequireDefault(require("./../../just-curry-it/index.js")), _createAction = _interopRequireDefault(require("./createAction.js")), _default = function(e, t) {
    return (0, _justCurryIt.default)((0, _createAction.default)(e, t), t.length);
};

exports.default = _default;