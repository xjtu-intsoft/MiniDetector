var e = require("@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.CardAllPro = void 0;

var t = e(require("@babel/runtime/helpers/classCallCheck.js")), i = e(require("@babel/runtime/helpers/createClass.js")), n = function() {
    function e() {
        (0, t.default)(this, e);
    }
    return (0, i.default)(e, [ {
        key: "clickLetter",
        value: function(e, t, i, n) {
            var o = e.touches[0].clientY - i, l = parseInt(o / 17), a = "";
            a = l <= 0 ? "top" : "Z#" == t[l - 1] ? "bottom" : t[l - 1], n && n(a);
        }
    }, {
        key: "touchMove",
        value: function(e, t, i, n) {
            var o = e.touches[0].clientY - i, l = "", a = parseInt(o / 17);
            a <= 0 ? l = "top" : "Z#" == t[a - 1] ? l = "bottom" : t[a - 1] && (l = t[a - 1]), 
            n && n(l);
        }
    }, {
        key: "end",
        value: function(e, t, i, n, o, l) {
            var a = t - e.changedTouches[0].clientY, h = "", r = "", g = "", s = {};
            a > 0 ? i[i.length - 1] <= 68 ? (i[i.length - 1] <= 40 ? (h = "top", r = !1, g = !0) : (h = "miniTop", 
            r = !0, g = !1), n && !o && i[i.length - 1] > 100 || (s = {
                scranimation: !0,
                scSuccesView: h,
                miniTagShow: r,
                miniTagShowF: g,
                letterListTop: g
            })) : (r = !0, g = !1, n && !o || (s = {
                miniTagShow: r,
                miniTagShowF: g,
                letterListTop: g
            })) : a < 0 && (i[i.length - 1] > -68 ? (h = "top", r = !1, g = !0, !n && o || n && !o && i[i.length - 1] > 68 || (s = {
                scranimation: !0,
                scSuccesView: h,
                miniTagShow: r,
                miniTagShowF: g,
                letterListTop: g
            })) : i[i.length - 1] <= 68 && n && (s = {
                scranimation: !0,
                scSuccesView: h = "top",
                miniTagShow: r = !1,
                miniTagShowF: g = !0,
                letterListTop: g
            })), l && l(s);
        }
    }, {
        key: "combineAnd",
        value: function(e, t, i, n, o) {
            var l = {};
            (t = t)[t.length - 1] > 70 ? n && (l = {
                letterListTop: !1
            }) : n || (l = {
                letterListTop: !0
            }), o && o(l);
        }
    }, {
        key: "combine",
        value: function(e, t, i, n, o, l, a) {
            var h = "", r = "", g = {};
            (t = t)[t.length - 2] && t[t.length - 2] < t[t.length - 1] ? l ? t[t.length - 1] < 0 || t[t.length - 1] <= 70 || (h = !0, 
            r = !1, i && !n || (g = {
                miniTagShow: h,
                miniTagShowF: r,
                letterListTop: r
            })) : t[t.length - 1] < 0 || t[t.length - 1] < 4 && t[t.length - 1] > 0 || (0 == t[t.length - 1] ? (h = !1, 
            r = !0, !i && n || (g = {
                miniTagShow: h,
                miniTagShowF: r,
                letterListTop: r
            })) : t[t.length - 1] <= 68 ? (h = !0, r = !1, i && !n || (g = {
                miniTagShow: h,
                miniTagShowF: r,
                letterListTop: r
            })) : (h = !0, r = !1, i && n || i && !n || (g = {
                miniTagShow: h,
                miniTagShowF: r,
                letterListTop: r
            }))) : l ? t[t.length - 1] < 0 || t[t.length - 1] < 4 && t[t.length - 1] > 0 || (t[t.length - 1] <= 70 ? (h = !1, 
            r = !0, g = !i && n ? {
                scSuccesView: "top"
            } : {
                scranimation: !0,
                scSuccesView: "top",
                miniTagShow: h,
                miniTagShowF: r,
                letterListTop: r
            }) : (h = !0, r = !1, i && !n || (g = {
                miniTagShow: h,
                miniTagShowF: r,
                letterListTop: r
            }))) : t[t.length - 1] < 0 || t[t.length - 1] < 4 && t[t.length - 1] > 0 || 0 == t[t.length - 1] || (t[t.length - 1], 
            h = !0, r = !1, i && !n || (g = {
                miniTagShow: h,
                miniTagShowF: r,
                letterListTop: r
            })), a && a(g);
        }
    } ]), e;
}();

exports.CardAllPro = n;