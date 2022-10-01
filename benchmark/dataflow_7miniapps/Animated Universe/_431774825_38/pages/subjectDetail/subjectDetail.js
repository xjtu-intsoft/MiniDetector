var t = getApp(), a = require("../../utils/util.js"), e = require("../../utils/event.js");

Page({
    data: {
        page: 0,
        state: !0,
        refresh: !0,
        desc: "",
        list: [],
        subject: {},
        article_id: "",
        isLoadData: !1
    },
    onLoad: function(t) {
        a.pageFun.isGoAuthorise(), (t = a.pageFun.cacheData(t)).scene && (t = {
            subject_id: decodeURIComponent(t.scene)
        }), this.data.article_id = t.subject_id, this.loadData();
    },
    onShow: function() {
        var t = wx.getStorageSync("user_Id"), a = this.data.subject;
        e.mtaEvent("subjectDetailView", t, a.subject_id, a.subject_type, a.show_type);
    },
    onUnload: function() {
        var t = wx.getStorageSync("user_Id"), a = this.data.subject;
        e.mtaEvent("subjectDetailReturn", t, a.subject_id, a.subject_type);
    },
    onPullDownRefresh: function() {
        this.data.isLoadData || (this.setData({
            state: !0
        }), this.data.page = 0, this.data.refresh = !0, this.loadData());
    },
    onReachBottom: function() {
        this.data.isLoadData || (this.data.refresh = !1, this.loadData());
    },
    onShareAppMessage: function(e) {
        if (a.pageFun.cacheTesterData(e.from, "subject_id:" + this.data.article_id), "button" === e.from) {
            var s = e.target.dataset.item;
            return {
                title: s.title,
                imageUrl: a.toolFuns.isGIFIphone(s.piclist[t.globalData.slidetIndex].resource_url)
            };
        }
        return {
            title: "我觉得这个小程序不错，发你看看"
        };
    },
    loadData: function() {
        this.data.isLoadData = !0;
        var t = this, e = t.data;
        e.state && a.pageAjax.callAjax({
            url: "show_subject",
            params: {
                article_id: e.article_id,
                page: e.page
            },
            success: function() {
                t.data.isLoadData = !1, wx.stopPullDownRefresh();
                var a = data.result, s = a.list;
                s.forEach(function(t) {
                    t.article_id = e.article_id, t.piclist && t.piclist.forEach(function(t, a, e) {
                        if (t) {
                            var s = t.resource_size;
                            s && "string" == typeof s && (t.resource_size = JSON.parse(s));
                        } else e.splice(a, 1);
                    });
                }), e.refresh || (s = e.list.concat(s)), t.setData({
                    list: s,
                    subject: a.subject
                }), a.max_page < ++e.page && t.setData({
                    state: !1
                });
            },
            fail: function() {
                t.data.isLoadData = !1, wx.stopPullDownRefresh();
            }
        });
    }
});