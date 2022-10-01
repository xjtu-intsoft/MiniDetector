var t = getApp();

Component({
    properties: {
        openGid: {
            type: String,
            value: ""
        },
        groupState: {
            type: [ Boolean, String ],
            value: !1
        },
        stickTitle: String,
        newlyAdd: {
            type: Object
        },
        groupMycard: Object
    },
    data: {
        canvasCheck: !0,
        pageOrigin: "stickSuc"
    },
    lifetimes: {
        attached: function() {}
    },
    methods: {
        _shareButtonClick: function(e) {
            t.burying.setPoint(t, 620);
        },
        _closeShare: function() {
            this.triggerEvent("closeStickSuc"), t.burying.setPoint(t, 619);
        }
    }
});