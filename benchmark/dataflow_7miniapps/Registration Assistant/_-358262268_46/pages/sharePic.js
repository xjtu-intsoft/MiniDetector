function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function r(i, a) {
                try {
                    var s = t[i](a), o = s.value;
                } catch (e) {
                    return void n(e);
                }
                if (!s.done) return Promise.resolve(o).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(o);
            }
            return r("next");
        });
    };
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
    };
}(), _dec, _class, _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _wepyRedux = require("./../npm/wepy-redux/lib/index.js"), install = (_dec = (0, 
_wepyRedux.connect)({
    userInfo: function(e) {
        return e.user.userInfo;
    },
    curActivity: function(e) {
        return e.user.curActivity;
    }
}))(_class = function(e) {
    function t() {
        var e, n, r, i;
        _classCallCheck(this, t);
        for (var a = arguments.length, s = Array(a), o = 0; o < a; o++) s[o] = arguments[o];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
        r.components = {}, r.data = {
            code: "",
            page: 0,
            list: [],
            hidden: !1,
            prurl: "",
            codeUrl: "",
            windowWidth: 320,
            windowHeight: 400,
            cWidth: 320,
            cHeight: 400,
            cML: 0,
            cMT: 20
        }, r.methods = {
            handleSave: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var t, n;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return t = _wepy2.default.createCanvasContext("canvas"), e.next = 3, _wepy2.default.canvasToTempFilePath({
                                canvasId: "canvas",
                                destWidth: 960,
                                destHeight: 1200,
                                quality: 1
                            }).then(function(e) {
                                return e.tempFilePath;
                            });

                          case 3:
                            n = e.sent, wx.saveImageToPhotosAlbum({
                                filePath: n,
                                success: function() {
                                    _wepy2.default.showToast({
                                        title: "保存成功"
                                    });
                                },
                                fail: function() {
                                    _wepy2.default.showToast({
                                        icon: "none",
                                        title: "保存失败"
                                    });
                                }
                            });

                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }()
        }, i = n, _possibleConstructorReturn(r, i);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "handleDraw",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n, r, i, a, s, o, c, l, u, h, f, p, d, y, w = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = this.userInfo.nickName, console.log(this.userInfo.avatarUrl), console.log(this.curActivity.top_img[0]), 
                        console.log(this.code), e.next = 6, _wepy2.default.downloadFile({
                            url: this.userInfo.avatarUrl.replace("third", "")
                        });

                      case 6:
                        return n = e.sent, e.next = 9, _wepy2.default.getImageInfo({
                            src: this.curActivity.top_img[0]
                        });

                      case 9:
                        return r = e.sent, e.next = 12, _wepy2.default.getImageInfo({
                            src: this.code
                        });

                      case 12:
                        i = e.sent, a = wx.createCanvasContext("canvas"), s = this.curActivity.title.length > 14 ? this.curActivity.title.substring(0, 14) + "..." : this.curActivity.title, 
                        o = r.width, c = r.height, l = 300, u = 160, h = 0, f = 0, p = 0, d = 0, o > c ? (p = l * c / u, 
                        d = c, h = (o - p) / 2, f = 0) : (p = o, d = o * u / l, h = 0, f = (c - d) / 2), 
                        a.setFillStyle("#fff"), a.fillRect(0, 0, this.cWidth, this.cHeight), a.drawImage(r.path, h, f, p, d, (this.cWidth - l) / 2, 60, l, u), 
                        a.setFontSize(16), a.setFillStyle("#5e5e5e"), a.setTextAlign("center"), a.fillText(s, this.cWidth / 2, 255), 
                        a.setFillStyle("#f4f4f4"), a.fillRect(0, 280, this.cWidth, 120), a.drawImage(i.path, 50, 290, 100, 100), 
                        a.setFontSize(14), a.setFillStyle("#303030"), a.setTextAlign("center"), a.fillText("长按识别二维码", 210, 340, l), 
                        a.setFontSize(14), a.setFillStyle("#303030"), a.setTextAlign("center"), a.fillText("进入报名", 190, 360, l), 
                        a.setFontSize(14), a.setFillStyle("#303030"), a.setTextAlign("left"), a.fillText(t, 50, 38), 
                        y = a.measureText(t), console.log(y.width), a.setFontSize(14), a.setFillStyle("red"), 
                        a.setTextAlign("left"), a.fillText("邀请你参加报名", y.width + 60, 38), a.fill(), a.save(), 
                        a.beginPath(), a.arc(30, 30, 15, 0, 2 * Math.PI), a.clip(), a.drawImage(n.tempFilePath, 15, 15, 30, 30), 
                        a.save(), a.restore(), setTimeout(function() {
                            a.draw(null, function() {
                                wx.hideLoading();
                            }), w.$apply();
                        }, 0);

                      case 54:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "measureText",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 14;
            e = String(e);
            var e = e.split(""), n = 0;
            return e.forEach(function(e) {
                /[a-zA-Z]/.test(e) ? n += 7 : /[0-9]/.test(e) ? n += 5.5 : /\./.test(e) ? n += 2.7 : /-/.test(e) ? n += 3.25 : /[\u4e00-\u9fa5]/.test(e) ? n += 10 : /\(|\)/.test(e) ? n += 3.73 : /\s/.test(e) ? n += 2.5 : /%/.test(e) ? n += 8 : n += 10;
            }), n * t / 10;
        }
    }, {
        key: "handleCheck",
        value: function() {
            var e = this.$parent.globalData.systemInfoSync, t = e.windowWidth, n = e.windowHeight, r = e.pixelRatio;
            this.windowWidth = t * r, this.windowHeight = n * r, this.cML = (t - this.cWidth) / 2, 
            this.$apply();
        }
    }, {
        key: "handleDetail",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                var n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, _wepy2.default.request({
                            url: "/newsite/qrcode",
                            data: {
                                activityId: this.curActivity.activity_id
                            }
                        });

                      case 2:
                        n = e.sent, console.log(n), this.code = n.codeUrl, this.$apply();

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "onLoad",
        value: function() {
            function e(e) {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return _wepy2.default.showLoading({
                            title: "生成中.."
                        }), this.activity_id = t.activity_id, e.next = 4, this.handleDetail(t.activity_id);

                      case 4:
                        return e.next = 6, this.handleCheck();

                      case 6:
                        return e.next = 8, this.handleDraw();

                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    } ]), t;
}(_wepy2.default.page)) || _class;

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(install, "pages/sharePic"));