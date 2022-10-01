var t = require("../../../../utils/util.js"), e = require("../../../../utils/event.js");

Component({
    data: {
        titleCommenUse: {
            leftIcon: {
                url: "/images/history.png",
                width: 34,
                height: 34
            },
            leftText: {
                text: "历史搜索",
                size: 32
            },
            rightText: {
                text: "清除历史",
                style: "color:#F3F3FF;font-size:28rpx;opacity:0.4992;"
            },
            useNew: !0
        },
        titleHistory: {
            leftIcon: {
                url: "/images/search_label.png",
                width: 38,
                height: 38
            },
            leftText: {
                text: "常用标签",
                size: 32
            },
            useNew: !0
        },
        commonLabels: [],
        historyList: []
    },
    attached: function() {
        this.refreshHistory(), this.loadData();
    },
    methods: {
        refreshHistory: function() {
            var e = t.pageFun.localStorage("historyData");
            this.setData({
                historyList: e
            });
        },
        loadData: function() {
            var e = this;
            t.pageAjax.callAjax({
                host: "host2",
                url: "netword/common",
                method: "GET",
                notUseCodeZero: !0,
                success: function(a) {
                    0 == a.status ? e.setData({
                        commonLabels: a.data
                    }) : wx.showToast({
                        title: t.apiFailUserInfo,
                        icon: "none"
                    });
                }
            });
        },
        clickLabel: function(t) {
            var a = t.target.dataset, s = a.item, i = a.label;
            "history" == i ? e.mtaEvent("searchPageTapHisSearch", s) : "commonUse" == i && e.mtaEvent("searchPageTapComLabel", s), 
            this.triggerEvent("clickLabel", s);
        },
        rtTextClick: function() {
            t.pageFun.localStorage("historyData", null), this.setData({
                historyList: []
            }), e.mtaEvent("searchPageTapClearHis");
        }
    }
});