function t(t) {
    s.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "user/showPosterImageIds.do",
        data: o.getBaseRequest(),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            s.dismissLoading();
            var o = s.transformSuccessData(e);
            if (i.checkResultCode(o)) {
                for (var a = o.resultBody, n = new Array(), r = 0; r < a.length; r++) {
                    var u = a[r], c = getApp().globalData.userSessionId, l = getApp().globalData.urlHost + "user/showPosterImage.do";
                    l = l + "?imageId=" + u + "&userSessionId=" + c, n[r] = l;
                }
                t.setData({
                    pictures: n
                });
            }
        },
        fail: function(t) {
            s.dismissLoading(), s.showNetError();
        },
        complete: function(t) {}
    });
}

function e(t, e) {
    s.showLoading(), wx.downloadFile({
        url: e,
        header: {
            "content-type": "image/jpeg"
        },
        success: function(t) {
            s.dismissLoading(), 200 == t.statusCode && wx.saveImageToPhotosAlbum({
                filePath: t.tempFilePath,
                success: function(t) {
                    wx.showToast({
                        title: "保存成功"
                    });
                },
                false: function(t) {
                    wx.showToast({
                        title: "保存失败"
                    });
                }
            });
        },
        fail: function(t) {
            s.dismissLoading(), wx.showToast({
                title: "下载图片失败"
            });
        },
        complete: function(t) {}
    });
}

Page({
    data: {
        pictures: [],
        currentImgPosition: 0
    },
    onLoad: function(e) {
        t(this);
    },
    onShow: function() {},
    onChangeSwiper: function(t) {
        var e = t.detail.current, s = this.data.pictures[e];
        this.setData({
            currentImgPosition: e,
            currentImg: s
        });
    },
    onChosePicture: function(t) {
        var e = t.currentTarget.dataset.position, s = this.data.pictures[e];
        this.setData({
            currentImgPosition: e,
            currentImg: s
        });
    },
    onSavePicture: function(t) {
        var s = this.data.pictures[this.data.currentImgPosition];
        wx.showModal({
            title: "提示",
            content: "是否要保存图片",
            success: function(t) {
                t.confirm && e(0, s);
            }
        });
    },
    onShareAppMessage: function() {
        return s.getShareInfo();
    }
});

var s = require("../../utils/util.js"), o = require("../../utils/requestUtil.js"), i = require("../../utils/resultCodeUtil.js");

new Array();