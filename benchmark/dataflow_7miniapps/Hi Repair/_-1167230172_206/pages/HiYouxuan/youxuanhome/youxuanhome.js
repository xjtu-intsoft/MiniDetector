Page({
    data: {},
    onLoad: function(a) {},
    onReady: function() {},
    onShow: function() {
        wx.navigateToMiniProgram({
            appId: "wx05173ac0eee13384",
            path: "pages/common/blank-page/index?weappSharePath=pages/home/dashboard/index?kdt_id=40983300",
            extraData: {
                foo: "bar"
            },
            success: function(a) {}
        });
    },
    goHiYouxuan: function() {
        wx.navigateToMiniProgram({
            appId: "wx05173ac0eee13384",
            path: "pages/common/blank-page/index?weappSharePath=pages/home/dashboard/index?kdt_id=40983300",
            extraData: {
                foo: "bar"
            },
            success: function(a) {}
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: "Hi维修手机上门维修回收平台",
            path: "/pages/repair/home/home",
            imageUrl: "https://pic.hiweixiu.com/hiweixiu-mobile/img/wxshare.png"
        };
    },
    onPageScroll: function() {},
    onTabItemTap: function(a) {}
});