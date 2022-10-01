var t = getApp();

Component({
    options: {
        multipleSlots: !0
    },
    properties: {
        cardList: {
            type: Object,
            value: {},
            observer: function(t) {}
        },
        title: String,
        textAlign: String
    },
    data: {
        userMaxCardNum: t.userMaxCardNum
    },
    methods: {
        _clickItem: function(t) {
            this.triggerEvent("selectCard", t);
        },
        _closeCon: function() {
            this.triggerEvent("closeCon");
        },
        _addDisa: function() {
            t.burying.setPoint(t, 628);
        },
        _buildCardAdd: function() {
            t.burying.setPoint(t, 628), this.triggerEvent("buildCardAdd");
        }
    }
});