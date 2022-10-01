(function() {
    var t, e = null, a = null, o = null, i = null, n = null, l = null, r = null, s = null, f = [], h = function() {
        a = null, o = null, n = i, i = null, l = null;
    }, u = function() {
        if (l) {
            var a = l.getImageData(0, 0, t.width, t.height);
            e && (s || (s = r.getContext("2d")), s.putImageData(a, 0, 0), e(s, t.width, t.height), 
            a = s.getImageData(0, 0, t.width, t.height)), f.push({
                data: a,
                delay: o
            });
        }
    }, d = function() {}, x = function(t, e) {
        return function(e) {
            t(e);
        };
    }, c = document.createElement("canvas"), v = {
        hdr: x(function(e) {
            t = e, c.width = t.width, c.height = t.height, r.width = t.width, r.height = t.height;
        }),
        gce: x(function(t) {
            u(), h(), a = t.transparencyGiven ? t.transparencyIndex : null, o = t.delayTime, 
            i = t.disposalMethod;
        }),
        com: x(d),
        app: {
            NETSCAPE: x(d)
        },
        img: x(function(e) {
            l || (l = c.getContext("2d"));
            var o = e.lctFlag ? e.lct : t.gct, i = l.getImageData(e.leftPos, e.topPos, e.width, e.height);
            e.pixels.forEach(function(t, e) {
                a !== t ? (i.data[4 * e + 0] = o[t][0], i.data[4 * e + 1] = o[t][1], i.data[4 * e + 2] = o[t][2], 
                i.data[4 * e + 3] = 255) : 2 !== n && 3 !== n || (i.data[4 * e + 3] = 0);
            }), l.putImageData(i, e.leftPos, e.topPos);
        }),
        eof: function(t) {
            u();
        }
    };
})(), function() {
    var t = null;
}(), function() {
    var t = document.createElement("canvas");
}(), function() {
    var t = null;
}(), function() {
    function t(t, e) {
        return Math.floor(Math.random() * (e - t)) + t;
    }
    function e(t) {
        return "#" + t;
    }
    var a = null, o = null, i = null, n = function(t, e, i) {
        var n = o.length, l = 80 * e / 100, r = Math.min(i / 6, l / 8);
        r < 15 && (r = 15), r += a.fontSizeOffset, t.font = r + "px " + a.font;
        for (var s = [], f = [], h = 0; h < n; h++) {
            var u = o.charAt(h), d = t.measureText(u).width;
            s.push(u), f.push([ d, r ]);
        }
        for (var x = [], c = 0, v = 0, g = 0, m = -3, h = 0; h < n; h++) {
            var S = f[h];
            (c += 3 + S[0]) > l && (x.push([ l, v, g, h ]), m += v + 3, c = S[0], v = 0, g = h), 
            v < S[1] && (v = S[1]);
        }
        return c > 0 && (x.push([ c, v, g, n ]), m += v + 3), m += 10, {
            imageDrawSize: [ e, i ],
            fontSize: r,
            allTextHeight: m,
            texts: s,
            sizes: f,
            lineSizes: x
        };
    }, l = function(t, e, i) {
        var n = o.length, l = 80 * i / 100, r = Math.min(i / 6, l / 6);
        r < 15 && (r = 15), r += a.fontSizeOffset, t.font = r + "px " + a.font;
        for (var s = [], f = [], h = 0, u = 0; u < n; u++) {
            var d = o.charAt(u), x = t.measureText(d).width;
            s.push(d), f.push([ x, r ]), x > h && (h = x);
        }
        for (var c = 0, v = 3, g = v, m = 5, u = 0; u < n; u++) {
            var S = f[u];
            g + S[1] > i - 3 && (g = v += S[1] / 2, m += h + 3), bottom = g + S[1], g = bottom + 3, 
            bottom > c && (c = bottom);
        }
        return allWidth = m + h - 5, {
            imageDrawSize: [ e, i ],
            fontSize: r,
            texts: s,
            sizes: f,
            maxWidth: h,
            textSize: [ allWidth, c ]
        };
    }, r = function(t, e, o) {
        return "left" == a.textPosition || "right" == a.textPosition ? l(t, e, o) : n(t, e, o);
    }, s = function(t, o, n) {
        var l = i.imageDrawSize, r = (i.fontSize, i.allTextHeight), s = i.texts, f = i.sizes, h = i.lineSizes;
        t.save();
        var u = l[1] - r;
        "top" == a.textPosition && (u = 5);
        for (var d = 0; d < h.length; d++) {
            for (var x = h[d], c = (l[0] - x[0]) / 2, v = u, g = x[2]; g < x[3]; g++) {
                var m = f[g], S = s[g], w = a.textPositionOffsetX, p = a.textPositionOffsetY;
                a.shake && (w += getRandomInt(1 - a.shakeMax, a.shakeMax), p += getRandomInt(1 - a.shakeMax, a.shakeMax));
                var z = t.lineWidth;
                t.lineWidth = z;
                var k = [ c + w, v + x[1] + p ];
                a.shadow && (t.fillStyle = e(a.shadowColor), t.fillText(S, k[0] + a.shadowOffsetX, k[1] + a.shadowOffsetY)), 
                t.fillStyle = e(a.textColor), t.fillText(S, k[0], k[1]), a.border && (t.strokeStyle = e(a.borderColor), 
                t.lineWidth = z + 2 * a.borderWidth, t.strokeText(S, k[0], k[1]), t.lineWidth = z, 
                t.fillStyle = e(a.textColor), t.fillText(S, k[0], k[1])), c += m[0] + 3;
            }
            u += x[1] + 3;
        }
        t.restore();
    }, f = function(o, n, l) {
        var r = i.imageDrawSize, s = (i.fontSize, i.texts), f = i.sizes, h = i.maxWidth, u = i.textSize, d = u[0], x = u[1];
        o.save();
        var c = (r[1] - x) / 2, v = c, g = r[0] - d - 5;
        "left" == a.textPosition && (g = 5);
        for (var m = 0; m < s.length; m++) {
            var S = f[m], w = s[m];
            v + S[1] > r[1] - 3 && (v = c += S[1] / 2, g += h + 3);
            var p = g, z = v;
            v += S[1] + 3;
            var k = a.textPositionOffsetX, T = a.textPositionOffsetY;
            a.shake && (k += t(1 - a.shakeMax, a.shakeMax), T += t(1 - a.shakeMax, a.shakeMax));
            var M = [ p + k + (h - S[0]) / 2, z + S[1] + T ];
            a.shadow && (o.fillStyle = e(a.shadowColor), o.fillText(w, M[0] + a.shadowOffsetX, M[1] + a.shadowOffsetY)), 
            o.fillStyle = e(a.textColor), o.fillText(w, M[0], M[1]), a.border && (o.save(), 
            o.strokeStyle = e(a.borderColor), o.lineWidth = 2 * a.borderWidth, o.strokeText(w, M[0], M[1]), 
            o.restore(), o.fillStyle = e(a.textColor), o.fillText(w, M[0], M[1]));
        }
        o.restore();
    };
}();