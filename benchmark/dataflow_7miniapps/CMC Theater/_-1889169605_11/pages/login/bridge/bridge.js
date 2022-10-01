Page({
    onLoad: function(o) {
        if ("coupon_active" == o.fromType && (console.log("hahaha"), !getApp().userIsLogin() && o.session_id)) {
            console.log(o.session_id), console.log(o.mobile);
            var n = {
                session_id: o.session_id,
                nickname: o.mobile,
                mobile: o.mobile
            };
            getApp().setUserInfo(n);
        }
        this.goMovie();
    },
    goMovie: function() {
        wx.switchTab({
            url: "/pages/home/cinema/cinema"
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