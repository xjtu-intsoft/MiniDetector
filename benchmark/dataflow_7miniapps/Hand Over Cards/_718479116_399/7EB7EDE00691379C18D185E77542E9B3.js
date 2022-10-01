Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(o, f) {
    var i = {};
    return function n(o, f) {
        if (o === f) return;
        var i = r(o), c = r(f);
        if (i == t && c == t) for (var l in f) {
            var u = o[l];
            void 0 === u ? o[l] = null : n(u, f[l]);
        } else i == e && c == e && o.length >= f.length && f.forEach(function(e, t) {
            n(o[t], e);
        });
    }(o, f), function o(f, i, c, l) {
        if (f === i) return;
        var u = r(f), a = r(i);
        if (u == t) if (a != t || Object.keys(f).length < Object.keys(i).length && "" !== c) n(l, c, f); else {
            var s = function(u) {
                var a = f[u], s = i[u], h = r(a), v = r(s);
                if (h != e && h != t) a != i[u] && n(l, ("" == c ? "" : c + ".") + u, a); else if (h == e) v != e || a.length < s.length ? n(l, ("" == c ? "" : c + ".") + u, a) : a.forEach(function(e, t) {
                    o(e, s[t], ("" == c ? "" : c + ".") + u + "[" + t + "]", l);
                }); else if (h == t) if (v != t || Object.keys(a).length < Object.keys(s).length) n(l, ("" == c ? "" : c + ".") + u, a); else for (var g in a) o(a[g], s[g], ("" == c ? "" : c + ".") + u + "." + g, l);
            };
            for (var h in f) s(h);
        } else u == e ? a != e || f.length < i.length ? n(l, c, f) : f.forEach(function(e, t) {
            o(e, i[t], c + "[" + t + "]", l);
        }) : n(l, c, f);
    }(o, f, "", i), i;
};

var e = "[object Array]", t = "[object Object]";

function n(e, t, n) {
    "[object Function]" != r(n) && (e[t] = n);
}

function r(e) {
    return Object.prototype.toString.call(e);
}