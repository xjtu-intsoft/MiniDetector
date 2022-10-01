"undefined" != typeof exports && (exports.LZWEncoder = function() {
    var n, t, e, o, i, r, f, c, u, s, a, d, p = {}, y = [], w = [], B = 0, h = !1, l = 0, v = 0, x = [ 0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535 ], m = [], E = p.LZWEncoder = function(i, r, f, c) {
        n = i, t = r, e = f, o = Math.max(2, c);
    }, L = function(n, t) {
        m[d++] = n, d >= 254 && b(t);
    }, W = function(n) {
        Z(5003), B = s + 2, h = !0, k(s, n);
    }, Z = function(n) {
        for (var t = 0; t < n; ++t) y[t] = -1;
    }, M = p.compress = function(n, t) {
        var e, o, i, r, p, l;
        for (h = !1, c = g(f = u = n), a = 1 + (s = 1 << n - 1), B = s + 2, d = 0, r = j(), 
        l = 0, e = 5003; e < 65536; e *= 2) ++l;
        l = 8 - l, Z(5003), k(s, t);
        n: for (;-1 != (i = j()); ) if (e = (i << 12) + r, o = i << l ^ r, y[o] != e) {
            if (y[o] >= 0) {
                p = 5003 - o, 0 === o && (p = 1);
                do {
                    if ((o -= p) < 0 && (o += 5003), y[o] == e) {
                        r = w[o];
                        continue n;
                    }
                } while (y[o] >= 0);
            }
            k(r, t), r = i, B < 4096 ? (w[o] = B++, y[o] = e) : W(t);
        } else r = w[o];
        k(r, t), k(a, t);
    }, b = (p.encode = function(e) {
        e.writeByte(o), i = n * t, r = 0, M(o + 1, e), e.writeByte(0);
    }, function(n) {
        d > 0 && (n.writeByte(d), n.writeBytes(m, 0, d), d = 0);
    }), g = function(n) {
        return (1 << n) - 1;
    }, j = function() {
        return 0 === i ? -1 : (--i, 255 & e[r++]);
    }, k = function(n, t) {
        for (l &= x[v], v > 0 ? l |= n << v : l = n, v += f; v >= 8; ) L(255 & l, t), l >>= 8, 
        v -= 8;
        if ((B > c || h) && (h ? (c = g(f = u), h = !1) : c = 12 == ++f ? 4096 : g(f)), 
        n == a) {
            for (;v > 0; ) L(255 & l, t), l >>= 8, v -= 8;
            b(t);
        }
    };
    return E.apply(this, arguments), p;
});