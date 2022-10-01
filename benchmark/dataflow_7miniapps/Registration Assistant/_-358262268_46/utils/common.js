function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _asyncToGenerator(e) {
    return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function r(o, a) {
                try {
                    var i = t[o](a), u = i.value;
                } catch (e) {
                    return void n(e);
                }
                if (!i.done) return Promise.resolve(u).then(function(e) {
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

function setOpenid(e) {
    this.employIdCallback && (this.employIdCallback(e), this.employIdCallback = null), 
    this.globalData.openid = e;
}

function timeFormat(e) {
    return e < 10 ? "0" + e : e;
}

function countTime(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = +new Date();
    e = +new Date(e);
    var r = t ? n - e : e - n, o = void 0, a = void 0, i = void 0, u = void 0;
    return r >= 0 ? (o = timeFormat(Math.floor(r / 1e3 / 60 / 60 / 24)), a = timeFormat(Math.floor(r / 1e3 / 60 / 60 % 24)), 
    i = timeFormat(Math.floor(r / 1e3 / 60 % 60)), u = timeFormat(Math.floor(r / 1e3 % 60)), 
    setTimeout(countTime, 1e3), o + "天" + a + "时" + i + "分" + u + "秒") : "Time out";
}

function shareConfig() {
    return {
        title: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "我发现了一个报名的好助手，快来试试",
        path: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/pages/index",
        imageUrl: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "../img/logo.png"
    };
}

function update() {
    if (wx.getUpdateManager) {
        var e = wx.getUpdateManager();
        e.onCheckForUpdate(function(e) {}), e.onUpdateReady(function() {
            console.log("新版本已经准备好"), _wepy2.default.showModal({
                title: "更新提示",
                content: "新版本已经准备好，是否重启应用？",
                showCancel: !1
            }).then(function(t) {
                t.confirm && (e.applyUpdate(), console.log("开始更新"), mta.Event.stat("01001002"));
            });
        }), e.onUpdateFailed(function() {
            console.log("新的版本下载失败", {
                __LEVEL__: 4
            }), mta.Event.stat("01001003");
        });
    }
}

function createDate() {
    var e = new Date(), t = [], n = [], r = [], o = [], a = [], i = void 0;
    for (i = 2020; i <= e.getFullYear() + 3; i++) t.push(i + "年");
    for (i = 1; i <= 12; i++) i < 10 && (i = "0" + i), n.push(i + "月");
    for (i = 1; i <= 31; i++) i < 10 && (i = "0" + i), r.push(i + "日");
    for (i = 0; i < 24; i++) i < 10 && (i = "0" + i), o.push(i + "时");
    for (i = 0; i < 60; i++) i < 10 && (i = "0" + i), a.push(i + "分");
    return [ t, n, r, o, a ];
}

function createNow() {
    function e(e) {
        return e < 10 ? "0" + e : e;
    }
    var t = new Date();
    return t.getFullYear() + "-" + e(t.getMonth() + 1) + "-" + e(t.getDate()) + " " + e(t.getHours()) + ":" + e(t.getMinutes()) + ":" + e(t.getSeconds());
}

function diffTime(e, t) {
    return +new Date(e) > +new Date(t);
}

function dateStr(e) {
    var t = new Date(e);
    return t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate() + " " + t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds();
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.dateStr = exports.update = exports.createNow = exports.diffTime = exports.createDate = exports.shareConfig = exports.countTime = exports.getOpenid = void 0;

var getOpenid = function() {
    var e = _asyncToGenerator(regeneratorRuntime.mark(function e() {
        var t, n, r, o;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (!(t = _wepy2.default.getStorageSync("openid"))) {
                    e.next = 4;
                    break;
                }
                return setOpenid.call(this, t), e.abrupt("return");

              case 4:
                return e.next = 6, _wepy2.default.login();

              case 6:
                return n = e.sent, r = n.code, e.next = 10, _wepy2.default.request({
                    url: "/newsite/wx_auth",
                    data: {
                        code: r
                    }
                });

              case 10:
                o = e.sent, setOpenid.call(this, o.openid), _wepy2.default.setStorageSync("openid", o.openid);

              case 13:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function() {
        return e.apply(this, arguments);
    };
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy);

exports.getOpenid = getOpenid, exports.countTime = countTime, exports.shareConfig = shareConfig, 
exports.createDate = createDate, exports.diffTime = diffTime, exports.createNow = createNow, 
exports.update = update, exports.dateStr = dateStr;