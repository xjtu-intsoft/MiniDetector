var t = require("../../utils/mta_analysis.js"), e = require("../../utils/util.js"), a = require("../../utils/event.js"), i = 0;

Page({
    data: {
        timestamp: 0,
        banner: {
            firstText: "动图头条",
            secondText: "只看精彩，聊天有料"
        },
        list: [],
        page: 0,
        state: !0,
        refresh: !0,
        isLoadData: !1,
        titleState: !1,
        isIphone: !0,
        msg: "",
        isShowTip: !1,
        tipHeight: 50,
        pfmOpt: {
            isRefreshTopHeight: !1,
            prevIndex: 0,
            index1: -1,
            index2: 100,
            topHeight: 0,
            showNum: 15
        },
        httpFail: !1
    },
    deleteTip: function() {
        this.data;
        wx.setStorageSync("isHideIndexTip", 1), this.setData({
            isShowTip: !1,
            tipHeight: 50
        });
    },
    calMsg: function() {
        if (!wx.getStorageSync("isHideIndexTip")) {
            var t, e;
            -1 != wx.getSystemInfoSync().system.indexOf("iOS") ? (t = "小程序", e = !0) : (t = "桌面", 
            e = !1), this.setData({
                msg: t,
                isShowTip: !0,
                tipHeight: 85,
                isIphone: e
            });
        }
    },
    textClick: function(t) {
        e.indexSubjectGoPage(t.detail);
    },
    viewAll: function(t) {
        var e = t.currentTarget.dataset.headline_id, i = wx.getStorageSync("user_Id");
        a.mtaEvent("toutiaoNewsAll", i, e), wx.navigateTo({
            url: "/pages/gifnewsList/gifnewsList?headline_id=" + e
        });
    },
    goStreamImages: function(t) {
        var e = t.currentTarget.dataset.item, i = wx.getStorageSync("user_Id"), s = {
            theme_id: e.show_all,
            type: 3
        };
        a.mtaEvent("toutiaoOnePicSubjectViewAll", i, e.show_type, e.subject_id, e.subject_type), 
        wx.navigateTo({
            url: "/pages/streamImages/streamImages?item=" + JSON.stringify(s)
        });
    },
    onPullDownRefresh: function() {
        this.data.isLoadData || this.refreshState();
    },
    refreshState: function() {
        this.setData({
            state: !0
        }), this.data.page = 0, this.data.refresh = !0, this.setData({
            list: []
        }), this.loadData();
    },
    onReachBottom: function() {
        var t = this.data;
        t.isLoadData || (t.refresh = !1, this.loadData());
    },
    onShareAppMessage: function(t) {
        return e.shareArticle(t);
    },
    onShow: function() {
        if (!this.data.isLoadData) if (0 == this.data.list.length) wx.pageScrollTo({
            scrollTop: 0,
            duration: 0
        }), this.refreshState(); else {
            var t = new Date().getTime();
            this.data.timestamp && t - this.data.timestamp >= 18e5 && (wx.pageScrollTo({
                scrollTop: 0,
                duration: 0
            }), this.refreshState());
        }
        i = Date.parse(new Date());
        var e = wx.getStorageSync("user_Id");
        a.mtaEvent("toutiaoPageView", e);
    },
    onHide: function() {
        getApp().updateVedio("videoHidden");
        var t = Date.parse(new Date()) - i, e = wx.getStorageSync("user_Id");
        a.mtaEvent("toutiaoPageLeave", e, t);
    },
    onLoad: function() {
        e.pageFun.isGoAuthorise(), wx.setNavigationBarTitle({
            title: ""
        }), this.calMsg(), this.loadData(), t.Page.init();
    },
    onPageScroll: function(t) {
        e.pageFun.performanceOptimize(t, this), e.pageFun.switchTitle(t, this, "动图头条", ".index-banner", this.data.tipHeight);
    },
    loadData: function() {
        function t() {
            wx.stopPullDownRefresh(), i.isLoadData = !1, wx.showToast({
                title: "数据异常",
                icon: "none"
            }), a.setData({
                httpFail: !0
            });
        }
        var a = this, i = this.data;
        i.httpFail && this.setData({
            httpFail: !1
        });
        try {
            if (i.isLoadData = !0, !i.state) return;
            var s = i.list;
            e.pageAjax.callAjax({
                url: "list_article",
                params: {
                    start: i.page
                },
                success: function(r) {
                    try {
                        a.data.isLoadData = !1, a.data.timestamp = new Date().getTime(), wx.stopPullDownRefresh();
                        var n = r.result, o = [];
                        n.list.forEach(function(t) {
                            var a = {
                                leftIcon: {
                                    url: "line_highlight",
                                    width: 8,
                                    height: 28
                                },
                                leftText: {
                                    size: 40,
                                    text: ""
                                },
                                rightIcon: {
                                    url: "icon_see_all",
                                    width: 12,
                                    height: 30
                                },
                                rightText: {
                                    size: 24,
                                    text: "查看全部"
                                },
                                bg: "000",
                                padding: "20rpx 24rpx 16rpx"
                            };
                            if (1 == t.article_type) t.news.forEach(function(i, s) {
                                0 == s && (a.leftText.text = t.headline.title || "", i.titleTemplate = a, i.headline_id = t.headline.headline_id), 
                                i.article_type = 1, i.video_url = i.video_url.trim(), i.source = i.create_time && i.create_time.substr(-5) + " " + i.chan_name, 
                                i.pictures.forEach(function(t) {
                                    t.resource_size = e.format.toObject(t.resource_size);
                                }), o.push(i);
                            }); else if (2 == t.article_type) try {
                                var i = t.subject;
                                i.article_type = 2, a.leftText.text = i.subject_show_name || "", i.title = a, i.desc = i.subject_desc, 
                                e.verify.isFullObject(i.subscribe_tag) && (i.showSubscribe = !0), (!i.show_all || i.show_all <= 0) && (delete i.title.rightText, 
                                delete i.title.rightIcon), o.push(i);
                            } catch (t) {} else 3 == t.article_type && t.ip_list.forEach(function(t) {
                                try {
                                    var a = {
                                        article_type: 3,
                                        title: {
                                            leftIcon: {
                                                url: "line_highlight",
                                                width: 8,
                                                height: 28
                                            },
                                            leftText: {
                                                size: 40,
                                                text: t.name
                                            },
                                            ipHome: !0
                                        },
                                        desc: t.description,
                                        ip_list: t
                                    };
                                    t.activity && (a.title.leftSecondIcon = {
                                        url: e.format.urlFormat("activity"),
                                        layout: "width:142rpx;height:42rpx;margin-left:22rpx;"
                                    }), o.push(a);
                                } catch (t) {}
                            });
                        });
                        s.length;
                        i.refresh || (o = i.list.concat(o)), a.setData({
                            list: o
                        }), i.page = n.start, 0 == n.next && a.setData({
                            state: !1
                        });
                    } catch (e) {
                        t();
                    }
                },
                fail: function() {
                    wx.stopPullDownRefresh(), a.data.isLoadData = !1, a.setData({
                        httpFail: !0
                    });
                }
            });
        } catch (e) {
            t();
        }
    }
});