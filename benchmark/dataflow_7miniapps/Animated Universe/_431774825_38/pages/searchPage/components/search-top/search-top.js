var t = require("../../../../utils/event.js");

Component({
    data: {
        value: ""
    },
    methods: {
        write: function(t) {
            this.setData({
                value: t.detail.value
            });
        },
        search: function() {
            var t = this.data.value;
            t && this.triggerEvent("search", t);
        },
        clear: function() {
            this.data.value && (t.mtaEvent("searchPageTapDelBtn"), this.setData({
                value: ""
            }));
        },
        getFocus: function() {
            t.mtaEvent("searchPageTapInput"), this.triggerEvent("switchDefault");
        },
        clickLabel: function(t) {
            this.setData({
                value: t
            });
        }
    }
});