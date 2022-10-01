var a = require("../../../7931C4950691379C1F57AC929AD2E9B3.js"), t = getApp();

Page({
    data: {
        imagesShowData: [],
        current: 0
    },
    onLoad: function(a) {
        "formEditMinimalist" == a.main && this.setData({
            imagesShowData: getCurrentPages()[getCurrentPages().length - 2].data.photoList,
            current: a.currentindex
        });
    },
    deleteImage: function(t) {
        var e = this, r = this, s = getCurrentPages()[getCurrentPages().length - 2];
        a.deletemodal("要删除这张照片吗？", function() {
            r.data.imagesShowData.splice(r.data.current, 1), r.data.current > r.data.imagesShowData.length - 1 ? r.setData({
                current: r.data.imagesShowData.length - 1,
                imagesShowData: r.data.imagesShowData
            }) : r.setData({
                imagesShowData: r.data.imagesShowData
            }), s.setData({
                photoList: e.data.imagesShowData
            }), r.data.imagesShowData.length <= 0 && (getCurrentPages()[getCurrentPages().length - 2].data.photoList = e.data.imagesShowData, 
            getCurrentPages()[getCurrentPages().length - 2].data.photoPre = !0, wx.navigateBack({
                delta: 1
            }));
        });
    },
    swiper: function(a) {
        this.data.current = a.detail.current;
    },
    onShareAppMessage: function() {
        return a.shareAppMessa({
            title: "我向您推荐“递名片”",
            path: "pages/cardMy/about/about?shareOthers=imagesShow&shareType=05",
            imageUrl: t.source.shareImage
        });
    }
});