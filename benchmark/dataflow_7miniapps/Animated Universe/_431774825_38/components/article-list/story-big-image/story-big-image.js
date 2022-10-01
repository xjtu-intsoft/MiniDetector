var t = require("../../../utils/util.js");

Component({
    properties: {
        item: Object
    },
    data: {
        url: ""
    },
    methods: {
        goImageDetail: function() {
            t.indexSubjectGoPage(this.data.item);
        }
    },
    attached: function() {
        var t = this.data.item;
        if (3 == t.article_type) this.setData({
            url: t.ip_list.banner
        }); else {
            var e = t.pictures[0];
            if (e && e.resource_size) try {
                var i = JSON.parse(e.resource_size), r = i.width, a = i.height;
                this.setData({
                    height: 702 * a / r,
                    url: e.resource_url
                });
            } catch (t) {}
        }
    }
});