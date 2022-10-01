Component({
    data: {
        background: "",
        items: null,
        selectIndex: 0
    },
    properties: {
        data: Object
    },
    methods: {
        clickTab: function(t) {
            this.setData({
                selectIndex: t.currentTarget.dataset.index
            });
        },
        topSwiper: function(t) {
            var e = t.detail.current;
            this.setData({
                selectIndex: e
            });
        }
    },
    lifetimes: {
        attached: function() {
            var t = this.data.data.meta.theme, e = this.data.data.items;
            this.setData({
                background: t.bgType ? "url(".concat(t.background, ")  no-repeat") : t.background,
                items: e
            });
        }
    }
});