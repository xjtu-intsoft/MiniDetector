var t = require("../../../utils/util.js"), e = require("../../../utils/event.js");

Component({
    properties: {
        item: Object
    },
    data: {
        hiddenVideo: !0,
        mute: !0,
        bgColor: t.pageFun.randomColor(),
        storyType: ""
    },
    attached: function() {
        var t, e = this.data.item;
        t = 1 == e.show_type && e.video_url && 1 != e.video_page ? 1 : e.show_url ? 2 : 3, 
        this.setData({
            storyType: t
        });
    },
    methods: {
        clickStory: function() {
            var e = this.data, i = e.storyType;
            1 == i ? this.play() : 2 != i && 3 != i || t.pageFun.clickStory(e.item);
        },
        loadImg: function(t) {
            this.setData({
                bgColor: ""
            });
        },
        play: function() {
            var t = this;
            if (this.data.hiddenVideo) {
                t.setData({
                    hiddenVideo: !1
                }, function() {
                    getApp().updateVedio(t);
                });
                var i = wx.getStorageSync("user_Id");
                e.mtaEvent("toutiaoVideoView", i, t.data.item.gifnews_id, t.data.item.theme_id);
            }
        },
        playEndAndExit: function() {
            wx.createVideoContext("myVideo", this).exitFullScreen();
        },
        trigerMute: function() {
            this.setData({
                mute: !this.data.mute
            });
        }
    }
});