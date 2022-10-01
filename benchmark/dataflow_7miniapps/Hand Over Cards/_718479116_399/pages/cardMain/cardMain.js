var t = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../52320AA70691379C345462A0E510E9B3.js")), e = require("../../7931C4950691379C1F57AC929AD2E9B3.js"), a = require("../../7931C4950691379C1F57AC929AD2E9B3.js"), i = getApp(), n = {}, o = null, s = 0;

Page({
    data: {
        systemInfo: i.systemInfo,
        cardList: {
            show: !1,
            animationName: ""
        },
        showVideo: !1,
        freshNum: new Date().getTime(),
        sendcardTip: !1,
        netError: {
            show: !1
        },
        cardCode: {
            show: !1
        },
        position: null,
        mycard: [],
        clickedFirstSend: !1,
        cardShade: {
            show: !1
        },
        minimalistModel: t.default,
        anonymous: i.source.anonymous,
        aboutDMP: {
            show: !0
        },
        business: [],
        activity: {},
        showVideoAirWindow: !1,
        isTop: !0,
        showDelToast: !1,
        receiveText: "我们为您准备了10种样式的免费名片可以立即领取，您需要吗？",
        leftText: "我不需要",
        rightText: "立即领取",
        isSencePromise: !0,
        mainshowTopTip: !1,
        adminStatus: {
            isAdmin: 0,
            ownList: []
        },
        chooseTeamData: null,
        matchCardList: [],
        fillInformation: !1,
        picPre: i.source.card_img,
        userMaxCardNum: i.userMaxCardNum,
        wechatMessage: "",
        showFirstInFromHowenter: !1,
        showGuideCardmain: !1,
        showWebTemaplateClaim: !1,
        enterprisesData: {}
    },
    onPullDownRefresh: function() {
        i.ifFresh.mycard = !0, this.onShow(), this.getSentence();
    },
    onLoad: function(t) {
        console.log("cardMain.onload"), wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: "#ffffff"
        }), this.getSentence(), this.storageGet(), i.compatibleManage.navigationBarLoading && wx.showNavigationBarLoading();
    },
    onShow: function() {
        var t = this;
        this.showReceiveFun(), n = {}, o = null, this.mycardGet(function() {
            t.data.wechatMessage || t.getAvatarFun(), t.data.mycard.list.length > 0 && (i.burying.setSensorEvent(i, {
                CardID: t.data.mycard.defCardId
            }, "HomePageWithCard"), t.initFirstInFromHowenter()), t.getcloseTopTip(), t.data.mycard && t.data.mycard.list.length <= 0 ? t.myBusiness() : t.data.mycard.list.length > 0 && t.data.fillInformation && t.setData({
                fillInformation: !1
            }), t.firstBuildTip(), t.getUserSetting(), t.isSencePromiseFunc(), t.updateBubbleFun(), 
            t.initHigherShow(), i.lookEpiration ? t.getCompanyEnterprise() : t.hideServiceEpiration();
        }), i.compatibleManage.shareMenu && wx.showShareMenu({
            withShareTicket: !0
        });
    },
    updateBubbleFun: function() {
        this.setData({
            updateBubble: {
                timer: new Date().getTime()
            }
        });
    },
    showReceiveFun: function() {
        var t = this;
        wx.getStorageSync("showDelToast") && (a.showtoast("删除成功", "success", 2e3), setTimeout(function() {
            t.setData({
                showDelToast: !0
            });
        }, 2100), wx.setStorageSync("showDelToast", !1));
    },
    noNeed: function() {
        i.burying.setPoint(i, 723), this.setData({
            showDelToast: !1
        });
    },
    toReceive: function() {
        i.burying.setPoint(i, 722), wx.navigateTo({
            url: "/pages/mainPage/cardMain/cardFormBuild/cardFormBuild?butt=build&main=cardMain&id=none"
        }), this.setData({
            showDelToast: !1
        });
    },
    isSencePromiseFunc: function() {
        "1053" == i.gloabelOptions.scene && this.setData({
            isSencePromise: !1
        });
    },
    isShowVideo: function() {
        i.showVideo && (this.setData({
            showVideo: i.showVideo
        }), i.showVideo = !1);
    },
    toMyPage: function() {
        this.toMyPageLog();
    },
    toMyPageNew: function() {
        wx.navigateTo({
            url: "/pages/cardMy/cardMy"
        }), this.toMyPageLog();
    },
    toMyPageLog: function() {
        this.data.mycard.list && this.data.mycard.list.length <= 0 && 1 == this.data.adminStatus.isAdmin ? i.burying.setPoint(i, 807) : i.burying.setPoint(i, 626);
    },
    questionnaireTap: function() {
        i.burying.setPoint(i, 976);
    },
    firstBuildTip: function() {
        1 == this.data.mycard.list.length && i.buildCardClick && i.buildCardClick && a.showtoast("制作成功", "success", 2e3), 
        i.buildCardClick = !1;
    },
    getAvatarFun: function(t) {
        var e = this;
        i.client && i.client.openid && i.setRequest({
            url: "getUsersAvatarNickname",
            data: {
                openid: i.client.openid
            }
        }, function(a) {
            e.setData({
                wechatMessage: a
            }), t && t();
        });
    },
    myBusiness: function(t) {
        var e = this;
        i.setRequest({
            url: "checkPerson",
            data: {
                openId: i.client.openid
            }
        }, function(a) {
            var n = a && a.filter(function(t) {
                return 1 == t.isAdmin && !t.joinTeam;
            }) || [];
            e.setData({
                business: a,
                "adminStatus.isAdmin": n.length ? 1 : -1,
                "adminStatus.ownList": n
            }), 0 == e.data.mycard.list.length && n.length ? i.burying.setSensorEvent(i, {
                IsAdministrator: !0
            }, "EmptyHomePageView") : 0 != e.data.mycard.list.length || n.length || i.burying.setSensorEvent(i, {
                IsAdministrator: !1
            }, "EmptyHomePageView"), t && t(a), wx.setStorageSync("checkPersonRequest", {
                req: !0,
                data: a
            });
        });
    },
    closeWindow: function() {
        this.setData({
            fillInformation: !1
        });
    },
    hasSamePhoneFun: function(t) {
        this.setData({
            fillInformation: !0,
            chooseTeamData: t.detail.teamData,
            matchCardList: t.detail.matchCardList
        }), this.selectComponent("#cardInfor").showModal();
    },
    teamInfo: function() {
        wx.setStorageSync("cardAddSuccessShow", !0), this.setData({
            fillInformation: !1
        }), wx.switchTab({
            url: "/pages/company/company"
        });
    },
    getSentence: function(t) {
        var e = this;
        i.tokenGet(function() {
            i.setRequest({
                url: "dailySentence"
            }, function(a) {
                e.setData({
                    sentenceData: a
                }), t && t(a);
            }, function() {}, function() {});
        });
    },
    openUse: function() {
        try {
            this.selectComponent("#sendguide")._addToMymini();
        } catch (t) {}
    },
    showStZheZhao: function() {
        wx.navigateTo({
            url: "./dailySentence/dailySentence?id=" + this.data.mycard.defCard.id
        });
    },
    getDialog: function() {
        try {
            var t = wx.getStorageSync("dialog-addMinicardToAirWindows");
            t && t.show && (this.setData({
                showVideoAirWindow: !0
            }), wx.setStorageSync("dialog-addMinicardToAirWindows", {
                show: !1
            }));
        } catch (t) {}
    },
    iKnown: function() {
        try {
            this.setData({
                showVideoAirWindow: !1
            });
        } catch (t) {}
    },
    bgClick: function() {
        i.burying.setPoint(i, 302);
    },
    guidefunc: function(t) {
        var e = t.currentTarget.dataset.t;
        if ("pageButton" != e || i.cardReceiveMask ? "shadeButton" != e || i.cardReceiveMask ? i.cardReceiveMask && i.burying.setPoint(i, 1011) : i.burying.setPoint(i, 288) : i.burying.setPoint(i, 5), 
        this.setData({
            clickedFirstSend: !0
        }), this.data.cardShade.show && this.setData({
            cardShade: !1
        }), this.sendcardTipChecking(), this.closeHigherFun(), !wx.getStorageSync("clickedFirstSend")) {
            i.ifFirstClick = !0;
            try {
                wx.setStorageSync("clickedFirstSend", !0);
            } catch (t) {}
        }
    },
    storageGet: function() {
        var t;
        try {
            i.mycard && i.mycard.defCard && (t = i.mycard, console.log("mycardS", t), this.setData({
                mycard: t
            }), wx.setStorageSync("customAvatar", t.defCard.customAvatar));
        } catch (t) {}
    },
    getUserSetting: function() {
        var t = this;
        i.getSettingMessage(function(e) {
            t.setData({
                getSettingMessage: e.u
            });
        });
    },
    getUserMessa: function(t) {
        if (t.detail.iv) {
            this.setData({
                getSettingMessage: !0,
                "wechatMessage.avatarurl": t.detail.userInfo.avatarUrl
            }), i.touxiang = t.detail.userInfo, i.setUnion(t.detail), i.burying.setPoint(i, 232);
            try {
                wx.setStorageSync("touxiang", {
                    d: t.detail.userInfo
                });
            } catch (t) {}
        } else i.burying.setPoint(i, 233);
    },
    imageError: function(t) {
        console.log("imageError", t);
        try {
            s < 1 && (s++, this.setData({
                freshNum: new Date().getTime()
            })), i.errorLog(t.detail, "首页imageError");
        } catch (t) {}
    },
    cardEdit: function(t) {
        this.closeFirstInFromHowenter(1);
        var e = i.mycard.defCard;
        t.detail && t.detail.data ? i.temporaryData.edit.data = t.detail.data : i.temporaryData.edit.data = e, 
        wx.navigateTo({
            url: "/pages/mainPage/cardMain/cardTempEdit/cardTempEdit?id=".concat(e.id, "&formtoken=").concat(e.formtoken, "&main=cardMain")
        });
    },
    mycardGetFun: function() {
        var t = this;
        this.mycardGet(function() {
            t.initShowGuideCardmain(), t.updateBubbleFun();
        });
    },
    mycardGet: function(t) {
        var e = this;
        if (i.ifFresh.mycard) i.setRequest({
            url: "mycard"
        }, function(a) {
            e.setData({
                mycard: a,
                freshNum: new Date().getTime()
            });
            try {
                wx.setStorageSync("customAvatar", a.defCard.customAvatar);
            } catch (t) {}
            t && t();
        }, function() {
            i.mycard.pic_prefix || e.setData({
                "netError.show": !0
            });
        }, function() {
            a.hidetoast(), i.compatibleManage.navigationBarLoading && wx.hideNavigationBarLoading(), 
            wx.stopPullDownRefresh();
        }); else {
            console.log("huancun", i.mycard), this.setData({
                mycard: i.mycard
            });
            try {
                wx.setStorageSync("customAvatar", i.mycard.defCard.customAvatar);
            } catch (t) {}
            t && t(), i.compatibleManage.navigationBarLoading && wx.hideNavigationBarLoading();
        }
    },
    againRequest: function() {
        a.showtoast("加载中...", "loading", 8e3), this.setData({
            "netError.show": !1
        }), i.ifFresh.mycard = !0, i.netMark.token = !0, this.onShow();
    },
    switchCard: function() {
        this.setData({
            "cardList.show": !0,
            "cardList.animationName": "cardUpAni"
        });
    },
    buildCard: function() {
        i.burying.setPoint(i, 628), wx.navigateTo({
            url: "/pages/mainPage/cardMain/cardFormBuild/cardFormBuild?butt=build&main=cardMain&id=none"
        });
    },
    buildCardAdd: function() {
        this.setData({
            "cardList.show": !1
        }), this.buildCard();
    },
    selectCard: function(t) {
        var e = this;
        i.burying.setPoint(i, 839);
        var n = t.currentTarget.dataset.id;
        n != this.data.mycard.defcardId ? i.setRequest({
            url: "switchCard",
            data: {
                id: n
            }
        }, function(t) {
            "切换名片成功！" == t && (console.log("切换名片成功！"), i.setRequest({
                url: "mycard"
            }, function(t) {
                e.setData({
                    mycard: t,
                    freshNum: new Date().getTime()
                }), e.closeListCon();
                try {
                    wx.setStorageSync("customAvatar", t.defCard.customAvatar);
                } catch (t) {}
            }, function(t) {}));
        }, "", function() {
            a.hidetoast();
        }) : this.closeListCon();
    },
    closeCon: function() {
        i.burying.setPoint(i, 310), this.closeListCon();
    },
    closeListCon: function() {
        this.setData({
            "cardList.animationName": "cardDownAni"
        });
        var t = this, e = null;
        clearTimeout(e), e = setTimeout(function() {
            t.setData({
                "cardList.show": !1
            });
        }, 300);
    },
    codeTap: function() {
        i.burying.setPoint(i, 41), this.closeFirstInFromHowenter(1), this.cardCodeData();
    },
    codeCancel: function() {
        this.setData({
            "cardCode.show": !1
        });
    },
    cardCodeData: function(t, e) {
        var a = this;
        if (n.cardCode) return 0;
        n.cardCode = !0, i.setRequest({
            url: "cardCode",
            data: {
                id: this.data.mycard.defCard.id
            }
        }, function(i) {
            a.setData({
                "cardCode.name": a.data.mycard.defCard.name,
                "cardCode.src": i.qrcode.url
            }), e || a.setData({
                "cardCode.show": !0
            }), t && t();
        }, "", function() {
            n.cardCode = !1;
        });
    },
    toRelavenceBill: function(t) {
        i.burying.setPoint(i, 40), wx.navigateTo({
            url: "./invoiceList/invoiceList?detail=toRelavance&id=" + this.data.mycard.defCard.id + "&main=cardMain"
        });
    },
    cardShadeClose: function(t) {
        var e = this;
        "videoPlay" != t && "previewCard" != t && i.burying.setPoint(i, 289), setTimeout(function() {
            e.setData({
                "cardShade.show": !1
            });
        }, 200);
    },
    closeAboutDMP: function() {
        this.setData({
            "aboutDMP.show": !1
        });
    },
    shareButtonClick: function(t) {
        t && t.currentTarget.dataset && a.showWater(t, this), !i.compatibleManage.shareMenu && a.shareButton(this, "发送本张名片", "点击右上角，选择“分享”"), 
        this.sendcardTipChecking(), i.gioCustome({
            t: "cardMain.008"
        });
        var e = t.currentTarget.dataset.t;
        "pageButton" != e || i.cardReceiveMask ? "shadeButton" != e || i.cardReceiveMask ? i.cardReceiveMask && i.burying.setPoint(i, 1011) : i.burying.setPoint(i, 288) : i.burying.setPoint(i, 5), 
        this.closeHigherFun();
    },
    sendcardTipChecking: function() {
        var t = new Date().getTime(), e = this;
        n.shareButton && n.shareButton.length > 2 && n.shareButton[n.shareButton.length - 1] - n.shareButton[n.shareButton.length - 3] < 5e3 ? e.data.sendcardTip || (clearTimeout(o), 
        e.setData({
            sendcardTip: !0
        }), o = setTimeout(function() {
            e.setData({
                sendcardTip: !1
            });
        }, 5e3), i.gioCustome({
            t: "cardMain.005"
        })) : n.shareButton ? n.shareButton.push(t) : n.shareButton = [ t ];
    },
    videoPlay: function() {
        wx.navigateTo({
            url: "../companyManage/previewVideoCard/previewVideoCard?self=self"
        }), this.cardShadeClose("videoPlay"), i.burying.setPoint(i, 133);
    },
    videoMakingClick: function() {
        i.burying.setPoint(i, 133);
    },
    ss: function() {},
    formid: function(t) {
        i.formidSend(t.detail.formId);
    },
    onHide: function(t) {
        var e = this;
        clearTimeout(null), this.data.cardList && this.data.cardList.show && setTimeout(function() {
            e.closeListCon();
        }, 800), this.data.dynamicCardVideoPlay && setTimeout(function() {
            e.setData({
                dynamicCardVideoPlay: !1
            });
        }, 800);
    },
    getcloseTopTip: function() {
        var t = void 0;
        !1 === wx.getStorageSync("mainshowTopTip") ? t = !1 : (i.burying.setSensorEvent(i, {
            PromptType: "首页浮条提示"
        }, "AddToMyMiniProgramMaskShow"), t = !0), this.setData({
            mainshowTopTip: t
        });
    },
    closeTopTip: function() {
        i.burying.setPoint(i, 794);
        try {
            wx.setStorageSync("mainshowTopTip", !1), this.setData({
                mainshowTopTip: !1
            });
        } catch (t) {}
    },
    initFirstInFromHowenter: function() {
        try {
            var t = wx.getStorageSync("FirstInFromHowenter");
            !1 === t ? this.setData({
                showFirstInFromHowenter: !1
            }) : 1 == t && this.setData({
                showFirstInFromHowenter: !0
            });
        } catch (t) {}
    },
    initShowGuideCardmain: function() {
        try {
            var t = wx.getStorageSync("guideCardmain");
            void 0 === t || !1 === t ? this.setData({
                showGuideCardmain: !1
            }) : 1 == t && this.setData({
                showGuideCardmain: !0
            });
        } catch (t) {}
    },
    initHigherShow: function() {
        try {
            var t = wx.getStorageSync("webTemaplateClaimStorage");
            void 0 === t || !1 === t ? this.setData({
                showWebTemaplateClaim: !1
            }) : 1 == t && this.setData({
                showWebTemaplateClaim: !0
            });
        } catch (t) {}
    },
    closeFirstInFromHowenter: function(t) {
        if (1 !== t && i.burying.setPoint(i, 880), this.data.showFirstInFromHowenter) {
            if (this.data.showFirstInFromHowenter) {
                this.setData({
                    showFirstInFromHowenter: !1
                });
                try {
                    wx.setStorageSync("FirstInFromHowenter", !1);
                } catch (t) {}
            }
        } else ;
        if (this.data.showGuideCardmain) {
            if (this.data.showGuideCardmain) {
                this.setData({
                    showGuideCardmain: !1
                });
                try {
                    wx.setStorageSync("guideCardmain", "hasShown");
                } catch (t) {}
            }
        } else ;
    },
    closeNewCardEnter: function() {},
    closeHigher: function() {
        this.closeHigherFun();
    },
    closeHigherFun: function() {
        this.data.showWebTemaplateClaim && this.setData({
            showWebTemaplateClaim: !1
        });
        try {
            wx.removeStorage({
                key: "webTemaplateClaimStorage"
            });
        } catch (t) {}
    },
    hideServiceEpiration: function() {
        i.lookEpiration = !1, this.setData({
            enterprisesData: {}
        });
    },
    getCompanyEnterprise: function() {
        var t = this;
        i.setRequest({
            url: "getEntMessage",
            data: {
                openId: i.client.openid
            }
        }, function(e) {
            e.entId ? t.setData({
                enterprisesData: e
            }) : t.setData({
                enterprisesData: {}
            }), console.log("服务到期状态", t.data.enterprisesData);
        }, function() {});
    },
    catchMove: function() {},
    onPageScroll: function(t) {
        var a = this;
        (0, e.changeTabarBg)(this, t);
        var i = null;
        clearTimeout(i), i = setTimeout(function() {
            a.data.isTop ? wx.setNavigationBarColor({
                frontColor: "#ffffff",
                backgroundColor: "#000000"
            }) : wx.setNavigationBarColor({
                frontColor: "#000000",
                backgroundColor: "#ffffff"
            });
        }, 100);
    },
    onShareAppMessage: function() {
        if (i.mycard.defCard && i.mycard.defCard.id) {
            i.burying.setSensorEvent(i, {
                CardType: i.getCardType(i.mycard.defCard).cardType
            }, "BusinessCardLinkSend");
            var t, e;
            return e = i.getShareCardImgUrl(i.mycard.defCard), t = i.getShareTitle(i.mycard.defCard), 
            a.shareAppMessa({
                title: t,
                path: "pages/cardAll/howEnter/howEnter?id=" + i.mycard.defCard.id + "&shareOthers=1&shareType=01&formtoken=" + i.mycard.defCard.formtoken,
                imageUrl: e
            });
        }
        return a.shareAppMessa({
            title: "我向您推荐“递名片”",
            path: "pages/cardMy/about/about?shareOthers=cardMain&shareType=05",
            imageUrl: i.source.shareImage
        });
    }
});