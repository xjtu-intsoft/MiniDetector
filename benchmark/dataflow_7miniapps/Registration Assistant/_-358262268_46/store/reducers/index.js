function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _redux = require("./../../npm/redux/lib/redux.js"), _user = require("./user.js"), _user2 = _interopRequireDefault(_user);

exports.default = (0, _redux.combineReducers)({
    user: _user2.default
});