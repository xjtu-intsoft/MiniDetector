var a, t, e, n, i, o = require("../../../@babel/runtime/helpers/interopRequireDefault"), r = o(require("../../../@babel/runtime/helpers/defineProperty")), s = o(require("../../../595319F00691379C3F3571F767A1E9B3.js")), u = o(require("../../../4F4638B00691379C292050B78222E9B3.js")), l = require("../../../AFC697330691379CC9A0FF345133E9B3.js"), d = require("../../../66AA26C40691379C00CC4EC37CA2E9B3.js"), c = require("../../../47B9BE150691379C21DFD612FA92E9B3.js"), m = getApp(), g = new l.wxRequest(), h = require("../../../7931C4950691379C1F57AC929AD2E9B3.js"), y = new d.Match("page"), D = !0, f = !1, b = {};

(0, u.default)(s.default, (a = {
    data: {
        qiyeData: {},
        elevance: {
            st: !1,
            data: []
        },
        textAreaDisabled: !0,
        matchData: {
            show: !1,
            detail: {
                index: "",
                id: "",
                name: ""
            },
            top: 0,
            data: []
        },
        systemInfo: m.systemInfo,
        lowerCanvas: {
            canvasId: "lowerCanvas",
            height: 50,
            width: 50
        },
        testQiyeData: {
            fullname: !1,
            name: !1,
            slogan: !1,
            website: !1,
            intro: !1
        },
        ifSavePro: !1
    },
    onLoad: function(a) {
        console.log("buildHomePage.onload", a), e = this, n = a, t = getCurrentPages(), 
        this.data.qiyeData = this.buildForm(), e.buildHuancun(), e.homePageData();
    },
    onShow: function() {
        console.log("建立企业主页onshow事件", this.data.ifSavePro), this.data.ifSavePro && (console.log("发起保存接口"), 
        console.log(n), this.submitPro(), "add" != n.detail && (t[t.length - 2].data.qiyeData.products = e.data.qiyeData.products)), 
        f = !1, b = {}, D && (m.temporaryData.homePage.editHuancun[n.id].logo = e.data.qiyeData.logo), 
        D && (m.temporaryData.homePage.editHuancun[n.id].products = e.data.qiyeData.products), 
        e.setData({
            "qiyeData.logo": e.data.qiyeData.logo,
            "qiyeData.products": e.data.qiyeData.products
        });
    },
    buildForm: function() {
        for (var a = [ "fullname", "name", "logo", "slogan", "website", "intro" ], t = {}, e = 0; e < a.length; e++) t[a[e]] = "";
        return t.products = [], t.huancunProduct = {
            name: "",
            intro: "",
            image: []
        }, t;
    },
    buildHuancun: function() {
        !m.temporaryData.homePage.editHuancun[n.id] && (m.temporaryData.homePage.editHuancun[n.id] = this.buildForm());
    },
    homePageData: function() {
        var a = m.temporaryData.homePage.editHuancun[n.id], i = {};
        "add" == n.detail && ("cardMain" == n.main ? (D = !0, (i = wx.getStorageSync("mycard").d.defCard).website && (a.website = i.website), 
        e.setData({
            qiyeData: a,
            qyIntroNum: a.slogan ? a.slogan.length : 0,
            qyIntroXNum: a.intro ? a.intro.length : 0
        })) : "formEditMinimalist" == n.main ? (D = !0, (i = t[t.length - 2].data.temporaryDataFormData).website && (a.website = i.website), 
        e.setData({
            qiyeData: a,
            qyIntroNum: a.slogan ? a.slogan.length : 0,
            qyIntroXNum: a.intro ? a.intro.length : 0
        })) : "teamMemb" == n.main ? (D = !0, (i = t[t.length - 2].data.singleData).website && (a.website = i.website), 
        e.setData({
            qiyeData: a,
            "qiyeData.fullname": n.company,
            "qiyeData.entId": t[t.length - 2].data.enterprisesData.entId,
            qyIntroNum: a.slogan ? a.slogan.length : 0,
            qyIntroXNum: a.intro ? a.intro.length : 0
        })) : (D = !0, (i = t[t.length - 2].data.singleData).website && (a.website = i.website), 
        e.setData({
            qiyeData: a,
            qyIntroNum: a.slogan ? a.slogan.length : 0,
            qyIntroXNum: a.intro ? a.intro.length : 0
        }))), "add" != n.detail && (D = !1, i = t[t.length - 2].data.qiyeData, e.setData({
            qiyeData: i,
            qyIntroNum: i.slogan ? i.slogan.length : 0,
            qyIntroXNum: i.intro ? i.intro.length : 0
        }));
    },
    editCardPageMatchSelect: function(a) {
        f = !0, D && (m.temporaryData.homePage.editHuancun[n.id].fullname = a.currentTarget.dataset.matchitem), 
        e.setData({
            "qiyeData.fullname": a.currentTarget.dataset.matchitem
        }), e.companySearch("select", a.currentTarget.dataset.matchitem);
    },
    textareaFocus: function() {},
    textareaTap: function() {
        this.setData({
            textAreaDisabled: !1
        }), setTimeout(function() {
            e.setData({
                textAreaDisabled: !1
            });
        }, 200);
    },
    textareablur: function(a) {
        D && (m.temporaryData.homePage.editHuancun[n.id][a.currentTarget.dataset.detail] = a.detail.value), 
        e.data.qiyeData.intro = a.detail.value, this.setData({
            textAreaDisabled: !0,
            "qiyeData.intro": a.detail.value
        });
    },
    focus: function(a) {
        this.data.blur = !1, m.systemInfo["1.6.3"] && y.focus({
            eContent: a,
            bindthat: this,
            extra: 0
        });
    },
    inputTap: function(a) {
        var t = this.data.testQiyeData;
        switch (a) {
          case "fullname":
            t.fullname = !1;
            break;

          case "name":
            t.name = !1;
            break;

          case "slogan":
            t.slogan = !1;
            break;

          case "website":
            t.website = !1;
            break;

          case "intro":
            t.intro = !1;
        }
        this.setData({
            testQiyeData: t
        });
    },
    input: function(a) {
        var t = a.currentTarget.dataset.detail;
        this.inputTap(t), "slogan" == a.currentTarget.dataset.detail ? e.setData({
            qyIntroNum: a.detail.value.length
        }) : "intro" == a.currentTarget.dataset.detail && e.setData({
            qyIntroXNum: a.detail.value.length
        }), m.systemInfo["1.6.3"] && y.input({
            eContent: a,
            bindthat: this,
            extra: 0
        }), this.data.qiyeData[a.currentTarget.id] = a.detail.value;
    },
    blur: function(a) {
        this.data.blur = !0, D && (m.temporaryData.homePage.editHuancun[n.id][a.currentTarget.dataset.detail] = a.detail.value), 
        "fullname" == a.currentTarget.dataset.detail && a.detail.value.trim().length > 0 && this.data.qiyeData.fullname == a.detail.value && e.companySearch("blur", a.detail.value), 
        m.systemInfo["1.6.3"] && setTimeout(function() {
            y.blur({
                bindthat: e
            });
        }, 500);
    },
    companySearch: function(a, t) {
        if (f && "blur" == a) return 0;
        g.requestUrl({
            url: "relationCompany",
            data: {
                name: t
            }
        }, function(t) {
            if (console.log("company", t), f && "blur" == a) return 0;
            t.total > 0 ? e.setData({
                elevance: {
                    st: !0,
                    h: 49,
                    data: t
                }
            }) : e.data.elevance.st && e.setData({
                "saveCommit.loading": !1,
                "saveCommit.con": "保存"
            });
        }, "", function() {
            "select" == a && (f = !1);
        });
    },
    toElevance: function() {
        var a = e.data.elevance.data.company;
        a.id = e.data.qiyeData.id, h.showmodal({
            data: "选择关联后将覆盖已有企业主页信息",
            text: "关联"
        }, function() {
            e.setData({
                qiyeData: a,
                "elevance.st": !1,
                qyIntroNum: a.slogan ? a.slogan.length : 0,
                qyIntroXNum: a.intro ? a.intro.length : 0
            }), "add" == n.detail ? m.gioCustome({
                t: "buildHomePage.001"
            }) : m.gioCustome({
                t: "buildHomePage.002"
            }), D && (m.temporaryData.homePage.editHuancun[n.id] = a), D && (m.temporaryData.homePage.editHuancun[n.id].huancunProduct = {
                name: "",
                intro: "",
                image: []
            });
        }, function() {
            e.setData({
                "elevance.st": !1
            }), "add" == n.detail ? m.gioCustome({
                t: "buildHomePage.003"
            }) : m.gioCustome({
                t: "buildHomePage.004"
            });
        });
    },
    toClose: function() {
        e.setData({
            "elevance.st": !1
        });
    },
    submit: function(a) {
        var t = this, o = a.detail.value;
        if (!(o = this.subCheck(o)).fullname) return h.showmodal({
            data: "请输入企业全称",
            cancel: !1
        }), 0;
        b.submit || (b.submit = !0, this.setData({
            "saveCommit.loading": !0,
            "saveCommit.con": "保存中..."
        }), i = [ o.fullname, o.name, o.slogan, o.website, e.data.qiyeData.intro ], m.contentTestFun(i, function(a) {
            a.allwords <= 0 ? g.requestUrl({
                url: "company",
                method: "add" == n.detail ? "POST" : "PUT",
                data: {
                    id: e.data.qiyeData.id,
                    cid: n.id,
                    fullname: o.fullname,
                    name: o.name,
                    logo: e.data.qiyeData.logo,
                    slogan: o.slogan,
                    website: o.website,
                    intro: e.data.qiyeData.intro,
                    products: e.data.qiyeData.products
                }
            }, function(a) {
                h.showtoast("保存成功", "success", 1e3), "add" == n.detail ? (wx.navigateBack({
                    delta: 1
                }), m.temporaryData.homePage.editHuancun[n.id] = t.buildForm(), console.log("1222223", m.temporaryData.homePage.editHuancun[n.id]), 
                m.ifFresh.mycard = !0, t.store.data.cancelBusinessBind = !1, t.update()) : wx.navigateBack({
                    delta: 2
                });
            }, "", function() {
                e.setData({
                    "saveCommit.loading": !1,
                    "saveCommit.con": "保存"
                }), b.submit = !1;
            }) : (h.testShowmodal(), t.testFailFun(a.errorArr), e.setData({
                "saveCommit.loading": !1,
                "saveCommit.con": "保存"
            }), b.submit = !1);
        }));
    },
    businessCategories: function(a) {},
    testFailFun: function(a) {
        for (var t = this.data.testQiyeData, e = 0; e < a.length; e++) switch (a[e]) {
          case 0:
            t.fullname = !0;
            break;

          case 1:
            t.name = !0;
            break;

          case 2:
            t.slogan = !0;
            break;

          case 3:
            t.website = !0;
            break;

          case 4:
            t.intro = !0;
        }
        this.setData({
            testQiyeData: t
        });
    },
    subCheck: function(a) {
        for (var t = a, e = this.data.qiyeData, n = Object.keys(t), i = 0; i < n.length; i++) !t[n[i]] && (t[n[i]] = e[n[i]]);
        return t;
    },
    upld: function(a) {
        m.systemInfo["1.7.1"] ? wx.chooseImage({
            count: 1,
            sizeType: [ "compressed" ],
            success: function(a) {
                wx.navigateTo({
                    url: "../../cardMain/upldTbcardLogo/upldTbcardLogo?imgurl=" + a.tempFilePaths[0] + "&backcolor=white&main=buildHomePage"
                }), b.submit = !1;
            }
        }) : this.lowerCanvasFun();
    },
    submitPro: function() {
        var a = this.data.qiyeData;
        if (!(a = this.subCheck(a)).fullname) return 0;
        g.requestUrl({
            url: "company",
            method: "add" == n.detail ? "POST" : "PUT",
            data: {
                id: e.data.qiyeData.id,
                cid: n.id,
                fullname: a.fullname,
                name: a.name,
                logo: e.data.qiyeData.logo,
                slogan: a.slogan,
                website: a.website,
                intro: e.data.qiyeData.intro,
                products: e.data.qiyeData.products
            }
        }, "", "", "");
    }
}, (0, r.default)(a, "subCheck", function(a) {
    for (var t = a, e = this.data.qiyeData, n = Object.keys(t), i = 0; i < n.length; i++) !t[n[i]] && (t[n[i]] = e[n[i]]);
    return t;
}), (0, r.default)(a, "lowerCanvasFun", function() {
    new c.LowerCanvas().lowVersionCanvas(e, function(a) {
        h.showtoast("上传中...", "loading", 5e3), m.photoIdentyFun(a, function(t) {
            t ? g.upldUrl({
                url: "editLogoComplete",
                data: {},
                filePath: a
            }, function(a) {
                e.setData({
                    "qiyeData.logo": a.url
                }), D && (m.temporaryData.homePage.editHuancun[n.id].logo = a.url), h.hidetoast();
            }, function() {
                h.showmodal({
                    data: "LOGO上传失败，请重新尝试",
                    cancel: !1
                }), h.hidetoast();
            }) : (h.hidetoast(), h.testImgShowmodal());
        });
    });
}), (0, r.default)(a, "tobuildProduct", function(a) {
    b.tobuildProduct || (b.tobuildProduct = !0, wx.navigateTo({
        url: "../product/product?detail=" + a.currentTarget.dataset.detail + "&id=" + n.id + "&ind=" + a.currentTarget.dataset.ind,
        complete: function() {
            b.tobuildProduct = !1;
        }
    }));
}), (0, r.default)(a, "onShareAppMessage", function() {
    return h.shareAppMessa({
        title: "我向您推荐“递名片”",
        path: "pages/cardMy/about/about?shareOthers=buildHomePage&shareType=05",
        imageUrl: m.source.shareImage
    });
}), a));