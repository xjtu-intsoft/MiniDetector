function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e = require("../../utils/util.js");

Component({
    data: {
        list: [],
        urlName: "",
        searchText: ""
    },
    methods: {
        showData: function(t) {
            var a = t.list;
            a.forEach(function(t) {
                t.bgColor = e.pageFun.randomColor(), t.showHeight = 346 * t.height / t.width;
            }), this.setData({
                list: a,
                urlName: t.dict.url,
                searchText: t.searchText
            });
        },
        loadImg: function(e) {
            var a = "list[" + e.target.dataset.index + "].bgColor";
            this.setData(t({}, a, ""));
        },
        clickImg: function(t) {
            var a = this.data, r = t.target.dataset.index, i = [];
            a.list.forEach(function(t) {
                i.push({
                    url: t[a.urlName],
                    desc: t.source_url
                });
            });
            var s = {
                type: 6,
                params: {
                    index: r,
                    arr: i,
                    searchText: a.searchText
                }
            };
            e.pageFun.goImageDetail(s);
        }
    }
});