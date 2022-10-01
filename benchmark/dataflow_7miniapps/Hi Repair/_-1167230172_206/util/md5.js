function r(r, n) {
    var t = (65535 & r) + (65535 & n);
    return (r >> 16) + (n >> 16) + (t >> 16) << 16 | 65535 & t;
}

function n(n, t, e, u, o, c) {
    return r((f = r(r(t, n), r(u, c))) << (a = o) | f >>> 32 - a, e);
    var f, a;
}

function t(r, t, e, u, o, c, f) {
    return n(t & e | ~t & u, r, t, o, c, f);
}

function e(r, t, e, u, o, c, f) {
    return n(t & u | e & ~u, r, t, o, c, f);
}

function u(r, t, e, u, o, c, f) {
    return n(t ^ e ^ u, r, t, o, c, f);
}

function o(r, t, e, u, o, c, f) {
    return n(e ^ (t | ~u), r, t, o, c, f);
}

function c(n) {
    for (var c = 1732584193, f = -271733879, a = -1732584194, i = 271733878, h = 0; h < n.length; h += 16) {
        var l = c, v = f, g = a, d = i;
        c = t(c, f, a, i, n[h + 0], 7, -680876936), i = t(i, c, f, a, n[h + 1], 12, -389564586), 
        a = t(a, i, c, f, n[h + 2], 17, 606105819), f = t(f, a, i, c, n[h + 3], 22, -1044525330), 
        c = t(c, f, a, i, n[h + 4], 7, -176418897), i = t(i, c, f, a, n[h + 5], 12, 1200080426), 
        a = t(a, i, c, f, n[h + 6], 17, -1473231341), f = t(f, a, i, c, n[h + 7], 22, -45705983), 
        c = t(c, f, a, i, n[h + 8], 7, 1770035416), i = t(i, c, f, a, n[h + 9], 12, -1958414417), 
        a = t(a, i, c, f, n[h + 10], 17, -42063), f = t(f, a, i, c, n[h + 11], 22, -1990404162), 
        c = t(c, f, a, i, n[h + 12], 7, 1804603682), i = t(i, c, f, a, n[h + 13], 12, -40341101), 
        a = t(a, i, c, f, n[h + 14], 17, -1502002290), c = e(c, f = t(f, a, i, c, n[h + 15], 22, 1236535329), a, i, n[h + 1], 5, -165796510), 
        i = e(i, c, f, a, n[h + 6], 9, -1069501632), a = e(a, i, c, f, n[h + 11], 14, 643717713), 
        f = e(f, a, i, c, n[h + 0], 20, -373897302), c = e(c, f, a, i, n[h + 5], 5, -701558691), 
        i = e(i, c, f, a, n[h + 10], 9, 38016083), a = e(a, i, c, f, n[h + 15], 14, -660478335), 
        f = e(f, a, i, c, n[h + 4], 20, -405537848), c = e(c, f, a, i, n[h + 9], 5, 568446438), 
        i = e(i, c, f, a, n[h + 14], 9, -1019803690), a = e(a, i, c, f, n[h + 3], 14, -187363961), 
        f = e(f, a, i, c, n[h + 8], 20, 1163531501), c = e(c, f, a, i, n[h + 13], 5, -1444681467), 
        i = e(i, c, f, a, n[h + 2], 9, -51403784), a = e(a, i, c, f, n[h + 7], 14, 1735328473), 
        c = u(c, f = e(f, a, i, c, n[h + 12], 20, -1926607734), a, i, n[h + 5], 4, -378558), 
        i = u(i, c, f, a, n[h + 8], 11, -2022574463), a = u(a, i, c, f, n[h + 11], 16, 1839030562), 
        f = u(f, a, i, c, n[h + 14], 23, -35309556), c = u(c, f, a, i, n[h + 1], 4, -1530992060), 
        i = u(i, c, f, a, n[h + 4], 11, 1272893353), a = u(a, i, c, f, n[h + 7], 16, -155497632), 
        f = u(f, a, i, c, n[h + 10], 23, -1094730640), c = u(c, f, a, i, n[h + 13], 4, 681279174), 
        i = u(i, c, f, a, n[h + 0], 11, -358537222), a = u(a, i, c, f, n[h + 3], 16, -722521979), 
        f = u(f, a, i, c, n[h + 6], 23, 76029189), c = u(c, f, a, i, n[h + 9], 4, -640364487), 
        i = u(i, c, f, a, n[h + 12], 11, -421815835), a = u(a, i, c, f, n[h + 15], 16, 530742520), 
        c = o(c, f = u(f, a, i, c, n[h + 2], 23, -995338651), a, i, n[h + 0], 6, -198630844), 
        i = o(i, c, f, a, n[h + 7], 10, 1126891415), a = o(a, i, c, f, n[h + 14], 15, -1416354905), 
        f = o(f, a, i, c, n[h + 5], 21, -57434055), c = o(c, f, a, i, n[h + 12], 6, 1700485571), 
        i = o(i, c, f, a, n[h + 3], 10, -1894986606), a = o(a, i, c, f, n[h + 10], 15, -1051523), 
        f = o(f, a, i, c, n[h + 1], 21, -2054922799), c = o(c, f, a, i, n[h + 8], 6, 1873313359), 
        i = o(i, c, f, a, n[h + 15], 10, -30611744), a = o(a, i, c, f, n[h + 6], 15, -1560198380), 
        f = o(f, a, i, c, n[h + 13], 21, 1309151649), c = o(c, f, a, i, n[h + 4], 6, -145523070), 
        i = o(i, c, f, a, n[h + 11], 10, -1120210379), a = o(a, i, c, f, n[h + 2], 15, 718787259), 
        f = o(f, a, i, c, n[h + 9], 21, -343485551), c = r(c, l), f = r(f, v), a = r(a, g), 
        i = r(i, d);
    }
    return [ c, f, a, i ];
}

function f(r) {
    for (var n = "", t = 0; t < 4 * r.length; t++) n += "0123456789abcdef".charAt(r[t >> 2] >> t % 4 * 8 + 4 & 15) + "0123456789abcdef".charAt(r[t >> 2] >> t % 4 * 8 & 15);
    return n;
}

function a(r) {
    for (var n = 1 + (r.length + 8 >> 6), t = new Array(16 * n), e = 0; e < 16 * n; e++) t[e] = 0;
    for (e = 0; e < r.length; e++) t[e >> 2] |= (255 & r.charCodeAt(e)) << e % 4 * 8;
    return t[e >> 2] |= 128 << e % 4 * 8, t[16 * n - 2] = 8 * r.length, t;
}

module.exports = {
    hexMD5: function(r) {
        return f(c(a(r)));
    }
};