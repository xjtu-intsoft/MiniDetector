var t = require("../../../7931C4950691379C1F57AC929AD2E9B3.js"), e = getApp(), i = {}, a = {}, n = 0;

Component({
    properties: {
        optionsL: {
            type: Object,
            value: {},
            observer: function(t, e) {
                console.log("n", t), i = t || {};
            }
        },
        freshInvoice: {
            type: Object,
            value: {},
            observer: function(t) {
                t && this._getInvoice();
            }
        }
    },
    data: {
        operation: !1,
        relvanceId: !1,
        delTishi: !1,
        verifyToken: "",
        x: 0,
        invoiceList: [],
        reqSuccess: !1
    },
    lifetimes: {
        attached: function() {}
    },
    pageLifetimes: {
        show: function() {
            a = {}, this.data.invoiceList && this.setData({
                invoiceList: this.data.invoiceList.map(this.addX),
                relvanceId: this.data.relvanceId
            }), this.setData({
                operation: !1
            });
        }
    },
    methods: {
        addX: function(t) {
            return t.x = 0, t;
        },
        slideButtonTap: function(t) {
            console.log("slide button tap", t.detail);
        },
        againRequest: function() {
            t.showtoast("加载中...", "loading", 8e3), this.setData({
                "netError.show": !1
            }), this.onLoad(i);
        },
        _getInvoice: function() {
            var a = this;
            e.setRequest({
                url: "invoiceList",
                data: {
                    cid: i.id ? i.id : ""
                }
            }, function(e) {
                a.setData({
                    invoiceList: e.list.map(a.addX),
                    radioChecked: {},
                    relvanceId: e.relationId ? e.relationId : ""
                });
                try {
                    wx.setStorageSync("invoiceData", a.data.invoiceList);
                } catch (t) {}
                a.data.verifyToken = e.formToken, t.hidetoast();
            }, function() {
                a.data.invoiceList || a.setData({
                    "netError.show": !0
                });
            }, function() {
                a.setData({
                    reqSuccess: !0
                }), t.hidetoast(), a.triggerEvent("fresh");
            });
        },
        addInvoice: function(t) {
            var a = i.id ? i.id : "";
            e.burying.setPoint(e, 868), wx.navigateTo({
                url: "/pages/cardMain/editInvoice/editInvoice?detail=" + t.currentTarget.dataset.detail + "&id=" + a + "&verifyToken=" + this.data.verifyToken
            });
        },
        lookVoice: function(t) {
            console.log("e.currentTarget.dataset.ind", t.currentTarget.dataset.ind), wx.navigateTo({
                url: "/pages/cardMain/showInvoice/showInvoice?ind=" + t.currentTarget.dataset.ind + "&main=" + i.main + "&type=self"
            });
        },
        manage: function() {
            this.setData({
                operation: !0,
                radioChecked: {},
                "switch.animation": !1
            });
        },
        complete: function() {
            this.setData({
                operation: !1
            });
        },
        deleteInvoice: function(i) {
            var n = this, o = this.data.invoiceList, s = i.currentTarget.dataset.id, c = i.currentTarget.dataset.ind;
            o[c].isRelation, t.showtoast("删除发票中", "loading", 6e3, !0), a.deleteInv || (a.deleteInv = !0, 
            e.setRequest({
                url: "delInvoice",
                extra: "/" + s,
                method: "DELETE"
            }, function(e) {
                o.splice(c, 1), s == n.data.relvanceId && (n.data.relvanceId = !1), n.setData({
                    invoiceList: o.map(n.addX),
                    relvanceId: n.data.relvanceId
                }), t.showtoast("删除成功", "success", 1e3);
            }, "", function() {
                a.deleteInv = !1;
            }));
        },
        handeMovableChange: function(t) {
            n = t.detail.x;
        },
        handleTouchend: function(t) {
            console.log(n, t.currentTarget.dataset.idx);
            var e = t.currentTarget.dataset.idx;
            n < -20 ? this.data.invoiceList[e].x = -116 : (this.data.invoiceList[e].x = 0, this.data.x = 0), 
            n < 0 && this.data.invoiceList.map(function(t, i) {
                i != e && (t.x = 0);
                return t;
            }), this.setData({
                invoiceList: this.data.invoiceList
            });
        }
    }
});