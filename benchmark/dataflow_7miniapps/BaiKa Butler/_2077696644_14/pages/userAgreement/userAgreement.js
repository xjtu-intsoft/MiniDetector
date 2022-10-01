Page({
    data: {
        isCheck: !1,
        hiddenAgreementButton: !1
    },
    onLoad: function(e) {
        try {
            wx.getStorageSync("isShowAgreement") && this.setData({
                hiddenAgreementButton: !0
            });
        } catch (e) {}
    },
    onShow: function() {},
    onPullDownRefresh: function() {},
    finish: function(e) {
        wx.setStorageSync("isShowAgreement", !0), wx.navigateBack({});
    },
    onAgree: function(e) {
        var n = !1;
        1 == e.detail.value.length && (n = !0), console.log("check: " + n), this.setData({
            isCheck: n
        });
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});