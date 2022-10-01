var a = require("../../utils/util.js");

Page({
    data: {
        headline_id: "",
        page: 0,
        list: [],
        state: !0,
        refresh: !0,
        isLoadData: !1,
        pfmOpt: {
            isRefreshTopHeight: !1,
            prevIndex: 0,
            index1: -1,
            index2: 100,
            topHeight: 0,
            showNum: 15
        }
    },
    onLoad: function(t) {
        a.pageFun.isGoAuthorise(), t = a.pageFun.cacheData(t), this.data.headline_id = t.headline_id, 
        this.loadData();
    },
    onHide: function() {
        getApp().updateVedio("videoHidden");
    },
    onPageScroll: function(t) {
        a.pageFun.performanceOptimize(t, this);
    },
    onShareAppMessage: function(t) {
        return t.target.dataset.item.article_type = 1, a.shareArticle(t);
    },
    onPullDownRefresh: function() {
        this.data.isLoadData || (this.setData({
            state: !0
        }), this.data.page = 0, this.data.refresh = !0, this.loadData());
    },
    onReachBottom: function() {
        this.data.isLoadData || (this.data.refresh = !1, this.loadData());
    },
    loadData: function() {
        this.data.isLoadData = !0;
        var t = this.data;
        if (t.state) {
            var e = this;
            a.pageAjax.callAjax({
                url: "list_gifnews",
                params: {
                    headline_id: t.headline_id,
                    page: t.page
                },
                success: function(a) {
                    e.data.isLoadData = !1, wx.stopPullDownRefresh();
                    var i = a.result;
                    wx.setNavigationBarTitle({
                        title: i.headline.title
                    });
                    var s = i.news;
                    s.forEach(function(a) {
                        a.pictures.forEach(function(a) {
                            var t = a.resource_size;
                            t && "string" == typeof t && (a.resource_size = JSON.parse(t));
                        }), a.source = a.create_time && a.create_time.substr(-5) + " " + a.chan_name;
                    }), t.refresh || (s = t.list.concat(s)), e.setData({
                        list: s
                    }), t.page++, s.length >= i.count && e.setData({
                        state: !1
                    });
                },
                fail: function() {
                    e.data.isLoadData = !1, wx.stopPullDownRefresh();
                }
            });
        }
    }
});