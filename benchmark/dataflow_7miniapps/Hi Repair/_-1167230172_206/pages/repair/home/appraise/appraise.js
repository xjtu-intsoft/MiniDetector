Component({
    data: {
        background: ""
    },
    properties: {
        data: Object
    },
    methods: {},
    lifetimes: {
        attached: function() {
            var t = this.data.data.meta.theme, a = this.data.data.items;
            this.setData({
                background: t.bgType ? "url(".concat(t.background, ")  no-repeat") : t.background,
                items: a
            });
        }
    }
});