var t = require("../../../@babel/runtime/helpers/interopRequireDefault"), e = t(require("../../../E7FA08110691379C819C60164523E9B3.js")), a = require("../../../AFC697330691379CC9A0FF345133E9B3.js"), o = t(require("../../../595319F00691379C3F3571F767A1E9B3.js")), r = t(require("../../../4F4638B00691379C292050B78222E9B3.js")), i = new a.wxRequest(), u = require("../../../7931C4950691379C1F57AC929AD2E9B3.js"), n = wx.getSystemInfoSync(), s = n.windowWidth, c = n.windowHeight - 50, p = !1, h = getApp();

(0, r.default)(o.default, {
    data: {
        cropperOpt: {
            id: "cropper",
            width: s,
            height: c,
            scale: 2.5,
            zoom: 8,
            cut: {
                x: (s - 300) / 2,
                y: (c - 300) / 2,
                width: 300,
                height: 300
            }
        }
    },
    onLoad: function(t) {
        this.options = t, p = !1;
        var a = this.data.cropperOpt;
        new e.default(a), this.wecropper.pushOrign(t.imgurl, t.backcolor);
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
        var t = this, e = this;
        wx.showToast({
            title: "正在提交中...",
            icon: "loading",
            duration: 6e3
        }), p || (p = !0, e.wecropper.getCropperImage(function(a) {
            a && e.upldLogo(a, function(a) {
                if ("cardmain" == e.options.main) {
                    var o = getCurrentPages();
                    o[o.length - 2].data.customAvatar = a, wx.navigateBack({
                        delta: 1
                    });
                } else t.store.data.cbData.customAvatar = a, t.update(), wx.navigateBack({
                    delta: 1
                });
                try {
                    wx.setStorageSync("customAvatar", a);
                } catch (t) {}
            });
        }));
    },
    upldLogo: function(t, e) {
        u.showtoast("提交中...", "loading", 8e3), h.photoIdentyFun(t, function(a) {
            a ? i.upldUrl({
                url: "uploadAvatar",
                data: {},
                filePath: t
            }, function(t) {
                e && e(t);
            }, function() {
                p = !1, u.hidetoast();
            }) : (p = !1, u.hidetoast(), u.testImgShowmodal(function() {
                wx.navigateBack({
                    delta: 1
                });
            }));
        });
    },
    onShareAppMessage: function() {
        return u.shareAppMessa({
            title: "我向您推荐“递名片”",
            path: "pages/cardMy/about/about?shareOthers=upldTbcardLogo&shareType=05",
            imageUrl: h.source.shareImage
        });
    }
});