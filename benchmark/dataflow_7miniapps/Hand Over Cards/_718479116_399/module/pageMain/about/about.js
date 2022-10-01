var t = getApp();

Component({
    properties: {
        myCard: {
            type: Object,
            value: {},
            observer: function(t) {
                this._showFun(t);
            }
        }
    },
    data: {
        imageU: t.source.main_head,
        show: !1
    },
    methods: {
        _showFun: function(e) {
            try {
                var o = wx.getStorageSync("class_toMain_intro");
                o && !o.show && e.list && e.list.length > 0 && (this.setData({
                    show: !0
                }), t.burying.setSensorEvent(t, {
                    PopupPromptTrigger: "通过班级左上角进入递名片主页",
                    PopupPromptMainButton: "立即体验"
                }, "PopupPromptShow"));
            } catch (t) {}
        },
        _experience: function() {
            this.triggerEvent("experienceDMP"), this.setData({
                show: !1
            });
            try {
                wx.setStorageSync("class_toMain_intro", {
                    show: !0
                });
            } catch (t) {}
            t.burying.setPoint(t, 506);
        }
    }
});