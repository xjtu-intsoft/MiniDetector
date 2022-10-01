getApp();

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
        }
    },
    data: {
        canvasCheck: !0,
        pageOrigin: "changeSuc"
    },
    lifetimes: {
        attached: function() {
            console.log(this.data.mycard, "啦啦啦啦啦啦");
        }
    },
    methods: {
        _immediatelyLook: function() {
            this.triggerEvent("toStickCardBtn", "maidian");
        },
        _closeCs: function() {
            this.triggerEvent("closeCs");
        }
    }
});