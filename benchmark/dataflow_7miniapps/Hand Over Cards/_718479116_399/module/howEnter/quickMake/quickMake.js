var t, a = require("../../../BD93AC350691379CDBF5C4320700E9B3.js"), e = getApp(), n = new a.EditMini(), i = require("../../../7931C4950691379C1F57AC929AD2E9B3.js"), o = !1;

Component({
    properties: {
        myMessage: {
            type: Object,
            value: {}
        },
        testNum: {
            type: String,
            value: "",
            observer: function(t, a) {}
        },
        placeholderWarning: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        anonymous: e.source.anonymous,
        formData: n.pickFormData([ "name", "job", "company", "mophone1", "wechat", "addr1", "email1" ]),
        saveCommit: {
            loading: !1
        },
        intro: "",
        introNum: 0,
        phoneTip: "快速获取",
        introShow: !1,
        arrow: {
            ani: ""
        },
        quickBuild: {
            animationName: ""
        },
        sendUserName: "",
        getSettingMessage: !1,
        toAddr: !1,
        navigateFrom: "",
        nameFocus: !1
    },
    lifetimes: {
        attached: function() {
            console.log("formData", this.data.formData);
            this.setData({
                "quickBuild.animationName": "toUp"
            }), this.getUserSetting();
            try {
                if ((t = wx.getStorageSync("quickMakeStorage")).val) {
                    for (var a = 0; a < t.val.length; a++) t.val[a][6] = !1;
                    this.setData({
                        formData: t.val
                    });
                }
            } catch (t) {}
        }
    },
    pageLifetimes: {
        show: function() {
            if (console.log("quickMakeShow", wx.getStorageSync("quickMakeStorage")), (t = wx.getStorageSync("quickMakeStorage")).val) {
                for (var a = 0; a < t.val.length; a++) t.val[a][6] = !1;
                this.setData({
                    formData: t.val
                });
            }
            this.setData({
                sendUserName: e.sendUserName
            });
        }
    },
    methods: {
        _ss: function() {},
        _closeQuick: function() {
            this.setData({
                "quickBuild.animationName": "toDown"
            }), this.triggerEvent("closeQuick");
        },
        _input: function(t) {
            var a = t.currentTarget.dataset.index, e = this.data.formData;
            this.data.formData[a][2] = t.detail.value, 2 == e[a][4].secure && (e[a][4].secure = 3, 
            this.setData({
                formData: e
            })), this._huancunFun();
        },
        _focus: function(t) {
            var a = t.currentTarget.dataset.index, n = t.currentTarget.dataset.name;
            switch ("name" == this.data.formData["".concat(a)][0] && (this.setData({
                nameFocus: !0
            }), o = !0, console.log("nameFocus", this.data.nameFocus)), n) {
              case "name":
                e.burying.setPoint(e, 236);
                break;

              case "company":
                e.burying.setPoint(e, 238);
                break;

              case "job":
                e.burying.setPoint(e, 237);
                break;

              case "mophone1":
                e.burying.setPoint(e, 239);
                break;

              case "wechat":
                e.burying.setPoint(e, 240);
                break;

              case "email1":
                e.burying.setPoint(e, 242);
            }
        },
        _blur: function(t) {
            var a = t.currentTarget.dataset.index, e = {};
            e["".concat("formData[" + a + "]", "[2]")] = t.detail.value, this.setData(e), this._huancunFun();
        },
        _openQuick: function(t) {
            "toUp" == this.data.quickBuild.animationName ? (e.burying.setPoint(e, 235), this.setData({
                "quickBuild.animationName": "toDown"
            })) : this.setData({
                "quickBuild.animationName": "toUp"
            });
        },
        _huancunFun: function() {
            try {
                wx.setStorageSync("quickMakeStorage", {
                    val: this.data.formData
                });
            } catch (t) {}
        },
        _toCheckForm: function(t) {
            var a = this.data.formData;
            console.log(a, e.touxiang);
            for (var n = !0, i = 0; i < a.length; i++) "name" != a[i][0] && "company" != a[i][0] && "job" != a[i][0] || (o || "name" != a[i][0] || Boolean(a[i][2]) && a[i][2].trim().length || (a[i][2] = e.touxiang.nickName), 
            Boolean(a[i][2]) && a[i][2].trim().length > 0 ? a[i][4].placeholder = 1 : (a[i][2] = "", 
            a[i][4].placeholder = 2, n = !1));
            this.setData({
                formData: a
            }), t && t(n);
        },
        _sensorClick: function() {
            e.burying.setPoint(e, 888);
        },
        setUnessShow: function(t) {
            var a = this;
            [ "mophone1", "wechat", "email1", "addr1" ].forEach(function(e) {
                t[e] && (a.data.serverData.showconfig.configShow[e] = !0);
            });
        },
        _submitAdd: function(t) {
            var a = this, o = this.data.formData;
            if (t && t.detail && console.log(t && t.detail), !this.data.getSettingMessage) return 0;
            this.data.saveCommit.loading || (console.log(this.data.getSettingMessage, this.data.saveCommit.loading), 
            this._toCheckForm(function(t) {
                if (t) {
                    i.showtoast("提交中...", "loading", 8e3), a.setData({
                        saveCommit: {
                            loading: !0
                        }
                    });
                    for (var s = [], r = 0; r < o.length; r++) s.push(o[r][2]);
                    e.contentTestFun(s, function(t) {
                        if (t.allwords <= 0) {
                            a.data.serverData = n.serverFunFast(o), e.touxiang.avatarUrl ? a.data.serverData.customAvatar = e.touxiang.avatarUrl : a.data.serverData.customAvatar = n.baseData().avaDefaultName;
                            var r = a.data.serverData;
                            a.setUnessShow(r), a.svg(function(t) {
                                a.data.serverData.userpic = t.name, a.data.serverData.createCardType = "bombLayerCreate", 
                                e.setRequest({
                                    url: "createCard",
                                    method: "POST",
                                    data: a.data.serverData
                                }, function(t) {
                                    try {
                                        wx.removeStorage({
                                            key: "quickMakeStorage"
                                        });
                                    } catch (t) {}
                                    a.setData({
                                        "quickBuild.animationName": "toDown"
                                    }), a._closeQuick(), a.triggerEvent("submitQuickMake", t);
                                }, "", function(t) {
                                    a.setData({
                                        saveCommit: {
                                            loading: !1
                                        }
                                    }), wx.hideToast();
                                });
                            });
                        } else {
                            wx.hideToast(), i.testShowmodal();
                            for (var u = t.errorArr, c = 0; c < u.length; c++) for (var d = 0; d < o.length; d++) s[u[c]] == o[d][2] && (o[d][4].secure = 2);
                            a.setData({
                                formData: o,
                                saveCommit: {
                                    loading: !1
                                }
                            });
                        }
                    });
                }
            }));
        },
        svg: function(t) {
            var a = this, i = this.data.serverData;
            i.tempId = n.defaultCardType(), e.setRequest({
                url: "drawSvg",
                method: "POST",
                data: i
            }, function(a) {
                t && t(a);
            }, "", function() {
                a.setData({
                    saveCommit: {
                        loading: !1
                    }
                });
            });
        },
        getUserSetting: function() {
            var t = this;
            e.getSettingMessage(function(a) {
                t.setData({
                    getSettingMessage: a.u
                });
            });
        },
        getUserMessa: function(t) {
            if (t.detail.iv) {
                e.burying.setPoint(e, 244), this.setData({
                    getSettingMessage: !0
                }), this._submitAdd(), e.touxiang = t.detail.userInfo, e.setUnion(t.detail);
                try {
                    wx.setStorageSync("touxiang", {
                        d: t.detail.userInfo
                    });
                } catch (t) {}
            }
        },
        addrTap: function(t) {
            e.burying.setPoint(e, 241), this.setData({
                toAddr: !0
            });
            try {
                wx.setStorageSync("quickMakeStorage", {
                    val: this.data.formData
                });
            } catch (t) {}
            wx.navigateTo({
                url: "../../cardMain/addrMatchNew/addrMatch?current=".concat(t.currentTarget.dataset.index, "&from=howEnter")
            });
        },
        _phoneNumber: function(t) {
            var a = this;
            t.detail.iv ? e.setRequest({
                url: "getWxPhone",
                data: {
                    iv: t.detail.iv,
                    encryptedData: t.detail.encryptedData
                }
            }, function(t) {
                a.setData({
                    "formData[3][2]": t.phoneNumber,
                    "formData[4][2]": t.phoneNumber
                });
            }) : this.setData({
                phoneTip: "重新获取"
            });
        }
    }
});