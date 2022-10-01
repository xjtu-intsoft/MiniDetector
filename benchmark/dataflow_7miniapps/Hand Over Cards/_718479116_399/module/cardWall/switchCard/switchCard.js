var t = getApp();

Component({
    properties: {
        listCon: {
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
        },
        hasBorder: {
            type: String,
            value: ""
        }
    },
    data: {
        systemInfo: t.systemInfo,
        loading: !1,
        userMaxCardNum: t.userMaxCardNum
    },
    methods: {
        _closeSwitch: function() {
            this.triggerEvent("closeSwitch");
        },
        _selectCard: function(t) {
            this.triggerEvent("selectCard", t);
        },
        _toBuildCard: function() {
            this.triggerEvent("toBuildCard");
        },
        _confirmCard: function() {
            this.data.loading || (this.setData({
                loading: !0
            }), this.triggerEvent("confirmCard"));
        }
    }
});