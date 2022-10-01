Component({
    data: {
        background: ""
    },
    properties: {
        data: Object
    },
    methods: {
        goPage: function(t) {
            getApp().mtj.trackEvent("home_banner");
            var a = t.currentTarget.dataset;
            a.type && (1 == a.type ? (wx.navigateTo({
                url: a.url
            }), "/pages/appleRepair/fault/fault" == a.url && (console.log(a.url), getApp().mtj.trackEvent("home_official"))) : wx.navigateTo({
                url: "../bannerWeb/bannerWeb?info=" + a.url
            }));
        }
    },
    lifetimes: {
        attached: function() {
            var t = this.data.data.meta.theme;
            this.setData({
                background: t.bgType ? "url(".concat(t.background, ")  no-repeat") : t.background
            });
        }
    }
});