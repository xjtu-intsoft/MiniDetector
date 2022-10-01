Page({
    data: {
        warrantyInfo: null
    },
    onLoad: function(n) {
        console.log(n), this.setData({
            warrantyInfo: JSON.parse(n.warranty)
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onPageScroll: function() {},
    onTabItemTap: function(n) {}
});