var a, n, e, t = require("../../../AFC697330691379CC9A0FF345133E9B3.js"), i = (require("../../../FFA36E830691379C99C506846003E9B3.js"), 
require("../../../7931C4950691379C1F57AC929AD2E9B3.js")), o = new t.wxRequest(), s = getApp();

Page({
    data: {
        invoiceData: {},
        canUse: s.compatibleManage.shareMenu
    },
    onPullDownRefresh: function() {
        this.onLoad(e);
    },
    onLoad: function(t) {
        console.log("showInvoice.onload", t), a = getCurrentPages(), n = this, (e = t).shareOthers ? (s.compatibleManage.navigationBarLoading && wx.showNavigationBarLoading(), 
        s.tokenGet(function() {
            n.invoiceShowFun();
        }, function() {
            wx.stopPullDownRefresh(), s.compatibleManage.navigationBarLoading && wx.hideNavigationBarLoading();
        })) : "other" == e.type ? (n.setData({
            invoiceData: a[a.length - 2].data.singleData.invoice_data,
            optionsL: t
        }), wx.stopPullDownRefresh()) : (n.setData({
            invoiceData: wx.getStorageSync("invoiceData")[t.ind],
            optionsL: t
        }), wx.stopPullDownRefresh()), s.compatibleManage.shareMenu && wx.hideShareMenu();
    },
    invoiceShowFun: function() {
        o.requestUrl({
            url: "invoice",
            data: {
                id: e.invId
            }
        }, function(a) {
            console.log("invoice", a);
            var t = !1;
            e.openid == s.client.openid && (t = !0), n.setData({
                invoiceData: a,
                optionsL: e,
                ifSelf: t
            });
        }, "", function() {
            wx.stopPullDownRefresh(), s.compatibleManage.navigationBarLoading && wx.hideNavigationBarLoading();
        });
    },
    toMain: function() {
        wx.switchTab({
            url: "../../cardMain/cardMain"
        });
    },
    onShow: function() {},
    lineCopy: function(a) {
        if (!a.currentTarget.dataset.val || !wx.setClipboardData) return 0;
        wx.setClipboardData({
            data: a.currentTarget.dataset.val,
            success: function(a) {
                i.showtoast("复制成功", "success", 1e3);
            }
        });
    },
    oneCopy: function(a) {
        for (var e = n.data.invoiceData, t = [ [ "title", "发票抬头" ], [ "taxnumber", "纳税人识别号" ], [ "companyaddress", "单位地址" ], [ "telephone", "电话号码" ], [ "bankname", "开户行" ], [ "bankaccount", "银行账号" ], [ "mark", "备注" ] ], o = new String(), c = 0; c < t.length; c++) e[t[c][0]] && (o = o.concat(t[c][1], ":\n", e[t[c][0]], "\n"));
        s.compatibleManage.clipboardData ? wx.setClipboardData({
            data: o,
            success: function(a) {
                i.showtoast("复制成功", "success", 1e3);
            }
        }) : i.showmodal({
            data: "您当前的微信版本过低，请升级微信后使用该功能",
            text: "我知道了",
            cancel: !1
        });
    },
    edit: function() {
        wx.navigateTo({
            url: "../editInvoice/editInvoice?invId=" + n.data.invoiceData.id + "&detail=update&invInd=" + e.ind
        });
    },
    ss: function() {
        s.burying.setPoint(s, 869);
    },
    onHide: function() {},
    onUnload: function() {},
    onShareAppMessage: function() {
        var a = e.invId;
        return a || (a = this.data.invoiceData.id), i.shareAppMessa({
            title: "这是发票信息，请接收",
            path: "pages/cardMain/showInvoice/showInvoice?shareOthers=showInvoice&shareType=09&invId=" + a
        });
    }
});