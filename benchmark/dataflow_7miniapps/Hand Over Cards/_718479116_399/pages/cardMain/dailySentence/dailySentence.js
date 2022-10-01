require("../../../AFC697330691379CC9A0FF345133E9B3.js");

var t, e = require("../../../F672DA860691379C9014B281A112E9B3.js"), o = (require("../../../7931C4950691379C1F57AC929AD2E9B3.js"), 
getApp());

Page({
    data: {
        systemInfo: o.systemInfo,
        maskHidden: !0,
        topBg: "#EDEEF0",
        modalShow: !1
    },
    onLoad: function(n) {
        var s = this;
        console.log(n, "参数", o.systemInfo), o.systemInfo.screenWidth >= 414 && o.systemInfo.screenHeight > 736 ? this.setData({
            bigScreen: !0
        }) : this.setData({
            bigScreen: !1
        }), this.downloadImg(e.Config.restUrl + "img/dailySentenceImgByte?id=" + o.mycard.defCard.id + "&token=" + o.client.token, function(e) {
            s.setData({
                stImgUrl: e
            }), t = e, console.log(t, "要下载的背景图"), console.log(e, "结果");
        }), this.getUserSetting();
    },
    onShow: function() {},
    ss: function() {
        console.log("ss");
    },
    modalButton: function() {
        console.log("埋点803"), o.burying.setPoint(o, 803);
    },
    getUserSetting: function() {
        var t = this;
        o.getSettingMessage(function(e) {
            console.log(e, "授权信息123"), t.setData({
                getSettingMessage: e.u
            });
        });
    },
    getUserMessa: function(t) {
        var e = this;
        console.log("授权中"), t.detail.iv && (this.setData({
            getSettingMessage: !0,
            "wechatMessage.avatarurl": t.detail.userInfo.avatarUrl
        }), o.setUnion(t.detail, function() {
            e.downStImg();
        }));
    },
    downStImg: function() {
        var e = this;
        console.log("保存中"), wx.showLoading({
            title: "保存中..."
        }), this.setData({
            maskHidden: !1
        }), o.burying.setPoint(o, 629), console.log(t, "对象saveImgUrl"), t ? this.saveImgFun(t) : this.downloadImg(this.data.stImgUrl, function() {
            e.saveImgFun(t);
        });
    },
    downloadImg: function(t, e) {
        t && (console.log(t, e, "参数 downloadImg方法"), wx.downloadFile({
            url: t,
            success: function(t) {
                console.log("下载的文件，", t), 200 === t.statusCode && e && e(t.tempFilePath);
            },
            complete: function() {}
        }));
    },
    saveImgFun: function(t) {
        var e = this;
        console.log("方法saveImgFun", t), wx.saveImageToPhotosAlbum({
            filePath: t,
            success: function() {
                wx.hideLoading(), e.setData({
                    modalShow: !0,
                    maskHidden: !0
                }), o.burying.setPoint(o, 343);
            },
            fail: function(t) {
                console.log(t, "失败了等待"), t && t.errMsg && t.errMsg.indexOf("saveImageToPhotosAlbum:fail") > -1 && (o.burying.setPoint(o, 344), 
                wx.showModal({
                    title: "提示",
                    content: "需要您授权保存相册",
                    showCancel: !1,
                    success: function(t) {
                        wx.openSetting({
                            success: function(t) {
                                console.log("成功哒哒哒哒哒哒多2333", t), t.authSetting["scope.writePhotosAlbum"] ? (wx.showModal({
                                    title: "提示",
                                    content: "获取权限成功,再次点击图片即可保存",
                                    showCancel: !1
                                }), o.burying.setPoint(o, 343)) : wx.showModal({
                                    title: "提示",
                                    content: "获取权限失败，将无法保存到相册哦~",
                                    showCancel: !1
                                }), e.setData({
                                    maskHidden: !0
                                });
                            },
                            fail: function(t) {
                                e.setData({
                                    maskHidden: !0
                                }), console.log("失败哒哒哒哒哒哒多多多多failData", t);
                            },
                            complete: function(t) {
                                e.setData({
                                    maskHidden: !0
                                }), console.log("finishData", t);
                            }
                        });
                    }
                }));
            },
            complete: function(t) {
                e.setData({
                    maskHidden: !0
                }), wx.hideLoading();
            }
        });
    },
    prePage: function() {
        o.burying.setPoint(o, 715);
    }
});