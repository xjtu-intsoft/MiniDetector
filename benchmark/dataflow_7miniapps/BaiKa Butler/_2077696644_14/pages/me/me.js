function e() {
    wx.showModal({
        title: "提示",
        content: "还未登录，请登录",
        success: function(e) {
            e.confirm && wx.navigateTo({
                url: "../login/login"
            });
        }
    });
}

function t(e) {
    wx.showNavigationBarLoading(), wx.request({
        url: getApp().globalData.urlHost + "user/showPersonalCenter.do",
        data: i.getBaseRequest(),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(t) {
            var a = s.transformSuccessData(t);
            if (r.checkResultCode(a)) {
                var o = a.resultBody;
                getApp().globalData.userInfo = o, e.setData({
                    userBeen: o
                });
            }
        },
        fail: function(e) {
            s.showNetError();
        },
        complete: function(e) {
            wx.hideNavigationBarLoading();
        }
    });
}

function a(e, a) {
    s.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "user/modifyLocation.do",
        data: i.addBaseRequest(a),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(a) {
            s.dismissLoading();
            var o = s.transformSuccessData(a);
            r.checkResultCode(o) && (wx.showToast({
                title: "修改成功!"
            }), t(e));
        },
        fail: function(e) {
            s.dismissLoading(), s.showNetError();
        },
        complete: function(e) {}
    });
}

function o(e) {
    wx.request({
        url: getApp().globalData.urlHost + "user/showUserRewardAndSubUserSum.do",
        data: i.getBaseRequest(),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(t) {
            var a = s.transformSuccessData(t);
            if (r.checkResultCode(a)) {
                var o = a.resultBody;
                e.setData({
                    userSum: o
                });
            }
        },
        fail: function(e) {
            s.showNetError();
        }
    });
}

function n(e, a) {
    s.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "user/uploadImageAddress.do",
        data: i.addBaseRequest(a),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(a) {
            s.dismissLoading();
            var o = s.transformSuccessData(a);
            r.checkResultCode(o) && t(e);
        },
        fail: function(e) {
            s.dismissLoading(), s.showNetError();
        }
    });
}

Page({
    data: {
        userBeen: {
            isLogin: 0
        },
        userSum: {
            rewardAmount: 0,
            subUserSum: 0
        },
        hasCard: !1,
        isOpenAccount: 0,
        region: {},
        showRegionDialog: !1,
        showNewMessageTipTimer: void 0,
        showNewMessageTip: !1,
        showContactBtn: !1
    },
    onLogin: function() {
        wx.navigateTo({
            url: "../login/login"
        });
    },
    onErrorMessage: function() {
        0 != this.data.userBeen.isLogin ? wx.navigateTo({
            url: "../errorMessageList/errorMessageList"
        }) : e();
    },
    onUserGuide: function() {
        wx.navigateTo({
            url: "../guideImage/guideImage"
        });
    },
    onHide: function() {
        clearInterval(this.data.showNewMessageTipTimer);
    },
    onShow: function() {
        var e = this;
        this.setData({
            isOpenAccount: getApp().globalData.totalSum.isOpenAccount,
            hasCard: !!getApp().globalData.homeCardsInfo.length,
            totalSum: getApp().globalData.totalSum
        }), this.data.totalSum.isHadReadMsg && (this.data.showNewMessageTipTimer = setInterval(function() {
            e.setData({
                showNewMessageTip: !e.data.showNewMessageTip
            });
        }, 500)), t(this), o(this);
    },
    onRebindAuthBank: function(e) {
        wx.navigateTo({
            url: "../rebindAuthBank/rebindAuthBank"
        });
    },
    onUpdateCard: function(e) {
        wx.navigateTo({
            url: "../updateCardList/updateCardList"
        });
    },
    onInstrance: function(t) {
        0 != this.data.userBeen.isLogin ? wx.navigateTo({
            url: "../myInsurance/myInsurance"
        }) : e();
    },
    onGetuserInfo: function(e) {
        var t = e.detail.userInfo.avatarUrl, a = new Object();
        a.headImage = t, n(this, a);
    },
    onShare: function(t) {
        0 != this.data.userBeen.isLogin ? wx.navigateTo({
            url: "../share/share"
        }) : e();
    },
    onIncome: function(t) {
        0 != this.data.userBeen.isLogin ? wx.navigateTo({
            url: "../income/income"
        }) : e();
    },
    onMyCustomer: function(e) {
        1 == this.data.totalSum.isShowModel && wx.navigateTo({
            url: "../userStatistics/userStatistics"
        });
    },
    onMember: function(t) {
        0 != this.data.userBeen.isLogin ? 1 == this.data.userBeen.isOpenMember && wx.navigateTo({
            url: "../member/member"
        }) : e();
    },
    bindRegionChange: function(e) {
        var t = e.detail.value, a = e.detail.code, o = new Object();
        o.province = t[0], o.city = t[1], o.provinceCode = a[0], o.cityCode = a[1], this.setData({
            region: o,
            showRegionDialog: !0
        });
    },
    cancelResetRegion: function() {
        this.setData({
            showRegionDialog: !1
        });
    },
    confirmResetRegion: function() {
        this.setData({
            showRegionDialog: !1
        }), a(this, this.data.region);
    },
    onMoreAuth: function(e) {
        wx.navigateTo({
            url: "../moreAuthBank/moreAuthBank"
        });
    },
    onMore: function(t) {
        0 != this.data.userBeen.isLogin ? wx.navigateTo({
            url: "../more/more"
        }) : e();
    },
    changeContactBtn: function() {
        var e = this;
        this.setData({
            showContactBtn: !e.data.showContactBtn
        });
    },
    callContact: function() {
        wx.navigateTo({
            url: "../customerServiceWeChat/customerServiceWeChat"
        });
    },
    onShareAppMessage: function(e) {
        return s.getShareInfo();
    }
});

var s = require("../../utils/util.js"), i = require("../../utils/requestUtil.js"), r = require("../../utils/resultCodeUtil.js");