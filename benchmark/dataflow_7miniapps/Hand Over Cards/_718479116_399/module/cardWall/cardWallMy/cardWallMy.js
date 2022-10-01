getApp();

Component({
    options: {
        multipleSlots: !0
    },
    properties: {
        roofPlacementList: Array,
        recordsByPerson: {
            type: Object,
            value: {},
            observer: function(t, e) {}
        },
        sortBy: String
    },
    lifetimes: {
        attached: function() {}
    },
    data: {},
    methods: {
        _toWallDetail: function(t) {
            this.triggerEvent("toWallDetail", t);
        },
        _toEdit: function() {
            this.triggerEvent("toEdit");
        }
    }
});