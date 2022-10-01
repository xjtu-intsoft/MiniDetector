var a = require("../../utils/util.js"), t = require("../../utils/event.js"), e = getApp(), i = 0;

Page({
    data: {
        isAuthorise: !1,
        userInfo: {},
        features: [ {
            url: "/images/icon_activity.png",
            text: "我的活动"
        }, {
            url: "/images/icon_feedback.png",
            text: "意见反馈",
            type: "contact"
        }, {
            url: "/images/icon_questions.png",
            text: "宇宙宝典"
        } ],
        list: [],
        page: 0,
        hasData: !0,
        isLoadData: !1,
        clickNum: 0,
        oldTime: ""
    },
    onLoad: function() {
        wx.setNavigationBarTitle({
            title: ""
        }), a.verify.isFullObject(e.globalData.userInfo) && this.callInit();
    },
    clickNum: function() {
        var a = this.data, t = new Date().getTime();
        a.oldTime ? (t - a.oldTime <= 300 ? ++this.data.clickNum >= 4 && (wx.showLoading({
            duration: 3e3,
            title: wx.getStorageSync("user_Id") + ""
        }), wx.setStorageSync("openCount", !0), e.globalData.openCount = !0) : this.data.clickNum = 1, 
        a.oldTime = t) : (a.oldTime = t, this.data.clickNum = 1);
    },
    sendTestData: function() {
        a.pageAjax.testDataSend();
    },
    authorise: function() {
        var a = this;
        e.getLogin(function() {
            a.callInit();
        });
    },
    callInit: function() {
        a.pageFun.loadding(), this.setData({
            isAuthorise: !0,
            userInfo: e.globalData.userInfo
        }), this.loadData(), a.pageFun.refreshUserInfo();
    },
    onPullDownRefresh: function() {
        this.data.isAuthorise && this.refreshPage();
    },
    refreshPage: function() {
        this.data.isLoadData || (this.data.page = 0, this.data.hasData = !0, this.loadData());
    },
    onReachBottom: function() {
        this.data.isAuthorise && (this.data.isLoadData || this.loadData());
    },
    onShow: function() {
        var s = this;
        i = Date.parse(new Date());
        var o = wx.getStorageSync("user_Id");
        t.mtaEvent("myPageView", o), !this.data.isAuthorise && a.verify.isFullObject(e.globalData.userInfo) && this.callInit(), 
        this.data.isAuthorise && !this.data.isLoadData && this.selectComponent(".my-activity-win").isRefreshData(), 
        wx.getStorage({
            key: "addTextSuccess",
            success: function(a) {
                1 == a.data && (s.refreshData(), wx.setStorage({
                    key: "addTextSuccess",
                    data: null
                }));
            }
        });
    },
    onHide: function() {
        var a = Date.parse(new Date()) - i, e = wx.getStorageSync("user_Id");
        t.mtaEvent("myPageLeave", e, a);
    },
    onPageScroll: function(a) {
        if (this.data.isAuthorise) {
            var t = "";
            a.scrollTop > 45 && (t = e.globalData.userInfo.nickName), wx.setNavigationBarTitle({
                title: t
            });
        }
    },
    refreshData: function() {
        this.refreshPage();
    },
    loadData: function() {
        if (this.data.hasData) {
            this.data.isLoadData = !0;
            var t = this;
            a.pageAjax.callAjax({
                url: "ugc/list",
                params: {
                    page: this.data.page
                },
                method: "GET",
                success: function(e) {
                    var i = [];
                    e.result.forEach(function(t) {
                        t && i.push({
                            url: t,
                            bgColor: a.pageFun.randomColor()
                        });
                    }), 0 == i.length ? t.setData({
                        hasData: !1
                    }) : t.setData({
                        hasData: !0
                    }), 0 == t.data.page ? t.setData({
                        list: i
                    }, function() {
                        i.length && t.selectComponent(".mYproducts").receiveData(i, "refresh");
                    }) : t.setData({
                        list: t.data.list.concat(i)
                    }, function() {
                        t.selectComponent(".mYproducts").receiveData(i);
                    }), t.data.page++;
                },
                complete: function() {
                    t.data.isLoadData = !1, a.pageFun.closeLoadding(), wx.stopPullDownRefresh();
                }
            });
        }
    },
    goPageIndex: function() {
        t.mtaEvent("myPageGoIndex"), wx.switchTab({
            url: "/pages/index/index"
        });
    },
    goPage: function(e) {
        var i = e.currentTarget.dataset.index, s = wx.getStorageSync("user_Id");
        2 == i ? (t.mtaEvent("valuableBook", s), a.pageAjax.callAjax({
            url: "valuable_book",
            method: "GET",
            success: function(a) {
                wx.navigateTo({
                    url: "/pages/webview/webview?url=" + a.result
                });
            }
        })) : 0 == i ? (t.mtaEvent("activityListView", s), wx.navigateTo({
            url: "/pages/activityList/activityList"
        })) : t.mtaEvent("customerService", s);
    }
});