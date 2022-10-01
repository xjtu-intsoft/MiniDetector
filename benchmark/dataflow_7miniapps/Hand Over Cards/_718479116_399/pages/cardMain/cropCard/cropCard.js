var t = require("../../../AFC697330691379CC9A0FF345133E9B3.js"), e = require("../../../249742070691379C42F12A00D332E9B3.js"), a = new t.wxRequest(), i = getApp(), r = require("../../../7931C4950691379C1F57AC929AD2E9B3.js"), s = wx.getSystemInfoSync(), o = null, n = !1;

Page({
    data: {
        cropCanvas: {
            id: "cropCanvas",
            canvas: !0,
            idSmall: "cropCanvasImage",
            pattern: "default",
            shadow: !0,
            height: .8 * s.windowWidth,
            width: s.windowWidth,
            heightSmall: 100,
            widthSmall: 100,
            scale: 1.2,
            marginLeft: 0,
            marginTop: 0,
            marginBottom: 140,
            style: {
                line: "#1aad19"
            },
            image: {
                height: "",
                width: "",
                src: ""
            },
            imageRatio: [ .7, 1 ],
            imageCanvasCoor: {
                x: 0,
                y: 0
            },
            cropData: {
                lt: [],
                rt: [],
                lb: [],
                rb: []
            },
            circleRadius: 10,
            centerPointCoor: [ s.windowWidth / 2, .45 * s.windowHeight ],
            movePointName: "",
            devices: s,
            animationData: "animationData",
            rotateButton: !0
        },
        canvasPosition: {
            left: 0,
            top: 0,
            bottom: 140,
            show: !1
        },
        previewStyle: {
            height: .86 * s.windowHeight - .8 * s.windowWidth
        },
        previewImg: {
            src: "loading",
            status: "heng"
        },
        systemInfo: i.systemInfo
    },
    onLoad: function(t) {
        var a = this;
        console.log("cropCard.onload", t), t.rotate = 0, this.initData();
        this.data.cropData;
        this.cropImage = new e.cropImage(this), this.cropImage.optionsData(t, function() {
            a.serverCropImage();
        }), this.data.options = t;
    },
    initData: function() {
        n = !1, this.setData({
            "previewImg.src": "loading"
        });
    },
    start: function(t) {
        this.cropImage.touchStart(t), this.setData({
            "previewImg.src": "loading"
        });
    },
    move: function(t) {
        this.cropImage.touchMove(t);
    },
    end: function(t) {
        this.cropImage.touchEnd(t), this.serverCropImage();
    },
    rotate: function() {
        this.cropImage.rotate(), this.setData({
            "previewImg.src": "loading"
        }), this.serverCropImage();
    },
    rotateF: function() {
        this.cropImage.rotateF(), this.setData({
            "previewImg.src": "loading"
        }), this.serverCropImage();
    },
    serverCropImage: function() {
        var t = this, e = this.cropImage.complete();
        a.requestUrl({
            url: "pictureCut",
            method: "POST",
            data: {
                img: e.cutImage,
                data: e.datf,
                rotate: e.rotate
            }
        }, function(e) {
            clearInterval(o);
            var i = 0;
            o = setInterval(function() {
                a.requestUrl({
                    url: "stats",
                    data: {
                        work_id: e.timeStamp
                    }
                }, function(a) {
                    "success" == a && (clearInterval(o), t.data.cutUserpic = e, t.setData({
                        "previewImg.src": e.url,
                        "previewImg.status": e.hengshu
                    }));
                }, function() {
                    clearInterval(o);
                }), ++i >= 50 && clearInterval(o);
            }, 300);
        });
    },
    preview: function(t) {
        if ("loading" == t.currentTarget.dataset.previewsrc) return 0;
        wx.previewImage({
            urls: [ t.currentTarget.dataset.previewsrc ]
        });
    },
    cancel: function() {
        var t = this;
        function e(e) {
            wx.chooseImage({
                count: 1,
                sourceType: [ e ],
                sizeType: [ "compressed" ],
                success: function(e) {
                    t.imageUpld(e.tempFilePaths[0]);
                }
            });
        }
        wx.showActionSheet({
            itemList: [ "拍照", "从手机相册选择" ],
            success: function(t) {
                try {
                    switch (t.tapIndex) {
                      case 0:
                        e("camera");
                        break;

                      case 1:
                        e("album");
                    }
                } catch (t) {}
            }
        });
    },
    imageUpld: function(t) {
        var e = this, i = {
            src: e.data.previewImg.src,
            status: e.data.previewImg.status
        };
        e.setData({
            "previewImg.src": "loading",
            "previewImg.status": "heng"
        }), a.upldUrl({
            url: "ecard",
            filePath: t
        }, function(t) {
            e.data.options.src = t.url, e.data.options.cutImage = t.userpic, e.onLoad(e.data.options);
        }, function() {
            r.showmodal({
                data: "图片加载失败，请重新选择。",
                cancel: !1,
                text: "我知道了"
            }), e.setData({
                "previewImg.src": i.src,
                "previewImg.status": i.status
            });
        });
    },
    complete: function() {
        if (!this.data.cutUserpic) return 0;
        n || (r.showtoast("上传中...", "loading", 8e3), n = !0, this.setData({
            loadingComplete: !0
        }), this.switchTo());
    },
    switchTo: function(t) {
        var e = this, s = this, o = this.data.options.file;
        o && s.data.cutUserpic && i.photoIdentyFun(o, function(t) {
            t ? a.requestUrl({
                url: "cardcutCom",
                data: {
                    userpic: s.data.cutUserpic.imgName,
                    origin: s.data.options.cutImage
                }
            }, function(t) {
                t.backup = {
                    name: t.userpic.name,
                    url: t.userpic.url,
                    hengshu: t.hengshu
                }, i.temporaryData.edit.enterMark = "cropCardComplete", "cardTempEdit" == e.data.options.main ? i.temporaryData.edit.bpUrl = {
                    name: t.userpic.name,
                    url: t.userpic.url,
                    hengshu: t.hengshu
                } : i.temporaryData.edit.data = t, wx.navigateBack({
                    delta: 1
                });
            }, "", function() {
                n = !1, e.setData({
                    loadingComplete: !1
                });
            }) : (r.hidetoast(), n = !1, e.setData({
                loadingComplete: !1
            }), r.testImgShowmodal(function() {
                wx.navigateBack({
                    delta: 1
                });
            }));
        });
    },
    onShareAppMessage: function() {
        return r.shareAppMessa({
            title: "我向您推荐“递名片”",
            path: "pages/cardMy/about/about?shareOthers=cropCard&shareType=05",
            imageUrl: i.source.shareImage
        });
    }
});