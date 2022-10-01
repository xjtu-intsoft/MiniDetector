require("@babel/runtime/helpers/Arrayincludes.js");

var t = require("AFC697330691379CC9A0FF345133E9B3.js"), a = getApp(), e = new t.wxRequest(), s = require("7931C4950691379C1F57AC929AD2E9B3.js");

module.exports = Behavior({
    data: {},
    attached: function() {},
    methods: {
        _ss: function() {},
        addrTap: function(t) {
            var a = t.currentTarget.dataset.type;
            wx.navigateTo({
                url: "../../../pages/cardMain/addrMatchNew/addrMatch?type=".concat(a)
            });
        },
        firstAddStatus: function(t) {
            var a = [ "mophone1", "wechat", "addr1", "email1", "phone1" ], e = this.store.data.cbData.showconfig && this.store.data.cbData.showconfig.configShow || {};
            t.forEach(function(s, o) {
                a.includes(s[0]) ? (t[o + 1][7].add && t[o + 2][7].add && (s[7].add = !1), t[o + 1][7].add && t[o + 2][7].add || (s[7].add = !0)) : s[2] || e[s[0]] ? s[7].add = !0 : s[7].add = !1;
            });
        },
        addUnness: function(t) {
            var a = t.currentTarget.dataset.type, e = this.store.data.initData.formData.form;
            switch (a) {
              case "mophone1":
              case "wechat":
              case "addr1":
              case "email1":
              case "phone1":
                s(a, e);
            }
            function s(t, a) {
                a.forEach(function(e, s) {
                    e[0] == t && (e[7].sort = 1, a[s + 1][7].add ? a[s + 2][7].add || (a[s + 2][7].add = !0) : a[s + 1][7].add = !0, 
                    a[s + 1][7].add && a[s + 2][7].add && (e[7].add = !1));
                });
            }
            this.update();
        },
        delUnness: function(t) {
            var a = this, e = t.currentTarget.dataset.type, s = this.store.data.initData.formData.form, o = this.store.data.itemList, n = "";
            "fax" != e && "website" != e && "wechat2" != e && "wechat3" != e ? n = e.slice(0, -1) + "1" : "wechat2" == e || "wechat3" == e ? n = e.slice(0, -1) : ("fax" == e && (o.includes("网址") ? o = [ "传真", "网址", "自定义" ] : o.unshift("传真")), 
            "website" == e && (o.includes("传真") ? o = [ "传真", "网址", "自定义" ] : o.unshift("网址"))), 
            s.forEach(function(t) {
                t[0] == e && (t[2] = "", a.store.data.cbData[t[0]] = "", t[7].add = !1), t[0] == n && (t[7].add = !0);
            }), this.store.data.showZhidingyi = !!o.length, this.store.data.itemList = o, this._getCustomName(this), 
            this.update().then(function(t) {
                Object.keys(t).length && a._updateCard();
            });
        },
        delCustom: function(t) {
            var a = this, e = [ t.currentTarget.dataset.idx ][0], s = this.store.data.cbData.showconfig.custom;
            s.splice(e, 1);
            var o = this.store.data.itemList;
            o.indexOf("自定义") > -1 || o.push("自定义"), this._getCustomName(this), this.store.data.showZhidingyi = !!o.length, 
            this.store.data.cbData.showconfig.custom = s, this.store.data.settingshowNum = this.store.getShowNum(), 
            this.update().then(function(t) {
                Object.keys(t).length && a._updateCard();
            });
        },
        _getCustomName: function(t) {
            var a = this.store.data.itemList;
            1 == a.length && "自定义" == a[0] ? t.store.data.customName = "自定义项" : t.store.data.customName = "更多";
        },
        addCancel: function() {
            this.store.data.addItem.panelShow = !1, this.update();
        },
        addCustom: function() {
            var t = this, a = this.store.data.initData.formData.form, e = this.store.data.itemList;
            1 == e.length && "自定义" == e[0] ? (this.store.data.addItem.panelShow = !0, t.update().then(function(t) {})) : e.length ? wx.showActionSheet({
                itemList: e,
                success: function(s) {
                    a.forEach(function(a) {
                        a[1] == e[s.tapIndex] && (a[7].add = !0, t.store.data.autoFocusType = a[0]);
                    }), "自定义" != e[s.tapIndex] ? e = e.slice(0, s.tapIndex).concat(e.slice(s.tapIndex + 1)) : t.store.data.addItem.panelShow = !0, 
                    t.store.data.showZhidingyi = !!e.length, t.store.data.itemList = e, t._getCustomName(t), 
                    t.update();
                }
            }) : (this.store.data.showZhidingyi = !!e.length, t.update());
        },
        updateCostomName: function(t) {
            this.store.data.addItem.d.name = t.detail.value, this.update();
        },
        addCustomName: function() {
            var t = this, e = this.store.data.cbData.showconfig.custom, o = this.store.data.itemList, n = this.store.data.addItem.d;
            this.store.data.confirming = !0, this.update(), a.contentTestFun([ n.name ], function(a) {
                a.allwords <= 0 ? (e.push([ n.name, n.val, n.isShow.toString() ]), t.store.data.autoFocusType = e.length - 1, 
                t.store.data.confirming = !1, 5 == e.length && (o.indexOf("自定义") >= -1 && o.splice(o.indexOf("自定义"), 1), 
                t.store.data.showZhidingyi = !!o.length), t.store.data.addItem = {
                    d: {
                        name: "",
                        val: "",
                        isShow: !1
                    },
                    panelShow: !1,
                    cValueFail: !1
                }, t.store.data.cbData.showconfig.custom = e, t.store.data.hasUpdateForm = !0, t.update()) : (t.store.data.confirming = !1, 
                t.store.data.addItem.cValueFail = !0, t.update().then(function(t) {}), s.hidetoast(), 
                s.testShowmodal());
            });
        },
        inputCustom: function(t) {
            var a = [ t.detail.value, t.currentTarget.dataset.idx ], e = a[0], s = a[1];
            e = e || "", this.store.data.cbData.showconfig.custom[s][1] = e, this.update().then(function(t) {});
        },
        webInputCustom: function(t) {
            var a = [ t.detail.value, t.currentTarget.dataset.idx ], e = a[0], s = a[1];
            e = e || "", this.store.data.cbData.showconfig.webcustom[s][1] = e, this.update().then(function(t) {
                console.log("diff-custom", t);
            });
        },
        blurCustom: function(t) {
            var e = this, o = [ t.detail.value, t.currentTarget.dataset.idx ], n = o[0], d = o[1], i = this.store.data.customVfailArray, r = this.store.data.cbData.showconfig.custom;
            n = n || "";
            for (var h = 0; h < r.length; h++) i[h] = !1;
            n && n.trim().length && a.contentTestFun([ n ], function(t) {
                t.allwords <= 0 ? (r.length && (r[d][1] = n), e.store.formDataGet(), e.store.data.hasUpdateForm = !0, 
                e.update().then(function(t) {
                    Object.keys(t).length && e._updateCard();
                })) : (i[d] = !0, e.update().then(function(t) {}), s.hidetoast(), s.testShowmodal());
            });
        },
        blurWebCustom: function(t) {
            var e = this, o = [ t.detail.value, t.currentTarget.dataset.idx ], n = o[0], d = o[1], i = this.store.data.webCustomVfailArray, r = this.store.data.webCustomVNullArray, h = this.store.data.cbData.showconfig.webcustom;
            n = n || "";
            for (var u = 0; u < h.length; u++) i[u] = !1;
            for (var c = 0; c < h.length; c++) h[c][1] || (r[c] = !0);
            this.update(), console.log("webCustomVfailArray", i, r), n && n.trim().length && a.contentTestFun([ n ], function(t) {
                t.allwords <= 0 ? (h.length && (h[d][1] = n), e.store.formDataGet(), e.store.data.hasUpdateForm = !0, 
                e.update().then(function(t) {
                    Object.keys(t).length && e._updateCard();
                })) : (i[d] = !0, e.update().then(function(t) {
                    console.log(e.store.data.customVfailIndex);
                }), s.hidetoast(), s.testShowmodal());
            });
        },
        getphonenumber: function(t) {
            var a = this;
            t.detail.iv ? e.requestUrl({
                url: "getWxPhone",
                data: {
                    iv: t.detail.iv,
                    encryptedData: t.detail.encryptedData
                }
            }, function(t) {
                var e = a.store.data.initData.formData.form, s = a.store.data.cbData, o = e.findIndex(function(t) {
                    return "wechat" == t[0];
                }), n = e.findIndex(function(t) {
                    return "mophone1" == t[0];
                });
                e[o][2] = t.phoneNumber, e[n][2] = t.phoneNumber, s.wechat = t.phoneNumber, s.mophone1 = t.phoneNumber, 
                a.update().then(function(t) {
                    Object.keys(t).length && a._updateCard();
                });
            }) : s.showtoast("获取失败", "loading", 1e3);
        }
    }
});