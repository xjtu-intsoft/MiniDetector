function e(e) {
    var s = [];
    e.delivery_status_desc.length > 0 && s.push({
        title: "订单状态 : ",
        message: e.delivery_status_desc
    }), e.order_num.length > 0 && s.push({
        title: "订单编号 : ",
        message: e.order_num
    }), "0" == e.is_delivery && s.push({
        title: "取餐方式 : ",
        message: "前台自取"
    }), e.create_time.length > 0 && s.push({
        title: "下单时间 : ",
        message: e.create_time
    }), e.mobile.length > 0 && s.push({
        title: "手机号码 : ",
        message: e.mobile
    }), 2 == e.is_delivery && 1 == e.order_status && e.delivery_desc.length > 0 || (e.delivery_desc = e.delivery_status_desc), 
    e.orderDetailMessages = s, e.save_fee = t.priceFormat(e.save_fee), e.total_amount = t.priceFormat(e.total_amount);
    var r = {}, i = [];
    for (var d in e.goods_detail) {
        var o = e.goods_detail[d];
        o.totalPrice = t.priceFormat((parseInt(o.num) * parseFloat(o.origin_price)).toFixed(2)), 
        o.origin_price = t.priceFormat(o.origin_price), o.code.length <= 0 && (o.code = "default"), 
        r[o.code] || (r[o.code] = [], "default" == o.code ? i.unshift({
            code: o.code,
            delivery_status_desc: o.delivery_status_desc,
            delivery_location: o.delivery_location
        }) : i.push({
            code: o.code,
            delivery_status_desc: o.delivery_status_desc,
            delivery_location: o.delivery_location
        }), console.log(o.delivery_location)), r[o.code].push(o);
    }
    e.allGoods = r, e.allGoodKeys = i, 1 == e.order_status || 2 == e.order_status || 7 == e.order_status || 9 == e.order_status ? 1 == e.refund_settings.refund && 1 == e.refund_settings.order_can_refund ? (e.btntitle = "退货", 
    e.btnType = "1") : (e.btntitle = "返回", e.btnType = "0") : (e.btntitle = "刷新", e.btnType = "2");
}

var t = require("../util/strUtil.js"), s = new Object();

s.decodeRes = function(t) {
    s.successObj = {}, s.failObj = {};
    var r = t.data;
    if ("0" !== r.errcode) return this.failObj = {
        isError: !0,
        errcode: r.errcode,
        msg: r.msg
    }, !1;
    var i = r.data;
    return e(i), this.successObj = i, !0;
}, module.exports = {
    findOrderDetialRequest: s
};