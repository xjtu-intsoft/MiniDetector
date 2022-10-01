function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function handleAction(e, t, i) {
    void 0 === t && (t = _identity.default);
    var n = (0, _toString.default)(e).split(_constants.ACTION_TYPE_DELIMITER);
    (0, _invariant.default)(!(0, _isUndefined.default)(i), "defaultState for reducer handling " + n.join(", ") + " should be defined"), 
    (0, _invariant.default)((0, _isFunction.default)(t) || (0, _isPlainObject.default)(t), "Expected reducer to be a function or object with next and throw reducers");
    var r = (0, _isFunction.default)(t) ? [ t, t ] : [ t.next, t.throw ].map(function(e) {
        return (0, _isNil.default)(e) ? _identity.default : e;
    }), u = r[0], a = r[1];
    return function(e, t) {
        void 0 === e && (e = i);
        var r = t.type;
        return r && -1 !== n.indexOf((0, _toString.default)(r)) ? (!0 === t.error ? a : u)(e, t) : e;
    };
}

exports.__esModule = !0, exports.default = handleAction;

var _invariant = _interopRequireDefault(require("./../../invariant/browser.js")), _isFunction = _interopRequireDefault(require("./utils/isFunction.js")), _isPlainObject = _interopRequireDefault(require("./utils/isPlainObject.js")), _identity = _interopRequireDefault(require("./utils/identity.js")), _isNil = _interopRequireDefault(require("./utils/isNil.js")), _isUndefined = _interopRequireDefault(require("./utils/isUndefined.js")), _toString = _interopRequireDefault(require("./utils/toString.js")), _constants = require("./constants.js");