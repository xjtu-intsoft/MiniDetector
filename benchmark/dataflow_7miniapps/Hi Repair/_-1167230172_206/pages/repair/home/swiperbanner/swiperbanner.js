Component({
    data: {
        autoplay: !0,
        interval: 7e3,
        duration: 500,
        active_color: "#ffffff",
        url: "https://pic.hiweixiu.com/hiweixiu-mobile/img/bannerbg.png",
        background: "",
        current: 0
    },
    properties: {
        data: Object
    },
    methods: {
        bannerJump: function(a) {
            var e = a.target.dataset;
            getApp().mtj.trackEvent("home_statistics", {
                parameter_name: "banner"
            }), "" != e.jump && ("https://api.hiweixiu.com/era/v1/test/test" == e.jump ? wx.navigateToMiniProgram({
                appId: "wx05173ac0eee13384",
                path: "pages/home/feature/index?alias=Syc7OVQHlR",
                extraData: {
                    foo: "bar"
                },
                success: function(a) {}
            }) : "hiyouxuan" == e.jump ? wx.navigateToMiniProgram({
                appId: "wx05173ac0eee13384",
                path: "pages/common/blank-page/index?weappSharePath=pages/home/dashboard/index?kdt_id=40983300",
                extraData: {
                    foo: "bar"
                },
                success: function(a) {}
            }) : e.jump.match(/(\/)?pages\//).length > 0 ? wx.navigateTo({
                url: decodeURIComponent(e.jump)
            }) : wx.navigateTo({
                url: "../bannerWeb/bannerWeb?info=" + encodeURIComponent(e.jump)
            }));
        }
    },
    lifetimes: {
        attached: function() {
            var a = this.data.data.meta.theme;
            this.setData({
                background: a.bgType ? "url(".concat(a.background, ")  no-repeat") : a.background
            });
        }
    }
});