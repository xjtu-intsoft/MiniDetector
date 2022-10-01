var t = require("../../utils/event.js"), e = require("../../utils/util.js"), a = 0;

Page({
    data: {
        url: "",
        opt: {}
    },
    onLoad: function(t) {
        this.setData({
            opt: t
        }), t.gifnews_id ? this.setData({
            url: t.url,
            gifnews_id: t.gifnews_id,
            theme_id: t.theme_id
        }) : this.setData({
            url: t.url
        });
    },
    onShow: function() {
        if (this.data.gifnews_id) {
            a = Date.parse(new Date());
            var e = wx.getStorageSync("user_Id");
            t.mtaEvent("newsHrefShow", e, this.data.gifnews_id, this.data.theme_id);
        }
    },
    onUnload: function() {
        if (this.data.gifnews_id) {
            var e = Date.parse(new Date()) - a, i = wx.getStorageSync("user_Id");
            t.mtaEvent("newsHrefReturn", i, this.data.gifnews_id, this.data.theme_id, e);
        }
    },
    onShareAppMessage: function(t) {
        return {
            path: e.pageFun.getPageParams("webview", this.data.opt),
            title: "我觉得这个小程序不错，发你看看"
        };
    }
});