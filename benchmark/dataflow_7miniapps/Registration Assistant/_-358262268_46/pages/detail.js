function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
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
        var i = arguments[t];
        for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
    }
    return e;
}, _slicedToArray = function() {
    function e(e, t) {
        var i = [], n = !0, r = !1, o = void 0;
        try {
            for (var a, s = e[Symbol.iterator](); !(n = (a = s.next()).done) && (i.push(a.value), 
            !t || i.length !== t); n = !0) ;
        } catch (e) {
            r = !0, o = e;
        } finally {
            try {
                !n && s.return && s.return();
            } finally {
                if (r) throw o;
            }
        }
        return i;
    }
    return function(t, i) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return e(t, i);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), _createClass = function() {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t;
    };
}(), _dec, _class, _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), _cPanel = require("./../components/cPanel.js"), _cPanel2 = _interopRequireDefault(_cPanel), _cShare = require("./../components/cShare.js"), _cShare2 = _interopRequireDefault(_cShare), _cDialog = require("./../components/cDialog.js"), _cDialog2 = _interopRequireDefault(_cDialog), _cDropdown = require("./../components/cDropdown.js"), _cDropdown2 = _interopRequireDefault(_cDropdown), _mixin = require("./../mixin/index.js"), _mixin2 = _interopRequireDefault(_mixin), _actions = require("./../store/actions/index.js"), _common = require("./../utils/common.js"), _wepyRedux = require("./../npm/wepy-redux/lib/index.js"), Detail = (_dec = (0, 
_wepyRedux.connect)({
    userInfo: function(e) {
        return e.user.userInfo;
    },
    userTagsChoosable: function(e) {
        return e.user.userTagsChoosable;
    },
    curActivity: function(e) {
        return e.user.curActivity;
    }
}, {
    saveUserInfo: _actions.saveUserInfo,
    saveCurActivity: _actions.saveCurActivity
}))(_class = function(e) {
    function t() {
        var e, i, n, r;
        _classCallCheck(this, t);
        for (var o = arguments.length, a = Array(o), s = 0; s < o; s++) a[s] = arguments[s];
        return i = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(a))), 
        n.mixins = [ _mixin2.default ], n.data = {
            startT: "",
            endT: "",
            is_start: !1,
            is_end: !1,
            activity_id: "",
            startline: "",
            deadline: "",
            detail: {},
            timer: null,
            dropList: [ {
                url: "",
                open_type: "share",
                value: "发送给好友"
            }, {
                url: "sharePic?activity_id={{this.activity_id}}",
                value: "生成分享图"
            } ]
        }, n.components = {
            panel: _cPanel2.default,
            share: _cShare2.default,
            cDialog: _cDialog2.default,
            cDropdown: _cDropdown2.default
        }, n.computed = {
            shareStatus: function() {
                return 1 == +n.detail.isApply ? 2 : n.detail.eventInfo && n.$parent.globalData.openid === n.detail.eventInfo.openid ? 1 : 3;
            }
        }, n.methods = {
            bindKeyInput: function(e, t) {
                this[e] = t.detail.value;
            },
            bindChooseMap: function() {
                var e = this.detail.map.split(","), t = _slicedToArray(e, 2), i = t[0], n = t[1];
                wx.openLocation({
                    latitude: +i,
                    longitude: +n
                });
            },
            showShare: function() {
                this.$broadcast("showDropdown", {
                    dropdownList: this.dropList
                });
            },
            showPanel: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.$broadcast("showPanel", e);
            },
            goPay: function(e) {
                wx.navigateTo({
                    url: "pay?activity_id=" + e
                });
            }
        }, n.handleDetail = function(e, t) {
            _wepy2.default.request({
                url: "/newsite/detail",
                data: {
                    openid: e,
                    activity_id: t
                }
            }).then(function(e) {
                n.detail = _extends({}, e, {
                    top_img: e.top_img.split(","),
                    setIdentity: JSON.parse(e.setIdentity),
                    identity: JSON.parse(e.identity)
                }), 1 != +e.isApply && (n.dropList = [ {
                    url: "",
                    open_type: "share",
                    value: "发送给好友"
                }, {
                    url: "sharePic?activity_id=" + n.activity_id,
                    value: "生成分享图"
                } ]), n.startT = e.time_start.substring(5), n.endT = e.time_line.substring(5);
                var t = (0, _common.createNow)().replace(/[^\d]/g, "");
                n.is_start = t > e.time_start.replace(/[^\d]/g, ""), n.is_end = n.is_start && t > e.time_line.replace(/[^\d]/g, ""), 
                n.methods.saveCurActivity(n.detail), console.log(n.startT, n.endT, t, n.is_start, n.is_end), 
                n.$apply();
            });
        }, n.countTime = function(e) {
            function t(e) {
                return e < 10 ? "0" + e : e;
            }
            var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = +new Date(), r = i ? n - e : e - n, o = void 0, a = void 0, s = void 0, l = void 0;
            return r >= 0 ? (o = t(Math.floor(r / 1e3 / 60 / 60 / 24)), a = t(Math.floor(r / 1e3 / 60 / 60 % 24)), 
            s = t(Math.floor(r / 1e3 / 60 % 60)), l = t(Math.floor(r / 1e3 % 60)), {
                done: !1,
                value: o + "天" + a + "时" + s + "分" + l + "秒"
            }) : {
                done: !0,
                value: new Date(e).toString()
            };
        }, r = i, _possibleConstructorReturn(n, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "countDown",
        value: function(e, t, i) {
            var n = this;
            console.log(e, new Date(t).toString());
            var r = +new Date(t), o = void 0;
            this[e] = this.countTime(r, i), o = function() {
                return setInterval(function() {
                    n[e] = n.countTime(r), n[e].done && n.timer && clearInterval(n.timer), n.$apply();
                }, 1e3);
            }, this.timer = o(), this.$apply();
        }
    }, {
        key: "onLoad",
        value: function(e) {
            if (e.scene) {
                var t = decodeURIComponent(e.scene);
                this.activity_id = t.split("=")[1];
            } else this.activity_id = e.query;
            switch (this.handleGetInfo(), e.enroll) {
              case "1":
                this.$broadcast("showDropdown", {
                    dropdownList: [ {
                        url: "",
                        open_type: "share",
                        value: "发送给好友"
                    }, {
                        url: "sharePic?activity_id=" + this.activity_id,
                        value: "生成分享图"
                    } ]
                });
                break;

              case "2":
                _wepy2.default.showToast({
                    title: "报名成功",
                    success: function() {
                        setTimeout(function() {
                            _wepy2.default.hideToast();
                        }, 2e3);
                    }
                });
            }
        }
    }, {
        key: "onUnload",
        value: function() {}
    }, {
        key: "onHide",
        value: function() {}
    }, {
        key: "onShow",
        value: function() {
            this.beforeQuest(this.handleDetail, this.activity_id);
        }
    }, {
        key: "onShareAppMessage",
        value: function() {
            return {
                title: this.detail.title,
                imageUrl: this.detail.top_img[0],
                path: "/pages/detail?query=" + this.detail.activity_id
            };
        }
    } ]), t;
}(_wepy2.default.page)) || _class;

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Detail, "pages/detail"));