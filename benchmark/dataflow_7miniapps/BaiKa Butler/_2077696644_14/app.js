App({
    onLaunch: function() {
        var e = wx.getStorageSync("recommendId");
        e && (this.globalData.recommendId = e);
        var o = wx.getStorageSync("recommendType");
        o && (this.globalData.recommendType = o);
    },
    globalData: {
        isFirst: !0,
        requestType: "POST",
        userSessionId: wx.getStorageSync("userSessionId"),
        urlHost: "https://v6.xunhuan99.com/xunhuan/api/",
        appType: 1015,
        versionId: "1.7.3",
        userInfo: {
            isLogin: 0
        },
        totalSum: {
            isOpenAccount: 0,
            isHadReadMsg: 0,
            isTestAccount: 0,
            isShowModel: 0
        },
        homeCardsInfo: {},
        officeAccountInfo: {},
        oaccType: ""
    }
});