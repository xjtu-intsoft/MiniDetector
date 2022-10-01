function e(e, t, i, r) {
    if (r.promo_is_addition_type) if ("1" == r.promo_is_addition_type) t.promo_is_addition_type = "", 
    o(t, i, r); else if ("0" == r.promo_is_addition_type) if (r.choseNum > r.promo_num) {
        var s = r.choseNum, p = r.promo_num, n = r.choseNum - p;
        r.choseNum = n;
        var c = {};
        c.name = r.goods_alias, c.count = n, c.promo_is_addition_type = "", a(c, i, r), 
        c.wxKey = e.length, e.push(c), r.choseNum = p, t.count = p, o(t, i, r), r.choseNum = s;
    } else o(t, i, r); else a(t, i, r); else a(t, i, r);
}

function o(e, o, a) {
    if (o) {
        t = parseFloat(a.promo_member_price) * a.choseNum;
        e.price = i.priceFormat(t.toFixed(2));
    } else {
        var t = parseFloat(a.promo_nonmember_price) * a.choseNum;
        e.price = i.priceFormat(t.toFixed(2));
    }
}

function a(e, o, a) {
    if (o) {
        t = parseFloat(a.member_price) * a.choseNum;
        e.price = i.priceFormat(t.toFixed(2));
    } else {
        var t = parseFloat(a.nonmember_price) * a.choseNum;
        e.price = i.priceFormat(t.toFixed(2));
    }
}

function t(e, o, a, t) {
    if (t) {
        if (o.option_package_data && o.option_package_data.length > 0) for (var s = 0, p = o.option_package_data.length; s < p; s++) {
            m = o.option_package_data[s];
            (d = {}).is_single_good = !0, d.price = i.priceFormat(m.addPrice), d.count = m.count, 
            d.promo_is_addition_type = "", "0" == d.price ? d.name = m.name + "x" + m.count : d.name = m.name + "x" + m.count + " (加￥" + r.mul(d.price, m.count) + ")", 
            d.wxKey = e.length, e.push(d);
        }
    } else if (o.component && o.component.length > 0) for (var n = 0, c = o.component.length; n < c; n++) for (var _ = o.component[n], s = 0, p = _.members.length; s < p; s++) {
        var m = _.members[s], d = {};
        d.is_single_good = !0, d.price = i.priceFormat(m.addPrice), d.count = m.numCount, 
        d.promo_is_addition_type = "", "0" == d.price ? d.name = m.name + "x" + m.numCount : d.name = m.name + "x" + m.numCount + " (加￥" + r.mul(d.price, m.numCount) + ")", 
        d.wxKey = e.length, e.push(d);
    }
}

var i = require("../../util/strUtil.js"), r = require("../../util/mathUtil.js"), s = new Object();

s.setOrderDelegate = function(e) {
    e && (s.orderDelegate = e);
}, s.show = function() {
    s.orderDelegate.setData({
        detialDisplay: !0
    }), setTimeout(function() {
        s.orderDelegate.setData({
            detialDisplayAnimation: !0
        });
    }, 100);
}, s.hidden = function() {
    s.orderDelegate.setData({
        detialDisplayAnimation: !1
    }), setTimeout(function() {
        s.orderDelegate.setData({
            detialDisplay: !1
        });
    }, 320);
}, s.confirmOrderUpdateMaskView = function(o, a, r, p, n) {
    var c = {}, _ = [], m = {};
    if (o.seats && o.seats.length > 0) {
        _.push({
            type: "ticket",
            name: "电影票",
            price: ""
        });
        var d = [];
        for (var l in o.seats) {
            var u = o.seats[l], g = {};
            u.area_total_service_fee > 0 ? (k = parseFloat(u.seat_price) - parseFloat(u.area_total_service_fee), 
            g.price = i.priceFormat(k.toFixed(2))) : g.price = i.priceFormat(u.seat_price), 
            g.name = u.seat_name, g.count = u.seat_count, d.push(g);
        }
        m.ticket = d;
    }
    var f = a;
    if (console.log("------------------小吃数据 order_type =" + n), console.log(a), f.length > 0) {
        var h = [];
        if (_.push({
            type: "goods",
            name: r,
            price: ""
        }), "1" == n) {
            for (var l in f) if (D = f[l], (g = {}).name = D.goods_alias, g.count = D.choseNum, 
            g.promo_is_addition_type = D.promo_is_addition_type, e(h, g, p, D), "3" == D.goods_type && (g.price = parseFloat(g.price) + parseFloat(D.allAddPrice) * D.choseNum), 
            g.wxKey = h.length, h.push(g), t(h, D), D.additional_goods && D.additional_goods.length > 0) {
                console.log(D.addition_goods);
                for (var F in D.additional_goods) {
                    var y = D.additional_goods[F], v = {};
                    v.name = y.goods_alias, v.count = "1", v.promo_is_addition_type = "1", p ? (k = parseFloat(y.member_price), 
                    v.price = i.priceFormat(k.toFixed(2))) : (k = parseFloat(y.nonmember_price), v.price = i.priceFormat(k.toFixed(2))), 
                    v.wxKey = h.length, h.push(v);
                }
            }
        } else if ("2" == n) for (var l in f) {
            var D = f[l];
            (g = {}).name = D.goods_alias, g.count = D.good_num, g.promo_is_addition_type = D.promo_is_addition_type, 
            p ? (k = parseFloat(D.member_price) * D.choseNum, g.price = i.priceFormat(k.toFixed(2))) : (k = parseFloat(D.nonmember_price) * D.choseNum, 
            g.price = i.priceFormat(k.toFixed(2))), g.wxKey = h.length, "3" == D.goods_type && (g.price = parseFloat(g.price) + parseFloat(D.allAddPrice) * D.choseNum), 
            h.push(g), t(h, D, 0, !1);
        }
        m.goods = h;
    }
    var k = 0;
    parseFloat(o.goods_coupon_save_fee) > 0 && (k += parseFloat(o.goods_coupon_save_fee)), 
    parseFloat(o.coupon_total_subsidy) > 0 && (k += parseFloat(o.coupon_total_subsidy)), 
    k > 0 && _.push({
        type: "subsidy",
        name: "优惠券",
        price: i.priceFormat(k.toFixed(2))
    }), o.handle_fee > 0 && _.push({
        type: "totalfee",
        name: "手续费",
        price: i.priceFormat(o.handle_fee)
    }), o.total_service_fee > 0 && _.push({
        type: "servicefee",
        name: "服务费",
        price: i.priceFormat(o.total_service_fee)
    }), c.maskviewkeyArr = _, c.maskviewValueDic = m, c.title = "订单明细", c.message = o.refund_settings.refund_message, 
    c.total_price = o.newTotalPrice ? o.newTotalPrice : "", s.orderDelegate.setData({
        maskviewData: c
    });
}, s.orderDetialUpdateMaskView = function(e) {
    var o = {}, a = [], r = {};
    if (e.seats.length > 0) {
        a.push({
            type: "ticket",
            name: "电影票",
            price: ""
        });
        var p = [];
        for (var n in e.seats) {
            var c = e.seats[n], _ = {};
            c.area_total_service_fee > 0 ? (l = parseFloat(c.seat_price) - parseFloat(c.area_total_service_fee), 
            _.price = i.priceFormat(l.toFixed(2))) : _.price = i.priceFormat(c.seat_price), 
            _.name = c.seat_name, _.count = c.seat_count, p.push(_);
        }
        r.ticket = p;
    }
    if (e.goods_data.length > 0) {
        a.push({
            type: "goods",
            name: e.cinema_goods_name,
            price: ""
        });
        var m = [];
        for (var n in e.goods_data) {
            var d = e.goods_data[n];
            (_ = {}).name = d.goods_alias, _.count = d.good_num, _.promo_is_addition_type = "", 
            "1" == d.is_promo && (_.promo_is_addition_type = "0");
            var l = _.count * parseFloat(d.price) + "";
            if (_.price = i.priceFormat(l), m.push(_), t(m, d, 0, !0), d.additional_goods && d.additional_goods.length > 0) {
                console.log("-------------含有加价购商品-----------");
                for (var u in d.additional_goods) {
                    var g = d.additional_goods[u], f = {};
                    f.name = g.goods_alias, f.count = "1", f.promo_is_addition_type = "1", f.price = i.priceFormat(g.price), 
                    m.push(f);
                }
            }
        }
        r.goods = m;
    }
    e.coupon_total_subsidy && parseFloat(e.coupon_total_subsidy) > 0 && a.push({
        type: "subsidy",
        name: "优惠券",
        price: i.priceFormat(e.coupon_total_subsidy)
    }), e.total_fee > 0 && a.push({
        type: "totalfee",
        name: "购票手续费(不可退)",
        price: i.priceFormat(e.total_fee)
    }), e.total_service_fee > 0 && a.push({
        type: "servicefee",
        name: "服务费",
        price: i.priceFormat(e.total_service_fee)
    }), o.maskviewkeyArr = a, o.maskviewValueDic = r, o.message = e.message, o.title = "购买明细", 
    o.total_price = i.priceFormat(e.total_price), s.orderDelegate.setData({
        maskviewData: o
    });
}, s.returnTicketDataMaskiew = function(e) {
    var o = {}, a = [], t = {};
    e.refund_total_price && parseFloat(e.refund_total_price), e.refund_total_price && a.push({
        type: "orderMoney",
        name: "订单总价",
        price: parseFloat(e.total_price) + ""
    }), e.total_fee ? a.push({
        type: "subsidy",
        name: "购票手续费(不可退)",
        price: parseFloat(e.total_fee) + ""
    }) : a.push({
        type: "subsidy",
        name: "购票手续费",
        price: "0"
    }), e.refund_fee ? a.push({
        type: "subsidy",
        name: "退票手续费",
        price: parseFloat(e.refund_fee) + ""
    }) : a.push({
        type: "subsidy",
        name: "退票手续费",
        price: "0"
    }), o.maskviewkeyArr = a, o.maskviewValueDic = t, o.message = e.message, o.title = "退单明细", 
    o.total_price = i.priceFormat(e.total_price), s.orderDelegate.setData({
        maskviewData: o
    });
}, module.exports = s;