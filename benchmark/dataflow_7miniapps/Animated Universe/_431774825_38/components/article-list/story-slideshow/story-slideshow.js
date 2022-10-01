var t = require("../../../utils/util.js");

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
        init: function() {
            var t = this.data.item;
            if (t) {
                var e = t.pictures;
                if (e.length) {
                    var i;
                    e.forEach(function(t, e) {
                        var r = t.resource_size;
                        "string" == typeof r && (t.resource_size = JSON.parse(r)), i || (i = t.resource_size.height);
                        var s = t.resource_size.height;
                        e >= 1 && s - i > 0 && (i = s);
                    }), i - 346 > 0 && (i = 346), this.setData({
                        height: 2 * i
                    });
                }
            }
        },
        goSubject: function() {
            t.indexSubjectGoPage(this.data.item);
        }
    }
});