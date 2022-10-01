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
                    var o = t[i](a), u = o.value;
                } catch (e) {
                    return void n(e);
                }
                if (!o.done) return Promise.resolve(u).then(function(e) {
                    r("next", e);
                }, function(e) {
                    r("throw", e);
                });
                e(u);
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

var _extends = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
}, _createClass = function() {
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
}(), _dec, _class, _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _qiniu = require("./../utils/qiniu.js"), _cDialog = require("./../components/cDialog.js"), _cDialog2 = _interopRequireDefault(_cDialog), _uploadImg = require("./../components/uploadImg.js"), _uploadImg2 = _interopRequireDefault(_uploadImg), _mixin = require("./../mixin/index.js"), _mixin2 = _interopRequireDefault(_mixin), _common = require("./../utils/common.js"), _dateformatEs = require("./../utils/dateformat-es6.js"), _dateformatEs2 = _interopRequireDefault(_dateformatEs), _actions = require("./../store/actions/index.js"), _wepyRedux = require("./../npm/wepy-redux/lib/index.js"), Enroll = (_dec = (0, 
_wepyRedux.connect)({
    userInfo: function(e) {
        return e.user.userInfo;
    },
    userTagsMandatory: function(e) {
        return e.user.userTagsMandatory;
    },
    userTagsChoosable: function(e) {
        return e.user.userTagsChoosable;
    }
}, {
    saveUserInfo: _actions.saveUserInfo
}))(_class = function(e) {
    function t() {
        var e, n, r, i;
        _classCallCheck(this, t);
        for (var a = arguments.length, o = Array(a), u = 0; u < a; u++) o[u] = arguments[u];
        return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(o))), 
        r.mixins = [ _mixin2.default ], r.data = {
            imgUrls: [],
            title: "",
            detail: "",
            price: "0",
            people_up: "20",
            people_down: "2",
            stranger_see: !0,
            map: [],
            mapName: "",
            multiArray: (0, _common.createDate)(),
            multiIndex: [ 0, 0, 0, 0, 0 ],
            time_start: "",
            time_line: "",
            can_submit: !0,
            token: ""
        }, r.$repeat = {}, r.$props = {
            uploadImg: {
                "xmlns:v-bind": "",
                "v-bind:openid.sync": "$parent.globalData.openid"
            }
        }, r.$events = {}, r.components = {
            uploadImg: _uploadImg2.default,
            cDialog: _cDialog2.default
        }, r.computed = {}, r.methods = {
            bindKeyInput: function(e, t) {
                console.log(e, t), this[e] = t.detail.value;
            },
            bindChooseMap: function() {
                function e() {
                    return t.apply(this, arguments);
                }
                var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var t, n, r;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, _wepy2.default.getSetting();

                          case 2:
                            t = e.sent, n = t.authSetting, !1 === n["scope.userLocation"] && this.$broadcast("showDialog", {
                                desc: "同意小程序向您发出的授权设置请求",
                                cancelText: "放弃",
                                btnList: [ {
                                    open_type: "openSetting",
                                    value: "设置"
                                } ]
                            }), r = this, wx.chooseLocation({
                                complete: function(e) {
                                    r.map = e, r.$apply();
                                }
                            });

                          case 7:
                          case "end":
                            return e.stop();
                        }
                    }, e, this);
                }));
                return e;
            }(),
            bindMultiPickerChange: function(e, t) {
                this.multiIndex = t.detail.value;
                var n = this.data.multiIndex, r = this.data.multiArray[0][n[0]], i = this.data.multiArray[1][n[1]], a = this.data.multiArray[2][n[2]], o = this.data.multiArray[3][n[3]], u = this.data.multiArray[4][n[4]];
                this[e] = r + i + a + " " + o + u;
            },
            bindMultiPickerColumnChange: function(e) {
                this.multiIndex[e.detail.column] = e.detail.value;
            },
            handleSave: function(e) {
                var t = this;
                this.handleGetInfo(_asyncToGenerator(regeneratorRuntime.mark(function e() {
                    var n;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, t.handleCheckData();

                          case 2:
                            n = e.sent, n && _wepy2.default.request({
                                url: "/newsite/sign",
                                method: "POST",
                                data: n
                            }).then(function(e) {
                                _wepy2.default.hideLoading(), wx.redirectTo({
                                    url: "detail?query=" + e.activity_id + "&enroll=1"
                                });
                            }, function(e) {
                                t.can_submit = !0, t.$apply(), _wepy2.default.hideLoading(), _wepy2.default.showToast({
                                    icon: "none",
                                    title: "提交失败"
                                });
                            }).catch(function(e) {
                                t.err(e.errmsg);
                            });

                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e, t);
                })));
            }
        }, r.handleGetToken = function(e) {
            var t = r;
            _wepy2.default.request({
                url: "/newsite/qiuniutoken",
                method: "get",
                data: {
                    openid: e
                }
            }).then(function(e) {
                t.token = e.qiniuToken, t.$apply();
            });
        }, r.err = function(e) {
            _wepy2.default.hideLoading(), _wepy2.default.showToast({
                icon: "none",
                title: e
            }), r.can_submit = !0, r.$apply();
        }, r.events = {
            ImgList: function(e) {
                this.imgUrls = e;
            }
        }, i = n, _possibleConstructorReturn(r, i);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "handleUpload",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = this, n = this.imgUrls.map(function(e, n) {
                            return new Promise(function(n, r) {
                                (0, _qiniu.upload)(e, function(e) {
                                    n("https://" + e.imageURL);
                                }, function(e) {
                                    r(e);
                                }, {
                                    region: "SCN",
                                    domain: "images.flytuns.com",
                                    uptoken: t.token
                                });
                            });
                        }), e.next = 4, Promise.all(n).catch(function(e) {
                            return _wepy2.default.showToast({
                                title: "上传失败！"
                            });
                        });

                      case 4:
                        return r = e.sent, e.abrupt("return", r);

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return e;
        }()
    }, {
        key: "handleCheckData",
        value: function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = _asyncToGenerator(regeneratorRuntime.mark(function e() {
                var t, n, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this.can_submit = !1, _wepy2.default.showLoading({
                            title: "提交中"
                        }), e.next = 4, this.handleUpload();

                      case 4:
                        if (t = e.sent, n = !0, r = _extends({
                            title: this.title,
                            detail: this.detail,
                            price: this.price + "",
                            people_up: this.people_up + "",
                            people_down: this.people_down + "",
                            time_start: this.time_start,
                            time_line: this.time_line,
                            map: [ this.map.latitude, this.map.longitude ],
                            mapName: this.map.name,
                            top_img: t,
                            shareImg: t[0],
                            setIdentity: JSON.stringify(this.userTagsMandatory.filter(function(e) {
                                return e.checked;
                            })),
                            identity: JSON.stringify(this.userTagsChoosable.filter(function(e) {
                                return e.checked;
                            })),
                            stranger_see: "0",
                            openid: this.$parent.globalData.openid
                        }, this.userInfo), console.log(r), r.top_img.length) {
                            e.next = 10;
                            break;
                        }
                        return this.err("请先上传图片"), e.abrupt("return", !1);

                      case 10:
                        if (r.title) {
                            e.next = 13;
                            break;
                        }
                        return this.err("标题不能为空"), e.abrupt("return", !1);

                      case 13:
                        if (r.detail) {
                            e.next = 16;
                            break;
                        }
                        return this.err("详情不能为空"), e.abrupt("return", !1);

                      case 16:
                        if (r.time_start) {
                            e.next = 19;
                            break;
                        }
                        return this.err("报名时间不能为空"), e.abrupt("return", !1);

                      case 19:
                        if (r.time_line) {
                            e.next = 22;
                            break;
                        }
                        return this.err("截止时间不能为空"), e.abrupt("return", !1);

                      case 22:
                        if (("" + r.price).match(/^(0|[1-9]\d*)?(\.\d{1,2})?$/g) && r.price) {
                            e.next = 25;
                            break;
                        }
                        return this.err("价格格式不对"), e.abrupt("return", !1);

                      case 25:
                        if (r.people_up) {
                            e.next = 28;
                            break;
                        }
                        return this.err("上限不能为空"), e.abrupt("return", !1);

                      case 28:
                        if (r.people_down) {
                            e.next = 31;
                            break;
                        }
                        return this.err("下限不能为空"), e.abrupt("return", !1);

                      case 31:
                        return e.abrupt("return", r);

                      case 32:
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
            var e = new Date();
            this.multiIndex = [ 0, e.getMonth(), e.getDate() - 1, e.getHours(), e.getMinutes() ], 
            this.beforeQuest(this.handleGetToken);
        }
    }, {
        key: "onShow",
        value: function() {}
    }, {
        key: "onShareAppMessage",
        value: function() {
            return (0, _common.shareConfig)();
        }
    } ]), t;
}(_wepy2.default.page)) || _class;

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Enroll, "pages/enroll"));