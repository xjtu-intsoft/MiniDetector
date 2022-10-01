function e(e) {
    var a = new Object();
    a.page = c, t(e, a);
}

function t(e, t) {
    i = !0, wx.showNavigationBarLoading(), wx.request({
        url: getApp().globalData.urlHost + "user/showEarningDetail.do",
        data: n.addBaseRequest(t),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(t) {
            var a = o.transformSuccessData(t);
            if (r.checkResultCode(a)) {
                var n = e.data.earnItems, i = a.resultBody;
                1 == c && (n = new Array());
                for (var d = 0; d < i.length; d++) i[d].headImage || (i[d].headImage = "../../images/ic_head_three.png");
                s = i.length >= u, i = n.concat(i), e.setData({
                    earnItems: i
                });
            }
        },
        fail: function(e) {
            o.showNetError();
        },
        complete: function(e) {
            wx.hideNavigationBarLoading(), i = !1;
        }
    });
}

function a(e) {
    wx.request({
        url: getApp().globalData.urlHost + "user/showRewardCountResult.do",
        data: n.getBaseRequest(),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(t) {
            var a = o.transformSuccessData(t);
            if (r.checkResultCode(a)) {
                var n = a.resultBody;
                getApp().globalData.earnInfo = n, e.setData({
                    earnInfo: n
                });
            }
        },
        fail: function(e) {
            o.showNetError();
        },
        complete: function(e) {}
    });
}

Page({
    data: {
        earnItems: []
    },
    onLoad: function(e) {
        c = 1;
    },
    onHowWithdraw: function(e) {
        wx.navigateTo({
            url: "../withdrawTip/withdrawTip"
        });
    },
    onShow: function() {
        a(this), e(this);
    },
    onWithdraw: function(e) {
        wx.navigateTo({
            url: "../incomeWithdraw/incomeWithdraw"
        });
    },
    onWithdrawRecord: function(e) {
        this.data.earnInfo.rewardAmount, this.data.earnInfo.rewardBalance;
        wx.navigateTo({
            url: "../incomeWithdrawRecord/incomeWithdrawRecord"
        });
    },
    onScrollBottom: function(t) {
        !i && s && (c++, e(this));
    },
    onShareAppMessage: function() {
        return o.getShareInfo();
    }
});

var o = require("../../utils/util.js"), n = require("../../utils/requestUtil.js"), r = require("../../utils/resultCodeUtil.js"), i = !1, s = !1, u = 20, c = 1;