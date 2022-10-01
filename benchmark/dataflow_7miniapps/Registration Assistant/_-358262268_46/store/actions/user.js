Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.saveCurActivity = exports.saveTagsChoosable = exports.saveTagsNandatory = exports.saveUserInfo = void 0;

var _types = require("./../types/index.js"), _reduxActions = require("./../../npm/redux-actions/lib/index.js"), saveUserInfo = (0, 
_reduxActions.createAction)(_types.USERINFO, function(e) {
    return e;
}), saveTagsNandatory = (0, _reduxActions.createAction)(_types.TAGS_MANDATORY, function(e) {
    return e;
}), saveTagsChoosable = (0, _reduxActions.createAction)(_types.TAGS_CHOOSABLE, function(e) {
    return e;
}), saveCurActivity = (0, _reduxActions.createAction)(_types.CURACTIVITY, function(e) {
    return e;
});

exports.saveUserInfo = saveUserInfo, exports.saveTagsNandatory = saveTagsNandatory, 
exports.saveTagsChoosable = saveTagsChoosable, exports.saveCurActivity = saveCurActivity;