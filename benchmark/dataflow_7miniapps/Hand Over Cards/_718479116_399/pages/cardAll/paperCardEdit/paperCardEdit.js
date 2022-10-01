var a, e, t, s = require("../../../AFC697330691379CC9A0FF345133E9B3.js"), r = require("../../../628DFC170691379C04EB9410DF60E9B3.js"), i = require("../../../FB1348C50691379C9D7520C258E1E9B3.js"), o = getApp(), n = new r.CardMainEditAll(), u = new s.wxRequest(), d = require("../../../7931C4950691379C1F57AC929AD2E9B3.js"), l = {};

Page({
    data: {
        systemInfo: o.systemInfo,
        switchPlaceholder: n.switchPlaceholder()
    },
    onLoad: function(t) {
        console.log("paperCardEdit.onload", t), e = this, a = t, o.compatibleManage.navigationBarLoading && wx.showNavigationBarLoading(), 
        this.paperEditData();
    },
    onShow: function() {
        l = {};
    },
    againRequest: function() {
        d.showtoast("加载中...", "loading", 8e3), this.setData({
            "netError.show": !1
        }), this.onLoad(a);
    },
    input: function(a) {
        var e = a.currentTarget.dataset.current, t = this.data.userData;
        this.data.userData[e][0] = a.currentTarget.dataset.currentindex, this.data.userData[e][1] = a.currentTarget.dataset.currentname, 
        this.data.userData[e][2] = a.detail.value, 2 == t[e][3] && (t[e][3] = 3, this.setData({
            userData: t
        }));
    },
    paperEditData: function() {
        var a, e = o.temporaryData.edit.data;
        t = e.id, e || this.setData({
            "netError.show": !0
        }), new i.BuildPForm().buildForm(e, function(e) {
            a = e;
        }), this.setData({
            userData: a.form.form,
            arrayDesc: a.form.alter,
            photo: {
                src: a.userpic.url
            }
        }), this.data.filename = a.userpic.name, d.hidetoast(), o.compatibleManage.navigationBarLoading && wx.hideNavigationBarLoading();
    },
    changData: function(a, e) {
        for (var t = a.detail.value, s = 0; s < e.length; s++) t[e[s][0]] != e[s][2] && (t[e[s][0]] = e[s][2]);
        return a;
    },
    compsData: function(a) {
        console.log(a, "val");
        for (var e = [], t = Object.keys(a), s = 0; s < t.length; s++) e.push(a[t[s]]);
        return e;
    },
    submit: function(s) {
        var r = this;
        s = this.changData(s, this.data.userData);
        var i = this.data.userData, n = "enterShow" == a.main ? "updatePcard" : "addPcard", c = "enterShow" == a.main ? "PUT" : "POST", h = "enterShow" == a.main ? t : "";
        if (console.log(i, "用户信息"), l.submit) return 0;
        if (!s.detail.value.name || !s.detail.value.company || !s.detail.value.job) return d.showmodal({
            data: "姓名、公司、职务为必填字段，请完善信息后保存。",
            cancel: !1,
            text: "我知道了"
        }), 0;
        l.submit = !0, this.setData({
            "saveCommit.loading": !0,
            "saveCommit.con": "保存中..."
        }), d.showtoast("保存中...", "loading", 8e3);
        var m = this.compsData(s.detail.value);
        o.contentTestFun(m, function(t) {
            if (t.allwords <= 0) u.requestUrl({
                url: n,
                method: c,
                data: {
                    id: h,
                    name: s.detail.value.name,
                    company: s.detail.value.company,
                    job: s.detail.value.job,
                    phone1: s.detail.value.phone1 || "",
                    phone2: s.detail.value.phone2 || "",
                    phone3: s.detail.value.phone3 || "",
                    mophone1: s.detail.value.mophone1 || "",
                    mophone2: s.detail.value.mophone2 || "",
                    mophone3: s.detail.value.mophone3 || "",
                    addr1: s.detail.value.addr1 || "",
                    addr2: s.detail.value.addr2 || "",
                    addr3: s.detail.value.addr3 || "",
                    email1: s.detail.value.email1 || "",
                    email2: s.detail.value.email2 || "",
                    email3: "",
                    website: s.detail.value.website || "",
                    wechat: s.detail.value.wechat || "",
                    wechat2: "",
                    wechat3: "",
                    remark: s.detail.value.remark || "",
                    fax: s.detail.value.fax || "",
                    userpic: e.data.filename
                }
            }, function(e) {
                d.showtoast("保存成功", "success", 1e3), o.rsListObj.ifFresh = !0, "cardMain" == a.main ? wx.switchTab({
                    url: "../../cardsFolder/cardsFolder",
                    success: function(a) {},
                    fail: function() {},
                    complete: function() {}
                }) : wx.navigateBack({
                    delta: 1
                });
            }, "", function() {
                r.setData({
                    "saveCommit.loading": !1,
                    "saveCommit.con": "保存"
                }), l.submit = !1;
            }); else {
                r.setData({
                    "saveCommit.loading": !1,
                    "saveCommit.con": "保存"
                }), l.submit = !1, d.hidetoast(), d.testShowmodal();
                for (var p = t.errorArr, f = 0; f < p.length; f++) for (var v = 0; v < i.length; v++) m[p[f]] == i[v][2] && (i[v][3] = 2);
                r.setData({
                    userData: i
                });
            }
        });
    },
    pickerChange: function(a) {
        var e = this;
        n.pickerChange(a, this.data.arrayDesc, function(a) {
            e.data.userData.push(a.push), e.setData({
                userData: e.data.userData,
                arrayDesc: a.desc
            }), e.data.forms = e.data.userData, o.gioCustome({
                t: "paperCardEdit.001",
                v: a.name
            });
        });
    },
    takePhoto: function() {
        function a(a) {
            wx.chooseImage({
                count: 1,
                sourceType: [ a ],
                sizeType: [ "compressed" ],
                success: function(a) {
                    e.upld(a.tempFilePaths[0]);
                }
            });
        }
        wx.showActionSheet({
            itemList: [ "拍照", "从手机相册选择" ],
            success: function(e) {
                try {
                    switch (e.tapIndex) {
                      case 0:
                        a("camera");
                        break;

                      case 1:
                        a("album");
                    }
                } catch (a) {}
            }
        });
    },
    upld: function(a) {
        var t, s = this;
        this.upldProgress = {
            status: "loading"
        }, o.photoIdentyFun(a, function(r) {
            r ? (u.upldUrl({
                url: "pcardImg",
                filePath: a
            }, function(a) {
                var s = a;
                a.ocr || (s = ""), new i.BuildPForm().buildForm(s, function(a) {
                    t = a;
                }), e.setData({
                    userData: t.form.form,
                    photo: {
                        src: a.userpic.url
                    }
                }), e.data.filename = a.userpic.name, e.upldProgress.status = "success";
            }, function(a) {
                d.showmodal({
                    data: "图片上传失败，请重新拍照或者选择图片",
                    cancel: !1
                }), e.upldProgress.status = "fail";
            }), d.upldProgress(s.upldProgress, s)) : (d.testImgShowmodal(), e.upldProgress.status = "fail");
        });
    },
    ss: function() {},
    onShareAppMessage: function() {
        return d.shareAppMessa({
            title: "我向您推荐“递名片”",
            path: "pages/cardMy/about/about?shareOthers=paperCardEdit&shareType=05",
            imageUrl: o.source.shareImage
        });
    }
});