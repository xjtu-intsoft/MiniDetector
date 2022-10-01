var t = getApp();

Component({
    properties: {
        item: Object
    },
    data: {
        height: 0
    },
    attached: function() {
        this.init();
    },
    methods: {
        swiperChange: function(i) {
            t.globalData.slidetIndex = i.detail.current;
        },
        init: function() {
            var t = this.data.item;
            if (t) {
                var i = t.piclist;
                if (i.length && i[0]) {
                    var e = i[0].resource_size.height;
                    i.forEach(function(t, i) {
                        if (t) {
                            var a = t.resource_size.height;
                            i >= 1 && a - e > 0 && (e = a);
                        }
                    }), e - 329 > 0 && (e = 329), this.setData({
                        height: 2 * e
                    });
                }
            }
        }
    }
});