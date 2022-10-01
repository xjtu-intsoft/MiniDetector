require("../../../7931C4950691379C1F57AC929AD2E9B3.js");

var e = getApp(), t = 0, i = !1;

Component({
    properties: {
        enterShow: {
            type: Boolean,
            value: !1,
            observer: function(e, t) {
                e ? this._showSendGuide(500) : this._showSendGuide(300);
            }
        },
        showVideo: {
            type: Boolean,
            value: !1,
            observer: function(a) {
                var o = this;
                if (a) {
                    var n = null, s = null;
                    clearTimeout(n), clearTimeout(s), e.burying.setSensorEvent(e, {
                        PromptType: "弹窗视频"
                    }, "AddToMyMiniProgramMaskShow"), n = setTimeout(function() {
                        o.setData({
                            "videoPanel.show": !0,
                            "videoPanel.type": "guideTip"
                        }), t = new Date().getTime(), o.data.videoPanel.play = !0, o.data.videoContext.play(), 
                        i || (s = setTimeout(function() {
                            o.data.videoContext.requestFullScreen({
                                direction: 0
                            });
                        }, 1e3));
                    }, 200);
                }
            }
        },
        guideImg: {
            type: Object
        }
    },
    data: {
        addTofuchuangVideo: e.source.addTofuchuangVideo,
        aniFadeSenGuide: null,
        isCloseGuide: !1,
        addToMyappVideo: e.source.video_airWindow,
        learnUseMicro: e.source.video_learnUseMicro,
        videoPanel: {
            show: !1,
            loop: !1,
            type: "share",
            play: !1,
            status: "playing"
        },
        videoContext: null,
        controls: !0,
        showTime: !1,
        videoProgress: {},
        muted: !0
    },
    lifetimes: {
        attached: function() {
            try {
                wx.getStorageSync("isCloseGuide") && this.setData({
                    isCloseGuide: !0
                });
            } catch (e) {}
            this.setData({
                videoContext: wx.createVideoContext("guideVideo", this)
            }), this.data.progressAnimation = wx.createAnimation({
                duration: 250,
                timingFunction: "linear"
            });
        }
    },
    pageLifetimes: {
        show: function() {
            var e = this;
            this.data.videoPanel.show && this.data.videoPanel.play && (t = new Date().getTime()), 
            this.data.videoPanel.show && "share" == this.data.videoPanel.type && !this.data.videoPanel.play && setTimeout(function() {
                t = new Date().getTime(), e.data.videoPanel.play = !0, e.data.videoContext.play();
            }, 200);
        },
        hide: function() {
            if (this.data.videoPanel.show && this.data.videoPanel.play) {
                var i = new Date().getTime();
                e.burying.setSensorEvent(e, {
                    RunningTime: (i - t) / 1e3,
                    PromptType: "弹窗视频"
                }, "AddToMyMiniProgramMaskClose");
            }
        }
    },
    methods: {
        _loadedmetadata: function(e) {
            try {
                e.detail.duration && (i = !0, this.data.videoContext.requestFullScreen({
                    direction: 0
                }));
            } catch (e) {}
        },
        _voiceChange: function() {
            this.setData({
                muted: !Boolean(this.data.muted)
            }), console.log("音量变化", this.data.muted);
        },
        _closeGuide: function() {
            e.burying.setPoint(e, 220), this.setData({
                isCloseGuide: !0
            });
            try {
                wx.setStorageSync("isCloseGuide", !0);
            } catch (e) {}
        },
        _closeLearnVideo: function() {
            var i = new Date().getTime();
            e.burying.setSensorEvent(e, {
                RunningTime: (i - t) / 1e3,
                PromptType: "弹窗视频"
            }, "AddToMyMiniProgramMaskClose"), this.setData({
                "videoPanel.show": !1,
                "videoPanel.play": !1,
                showVideo: !1
            }), this.triggerEvent("iKnown");
        },
        _showGuideVi: function() {
            e.burying.setSensorEvent(e, {
                PromptType: "弹窗视频"
            }, "AddToMyMiniProgramMaskShow"), this.setData({
                "videoPanel.show": !0,
                "videoPanel.type": "share"
            });
        },
        _showSendGuide: function(e) {
            var t = wx.createAnimation({
                duration: 300,
                delay: e,
                timingFunction: "linear"
            });
            this.setData({
                aniFadeSenGuide: t.opacity("1").step().export()
            });
        },
        _addToMymini: function() {
            var a = this;
            e.burying.setSensorEvent(e, {
                PromptType: "弹窗视频"
            }, "AddToMyMiniProgramMaskShow"), e.burying.setPoint(e, 894), this.setData({
                "videoPanel.show": !0,
                "videoPanel.type": "guideTip"
            });
            var o = null, n = null;
            clearTimeout(o), clearTimeout(n), o = setTimeout(function() {
                t = new Date().getTime(), a.data.videoPanel.play = !0, a.data.videoContext.play(), 
                i || (n = setTimeout(function() {
                    a.data.videoContext.requestFullScreen({
                        direction: 0
                    });
                }, 1e3));
            }, 200);
        },
        _videoTap: function() {
            "playing" == this.data.videoPanel.status ? (this.setData({
                "videoPanel.status": "pause"
            }), this.data.videoContext.pause()) : (this.setData({
                "videoPanel.status": "playing"
            }), this.data.videoContext.play());
        },
        _videoUpdate: function(e) {
            this.data.videoProgress.endT = e.detail.duration, this.data.videoProgress.current = Math.floor(e.detail.currentTime), 
            this.data.videoProgress.end = Math.floor(e.detail.duration), this.data.showTime || this._animationUpdate(e.detail.currentTime, e.detail.duration);
        },
        _animationUpdate: function(e, t) {
            this.setData({
                progressNum: Math.floor(e / t * 413)
            });
        },
        _videoPlay: function(e) {
            "pause" == this.data.videoPanel.status && this.setData({
                "videoPanel.status": "playing"
            });
        },
        _videoEnded: function(e) {
            "playing" == this.data.videoPanel.status && (this.setData({
                "videoPanel.status": "pause"
            }), this.data.showTime || this.setData({
                progressNum: 413
            }));
        },
        _exitFullScreen: function(t) {
            try {
                t.detail.fullScreen || (e.burying.setSensorEvent(e, {
                    PopupPromptTrigger: "了解电子名片视频",
                    PopupPromptMainButton: "关闭"
                }, "PopupPromptShow"), e.burying.setPoint(e, 895), this._closeLearnVideo());
            } catch (e) {}
        },
        _start: function(e) {
            console.log("start", e.touches[0].clientX);
        },
        _move: function(t) {
            var i, a, o;
            console.log("move", t.touches[0].clientX), this.data.showTime || this.setData({
                showTime: !0
            });
            var n = e.systemInfo.shiftX, s = this.data.videoProgress;
            o = s.end, i = (375 * n - 413) / 2, (a = (t.touches[0].clientX * n - i) / 413 * s.endT) < 0 && (a = 0), 
            a > o && (a = o), s.start = Math.ceil(a), s.startT = a, this.setData({
                videoProgress: s
            }), this._animationUpdate(a, o);
        },
        _end: function(e) {
            var t = this;
            this.data.showTime && setTimeout(function() {
                t.setData({
                    showTime: !1
                });
            }, 300);
            var i = this.data.videoProgress;
            this.data.videoPanel.status;
            i.startT < i.endT && (this.data.videoContext.pause(), this.data.videoContext.seek(i.start), 
            this.data.videoContext.play());
        },
        ss: function() {}
    }
});