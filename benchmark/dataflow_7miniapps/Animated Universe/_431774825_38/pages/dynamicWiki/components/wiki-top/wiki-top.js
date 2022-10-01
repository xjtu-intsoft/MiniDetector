var t = require("../../../../utils/util.js");

Component({
    properties: {
        item: Object
    },
    data: {
        hiddenVideo: !0,
        mute: !0
    },
    methods: {
        play: function() {
            var t = this;
            this.setData({
                hiddenVideo: !1
            }, function() {
                wx.createVideoContext("wikiVideo", t).play();
            });
        },
        trigerMute: function() {
            var t = this.data.mute;
            this.setData({
                mute: !t
            });
        },
        playEndAndExit: function() {
            wx.createVideoContext("wikiVideo", this).exitFullScreen();
        },
        goImageDetailPage: function() {
            t.pageFun.clickStory(this.data.item);
        }
    }
});