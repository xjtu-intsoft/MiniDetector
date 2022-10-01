function e(e, t, i) {
    return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = i, e;
}

var t = require("../../../../utils/util.js"), i = require("../../../../utils/event.js");

Component({
    properties: {
        item: Object,
        gifnews: Object
    },
    data: {
        title: {
            leftText: {
                text: "",
                size: "36"
            },
            bg: "1a1a1a",
            rightText: {
                text: "更多",
                size: "28"
            },
            rightIcon: {
                url: "../../images/icon_see_all.png",
                width: "14",
                height: "24"
            },
            leftIcon: {
                url: "../../images/line_highlight.png",
                width: 8,
                height: 28
            }
        },
        showItem: {}
    },
    methods: {
        goPage: function(e) {
            var a = this.data, r = {
                type: 1,
                params: {
                    gifnews_id: a.gifnews.gifnews_id,
                    bk_id: a.gifnews.bk_id,
                    bkm_id: a.item.bkm_id,
                    bkp_id: e.currentTarget.dataset.item.bkp_id
                }
            }, n = wx.getStorageSync("user_Id");
            i.mtaEvent("baikePageViewPic", n, a.gifnews.bk_id, a.item.bkm_id, e.currentTarget.dataset.item.bkp_id), 
            t.pageFun.goImageDetail(r);
        },
        goMore: function() {
            var e = this.data, t = (e.item, {
                type: 2,
                picture_count: e.item.picture_count,
                gifnews_id: e.gifnews.gifnews_id,
                bk_id: e.gifnews.bk_id,
                bkm_id: e.item.bkm_id
            }), a = wx.getStorageSync("user_Id");
            i.mtaEvent("baikePageViewMore", a, e.gifnews.bk_id, e.item.bkm_id), wx.navigateTo({
                url: "/pages/streamImages/streamImages?item=" + JSON.stringify(t)
            });
        },
        loadImg: function(t) {
            var i = "showItem.picture_url[" + t.target.dataset.index + "].bgColor";
            this.setData(e({}, i, ""));
        }
    },
    attached: function() {
        var e = this.data.item, i = e.picture_url;
        4 == e.k_type && i.forEach(function(e) {
            e.size = t.format.toObject(e.size), e.realSize = {
                height: 330,
                width: 330 * e.size.width / e.size.height
            };
        }), e.picture_url.forEach(function(e) {
            e.bgColor = t.pageFun.randomColor();
        }), this.setData({
            "title.leftText.text": e.title,
            showItem: e
        }), e.picture_count - 3 <= 0 && this.setData({
            "title.rightText": null,
            "title.rightIcon": null
        });
    }
});