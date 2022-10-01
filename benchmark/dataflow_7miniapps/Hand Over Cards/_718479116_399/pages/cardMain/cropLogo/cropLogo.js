var t = require("../../../@babel/runtime/helpers/interopRequireDefault"), a = require("../../../AFC697330691379CC9A0FF345133E9B3.js"), e = require("../../../249742070691379C42F12A00D332E9B3.js"), o = t(require("../../../595319F00691379C3F3571F767A1E9B3.js")), i = t(require("../../../4F4638B00691379C292050B78222E9B3.js")), n = new a.wxRequest(), s = getApp(), r = require("../../../7931C4950691379C1F57AC929AD2E9B3.js"), c = wx.getSystemInfoSync(), u = !1;

(0, i.default)(o.default, {
    data: {
        cropCanvas: {
            id: "cropCanvas",
            canvas: !0,
            idSmall: "cropCanvasImage",
            cropCanvasLogo: "cropCanvasLogo",
            pattern: "rectangle",
            shadow: !1,
            height: c.windowWidth,
            width: c.windowWidth,
            heightSmall: 100,
            widthSmall: 100,
            scale: 1.2,
            marginLeft: 0,
            marginTop: 0,
            style: {
                line: "white"
            },
            image: {
                height: "",
                width: "",
                src: ""
            },
            imageRatio: [ .7, .8 ],
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
            circleRadius: 20,
            centerPointCoor: [ c.windowWidth / 2, .45 * c.windowHeight ],
            movePointName: "",
            devices: c,
            animationData: "animationData",
            rotateButton: !0
        },
        canvasPosition: {
            left: 0,
            top: 0,
            show: !1
        },
        previewStyle: {
            height: .9 * c.windowHeight - .8 * c.windowWidth
        },
        systemInfo: c,
        systemInfoN: s.systemInfo
    },
    onShow: function() {},
    onLoad: function(t) {
        console.log("cropLogo.onload", t), t.rotate = 0, this.initData();
        this.data.cropData;
        this.cropImage = new e.cropImage(this), this.cropImage.optionsData(t, function() {}), 
        this.data.options = t;
    },
    initData: function() {
        u = !1;
    },
    start: function(t) {
        this.cropImage.touchStart(t);
    },
    move: function(t) {
        this.cropImage.touchMove(t);
    },
    end: function(t) {
        this.cropImage.touchEnd(t);
    },
    rotate: function() {
        this.cropImage.rotate();
    },
    rotateF: function() {
        this.cropImage.rotateF();
    },
    canvasToImage: function() {
        this.cropImage.canvasToImage();
    },
    cancel: function() {
        var t = this;
        function a(a) {
            wx.chooseImage({
                count: 1,
                sourceType: [ a ],
                sizeType: [ "compressed" ],
                success: function(a) {
                    t.data.options.src = a.tempFilePaths[0], t.onLoad(t.data.options);
                }
            });
        }
        wx.showActionSheet({
            itemList: [ "拍照", "从手机相册选择" ],
            success: function(t) {
                try {
                    switch (t.tapIndex) {
                      case 0:
                        a("camera");
                        break;

                      case 1:
                        a("album");
                    }
                } catch (t) {}
            }
        });
    },
    complete: function() {
        var t = this, a = this;
        u || (this.setData({
            loading: !0
        }), r.showtoast("上传中...", "loading", 8e3), u = !0, this.cropImage.generateImages(function(e) {
            if ("fail" == e) return r.showmodal({
                data: "保存失败，请重试",
                text: "我知道了",
                cancel: !1
            }), a.setData({
                loading: !1
            }), u = !1, r.hidetoast(), 0;
            s.photoIdentyFun(e, function(o) {
                if (o) {
                    var i = "base" == t.data.options.type ? "uploadAvatar" : "editLogoComplete";
                    n.upldUrl({
                        url: i,
                        data: {},
                        filePath: e
                    }, function(a) {
                        if ("base" == t.data.options.type) {
                            try {
                                wx.setStorageSync("customAvatar", a);
                            } catch (t) {}
                            t.store.data.cbData.customAvatar = a, t.update();
                        } else if ("wenzi" == t.data.options.type) t.store.data.cbData.logo = a, t.update(); else if ("build" == t.data.options.type) {
                            var e = getCurrentPages();
                            e[e.length - 2].data.formData.logo = a;
                        } else if ("minimalist" == t.data.options.type) {
                            s.temporaryData.edit.enterMark = "logo";
                            var o = getCurrentPages();
                            o[o.length - 2].data.logoCon = a;
                        }
                        wx.navigateBack({
                            delta: 1
                        });
                    }, function() {
                        "none" == s.netMark.netWorkType || r.showmodal({
                            data: "logo上传失败，请重新尝试"
                        }, function() {
                            a.complete();
                        });
                    }, function() {
                        a.setData({
                            loading: !1
                        }), r.hidetoast(), u = !1;
                    });
                } else a.setData({
                    loading: !1
                }), r.hidetoast(), u = !1, r.testImgShowmodal(function() {
                    wx.navigateBack({
                        delta: 1
                    });
                });
            });
        }));
    },
    onShareAppMessage: function() {
        return r.shareAppMessa({
            title: "我向您推荐“递名片”",
            path: "pages/cardMy/about/about?shareOthers=cropLogo&shareType=05",
            imageUrl: s.source.shareImage
        });
    }
});