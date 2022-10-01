Component({
    data: {
        animationData: {}
    },
    properties: {
        source: Number,
        oneButton: Boolean
    },
    attached: function() {
        var t = wx.createAnimation({
            duration: 1e3,
            delay: 0,
            timingFunction: "ease"
        });
        this.animation = t, t.scale(1.1, 1.1).step({
            duration: 1e3
        }), this.setData({
            animationData: t.export()
        }), setTimeout(function() {
            var t = wx.createAnimation({
                delay: 5e3,
                timingFunction: "ease"
            });
            t.opacity(0).scale(.8, .8).step({
                duration: 1e3
            }), t.scale(0, 0).step({
                duration: 100
            }), this.setData({
                animationData: t.export()
            });
        }.bind(this), 1100);
    },
    methods: {
        shareCicle: function() {
            this.triggerEvent("shareCicle");
        }
    }
});