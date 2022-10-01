var a = getApp();

Page({
    data: {
        active: "today",
        topdata: [],
        curr: [],
        page: 0,
        datalist: []
    },
    onLoad: function(t) {
        var e = this;
        t.t && (a.globalData.refer = t.t), a.auth(function(a) {
            e.load_top("today");
        });
    },
    today: function() {
        this.load_top("today"), this.setData({
            active: "today"
        });
    },
    gameer: function() {
        wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/account/gamecode",
            data: {
                token: a.globalData.userInfo.token
            },
            success: function(a) {
                wx.previewImage({
                    current: "",
                    urls: [ a.data ]
                });
            }
        });
    },
    yestoday: function() {
        this.load_top("lastday"), this.setData({
            active: "yestoday"
        });
    },
    weeks: function() {
        this.load_top("week"), this.setData({
            active: "weeks"
        });
    },
    loadmore: function() {
        var a = this;
        if (a.data.datalist.length > a.data.topdata.length) {
            a.data.page++, wx.showToast({
                title: "加载中...",
                icon: "none"
            }), console.log(a.data.page);
            var t = 50 * a.data.page, e = 50 * (a.data.page + 1), o = a.data.datalist.slice(t, e);
            a.data.topdata = a.data.topdata.concat(o), a.setData({
                topdata: a.data.topdata
            });
        }
    },
    load_top: function(t) {
        var e = this;
        wx.showLoading({
            title: "加载中"
        }), wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/answer/ranking",
            data: {
                token: a.globalData.userInfo.token,
                types: t
            },
            success: function(a) {
                wx.hideLoading(), e.data.page = 0, e.data.datalist = a.data.data, e.data.topdata = e.data.datalist.slice(0, 50), 
                1 == a.data.ret && e.setData({
                    topdata: e.data.topdata,
                    curr: a.data.curr
                });
            }
        });
    },
    redo: function() {
        wx.navigateTo({
            url: "/pages/answer/start"
        });
    },
    onShareAppMessage: function() {
        return {
            title: "我在吊装江湖排第" + this.data.curr.rownum + "，看看你能排第几？",
            path: "/pages/answer/start?t=" + a.getcsid(),
            success: function(a) {}
        };
    }
});