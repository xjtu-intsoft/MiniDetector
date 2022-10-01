Page({
    auth: function() {
        wx.openSetting();
    },
    onShow: function() {
        var t = this;
        wx.getSetting && wx.hideLoading ? wx.getSetting({
            success: function(e) {
                e.authSetting["scope.userLocation"] ? wx.getLocation({
                    type: "gcj02",
                    success: function(t) {
                        wx.reLaunch({
                            url: "/pages/deviceadd/index"
                        });
                    },
                    fail: function() {
                        app.show_erro("微信尚未获得定位权限，请检查手机设置", "error");
                    }
                }) : (wx.authorize({
                    scope: "scope.userLocation"
                }), t.auth());
            }
        }) : wx.showModal({
            title: "提示",
            showCancel: !1,
            content: "您的微信版本过低，无法使用该应用，请升级到最新微信版本后重试。"
        });
    }
});