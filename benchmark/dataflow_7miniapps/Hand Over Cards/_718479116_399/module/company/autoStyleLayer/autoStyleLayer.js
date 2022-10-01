var t = getApp();

Component({
    properties: {},
    data: {},
    methods: {
        _known: function() {
            t.burying.setPoint(t, 900), this.triggerEvent("known");
        }
    }
});