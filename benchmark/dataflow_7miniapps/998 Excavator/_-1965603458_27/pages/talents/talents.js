Page({
    data: {
        zp: ""
    },
    onLoad: function(n) {
        var o = this;
        console.log(n), o.setData({
            zp: n.zp
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