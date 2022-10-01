var e = require("@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.showWater = function(e, n) {
    var c = [ wx.createSelectorQuery(), n ], r = c[0], a = c[1], s = function(e) {
        for (var n = 1; n < arguments.length; n++) {
            var c = null != arguments[n] ? arguments[n] : {};
            n % 2 ? o(Object(c), !0).forEach(function(o) {
                (0, t.default)(e, o, c[o]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(c)) : o(Object(c)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(c, t));
            });
        }
        return e;
    }({}, e.currentTarget.dataset).id;
    r.select("#".concat(s)).boundingClientRect(), r.exec(function(t) {
        a.setData({
            pos: {
                pos: t[0],
                touches: e.changedTouches[0]
            }
        });
    });
}, exports.changeTabarBg = function(e, t) {
    t.scrollTop <= 0 ? (t.scrollTop = 0, e.setData({
        isTop: !0
    })) : t.scrollTop > e.data.systemInfo.windowHeight && (t.scrollTop = e.data.systemInfo.windowHeight);
    (t.scrollTop > e.data.scrollTop || t.scrollTop == e.data.systemInfo.windowHeight) && e.data.isTop && e.setData({
        isTop: !1
    });
    setTimeout(function() {
        e.setData({
            scrollTop: t.scrollTop
        });
    }, 0);
}, exports.styingConsole = function(e, t) {
    var o = JSON.stringify(e);
    console.log(t ? t + "转换的结果" : "转换的结果", o);
}, exports._14daysLimit = c;

var t = e(require("@babel/runtime/helpers/defineProperty.js"));

function o(e, t) {
    var o = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), o.push.apply(o, n);
    }
    return o;
}

var n = null;

function c() {
    return console.log("2020/10/07 23:59:59"), new Date() - new Date("2020/10/07 23:59:59") > 0 ? "7" : "14";
}

module.exports.getSystem = function(e) {
    wx.getSystemInfo({
        success: function(t) {
            e && e("success", t);
        },
        fail: function(t) {
            e && e("fail", t);
        }
    });
}, exports.showtoast = function(e, t, o) {
    var n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
    wx.showToast({
        title: e,
        icon: t,
        duration: o,
        mask: n
    });
}, exports.createATeam = function(e, t, o) {
    wx.showModal({
        title: e,
        content: "退出企业后，你的名片会更新为普通个人名片，不再属于该企业",
        cancelText: "确认退出",
        cancelColor: "#EF0000",
        confirmText: "取消",
        confirmColor: "#000000",
        success: function(e) {
            e.confirm ? o && o() : t && t();
        }
    });
}, exports.hidetoast = function(e) {
    if (e) try {
        setTimeout(function() {
            wx.hideToast && wx.hideToast();
        }, e);
    } catch (e) {} else try {
        setTimeout(function() {
            wx.hideToast && wx.hideToast();
        }, 600);
    } catch (e) {}
}, exports.showmodal = function(e, t, o) {
    var n = getApp();
    wx.showModal({
        title: e.title ? e.title : "提示",
        content: e.data,
        cancelText: e.cancelText ? e.cancelText : "取消",
        confirmText: e.text ? e.text : "确定",
        confirmColor: e.color ? e.color : n.source.sceneColor,
        showCancel: void 0 === e.cancel || e.cancel,
        success: function(e) {
            e.confirm ? t && t() : o && o();
        }
    });
}, exports.testShowmodal = function(e) {
    wx.showModal({
        title: "",
        content: "根据微信规范，您输入的内容包含敏感词汇，请重新编辑后再提交",
        confirmText: "知道了",
        showCancel: !1,
        success: function(t) {
            console.log(t, "res结果", e), t.confirm && e && e();
        }
    });
}, exports.testImgShowmodal = function(e) {
    wx.showModal({
        title: "",
        content: "根据微信规范，该图片内容违规，不予上传",
        confirmText: "知道了",
        showCancel: !1,
        success: function(t) {
            console.log(t, "res结果", e), t.confirm && e && e();
        }
    });
}, exports.newShowmodal = function(e, t, o) {
    var n = getApp();
    wx.showModal({
        title: "提示",
        content: e.data,
        confirmText: e.text ? e.text : "确定",
        confirmColor: e.color ? e.color : n.source.sceneColor,
        showCancel: void 0 === e.cancel || e.cancel,
        success: function(e) {
            e.confirm ? o && o() : t && t();
        }
    });
}, exports.deletemodal = function(e, t, o) {
    getApp().systemInfo["1.6.3"] ? wx.showModal({
        title: "提示",
        content: e,
        cancelText: "删除",
        cancelColor: "#e21918",
        confirmText: "取消",
        confirmColor: "#000000",
        success: function(e) {
            e.cancel ? t && t() : o && o();
        }
    }) : wx.showModal({
        title: "提示",
        content: e,
        cancelText: "取消",
        cancelColor: "#000000",
        confirmText: "删除",
        confirmColor: "#e21918",
        success: function(e) {
            e.confirm ? t && t() : o && o();
        }
    });
}, exports.newDeletemodal = function(e, t, o, n) {
    getApp().systemInfo["1.6.3"] ? wx.showModal({
        title: "注意",
        content: e,
        cancelText: "取消",
        cancelColor: "#666666",
        confirmText: n,
        confirmColor: "#F33632",
        success: function(e) {
            e.cancel ? o && o() : t && t();
        }
    }) : wx.showModal({
        title: "提示",
        content: e,
        cancelText: "确认删除",
        cancelColor: "#F12424",
        confirmText: "取消",
        confirmColor: "#666666",
        success: function(e) {
            e.confirm ? o && o() : t && t();
        }
    });
}, exports.shareButton = function(e, t, o) {
    var c = e;
    c.setData({
        shareButtonContent: o
    }), clearTimeout(n), n = setTimeout(function() {
        c.setData({
            shareButtonContent: t
        });
    }, 2e3);
}, exports.addLogTime = function() {
    function e(e) {
        return e < 10 ? "0" + e : e;
    }
    return new Date().getFullYear() + "-" + e(new Date().getMonth() + 1) + "-" + e(new Date().getDate()) + " " + e(new Date().getHours()) + ":" + e(new Date().getMinutes()) + ":" + e(new Date().getSeconds());
}, exports.randomWord = function(e, t, o) {
    var n = "", c = t, r = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
    e && (c = Math.round(Math.random() * (o - t)) + t);
    for (var a = 0; a < c; a++) n += r[Math.round(Math.random() * (r.length - 1))];
    return n;
}, exports.shareAppMessa = function(e) {
    var t = getApp(), o = this.addLogTime();
    return {
        title: e.title,
        path: e.path + "&openid=" + t.client.openid + "&time=" + o,
        imageUrl: !!e.imageUrl && e.imageUrl
    };
}, exports.saveAddress = function(e) {
    var t = "", o = "", n = getApp();
    n.compatibleManage.phoneContact ? (e.name.match(/^[\u4E00-\u9FA5]+$/) && e.name.length > 1 ? (o = e.name.substr(0, 1), 
    t = e.name.substring(1)) : (t = e.name, o = ""), wx.addPhoneContact({
        firstName: t,
        lastName: o,
        organization: e.company,
        title: e.job,
        mobilePhoneNumber: e.mophone1 || "",
        email: e.email1 || "",
        hostNumber: e.phone1 || "",
        remark: e.addr1 || ""
    })) : this.showmodal({
        data: "请升级到最新版本的微信，体验该功能",
        text: "我知道了",
        cancel: !1
    }), n.gioCustome({
        t: "publicFun.001"
    });
}, exports.throttle = function(e, t, o) {
    var n = null, c = new Date();
    return function() {
        var r = this, a = arguments, s = new Date();
        clearTimeout(n), s - c >= o ? (e.apply(r, a), c = s) : n = setTimeout(function() {
            e.apply(r, a);
        }, t);
    };
}, exports.regMatch = function(e, t, o) {
    var n = {}, c = [];
    e = e.replace(/[\\\b\f\n\r\t]/g, "").replace(/[\[\]\+]/, "");
    var r = new RegExp(e);
    if (e) for (var a in t) for (var s in t[a]) !n[a] && "id" != s && "userpic" != s && "hengshu" != s && "openid" != s && "exchange" != s && "isread" != s && "invoice" != s && "rid" != s && "shareothers" != s && "addtime_s" != s && "addtimeS" != s && "order" != s && "form_token" != s && "formtoken" != s && "token" != s && "selected" != s && "source" != s && "sence" != s && "afStatus" != s && "shareTime" != s && "cardUrl" != s && "source" != s && "phone2" != s && "phone3" != s && "vcardId" != s && "petName" != s && "headPhotoUrl" != s && "openId" != s && "role" != s && "adminOpenId" != s && "roleId" != s && "pinyin" != s && t[a][s] && "#" != t[a][s] && t[a][s].match(r) && (c.push(t[a]), 
    n[a] = 1);
    o && o(c);
}, exports.regMatchNew = function(e, t, o) {
    var n = {}, c = [];
    e = e.replace(/[\\\b\f\n\r\t]/g, "").replace(/[\[\]\+]/, "");
    var r = new RegExp(e);
    if (e) for (var a in t) for (var s in t[a]) n[a] || "name" != s && "company" != s && "job" != s && "phone" != s || !t[a][s] || "#" == t[a][s] || t[a][s].match(r) && (c.push(t[a]), 
    n[a] = 1);
    o && o(c);
}, exports.lowVersionLogo = function(e, t) {
    var o, n, c = {};
    wx.getImageInfo({
        src: e,
        success: function(e) {
            o = e.height, n = e.width, c = o > n ? {
                lt: [ 0, (o - n) / 2 ],
                rt: [ n, (o - n) / 2 ],
                lb: [ 0, (o - n) / 2 + n ],
                rb: [ n, (o - n) / 2 + n ]
            } : {
                lt: [ (n - o) / 2, 0 ],
                rt: [ (n - o) / 2, 0 ],
                lb: [ (n - o) / 2, o ],
                rb: [ (n - o) / 2 + o, o ]
            }, t && t(c);
        },
        fail: function() {
            wx.showToast({
                title: "logo上传失败"
            });
        }
    });
}, exports.upldProgress = function(e, t) {
    var o = getApp(), n = this;
    switch (o.onProgressUpld = 0, !t.data.pageShade && (t.data.pageShade = {}), e.status) {
      case "loading":
        !function() {
            if (t.setData({
                "pageShade.show": !0,
                "pageShade.loading": "0%"
            }), o.systemInfo["1.6.3"]) var c = setInterval(function() {
                t.setData({
                    "pageShade.loading": o.onProgressUpld + "%"
                }), (o.onProgressUpld >= 100 || "loading" != e.status) && (clearInterval(c), setTimeout(function() {
                    t.setData({
                        "pageShade.show": !1
                    });
                }, 200));
            }, 150); else n.showtoast("上传中...", "loading", 8e3);
        }();
        break;

      case "success":
        o.systemInfo["1.6.3"] ? o.onProgressUpld = 120 : n.hidetoast();
        break;

      case "fail":
        o.systemInfo["1.6.3"] || n.hidetoast();
    }
}, exports.urlCreate = function(e) {
    var t = e.split(".");
    return "svg" == t[1] ? t[0] + ".png" : e;
}, exports.lowerVersionModal = function() {
    wx.showModal({
        title: "提示",
        content: "您当前的微信版本过低，请升级微信后使用该功能",
        confirmText: "我知道了",
        showCancel: !1
    });
}, exports.buildmodal = function(e, t, o) {
    wx.showModal({
        title: "",
        content: e,
        cancelText: "不想拥有",
        cancelColor: "#666666",
        confirmText: "我想拥有",
        confirmColor: "#3F51B5",
        success: function(e) {
            e.confirm ? t && t() : o && o();
        }
    });
}, exports.iknowmodal = function(e, t, o) {
    wx.showModal({
        title: "",
        content: e,
        cancelText: "再看一遍",
        cancelColor: "#666666",
        confirmText: "我学会了",
        confirmColor: "#3F51B5",
        success: function(e) {
            e.confirm ? t && t() : o && o();
        }
    });
}, exports.wallDelete = function(e, t, o) {
    wx.showModal({
        title: "删除该群？",
        content: e,
        cancelText: "取消",
        cancelColor: "#000000",
        confirmText: "确认删除",
        confirmColor: "#FF3B2F",
        success: function(e) {
            e.confirm ? t && t() : o && o();
        }
    });
}, exports.editDeletemodal = function(e, t, o, n) {
    getApp().systemInfo["1.6.3"] ? wx.showModal({
        title: "确认删除?",
        content: e,
        cancelText: t,
        cancelColor: "#e21918",
        confirmText: "取消",
        confirmColor: "#000000",
        success: function(e) {
            e.cancel ? o && o() : n && n();
        }
    }) : wx.showModal({
        title: "提示",
        content: e,
        cancelText: "取消",
        cancelColor: "#000000",
        confirmText: "删除",
        confirmColor: "#e21918",
        success: function(e) {
            e.confirm ? o && o() : n && n();
        }
    });
}, exports.wxOnAppShow = function(e) {
    return wx.onAppShow(e);
}, exports.leaveHours = function(e) {
    return console.log("leave hours", new Date(), e, new Date(e.replace(/-/g, "/"))), 
    Math.floor((new Date() - new Date(e.replace(/-/g, "/"))) / 36e5 * 100) / 100;
}, exports._14daysLimit = c;