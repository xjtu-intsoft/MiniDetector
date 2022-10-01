Component({
    data: {},
    properties: {
        config: {
            type: Object
        }
    },
    methods: {
        imgJump: function(e) {
            var n = e.currentTarget.dataset;
            console.log(n), n.link && (0 == n.type ? wx.navigateTo({
                url: n.link
            }) : wx.navigateTo({
                url: "../../repair/bannerWeb/bannerWeb?info=" + encodeURIComponent(n.link)
            }));
        }
    }
});