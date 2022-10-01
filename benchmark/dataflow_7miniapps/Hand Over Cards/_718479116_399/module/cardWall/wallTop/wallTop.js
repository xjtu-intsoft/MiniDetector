var e = getApp();

Component({
    properties: {
        openGid: {
            type: String,
            value: ""
        },
        cardNum: {
            type: Number,
            value: 0
        },
        ifShare: {
            type: Boolean,
            value: !1
        },
        groupMycard: {
            type: Object,
            value: null
        }
    },
    data: {
        systemInfo: e.systemInfo
    },
    lifetimes: {
        attached: function() {}
    },
    methods: {
        _shareButtonClick: function(t) {
            e.burying.setPoint(e, 179);
        }
    }
});