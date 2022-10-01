var t = require("../../../66AA26C40691379C00CC4EC37CA2E9B3.js"), a = getApp(), e = require("../../../7931C4950691379C1F57AC929AD2E9B3.js"), n = new t.Match("component");

Component({
    properties: {
        buildTimes: {
            type: String,
            value: "nofirst",
            observer: function() {}
        }
    },
    data: {
        cardList: null,
        fillInformation: !1,
        fullnameValue: "",
        entName: "",
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
        isScroll: !0,
        creatAdd: "",
        status: !1,
        buttonShow: !1,
        contentTestFail: !1,
        hadAuthentication: !1,
        loading: !1,
        sevenTip: !0,
        limitDays: 7,
        cardsData: [],
        tmpIdList: [ 4, 2 ],
        chooselibraryId: 4,
        entId: ""
    },
    lifetimes: {
        attached: function() {
            console.log("build.attached"), this._cardManage(), this._modelFun();
        }
    },
    pageLifetimes: {
        show: function() {
            console.log("build.show"), this._cardManage(), this._modelFun();
        }
    },
    methods: {
        _chooseTmp: function(t) {
            var a = t.currentTarget.dataset.libraryId;
            this.setData({
                chooselibraryId: a
            });
        },
        _cardManage: function() {
            var t = this;
            this._cardListFun(function(a) {
                t.setData({
                    cardList: a
                });
                var e = t._checkUsefulCard(t.data.cardList);
                if (e.length > 0) {
                    var n = e[0].entName;
                    n && n.trim().length > 0 && t.setData({
                        fullnameValue: String(n) || "",
                        buttonShow: !0
                    });
                }
            });
        },
        _modelFun: function(t) {
            var e = this;
            a.setRequest({
                url: "tplTplLibrary"
            }, function(t) {
                for (var a = 0; a < t.length; a++) t[a].logoStyle = JSON.parse(t[a].logoStyle);
                t = t.filter(function(t) {
                    return e.data.tmpIdList.includes(t.libraryId);
                }), e.setData({
                    cardsData: t
                });
            }, function() {});
        },
        _focus: function(t) {
            a.burying.setPoint(a, 589), this.data.blur = !1, a.systemInfo["1.6.3"] && n.focus({
                eContent: t,
                bindthat: this,
                extra: 0
            }), this.setData({
                isScroll: !1
            });
        },
        _input: function(t) {
            this.data.contentTestFail && this.setData({
                contentTestFail: !1
            }), this.data.hadAuthentication && this.setData({
                hadAuthentication: !1,
                sevenTip: !0
            });
            var e = t.detail.value;
            if (e = e && e.trim().length > 40 ? e.slice(0, 40) : e.trim(), this.data.fullnameValue = String(e) || "", 
            !t.detail.value || t.detail.value.trim().length <= 0) return this.setData({
                status: !1,
                "matchData.show": !1,
                buttonShow: !1
            }), e;
            this.data.buttonShow || this.setData({
                buttonShow: !0
            }), new RegExp("^[一-龥_a-zA-Z0-9]+$", "g").exec(t.detail.value) && !this.data.status && a.systemInfo["1.6.3"] && n.input({
                eContent: t,
                bindthat: this,
                extra: 0
            });
        },
        _blur: function(t) {
            var e = this, i = t.detail.value;
            i = i && i.trim().length > 40 ? i.slice(0, 40) : i.trim(), this.data.fullnameValue = String(i) || "", 
            a.systemInfo["1.6.3"] && setTimeout(function() {
                n.blur({
                    bindthat: e,
                    extra: 0
                });
            }, 500), this.setData({
                isScroll: !0
            });
        },
        _clearMessage: function() {
            this.data.contentTestFail && this.setData({
                contentTestFail: !1
            }), this.data.hadAuthentication && this.setData({
                hadAuthentication: !1,
                sevenTip: !0
            });
            var t = this;
            a.systemInfo["1.6.3"] && setTimeout(function() {
                n.blur({
                    bindthat: t,
                    extra: 0
                }), t.setData({
                    fullnameValue: "",
                    buttonShow: !1
                });
            }, 500);
        },
        _cardListFun: function(t) {
            a.setRequest({
                url: "cardsList",
                data: {
                    openId: a.client.openid
                }
            }, function(a) {
                t && t(a);
            });
        },
        _checkUsefulCard: function(t) {
            for (var a = t, e = [], n = 0; n < a.length; n++) a[n].entId || e.push(a[n]);
            return e;
        },
        editCardPageMatchSelect: function(t) {
            a.burying.setPoint(a, 591);
            var e = this;
            setTimeout(function() {
                e.setData({
                    status: !0,
                    "matchData.show": !1,
                    fullnameValue: String(t.currentTarget.dataset.matchitem) || "",
                    buttonShow: !0
                });
            }, 500);
        },
        closeWindow: function() {
            this.setData({
                fillInformation: !1
            });
        },
        selectTemp: function(t, e, n) {
            var i = this;
            a.setRequest({
                url: "tplAddTuiJianTplFromWx",
                method: "POST",
                data: {
                    entId: t,
                    logoUrl: "",
                    tag: e,
                    userOpenId: a.client.openid
                }
            }, function(t) {
                a.burying.setSensorEvent(a, {
                    CompanyName: i.data.fullnameValue,
                    ChooseBackground: 2 == e ? "黑" : "白",
                    CreateSource: "正常创建"
                }, "TeamCreate"), n && n(t);
            }, function() {}, function() {
                i.setData({
                    loading: !1
                });
            });
        },
        _buttonAdd: function() {
            var t = this;
            if (a.burying.setPoint(a, 590), !this.data.loading) {
                this.data.loading = !0;
                var n = this.data.fullnameValue, i = [];
                i.push(n), this.setData({
                    entName: n,
                    loading: !0
                }), a.contentTestFun(i, function(i) {
                    i.allwords <= 0 ? t.teamAttestation(n, function(e) {
                        if (e.checkResult) t.setData({
                            hadAuthentication: !0,
                            sevenTip: !1,
                            loading: !1
                        }); else {
                            var i = t._checkUsefulCard(t.data.cardList), s = "";
                            i.length && i[0].cardId ? t.createTeam({
                                fName: n,
                                cid: i[0].cardId
                            }, function(e) {
                                a.createTeam = !0, (s = e && e.entId) && t.setData({
                                    entId: s
                                }), t.selectTemp(t.data.entId, t.data.chooselibraryId, function(a) {
                                    t.triggerEvent("confirmCompany", a);
                                });
                            }, function() {
                                t.setData({
                                    loading: !1
                                });
                            }) : t.createTeam({
                                fName: n
                            }, function(e) {
                                a.createTeam = !0, (s = e && e.entId) && t.setData({
                                    entId: s
                                }), t.selectTemp(t.data.entId, t.data.chooselibraryId, function(a) {
                                    t.triggerEvent("confirmCompany", a);
                                });
                            }, function() {
                                t.setData({
                                    loading: !1
                                });
                            });
                        }
                    }, function() {
                        t.setData({
                            loading: !1
                        });
                    }) : (e.testShowmodal(), t.setData({
                        contentTestFail: !0,
                        loading: !1
                    }));
                }, function() {
                    t.setData({
                        loading: !1
                    });
                });
            }
        },
        createTeam: function(t, e, n) {
            a.setRequest({
                url: "createTeam",
                method: "post",
                data: {
                    avatarUrl: a.touxiang.avatarUrl || "",
                    entName: t.fName,
                    nickName: a.touxiang.nickName || "",
                    openId: a.client.openid,
                    vcardId: t.cid || ""
                }
            }, function(t) {
                wx.setStorageSync("entId", t.entId), e && e(t);
            }, function() {
                n && n();
            }, function() {});
        },
        teamAttestation: function(t, e, n) {
            a.setRequest({
                url: "wxEntExpandCheckEntName",
                method: "POST",
                data: {
                    entName: t
                }
            }, function(t) {
                e && e(t);
            }, function() {
                n && n();
            });
        }
    }
});