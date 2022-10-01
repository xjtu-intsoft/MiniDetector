var t = require("../../../66AA26C40691379C00CC4EC37CA2E9B3.js"), a = getApp(), e = new t.Match("component");

Component({
    properties: {
        formData: {
            type: "Array",
            observer: function(t) {
                this._addMore(), this._addIconShow();
            }
        },
        tempType: {
            type: String,
            value: "",
            observer: function(t) {
                this._configFun(t), this._formShowFun(t);
            }
        },
        currentModel: {
            type: Object,
            value: {},
            observer: function(t) {
                this._configFun(this.data.tempType);
            }
        },
        condition: Boolean,
        avaCon: Object,
        nameFocus: Boolean,
        editType: String,
        itemConfig: Object,
        customConfig: Object,
        pageOrigin: {
            type: String
        }
    },
    data: {
        customNumber: 0,
        alterCon: [],
        focusName: "",
        customShow: !1,
        anonymous: a.source.anonymous,
        phoneFast: !1,
        configShow: !1,
        mustFormShow: !1,
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
        adjustPosition: !1
    },
    methods: {
        _addMore: function() {
            var t = [], a = this.data.formData;
            this.data.customNumber = 5;
            for (var e = 0; e < a.length; e++) 0 == a[e][4].show && "custom" != a[e][0] && "mophone2" != a[e][0] && "mophone3" != a[e][0] && "phone2" != a[e][0] && "phone3" != a[e][0] && "email2" != a[e][0] && "email3" != a[e][0] && "addr2" != a[e][0] && "addr3" != a[e][0] && "wechat2" != a[e][0] && "wechat3" != a[e][0] ? t.push(a[e]) : "custom" == a[e][0] && this.data.customNumber--;
            this.setData({
                alterCon: t
            });
        },
        _configFun: function(t) {
            "common" == t ? this.data.currentModel && "old-charactor" == this.data.currentModel.sType ? this.data.currentModel && "old-charactor" == this.data.currentModel.sType && this.data.configShow && this.setData({
                configShow: !1
            }) : !this.data.configShow && this.setData({
                configShow: !0
            }) : this.data.configShow && this.setData({
                configShow: !1
            });
        },
        _formShowFun: function(t) {
            "minimalist" == t ? this.data.mustFormShow && this.setData({
                mustFormShow: !1
            }) : !this.data.mustFormShow && this.setData({
                mustFormShow: !0
            });
        },
        _addIconShow: function() {
            for (var t = this.data.formData, a = {}, e = 0, o = 0, i = 0, n = 0, s = 0, r = [], h = [], d = 0; d < t.length; d++) 1 == t[d][4].show && (a[t[d][0]] = !0), 
            "mophone1" == t[d][0] && (e = d), "phone1" == t[d][0] && (o = d), "wechat" == t[d][0] && (i = d), 
            "addr1" == t[d][0] && (n = d), "email1" == t[d][0] && (s = d);
            "add" == t[e][4].icon && a.mophone2 && a.mophone3 && (r["formData[" + e + "][4].icon"] = "", 
            h.push(e)), "add" == t[i][4].icon && a.wechat2 && a.wechat3 && (r["formData[" + i + "][4].icon"] = "", 
            h.push(i)), "add" == t[n][4].icon && a.addr2 && a.addr3 && (r["formData[" + n + "][4].icon"] = "", 
            h.push(n)), "add" == t[s][4].icon && a.email2 && a.email3 && (r["formData[" + s + "][4].icon"] = "", 
            h.push(s)), "add" == t[o][4].icon && a.phone2 && a.phone3 && (r["formData[" + o + "][4].icon"] = "", 
            h.push(o)), h.length > 0 && (this.setData(r), this._triggerForm({
                index: [ h ],
                type: "addIconStatus"
            }));
        },
        _addMoreFun: function() {
            for (var t = this, e = this.data.alterCon, o = this.data.formData, i = [], n = this, s = 0, r = "", h = {}, d = "", c = 0; c < e.length; c++) i.push(e[c][1]);
            1 == i.length && "自定义" == i[0] ? this.setData({
                customShow: !0
            }) : wx.showActionSheet({
                itemList: i,
                success: function(a) {
                    s = a.tapIndex;
                    var i = 0;
                    if ("custom" != (r = e[s][0])) {
                        for (var c = 0; c < o.length; c++) if (o[c][0] == r) {
                            o[c][4].icon = "email1" == r || "phone1" == r ? "add" : "del", o[c][4].show = 1, 
                            d = o[c][0], h["formData[" + c + "][4]"] = o[c][4], i = c;
                            break;
                        }
                        n.setData(h), n._addMore(), setTimeout(function() {
                            n.setData({
                                focusName: d
                            });
                        }, 200), t._triggerForm({
                            index: [ i ],
                            type: "addNotCustom"
                        });
                    } else t.setData({
                        customShow: !0
                    });
                }
            }), a.burying.setPoint(a, 666);
        },
        _add: function(t) {
            var e, o = t.currentTarget.dataset.i, i = this.data.formData[o][0], n = this.data.formData, s = {}, r = [];
            switch (i) {
              case "mophone1":
                r = h("mophone2", "mophone3");
                break;

              case "phone1":
                r = h("phone2", "phone3");
                break;

              case "wechat":
                r = h("wechat2", "wechat3");
                break;

              case "addr1":
                r = h("addr2", "addr3");
                break;

              case "email1":
                r = h("email2", "email3");
            }
            function h(t, a) {
                for (var e = 0, o = 0; o < n.length; o++) if (n[o][0] == t) {
                    if (0 == n[o][4].show) {
                        s["formData[" + o + "][4].show"] = 1, e = o;
                        break;
                    }
                } else if (n[o][0] == a && 0 == n[o][4].show) {
                    s["formData[" + o + "][4].show"] = 1, e = o;
                    break;
                }
                return [ s, e ];
            }
            s = r[0], e = r[1], this.setData(s), this._triggerForm({
                index: [ e ],
                type: "addIcon"
            }), this._addIconShow(), a.burying.setPoint(a, 667);
        },
        _del: function(t) {
            var e = t.currentTarget.dataset.i, o = this.data.formData, i = {}, n = o[e], s = "";
            "custom" != o[e][0] ? (o[e][4].show = 0, o[e][2] = "", i["formData[" + e + "]"] = o[e], 
            s = "delNotCustom", this.setData(i), "edit" == this.data.editType && this._editDelFun()) : (s = "delCustom", 
            n[4].formIndex = e, o.splice(e, 1), this.setData({
                formData: o
            })), this._triggerForm({
                index: [ e ],
                type: s
            }), this._addMore(), this._svgTriggerFun(n, "del"), a.burying.setPoint(a, 668);
        },
        _editDelFun: function(t) {
            for (var a = this.data.formData, e = {}, o = 0, i = 0, n = 0, s = 0, r = 0, h = [], d = [], c = 0; c < a.length; c++) 1 == a[c][4].show && (e[a[c][0]] = !0), 
            "mophone1" == a[c][0] && (o = c), "phone1" == a[c][0] && (i = c), "wechat" == a[c][0] && (n = c), 
            "addr1" == a[c][0] && (s = c), "email1" == a[c][0] && (r = c);
            "" != a[o][4].icon || e.mophone2 && e.mophone3 || (h["formData[" + o + "][4].icon"] = "add", 
            d.push(o)), "" != a[n][4].icon || e.wechat2 && e.wechat3 || (h["formData[" + n + "][4].icon"] = "add", 
            d.push(n)), "" != a[s][4].icon || e.addr2 && e.addr3 || (h["formData[" + s + "][4].icon"] = "add", 
            d.push(s)), "" != a[r][4].icon || e.email2 && e.email3 || (h["formData[" + r + "][4].icon"] = "add", 
            d.push(r)), "" != a[i][4].icon || e.phone2 && e.phone3 || (h["formData[" + i + "][4].icon"] = "add", 
            d.push(i)), d.length > 0 && (this.setData(h), this._triggerForm({
                index: [ d ],
                type: "addIconStatus"
            }));
        },
        _selRadio: function(t) {
            this.triggerEvent("configClick", {
                n: t.currentTarget.dataset.n,
                i: t.currentTarget.dataset.i
            });
        },
        _notselRadio: function(t) {
            this.triggerEvent("configClick", {
                n: t.currentTarget.dataset.n,
                i: t.currentTarget.dataset.i
            });
        },
        _focus: function(t) {
            var o = t.currentTarget.dataset.i;
            if (this.data.blur = !1, this.data.inputPre = t.detail.value, "name" == this.data.formData[o][0] && this.triggerEvent("nameFocusFun"), 
            "mophone1" != this.data.formData[o][0] || this.data.phoneFast || this.setData({
                phoneFast: !0
            }), this.data.formData[o][0].includes("company")) {
                this.setData({
                    adjustPosition: !0
                });
                var i = this.data.formData[o][2];
                (i = i && i.trim()).length >= 4 && (this._companyMove(), e.focus({
                    eContent: t,
                    bindthat: this,
                    pageSize: 4,
                    extra: 0
                }));
            } else this.setData({
                adjustPosition: !0
            });
            switch (this.data.formData[o][0]) {
              case "name":
                a.burying.setPoint(a, 660);
                break;

              case "company":
                a.burying.setPoint(a, 661);
                break;

              case "job":
                a.burying.setPoint(a, 662);
                break;

              case "mophone1":
                a.burying.setPoint(a, 663);
                break;

              case "mophone2":
                a.burying.setPoint(a, 122);
                break;

              case "wechat":
                a.burying.setPoint(a, 664);
                break;

              case "email1":
                a.burying.setPoint(a, 160);
                break;

              case "phone1":
                a.burying.setPoint(a, 282);
            }
        },
        _companyMove: function() {
            e.position("company", this, function(t) {});
        },
        _companyRulerMatch: function(t) {
            e.input({
                eContent: t,
                pageSize: 4,
                bindthat: this
            });
        },
        _selectCompany: function(t) {
            var a = t.detail, e = this.data.formData.findIndex(function(t) {
                return "company" == t[0];
            });
            this.setData({
                "formData[2][2]": a,
                "matchData.show": !1
            }), this._triggerForm({
                index: [ e ],
                type: "input"
            });
        },
        _input: function(t) {
            this.data.blur = !1;
            var a = t.currentTarget.dataset.i;
            if (this.data.formData[a][2] = t.detail.value, this.data.formData[a][0].includes("company")) {
                var e = this.data.formData[a][2];
                (e = e && e.trim()).length >= 4 ? (this._companyMove(), this._companyRulerMatch(t)) : this.setData({
                    "matchData.show": !1
                });
            }
            if (0 == this.data.formData[a][4].secure || 1 == this.data.formData[a][4].placeholder) {
                var o = {};
                this.data.formData[a][4].secure = 1, this.data.formData[a][4].placeholder = 0, o["formData[" + a + "][4].secure"] = 1, 
                o["formData[" + a + "][4].placeholder"] = 0, this.setData(o);
            }
            this._triggerForm({
                index: [ a ],
                type: "input"
            });
        },
        _blur: function(t) {
            var a = this;
            this.data.blur = !0;
            if (clearTimeout(null), setTimeout(function() {
                a.setData({
                    "matchData.show": !1
                });
            }, 300), this.data.inputPre != t.detail.value) {
                this.data.tempType;
                var e = {
                    n: t.currentTarget.dataset.n,
                    i: t.currentTarget.dataset.i
                };
                this._svgTriggerFun(e, "blur");
            }
            setTimeout(function() {
                a.data.phoneFast && a.setData({
                    phoneFast: !1
                }), a.data.focusName && a.setData({
                    focusName: ""
                });
            }, 100);
        },
        _svgTriggerFun: function(t, a) {
            switch (this.data.tempType) {
              case "common":
                "blur" == a ? this.triggerEvent("commonBlur", t) : "del" == a ? this.triggerEvent("commonDel", t) : this.triggerEvent("svgShunt");
            }
        },
        _bindtap: function(t) {
            this.triggerEvent("toAddr", t), a.burying.setPoint(a, 665);
        },
        _getPhoneNumber: function(t) {
            var e = this;
            t.detail.iv && a.setRequest({
                url: "getWxPhone",
                data: {
                    iv: t.detail.iv,
                    encryptedData: t.detail.encryptedData
                }
            }, function(a) {
                var o = "", i = {}, n = [];
                i[o = "formData[" + t.currentTarget.dataset.i + "][2]"] = a.phoneNumber, n.push(t.currentTarget.dataset.i);
                for (var s = 0; s < e.data.formData.length; s++) if ("wechat" == e.data.formData[s][0] && !e.data.formData[s][2]) {
                    o = "formData[" + s + "][2]", n.push(s), i[o] = a.phoneNumber;
                    break;
                }
                i.phoneFast = !1, e.setData(i), e._triggerForm({
                    index: n,
                    type: "getPhoneNumber"
                }), e._svgTriggerFun("", "getPhoneNumber");
            }, function() {
                wx.showToast({
                    title: "获取失败"
                });
            });
        },
        _phoneTap: function() {
            "add" == this.data.editType && a.burying.setPoint(a, 281);
        },
        _customConfirm: function(t) {
            var a = this, e = t.detail, o = this.data.formData, i = {}, n = [ "custom", e, "", "请填写" + e, {
                secure: 1,
                must: 0,
                show: 1,
                icon: "del",
                placeholder: 0
            } ];
            o.push(n), i["formData[" + (o.length - 1) + "]"] = n, i.customShow = !1, this.setData(i), 
            this._addMore(), this._triggerForm({
                index: [ o.length - 1 ],
                type: "addCustom"
            }), setTimeout(function() {
                a.setData({
                    focusName: "custom" + (o.length - 1)
                });
            }, 200);
        },
        _customCancel: function() {
            this.setData({
                customShow: !1
            });
        },
        _triggerForm: function(t) {
            this.triggerEvent("formRender", {
                data: this.data.formData,
                indexCon: t.index,
                type: t.type
            });
        }
    }
});