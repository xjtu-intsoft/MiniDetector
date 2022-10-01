var a = require("../../../../util/codecontol.js");

Page({
    data: {
        advertListData: [],
        tempImagePath: "",
        qrcodePatch: "",
        canvasHidden: !1
    },
    onLoad: function(a) {
        var t = [];
        "undefined" != a.ticket_qrcode_data && (t = getApp().decodeDataAndJsonParse(a.ticket_qrcode_data), 
        this.data.advertListData = t), this.setImageFilePath(t), this.setData({
            advertListData: t
        });
    },
    setImageFilePath: function(a) {
        var t = this;
        a.forEach(function(a, e) {
            a.canvasId = a.qr_code + "" + e, t.createQrCode(a, e);
        });
    },
    createQrCode: function(t, e) {
        var c = this;
        a.qrcode(t.canvasId, t.qr_code, "520", "520"), setTimeout(function() {
            c.canvasToQrImage(!0, t, e);
        }, 1e3);
    },
    canvasToQrImage: function(a, t, e) {
        var c = this;
        wx.canvasToTempFilePath({
            canvasId: t.canvasId,
            success: function(a) {
                var t = a.tempFilePath;
                c.data.advertListData[e].qrcodePatch = t, c.setData({
                    advertListData: c.data.advertListData,
                    canvasHidden: !0
                });
            },
            fail: function(t) {
                console.log("错"), a && setTimeout(function() {
                    c.canvasToQrImage(!1);
                }, 2e3);
            }
        });
    }
});