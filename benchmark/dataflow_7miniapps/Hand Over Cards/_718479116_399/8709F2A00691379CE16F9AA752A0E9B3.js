Page({
    data: {},
    onLoad: function(t) {},
    onShow: function() {
        wx.showToast({
            title: "当前功能已下线"
        }), setTimeout(function() {
            wx.switchTab({
                url: "/pages/cardMain/cardMain"
            });
        }, 1e3);
    }
});