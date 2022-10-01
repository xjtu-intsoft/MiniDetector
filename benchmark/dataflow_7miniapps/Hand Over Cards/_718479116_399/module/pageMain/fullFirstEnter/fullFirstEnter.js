var e = getApp();

Component({
    properties: {
        pageFlag: Boolean
    },
    data: {
        systemInfo: e.systemInfo
    },
    methods: {
        _closeFirstInFromHowenter: function() {
            this.triggerEvent("closeFirstInFromHowenter");
        }
    }
});