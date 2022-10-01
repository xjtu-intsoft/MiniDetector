var t = function() {
    function t(t, e) {
        var a = [], o = !0, i = !1, n = void 0;
        try {
            for (var s, r = t[Symbol.iterator](); !(o = (s = r.next()).done) && (a.push(s.value), 
            !e || a.length !== e); o = !0) ;
        } catch (t) {
            i = !0, n = t;
        } finally {
            try {
                !o && r.return && r.return();
            } finally {
                if (i) throw n;
            }
        }
        return a;
    }
    return function(e, a) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return t(e, a);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), e = require("../../utils/util.js"), a = require("../../utils/event.js"), o = require("../../gif/gifDecode/gif.js"), i = require("../../gif/gifEncode/GIFEncoder.js"), n = "background: -webkit-gradient(linear, left top, right bottom, from(#D73674), to(#6834A0));", s = "background: rgba(39,41,53,1);", r = 320, l = 1;

wx.getSystemInfo({
    success: function(t) {
        r = t.screenWidth, l = r / 375;
    }
});

var c = getApp().globalData, d = wx.createCanvasContext("imageCanvas"), u = 0, h = null;

Page({
    data: {
        animation: !1,
        movableX: 0,
        movableY: 0,
        movableWidth: 64,
        movableHeight: 29,
        inputHeight: 34,
        inputTextSize: 26,
        inputWidth: 120,
        inputFocus: !0,
        inputText: "",
        canvasWidth: -1,
        canvasHeight: -1,
        imageShowWidth: -1,
        imageShowHeight: -1,
        showTextSize: 16,
        showText: "点击此处编辑",
        showTextWidth: 172,
        textCanvasData: null,
        fontSizeDataIndex: 1,
        fontSizeData: [ {
            size: "",
            text: "小",
            selected: !1,
            style: s,
            lineHeight: 20,
            textAmount: 12
        }, {
            size: "",
            text: "中",
            selected: !0,
            style: n,
            lineHeight: 28,
            textAmount: 9
        }, {
            size: "",
            text: "大",
            selected: !1,
            style: s,
            lineHeight: 34,
            textAmount: 6
        } ],
        backgroundData: [ {
            selected: !0,
            bgColor: "",
            style: n,
            background: ""
        }, {
            selected: !1,
            bgColor: "#fff",
            style: "background: #787880",
            background: "background: #fff"
        }, {
            selected: !1,
            bgColor: "#000",
            style: "background: #787880",
            background: "background: #000"
        } ],
        fontColorData: [ {
            text: "1",
            selected: !0,
            style: n,
            textColorStyle: "-webkit-text-fill-color: 4rpx #FFFFFF; -webkit-text-stroke: 2rpx #000000",
            innerColor: "#FFFFFF",
            strokeColor: "#000000"
        }, {
            text: "2",
            selected: !1,
            style: s,
            textColorStyle: "-webkit-text-fill-color: 4rpx #000000; -webkit-text-stroke: 2rpx #FFFFFF",
            innerColor: "#000000",
            strokeColor: "#FFFFFF"
        }, {
            text: "3",
            selected: !1,
            style: s,
            textColorStyle: "-webkit-text-fill-color: 4rpx #E82640; -webkit-text-stroke: 2rpx #FFFFFF",
            innerColor: "#E82640",
            strokeColor: "#FFFFFF"
        }, {
            text: "4",
            selected: !1,
            style: s,
            textColorStyle: "-webkit-text-fill-color: 4rpx #FFE536; -webkit-text-stroke: 2rpx #E82640",
            innerColor: "#FFE536",
            strokeColor: "#E82640"
        }, {
            text: "5",
            selected: !1,
            style: s,
            textColorStyle: "-webkit-text-fill-color: 4rpx #A8F3FE; -webkit-text-stroke: 2rpx #0064ED",
            innerColor: "#A8F3FE",
            strokeColor: "#0064ED"
        }, {
            text: "6",
            selected: !1,
            style: s,
            textColorStyle: "-webkit-text-fill-color: 4rpx #FADC05; -webkit-text-stroke: 2rpx #000000",
            innerColor: "#FADC05",
            strokeColor: "#000000"
        }, {
            text: "7",
            selected: !1,
            style: s,
            textColorStyle: "-webkit-text-fill-color: 4rpx #FFFFFF; -webkit-text-stroke: 2rpx #F95993",
            innerColor: "#FFFFFF",
            strokeColor: "#F95993"
        }, {
            text: "8",
            selected: !1,
            style: s,
            textColorStyle: "-webkit-text-fill-color: 4rpx #000000; -webkit-text-stroke: 2rpx #63F3BD",
            innerColor: "#000000",
            strokeColor: "#63F3BD"
        }, {
            text: "9",
            selected: !1,
            style: s,
            textColorStyle: "-webkit-text-fill-color: 4rpx #51CDFB; -webkit-text-stroke: 2rpx #000000",
            innerColor: "#51CDFB",
            strokeColor: "#000000"
        }, {
            text: "10",
            selected: !1,
            style: s,
            textColorStyle: "-webkit-text-fill-color: 4rpx #FFA0DE; -webkit-text-stroke: 2rpx #FB1284",
            innerColor: "#FFA0DE",
            strokeColor: "#FB1284"
        } ],
        selectedBackground: {
            selected: !0,
            bgColor: "",
            style: n,
            background: ""
        },
        selectedFontColor: {
            text: "1",
            selected: !0,
            style: n,
            textColorStyle: "-webkit-text-fill-color: 4rpx #FFFFFF; -webkit-text-stroke: 2rpx #000000",
            innerColor: "#FFFFFF",
            strokeColor: "#000000"
        },
        url: "",
        stillTempPath: "",
        fontColor: "#fff",
        expandBg: 4,
        needShowUserAgreement: !1,
        isDelay: !1,
        isGif: !1,
        isLoadPage: !0,
        hasSendImage: !0,
        urlType: "",
        isHidden: !0,
        previewImageArr: []
    },
    onLoad: function(t) {
        var a = this.data;
        if (e.pageFun.isReverseCanvas(), t.image_url) a.urlType = 3, this.analysisPic(e.toolFuns.imgToshort(t.image_url)); else {
            a.urlType = 1;
            var o = c.userInfo;
            e.verify.isFullObject(o) ? this.setImgData(c.userInfo.avatarUrl) : this.setData({
                hasSendImage: !1
            });
        }
        wx.getStorageSync("needShowUserAgreement") || this.setData({
            needShowUserAgreement: !0,
            inputFocus: !1
        });
    },
    mtaEvent: function() {
        var t = [ "addTextPageAvatarSuceess", "addTextPageLocalSuceess", "addTextPageOnlineSuceess" ];
        a.mtaEvent(t[this.data.urlType - 1]);
    },
    getUserInfo: function(t) {
        var e = this;
        t.detail.userInfo ? (a.mtaEvent("addTextPageAuthoriseSuccess"), getApp().getLogin(function() {
            e.setData({
                hasSendImage: !0
            }, function() {
                e.setImgData(c.userInfo.avatarUrl);
            });
        })) : a.mtaEvent("addTextPageAuthoriseReject");
    },
    analysisPic: function(t, e) {
        var a = this, i = this.data;
        e ? (a.setImgData(t), i.stillTempPath = t) : (wx.showLoading({
            title: "下载图片中。。。"
        }), wx.request({
            url: t,
            responseType: "arraybuffer",
            success: function(e) {
                var i = e.data;
                new o.Stream(i).read(30).indexOf("GIF") >= 0 ? (h = new o.Stream(i), a.setData({
                    url: t,
                    isGif: !0
                })) : a.setImgData(t);
            },
            complete: function(t) {
                wx.hideLoading();
            }
        }));
    },
    setImgData: function(t) {
        this.setData({
            isGif: !1,
            url: t
        });
    },
    onShow: function() {
        u = e.pageFun.statsEventDuration(), a.mtaEvent("addTextPageView", this.data.url);
    },
    onUnload: function() {
        a.mtaEvent("addTextPageLeave", e.pageFun.statsEventDuration(u));
    },
    editImageLoaded: function(t) {
        var e = this.data, a = 0, o = 0, i = t.detail.width, n = t.detail.height, s = i / n, c = 230 * l;
        i / n > r / c ? (a = r, o = r / s) : (o = c, a = c * s);
        var d = e.fontSizeData, u = a / 2 - e.inputWidth / 2, h = a - e.expandBg, x = Math.round(h / d[1].textAmount);
        this.setData({
            "fontSizeData[0].size": Math.round(h / d[0].textAmount),
            "fontSizeData[1].size": x,
            "fontSizeData[2].size": Math.round(h / d[2].textAmount),
            canvasWidth: i,
            canvasHeight: n,
            imageShowWidth: a,
            imageShowHeight: o,
            showTextSize: x,
            movableX: u,
            movableY: 56
        });
    },
    changePhoto: function() {
        var t = this;
        wx.showActionSheet({
            itemList: [ "拍照", "从手机相册选择" ],
            success: function(e) {
                wx.chooseImage({
                    count: 1,
                    sizeType: [ "compressed" ],
                    sourceType: [ [ "camera", "album" ][e.tapIndex] ],
                    success: function(e) {
                        var i = e.tempFilePaths[0];
                        if (/\.gif$/i.test(i)) {
                            t.setData({
                                url: i,
                                isGif: !0
                            });
                            var n = wx.getFileSystemManager().readFileSync(i);
                            h = new o.Stream(n);
                        } else t.analysisPic(i, !0);
                        t.data.urlType = 2, a.mtaEvent("addTextPageTapChangePhoneSuccess");
                    }
                });
            }
        }), a.mtaEvent("addTextPageTapChangePhone");
    },
    textTaped: function() {
        this.setData({
            inputFocus: !0
        });
    },
    inputBlur: function(t) {
        var e = this, a = this.data;
        setTimeout(function() {
            a.isDelay ? a.isDelay = !1 : e.inputBlurDelay();
        }, 200);
    },
    focus: function() {
        var t = this.data, e = this.data.inputText;
        e.length <= 0 && (e = "输入文字"), this.setData({
            inputFocus: !0,
            movableWidth: 120,
            movableHeight: t.inputHeight
        }), a.mtaEvent("addTextPageInputFocus");
    },
    inputBlurDelay: function() {
        var t = this, e = this.data.inputText;
        e || (e = "点击此处编辑"), d.font = "bold " + String(this.data.showTextSize) + "px Arial, Helvetica, sans-serif";
        var a = d.measureText(e).width + this.data.expandBg + 2;
        this.setData({
            inputFocus: !1,
            showText: e,
            showTextWidth: a,
            movableWidth: a,
            movableHeight: this.data.showTextSize + this.data.expandBg
        }, function() {
            t.isTextCrossLine();
        });
    },
    clearText: function() {
        this.data.isDelay = !0;
        var t = this;
        wx.showModal({
            content: "确定删除吗？",
            success: function(e) {
                e.confirm ? t.setData({
                    inputText: "",
                    inputFocus: !0
                }) : t.setData({
                    inputFocus: !0
                });
            }
        }), a.mtaEvent("addTextPageInputDelete");
    },
    inputChange: function(t) {
        var e = this.data, a = e.inputText, o = t.detail.value;
        d.measureText(o).width + e.expandBg + 2 > e.imageShowWidth && (o = a), this.setData({
            inputText: o
        });
    },
    inputPositionChaged: function(t) {
        var e = this.data;
        e.movableX = t.detail.x, e.movableY = t.detail.y;
    },
    fontSizeSelected: function(t) {
        for (var e = this, o = [], i = t.target.dataset, r = i.index, l = i.clickedfontsize, c = 0; c < this.data.fontSizeData.length; c++) {
            var d = this.data.fontSizeData[c];
            d.text == l.text ? (d.selected = !0, d.style = n) : (d.selected = !1, d.style = s), 
            o.push(d);
        }
        this.setData({
            fontSizeData: o,
            showTextSize: l.size
        }, function() {
            e.isTextCrossLine();
        }), this.inputBlur(), a.mtaEvent("addTextPageTapFontSize", r);
    },
    isTextCrossLine: function() {
        var t = this.data, e = t.inputText;
        if (e) {
            d.setFontSize(t.showTextSize);
            for (var a = 0; a < e.length && d.measureText(e).width + t.expandBg + 2 > t.imageShowWidth; a++) e = e.slice(0, -1);
            this.setData({
                inputText: e,
                showText: e
            });
        }
    },
    bgColorSelected: function(t) {
        for (var e = [], o = t.target.dataset, i = o.index, r = o.clickedbgcolor, l = 0; l < this.data.backgroundData.length; l++) {
            var c = this.data.backgroundData[l];
            c.bgColor == r.bgColor ? (c.selected = !0, c.style = n, this.setData({
                selectedBackground: c
            })) : (c.selected = !1, c.style = s), e.push(c);
        }
        this.setData({
            backgroundData: e
        }), a.mtaEvent("addTextPageTapFontBg", i);
    },
    fontColorSelected: function(t) {
        for (var e = [], o = t.target.dataset, i = o.index, r = o.clickedfontcolor, l = 0; l < this.data.fontColorData.length; l++) {
            var c = this.data.fontColorData[l];
            c.text == r.text ? (c.selected = !0, c.style = n, this.setData({
                selectedFontColor: c
            })) : (c.selected = !1, c.style = s), e.push(c);
        }
        this.setData({
            fontColorData: e,
            fontColor: r.innerColor
        }), a.mtaEvent("addTextPageTapFontColor", i);
    },
    generateSuccess: function(t) {
        var a = this;
        wx.hideLoading(), e.toolFuns.downloadImg(t, "下载失败，请打开保存相册权限", function() {
            a.setData({
                previewImageArr: [ t ]
            }), a.previewImage();
        });
    },
    generateFail: function() {
        wx.showToast({
            title: "生成失败",
            duration: 1500,
            image: "/images/add_text_fail.png"
        });
    },
    createGifData: function(a, n) {
        var s, r = this, l = this.data, c = null, d = null, u = null, x = null, f = !1, g = {
            encodeFunc: function(t, e, a, o, n) {
                f || (f = !0, (x = new i.GIFEncoder()).setRepeat(0), x.start()), x.setDelay(10 * t), 
                x.setSize(e, a, o, n);
            },
            makeFrameFunc: function(t, e) {
                x.addFrame(t, e, c, d);
            }
        };
        wx.showLoading({
            title: "合成中:60%",
            mask: !0
        });
        var v, F = (l = this.data).canvasWidth, p = l.canvasHeight, m = F * p, w = !0, T = 60, S = {
            hdr: function(t) {
                s = t;
            },
            gce: function(t) {
                c = t.transparencyGiven ? t.transparencyIndex : null, u = t.delayTime, d = t.disposalMethod;
            },
            img: function(o) {
                T < 80 && wx.showLoading({
                    title: "合成中:" + T++ + "%",
                    mask: !0
                });
                var i, r = o.leftPos, h = o.topPos, x = o.width, f = o.height, S = o.lctFlag ? o.lct : s.gct, y = o.pixels, b = y.concat(), C = [], k = function() {
                    var t = l.selectedBackground.bgColor, a = e.toolFuns.colorHextoRGB(l.selectedFontColor.innerColor), o = e.toolFuns.colorHextoRGB(l.selectedFontColor.strokeColor), n = [];
                    i = [ a, o ];
                    for (var s = 0; s < S.length; s++) n.push(S[s]);
                    var r = [ {
                        color: a,
                        isInTab: e.toolFuns.isSubArray(n, a)
                    }, {
                        color: o,
                        isInTab: e.toolFuns.isSubArray(n, o)
                    } ];
                    t && (t = e.toolFuns.colorHextoRGB(t), -1 == e.toolFuns.isSubArray(i, t) && (i.push(t), 
                    r.push({
                        color: t,
                        isInTab: e.toolFuns.isSubArray(n, t)
                    })));
                    var d = e.toolFuns.calAppearLeastNum(y), u = 0;
                    r.forEach(function(t, a) {
                        if (-1 == t.isInTab || t.isInTab == c) if (256 == n.length) {
                            var o = void 0, i = void 0, s = function() {
                                o = d[u++], i = Object.keys(o)[0];
                            };
                            s(), i == c && s();
                            for (var l = 0; l < r.length; l++) r[l].isInTab == i && s();
                            var h = n[i];
                            n[i] = t.color, o[i] && (t.replaceIndex = e.toolFuns.findSameColorIndex(S, h, c)), 
                            C.push(i);
                        } else n.push(t.color), C.push(n.length - 1); else C.push(t.isInTab);
                    }), y.forEach(function(t, e) {
                        r.forEach(function(a) {
                            void 0 !== a.replaceIndex && t == a.isReplace && (y[e] = a.replaceIndex);
                        });
                    });
                    var h = [];
                    return n.forEach(function(t) {
                        h = h.concat(t);
                    }), [ h, n ];
                }(), D = t(k, 2), I = D[0], A = D[1], E = l.textCanvasData, P = function(t) {
                    if (t.length < m) {
                        var e = [], a = F - r - x;
                        if (r > 0 || a > 0) {
                            var o = new Array(r), i = new Array(a);
                            o.fill(c), i.fill(c);
                            for (var n = 0; n < f; n++) e = e.concat(o.concat(t.slice(x * n, x * (n + 1))).concat(i));
                        }
                        if (h > 0) {
                            var s = new Array(F * h);
                            s.fill(c), e = s.concat(e);
                        }
                        var d = l.canvasHeight - h - f;
                        if (d > 0) {
                            var u = new Array(F * d);
                            u.fill(c), e = e.concat(u);
                        }
                        return e;
                    }
                    return t;
                };
                w && (y = P(y), r = 0, h = 0, x = F, f = p, w = !1);
                for (var z = function(a, o, n) {
                    var s = t(n, 4), r = s[0], l = s[1], d = s[2], u = s[3];
                    if (255 == u) {
                        var h = e.toolFuns.isSubArray(i, [ r, l, d ]);
                        a[o] = h >= 0 ? C[h] : e.toolFuns.findSameColorIndex(A, [ r, l, d ], c);
                    } else u > 150 && (a[o] = e.toolFuns.findSameColorIndex(A, [ r, l, d ], c));
                }, H = a; H < n; H++) {
                    var W = 4 * H, B = [ E[W++], E[W++], E[W++], E[W++] ], L = B[0], G = B[1], M = B[2], j = B[3], R = H % l.canvasWidth, U = Math.floor(H / l.canvasWidth);
                    R >= r && R < r + x && U >= h && U < h + f && z(y, R - r + (U - h) * x, [ L, G, M, j ]);
                }
                var _ = !1;
                if (2 == v) {
                    for (_ = !0, b = P(b), H = a; H < n; H++) {
                        var W = 4 * H, O = [ E[W++], E[W++], E[W++], E[W++] ];
                        z(b, H, [ L = O[0], G = O[1], M = O[2], j = O[3] ]);
                    }
                    var q = d;
                    d = 1, g.encodeFunc(u / 2, l.canvasWidth, l.canvasHeight), g.makeFrameFunc(b, I), 
                    d = q;
                }
                v = d, g.encodeFunc(_ ? u / 2 : u, x, f, r, h), g.makeFrameFunc(y, I), _ = !1;
            },
            eof: function() {
                x.finish();
                var t = x.stream().getData(), a = "data:image/gif;base64," + e.toolFuns.encode64(t);
                wx.showLoading({
                    title: "上传中:80%",
                    mask: !0
                });
                var o = 81, i = !0, n = setInterval(function() {
                    i && o < 100 ? wx.showLoading({
                        title: "上传中:" + o++ + "%",
                        mask: !0
                    }) : clearInterval(n);
                }, 1e3);
                e.pageAjax.callAjax({
                    url: "upload_ugc",
                    params: {
                        text: l.inputText,
                        file: a,
                        b64: 1
                    },
                    success: function(t) {
                        wx.setStorage({
                            key: "addTextSuccess",
                            data: "1"
                        }), e.pageAjax.downloadFile({
                            url: t.result,
                            success: r.generateSuccess
                        });
                    },
                    fail: function(t) {
                        r.generateFail();
                    },
                    complete: function() {
                        i = !1;
                    }
                });
            }
        };
        h.pos = 0, o.parseGIF(h, S);
    },
    createStillData: function() {
        var t = this, a = this.data, o = a.inputText, i = a.canvasWidth, n = a.canvasHeight, s = i / a.imageShowWidth, r = a.movableX * s, l = a.movableY * s, c = a.showTextWidth * s, u = a.movableHeight * s, h = Math.round(a.showTextSize * s);
        d.drawImage(a.stillTempPath, 0, 0, i, n), d.font = "bold " + h + "px Arial, Helvetica, sans-serif";
        var x = a.selectedBackground.bgColor;
        x && (d.setFillStyle(x), d.fillRect(r, l, c, u)), d.setFillStyle(a.selectedFontColor.innerColor), 
        d.setStrokeStyle(a.selectedFontColor.strokeColor), d.setLineWidth(2), d.setTextBaseline("middle"), 
        d.setTextAlign("center");
        var f = r + c / 2, g = l + u / 2;
        d.strokeText(o, f, g), d.fillText(o, f, g);
        var v = 1;
        (i < 480 || n < 480) && (v = 4), d.draw(!1, function() {
            setTimeout(function() {
                wx.canvasToTempFilePath({
                    destWidth: i * v,
                    destHeight: n * v,
                    canvasId: "imageCanvas",
                    fileType: "jpg",
                    success: function(o) {
                        var i = o.tempFilePath;
                        wx.uploadFile({
                            url: e.host + "upload_ugc",
                            filePath: i,
                            name: "file",
                            header: {
                                "content-type": "multipart/form-data"
                            },
                            formData: {
                                user_id: wx.getStorageSync("user_Id"),
                                b64: 2,
                                text: a.inputText
                            },
                            success: function(e) {
                                wx.setStorage({
                                    key: "addTextSuccess",
                                    data: "1"
                                });
                                var a = JSON.parse(e.data).code;
                                0 == a ? t.generateSuccess(i) : 304 == a ? wx.showToast({
                                    title: "图片包含敏感内容",
                                    icon: "none"
                                }) : 305 == a ? wx.showToast({
                                    title: "文案包含敏感内容",
                                    icon: "none"
                                }) : t.generateFail();
                            },
                            fail: function(e) {
                                t.generateFail();
                            }
                        });
                    },
                    fail: function(e) {
                        t.generateFail();
                    }
                });
            }, 80);
        });
    },
    closeUserAgreement: function() {
        wx.setStorageSync("needShowUserAgreement", 1), this.setData({
            needShowUserAgreement: !1,
            inputFocus: !0
        });
    },
    addTextToImage: function() {
        if (0 != wx.getStorageSync("user_Id")) {
            var t = this, a = this.data;
            if ((o = a.inputText).length <= 0) wx.showToast({
                title: "请输入要添加的文字",
                icon: "none"
            }); else if (wx.showLoading({
                title: "正在生成",
                mask: !0
            }), this.mtaEvent(), a.isGif) {
                wx.showLoading({
                    title: "绘图中:25%",
                    mask: !0
                });
                var o = a.inputText, i = a.movableX, n = a.movableY, s = a.canvasWidth / a.imageShowWidth, r = s * i, l = s * n, c = s * a.movableHeight, u = s * a.showTextWidth, h = Math.round(s * a.showTextSize), x = Math.floor(r + l * a.canvasWidth), f = Math.floor((l + c) * a.canvasWidth + u);
                d.font = "bold " + h + "px Arial, Helvetica, sans-serif";
                var g = a.selectedBackground.bgColor;
                g && (d.setFillStyle(g), d.fillRect(r, l, u, c)), d.setFillStyle(a.selectedFontColor.innerColor), 
                d.setStrokeStyle(a.selectedFontColor.strokeColor);
                var v = r + u / 2, F = l + c / 2;
                d.setTextBaseline("middle"), d.setTextAlign("center"), d.setFillStyle(this.data.selectedFontColor.strokeColor), 
                d.fillText(o, v - 2, F), d.fillText(o, v + 2, F), d.fillText(o, v, F - 2), d.fillText(o, v, F + 2), 
                d.fillText(o, v - 1, F - 1), d.fillText(o, v + 1, F + 1), d.fillText(o, v - 1, F + 1), 
                d.fillText(o, v + 1, F - 1), d.setFillStyle(this.data.selectedFontColor.innerColor), 
                d.fillText(o, v, F), d.draw(!1, function() {
                    setTimeout(function() {
                        wx.canvasGetImageData({
                            canvasId: "imageCanvas",
                            x: 0,
                            y: 0,
                            width: a.canvasWidth,
                            height: a.canvasHeight,
                            success: function(o) {
                                wx.getStorageSync("isOrientationRight") || (o = e.pageFun.reverseCanvasData(o)), 
                                a.textCanvasData = o.data, t.createGifData(x, f);
                            },
                            fail: function(e) {
                                t.generateFail();
                            }
                        });
                    }, 80);
                });
            } else "" == a.stillTempPath ? wx.downloadFile({
                url: a.url,
                success: function(e) {
                    200 === e.statusCode ? (t.setData({
                        stillTempPath: e.tempFilePath
                    }), t.createStillData()) : t.generateFail();
                },
                fail: function(e) {
                    t.generateFail();
                }
            }) : t.createStillData();
        } else wx.navigateTo({
            url: "/pages/authorise/authorise"
        });
    },
    closeTip: function(t) {
        1 == t.detail ? (wx.setStorageSync("noFirstPreviewAddText", 1), a.mtaEvent("imageDetailNoMoreTip")) : a.mtaEvent("imageDetailMeKnow"), 
        this.setData({
            isHidden: !0
        }), this.preview();
    },
    previewImage: function() {
        wx.getStorageSync("noFirstPreviewAddText") ? this.preview() : this.setData({
            isHidden: !1
        });
    },
    preview: function() {
        wx.previewImage({
            urls: this.data.previewImageArr
        });
    }
});