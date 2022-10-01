var a, e, t, n = require("../../../@babel/runtime/helpers/interopRequireDefault"), i = n(require("../../../@babel/runtime/helpers/defineProperty")), o = require("../../../66AA26C40691379C00CC4EC37CA2E9B3.js"), r = require("../../../AFC697330691379CC9A0FF345133E9B3.js"), c = n(require("../../../572501570691379C31436950F6B2E9B3.js")), s = getApp(), d = new o.Match("page"), u = new r.wxRequest(), l = require("../../../7931C4950691379C1F57AC929AD2E9B3.js"), m = {};

Page({
    data: {
        invoiceData: {},
        matchData: {
            show: !1,
            detail: {
                index: "",
                id: "",
                name: ""
            },
            top: 63,
            data: []
        },
        loading: !1
    },
    onLoad: function(n) {
        console.log("editInvoice.onload", n), a = this, e = n, t = getCurrentPages(), this.invoiceHuancun(), 
        this.invoiceDataFun();
    },
    onShow: function() {
        m = {};
    },
    buildForm: function() {
        for (var a = [ "title", "taxnumber", "companyaddress", "telephone", "bankname", "bankaccount", "mark" ], e = {}, t = 0; t < a.length; t++) e[a[t]] = "";
        return e;
    },
    invoiceHuancun: function() {
        !s.temporaryData.invoice.editHuancun[e.id] && (s.temporaryData.invoice.editHuancun[e.id] = this.buildForm());
    },
    invoiceDataFun: function() {
        "update" == e.detail ? a.setData({
            invoiceData: t[t.length - 2].data.invoiceData
        }) : a.setData({
            invoiceData: s.temporaryData.invoice.editHuancun[e.id]
        });
    },
    focus: function(a) {
        this.data.blur = !1, s.systemInfo["1.6.3"] && d.focus({
            eContent: a,
            bindthat: this,
            extra: 20
        }), "add" == e.detail && "title" == a.currentTarget.dataset.name && s.burying.setPoint(s, 872);
    },
    input: function(a) {
        if (a.currentTarget.dataset.fail) switch (a.currentTarget.dataset.name + "Fail") {
          case "titleFail":
            this.setData({
                "invoiceData.titleFail": !1
            });
            break;

          case "companyaddressFail":
            this.setData({
                "invoiceData.companyaddressFail": !1
            });
            break;

          case "telephoneFail":
            this.setData({
                "invoiceData.telephoneFail": !1
            });
            break;

          case "taxnumberFail":
            this.setData({
                "invoiceData.taxnumberFail": !1
            });
            break;

          case "banknameFail":
            this.setData({
                "invoiceData.banknameFail": !1
            });
            break;

          case "bankaccountFail":
            this.setData({
                "invoiceData.bankaccountFail": !1
            });
            break;

          case "markFail":
            this.setData({
                "invoiceData.markFail": !1
            });
        }
        s.systemInfo["1.6.3"] && d.input({
            eContent: a,
            bindthat: this,
            extra: 0
        }), this.data.invoiceData[a.currentTarget.id] = a.detail.value;
    },
    blur: function(a) {
        this.data.blur = !0, s.systemInfo["1.6.3"] && d.blur({
            bindthat: this
        }), "add" == e.detail && (s.temporaryData.invoice.editHuancun[e.id][a.target.id] = a.detail.value);
    },
    save: function() {
        var t, n = this, i = "POST", o = this.data.invoiceData;
        if ("update" == e.detail && (i = "PUT"), t = this.invoiceForm(o), "add" == e.detail && s.burying.setPoint(s, 870), 
        !t.title || !t.taxnumber) return l.showmodal({
            data: "发票抬头与纳税人识别号为必填字段，请完善信息后保存",
            cancel: !1,
            text: "我知道了"
        }), 0;
        if (!m.submit) {
            m.submit = !0, this.setData({
                loading: !0
            });
            for (var r = [], c = Object.keys(t), d = 0; d < c.length; d++) r.push(t[c[d]]);
            s.contentTestFun(r, function(c) {
                if (c.allwords <= 0) u.requestUrl({
                    url: "editInvoice",
                    method: i,
                    data: {
                        title: t.title,
                        companyaddress: t.companyaddress,
                        telephone: t.telephone,
                        taxnumber: t.taxnumber,
                        bankname: t.bankname,
                        bankaccount: t.bankaccount,
                        mark: t.mark,
                        formtoken: e.verifyToken,
                        cid: e.id ? e.id : "",
                        id: e.invId ? e.invId : ""
                    }
                }, function(t) {
                    s.burying.setSensorEvent(s, {}, "InvoiceSave"), s.addinvoice = !0, "add" == e.detail ? wx.navigateBack({
                        delta: 1
                    }) : wx.navigateBack({
                        delta: 2
                    }), s.temporaryData.invoice.editHuancun[e.id] = a.buildForm();
                }, "", function() {
                    m.submit = !1, n.setData({
                        loading: !1
                    });
                }); else {
                    l.testShowmodal();
                    for (var d = c.errorArr, b = o, h = 0; h < d.length; h++) r[d[h]] == b.title && (b.titleFail = !0), 
                    r[d[h]] == b.companyaddress && (b.companyaddressFail = !0), r[d[h]] == b.telephone && (b.telephoneFail = !0), 
                    r[d[h]] == b.bankaccount && (b.bankaccountFail = !0), r[d[h]] == b.taxnumber && (b.taxnumberFail = !0), 
                    r[d[h]] == b.bankname && (b.banknameFail = !0), r[d[h]] == b.mark && (b.markFail = !0);
                    n.setData({
                        invoiceData: b,
                        loading: !1
                    }), m.submit = !1;
                }
            });
        }
    },
    invoiceForm: function(a) {
        console.log("d", a);
        var e = {};
        return a.title && a.title.trim().length > 0 ? e.title = a.title : e.title = "", 
        a.taxnumber && a.taxnumber.trim().length > 0 ? e.taxnumber = a.taxnumber : e.taxnumber = "", 
        a.companyaddress ? e.companyaddress = a.companyaddress : e.companyaddress = "", 
        a.telephone ? e.telephone = a.telephone : e.telephone = "", a.bankaccount ? e.bankaccount = a.bankaccount : e.bankaccount = "", 
        a.bankname ? e.bankname = a.bankname : e.bankname = "", a.mark ? e.mark = a.mark : e.mark = "", 
        e;
    },
    editCardPageMatchSelect: function(t) {
        var n = Math.round(new Date().getTime() / 1e3);
        a.setData({
            "invoiceData.title": t.currentTarget.dataset.matchitem
        }), s.compatibleManage.navigationBarLoading && wx.showNavigationBarLoading(), "add" == e.detail && s.burying.setPoint(s, 873), 
        wx.request({
            url: s.source.invoiceMatchNew + "?key=2dcbb2386b3147d3927638cfa2579cd3&keyword=" + t.currentTarget.dataset.matchitem,
            header: {
                Token: (0, c.default)("2dcbb2386b3147d3927638cfa2579cd3" + n + "2E9EB51666B47308A6AB6355C71F73B7").toUpperCase(),
                Timespan: n
            },
            complete: function(n) {
                var o = n.data.Result;
                o && (a.setData((0, i.default)({
                    "invoiceData.taxnumber": o.CreditCode,
                    "invoiceData.companyaddress": o.Address,
                    "invoiceData.telephone": o.Tel,
                    "invoiceData.bankname": o.Bank,
                    "invoiceData.bankaccount": o.BankAccount
                }, "invoiceData.telephone", o.Tel)), s.temporaryData.invoice.editHuancun[e.id] = a.data.invoiceData), 
                s.compatibleManage.navigationBarLoading && wx.hideNavigationBarLoading(), 200 != n.statusCode && s.errorLog(t.currentTarget.dataset.matchitem + JSON.stringify(n), "qichachaNewInvoice");
            }
        }), s.gioCustome({
            t: "editInvoice.001"
        });
    },
    ss: function() {},
    onHide: function() {},
    onUnload: function() {},
    cancel: function() {
        "add" == e.detail && s.burying.setPoint(s, 871), wx.navigateBack({
            delta: 1
        });
    },
    onShareAppMessage: function() {
        return l.shareAppMessa({
            title: "我向您推荐“递名片”",
            path: "pages/cardMy/about/about?shareOthers=editInvoice&shareType=05",
            imageUrl: s.source.shareImage
        });
    }
});