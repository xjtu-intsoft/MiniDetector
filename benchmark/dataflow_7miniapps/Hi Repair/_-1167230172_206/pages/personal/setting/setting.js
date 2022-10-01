var a = getApp();

Page({
    data: {
        version: "V5.0.18"
    },
    onLoad: function() {
        console.log("app.globalData===="), console.log(a.globalData), a.globalData.version && this.setData({
            version: "V" + a.globalData.version
        });
    },
    callPhone: function(a) {
        wx.makePhoneCall({
            phoneNumber: "4000171010"
        });
    },
    logout: function() {
        wx.clearStorage(), a.globalData.hwxUserInfo.token = "", wx.navigateBack({
            delta: 1
        });
    }
});