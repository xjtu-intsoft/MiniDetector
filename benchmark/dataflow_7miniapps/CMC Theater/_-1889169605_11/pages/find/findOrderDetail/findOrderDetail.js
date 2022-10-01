var a = require("../../../util/codecontol.js"), e = getApp().urlService, t = require("../../../request/findOrderDetialRequest.js").findOrderDetialRequest;

Page({
    data: {
        qrcodefindPatch: "",
        barcodefindPatch: "",
        barcanvHidden: !1,
        canvasHidden: !1,
        order_num: "",
        requestData: null,
        cartKey: "",
        formID: "",
        showbarviewheight: !0,
        hiddenBarView: !1
    },
    onLoad: function(a) {
        wx.setNavigationBarTitle({
            title: "订单详情"
        }), a.order_num && (this.data.flag = a.flag ? a.flag : "", this.data.order_num = a.order_num, 
        this.startDownLoad(a.order_num)), a.cartKey && (this.data.cartKey = a.cartKey);
    },
    refundGoodOrRefush: function(a) {
        a && (this.data.formID = a.detail.formId);
        var e = this.data.requestData.btnType;
        1 == e ? this.refundTicket() : 2 == e && this.startDownLoad(this.data.order_num);
    },
    refundTicket: function() {
        var a = this;
        wx.showModal({
            confirmColor: "#ff9500",
            title: "提示",
            content: a.data.requestData.refund_settings.dialog_message,
            success: function(e) {
                e.confirm && a.goRefund();
            }
        });
    },
    goRefund: function() {
        var a = this, t = e.urls.goodRefund, n = e.urlParameter({
            order_num: this.data.order_num,
            form_id: this.data.formID
        });
        e.wxRequest.getRequest(t, n).then(function(e) {
            console.log(e), "0" == e.data.errcode && a.startDownLoad(a.data.order_num);
        });
    },
    startDownLoad: function(a) {
        var n = this;
        this.setData({
            canvasHidden: !1,
            barcanvHidden: !1
        });
        var o = e.urls.orderDetial, r = e.urlParameter({
            order_num: a,
            order_type: "ticket",
            order_type_num: "4"
        });
        e.wxRequest.getRequest(o, r).then(function(a) {
            if (console.log(a), t.decodeRes(a)) {
                var e = t.successObj.ticket_code, o = !0, r = !1, d = !1;
                e && e.length > 0 ? (n.createQrCode(e, "qr_findcanvas"), n.createBarCode(e, "bar_findcanvas")) : (o = !1, 
                r = !0, d = !0, n.data.hiddenBarView = !0), n.setData({
                    flag: n.data.flag,
                    requestData: t.successObj,
                    canvasHidden: r,
                    barcanvHidden: d,
                    showbarviewheight: o,
                    hiddenBarView: n.data.hiddenBarView
                });
            }
            wx.stopPullDownRefresh();
        });
    },
    createQrCode: function(e, t) {
        var n = this;
        a.qrcode(t, e, "360", "360"), setTimeout(function() {
            n.canvasToQrImage();
        }, 1e3);
    },
    createBarCode: function(e, t) {
        var n = this;
        a.barcode(t, e, "500", "150"), setTimeout(function() {
            n.canvasToBarImage();
        }, 1e3);
    },
    canvasToQrImage: function() {
        var a = this;
        wx.canvasToTempFilePath({
            canvasId: "qr_findcanvas",
            success: function(e) {
                console.log("success", e);
                var t = e.tempFilePath;
                a.setData({
                    qrcodefindPatch: t,
                    canvasHidden: !0
                });
            },
            fail: function(e) {
                console.log("fail", e), a.setData({
                    showbarviewheight: !1,
                    canvasHidden: !0
                });
            }
        });
    },
    canvasToBarImage: function() {
        var a = this;
        wx.canvasToTempFilePath({
            canvasId: "bar_findcanvas",
            success: function(e) {
                console.log("success", e);
                var t = e.tempFilePath;
                a.setData({
                    barcodefindPatch: t,
                    barcanvHidden: !0
                });
            },
            fail: function(e) {
                console.log("fail", e), a.setData({
                    showbarviewheight: !1,
                    barcanvHidden: !0
                });
            }
        });
    },
    goBack: function() {
        if ("shopCart" == this.data.cartKey) "find" == getApp().globalData.goodsFrom ? wx.switchTab({
            url: "/pages/find/findHome/findHome"
        }) : wx.reLaunch({
            url: "/pages/find/findShopHome/findShopHome"
        }); else if ("foodCart" == this.data.cartKey) if ("find" == getApp().globalData.goodsFrom) wx.switchTab({
            url: "/pages/find/findHome/findHome"
        }); else {
            var a = "/pages/find/findFoodHome/findFoodHome";
            getApp().globalData.onlyGoods && (a = "/pages/find/findFoodHome/findFoodHome?fromFlag=singlegood"), 
            wx.reLaunch({
                url: a
            });
        } else wx.navigateBack();
    },
    progressClick: function(a) {
        var e = a.target.dataset.bean, t = getApp().encodeDataAndJsonStringify(e);
        e && e.order_num && wx.navigateTo({
            url: "/pages/mime/orderProgress/progress?bean=" + t
        });
    },
    onPullDownRefresh: function() {
        this.startDownLoad(this.data.order_num);
    },
    expandClick: function(a) {
        var e = a.currentTarget.dataset.index, t = a.currentTarget.dataset.code, n = this.data.requestData.allGoods[t][e];
        n.expand ? n.expand = !n.expand : n.expand = !0, this.setData({
            requestData: this.data.requestData
        });
    }
});