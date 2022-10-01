Component({
    properties: {
        viewerState: {
            type: String,
            value: "",
            observer: function(t) {}
        },
        timerMark: String,
        listData: {
            type: Array,
            value: [],
            observer: function(t) {}
        }
    },
    data: {},
    methods: {
        _listItemTap: function(t) {
            this.triggerEvent("listTap", t);
        },
        _cardItemTap: function(t) {
            this.triggerEvent("cardTap", t);
        }
    }
});