Component({
    properties: {
        item: Object
    },
    data: {
        currentSwiper: 0
    },
    methods: {
        swiperChange: function(e) {
            this.setData({
                currentSwiper: e.detail.current
            });
        }
    }
});