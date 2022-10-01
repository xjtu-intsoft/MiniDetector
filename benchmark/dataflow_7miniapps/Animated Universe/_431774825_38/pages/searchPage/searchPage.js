var a = require("../../utils/util.js"), t = a.pageFun.stream.streamIpHome, e = require("../../utils/event.js"), s = 0;

Page({
    data: {
        page: 1,
        list: [],
        value: "",
        showType: 1,
        isLoadData: !1,
        hasData: !0
    },
    onLoad: function(a) {
        var t = this, e = a.showType, s = a.value;
        s && (2 != e && 3 != e || this.setData({
            showType: a.showType
        }, function() {
            t.getSearchData(s);
        }), this.selectComponent(".search-top").write({
            detail: {
                value: s
            }
        }));
    },
    onShow: function() {
        s = a.pageFun.statsEventDuration();
    },
    onHide: function() {
        var a = this.data;
        a.value, a.showType;
        this.eventStat("searchResultPageLeave");
    },
    onUnload: function() {
        var a = this.data.showType;
        2 == a ? this.eventStat("searchPageNoResultTapReturnBtn") : 3 == a && this.eventStat("searchPageHasResultTapReturnBtn"), 
        this.eventStat("searchResultPageLeave");
    },
    eventStat: function(t) {
        "searchResultPageLeave" == t ? e.mtaEvent("searchResultPageLeave", this.data.value, a.pageFun.statsEventDuration(s)) : e.mtaEvent(t);
    },
    onReachBottom: function() {
        var a = this.data;
        a.isLoadData || a.hasData && this.loadData();
    },
    onShareAppMessage: function(a) {
        var t = this.data, s = t.value;
        return e.mtaEvent("searchResultPageShare", s), {
            title: s + "表情了解一下",
            path: "/pages/searchPage/searchPage?value=" + s + "&showType=" + t.showType
        };
    },
    isGoIpHome: function() {
        var e = this, s = this.data;
        a.pageFun.localStorage("historyData", s.value), this.selectComponent(".search-default").refreshHistory(), 
        a.pageAjax.callAjax({
            url: "ipaccount/search",
            params: {
                q: s.value
            },
            method: "GET",
            notUseCodeZero: !0,
            success: function(a) {
                if (405 == a.code) e.loadData(); else try {
                    var s = {
                        type: t,
                        ip_id: a.result.guid
                    };
                    wx.navigateTo({
                        url: "/pages/streamImages/streamImages?item=" + JSON.stringify(s)
                    });
                } catch (a) {}
            }
        });
    },
    loadData: function() {
        var t = this, s = this.data;
        s.value && (s.isLoadData = !0, a.pageAjax.callAjax({
            host: "host2",
            url: "copyright/search",
            params: {
                q: s.value,
                size: 18,
                p: s.page
            },
            method: "GET",
            notUseCodeZero: !0,
            success: function(o) {
                if (s.isLoadData = !1, 0 == o.status) {
                    var i = o.data;
                    i.length || s.list.length ? (3 != s.showType && t.setData({
                        showType: 3
                    }), 1 == s.page ? (e.mtaEvent("searchResultPageView", s.value), s.list = i) : s.list = s.list.concat(i), 
                    t.selectComponent(".search-data").showData({
                        list: s.list,
                        dict: {
                            url: "main"
                        },
                        searchText: s.value
                    }), o.pagination.total_count - s.list.length <= 0 && (t.selectComponent(".search-data").switchState(!1), 
                    s.hasData = !1), s.page++) : (e.mtaEvent("searchPageNoResultShow"), t.setData({
                        showType: 2
                    }));
                } else wx.showToast({
                    title: a.apiFailUserInfo,
                    icon: "none"
                });
            },
            fail: function() {
                s.isLoadData = !1;
            }
        }));
    },
    search: function(a) {
        this.getSearchData(a.detail);
    },
    getSearchData: function(a) {
        var t = this.data;
        t.isLoadData || (t.list = [], t.hasData = !0, t.value = a, t.page = 1, this.selectComponent(".search-data").switchState(!0), 
        e.mtaEvent("searchPageAction", t.value), this.isGoIpHome());
    },
    switchDefault: function() {
        1 != this.data.showType && this.setData({
            showType: 1
        });
    },
    clickLabel: function(a) {
        this.search(a), this.selectComponent(".search-top").clickLabel(a.detail);
    },
    commonEventStat: function(a) {
        for (var t = [ "input", "search", "clearInput", "commonLabel", "historyLabel", "clearHistory" ].length, e = 0; e < t; e++) ;
    }
});