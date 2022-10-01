var e = require("../../utils/util.js"), a = require("../../utils/event.js"), t = 0;

Page({
    data: {
        item: {},
        result: [],
        bk_id: 0
    },
    onLoad: function(a) {
        e.pageFun.loadding(), e.pageFun.isGoAuthorise(), (a = e.pageFun.cacheData(a)).scene && (a = {
            bk_id: decodeURIComponent(a.scene)
        }), this.data.bk_id = a.bk_id, this.loadData(a);
    },
    onShow: function() {
        t = Date.parse(new Date());
        var e = this;
        wx.getStorage({
            key: "user_Id",
            success: function(t) {
                var i = t.data;
                a.mtaEvent("baikePageView", i, e.data.bk_id);
            }
        });
    },
    onUnload: function() {
        var e = Date.parse(new Date()) - t, i = wx.getStorageSync("user_Id");
        a.mtaEvent("baikePageLeave", i, this.data.bk_id, e);
    },
    shareCicle: function() {
        var t = wx.getStorageSync("user_Id");
        a.mtaEvent("baikePageFriends", t, this.data.bk_id), e.pageFun.drawImage(this.data.item, 1);
    },
    onShareAppMessage: function(t) {
        if (e.pageFun.cacheTesterData(t.from, "bk_id:" + this.data.bk_id), "button" === t.from) {
            var i = wx.getStorageSync("user_Id");
            return a.mtaEvent("baikePageShare", i, this.data.bk_id), {
                title: this.data.item.share_text
            };
        }
        return {
            title: "我觉得这个小程序不错，发你看看"
        };
    },
    loadData: function(a) {
        var t = this;
        e.pageAjax.callAjax({
            url: "baike_detail",
            params: {
                bk_id: a.bk_id
            },
            success: function(a) {
                e.pageFun.closeLoadding();
                var i = a.result, n = i.gifnews;
                if (n) {
                    n.dtmdHref = i.baike.href;
                    var s = n.pictures[0], r = e.format.toObject(s.resource_size);
                    n.showHeight = 386 * r.height * 2 / r.width;
                }
                t.setData({
                    result: i,
                    item: n
                });
            },
            fail: function() {
                e.pageFun.closeLoadding();
            }
        });
    }
});