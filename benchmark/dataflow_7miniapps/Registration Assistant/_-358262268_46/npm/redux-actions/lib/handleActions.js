function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function handleActions(e, t, r) {
    void 0 === r && (r = {}), (0, _invariant.default)((0, _isPlainObject.default)(e) || (0, 
    _isMap.default)(e), "Expected handlers to be a plain object.");
    var i = (0, _flattenReducerMap.default)(e, r), u = (0, _ownKeys.default)(i).map(function(e) {
        return (0, _handleAction.default)(e, (0, _get.default)(e, i), t);
    }), a = _reduceReducers.default.apply(void 0, u.concat([ t ]));
    return function(e, r) {
        return void 0 === e && (e = t), a(e, r);
    };
}

exports.__esModule = !0, exports.default = handleActions;

var _reduceReducers = _interopRequireDefault(require("./../../reduce-reducers/lib/index.js")), _invariant = _interopRequireDefault(require("./../../invariant/browser.js")), _isPlainObject = _interopRequireDefault(require("./utils/isPlainObject.js")), _isMap = _interopRequireDefault(require("./utils/isMap.js")), _ownKeys = _interopRequireDefault(require("./utils/ownKeys.js")), _flattenReducerMap = _interopRequireDefault(require("./utils/flattenReducerMap.js")), _handleAction = _interopRequireDefault(require("./handleAction.js")), _get = _interopRequireDefault(require("./utils/get.js"));