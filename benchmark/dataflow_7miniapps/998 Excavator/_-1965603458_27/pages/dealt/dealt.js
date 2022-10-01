var a = getApp();

Page({
    data: {
        device_list: [],
        page: 1,
        show_foot: !1,
        show_loading: !0
    },
    onLoad: function(t) {
        var e = this;
        a.checklogin() && e.get_selled();
    },
    get_selled: function() {
        var t = this;
        wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/data/get_selled",
            data: {
                token: a.globalData.userInfo.token,
                page: t.data.page
            },
            success: function(a) {
                if (1 == a.data.ret) {
                    for (var e = 0; e < a.data.data.length; e++) t.data.device_list.push(a.data.data[e]);
                    t.setData({
                        device_list: t.data.device_list
                    });
                }
                0 == a.data.ret && t.setData({
                    show_loading: !1,
                    show_foot: !0
                });
            }
        });
    },
    onReachBottom: function() {
        var a = this;
        a.data.page = a.data.page + 1, a.get_selled();
    },
    release: function() {
        wx.switchTab({
            url: "../deviceaddq/index"
        });
    }
});