var t, a, e = require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../52320AA70691379C345462A0E510E9B3.js")), i = require("../../../7931C4950691379C1F57AC929AD2E9B3.js"), n = getApp();

Page({
    data: {
        writeIntro: {
            show: !1
        },
        confirmCon: {
            show: !1
        },
        listCon: {
            show: !1
        },
        quickBuild: {
            show: !1
        },
        showLoading: !0,
        myMessage: {},
        stickSuc: !1,
        systemInfo: n.systemInfo,
        saveCommit: {},
        buildSucImg: n.source.buildSuc,
        currentPage: 1,
        loadComplete: !1,
        avarMark: new Date().getTime(),
        freshIcon: n.source.freshIcon,
        minimalistModel: e.default.data,
        groupMycard: null,
        roofPlacementList: [],
        usersGroupList: [],
        newlyAddData: [],
        stickTitle: ""
    },
    wait: function() {
        this.setData({
            stickSuc: !1,
            showFirstsc: !1,
            mycard: this.data.mycard
        });
    },
    onLoad: function(a) {
        t = a, this.setData({
            optionsL: a,
            cname: a.cname ? a.cname : ""
        }), console.log("optionsL", t), n.compatibleManage.shareMenu && wx.hideShareMenu();
    },
    onReady: function() {},
    onShow: function(t) {
        var a = this;
        this.data.stickSuc && this.setData({
            stickSuc: !1
        }), n.tokenGet(function() {
            a.touxiangFun(), a.initCardwALL(), a.setTotalCount(), console.log("app.ifFresh['mycard']", n.ifFresh.mycard);
        });
        try {
            wx.setStorageSync("enter-stickCard", !0);
        } catch (t) {}
    },
    initCardwALL: function() {
        var t = this;
        wx.getShareInfo && 0 != n.temporaryData.landingPage.shareTicket ? (console.log("有shareticket--"), 
        this.cardsFun(function(a) {
            t.buildFromPage(a), t.delFromPage(), t.haveShareTicketFun(a);
        })) : (console.log("无shareticket--"), this.noShareTicketFun(), i.hidetoast());
    },
    setTotalCount: function() {
        try {
            wx.getStorageSync("totalCount") && this.setData({
                totalCount: wx.getStorageSync("totalCount")
            });
        } catch (t) {}
    },
    buildFromPage: function(t) {
        n.finishBuildFromStickCard && (n.finishBuildFromStickCard = !1, this.setData({
            stickSuc: !0,
            stickTitle: "加入成功",
            groupMycard: t.defCard
        }));
    },
    delFromPage: function() {
        n.finishDelFromStickCard && (n.finishDelFromStickCard = !1, this.setData({
            groupMycard: ""
        }));
    },
    hideQb: function() {
        this.setData({
            mcQuickBuild: !1
        }), n.ifFresh.mycard = !0, this.cardsFun();
    },
    goMain: function() {
        n.dailySentenceShow = !0, n.burying.setPoint(n, 382), wx.switchTab({
            url: "../../cardMain/cardMain"
        });
    },
    hideGuide: function() {
        this.setData({
            showbcGuide: !1
        });
    },
    touxiangFun: function() {
        try {
            this.data.myMessage.con || this.setData({
                myMessage: {
                    con: n.touxiang.nickName,
                    url: n.touxiang.avatarUrl
                }
            });
        } catch (t) {}
    },
    toLower: function() {
        var t = this;
        this.data.currentPage < this.data.totalPages && (console.log("触发上拉加载更多"), this.data.currentPage++, 
        this.groupMessaFun(function(a) {
            t.data.usersGroupList.push.apply(t.data.usersGroupList, a.usersGroupList.records);
            var e = {};
            t.data.usersGroupList = t.data.usersGroupList.reduce(function(t, a) {
                return !e[a.openid] && (e[a.openid] = t.push(a)), t;
            }, []), t.setData({
                totalPages: a.usersGroupList.pages,
                usersGroupList: t.data.usersGroupList || []
            });
        }));
    },
    defaultAddSendUserGroup: function(t) {
        console.log("调用默认加入墙接口"), n.setRequest({
            url: "activeAddGroup",
            method: "POST",
            data: {
                openGid: a,
                cid: n.mycard.defCard.id
            }
        }, function(a) {
            t && t();
        }, function() {
            t && t();
        });
    },
    passiveAddSendUserGroup: function(e) {
        n.setRequest({
            url: "passiveAddGroup",
            method: "POST",
            data: {
                openGid: a,
                cid: Number(t.cid),
                addtime: decodeURI(t.time),
                openid: t.openid
            }
        }, function(t) {
            e && e();
        }, function() {
            e && e();
        });
    },
    haveShareTicketFun: function(e) {
        var i = this;
        this.groupGidFun(function(e) {
            console.log("获取gid", e), a = e.openGId, t.opengid = a, i.setData({
                openGid: a
            }), i.sendUsercardIsDel().then(function(e) {
                n.burying.setSensorEvent(n, {
                    OwnerOpenID: e.openid,
                    OpenGid: a
                }, "GroupAddressBookBrowsing"), i.setData({
                    showLoading: !1
                }), e.isDel ? i.groupMessaFun(function(t) {
                    i.senLog(t), i.renderMessage(t);
                }) : "howEnter" == t.main ? i.groupMessaFun(function(a) {
                    i.senLog(a), i.renderMessage(a), !a.mycard && a.roofPlacementList.length < 3 && i.data.cards.list && i.data.cards.list.length && "auto" == t.openKind && i.toStickCard();
                }) : i.passiveAddSendUserGroup(function() {
                    i.groupMessaFun(function(t) {
                        i.senLog(t), i.renderMessage(t);
                    });
                });
            });
        });
    },
    sendUsercardIsDel: function() {
        return new Promise(function(a, e) {
            console.log("打印", t.cid, t.formtoken), n.setRequest({
                url: "selectById",
                data: {
                    id: t.cid,
                    formtoken: t.formtoken
                }
            }, function(t) {
                a(t);
            });
        });
    },
    senLog: function(t) {
        var e = t.totalCountThisGroup;
        n.burying.setSensorEvent(n, {
            OpenGid: a,
            CardWallCardNumber: e
        }, "CardWallPageState");
    },
    cardsFun: function(t) {
        var a = this;
        console.log("dddcardsFun"), n.ifFresh.mycard ? n.setRequest({
            url: "mycard"
        }, function(e) {
            a.setData({
                cards: e
            }), t && t(e);
        }) : (this.setData({
            cards: n.mycard
        }), t && t(n.mycard));
    },
    getMessaFail: function() {
        i.showmodal({
            data: "未能获取到信息",
            cancel: !1,
            text: "知道啦"
        }, function() {
            wx.switchTab({
                url: "../../cardMain/cardMain"
            });
        });
    },
    shareTicketFun: function(t) {
        var a = this, e = this;
        setTimeout(function() {
            a.getShareTicket().then(function(a) {
                wx.getShareInfo({
                    shareTicket: a,
                    success: function(a) {
                        if (console.log("shareticket获取加密数据", a), !a || !a.iv) return e.getMessaFail(), !1;
                        t && t(a);
                    },
                    fail: function(t) {
                        e.getMessaFail();
                    }
                });
            }).catch(function(t) {
                console.log("未获取到shareticket获取加密数据", t);
            });
        }, 300);
    },
    getShareTicket: function() {
        return new Promise(function(t, a) {
            n.temporaryData.landingPage.shareTicket ? t(n.temporaryData.landingPage.shareTicket) : i.wxOnAppShow(function(t) {
                t ? t(t.shareTicket) : a(t);
            });
        });
    },
    groupGidFun: function(t) {
        var a = this;
        this.shareTicketFun(function(e) {
            a.getOpenGidCardFun(e, function(a) {
                t && t(a);
            }, function() {
                a.getMessaFail();
            });
        });
    },
    getOpenGidWallFun: function(a, e, i) {
        n.setRequest({
            url: "getOpenGid",
            method: "POST",
            data: {
                iv: a.iv,
                encryptedData: a.encryptedData,
                openid: t.openid,
                hid: t.gid
            }
        }, function(t) {
            e && e(t);
        }, function() {
            i && i();
        });
    },
    getOpenGidCardFun: function(t, a, e) {
        n.setRequest({
            url: "getOpenGid",
            method: "POST",
            data: {
                iv: t.iv,
                encryptedData: t.encryptedData
            }
        }, function(t) {
            a && a(t);
        }, function() {
            e && e();
        });
    },
    addGroupFun: function(e) {
        n.setRequest({
            url: "passiveAddGroup",
            method: "POST",
            data: {
                openGid: a,
                openid: t.openid,
                addtime: t.time,
                cid: t.cid
            }
        }, "", "", function() {
            e && e();
        });
    },
    groupMessaFun: function(t) {
        var e = this;
        console.log("token", n.client.token), n.setRequest({
            url: "groupAddressList",
            data: {
                openGid: a,
                currentPage: this.data.currentPage,
                pageSize: 15
            }
        }, function(a) {
            a, console.log("当前群详情", a), e.data.currentPage = a.usersGroupList ? a.usersGroupList.current : 1, 
            e.data.totalPages = a.usersGroupList ? a.usersGroupList.pages : 1, t && t(a);
        }, "", function() {
            i.hidetoast(300);
        });
    },
    clearStoragenewlyAddData: function() {
        try {
            wx.getStorageSync("newlyAddData") && wx.setStorageSync("newlyAddData", []);
        } catch (t) {}
    },
    renderMessage: function(t) {
        try {
            var a = wx.getStorageSync("newlyAddData");
            a && a.length && (t.newlyAddData = [].concat.apply(a, t.newlyAddData));
        } catch (t) {}
        if (this.data.stickSuc) try {
            wx.setStorageSync("newlyAddData", t.newlyAddData), t.newlyAddData = [];
        } catch (t) {}
        t.mycard && (t.mycard.industryData = t.mycard.industry_data ? t.mycard.industry_data.split(",")[0] : "");
        for (var e = t.roofPlacementList, i = 0; i < e.length; i++) e[i].industryData = e[i].industry_data ? e[i].industry_data.split(",")[0] : "";
        if (t.usersGroupList) for (var o = t.usersGroupList.records, s = 0; s < o.length; s++) o[s].industryData = o[s].industry_data ? o[s].industry_data.split(",")[0] : "";
        this.setData({
            newlyAddData: t.newlyAddData || [],
            groupMycard: t.mycard,
            roofPlacementList: e || [],
            usersGroupList: t.usersGroupList ? o : [],
            totalCardNumber: t.totalCountThisGroup,
            loadComplete: !0,
            showLoading: !1
        }), this.clearStoragenewlyAddData(), t.mycard ? n.compatibleManage.shareMenu && wx.showShareMenu({
            withShareTicket: !0
        }) : n.compatibleManage.shareMenu && wx.hideShareMenu();
    },
    noShareTicketFun: function() {
        1089 == n.clientScene ? wx.switchTab({
            url: "/pages/cardMain/cardMain"
        }) : 1007 == n.clientScene ? (this.setData({
            showLoading: !1
        }), n.burying.setSensorEvent(n, {}, "WallInPrivateChatPromptShow"), i.showmodal({
            data: "群通讯录只能在对应群聊中查看",
            cancel: !1,
            text: "我知道了"
        }, function() {
            wx.switchTab({
                url: "/pages/cardMain/cardMain"
            });
        })) : this.setData({
            showLoading: !0
        }, function() {
            var t = null;
            clearTimeout(t), t = setTimeout(function() {
                wx.switchTab({
                    url: "/pages/cardMain/cardMain"
                });
            }, 2e3);
        });
    },
    toCardMain: function() {
        n.burying.setPoint(n, 180), n.currentWallType = "showCardwallListbyPerson";
        try {
            wx.setStorageSync("ifToCardMain", {
                ifJump: !0,
                gid: t.gid,
                cid: t.cid
            });
        } catch (t) {}
    },
    toStickCard: function() {
        this.setData({
            "confirmCon.show": !0,
            "confirmCon.animationName": "toUpAnimationNew"
        });
    },
    stickCard: function() {
        console.log("stickCard"), n.mycard.list <= 0 && a ? (this.setData({
            stickTitle: "加入成功"
        }), wx.navigateTo({
            url: "/pages/mainPage/cardMain/cardFormBuild/cardFormBuild?butt=build&main=stickCard&id=none&openGid=".concat(a)
        })) : this.setData({
            "confirmCon.show": !0,
            "confirmCon.animationName": "toUpAnimationNew"
        });
    },
    stickCardUserInfo: function(t) {
        var a = this;
        this.onGotUserInfo(t, function() {
            a.stickCard();
        });
    },
    exchangeCardUserinfo: function(t) {
        this.onGotUserInfo({
            detail: t.detail.data
        }, function() {
            t.detail.callback && t.detail.callback();
        });
    },
    exchanged: function(t) {
        this.data.otherCard[t.detail].isExchange = !1;
    },
    toPerfect: function() {
        n.burying.setPoint(n, 91);
        var t = this.data.groupMycard;
        n.temporaryData.edit.data = this.data.groupMycard, "WebTemp" == this.data.groupMycard.modelIndex.type ? wx.navigateTo({
            url: "../../cardMain/webcardEdit/webcardEdit?id=".concat(t.id, "&main=stickCard&formtoken=").concat(t.formtoken)
        }) : wx.navigateTo({
            url: "/pages/mainPage/cardMain/cardTempEdit/cardTempEdit?id=".concat(t.id, "&formtoken=").concat(t.formtoken, "&main=stickCard")
        }), n.gioCustome({
            t: "stickCard.002"
        });
    },
    submitAdd: function(t) {
        var a = this;
        this.addCardToGroup({
            d: t.detail,
            t: "add"
        }, function() {
            a.closeQuick();
        });
    },
    addCardToGroupMy: function() {
        var t = this;
        this.addCardToGroup({
            d: n.mycard.defCard.id,
            t: "select"
        }, function() {
            t.closeList();
        });
    },
    confirmCard: function() {
        var t = this;
        !0, this.addCardToGroup({
            d: this.data.hasBorder,
            t: "switchSelect"
        }, function() {
            t.closeSwitch();
        });
    },
    addCardToGroup: function(t, e) {
        var o = this, s = t.d;
        this.data.loading || (this.data.loading = !0, n.setRequest({
            url: "activeAddGroup",
            method: "POST",
            data: {
                openGid: a,
                cid: s
            }
        }, function(i) {
            !0;
            console.log("当前我贴得名片num", i.totalCount), n.compatibleManage.shareMenu && wx.showShareMenu({
                withShareTicket: !0
            }), o.groupMessaFun(function(e) {
                o.setData({
                    totalCount: i.totalCount,
                    groupMycard: e.mycard,
                    totalCardNumber: e.totalCountThisGroup,
                    loadComplete: !0,
                    showLoading: !1
                }), "add" == t.t ? n.burying.setSensorEvent(n, {
                    OpenGid: a,
                    CardStickWay: "没名片用户填写三个信息贴名片",
                    BusinessIntroInclude: e.mycard.intro
                }, "CardStick") : "nullStick" == t.t ? n.burying.setSensorEvent(n, {
                    OpenGid: a,
                    CardStickWay: "进墙前落地页表单贴名片",
                    BusinessIntroInclude: e.mycard.intro
                }, "CardStick") : n.burying.setSensorEvent(n, {
                    OpenGid: a,
                    CardStickWay: "已创建名片用户贴名片",
                    BusinessIntroInclude: e.mycard.intro
                }, "CardStick");
            });
            o.setData({
                stickSuc: !0
            }), n.gioCustome({
                t: "stickCard.001"
            }), e && e();
        }, "", function() {
            o.data.loading = !1, i.hidetoast(300);
        }));
    },
    closeEdit: function() {
        this.setData({
            "writeIntro.animationName": "toDownAnimation"
        });
        var t = this;
        setTimeout(function() {
            t.setData({
                "writeIntro.show": !1
            });
        }, 400);
    },
    ss: function() {},
    closeList: function() {
        this.setData({
            "confirmCon.animationName": "toDownAnimation-new"
        });
        var t = this;
        setTimeout(function() {
            t.setData({
                "confirmCon.show": !1
            });
        }, 400);
    },
    switch: function() {
        this.closeList(), this.setData({
            "listCon.show": !0,
            "listCon.animationName": "toUpAnimation",
            hasBorder: n.mycard.defCard.id
        });
    },
    closeSwitch: function() {
        this.setData({
            "listCon.animationName": "toDownAnimation"
        });
        var t = this;
        setTimeout(function() {
            t.setData({
                "listCon.show": !1
            });
        }, 400);
    },
    selectCard: function(t) {
        var a = t.detail;
        this.setData({
            hasBorder: a.currentTarget.dataset.id
        });
    },
    toBuildCard: function() {
        this.closeSwitch(), wx.navigateTo({
            url: "/pages/mainPage/cardMain/cardFormBuild/cardFormBuild?butt=build&main=stickCard&id=none&openGid=".concat(a)
        });
    },
    toMyFolder: function() {
        n.burying.setPoint(n, 706), n.currentWallType = "showCardwallListbyPerson", wx.switchTab({
            url: "/pages/cardWall/cardWall"
        });
    },
    closeGuide: function() {
        this.setData({
            stickSuc: !1
        });
    },
    onHide: function(t) {
        n.currentWallType = "showCardwallListbyPerson", this.data.writeIntro && this.data.writeIntro.show && this.closeEdit();
    },
    closeQuick: function() {
        this.setData({
            "quickBuild.animationName": "toDownAnimation"
        }), n.ifFresh.mycard = !0, this.cardsFun();
        var t = this;
        setTimeout(function() {
            t.setData({
                "quickBuild.show": !1
            });
        }, 300);
    },
    onGotUserInfo: function(t, a) {
        var e = this, i = t.detail.detail;
        i.iv && n.setUnion(i, function(t) {
            e.setData({
                myMessage: {
                    con: i.userInfo.nickName,
                    url: i.userInfo.avatarUrl
                }
            }), a && a();
        });
    },
    onUnload: function() {
        !1;
    },
    onShareAppMessage: function(t) {
        var a = null, e = "";
        this.data.mycard;
        return t.target && (e = t.target.dataset.flag), this.data.groupMycard && this.data.groupMycard.id ? (a = "zhudongtie" == e ? {
            title: "【No." + this.data.totalCount + "】" + this.data.groupMycard.name + "已加入本群通讯录",
            path: "pages/cardWall/stickCard/stickCard?cid=" + this.data.groupMycard.id + "&main=stickCard&formtoken=" + this.data.groupMycard.formtoken,
            imageUrl: n.source.jielong
        } : {
            title: "本群通讯录在此",
            path: "pages/cardWall/stickCard/stickCard?cid=" + this.data.groupMycard.id + "&main=stickCard&formtoken=" + this.data.groupMycard.formtoken,
            imageUrl: n.source.jielong
        }, i.shareAppMessa(a)) : i.shareAppMessa({
            title: "我向您推荐“递名片”",
            path: "pages/cardMy/about/about?shareOthers=cardMain&shareType=05",
            imageUrl: n.source.shareImage
        });
    }
});