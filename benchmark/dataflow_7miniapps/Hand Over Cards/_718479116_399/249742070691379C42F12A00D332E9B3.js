var t, a, e = 0, i = null, r = "forwards", l = [], o = [], h = !1, n = [ [ 1, 1 ], [ 1, 1 ] ];

module.exports.cropImage = function(c) {
    !1, t = this, a = c, this.data = c.data, this.initCropData = {
        lt: [],
        rt: [],
        lb: [],
        rb: []
    }, this.initImageCanvasCoor = {
        lt: {
            x: 0,
            y: 0
        },
        rt: {
            x: 0,
            y: 0
        },
        lb: {
            x: 0,
            y: 0
        },
        rb: {
            x: 0,
            y: 0
        }
    }, this.optionsData = function(a, i) {
        var r, l, o = this;
        !a.rotate && (a.rotate = 0), this.options = a, e = t.options.rotate / 90 % 4 < 0 ? t.options.rotate / 90 % 4 + 4 : t.options.rotate / 90 % 4, 
        this.getImgInfo(function() {
            o.renderImageData(), o.initExc(), o.initStore(), o.canvas(), "default" == t.data.cropCanvas.pattern ? o.downloadImage() : o.downloadImage(function() {
                t.cropCanvasLogo();
            }), i && i();
        }), l = 0, "default" == t.data.cropCanvas.pattern && (l = 400), r = wx.createAnimation({
            transformOrigin: "50% 50%",
            duration: l,
            timingFunction: "ease",
            delay: 0
        }), t.animation = r, t.animationFunc();
    }, this.animationFunc = function() {
        t.animation.rotate(t.options.rotate).step(), a.setData({
            "cropCanvas.animationData": t.animation.export()
        });
    }, this.getImgInfo = function(a) {
        var e = this.options.src;
        this.options.rotate;
        wx.getImageInfo({
            src: e,
            success: function(e) {
                t.imageInformation = e, a && a();
            },
            fail: function(t) {
                var a = getApp();
                wx.showModal({
                    title: "提示",
                    content: "网络连接失败，请稍后重试。",
                    confirmColor: a ? a.source.sceneColor : "#3F51B5",
                    showCancel: !1,
                    success: function(t) {
                        wx.navigateBack({
                            delta: 1
                        });
                    }
                });
            }
        });
    }, this.downloadImage = function(a) {
        t.downloadImageSrc = t.options.src, wx.downloadFile({
            url: t.options.src,
            success: function(a) {
                200 === a.statusCode && (t.downloadImageSrc = a.tempFilePath);
            },
            complete: function() {
                a && a();
            }
        });
    }, this.renderImageData = function() {
        var e = t.imageInformation.height, i = t.imageInformation.width, r = t.data.cropCanvas, o = r.width * r.imageRatio[0], c = r.height * r.imageRatio[1];
        if (h = !1, "default" == r.pattern) return a.setData({
            "cropCanvas.image": {
                height: e / i * o,
                width: o,
                src: t.options.src,
                marginLeft: .5 * (r.width - o),
                marginTop: .5 * (r.height - e / i * o)
            },
            "cropCanvas.widthSmall": .2 * r.width,
            "cropCanvas.heightSmall": .2 * r.width,
            "cropCanvas.marginLeft": (r.devices.windowWidth - r.width) / 2
        }), t.data.cropCanvas.style.line = "#1aad19", l = [ o / 1e3, e / i * o / 750 ], 
        0;
        n = e / i * o <= c ? c / (i / e) <= o ? [ [ o / c, o / c ], [ c / o, c / o ] ] : [ [ e / i, e / i ], [ i / e, i / e ] ] : c / (i / e) <= o ? [ [ o / c, o / c ], [ c / o, c / o ] ] : [ [ c / o, c / o ], [ o / c, o / c ] ], 
        t.options.rotate % 180 != 0 ? c / (i / e) <= o ? a.setData({
            "cropCanvas.image": {
                height: e / i * c,
                width: c,
                src: t.options.src,
                marginLeft: .5 * (r.width - c),
                marginTop: .5 * (r.height - e / i * c)
            },
            "cropCanvas.marginLeft": (r.devices.windowWidth - r.width) / 2
        }) : a.setData({
            "cropCanvas.image": {
                height: o,
                width: i / e * o,
                src: t.options.src,
                marginLeft: .5 * (r.width - i / e * o),
                marginTop: .5 * (r.height - o)
            },
            "cropCanvas.marginLeft": (r.devices.windowWidth - r.width) / 2
        }) : e / i * o <= c ? a.setData({
            "cropCanvas.image": {
                height: e / i * o,
                width: o,
                src: t.options.src,
                marginLeft: .5 * (r.width - o),
                marginTop: .5 * (r.height - e / i * o)
            },
            "cropCanvas.marginLeft": (r.devices.windowWidth - r.width) / 2
        }) : (!0, a.setData({
            "cropCanvas.image": {
                height: c,
                width: i / e * c,
                src: t.options.src,
                marginLeft: .5 * (r.width - i / e * c),
                marginTop: .5 * (r.height - c)
            },
            "cropCanvas.marginLeft": (r.devices.windowWidth - r.width) / 2
        }));
    }, this.initStore = function() {
        var a = t.data.cropCanvas;
        a.width, a.imageRatio[0], a.height, a.imageRatio[1];
        if (a.imageCanvasCoor = {
            x: 0,
            y: 0
        }, t.initImageCanvasCoor = {
            lt: {
                x: 0,
                y: 0
            },
            rt: {
                x: 0,
                y: 0
            },
            lb: {
                x: 0,
                y: 0
            },
            rb: {
                x: 0,
                y: 0
            }
        }, "default" == a.pattern) return t.data.cropCanvas.cropData = {
            lt: [ (a.width - a.image.width) / 2 + 0, (a.height - a.image.height) / 2 + 0 ],
            rt: [ a.width - (a.width - a.image.width) / 2 - 0, (a.height - a.image.height) / 2 + 0 ],
            lb: [ (a.width - a.image.width) / 2 + 0, a.height - (a.height - a.image.height) / 2 - 0 ],
            rb: [ a.width - (a.width - a.image.width) / 2 - 0, a.height - (a.height - a.image.height) / 2 - 0 ]
        }, 0;
        a.image.width < a.image.height ? t.data.cropCanvas.cropData = {
            lt: [ (a.width - a.image.width) / 2 + 0, (a.height - a.image.width) / 2 + 0 ],
            rt: [ a.width - (a.width - a.image.width) / 2 - 0, (a.height - a.image.width) / 2 + 0 ],
            lb: [ (a.width - a.image.width) / 2 + 0, (a.height - a.image.width) / 2 + a.image.width - 0 ],
            rb: [ a.width - (a.width - a.image.width) / 2 - 0, (a.height + a.image.width) / 2 - 0 ]
        } : t.data.cropCanvas.cropData = {
            lt: [ (a.width - a.image.height) / 2 + 0, (a.height - a.image.height) / 2 + 0 ],
            rt: [ (a.width + a.image.height) / 2 - 0, (a.height - a.image.height) / 2 + 0 ],
            lb: [ (a.width - a.image.height) / 2 + 0, a.height - (a.height - a.image.height) / 2 - 0 ],
            rb: [ (a.width + a.image.height) / 2 - 0, a.height - (a.height - a.image.height) / 2 - 0 ]
        };
    }, this.initExc = function() {
        var a = t.data.cropCanvas;
        t.options.rotate % 180 != 0 ? t.initCropData = {
            lt: [ (a.width - a.image.height) / 2, (a.height - a.image.width) / 2 ],
            rt: [ a.width - (a.width - a.image.height) / 2, (a.height - a.image.width) / 2 ],
            lb: [ (a.width - a.image.height) / 2, a.height - (a.height - a.image.width) / 2 ],
            rb: [ a.width - (a.width - a.image.height) / 2, a.height - (a.height - a.image.width) / 2 ]
        } : (t.initCropData = {
            lt: [ (a.width - a.image.width) / 2, (a.height - a.image.height) / 2 ],
            rt: [ a.width - (a.width - a.image.width) / 2, (a.height - a.image.height) / 2 ],
            lb: [ (a.width - a.image.width) / 2, a.height - (a.height - a.image.height) / 2 ],
            rb: [ a.width - (a.width - a.image.width) / 2, a.height - (a.height - a.image.height) / 2 ]
        }, o = [ (a.width - a.image.width) / 2, (a.height - a.image.height) / 2 ]);
    }, this.coorExchange = function() {
        var a = t.data.cropCanvas, e = t.data.cropCanvas.cropData, i = e.lt, l = e.rt, o = e.lb, h = e.rb, c = n[0];
        t.options.rotate % 180 != 0 && (c = n[1]), "rectangle" == a.pattern && (i = t.newRotate({
            x: .5 * a.width,
            y: .5 * a.height
        }, {
            x: e.lt[0],
            y: e.lt[1]
        }, c), l = t.newRotate({
            x: .5 * a.width,
            y: .5 * a.height
        }, {
            x: e.rt[0],
            y: e.rt[1]
        }, c), o = t.newRotate({
            x: .5 * a.width,
            y: .5 * a.height
        }, {
            x: e.lb[0],
            y: e.lb[1]
        }, c), h = t.newRotate({
            x: .5 * a.width,
            y: .5 * a.height
        }, {
            x: e.rb[0],
            y: e.rb[1]
        }, c)), "forwards" == r ? (i = t.nExc({
            x: .5 * a.width,
            y: .5 * a.height
        }, {
            x: i[0],
            y: i[1]
        }, 90 * Math.PI / 180), l = t.nExc({
            x: .5 * a.width,
            y: .5 * a.height
        }, {
            x: l[0],
            y: l[1]
        }, 90 * Math.PI / 180), o = t.nExc({
            x: .5 * a.width,
            y: .5 * a.height
        }, {
            x: o[0],
            y: o[1]
        }, 90 * Math.PI / 180), h = t.nExc({
            x: .5 * a.width,
            y: .5 * a.height
        }, {
            x: h[0],
            y: h[1]
        }, 90 * Math.PI / 180), e = {
            lt: [ o.x, o.y ],
            rt: [ i.x, i.y ],
            lb: [ h.x, h.y ],
            rb: [ l.x, l.y ]
        }) : (i = t.nExc({
            x: .5 * a.width,
            y: .5 * a.height
        }, {
            x: i[0],
            y: i[1]
        }, -90 * Math.PI / 180), l = t.nExc({
            x: .5 * a.width,
            y: .5 * a.height
        }, {
            x: l[0],
            y: l[1]
        }, -90 * Math.PI / 180), o = t.nExc({
            x: .5 * a.width,
            y: .5 * a.height
        }, {
            x: o[0],
            y: o[1]
        }, -90 * Math.PI / 180), h = t.nExc({
            x: .5 * a.width,
            y: .5 * a.height
        }, {
            x: h[0],
            y: h[1]
        }, -90 * Math.PI / 180), e = {
            lt: [ l.x, l.y ],
            rt: [ h.x, h.y ],
            lb: [ i.x, i.y ],
            rb: [ o.x, o.y ]
        }), t.data.cropCanvas.cropData = e;
    }, this.newRotate = function(t, a, e) {
        return [ t.x - (t.x - a.x) * e[0], t.y - (t.y - a.y) * e[1] ];
    }, this.nExc = function(t, a, e) {
        return {
            x: (a.x - t.x) * Math.cos(e) - (a.y - t.y) * Math.sin(e) + t.x,
            y: (a.x - t.x) * Math.sin(e) + (a.y - t.y) * Math.cos(e) + t.y
        };
    }, this.canvas = function() {
        var a = t.data.cropCanvas, e = t.data.cropCanvas.cropData, i = t.data.cropCanvas.circleRadius, r = t.centerPointCoorMark, l = t.initCropData, o = "circle", n = (e.rt[0] - e.lt[0]) / 3, c = (e.lb[1] - e.lt[1]) / 3, s = 1.5;
        "rectangle" == a.pattern && (o = "rectangle", s = 1);
        var b = wx.createCanvasContext(a.id);
        if (b.clearRect(0, 0, a.width, a.height), "rectangle" == a.pattern ? b.setGlobalAlpha(.6) : b.setGlobalAlpha(1), 
        b.beginPath(), b.setStrokeStyle(a.style.line), b.setLineWidth(s), b.moveTo(e.lt[0], e.lt[1]), 
        b.lineTo(e.rt[0], e.rt[1]), b.lineTo(e.rb[0], e.rb[1]), b.lineTo(e.lb[0], e.lb[1]), 
        b.lineTo(e.lt[0], e.lt[1]), b.closePath(), b.stroke(), "rectangle" == a.pattern) {
            b.setFillStyle("black"), b.beginPath(), b.moveTo(l.lt[0] - 2, l.lt[1] - 2), b.lineTo(l.rt[0] + 2, l.rt[1] - 2), 
            b.lineTo(l.rb[0] + 2, l.rb[1] + 2), b.lineTo(l.lb[0] - 2, l.lb[1] + 2), b.lineTo(l.lt[0] - 2, l.lt[1] - 2), 
            b.lineTo(e.lt[0], e.lt[1]), b.lineTo(e.lb[0], e.lb[1]), b.lineTo(e.rb[0], e.rb[1]), 
            b.lineTo(e.rt[0], e.rt[1]), b.lineTo(e.lt[0], e.lt[1]), b.lineTo(l.lt[0] - 2, l.lt[1] - 2), 
            b.closePath(), b.fill(), y({
                x: e.lt[0] + s,
                y: e.lt[1] + c
            }, {
                x: e.rt[0] - s,
                y: e.rt[1] + c
            }), y({
                x: e.lt[0] + s,
                y: e.lt[1] + 2 * c
            }, {
                x: e.rt[0] - s,
                y: e.rt[1] + 2 * c
            }), y({
                x: e.lt[0] + n,
                y: e.lt[1] + s
            }, {
                x: e.lb[0] + n,
                y: e.lb[1] - s
            }), y({
                x: e.lt[0] + 2 * n,
                y: e.lt[1] + s
            }, {
                x: e.lb[0] + 2 * n,
                y: e.lb[1] - s
            }), b.setGlobalAlpha(1);
        }
        if (h && "default" == a.pattern) switch (a.movePointName) {
          case "leftTop":
            g(r.topCenter.x, l.rt[1], l.rt[0] - r.topCenter.x, r.leftCenter.y - l.rt[1]), g(l.lb[0], r.leftCenter.y, l.rb[0] - l.lb[0], l.lb[1] - r.leftCenter.y);
            break;

          case "rightTop":
            g(l.lt[0], l.lt[1], r.topCenter.x - l.lt[0], r.rightCenter.y - l.rt[1]), g(l.lb[0], r.rightCenter.y, l.rb[0] - l.lb[0], l.lb[1] - r.rightCenter.y);
            break;

          case "leftBottom":
            g(l.lt[0], l.lt[1], l.rt[0] - l.lt[0], r.leftCenter.y - l.lt[1]), g(r.bottomCenter.x, r.leftCenter.y, l.rb[0] - r.bottomCenter.x, l.rb[1] - r.leftCenter.y);
            break;

          case "rightBottom":
            g(l.lt[0], l.lt[1], l.rt[0] - l.lt[0], r.rightCenter.y - l.lt[1]), g(l.lt[0], r.rightCenter.y, r.bottomCenter.x - l.lt[0], l.lb[1] - r.rightCenter.y);
        }
        if (x({
            x: e.lt[0],
            y: e.lt[1],
            shape: o,
            name: "lt"
        }), x({
            x: e.rt[0],
            y: e.rt[1],
            shape: o,
            name: "rt"
        }), x({
            x: e.lb[0],
            y: e.lb[1],
            shape: o,
            name: "lb"
        }), x({
            x: e.rb[0],
            y: e.rb[1],
            shape: o,
            name: "rb"
        }), x({
            x: e.lt[0] + (e.rt[0] - e.lt[0]) / 2,
            y: e.rt[1] + (e.lt[1] - e.rt[1]) / 2,
            shape: o,
            name: "tc"
        }), x({
            x: e.lb[0] + (e.rb[0] - e.lb[0]) / 2,
            y: e.rb[1] + (e.lb[1] - e.rb[1]) / 2,
            shape: o,
            name: "bc"
        }), x({
            x: e.lb[0] + (e.lt[0] - e.lb[0]) / 2,
            y: e.lb[1] + (e.lt[1] - e.lb[1]) / 2,
            shape: o,
            name: "lc"
        }), x({
            x: e.rb[0] + (e.rt[0] - e.rb[0]) / 2,
            y: e.rb[1] + (e.rt[1] - e.rb[1]) / 2,
            shape: o,
            name: "rc"
        }), "red" == a.style.line) {
            b.setGlobalAlpha(1), b.setFontSize(15), b.setFillStyle("red");
            try {
                b.setTextAlign("center"), b.fillText("所选区域无效", .5 * a.width, .96 * a.height);
            } catch (t) {
                b.fillText("所选区域无效", .4 * a.width, .96 * a.height);
            }
        }
        function x(t) {
            var e;
            "circle" == t.shape ? (e = t, b.beginPath(), b.arc(e.x, e.y, i, 0, 2 * Math.PI), 
            b.setFillStyle("#EEEEEE"), b.setGlobalAlpha(.5), b.fill(), b.beginPath(), b.setLineWidth(2), 
            b.arc(e.x, e.y, i - 1, 0, 2 * Math.PI), b.setStrokeStyle("#1aad19"), b.setGlobalAlpha(1), 
            b.stroke()) : function(t) {
                var e = {
                    l: 16,
                    w: 6
                };
                switch (b.setFillStyle(a.style.line), t.name) {
                  case "lt":
                    b.fillRect(t.x - e.w / 2, t.y - e.w / 2, e.l, e.w), b.fillRect(t.x - e.w / 2, t.y - e.w / 2, e.w, e.l);
                    break;

                  case "rt":
                    b.fillRect(t.x + e.w / 2 - e.l, t.y - e.w / 2, e.l, e.w), b.fillRect(t.x + e.w / 2 - e.w, t.y - e.w / 2, e.w, e.l);
                    break;

                  case "lb":
                    b.fillRect(t.x - e.w / 2, t.y + e.w / 2 - e.w, e.l, e.w), b.fillRect(t.x - e.w / 2, t.y + e.w / 2 - e.l, e.w, e.l);
                    break;

                  case "rb":
                    b.fillRect(t.x + e.w / 2 - e.l, t.y + e.w / 2 - e.w, e.l, e.w), b.fillRect(t.x + e.w / 2 - e.w, t.y + e.w / 2 - e.l, e.w, e.l);
                    break;

                  case "tc":
                    b.fillRect(t.x - e.l, t.y - e.w / 2, 2 * e.l, e.w);
                    break;

                  case "lc":
                    b.fillRect(t.x - e.w / 2, t.y - e.l, e.w, 2 * e.l);
                    break;

                  case "rc":
                    b.fillRect(t.x + e.w / 2 - e.w, t.y - e.l, e.w, 2 * e.l);
                    break;

                  case "bc":
                    b.fillRect(t.x - e.l, t.y + e.w / 2 - e.w, 2 * e.l, e.w);
                }
            }(t);
        }
        function g(t, a, e, i) {
            b.setFillStyle("#303030"), b.setGlobalAlpha(.6), b.fillRect(t, a, e, i);
        }
        function y(t, a) {
            b.setGlobalAlpha(.6), b.beginPath(), b.moveTo(t.x, t.y), b.lineTo(a.x, a.y), b.closePath(), 
            b.stroke();
        }
        b.draw();
    }, this.canvasImage = function() {
        var a = t.data.cropCanvas, i = t.data.cropCanvas.cropData, r = a.imageCanvasCoor, l = 0, o = 0, h = a.scale, n = t.data.cropCanvas.circleRadius * h, c = {
            x: 0,
            y: 0
        };
        t.centerPointCoorMark, t.initCropData;
        switch (a.movePointName) {
          case "leftTop":
            x("lt"), function() {
                switch (e) {
                  case 0:
                    c.x = a.widthSmall / 2, c.y = a.widthSmall / 2;
                    break;

                  case 1:
                    c.x = a.widthSmall / 2 + a.image.height * h, c.y = a.widthSmall / 2;
                    break;

                  case 2:
                    c.x = a.widthSmall / 2 + a.image.width * h, c.y = a.widthSmall / 2 + a.image.height * h;
                    break;

                  case 3:
                    c.x = a.widthSmall / 2, c.y = a.widthSmall / 2 + a.image.width * h;
                }
            }();
            break;

          case "rightTop":
            x("rt"), function() {
                switch (e) {
                  case 0:
                    c.x = a.widthSmall / 2 - a.image.width * h, c.y = a.widthSmall / 2;
                    break;

                  case 1:
                    c.x = a.widthSmall / 2, c.y = a.widthSmall / 2;
                    break;

                  case 2:
                    c.x = a.widthSmall / 2, c.y = a.widthSmall / 2 + a.image.height * h;
                    break;

                  case 3:
                    c.x = a.widthSmall / 2 - a.image.height * h, c.y = a.widthSmall / 2 + a.image.width * h;
                }
            }();
            break;

          case "leftBottom":
            x("lb"), function() {
                switch (e) {
                  case 0:
                    c.x = a.widthSmall / 2, c.y = a.widthSmall / 2 - a.image.height * h;
                    break;

                  case 1:
                    c.x = a.widthSmall / 2 + a.image.height * h, c.y = a.widthSmall / 2 - a.image.width * h;
                    break;

                  case 2:
                    c.x = a.widthSmall / 2 + a.image.width * h, c.y = a.widthSmall / 2;
                    break;

                  case 3:
                    c.x = a.widthSmall / 2, c.y = a.widthSmall / 2;
                }
            }();
            break;

          case "rightBottom":
            x("rb"), function() {
                switch (e) {
                  case 0:
                    c.x = a.widthSmall / 2 - a.image.width * h, c.y = a.widthSmall / 2 - a.image.height * h;
                    break;

                  case 1:
                    c.x = a.widthSmall / 2, c.y = a.widthSmall / 2 - a.image.width * h;
                    break;

                  case 2:
                    c.x = a.widthSmall / 2, c.y = a.widthSmall / 2;
                    break;

                  case 3:
                    c.x = a.widthSmall / 2 - a.image.height * h, c.y = a.widthSmall / 2;
                }
            }();
        }
        var s = wx.createCanvasContext(a.idSmall);
        function b(t) {
            s.beginPath(), s.arc(t.x, t.y, n, 0, 2 * Math.PI), s.setFillStyle("#EEEEEE"), s.setGlobalAlpha(.5), 
            s.fill(), s.beginPath(), s.setLineWidth(2), s.arc(t.x, t.y, n - 1, 0, 2 * Math.PI), 
            s.setStrokeStyle("#1aad19"), s.setGlobalAlpha(1), s.stroke();
        }
        function x(t) {
            l = i[t][0] - a.widthSmall / 2, o = i[t][1] - a.widthSmall / 2;
        }
        s.clearRect(0, 0, a.widthSmall, a.heightSmall), s.setGlobalAlpha(1), s.setFillStyle("black"), 
        s.setLineWidth(2 * h), s.fillRect(0, 0, a.widthSmall, a.heightSmall), t.downloadImageSrc && (s.translate(c.x, c.y), 
        s.rotate(t.options.rotate * Math.PI / 180), s.drawImage(t.downloadImageSrc, r.x * h, r.y * h, a.image.width * h, a.image.height * h), 
        s.rotate(-t.options.rotate * Math.PI / 180), s.translate(-c.x, -c.y)), s.beginPath(), 
        s.setStrokeStyle(a.style.line), s.setLineWidth(1.5 * h), s.moveTo(i.lt[0] - l, i.lt[1] - o), 
        s.lineTo(i.rt[0] - l, i.rt[1] - o), s.lineTo(i.rb[0] - l, i.rb[1] - o), s.lineTo(i.lb[0] - l, i.lb[1] - o), 
        s.lineTo(i.lt[0] - l, i.lt[1] - o), s.closePath(), s.stroke(), b({
            x: i.lt[0] - l,
            y: i.lt[1] - o
        }), b({
            x: i.rt[0] - l,
            y: i.rt[1] - o
        }), b({
            x: i.lb[0] - l,
            y: i.lb[1] - o
        }), b({
            x: i.rb[0] - l,
            y: i.rb[1] - o
        }), b({
            x: i.lt[0] + (i.rt[0] - i.lt[0]) / 2 - l,
            y: i.rt[1] + (i.lt[1] - i.rt[1]) / 2 - o
        }), b({
            x: i.lb[0] + (i.rb[0] - i.lb[0]) / 2 - l,
            y: i.rb[1] + (i.lb[1] - i.rb[1]) / 2 - o
        }), b({
            x: i.lb[0] + (i.lt[0] - i.lb[0]) / 2 - l,
            y: i.lb[1] + (i.lt[1] - i.lb[1]) / 2 - o
        }), b({
            x: i.rb[0] + (i.rt[0] - i.rb[0]) / 2 - l,
            y: i.rb[1] + (i.rt[1] - i.rb[1]) / 2 - o
        }), s.setLineWidth(2), s.setStrokeStyle("white"), s.strokeRect(0, 0, a.widthSmall, a.heightSmall), 
        s.draw();
    }, this.cropCanvasLogo = function() {
        var a = this.data.cropCanvas, e = (this.initCropData, {
            x: -a.image.width / 2,
            y: -a.image.height / 2
        }), i = {
            x: a.width / 2,
            y: a.height / 2
        }, r = wx.createCanvasContext(a.cropCanvasLogo);
        r.clearRect(0, 0, a.width, a.height), r.setGlobalAlpha(1), t.downloadImageSrc && (r.translate(i.x, i.y), 
        r.rotate(t.options.rotate * Math.PI / 180), r.drawImage(t.downloadImageSrc, e.x, e.y, a.image.width, a.image.height), 
        r.rotate(-t.options.rotate * Math.PI / 180), r.translate(-i.x, -i.y)), r.draw();
    }, this.generateImages = function(t) {
        this.data.cropCanvas;
        var a = this.data.cropCanvas.cropData;
        wx.canvasToTempFilePath({
            x: a.lt[0] + 2,
            y: a.lt[1] + 2,
            width: a.rt[0] - a.lt[0] - 4,
            height: a.lb[1] - a.lt[1] - 4,
            canvasId: "cropCanvasLogo",
            success: function(a) {
                t && t(a.tempFilePath);
            },
            fail: function() {
                t && t("fail");
            }
        });
    }, this.centerPointCoorMark = {
        topCenter: {},
        bottomCenter: {},
        leftCenter: {},
        rightCenter: {}
    }, this.touchStart = function(i) {
        var r = t.data.cropCanvas, l = t.data.cropCanvas.cropData, o = t.data.cropCanvas.circleRadius, n = t.data.cropCanvas.centerPointCoor, c = {
            x: i.touches[0].x,
            y: i.touches[0].y
        }, s = 0, b = 0, x = t.data.cropCanvas.imageCanvasCoor, g = t.initCropData, y = t.initImageCanvasCoor;
        if (t.data.start = {
            x: i.touches[0].x,
            y: i.touches[0].y
        }, t.data.cropCanvas.movePointName = !1, h = !0, !l.lt[0]) return 0;
        function d(t, a, e, i) {
            var r = (a.y - t.y) * (i.x - e.x) - (t.x - a.x) * (e.y - i.y);
            return 0 == r ? {
                x: 0,
                y: 0
            } : {
                x: ((a.x - t.x) * (i.x - e.x) * (e.y - t.y) + (a.y - t.y) * (i.x - e.x) * t.x - (i.y - e.y) * (a.x - t.x) * e.x) / r,
                y: -((a.y - t.y) * (i.y - e.y) * (e.x - t.x) + (a.x - t.x) * (i.y - e.y) * t.y - (i.x - e.x) * (a.y - t.y) * e.y) / r
            };
        }
        function m(t, a) {
            var e, i, r, l, o = 0, h = a.length;
            for (r = a[0], e = 1; e <= h; e++) l = a[e % h], t[0] > Math.min(r[0], l[0]) && t[0] <= Math.max(r[0], l[0]) && t[1] <= Math.max(r[1], l[1]) && r[0] != l[0] && (i = (t[0] - r[0]) * (l[1] - r[1]) / (l[0] - r[0]) + r[1], 
            (r[1] == l[1] || t[1] <= i) && o++), r = l;
            return o % 2 != 0;
        }
        function w(a) {
            switch (s = l[a][0] - g[a][0], b = l[a][1] - g[a][1], e) {
              case 0:
                x.x = y[a].x - s, x.y = y[a].y - b;
                break;

              case 1:
                x.y = y[a].y + s, x.x = y[a].x - b;
                break;

              case 2:
                x.x = y[a].x + s, x.y = y[a].y + b;
                break;

              case 3:
                x.x = y[a].x + b, x.y = y[a].y - s;
            }
            t.data.cropCanvas.imageCanvasCoor = x;
        }
        function p() {
            t.options.rotate % 180 == 0 ? a.setData({
                canvasPosition: {
                    left: .5 * r.width - .5 * r.widthSmall,
                    top: t.initCropData.lt[1] - .5 * r.heightSmall,
                    bottom: t.initCropData.lb[1] + .5 * r.heightSmall + 54,
                    show: !0
                }
            }) : a.setData({
                canvasPosition: {
                    left: .5 * r.width - .5 * r.widthSmall,
                    top: t.initCropData.lt[1] - .2 * r.heightSmall,
                    bottom: t.initCropData.lb[1] + .5 * r.heightSmall + 54,
                    show: !0
                }
            });
        }
        !function() {
            var a = {
                left: {
                    x: 0,
                    y: 0
                },
                right: {
                    x: 0,
                    y: 0
                },
                top: {
                    x: 0,
                    y: 0
                },
                bottom: {
                    x: 0,
                    y: 0
                }
            }, e = {
                x: l.lt[0] + (l.rt[0] - l.lt[0]) / 2,
                y: l.rt[1] + (l.lt[1] - l.rt[1]) / 2
            }, i = {
                x: l.lb[0] + (l.rb[0] - l.lb[0]) / 2,
                y: l.rb[1] + (l.lb[1] - l.rb[1]) / 2
            }, h = {
                x: l.lb[0] + (l.lt[0] - l.lb[0]) / 2,
                y: l.lb[1] + (l.lt[1] - l.lb[1]) / 2
            }, s = {
                x: l.rb[0] + (l.rt[0] - l.rb[0]) / 2,
                y: l.rb[1] + (l.rt[1] - l.rb[1]) / 2
            };
            if (n[0] = (s.x - h.x) / 2 + h.x, n[1] = (i.y - e.y) / 2 + e.y, t.centerPointCoorMark = {
                topCenter: e,
                bottomCenter: i,
                leftCenter: h,
                rightCenter: s
            }, Math.pow(e.x - c.x, 2) + Math.pow(e.y - c.y, 2) <= Math.pow(o, 2)) return t.data.cropCanvas.movePointName = "topCenter", 
            0;
            if (Math.pow(i.x - c.x, 2) + Math.pow(i.y - c.y, 2) <= Math.pow(o, 2)) return t.data.cropCanvas.movePointName = "bottomCenter", 
            0;
            if (Math.pow(h.x - c.x, 2) + Math.pow(h.y - c.y, 2) <= Math.pow(o, 2)) return t.data.cropCanvas.movePointName = "leftCenter", 
            0;
            if (Math.pow(s.x - c.x, 2) + Math.pow(s.y - c.y, 2) <= Math.pow(o, 2)) return t.data.cropCanvas.movePointName = "rightCenter", 
            0;
            if ("default" == r.pattern) {
                a.left = d({
                    x: 0,
                    y: 0
                }, {
                    x: 0,
                    y: 100
                }, {
                    x: n[0],
                    y: n[1]
                }, {
                    x: h.x,
                    y: h.y
                }), a.top = d({
                    x: 0,
                    y: 0
                }, {
                    x: 100,
                    y: 0
                }, {
                    x: n[0],
                    y: n[1]
                }, {
                    x: e.x,
                    y: e.y
                }), a.right = d({
                    x: r.width,
                    y: 0
                }, {
                    x: r.width,
                    y: 100
                }, {
                    x: n[0],
                    y: n[1]
                }, {
                    x: s.x,
                    y: s.y
                }), a.bottom = d({
                    x: 0,
                    y: r.height
                }, {
                    x: 100,
                    y: r.height
                }, {
                    x: n[0],
                    y: n[1]
                }, {
                    x: i.x,
                    y: i.y
                });
                return m([ c.x, c.y ], [ [ 0, 0 ], [ a.top.x, a.top.y ], [ n[0], n[1] ], [ a.left.x, a.left.y ] ]) ? (t.data.cropCanvas.movePointName = "leftTop", 
                w("lt"), p(), 0) : m([ c.x, c.y ], [ [ a.top.x, a.top.y ], [ r.width, 0 ], [ a.right.x, a.right.y ], [ n[0], n[1] ] ]) ? (t.data.cropCanvas.movePointName = "rightTop", 
                w("rt"), p(), 0) : m([ c.x, c.y ], [ [ a.left.x, a.left.y ], [ n[0], n[1] ], [ a.bottom.x, a.bottom.y ], [ 0, r.height ] ]) ? (t.data.cropCanvas.movePointName = "leftBottom", 
                w("lb"), p(), 0) : m([ c.x, c.y ], [ [ a.bottom.x, a.bottom.y ], [ n[0], n[1] ], [ a.right.x, a.right.y ], [ r.width, r.height ] ]) ? (t.data.cropCanvas.movePointName = "rightBottom", 
                w("rb"), p(), 0) : 0;
            }
            if (Math.pow(l.lt[0] - c.x, 2) + Math.pow(l.lt[1] - c.y, 2) <= Math.pow(o, 2)) return t.data.cropCanvas.movePointName = "leftTop", 
            0;
            if (Math.pow(l.rt[0] - c.x, 2) + Math.pow(l.rt[1] - c.y, 2) <= Math.pow(o, 2)) return t.data.cropCanvas.movePointName = "rightTop", 
            0;
            if (Math.pow(l.lb[0] - c.x, 2) + Math.pow(l.lb[1] - c.y, 2) <= Math.pow(o, 2)) return t.data.cropCanvas.movePointName = "leftBottom", 
            0;
            if (Math.pow(l.rb[0] - c.x, 2) + Math.pow(l.rb[1] - c.y, 2) <= Math.pow(o, 2)) return t.data.cropCanvas.movePointName = "rightBottom", 
            0;
            c.x >= l.lt[0] && c.x <= l.rt[0] && c.y >= l.lt[1] && c.y <= l.lb[1] ? t.data.cropCanvas.movePointName = "inside" : t.data.cropCanvas.movePointName = "outside";
        }(), t.canvas(), "default" == r.pattern && t.canvasImage();
    }, this.touchMove = function(a) {
        var i = t.data.start, r = a.touches[0].x, l = a.touches[0].y, o = t.data.cropCanvas, h = (t.data.canvasPosition, 
        t.data.cropCanvas.cropData), n = o.imageCanvasCoor, c = r - i.x, s = l - i.y, b = t.initCropData, x = (t.initImageCanvasCoor, 
        t.centerPointCoorMark);
        if (!h.lt[0]) return 0;
        function g(t) {
            if ("0" == t) switch (e) {
              case 0:
                n.x = n.x - c;
                break;

              case 1:
                n.y = n.y + c;
                break;

              case 2:
                n.x = n.x + c;
                break;

              case 3:
                n.y = n.y - c;
            } else switch (e) {
              case 0:
                n.y = n.y - s;
                break;

              case 1:
                n.x = n.x - s;
                break;

              case 2:
                n.y = n.y + s;
                break;

              case 3:
                n.x = n.x + s;
            }
        }
        "default" == o.pattern ? function() {
            switch (o.movePointName) {
              case "leftTop":
                h.lt[0] + c >= b.lt[0] && h.lt[0] + c <= x.topCenter.x && (h.lt[0] = h.lt[0] + c, 
                g("0")), h.lt[1] + s >= b.lt[1] && h.lt[1] + s <= x.leftCenter.y && (h.lt[1] = h.lt[1] + s, 
                g("1"));
                break;

              case "rightTop":
                h.rt[0] + c >= x.topCenter.x && h.rt[0] + c <= b.rt[0] && (h.rt[0] = h.rt[0] + c, 
                g("0")), h.rt[1] + s >= b.rt[1] && h.rt[1] + s <= x.rightCenter.y && (h.rt[1] = h.rt[1] + s, 
                g("1"));
                break;

              case "leftBottom":
                h.lb[0] + c >= b.lb[0] && h.lb[0] + c <= x.bottomCenter.x && (h.lb[0] = h.lb[0] + c, 
                g("0")), h.lb[1] + s >= x.leftCenter.y && h.lb[1] + s <= b.lb[1] && (h.lb[1] = h.lb[1] + s, 
                g("1"));
                break;

              case "rightBottom":
                h.rb[0] + c >= x.bottomCenter.x && h.rb[0] + c <= b.rt[0] && (h.rb[0] = h.rb[0] + c, 
                g("0")), h.rb[1] + s >= x.rightCenter.y && h.rb[1] + s <= b.lb[1] && (h.rb[1] = h.rb[1] + s, 
                g("1"));
                break;

              case "topCenter":
                h.lt[1] + s >= b.lt[1] && h.lt[1] + s <= x.leftCenter.y && (h.lt[1] = h.lt[1] + s, 
                n.y = n.y - s), h.rt[1] + s >= b.rt[1] && h.rt[1] + s <= x.rightCenter.y && (h.rt[1] = h.rt[1] + s, 
                n.y = n.y - s);
                break;

              case "bottomCenter":
                h.lb[1] + s >= x.leftCenter.y && h.lb[1] + s <= b.lb[1] && (h.lb[1] = h.lb[1] + s, 
                n.y = n.y - s), h.rb[1] + s >= x.rightCenter.y && h.rb[1] + s <= b.rb[1] && (h.rb[1] = h.rb[1] + s, 
                n.y = n.y - s);
                break;

              case "leftCenter":
                h.lt[0] + c >= b.lt[0] && h.lt[0] + c <= x.topCenter.x && (h.lt[0] = h.lt[0] + c, 
                n.x = n.x - c), h.lb[0] + c >= b.lb[0] && h.lb[0] + c <= x.bottomCenter.x && (h.lb[0] = h.lb[0] + c, 
                n.x = n.x - c);
                break;

              case "rightCenter":
                h.rt[0] + c >= x.topCenter.x && h.rt[0] + c <= b.rt[0] && (h.rt[0] = h.rt[0] + c, 
                n.x = n.x - c), h.rb[0] + c >= x.bottomCenter.x && h.rb[0] + c <= b.rt[0] && (h.rb[0] = h.rb[0] + c, 
                n.x = n.x - c);
            }
        }() : function() {
            switch (o.movePointName) {
              case "leftTop":
                h.lt[0] + c >= b.lt[0] && h.lt[0] + c <= b.rt[0] && (h.rt[0] - c - h.lt[0] <= 80 && c >= 0 || (h.lt[0] = h.lt[0] + c, 
                h.lb[0] = h.lb[0] + c)), h.lt[1] + s >= b.lt[1] && h.lt[1] + s <= b.lb[1] && (h.lb[1] - s - h.lt[1] <= 80 && s >= 0 || (h.lt[1] = h.lt[1] + s, 
                h.rt[1] = h.rt[1] + s));
                break;

              case "rightTop":
                h.rt[0] + c >= b.lt[0] && h.rt[0] + c <= b.rt[0] && (h.rt[0] + c - h.lt[0] <= 80 && c <= 0 || (h.rt[0] = h.rt[0] + c, 
                h.rb[0] = h.rb[0] + c)), h.rt[1] + s >= b.lt[1] && h.rt[1] + s <= b.lb[1] && (h.rb[1] - h.rt[1] - s <= 80 && s >= 0 || (h.rt[1] = h.rt[1] + s, 
                h.lt[1] = h.lt[1] + s));
                break;

              case "leftBottom":
                h.lb[0] + c >= b.lt[0] && h.lb[0] + c <= b.rt[0] && (h.rb[0] - c - h.lb[0] <= 80 && c >= 0 || (h.lb[0] = h.lb[0] + c, 
                h.lt[0] = h.lt[0] + c)), h.lb[1] + s >= b.lt[1] && h.lb[1] + s <= b.lb[1] && (h.lb[1] - h.lt[1] + s <= 80 && s <= 0 || (h.lb[1] = h.lb[1] + s, 
                h.rb[1] = h.rb[1] + s));
                break;

              case "rightBottom":
                h.rb[0] + c >= b.lt[0] && h.rb[0] + c <= b.rt[0] && (h.rb[0] + c - h.lb[0] <= 80 && c <= 0 || (h.rb[0] = h.rb[0] + c, 
                h.rt[0] = h.rt[0] + c)), h.rb[1] + s >= b.lt[1] && h.rb[1] + s <= b.lb[1] && (h.rb[1] - h.rt[1] + s <= 80 && s <= 0 || (h.rb[1] = h.rb[1] + s, 
                h.lb[1] = h.lb[1] + s));
                break;

              case "topCenter":
                h.lb[1] - h.lt[1] - s <= 80 && s >= 0 || (h.lt[1] + s >= b.lt[1] && h.lt[1] + s <= b.lb[1] && (h.lt[1] = h.lt[1] + s), 
                h.rt[1] + s >= b.lt[1] && h.rt[1] + s <= b.lb[1] && (h.rt[1] = h.rt[1] + s));
                break;

              case "bottomCenter":
                h.lb[1] - h.lt[1] + s <= 80 && s <= 0 || (h.lb[1] + s >= b.lt[1] && h.lb[1] + s <= b.lb[1] && (h.lb[1] = h.lb[1] + s), 
                h.rb[1] + s >= b.lt[1] && h.rb[1] + s <= b.lb[1] && (h.rb[1] = h.rb[1] + s));
                break;

              case "leftCenter":
                h.rt[0] - h.lt[0] - c <= 80 && c >= 0 || (h.lt[0] + c >= b.lt[0] && h.lt[0] + c <= b.rt[0] && (h.lt[0] = h.lt[0] + c), 
                h.lb[0] + c >= b.lt[0] && h.lb[0] + c <= b.rt[0] && (h.lb[0] = h.lb[0] + c));
                break;

              case "rightCenter":
                h.rt[0] - h.lt[0] + c <= 80 && c <= 0 || (h.rt[0] + c >= b.lt[0] && h.rt[0] + c <= b.rt[0] && (h.rt[0] = h.rt[0] + c), 
                h.rb[0] + c >= b.lt[0] && h.rb[0] + c <= b.rt[0] && (h.rb[0] = h.rb[0] + c));
                break;

              case "inside":
                (c > 0 && h.rt[0] + c < b.rt[0] || c < 0 && h.lt[0] + c > b.lt[0]) && (h.lt[0] = h.lt[0] + c, 
                h.rt[0] = h.rt[0] + c, h.lb[0] = h.lb[0] + c, h.rb[0] = h.rb[0] + c), (s > 0 && h.rb[1] + s < b.lb[1] || s < 0 && h.lt[1] + s > b.lt[1]) && (h.lt[1] = h.lt[1] + s, 
                h.rt[1] = h.rt[1] + s, h.lb[1] = h.lb[1] + s, h.rb[1] = h.rb[1] + s);
            }
        }(), t.data.start = {
            x: a.touches[0].x,
            y: a.touches[0].y
        }, t.data.cropCanvas.cropData = h, t.canvas(), "default" == o.pattern && t.canvasImage();
    }, this.touchEnd = function(e) {
        var i = t.data.cropCanvas.cropData, r = t.data.cropCanvas;
        if (h = !1, !i.lt[0]) return 0;
        function l(t, a, e, i, r, l, o, h) {
            var n = (l - h) * (e - o) + (o - r) * (i - h), c = ((l - h) * (t - o) + (o - r) * (a - h)) / n, s = ((h - i) * (t - o) + (e - o) * (a - h)) / n, b = 1 - c - s;
            return c >= 0 && c <= 1 && s >= 0 && s <= 1 && b >= 0 && b <= 1;
        }
        "default" == r.pattern && (t.data.cropCanvas.style.line = "#1aad19", a.setData({
            "canvasPosition.show": !1
        }), function() {
            var a = l(i.lt[0], i.lt[1], i.lb[0], i.lb[1], i.rt[0], i.rt[1], i.rb[0], i.rb[1]), e = l(i.rt[0], i.rt[1], i.lt[0], i.lt[1], i.lb[0], i.lb[1], i.rb[0], i.rb[1]), r = l(i.lb[0], i.lb[1], i.lt[0], i.lt[1], i.rt[0], i.rt[1], i.rb[0], i.rb[1]), o = l(i.rb[0], i.rb[1], i.lt[0], i.lt[1], i.lb[0], i.lb[1], i.rt[0], i.rt[1]);
            (a || e || r || o) && (t.data.cropCanvas.style.line = "red");
            t.canvas();
        }());
    }, this.rotate = function() {
        t.options.rotate += 90, r = "forwards", t.rotateFunc();
    }, this.rotateFunc = function() {
        clearTimeout(i);
        var r = this.data.cropCanvas;
        a.setData({
            "cropCanvas.canvas": !1
        }), e = t.options.rotate / 90 % 4 < 0 ? t.options.rotate / 90 % 4 + 4 : t.options.rotate / 90 % 4, 
        t.animationFunc(), "rectangle" == r.pattern && t.renderImageData(), t.initExc(), 
        t.coorExchange(), i = setTimeout(function() {
            t.canvas(), "default" == r.pattern ? t.canvasImage() : t.cropCanvasLogo(), a.setData({
                "cropCanvas.canvas": !0
            });
        }, 400);
    }, this.rotateF = function() {
        t.options.rotate -= 90, r = "negative", t.rotateFunc();
    }, this.complete = function() {
        var a = t.data.cropCanvas, e = (t.initCropData, t.data.cropCanvas.cropData), i = [ e.lt[0], e.lt[1] ], r = [ e.lb[0], e.lb[1] ], h = [ e.rt[0], e.rt[1] ], n = [ e.rb[0], e.rb[1] ], c = {}, s = t.options.rotate % 360;
        switch (s < 0 && (s += 360), s) {
          case 0:
            c = b();
            break;

          case 90:
            c = x();
            break;

          case 180:
            c = g();
            break;

          case 270:
          case -90:
            c = y();
            break;

          case -180:
            c = g();
            break;

          case -270:
            c = x();
            break;

          default:
            c = b();
        }
        return {
            datf: {
                zuoshang: [ (c.lt[0] - o[0]) / l[0] + 2, (c.lt[1] - o[1]) / l[1] + 2 ],
                zuoxia: [ (c.lb[0] - o[0]) / l[0] + 2, (c.lb[1] - o[1]) / l[1] - 2 ],
                youshang: [ (c.rt[0] - o[0]) / l[0] - 2, (c.rt[1] - o[1]) / l[1] + 2 ],
                youxia: [ (c.rb[0] - o[0]) / l[0] - 2, (c.rb[1] - o[1]) / l[1] - 2 ]
            },
            rotate: s,
            cutImage: t.options.cutImage
        };
        function b() {
            return {
                lt: i,
                lb: r,
                rt: h,
                rb: n
            };
        }
        function x() {
            return i = t.nExc({
                x: .5 * a.width,
                y: .5 * a.height
            }, {
                x: i[0],
                y: i[1]
            }, -90 * Math.PI / 180), h = t.nExc({
                x: .5 * a.width,
                y: .5 * a.height
            }, {
                x: h[0],
                y: h[1]
            }, -90 * Math.PI / 180), r = t.nExc({
                x: .5 * a.width,
                y: .5 * a.height
            }, {
                x: r[0],
                y: r[1]
            }, -90 * Math.PI / 180), n = t.nExc({
                x: .5 * a.width,
                y: .5 * a.height
            }, {
                x: n[0],
                y: n[1]
            }, -90 * Math.PI / 180), {
                lt: [ h.x, h.y ],
                rt: [ n.x, n.y ],
                lb: [ i.x, i.y ],
                rb: [ r.x, r.y ]
            };
        }
        function g() {
            return i = t.nExc({
                x: .5 * a.width,
                y: .5 * a.height
            }, {
                x: i[0],
                y: i[1]
            }, 180 * Math.PI / 180), h = t.nExc({
                x: .5 * a.width,
                y: .5 * a.height
            }, {
                x: h[0],
                y: h[1]
            }, 180 * Math.PI / 180), r = t.nExc({
                x: .5 * a.width,
                y: .5 * a.height
            }, {
                x: r[0],
                y: r[1]
            }, 180 * Math.PI / 180), {
                lt: [ (n = t.nExc({
                    x: .5 * a.width,
                    y: .5 * a.height
                }, {
                    x: n[0],
                    y: n[1]
                }, 180 * Math.PI / 180)).x, n.y ],
                rt: [ r.x, r.y ],
                lb: [ h.x, h.y ],
                rb: [ i.x, i.y ]
            };
        }
        function y() {
            return i = t.nExc({
                x: .5 * a.width,
                y: .5 * a.height
            }, {
                x: i[0],
                y: i[1]
            }, 90 * Math.PI / 180), h = t.nExc({
                x: .5 * a.width,
                y: .5 * a.height
            }, {
                x: h[0],
                y: h[1]
            }, 90 * Math.PI / 180), r = t.nExc({
                x: .5 * a.width,
                y: .5 * a.height
            }, {
                x: r[0],
                y: r[1]
            }, 90 * Math.PI / 180), n = t.nExc({
                x: .5 * a.width,
                y: .5 * a.height
            }, {
                x: n[0],
                y: n[1]
            }, 90 * Math.PI / 180), {
                lt: [ r.x, r.y ],
                rt: [ i.x, i.y ],
                lb: [ n.x, n.y ],
                rb: [ h.x, h.y ]
            };
        }
    };
};