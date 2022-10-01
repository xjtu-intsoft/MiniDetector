function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _objectSpread(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {}, i = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable;
        }))), i.forEach(function(t) {
            _defineProperty(e, t, r[t]);
        });
    }
    return e;
}

function _defineProperty(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

function createActions(e) {
    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
    var n = (0, _isPlainObject.default)((0, _getLastElement.default)(r)) ? r.pop() : {};
    return (0, _invariant.default)(r.every(_isString.default) && ((0, _isString.default)(e) || (0, 
    _isPlainObject.default)(e)), "Expected optional object followed by string action types"), 
    (0, _isString.default)(e) ? actionCreatorsFromIdentityActions([ e ].concat(r), n) : _objectSpread({}, actionCreatorsFromActionMap(e, n), actionCreatorsFromIdentityActions(r, n));
}

function actionCreatorsFromActionMap(e, t) {
    var r = (0, _flattenActionMap.default)(e, t), i = actionMapToActionCreators(r);
    return (0, _unflattenActionCreators.default)(i, t);
}

function actionMapToActionCreators(e, t) {
    function r(e) {
        if ((0, _isFunction.default)(e) || (0, _isNil.default)(e)) return !0;
        if ((0, _isArray.default)(e)) {
            var t = e[0], r = void 0 === t ? _identity.default : t, i = e[1];
            return (0, _isFunction.default)(r) && (0, _isFunction.default)(i);
        }
        return !1;
    }
    var i = void 0 === t ? {} : t, n = i.prefix, a = i.namespace, o = void 0 === a ? _constants.DEFAULT_NAMESPACE : a;
    return (0, _arrayToObject.default)(Object.keys(e), function(t, i) {
        var a, u = e[i];
        (0, _invariant.default)(r(u), "Expected function, undefined, null, or array with payload and meta functions for " + i);
        var c = n ? "" + n + o + i : i, l = (0, _isArray.default)(u) ? _createAction.default.apply(void 0, [ c ].concat(u)) : (0, 
        _createAction.default)(c, u);
        return _objectSpread({}, t, (a = {}, a[i] = l, a));
    });
}

function actionCreatorsFromIdentityActions(e, t) {
    var r = (0, _arrayToObject.default)(e, function(e, t) {
        var r;
        return _objectSpread({}, e, (r = {}, r[t] = _identity.default, r));
    }), i = actionMapToActionCreators(r, t);
    return (0, _arrayToObject.default)(Object.keys(i), function(e, t) {
        var r;
        return _objectSpread({}, e, (r = {}, r[(0, _camelCase.default)(t)] = i[t], r));
    });
}

exports.__esModule = !0, exports.default = createActions;

var _invariant = _interopRequireDefault(require("./../../invariant/browser.js")), _isPlainObject = _interopRequireDefault(require("./utils/isPlainObject.js")), _isFunction = _interopRequireDefault(require("./utils/isFunction.js")), _identity = _interopRequireDefault(require("./utils/identity.js")), _isArray = _interopRequireDefault(require("./utils/isArray.js")), _isString = _interopRequireDefault(require("./utils/isString.js")), _isNil = _interopRequireDefault(require("./utils/isNil.js")), _getLastElement = _interopRequireDefault(require("./utils/getLastElement.js")), _camelCase = _interopRequireDefault(require("./utils/camelCase.js")), _arrayToObject = _interopRequireDefault(require("./utils/arrayToObject.js")), _flattenActionMap = _interopRequireDefault(require("./utils/flattenActionMap.js")), _unflattenActionCreators = _interopRequireDefault(require("./utils/unflattenActionCreators.js")), _createAction = _interopRequireDefault(require("./createAction.js")), _constants = require("./constants.js");