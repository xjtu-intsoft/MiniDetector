var t, e = require("../../../@babel/runtime/helpers/interopRequireDefault"), a = e(require("../../../E7FA08110691379C819C60164523E9B3.js")), i = require("../../../AFC697330691379CC9A0FF345133E9B3.js"), o = e(require("../../../595319F00691379C3F3571F767A1E9B3.js")), n = e(require("../../../4F4638B00691379C292050B78222E9B3.js")), s = new i.wxRequest(), r = require("../../../7931C4950691379C1F57AC929AD2E9B3.js"), u = wx.getSystemInfoSync(), c = u.windowWidth, p = u.windowHeight - 50, h = !1, d = getApp();

(0, n.default)(o.default, {
    data: {
        cropperOpt: {
            id: "cropper",
            width: c,
            height: p,
            scale: 2.5,
            zoom: 8,
            cut: {}
        },
        cut_old: {
            x: (c - 246) / 2,
            y: (p - 392) / 2,
            width: 246,
            height: 392
        },
        cut_new: {
            x: (c - 210) / 2,
            y: (p - 420) / 2,
            width: 210,
            height: 420
        },
        web_cut_new: {
            x: (c - 208) / 2,
            y: (p - 428) / 2,
            width: 208,
            height: 428
        },
        cbData: null
    },
    touchStart: function(t) {
        this.wecropper.touchStart(t);
    },
    touchMove: function(t) {
        this.wecropper.touchMove(t);
    },
    touchEnd: function(t) {
        this.wecropper.touchEnd(t);
    },
    getCropperImage: function() {
        var e = this, a = this, i = getCurrentPages();
        wx.showToast({
            title: "正在提交中...",
            icon: "loading",
            duration: 6e3
        }), h || (h = !0, a.wecropper.getCropperImage(function(o) {
            o && ("minimalist" != t.main && "cardMainEdit" != t.main || d.burying.setSensorEvent(d, {}, "PortraitUpload"), 
            a.upldBusinessCard(o, function(a) {
                "minimalist" == t.main ? ("webBusiness" == t.type && d.burying.setPoint(d, 1021), 
                d.temporaryData.edit.enterMark = "business", i[i.length - 2].data.bussinessCon = a, 
                wx.navigateBack({
                    delta: 1
                })) : (i[i.length - 2].data.formData && (i[i.length - 2].data.formData.bpUrl = a), 
                e.store.data.cbData.bpUrl = a, e.update().then(function(t) {
                    wx.navigateBack({
                        delta: 1
                    });
                })), h = !1;
            }));
        }));
    },
    upldBusinessCard: function(t, e) {
        r.showtoast("提交中...", "loading", 8e3), d.photoIdentyFun(t, function(a) {
            a ? s.upldUrl({
                url: "uploadIdPhoto",
                data: {},
                filePath: t
            }, function(t) {
                e && e(t);
            }, function() {
                r.showmodal({
                    data: "LOGO上传失败，请重新尝试",
                    cancel: !1
                }), h = !1, r.hidetoast();
            }) : (h = !1, r.hidetoast(), r.testImgShowmodal(function() {
                wx.navigateBack({
                    delta: 1
                });
            }));
        });
    },
    again: function() {
        var t = this;
        function e(e) {
            wx.chooseImage({
                count: 1,
                sourceType: [ e ],
                sizeType: [ "compressed" ],
                success: function(e) {
                    t.options.imgurl = e.tempFilePaths[0], t.onLoad(t.options);
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
            },
            fail: function() {}
        });
    },
    onLoad: function(e) {
        this.options = e, t = e;
        var i = this.data.cropperOpt;
        "rectangle" == t.type ? this.setData({
            "cropperOpt.cut": this.data.cut_new
        }) : "webBusiness" == t.type ? this.setData({
            "cropperOpt.cut": this.data.web_cut_new
        }) : this.setData({
            "cropperOpt.cut": this.data.cut_old
        }), new a.default(i), this.wecropper.pushOrign(e.imgurl, e.backcolor);
    },
    onShareAppMessage: function() {
        return r.shareAppMessa({
            title: "我向您推荐“递名片”",
            path: "pages/cardMy/about/about?shareOthers=upldTbcardLogo&shareType=05",
            imageUrl: "../../../images/shareImage.jpg"
        });
    }
});