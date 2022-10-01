"undefined" != typeof exports && (exports.NeuQuant = function() {
    var r, n, f, o, t, u = {}, a = [], e = [], i = [], c = [], v = u.NeuQuant = function(r, u, a) {
        var c, v;
        for (n = r, f = u, o = a, t = new Array(256), c = 0; c < 256; c++) t[c] = new Array(4), 
        (v = t[c])[0] = v[1] = v[2] = (c << 12) / 256, i[c] = 256, e[c] = 0;
    }, p = function() {
        for (var r = [], n = new Array(256), f = 0; f < 256; f++) n[t[f][3]] = f;
        for (var o = 0, u = 0; u < 256; u++) {
            var a = n[u];
            r[o++] = t[a][0], r[o++] = t[a][1], r[o++] = t[a][2];
        }
        return r;
    }, s = function() {
        var r, n, f, o, u, e, i, c;
        for (i = 0, c = 0, r = 0; r < 256; r++) {
            for (f = r, o = (u = t[r])[1], n = r + 1; n < 256; n++) (e = t[n])[1] < o && (f = n, 
            o = e[1]);
            if (e = t[f], r != f && (n = e[0], e[0] = u[0], u[0] = n, n = e[1], e[1] = u[1], 
            u[1] = n, n = e[2], e[2] = u[2], u[2] = n, n = e[3], e[3] = u[3], u[3] = n), o != i) {
                for (a[i] = c + r >> 1, n = i + 1; n < o; n++) a[n] = r;
                i = o, c = r;
            }
        }
        for (a[i] = c + 255 >> 1, n = i + 1; n < 256; n++) a[n] = 255;
    }, y = function() {
        var t, u, a, e, i, v, p, s, y, h, x, N, Q, l;
        for (f < 1509 && (o = 1), r = 30 + (o - 1) / 3, N = n, Q = 0, l = f, h = (x = f / (3 * o)) / 100 | 0, 
        s = 1024, (p = (v = 2048) >> 6) <= 1 && (p = 0), t = 0; t < p; t++) c[t] = s * (256 * (p * p - t * t) / (p * p));
        for (y = f < 1509 ? 3 : f % 499 != 0 ? 1497 : f % 491 != 0 ? 1473 : f % 487 != 0 ? 1461 : 1509, 
        t = 0; t < x; ) if (a = (255 & N[Q + 0]) << 4, e = (255 & N[Q + 1]) << 4, i = (255 & N[Q + 2]) << 4, 
        u = d(a, e, i), A(s, u, a, e, i), 0 !== p && w(p, u, a, e, i), (Q += y) >= l && (Q -= f), 
        t++, 0 === h && (h = 1), t % h == 0) for (s -= s / r, (p = (v -= v / 30) >> 6) <= 1 && (p = 0), 
        u = 0; u < p; u++) c[u] = s * (256 * (p * p - u * u) / (p * p));
    }, h = (u.map = function(r, n, f) {
        var o, u, e, i, c, v, p;
        for (c = 1e3, p = -1, u = (o = a[n]) - 1; o < 256 || u >= 0; ) o < 256 && ((e = (v = t[o])[1] - n) >= c ? o = 256 : (o++, 
        e < 0 && (e = -e), (i = v[0] - r) < 0 && (i = -i), (e += i) < c && ((i = v[2] - f) < 0 && (i = -i), 
        (e += i) < c && (c = e, p = v[3])))), u >= 0 && ((e = n - (v = t[u])[1]) >= c ? u = -1 : (u--, 
        e < 0 && (e = -e), (i = v[0] - r) < 0 && (i = -i), (e += i) < c && ((i = v[2] - f) < 0 && (i = -i), 
        (e += i) < c && (c = e, p = v[3]))));
        return p;
    }, u.process = function() {
        return y(), h(), s(), p();
    }, function() {
        var r;
        for (r = 0; r < 256; r++) t[r][0] >>= 4, t[r][1] >>= 4, t[r][2] >>= 4, t[r][3] = r;
    }), w = function(r, n, f, o, u) {
        var a, e, i, v, p, s, y;
        for ((i = n - r) < -1 && (i = -1), (v = n + r) > 256 && (v = 256), a = n + 1, e = n - 1, 
        s = 1; a < v || e > i; ) {
            if (p = c[s++], a < v) {
                y = t[a++];
                try {
                    y[0] -= p * (y[0] - f) / (1 << 18), y[1] -= p * (y[1] - o) / (1 << 18), y[2] -= p * (y[2] - u) / (1 << 18);
                } catch (r) {}
            }
            if (e > i) {
                y = t[e--];
                try {
                    y[0] -= p * (y[0] - f) / (1 << 18), y[1] -= p * (y[1] - o) / (1 << 18), y[2] -= p * (y[2] - u) / (1 << 18);
                } catch (r) {}
            }
        }
    }, A = function(r, n, f, o, u) {
        var a = t[n];
        a[0] -= r * (a[0] - f) / 1024, a[1] -= r * (a[1] - o) / 1024, a[2] -= r * (a[2] - u) / 1024;
    }, d = function(r, n, f) {
        var o, u, a, c, v, p, s, y, h, w;
        for (h = y = ~(1 << 31), s = p = -1, o = 0; o < 256; o++) (u = (w = t[o])[0] - r) < 0 && (u = -u), 
        (a = w[1] - n) < 0 && (a = -a), u += a, (a = w[2] - f) < 0 && (a = -a), (u += a) < y && (y = u, 
        p = o), (c = u - (e[o] >> 12)) < h && (h = c, s = o), v = i[o] >> 10, i[o] -= v, 
        e[o] += v << 10;
        return i[p] += 64, e[p] -= 65536, s;
    };
    return v.apply(this, arguments), u;
});