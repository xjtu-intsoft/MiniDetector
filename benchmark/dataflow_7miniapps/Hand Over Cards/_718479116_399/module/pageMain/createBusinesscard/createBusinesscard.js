var t, a = require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../@babel/runtime/helpers/defineProperty")), e = getApp(), n = require("../../../7931C4950691379C1F57AC929AD2E9B3.js");

Component({
    properties: {
        cardList: {
            type: Array,
            value: null,
            observer: function(t, a) {
                console.log("ddd", t), this.setData({
                    num: t && t.length > 0 ? 1 : 0
                });
            }
        },
        entName: {
            type: String,
            value: "",
            observer: function(t, a) {
                this.setData({
                    "createCard[1].value": t
                });
            }
        },
        choosePhone: {
            type: String,
            value: "",
            observer: function(t, a) {
                this.setData({
                    "createCard[3].value": t
                });
            }
        },
        pages: {
            type: String,
            value: ""
        },
        entId: {
            type: String,
            value: ""
        },
        openId: {
            type: String,
            value: ""
        },
        formTitle: {
            type: String,
            value: ""
        },
        listTtile: {
            type: String,
            value: ""
        },
        adminName: {
            type: String,
            value: ""
        },
        deptId: {
            type: String,
            value: ""
        },
        constructorType: {
            type: String,
            value: ""
        },
        bg: {
            type: Boolean,
            value: !0
        },
        openType: {
            type: String,
            value: ""
        },
        paddingTop: {
            type: String,
            value: ""
        },
        zIndex: String
    },
    data: {
        systemInfo: e.systemInfo,
        num: 1,
        animationData: {},
        caraAnimationData: {},
        choiceIndex: null,
        cardData: null,
        creatAdd: "",
        createCard: [ {
            type: "name",
            value: "",
            status: !1
        }, {
            type: "company",
            value: "",
            status: !1
        }, {
            type: "job",
            value: "",
            status: !1
        }, {
            type: "mophone1",
            value: "",
            status: !1
        }, {
            type: "wechat",
            value: "",
            status: !1
        }, {
            type: "addr1",
            value: "",
            status: !1
        } ]
    },
    pageLifetimes: {
        show: function() {
            var a = (t = getCurrentPages())[t.length - 1].data;
            this.setData({
                "createCard[5].value": a.creatAdd
            });
        }
    },
    methods: {
        addMackNew: function() {
            e.burying.setPoint(e, 600);
            var t = this.data.createCard[5].value ? this.data.createCard[5].value : "";
            this.data.createCard[5].notpass && this.setData({
                "createCard[5].notpass": !1
            }), console.log(t), wx.navigateTo({
                url: "/pages/companyManage/addrMatch/addrMatch?creatAdd=" + t
            });
        },
        selectCards: function(t) {
            e.burying.setPoint(e, 592);
            var a = t.currentTarget.dataset;
            ("fromMicro" == this.data.openType && null == a.entid || "fromTeam" == this.data.openType) && this.setData({
                choiceIndex: a.key,
                cardData: this.data.cardList[a.key]
            });
        },
        businessCards: function() {
            e.burying.setPoint(e, 593), this.setData({
                num: 0
            }), this.showModal();
        },
        closeW: function(t) {
            var a = this;
            t.currentTarget.dataset.type;
            "1" == this.data.num ? e.burying.setPoint(e, 812) : e.burying.setPoint(e, 811), 
            this.slideDown();
            var n = null;
            clearTimeout(n), n = setTimeout(function() {
                a.triggerEvent("closeWindow");
            }, 300);
        },
        createTeam: function(t) {
            var a = this;
            "createTeam" == this.data.pages ? (wx.showToast({
                title: "提交中",
                icon: "loading",
                mask: !0,
                duration: 8e3
            }), e.setRequest({
                url: "createTeam",
                method: "post",
                data: {
                    avatarUrl: e.touxiang.avatarUrl || "",
                    entName: this.data.entName,
                    nickName: e.touxiang.nickName || "",
                    openId: e.client.openid,
                    vcardId: this.data.cardData.cardId
                }
            }, function(t) {
                n.showtoast("加入企业成功", "none", 2e3), wx.setStorageSync("entId", t.entId);
                var e = a;
                setTimeout(function() {
                    e.triggerEvent("teamInfo", t);
                }, 2e3);
            })) : (this.data.pages, this.joinTeam(t));
        },
        joinTeam: function(t) {
            var a = this;
            "hideToast" !== t && wx.showToast({
                title: "提交中",
                icon: "loading",
                mask: !0,
                duration: 8e3
            }), e.setRequest({
                url: "joinTeam",
                method: "post",
                data: {
                    entId: this.data.entId,
                    entName: this.data.entName,
                    vcardId: Number(this.data.cardData.cardId),
                    deptId: this.data.deptId
                }
            }, function(t) {
                var i = a;
                console.log("joinTeam.res", t), n.showtoast("加入企业成功", "none", 2e3), wx.setStorageSync("entId", a.data.entId), 
                "constructor" == a.data.pages ? setTimeout(function() {
                    i.replaceTeamAdministrator();
                }) : "joinenterprise" == a.data.pages ? (console.log("jointeam.joinenterprise"), 
                e.inviteTeamGuidePage = !0, setTimeout(function() {
                    i.triggerEvent("teamInfo", t);
                }, 2e3)) : (console.log("jointeam.else"), setTimeout(function() {
                    i.triggerEvent("teamInfo", t);
                }, 2e3));
            });
        },
        claimCardFun: function(t, a) {
            wx.showToast({
                title: "提交中",
                icon: "loading",
                mask: !0,
                duration: 8e3
            });
            var i = {
                replaceId: !1,
                claimCardId: !1,
                isReplace: !1,
                entName: this.data.entName
            };
            i.claimCardId = this.data.cardData.cardId, console.log("gggg", i), e.setRequest({
                url: "claimCard",
                method: "POST",
                data: i
            }, function(a) {
                n.showtoast("加入企业成功", "none", 2e3), t && t(a);
            }, function() {
                n.showtoast("加入企业成功", "none", 2e3), a && a();
            });
        },
        replaceTeamAdministrator: function() {
            var t = this;
            e.setRequest({
                url: "replaceTeamAdministrator",
                method: "post",
                data: {
                    oldOpenId: this.data.openId,
                    newOpenId: e.client.openid,
                    entId: this.data.entId,
                    newHeadUrl: e.touxiang.avatarUrl,
                    newPetName: e.touxiang.nickName,
                    vcardId: this.data.cardData.cardId,
                    source: "scancode" == this.data.constructorType ? 1 : 2
                }
            }, function(a) {
                var e = a.adminOpenId ? "200" : a.status, n = a.data ? a.data : "";
                a.adminOpenId ? wx.redirectTo({
                    url: "../handoverStatus/handoverStatus?status=" + e + "&data=" + n + "&adminOpenId=" + a.adminOpenId + "&entId=" + t.data.entId + "&adminName=" + t.data.adminName + "&entName=" + t.data.entName + "&isAdmin=1&userOpenId=" + a.adminOpenId
                }) : wx.redirectTo({
                    url: "../handoverStatus/handoverStatus?status=" + e + "&data=" + n
                });
            });
        },
        send: function(t) {
            console.log(t);
        },
        creatCard: function() {
            var t = this, a = this.data.createCard;
            if (!this.data.createLoading) {
                this.data.createLoading = !0;
                for (var e = 0; e < a.length; e++) "name" != a[e].type && "company" != a[e].type && "job" != a[e].type || "" == a[e].value && (a[e].status = !0, 
                this.setData({
                    createCard: a
                }));
                if ("" !== a[0].value && "" !== a[1].value && "" !== a[2].value) {
                    wx.showToast({
                        title: "提交中",
                        icon: "loading",
                        mask: !0,
                        duration: 8e3
                    });
                    var i = this.testArrFun(a);
                    this.contentTestFun(i, function() {
                        t.createCardTeam(a, function(a) {
                            t.setData({
                                "cardData.cardId": a.data.id
                            }), t.createTeam("hideToast");
                        }, function() {
                            t.failFun();
                        });
                    }, function(a) {
                        for (var e = a.errorArr, i = t.data.createCard, o = 0; o < e.length; o++) i[e[o]].notpass = !0;
                        t.setData({
                            createCard: i
                        }), t.failFun(), n.testShowmodal();
                    }, function() {
                        t.failFun();
                    });
                } else this.failFun();
            }
        },
        testArrFun: function(t) {
            for (var a = t, e = [], n = 0; n < a.length; n++) e.push(a[n].value);
            return e;
        },
        contentTestFun: function(t, a, n, i) {
            e.contentTestFun(t, function(t) {
                t.allwords <= 0 ? a && a() : n && n(t);
            }, function() {
                i && i();
            });
        },
        failFun: function() {
            this.data.createLoading = !1, n.hidetoast();
        },
        createCardTeam: function(t, n, i) {
            var o, s = t;
            e.setRequest({
                url: "createCardTeam",
                method: "post",
                data: (o = {
                    openid: e.client.openid,
                    phone1: "",
                    email1: "",
                    website: "",
                    wechat: "",
                    fax: "",
                    pinyin: "",
                    bpUrl: "",
                    customAvatar: e.touxiang.avatarUrl,
                    showconfig: {
                        custom: [],
                        configShow: {
                            mophone1: !0,
                            wechat: !0,
                            addr1: !0
                        }
                    },
                    tempId: "TKWhite-NewEmpty",
                    folder: "TEMPLATES_V9",
                    name: s[0].value,
                    company: s[1].value,
                    job: s[2].value,
                    mophone1: s[3].value
                }, (0, a.default)(o, "wechat", s[4].value), (0, a.default)(o, "addr1", s[5].value), 
                o)
            }, function(t) {
                console.log("jjjj", t), n && n(t);
            }, function() {
                i && i();
            });
        },
        input: function(t) {
            var e = Number(t.currentTarget.dataset.index), n = this.data.createCard, i = "createCard[" + e + "].value";
            if (this.setData((0, a.default)({}, i, t.detail.value)), n[e].notpass || n[e].status) {
                var o, s = "createCard[" + e + "].notpass", r = "createCard[" + e + "].status";
                this.setData((o = {}, (0, a.default)(o, s, !1), (0, a.default)(o, r, !1), o));
            }
        },
        getUserMessa: function(t) {
            var a = this, n = t.currentTarget.dataset;
            t.detail.iv && e.setUnion(t.detail, function() {
                "joinTeam" == n.button ? (console.log("表单 joinTeam"), e.burying.setPoint(e, 601), 
                a.creatCard()) : "claimCard" == n.button ? (console.log("claimCard"), a.claimCardFun(function(t) {
                    console.log("teamInfo", t), t.entId && wx.setStorageSync("entId", t.entId), a.triggerEvent("teamInfo", t);
                })) : (console.log("choose"), e.burying.setPoint(e, 594), a.createTeam());
            });
        },
        focus: function(t) {
            switch (Number(t.currentTarget.dataset.index)) {
              case 0:
                e.burying.setPoint(e, 595);
                break;

              case 1:
                e.burying.setPoint(e, 597);
                break;

              case 2:
                e.burying.setPoint(e, 596);
                break;

              case 3:
                e.burying.setPoint(e, 598);
                break;

              default:
                e.burying.setPoint(e, 599);
            }
        },
        showModal: function(t) {
            var a = this, e = wx.createAnimation({
                duration: 400,
                timingFunction: "ease"
            });
            this.animation = e;
            var n = setTimeout(function() {
                a.slideIn(), clearTimeout(n), n = null;
            }, t || 100);
        },
        slideIn: function() {
            this.animation.translateY(0).step(), 1 == this.data.num ? (this.selectDefaultFun(), 
            this.setData({
                animationData: this.animation.export()
            })) : this.setData({
                caraAnimationData: this.animation.export()
            });
        },
        selectDefaultFun: function() {
            var t = !1, a = 0, e = this.data.cardList;
            if ("fromMicro" == this.data.openType) {
                for (var n = 0; n < e.length; n++) if (null == e[n].entId) {
                    a = n, t = !0;
                    break;
                }
                t && this.setData({
                    choiceIndex: a,
                    cardData: e[a]
                });
            } else this.setData({
                choiceIndex: 0,
                cardData: e[0]
            });
            console.log(this.data.choiceIndex, this.data.cardData);
        },
        slideDown: function() {
            this.animation.translateY(850).step(), 1 == this.data.num ? this.setData({
                animationData: this.animation.export()
            }) : this.setData({
                caraAnimationData: this.animation.export()
            }), this.setData({
                num: null
            });
        },
        ss: function() {}
    }
});