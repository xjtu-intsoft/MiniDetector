function i(i, t, e) {
    return t in i ? Object.defineProperty(i, t, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[t] = e, i;
}

var t = require("../../../utils/util.js"), e = require("../../../utils/event.js");

Component({
    properties: {
        item: Object
    },
    data: {
        clickItem: {},
        bk_id: "",
        list: []
    },
    attached: function() {
        var i = this.data.item;
        i.baike.forEach(function(i) {
            i.bgColor = t.pageFun.randomColor();
        }), i.baike && this.setData({
            bk_id: i.bk_id,
            list: i.baike
        });
    },
    methods: {
        loadImg: function(t) {
            var e = "list[" + t.target.dataset.index + "].bgColor";
            this.setData(i({}, e, ""));
        },
        goWiki: function() {
            wx.navigateTo({
                url: "/pages/dynamicWiki/dynamicWiki?bk_id=" + this.data.item.bk_id
            });
            var i = this;
            wx.getStorage({
                key: "user_Id",
                success: function(t) {
                    e.mtaEvent("baike_detail", t.data, i.data.item.gifnews_id, i.data.item.bk_id);
                }
            });
        },
        goPage: function(i) {
            var a = this.data, o = i.currentTarget.dataset.clickitem, d = wx.getStorageSync("user_Id"), r = {
                "相关朋友圈图": "toutiaoBaikeModuleRelateFriendPic",
                "相关表情": "toutiaoBaikeModuleRelateExpression",
                "朋友圈组图": "toutiaoBaikeModuleFriendGroupPic",
                "相关图片": "toutiaoBaikeModuleRelatePic",
                "相关头像": "toutiaoBaikeModuleRelateAvatar",
                "相关壁纸": "toutiaoBaikeModuleRelateWallpaper",
                "情侣头像": "toutiaoBaikeModuleLoversAvatar",
                "花式九宫格": "toutiaoBaikeModuleFancySudoku"
            };
            r[o.title] && e.mtaEvent(r[o.title], d, a.item.gifnews_id, a.item.bk_id, o.bkm_id);
            var u = {
                type: 1,
                params: {
                    gifnews_id: a.item.gifnews_id,
                    bk_id: a.item.bk_id,
                    bkm_id: o.bkm_id,
                    bkp_id: o.picture_url.piclist[0].bkp_id
                }
            };
            t.pageFun.goImageDetail(u);
        },
        click: function(i) {
            t.submitFormId(i.detail.formId);
        }
    }
});