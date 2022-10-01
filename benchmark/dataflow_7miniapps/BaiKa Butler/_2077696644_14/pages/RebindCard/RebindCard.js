function e(e, t) {
    s.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "bank/submitBindChannleSmsCode.do",
        data: n.addBaseRequest(t),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(a) {
            s.dismissLoading();
            var o = s.transformSuccessData(a);
            if (r.checkResultCode(o)) {
                1 == e.data.formType && s.reportErrorMessageOperate(3, t.cardId);
                var n = o.resultBody;
                if (4 == n.status) {
                    var d = e.data.cardInfo.bankName + " (" + e.data.cardInfo.cardNumber + " )";
                    n.oldCard = d, e.setData({
                        cardInfo: n,
                        showBindMorePop: !0
                    });
                } else if (5 == n.status) {
                    var i = e.data.cardInfo.channelName;
                    n.oldChannelName = i, e.setData({
                        cardInfo: n,
                        showBindMorePop: !0
                    });
                } else wx.showModal({
                    title: "提示",
                    content: o.resultMsg,
                    success: function(e) {
                        wx.navigateBack({});
                    }
                });
            }
        },
        fail: function(e) {
            s.dismissLoading(), s.showNetError();
        },
        complete: function(e) {}
    });
}

function t(e, t) {
    s.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "bank/sendBindChannleSmsCode.do",
        data: n.addBaseRequest(t),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(t) {
            s.dismissLoading();
            var n = s.transformSuccessData(t);
            r.checkResultCode(n) && (clearInterval(o), d = 60, e.setData({
                codeStr: "60",
                codeButtonEnable: !0
            }), a(e));
        },
        fail: function(e) {
            s.dismissLoading(), s.showNetError();
        }
    });
}

function a(e) {
    o = setInterval(function() {
        if (d <= 0) return clearInterval(o), e.setData({
            codeStr: "获取",
            codeButtonEnable: !1
        });
        d--, e.setData({
            codeStr: d + ""
        });
    }, 1e3);
}

Page({
    data: {
        codeButtonEnable: !1,
        codeStr: "获取",
        cardInfo: {},
        showBindMorePop: !1,
        formType: 0
    },
    onLoad: function(e) {
        this.setData({
            cardInfo: JSON.parse(decodeURIComponent(e.cardInfo)),
            formType: e.formType
        });
    },
    cancelNotifcation: function() {
        this.setData({
            showBindMorePop: !1
        });
    },
    onNextBind: function() {
        this.setData({
            showBindMorePop: !1
        });
        var e = this.data.cardInfo;
        if (4 == e.status) t(this, this.data.cardInfo), this.setData({
            codeStr: "获取",
            codeButtonEnable: !1,
            smsCode: ""
        }); else if (5 == e.status) {
            var a = e.channelId, o = getCurrentPages();
            o[o.length - 2].setData({
                choseChannelId: a
            }), wx.navigateBack({});
        }
    },
    sendAuthCode: function(e) {
        this.data.codeButtonEnable || t(this, this.data.cardInfo);
    },
    formSubmitAddCard: function(t) {
        var a = t.detail.value;
        a.smsCode ? e(this, a) : s.showToast("请输入验证码");
    },
    onShareAppMessage: function() {
        return s.getShareInfo();
    }
});

var o, s = require("../../utils/util.js"), n = (require("../../utils/bankUtil.js"), 
require("../../utils/requestUtil.js")), r = require("../../utils/resultCodeUtil.js"), d = 60;