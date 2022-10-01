Component({
    properties: {
        item: Object
    },
    methods: {
        viewAll: function() {
            var t = this.data.item.ssg_id;
            wx.navigateTo({
                url: "/pages/dtyzAll/dtyzAll?ssg_id=" + t
            });
        }
    }
});