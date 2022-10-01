var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../@babel/runtime/helpers/toConsumableArray")), i = e(require("../../../4F4638B00691379C292050B78222E9B3.js")), o = require("../../../AFC697330691379CC9A0FF345133E9B3.js"), a = (require("../../../7931C4950691379C1F57AC929AD2E9B3.js"), 
getApp()), s = new o.wxRequest(), n = null;

(0, i.default)({
    options: {
        multipleSlots: !0
    },
    properties: {
        oldvideoList: {
            type: Array,
            value: [],
            observer: function(e) {
                this.setData({
                    videoList: e
                });
            }
        },
        pageFlag: String
    },
    data: {
        videoList: [],
        videoPath: "",
        hideVideo: !0,
        video: null,
        systemInfo: a.systemInfo,
        top: a.systemInfo.modelX ? "88rpx" : "20px",
        cbData: null,
        hasUpdateForm: null
    },
    lifetimes: {
        detached: function() {
            try {
                wx.hideToast();
            } catch (e) {}
        }
    },
    methods: {
        _hideSmallVideo: function(e) {
            console.log("hideSmallVideo", e.detail), !1 === e.detail.fullScreen && (this.triggerEvent("trigger", {
                event: "showArea",
                val: !0
            }), this.setData({
                hideVideo: !0
            }));
        },
        _replay: function() {
            this.data.video.play();
        },
        _reback: function() {
            this.triggerEvent("trigger", {
                event: "showArea",
                val: !0
            }), this.setData({
                hideVideo: !0
            });
        },
        _playVideo: function(e) {
            var t = this, i = null;
            this.setData({
                videoPath: e.currentTarget.dataset.videoSrc
            }), clearTimeout(i), i = null, this.videoContent = wx.createVideoContext("myVideo", this);
            var o = this.videoContent;
            i = setTimeout(function() {
                t.setData({
                    video: o
                }), console.log(o), o.requestFullScreen(), o.play(), t.setData({
                    hideVideo: !1
                }), t.triggerEvent("trigger", {
                    event: "hideArea",
                    val: !1
                });
            }, 100);
        },
        _sceenchange: function(e) {
            e.detail && !e.detail.fullScreen && this.videoContent.stop();
        },
        _deleteVideo: function(e) {
            var t = this;
            n || (n = null, clearTimeout(n), n = setTimeout(function() {
                var i = e.currentTarget.dataset.videoIdx, o = t.data.videoList.slice(0, i).concat(t.data.videoList.slice(i + 1));
                t.setData({
                    videoList: o
                }), t.store.data.hasUpdateForm = !0, t.update(), n = null, t.triggerEvent("updateVideoList", t.data.videoList);
            }, 0));
        },
        _uploadVideo: function(e) {
            a.burying.setPoint(a, 228);
            var i = this;
            wx.chooseVideo({
                maxDuration: 15,
                compressed: !0,
                success: function(e) {
                    console.log("时间", e.duration, "大小", e.size / 1048576), e.tempFilePath.toLowerCase().endsWith(".mp4") ? e.duration > 15 || e.size / 1048576 > 25 ? wx.showToast({
                        title: "上传视频需要小于15秒且小于25MB",
                        icon: "none",
                        mask: !0
                    }) : (wx.showLoading({
                        title: "视频上传中"
                    }), console.log("video", e), s.upldUrl({
                        url: "video",
                        method: "POST",
                        filePath: e.tempFilePath
                    }, function(e) {
                        console.log("success", e), wx.showToast({
                            title: "视频上传成功"
                        }), i.setData({
                            videoList: [ {
                                upVideoPoster: e.imgUrl,
                                videoPath: e.videoUrl
                            } ].concat((0, t.default)(i.data.videoList))
                        }), i.triggerEvent("updateVideoList", i.data.videoList);
                    })) : wx.showToast({
                        title: "请上传MP4格式的视频",
                        icon: "none",
                        mask: !0
                    });
                },
                fail: function(e) {}
            });
        }
    }
});