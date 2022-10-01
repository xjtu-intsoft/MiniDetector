Component({
    data: {
        url: "https://pic.hiweixiu.com/hiweixiu-mobile/img/bannerbg.png",
        LImage: null,
        RImage: null,
        background: ""
    },
    properties: {
        data: Object
    },
    methods: {
        goPage: function(t) {
            var a = t.currentTarget.dataset;
            1 == a.type ? (wx.navigateTo({
                url: a.url
            }), "left" == a.pos && getApp().mtj.trackEvent("home_official_two"), "right" == a.pos && getApp().mtj.trackEvent("home_coupons")) : 3 == a.type ? wx.navigateToMiniProgram({
                appId: a.extra.app_id,
                path: a.url,
                success: function(t) {}
            }) : (getApp().mtj.trackEvent("repair_newbattery"), wx.navigateTo({
                url: "../bannerWeb/bannerWeb?info=" + a.url
            }));
        }
    },
    lifetimes: {
        attached: function() {
            var t = this.data.data.meta.theme;
            this.setData({
                LImage: this.data.data.items[0],
                RImage: [ this.data.data.items[1], this.data.data.items[2] ],
                background: t.bgType ? "url(".concat(t.background, ")  no-repeat") : t.background
            });
        }
    }
});