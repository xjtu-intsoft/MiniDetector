var t = require("../../utils/util.js"), i = require("../../utils/event.js"), a = t.pageFun.stream.streamIpHome;

Component({
    properties: {
        isShowActivity: Boolean
    },
    data: {
        winningList: [],
        hasPhone: !1,
        isShowActivity: !1,
        activityList: []
    },
    attached: function() {
        this.init();
    },
    methods: {
        init: function() {
            wx.getStorageSync("user_phone") && this.setData({
                hasPhone: !0
            }), this.loadData();
        },
        loadData: function() {
            var i = this;
            t.pageAjax.callAjax({
                url: "user/activity",
                success: function(t) {
                    i.setData({
                        winningList: t.result.winning_list,
                        activityList: t.result.activity_list
                    });
                }
            });
        },
        goBindPhonePage: function(t) {
            wx.navigateTo({
                url: "../bindPhone/bindPhone"
            });
        },
        isRefreshData: function() {
            !this.data.hasPhone && wx.getStorageSync("user_phone") && this.setData({
                hasPhone: !0
            });
        },
        closeNotify: function(i) {
            var a = this.data.winningList, e = i.target.dataset, s = this;
            t.pageAjax.callAjax({
                url: "/activity/prompt/del",
                params: {
                    ip_id: e.ip_id
                },
                success: function() {
                    a.splice(e.index, 1), s.setData({
                        winningList: a
                    });
                }
            });
        },
        viewDetails: function(t) {
            var e = t.currentTarget.dataset.ip_id, s = {
                type: a,
                ip_id: e
            };
            i.mtaEvent("activityListViewDetail", e), wx.navigateTo({
                url: "/pages/streamImages/streamImages?item=" + JSON.stringify(s)
            });
        }
    }
});