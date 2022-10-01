require("../../AFC697330691379CC9A0FF345133E9B3.js");

var t = require("../../BD93AC350691379CDBF5C4320700E9B3.js"), a = !1, e = !1, r = getApp(), i = require("../../7931C4950691379C1F57AC929AD2E9B3.js"), n = !1, s = new t.EditMini(), o = !1;

Component({
    properties: {
        quickBuild: {
            type: Object
        },
        myMessage: {
            type: Object
        },
        placeholderWarning: Boolean,
        saveCommit: {
            type: Object
        },
        confirmCon: Object,
        mycard: Object,
        writeIntro: Object,
        hasBorder: String,
        returnOpenid: String,
        route: String,
        pageOrigin: Object,
        theCard: {
            type: Object,
            value: {}
        },
        sourceType: String,
        recCard: Object,
        ifGuide: Boolean
    },
    data: {
        anonymous: r.source.anonymous,
        formData: [ [ "name", "姓名", "请填写姓名", "", "", !1 ], [ "company", "公司", "请填写公司名称", "", "", !1 ], [ "job", "职位", "请填写职位", "", "", !1 ], [ "mophone1", "手机", "请填写手机号", "", "", !1 ] ],
        myMessage: {},
        listCon: {},
        getSettingMessage: !1,
        userMaxCardNum: r.userMaxCardNum
    },
    attached: function() {
        console.log("組件operationLayer attached"), this.getUserSetting();
    },
    pageLifetimes: {
        show: function() {
            var t = this;
            o = !1;
            for (var a = this.data.formData, e = 0; e < a.length; e++) a[e][4] && (a[e][4] = 3);
            this.setData({
                formData: a,
                placeholderWarning: !1,
                saveCommit: {
                    loading: !1
                }
            }), r.client.openid && r.setRequest({
                url: "getUsersAvatarNickname",
                data: {
                    openid: r.client.openid
                }
            }, function(a) {
                t.setData({
                    myMessage: {
                        url: a.avatarurl,
                        con: a.nickname
                    }
                });
            });
        }
    },
    created: function() {},
    moved: function() {},
    detached: function() {},
    methods: {
        getUserSetting: function() {
            var t = this;
            r.getSettingMessage(function(a) {
                t.setData({
                    getSettingMessage: a.u
                });
            });
        },
        closeList: function() {
            this.setData({
                "confirmCon.animationName": "newToDownAnimation"
            });
            var t = this;
            a = !1, setTimeout(function() {
                t.setData({
                    "confirmCon.show": !1
                });
            }, 400);
        },
        ss: function() {},
        closeQuick: function(t) {
            "howEnter" == this.data.route && this.data.ifGuide && !t && r.burying.setPoint(r, 269), 
            this.setData({
                "quickBuild.animationName": "newToDownAnimation"
            });
            var a = this;
            setTimeout(function() {
                a.setData({
                    "quickBuild.show": !1
                });
            }, 400);
        },
        getUserMessa: function(t) {
            t.detail.iv && (this.setData({
                getSettingMessage: !0
            }), r.setUnion(t.detail), this.submit(this.data.submitInfo));
        },
        submit: function(t) {
            var a = this, e = this.checkForm(t.detail.value), d = this.data.route;
            this.data.theCard;
            if (this.toCheckForm(), e.name && e.company && e.job && e.phone && !/^\s+$/.test(e.name) && !/^\s+$/.test(e.company) && !/^\s+$/.test(e.job) && !/^\s+$/.test(e.phone)) {
                this.setData({
                    saveCommit: {
                        loading: !0
                    }
                }), i.showtoast("提交中...", "loading", 8e3);
                var u = this.data.formData, c = [ e.name, e.company, e.job, e.phone ];
                o || (o = !0, "howEnter" == this.data.route && this.data.ifGuide && r.burying.setPoint(r, 270), 
                r.contentTestFun(c, function(t) {
                    if (t.allwords <= 0) a.data.serverData = s.serverFunFast(u), a.data.myMessage.url ? a.data.serverData.customAvatar = a.data.myMessage.url : a.data.serverData.customAvatar = s.baseData().avaDefaultName, 
                    a.svg(function(t) {
                        a.data.serverData.userpic = t.name, a.data.serverData.fastCreateCard = "true", a.data.serverData.createCardType = "fastCreate", 
                        r.setRequest({
                            url: "createCard",
                            method: "POST",
                            data: a.data.serverData
                        }, function(t) {
                            o = !1, wx.hideToast(), a.closeQuick(!0), n = !1, a.setData({
                                saveCommit: {
                                    loading: !1
                                }
                            }), a.triggerEvent("buildCardFun"), "howEnter" != d ? a.returnCard(t.id, function() {
                                r.burying.setPoint(r, 154);
                            }) : wx.navigateTo({
                                url: "../../cardMain/showCard/showCard?url=" + t.userpic + "&urlName=" + a.data.serverData.userpic + "&name=" + a.data.serverData.name + "&id=" + t.id + "&hengshu=heng"
                            });
                        }, "", "");
                    }); else {
                        wx.hideToast(), i.testShowmodal(function() {
                            o = !1;
                        });
                        for (var e = t.errorArr, h = 0; h < e.length; h++) for (var m = 0; m < u.length; m++) c[e[h]] == u[m][3] && (u[m][6] = 2);
                        a.setData({
                            formData: u,
                            saveCommit: {
                                loading: !1
                            }
                        });
                    }
                }));
            }
        },
        switch: function() {
            r.burying.setPoint(r, 213), this.closeList(), this.setData({
                "listCon.show": !0,
                "writeIntro.animationName": "newToUpAnimation"
            });
        },
        returnCard: function(t, r) {
            this.data.sourceType;
            var n = this.data.theCard, s = this.data.route;
            if (n && null != n.recI) {
                if (0 == n.order || "" == n.order) {
                    if (this.closeList(), i.showtoast("该名片已失效", "none", 2e3), "cardsFolder" != s || "cardFind" != s) {
                        var o = null;
                        clearTimeout(o), o = setTimeout(function() {
                            wx.navigateBack({
                                delta: 1
                            });
                        }, 2e3);
                    } else this.closeList();
                    return;
                }
                e = !e && "", a = !a && "";
            } else r && r(), this.retCardMy(t);
        },
        sucCallback: function(t) {
            var a = this.data.theCard, e = this.data.route;
            "exchangeCards" == e ? this.triggerEvent("showDetailFun", a.id ? a.id : a.cardId) : "moreRec" == e || "cardsFolder" == e || "cardFind" == e ? (i.showtoast("交换成功", "success", 2e3), 
            this.triggerEvent("freshRec", a.cardId)) : "searchPage" == e && (i.showtoast("交换成功", "success", 2e3), 
            this.triggerEvent("freshRec", a.id)), r.rsListObj.ifFresh = !0;
        },
        retCardMy: function(t, n) {
            var s = this;
            getCurrentPages();
            i.showtoast("提交中...", "loading", 8e3), this.data.returnOpenid && r.setRequest({
                url: "returnCard",
                method: "POST",
                data: {
                    id: t,
                    othersOpenid: this.data.returnOpenid
                }
            }, function(t) {
                i.hidetoast(), i.showtoast("交换成功", "success", 2e3), s.triggerEvent("partFreshFun", s.data.returnOpenid), 
                n && n();
            }, function() {
                e = !e && "", a = !a && "";
            }, function() {
                e = !e && "", a = !a && "";
            });
        },
        closeSwitch: function() {
            this.setData({
                "writeIntro.animationName": "newToDownAnimation"
            }), e = !1;
            var t = this;
            setTimeout(function() {
                t.setData({
                    "listCon.show": !1
                });
            }, 400);
        },
        selectCard: function(t) {
            e = !1, this.setData({
                hasBorder: t.currentTarget.dataset.id
            });
        },
        toBuildCard: function() {
            wx.navigateTo({
                url: "/pages/mainPage/cardMain/cardFormBuild/cardFormBuild?butt=build&main=cardsFolder&id=none",
                success: function() {}
            });
        },
        confirmCard: function() {
            var t = this;
            this.data.route, this.data.theCard;
            e || (e = !0, this.data.hasBorder && this.returnCard(this.data.hasBorder, function() {
                t.closeSwitch(), r.burying.setPoint(r, 215);
            }));
        },
        submitCard: function() {
            var t = this;
            this.data.route, this.data.theCard;
            a || (a = !0, this.returnCard(r.mycard.defCard.id, function() {
                r.burying.setPoint(r, 141), t.closeList();
            }));
        },
        toPerfect: function() {
            r.burying.setPoint(r, 214);
            var t = r.mycard.defCard;
            r.temporaryData.edit.data = r.mycard.defCard;
            "cardsFolder" == this.data.route || this.data.route, "WebTemp" == r.mycard.defCard.modelIndex.type ? wx.navigateTo({
                url: "/pages/cardMain/webcardEdit/webcardEdit?id=".concat(t.id, "&main=operationLayer&formtoken=").concat(t.formtoken)
            }) : wx.navigateTo({
                url: "/pages/mainPage/cardMain/cardTempEdit/cardTempEdit?id=".concat(t.id, "&formtoken=").concat(t.formtoken, "&main=operationLayer")
            });
        },
        input: function(t) {
            var a = t.currentTarget.dataset.index, e = this.data.formData;
            if (this.data.formData[t.currentTarget.dataset.index][3] = t.detail.value, 2 == e[a][6]) {
                switch (a) {
                  case 0:
                    e[0][6] = 3;
                    break;

                  case 1:
                    e[1][6] = 3;
                    break;

                  case 2:
                    e[2][6] = 3;
                    break;

                  case 3:
                    e[3][6] = 3;
                }
                this.setData({
                    formData: e
                });
            }
        },
        focus: function(t) {
            var a = t.currentTarget.dataset.index;
            "howEnter" == this.data.route && this.data.ifGuide && ("0" == a ? r.burying.setPoint(r, 265) : "1" == a ? r.burying.setPoint(r, 266) : "2" == a ? r.burying.setPoint(r, 267) : "3" == a && r.burying.setPoint(r, 268));
            a = t.currentTarget.dataset.index;
            this.data.formData[a][5] = !0, this.setData({
                formData: this.data.formData
            });
        },
        blur: function(t) {
            n && this.toCheckForm(), this.data.formData[t.currentTarget.dataset.index][3] = t.detail.value, 
            this.data.formData[t.currentTarget.dataset.index][5] = !1;
        },
        toCheckForm: function() {
            n = !0;
            for (var t = this.data.formData, a = 0; a < t.length; a++) t[a][4] = t[a][3].trim().length ? 3 : 2;
            this.setData({
                placeholderWarning: !1,
                formData: t
            });
        },
        checkForm: function(t) {
            for (var a = this.data.formData, e = 0; e < a.length; e++) t[a[0]] || (t[a[e][0]] = a[e][3]);
            return t;
        },
        svg: function(t) {
            var a = this.data.serverData;
            a.tempId = s.autoMiniModelFun().name, r.setRequest({
                url: "drawSvg",
                method: "POST",
                data: a
            }, function(a) {
                t && t(a);
            });
        }
    }
});