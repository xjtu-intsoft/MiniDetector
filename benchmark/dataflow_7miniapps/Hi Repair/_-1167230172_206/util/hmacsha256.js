var r = "";

function n(r, n) {
    var t = o(r);
    t.length > 16 && (t = A(t, 8 * r.length));
    for (var e = Array(16), u = Array(16), f = 0; f < 16; f++) e[f] = 909522486 ^ t[f], 
    u[f] = 1549556828 ^ t[f];
    var c = A(e.concat(o(n)), 512 + 8 * n.length);
    return a(A(u.concat(c), 768));
}

function t(n) {
    for (var t = "", e = n.length, o = 0; o < e; o += 3) for (var a = n.charCodeAt(o) << 16 | (o + 1 < e ? n.charCodeAt(o + 1) << 8 : 0) | (o + 2 < e ? n.charCodeAt(o + 2) : 0), u = 0; u < 4; u++) 8 * o + 6 * u > 8 * n.length ? t += r : t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(a >>> 6 * (3 - u) & 63);
    return t;
}

function e(r) {
    for (var n, t, e = "", o = -1; ++o < r.length; ) n = r.charCodeAt(o), t = o + 1 < r.length ? r.charCodeAt(o + 1) : 0, 
    55296 <= n && n <= 56319 && 56320 <= t && t <= 57343 && (n = 65536 + ((1023 & n) << 10) + (1023 & t), 
    o++), n <= 127 ? e += String.fromCharCode(n) : n <= 2047 ? e += String.fromCharCode(192 | n >>> 6 & 31, 128 | 63 & n) : n <= 65535 ? e += String.fromCharCode(224 | n >>> 12 & 15, 128 | n >>> 6 & 63, 128 | 63 & n) : n <= 2097151 && (e += String.fromCharCode(240 | n >>> 18 & 7, 128 | n >>> 12 & 63, 128 | n >>> 6 & 63, 128 | 63 & n));
    return e;
}

function o(r) {
    for (var n = Array(r.length >> 2), t = 0; t < n.length; t++) n[t] = 0;
    for (t = 0; t < 8 * r.length; t += 8) n[t >> 5] |= (255 & r.charCodeAt(t / 8)) << 24 - t % 32;
    return n;
}

function a(r) {
    for (var n = "", t = 0; t < 32 * r.length; t += 8) n += String.fromCharCode(r[t >> 5] >>> 24 - t % 32 & 255);
    return n;
}

function u(r, n) {
    return r >>> n | r << 32 - n;
}

function f(r, n) {
    return r >>> n;
}

function c(r, n, t) {
    return r & n ^ ~r & t;
}

function h(r, n, t) {
    return r & n ^ r & t ^ n & t;
}

function i(r) {
    return u(r, 2) ^ u(r, 13) ^ u(r, 22);
}

function g(r) {
    return u(r, 6) ^ u(r, 11) ^ u(r, 25);
}

function C(r) {
    return u(r, 7) ^ u(r, 18) ^ f(r, 3);
}

var l = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998);

function A(r, n) {
    var t, e, o, a, A, v, m, y, S, s, w, b, p, x = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), _ = new Array(64);
    for (r[n >> 5] |= 128 << 24 - n % 32, r[15 + (n + 64 >> 9 << 4)] = n, S = 0; S < r.length; S += 16) {
        for (t = x[0], e = x[1], o = x[2], a = x[3], A = x[4], v = x[5], m = x[6], y = x[7], 
        s = 0; s < 64; s++) _[s] = s < 16 ? r[s + S] : d(d(d(u(p = _[s - 2], 17) ^ u(p, 19) ^ f(p, 10), _[s - 7]), C(_[s - 15])), _[s - 16]), 
        w = d(d(d(d(y, g(A)), c(A, v, m)), l[s]), _[s]), b = d(i(t), h(t, e, o)), y = m, 
        m = v, v = A, A = d(a, w), a = o, o = e, e = t, t = d(w, b);
        x[0] = d(t, x[0]), x[1] = d(e, x[1]), x[2] = d(o, x[2]), x[3] = d(a, x[3]), x[4] = d(A, x[4]), 
        x[5] = d(v, x[5]), x[6] = d(m, x[6]), x[7] = d(y, x[7]);
    }
    return x;
}

function d(r, n) {
    var t = (65535 & r) + (65535 & n);
    return (r >> 16) + (n >> 16) + (t >> 16) << 16 | 65535 & t;
}

module.exports = {
    b64_hmac_sha256: function(r, o) {
        return t(n(e(r), e(o)));
    }
};