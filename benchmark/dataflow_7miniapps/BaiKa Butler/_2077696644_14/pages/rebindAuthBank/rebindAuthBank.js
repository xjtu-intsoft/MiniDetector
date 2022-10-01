function e(e, t) {
    a.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "bank/recognizeImageBankCard.do",
        data: s.addBaseRequest(t),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(t) {
            a.dismissLoading();
            var s = a.transformSuccessData(t);
            if (o.checkResultCode(s)) {
                var i = s.resultBody.bankName, n = s.resultBody.cardNumber;
                e.setData({
                    cardNumber: n,
                    debitBankName: i
                });
            }
        },
        fail: function(e) {
            a.dismissLoading(), a.showNetError();
        },
        complete: function(e) {}
    });
}

function t(e, t) {
    a.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "user/modifyUserAuthInfo.do",
        data: s.addBaseRequest(t),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            a.dismissLoading();
            var t = a.transformSuccessData(e);
            o.checkResultCode(t) && wx.showModal({
                title: "提示",
                content: t.resultMsg,
                success: function(e) {
                    e.confirm && wx.navigateBack({});
                }
            });
        },
        fail: function(e) {
            a.dismissLoading(), a.showNetError();
        },
        complete: function(e) {}
    });
}

Page({
    data: {
        debitCardNumber: ""
    },
    onLoad: function(e) {},
    onAuth: function(e) {
        var s = e.detail.value;
        s.debitCardNumber = a.replaceAll(s.debitCardNumber, " ", ""), t(0, e.detail.value);
    },
    onClickScane: function(t) {
        var a = this;
        wx.chooseImage({
            count: 1,
            sizeType: [ "compressed" ],
            success: function(t) {
                var s = t.tempFilePaths;
                wx.getFileSystemManager().readFile({
                    filePath: s[0],
                    encoding: "base64",
                    success: function(t) {
                        var s = t.data, o = new Object();
                        o.bas64Image = s, e(a, o);
                    }
                });
            }
        });
    },
    onShareAppMessage: function() {}
});

var a = require("../../utils/util.js"), s = (require("../../utils/bankUtil.js"), 
require("../../utils/requestUtil.js")), o = require("../../utils/resultCodeUtil.js");