function t(t, e, i) {
    return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = i, t;
}

var e = require("../../../utils/util.js");

require("../../../utils/event.js");

Component({
    properties: {
        item: Object
    },
    attached: function() {
        var t = this.data.item;
        t.pictures.forEach(function(t) {
            t.bgColor = e.pageFun.randomColor();
        }), this.setData({
            item: t
        });
    },
    methods: {
        goStreamImages: function(t) {
            e.indexSubjectGoPage(this.data.item), e.submitFormId(t.detail.formId);
        },
        loadImg: function(e) {
            var i = "item.pictures[" + e.target.dataset.index + "].bgColor";
            this.setData(t({}, i, ""));
        }
    }
});