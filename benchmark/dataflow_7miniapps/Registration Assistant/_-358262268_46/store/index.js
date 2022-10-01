function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _redux = require("./../npm/redux/lib/redux.js"), _reduxPromise = require("./../npm/redux-promise/lib/index.js"), _reduxPromise2 = _interopRequireDefault(_reduxPromise), _wepyRedux = require("./../npm/wepy-redux/lib/index.js"), _reducers = require("./reducers/index.js"), _reducers2 = _interopRequireDefault(_reducers), Store = (0, 
_redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)(_reduxPromise2.default));

exports.default = function(e) {
    return Store;
};