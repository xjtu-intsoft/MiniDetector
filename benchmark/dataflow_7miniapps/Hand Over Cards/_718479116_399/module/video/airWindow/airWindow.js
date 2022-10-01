var t = getApp(), e = 0;

Component({
    properties: {},
    data: {
        addToMyappVideo: t.source.video_airWindow,
        videoPanel: {
            show: !1,
            loop: !1,
            type: "click",
            play: !1,
            status: "playing"
        },
        videoContext: null,
        controls: !1,
        showTime: !1,
        videoProgress: {}
    },
    lifetimes: {
        attached: function() {
            this._videoFun(), this.data.progressAnimation = wx.createAnimation({
                duration: 250,
                timingFunction: "linear"
            }), t.burying.setSensorEvent(t, {
                PromptType: "弹窗视频引导添加到浮窗"
            }, "AddToMyMiniProgramMaskShow");
        }
    },
    pageLifetimes: {
        show: function() {
            var t = this;
            this.data.videoPanel.show && this.data.videoPanel.play && (e = new Date().getTime()), 
            this.data.videoPanel.show && "share" == this.data.videoPanel.type && !this.data.videoPanel.play && setTimeout(function() {
                e = new Date().getTime(), t.data.videoPanel.play = !0, t.data.videoContext.play();
            }, 200);
        },
        hide: function() {
            if (this.data.videoPanel.show && this.data.videoPanel.play) {
                var a = new Date().getTime();
                t.burying.setSensorEvent(t, {
                    RunningTime: (a - e) / 1e3,
                    PromptType: "弹窗视频"
                }, "AddToMyMiniProgramMaskClose");
            }
        }
    },
    methods: {
        _videoFun: function() {
            var t = this;
            this.setData({
                videoContext: wx.createVideoContext("guideVideo", this)
            }), this.setData({
                "videoPanel.show": !0,
                "videoPanel.type": "guideTip"
            }), setTimeout(function() {
                e = new Date().getTime(), t.data.videoPanel.play = !0, t.data.videoContext.play();
            }, 200);
        },
        _closeLearnVideo: function() {
            var a = new Date().getTime();
            this.setData({
                "videoPanel.show": !1,
                "videoPanel.play": !1
            }), this.triggerEvent("iKnown"), t.burying.setPoint(t, 561), t.burying.setSensorEvent(t, {
                RunningTime: (a - e) / 1e3,
                PromptType: "弹窗视频"
            }, "AddToMyMiniProgramMaskClose");
        },
        _videoTap: function() {
            "playing" == this.data.videoPanel.status ? (this.setData({
                "videoPanel.status": "pause"
            }), this.data.videoContext.pause(), t.burying.setPoint(t, 559)) : (this.setData({
                "videoPanel.status": "playing"
            }), this.data.videoContext.play(), t.burying.setPoint(t, 560));
        },
        _videoUpdate: function(t) {
            this.data.videoProgress.endT = t.detail.duration, this.data.videoProgress.current = Math.floor(t.detail.currentTime), 
            this.data.videoProgress.end = Math.floor(t.detail.duration), this.data.showTime || this._animationUpdate(t.detail.currentTime, t.detail.duration);
        },
        _animationUpdate: function(t, e) {
            this.setData({
                progressNum: Math.floor(t / e * 413)
            });
        },
        _videoPlay: function(t) {
            "pause" == this.data.videoPanel.status && this.setData({
                "videoPanel.status": "playing"
            });
        },
        _videoEnded: function(t) {
            "playing" == this.data.videoPanel.status && (this.setData({
                "videoPanel.status": "pause"
            }), this.data.showTime || this.setData({
                progressNum: 413
            }));
        },
        _start: function(t) {
            console.log("start", t.touches[0].clientX);
        },
        _move: function(e) {
            var a, i, o;
            console.log("move", e.touches[0].clientX), this.data.showTime || this.setData({
                showTime: !0
            });
            var s = t.systemInfo.shiftX, n = this.data.videoProgress;
            o = n.end, a = (375 * s - 413) / 2, (i = (e.touches[0].clientX * s - a) / 413 * n.endT) < 0 && (i = 0), 
            i > o && (i = o), n.start = Math.ceil(i), n.startT = i, this.setData({
                videoProgress: n
            }), this._animationUpdate(i, o);
        },
        _end: function(t) {
            var e = this;
            this.data.showTime && setTimeout(function() {
                e.setData({
                    showTime: !1
                });
            }, 300);
            var a = this.data.videoProgress;
            this.data.videoPanel.status;
            a.startT < a.endT && (this.data.videoContext.pause(), this.data.videoContext.seek(a.start), 
            this.data.videoContext.play());
        },
        _ss: function() {}
    }
});