var t = getApp();

Component({
    properties: {
        newlyAddData: {
            type: Array,
            value: [],
            observer: function(e) {
                e && e.length && (t.burying.setSensorEvent(t, {
                    PopupPromptTrigger: "新群友名片提示",
                    PopupPromptMainButton: "我知道了"
                }, "PopupPromptShow"), this.setData({
                    hasNewCard: !0
                }));
            }
        }
    },
    data: {
        hasNewCard: !1
    },
    methods: {
        closePanel: function() {
            t.burying.setPoint(t, 709), this.setData({
                hasNewCard: !1
            });
        },
        openPanel: function() {
            this.setData({
                hasNewCard: !0
            });
        }
    }
});