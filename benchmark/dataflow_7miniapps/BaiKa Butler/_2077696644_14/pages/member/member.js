function t(t) {
    wx.request({
        url: getApp().globalData.urlHost + "user/showCanBuyMembers.do",
        data: i.getBaseRequest(),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            var a = n.transformSuccessData(e);
            u.checkResultCode(a) && t.setData({
                memberGrade: a.resultBody
            });
        },
        fail: function(t) {
            n.showNetError();
        },
        complete: function(t) {}
    });
}

function e(t) {
    wx.showNavigationBarLoading(), wx.request({
        url: getApp().globalData.urlHost + "user/showCurrenMemberInfo.do",
        data: i.getBaseRequest(),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            var a = n.transformSuccessData(e);
            u.checkResultCode(a) && (wx.canIUse("setNavigationBarColor") && wx.setNavigationBarColor({
                backgroundColor: a.resultBody.bgColor,
                frontColor: "#ffffff"
            }), t.setData({
                currentMember: a.resultBody
            }));
        },
        fail: function(t) {
            n.showNetError();
        },
        complete: function(t) {
            wx.hideNavigationBarLoading();
        }
    });
}

function a(t) {
    wx.request({
        url: getApp().globalData.urlHost + "user/showMemberProducts.do",
        data: i.getBaseRequest(),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            var a = n.transformSuccessData(e);
            if (u.checkResultCode(a)) {
                var o = a.resultBody;
                t.setData({
                    items: o
                });
            }
        },
        fail: function(t) {},
        complete: function(t) {}
    });
}

function o(t, e) {
    wx.showNavigationBarLoading(), wx.request({
        url: getApp().globalData.urlHost + "user/createPayOrder.do",
        data: i.addBaseRequest(e),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(t) {
            var e = n.transformSuccessData(t);
            u.checkResultCode(e) && s(e.resultBody);
        },
        fail: function(t) {
            n.showNetError();
        },
        complete: function(t) {
            wx.hideNavigationBarLoading();
        }
    });
}

function s(t) {
    wx.requestPayment({
        timeStamp: t.timeStamp,
        nonceStr: t.nonceStr,
        package: t.package,
        signType: "MD5",
        paySign: t.paySign,
        success: function(t) {
            wx.navigateTo({
                url: "../memberPayResult/memberPayResult"
            });
        },
        fail: function(t) {
            console.log("失败");
        }
    });
}

function r(t) {
    wx.request({
        url: getApp().globalData.urlHost + "user/queryKefuWeiXinInfo.do",
        data: i.getBaseRequest(),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            var a = n.transformSuccessData(e);
            u.checkResultCode(a) && t.setData({
                wechatList: a.resultBody
            });
        },
        fail: function(t) {
            n.showNetError();
        }
    });
}

Page({
    data: {
        currentMember: {},
        memberGrade: [],
        currentUpgradePosition: 0,
        items: [],
        isIos: !0,
        showRightsView: !1,
        showDetailPosition: -1,
        randomTip: "",
        wechatList: []
    },
    onLoad: function(o) {
        var s = this;
        wx.getSystemInfo({
            success: function(t) {
                s.setData({
                    totalSum: getApp().globalData.totalSum,
                    showRightsView: 1 == getApp().globalData.totalSum.isOpenAccount && 1 == getApp().globalData.totalSum.isShowModel,
                    isIos: "ios" == t.platform
                });
            }
        }), e(this), t(this), a(this), r(this);
    },
    onShow: function() {
        var t = "?min=" + new Date().getMinutes();
        this.setData({
            randomTip: t
        });
    },
    onRadioChange: function(t) {
        var e = t.detail.value;
        this.setData({
            currentUpgradePosition: e
        });
    },
    onShowItemDetail: function(t) {
        var e = t.currentTarget.dataset.position;
        this.data.showDetailPosition == e && (e = -1), this.setData({
            showDetailPosition: e
        });
    },
    onPay: function(t) {
        var e = new Object();
        e.level = this.data.items[this.data.currentUpgradePosition].level, o(0, e);
    },
    copyWechat: function(t) {
        wx.setClipboardData({
            data: t.target.id,
            success: function(t) {
                wx.showToast({
                    title: "复制成功"
                });
            }
        });
    },
    onShareAppMessage: function() {
        return n.getShareInfo();
    }
});

var n = require("../../utils/util.js"), i = require("../../utils/requestUtil.js"), u = require("../../utils/resultCodeUtil.js");