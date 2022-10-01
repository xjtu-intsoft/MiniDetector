var a = require("./../../../config/httpHtlper.js"), t = require("./../../../util/strUtil.js");

Page({
    data: {
        scores: [],
        page: 1
    },
    onLoad: function(a) {
        var e = a.card_num;
        this.data.card_num = t.trimStr(e), this.getScoreExchangeList();
    },
    getScoreExchangeList: function() {
        var e = this;
        a.getScoreExchangeRecodList(this.data.card_num, this.data.page).then(function(a) {
            if (1 == a.data.status) {
                var s = a.data.data.list;
                if (e.data.total_page = a.data.data.total_page, s && s.length > 0) {
                    for (var r = 0; r < s.length; r++) {
                        var c = s[r];
                        c.value = t.priceFormat(c.value), c.type = "非消费", c.value && -1 != c.value.search("-") ? c.type = "消费" : c.value = "+" + c.value;
                    }
                    1 == e.data.page ? e.data.scores = s : e.data.scores = e.data.scores.concat(s), 
                    e.setData({
                        scores: e.data.scores
                    });
                }
            }
        });
    },
    onReachBottom: function() {
        console.log("==========="), this.data.total_page > this.data.page && (this.data.page += 1, 
        this.getScoreExchangeList());
    }
});