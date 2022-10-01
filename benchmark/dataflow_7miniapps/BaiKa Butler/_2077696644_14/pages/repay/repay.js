function t(t) {
    1 != d && (e(t), d = 1), i && clearTimeout(i), i = setTimeout(function() {
        a(t);
    }, 1e3);
}

function e(t) {
    t.setData({
        hiddenAnimation: 1,
        showAnimation: 0
    });
}

function a(t) {
    d = 0, s(t);
}

function s(t) {
    t.setData({
        showAnimation: 1,
        hiddenAnimation: 0
    });
}

function o(t) {
    wx.request({
        url: getApp().globalData.urlHost + "business/showTodayPlanRepaymentDetail.do",
        data: l.getBaseRequest(),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            var a = c.transformSuccessData(e);
            if (f.checkResultCode(a)) {
                for (var s = a.resultBody, o = 0; o < s.length; o++) {
                    var n = "item-bg-type-", r = s[o].bankName;
                    switch (u.getBankColorType(r)) {
                      case 1:
                        n += "a";
                        break;

                      case 2:
                        n += "b";
                        break;

                      case 3:
                        n += "c";
                        break;

                      case 4:
                        n += "d";
                        break;

                      case 5:
                        n += "e";
                    }
                    s[o].bg = n;
                }
                t.setData({
                    tasks: s
                });
            }
        },
        fail: function(t) {
            c.showNetError();
        },
        complete: function(t) {}
    });
}

function n(t) {
    wx.request({
        url: getApp().globalData.urlHost + "business/showTodayTotalPlanRepaymentInfo.do",
        data: l.getBaseRequest(),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            var a = c.transformSuccessData(e);
            if (f.checkResultCode(a)) {
                var s = a.resultBody;
                t.setData({
                    tasksInfo: s
                });
            }
        },
        fail: function(t) {
            c.showNetError();
        },
        complete: function(t) {}
    });
}

function r(t) {
    wx.request({
        url: getApp().globalData.urlHost + "business/showDecideUserNormal.do",
        data: l.getBaseRequest(),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            var a = c.transformSuccessData(e);
            if (f.checkResultCode(a)) {
                var s = a.resultBody;
                t.setData({
                    taskStatus: s
                });
            }
        },
        fail: function(t) {
            c.showNetError();
        },
        complete: function(t) {}
    });
}

Page({
    data: {
        tasks: [],
        taskStatus: {
            status: 0
        },
        tasksInfo: {
            merchantAmount: 0,
            totalPlanRepaymentAmount: 0
        },
        userInfo: {
            isLogin: 0
        }
    },
    onLoad: function(t) {
        var e = t.sesseionId;
        if (e) {
            getApp().globalData.userSessionId = e;
            try {
                wx.setStorageSync("userSessionId", e);
            } catch (t) {}
        }
    },
    onScrollCard: function(e) {
        t(this);
    },
    onShow: function() {
        r(this), o(this), n(this), this.setData({
            userInfo: getApp().globalData.userInfo
        });
    },
    onLogin: function() {
        wx.navigateTo({
            url: "../login/login"
        });
    },
    onShareAppMessage: function(t) {
        return c.getShareInfo();
    }
});

var i, u = require("../../utils/bankUtil.js"), c = require("../../utils/util.js"), l = require("../../utils/requestUtil.js"), f = require("../../utils/resultCodeUtil.js"), d = -1;