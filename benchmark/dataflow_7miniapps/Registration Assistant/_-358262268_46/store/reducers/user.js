function _defineProperty(e, n, r) {
    return n in e ? Object.defineProperty(e, n, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = r, e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _handleActions, _extends = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
        var r = arguments[n];
        for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
    }
    return e;
}, _types = require("./../types/index.js"), _reduxActions = require("./../../npm/redux-actions/lib/index.js");

exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, _types.USERINFO, function(e, n) {
    var r = n.payload;
    return _extends({}, e, {
        userInfo: r
    });
}), _defineProperty(_handleActions, _types.TAGS_MANDATORY, function(e, n) {
    var r = n.payload;
    return _extends({}, e, {
        userTagsMandatory: r
    });
}), _defineProperty(_handleActions, _types.TAGS_CHOOSABLE, function(e, n) {
    var r = n.payload;
    return _extends({}, e, {
        userTagsChoosable: r
    });
}), _defineProperty(_handleActions, _types.CURACTIVITY, function(e, n) {
    var r = n.payload;
    return _extends({}, e, {
        curActivity: r
    });
}), _handleActions), {
    userInfo: null,
    curActivity: {},
    userTagsMandatory: [ {
        name: "姓名",
        index: "0",
        checked: !1
    }, {
        name: "手机号",
        index: "1",
        checked: !0
    }, {
        name: "微信号",
        index: "2",
        checked: !1
    }, {
        name: "性别",
        index: "3",
        checked: !1
    }, {
        name: "单位或学校",
        index: "4",
        checked: !1
    } ],
    userTagsChoosable: []
});