function e(e, a) {
    s.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "bank/recognizeImageBankCard.do",
        data: n.addBaseRequest(a),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(a) {
            s.dismissLoading();
            var t = s.transformSuccessData(a);
            if (r.checkResultCode(t)) {
                var n = t.resultBody.bankName, o = t.resultBody.bankType, i = t.resultBody.cardNumber;
                i = s.replaceAll(i, " ", ""), e.setData({
                    scanCardNumber: i,
                    bankName: n,
                    scaneData: t.resultBody,
                    bankIndex: o
                });
            }
        },
        fail: function(e) {
            s.dismissLoading(), s.showNetError();
        },
        complete: function(e) {}
    });
}

function a(e, a) {
    o || (o = !0, s.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "bank/recognizeBankCard.do",
        data: n.addBaseRequest(a),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(a) {
            s.dismissLoading();
            var t = s.transformSuccessData(a);
            console.log(t), 1e4 == t.resultCode && e.setData({
                bankName: t.resultBody.bankName,
                bankIndex: t.resultBody.bankType
            });
        },
        fail: function(e) {
            s.dismissLoading(), s.showNetError();
        },
        complete: function(e) {
            o = !1;
        }
    }));
}

function t(e, a) {
    s.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "user/userAuth.do",
        data: n.addBaseRequest(a),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(a) {
            s.dismissLoading();
            var t = s.transformSuccessData(a);
            if (1e4 == t.resultCode) e.setData({
                authSuccessMaskHidden: !1
            }); else {
                var n = t.resultMsg;
                e.setData({
                    reason: n,
                    maskHidden: !1
                });
            }
        },
        fail: function(e) {
            s.dismissLoading(), s.showNetError();
        },
        complete: function(e) {}
    });
}

Page({
    data: {
        region: {},
        maskHidden: !0,
        isShowAgreement: !0,
        authSuccessMaskHidden: !0
    },
    onInputCardNumber: function(e) {
        var t = s.replaceAll(e.detail.value, " ", "");
        19 != t.length || o || a(this, {
            cardNumber: t
        });
    },
    onCancelMask: function(e) {
        this.setData({
            maskHidden: !0
        });
    },
    onChangeAgreement: function(e) {
        var a = !1;
        1 == e.detail.value.length && (a = !0), this.setData({
            isShowAgreement: a
        });
    },
    bindRegionChange: function(e) {
        console.log("adress: " + JSON.stringify(e.detail));
        var a = e.detail.value, t = a[0] + a[1];
        this.setData({
            address: t,
            region: e.detail
        });
    },
    onAgreement: function(e) {
        wx.navigateTo({
            url: "../userAgreement/userAgreement"
        });
    },
    onAuth: function(e) {
        var a = e.detail.value;
        a.cardNumber = s.replaceAll(a.cardNumber, " ", ""), wx.setStorageSync("isShowAgreement", !0), 
        t(this, e.detail.value);
    },
    onClickScane: function(a) {
        var t = this;
        wx.chooseImage({
            count: 1,
            sizeType: [ "compressed" ],
            success: function(a) {
                var s = a.tempFilePaths;
                wx.getFileSystemManager().readFile({
                    filePath: s[0],
                    encoding: "base64",
                    success: function(a) {
                        var s = a.data, n = new Object();
                        n.bas64Image = s, e(t, n);
                    }
                });
            }
        });
    },
    onNext: function() {
        wx.redirectTo({
            url: "../addCard/addCard"
        });
    },
    onShareAppMessage: function() {}
});

var s = require("../../utils/util.js"), n = (require("../../utils/bankUtil.js"), 
require("../../utils/requestUtil.js")), r = require("../../utils/resultCodeUtil.js"), o = !1;