var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault.js"), _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof.js"));

/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */ !function() {
    var ERROR = "input is invalid type", WINDOW = "object" === ("undefined" == typeof window ? "undefined" : (0, 
    _typeof2.default)(window)), root = WINDOW ? window : {};
    root.JS_MD5_NO_WINDOW && (WINDOW = !1);
    var WEB_WORKER = !WINDOW && "object" === ("undefined" == typeof self ? "undefined" : (0, 
    _typeof2.default)(self)), NODE_JS = !root.JS_MD5_NO_NODE_JS && "object" === ("undefined" == typeof process ? "undefined" : (0, 
    _typeof2.default)(process)) && process.versions && process.versions.node;
    NODE_JS ? root = global : WEB_WORKER && (root = self);
    var COMMON_JS = !root.JS_MD5_NO_COMMON_JS && "object" === ("undefined" == typeof module ? "undefined" : (0, 
    _typeof2.default)(module)) && module.exports, AMD = "function" == typeof define && define.amd, ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer, HEX_CHARS = "0123456789abcdef".split(""), EXTRA = [ 128, 32768, 8388608, -2147483648 ], SHIFT = [ 0, 8, 16, 24 ], OUTPUT_TYPES = [ "hex", "array", "digest", "buffer", "arrayBuffer", "base64" ], BASE64_ENCODE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), blocks = [], buffer8;
    if (ARRAY_BUFFER) {
        var buffer = new ArrayBuffer(68);
        buffer8 = new Uint8Array(buffer), blocks = new Uint32Array(buffer);
    }
    !root.JS_MD5_NO_NODE_JS && Array.isArray || (Array.isArray = function(t) {
        return "[object Array]" === Object.prototype.toString.call(t);
    }), !ARRAY_BUFFER || !root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function(t) {
        return "object" === (0, _typeof2.default)(t) && t.buffer && t.buffer.constructor === ArrayBuffer;
    });
    var createOutputMethod = function(t) {
        return function(e) {
            return new Md5(!0).update(e)[t]();
        };
    }, createMethod = function() {
        var t = createOutputMethod("hex");
        NODE_JS && (t = nodeWrap(t)), t.create = function() {
            return new Md5();
        }, t.update = function(e) {
            return t.create().update(e);
        };
        for (var e = 0; e < OUTPUT_TYPES.length; ++e) {
            var r = OUTPUT_TYPES[e];
            t[r] = createOutputMethod(r);
        }
        return t;
    }, nodeWrap = function nodeWrap(method) {
        var crypto = eval("require('crypto')"), Buffer = eval("require('buffer').Buffer"), nodeMethod = function(t) {
            if ("string" == typeof t) return crypto.createHash("md5").update(t, "utf8").digest("hex");
            if (null == t) throw ERROR;
            return t.constructor === ArrayBuffer && (t = new Uint8Array(t)), Array.isArray(t) || ArrayBuffer.isView(t) || t.constructor === Buffer ? crypto.createHash("md5").update(new Buffer(t)).digest("hex") : method(t);
        };
        return nodeMethod;
    };
    function Md5(t) {
        if (t) blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0, 
        this.blocks = blocks, this.buffer8 = buffer8; else if (ARRAY_BUFFER) {
            var e = new ArrayBuffer(68);
            this.buffer8 = new Uint8Array(e), this.blocks = new Uint32Array(e);
        } else this.blocks = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
        this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, 
        this.finalized = this.hashed = !1, this.first = !0;
    }
    Md5.prototype.update = function(t) {
        if (!this.finalized) {
            var e, r = (0, _typeof2.default)(t);
            if ("string" !== r) {
                if ("object" !== r) throw ERROR;
                if (null === t) throw ERROR;
                if (ARRAY_BUFFER && t.constructor === ArrayBuffer) t = new Uint8Array(t); else if (!(Array.isArray(t) || ARRAY_BUFFER && ArrayBuffer.isView(t))) throw ERROR;
                e = !0;
            }
            for (var i, s, o = 0, h = t.length, f = this.blocks, n = this.buffer8; o < h; ) {
                if (this.hashed && (this.hashed = !1, f[0] = f[16], f[16] = f[1] = f[2] = f[3] = f[4] = f[5] = f[6] = f[7] = f[8] = f[9] = f[10] = f[11] = f[12] = f[13] = f[14] = f[15] = 0), 
                e) if (ARRAY_BUFFER) for (s = this.start; o < h && s < 64; ++o) n[s++] = t[o]; else for (s = this.start; o < h && s < 64; ++o) f[s >> 2] |= t[o] << SHIFT[3 & s++]; else if (ARRAY_BUFFER) for (s = this.start; o < h && s < 64; ++o) (i = t.charCodeAt(o)) < 128 ? n[s++] = i : i < 2048 ? (n[s++] = 192 | i >> 6, 
                n[s++] = 128 | 63 & i) : i < 55296 || i >= 57344 ? (n[s++] = 224 | i >> 12, n[s++] = 128 | i >> 6 & 63, 
                n[s++] = 128 | 63 & i) : (i = 65536 + ((1023 & i) << 10 | 1023 & t.charCodeAt(++o)), 
                n[s++] = 240 | i >> 18, n[s++] = 128 | i >> 12 & 63, n[s++] = 128 | i >> 6 & 63, 
                n[s++] = 128 | 63 & i); else for (s = this.start; o < h && s < 64; ++o) (i = t.charCodeAt(o)) < 128 ? f[s >> 2] |= i << SHIFT[3 & s++] : i < 2048 ? (f[s >> 2] |= (192 | i >> 6) << SHIFT[3 & s++], 
                f[s >> 2] |= (128 | 63 & i) << SHIFT[3 & s++]) : i < 55296 || i >= 57344 ? (f[s >> 2] |= (224 | i >> 12) << SHIFT[3 & s++], 
                f[s >> 2] |= (128 | i >> 6 & 63) << SHIFT[3 & s++], f[s >> 2] |= (128 | 63 & i) << SHIFT[3 & s++]) : (i = 65536 + ((1023 & i) << 10 | 1023 & t.charCodeAt(++o)), 
                f[s >> 2] |= (240 | i >> 18) << SHIFT[3 & s++], f[s >> 2] |= (128 | i >> 12 & 63) << SHIFT[3 & s++], 
                f[s >> 2] |= (128 | i >> 6 & 63) << SHIFT[3 & s++], f[s >> 2] |= (128 | 63 & i) << SHIFT[3 & s++]);
                this.lastByteIndex = s, this.bytes += s - this.start, s >= 64 ? (this.start = s - 64, 
                this.hash(), this.hashed = !0) : this.start = s;
            }
            return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, 
            this.bytes = this.bytes % 4294967296), this;
        }
    }, Md5.prototype.finalize = function() {
        if (!this.finalized) {
            this.finalized = !0;
            var t = this.blocks, e = this.lastByteIndex;
            t[e >> 2] |= EXTRA[3 & e], e >= 56 && (this.hashed || this.hash(), t[0] = t[16], 
            t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0), 
            t[14] = this.bytes << 3, t[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash();
        }
    }, Md5.prototype.hash = function() {
        var t, e, r, i, s, o, h = this.blocks;
        this.first ? e = ((e = ((t = ((t = h[0] - 680876937) << 7 | t >>> 25) - 271733879 << 0) ^ (r = ((r = (-271733879 ^ (i = ((i = (-1732584194 ^ 2004318071 & t) + h[1] - 117830708) << 12 | i >>> 20) + t << 0) & (-271733879 ^ t)) + h[2] - 1126478375) << 17 | r >>> 15) + i << 0) & (i ^ t)) + h[3] - 1316259209) << 22 | e >>> 10) + r << 0 : (t = this.h0, 
        e = this.h1, r = this.h2, e = ((e += ((t = ((t += ((i = this.h3) ^ e & (r ^ i)) + h[0] - 680876936) << 7 | t >>> 25) + e << 0) ^ (r = ((r += (e ^ (i = ((i += (r ^ t & (e ^ r)) + h[1] - 389564586) << 12 | i >>> 20) + t << 0) & (t ^ e)) + h[2] + 606105819) << 17 | r >>> 15) + i << 0) & (i ^ t)) + h[3] - 1044525330) << 22 | e >>> 10) + r << 0), 
        e = ((e += ((t = ((t += (i ^ e & (r ^ i)) + h[4] - 176418897) << 7 | t >>> 25) + e << 0) ^ (r = ((r += (e ^ (i = ((i += (r ^ t & (e ^ r)) + h[5] + 1200080426) << 12 | i >>> 20) + t << 0) & (t ^ e)) + h[6] - 1473231341) << 17 | r >>> 15) + i << 0) & (i ^ t)) + h[7] - 45705983) << 22 | e >>> 10) + r << 0, 
        e = ((e += ((t = ((t += (i ^ e & (r ^ i)) + h[8] + 1770035416) << 7 | t >>> 25) + e << 0) ^ (r = ((r += (e ^ (i = ((i += (r ^ t & (e ^ r)) + h[9] - 1958414417) << 12 | i >>> 20) + t << 0) & (t ^ e)) + h[10] - 42063) << 17 | r >>> 15) + i << 0) & (i ^ t)) + h[11] - 1990404162) << 22 | e >>> 10) + r << 0, 
        e = ((e += ((t = ((t += (i ^ e & (r ^ i)) + h[12] + 1804603682) << 7 | t >>> 25) + e << 0) ^ (r = ((r += (e ^ (i = ((i += (r ^ t & (e ^ r)) + h[13] - 40341101) << 12 | i >>> 20) + t << 0) & (t ^ e)) + h[14] - 1502002290) << 17 | r >>> 15) + i << 0) & (i ^ t)) + h[15] + 1236535329) << 22 | e >>> 10) + r << 0, 
        e = ((e += ((i = ((i += (e ^ r & ((t = ((t += (r ^ i & (e ^ r)) + h[1] - 165796510) << 5 | t >>> 27) + e << 0) ^ e)) + h[6] - 1069501632) << 9 | i >>> 23) + t << 0) ^ t & ((r = ((r += (t ^ e & (i ^ t)) + h[11] + 643717713) << 14 | r >>> 18) + i << 0) ^ i)) + h[0] - 373897302) << 20 | e >>> 12) + r << 0, 
        e = ((e += ((i = ((i += (e ^ r & ((t = ((t += (r ^ i & (e ^ r)) + h[5] - 701558691) << 5 | t >>> 27) + e << 0) ^ e)) + h[10] + 38016083) << 9 | i >>> 23) + t << 0) ^ t & ((r = ((r += (t ^ e & (i ^ t)) + h[15] - 660478335) << 14 | r >>> 18) + i << 0) ^ i)) + h[4] - 405537848) << 20 | e >>> 12) + r << 0, 
        e = ((e += ((i = ((i += (e ^ r & ((t = ((t += (r ^ i & (e ^ r)) + h[9] + 568446438) << 5 | t >>> 27) + e << 0) ^ e)) + h[14] - 1019803690) << 9 | i >>> 23) + t << 0) ^ t & ((r = ((r += (t ^ e & (i ^ t)) + h[3] - 187363961) << 14 | r >>> 18) + i << 0) ^ i)) + h[8] + 1163531501) << 20 | e >>> 12) + r << 0, 
        e = ((e += ((i = ((i += (e ^ r & ((t = ((t += (r ^ i & (e ^ r)) + h[13] - 1444681467) << 5 | t >>> 27) + e << 0) ^ e)) + h[2] - 51403784) << 9 | i >>> 23) + t << 0) ^ t & ((r = ((r += (t ^ e & (i ^ t)) + h[7] + 1735328473) << 14 | r >>> 18) + i << 0) ^ i)) + h[12] - 1926607734) << 20 | e >>> 12) + r << 0, 
        e = ((e += ((o = (i = ((i += ((s = e ^ r) ^ (t = ((t += (s ^ i) + h[5] - 378558) << 4 | t >>> 28) + e << 0)) + h[8] - 2022574463) << 11 | i >>> 21) + t << 0) ^ t) ^ (r = ((r += (o ^ e) + h[11] + 1839030562) << 16 | r >>> 16) + i << 0)) + h[14] - 35309556) << 23 | e >>> 9) + r << 0, 
        e = ((e += ((o = (i = ((i += ((s = e ^ r) ^ (t = ((t += (s ^ i) + h[1] - 1530992060) << 4 | t >>> 28) + e << 0)) + h[4] + 1272893353) << 11 | i >>> 21) + t << 0) ^ t) ^ (r = ((r += (o ^ e) + h[7] - 155497632) << 16 | r >>> 16) + i << 0)) + h[10] - 1094730640) << 23 | e >>> 9) + r << 0, 
        e = ((e += ((o = (i = ((i += ((s = e ^ r) ^ (t = ((t += (s ^ i) + h[13] + 681279174) << 4 | t >>> 28) + e << 0)) + h[0] - 358537222) << 11 | i >>> 21) + t << 0) ^ t) ^ (r = ((r += (o ^ e) + h[3] - 722521979) << 16 | r >>> 16) + i << 0)) + h[6] + 76029189) << 23 | e >>> 9) + r << 0, 
        e = ((e += ((o = (i = ((i += ((s = e ^ r) ^ (t = ((t += (s ^ i) + h[9] - 640364487) << 4 | t >>> 28) + e << 0)) + h[12] - 421815835) << 11 | i >>> 21) + t << 0) ^ t) ^ (r = ((r += (o ^ e) + h[15] + 530742520) << 16 | r >>> 16) + i << 0)) + h[2] - 995338651) << 23 | e >>> 9) + r << 0, 
        e = ((e += ((i = ((i += (e ^ ((t = ((t += (r ^ (e | ~i)) + h[0] - 198630844) << 6 | t >>> 26) + e << 0) | ~r)) + h[7] + 1126891415) << 10 | i >>> 22) + t << 0) ^ ((r = ((r += (t ^ (i | ~e)) + h[14] - 1416354905) << 15 | r >>> 17) + i << 0) | ~t)) + h[5] - 57434055) << 21 | e >>> 11) + r << 0, 
        e = ((e += ((i = ((i += (e ^ ((t = ((t += (r ^ (e | ~i)) + h[12] + 1700485571) << 6 | t >>> 26) + e << 0) | ~r)) + h[3] - 1894986606) << 10 | i >>> 22) + t << 0) ^ ((r = ((r += (t ^ (i | ~e)) + h[10] - 1051523) << 15 | r >>> 17) + i << 0) | ~t)) + h[1] - 2054922799) << 21 | e >>> 11) + r << 0, 
        e = ((e += ((i = ((i += (e ^ ((t = ((t += (r ^ (e | ~i)) + h[8] + 1873313359) << 6 | t >>> 26) + e << 0) | ~r)) + h[15] - 30611744) << 10 | i >>> 22) + t << 0) ^ ((r = ((r += (t ^ (i | ~e)) + h[6] - 1560198380) << 15 | r >>> 17) + i << 0) | ~t)) + h[13] + 1309151649) << 21 | e >>> 11) + r << 0, 
        e = ((e += ((i = ((i += (e ^ ((t = ((t += (r ^ (e | ~i)) + h[4] - 145523070) << 6 | t >>> 26) + e << 0) | ~r)) + h[11] - 1120210379) << 10 | i >>> 22) + t << 0) ^ ((r = ((r += (t ^ (i | ~e)) + h[2] + 718787259) << 15 | r >>> 17) + i << 0) | ~t)) + h[9] - 343485551) << 21 | e >>> 11) + r << 0, 
        this.first ? (this.h0 = t + 1732584193 << 0, this.h1 = e - 271733879 << 0, this.h2 = r - 1732584194 << 0, 
        this.h3 = i + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + t << 0, this.h1 = this.h1 + e << 0, 
        this.h2 = this.h2 + r << 0, this.h3 = this.h3 + i << 0);
    }, Md5.prototype.hex = function() {
        this.finalize();
        var t = this.h0, e = this.h1, r = this.h2, i = this.h3;
        return HEX_CHARS[t >> 4 & 15] + HEX_CHARS[15 & t] + HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] + HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] + HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[r >> 4 & 15] + HEX_CHARS[15 & r] + HEX_CHARS[r >> 12 & 15] + HEX_CHARS[r >> 8 & 15] + HEX_CHARS[r >> 20 & 15] + HEX_CHARS[r >> 16 & 15] + HEX_CHARS[r >> 28 & 15] + HEX_CHARS[r >> 24 & 15] + HEX_CHARS[i >> 4 & 15] + HEX_CHARS[15 & i] + HEX_CHARS[i >> 12 & 15] + HEX_CHARS[i >> 8 & 15] + HEX_CHARS[i >> 20 & 15] + HEX_CHARS[i >> 16 & 15] + HEX_CHARS[i >> 28 & 15] + HEX_CHARS[i >> 24 & 15];
    }, Md5.prototype.toString = Md5.prototype.hex, Md5.prototype.digest = function() {
        this.finalize();
        var t = this.h0, e = this.h1, r = this.h2, i = this.h3;
        return [ 255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255, 255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255, 255 & r, r >> 8 & 255, r >> 16 & 255, r >> 24 & 255, 255 & i, i >> 8 & 255, i >> 16 & 255, i >> 24 & 255 ];
    }, Md5.prototype.array = Md5.prototype.digest, Md5.prototype.arrayBuffer = function() {
        this.finalize();
        var t = new ArrayBuffer(16), e = new Uint32Array(t);
        return e[0] = this.h0, e[1] = this.h1, e[2] = this.h2, e[3] = this.h3, t;
    }, Md5.prototype.buffer = Md5.prototype.arrayBuffer, Md5.prototype.base64 = function() {
        for (var t, e, r, i = "", s = this.array(), o = 0; o < 15; ) t = s[o++], e = s[o++], 
        r = s[o++], i += BASE64_ENCODE_CHAR[t >>> 2] + BASE64_ENCODE_CHAR[63 & (t << 4 | e >>> 4)] + BASE64_ENCODE_CHAR[63 & (e << 2 | r >>> 6)] + BASE64_ENCODE_CHAR[63 & r];
        return t = s[o], i += BASE64_ENCODE_CHAR[t >>> 2] + BASE64_ENCODE_CHAR[t << 4 & 63] + "==";
    };
    var exports = createMethod();
    COMMON_JS ? module.exports = exports : (root.md5 = exports, AMD && define(function() {
        return exports;
    }));
}();