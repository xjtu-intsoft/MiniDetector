var a = require("../../../@babel/runtime/helpers/interopRequireDefault"), e = a(require("../../../4F4638B00691379C292050B78222E9B3.js")), t = a(require("../../../595319F00691379C3F3571F767A1E9B3.js")), r = require("../../../7931C4950691379C1F57AC929AD2E9B3.js"), s = getApp();

(0, e.default)(t.default, {
    data: {
        imagesShowData: [],
        current: 0
    },
    onLoad: function(a) {
        console.log(this.store.data.cbData.desc), this.setData({
            imagesShowData: this.store.data.cbData.desc,
            current: a.currentindex
        });
    },
    deleteImage: function(a) {
        var e = this, t = this;
        r.deletemodal("要删除这张照片吗？", function() {
            t.data.imagesShowData.splice(t.data.current, 1), t.data.current > t.data.imagesShowData.length - 1 ? t.setData({
                current: t.data.imagesShowData.length - 1,
                imagesShowData: t.data.imagesShowData
            }) : t.setData({
                imagesShowData: t.data.imagesShowData
            }), e.store.data.cbData.desc = t.data.imagesShowData, e.update(), t.data.imagesShowData.length <= 0 && wx.navigateBack({
                delta: 1
            });
        });
    },
    swiper: function(a) {
        this.data.current = a.detail.current;
    },
    onShareAppMessage: function() {
        return r.shareAppMessa({
            title: "我向您推荐“递名片”",
            path: "pages/cardMy/about/about?shareOthers=imagesShow&shareType=05",
            imageUrl: s.source.shareImage
        });
    }
});