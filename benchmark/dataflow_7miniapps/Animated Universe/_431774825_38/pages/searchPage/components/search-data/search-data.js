Component({
    data: {
        hasMoreData: !0
    },
    methods: {
        showData: function(t) {
            this.selectComponent(".stream-layout").showData(t);
        },
        switchState: function(t) {
            this.setData({
                hasMoreData: t
            });
        }
    }
});