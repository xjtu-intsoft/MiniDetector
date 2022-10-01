var t = getApp();

Component({
    properties: {
        confirmCon: {
            type: Object,
            value: {
                show: !1,
                animationName: ""
            }
        },
        cards: {
            type: Object,
            value: {
                show: !1
            }
        }
    },
    data: {
        systemInfo: t.systemInfo,
        loading: !1
    },
    methods: {
        _closeList: function() {
            this.triggerEvent("closeList");
        },
        _switch: function() {
            this.triggerEvent("switch");
        },
        _toPerfect: function() {
            this.triggerEvent("toPerfect");
        },
        _addCardToGroupMy: function() {
            this.data.loading || (this.setData({
                loading: !0
            }), this.triggerEvent("addCardToGroupMy"));
        },
        _ss: function() {}
    }
});