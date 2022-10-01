function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var t, a = require("../../utils/util.js"), i = require("../../utils/event.js"), s = 0, r = a.pageFun.stream.streamManyImg, n = a.pageFun.stream.streamWiki, d = a.pageFun.stream.streamOneImg, o = a.pageFun.stream.streamIpHome, c = a.pageFun.imageDetail.imageDetailWiki, u = a.pageFun.imageDetail.imageDetailManySubject, l = a.pageFun.imageDetail.imageDetailOneSubject, m = a.pageFun.imageDetail.imageDetailIpHome;

Page({
    data: {
        item: {},
        sourceArr: (t = {}, e(t, r, 1), e(t, n, 2), e(t, d, 3), e(t, o, 6), t),
        list: [],
        result: {},
        page: 0,
        hasMoreData: !0,
        title: "",
        isLoadData: !1,
        isHideVideo: !0,
        isHidePop: !0,
        pfmOpt1: {
            isRefreshTopHeight: !1,
            prevIndex: 0,
            index1: -1,
            index2: 200,
            topHeight: 0,
            showNum: 30,
            columnFlag: "left",
            nodeIndexs: []
        },
        pfmOpt2: {
            isRefreshTopHeight: !1,
            prevIndex: 0,
            index1: -1,
            index2: 200,
            topHeight: 0,
            showNum: 30,
            columnFlag: "right",
            nodeIndexs: []
        },
        columnHeight: [ 0, 0 ]
    },
    onLoad: function(e) {
        try {
            e.item = decodeURIComponent(e.item);
        } catch (e) {}
        if (a.pageFun.isGoAuthorise(), (e = a.pageFun.cacheData(e)).scene) {
            var t = decodeURIComponent(e.scene).split(","), i = t[0];
            i == r ? e.article_id = t[1] : i == n ? e = {
                bk_id: t[1],
                bkm_id: t[2],
                picture_count: t[3]
            } : i == d ? e = {
                theme_id: t[1]
            } : i == o && (e = {
                ip_id: t[1]
            }), e.type = i, e = {
                item: JSON.stringify(e)
            };
        }
        this.setData({
            item: JSON.parse(e.item)
        }), this.loadData(), this.activity_share();
    },
    onShow: function() {
        s = Date.parse(new Date());
        var e = wx.getStorageSync("user_Id");
        this.data.item.type == r || this.data.item.type == d ? i.mtaEvent("subjectDetailView", e, this.data.item.article_id) : i.mtaEvent("baikeMorePageView", e, this.data.item.bk_id, this.data.item.bkm_id);
    },
    onHide: function() {
        this.goOtherPageStatsEvent();
    },
    onUnload: function() {
        this.goOtherPageStatsEvent();
        var e = Date.parse(new Date()) - s, t = wx.getStorageSync("user_Id"), a = this.data.item.type;
        a == r || a == d ? i.mtaEvent("subjectDetailReturn", t, this.data.item.article_id) : a == n ? i.mtaEvent("baikeMorePageReturn", t, this.data.item.bk_id, this.data.item.bkm_id, e) : a == o && i.mtaEvent("iphomeDetailReturn");
    },
    onPageScroll: function(e) {
        a.pageFun.performanceOptimize(e, this, "pfmOpt1"), a.pageFun.performanceOptimize(e, this, "pfmOpt2");
    },
    goOtherPageStatsEvent: function() {
        var e = this.data, t = e.item.type, r = e.result;
        t == o && i.mtaEvent("ipDetailPageLeave", r.name, r.guid, a.pageFun.statsEventDuration(s));
    },
    activity_share: function() {
        var e = this.data.item, t = wx.getStorageSync("user_Id");
        e.share_user_id && 0 != t && a.pageAjax.callAjax({
            url: "activity/share",
            params: {
                ip_id: e.ip_id,
                share_user_id: e.share_user_id,
                view_user_id: t
            },
            noDefaultFail: !0
        });
    },
    clickBanner: function() {
        var e = this.data.result, t = this;
        e.activity_banner ? (i.mtaEvent("ipDetailPageActivity", e.name, e.guid), a.pageFun.isHavePhone(function() {
            wx.navigateTo({
                url: "/pages/ipEvent/ipEvent?ip_id=" + e.guid
            });
        })) : e.mp4 && this.setData({
            isHideVideo: !1
        }, function() {
            wx.createVideoContext("myVideo", t).play();
        }), i.mtaEvent("ipHomeDetailTapBanner");
    },
    playEnd: function() {
        this.setData({
            isHideVideo: !0
        });
    },
    switchPop: function() {
        this.setData({
            isHidePop: !this.data.isHidePop
        }), i.mtaEvent("ipHomeDetailTapDetail");
    },
    goImageDetail: function(e) {
        var t = this.data.item, s = t.type, p = e.currentTarget.dataset.clickitem, h = p.page, g = wx.getStorageSync("user_Id");
        if (s == r) {
            _ = {
                type: l,
                params: {
                    subject_id: t.article_id,
                    sg_id: 0,
                    sp_id: e.currentTarget.dataset.clickitem.sp_id,
                    page: h
                }
            };
            i.mtaEvent("subjectDetailViewPic", g, t.article_id, 0, p.sp_id, p.resource_id);
        } else if (s == n) {
            _ = {
                type: c,
                params: {
                    gifnews_id: t.gifnews_id,
                    bk_id: t.bk_id,
                    bkm_id: t.bkm_id,
                    bkp_id: p.bkp_id,
                    page: h
                }
            };
            i.mtaEvent("baikeMorePageViewPic", g, t.bk_id, t.bkm_id, p.bkp_id, p.resource_id);
        } else if (s == d) {
            _ = {
                type: u,
                params: {
                    theme_id: t.theme_id,
                    subject_id: p.subject_id,
                    page: h
                }
            };
            i.mtaEvent("subjectDetailViewPic", g, t.article_id, 0, p.sp_id, p.resource_id);
        } else if (s == o) {
            var _ = {
                type: m,
                params: {
                    ip_id: t.ip_id,
                    id: p.id
                }
            };
            i.mtaEvent("ipHomeDetailViewPic");
        }
        a.pageFun.goImageDetail(_);
    },
    shareCicle: function(e) {
        var t = this.data, s = t.item, r = t.result, d = s.type, c = {
            list: this.data.list,
            item: s
        }, u = wx.getStorageSync("user_Id");
        if (d == n ? i.mtaEvent("baikeMorePageFriends", u, s.bk_id, s.bkm_id) : d == o ? i.mtaEvent("ipDetailPageFriends", r.name, r.guid) : i.mtaEvent("subjectDetailFriends", u, s.article_id), 
        d == o) {
            var l = r.mini_banner, m = a.format.toObject(r.mini_banner_size), p = m.width / m.height;
            a.pageFun.drawEWM({
                shareText1: r.name,
                shareText2: a.format.shortStr(r.description, 15),
                topUrl: l,
                guid: r.guid,
                whRate: p
            });
        } else a.pageFun.drawImage(c, "3");
    },
    onShareAppMessage: function(e) {
        var t = this.data, s = t.item, c = t.result, u = t.list, l = s.type, m = wx.getStorageSync("user_Id");
        if (l == n ? i.mtaEvent("baikeMorePageShare", m, s.bk_id, s.bkm_id) : l == o ? i.mtaEvent("ipDetailPageShare", c.name, c.guid) : i.mtaEvent("subjectDetailShare", m, s.article_id), 
        l == r) a.pageFun.cacheTesterData(e.from, "subject_id:" + s.article_id); else if (l == n) a.pageFun.cacheTesterData(e.from, "bk_id:" + s.bk_id); else if (l == d) try {
            a.pageFun.cacheTesterData(e.from, "subject_id:" + u[0].subject_id);
        } catch (e) {}
        return "button" === e.from ? {
            title: s.share_text
        } : {
            title: "我觉得这个小程序不错，发你看看"
        };
    },
    loadImg: function(t) {
        var a = "list[" + t.target.dataset.index + "].bgColor";
        this.setData(e({}, a, ""));
    },
    loadData: function() {
        var e = this.data, t = e.item;
        if (e.isLoadData = !0, e.hasMoreData) {
            var s = this, c = t.type, u = {
                page: this.data.page
            };
            if (c == r) {
                l = "show_subject";
                u.article_id = t.article_id;
            } else if (c == n) {
                l = "baike_module_pictures";
                u.bkm_id = t.bkm_id, u.bk_id = t.bk_id, a.pageAjax.callAjax({
                    url: "share_info",
                    params: {
                        bk_id: t.bk_id
                    },
                    success: function(e) {
                        t.share_text = e.result.share_text;
                    }
                });
            } else if (c == d) {
                l = "list_theme_subject";
                u.theme_id = t.theme_id;
            } else if (c == o) {
                var l = "ipaccount/detail";
                delete u.page, u.ip_id = t.ip_id;
            }
            a.pageAjax.callAjax({
                url: l,
                params: u,
                success: function(l) {
                    s.data.isLoadData = !1, wx.stopPullDownRefresh();
                    var m, p = l.result;
                    if (c == r) {
                        f = p.list;
                        m = p.subject.subject_show_name, t.share_text = p.subject.share_text;
                        for (var h = f.length - 1; h >= 0; h--) {
                            var g = f[h];
                            if (g) {
                                g.url = g.resource_url, g.text = g.title.trim();
                                var _ = a.format.toObject(g.resource_size);
                                g.height = _.height / _.width * 346, g.page = e.page;
                            } else f.splice(h, 1);
                        }
                    } else if (c == n) {
                        f = p.list;
                        m = p.title, f.forEach(function(t) {
                            if (t) {
                                t.url = t.picture_url;
                                var i = a.format.toObject(t.size);
                                t.height = i.height / i.width * 346, t.page = e.page;
                            }
                        });
                    } else if (c == d) m = (f = p)[0].theme_name, t.share_text = m, t.subject_id = f[0].subject_id, 
                    f.forEach(function(t) {
                        if (t && t.pictures && t.pictures[0]) {
                            t.text = t.subject_desc;
                            var i = t.pictures[0];
                            t.url = i.resource_url;
                            var s = a.format.toObject(i.resource_size);
                            t.height = s.height / s.width * 346, t.page = e.page;
                        }
                    }); else if (c == o) {
                        var f = p.emoticons;
                        p.smallDesc = p.description;
                        try {
                            p.description.length > 30 && (p.smallDesc = p.description.slice(0, 30) + "...");
                        } catch (e) {}
                        m = p.name, t.share_text = "《" + m + "》了解一下？", f.forEach(function(e) {
                            e && (e.url = e.main, e.height = e.height / e.width * 346);
                        }), s.setData({
                            result: p,
                            hasMoreData: !1
                        }), i.mtaEvent("ipDetailPageView", p.name, p.guid);
                    }
                    e.title || (wx.setNavigationBarTitle({
                        title: m
                    }), e.title = m);
                    var b = e.columnHeight, D = e.list.length;
                    f.forEach(function(t, i) {
                        t.url = a.toolFuns.imgToshort(t.url), t.bgColor = a.pageFun.randomColor(), b[0] <= b[1] ? (t.columnFlag = "left", 
                        b[0] += t.height, t.columnIndex = e.pfmOpt1.nodeIndexs.length, e.pfmOpt1.nodeIndexs.push(D + i)) : (t.columnFlag = "right", 
                        b[1] += t.height, t.columnIndex = e.pfmOpt2.nodeIndexs.length, e.pfmOpt2.nodeIndexs.push(D + i));
                    }), s.setData({
                        list: e.list.concat(f)
                    }), e.page++, u.article_id ? p.max_page < e.page && s.setData({
                        hasMoreData: !1
                    }) : u.bk_id ? s.data.item.picture_count - f.length <= 0 && s.setData({
                        hasMoreData: !1
                    }) : u.theme_id && 0 == f.length && s.setData({
                        hasMoreData: !1
                    });
                },
                fail: function() {
                    s.data.isLoadData = !1, wx.stopPullDownRefresh();
                }
            });
        }
    },
    onPullDownRefresh: function() {
        var e = this.data;
        this.data.isLoadData || (this.setData({
            hasMoreData: !0
        }), e.page = 0, e.columnHeight = [ 0, 0 ], e.pfmOpt1.nodeIndexs = [], e.pfmOpt2.nodeIndexs = [], 
        e.list = [], this.loadData());
    },
    onReachBottom: function() {
        this.data.isLoadData || this.loadData();
    }
});