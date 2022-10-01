var e = require("@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.InitApp = void 0;

var t = e(require("@babel/runtime/helpers/classCallCheck.js")), n = e(require("@babel/runtime/helpers/createClass.js")), o = require("FFA36E830691379C99C506846003E9B3.js"), r = new (require("AFC697330691379CC9A0FF345133E9B3.js").wxRequest)(), i = require("EFF23B930691379C899453941E33E9B3.js"), a = {}, u = function() {
    function e() {
        (0, t.default)(this, e);
    }
    return (0, n.default)(e, [ {
        key: "compatible",
        value: function() {
            var e = {};
            try {
                e.shareMenu = wx.canIUse("showShareMenu") && wx.canIUse("hideShareMenu");
            } catch (t) {
                e.shareMenu = !1;
            }
            try {
                e.clipboardData = wx.canIUse("setClipboardData");
            } catch (t) {
                e.clipboardData = !1;
            }
            try {
                e.phoneContact = wx.canIUse("addPhoneContact");
            } catch (t) {
                e.phoneContact = !1;
            }
            try {
                e.openContact = wx.canIUse("button.open-type.contact");
            } catch (t) {
                e.openContact = !1;
            }
            try {
                e.openShare = wx.canIUse("button.open-type.share");
            } catch (t) {
                e.openShare = !1;
            }
            try {
                e.openGetUserInfo = wx.canIUse("button.open-type.getUserInfo");
            } catch (t) {
                e.openGetUserInfo = !1;
            }
            try {
                e.navigationBarLoading = wx.canIUse("showNavigationBarLoading");
            } catch (t) {
                e.navigationBarLoading = !1;
            }
            try {
                e.setBackgroundColor = wx.canIUse("setBackgroundColor");
            } catch (t) {
                e.setBackgroundColor = !1;
            }
            try {
                e.openGetPhoneNumber = wx.canIUse("button.open-type.getPhoneNumber");
            } catch (t) {
                e.openGetPhoneNumber = !1;
            }
            return e;
        }
    }, {
        key: "sdkJudge",
        value: function(e, t) {
            for (var n = e.split("."), o = t.split("."); o.length < n.length; ) o.push("0");
            for (;o.length > n.length; ) n.push("0");
            for (var r = 0; r < n.length; r++) {
                var i = parseInt(o[r]), a = parseInt(n[r]);
                if (i > a) return !1;
                if (i < a) return !0;
            }
            return !0;
        }
    }, {
        key: "modelJustify",
        value: function(e) {
            var t = !1;
            return e.indexOf("iPhone X") >= 0 && (t = !0), t;
        }
    }, {
        key: "modelJustifyXS",
        value: function(e) {
            var t = !1;
            return e.indexOf("iPhone XS Max") >= 0 && (t = !0), t;
        }
    }, {
        key: "storageManage",
        value: function(e) {
            var t, n;
            switch (e) {
              case "client":
                t = {
                    openid: "",
                    token: "",
                    message: ""
                };
                try {
                    wx.getStorageSync && (n = wx.getStorageSync("client")) && n.openid && (t = n);
                } catch (e) {
                    console.log("拿取客户端信息缓存异常");
                }
                break;

              case "mycard":
                t = {
                    defCard: "",
                    list: [],
                    pic_prefix: "",
                    tempA: [],
                    tempB: [],
                    tempC: []
                };
                try {
                    if (wx.getStorageSync) {
                        var o = i.default.storageName;
                        n = wx.getStorageSync(o), console.log("inidata", n, o), n && Object.keys(n).length > 0 && (t = n.d);
                    }
                } catch (e) {
                    console.log("拿取名片信息异常");
                }
                break;

              case "touxiang":
                t = "";
                try {
                    wx.getStorageSync && (n = wx.getStorageSync("touxiang")) && Object.keys(n).length > 0 && (t = n.d);
                } catch (e) {
                    console.log("拿取头像信息异常");
                }
                break;

              case "currentDevicePhoneNumer":
                t = "";
                try {
                    wx.getStorageSync && (n = wx.getStorageSync("currentDevicePhoneNumer")) && n.d && n.d.phoneNumber && (t = n.d.phoneNumber);
                } catch (e) {}
            }
            return t;
        }
    }, {
        key: "systemInfoGet",
        value: function(e) {
            var t = {}, n = {};
            (t = n = wx.getSystemInfoSync()).shiftX = 2, n.SDKVersion ? t["1.6.3"] = this.sdkJudge(n.SDKVersion, "1.6.3") : t["1.6.3"] = !1, 
            n.SDKVersion ? t["1.7.1"] = this.sdkJudge(n.SDKVersion, "1.7.1") : t["1.7.1"] = !1, 
            n.SDKVersion ? t["2.3.0"] = this.sdkJudge(n.SDKVersion, "2.3.0") : t["2.3.0"] = !1, 
            n.SDKVersion ? t["2.7.0"] = this.sdkJudge(n.SDKVersion, "2.7.0") : t["2.7.0"] = !1, 
            n.version ? t["v6.7.1"] = this.sdkJudge(n.version, "6.7.1") : t["v6.7.1"] = !1, 
            n.version ? t["v7.0.0"] = this.sdkJudge(n.version, "7.0.0") : t["v7.0.0"] = !1, 
            n.platform && "devtools" == n.platform && (t["v7.0.0"] = !0), n.model ? t.modelX = this.modelJustify(n.model) : t.modelX = !1, 
            n.model ? t.modelXS = this.modelJustifyXS(n.model) : t.modelXS = !1, n.windowWidth && 0 != n.windowWidth ? t.shiftX = 750 / n.windowWidth : t.shiftX = 2, 
            n.pixelRatio ? t.ratioX = n.pixelRatio : t.ratioX = t.shiftX, n.menuButton = {
                height: 32,
                top: 26
            }, (t.modelXS || t.modelX) && (n.menuButton = {
                height: 40,
                top: 40
            }), e && e(t, n);
        }
    }, {
        key: "systemInfoMenuButton",
        value: function(e) {
            var t = {};
            try {
                if (wx.getMenuButtonBoundingClientRect) {
                    var n = wx.getMenuButtonBoundingClientRect();
                    n && n.height > 0 && (t = n);
                }
            } catch (e) {}
            e && e(t);
        }
    }, {
        key: "formidSend",
        value: function(e) {}
    }, {
        key: "setUnion",
        value: function(e, t, n, o) {
            r.requestUrl({
                url: "setUnion",
                method: "POST",
                data: {
                    iv: e.iv,
                    encryptedData: e.encryptedData
                }
            }, function(e) {
                console.log("setUnion.succ", e), t && t(e.unionId);
            }, function(e) {
                n && n(e);
            }, function(e) {
                o && o(e);
            });
        }
    }, {
        key: "setToken",
        value: function(e) {
            new o.Token().getTokenFromServer(function() {
                e && e();
            });
        }
    }, {
        key: "tokenGet",
        value: function(e, t) {
            var n = getApp();
            if (n.client.token) e && e(); else if (n.ifFresh.token) {
                console.log("不存在token，去请求token"), n.ifFresh.token = !1, new o.Token().getTokenFromServer(function() {
                    e && e();
                }, function() {
                    t && t();
                });
            } else {
                console.log("不存在token，等待token");
                var r = setInterval(function() {
                    n.client.token ? (console.log("等待token成功，清除时间戳"), clearInterval(r), e && e()) : !n.netMark.token && t && (console.log("等待token失败，清除时间戳，进行失败回调"), 
                    clearInterval(r), t());
                }, 300);
            }
        }
    }, {
        key: "setRequest",
        value: function(e, t, n, o) {
            this.tokenGet(function() {
                r.requestUrl(e, function(e) {
                    t && t(e);
                }, function(e) {
                    n && n();
                }, function(e) {
                    o && o(e);
                });
            }, function() {
                n && n({});
            });
        }
    }, {
        key: "setPromiseRequest",
        value: function(e) {
            var t = this;
            return new Promise(function(n, o) {
                t.tokenGet(function() {
                    r.requestUrl(e, function(e) {
                        n && n(e);
                    }, function(e) {
                        o && o();
                    }, function(e) {
                        n && n(e);
                    });
                }, function() {
                    o && o({});
                });
            });
        }
    }, {
        key: "setUpldFile",
        value: function(e, t, n, o) {
            r.upldUrl(e, function(e) {
                t && t(e);
            }, function(e) {
                n && n(e);
            }, function(e) {
                o && o(e);
            });
        }
    }, {
        key: "setExperiment",
        value: function(e, t, n, o) {
            this.tokenGet(function() {
                r.experiment(e, function(e) {
                    t && t(e);
                }, function(e) {
                    n && n(e);
                }, function(e) {
                    o && o(e);
                });
            }, function() {
                n && n({});
            });
        }
    }, {
        key: "getSettingMessage",
        value: function(e) {
            var t = getApp();
            try {
                t.getSettingUserInfo ? e && e({
                    u: !0
                }) : wx.getSetting ? wx.getSetting({
                    success: function(e) {
                        e.authSetting["scope.userInfo"] && wx.getUserInfo({
                            success: function(e) {
                                console.log("wx.getUserInfo.succ", e), t.touxiang = e.userInfo, t.getSettingUserInfo = !0;
                                try {
                                    wx.setStorageSync("touxiang", {
                                        d: e.userInfo
                                    });
                                } catch (e) {}
                            }
                        });
                    },
                    complete: function(t) {
                        t.authSetting && t.authSetting["scope.userInfo"] ? e && e({
                            u: !0
                        }) : e && e({
                            u: !1
                        });
                    }
                }) : e && e({
                    u: !0
                });
            } catch (t) {
                e && e({
                    u: !1
                });
            }
        }
    }, {
        key: "logFun",
        value: function() {
            function e(e) {
                return e < 10 ? "0" + e : e;
            }
            return new Date().getFullYear() + "-" + e(new Date().getMonth() + 1) + "-" + e(new Date().getDate()) + " " + e(new Date().getHours()) + ":" + e(new Date().getMinutes()) + ":" + e(new Date().getSeconds());
        }
    }, {
        key: "errorLog",
        value: function(e, t, n) {
            var o, i = "", u = JSON.stringify(e), s = getCurrentPages(), c = getApp(), l = this.logFun();
            if (a[u]) {
                if (a[u] >= 5 || u.indexOf("Maximum call stack size exceeded") >= 0 && a[u] > 1) return 0;
                a[u]++;
            } else a[u] = 1;
            if (u) try {
                u.match("request:fail") && (u = "request:fail"), u.match("uploadFile:fail") && (u = "uploadFile:fail");
            } catch (e) {}
            s[s.length - 1] && (i = s[s.length - 1].route), o = {
                openid: c.client.openid,
                errmsg: u,
                platform: c.systemInfo.platform,
                wxversion: c.systemInfo.version,
                page: i,
                system: JSON.stringify(c.systemInfo),
                client_time: l,
                mark: n || "",
                api: t || ""
            }, r.errLogFun(o);
        }
    } ]), e;
}();

exports.InitApp = u;