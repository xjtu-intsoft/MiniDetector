var e = require("./../../../util/codecontol.js");

Page({
    data: {},
    onLoad: function(o) {
        var a = getApp().globalData.userInfo.mobile;
        a = "encrypt_type=1&id=" + a + "&id_type=mobile", e.qrcode("qrCodeCanvas", a, "400", "400");
    }
});