var e = function(e) {
    return e.reduce(function(e, t) {
        return 2 * e + t;
    }, 0);
}, t = function(e) {
    for (var t = [], r = 7; r >= 0; r--) t.push(!!(e & 1 << r));
    return t;
}, r = function(e, t) {
    for (var r, n, a = 0, i = [], s = 1 << e, o = s + 1, d = e + 1, c = []; ;) if (n = r, 
    (r = function(e) {
        for (var r = 0, n = 0; n < e; n++) t.charCodeAt(a >> 3) & 1 << (7 & a) && (r |= 1 << n), 
        a++;
        return r;
    }(d)) !== s) {
        if (r === o) break;
        if (r < c.length) n !== s && c.push(c[n].concat(c[r][0])); else {
            if (r !== c.length) throw new Error("Invalid LZW code.");
            c.push(c[n].concat(c[n][0]));
        }
        i.push.apply(i, c[r]), c.length === 1 << d && d < 12 && d++;
    } else !function() {
        c = [], d = e + 1;
        for (var t = 0; t < s; t++) c[t] = [ t ];
        c[s] = [], c[o] = null;
    }();
    return i;
};

"undefined" != typeof exports && (exports.Stream = function(e) {
    this.data = new Uint8Array(e);
    for (var t = [], r = 0; r < this.data.length; r++) t.push(this.data[r]);
    this.data = t, this.len = this.data.length, this.pos = 0, this.readByte = function() {
        if (this.pos >= this.data.length) throw new Error("Attempted to read past end of stream.");
        return this.data[this.pos++];
    }, this.readBytes = function(e) {
        for (var t = [], r = 0; r < e; r++) t.push(this.readByte());
        return t;
    }, this.read = function(e) {
        for (var t = "", r = 0; r < e; r++) t += String.fromCharCode(this.readByte());
        return t;
    }, this.readUnsigned = function() {
        var e = this.readBytes(2);
        return (e[1] << 8) + e[0];
    };
}, exports.parseGIF = function(n, a) {
    a || (a = {});
    var i = function(e) {
        for (var t = [], r = 0; r < e; r++) t.push(n.readBytes(3));
        return t;
    }, s = function() {
        var e, t;
        t = "";
        do {
            e = n.readByte(), t += n.read(e);
        } while (0 !== e);
        return t;
    }, o = function(r) {
        switch (r.label = n.readByte(), r.label) {
          case 249:
            r.extType = "gce", function(r) {
                n.readByte();
                var i = t(n.readByte());
                r.reserved = i.splice(0, 3), r.disposalMethod = e(i.splice(0, 3)), r.userInput = i.shift(), 
                r.transparencyGiven = i.shift(), r.delayTime = n.readUnsigned(), r.transparencyIndex = n.readByte(), 
                r.terminator = n.readByte(), a.gce && a.gce(r);
            }(r);
            break;

          case 254:
            r.extType = "com", function(e) {
                e.comment = s(), a.com && a.com(e);
            }(r);
            break;

          case 1:
            r.extType = "pte", function(e) {
                n.readByte(), e.ptHeader = n.readBytes(12), e.ptData = s(), a.pte && a.pte(e);
            }(r);
            break;

          case 255:
            r.extType = "app", function(e) {
                switch (n.readByte(), e.identifier = n.read(8), e.authCode = n.read(3), e.identifier) {
                  case "NETSCAPE":
                    !function(e) {
                        n.readByte(), e.unknown = n.readByte(), e.iterations = n.readUnsigned(), e.terminator = n.readByte(), 
                        a.app && a.app.NETSCAPE && a.app.NETSCAPE(e);
                    }(e);
                    break;

                  default:
                    !function(e) {
                        e.appData = s(), a.app && a.app[e.identifier] && a.app[e.identifier](e);
                    }(e);
                }
            }(r);
            break;

          default:
            r.extType = "unknown", function(e) {
                e.data = s(), a.unknown && a.unknown(e);
            }(r);
        }
    }, d = function(o) {
        o.leftPos = n.readUnsigned(), o.topPos = n.readUnsigned(), o.width = n.readUnsigned(), 
        o.height = n.readUnsigned();
        var d = t(n.readByte());
        o.lctFlag = d.shift(), o.interlaced = d.shift(), o.sorted = d.shift(), o.reserved = d.splice(0, 2), 
        o.lctSize = e(d.splice(0, 3)), o.lctFlag && (o.lct = i(1 << o.lctSize + 1)), o.lzwMinCodeSize = n.readByte();
        var c = s();
        o.pixels = r(o.lzwMinCodeSize, c), o.interlaced && (o.pixels = function(e, t) {
            for (var r = new Array(e.length), n = e.length / t, a = [ 0, 4, 2, 1 ], i = [ 8, 8, 4, 2 ], s = 0, o = 0; o < 4; o++) for (var d = a[o]; d < n; d += i[o]) !function(n, a) {
                var i = e.slice(a * t, (a + 1) * t);
                r.splice.apply(r, [ n * t, t ].concat(i));
            }(d, s), s++;
            return r;
        }(o.pixels, o.width)), a.img && a.img(o);
    }, c = function e() {
        var t = {};
        switch (t.sentinel = n.readByte(), String.fromCharCode(t.sentinel)) {
          case "!":
            t.type = "ext", o(t);
            break;

          case ",":
            t.type = "img", d(t);
            break;

          case ";":
            t.type = "eof", a.eof && a.eof(t);
            break;

          default:
            throw new Error("Unknown block: 0x" + t.sentinel.toString(16));
        }
        "eof" !== t.type && setTimeout(e, 0);
    };
    (function() {
        var r = {};
        if (r.sig = n.read(3), r.ver = n.read(3), "GIF" !== r.sig) throw new Error("Not a GIF file.");
        r.width = n.readUnsigned(), r.height = n.readUnsigned();
        var s = t(n.readByte());
        r.gctFlag = s.shift(), r.colorRes = e(s.splice(0, 3)), r.sorted = s.shift(), r.gctSize = e(s.splice(0, 3)), 
        r.bgColor = n.readByte(), r.pixelAspectRatio = n.readByte(), r.gctFlag && (r.gct = i(1 << r.gctSize + 1)), 
        a.hdr && a.hdr(r);
    })(), setTimeout(c, 0);
});