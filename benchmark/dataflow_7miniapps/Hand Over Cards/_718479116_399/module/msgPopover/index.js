Component({
    options: {
        multipleSlots: !0
    },
    behaviors: [],
    properties: {
        top: String,
        msg: String,
        left: {
            type: String,
            value: 0
        },
        arrowLeft: String
    },
    data: {
        isPageHidden: !1,
        showTip: !1
    },
    observers: {},
    methods: {
        showTip: function() {
            this.setData({
                showTip: !0
            });
        },
        closeTip: function() {
            this.setData({
                showTip: !1
            });
        }
    },
    lifetimes: {
        created: function() {},
        attached: function() {},
        ready: function() {},
        moved: function() {},
        detached: function() {}
    },
    definitionFilter: function() {},
    pageLifetimes: {
        show: function() {
            this.data.isPageHidden;
        },
        hide: function() {
            this.setData({
                isPageHidden: !0
            });
        },
        resize: function() {}
    }
});