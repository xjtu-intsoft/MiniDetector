var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

module.exports = {
    base64encode: function(a) {
        var t, c, e, h, A, o;
        for (e = a.length, c = 0, t = ""; c < e; ) {
            if (h = 255 & a.charCodeAt(c++), c == e) {
                t += r.charAt(h >> 2), t += r.charAt((3 & h) << 4), t += "==";
                break;
            }
            if (A = a.charCodeAt(c++), c == e) {
                t += r.charAt(h >> 2), t += r.charAt((3 & h) << 4 | (240 & A) >> 4), t += r.charAt((15 & A) << 2), 
                t += "=";
                break;
            }
            o = a.charCodeAt(c++), t += r.charAt(h >> 2), t += r.charAt((3 & h) << 4 | (240 & A) >> 4), 
            t += r.charAt((15 & A) << 2 | (192 & o) >> 6), t += r.charAt(63 & o);
        }
        return t;
    }
};