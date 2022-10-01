var e = require("@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Base = void 0, require("@babel/runtime/helpers/Arrayincludes.js");

var a, t = e(require("@babel/runtime/helpers/classCallCheck.js")), r = e(require("@babel/runtime/helpers/createClass.js")), n = require("F672DA860691379C9014B281A112E9B3.js"), l = require("FFA36E830691379C99C506846003E9B3.js"), i = require("EFF23B930691379C899453941E33E9B3.js"), o = function() {
    function e() {
        (0, t.default)(this, e), this.urlName = n.Config.urlName, this.baseRequestUrl = n.Config.restUrl, 
        this.peopleRequestUrl = n.Config.restUrlPeople, this.specialUrl = n.Config.specialUrl, 
        this.experimentUrl = n.Config.experimentUrl, this.errLogUrl = n.Config.errLogUrl, 
        this.abTestUrl = n.Config.abTestUrl, this.restUrlEnt = n.Config.restUrlEnt, this.channelUrl = n.Config.channelUrl;
    }
    return (0, r.default)(e, [ {
        key: "getpUrlName",
        value: function(e) {
            return [ "checkPerson", "entMsgPage", "getEntMembers", "cardManagement", "entTplList", "cardHolder", "entSharePool", "cardHolderShare", "selectEntInfoById", "teamLog", "cardsList", "createTeam", "teamPopulation", "joinTeam", "quitTeam", "replaceTeamAdministrator", "createCardTeam", "judgeTeamContainOpenId", "wxEntExpandYaoqingDetail", "wxEntExpandCardMsgByIphone", "wxEntExpandEditorTeam", "wxEntExpandCheckEntName", "wxEntExpandBingdingWechat", "wxEntExpandDissolved", "wxEntExpandJudgeAdminHaveEntPage", "wxPreClaimedVcard", "wxClaimedVcard", "webGetIndustryNameById", "webIndustry", "webEntWebsiteAdd", "webEntWebsiteUpdate", "WxEntExpand/checkEntName", "webEntWebsiteFind", "webCheckEntAuth", "webEntWebsitePreviewLook", "wxLogin", "tplAddTuiJianTplFromWx", "tplGetlibraryByLid", "tplTplConfig", "tplTplLibrary", "tplGetTplList", "tplUpdateTpl", "cacheTplAndCardRenLing", "cacheClaimedVcard", "getPay", "andriodWxPay", "wxCardRenLingConfirm", "getEntMessage", "messageProcess", "buyOrderList", "receipt", "receiptCache", "getReceipt", "WxCardVcardPreview", "getrewardhistory", "companywebsiteEntHomePageBg", "tplWxtplConfig", "wxCardSelectByWebId", "wxCardSelectList", "wxCardInsertUsers", "wxCardUpdateUsers", "tEntInfoGainEntInfoMsg", "wxCardDelDeptUser" ].includes(e);
        }
    }, {
        key: "getChannelUrlName",
        value: function(e) {
            return [ "channelEntSellBindingSeller", "channelEntSellGetChannelName" ].includes(e);
        }
    }, {
        key: "urlConstructor",
        value: function(e) {
            return "changeCardImg" == e || "drawSvg" == e || "video" == e || "uploadAvatar" == e || "privateChatShareImage" == e || "baseSuggestion" == e || "miniWebsiteBackgroundImg" == e ? this.specialUrl + this.urlName[e] : this.getpUrlName(e) ? this.restUrlEnt + this.urlName[e] : this.getChannelUrlName(e) ? this.channelUrl + this.urlName[e] : this.baseRequestUrl + this.urlName[e];
        }
    }, {
        key: "request",
        value: function(e, t) {
            var r, l, i = this;
            a = getApp(), l = this.urlConstructor(e.url), e.extra && (l += e.extra), wx.request({
                url: l,
                data: e.data,
                method: e.method,
                header: {
                    "content-type": "application/json",
                    token: n.Config.token ? n.Config.token : a.client.token
                },
                success: function(n) {
                    a = getApp(), "200" == (r = n.data.status.toString()) ? (i.dataManage(e.url, n.data.data, e.extra), 
                    e.sCallback && e.sCallback(n.data.data)) : "401" == r ? (console.log("token失效，重新获取", l, a.client.token), 
                    t ? (e.fCallback && e.fCallback(n.data.data), i.netErrorTip(e.url)) : i._refetch(e, "request")) : "601" == r ? wx.redirectTo({
                        url: "/pages/update/update"
                    }) : (e.fCallback && e.fCallback(n.data.data), "base/suggestion" == i.urlName[e.url] && (n.errPara = e.data), 
                    i.sendErrLog(i.urlName[e.url], n), i.netErrorTip(e.url));
                },
                fail: function(t) {
                    console.log(i.urlName[e.url] + ":请求失败", t), e.fCallback && e.fCallback(t), a && a.errorLog(t, i.urlName[e.url], "fail"), 
                    i.netErrorTip(e.url);
                },
                complete: function(a) {
                    e.cCallback && e.cCallback(a.data ? a.data.data : {});
                }
            });
        }
    }, {
        key: "netErrorTip",
        value: function(e) {
            "stats" == e || "setUnion" == e || "mycardCount" == e || "bubble" == e || "userSystem" == e || "getUsersAvatarNickname" == e || "getAvatar" == e || "drawSvg" == e || "uploadAlbumImg" === e || "baseSuggestion" === e || wx.showToast({
                title: "网络异常,请稍后再试",
                icon: "none",
                duration: 3e3
            });
        }
    }, {
        key: "_refetch",
        value: function(e, a) {
            var t = this;
            new l.Token().getTokenFromServer(function() {
                a && "request" == a ? t.request(e, !0) : a && "upload" == a && t.upload(e, !0);
            });
        }
    }, {
        key: "upload",
        value: function(e, t) {
            var r, l, i = this;
            a = getApp(), l = this.urlConstructor(e.url);
            var o = wx.uploadFile({
                url: l,
                filePath: e.filePath,
                name: "file",
                header: {
                    "content-type": "application/json",
                    token: n.Config.token ? n.Config.token : a.client.token
                },
                formData: e.data,
                success: function(a) {
                    a = JSON.parse(a.data);
                    200 == (r = a.status.toString()) ? e.sCallback && e.sCallback(a.data) : 401 == r ? (console.log("token失效，重新请求"), 
                    t ? (e.fCallback && e.fCallback(a.data), wx.showToast({
                        title: "网络异常,请稍后再试",
                        icon: "none",
                        duration: 3e3
                    })) : i._refetch(e, "upload")) : (e.fCallback && e.fCallback(a.data), i.sendErrLog(i.urlName[e.url], a), 
                    wx.showToast({
                        title: "网络异常,请稍后再试",
                        icon: "none",
                        duration: 3e3
                    }));
                },
                fail: function(t) {
                    console.log(e.url + ":接口调用失败", t), e.fCallback && e.fCallback(t), wx.showToast({
                        title: "网络异常,请稍后再试",
                        icon: "none",
                        duration: 3e3
                    }), a && a.errorLog(t, i.urlName[e.url], "fail");
                },
                complete: function(a) {
                    a.data ? (a = JSON.parse(a.data), e.cCallback && e.cCallback(a.data)) : e.cCallback && e.cCallback({});
                }
            });
            try {
                o.onProgressUpdate && o.onProgressUpdate(function(e) {
                    a.onProgressUpld = e.progress;
                });
            } catch (e) {}
        }
    }, {
        key: "experimentRequest",
        value: function(e, a) {
            var t = this.experimentUrl + e.url;
            wx.request({
                url: t,
                data: e.data,
                header: {
                    user: "wyk",
                    password: "youknowforsearch"
                },
                method: e.method,
                success: function(a) {
                    e.sCallback && e.sCallback(a.data);
                },
                fail: function(a) {
                    e.fCallback && e.fCallback(a);
                },
                complete: function(a) {
                    e.cCallback && e.cCallback(a.data ? a.data.data : {});
                }
            });
        }
    }, {
        key: "errLog",
        value: function(e) {
            var t = this.errLogUrl;
            a = getApp(), wx.request({
                url: t,
                data: e.data,
                method: "POST",
                header: {
                    "content-type": "application/json",
                    token: n.Config.token ? n.Config.token : a.client.token
                }
            });
        }
    }, {
        key: "sendErrLog",
        value: function(e, t) {
            var r = JSON.stringify(t);
            r.indexOf("request:fail") >= 0 ? a && a.errorLog(r, e, "fail") : a && a.errorLog(r, e);
        }
    }, {
        key: "dataManage",
        value: function(e, a, t) {
            this.statusManage(e, a), this.setStorage(e, a, t);
        }
    }, {
        key: "setStorage",
        value: function(e, a, t) {
            if ("mycard" === e) try {
                var r = i.default.storageName;
                wx.setStorageSync(r, {
                    d: a
                });
            } catch (t) {}
            if ("cards" === e && !t) try {
                wx.setStorageSync("cardList", {
                    d: a
                });
            } catch (t) {}
            if ("getWxPhone" === e) try {
                wx.setStorageSync("currentDevicePhoneNumer", {
                    d: a
                });
            } catch (t) {}
        }
    }, {
        key: "statusManage",
        value: function(e, t) {
            "mycard" === e && (a.ifFresh.mycard = !1, a.mycard = t), "editCard" !== e && "switchCard" !== e && "editInvoice" !== e && "delInvoice" !== e && "deleteCard" !== e && "company" !== e && "isvisible" !== e && "fReceived" !== e && "createCard" !== e && "claimCard" !== e && "createTeam" !== e && "joinTeam" !== e && "quitTeam" !== e && "wxEntExpandDissolved" !== e && "webEntWebsiteAdd" !== e && "cacheClaimedVcard" !== e && "tplAddTuiJianTplFromWx" !== e && "tplUpdateTpl" !== e || (a.ifFresh.mycard = !0), 
            "getWxPhone" === e && a && (a.currentDevicePhoneNumer = t.phoneNumber);
        }
    } ]), e;
}();

exports.Base = o;