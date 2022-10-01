var t, a = require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../@babel/runtime/helpers/defineProperty"));

function e(t, a) {
    var e = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        a && (i = i.filter(function(a) {
            return Object.getOwnPropertyDescriptor(t, a).enumerable;
        })), e.push.apply(e, i);
    }
    return e;
}

var i, n, s, r = new (require("../../../AFC697330691379CC9A0FF345133E9B3.js").wxRequest)(), o = require("../../../7931C4950691379C1F57AC929AD2E9B3.js"), d = getApp(), c = {}, u = !1, l = !1;

Page((t = {
    data: {
        systemInfo: d.systemInfo,
        freshNum: new Date().getTime(),
        netError: {
            show: !1
        },
        cardName: "",
        cardListCon: {
            show: !1
        },
        owner: {},
        option: "",
        isHaving: 0,
        avatar: "",
        anonymous: d.source.anonymous,
        currentRoute: "",
        canvasCheck: !0,
        changeCard: !1,
        otherShare: !1,
        topBg: "rgba(236,237,239,1)",
        singleData: "",
        sdkAdjust: d.systemInfo["2.7.0"],
        showLoading: !0,
        myMessage: {
            con: "",
            url: ""
        },
        showAbtest: -1,
        stickTitle: "加入成功",
        configSetting: {
            copyToWechat: !1,
            saveToContact: !1
        },
        shareTypeCon: {
            type: ""
        },
        autoVideo: !1,
        groupMycardIsDel: 0,
        groupData: {},
        showSendCard: !1,
        animationS: "",
        animation: "",
        animationDown: "",
        fisrtBuildClicked: 0,
        userMaxCardNum: d.userMaxCardNum,
        sendBack: !1,
        showOwnCard: !0
    },
    onPullDownRefresh: function() {
        this.data.freshNum = new Date().getTime(), this.onShow();
    },
    onLoad: function(t) {
        console.log(t, "落地页参数"), i = t, this.setData({
            route: encodeURIComponent(d.gloabelOptions.path.slice(d.gloabelOptions.path.lastIndexOf("/") + 1)),
            options: t
        }), "1047" == (s = decodeURIComponent(d.gloabelOptions.scene)) || "1048" == s || "1049" == s ? this.setData({
            isSaoma: !0
        }) : this.setData({
            isSaoma: !1
        }), console.log(this.data.isSaoma, "是否扫码");
        try {
            t.query ? t.id = t.query : t.scene && (t.id = decodeURIComponent(t.scene));
        } catch (t) {}
        if (l = !0, Boolean(i.time)) {
            var a = !1;
            try {
                a = !(o.leaveHours(i.time) > 24);
            } catch (t) {
                d.errorLog("落地页链接报错-链接分享optionsL.time", "", i.time);
            }
            this.setData({
                isTodaySend: a,
                quickMake: !0,
                animationS: (this.data.systemInfo.modelX, "animation-normal-small")
            });
        } else this.setData({
            isTodaySend: !0
        });
        i.shareOthers && i.shareOthers.length > 10 ? (u = !0, console.log("是否进入判断"), this.setData({
            "owner.intransitIf": !0
        })) : u = !1, console.log("intransitIf:", u), d.compatibleManage.shareMenu && wx.hideShareMenu(), 
        !i.shareOthers && (i.shareOthers = "undefined");
    },
    onShow: function() {
        var t = this, a = this;
        if (c = {}, !1, this.setData({
            showDetail: !1,
            ifShowCardList: !1,
            changeFlag: !1,
            currentRoute: encodeURIComponent(d.gloabelOptions.path.slice(d.gloabelOptions.path.lastIndexOf("/") + 1))
        }), this.ifShowSendCard(), !i.id || "undefined" == i.id) return o.showtoast("当前页面已失效", "none", 2e3), 
        setTimeout(function() {
            wx.switchTab({
                url: "../../cardMain/cardMain"
            });
        }, 2e3), d.errorLog(i, "howEnter无效名片链接"), !1;
        this.returnHome(), "layerSendCard" == this.data.shareTypeCon.type && (this.data.shareTypeCon.type = ""), 
        d.tokenGet(function() {
            if (wx.getShareInfo && 0 != d.temporaryData.landingPage.shareTicket) {
                t.setData({
                    "owner.env": "group"
                }), wx.getShareInfo({
                    shareTicket: d.temporaryData.landingPage.shareTicket,
                    success: function(t) {
                        a.data.iv = t.iv, a.data.encryptedData = t.encryptedData, a.setData({
                            loadingTip: "正在加载名片…",
                            showLoading: !0
                        }), a.singleDataFun(function() {
                            a.data.mycard || a.setData({
                                mycard: d.mycard
                            }), a.groupMessa(function() {
                                d.burying.setSensorEvent(d, {
                                    OpenGid: a.data.opengid
                                }, "GroupLandingPageBrowsing"), a.groupMessaFun();
                            }), a.dynamicCardLog(), d.compatibleManage.shareMenu && wx.showShareMenu({
                                withShareTicket: !0
                            });
                        });
                    },
                    fail: function() {
                        a.data.iv = !1;
                    }
                });
                try {
                    wx.setStorageSync("enter-stickCard", !0);
                } catch (t) {}
            } else t.data.iv && (t.setData({
                loadingTip: "loading…"
            }), wx.switchTab({
                url: "../../cardMain/cardMain"
            })), t.setData({
                loadingTip: "loading…"
            }), t.singleDataFun(function() {
                t.data.mycard || t.setData({
                    mycard: d.mycard
                }), 2 == t.data.isHaving && d.burying.setSensorEvent(d, {}, "CardDetailView"), t.getUserAvatar(), 
                t.getCardAvatar(), t.newSaveCard(), t.clickSelfFun(), t.buttonStatus(!0, function() {
                    t.mycardFun(function() {
                        t.maidianFun();
                    });
                }), t.dynamicCardLog(), t.dynamicCardAutoVideo(), t.data.singleData.isHavingMycard || t.getChangeTime(t.data.singleData), 
                d.compatibleManage.shareMenu && wx.showShareMenu({
                    withShareTicket: !0
                });
            });
        }, function() {
            t.data.singleData || t.setData({
                "netError.show": !0
            }), o.hidetoast();
        }), this.dynamicCardVideoHeight();
    },
    ifShowSendCard: function() {
        wx.getStorageSync("showsendcard") && (this.setData({
            showSendCard: !0
        }), wx.setStorageSync("showsendcard", !1));
    },
    delCard: function() {
        d.burying.setPoint(d, 717), d.burying.setSensorEvent(d, {
            PopupPromptTrigger: "私聊落地页点击“删除对方名片”",
            PopupPromptMainButton: "立即领取"
        }, "PopupPromptShow"), r.requestUrl({
            url: "cardsOtherCard",
            method: "DELETE",
            extra: "/" + this.data.singleData.id
        }, function(t) {
            wx.setStorageSync("showDelToast", !0), wx.switchTab({
                url: "../../cardMain/cardMain"
            });
        });
    },
    buildReturn: function(t) {
        "one" == t.currentTarget.dataset.sensorIndex ? d.burying.setPoint(d, 716) : d.burying.setPoint(d, 260), 
        this.setfisrtBuildClickedList(this.data.singleData);
        var a = this.data.singleData;
        a.industry && (this.data.temporaryDataFormData = {}, this.data.temporaryDataFormData.industry = a.industry.split(","), 
        this.data.temporaryDataFormData.industry_data = [ a.industry_data ]), wx.navigateTo({
            url: "/pages/mainPage/cardMain/cardFormBuild/cardFormBuild?butt=build&main=howEnter&id=none&fromOpenid=" + this.data.singleData.openid + "&landingStatus=notGroup&fromId=" + this.data.singleData.id + "&intransitIf=" + u + "&isSaoma=" + this.data.isSaoma,
            success: function() {}
        });
    },
    setfisrtBuildClickedList: function(t) {
        var a = wx.getStorageSync("fisrtBuildClicked") || [];
        a.findIndex(function(a) {
            return a.id == t.id;
        }) > -1 || (a.push({
            id: t.id
        }), wx.setStorageSync("fisrtBuildClicked", a));
    },
    getfisrtBuildClickedList: function(t) {
        var a = wx.getStorageSync("fisrtBuildClicked") || [], e = 0;
        e = (0 == a.length ? -1 : a.findIndex(function(a) {
            return a.id == t.id;
        })) > -1 ? 2 : 1, this.setData({
            fisrtBuildClicked: e
        }), this.stickCardAnimation();
    },
    closeSchange: function() {
        d.burying.setPoint(d, 719), console.log(this.data.showSendCard, "变量showSendCard"), 
        this.setData({
            showSendCard: !0
        });
    },
    stickCardAnimation: function() {
        var t = this;
        if (!this.data.animation) {
            var a = null;
            a || (clearTimeout(a), a = setTimeout(function() {
                t.setData({
                    animation: t.data.systemInfo.modelX ? "animationX" : "animation-normal",
                    animationDown: t.data.systemInfo.modelX ? "animationX-down" : "animation-normal-down"
                });
            }));
        }
    },
    closeCs: function() {
        var t = this;
        d.burying.setPoint(d, 618), this.setData({
            changeFlag: !1
        }), r.requestUrl({
            url: "selectById",
            data: {
                id: i.id,
                formtoken: i.formtoken
            }
        }, function(a) {
            t.setData({
                singleData: a
            });
        });
    },
    groupShareFun: function() {
        var t = this.data.singleData;
        console.log("跳转1"), wx.redirectTo({
            url: "../../cardWall/stickCard/stickCard?&cid=" + t.id + "&isSelf=" + t.self + "&isDel=" + t.isDel + "&cname=" + t.name + "&path=howEnter&opengid=" + this.data.opengid + "&ifMaiDian=true&formtoken=" + t.formtoken + "&time=" + o.addLogTime() + "&openid=" + i.id
        });
    },
    wait: function() {
        this.groupShareFun();
    },
    maidianFun: function() {
        var t = this.data.owner, a = this.data.mycard.list.length > 0;
        t.intransitIf || "other" != t.name || t.isDel || a || d.burying.setSensorEvent(d, {
            PageState: "私聊待制作"
        }, "PrivateChatLandingPageState"), t.intransitIf || "other" != t.name || t.isDel || !a || d.burying.setSensorEvent(d, {
            PageState: "私聊已制作"
        }, "PrivateChatLandingPageState"), !t.intransitIf || "other" != t.name || t.isDel || a || d.burying.setSensorEvent(d, {
            PageState: "转发待制作"
        }, "PrivateChatLandingPageState"), t.intransitIf && "other" == t.name && !t.isDel && a && d.burying.setSensorEvent(d, {
            PageState: "转发已制作"
        }, "PrivateChatLandingPageState");
    },
    getChangeTime: function(t) {
        var a = t.addtime ? t.addtime.split(" ")[0].split("-") : 0;
        this.setData({
            rsExchangeTime: t.addtime ? "".concat(a[0], "年").concat(a[1], "月").concat(a[2], "日") : ""
        });
    },
    toShowDetail: function() {
        d.burying.setPoint(d, 264), this.setData({
            showDetail: !0
        });
    },
    dynamicCardLog: function() {
        this.data.singleData && 2 == this.data.singleData.vcardVideoIsCreate && d.burying.setSensorEvent(d, {
            PageTag: "动态名片私聊落地页"
        }, "DynamicCardLandingPageView");
    },
    dynamicCardAutoVideo: function() {
        this.data.singleData && 2 == this.data.singleData.vcardVideoIsCreate && !this.data.autoVideo && this.setData({
            autoVideo: !0
        });
    },
    dynamicCardVideoHeight: function() {
        var t = this, a = t.createSelectorQuery(), e = wx.getSystemInfoSync().windowHeight;
        a.select(".immersive").boundingClientRect(function(a) {
            try {
                t.setData({
                    cardVideoHeight: e - a.height + "px;"
                });
            } catch (t) {}
        }).exec();
    },
    ss: function() {},
    openQuickBuild: function() {
        d.burying.setPoint(d, 891), this.setData({
            quickMake: !0,
            animationS: (this.data.systemInfo.modelX, "animation-normal-down-small")
        });
    },
    closeQuickMake: function() {
        var t = this;
        d.burying.setSensorEvent(d, {}, "CardDetailView"), d.burying.setPoint(d, 887), this.setData({
            animationS: (this.data.systemInfo.modelX, "animation-normal-small")
        });
        var a = null;
        clearTimeout(a), a = setTimeout(function() {
            t.setData({
                quickMake: !1
            });
        }, 300);
    },
    submitQuickMake: function(t) {
        var a = this;
        console.log("快速制作名片成功", t), d.ifFresh.mycard = !0, this.mycardFun(function() {
            d.ifFresh.mycard = !1, a.setData({
                showQuickSuccModel: !0,
                showOwnCard: !1,
                picData: t.detail
            });
        });
    },
    closeBuildPanel: function() {
        d.burying.setSensorEvent(d, {}, "CardDetailView"), d.burying.setPoint(d, 82), this.setData({
            isBuildShow: !1
        });
    },
    showChange: function(t) {
        if (t && t.currentTarget.dataset.sensorIndex) {
            var i = function(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var n = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? e(Object(n), !0).forEach(function(e) {
                        (0, a.default)(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : e(Object(n)).forEach(function(a) {
                        Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(n, a));
                    });
                }
                return t;
            }({}, t.currentTarget.dataset).sensorIndex;
            d.burying.setPoint(d, i);
        }
        try {
            this.selectComponent("#changeCard")._switchCard();
        } catch (t) {
            this.setData({
                changeCard: !0
            });
        }
    },
    getCardAvatar: function(t) {
        if (!this.data.avatar) {
            var a = this;
            r.requestUrl({
                url: "getUsersAvatarNickname",
                data: {
                    openid: a.data.singleData.openid
                }
            }, function(e) {
                a.setData({
                    avatar: e
                }), wx.setStorageSync("senderAvator", e), t && t();
            });
        }
    },
    getUserAvatar: function() {
        var t = this;
        d.client.openid && d.setRequest({
            url: "getUsersAvatarNickname",
            data: {
                openid: d.client.openid
            }
        }, function(a) {
            t.setData({
                userAvaUrl: a.avatarurl,
                userNickname: a.nickname,
                "myMessage.url": a.avatarurl
            }), d.touxiang && (d.touxiang.avatarUrl = a.avatarurl, d.touxiang.nickName = a.nickname);
        });
    },
    againRequest: function() {
        o.showtoast("加载中...", "loading", 8e3), this.setData({
            "netError.show": !1
        }), d.netMark.token = !0, this.onShow();
    },
    singleDataFun: function(t) {
        var a = this;
        this.data.mycard || this.setData({
            mycard: d.mycard
        });
        var e = !1;
        this.data.iv && (e = !0), console.log(i, e, "参数"), r.requestUrl({
            url: "selectById",
            data: {
                id: i.id,
                isGroup: e,
                formtoken: i.formtoken
            }
        }, function(i) {
            if (d.sendUserName = i.name, i.self) e && a.setData({
                groupMycardIsDel: i.isDel ? 1 : 2
            }), a.setData({
                isHaving: 0,
                cardName: i.userpic.name,
                singleData: i,
                freshNum: a.data.freshNum
            }); else {
                if (l) {
                    l = !1;
                    try {
                        d.burying.setSensorEvent(d, {
                            CardType: d.getCardType(i).cardType,
                            LinkType: a.data.isTodaySend ? "当天产生的名片链接" : "非当天产生的名片链接",
                            Documents: "邀请交换名片"
                        }, "BusinessCardLinkBrowsing");
                    } catch (t) {}
                }
                var n = 1;
                e ? n = i.isHaving ? 2 : 1 : (n = 2, a.getfisrtBuildClickedList(i), i.isDel && !i.isHaving && (n = 0), 
                u && a.getZfNick()), a.setData({
                    isHaving: n,
                    cardName: i.userpic.name,
                    myCardCount: i.myCardCount,
                    singleData: i,
                    freshNum: a.data.freshNum,
                    "myMessage.con": i.name
                });
            }
            t && t();
        }, function() {
            a.data.singleData || a.setData({
                "netError.show": !0
            });
        }, function() {
            wx.stopPullDownRefresh();
        });
    },
    getZfNick: function(t) {
        var a = this;
        this.data.zfAvatar && this.data.zfAvatar.nickname || d.setRequest({
            url: "getUsersAvatarNickname",
            data: {
                openid: i.shareOthers
            }
        }, function(e) {
            a.setData({
                zfAvatar: e
            }), t && t();
        });
    },
    mycardFun: function(t) {
        var a = this, e = this;
        function i() {
            var t = e.data.mycard;
            t && t.list && t.list.length > 0 ? !e.data.configSetting.copyToWechat && e.setData({
                "configSetting.copyToWechat": !0,
                "configSetting.saveToContact": !0
            }) : e.data.configSetting.copyToWechat && e.setData({
                "configSetting.copyToWechat": !1,
                "configSetting.saveToContact": !1
            });
        }
        d.ifFresh.mycard ? r.requestUrl({
            url: "mycard"
        }, function(e) {
            try {
                wx.setStorageSync("customAvatar", e.defCard.customAvatar);
            } catch (t) {}
            a.setData({
                mycard: d.mycard
            }), i(), t && t();
        }) : (this.setData({
            mycard: d.mycard
        }), i(), t && t());
    },
    groupMessa: function(t) {
        var a = this;
        r.requestUrl({
            url: "getOpenGid",
            method: "POST",
            data: {
                iv: a.data.iv,
                encryptedData: a.data.encryptedData,
                openid: a.data.singleData.openid
            }
        }, function(e) {
            a.data.opengid = e.openGId, t && t();
        }, function() {
            t && t();
        });
    },
    toStickCardBtn: function(t) {
        var a = t.detail, e = this.data.singleData, n = t.currentTarget.dataset;
        e.self ? d.burying.setPoint(d, 714) : !e.self && n && "other" == n.flag ? d.burying.setPoint(d, 616) : "maidian" == a && d.burying.setPoint(d, 617), 
        wx.navigateTo({
            url: "../../cardWall/stickCard/stickCard?&cid=" + e.id + "&isSelf=" + e.self + "&isDel=" + e.isDel + "&cname=" + e.name + "&path=howEnter&opengid=" + this.data.opengid + "&origin=ishowenter&formtoken=" + e.formtoken + "&time=" + o.addLogTime() + "&openid=" + i.id
        });
    },
    toNewStickCardBtn: function(t) {
        try {
            var a = t.currentTarget.dataset.sensorIndex;
            d.burying.setPoint(d, a);
        } catch (t) {}
        var e = this.data.singleData, n = this.data.groupData, s = this.data.mycard.list;
        s && s.length && n.roofPlacementList && n.roofPlacementList.length < 3 || n.roofPlacementList && n.roofPlacementList.length >= 3 ? wx.navigateTo({
            url: "/pages/cardWall/stickCard/stickCard?&cid=" + e.id + "&isSelf=" + e.self + "&isDel=" + e.isDel + "&cname=" + e.name + "&main=howEnter&opengid=" + this.data.opengid + "&origin=ishowenter&formtoken=" + e.formtoken + "&time=" + o.addLogTime() + "&openid=" + i.id + "&openKind=auto"
        }) : wx.navigateTo({
            url: "/pages/mainPage/cardMain/cardFormBuild/cardFormBuild?butt=build&main=howEnter&id=none&origin=ishowenter&formtoken=".concat(e.formtoken, "&time=").concat(o.addLogTime(), "&cid=").concat(e.id, "&isSelf=").concat(e.self, "&isDel=").concat(e.isDel, "&openKind=auto&openGid=").concat(this.data.opengid)
        });
    },
    toCardMainPage: function() {
        d.burying.setPoint(d, 710), wx.switchTab({
            url: "../../cardMain/cardMain"
        });
    },
    toBuildCardBtn: function() {
        wx.navigateTo({
            url: "/pages/mainPage/cardMain/cardFormBuild/cardFormBuild?butt=build&main=howEnter&id=none"
        });
    },
    continueSend: function() {
        d.burying.setPoint(d, 710);
    },
    goback: function() {
        var t = this;
        this.setData({
            ifChangeFlag: !1
        });
        var a = wx.createAnimation({
            duration: 1e3,
            timingFunction: "ease"
        });
        a.translateX(0 / d.systemInfo.shiftX).step(), this.setData({
            rightMove: a.export()
        }), setTimeout(function() {
            t.setData({
                showBack: !1
            });
        }, 500);
    },
    groupMessaFun: function() {
        var t = this, a = this.data.opengid, e = this.data.singleData;
        a && (!u || u && e.isDel || e.self) ? (console.log("intransitIf", u), u ? (console.log("跳转3"), 
        wx.redirectTo({
            url: "../../cardWall/stickCard/stickCard?&cid=" + e.id + "&isSelf=" + e.self + "&isDel=" + e.isDel + "&cname=" + e.name + "&path=howEnter&opengid=" + this.data.opengid + "&formtoken=" + e.formtoken + "&time=" + o.addLogTime() + "&openid=" + i.id
        })) : this.addGroupFun(function() {
            console.log("跳转2 不跳"), t.groupDetail();
        })) : a ? (this.groupDetail(), 2 == this.data.isHaving && d.burying.setSensorEvent(d, {}, "CardDetailView"), 
        this.getCardAvatar(), this.buttonStatus("")) : (this.getCardAvatar(), this.buttonStatus(""));
    },
    groupDetail: function() {
        var t = this;
        d.setRequest({
            url: "groupAddressList",
            data: {
                openGid: this.data.opengid,
                currentPage: 1,
                pageSize: 15
            }
        }, function(a) {
            console.log("result", a), console.log("当前群有新的名片加进来newlyAddData", a.newlyAddData), 
            a.roofPlacementList.length < 3 ? d.burying.setSensorEvent(d, {
                PageState: "名片墙<3"
            }, "GroupChatLandingPageState") : d.burying.setSensorEvent(d, {
                PageState: "名片墙≥3"
            }, "GroupChatLandingPageState");
            try {
                wx.setStorageSync("newlyAddData", a.newlyAddData);
            } catch (t) {}
            t.setData({
                groupData: a
            }), t.stickCardAnimation();
        }, "", function() {
            o.hidetoast(300);
        });
    },
    addGroupFun: function(t) {
        r.requestUrl({
            url: "passiveAddGroup",
            method: "POST",
            data: {
                openGid: this.data.opengid,
                openid: u ? "" : this.data.singleData.openid,
                addtime: i.time,
                cid: this.data.singleData.id
            }
        }, "", "", function() {
            t && t();
        });
    },
    buttonStatus: function(t, a) {
        var e = this.data.singleData;
        if (e.self ? this.data.iv ? this.setData({
            owner: {
                name: "self",
                env: "group"
            }
        }) : this.setData({
            owner: {
                name: "self",
                env: "notGroup"
            }
        }) : this.data.iv ? e.isHaving ? this.setData({
            owner: {
                name: "other",
                env: "group",
                saved: !0,
                isDel: e.isDel,
                intransitIf: u
            }
        }) : this.setData({
            owner: {
                name: "other",
                env: "group",
                saved: !1,
                isDel: e.isDel,
                intransitIf: u
            }
        }) : e.isHaving ? this.setData({
            owner: {
                name: "other",
                env: "notGroup",
                saved: !0,
                isDel: e.isDel,
                intransitIf: u
            }
        }) : this.setData({
            owner: {
                name: "other",
                env: "notGroup",
                saved: !1,
                isDel: e.isDel,
                intransitIf: u
            }
        }), a && a(), "self" == this.data.owner.name && "notGroup" == this.data.owner.env && this.data.singleData.isDel) {
            console.log("私聊自己的名片回首页");
            try {
                wx.getStorageSync("dialog-addMinicardToAirWindows") || wx.setStorageSync("dialog-addMinicardToAirWindows", {
                    show: !0
                });
            } catch (t) {}
            this.setData({
                showLoading: !0
            }), wx.switchTab({
                url: "../../cardMain/cardMain"
            });
        }
        this.dynamicCardAdjust(), "other" == this.data.owner.name && this.data.owner.isDel && !this.data.owner.saved && (o.showtoast("该名片已被删除", "none", 1e3), 
        setTimeout(function() {
            wx.switchTab({
                url: "../../cardMain/cardMain"
            });
        }, 500));
    },
    dynamicCardAdjust: function() {
        var t = this;
        1 != this.data.isHaving || this.data.singleData.self || "notGroup" != this.data.owner.env || 2 != this.data.singleData.vcardVideoIsCreate || this.data.singleData.isDel || this.data.sdkAdjust || (wx.showModal({
            title: "提示",
            content: "该名片为动态名片，由于您微信版本过低无法正常预览，建议您更新微信版本或保存名片后进行查看",
            confirmText: "保存名片",
            confirmColor: "#3f51b5",
            success: function(a) {
                a.confirm ? (t.saveCard({
                    detail: {
                        detail: "dynamicCard"
                    }
                }), d.burying.setPoint(d, 156)) : d.burying.setPoint(d, 157);
            }
        }), d.burying.setSensorEvent(d, {
            PopupPromptTrigger: "7.0.4以下版本打开动态名片落地页",
            PopupPromptMainButton: "保存名片"
        }, "PopupPromptShow"));
    },
    autoSave: function() {
        var t = this, a = (this.data.mycard, this.judgeSence());
        if (c.saveCard) ; else {
            c.saveCard = !0, r.requestUrl({
                url: "landingSaveCard",
                method: "POST",
                data: {
                    id: i.id,
                    desc: "",
                    shareothers: i.shareOthers,
                    senceValue: a
                }
            }, function(a) {
                o.showtoast("保存成功", "success", 1500);
                var e = !1;
                t.data.iv && (e = !0), r.requestUrl({
                    url: "selectById",
                    data: {
                        id: i.id,
                        isGroup: e,
                        formtoken: i.formtoken
                    }
                }, function(a) {
                    t.setData({
                        myCardCount: a.myCardCount,
                        singleData: a
                    });
                });
            }, "", function() {
                c.saveCard = !1;
            });
        }
    },
    srSaveCard: function(t, a, e) {
        console.log("3");
        var n = "1048" == s ? "lPSaveCard" : "srSaveCard";
        r.requestUrl({
            url: n,
            method: "POST",
            data: {
                othersOpenid: this.data.singleData.openid,
                id: i.id
            }
        }, function(e) {
            d.rsListObj.ifFresh = !0, a && a(), t && t.detail && "dynamicCard" == t.detail.detail && t.detail.callback && t.detail.callback("true");
        }, function() {
            e && e();
        });
    },
    saveFwCard: function(t, a, e) {
        var n = this.data.singleData;
        r.requestUrl({
            url: "saveFwCard",
            method: "POST",
            data: {
                id: i.id,
                forwarderOpenid: i.shareOthers,
                othersOpenid: n.openid
            }
        }, function(e) {
            d.rsListObj.ifFresh = !0, a && a(), t && t.detail && "dynamicCard" == t.detail.detail && t.detail.callback && t.detail.callback("true");
        }, function() {
            e && e();
        });
    },
    pcSaveCard: function(t, a, e) {
        this.data.singleData;
        r.requestUrl({
            url: "pcSaveCard",
            method: "POST",
            data: {
                id: i.id,
                othersOpenid: this.data.singleData.openid
            }
        }, function(e) {
            d.rsListObj.ifFresh = !0, a && a(), t && t.detail && "dynamicCard" == t.detail.detail && t.detail.callback && t.detail.callback("true");
        }, function() {
            e && e();
        }, function() {
            c.saveCard = !1;
        });
    },
    newSaveCard: function() {
        var t = this;
        console.log("newSaveCard"), this.data.singleData.self || this.data.singleData.isDel || ("1047" == s || "1048" == s || "1049" == s ? this.srSaveCard("", "", this.failCb("")) : u && !this.data.opengid ? this.saveFwCard("", function() {
            t.singleDataFun(function() {
                t.buttonStatus("");
            });
        }, this.failCb("")) : this.pcSaveCard("", "", this.failCb("")));
    },
    saveCard: function(t) {
        var a = this;
        if (!this.data.singleData.self) {
            var e = this.data.mycard;
            if (c.saveCard) ; else {
                t.detail && "dynamicCard" == t.detail.detail && d.burying.setPoint(d, 130);
                c.saveCard = !0, "1047" == s || "1048" == s || "1049" == s ? "notGroup" == this.data.owner.env ? this.srSaveCard(t, "", this.failCb(t)) : this.srSaveCard(t, this.sucCb(e), this.failCb(t)) : u ? this.saveFwCard(t, function() {
                    a.singleDataFun(function() {
                        a.buttonStatus("");
                    });
                }, this.failCb(t)) : "notGroup" == this.data.owner.env ? this.pcSaveCard(t, "", this.failCb(t)) : this.pcSaveCard(t, this.sucCb(e), this.failCb(t));
            }
        }
    },
    sucCb: function(t) {
        var a = this;
        t = this.data.mycard;
        !0;
        var e = !1;
        this.data.iv && (e = !0), r.requestUrl({
            url: "selectById",
            data: {
                id: i.id,
                isGroup: e,
                formtoken: i.formtoken
            }
        }, function(i) {
            if (e) return a.setData({
                singleData: i
            }), 0;
            var n = !0;
            if (t && t.list.length > 0 && i.isHavingMycard) d.burying.setSensorEvent(d, {}, "DetailViewPromptShow"); else if (t && t.list.length > 0 && !i.isHavingMycard) d.burying.setSensorEvent(d, {}, "PostbackPromptShow"); else {
                d.burying.setSensorEvent(d, {}, "SavePromptShow0"), d.navigateFrom = "cardMainEditAll";
                try {
                    wx.setStorageSync("testToBuild", !0);
                } catch (t) {}
                n = !1;
                var s = a;
                wx.navigateTo({
                    url: "/pages/mainPage/cardMain/cardFormBuild/cardFormBuild?butt=build&main=howEnter&id=none&fromOpenid=" + a.data.singleData.openid + "&landingStatus=notGroup&fromId=" + a.data.singleData.id + "&intransitIf=" + u,
                    success: function() {
                        s.setData({
                            isHaving: 2
                        });
                    }
                });
            }
            a.setData({
                quickMake: n,
                myCardCount: i.myCardCount,
                singleData: i
            });
        });
    },
    failCb: function(t) {
        t.detail && "dynamicCard" == t.detail.detail && t.detail.callback && t.detail.callback("false");
    },
    buildCard: function(t) {
        var a, e = this.data.owner, i = "", n = this;
        try {
            if (t) {
                var s = t.currentTarget.dataset.sensorIndex;
                i = s;
                try {
                    s && d.burying.setPoint(d, s);
                } catch (t) {}
            }
        } catch (t) {}
        a = "self" == e.name ? "self" : "group" == e.env ? "group" : "notGroup", 114 == i ? (d.burying.setSensorEvent(d, {
            PopupPromptTrigger: "没名片用户点击私聊落地页“交换名片",
            PopupPromptMainButton: "去制作名片"
        }, "PopupPromptShow"), wx.showModal({
            title: "提示",
            content: "您还没有名片，无法和对方交换！",
            cancelText: "关闭",
            confirmText: "制作名片",
            success: function(t) {
                t.confirm ? (d.burying.setPoint(d, 117), wx.navigateTo({
                    url: "/pages/mainPage/cardMain/cardFormBuild/cardFormBuild?butt=build&main=howEnter&id=none&fromOpenid=" + n.data.singleData.openid + "&landingStatus=" + a + "&fromId=" + n.data.singleData.id + "&intransitIf=" + u
                })) : d.burying.setPoint(d, 116);
            }
        })) : wx.navigateTo({
            url: "/pages/mainPage/cardMain/cardFormBuild/cardFormBuild?butt=build&main=howEnter&id=none&fromOpenid=" + n.data.singleData.openid + "&landingStatus=" + a + "&fromId=" + n.data.singleData.id + "&intransitIf=" + u
        });
    },
    toCardAll: function() {
        wx.switchTab({
            url: "../cardAll"
        });
    },
    toCardWall: function() {
        wx.navigateTo({
            url: "../../cardWall/cardWall"
        });
    },
    toLookHomePageS: function() {
        var t = this.data.singleData;
        wx.navigateTo({
            url: "../../cardMain/homePage/homePage?id=" + t.id + "&detail=cardMain&st=lookSelf&ctype=self"
        });
    },
    toLookHomePage: function() {
        wx.navigateTo({
            url: "../../cardMain/homePage/homePage?id=" + i.id + "&detail=enterShow&st=lookOther"
        });
    },
    formid: function(t) {
        d.formidSend(t.detail.formId);
    },
    toStick: function() {
        var t = this.data.singleData;
        console.log("跳转4"), wx.navigateTo({
            url: "../../cardWall/stickCard/stickCard?&cid=" + t.id + "&isSelf=" + t.self + "&isDel=" + t.isDel + "&cname=" + t.name + "&path=howEnter&opengid=" + this.data.opengid + "&formtoken=" + t.formtoken + "&time=" + o.addLogTime() + "&openid=" + i.id
        });
    },
    toMain: function(t) {
        this.data.singleData.isDel ? d.burying.setPoint(d, 68) : d.burying.setPoint(d, 36), 
        wx.switchTab({
            url: "../../cardMain/cardMain"
        });
    },
    closeList: function() {
        var t = this;
        setTimeout(function() {
            t.setData({
                "confirmCon.show": !1
            });
        }, 400);
    },
    switch: function() {
        this.closeList();
    },
    judgeSence: function() {
        var t = 0;
        return u || this.data.singleData.sence && "2" == this.data.singleData.sence ? (t = 4, 
        this.setData({
            otherShare: !0
        }), t) : t = 1044 == s ? 2 : 1048 == s ? 6 : 1047 == s ? 5 : 3;
    },
    changeCard: function() {
        var t, a, e = this, s = {};
        d.burying.setPoint(d, 27), t = this.data.cardListCon.show && this.data.hasBorder ? this.data.hasBorder : this.data.mycard.defCard.id;
        var c = [];
        a = this.judgeSence(), c.push({
            otherCardId: i.id,
            otherOpenid: this.data.singleData.openid,
            mycardId: t,
            senceValue: a
        }), s.paramsArr = c, s.openGid = gid, n || (n = !0, r.requestUrl({
            url: "exchangeCards",
            data: s,
            method: "PUT"
        }, function(t) {
            o.showtoast("交换成功", "success", 1e3), d.rsListObj.ifFresh = !0, e.data.hasBorder ? e.closeSwitch() : e.closeList(), 
            e.setData({
                firstCard: !1
            }), e.singleDataFun(), n = !1, t.exchangeCount <= 0 && (o.showtoast("交换失败", "success", 1e3), 
            e.singleDataFun());
        }, function() {}));
    },
    closeSwitch: function() {
        this.setData({
            "writeIntro.animationName": "toDownAnimation"
        });
        var t = this;
        setTimeout(function() {
            t.setData({
                "cardListCon.show": !1
            });
        }, 400);
    },
    layerSwitchCard: function(t) {
        this.data.layerCardId = t.detail;
    },
    home: function() {
        var t = this.data.owner;
        "notGroup" == t.env ? d.burying.setPoint(d, 538) : "group" == t.env && d.burying.setPoint(d, 608);
    }
}, (0, a.default)(t, "ss", function() {}), (0, a.default)(t, "shareButtonClick", function(t) {
    !d.compatibleManage.shareMenu && o.shareButton(this, "发送本张名片", "点击右上角，选择“分享”"), 
    d.gioCustome({
        t: "howEnter.001"
    });
}), (0, a.default)(t, "autoExchange", function(t, a) {
    d.setRequest({
        url: "returnCard",
        method: "POST",
        data: {
            id: t,
            othersOpenid: a
        }
    }), d.rsListObj.ifFresh = !0;
}), (0, a.default)(t, "clickSelfFun", function() {
    this.data.singleData.self && !this.data.singleData.isDel ? o.leaveHours(this.data.singleData.addtimeS) >= 24 ? (d.burying.setSensorEvent(d, {
        PageState: "自己名片落地页（24小时外）"
    }, "PrivateChatLandingPageState"), wx.switchTab({
        url: "/pages/cardMain/cardMain"
    })) : (d.burying.setSensorEvent(d, {
        PageState: "自己名片落地页（24小时内）"
    }, "PrivateChatLandingPageState"), d.temporaryData.edit.data = this.data.singleData, 
    wx.navigateTo({
        url: "/pages/mainPage/cardMain/cardTempEdit/cardTempEdit?id=".concat(this.data.singleData.id, "&formtoken=").concat(this.data.singleData.formtoken, "&main=howEnter&type=clickSelf")
    })) : this.setData({
        showLoading: !1
    });
}), (0, a.default)(t, "quickShare", function() {
    d.burying.setPoint(d, 889), d.burying.setSensorEvent(d, {
        PopupPromptTrigger: "私聊落地页名片制作完成",
        PopupPromptMainButton: "分享我的名片"
    }, "PopupPromptShow"), this.setData({
        sendBack: !0
    });
}), (0, a.default)(t, "toHome", function() {
    this.setData({
        sendBack: !0
    }), this.returnHome();
}), (0, a.default)(t, "returnHome", function() {
    if (this.data.sendBack) {
        try {
            wx.setStorageSync("FirstInFromHowenter", !0);
        } catch (t) {}
        wx.switchTab({
            url: "/pages/cardMain/cardMain"
        });
    }
}), (0, a.default)(t, "onHide", function() {
    var t = this;
    console.log("onhide");
    var a = this.data.owner, e = this.data.mycard, i = this.data.layerCardId;
    "notGroup" == a.env && "other" == a.name && !a.intransitIf && e && e.defCard && e.defCard.id && this.autoExchange(i || e.defCard.id, this.data.singleData.openid);
    var n = null;
    clearTimeout(n), n = setTimeout(function() {
        t.getfisrtBuildClickedList(t.data.singleData);
    }, 300);
}), (0, a.default)(t, "onUnload", function() {
    var t = this.data.owner, a = this.data.mycard, e = this.data.layerCardId;
    "notGroup" == t.env && "other" == t.name && !t.intransitIf && a && a.defCard && a.defCard.id && this.autoExchange(e || a.defCard.id, this.data.singleData.openid);
}), (0, a.default)(t, "onShareAppMessage", function(t) {
    var a = "", e = "", n = this.data.mycard;
    if (console.log("onShareAppMessage", t), "menu" != t.from && t.target && "layerSendCard" == t.target.dataset.t) {
        var s = t.target.dataset.id, r = n.list && n.list.filter(function(t) {
            return t.id == s;
        })[0];
        return a = d.getShareCardImgUrl(r), e = d.getShareTitle(r), this.data.shareTypeCon.type = "layerSendCard", 
        d.burying.setSensorEvent(d, {
            CardType: d.getCardType(r).cardType
        }, "BusinessCardLinkSend"), o.shareAppMessa({
            title: e,
            path: "pages/cardAll/howEnter/howEnter?id=" + r.id + "&shareOthers=1&shareType=01&formtoken=" + r.formtoken,
            imageUrl: a
        });
    }
    return this.data.singleData && n.defCard && n.defCard.id ? (a = d.getShareCardImgUrl(n.defCard), 
    e = d.getShareTitle(n.defCard), "menu" != t.from && t.target && "cardList" == t.target.dataset.t || "menu" != t.from && "quickMake" == t.target.dataset.t ? (d.burying.setSensorEvent(d, {
        CardType: d.getCardType(n.defCard).cardType
    }, "BusinessCardLinkSend"), o.shareAppMessa({
        title: e,
        path: "pages/cardAll/howEnter/howEnter?id=" + n.defCard.id + "&shareOthers=1&shareType=01&formtoken=" + n.defCard.formtoken,
        imageUrl: a
    })) : o.shareAppMessa({
        title: "我向您转发" + this.data.singleData.name + "的名片，请点击查看",
        path: "pages/cardAll/howEnter/howEnter?id=" + i.id + "&shareOthers=" + d.client.openid + "&shareType=03&formtoken=" + this.data.singleData.formtoken
    })) : o.shareAppMessa({
        title: "我向您推荐“递名片”",
        path: "pages/cardMy/about/about?shareOthers=howEnter&shareType=05",
        imageUrl: d.source.shareImage
    });
}), t));