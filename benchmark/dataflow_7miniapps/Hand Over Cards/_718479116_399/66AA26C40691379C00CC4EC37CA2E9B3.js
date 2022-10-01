var t = require("@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Match = void 0;

var a = t(require("@babel/runtime/helpers/classCallCheck.js")), e = t(require("@babel/runtime/helpers/createClass.js")), n = t(require("572501570691379C31436950F6B2E9B3.js")), i = getApp(), h = function() {
    function t(e) {
        (0, a.default)(this, t), this.type = e;
    }
    return (0, e.default)(t, [ {
        key: "focus",
        value: function(t, a) {
            var e = this, n = t.eContent.detail.value.trim(), i = t.eContent.detail.value, h = t.eContent.target.id, o = t.bindthat.data.matchData;
            this.inpLength = n.length, "fullname" == h || "title" == h || "company" == h ? this.position(h, t.bindthat, function(h) {
                t.bindthat.data.matchData.top = h[0].top + h[0].height + h[1].scrollTop + (t.extra ? t.extra : 0), 
                n ? i.length >= 4 && 1 == a && e.companyMatch(t) : o.show && t.bindthat.setData({
                    "matchData.show": !1
                });
            }) : o.show && t.bindthat.setData({
                "matchData.show": !1
            });
        }
    }, {
        key: "input",
        value: function(t, a) {
            var e = this, n = t.bindthat.data.matchData, i = t.eContent.detail.value.trim(), h = t.eContent.detail.value, o = t.eContent.target.id;
            this.inpLength = i.length, "fullname" != o && "title" != o && "company" != o || this.position(o, t.bindthat, function(o) {
                t.bindthat.data.matchData.top = o[0].top + o[0].height + o[1].scrollTop + t.extra, 
                i ? h.length >= 4 && 1 == a && e.companyMatch(t) : n.show && t.bindthat.setData({
                    "matchData.show": !1
                });
            });
        }
    }, {
        key: "blur",
        value: function(t) {
            t.bindthat.data.matchData.show && t.bindthat.setData({
                "matchData.show": !1
            });
        }
    }, {
        key: "position",
        value: function(t, a, e) {
            var n = null;
            (n = "component" == this.type ? a.createSelectorQuery() : wx.createSelectorQuery()).select("#" + t).boundingClientRect(), 
            n.selectViewport().scrollOffset(), n.exec(function(t) {
                e && e(t);
            });
        }
    }, {
        key: "companyMatch",
        value: function(t) {
            var a = Math.round(new Date().getTime() / 1e3), e = this, h = 5;
            t.pageSize && (h = t.pageSize), wx.request({
                url: i.source.companyMatchNew + "?key=2dcbb2386b3147d3927638cfa2579cd3&keyword=" + t.eContent.detail.value.replace(/[^(a-zA-Z||\u4e00-\u9fa5||_||0-9)]/g, ""),
                header: {
                    Token: (0, n.default)("2dcbb2386b3147d3927638cfa2579cd3" + a + "2E9EB51666B47308A6AB6355C71F73B7").toUpperCase(),
                    Timespan: a
                },
                data: {
                    pageSize: h
                },
                success: function(a) {
                    if (!t.bindthat.data.blur) {
                        var n = [];
                        if (200 == a.statusCode && "200" == a.data.Status) for (var h = a.data.Result, o = 0; o < h.length; o++) n.push(h[o].Name); else 200 == a.statusCode && "201" == a.data.Status || i.errorLog(t.eContent.detail.value + JSON.stringify(a), "qichachaNew");
                        e.inpLength >= 4 && n.length > 0 ? t.bindthat.setData({
                            "matchData.show": !0,
                            "matchData.top": t.bindthat.data.matchData.top,
                            "matchData.data": n
                        }) : t.bindthat.data.matchData.show && t.bindthat.setData({
                            "matchData.show": !1
                        });
                    }
                }
            });
        }
    } ]), t;
}();

exports.Match = h;