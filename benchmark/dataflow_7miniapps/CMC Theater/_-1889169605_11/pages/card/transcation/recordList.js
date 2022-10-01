var a = require("./../../../config/httpHtlper.js"), t = require("./../../../util/strUtil.js");

Page({
    data: {
        transcation: []
    },
    onLoad: function(n) {
        var e = this;
        console.log("bean = " + n.bean), this.data.memberCard = getApp().decodeDataAndJsonParse(n.bean), 
        a.card_transaction(this.data.memberCard.cinema_id, t.trimStr(this.data.memberCard.card_num)).then(function(a) {
            try {
                console.log(a), a.data.data.transaction && a.data.data.transaction.length > 0 && e.setData({
                    transcation: a.data.data.transaction
                });
            } catch (a) {
                console.log(a);
            }
        });
    }
});