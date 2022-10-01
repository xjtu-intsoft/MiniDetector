var a, t, e, n, r = require("../../../AFC697330691379CC9A0FF345133E9B3.js"), i = getApp(), u = require("../../../7931C4950691379C1F57AC929AD2E9B3.js"), d = new r.wxRequest(), o = !0, c = !1;

Page({
    data: {
        cpData: {
            name: "",
            intro: "",
            image: []
        },
        currentCp: 0,
        cpEdit: {
            st: !1
        },
        upldImagesComplete: !0,
        productSwitch: ";",
        systemInfo: {},
        currentImageIndex: 0
    },
    onLoad: function(t) {
        console.log("product.onload", t), a = this, n = t, e = getCurrentPages(), this.productDataFun();
    },
    onShow: function() {
        this.systemInfo();
    },
    productDataFun: function() {
        var r = {};
        if ("add" == n.detail) o = !0, r = i.temporaryData.homePage.editHuancun[n.id].huancunProduct, 
        a.setData({
            cpData: r,
            optionsL: n,
            cpIntroXNum: r.intro ? r.intro.length : 0
        }), t = r.image.length; else {
            o = !1;
            var u = e[e.length - 2].data.qiyeData.products;
            a.setData({
                productsData: u,
                optionsL: n
            }), a.setData({
                currentCp: n.ind
            });
        }
    },
    systemInfo: function() {
        var a = this;
        u.getSystem(function(t, e) {
            "success" == t && a.setData({
                systemInfo: e
            });
        });
    },
    delCp: function(t) {
        var n = a.data.productsData;
        u.deletemodal("确定删除此产品？", function() {
            n.splice(t.currentTarget.dataset.detail, 1), e[e.length - 2].data.qiyeData.products = n, 
            wx.navigateBack({
                delta: 1
            }), i.gioCustome({
                t: "product.001"
            });
        }, function() {
            i.gioCustome({
                t: "product.002"
            });
        });
    },
    editCp: function(e) {
        var n = a.data.productsData[e.currentTarget.dataset.detail];
        a.setData({
            cpEdit: {
                st: !0,
                ind: e.currentTarget.dataset.detail
            },
            cpData: n,
            cpIntroXNum: n.intro ? n.intro.length : 0
        }), t = n.image.length;
    },
    a: function() {},
    pre: function() {
        a.setData({
            currentCp: Number(a.data.currentCp) - 1
        });
    },
    next: function() {
        a.setData({
            currentCp: Number(a.data.currentCp) + 1
        });
    },
    del: function(e) {
        a.data.cpData.image.splice(e.currentTarget.dataset.detail, 1), a.setData({
            "cpData.image": a.data.cpData.image
        }), t--, i.temporaryData.homePage.editHuancun[n.id].huancunProduct.image = a.data.cpData.image;
    },
    upld: function() {
        var e = 3 - t;
        if (!this.data.upldImagesComplete) return u.showtoast("上传中...", "loading", 1500), 
        0;
        wx.chooseImage({
            count: e,
            sizeType: [ "compressed" ],
            success: function(e) {
                a.data.upldImageNumber = 0, a.data.upldImagesComplete = !1, u.showtoast("上传中...", "loading", 2e4), 
                a.upldImage(e.tempFilePaths), t = e.tempFilePaths.length;
            }
        });
    },
    upldImage: function(e) {
        var r = this;
        d.upldUrl({
            url: "uploadAlbumImg",
            filePath: e[this.data.upldImageNumber]
        }, function(d) {
            i.photoIdentyFun(e[r.data.upldImageNumber], function(e) {
                e ? (a.data.cpData.image.push(d), t++, a.setData({
                    "cpData.image": a.data.cpData.image
                }), i.temporaryData.homePage.editHuancun[n.id].huancunProduct.image = a.data.cpData.image) : u.testImgShowmodal();
            });
        }, "", function() {
            a.data.upldImageNumber++, a.data.upldImageNumber < e.length ? a.upldImage(e) : a.data.upldImageNumber == e.length && (a.data.upldImagesComplete = !0, 
            t = a.data.cpData.image.length, u.hidetoast());
        });
    },
    preview: function(t) {
        for (var e = [], n = 0; n < a.data.cpData.image.length; n++) e.push(a.data.cpData.image[n].url);
        wx.previewImage({
            current: t.currentTarget.dataset.detail,
            urls: e
        });
    },
    previewC: function(a) {
        for (var t = [], e = 0; e < a.currentTarget.dataset.con.length; e++) t.push(a.currentTarget.dataset.con[e].url);
        wx.previewImage({
            current: a.currentTarget.dataset.detail,
            urls: t
        });
    },
    inputName: function() {
        this.data.cpData.nameFail && this.setData({
            "cpData.nameFail": !1
        });
    },
    submit: function(t) {
        var r = this;
        if (!t.detail.value.name || !a.data.cpData.intro || a.data.cpData.image.length <= 0) return u.showmodal({
            data: "请检查产品信息是否填写完整",
            cancel: !1,
            text: "我知道了"
        }), 0;
        if (this.data.cpIntroXNum > 200) return u.showmodal({
            data: "产品介绍长度超出限制，请修改后，重新提交。",
            text: "我知道了",
            cancel: !1
        }), 0;
        var d = [ t.detail.value.name, a.data.cpData.intro ];
        c || (c = !0, a.data.cpEdit.st ? i.contentTestFun(d, function(n) {
            if (n.allwords <= 0) c = !1, e[e.length - 2].data.qiyeData.products[a.data.cpEdit.ind] = {
                name: t.detail.value.name,
                intro: a.data.cpData.intro,
                image: a.data.cpData.image
            }, a.setData({
                productsData: e[e.length - 2].data.qiyeData.products,
                currentImageIndex: 0
            }), a.setData({
                "cpEdit.st": !1,
                currentCp: a.data.cpEdit.ind
            }); else {
                u.testShowmodal(function() {
                    c = !1;
                });
                for (var r = n.errorArr, i = a.data.cpData, o = 0; o < r.length; o++) d[r[o]] == t.detail.value.name && (i.nameFail = !0, 
                i.name = t.detail.value.name), d[r[o]] == a.data.cpData.intro && (i.introFail = !0);
                a.setData({
                    cpData: i
                });
            }
        }) : i.contentTestFun(d, function(o) {
            if (o.allwords <= 0) c = !1, e[e.length - 2].data.ifSavePro = !0, e[e.length - 2].data.qiyeData.products.push({
                name: t.detail.value.name,
                intro: a.data.cpData.intro,
                image: a.data.cpData.image
            }), i.temporaryData.homePage.editHuancun[n.id].huancunProduct = {
                name: "",
                intro: "",
                image: []
            }, wx.navigateBack({
                delta: 1
            }); else {
                u.testShowmodal(function() {
                    c = !1;
                });
                for (var s = o.errorArr, l = a.data.cpData, p = 0; p < s.length; p++) d[s[p]] == t.detail.value.name && (l.nameFail = !0, 
                l.name = t.detail.value.name), d[s[p]] == a.data.cpData.intro && (l.introFail = !0);
                a.setData({
                    cpData: l
                }), console.log(r.data.cpData, "产品信息");
            }
        }));
    },
    input: function(t) {
        this.data.cpData.introFail && this.setData({
            "cpData.introFail": !1
        }), a.setData({
            cpIntroXNum: t.detail.value.length
        }), a.data.cpData.intro = t.detail.value;
    },
    ss: function() {},
    blur: function(a) {
        o && (i.temporaryData.homePage.editHuancun[n.id].huancunProduct[a.currentTarget.dataset.detail] = a.detail.value);
    },
    onShareAppMessage: function() {
        return u.shareAppMessa({
            title: "我向您推荐“递名片”",
            path: "pages/cardMy/about/about?shareOthers=product&shareType=05",
            imageUrl: i.source.shareImage
        });
    }
});