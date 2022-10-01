require("../../../@babel/runtime/helpers/Arrayincludes");

var t = require("../../../@babel/runtime/helpers/typeof");

module.exports = function(e) {
    var i = {};
    function n(t) {
        if (i[t]) return i[t].exports;
        var r = i[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
    }
    return n.m = e, n.c = i, n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        });
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        });
    }, n.t = function(e, i) {
        if (1 & i && (e = n(e)), 8 & i) return e;
        if (4 & i && "object" === t(e) && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & i && "string" != typeof e) for (var o in e) n.d(r, o, function(t) {
            return e[t];
        }.bind(null, o));
        return r;
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default;
        } : function() {
            return t;
        };
        return n.d(e, "a", e), e;
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "", n(n.s = 2);
}([ function(e, i, n) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */    var r = function(t, e) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(t, e) {
            t.__proto__ = e;
        } || function(t, e) {
            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        })(t, e);
    };
    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
        function i() {
            this.constructor = t;
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, 
        new i());
    }
    var a = function() {
        return (a = Object.assign || function(t) {
            for (var e, i = 1, n = arguments.length; i < n; i++) for (var r in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t;
        }).apply(this, arguments);
    };
    function s(t, e, i, n) {
        return new (i || (i = Promise))(function(r, o) {
            function a(t) {
                try {
                    u(n.next(t));
                } catch (t) {
                    o(t);
                }
            }
            function s(t) {
                try {
                    u(n.throw(t));
                } catch (t) {
                    o(t);
                }
            }
            function u(t) {
                var e;
                t.done ? r(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
                    t(e);
                })).then(a, s);
            }
            u((n = n.apply(t, e || [])).next());
        });
    }
    function u(t, e) {
        var i, n, r, o, a = {
            label: 0,
            sent: function() {
                if (1 & r[0]) throw r[1];
                return r[1];
            },
            trys: [],
            ops: []
        };
        return o = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this;
        }), o;
        function s(o) {
            return function(s) {
                return function(o) {
                    if (i) throw new TypeError("Generator is already executing.");
                    for (;a; ) try {
                        if (i = 1, n && (r = 2 & o[0] ? n.return : o[0] ? n.throw || ((r = n.return) && r.call(n), 
                        0) : n.next) && !(r = r.call(n, o[1])).done) return r;
                        switch (n = 0, r && (o = [ 2 & o[0], r.value ]), o[0]) {
                          case 0:
                          case 1:
                            r = o;
                            break;

                          case 4:
                            return a.label++, {
                                value: o[1],
                                done: !1
                            };

                          case 5:
                            a.label++, n = o[1], o = [ 0 ];
                            continue;

                          case 7:
                            o = a.ops.pop(), a.trys.pop();
                            continue;

                          default:
                            if (!((r = (r = a.trys).length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                a = 0;
                                continue;
                            }
                            if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                a.label = o[1];
                                break;
                            }
                            if (6 === o[0] && a.label < r[1]) {
                                a.label = r[1], r = o;
                                break;
                            }
                            if (r && a.label < r[2]) {
                                a.label = r[2], a.ops.push(o);
                                break;
                            }
                            r[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        o = e.call(t, a);
                    } catch (t) {
                        o = [ 6, t ], n = 0;
                    } finally {
                        i = r = 0;
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    };
                }([ o, s ]);
            };
        }
    }
    function c(t, e) {
        for (var i = 0, n = e.length, r = t.length; i < n; i++, r++) t[r] = e[i];
        return t;
    }
    String.prototype.includes || (String.prototype.includes = function(t, e) {
        return "number" != typeof e && (e = 0), !(e + t.length > this.length) && -1 !== this.indexOf(t, e);
    }), Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
        value: function(t) {
            if (null == this) throw new TypeError('"this" is null or not defined');
            var e = Object(this), i = e.length >>> 0;
            if ("function" != typeof t) throw new TypeError("predicate must be a function");
            for (var n = arguments[1], r = 0; r < i; ) {
                var o = e[r];
                if (t.call(n, o, r, e)) return o;
                r++;
            }
        }
    });
    var h = function(t) {
        for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
        return e.some(function(e) {
            return Object.prototype.toString.call(t).slice(8, -1).toLowerCase() === e;
        });
    }, l = function(t) {
        return [].filter.call(t, function(t) {
            return "\n" !== t;
        }).join("");
    }, f = function(e) {
        if ("string" != typeof e) return !1;
        if ("transparent" === (e = e.toLocaleLowerCase().trim())) return !1;
        var i;
        if (/^rgba/.test(e) && 0 === (null === (i = /([^\s,]+)\)$/.exec(e)) ? 0 : "object" == t(i) ? NaN : "number" == typeof i ? i : "string" == typeof i ? "%" === i[i.length - 1] ? Number(i.slice(0, -1)) / 100 : Number(i) : NaN)) return !1;
        return !0;
    }, d = function() {
        function t() {
            this.subs = [];
        }
        return t.prototype.addSub = function(t) {
            this.subs.includes(t) || this.subs.push(t);
        }, t.prototype.notify = function() {
            this.subs.forEach(function(t) {
                t.update();
            });
        }, t;
    }(), p = "__proto__" in {};
    function g(t, e, i, n) {
        Object.defineProperty(t, e, {
            value: i,
            enumerable: !!n,
            writable: !0,
            configurable: !0
        });
    }
    var v = Array.prototype, m = Object.create(v);
    [ "push", "pop", "shift", "unshift", "sort", "splice", "reverse" ].forEach(function(t) {
        m[t] = function() {
            for (var e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
            var n = v[t].apply(this, e), r = this.__luckyOb__;
            return [ "push", "unshift", "splice" ].includes(t) && r.walk(this), r.dep.notify(), 
            n;
        };
    });
    var b = function() {
        function t(t) {
            this.dep = new d(), g(t, "__luckyOb__", this), Array.isArray(t) && (p ? t.__proto__ = m : Object.getOwnPropertyNames(m).forEach(function(e) {
                g(t, e, m[e]);
            })), this.walk(t);
        }
        return t.prototype.walk = function(t) {
            Object.keys(t).forEach(function(e) {
                w(t, e, t[e]);
            });
        }, t;
    }();
    function y(e) {
        if (e && "object" == t(e)) return "__luckyOb__" in e ? e.__luckyOb__ : new b(e);
    }
    function w(t, e, i) {
        var n = new d(), r = Object.getOwnPropertyDescriptor(t, e);
        if (!r || !1 !== r.configurable) {
            var o = r && r.get, a = r && r.set;
            o && !a || 2 !== arguments.length || (i = t[e]);
            var s = y(i);
            Object.defineProperty(t, e, {
                get: function() {
                    var e = o ? o.call(t) : i;
                    return d.target && (n.addSub(d.target), s && s.dep.addSub(d.target)), e;
                },
                set: function(e) {
                    e !== i && (i = e, o && !a || (a ? a.call(t, e) : i = e, s = y(e), n.notify()));
                }
            });
        }
    }
    var x = 0, k = function() {
        function t(t, e, i, n) {
            void 0 === n && (n = {}), this.id = x++, this.$lucky = t, this.expr = e, this.deep = !!n.deep, 
            this.getter = "function" == typeof e ? e : function(t) {
                t += ".";
                for (var e = [], i = "", n = 0; n < t.length; n++) {
                    var r = t[n];
                    if (/\[|\./.test(r)) e.push(i), i = ""; else {
                        if (/\W/.test(r)) continue;
                        i += r;
                    }
                }
                return function(t) {
                    return e.reduce(function(t, e) {
                        return t[e];
                    }, t);
                };
            }(e), this.cb = i, this.value = this.get();
        }
        return t.prototype.get = function() {
            d.target = this;
            var t = this.getter.call(this.$lucky, this.$lucky);
            return this.deep && function(t) {
                !function t(e) {
                    h(e, "array", "object") && Object.keys(e).forEach(function(i) {
                        var n = e[i];
                        t(n);
                    });
                }(t);
            }(t), d.target = null, t;
        }, t.prototype.update = function() {
            var t = this.get(), e = this.value;
            this.value = t, this.cb.call(this.$lucky, t, e);
        }, t;
    }(), I = function() {
        function e(t) {
            var e = this;
            this.htmlFontSize = 16, this.rAF = function() {}, this.boxWidth = 0, this.boxHeight = 0, 
            this.setHTMLFontSize(), "string" == typeof t ? t = {
                el: t
            } : 1 === t.nodeType && (t = {
                el: "",
                divElement: t
            }), t = t, this.config = t, this.setDpr(), this.initWindowFunction(), t.flag || (t.flag = "WEB"), 
            Object.prototype.hasOwnProperty.call(t, "ob") || (t.ob = !0), t.el && (t.divElement = document.querySelector(t.el)), 
            t.divElement && (t.canvasElement = document.createElement("canvas"), t.divElement.appendChild(t.canvasElement)), 
            this.resetWidthAndHeight(), t.canvasElement && (t.ctx = t.canvasElement.getContext("2d"), 
            t.canvasElement.setAttribute("package", "lucky-canvas@1.5.4"), t.canvasElement.addEventListener("click", function(t) {
                return e.handleClick(t);
            }), t.canvasElement.addEventListener("mousemove", function(t) {
                return e.handleMouseMove(t);
            }), t.canvasElement.addEventListener("mousedown", function(t) {
                return e.handleMouseDown(t);
            }), t.canvasElement.addEventListener("mouseup", function(t) {
                return e.handleMouseUp(t);
            })), this.ctx = t.ctx, t.ctx ? this.boxWidth && this.boxHeight || console.error("无法获取到宽度或高度") : console.error("无法获取到 CanvasContext2D");
        }
        return e.prototype.init = function(t) {
            this.setDpr(), this.setHTMLFontSize(), this.resetWidthAndHeight(), this.zoomCanvas();
        }, e.prototype.handleClick = function(t) {}, e.prototype.handleMouseDown = function(t) {}, 
        e.prototype.handleMouseUp = function(t) {}, e.prototype.handleMouseMove = function(t) {}, 
        e.prototype.conversionAxis = function(t, e) {
            return [ 0, 0 ];
        }, e.prototype.setDpr = function() {
            var t = this.config;
            t.dpr || (window ? window.dpr = t.dpr = window.devicePixelRatio || 1 : t.dpr || console.error(t, "未传入 dpr 可能会导致绘制异常"));
        }, e.prototype.setHTMLFontSize = function() {
            window && (this.htmlFontSize = +window.getComputedStyle(document.documentElement).fontSize.slice(0, -2));
        }, e.prototype.resetWidthAndHeight = function() {
            var t = this.config, e = 0, i = 0;
            t.divElement && (e = t.divElement.offsetWidth, i = t.divElement.offsetHeight), this.boxWidth = this.getLength(t.width) || e, 
            this.boxHeight = this.getLength(t.height) || i, t.divElement && (t.divElement.style.overflow = "hidden", 
            t.divElement.style.width = this.boxWidth + "px", t.divElement.style.height = this.boxHeight + "px");
        }, e.prototype.initWindowFunction = function() {
            var t = this.config;
            if (window) return this.rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(t) {
                window.setTimeout(t, 1e3 / 60);
            }, t.setTimeout = window.setTimeout, t.setInterval = window.setInterval, t.clearTimeout = window.clearTimeout, 
            void (t.clearInterval = window.clearInterval);
            if (t.rAF) this.rAF = t.rAF; else if (t.setTimeout) {
                var e = t.setTimeout;
                this.rAF = function(t) {
                    return e(t, 16.7);
                };
            } else this.rAF = function(t) {
                return setTimeout(t, 16.7);
            };
        }, e.prototype.zoomCanvas = function() {
            var t = this.config, e = this.ctx, i = t.canvasElement, n = t.dpr, r = [ this.boxWidth * n, this.boxHeight * n ], o = r[0], a = r[1], s = function(t) {
                return (t * n - t) / (t * n) * (n / 2) * 100;
            };
            i && (i.width = o, i.height = a, i.style.width = o + "px", i.style.height = a + "px", 
            i.style.transform = "scale(" + 1 / n + ") translate(" + -s(o) + "%, " + -s(a) + "%)", 
            e.scale(n, n));
        }, e.prototype.loadImg = function(t, e, i) {
            var n = this;
            return void 0 === i && (i = "$resolve"), new Promise(function(r, o) {
                if (t || o("=> '" + e.src + "' 不能为空或不合法"), "WEB" === n.config.flag) {
                    var a = new Image();
                    a.src = t, a.onload = function() {
                        return r(a);
                    }, a.onerror = function() {
                        return o("=> '" + e.src + "' 图片加载失败");
                    };
                } else e[i] = r;
            });
        }, e.prototype.drawImage = function(t, e, i, n, r) {
            var o, a = this.config, s = this.ctx;
            return [ "WEB", "MP-WX" ].includes(a.flag) ? o = t : [ "UNI-H5", "UNI-MP", "TARO-H5", "TARO-MP" ].includes(a.flag) && (o = t.path), 
            s.drawImage(o, e, i, n, r);
        }, e.prototype.getLength = function(t) {
            return h(t, "number") ? t : h(t, "string") ? this.changeUnits(t) : 0;
        }, e.prototype.changeUnits = function(t, e) {
            var i = this;
            return void 0 === e && (e = 1), Number(t.replace(/^([-]*[0-9.]*)([a-z%]*)$/, function(t, n, r) {
                var o = {
                    "%": function(t) {
                        return t * (e / 100);
                    },
                    px: function(t) {
                        return 1 * t;
                    },
                    rem: function(t) {
                        return t * i.htmlFontSize;
                    }
                }[r];
                if (o) return o(n);
                var a = i.config.unitFunc;
                return a ? a(n, r) : n;
            }));
        }, e.prototype.$set = function(e, i, n) {
            e && "object" == t(e) && w(e, i, n);
        }, e.prototype.$computed = function(t, e, i) {
            var n = this;
            Object.defineProperty(t, e, {
                get: function() {
                    return i.call(n);
                }
            });
        }, e.prototype.$watch = function(e, i, n) {
            void 0 === n && (n = {}), "object" == t(i) && (i = (n = i).handler);
            var r = new k(this, e, i, n);
            return n.immediate && i.call(this, r.value), function() {};
        }, e;
    }(), S = function(t) {
        return Math.PI / 180 * t;
    }, z = function(t, e) {
        return [ +(Math.cos(t) * e).toFixed(8), +(Math.sin(t) * e).toFixed(8) ];
    }, C = function(t, e) {
        var i = -t / e;
        return [ i, -i * t + e ];
    }, T = function t(e, i, n, r, o, a) {
        var s;
        if (void 0 === a && (a = !0), Math.abs(o - r).toFixed(8) >= S(180).toFixed(8)) {
            var u = (o + r) / 2;
            return a ? (t(e, i, n, r, u, a), t(e, i, n, u, o, a)) : (t(e, i, n, u, o, a), t(e, i, n, r, u, a)), 
            !1;
        }
        a || (r = (s = [ o, r ])[0], o = s[1]);
        var c = z(r, n), h = c[0], l = c[1], f = z(o, n), d = f[0], p = f[1], g = C(h, l), v = g[0], m = g[1], b = C(d, p), y = b[0], w = b[1], x = (w - m) / (v - y), k = (y * m - v * w) / (y - v);
        isNaN(x) && (Math.abs(h) === +n.toFixed(8) && (x = h), Math.abs(d) === +n.toFixed(8) && (x = d)), 
        v === 1 / 0 || v === -1 / 0 ? k = y * x + w : y !== 1 / 0 && y !== -1 / 0 || (k = v * x + m), 
        i.lineTo(h, l), e.indexOf("MP") > 0 ? i.quadraticCurveTo(x, k, d, p) : i.arcTo(x, k, d, p, n);
    }, O = function(t, e, i, n, r, o, a) {
        var s = Math.min(n, r);
        o > s / 2 && (o = s / 2), t.beginPath(), t.fillStyle = a, t.moveTo(e + o, i), t.lineTo(e + o, i), 
        t.lineTo(e + n - o, i), t.quadraticCurveTo(e + n, i, e + n, i + o), t.lineTo(e + n, i + r - o), 
        t.quadraticCurveTo(e + n, i + r, e + n - o, i + r), t.lineTo(e + o, i + r), t.quadraticCurveTo(e, i + r, e, i + r - o), 
        t.lineTo(e, i + o), t.quadraticCurveTo(e, i, e + o, i), t.closePath(), t.fill();
    }, P = {
        easeIn: function(t, e, i, n) {
            return t >= n && (t = n), i * (t /= n) * t + e;
        },
        easeOut: function(t, e, i, n) {
            return t >= n && (t = n), -i * (t /= n) * (t - 2) + e;
        }
    }, _ = {
        easeIn: function(t, e, i, n) {
            return t >= n && (t = n), -i * Math.cos(t / n * (Math.PI / 2)) + i + e;
        },
        easeOut: function(t, e, i, n) {
            return t >= n && (t = n), i * Math.sin(t / n * (Math.PI / 2)) + e;
        }
    }, W = {
        easeIn: function(t, e, i, n) {
            return t >= n && (t = n), 0 == t ? e : i * Math.pow(2, 10 * (t / n - 1)) + e;
        },
        easeOut: function(t, e, i, n) {
            return t >= n && (t = n), t == n ? e + i : i * (1 - Math.pow(2, -10 * t / n)) + e;
        }
    }, $ = {
        easeIn: function(t, e, i, n) {
            return t >= n && (t = n), -i * (Math.sqrt(1 - (t /= n) * t) - 1) + e;
        },
        easeOut: function(t, e, i, n) {
            return t >= n && (t = n), i * Math.sqrt(1 - (t = t / n - 1) * t) + e;
        }
    }, E = Object.freeze({
        __proto__: null,
        quad: P,
        cubic: {
            easeIn: function(t, e, i, n) {
                return t >= n && (t = n), i * (t /= n) * t * t + e;
            },
            easeOut: function(t, e, i, n) {
                return t >= n && (t = n), i * ((t = t / n - 1) * t * t + 1) + e;
            }
        },
        quart: {
            easeIn: function(t, e, i, n) {
                return t >= n && (t = n), i * (t /= n) * t * t * t + e;
            },
            easeOut: function(t, e, i, n) {
                return t >= n && (t = n), -i * ((t = t / n - 1) * t * t * t - 1) + e;
            }
        },
        quint: {
            easeIn: function(t, e, i, n) {
                return t >= n && (t = n), i * (t /= n) * t * t * t * t + e;
            },
            easeOut: function(t, e, i, n) {
                return t >= n && (t = n), i * ((t = t / n - 1) * t * t * t * t + 1) + e;
            }
        },
        sine: _,
        expo: W,
        circ: $
    }), F = function(t) {
        function e(e, i) {
            var n;
            void 0 === i && (i = {});
            var r = t.call(this, e) || this;
            return r.blocks = [], r.prizes = [], r.buttons = [], r.defaultConfig = {}, r._defaultConfig = {
                gutter: "0px",
                offsetDegree: 0,
                speed: 20,
                speedFunction: "quad",
                accelerationTime: 2500,
                decelerationTime: 2500,
                stopRange: .8
            }, r.defaultStyle = {}, r._defaultStyle = {
                fontSize: "18px",
                fontColor: "#000",
                fontStyle: "sans-serif",
                fontWeight: "400",
                lineHeight: "",
                background: "rgba(0,0,0,0)",
                wordWrap: !0,
                lengthLimit: "90%"
            }, r.Radius = 0, r.prizeRadius = 0, r.prizeDeg = 0, r.prizeRadian = 0, r.rotateDeg = 0, 
            r.maxBtnRadius = 0, r.startTime = 0, r.endTime = 0, r.stopDeg = 0, r.endDeg = 0, 
            r.FPS = 16.6, r.blockImgs = [ [] ], r.prizeImgs = [ [] ], r.btnImgs = [ [] ], e.ob && (r.initData(i), 
            r.initWatch()), r.initComputed(), null === (n = e.beforeCreate) || void 0 === n || n.call(r), 
            r.init({
                blockImgs: r.blocks.map(function(t) {
                    return t.imgs;
                }),
                prizeImgs: r.prizes.map(function(t) {
                    return t.imgs;
                }),
                btnImgs: r.buttons.map(function(t) {
                    return t.imgs;
                })
            }), r;
        }
        return o(e, t), e.prototype.initData = function(t) {
            this.$set(this, "blocks", t.blocks || []), this.$set(this, "prizes", t.prizes || []), 
            this.$set(this, "buttons", t.buttons || []), this.$set(this, "defaultConfig", t.defaultConfig || {}), 
            this.$set(this, "defaultStyle", t.defaultStyle || {}), this.$set(this, "startCallback", t.start), 
            this.$set(this, "endCallback", t.end);
        }, e.prototype.initComputed = function() {
            var t = this;
            this.$computed(this, "_defaultConfig", function() {
                return a({
                    gutter: "0px",
                    offsetDegree: 0,
                    speed: 20,
                    speedFunction: "quad",
                    accelerationTime: 2500,
                    decelerationTime: 2500,
                    stopRange: .8
                }, t.defaultConfig);
            }), this.$computed(this, "_defaultStyle", function() {
                return a({
                    fontSize: "18px",
                    fontColor: "#000",
                    fontStyle: "sans-serif",
                    fontWeight: "400",
                    background: "rgba(0,0,0,0)",
                    wordWrap: !0,
                    lengthLimit: "90%"
                }, t.defaultStyle);
            });
        }, e.prototype.initWatch = function() {
            var t = this;
            this.$watch("blocks", function(e) {
                return t.init({
                    blockImgs: e.map(function(t) {
                        return t.imgs;
                    })
                });
            }, {
                deep: !0
            }), this.$watch("prizes", function(e) {
                return t.init({
                    prizeImgs: e.map(function(t) {
                        return t.imgs;
                    })
                });
            }, {
                deep: !0
            }), this.$watch("buttons", function(e) {
                return t.init({
                    btnImgs: e.map(function(t) {
                        return t.imgs;
                    })
                });
            }, {
                deep: !0
            }), this.$watch("defaultConfig", function() {
                return t.draw();
            }, {
                deep: !0
            }), this.$watch("defaultStyle", function() {
                return t.draw();
            }, {
                deep: !0
            }), this.$watch("startCallback", function() {
                return t.init({});
            }), this.$watch("endCallback", function() {
                return t.init({});
            });
        }, e.prototype.init = function(e) {
            var i, n, r = this;
            t.prototype.init.call(this);
            var o = this.config, a = this.ctx;
            this.Radius = Math.min(this.boxWidth, this.boxHeight) / 2, null === (i = o.beforeInit) || void 0 === i || i.call(this), 
            a.translate(this.Radius, this.Radius), this.draw(), this.draw(), Object.keys(e).forEach(function(t) {
                var i = t, n = {
                    blockImgs: "blocks",
                    prizeImgs: "prizes",
                    btnImgs: "buttons"
                }[i], o = e[i];
                o && o.forEach(function(t, e) {
                    t && t.forEach(function(t, o) {
                        r.loadAndCacheImg(n, e, i, o, function() {
                            r.draw();
                        });
                    });
                });
            }), null === (n = o.afterInit) || void 0 === n || n.call(this);
        }, e.prototype.handleClick = function(t) {
            var e, i = this.ctx;
            i.beginPath(), i.arc(0, 0, this.maxBtnRadius, 0, 2 * Math.PI, !1), i.isPointInPath(t.offsetX, t.offsetY) && (this.startTime || null === (e = this.startCallback) || void 0 === e || e.call(this, t));
        }, e.prototype.loadAndCacheImg = function(t, e, i, n, r) {
            return s(this, void 0, void 0, function() {
                var o, a, s = this;
                return u(this, function(u) {
                    return (o = this[t][e]) && o.imgs && (a = o.imgs[n]) ? (this[i][e] || (this[i][e] = []), 
                    this.loadImg(a.src, a).then(function(t) {
                        s[i][e][n] = t, r.call(s);
                    }).catch(function(i) {
                        console.error(t + "[" + e + "].imgs[" + n + "] " + i);
                    }), [ 2 ]) : [ 2 ];
                });
            });
        }, e.prototype.computedWidthAndHeight = function(t, e, i, n) {
            if (!e.width && !e.height) return [ t.width, t.height ];
            if (e.width && !e.height) {
                var r = this.getWidth(e.width, i);
                return [ r, t.height * (r / t.width) ];
            }
            if (!e.width && e.height) {
                var o = this.getHeight(e.height, n);
                return [ t.width * (o / t.height), o ];
            }
            return [ this.getWidth(e.width, i), this.getHeight(e.height, n) ];
        }, e.prototype.draw = function() {
            var t, e, i = this, n = this, r = n.config, o = n.ctx, a = n._defaultConfig, s = n._defaultStyle;
            null === (t = r.beforeDraw) || void 0 === t || t.call(this, o), o.clearRect(-this.Radius, -this.Radius, 2 * this.Radius, 2 * this.Radius), 
            this.prizeRadius = this.blocks.reduce(function(t, e, n) {
                return f(e.background) && (o.beginPath(), o.fillStyle = e.background, o.arc(0, 0, t, 0, 2 * Math.PI, !1), 
                o.fill()), e.imgs && e.imgs.forEach(function(e, r) {
                    if (i.blockImgs[n]) {
                        var a = i.blockImgs[n][r];
                        if (a) {
                            var s = i.computedWidthAndHeight(a, e, 2 * t, 2 * t), u = s[0], c = s[1], h = [ i.getOffsetX(u), i.getHeight(e.top, 2 * t) - t ], l = h[0], f = h[1];
                            o.save(), e.rotate && o.rotate(S(i.rotateDeg)), i.drawImage(a, l, f, u, c), o.restore();
                        }
                    }
                }), t - i.getLength(e.padding && e.padding.split(" ")[0]);
            }, this.Radius), this.prizeDeg = 360 / this.prizes.length, this.prizeRadian = S(this.prizeDeg);
            var u = S(-90 + this.rotateDeg + a.offsetDegree), c = function(t) {
                return i.getOffsetX(o.measureText(t).width);
            }, h = function(t, e, n) {
                var r = t.lineHeight || s.lineHeight || t.fontSize || s.fontSize;
                return i.getHeight(t.top, e) + (n + 1) * i.getLength(r);
            };
            o.save(), this.prizes.forEach(function(t, e) {
                var n = u + e * i.prizeRadian, d = i.prizeRadius - i.maxBtnRadius, p = t.background || s.background;
                f(p) && function(t, e, i, n, r, o, a, s) {
                    a ? function(t, e, i, n, r, o, a, s) {
                        i || (i = a);
                        var u = S(90 / Math.PI / n * a), c = S(90 / Math.PI / i * a), h = r + u, l = o - u, f = r + c, d = o - c;
                        e.beginPath(), e.fillStyle = s, e.moveTo.apply(e, z(h, n)), T(t, e, n, h, l, !0), 
                        d > f ? T(t, e, i, f, d, !1) : e.lineTo.apply(e, z((r + o) / 2, a / 2 / Math.abs(Math.sin((r - o) / 2)))), 
                        e.closePath(), e.fill();
                    }(t, e, i, n, r, o, a, s) : (e.beginPath(), e.fillStyle = s, e.moveTo(0, 0), e.arc(0, 0, n, r, o, !1), 
                    e.closePath(), e.fill());
                }(r.flag, o, i.maxBtnRadius, i.prizeRadius, n - i.prizeRadian / 2, n + i.prizeRadian / 2, i.getLength(a.gutter), p);
                var g = Math.cos(n) * i.prizeRadius, v = Math.sin(n) * i.prizeRadius;
                o.translate(g, v), o.rotate(n + S(90)), t.imgs && t.imgs.forEach(function(t, n) {
                    if (i.prizeImgs[e]) {
                        var r = i.prizeImgs[e][n];
                        if (r) {
                            var o = i.computedWidthAndHeight(r, t, i.prizeRadian * i.prizeRadius, d), a = o[0], s = o[1], u = [ i.getOffsetX(a), i.getHeight(t.top, d) ], c = u[0], h = u[1];
                            i.drawImage(r, c, h, a, s);
                        }
                    }
                }), t.fonts && t.fonts.forEach(function(t) {
                    var e = t.fontColor || s.fontColor, n = t.fontWeight || s.fontWeight, r = i.getLength(t.fontSize || s.fontSize), u = t.fontStyle || s.fontStyle;
                    o.fillStyle = e, o.font = n + " " + (r >> 0) + "px " + u;
                    var f = [], p = String(t.text);
                    if (Object.prototype.hasOwnProperty.call(t, "wordWrap") ? t.wordWrap : s.wordWrap) {
                        p = l(p);
                        for (var g = "", v = 0; v < p.length; v++) {
                            g += p[v];
                            var m = o.measureText(g).width, b = (i.prizeRadius - h(t, d, f.length)) * Math.tan(i.prizeRadian / 2) * 2 - i.getLength(a.gutter);
                            m > i.getWidth(t.lengthLimit || s.lengthLimit, b) && (f.push(g.slice(0, -1)), g = p[v]);
                        }
                        g && f.push(g), f.length || f.push(p);
                    } else f = p.split("\n");
                    f.filter(function(t) {
                        return !!t;
                    }).forEach(function(e, i) {
                        o.fillText(e, c(e), h(t, d, i));
                    });
                }), o.rotate(S(360) - n - S(90)), o.translate(-g, -v);
            }), o.restore(), this.buttons.forEach(function(t, e) {
                var n = i.getHeight(t.radius);
                i.maxBtnRadius = Math.max(i.maxBtnRadius, n), f(t.background) && (o.beginPath(), 
                o.fillStyle = t.background, o.arc(0, 0, n, 0, 2 * Math.PI, !1), o.fill()), t.pointer && f(t.background) && (o.beginPath(), 
                o.fillStyle = t.background, o.moveTo(-n, 0), o.lineTo(n, 0), o.lineTo(0, 2 * -n), 
                o.closePath(), o.fill()), t.imgs && t.imgs.forEach(function(t, r) {
                    if (i.btnImgs[e]) {
                        var o = i.btnImgs[e][r];
                        if (o) {
                            var a = i.computedWidthAndHeight(o, t, 2 * n, 2 * n), s = a[0], u = a[1], c = [ i.getOffsetX(s), i.getHeight(t.top, n) ], h = c[0], l = c[1];
                            i.drawImage(o, h, l, s, u);
                        }
                    }
                }), t.fonts && t.fonts.forEach(function(t) {
                    var e = t.fontColor || s.fontColor, r = t.fontWeight || s.fontWeight, a = i.getLength(t.fontSize || s.fontSize), u = t.fontStyle || s.fontStyle;
                    o.fillStyle = e, o.font = r + " " + (a >> 0) + "px " + u, String(t.text).split("\n").forEach(function(e, i) {
                        o.fillText(e, c(e), h(t, n, i));
                    });
                });
            }), null === (e = r.afterDraw) || void 0 === e || e.call(this, o);
        }, e.prototype.play = function() {
            this.startTime || (this.startTime = Date.now(), this.prizeFlag = void 0, this.run());
        }, e.prototype.stop = function(t) {
            this.prizeFlag = t < 0 ? -1 : t % this.prizes.length, -1 === this.prizeFlag && (this.rotateDeg = this.prizeDeg / 2 - this._defaultConfig.offsetDegree, 
            this.draw());
        }, e.prototype.run = function(t) {
            void 0 === t && (t = 0);
            var e = this, i = e.rAF, n = e.prizeFlag, r = e.prizeDeg, o = e.rotateDeg, a = e._defaultConfig, s = Date.now() - this.startTime;
            if (s >= a.accelerationTime && void 0 !== n) {
                this.FPS = s / t, this.endTime = Date.now(), this.stopDeg = o;
                for (var u = (Math.random() * r - r / 2) * this.getLength(a.stopRange), c = 0; ++c; ) {
                    var h = 360 * c - n * r - o - a.offsetDegree + u;
                    if (E[a.speedFunction].easeOut(this.FPS, this.stopDeg, h, a.decelerationTime) - this.stopDeg > a.speed) {
                        this.endDeg = h;
                        break;
                    }
                }
                return this.slowDown();
            }
            this.rotateDeg = (o + E[a.speedFunction].easeIn(s, 0, a.speed, a.accelerationTime)) % 360, 
            this.draw(), i(this.run.bind(this, t + 1));
        }, e.prototype.slowDown = function() {
            var t, e = this, i = e.rAF, n = e.prizes, r = e.prizeFlag, o = e.stopDeg, s = e.endDeg, u = e._defaultConfig, c = Date.now() - this.endTime;
            if (-1 !== r) {
                if (c >= u.decelerationTime) return this.startTime = 0, void (null === (t = this.endCallback) || void 0 === t || t.call(this, a({}, n.find(function(t, e) {
                    return e === r;
                }))));
                this.rotateDeg = E[u.speedFunction].easeOut(c, o, s, u.decelerationTime) % 360, 
                this.draw(), i(this.slowDown.bind(this));
            } else this.startTime = 0;
        }, e.prototype.getWidth = function(t, e) {
            return void 0 === e && (e = this.prizeRadian * this.prizeRadius), h(t, "number") ? t : h(t, "string") ? this.changeUnits(t, e) : 0;
        }, e.prototype.getHeight = function(t, e) {
            return void 0 === e && (e = this.prizeRadius), h(t, "number") ? t : h(t, "string") ? this.changeUnits(t, e) : 0;
        }, e.prototype.getOffsetX = function(t) {
            return -t / 2;
        }, e.prototype.conversionAxis = function(t, e) {
            var i = this.config;
            return [ t / i.dpr - this.Radius, e / i.dpr - this.Radius ];
        }, e;
    }(I), R = function(t) {
        function e(e, i) {
            var n;
            void 0 === i && (i = {});
            var r = t.call(this, e) || this;
            r.rows = 3, r.cols = 3, r.blocks = [], r.prizes = [], r.buttons = [], r.defaultConfig = {}, 
            r._defaultConfig = {
                gutter: 5,
                speed: 20,
                accelerationTime: 2500,
                decelerationTime: 2500
            }, r.defaultStyle = {}, r._defaultStyle = {
                borderRadius: 20,
                fontColor: "#000",
                fontSize: "18px",
                fontStyle: "sans-serif",
                fontWeight: "400",
                lineHeight: "",
                background: "rgba(0,0,0,0)",
                shadow: "",
                wordWrap: !0,
                lengthLimit: "90%"
            }, r.activeStyle = {}, r._activeStyle = {
                background: "#ffce98",
                shadow: "",
                fontStyle: "",
                fontWeight: "",
                fontSize: "",
                lineHeight: "",
                fontColor: ""
            }, r.cellWidth = 0, r.cellHeight = 0, r.startTime = 0, r.endTime = 0, r.currIndex = 0, 
            r.stopIndex = 0, r.endIndex = 0, r.demo = !1, r.timer = 0, r.FPS = 16.6, r.prizeFlag = -1, 
            r.cells = [], r.blockImgs = [ [] ], r.btnImgs = [ [] ], r.prizeImgs = [], e.ob && (r.initData(i), 
            r.initWatch()), r.initComputed(), null === (n = e.beforeCreate) || void 0 === n || n.call(r);
            var o = r.buttons.map(function(t) {
                return t.imgs;
            });
            return r.button && o.push(r.button.imgs), r.init({
                blockImgs: r.blocks.map(function(t) {
                    return t.imgs;
                }),
                prizeImgs: r.prizes.map(function(t) {
                    return t.imgs;
                }),
                btnImgs: o
            }), r;
        }
        return o(e, t), e.prototype.initData = function(t) {
            this.$set(this, "rows", Number(t.rows) || 3), this.$set(this, "cols", Number(t.cols) || 3), 
            this.$set(this, "blocks", t.blocks || []), this.$set(this, "prizes", t.prizes || []), 
            this.$set(this, "buttons", t.buttons || []), this.$set(this, "button", t.button), 
            this.$set(this, "defaultConfig", t.defaultConfig || {}), this.$set(this, "defaultStyle", t.defaultStyle || {}), 
            this.$set(this, "activeStyle", t.activeStyle || {}), this.$set(this, "startCallback", t.start), 
            this.$set(this, "endCallback", t.end);
        }, e.prototype.initComputed = function() {
            var t = this;
            this.$computed(this, "_defaultConfig", function() {
                var e = a({
                    gutter: 5,
                    speed: 20,
                    accelerationTime: 2500,
                    decelerationTime: 2500
                }, t.defaultConfig);
                return e.gutter = t.getLength(e.gutter), e.speed = e.speed / 40, e;
            }), this.$computed(this, "_defaultStyle", function() {
                return a({
                    borderRadius: 20,
                    fontColor: "#000",
                    fontSize: "18px",
                    fontStyle: "sans-serif",
                    fontWeight: "400",
                    background: "rgba(0,0,0,0)",
                    shadow: "",
                    wordWrap: !0,
                    lengthLimit: "90%"
                }, t.defaultStyle);
            }), this.$computed(this, "_activeStyle", function() {
                return a({
                    background: "#ffce98",
                    shadow: ""
                }, t.activeStyle);
            });
        }, e.prototype.initWatch = function() {
            var t = this;
            this.$watch("blocks", function(e) {
                return t.init({
                    blockImgs: e.map(function(t) {
                        return t.imgs;
                    })
                });
            }, {
                deep: !0
            }), this.$watch("prizes", function(e) {
                return t.init({
                    prizeImgs: e.map(function(t) {
                        return t.imgs;
                    })
                });
            }, {
                deep: !0
            }), this.$watch("buttons", function(e) {
                var i = e.map(function(t) {
                    return t.imgs;
                });
                return t.button && i.push(t.button.imgs), t.init({
                    btnImgs: i
                });
            }, {
                deep: !0
            }), this.$watch("button", function() {
                var e = t.buttons.map(function(t) {
                    return t.imgs;
                });
                return t.button && e.push(t.button.imgs), t.init({
                    btnImgs: e
                });
            }, {
                deep: !0
            }), this.$watch("rows", function() {
                return t.init({});
            }), this.$watch("cols", function() {
                return t.init({});
            }), this.$watch("defaultConfig", function() {
                return t.draw();
            }, {
                deep: !0
            }), this.$watch("defaultStyle", function() {
                return t.draw();
            }, {
                deep: !0
            }), this.$watch("activeStyle", function() {
                return t.draw();
            }, {
                deep: !0
            }), this.$watch("startCallback", function() {
                return t.init({});
            }), this.$watch("endCallback", function() {
                return t.init({});
            });
        }, e.prototype.init = function(e) {
            var i, n, r = this;
            t.prototype.init.call(this);
            var o = this, a = o.config;
            o.ctx, o.button, null === (i = a.beforeInit) || void 0 === i || i.call(this), this.draw(), 
            Object.keys(e).forEach(function(t) {
                var i = t, n = e[i], o = {
                    blockImgs: "blocks",
                    prizeImgs: "prizes",
                    btnImgs: "buttons"
                }[i];
                n && n.forEach(function(t, e) {
                    t && t.forEach(function(t, n) {
                        r.loadAndCacheImg(o, e, i, n, function() {
                            r.draw();
                        });
                    });
                });
            }), null === (n = a.afterInit) || void 0 === n || n.call(this);
        }, e.prototype.handleClick = function(t) {
            var e = this, i = this.ctx;
            c(c([], this.buttons), [ this.button ]).forEach(function(n) {
                var r;
                if (n) {
                    var o = e.getGeometricProperty([ n.x, n.y, n.col || 1, n.row || 1 ]), a = o[0], s = o[1], u = o[2], c = o[3];
                    i.beginPath(), i.rect(a, s, u, c), i.isPointInPath(t.offsetX, t.offsetY) && (e.startTime || ("function" == typeof n.callback && n.callback.call(e, n), 
                    null === (r = e.startCallback) || void 0 === r || r.call(e, t, n)));
                }
            });
        }, e.prototype.loadAndCacheImg = function(t, e, i, n, r) {
            return s(this, void 0, void 0, function() {
                var o, a, s, c = this;
                return u(this, function(u) {
                    return o = this[t][e], "buttons" === t && !this.buttons.length && this.button && (o = this.button), 
                    o && o.imgs && (a = o.imgs[n]) ? (this[i][e] || (this[i][e] = []), s = [ this.loadImg(a.src, a), a.activeSrc && this.loadImg(a.activeSrc, a, "$activeResolve") ], 
                    Promise.all(s).then(function(t) {
                        var o = t[0], a = t[1];
                        c[i][e][n] = {
                            defaultImg: o,
                            activeImg: a
                        }, r.call(c);
                    }).catch(function(i) {
                        console.error(t + "[" + e + "].imgs[" + n + "] " + i);
                    }), [ 2 ]) : [ 2 ];
                });
            });
        }, e.prototype.computedWidthAndHeight = function(t, e, i) {
            if (!e.width && !e.height) return [ t.width, t.height ];
            if (e.width && !e.height) {
                var n = this.getWidth(e.width, i.col);
                return [ n, t.height * (n / t.width) ];
            }
            if (!e.width && e.height) {
                var r = this.getHeight(e.height, i.row);
                return [ t.width * (r / t.height), r ];
            }
            return [ this.getWidth(e.width, i.col), this.getHeight(e.height, i.row) ];
        }, e.prototype.draw = function() {
            var t, e, i = this, n = this, r = n.config, o = n.ctx, a = n._defaultConfig, s = n._defaultStyle, u = n._activeStyle;
            null === (t = r.beforeDraw) || void 0 === t || t.call(this, o), o.clearRect(0, 0, this.boxWidth, this.boxHeight), 
            this.cells = c(c([], this.prizes), this.buttons), this.button && this.cells.push(this.button), 
            this.cells.forEach(function(t) {
                t.col = t.col || 1, t.row = t.row || 1;
            }), this.prizeArea = this.blocks.reduce(function(t, e) {
                var n = t.x, r = t.y, a = t.w, u = t.h, c = function(t) {
                    var e, i = (null === (e = t.padding) || void 0 === e ? void 0 : e.replace(/px/g, "").split(" ").map(function(t) {
                        return ~~t;
                    })) || [ 0 ], n = 0, r = 0, o = 0, a = 0;
                    switch (i.length) {
                      case 1:
                        n = r = o = a = i[0];
                        break;

                      case 2:
                        n = r = i[0], o = a = i[1];
                        break;

                      case 3:
                        n = i[0], o = a = i[1], r = i[2];
                        break;

                      default:
                        n = i[0], r = i[1], o = i[2], a = i[3];
                    }
                    var s = {
                        paddingTop: n,
                        paddingBottom: r,
                        paddingLeft: o,
                        paddingRight: a
                    };
                    for (var u in s) s[u] = Object.prototype.hasOwnProperty.call(t, u) && h(t[u], "string", "number") ? ~~String(t[u]).replace(/px/g, "") : s[u];
                    return [ n, r, o, a ];
                }(e), l = c[0], d = c[1], p = c[2], g = c[3], v = e.borderRadius ? i.getLength(e.borderRadius) : 0, m = e.background || s.background;
                return f(m) && O(o, n, r, a, u, v, i.handleBackground(n, r, a, u, m)), {
                    x: n + p,
                    y: r + l,
                    w: a - p - g,
                    h: u - l - d
                };
            }, {
                x: 0,
                y: 0,
                w: this.boxWidth,
                h: this.boxHeight
            }), this.cellWidth = (this.prizeArea.w - a.gutter * (this.cols - 1)) / this.cols, 
            this.cellHeight = (this.prizeArea.h - a.gutter * (this.rows - 1)) / this.rows, this.cells.forEach(function(t, e) {
                var n = i.getGeometricProperty([ t.x, t.y, t.col, t.row ]), a = n[0], c = n[1], h = n[2], d = n[3], p = !1;
                (void 0 === i.prizeFlag || i.prizeFlag > -1) && (p = e === i.currIndex % i.prizes.length >> 0);
                var g = p ? u.background : t.background || s.background;
                if (f(g)) {
                    var v = (p ? u.shadow : t.shadow || s.shadow).replace(/px/g, "").split(",")[0].split(" ").map(function(t, e) {
                        return e < 3 ? Number(t) : t;
                    });
                    4 === v.length && (o.shadowColor = v[3], o.shadowOffsetX = v[0] * r.dpr, o.shadowOffsetY = v[1] * r.dpr, 
                    o.shadowBlur = v[2], v[0] > 0 ? h -= v[0] : (h += v[0], a -= v[0]), v[1] > 0 ? d -= v[1] : (d += v[1], 
                    c -= v[1])), O(o, a, c, h, d, i.getLength(t.borderRadius ? t.borderRadius : s.borderRadius), i.handleBackground(a, c, h, d, g)), 
                    o.shadowColor = "rgba(0, 0, 0, 0)", o.shadowOffsetX = 0, o.shadowOffsetY = 0, o.shadowBlur = 0;
                }
                var m = "prizeImgs";
                e >= i.prizes.length && (m = "btnImgs", e -= i.prizes.length), t.imgs && t.imgs.forEach(function(n, r) {
                    if (i[m][e]) {
                        var o = i[m][e][r];
                        if (o) {
                            var s = p && o.activeImg || o.defaultImg;
                            if (s) {
                                var u = i.computedWidthAndHeight(s, n, t), h = u[0], l = u[1], f = [ a + i.getOffsetX(h, t.col), c + i.getHeight(n.top, t.row) ], d = f[0], g = f[1];
                                i.drawImage(s, d, g, h, l);
                            }
                        }
                    }
                }), t.fonts && t.fonts.forEach(function(e) {
                    var n = p && u.fontStyle ? u.fontStyle : e.fontStyle || s.fontStyle, r = p && u.fontWeight ? u.fontWeight : e.fontWeight || s.fontWeight, h = p && u.fontSize ? i.getLength(u.fontSize) : i.getLength(e.fontSize || s.fontSize), f = p && u.lineHeight ? u.lineHeight : e.lineHeight || s.lineHeight || e.fontSize || s.fontSize;
                    o.font = r + " " + (h >> 0) + "px " + n, o.fillStyle = p && u.fontColor ? u.fontColor : e.fontColor || s.fontColor;
                    var d = [], g = String(e.text);
                    if (Object.prototype.hasOwnProperty.call(e, "wordWrap") ? e.wordWrap : s.wordWrap) {
                        g = l(g);
                        for (var v = "", m = 0; m < g.length; m++) v += g[m], o.measureText(v).width > i.getWidth(e.lengthLimit || s.lengthLimit, t.col) && (d.push(v.slice(0, -1)), 
                        v = g[m]);
                        v && d.push(v), d.length || d.push(g);
                    } else d = g.split("\n");
                    d.forEach(function(n, r) {
                        o.fillText(n, a + i.getOffsetX(o.measureText(n).width, t.col), c + i.getHeight(e.top, t.row) + (r + 1) * i.getLength(f));
                    });
                });
            }), null === (e = r.afterDraw) || void 0 === e || e.call(this, o);
        }, e.prototype.handleBackground = function(t, e, i, n, r) {
            var o = this.ctx;
            return r.includes("linear-gradient") && (r = function(t, e, i, n, r, o) {
                var a = /linear-gradient\((.+)\)/.exec(o)[1].split(",").map(function(t) {
                    return t.trim();
                }), s = a.shift(), u = [ 0, 0, 0, 0 ];
                if (s.includes("deg")) {
                    var c = function(t) {
                        return Math.tan(t / 180 * Math.PI);
                    };
                    (s = s.slice(0, -3) % 360) >= 0 && s < 45 ? u = [ e, i + r, e + n, i + r - n * c(s - 0) ] : s >= 45 && s < 90 ? u = [ e, i + r, e + n - r * c(s - 45), i ] : s >= 90 && s < 135 ? u = [ e + n, i + r, e + n - r * c(s - 90), i ] : s >= 135 && s < 180 ? u = [ e + n, i + r, e, i + n * c(s - 135) ] : s >= 180 && s < 225 ? u = [ e + n, i, e, i + n * c(s - 180) ] : s >= 225 && s < 270 ? u = [ e + n, i, e + r * c(s - 225), i + r ] : s >= 270 && s < 315 ? u = [ e, i, e + r * c(s - 270), i + r ] : s >= 315 && s < 360 && (u = [ e, i, e + n, i + r - n * c(s - 315) ]);
                } else s.includes("top") ? u = [ e, i + r, e, i ] : s.includes("bottom") ? u = [ e, i, e, i + r ] : s.includes("left") ? u = [ e + n, i, e, i ] : s.includes("right") && (u = [ e, i, e + n, i ]);
                var h = t.createLinearGradient.apply(t, u.map(function(t) {
                    return t >> 0;
                }));
                return a.reduce(function(t, e, i) {
                    var n = e.split(" ");
                    return 1 === n.length ? t.addColorStop(i, n[0]) : 2 === n.length && t.addColorStop.apply(t, n), 
                    t;
                }, h);
            }(o, t, e, i, n, r)), r;
        }, e.prototype.play = function() {
            var t = this.config.clearInterval;
            this.startTime || (t(this.timer), this.startTime = Date.now(), this.prizeFlag = void 0, 
            this.run());
        }, e.prototype.stop = function(t) {
            this.prizeFlag = t < 0 ? -1 : t % this.prizes.length, -1 === this.prizeFlag && (this.currIndex = 0, 
            this.draw());
        }, e.prototype.run = function(t) {
            void 0 === t && (t = 0);
            var e = this, i = e.rAF, n = e.currIndex, r = e.prizes, o = e.prizeFlag, a = e.startTime, s = e._defaultConfig, u = Date.now() - a;
            if (u >= s.accelerationTime && void 0 !== o) {
                this.FPS = u / t, this.endTime = Date.now(), this.stopIndex = n;
                for (var c = 0; ++c; ) {
                    var h = r.length * c + o - (n >> 0);
                    if (P.easeOut(this.FPS, this.stopIndex, h, s.decelerationTime) - this.stopIndex > s.speed) {
                        this.endIndex = h;
                        break;
                    }
                }
                return this.slowDown();
            }
            this.currIndex = (n + P.easeIn(u, .1, s.speed, s.accelerationTime)) % r.length, 
            this.draw(), i(this.run.bind(this, t + 1));
        }, e.prototype.slowDown = function() {
            var t, e = this, i = e.rAF, n = e.prizes, r = e.prizeFlag, o = e.stopIndex, s = e.endIndex, u = e._defaultConfig, c = Date.now() - this.endTime;
            if (-1 !== r) {
                if (c > u.decelerationTime) return this.startTime = 0, void (null === (t = this.endCallback) || void 0 === t || t.call(this, a({}, n.find(function(t, e) {
                    return e === r;
                }))));
                this.currIndex = P.easeOut(c, o, s, u.decelerationTime) % n.length, this.draw(), 
                i(this.slowDown.bind(this));
            } else this.startTime = 0;
        }, e.prototype.walk = function() {
            var t = this, e = this.config, i = e.setInterval;
            (0, e.clearInterval)(this.timer), this.timer = i(function() {
                t.currIndex += 1, t.draw();
            }, 1300);
        }, e.prototype.getGeometricProperty = function(t) {
            var e = t[0], i = t[1], n = t[2], r = t[3], o = this.cellWidth, a = this.cellHeight, s = this._defaultConfig.gutter, u = [ this.prizeArea.x + (o + s) * e, this.prizeArea.y + (a + s) * i ];
            return n && r && u.push(o * n + s * (n - 1), a * r + s * (r - 1)), u;
        }, e.prototype.getWidth = function(t, e) {
            return void 0 === e && (e = 1), h(t, "number") ? t : h(t, "string") ? this.changeUnits(t, this.cellWidth * e + this._defaultConfig.gutter * (e - 1)) : 0;
        }, e.prototype.getHeight = function(t, e) {
            return void 0 === e && (e = 1), h(t, "number") ? t : h(t, "string") ? this.changeUnits(t, this.cellHeight * e + this._defaultConfig.gutter * (e - 1)) : 0;
        }, e.prototype.getOffsetX = function(t, e) {
            return void 0 === e && (e = 1), (this.cellWidth * e + this._defaultConfig.gutter * (e - 1) - t) / 2;
        }, e.prototype.conversionAxis = function(t, e) {
            var i = this.config;
            return [ t / i.dpr, e / i.dpr ];
        }, e;
    }(I);
    i.LuckyGrid = R, i.LuckyWheel = F;
}, function(t, e, i) {
    e.__esModule = !0, e.getImage = function() {
        var t = this;
        return new Promise(function(e, i) {
            wx.canvasToTempFilePath({
                canvas: t.canvas,
                success: function(t) {
                    return e(t);
                },
                fail: function(t) {
                    return i(t);
                }
            });
        });
    };
    var n = wx.getSystemInfoSync().windowWidth, r = e.rpx2px = function(t) {
        return "string" == typeof t && (t = Number(t.replace(/[a-z]*/g, ""))), n / 750 * t;
    };
    e.changeUnits = function(t) {
        return Number(t.replace(/^(\-*[0-9.]*)([a-z%]*)$/, function(t, e, i) {
            switch (i) {
              case "px":
                e *= 1;
                break;

              case "rpx":
                e = r(e);
                break;

              default:
                e *= 1;
            }
            return e;
        }));
    }, e.resolveImage = function(t, e, i) {
        var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "src", r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "$resolve", o = i.createImage();
        o.onload = function() {
            e[r](o);
        }, o.src = e[n];
    };
}, function(t, e, i) {
    var n = i(0), r = i(1);
    Component({
        properties: {
            width: {
                type: String,
                value: "600rpx"
            },
            height: {
                type: String,
                value: "600rpx"
            },
            blocks: {
                type: Array,
                value: []
            },
            prizes: {
                type: Array,
                value: []
            },
            buttons: {
                type: Array,
                value: []
            },
            defaultConfig: {
                type: Object,
                value: {}
            },
            defaultStyle: {
                type: Object,
                value: {}
            },
            start: {
                type: Function,
                value: function() {}
            },
            end: {
                type: Function,
                value: function() {}
            }
        },
        data: {
            isShow: !1,
            luckyImg: "",
            showCanvas: !0
        },
        observers: {
            "blocks.**": function(t, e) {
                this.$lucky && (this.$lucky.blocks = t);
            },
            "prizes.**": function(t, e) {
                this.$lucky && (this.$lucky.prizes = t);
            },
            "buttons.**": function(t, e) {
                this.$lucky && (this.$lucky.buttons = t);
            }
        },
        ready: function() {
            var t = this;
            wx.createSelectorQuery().in(this).select("#lucky-wheel").fields({
                node: !0,
                size: !0
            }).exec(function(e) {
                if (!e[0] || !e[0].node) return console.error("lucky-canvas 获取不到 canvas 标签");
                var i = t.canvas = e[0].node, o = t.dpr = wx.getSystemInfoSync().pixelRatio, a = t.ctx = i.getContext("2d"), s = t.data;
                i.width = e[0].width * o, i.height = e[0].height * o, a.scale(o, o), t.$lucky = new n.LuckyWheel({
                    flag: "MP-WX",
                    ctx: a,
                    dpr: o,
                    width: e[0].width,
                    height: e[0].height,
                    setTimeout: setTimeout,
                    clearTimeout: clearTimeout,
                    setInterval: setInterval,
                    clearInterval: clearInterval,
                    beforeCreate: function() {
                        var t = Math.min(this.config.width, this.config.height) / 2;
                        a.translate(t, t);
                    },
                    beforeInit: function() {
                        a.translate(-this.Radius, -this.Radius);
                    },
                    unitFunc: function(t, e) {
                        return (0, r.changeUnits)(t + e);
                    }
                }, {
                    blocks: s.blocks,
                    prizes: s.prizes,
                    buttons: s.buttons,
                    defaultConfig: s.defaultConfig,
                    defaultStyle: s.defaultStyle,
                    start: function() {
                        for (var e = arguments.length, i = Array(e), n = 0; n < e; n++) i[n] = arguments[n];
                        t.triggerEvent.apply(t, [ "start" ].concat(i));
                    },
                    end: function() {
                        for (var e = arguments.length, i = Array(e), n = 0; n < e; n++) i[n] = arguments[n];
                        t.triggerEvent.apply(t, [ "end" ].concat(i)), r.getImage.call(t).then(function(e) {
                            t.setData({
                                luckyImg: e.tempFilePath
                            });
                        });
                    }
                }), t.setData({
                    isShow: !0
                });
            });
        },
        methods: {
            imgBindload: function(t) {
                var e = t.currentTarget.dataset, i = e.name, n = e.index, o = e.i, a = this.data[i][n].imgs[o];
                (0, r.resolveImage)(t, a, this.canvas);
            },
            luckyImgLoad: function() {
                this.showCanvas = !1;
            },
            handleClickOfImg: function(t) {
                var e = this, i = t.changedTouches[0], n = i.clientX, r = i.clientY;
                wx.createSelectorQuery().in(this).select(".lucky-img").fields({
                    rect: !0
                }).exec(function(t) {
                    var i = t[0], o = i.left, a = i.top;
                    e.toPlay(n - o, r - a);
                });
            },
            handleClickOfCanvas: function(t) {
                var e = t.changedTouches[0], i = e.x, n = e.y;
                this.toPlay(i, n);
            },
            toPlay: function(t, e) {
                var i = this.ctx;
                i.beginPath(), i.arc(0, 0, this.$lucky.maxBtnRadius, 0, 2 * Math.PI, !1), i.isPointInPath(t * this.dpr, e * this.dpr) && (this.showCanvas = !0, 
                this.setData({
                    luckyImg: ""
                }), this.$lucky.startCallback());
            },
            play: function() {
                var t;
                (t = this.$lucky).play.apply(t, arguments);
            },
            stop: function() {
                var t;
                (t = this.$lucky).stop.apply(t, arguments);
            }
        }
    });
} ]);