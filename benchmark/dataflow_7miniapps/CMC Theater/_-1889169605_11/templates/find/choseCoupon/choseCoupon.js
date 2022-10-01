function e(e, n, a) {
    var i = c.delegate.data.currentPrice.goods, u = o(i), s = 0;
    for (var r in e) {
        var p = e[r];
        for (var l in u) {
            var d = u[l];
            if (p == d.id) {
                console.log(" id === " + p + " coupon_type = " + n.coupon_type + " name = " + d.name + " is_promo = " + d.is_promo + " promo_is_addition_type =" + d.promo_is_addition_type);
                parseInt(d.buyCount);
                if ("0" == d.is_promo && "0" == d.promo_is_addition_type) if ("1" == n.coupon_type) {
                    var _ = parseFloat(n.constant_price);
                    if (parseFloat(d.price) > _) return !0;
                } else s += parseFloat(d.totalPrice); else {
                    if ("1" != d.is_promo || "2" != n.coupon_type) return !1;
                    if (!t(i)) return !1;
                    console.log("---------特惠超过限购");
                }
            }
        }
    }
    if (s > 0) {
        if ("2" == n.coupon_type) {
            var g = parseFloat(n.condition_price), f = parseFloat(n.replace_price);
            if (g > 0 && s < g) return !1;
            if (0 == g && s < f) return !1;
        }
        return !0;
    }
    return !1;
}

function o(e) {
    var o = [];
    for (var t in e) {
        var n = e[t];
        n.is_promo && "1" != n.is_promo && n.promo_is_addition_type && "1" != n.promo_is_addition_type && o.push(n);
    }
    return o;
}

function t(e) {
    for (var o = 0; o < e.length; o++) if (o < e.length - 1 && e[o].id == e[o + 1].id) return console.log("------存在相同id---"), 
    !0;
    return !1;
}

function n(e) {
    getApp().showModalApp(e);
}

function a(o, t) {
    var n = 0;
    for (var a in o) {
        var i = o[a];
        if (i.constant_price = u.priceFormat(i.constant_price), i.replace_price = u.priceFormat(i.replace_price), 
        i.condition_price = u.priceFormat(i.condition_price), i.status && "ok" != i.status && (i.is_new = "0", 
        i.will_be_expire_coupon_notice = i.status_desc), "1" == i.can_use) {
            var s = i.can_use_goods;
            s && s.length > 0 && (e(s, i, t) ? n += 1 : i.can_use = "0");
        }
        i.isSelected = !1, "1" == i.category ? i.icon_img = c.coupon_ticket_img : "2" == i.category && (i.icon_img = c.coupon_goods_img), 
        "2" == i.coupon_type ? "0" == i.can_use ? i.coupon_bg = c.daijin_shixiao_bg : i.coupon_bg = c.daijin_bg : "1" == i.coupon_type && ("0" == i.can_use ? i.coupon_bg = c.duihuan_shixiao_bg : i.coupon_bg = c.duihuan_bg);
    }
    return n;
}

var i = require("./../../../config/httpHtlper.js"), u = require("./../../../util/strUtil.js"), s = require("../../confirmOrder/choseCoupon/activeCoupon/activeCoupon.js"), c = new Object();

c.setDelegate = function(e) {
    e && (c.delegate = e, s.setDelegate(c));
}, c.show = function() {
    c.delegate.setData({
        isShow: !0
    }), setTimeout(function() {
        c.delegate.setData({
            isShowAnimation: !0
        });
    }, 100);
}, c.hide = function() {
    c.delegate.setData({
        isShowAnimation: !1
    }), setTimeout(function() {
        c.delegate.setData({
            isShow: !1
        });
    }, 320);
}, c.getCouponList = function(e, o, t, n) {
    i.getCouponList(e, o, t, n).then(function(e) {
        if (console.log(e), 1 == e.data.status) {
            var o = e.data.data.lists, i = e.data.data.total_num, u = e.data.data.total_page, s = 0;
            if (t > 1 && (s = c.delegate.data.can_use_count), o && o.length > 0) {
                s += a(o, n), t > 1 && (o = c.delegate.data.couponLists.concat(o)), o.sort(function(e, o) {
                    return parseFloat(o.can_use) - parseFloat(e.can_use);
                });
                var r = c.delegate.data.offLineCanUseCount, p = o.length - s, l = r + s;
                c.delegate.setData({
                    couponLists: o,
                    total_num: i,
                    can_use_count: l,
                    total_page: u,
                    canUseSelfCount: s,
                    noUseSelfCouponCount: p,
                    noUseItemTitle: p > 0 ? "不可用券(" + p + ")" : ""
                });
            } else {
                if (console.log("choseCoupon.delegate.data.isNeedShowCoupon", c.delegate.data.isNeedShowCoupon), 
                c.delegate.data.isNeedShowCoupon && c.showActiveCoupon(), (r = c.delegate.data.offLineCanUseCount) > 0) {
                    var p = 0, l = r;
                    return void c.delegate.setData({
                        total_num: i,
                        can_use_count: l,
                        total_page: u,
                        canUseSelfCount: 0,
                        noUseSelfCouponCount: p,
                        noUseItemTitle: p > 0 ? "不可用券(" + p + ")" : ""
                    });
                }
                var d = "暂无优惠券";
                t > 1 && (d = "数据已加载完毕", wx.showToast({
                    icon: "none",
                    title: d
                }));
            }
        }
    });
}, c.reloadSelfCouponList = function(e, o, t, n) {
    i.getCouponList(e, o, t, n).then(function(e) {
        if (console.log(e), 1 == e.data.status) {
            var o = e.data.data.lists, t = e.data.data.total_num, i = e.data.data.total_page;
            if (o && o.length > 0) {
                var u = a(o, n), s = o.length - u, r = c.delegate.data.couponLists;
                if (r && r.length > 0) for (var p in o) {
                    var l = o[p];
                    for (var d in r) if (l.id == r[d].id && r[d].isSelected) {
                        console.log("已经选择的券：" + l.coupon_info), l.isSelected = !0;
                        break;
                    }
                }
                o.sort(function(e, o) {
                    return parseFloat(o.can_use) - parseFloat(e.can_use);
                }), c.delegate.setData({
                    couponLists: o,
                    total_num: t,
                    canUseSelfCount: u,
                    can_use_count: u,
                    total_page: i,
                    noUseCouponCount: s,
                    noUseItemTitle: s > 0 ? "不可用券(" + s + ")" : ""
                });
            }
        }
    });
}, c.getCouponIds = function(e) {
    var o = "", t = c.delegate.data.couponLists;
    for (var n in t) {
        var a = t[n];
        if (console.log("ids isSelected = " + a.isSelected + " i = " + n), a.isSelected) if (e) if (e.isSelected && a.id == e.id) console.log("ids isSelected======================= = "); else {
            if ("2" == a.coupon_type && "2" == e.coupon_type) continue;
            "1" == a.coupon_type && e.coupon_type, o = o + a.id + ",";
        } else o = o + a.id + ",";
    }
    return e && (e.isSelected || (o = o.length > 0 ? o + e.id + "," : e.id + ",")), 
    o.length > 0 && (o = o.substring(0, o.length - 1)), o;
}, c.removePromo = o, c.isCanUse = e, c.overPromoNum = t, c.isSelectedCoupon = function() {
    var e = c.delegate.data.couponLists;
    for (var o in e) if (e[o].isSelected) return !0;
    return !1;
}, c.isSameCoupon = function(e) {
    var o = c.delegate.data.couponLists, t = !1, a = 0;
    for (var i in o) {
        var u = o[i];
        u.isSelected && "2" == u.coupon_type && (t = !0), u.isSelected && "1" == u.coupon_type && (a += 1);
    }
    if (t) {
        if ("1" == e.coupon_type) return n("不允许叠加使用，请手动取消原有选择"), !0;
    } else if (a > 0 && "2" == e.coupon_type) return n("不允许叠加使用，请手动取消原有选择"), !0;
    return !1;
}, c.getSingleGoodNum = function(e) {
    if (e) {
        var o = c.delegate.data.currentPrice.goods;
        for (var t in o) if (e == o[t].id) return o[t].num;
    }
    return 0;
}, c.clearSelected = function() {
    var e = c.delegate.data.couponLists;
    for (var o in e) e[o].isSelected = !1;
    return e;
}, c.showActiveCoupon = function() {
    c.delegate.setData({
        goSelfCoupon: !1
    });
}, c.showSelfCoupon = function() {
    c.delegate.setData({
        goSelfCoupon: !0
    });
}, c.getOffLineCouponList = s.getOffLineCouponList, c.dealOffLineCouponList = s.dealOffLineCouponList, 
c.onlineCouponRuleClick = s.onlineCouponRuleClick, c.getActiveCouponNums = s.getActiveCouponNums, 
c.couponClick = s.couponClick, c.duihuan_bg = "/images/newcoupon/duihuan_bg.png", 
c.duihuan_shixiao_bg = "/images/newcoupon/duihuan_shixiao_bg.png", c.daijin_bg = "/images/newcoupon/daijin_bg.png", 
c.daijin_shixiao_bg = "/images/newcoupon/daijin_shixiao_bg.png", c.coupon_ticket_img = "/images/newcoupon/duihuanquan_dianying_icon.png", 
c.coupon_goods_img = "/images/newcoupon/duihuanquan_maipin_icon.png", c.coupon_weixuan = "/images/coupon/icon_coupon_weixuan.png", 
c.upDateInterface = function(e) {
    c.delegate.data.can_use_count = e.offLineCanUseCount, c.delegate.setData(e);
}, c.calculatePriceWithCoupons = function(e, o, t) {
    c.delegate && (c.calculatePriceIsSuccess = s.calculatePriceIsSuccess, c.delegate.calculatePriceWithCoupons(e, o, t));
}, module.exports = c;