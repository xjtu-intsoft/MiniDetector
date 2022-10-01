Component({
    properties: {
        time: String,
        type: String,
        dtmdHref: String
    },
    methods: {
        goPage: function() {
            this.data.dtmdHref && wx.navigateTo({
                url: "/pages/webview/webview?url=" + this.data.dtmdHref
            });
        }
    }
});