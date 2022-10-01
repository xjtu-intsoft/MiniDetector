var e = getApp().urlService;

Page({
    data: {
        tendingMessage: ""
    },
    onLoad: function(e) {
        console.log(e), e.tend_message && e.tend_message.length > 0 && this.setData({
            tendingMessage: e.tend_message
        });
    },
    onShow: function() {},
    onPullDownRefresh: function() {
        this.startDownLoad();
    },
    startDownLoad: function() {
        var t = e.urls.updateCompleted, a = e.urlParameter({});
        e.wxRequest.getRequest(t, a).then(function(e) {
            console.log(e), "0" == e.data.errcode && e.data.data.status && "1" == e.data.data.status && wx.switchTab({
                url: "/pages/home/cinema/cinema"
            });
        }).finally(function() {
            wx.stopPullDownRefresh();
        });
    }
});