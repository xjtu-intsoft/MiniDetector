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
        goPage: function(e) {
            var t = e.currentTarget.dataset;
            1 == t.type ? wx.navigateTo({
                url: t.url
            }) : 3 == t.type ? wx.navigateToMiniProgram({
                appId: "wx05173ac0eee13384"
            }) : 7 == t.type ? wx.previewImage({
                current: "https://image.hiweixiu.com/web-template/recy/home/huishou-shen%403x.png",
                urls: [ "https://image.hiweixiu.com/web-template/recy/home/huishou-shen%403x.png" ]
            }) : (getApp().mtj.trackEvent("repair_newbattery"), wx.navigateTo({
                url: "../bannerWeb/bannerWeb?info=" + t.url
            }));
        }
    },
    lifetimes: {
        attached: function() {
            var e = this.data.data.meta.theme;
            this.setData({
                LImage: this.data.data.items[0],
                RImage: [ this.data.data.items[1], this.data.data.items[2] ],
                background: e.bgType ? "url(".concat(e.background, ")  no-repeat") : e.background
            });
        }
    }
});