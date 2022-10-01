var t = getApp(), a = null;

Component({
    options: {
        multipleSlots: !0
    },
    properties: {
        cardData: {
            type: Object,
            value: null,
            observer: function(t, a) {}
        },
        avatar: {
            type: Object,
            value: null,
            observer: function(t) {}
        },
        ifShow: {
            type: Boolean,
            value: !1,
            observer: function(t) {
                !t && this.data.tagShow && this.setData({
                    tagShow: !1
                });
            }
        },
        videocontainerHeight: {
            type: String,
            value: "100%;"
        },
        saveHave: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        anonymous: t.source.anonymous,
        loading: !1,
        videoLoading: !1,
        platform: t.systemInfo.platform,
        tagShow: !1,
        layOut: !1
    },
    lifetimes: {
        attached: function() {},
        ready: function() {
            this.videoContext = wx.createVideoContext("cardVideo", this);
        }
    },
    methods: {
        _update: function(t) {
            this.data.duration = t.detail.duration;
            var e = this.videoContext;
            clearTimeout(a), t.detail.currentTime >= t.detail.duration - 1 && (e.pause(), this.data.saveHave || (a = setTimeout(function() {
                e.seek(0), e.play();
            }, 5e3))), this.data.videoLoading && this.setData({
                videoLoading: !1
            });
        },
        _pro: function(t) {},
        _play: function(t) {
            if (this.data.videoLoading && this.setData({
                videoLoading: !1
            }), !this.data.tagShow) {
                var a = this;
                this.data.saveHave ? a.setData({
                    tagShow: !0
                }) : setTimeout(function() {
                    a.setData({
                        tagShow: !0
                    });
                }, 3e3);
            }
        },
        _waiting: function(t) {
            this.data.videoLoading || this.setData({
                videoLoading: !0
            });
        },
        _playEnd: function(t) {},
        _saveCard: function(a) {
            if (this.data.loading) return !1;
            this.setData({
                loading: !0
            });
            var e = this;
            this.triggerEvent("saveCard", {
                detail: "dynamicCard",
                callback: function(t) {
                    "true" == t && e.setData({
                        saveHave: !0
                    }), e.setData({
                        loading: !1
                    });
                }
            }), a && a.detail && t.formidSend(a.detail.formId);
        },
        _packup: function() {
            var e = this;
            clearTimeout(a), this.setData({
                layOut: !0
            }), setTimeout(function() {
                e.triggerEvent("packup");
            }, 900), setTimeout(function() {
                e.setData({
                    ifShow: !1,
                    layOut: !1
                });
            }, 1e3), "pages/cardAll/howEnter/howEnter" == getCurrentPages()[getCurrentPages().length - 1].route && t.burying.setPoint(t, 132);
        }
    }
});