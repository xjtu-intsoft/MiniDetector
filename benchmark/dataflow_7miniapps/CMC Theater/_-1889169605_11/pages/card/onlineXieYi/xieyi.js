Page({
    data: {
        url: ""
    },
    onLoad: function(a) {
        var l = a.url;
        console.log("url = " + l), l && this.setData({
            url: "https://group.leying.com/app/middleware-page?url=" + l
        });
    }
});