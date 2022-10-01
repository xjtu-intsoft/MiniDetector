Page({
    data: {
        image: ""
    },
    onLoad: function(n) {
        this.setData({
            image: getApp().globalData.userInfo.userGuideImage
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});