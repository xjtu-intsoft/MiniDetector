function r(r) {
    var n, t, e, u = [];
    for (n = 0; n < r.length; n++) (t = r.charCodeAt(n)) < 128 ? u.push(t) : t < 2048 ? u.push(192 + (t >> 6 & 31), 128 + (63 & t)) : ((e = 55296 ^ t) >> 10 == 0 ? (t = (e << 10) + (56320 ^ r.charCodeAt(++n)) + 65536, 
    u.push(240 + (t >> 18 & 7), 128 + (t >> 12 & 63))) : u.push(224 + (t >> 12 & 15)), 
    u.push(128 + (t >> 6 & 63), 128 + (63 & t)));
    return u;
}

module.exports = function(n) {
    var t, e, u = new Uint8Array(r(n)), f = 16 + (u.length + 8 >>> 6 << 4);
    for ((n = new Uint8Array(f << 2)).set(new Uint8Array(u.buffer)), n = new Uint32Array(n.buffer), 
    e = new DataView(n.buffer), p = 0; p < f; p++) n[p] = e.getUint32(p << 2);
    n[u.length >> 2] |= 128 << 24 - 8 * (3 & u.length), n[f - 1] = u.length << 3;
    var i = [], o = [ function() {
        return l[1] & l[2] | ~l[1] & l[3];
    }, function() {
        return l[1] ^ l[2] ^ l[3];
    }, function() {
        return l[1] & l[2] | l[1] & l[3] | l[2] & l[3];
    }, function() {
        return l[1] ^ l[2] ^ l[3];
    } ], a = function(r, n) {
        return r << n | r >>> 32 - n;
    }, h = [ 1518500249, 1859775393, -1894007588, -899497514 ], l = [ 1732584193, -271733879, null, null, -1009589776 ];
    for (l[2] = ~l[0], l[3] = ~l[1], p = 0; p < n.length; p += 16) {
        var c = l.slice(0);
        for (t = 0; t < 80; t++) i[t] = t < 16 ? n[p + t] : a(i[t - 3] ^ i[t - 8] ^ i[t - 14] ^ i[t - 16], 1), 
        e = a(l[0], 5) + o[t / 20 | 0]() + l[4] + i[t] + h[t / 20 | 0] | 0, l[1] = a(l[1], 30), 
        l.pop(), l.unshift(e);
        for (t = 0; t < 5; t++) l[t] = l[t] + c[t] | 0;
    }
    e = new DataView(new Uint32Array(l).buffer);
    for (var p = 0; p < 5; p++) l[p] = e.getUint32(p << 2);
    return Array.prototype.map.call(new Uint8Array(new Uint32Array(l).buffer), function(r) {
        return (r < 16 ? "0" : "") + r.toString(16);
    }).join("");
};