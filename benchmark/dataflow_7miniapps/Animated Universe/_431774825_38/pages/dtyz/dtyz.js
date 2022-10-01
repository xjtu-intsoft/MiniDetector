var a = require("../../utils/util.js"), e = require("../../utils/event.js"), t = 0;

Page({
    data: {
        list: [],
        isLoadData: !1,
        topDesc: {
            firstText: "动图宇宙",
            secondText: "快速了解，聊天有料"
        },
        titleState: !1
    },
    goIndex: function() {
        e.mtaEvent("subscribePageGoIndex"), wx.switchTab({
            url: "/pages/index/index"
        });
    },
    onShow: function(s) {
        this.data.isLoadData || wx.getStorageSync("authoriseSuccessBack") && (wx.setStorageSync("authoriseSuccessBack", ""), 
        a.pageFun.loadding(), this.loadData()), t = Date.parse(new Date());
        var i = wx.getStorageSync("user_Id");
        e.mtaEvent("subscribePageView", i);
    },
    onHide: function() {
        var a = Date.parse(new Date()) - t, s = wx.getStorageSync("user_Id");
        e.mtaEvent("subscribePageLeave", s, a);
    },
    onPullDownRefresh: function() {
        this.data.isLoadData || this.loadData();
    },
    onLoad: function() {
        a.pageFun.loadding(), wx.setNavigationBarTitle({
            title: ""
        }), this.loadData();
    },
    onPageScroll: function(e) {
        a.pageFun.switchTitle(e, this, "动图宇宙", ".dtyz-banner");
    },
    loadData: function() {
        this.data.isLoadData = !0;
        var e = this;
        a.pageAjax.callAjax({
            url: "subscribe_info",
            success: function(t) {
                e.data.isLoadData = !1, a.pageFun.closeLoadding(), wx.stopPullDownRefresh();
                var s = t.result;
                s.forEach(function(a, e) {
                    var t = [], s = a.list;
                    if (a.top = {
                        text1: a.ssg_name,
                        text2: a.ssg_desc
                    }, 0 == e) {
                        a.type = 1;
                        for (var i = 0, n = s.length; i < n; i += 4) t.push(s.slice(i, i + 4));
                        t[0] && t[0].length >= 3 ? a.showClass = "subscribe-container-swiperHeight" : a.showClass = "subscribe-container-swiperLow";
                    } else {
                        a.type = 2;
                        for (var i = 0, n = s.length; i < n; i += 2) t.push(s.slice(i, i + 2));
                        a.showClass = "subscribe-container-swiperLow";
                    }
                    a.arr = t;
                }), e.setData({
                    list: s
                });
            },
            fail: function() {
                e.data.isLoadData = !1, a.pageFun.closeLoadding(), wx.stopPullDownRefresh();
            }
        });
    }
});