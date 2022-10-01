Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function() {
    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
    var o = "function" != typeof t[t.length - 1] && t.pop(), n = t;
    if (void 0 === o) throw new TypeError("The initial state may not be undefined. If you do not want to set a value for this reducer, you can use null instead of undefined.");
    return function(e, t) {
        for (var r = arguments.length, u = Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++) u[a - 2] = arguments[a];
        var i = void 0 === e, d = void 0 === t;
        return i && d && o ? o : n.reduce(function(e, r) {
            return r.apply(void 0, [ e, t ].concat(u));
        }, i && !d && o ? o : e);
    };
}, module.exports = exports.default;