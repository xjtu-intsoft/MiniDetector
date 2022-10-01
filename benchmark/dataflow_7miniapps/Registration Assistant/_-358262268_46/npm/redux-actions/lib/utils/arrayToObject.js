exports.__esModule = !0, exports.default = void 0;

var _default = function(e, t) {
    return e.reduce(function(e, u) {
        return t(e, u);
    }, {});
};

exports.default = _default;