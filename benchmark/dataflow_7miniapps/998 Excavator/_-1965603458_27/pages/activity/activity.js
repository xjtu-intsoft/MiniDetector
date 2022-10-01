var t = getApp();

Page({
    data: {
        data: null,
        week_last: null,
        endDay: 0,
        endHour: 0,
        endMinute: 0,
        endSecond: 0,
        endWeek: ""
    },
    onLoad: function(e) {
        var a = this;
        t.auth(function(t) {
            if (!t.token) return !1;
        }), t.checklogin() && (a.getFirstDayofWeek(), a.get_shareTop(), a.get_lastweek(), 
        a.set_times());
    },
    formatDate: function(t) {
        var e = this, a = t.getFullYear(), n = t.getMonth() + 1, s = t.getDate();
        n < 10 && (n = "0" + n), s < 10 && (s = "0" + s);
        var o = a + "-" + n + "-" + s + " 24:00:00";
        console.log(o), e.setData({
            endWeek: o
        });
    },
    getFirstDayofWeek: function() {
        var t = this, e = new Date(), a = e.getDay(), n = e.getDate(), s = e.getMonth(), o = e.getYear();
        o += o < 2e3 ? 1900 : 0;
        var i = new Date(o, s, n + (6 - a));
        t.formatDate(i);
    },
    get_times: function(t) {
        var e = new Date();
        return e.setFullYear(t.substring(0, 4)), e.setMonth(t.substring(5, 7) - 1), e.setDate(t.substring(8, 10)), 
        e.setHours(t.substring(11, 13)), e.setMinutes(t.substring(14, 16)), e.setSeconds(t.substring(17, 19)), 
        Date.parse(e) / 1e3;
    },
    set_times: function() {
        var t = this, e = t.get_times(t.data.endWeek) - Date.parse(new Date()) / 1e3;
        setInterval(function() {
            var a = e, n = Math.floor(a / 3600 / 24), s = n.toString();
            1 == s.length && (s = "0" + s);
            var o = Math.floor((a - 3600 * n * 24) / 3600), i = o.toString();
            1 == i.length && (i = "0" + i);
            var r = Math.floor((a - 3600 * n * 24 - 3600 * o) / 60), u = r.toString();
            1 == u.length && (u = "0" + u);
            var l = (a - 3600 * n * 24 - 3600 * o - 60 * r).toString();
            1 == l.length && (l = "0" + l), t.setData({
                endDay: s,
                endHour: i,
                endMinute: u,
                endSecond: l
            }), e--;
        }.bind(t), 1e3);
    },
    get_shareTop: function() {
        var e = this;
        wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/account/mysharein",
            data: {
                token: t.globalData.userInfo.token
            },
            success: function(t) {
                e.setData({
                    data: t.data
                });
            }
        });
    },
    get_lastweek: function() {
        var e = this;
        wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/account/mysharein_last",
            data: {
                token: t.globalData.userInfo.token
            },
            success: function(t) {
                e.setData({
                    week_last: t.data
                });
            }
        });
    },
    share_explain: function() {
        this.setData({
            show_explain: !0
        });
    },
    hideModal: function() {
        this.setData({
            show_explain: !1
        });
    },
    delet_modal: function() {
        this.setData({
            show_explain: !1
        });
    },
    week_ranking: function() {
        wx.navigateTo({
            url: "/pages/integral/integral"
        });
    },
    onShareAppMessage: function(e) {
        return {
            title: t.globalData.activity_title,
            path: "/pages/index/index?t=" + t.getcsid(),
            imageUrl: t.globalData.activity_image,
            success: function(t) {}
        };
    }
});