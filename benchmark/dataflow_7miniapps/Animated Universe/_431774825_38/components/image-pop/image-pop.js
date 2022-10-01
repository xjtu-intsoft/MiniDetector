Component({
    properties: {
        isHidden: Boolean,
        preList: Object,
        curIndex: Number
    },
    methods: {
        closeTip: function(e) {
            this.triggerEvent("closeTip", e.target.dataset.index);
        }
    }
});