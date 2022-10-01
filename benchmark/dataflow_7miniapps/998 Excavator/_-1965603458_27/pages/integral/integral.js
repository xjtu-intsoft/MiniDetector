var t = getApp();

Page({
    data: {
        userInfo: null,
        tabs: [ "上周排名", "本周排名" ],
        activeIndex: 1,
        sliderOffset: 0,
        sliderLeft: 0,
        show_explain: !1,
        customer_id: "",
        ranking: [],
        shared: "",
        ranking_last: [],
        shared_last: "",
        week_last: null,
        endDay: 0,
        endHour: 0,
        endMinute: 0,
        endSecond: 0,
        endWeek: ""
    },
    onLoad: function(e) {
        var a = this;
        t.checklogin() && (a.get_shareTop(), a.get_mysharein(), a.getFirstDayofWeek(), a.set_times(), 
        wx.getSystemInfo({
            success: function(t) {
                a.setData({
                    sliderLeft: (t.windowWidth / a.data.tabs.length - 96) / 2.5,
                    sliderOffset: t.windowWidth / a.data.tabs.length * a.data.activeIndex
                });
            }
        }));
    },
    formatDate: function(t) {
        var e = this, a = t.getFullYear(), n = t.getMonth() + 1, r = t.getDate();
        n < 10 && (n = "0" + n), r < 10 && (r = "0" + r);
        var s = a + "-" + n + "-" + r + " 24:00:00";
        console.log(s), e.setData({
            endWeek: s
        });
    },
    getFirstDayofWeek: function() {
        var t = this, e = new Date(), a = e.getDay(), n = e.getDate(), r = e.getMonth(), s = e.getYear();
        s += s < 2e3 ? 1900 : 0;
        var o = new Date(s, r, n + (6 - a));
        t.formatDate(o);
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
            var a = e, n = Math.floor(a / 3600 / 24), r = n.toString();
            1 == r.length && (r = "0" + r);
            var s = Math.floor((a - 3600 * n * 24) / 3600), o = s.toString();
            1 == o.length && (o = "0" + o);
            var i = Math.floor((a - 3600 * n * 24 - 3600 * s) / 60), l = i.toString();
            1 == l.length && (l = "0" + l);
            var d = (a - 3600 * n * 24 - 3600 * s - 60 * i).toString();
            1 == d.length && (d = "0" + d), t.setData({
                endDay: r,
                endHour: o,
                endMinute: l,
                endSecond: d
            }), e--;
        }.bind(t), 1e3);
    },
    tabClick: function(t) {
        this.setData({
            sliderOffset: t.currentTarget.offsetLeft,
            activeIndex: t.currentTarget.id
        });
    },
    get_shareTop: function() {
        var e = this;
        wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/account/sharetop",
            data: {
                token: t.globalData.userInfo.token
            },
            success: function(a) {
                for (var n = a.data.data, r = 0; r < n.length; r++) n[r].num = r + 1;
                var s = t.globalData.userInfo.cs.slice(10);
                e.setData({
                    userInfo: t.globalData.userInfo,
                    shared: a.data.cs,
                    ranking: n,
                    customer_id: s
                });
            }
        });
    },
    get_mysharein: function() {
        var e = this;
        wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/account/sharetop_last",
            data: {
                token: t.globalData.userInfo.token
            },
            success: function(a) {
                for (var n = a.data.data, r = 0; r < n.length; r++) n[r].num = r + 1;
                e.setData({
                    userInfo: t.globalData.userInfo,
                    shared_last: a.data.cs,
                    ranking_last: n
                });
            }
        });
    },
    share_explain: function() {},
    follow: function(t) {
        var e = this, a = t.currentTarget.dataset.userid, n = t.currentTarget.dataset.atten;
        e.req(a);
        for (var r = 0; r < e.data.ranking.length; r++) e.data.ranking[r].customer_id == a && (e.data.ranking[r].atten = !n);
        for (var s = 0; s < e.data.ranking_last.length; s++) e.data.ranking_last[s].customer_id == a && (e.data.ranking_last[s].atten = !n);
        e.setData({
            ranking: e.data.ranking,
            ranking_last: e.data.ranking_last
        });
    },
    req: function(e) {
        wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/account/attention",
            data: {
                token: t.globalData.userInfo.token,
                to_id: e
            },
            success: function(e) {
                console.log(e), "-2" == e.data.ret ? (t.show_erro(e.data.msg, "error"), setTimeout(function() {
                    wx.navigateTo({
                        url: "/pages/phonenumber/phonenumber?bind=1"
                    });
                }, "3000")) : t.show_erro(e.data.msg);
            }
        });
    },
    onPullDownRefresh: function() {
        this.get_shareTop(), setTimeout(function() {
            t.show_erro("刷新成功"), wx.stopPullDownRefresh();
        }, 1e3);
    },
    onShareAppMessage: function(e) {
        return console.log(e), e.from, {
            title: t.globalData.activity_title,
            path: "/pages/index/index?t=" + t.getcsid(),
            imageUrl: t.globalData.activity_image,
            success: function(e) {
                t.globalData.shared = t.globalData.shared + 1;
            }
        };
    }
});