var s = require("./../../../config/httpHtlper.js");

Page({
    data: {
        order: {},
        orderResult: {},
        groups: [],
        hasGroup: !1
    },
    onLoad: function(e) {
        var o = e.bean, r = getApp().decodeDataAndJsonParse(o);
        console.log(r), this.setData({
            order: r
        });
        var n = this;
        s.orderProgress(r.order_num, r.order_type).then(function(s) {
            if (console.log(s), 1 == s.data.status) {
                var e = s.data.data;
                e.total_money_temp = "¥" + parseFloat(e.total_amount);
                var o = e.tel, r = !1, a = [];
                if (e.goods_codes && e.goods_codes.length > 0 && "2" != e.is_delivery) {
                    r = !0;
                    for (var d in e.goods_codes) {
                        var t = e.goods_codes[d], i = new Object();
                        i.code = t, i.lists = [];
                        for (var g in e.order_progress) t == (p = e.order_progress[g]).code && i.lists.push(p);
                        a.push(i);
                    }
                }
                if (console.log("hasGroup =" + r), console.log(a), r) for (var c in a) {
                    var l = a[c].lists;
                    for (var u in l) (p = l[u]).hidden = !1, 0 == u ? "2" == e.order_status || "9" == e.order_status ? p.src = "/images/common/dingdanjindu_baocuo.png" : p.src = "/images/common/dingdanjindu_dangqian.png" : p.src = "/images/common/dingdanjindu_wancheng.png", 
                    u == l.length - 1 && (p.hidden = !0), n.splitMsg(p, o);
                } else if (e.order_progress) for (var g in e.order_progress) {
                    var p = e.order_progress[g];
                    p.hidden = !1, 0 == g ? "2" == e.order_status || "9" == e.order_status ? p.src = "/images/common/dingdanjindu_baocuo.png" : p.src = "/images/common/dingdanjindu_dangqian.png" : p.src = "/images/common/dingdanjindu_wancheng.png", 
                    g == e.order_progress.length - 1 && (p.hidden = !0), n.splitMsg(p, o);
                }
                console.log(e), n.setData({
                    groups: a,
                    hasGroup: r,
                    orderResult: e
                });
            }
        });
    },
    splitMsg: function(s, e) {
        s.sMsg = [];
        var o = s.msg, r = o.indexOf(e);
        s.needRedText = "", o && e && -1 != r ? (s.sMsg = o.split(e), s.sMsg.splice(1, 0, e), 
        s.needRedText = e) : s.sMsg.push(o);
    },
    telClick: function(s) {
        var e = s.currentTarget.dataset.msg, o = this.data.orderResult.tel;
        if (-1 != e.indexOf(o)) {
            console.log(s);
            var r = o.split(",");
            wx.showActionSheet({
                itemList: r,
                success: function(s) {
                    wx.makePhoneCall({
                        phoneNumber: r[s.tapIndex]
                    });
                }
            });
        }
    }
});