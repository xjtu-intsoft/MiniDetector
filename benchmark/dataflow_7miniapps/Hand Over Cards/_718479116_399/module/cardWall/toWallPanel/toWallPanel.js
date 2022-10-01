var t = getApp();

Component({
    properties: {
        totalCardNumber: {
            type: Number,
            value: 0
        }
    },
    data: {
        systemInfo: t.systemInfo
    },
    lifetimes: {
        attached: function() {}
    },
    methods: {
        _toMyFolder: function(t) {
            this.triggerEvent("toMyFolder");
        }
    }
});