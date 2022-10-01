Component({
    properties: {},
    data: {},
    methods: {
        showUserProtocol: function(e) {
            wx.navigateTo({
                url: "/pages/login/agreement/agreement"
            });
        },
        showPolicy: function(e) {
            var o = "/pages/find/promotionDetial/promotionDetial?promotion_url=" + encodeURIComponent("http://group.leying.com/app-privacy-policy/index") + "&flag=yinsizhengce";
            wx.navigateTo({
                url: o
            });
        },
        not_agree: function(e) {
            this.triggerEvent("not_agree", {});
        },
        agree: function(e) {
            getApp().setIsShowedUserProtocol(!0), this.triggerEvent("agree", {});
        }
    }
});