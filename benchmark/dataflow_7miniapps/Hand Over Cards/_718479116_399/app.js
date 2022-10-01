var e = require("@babel/runtime/helpers/interopRequireDefault"), t = e(require("@babel/runtime/regenerator")), n = e(require("@babel/runtime/helpers/asyncToGenerator")), o = e(require("@babel/runtime/helpers/defineProperty")), i = require("B42641850691379CD24029824472E9B3.js"), r = require("AFC697330691379CC9A0FF345133E9B3.js"), s = require("0A9110B00691379C6CF778B785F1E9B3.js"), a = require("2F6820160691379C490E481118C1E9B3.js"), c = require("6FA238F50691379C09C450F23971E9B3.js"), u = (require("F672DA860691379C9014B281A112E9B3.js"), 
require("5F520E160691379C39346611585FD9B3.js")), l = require("0FCFE5370691379C69A98D303082E9B3.js"), f = require("6D9187820691379C0BF7EF857DE2E9B3.js"), m = new i.InitApp(), p = require("16DB1B540691379C70BD7353AC82E9B3.js"), g = (require("7931C4950691379C1F57AC929AD2E9B3.js"), 
new s.Burying()), d = new r.wxRequest(), h = require("4246C9C10691379C2420A1C6C162E9B3.js");

h("init", "a", "appid", {
    version: "1.0",
    forceLogin: !0,
    debug: !1
});

var y = require("BF1815870691379CD97E7D80F561E9B3.js"), v = require("18247BC40691379C7E4213C35481E9B3.js");

y.setPara(v);

var k, C = require("9E9DC1C00691379CF8FBA9C727F2E9B3.js");

App({
    appEnvironment: u.default,
    client: m.storageManage("client"),
    source: l.data.source,
    ifFresh: {
        token: !0,
        mycard: !0
    },
    config: {
        restUrl: ""
    },
    burying: g,
    mycard: m.storageManage("mycard"),
    touxiang: m.storageManage("touxiang"),
    systemInfo: {},
    compatibleManage: m.compatible(),
    temporaryData: f.data,
    clientScene: "0",
    netMark: {
        token: !0,
        netWorkType: "wifi"
    },
    enterprisesData: "",
    inviteTeamGuidePage: !1,
    previewPcprompt: !1,
    upEnterpriseInfor: !1,
    showVideo: !1,
    gloabelOptions: "",
    testNum: "",
    testNum19: "A",
    teamScrollTop: !1,
    hasCropCard: !1,
    cardShade: "",
    rsListObj: {
        delCardInfo: [],
        ifFresh: !1,
        beforeData: [],
        rsListData: [],
        currentPage: 1,
        pages: 1
    },
    cardReceiveMask: !1,
    sendUserName: "",
    addinvoice: !1,
    ifFirstClick: !1,
    taskName: [],
    buildCardClick: !1,
    autoJumpIknow: !0,
    currentWallType: "showCardwallListbyPerson",
    finishBuildFromStickCard: !1,
    finishDelFromStickCard: !1,
    currentDevicePhoneNumer: m.storageManage("currentDevicePhoneNumer"),
    userMaxCardNum: 100,
    refreshCardStatus: !1,
    lookEpiration: !0,
    createTeam: !1,
    setEditCardIsOverDue: !1,
    onLaunch: function(e) {
        var t = this;
        console.log("app.onlaunch", e), console.log("环境", this.appEnvironment.env), this.gloabelOptions = e, 
        this.setToken(function() {
            t.getSettingMessage(), h("identify", t.client.openid, "unionid"), y.setOpenid(t.client.openid), 
            y.init(), t.sensors = y, e && t.sensors.setOnceProfile({
                Source: e.scene,
                Path: e.path,
                WeChatVersion: t.systemInfo.version,
                WeChatSdkVersion: t.systemInfo.SDKVersion,
                Query: Object.keys(e.query).map(function(t) {
                    return "".concat(t, "=").concat(e.query[t]);
                }).join("&")
            }), new a.Abtest(d, t.token, t.sensors, t.gloabelOptions).setABTest(function(e) {
                t.testNum19 = e.ABT_0019, t.testNum19 && t.employTestNumCallback && (t.employTestNumCallback(t.testNum19), 
                t.employTestNumCallback = null);
            });
        }), this.systemInfoFunc(), this.shareticket(e), this.accountInfoFunc();
        try {
            wx.removeStorageSync("checkPersonRequest");
        } catch (e) {}
    },
    onShow: function(e) {
        console.log("app.onshow", e, this.touxiang), this.gloabelOptions = e, this.shareticket(e), 
        this.temporaryData.edit.template.onshow = !1, this.sensors.setOnceProfile((0, o.default)({}, "visit_".concat(new Date().getFullYear(), "_").concat(new Date().getMonth() + 1, "_").concat(new Date().getDate()), this.gloabelOptions.scene));
    },
    onHide: function() {
        var e = this;
        console.log("app.onhide"), this.tokenGet(function() {
            e.sensors.setOnceProfile({
                $first_visit_time: new Date()
            });
        });
    },
    timeLogFun: function(e) {
        var t = e.type;
        C[t] = e.data, console.log("tim", C);
    },
    getMinicardConfig: function(e) {
        wx.request({
            url: "https://img-1255379270.cosbj.myqcloud.com/file/minicardConfig_test.json",
            method: "GET",
            success: function(t) {
                e && e(t.data);
            },
            fail: function() {
                e && e({});
            }
        });
    },
    contentTestFun: function(e, t, n, o) {
        d.requestUrl({
            url: "sensitiveWordsTesting",
            method: "POST",
            header: {
                token: this.client.token
            },
            data: e
        }, function(e) {
            t && t(e);
        }, function() {
            n && n();
        }, function() {
            o && o();
        });
    },
    setToken: function(e) {
        this.ifFresh.token = !1, this.client.token = "", m.setToken(function() {
            e && e();
        });
    },
    photoIdentyFun: function(e, t, n) {
        d.upldUrl({
            url: "imgSecCheck",
            data: {},
            method: "POST",
            header: {
                token: this.client.token
            },
            filePath: e
        }, function(e) {
            t && t(e);
        }, function(e) {
            n && n(e);
        });
    },
    setAsyncRequest: function(e) {
        return new Promise(function(t, n) {
            m.setRequest(e, t, n, null);
        });
    },
    setRequest: function(e, t, n, o) {
        m.setRequest(e, t, n, o);
    },
    setPromiseRequest: (k = (0, n.default)(t.default.mark(function e(n) {
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, m.setPromiseRequest(n);

              case 2:
                return e.abrupt("return", e.sent);

              case 3:
              case "end":
                return e.stop();
            }
        }, e);
    })), function(e) {
        return k.apply(this, arguments);
    }),
    setUpldFile: function(e, t, n, o) {
        m.setUpldFile(e, t, n, o);
    },
    setExperiment: function(e, t, n, o) {
        m.setExperiment(e, t, n, o);
    },
    tokenGet: function(e, t) {
        m.tokenGet(function() {
            e && e();
        }, function() {
            t && t();
        });
    },
    systemInfoFunc: function() {
        var e = this;
        m.systemInfoGet(function(t, n) {
            e.systemInfo = t, console.log("systemInfo", t);
        }), m.systemInfoMenuButton(function(t) {
            t.height && (e.systemInfo.menuButton = t);
        });
    },
    accountInfoFunc: function() {
        try {
            console.log("getAccountInfoSync", wx.getAccountInfoSync());
        } catch (e) {}
    },
    gioCustome: function(e) {
        var t, n = getCurrentPages();
        t = {
            title: e.v ? p.data[e.t] + e.v : p.data[e.t],
            page: n[n.length - 1].route,
            platform: this.systemInfo.platform
        }, h("setEvar", t);
    },
    shareticket: function(e) {
        console.log("shareTicket", e), e && e.shareTicket ? this.temporaryData.landingPage.shareTicket = e.shareTicket : this.temporaryData.landingPage.shareTicket = 0, 
        this.clientScene = e ? e.scene : "0";
    },
    formidSend: function(e) {
        m.formidSend(e);
    },
    setProfile: function(e) {
        y.setProfile({
            NickName: e.nickName,
            Sex: e.gender,
            UserCountry: e.country,
            Userprovince: e.province,
            UserCity: e.city,
            UserLanguage: e.language
        });
    },
    setUnion: function(e, t, n, o) {
        var i = this;
        if (m.setUnion(e, function(e) {
            i.sensors.setOnceProfile({
                UnionID: e
            }), t && t();
        }, function() {
            n && n();
        }, function() {
            o && o();
        }), e.userInfo) {
            this.setProfile(e.userInfo);
            try {
                wx.setStorageSync("touxiang", {
                    d: e.userInfo
                });
            } catch (e) {}
            this.touxiang = e.userInfo, console.log("app.setUnion", e);
        }
    },
    sensorsData: function(e) {
        var t = this, n = new c.SensorSetting()[e.event](e.params);
        this.tokenGet(function() {
            t.sensors.track(e.event, n);
        });
    },
    getSettingMessage: function(e) {
        m.getSettingMessage(function(t) {
            e && e(t);
        });
    },
    getShareCardImgUrl: function(e, t) {
        var n = {
            name: e.name || "",
            company: e.company || "",
            job: e.job || "",
            userpic: e.userpic && e.userpic.name || e.userpic,
            isCertified: !!e.certified && !!e.certified.isCertified,
            avatarUrl: e.customAvatar && e.customAvatar.name ? e.customAvatar.url : this.touxiang.avatarUrl
        };
        console.log("".concat(this.source.sharePrefix_776, "?name=").concat(encodeURIComponent(n.name), "&company=").concat(encodeURIComponent(n.company), "&job=").concat(encodeURIComponent(n.job), "&userpic=").concat(n.userpic, "&isCertified=").concat(n.isCertified, "&avatarUrl=").concat(n.avatarUrl));
        var o = "".concat(this.source.sharePrefix_776, "?name=").concat(encodeURIComponent(n.name), "&company=").concat(encodeURIComponent(n.company), "&job=").concat(encodeURIComponent(n.job), "&userpic=").concat(n.userpic, "&isCertified=").concat(n.isCertified, "&avatarUrl=").concat(n.avatarUrl);
        return o = o + "?m=" + new Date().getTime();
    },
    getCardType: function(e) {
        console.log("card", e);
        var t = "NewTemp" == e.modelIndex.type && "TKWhite-NewEmpty" == e.modelIndex.value ? "默认型" : "SimpleTemp" == e.modelIndex.type ? "非默认极简型" : "非默认非极简型";
        return console.log(t), {
            cardType: t
        };
    },
    getShareTitle: function(e) {
        return "我是".concat(e.name, "，邀请您与我交换名片");
    },
    onError: function(e) {
        this.errorLog(e, "onError");
    },
    errorLog: function(e, t, n) {
        var o = this;
        if (console.warn("报错啦", e, t, n), "dev" == this.appEnvironment.env || "test" == this.appEnvironment.env) return 0;
        this.tokenGet(function() {
            m.errorLog(e, t, n + "--" + o.appEnvironment.env);
        });
    }
});