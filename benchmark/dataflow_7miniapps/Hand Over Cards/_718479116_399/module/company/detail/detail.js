var t = require("../../../@babel/runtime/helpers/interopRequireDefault"), e = t(require("../../../@babel/runtime/helpers/toConsumableArray")), a = t(require("../../../@babel/runtime/helpers/defineProperty")), n = t(require("../../../@babel/runtime/helpers/objectWithoutProperties"));

function i(t, e) {
    var a = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), a.push.apply(a, n);
    }
    return a;
}

var o = require("../../../7931C4950691379C1F57AC929AD2E9B3.js"), s = getApp();

Component({
    properties: {
        enterprisesData: {
            type: Object,
            value: {},
            observer: function(t) {
                t.entId && (s.setEditCardIsOverDue && 0 == t.entState && (s.setEditCardIsOverDue = !1, 
                this.setData({
                    showCardStyleDialog: !0
                })), this._updateData(t), this._initShowHotPay());
            }
        },
        preOpera: {
            type: String,
            value: "",
            observer: function(t) {}
        }
    },
    data: {
        systemInfo: s.systemInfo,
        webImgSource: s.source.card_img,
        coverBubbleTip: s.source.prefix + "img/companyManage/coverBubbleTip_20200817_2.png",
        fillStyleBubble_20200911: s.source.prefix + "img/companyManage/fillStyleBubble_20200911.png",
        companyPayBubble_20200911: s.source.prefix + "img/companyManage/companyPayBubble_20200911.png",
        companyPayBubble_ios_20200911: s.source.prefix + "img/companyManage/companyPayBubble_ios_20200911.png",
        tipInputDemo: s.source.prefix + "img/company/tipInputDemo_20201125.png",
        tipBatchDemo: s.source.prefix + "img/company/tipBatchDemo_20201125.png",
        tipInviteDemo: s.source.prefix + "img/company/popoverImg_20210112.jpg",
        serviceRestDay: -1,
        teamData: {},
        shareCardsData: {},
        chooseTeamData: {},
        matchCardList: [],
        teamLog: {},
        sheetShow: !1,
        teamEditShow: !1,
        modalShow: !1,
        dismissModalShow: !1,
        fillInformation: !1,
        currentDevicePhoneNumer: s.currentDevicePhoneNumer,
        vipDetailShow: !1,
        markLeft: "",
        markRight: "",
        topRight: !1,
        companyPayStatus: "",
        showXuqiDialog: !1,
        showCardStyleDialog: !1,
        showAttentionLockDialog: !1,
        showNotAttentionNotLockDialog: !1,
        showAttentionNotLockDialog: !1,
        showHotPay: !1,
        platform: s.systemInfo.platform && s.systemInfo.platform.toLowerCase(),
        tmpList: [],
        batchImportTipShow: !1,
        restDayTipShow: !1,
        freshNum: 0,
        inviteFirstClick: !0,
        inviteTipShow: !1
    },
    lifetimes: {
        attached: function() {
            try {
                wx.getStorageSync("company_inviteFirstClick") && this.setData({
                    inviteFirstClick: !1
                });
            } catch (t) {}
        }
    },
    pageLifetimes: {
        show: function() {
            this.setData({
                currentDevicePhoneNumer: s.currentDevicePhoneNumer,
                vipDetailShow: !1,
                markLeft: "",
                markRight: "",
                freshNum: new Date().getTime()
            });
        }
    },
    methods: {
        _updateData: function(t) {
            var e = this, a = t;
            this._teamLog(), this._companyState(a), this._teamDataFun(a, function(t) {
                t && (t.allMembersCount = t.membersCount + t.weiRenLingCard), e.setData({
                    teamData: t
                }), e._initTplStatus(a.entId), e._timeOut(t.runoutTime), e._timeDate(t.runoutTime), 
                e._restDayTip(t.entCreateTime), e._companyDataUpdate();
            }), this._shareCardsFun(a, function(t) {
                e.setData({
                    shareCardsData: t
                });
            }), t.joinTeam && this.data.fillInformation && this.setData({
                fillInformation: !1
            });
        },
        _companyState: function(t) {
            var e = "试用";
            0 == t.entState ? e = "到期" : 0 == t.experienceState ? e = "付费" : 10 == t.experienceState ? e = "试用" : 100 == t.experienceState ? e = "付费" : 110 == t.experienceState && (e = "试用"), 
            "付费" == e && s.burying.setSensorEvent(s, {
                CardType: "推荐有礼按钮展示"
            }, "CompanyViewScreen"), this.setData({
                companyPayStatus: e
            });
        },
        _getPhoneNumber: function(t) {
            var e = this, a = {};
            a = {
                entId: this.data.enterprisesData.entId,
                entName: this.data.enterprisesData.entName,
                phoneNumber: ""
            }, t.detail.iv && s.setRequest({
                url: "getWxPhone",
                data: {
                    iv: t.detail.iv,
                    encryptedData: t.detail.encryptedData
                }
            }, function(t) {
                e.setData({
                    currentDevicePhoneNumer: t.phoneNumber || ""
                }), a.phoneNumber = t.phoneNumber, t.phoneNumber && e._joinCardFun(a);
            }), s.burying.setPoint(s, 866);
        },
        _joinCard: function() {
            var t;
            t = {
                entId: this.data.enterprisesData.entId,
                entName: this.data.enterprisesData.entName,
                phoneNumber: this.data.currentDevicePhoneNumer
            }, this._joinCardFun(t), s.burying.setPoint(s, 866);
        },
        _joinCardFun: function(t) {
            var e = this;
            s.setRequest({
                url: "wxEntExpandCardMsgByIphone",
                data: {
                    iphone: t.phoneNumber,
                    entId: t.entId
                }
            }, function(a) {
                a.length ? (e.setData({
                    fillInformation: !0,
                    createOpenType: "fromTeam",
                    chooseTeamData: t,
                    matchCardList: a
                }), e.selectComponent("#cardInfor").showModal()) : e._cardListFun(function(a) {
                    e.setData({
                        fillInformation: !0,
                        createOpenType: "fromMicro",
                        chooseTeamData: t,
                        matchCardList: a || []
                    }), e.selectComponent("#cardInfor").showModal();
                });
            });
        },
        _closeWindow: function() {
            this.setData({
                fillInformation: !1
            });
        },
        _cardListFun: function(t) {
            s.setRequest({
                url: "cardsList",
                data: {
                    openId: s.client.openid
                }
            }, function(e) {
                t && t(e);
            });
        },
        _teamLog: function() {
            var t = this;
            s.setRequest({
                url: "teamLog",
                data: {
                    entId: this.data.enterprisesData.entId,
                    current: 1,
                    size: 50
                }
            }, function(e) {
                t.setData({
                    teamLog: e
                });
            });
        },
        _teamDataFun: function(t, e) {
            s.setRequest({
                url: "entMsgPage",
                method: "post",
                data: t
            }, function(t) {
                e && e(t);
            });
        },
        _timeOut: function(t) {
            var e = (Number(t) - new Date().getTime()) / 24 / 60 / 60 / 1e3;
            e = Math.ceil(e), this.setData({
                serviceRestDay: e
            });
        },
        _timeDate: function(t) {
            var e = Number(t);
            this.setData({
                serviceRestDate: this._dateFun(e)
            });
            var a = new Date(Number(t));
            a.setDate(a.getDate() + 1), this.setData({
                serviceNewDate: this._dateFun(a)
            });
        },
        _dateFun: function(t) {
            var e = new Date(t), a = e.getFullYear(), n = e.getMonth() + 1, i = e.getDate();
            return n < 10 && (n = "0" + n), i < 10 && (i = "0" + i), a + "-" + n + "-" + i;
        },
        _restDayTip: function(t) {
            var e, a, n = this.data.enterprisesData, i = n.entId, o = this.data.companyPayStatus, s = wx.getStorageSync("restDayTipShowStorage_" + i), r = Number(t), c = new Date().getTime();
            return a = this._dateFun(r), e = this._dateFun(c), 1 !== n.roleId ? (console.log("restDayTip.非超级管理员"), 
            !1) : "试用" !== o ? (console.log("restDayTip.非试用期"), !1) : a === e ? (console.log("restDayTip.当前创建"), 
            !1) : s && s.notShowAgain ? (console.log("restDayTip.用户点击了不再展示"), !1) : s && s[e] ? (console.log("restDayTip.当前展示过"), 
            !1) : (s || (s = {}), s[e] = !0, wx.setStorageSync("restDayTipShowStorage_" + i, s), 
            void this.setData({
                restDayTipShow: !0
            }));
        },
        _companyDataUpdate: function() {
            var t = {
                teamData: this.data.teamData,
                entId: this.data.enterprisesData.entId,
                entName: this.data.enterprisesData.entName,
                companyPayStatus: this.data.companyPayStatus,
                serviceRestDay: this.data.serviceRestDay,
                serviceRestDate: this.data.serviceRestDate,
                serviceNewDate: this.data.serviceNewDate
            };
            this.triggerEvent("company", t);
        },
        _shareCardsFun: function(t, e) {
            s.setRequest({
                url: "entSharePool",
                data: {
                    entId: t.entId,
                    openId: s.client.openid
                }
            }, function(t) {
                e && e(t.data[0] ? t.data[0].cards : []);
            });
        },
        _initShowHotPay: function() {
            !1 === wx.getStorageSync("showHotPay") ? this.setData({
                showHotPay: !1
            }) : this.setData({
                showHotPay: !0
            });
        },
        _serviceTap: function(t) {
            var e = this.data.serviceRestDate, a = this.data.serviceNewDate, n = t.currentTarget.dataset.use, i = this.data.companyPayStatus, o = this.data.serviceRestDay;
            "到期" == n ? s.burying.setPoint(s, 816) : "已付费续期" == n ? s.burying.setPoint(s, 926) : "试用" == n ? s.burying.setPoint(s, 817) : "剩余天数提醒" == n ? s.burying.setPoint(s, 974) : "微官网已锁定" == n ? s.burying.setPoint(s, 927) : "名片样式已锁定" == n ? s.burying.setPoint(s, 928) : "企业认证已锁定" == n && s.burying.setPoint(s, 930);
            try {
                wx.setStorageSync("showHotPay", !1);
            } catch (t) {}
            this.setData({
                showXuqiDialog: !1,
                showCardStyleDialog: !1,
                showAttentionLockDialog: !1,
                restDayTipShow: !1
            }), wx.navigateTo({
                url: "/pages/companyManage/servicePay/servicePay?company=".concat(encodeURIComponent(this.data.enterprisesData.entName), "&comStatus=").concat(i, "&restDate=").concat(e, "&newDate=").concat(a, "&entId=").concat(this.data.enterprisesData.entId, "&restDay=").concat(o)
            });
        },
        tplFun: function(t, e) {
            s.setRequest({
                url: "tplGetTplList",
                data: {
                    entId: t
                }
            }, function(t) {
                e && e(t);
            });
        },
        _initTplStatus: function(t) {
            var e = this;
            this.tplFun(t, function(t) {
                t && t.length ? (e.setData({
                    tmpList: t
                }), t.every(function(t) {
                    return 1 == t.tplType;
                }) ? e.setData({
                    finishFillStyle: !1
                }) : e.setData({
                    finishFillStyle: !0
                })) : e.setData({
                    finishFillStyle: !1
                });
            });
        },
        _batchProduction: function() {
            var t = this.data.enterprisesData, e = this.data.companyPayStatus, a = this.data.serviceRestDate, n = this.data.serviceNewDate, i = this.data.serviceRestDay;
            if (s.burying.setPoint(s, 584), "到期" == e) this.setData({
                showCardStyleDialog: !0
            }); else {
                if (this.data.styleClick = !0, !t.entId) return;
                wx.navigateTo({
                    url: "/pages/companyManage/configurationStyle/configurationStyle?entId=" + t.entId + "&roleId=" + t.roleId + "&comStatus=" + e + "&restDate=" + a + "&newDate=" + n + "&restDay=" + i
                });
            }
        },
        _cureteam: function() {
            var t = this.data.enterprisesData;
            wx.navigateTo({
                url: "/pages/companyManage/coreTeam/coreTeam?upgrade=" + t.entState + "&admin=" + t.isAdmin + "&entId=" + t.entId
            }), s.burying.setPoint(s, 420);
        },
        _inviteFirstClick: function() {
            s.burying.setPoint(s, 965), this.setData({
                inviteTipShow: !0
            }), wx.setStorageSync("company_inviteFirstClick", !0);
        },
        _inviteRightNow: function() {
            s.burying.setPoint(s, 1040), this.setData({
                inviteFirstClick: !1,
                inviteTipShow: !1
            });
        },
        _shareBurying: function() {
            this._fontColorFun(), s.burying.setPoint(s, 965);
        },
        _miniWeb: function() {
            var t = this.data.enterprisesData, e = this.data.companyPayStatus, a = this.data.serviceRestDate, n = this.data.serviceNewDate, i = this.data.serviceRestDay;
            "到期" == this.data.companyPayStatus ? this.setData({
                showXuqiDialog: !0
            }) : wx.navigateTo({
                url: "/pages/companyManage/miniWeb/miniWeb?main=company&entId=" + t.entId + "&comStatus=" + e + "&restDate=" + a + "&newDate=" + n + "&restDay=" + i
            }), s.burying.setPoint(s, 818);
        },
        _shareCardlibrary: function() {
            this.data.shareCardsClick = !0, wx.navigateTo({
                url: "/pages/companyManage/shareCardlibrary/shareCardlibrary?entId=" + this.data.enterprisesData.entId
            }), s.burying.setPoint(s, 419);
        },
        _viewall: function() {
            wx.navigateTo({
                url: "/pages/companyManage/dynamicList/dynamicList"
            }), s.burying.setPoint(s, 585);
        },
        _buyRecords: function() {
            s.burying.setPoint(s, 944);
            var t = this.data.enterprisesData.entId;
            wx.navigateTo({
                url: "/pages/companyManage/buyRecords/buyRecords?entId=".concat(t)
            });
        },
        _setting: function() {
            s.burying.setPoint(s, 828);
            var t = this.data.enterprisesData, e = [ t.isAdmin, t.entState, t.entId, t.entName ], a = e[0], n = e[1], i = e[2], o = e[3];
            wx.navigateTo({
                url: "/pages/companyManage/teamSetting/teamSetting?isAdmin=".concat(a, "&entState=").concat(n, "&entId=").concat(i, "&entName=").concat(encodeURIComponent(o))
            });
        },
        _shareGift: function() {
            s.burying.setPoint(s, 955);
            var t = this.data.enterprisesData, e = this.data.teamData;
            console.log("teamData", e);
            var o = [ t.isAdmin, t.entState, t.entId, t.entName ], r = o[0], c = o[1], u = o[2], p = o[3], h = function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? i(Object(n), !0).forEach(function(e) {
                        (0, a.default)(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }({}, e), d = h.serialCode;
            (0, n.default)(h, [ "serialCode" ]);
            wx.navigateTo({
                url: "/pages/companyManage/waitGiftshare/waitGiftshare?serialCode=".concat(d, "&isAdmin=").concat(r, "&entState=").concat(c, "&entId=").concat(u, "&entName=").concat(encodeURIComponent(p), "&pageFrom=company")
            });
        },
        _teamInfo: function() {
            this.setData({
                fillInformation: !1
            }), o.showtoast("名片已添加", "success", 2e3), this.triggerEvent("addCardtoCompany");
        },
        _coverTouch: function() {
            this._fontColorFun();
        },
        _fontColorFun: function() {
            try {
                wx.setNavigationBarColor({
                    frontColor: "#ffffff",
                    backgroundColor: "#000000"
                });
            } catch (t) {}
        },
        _attestationDetail: function() {
            s.burying.setPoint(s, 921), this.setData({
                showAttentionNotLockDialog: !0
            });
        },
        _attestationDetailReturn: function() {
            this.setData({
                showAttentionNotLockDialog: !1
            });
        },
        _attestationIntro: function() {
            s.burying.setPoint(s, 921), this.setData({
                showNotAttentionNotLockDialog: !0
            });
        },
        _attestationIntroKnown: function() {
            s.burying.setPoint(s, 929), this.setData({
                showNotAttentionNotLockDialog: !1
            });
        },
        _attestationLock: function() {
            s.burying.setPoint(s, 921), this.setData({
                showAttentionLockDialog: !0
            });
        },
        _toEdit: function() {
            s.burying.setPoint(s, 920);
            var t = this.data.teamData, a = this.data.enterprisesData, n = this.data.tmpList, i = "";
            try {
                var o = (0, e.default)(n.filter(function(e) {
                    if (e.tplId == t.tplId) return e;
                })), r = o[0];
                o.slice(1);
                i = r.deptId ? r.deptId : "", wx.navigateTo({
                    url: "/pages/mainPage/cardMain/cardTempEdit/cardTempEdit?id=".concat(t.vcardId, "&formtoken=").concat(t.formtoken, "&main=company&deptId=").concat(i, "&useNumb=").concat(r.useNumb, "&entName=").concat(a.entName, "&entId=").concat(a.entId, "&adminOpenId=").concat(a.adminOpenId, "&entState=").concat(a.entState)
                });
            } catch (t) {}
        },
        _closePanel: function(t) {
            var e = t.currentTarget.dataset.type;
            console.log("close"), this.setData((0, a.default)({}, e, !1));
        },
        _manualInput: function() {
            s.burying.setPoint(s, 966);
            var t = this.data.enterprisesData, e = t.entId, a = this.data.companyPayStatus, n = t.entName;
            0 != t.roleId ? wx.navigateTo({
                url: "/pages/companyManage/cardInformationForm/cardInformationForm?entId=" + e + "&comStatus=" + a + "&entName=" + n
            }) : o.showtoast("需要管理员权限", "none", 1500);
        },
        _manualInputKnown: function() {
            s.burying.setPoint(s, 968);
        },
        _batchImport: function() {
            s.burying.setPoint(s, 967), this.setData({
                batchImportTipShow: !0
            });
        },
        _batchImportKnown: function() {
            s.burying.setPoint(s, 969), this.setData({
                batchImportTipShow: !1
            });
        },
        _closeRestDayTip: function() {
            s.burying.setPoint(s, 975), this.setData({
                restDayTipShow: !1
            });
            var t = this.data.enterprisesData.entId;
            wx.setStorageSync("restDayTipShowStorage_" + t, {
                notShowAgain: !0
            });
        }
    }
});