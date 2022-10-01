var a = getApp();

Page({
    data: {
        ldhide: "/images/icon/lingdang.png",
        dever_list: [],
        page: 1
    },
    onLoad: function() {
        this.loadData();
    },
    loadData: function() {
        var t = this;
        a.auth(function(e) {
            if (!e.token) return !1;
            wx.showLoading({
                title: "加载中"
            }), wx.request({
                method: "POST",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                url: "https://api.998jx.com/micro/account/attention_fromme",
                data: {
                    page: t.data.page,
                    token: a.globalData.userInfo.token
                },
                success: function(a) {
                    wx.hideLoading(), t.data.total_page = a.data.total_page;
                    for (var e = 0; e < a.data.list.length; e++) t.data.dever_list.push(a.data.list[e]);
                    t.setData({
                        dever_list: t.data.dever_list
                    });
                }
            });
        });
    },
    onReachBottom: function() {
        var a = this;
        a.data.page < a.data.total_page && (wx.showLoading({
            title: "加载中..."
        }), setTimeout(function() {
            wx.hideLoading();
        }, 500), a.data.page = a.data.page + 1, a.loadData());
    }
});