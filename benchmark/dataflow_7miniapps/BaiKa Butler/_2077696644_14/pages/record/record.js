function t(t) {
    1 != h && (e(t), h = 1), u && clearTimeout(u), u = setTimeout(function() {
        o(t);
    }, 1e3);
}

function e(t) {
    t.setData({
        hiddenAnimation: 1,
        showAnimation: 0
    });
}

function o(t) {
    h = 0, a(t);
}

function a(t) {
    t.setData({
        showAnimation: 1,
        hiddenAnimation: 0
    });
}

function n(t) {
    console.log("abcc"), wx.request({
        url: getApp().globalData.urlHost + "business/showTodayCostAndRepaymentCount.do",
        data: d.getBaseRequest(),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            var o = c.transformSuccessData(e);
            if (l.checkResultCode(o)) {
                var a = o.resultBody;
                t.setData({
                    totalRecord: a
                });
            }
        },
        fail: function(t) {
            c.showNetError();
        },
        complete: function(t) {}
    });
}

function s(t) {
    var e = new Object();
    e.flag = t.data.headState, e.sortType = t.data.sortType[t.data.sortOptionIndex].flag, 
    r(t, e);
}

function r(t, e) {
    wx.request({
        url: getApp().globalData.urlHost + "business/showTodayCostAndRepaymentDetail.do",
        data: d.addBaseRequest(e),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            var o = c.transformSuccessData(e);
            if (l.checkResultCode(o)) {
                var a = o.resultBody;
                t.setData({
                    record: a
                });
            }
        },
        fail: function(t) {
            c.showNetError();
        },
        complete: function(t) {}
    });
}

function i(t, e) {
    wx.request({
        url: getApp().globalData.urlHost + "bank/userChangeChannel.do",
        data: d.addBaseRequest(e),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            var o = c.transformSuccessData(e);
            l.checkResultCode(o) && s(t);
        },
        fail: function(t) {
            c.showNetError();
        },
        complete: function(t) {}
    });
}

Page({
    data: {
        totalRecord: {
            todaySuccessCostAmount: 0,
            todayFailCostCounts: 0,
            todaySuccessCostCounts: 0,
            todaySuccessRepaymentAmount: 0,
            todayFailRepaymentCounts: 0,
            todaySuccessRepaymentCounts: 0
        },
        record: [],
        sortType: [ {
            name: "银行",
            flag: 1
        }, {
            name: "时间",
            flag: 2
        } ],
        showChoseSort: !1,
        sortOptionIndex: 0,
        headState: 1,
        maskHidden: !0,
        selectItem: {},
        userInfo: {
            isLogin: 0
        }
    },
    onLogin: function() {
        wx.navigateTo({
            url: "../login/login"
        });
    },
    onSwitchSortOption: function(t) {
        var e = this.data.showChoseSort;
        this.setData({
            showChoseSort: !e
        });
    },
    onHiddenSortOption: function(t) {
        var e = t.currentTarget.dataset.position;
        this.setData({
            sortOptionIndex: e
        }), s(this);
    },
    onCancelMask: function(t) {
        this.setData({
            maskHidden: !0
        });
    },
    onItemClick: function(t) {
        var e = t.currentTarget.dataset.position, o = this.data.record[e];
        2 == o.statu && this.setData({
            maskHidden: !1,
            selectItem: o
        });
    },
    onCommentGood: function(t) {
        var e = t.currentTarget.dataset.position, o = this.data.record[e], a = new Object();
        a.tradeId = o.tradeId, a.bool = 1, i(this, a);
    },
    onCommentBad: function(t) {
        var e = t.currentTarget.dataset.position, o = this.data.record[e], a = new Object();
        a.tradeId = o.tradeId, a.bool = 1, i(this, a);
    },
    onTotalRecord: function(t) {
        0 != this.data.userInfo.isLogin && wx.navigateTo({
            url: "../totalRecord/totalRecord"
        });
    },
    onShow: function() {
        n(this), s(this), this.setData({
            userInfo: getApp().globalData.userInfo
        });
    },
    onScrollCard: function(e) {
        t(this);
    },
    onChoseState: function(t) {
        var e = t.currentTarget.dataset.state;
        this.setData({
            headState: e
        }), s(this);
    },
    onClickBody: function(t) {},
    onShareAppMessage: function() {
        return c.getShareInfo();
    }
});

var u, c = require("../../utils/util.js"), d = (require("../../utils/bankUtil.js"), 
require("../../utils/requestUtil.js")), l = require("../../utils/resultCodeUtil.js"), h = -1;