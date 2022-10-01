function t(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}

var e = require("../../utils/util.js"), r = require("../../utils/event.js");

Component({
    properties: {
        list: Array
    },
    attached: function() {
        var t = this.data.list;
        t.forEach(function(t) {
            t.bgColor = e.pageFun.randomColor();
        }), this.setData({
            list: t
        });
    },
    methods: {
        loadImg: function(e) {
            var r = "list[" + e.target.dataset.index + "].bgColor";
            this.setData(t({}, r, ""));
        },
        previewImages: function(t) {
            var e = t.currentTarget.dataset, a = e.list, i = e.index, n = [];
            a.forEach(function(t) {
                n.push(t.url);
            });
            var s = wx.getStorageSync("user_Id");
            r.mtaEvent("myWorksPicView", s, n[i]), wx.previewImage({
                current: n[i],
                urls: n
            });
        }
    }
});