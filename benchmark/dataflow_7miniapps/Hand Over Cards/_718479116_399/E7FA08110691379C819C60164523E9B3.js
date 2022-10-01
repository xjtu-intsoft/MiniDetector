var t, e = require("@babel/runtime/helpers/interopRequireDefault.js")(require("@babel/runtime/helpers/typeof.js"));

t = function() {
    var t = void 0, o = [ "touchstarted", "touchmoved", "touchended" ];
    function n(t) {
        for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
        o.forEach(function(e, o) {
            void 0 !== n[o] && (t[e] = n[o]);
        });
    }
    var i = "function" == typeof Symbol && "symbol" === (0, e.default)(Symbol.iterator) ? function(t) {
        return (0, e.default)(t);
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : (0, 
        e.default)(t);
    }, r = function() {
        function t(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, n.key, n);
            }
        }
        return function(e, o, n) {
            return o && t(e.prototype, o), n && t(e, n), e;
        };
    }(), c = function(t, e) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return function(t, e) {
            var o = [], n = !0, i = !1, r = void 0;
            try {
                for (var c, a = t[Symbol.iterator](); !(n = (c = a.next()).done) && (o.push(c.value), 
                !e || o.length !== e); n = !0) ;
            } catch (t) {
                i = !0, r = t;
            } finally {
                try {
                    !n && a.return && a.return();
                } finally {
                    if (i) throw r;
                }
            }
            return o;
        }(t, e);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }, a = {}, u = {
        id: {
            default: "cropper",
            get: function() {
                return a.id;
            },
            set: function(t) {
                "string" != typeof t && console.error("id：" + t + " is invalid"), a.id = t;
            }
        },
        width: {
            default: 300,
            get: function() {
                return a.width;
            },
            set: function(t) {
                "number" != typeof t && console.error("width：" + t + " is invalid"), a.width = t;
            }
        },
        height: {
            default: 300,
            get: function() {
                return a.height;
            },
            set: function(t) {
                "number" != typeof t && console.error("height：" + t + " is invalid"), a.height = t;
            }
        },
        scale: {
            default: 2.5,
            get: function() {
                return a.scale;
            },
            set: function(t) {
                "number" != typeof t && console.error("scale：" + t + " is invalid"), a.scale = t;
            }
        },
        zoom: {
            default: 5,
            get: function() {
                return a.zoom;
            },
            set: function(t) {
                "number" != typeof t ? console.error("zoom：" + t + " is invalid") : (t < 0 || t > 10) && console.error("zoom should be ranged in 0 ~ 10"), 
                a.zoom = t;
            }
        },
        src: {
            default: "cropper",
            get: function() {
                return a.src;
            },
            set: function(t) {
                "string" != typeof t && console.error("id：" + t + " is invalid"), a.src = t;
            }
        },
        cut: {
            default: {},
            get: function() {
                return a.cut;
            },
            set: function(t) {
                "object" !== (void 0 === t ? "undefined" : i(t)) && console.error("id：" + t + " is invalid"), 
                a.cut = t;
            }
        },
        onReady: {
            default: null,
            get: function() {
                return a.ready;
            },
            set: function(t) {
                a.ready = t;
            }
        },
        onBeforeImageLoad: {
            default: null,
            get: function() {
                return a.beforeImageLoad;
            },
            set: function(t) {
                a.beforeImageLoad = t;
            }
        },
        onImageLoad: {
            default: null,
            get: function() {
                return a.imageLoad;
            },
            set: function(t) {
                a.imageLoad = t;
            }
        },
        onBeforeDraw: {
            default: null,
            get: function() {
                return a.beforeDraw;
            },
            set: function(t) {
                a.beforeDraw = t;
            }
        }
    }, s = {
        touchStart: function(t) {
            var e = c(t.touches, 2), o = e[0], i = e[1];
            n(this, !0, null, null), this.__oneTouchStart(o), t.touches.length >= 2 && this.__twoTouchStart(o, i);
        },
        touchMove: function(t) {
            var e = c(t.touches, 2), o = e[0], i = e[1];
            n(this, null, !0), 1 === t.touches.length && this.__oneTouchMove(o), t.touches.length >= 2 && this.__twoTouchMove(o, i);
        },
        touchEnd: function(t) {
            n(this, !1, !1, !0), this.__xtouchEnd();
        }
    }, l = function() {
        function t(e) {
            !function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, t);
            var o, n, i = {};
            return o = this, n = u, Object.defineProperties(o, n), Object.keys(u).forEach(function(t) {
                i[t] = u[t].default;
            }), Object.assign(this, i, e), this.prepare(), this.attachPage(), this.createCtx(), 
            this.observer(), this.cutt(), this.methods(), this.init(), this.update(), this;
        }
        return r(t, [ {
            key: "init",
            value: function() {
                var t = this.src;
                return this.version = "1.1.4", "function" == typeof this.onReady && this.onReady(this.ctx, this), 
                t && this.pushOrign(t), n(this, !1, !1, !1), this.oldScale = 1, this.newScale = 1, 
                this;
            }
        } ]), t;
    }();
    return Object.assign(l.prototype, s), l.prototype.prepare = function() {
        var e = this, o = (t || (t = wx.getSystemInfoSync()), t).windowWidth;
        e.attachPage = function() {
            var t = getCurrentPages();
            t[t.length - 1].wecropper = e;
        }, e.createCtx = function() {
            var t = e.id;
            t ? e.ctx = wx.createCanvasContext(t) : console.error("constructor: create canvas context failed, 'id' must be valuable");
        }, e.deviceRadio = o / 750;
    }, l.prototype.observer = function() {
        var t = this, e = [ "ready", "beforeImageLoad", "beforeDraw", "imageLoad" ];
        t.on = function(o, n) {
            var i;
            return e.indexOf(o) > -1 ? "function" == typeof n && ("ready" === o ? n(t) : t["on" + (i = o, 
            i.charAt(0).toUpperCase() + i.slice(1))] = n) : console.error("event: " + o + " is invalid"), 
            t;
        };
    }, l.prototype.methods = function() {
        var t = this, e = t.deviceRadio, o = t.width, n = t.height, i = t.cut, r = i.x, c = void 0 === r ? 0 : r, a = i.y, u = void 0 === a ? 0 : a, s = i.width, l = void 0 === s ? o : s, h = i.height, d = void 0 === h ? n : h;
        t.updateCanvas = function() {
            return t.ctx.setFillStyle(t.backcolor), t.ctx.fillRect(c, u, l + 1, d + 1), t.ctx.fill, 
            t.croperTarget && t.ctx.drawImage(t.croperTarget, t.imgLeft, t.imgTop, t.scaleWidth, t.scaleHeight), 
            "function" == typeof t.onBeforeDraw && t.onBeforeDraw(t.ctx, t), t.setBoundStyle(), 
            t.ctx.draw(), t;
        }, t.pushOrign = function(e, o) {
            return t.src = e, t.backcolor = o, "function" == typeof t.onBeforeImageLoad && t.onBeforeImageLoad(t.ctx, t), 
            wx.getImageInfo({
                src: e,
                success: function(e) {
                    var o = e.width / e.height;
                    t.croperTarget = e.path, console.log(c, u), o < l / d ? (t.rectX = c, t.baseWidth = l, 
                    t.baseHeight = l / o, t.rectY = u - Math.abs((d - t.baseHeight) / 2)) : (t.rectY = u, 
                    t.baseWidth = d * o, t.baseHeight = d, t.rectX = c - Math.abs((l - t.baseWidth) / 2)), 
                    t.imgLeft = t.rectX, t.imgTop = t.rectY, t.scaleWidth = t.baseWidth, t.scaleHeight = t.baseHeight, 
                    t.updateCanvas(), "function" == typeof t.onImageLoad && t.onImageLoad(t.ctx, t);
                }
            }), t.update(), t;
        }, t.getCropperImage = function() {
            for (var o = arguments.length, n = Array(o), i = 0; i < o; i++) n[i] = arguments[i];
            var r = t.id, a = toString.call(n[0]);
            switch (a) {
              case "[object Object]":
                var s = n[0].quality, h = void 0 === s ? 10 : s;
                "number" != typeof h ? console.error("quality：" + h + " is invalid") : (h < 0 || h > 10) && console.error("quality should be ranged in 0 ~ 10"), 
                wx.canvasToTempFilePath({
                    canvasId: r,
                    x: c,
                    y: u,
                    width: l,
                    height: d,
                    destWidth: l * h / (10 * e),
                    destHeight: d * h / (10 * e),
                    success: function(t) {
                        "function" == typeof n[n.length - 1] && n[n.length - 1](t.tempFilePath);
                    },
                    fail: function(t) {
                        wx.showToast({
                            title: "上传失败",
                            success: function() {
                                wx.navigateBack({
                                    delta: 1
                                });
                            }
                        });
                    }
                });
                break;

              case "[object Function]":
                var f = [ 300, 300 ];
                l > d ? f = [ l / d * 300, 300 ] : d > l && (f = [ 300, d / l * 300 ]), wx.canvasToTempFilePath({
                    canvasId: r,
                    x: c,
                    y: u,
                    width: l,
                    height: d,
                    destWidth: f[0],
                    destHeight: f[1],
                    success: function(t) {
                        "function" == typeof n[n.length - 1] && n[n.length - 1](t.tempFilePath);
                    },
                    fail: function(t) {
                        wx.showToast({
                            title: "上传失败",
                            success: function() {
                                wx.navigateBack({
                                    delta: 1
                                });
                            }
                        });
                    }
                });
            }
            return t;
        };
    }, l.prototype.cutt = function() {
        var t = this, e = (t.deviceRadio, t.width), o = t.height, n = t.cut, i = n.x, r = void 0 === i ? 0 : i, c = n.y, a = void 0 === c ? 0 : c, u = n.width, s = void 0 === u ? e : u, l = n.height, h = void 0 === l ? o : l;
        t.outsideBound = function(e, o) {
            t.imgLeft = e >= r ? r : t.scaleWidth + e - r <= s ? r + s - t.scaleWidth : e, t.imgTop = o >= a ? a : t.scaleHeight + o - a <= h ? a + h - t.scaleHeight : o;
        }, t.setBoundStyle = function() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = n.color, c = void 0 === i ? "#04b00f" : i, u = n.mask, l = void 0 === u ? "rgba(0, 0, 0, 0.3)" : u, d = n.lineWidth, f = void 0 === d ? 2 : d;
            t.ctx.beginPath(), t.ctx.setFillStyle(l), t.ctx.fillRect(0, 0, r, o), t.ctx.fillRect(r, 0, s, a), 
            t.ctx.fillRect(r, a + h, s, o - a - h), t.ctx.fillRect(r + s, 0, e - r - s, o), 
            t.ctx.fill(), t.ctx.beginPath(), t.ctx.setStrokeStyle(c), t.ctx.setLineWidth(f), 
            t.ctx.moveTo(r - f + 1, a + 15 - f + 1), t.ctx.lineTo(r - f + 1, a - f + 1), t.ctx.lineTo(r + 15 - f + 1, a - f + 1), 
            t.ctx.stroke(), t.ctx.beginPath(), t.ctx.setStrokeStyle(c), t.ctx.setLineWidth(f), 
            t.ctx.moveTo(r - f + 1, a + h - 15 + f - 1), t.ctx.lineTo(r - f + 1, a + h + f - 1), 
            t.ctx.lineTo(r + 15 - f + 1, a + h + f - 1), t.ctx.stroke(), t.ctx.beginPath(), 
            t.ctx.setStrokeStyle(c), t.ctx.setLineWidth(f), t.ctx.moveTo(r + s - 15 + f - 1, a - f + 1), 
            t.ctx.lineTo(r + s + f - 1, a - f + 1), t.ctx.lineTo(r + s + f - 1, a + 15 - f + 1), 
            t.ctx.stroke(), t.ctx.beginPath(), t.ctx.setStrokeStyle(c), t.ctx.setLineWidth(f), 
            t.ctx.moveTo(r + s + f - 1, a + h - 17 + f + 1), t.ctx.lineTo(r + s + f - 1, a + h + f - 1), 
            t.ctx.lineTo(r + s - 15 + f - 1, a + h + f - 1), t.ctx.stroke();
        };
    }, l.prototype.update = function() {
        var t = this;
        t.src && (t.__oneTouchStart = function(e) {
            t.touchX0 = e.x, t.touchY0 = e.y;
        }, t.__oneTouchMove = function(e) {
            var o, n;
            if (t.touchended) return t.updateCanvas();
            o = e.x - t.touchX0, n = e.y - t.touchY0;
            var i = t.rectX + o, r = t.rectY + n;
            t.outsideBound(i, r), t.updateCanvas();
        }, t.__twoTouchStart = function(e, o) {
            var n, i, r;
            t.touchX1 = t.rectX + t.scaleWidth / 2, t.touchY1 = t.rectY + t.scaleHeight / 2, 
            n = o.x - e.x, i = o.y - e.y, r = Math.sqrt(n * n + i * i), t.oldDistance = r;
        }, t.__twoTouchMove = function(e, o) {
            var n, i, r, c = t.scale, a = t.zoom;
            n = o.x - e.x, i = o.y - e.y, r = Math.sqrt(n * n + i * i), t.newScale = t.oldScale + .001 * a * (r - t.oldDistance), 
            t.newScale <= 1 && (t.newScale = 1), t.newScale >= c && (t.newScale = c), t.scaleWidth = t.newScale * t.baseWidth, 
            t.scaleHeight = t.newScale * t.baseHeight;
            var u = t.touchX1 - t.scaleWidth / 2, s = t.touchY1 - t.scaleHeight / 2;
            t.outsideBound(u, s), t.updateCanvas();
        }, t.__xtouchEnd = function() {
            t.oldScale = t.newScale, t.rectX = t.imgLeft, t.rectY = t.imgTop;
        });
    }, l;
}, "object" === ("undefined" == typeof exports ? "undefined" : (0, e.default)(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (void 0).weCropper = t();