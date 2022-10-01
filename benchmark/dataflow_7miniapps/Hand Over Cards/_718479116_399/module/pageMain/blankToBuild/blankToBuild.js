var t = require("../../../BD93AC350691379CDBF5C4320700E9B3.js"), a = getApp(), e = new t.EditMini(), s = require("../../../7931C4950691379C1F57AC929AD2E9B3.js");

Component({
    properties: {
        customAvatar: {
            type: Object,
            value: {},
            observer: function(t, a) {
                console.log(t, a);
            }
        }
    },
    lifetimes: {
        attached: function() {
            this.setData({
                commitFlag: !1
            }), this.getUserSetting();
            for (var t = this.data.formData, a = 0; a < t.length; a++) "name" == t[a][0] && (t[a][3] = "请填写姓名", 
            t[a][2] = "", t[a][4] = {
                showComlete: !0
            }), "job" == t[a][0] && (t[a][3] = "请填写职位", t[a][4] = {
                showComlete: !1
            }), "company" == t[a][0] && (t[a][3] = "请填写公司", t[a][4] = {
                showComlete: !1
            }), t[a][5] = {
                focusF: !1
            };
            this.setData({
                formData: t
            });
        }
    },
    data: {
        systemInfo: a.systemInfo,
        formData: e.pickFormData([ "name", "job", "company" ]),
        saveCommit: {
            loading: !1
        },
        getSettingMessage: !1,
        commitFlag: !1,
        maxNum: 50,
        flag: !0
    },
    methods: {
        _input: function(t) {
            var a = t.currentTarget.dataset.index, e = this.data.formData;
            this.data.formData[a][2] = t.detail.value, 2 == e[a][4].secure && (e[a][4].secure = 3, 
            this.setData({
                formData: e
            }));
        },
        _focus: function(t) {
            var e = t.currentTarget.dataset.index, s = t.currentTarget.dataset.name, o = this.data.formData;
            switch ("name" == this.data.formData["".concat(e)][0] && (this.setData({
                nameFocus: !0
            }), this.data.flag && (this.setData({
                flag: !1
            }), this.data.formData["".concat(e)][2] = "")), s) {
              case "name":
                a.burying.setPoint(a, 290);
                break;

              case "company":
                a.burying.setPoint(a, 292);
                break;

              case "job":
                a.burying.setPoint(a, 291);
            }
            o["".concat(e)][4].showComlete = !1, o["".concat(e)][5].focusF = !0, this.setData({
                formData: o
            });
        },
        _blur: function(t) {
            var a, e = t.currentTarget.dataset.index, s = t.currentTarget.dataset.name, o = {};
            this.setData({
                nameFocus: !1
            }), o["".concat(a = "formData[" + e + "]", "[2]")] = t.detail.value, o["".concat(a, "[5]")] = {
                focusF: !1
            }, t.detail.value && t.detail.value.trim().length > 0 ? o["".concat(a, "[4]")] = {
                showComlete: !0
            } : (this.data.formData["".concat(e)][4].placeholder = 2, this.setData({
                formData: this.data.formData
            })), this.setData(o), this.data.commitFlag && "name" == s && this.data.flag && (this.data.formData["".concat(e)][2] = "", 
            this.data.formData["".concat(e)][4].placeholder = 2, this.setData({
                formData: this.data.formData
            }));
        },
        _toCheckForm: function(t) {
            for (var e = this.data.formData, s = !0, o = 0; o < e.length; o++) "name" != e[o][0] && "company" != e[o][0] && "job" != e[o][0] || (this.data.flag && ("name" != e[o][0] || Boolean(e[o][2]) && e[o][2].trim().length || (e[o][2] = a.touxiang.nickName)), 
            e[o][2] && e[o][2] && e[o][2].trim().length > 0 ? e[o][4].placeholder = 1 : (e[o][4].placeholder = 2, 
            s = !1));
            this.setData({
                formData: e
            }), t && t(s);
        },
        _submitAdd: function(t) {
            var o = this, r = this.data.formData;
            if (!this.data.getSettingMessage) return 0;
            this.data.saveCommit.loading || (this.setData({
                commitFlag: !0
            }), a.burying.setPoint(a, 297), this._toCheckForm(function(t) {
                if (t) {
                    o.setData({
                        saveCommit: {
                            loading: !0
                        }
                    });
                    for (var i = [], n = 0; n < r.length; n++) i.push(r[n][2]);
                    a.contentTestFun(i, function(t) {
                        if (t.allwords <= 0) o.data.serverData = e.serverFunFast(r), a.touxiang.avatarUrl ? o.data.serverData.customAvatar = a.touxiang.avatarUrl : o.data.serverData.customAvatar = e.baseData().avaDefaultName, 
                        o.svg(function(t) {
                            o.data.serverData.userpic = t.name, o.data.serverData.createCardType = "emptyHomePageCreate", 
                            a.setRequest({
                                url: "createCard",
                                method: "POST",
                                data: o.data.serverData
                            }, function(t) {}, "", function(t) {
                                try {
                                    var e = wx.getStorageSync("guideCardmain");
                                    e && void 0 !== e && !1 !== e || wx.setStorageSync("guideCardmain", !0);
                                } catch (t) {}
                                s.showtoast("名片领取成功", "none", 1e3), a.ifFresh.mycard = !0, o.triggerEvent("mycardGetFun"), 
                                o.setData({
                                    saveCommit: {
                                        loading: !1
                                    }
                                });
                            });
                        }); else {
                            wx.hideToast(), s.testShowmodal();
                            for (var n = t.errorArr, m = 0; m < n.length; m++) for (var c = 0; c < r.length; c++) i[n[m]] == r[c][2] && (r[c][4].secure = 2);
                            o.setData({
                                formData: r,
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
            var s = this, o = this.data.serverData;
            o.tempId = e.defaultCardType(), a.setRequest({
                url: "drawSvg",
                method: "POST",
                data: o
            }, function(a) {
                t && t(a);
            }, "", function() {
                s.setData({
                    saveCommit: {
                        loading: !1
                    }
                });
            });
        },
        getUserSetting: function() {
            var t = this;
            a.getSettingMessage(function(a) {
                t.setData({
                    getSettingMessage: a.u
                });
            });
        },
        getUserMessa: function(t) {
            if (t.detail.iv) {
                this.setData({
                    getSettingMessage: !0
                }), a.touxiang = t.detail.userInfo, a.setUnion(t.detail);
                try {
                    wx.setStorageSync("touxiang", {
                        d: t.detail.userInfo
                    });
                } catch (t) {}
                this._submitAdd();
            }
        }
    }
});