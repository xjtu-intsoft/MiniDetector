var t = require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../E7FA08110691379C819C60164523E9B3.js")), e = new (require("../../../AFC697330691379CC9A0FF345133E9B3.js").wxRequest)(), a = require("../../../7931C4950691379C1F57AC929AD2E9B3.js"), n = wx.getSystemInfoSync(), o = n.windowWidth, i = n.windowHeight - 50, u = !1, r = getApp();

Page({
    data: {
        cropperOpt: {
            id: "cropper",
            width: o,
            height: i,
            scale: 2.5,
            zoom: 8,
            cut: {
                x: (o - 300) / 2,
                y: (i - 300) / 2,
                width: 300,
                height: 300
            }
        }
    },
    onLoad: function(e) {
        this.options = e, u = !1;
        var a = this.data.cropperOpt;
        new t.default(a), this.wecropper.pushOrign(e.imgurl, e.backcolor);
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
        var t = this;
        wx.showToast({
            title: "正在提交中...",
            icon: "loading",
            duration: 6e3
        }), u || (u = !0, t.wecropper.getCropperImage(function(e) {
            e && t.sortFun(e);
        }));
    },
    sortFun: function(t) {
        switch (this.options.main) {
          case "buildHomePage":
            this.buildHomePageFun(t);
            break;

          case "minimalist":
            this.minimalistFun(t);
            break;

          case "miniweb":
            this.miniwebFun(t);
            break;

          case "configurationChangeStyle":
            this.configurationChangeStyleFun(t);
        }
    },
    buildHomePageFun: function(t) {
        this.upldLogo(t, function(t) {
            var e = getCurrentPages();
            e[e.length - 2].data.qiyeData.logo = t.url, wx.navigateBack({
                delta: 1
            }), u = !1;
        });
    },
    minimalistFun: function(t) {
        this.upldAva(t, function(t) {
            getCurrentPages()[getCurrentPages().length - 2].data.avaCon = t, wx.navigateBack({
                delta: 1
            }), u = !1;
        });
    },
    miniwebFun: function(t) {
        this.upldLogo(t, function(t) {
            var e = getCurrentPages();
            e[e.length - 2].data.logo = t.url, wx.navigateBack({
                delta: 1
            }), u = !1;
        });
    },
    configurationChangeStyleFun: function(t) {
        this.upldLogo(t, function(t) {
            var e = getCurrentPages();
            e[e.length - 2].data.logo = t.url, wx.navigateBack({
                delta: 1
            }), u = !1;
        });
    },
    upldLogo: function(t, n) {
        a.showtoast("提交中...", "loading", 8e3), r.photoIdentyFun(t, function(o) {
            o ? e.upldUrl({
                url: "editLogoComplete",
                data: {},
                filePath: t
            }, function(t) {
                n && n(t);
            }, function() {
                u = !1, a.hidetoast();
            }) : (u = !1, a.hidetoast(), a.testImgShowmodal(function() {
                wx.navigateBack({
                    delta: 1
                });
            }));
        });
    },
    upldAva: function(t, n) {
        a.showtoast("提交中...", "loading", 8e3), r.photoIdentyFun(t, function(o) {
            o ? e.upldUrl({
                url: "uploadAvatar",
                data: {},
                filePath: t
            }, function(t) {
                n && n(t);
            }, function() {
                u = !1, a.hidetoast();
            }) : (u = !1, a.hidetoast(), a.testImgShowmodal(function() {
                wx.navigateBack({
                    delta: 1
                });
            }));
        });
    },
    onShareAppMessage: function() {
        return a.shareAppMessa({
            title: "我向您推荐“递名片”",
            path: "pages/cardMy/about/about?shareOthers=upldTbcardLogo&shareType=05",
            imageUrl: r.source.shareImage
        });
    }
});