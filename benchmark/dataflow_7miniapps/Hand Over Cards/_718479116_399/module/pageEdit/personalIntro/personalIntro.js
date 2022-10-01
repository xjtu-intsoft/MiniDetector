var t = require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../4F4638B00691379C292050B78222E9B3.js")), a = new (require("../../../AFC697330691379CC9A0FF345133E9B3.js").wxRequest)(), e = require("../../../7931C4950691379C1F57AC929AD2E9B3.js"), s = getApp(), n = !1, i = null;

(0, t.default)({
    options: {
        addGlobalClass: !0
    },
    properties: {
        dropList: Object,
        pageFlag: String
    },
    data: {
        systemInfo: s.systemInfo,
        imageCount: "",
        upldImagesComplete: !0,
        refresh: !1,
        loading: !1,
        pageOption: "",
        areaShow: !1,
        areaFocus: !1,
        addItem: null,
        cbData: null,
        hasUpdateForm: null
    },
    ready: function() {
        this.store.data.cbData.desc.length, this.setData({
            areaFocus: !1,
            areaShow: !1
        });
    },
    lifetimes: {
        attached: function() {},
        detached: function() {
            this.setData({
                areaFocus: !1,
                areaShow: !1
            });
        }
    },
    pageLifetimes: {
        show: function() {},
        hide: function() {
            this.setData({
                areaFocus: !1,
                areaShow: !1
            });
        }
    },
    methods: {
        input: function(t) {
            var a = this;
            this.setData({
                testFail: !1,
                num: t.detail.value.length
            }), this.setData({
                content: t.detail.value
            }), this.store.data.cbData.intro = t.detail.value, this.update().then(function(t) {
                a.store.data.hasUpdateForm = !0;
            });
        },
        blur: function(t) {
            this.setData({
                content: t.detail.value
            }), this.data.content && this.data.content.trim().length, this.setData({
                areaFocus: !1,
                areaShow: !1
            });
        },
        textAreaForce: function() {
            s.burying.setPoint(s, 227), this.setData({
                areaFocus: !0,
                areaShow: !0
            });
        },
        showArea: function() {
            this.setData({
                areaShow: !0
            });
        },
        hideArea: function() {
            this.setData({
                areaShow: !1
            });
        },
        triggerFunc: function(t) {
            this[t.detail.event]();
        },
        addImages: function(t) {
            s.burying.setPoint(s, 229);
            var a = 9 - this.store.data.cbData.desc.length, n = this;
            if (!this.data.upldImagesComplete) return e.showtoast("上传中...", "loading", 1500), 
            0;
            function i(t) {
                wx.chooseImage({
                    count: a,
                    sourceType: [ t ],
                    sizeType: [ "compressed" ],
                    success: function(t) {
                        n.data.upldImageNumber = 0, n.data.upldImagesComplete = !1, n.upldImges(t.tempFilePaths), 
                        t.tempFilePaths.length;
                    }
                });
            }
            wx.showActionSheet({
                itemList: [ "拍照", "从手机相册选择" ],
                success: function(t) {
                    try {
                        switch (t.tapIndex) {
                          case 0:
                            i("camera");
                            break;

                          case 1:
                            i("album");
                        }
                    } catch (t) {}
                }
            });
        },
        addVideoList: function(t) {
            this.store.data.cbData.video = t.detail, this.store.data.hasUpdateForm = !0, this.update();
        },
        upldImges: function(t) {
            var i = this;
            e.showtoast("图片上传中" + (this.data.upldImageNumber + 1) + "/" + t.length, "loading", 2e4), 
            a.upldUrl({
                url: "uploadAlbumImg",
                filePath: t[this.data.upldImageNumber]
            }, function(a) {
                s.photoIdentyFun(t[i.data.upldImageNumber], function(t) {
                    t ? (i.store.data.cbData.desc.push(a), i.update().then(function(t) {
                        i.store.data.hasUpdateForm = !0, i.update();
                    })) : (n || e.testImgShowmodal(), n = !0);
                }, function() {
                    i.data.upldImageNumber++, i.data.upldImageNumber < t.length ? i.upldImges(t) : i.data.upldImageNumber == t.length && (i.data.upldImagesComplete = !0, 
                    i.store.data.cbData.desc.length, e.hidetoast(), n = !1);
                });
            }, function() {
                e.showtoast("上传失败", "none", 1e3);
            }, function(a) {
                i.data.upldImageNumber++, i.data.upldImageNumber < t.length ? i.upldImges(t) : i.data.upldImageNumber == t.length && (i.data.upldImagesComplete = !0, 
                i.store.data.cbData.desc.length, e.hidetoast(), n = !1);
            });
        },
        _introFail: function() {
            this.setData({
                testFail: !0
            });
        },
        save: function() {
            var t = this, a = this.data.content, n = [];
            this.data.loading || (this.setData({
                loading: !0
            }), a && (a = a.substring(0, 200), n.push(a), s.contentTestFun(n, function(a) {
                a.allwords <= 0 ? (t.store.data.contentFail = !1, t.store.data.hasUpdateForm = !0) : (t.store.data.contentFail = !0, 
                t.store.data.hasUpdateForm = !1, e.testShowmodal(), t.setData({
                    testFail: !0
                })), t.setData({
                    loading: !1
                }), t.update();
            })));
        },
        imagePreview: function(t) {
            this.data.upldImagesComplete && wx.navigateTo({
                url: "../../customePages/imagesShow/imagesShow?currentindex=" + t.currentTarget.dataset.index
            });
        },
        throwImage: function(t) {
            var a = this;
            i || (i = null, clearTimeout(i), i = setTimeout(function() {
                a.store.data.cbData.desc.splice(t.currentTarget.dataset.throwindex, 1), a.store.data.cbData.desc.length, 
                a.store.data.hasUpdateForm = !0, a.update(), i = null;
            }, 0));
        },
        _dropFunc: function(t) {
            t.currentTarget.dataset.type;
            this.triggerEvent("dropFunc", t);
        },
        _showIntroTipFunc: function() {
            this.selectComponent("#introTip").showTip();
        },
        _showMediaTipFunc: function() {
            this.selectComponent("#mediaTip").showTip();
        }
    }
});