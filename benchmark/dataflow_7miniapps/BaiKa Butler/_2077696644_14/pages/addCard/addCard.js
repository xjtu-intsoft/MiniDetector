function e() {
    wx.navigateTo({
        url: "../userAgreement/userAgreement"
    });
}

function a(e, a) {
    h.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "bank/recognizeImageBankCard.do",
        data: f.addBaseRequest(a),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(a) {
            h.dismissLoading();
            var t = h.transformSuccessData(a);
            if (g.checkResultCode(t)) {
                t.resultBody.bankName;
                for (var n = t.resultBody.bankType, s = 0, o = 0; o < e.data.banks.length; o++) if (e.data.banks[o].bankType == n) {
                    s = o;
                    break;
                }
                e.setData({
                    scaneData: t.resultBody,
                    bankIndex: s
                }), d(e);
            }
        },
        fail: function(e) {
            h.dismissLoading(), h.showNetError();
        },
        complete: function(e) {}
    });
}

function t(e, a) {
    b || (b = !0, h.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "bank/submitBindCardSmsCode.do",
        data: f.addBaseRequest(a),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(a) {
            h.dismissLoading();
            var t = h.transformSuccessData(a);
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
            h.dismissLoading(), h.showNetError();
        },
        complete: function(e) {
            b = !1;
        }
    }));
}

function n(e, a) {
    h.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "bank/sendBindCardSmsCode.do",
        data: f.addBaseRequest(a),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(a) {
            h.dismissLoading();
            var t = h.transformSuccessData(a);
            g.checkResultCode(t) && (w = 60, e.setData({
                codeStr: "60",
                codeButtonEnable: !0
            }), i(e));
        },
        fail: function(e) {
            h.dismissLoading(), h.showNetError();
        },
        complete: function(e) {}
    });
}

function s(e) {
    var a = h.replaceAll(e, " ", "");
    return !(a.length < 16 || a.length > 20) && (console.log("字符串前8位：" + a.substring(0, 8)), 
    !(p && p.length > 1 && p.substring(0, 8) == a.substring(0, 8)));
}

function o(e, a) {
    m || (m = !0, h.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "bank/recognizeBankCard.do",
        data: f.addBaseRequest(a),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(t) {
            h.dismissLoading();
            var n = h.transformSuccessData(t);
            if (console.log(n), p = a.cardNumber, 1e4 == n.resultCode) {
                for (var s = n.resultBody.bankType, o = -1, i = 0; i < e.data.banks.length; i++) if (e.data.banks[i].bankType == s) {
                    o = i;
                    break;
                }
                e.setData({
                    bankIndex: o
                }), d(e);
            }
        },
        fail: function(e) {
            h.dismissLoading(), h.showNetError();
        },
        complete: function(e) {
            m = !1;
        }
    }));
}

function i(e) {
    if (w <= 0) e.setData({
        codeStr: "获取",
        codeButtonEnable: !1
    }); else setTimeout(function() {
        w--, e.setData({
            codeStr: w + ""
        }), i(e);
    }, 1e3);
}

function r(e) {
    h.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "bank/showSupportBanks.do",
        data: f.getBaseRequest(),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(a) {
            h.dismissLoading();
            var t = h.transformSuccessData(a);
            if (g.checkResultCode(t)) {
                var n = t.resultBody;
                e.setData({
                    banks: n
                });
            }
        },
        fail: function(e) {
            h.dismissLoading(), h.showNetError();
        },
        complete: function(e) {}
    });
}

function d(e) {
    var a = new Object(), t = e.data.bankIndex, n = e.data.banks;
    a.bankType = e.data.banks[t].bankType, wx.request({
        url: getApp().globalData.urlHost + "bank/showCanBindChannelList.do",
        data: f.addBaseRequest({
            bankType: n[e.data.bankIndex].bankType
        }),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(a) {
            var t = h.transformSuccessData(a);
            if (10002 == t.resultCode) e.changeLargeOpeningTip(); else if (g.checkResultCode(t)) {
                var n = -1;
                t.resultBody.map(function(e, a) {
                    1 == e.default && (n = a);
                }), e.setData({
                    channelDefaultIndex: n,
                    channels: t.resultBody
                });
            }
        },
        fail: function(e) {
            h.showNetError();
        },
        complete: function(e) {}
    });
}

function u(e) {
    wx.request({
        url: getApp().globalData.urlHost + "user/showUserAuthInfo.do",
        data: f.getBaseRequest(),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(a) {
            var t = h.transformSuccessData(a);
            if (g.checkResultCode(t)) {
                var n = t.resultBody;
                e.setData({
                    authInfo: n
                });
            }
        },
        fail: function(e) {
            h.showNetError();
        },
        complete: function(e) {}
    });
}

function c(e) {
    h.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "bank/applyAuthBindBigChannel.do",
        data: f.getBaseRequest(),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(a) {
            h.dismissLoading();
            var t = h.transformSuccessData(a);
            g.checkResultCode(t) && (wx.showToast({
                title: "开通成功"
            }), e.onShow(), e.changeLargeOpeningTip());
        },
        fail: function(e) {
            h.dismissLoading(), h.showNetError();
        },
        complete: function(e) {}
    });
}

var l = "", p = "";

Page({
    data: {
        maskHidden: !0,
        scaneData: {},
        hiddenInputBank: !0,
        hiddenBank: !0,
        date: [],
        banks: [],
        banksType: [],
        accountDateIndex: -1,
        repaymentDateIndex: -1,
        bankIndex: -1,
        channels: [],
        channelDefaultIndex: -1,
        codeButtonEnable: !1,
        codeStr: "获取",
        isShowAgreement: !0,
        expiryDateMonth: [ "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12" ],
        expiryDateMonthIndex: -1,
        hiddenExpiryDate: !0,
        expiryDateYear: [],
        expiryDateYearIndex: -1,
        hiddenCVN: !0,
        authSuccessMaskHidden: !0,
        showLargeOpeningTip: !1
    },
    onLoad: function(e) {
        l = "", p = "";
        for (var a = new Array(), t = 0; t < 30; t++) a[t] = t + 1;
        for (var n = new Array(), s = 0; s < 50; s++) n[s] = "" + (s + 20);
        this.setData({
            date: a,
            expiryDateYear: n
        }), u(this), r(this);
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
    onAgreement: function(a) {
        e();
    },
    onBlurCardNumber: function(e) {
        new Object();
    },
    bindPickerAccountDateChange: function(e) {
        var a = e.detail.value;
        this.setData({
            accountDateIndex: a
        });
    },
    onPickerExpiryMonth: function(e) {
        this.setData({
            expiryDateMonthIndex: e.detail.value
        });
    },
    onShowExpiryDate: function(e) {
        this.setData({
            hiddenExpiryDate: !1
        });
    },
    cancelExpiryDateTip: function(e) {
        this.setData({
            hiddenExpiryDate: !0
        });
    },
    onPickerExpiryYear: function(e) {
        this.setData({
            expiryDateYearIndex: e.detail.value
        });
    },
    onShowCVN: function(e) {
        this.setData({
            hiddenCVN: !1
        });
    },
    cancelCVNTip: function(e) {
        this.setData({
            hiddenCVN: !0
        });
    },
    bindPickerChannel: function(e) {
        e.detail.value && this.setData({
            channelDefaultIndex: e.detail.value
        });
    },
    changeLargeOpeningTip: function() {
        this.setData({
            showLargeOpeningTip: !this.data.showLargeOpeningTip
        });
    },
    largeOpening: function() {
        c(this);
    },
    onInputCardNumber: function(e) {
        var a = e.detail.value;
        if (s(a) && !m) {
            var t = new Object();
            t.cardNumber = h.replaceAll(a, " ", ""), o(this, t);
        }
    },
    onClickScane: function(e) {
        var t = this;
        wx.chooseImage({
            count: 1,
            sizeType: [ "compressed" ],
            success: function(e) {
                var n = e.tempFilePaths;
                wx.getFileSystemManager().readFile({
                    filePath: n[0],
                    encoding: "base64",
                    success: function(e) {
                        var n = e.data, s = new Object();
                        s.bas64Image = n, a(t, s);
                    }
                });
            }
        });
    },
    bindPickerBankChange: function(e) {
        var a = e.detail.value;
        this.setData({
            bankIndex: a
        }), d(this);
    },
    bindPickerRepaymentDateChange: function(e) {
        var a = e.detail.value;
        this.setData({
            repaymentDateIndex: a
        });
    },
    sendAuthCode: function(e) {
        if (!this.data.codeButtonEnable) {
            var a = e.detail.value;
            -1 != this.data.bankIndex ? a.cardNumber ? a.expiryDate ? a.cvn ? a.phone ? (a.cardNumber = h.replaceAll(a.cardNumber, " ", ""), 
            a.balance = parseInt(a.balance), n(this, a)) : h.showToast("请输入手机号码") : h.showToast("请输入CVN码") : h.showToast("请输入有效期") : h.showToast("请输入卡号") : h.showToast("请选择银行");
        }
    },
    formSubmitAddCard: function(e) {
        wx.setStorageSync("isShowAgreement", !0);
        var a = e.detail.value;
        -1 != this.data.bankType ? a.cardNumber ? a.expiryDate ? a.cvn ? a.phone ? (a.cardNumber = h.replaceAll(a.cardNumber, " ", ""), 
        a.balance = parseInt(a.balance), t(this, a)) : h.showToast("请输入手机号") : h.showToast("请输入CVN吗") : h.showToast("请输入有效期") : h.showToast("请输入卡号") : h.showToast("请选择银行");
    },
    onNext: function() {
        wx.redirectTo({
            url: "../moreAuthBank/moreAuthBank"
        });
    },
    onShareAppMessage: function() {
        return h.getShareInfo();
    }
});

var h = require("../../utils/util.js"), f = (require("../../utils/bankUtil.js"), 
require("../../utils/requestUtil.js")), g = require("../../utils/resultCodeUtil.js"), b = !1, m = !1, w = 60;