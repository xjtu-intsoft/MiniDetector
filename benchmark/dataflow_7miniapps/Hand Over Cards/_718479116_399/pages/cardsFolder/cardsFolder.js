var t = getApp(), e = require("../../7931C4950691379C1F57AC929AD2E9B3.js");

Page({
    data: {
        systemInfo: t.systemInfo,
        rsListObj: t.rsListObj,
        rsTotal: {
            lastWeekRsCount: 0,
            thisWeekRsCount: 0,
            total: 0
        },
        showCamera: !1,
        topSearchShow: !1,
        scrollHeight: 0,
        exportedModalShow: !1,
        viewerState: "list",
        mycard: {},
        timerMark: new Date().getTime()
    },
    onPullDownRefresh: function() {
        var t = this;
        this.data.rsListObj.currentPage = 1, this.getRsList(function() {
            t.setData({
                timerMark: new Date().getTime()
            }), wx.stopPullDownRefresh();
        });
    },
    onLoad: function(e) {
        var a = this;
        this.data.rsListObj.currentPage = 1, this.data.reachBottomOpen = !0, wx.setNavigationBarColor({
            frontColor: "#000000",
            backgroundColor: "#ffffff"
        }), t.tokenGet(function() {
            a.getRsList();
        }), t.compatibleManage.shareMenu && wx.hideShareMenu();
    },
    onShow: function() {
        var e = this;
        t.tokenGet(function() {
            e.mycardFun(function(t) {
                e.setData({
                    mycard: t
                }), e.shareSetting();
            }), e.setData({
                updateBubble: {
                    timer: new Date().getTime()
                }
            });
        }), t.rsListObj.ifFresh && (this.data.rsListObj.currentPage = 1, this.getRsList(), 
        t.rsListObj.ifFresh = !1);
    },
    onPageScroll: function(t) {
        var e = t.scrollTop || 0;
        (e *= this.data.systemInfo.shiftX) > 300 ? !this.data.topSearchShow && this.setData({
            topSearchShow: !0
        }) : this.data.topSearchShow && this.setData({
            topSearchShow: !1
        });
    },
    shareSetting: function() {
        var e = this.data.mycard, a = this.data.myConnectionsLists;
        e && e.list && e.list.length > 0 && a && a.length <= 0 ? t.compatibleManage.shareMenu && wx.showShareMenu({
            withShareTicket: !0
        }) : t.compatibleManage.shareMenu && wx.hideShareMenu();
    },
    getRsList: function(t, e) {
        var a = this;
        "card" == this.data.viewerState ? this.cardViewerDataFun(function(e) {
            a.renderData(e, "card"), t && t();
        }, function() {
            e && e();
        }) : this.listViewerDataFun(function(e) {
            a.renderData(e, "list"), t && t();
        }, function() {
            e && e();
        });
    },
    listViewerDataFun: function(e, a) {
        var r = this.data.rsListObj.currentPage;
        t.setRequest({
            url: "selectRsList",
            data: {
                pageSize: 30,
                currentPage: r
            }
        }, function(t) {
            e && e(t);
        }, function() {
            a && a();
        });
    },
    cardViewerDataFun: function(e, a) {
        var r = this.data.rsListObj.currentPage;
        t.setRequest({
            url: "relshipSelectRsViewList",
            data: {
                pageSize: 30,
                currentPage: r
            }
        }, function(t) {
            e && e(t);
        }, function() {
            a && a();
        });
    },
    renderData: function(t, e) {
        var a = this.data.rsListObj.currentPage, r = [], s = t, i = t.list;
        this.data.rsListObj.pages = i.pages, this.setData({
            rsTotal: {
                lastWeekRsCount: s.lastWeekRsCount,
                thisWeekRsCount: s.thisWeekRsCount,
                total: s.count
            }
        }), 1 == a ? (r = i.records, this.data.rsListObj.beforeData = i.records) : a > 1 && (r = this.data.rsListObj.beforeData.concat(i.records), 
        this.data.rsListObj.beforeData = r);
        var n = [];
        n = "card" == e ? this.formRsCardData(r) : this.formRsListData(r), this.data.reachBottomOpen = !0, 
        this.data.rsListObj.rsListData = n, this.setData({
            myConnectionsLists: n
        }), this.shareSetting();
    },
    formRsListData: function(t) {
        var e, a, r = {}, s = [];
        if (t.length <= 0) return s;
        for (var i = 0; i < t.length; i++) {
            e = t[i].createResTime.substring(0, 7), a = t[i].createResTime.substring(0, 7).replace("-", "年") + "月", 
            r[e] || (r[e] = e, s.push({
                createResTime: e,
                cardList: [],
                createResDay: a
            }));
            for (var n = 0; n < s.length; n++) e == s[n].createResTime.substring(0, 7) && (t[i].avatarUrl || (t[i].name ? t[i].firstWord = t[i].name.substring(0, 1) : t[i].firstWord = "-"), 
            s[n].cardList.push(t[i]));
        }
        return s;
    },
    formRsCardData: function(t) {
        var e, a, r = {}, s = [];
        if (t.length <= 0) return s;
        for (var i = 0; i < t.length; i++) {
            e = t[i].addtimeS.substring(0, 7), a = t[i].addtimeS.substring(0, 7).replace("-", "年") + "月", 
            r[e] || (r[e] = e, s.push({
                addtimeS: e,
                cardList: [],
                createResDay: a
            }));
            for (var n = 0; n < s.length; n++) e == s[n].addtimeS.substring(0, 7) && (t[i].avatarUrl || (t[i].name ? t[i].firstWord = t[i].name.substring(0, 1) : t[i].firstWord = "-"), 
            s[n].cardList.push(t[i]));
        }
        return s;
    },
    switchViewer: function() {
        this.data.rsListObj.currentPage = 1, "list" == this.data.viewerState ? (t.burying.setPoint(t, 1065), 
        this.setData({
            viewerState: "card"
        })) : (t.burying.setPoint(t, 1064), this.setData({
            viewerState: "list"
        })), this.data.reachBottomOpen = !1, this.getRsList();
    },
    search: function() {
        t.burying.setPoint(t, 148), wx.navigateTo({
            url: "/pages/subpackagePage/cardFolder/searchPage/searchPage?viewerState=" + this.data.viewerState
        });
    },
    batchShare: function() {
        var e = this;
        t.burying.setPoint(t, 144), t.setRequest({
            url: "batchShareListAscLetter"
        }, function(t) {
            e.cardListRender(t);
        });
    },
    cardListRender: function(t) {
        var a, r = [], s = [];
        a = Object.keys(t).sort();
        for (var i = 0; i < a.length; i++) r.push({
            flag: a[i],
            items: t[a[i]]
        }), s.push(t[a[i]]);
        this.setData({
            batchShareData: r,
            letterList: a
        }), s && s.length > 0 ? wx.navigateTo({
            url: "../cardAll/batchShare/batchShare"
        }) : e.showtoast("暂无可分享的名片", "none", 2e3);
    },
    exportCards: function() {
        t.burying.setPoint(t, 145), this.data.rsTotal && this.data.rsTotal.total <= 0 ? e.showtoast("暂无可导出的名片", "none", 2e3) : this.setData({
            exportedModalShow: !0
        });
    },
    cancelExported: function() {
        this.setData({
            exportedModalShow: !1
        });
    },
    confirmExported: function() {
        this.setData({
            exportedModalShow: !1
        });
    },
    mycardFun: function(e) {
        t.ifFresh.mycard ? t.setRequest({
            url: "mycard"
        }, function(t) {
            e && e(t);
        }) : e && e(t.mycard);
    },
    hasRoot: function() {
        return this.setData({
            showCamera: !0
        }), new Promise(function(t, e) {
            wx.getSetting({
                success: function(e) {
                    var a = e.authSetting;
                    0 == a["scope.camera"] ? wx.showModal({
                        title: "提示",
                        content: "需要您授权拍照",
                        showCancel: !1,
                        success: function() {
                            wx.openSetting({
                                success: function(e) {
                                    e.authSetting["scope.camera"] ? t("ok") : t("fail");
                                },
                                fail: function() {
                                    t("fail");
                                }
                            });
                        },
                        fail: function() {
                            t("fail");
                        }
                    }) : null == a["scope.camera"] ? t("fail") : t("ok");
                }
            });
        });
    },
    openCamera: function() {
        t.burying.setPoint(t, 650), this.hasRoot().then(function(t) {
            "ok" == t && wx.navigateTo({
                url: "/pages/subpackagePage/cardFolder/cardCamera/cardCamera"
            });
        });
    },
    onReachBottom: function() {
        this.data.reachBottomOpen && this.data.rsListObj.currentPage <= this.data.rsListObj.pages && (this.data.rsListObj.currentPage++, 
        this.getRsList());
    },
    listItemTap: function(e) {
        var a = this, r = e.detail.currentTarget.dataset.sendopenid, s = e.detail.currentTarget.dataset.name;
        t.setRequest({
            url: "selectRsCardList",
            data: {
                sendOpenId: r
            }
        }, function(t) {
            a.setData({
                selectRsCardList: t
            }), 1 == t.length ? wx.navigateTo({
                url: "/pages/cardAll/enterShow/enterShow?id=" + t[0].id + "&openid=" + t[0].openid + "&main=cardsFolder&formtoken=" + t[0].formtoken
            }) : t.length > 1 && wx.navigateTo({
                url: "/pages/subpackagePage/cardFolder/manyCardImg/manyCardImg?cardname=" + s
            });
        });
    },
    cardItemTap: function(t) {
        var e = t.detail.currentTarget.dataset;
        wx.navigateTo({
            url: "/pages/cardAll/enterShow/enterShow?id=" + e.id + "&openid=" + e.openid + "&main=cardsFolder&formtoken=" + e.formtoken
        });
    },
    toCardDetail: function(e) {
        var a = this;
        t.setRequest({
            url: "selectRsCardList",
            data: {
                sendOpenId: e.currentTarget.dataset.sendopenid
            }
        }, function(t) {
            a.setData({
                selectRsCardList: t
            }), 1 == t.length ? wx.navigateTo({
                url: "../cardAll/enterShow/enterShow?id=" + t[0].id + "&openid=" + t[0].openid + "&main=cardsFolder&formtoken=" + t[0].formtoken
            }) : t.length > 1 && wx.navigateTo({
                url: "/pages/subpackagePage/cardFolder/manyCardImg/manyCardImg?cardname=" + e.currentTarget.dataset.name
            });
        });
    },
    lastClick: function() {
        var a = this.data.rsTotal;
        a && a.lastWeekRsCount > 0 ? wx.navigateTo({
            url: "/pages/subpackagePage/cardFolder/lastGrowth/lastGrowth"
        }) : e.showtoast("上周没有收到新名片", "none", 1500), t.burying.setPoint(t, 1066);
    },
    totalClick: function() {
        t.burying.setPoint(t, 401);
    },
    currentClick: function() {
        var a = this.data.rsTotal;
        a && a.thisWeekRsCount > 0 ? wx.navigateTo({
            url: "/pages/subpackagePage/cardFolder/currentGrowth/currentGrowth"
        }) : e.showtoast("本周没有收到新名片", "none", 1500), t.burying.setPoint(t, 1067);
    },
    cardLog: function(e) {
        t.burying.setSensorEvent(t, {
            CardType: t.getCardType(e.defCard).cardType
        }, "BusinessCardLinkSend");
    },
    onShareAppMessage: function() {
        var a = this.data.mycard;
        if (a && a.defCard && a.defCard.id) {
            this.cardLog(a);
            var r, s;
            return s = t.getShareCardImgUrl(a.defCard), r = t.getShareTitle(a.defCard), e.shareAppMessa({
                title: r,
                path: "pages/cardAll/howEnter/howEnter?id=" + a.defCard.id + "&shareOthers=1&shareType=01&formtoken=" + a.defCard.formtoken,
                imageUrl: s
            });
        }
        return e.shareAppMessa({
            title: "我向您推荐“递名片”",
            path: "pages/cardMy/about/about?shareOthers=cardsFolder&shareType=05",
            imageUrl: t.source.shareImage
        });
    }
});