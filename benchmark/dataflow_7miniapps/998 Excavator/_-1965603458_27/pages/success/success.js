var e = getApp();

Page({
    data: {
        equipmentPic: [],
        share_msg: "",
        introduce: "",
        qrCode: "",
        showModal_save: !1,
        showModal_pages: !0,
        tempFilePath: "",
        share_box: !1,
        share_animate: "",
        price: "",
        issue_num: 58669,
        touxiang: []
    },
    onLoad: function(e) {
        var t = this;
        wx.getStorage({
            key: "share",
            success: function(e) {
                console.log(e), t.setData({
                    equipmentPic: e.data.equipmentPic,
                    share_msg: e.data.share_msg,
                    introduce: e.data.introduce,
                    price: e.data.price
                });
            }
        }), setInterval(function() {
            var e = t.data.issue_num;
            ++e, t.setData({
                issue_num: e
            });
        }, 1e4);
    },
    gome: function() {
        wx.redirectTo({
            url: "/pages/myissue/myissue"
        });
    },
    get_touxiang: function() {
        var t = this;
        wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/data/tempimage",
            data: {
                token: e.globalData.userInfo.token
            },
            success: function(e) {
                console.log(e), t.setData({
                    touxiang: e.data
                });
            }
        });
    },
    share_way: function(e) {
        this.setData({
            share_box: !0,
            share_animate: "animation: show_share .5s;animation-iteration-count:1;"
        });
    },
    hide_shareBox: function() {
        this.setData({
            share_box: !1
        });
    },
    onShareAppMessage: function(t) {
        return {
            title: this.data.share_msg,
            path: "/pages/index/index?t=" + e.getcsid(),
            success: function(e) {
                wx.navigateTo({
                    url: "/pages/myissue/myissue"
                });
            },
            fail: function() {
                wx.showModal({
                    title: "提示",
                    content: "发布成功即可优先展现靠前",
                    showCancel: !1,
                    success: function() {
                        wx.navigateTo({
                            url: "/pages/myissue/myissue"
                        });
                    }
                });
            }
        };
    },
    saveCanvas: function() {
        var e = this;
        e.setData({
            share_box: !1,
            showModal_save: !0,
            showModal_pages: !1
        }), e.createNewImg();
    },
    setCanvasSize: function() {
        var e = {};
        try {
            var t = wx.getSystemInfoSync(), a = .77 * t.windowWidth, s = t.windowWidth * (970 / 750);
            e.w = a, e.h = s;
        } catch (e) {}
        return e;
    },
    settextFir: function(t) {
        var a = this.setCanvasSize(), s = e.globalData.userInfo.username;
        t.setFontSize(14), t.setTextAlign("left"), t.setFillStyle("#33B2E5"), t.fillText(s, a.w / 4.5, .08 * a.h), 
        t.stroke();
    },
    settextSec: function(e) {
        var t = this.setCanvasSize();
        e.setFontSize(14), e.setTextAlign("center"), e.setFillStyle("#000000"), e.fillText("长按识别小程序查看详情", t.w / 2, .95 * t.h), 
        e.stroke();
    },
    settextDes: function(e) {
        var t = this, a = t.setCanvasSize(), s = t.data.share_msg;
        e.setFontSize(12), e.setTextAlign("left"), e.setFillStyle("#3392ff"), e.fillText(s, a.w / 4.5, .13 * a.h), 
        e.stroke();
    },
    createNewImg: function() {
        var t = this, a = t.setCanvasSize(), s = wx.createCanvasContext("myCanvas"), i = (e.globalData.userInfo.avatars, 
        t.data.qrCode), n = t.data.equipmentPic;
        wx.downloadFile({
            url: e.globalData.userInfo.avatars,
            success: function(e) {
                s.drawImage("/images/bg_img/bg.png", 0, 0, a.w, a.h), s.drawImage(e.tempFilePath, a.w / 20, .05 * a.h, .14 * a.w, .14 * a.w), 
                s.drawImage(i, a.w / 2.8, .72 * a.h, .29 * a.w, .29 * a.w), s.drawImage(n, a.w / 20, .15 * a.h, .9 * a.w, .9 * a.w), 
                t.settextFir(s), t.settextSec(s), t.settextDes(s), s.draw();
            }
        }), wx.showLoading({
            title: "生成中",
            icon: "loading",
            duration: 2e3
        }), setTimeout(function() {
            wx.canvasToTempFilePath({
                canvasId: "myCanvas",
                success: function(e) {
                    wx.hideLoading(), t.data.tempFilePath = e.tempFilePath;
                    e.tempFilePath;
                },
                fail: function(e) {}
            });
        }, 2e3);
    },
    save_Image: function() {
        var e = this;
        wx.saveImageToPhotosAlbum({
            filePath: e.data.tempFilePath,
            success: function(e) {
                wx.showToast({
                    title: "保存成功",
                    icon: "success",
                    duration: 1500
                });
            }
        });
    }
});