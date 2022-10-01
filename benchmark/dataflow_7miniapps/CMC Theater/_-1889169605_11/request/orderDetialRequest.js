function e(e) {
    e.stateimage = "/images/orderDetial/chupiao_icon_" + e.order_status + ".png", e.total_fee = t.priceFormat(e.total_fee), 
    e.total_price = t.priceFormat(e.total_price), e.ticket_original_price = parseFloat(e.ticket_amount - e.total_service_fee) + "", 
    e.refund_total_price.length > 0 && (e.refund_total_price = parseFloat(e.refund_total_price) + "");
    var s = e.start_date + " " + e.start_time;
    s = o.formatDatelong(s), console.log("start_time =" + s), e.movie_start_time = s, 
    e.isYouJia = !1, "2" != e.checkin_code_type && "3" != e.checkin_code_type || (e.isYouJia = !0);
    var i = e.refund_settings.refund_dialog_message;
    if (i) for (var r in i) {
        var a = i[r], d = a.msg, n = a.unit;
        if (void 0 == (s = a.time) && (s = "", a.time = ""), a.needRedText = "", a.lists = [], 
        a.unit && a.time) a.lists.push(d); else if ("" == a.unit && "" == a.time) a.lists.push(d); else {
            var _ = d.indexOf(n), l = d.indexOf(s);
            if (n && -1 != _) {
                if (a.lists = d.split(n), a.lists.splice(1, 0, n), 4 == a.lists.length) {
                    var u = [];
                    u[0] = a.lists[0], u[1] = a.lists[1], u[2] = a.lists[2] + n + a.lists[3], a.lists = u;
                }
                a.needRedText = n;
            } else s && -1 != l ? (a.lists = d.split(s), a.lists.splice(1, 0, s), a.needRedText = s) : a.lists.push(d);
        }
    }
    e.haveCoupon = !0, e.coupon_total_subsidy && "0" == e.coupon_total_subsidy && (e.haveCoupon = !1), 
    e.haveGoods = !1, e.goods_data && e.goods_data.length > 0 && (e.haveGoods = !0), 
    e.isRefund = !1, console.log(e), (e.refund_fee.length > 0 || e.refund_total_price.length > 0) && (e.isRefund = !0, 
    console.log(" refund_total_price =" + e.refund_total_price), console.log("refund_fee =" + e.refund_fee)), 
    1 == e.order_status || 2 == e.order_status || 7 == e.order_status || 9 == e.order_status ? 1 == e.refund_settings.refund && 1 == e.refund_settings.order_can_refund ? (e.btntitle = "退票", 
    e.btnType = "1") : (e.btntitle = "返回", e.btnType = "0") : (e.btntitle = "刷新", e.btnType = "2"), 
    console.log(e.goods_data);
    var c = e.goods_data, p = [];
    for (var r in c) {
        var f = c[r];
        if (f.expandText = "展开", f.promo_is_addition_type = "", "1" == f.is_promo && (f.promo_is_addition_type = "0"), 
        p.push(f), f.additional_goods && f.additional_goods.length > 0) for (var g in f.additional_goods) {
            var m = f.additional_goods[g], v = {};
            v.promo_is_addition_type = "1", v.good_num = "1", v.goods_alias = m.goods_alias, 
            v.goods_content = m.goods_content, v.goods_pic_url = m.goods_pic_url, v.price = m.price, 
            p.push(v);
        }
    }
    e.goods_data_list = p;
}

var t = require("../util/strUtil.js"), o = require("../util/util.js"), s = new Object();

s.decodeRes = function(t) {
    s.successObj = {}, s.failObj = {};
    var o = t.data;
    if ("0" !== o.errcode) return this.failObj = {
        isError: !0,
        errcode: o.errcode,
        msg: o.msg
    }, !1;
    var i = o.data;
    return e(i), this.successObj = i, !0;
}, module.exports = {
    orderDetialRequest: s
};