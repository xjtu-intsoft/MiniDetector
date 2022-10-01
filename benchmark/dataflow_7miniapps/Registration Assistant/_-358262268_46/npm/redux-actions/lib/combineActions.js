function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function isValidActionType(t) {
    return (0, _isString.default)(t) || (0, _isFunction.default)(t) || (0, _isSymbol.default)(t);
}

function isValidActionTypes(t) {
    return !(0, _isEmpty.default)(t) && t.every(isValidActionType);
}

function combineActions() {
    for (var t = arguments.length, i = new Array(t), e = 0; e < t; e++) i[e] = arguments[e];
    (0, _invariant.default)(isValidActionTypes(i), "Expected action types to be strings, symbols, or action creators");
    var r = i.map(_toString.default).join(_constants.ACTION_TYPE_DELIMITER);
    return {
        toString: function() {
            return r;
        }
    };
}

exports.__esModule = !0, exports.default = combineActions;

var _invariant = _interopRequireDefault(require("./../../invariant/browser.js")), _isFunction = _interopRequireDefault(require("./utils/isFunction.js")), _isSymbol = _interopRequireDefault(require("./utils/isSymbol.js")), _isEmpty = _interopRequireDefault(require("./utils/isEmpty.js")), _toString = _interopRequireDefault(require("./utils/toString.js")), _isString = _interopRequireDefault(require("./utils/isString.js")), _constants = require("./constants.js");