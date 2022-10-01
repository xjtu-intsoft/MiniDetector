var t = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../@babel/runtime/helpers/defineProperty")), e = require("../../7931C4950691379C1F57AC929AD2E9B3.js"), a = getApp(), o = 1, r = 1, n = 1, s = 1, i = [], l = [], d = !1;

Page({
    data: {
        systemInfo: a.systemInfo,
        navigationSwiperData: [ {
            title: "微信群助手",
            tap: "wechatGroupAssistant"
        }, {
            title: "发票助手",
            tap: "invoiceAssistant"
        } ],
        selectTitle: "微信群助手",
        delopengid: !1,
        myMessage: {},
        records: [],
        recordsByPerson: [],
        anonymous: a.source.anonymous,
        noShow: !1,
        noList: !1,
        optionsL: "",
        delind: -1,
        endtime: "false",
        movewidth: 132 / a.systemInfo.shiftX,
        freshData: "",
        wallShowObj: {
            showCardwallListbyGroup: !1,
            showCardwallListbyPerson: !1,
            showNoRecordsCon: !0
        },
        firstShowGroupIntro: -1,
        whiteBg: !0,
        showShareBtn: !1
    },
    onPullDownRefresh: function() {
        var t = this;
        "微信群助手" == this.data.selectTitle && (this.data.wallShowObj.showCardwallListbyGroup ? this.getCardWallByGroup(1, "onPullDownRefresh").then(function(e) {
            t.lookByFunc(a.currentWallType, "nosensor");
        }) : this.getCardWallByPerson(1, "onPullDownRefresh").then(function(e) {
            t.lookByFunc(a.currentWallType, "nosensor");
        })), this.freshInvoiceFun();
    },
    onLoad: function(t) {
        console.log("cardWall.onLoad", t), this.setData({
            mycard: a.mycard
        }), wx.setNavigationBarColor({
            frontColor: "#000000",
            backgroundColor: "#ffffff"
        });
        try {
            var e = wx.getStorageSync("ifToCardMain");
            this.setData({
                ifToCardMain: e
            });
        } catch (t) {}
        a.compatibleManage.shareMenu && wx.hideShareMenu(), a.compatibleManage.navigationBarLoading && wx.showNavigationBarLoading();
    },
    onShow: function() {
        var o = this;
        a.addinvoice && (e.showtoast("保存成功", "success", 1e3), a.addinvoice = !1);
        try {
            var r = wx.getStorageSync("touxiang").d;
            !this.data.myMessage.con && r && this.setData({
                myMessage: {
                    con: r.nickName,
                    url: r.avatarUrl
                }
            });
        } catch (t) {}
        a.tokenGet(function() {
            o.mycardGet(function() {
                if (a.mycard.defCard && a.mycard.defCard.id) {
                    if (o.data.freshData && o.data.records) {
                        console.log("数据存在this.data.freshData");
                        for (var e = 0; e < o.data.records.length; e++) if (o.data.records[e].openGid == o.data.freshData) {
                            var r;
                            console.log("是否进入判断"), o.setData((r = {}, (0, t.default)(r, "records[" + e + "].cardCount", o.data.records[e].cardCount + 1), 
                            (0, t.default)(r, "freshData", ""), r));
                            break;
                        }
                    }
                    a.compatibleManage.shareMenu && wx.showShareMenu({
                        withShareTicket: !0
                    });
                } else i = [], l = [], o.setData({
                    records: []
                }), a.compatibleManage.shareMenu && wx.hideShareMenu();
            }), o.freshGroupFun(), o.freshInvoiceFun(), o.setData({
                updateBubble: {
                    timer: new Date().getTime()
                }
            });
        });
    },
    getfirstShowGroupIntro: function() {
        !1 === wx.getStorageSync("firstShowGroupIntro") ? this.setData({
            firstShowGroupIntro: "nofirstShow"
        }) : this.setData({
            firstShowGroupIntro: "firstShow"
        }), console.log("firstShowGroupIntro", this.data.firstShowGroupIntro), this.sensorPagestatus(this.data.selectTitle, this.data.firstShowGroupIntro);
    },
    setfirstShowGroupIntro: function() {
        wx.setStorageSync("firstShowGroupIntro", !1), this.setData({
            firstShowGroupIntro: "nofirstShow"
        });
    },
    initCardWall: function(t, e, o) {
        var r = this;
        Promise.all([ this.getCardWallByGroup(t, o), this.getCardWallByPerson(e, o) ]).then(function(t) {
            t[0].length && t[1] ? a.currentWallType = "showCardwallListbyPerson" == a.currentWallType ? "showCardwallListbyPerson" : "showCardwallListbyGroup" : a.currentWallType = "showNoRecordsCon", 
            r.getfirstShowGroupIntro(), r.setWhiteBg(), r.setshowShareBtn();
            r.lookByFunc(a.currentWallType, "nosensor");
        });
    },
    setWhiteBg: function() {
        "firstShow" == this.data.firstShowGroupIntro || "发票助手" == this.data.selectTitle || "微信群助手" == this.data.selectTitle && "firstShow" != this.data.firstShowGroupIntro && !this.data.records.length || 1 == this.data.wallShowObj.showCardwallListbyGroup ? this.setData({
            whiteBg: !0
        }) : this.setData({
            whiteBg: !1
        });
    },
    setshowShareBtn: function() {
        "nofirstShow" == this.data.firstShowGroupIntro || this.data.records.length ? this.setData({
            showShareBtn: !0
        }) : this.setData({
            showShareBtn: !1
        });
    },
    wechatGroupAssistant: function(t) {
        var e = t.currentTarget.dataset.title;
        if (a.burying.setPoint(a, 867), e == this.data.selectTitle) return 0;
        wx.pageScrollTo({
            scrollTop: 0,
            duration: 0
        }), this.setData({
            selectTitle: e
        }), this.setWhiteBg(), this.freshGroupFun();
    },
    invoiceAssistant: function(t) {
        var e = t.currentTarget.dataset.title;
        if (a.burying.setPoint(a, 639), e == this.data.selectTitle) return 0;
        wx.pageScrollTo({
            scrollTop: 0,
            duration: 0
        }), this.setData({
            selectTitle: e
        }), this.freshInvoiceFun(), this.setWhiteBg();
    },
    freshGroupFun: function() {
        if ("微信群助手" == this.data.selectTitle) try {
            wx.getStorageSync("enter-stickCard") ? (o = 1, r = 1, this.initCardWall(o, r, "onShow-fresh"), 
            wx.setStorageSync("enter-stickCard", !1)) : this.initCardWall(o, r, "onShow");
        } catch (t) {
            this.initCardWall(o, r, "onShow");
        }
    },
    freshInvoiceFun: function() {
        "发票助手" == this.data.selectTitle && this.setData({
            freshInvoice: {
                timer: new Date().getTime()
            }
        });
    },
    sensorPagestatus: function(t, e) {
        "发票助手" == t ? a.burying.setSensorEvent(a, {
            PageTitle: "发票页"
        }, "AssistantViewScreen") : "firstShow" == e ? a.burying.setSensorEvent(a, {
            PageTitle: "群助手功能说明页"
        }, "AssistantViewScreen") : a.burying.setSensorEvent(a, {
            PageTitle: "群友名片页"
        }, "AssistantViewScreen");
    },
    freshInvoiceEnd: function() {
        wx.stopPullDownRefresh();
    },
    lookByFunc: function(t, e) {
        var o = this;
        t = t.currentTarget ? t.currentTarget.dataset.type : t, e = t.currentTarget ? t.currentTarget.dataset.kind : e, 
        Object.keys(this.data.wallShowObj).forEach(function(r) {
            r == t ? (o.data.wallShowObj[r] = !0, a.currentWallType = t, "nosensor" != e && ("showCardwallListbyPerson" == t && a.burying.setPoint(a, 696), 
            "showCardwallListbyGroup" == t && a.burying.setPoint(a, 697))) : o.data.wallShowObj[r] = !1;
        }), this.setData({
            wallShowObj: this.data.wallShowObj
        }), a.currentWallType = t, this.setWhiteBg();
    },
    toMyPage: function() {},
    openGuideSkill: function() {
        this.sensorSend(), wx.getStorageSync("sendcardWallTips") || (a.burying.setSensorEvent(a, {
            PopupPromptTrigger: "点击选择群聊",
            PopupPromptMainButton: "复制"
        }, "PopupPromptShow"), this.selectComponent("#sendTips").show()), wx.setStorageSync("sendcardWallTips", !0), 
        this.setfirstShowGroupIntro();
    },
    jielongSensor: function() {
        a.burying.setPoint(a, 635);
    },
    animationInit: function() {
        this.animation = wx.createAnimation({
            duration: 300,
            timingFunction: "ease"
        });
    },
    toStickCard: function() {
        var t = this.data.ifToCardMain;
        if (t && t.ifJump) {
            wx.navigateTo({
                url: "../cardWall/stickCard/stickCard?gid=" + t.gid + "&cid=" + t.cid
            });
            try {
                wx.setStorageSync("ifToCardMain", {
                    ifJump: !1,
                    gid: "",
                    cid: ""
                });
            } catch (t) {}
        }
    },
    sensorSend: function() {
        "firstShow" == this.data.firstShowGroupIntro ? a.burying.setPoint(a, 908) : "nofirstShow" == this.data.firstShowGroupIntro && (this.data.recordsByPerson && this.data.recordsByPerson.length <= 0 ? a.burying.setPoint(a, 909) : a.burying.setPoint(a, 698));
    },
    toCardMainEditAll: function() {
        this.sensorSend(), e.showtoast("请先制作名片", "none", 2e3);
        var t = null, a = this;
        clearTimeout(t), t = setTimeout(function() {
            wx.navigateTo({
                url: "/pages/mainPage/cardMain/cardFormBuild/cardFormBuild?butt=build&main=cardWall&id=none",
                success: function() {
                    a.setfirstShowGroupIntro();
                }
            });
        }, 2e3);
    },
    getCardWallByGroup: function(e, r) {
        var s = this, l = e;
        return "onShow" == r && d && (l > 1 && (l = 1, o = 1), i = [], d = !1), new Promise(function(e, d) {
            a.setRequest({
                url: "groupFriendsCardListByGroup",
                data: {
                    currentPage: l
                }
            }, function(l) {
                "onShow" == r ? i.length <= 0 && (i = i.concat(l.records)) : "onShow-fresh" == r || "onPullDownRefresh" == r ? (o = 1, 
                i = (i = []).concat(l.records)) : i = i.concat(l.records);
                for (var d = 0; d < i.length; d++) s.setData((0, t.default)({}, "records[" + d + "].cardCount", i[d].cardCount));
                s.setData({
                    noShow: !0,
                    records: i
                }), console.log("records", s.data.records), n = l.pages, e && e(i), a.compatibleManage.navigationBarLoading && wx.hideNavigationBarLoading(), 
                wx.stopPullDownRefresh();
            }, "", function() {
                wx.stopPullDownRefresh(), a.compatibleManage.navigationBarLoading && wx.hideNavigationBarLoading();
            });
        });
    },
    getCardWallByPerson: function(t, e) {
        var o = this, n = t;
        return "onShow" == e && d && (n > 1 && (n = 1, r = 1), l = [], d = !1), new Promise(function(t, i) {
            a.setRequest({
                url: "groupFriendsCardListByPerson",
                data: {
                    currentPage: n,
                    pageSize: 20
                }
            }, function(i) {
                i && ("onShow" == e ? 1 == n ? l = i.records : l.length <= 0 && (l = l.concat(i.records)) : "onShow-fresh" == e || "onPullDownRefresh" == e ? (r = 1, 
                l = (l = []).concat(i.records)) : l = l.concat(i.records));
                for (var d = 0; d < l.length; d++) l[d].industryData = l[d].industry_data ? l[d].industry_data.split(",")[0] : "";
                o.setData({
                    noShow: !0,
                    recordsByPerson: l
                }), s = i.pages, t && t(i), a.compatibleManage.navigationBarLoading && wx.hideNavigationBarLoading(), 
                wx.stopPullDownRefresh();
            }, "", function() {
                wx.stopPullDownRefresh(), a.compatibleManage.navigationBarLoading && wx.hideNavigationBarLoading();
            });
        });
    },
    mycardGet: function(t) {
        var e = this;
        a.ifFresh.mycard ? a.setRequest({
            url: "mycard"
        }, function(a) {
            e.setData({
                noList: !0,
                mycard: a
            }), t && t();
        }) : (this.setData({
            mycard: a.mycard
        }), t && t());
    },
    onGotUserInfo: function(t) {
        t.detail.iv && (this.setData({
            myMessage: {
                con: t.detail.userInfo.nickName,
                url: t.detail.userInfo.avatarUrl
            }
        }), a.setUnion(t.detail));
    },
    delCardWall: function(t) {
        var o = this, r = t.detail.currentTarget.dataset.openGid, n = t.detail.currentTarget.dataset.index;
        a.setRequest({
            url: "groupDelete",
            extra: "/" + r,
            method: "DELETE"
        }, function(t) {
            e.showtoast("已退出", "success", 1e3), o.data.records.splice(n, 1), o.setData({
                delind: -1,
                records: o.data.records
            }), o.initCardWall(1, 1, "onShow-fresh");
        });
    },
    toWallDetail: function(t) {
        this.setData({
            delind: -1
        });
        var e = t.detail.currentTarget.dataset, o = e.openGid, r = e.type, n = e.formtoken, s = e.id;
        "sortByPerson" == r ? (a.burying.setPoint(a, 700), wx.navigateTo({
            url: "/pages/subpackagePage/cardWall/innerCardDetail/innerCardDetail?openGid=" + o + "&cid=" + s + "&main=cardWall&formtoken=" + n
        })) : (a.burying.setPoint(a, 699), wx.navigateTo({
            url: "/pages/subpackagePage/cardWall/newWallBuild/newWallBuild?openGid=" + o + "&gid=" + s + "&main=cardWall"
        }));
    },
    onHide: function() {},
    onUnload: function() {
        a.burying.setPoint(a, 638);
    },
    onReachBottom: function() {
        var t = this, e = this.data.wallShowObj.showCardwallListbyGroup ? "showCardwallListbyGroup" : "showCardwallListbyPerson";
        "showCardwallListbyGroup" == e ? (console.log("上拉加载更多按群"), o < n && (o += 1, this.getCardWallByGroup(o, "onReachBottom").then(function(e) {
            t.lookByFunc(a.currentWallType, "nosensor");
        }))) : "showCardwallListbyPerson" == e && (console.log("上拉加载更多按人"), r < s && (r += 1, 
        this.getCardWallByPerson(r, "onReachBottom").then(function(e) {
            t.lookByFunc(a.currentWallType, "nosensor");
        })));
    },
    ss: function() {},
    onShareAppMessage: function() {
        return a.mycard.defCard && a.mycard.defCard.id && "微信群助手" == this.data.selectTitle ? e.shareAppMessa({
            title: "本群通讯录在此",
            path: "pages/cardWall/stickCard/stickCard?cid=" + a.mycard.defCard.id + "&path=cardWall&formtoken=" + a.mycard.defCard.formtoken,
            imageUrl: a.source.jielong
        }) : e.shareAppMessa({
            title: "我向您推荐“递名片”",
            path: "pages/cardMy/about/about?shareOthers=cardWall&shareType=05",
            imageUrl: a.source.shareImage
        });
    }
});