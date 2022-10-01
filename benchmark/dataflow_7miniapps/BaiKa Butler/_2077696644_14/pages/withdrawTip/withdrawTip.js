Page({
    data: {
        canIUse: wx.canIUse("official-account"),
        officeAccountName: ""
    },
    onLoad: function(t) {
        this.setData({
            officeAccountName: getApp().globalData.officeAccountInfo.occaName
        });
    },
    goAttention: function() {
        wx.navigateTo({
            url: "../pushNotification/pushNotification"
        });
    },
    goResetWeichat: function(t) {
        wx.navigateTo({
            url: "../resetWeichat/resetWeichat"
        });
    },
    onShow: function() {},
    onShareAppMessage: function() {
        return utils.getShareInfo();
    }
});