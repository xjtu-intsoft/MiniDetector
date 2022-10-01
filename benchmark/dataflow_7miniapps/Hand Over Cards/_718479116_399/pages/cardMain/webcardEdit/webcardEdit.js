var t = require("../../../@babel/runtime/helpers/interopRequireDefault"), e = t(require("../../../@babel/runtime/helpers/defineProperty"));

require("../../../@babel/runtime/helpers/Arrayincludes");

var a = t(require("../../../595319F00691379C3F3571F767A1E9B3.js")), n = t(require("../../../4F4638B00691379C292050B78222E9B3.js")), i = (t(require("../../../6D9187820691379C0BF7EF857DE2E9B3.js")), 
require("../../../AFC697330691379CC9A0FF345133E9B3.js")), o = require("../../../CE6E4DB30691379CA80825B41890E9B3.js");

function s(t, e) {
    var a = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), a.push.apply(a, n);
    }
    return a;
}

function r(t) {
    for (var a = 1; a < arguments.length; a++) {
        var n = null != arguments[a] ? arguments[a] : {};
        a % 2 ? s(Object(n), !0).forEach(function(a) {
            (0, e.default)(t, a, n[a]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
        });
    }
    return t;
}

var d, u, c = new i.wxRequest(), l = require("../../../7931C4950691379C1F57AC929AD2E9B3.js"), h = (require("../../../18ED02D30691379C7E8B6AD4CA13E9B3.js"), 
getApp());

(0, n.default)(a.default, {
    data: {
        cbData: null,
        initData: null,
        options: "",
        cardData: "",
        systemInfo: h.systemInfo,
        loading: {},
        current: 0,
        dzcurrent: 0,
        addItem: {},
        saveCommit: {
            loading: !1
        },
        isUseWechatLogo: !1,
        mycard: null,
        hasUpdateForm: null,
        dropList: {
            necess: !0,
            unnecess: !0,
            intro: !0,
            video: !0,
            bussiness: !0
        },
        webBusinessPhtotoName: "template_directory/portraitPlaceholder.png",
        webBusinessPhtotoUrl: h.source.webBusinessPhtotoUrl,
        showAdmin: !1,
        showMember: !1,
        styleCon: [],
        entState: 0,
        entId: ""
    },
    onLoad: function(t) {
        this.data.options = t, this.setData({
            optionsL: t
        }), this.initCard(t);
    },
    onShow: function() {
        h.refreshCardStatus && this.initCard(this.data.options), this.store.data.hasUpdateAddr && (h.temporaryData.edit.enterMark = !1, 
        this.store.data.hasUpdateForm = !0, this.initformData());
    },
    initCard: function(t) {
        var e = this;
        this.getWebData(t.id).then(function(t) {
            t && (e.setData({
                entState: t.entState || 0,
                entId: t.entId
            }), u = t, e.store.data.initData = (0, o.initWebFormFun)(), e.store.data.defCard = u, 
            e.store.data.tempName = u.modelIndex.value, e.initTempDate(u), e.store.data.hasUpdateForm = !1, 
            e.store.data.showZhidingyi = !0, e.store.data.confirming = !1, e.store.data.autoFocusType = -1, 
            e.saveNumGet(), e.initformData(), e.tplFun(t.entId, function(a) {
                var n = t.userpic.name;
                console.log(a, n);
                var i = e.findCurrentTplIndex(a, n);
                i > -1 && e.setData({
                    styleCon: a,
                    tplIndex: i
                });
            }), h.callWebdata && h.callWebdata(), e.update());
        });
    },
    aa: function() {},
    dropFunc: function(t) {
        var e = t.currentTarget.dataset.type || t.detail && t.detail.currentTarget.dataset.type;
        if (this.data.dropList[e]) switch (e) {
          case "intro":
            h.burying.setPoint(h, 788);
            break;

          case "video":
            h.burying.setPoint(h, 789);
        } else switch (e) {
          case "intro":
            h.burying.setPoint(h, 786);
            break;

          case "video":
            h.burying.setPoint(h, 787);
        }
        this.data.dropList[e] = !this.data.dropList[e], this.setData({
            dropList: this.data.dropList
        }), console.log(this.data.dropList);
    },
    firstAddStatus: function(t) {
        var e = [ "mophone1", "wechat", "addr1", "email1", "phone1" ], a = this.store.data.cbData.showconfig.configShow || {};
        t.forEach(function(n, i) {
            e.includes(n[0]) ? (t[i + 1][7].add && t[i + 2][7].add && (n[7].add = !1), t[i + 1][7].add && t[i + 2][7].add || (n[7].add = !0)) : (n[2] || a[n[0]]) && (n[7].add = !0);
        });
    },
    getWebData: function(t) {
        var e = this;
        return new Promise(function(a, n) {
            c.requestUrl({
                url: "webFindById",
                data: {
                    id: t,
                    formtoken: e.data.optionsL.formtoken
                }
            }, function(t) {
                console.log("hhhh", t), t.showconfig || (t.showconfig = {}), a(t);
            });
        });
    },
    initformData: function() {
        var t = this, e = this.store.data.initData.formData.form;
        e.forEach(function(e, a) {
            e[2] = t.store.data.cbData[e[0]] || "";
        }), this.firstAddStatus(e), this.store.data.cbData.showconfig ? this.store.data.initData.showconfig = Object.assign({}, this.store.data.cbData.showconfig) : this.store.data.initData.showconfig = {}, 
        this.update().then(function(t) {});
    },
    _pick1: function(t, e) {
        var a = {};
        for (var n in e) t[n] && (a[n] = t[n]);
        return console.log("_pick1", a), a;
    },
    initTempDate: function(t) {
        var e = this.store.data.cbData;
        for (var a in e = this.store._pick(t, Object.keys(e))) e[a] = null === e[a] ? "" : e[a];
        e.webCustomList && (e.showconfig.webcustom = [], e.webCustomList.forEach(function(t) {
            "true" === t.fieldState && e.showconfig.webcustom.push([ t.fieldName, t.fieldValue, t.fieldState ]);
        })), e.desc = t.album_data || [], e.video = t.video_data || [], this.store.data.cbData = e, 
        this.update().then(function(t) {});
    },
    deleteCard: function() {
        var t = this, e = "确定删除本张名片？";
        this.cardTeamList(function(a) {
            "teamSuperManager" == a.cardStatus ? l.showmodal({
                cancel: !1,
                text: "我知道了",
                data: "您是企业【" + a.teamData.entName + "的超级管理员，如需删除名片，请先转让管理员权限或解散企业"
            }) : ("joinedTeam" == a.cardStatus ? e = "该名片已加入【" + a.teamData.entName + "】，删除后将自动退出该企业，是否仍要删除？" : 4 == u.cardType ? e = "删除该名片将移除您在所有班级的信息" : t.data.saveNum && t.data.saveNum > 0 && (e = t.data.saveNum + "人已保存，你可以选择修改名片信息，修改的信息会同步更新至对方名片夹"), 
            l.deletemodal(e, function() {
                t.setData({
                    deleteCon: {
                        loading: !0,
                        con: "删除中"
                    },
                    pageShade: {
                        show: !0
                    }
                }), l.showtoast("删除中...", "loading", 8e3), t.deleteFun(), h.burying.setPoint(h, 439), 
                "joinedTeam" == a.cardStatus && h.burying.setPoint(h, 680);
            }, function() {
                h.burying.setPoint(h, 438), "joinedTeam" == a.cardStatus && h.burying.setPoint(h, 681);
            }));
        });
    },
    saveNumGet: function() {
        var t = this;
        c.requestUrl({
            url: "mycardCount",
            data: {
                id: this.data.options.id
            }
        }, function(e) {
            t.data.saveNum = e;
        });
    },
    cardTeamList: function(t) {
        var e = this;
        h.setRequest({
            url: "cardsList",
            data: {
                openId: h.client.openid
            }
        }, function(a) {
            for (var n = a, i = "noTeam", o = {}, s = 0; s < n.length; s++) if (n[s].entId && n[s].cardId == e.data.options.id) {
                i = "joinedTeam", o = n[s], 1 == n[s].roleId && (i = "teamSuperManager");
                break;
            }
            t && t({
                cardStatus: i,
                teamData: o
            });
        });
    },
    formSubmit: function(t) {
        var e = this;
        if (t && t.detail && h.formidSend(t.detail.formId), !this.data.getSettingMessage) return 0;
        this.checkForm() && (l.showtoast("名片生成中...", "loading", 8e3), Promise.all([ this.updateCard() ]).then(function(t) {
            var a = "", n = e.store.createWebData(), i = e.store.data.cbData.bpUrl.url;
            u.modelIndex.isBussinessPhoto && (a = i && i.includes(e.data.webBusinessPhtotoName) ? "" : e.store.data.cbData.bpUrl.name, 
            n = r({}, e.store.createWebData(), {
                bpUrl: a
            })), e.buildWebCard("PUT", n, function(t) {
                t ? e.successFun() : e.failFunc();
            });
        }));
    },
    cancalBusbind: function() {
        var t = this, e = this.store.data.defCard;
        return new Promise(function(a, n) {
            return console.log("this.store.data.cancelBusinessBind", t.store.data.cancelBusinessBind), 
            e.company_data && !t.store.data.cancelBusinessBind ? a("当前未取消绑定") : e.company_data ? void h.setRequest({
                url: "isvisible",
                method: "PUT",
                data: {
                    id: e.company_data.id,
                    visible: !1
                }
            }, function(t) {
                a(t);
            }, function() {
                n("fail");
            }) : a("当前未绑定企业");
        });
    },
    successFun: function() {
        l.showtoast("保存成功", "success", 1e3), h.refreshCardStatus = !0, wx.navigateBack({
            delta: 1
        });
    },
    failFunc: function() {
        h.refreshCardStatus = !0, wx.navigateBack({
            delta: 1
        });
    },
    checkForm: function() {
        for (var t = !0, e = this.store.data.initData.formData.form, a = this.store.data.cbData.showconfig.configShow, n = this.store.data.cbData.showconfig.webcustom, i = 0; i < e.length; i++) e[i][4] = 1 != a[e[i][0]] || e[i][2].trim().length ? 3 : 2, 
        1 != a[e[i][0]] || e[i][2] || e[i][2].length || (t = !1);
        console.log("webcustom", n);
        for (var o = this.store.data.webCustomVfailArray, s = this.store.data.webCustomVNullArray, r = 0; r < n.length; r++) o[r] = !1;
        for (var d = 0; d < n.length; d++) n[d][1] || (s[d] = !0);
        for (var u = 0; u < n.length; u++) "true" == n[u][2] && "" == n[u][1] && (t = !1);
        return this.update(), t;
    },
    getUserSetting: function() {
        var t = this;
        h.getSettingMessage(function(e) {
            t.setData({
                getSettingMessage: e.u
            });
        });
    },
    getUserMessa: function(t) {
        t.detail.iv && (this.setData({
            getSettingMessage: !0
        }), this.formSubmit(), h.setUnion(t.detail));
    },
    webSvg: function(t) {
        var e = this.store.webSvgData(), a = "";
        u.modelIndex.isBussinessPhoto && (e.bpUrl.name ? (console.log(2), a = e.bpUrl.url) : (console.log(1), 
        a = this.data.webBusinessPhtotoUrl), console.log("-------------------------------", a)), 
        this.drawSvg(r({}, e, {
            bpUrl: a
        }), t);
    },
    drawSvg: function(t, e) {
        c.requestUrl({
            url: "drawWebImg",
            method: "POST",
            data: t
        }, function(t) {
            e && e(t);
        }, function(t) {});
    },
    compsData: function(t, e) {
        e = t.length;
        for (var a = [], n = (t = t, 0); n < e; n++) "custom" != t[n][0] && a.push(t[n][2]);
        return a;
    },
    updateCard: function() {
        var t = this, e = this.store.data.initData.formData.form;
        return this.checkForm(), e[0][2] && e[1][2] && e[2][2] ? (d = this.compsData(e, e.length).concat(this.store.data.cbData.intro), 
        new Promise(function(a, n) {
            h.contentTestFun(d, function(n) {
                if (n.allwords <= 0) t.store.data.hasUpdateForm = !0, t.webSvg(function(e) {
                    t.store.data.cbData.userpic = {
                        name: e.userpic,
                        url: e.url
                    }, h.ifFresh.mycard = !0, t.update(), a(e);
                }); else {
                    l.hidetoast(), l.testShowmodal();
                    var i = n.errorArr;
                    console.log("errorArr", i, d);
                    for (var o = 0; o < i.length; o++) {
                        for (var s = 0; s < e.length; s++) d[i[o]] == e[s][2] && (e[s][6] = 2);
                        if (i.indexOf(d.length - 1) > -1) {
                            t.selectComponent("#personalintro")._introFail();
                            break;
                        }
                    }
                    t.update();
                }
            });
        })) : 0;
    },
    buildWebCard: function(t, e, a) {
        c.requestUrl({
            url: "webCardUpdate",
            method: t,
            data: e
        }, function(t) {
            a && a(t);
        }, function(t) {
            a && a(t);
        }, "");
    },
    deleteFun: function() {
        var t = this;
        c.requestUrl({
            url: "deleteCard",
            extra: "/" + this.data.options.id,
            method: "DELETE"
        }, function(e) {
            l.showtoast("删除成功", "success", 1e3), h.ifFresh.mycard = !0, "cardAll" == t.data.options.main ? wx.navigateBack({
                delta: 2
            }) : "howEnter" == t.data.options.main || "stickCard" == t.data.options.main ? wx.navigateBack({
                delta: 1
            }) : "company" == t.data.options.main ? wx.reLaunch({
                url: "/pages/cardMain/cardMain"
            }) : wx.switchTab({
                url: "/pages/cardMain/cardMain"
            });
        }, "", function() {
            t.setData({
                deleteCon: {
                    loading: !1,
                    con: "删除名片"
                },
                pageShade: {
                    show: !1
                }
            });
        });
    },
    closeAdminFunc: function() {
        this.setData({
            showAdmin: !1
        });
    },
    closeMemberFunc: function() {
        this.setData({
            showMember: !1
        });
    },
    showDialog: function(t) {
        this.setData((0, e.default)({}, t.detail.name, t.detail.val));
    },
    tplFun: function(t, e) {
        h.setRequest({
            url: "tplGetTplList",
            data: {
                entId: t
            }
        }, function(t) {
            e && e(t);
        });
    },
    findCurrentTplIndex: function(t, e) {
        if (t.length) return t.findIndex(function(t) {
            return t.tplName == e.split("@")[0];
        });
    },
    editCardStyleFunc: function() {
        h.burying.setPoint(h, 1074);
        var t = this.data.tplIndex;
        if (this.closeAdminFunc(), 0 == this.data.entState) return h.setEditCardIsOverDue = !0, 
        wx.setStorageSync("entId", this.data.entId), void wx.switchTab({
            url: "/pages/company/company"
        });
        if (-1 == t) {
            l.showtoast("当前名片需返回刷新...", "loading", 2e3);
            var e = null;
            return clearTimeout(e), void (e = setTimeout(function() {
                wx.navigateBack({
                    delta: 1
                });
            }, 2e3));
        }
        var a = r({}, this.data.styleCon[t]), n = a.tplBaseNum, i = a.entId, o = a.deptNames;
        wx.navigateTo({
            url: "/pages/companyManage/configurationChangeStyle/configurationChangeStyle?tplBaseNum=" + n + "&ind=" + t + "&entId=" + i + "&sUse=" + !0 + "&tplDefine=" + encodeURIComponent(o)
        });
    }
});