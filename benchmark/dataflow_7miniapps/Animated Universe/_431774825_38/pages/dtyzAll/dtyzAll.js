var e = require("../../utils/util.js");

Page({
    data: {
        activeIndex: 0,
        banner: [],
        theme_list: []
    },
    change: function(e) {
        this.setData({
            activeIndex: e.currentTarget.dataset.index
        });
    },
    onLoad: function(t) {
        var s = this;
        e.pageAjax.callAjax({
            url: "subscribe_detail",
            params: {
                ssg_id: t.ssg_id
            },
            success: function(e) {
                var t = e.result, a = {
                    firstText: t.ssg_name,
                    secondText: t.ssg_desc
                }, i = [];
                for (var n in t.theme_list) i.push({
                    key: n,
                    list: t.theme_list[n]
                });
                s.setData({
                    banner: a,
                    theme_list: i
                });
            }
        });
    }
});