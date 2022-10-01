function o(o) {
    for (var e = 0, t = 0; t < o.length; t++) "1" == o[t].can_use && e++;
    return e;
}

function e(o) {
    o.isSelect = !o.isSelect;
    var e = r.data.selfCouponIDs, t = r.data.selfGoodCouponIDs;
    r.selfCalculatePriceIsSuccess = function(s) {
        s ? u({
            selfCouponList: r.data.selfCouponList,
            selfCouponBottomShow: r.data.selfCouponBottomShow
        }) : (o.isSelect = !o.isSelect, r.data.selfCouponIDs = e, r.data.selfGoodCouponIDs = t);
    }, a();
}

function t(o) {
    var t = 0, a = 0;
    for (var n in r.data.selfCouponList) {
        var u = r.data.selfCouponList[n];
        u.isSelect && ("2" == u.category ? t = "1" == u.coupon_type ? 1 : 2 : a = "1" == u.coupon_type ? 1 : 2);
    }
    var l = "2" == o.category ? t : a;
    return 0 == l || (1 == l && l != o.coupon_type ? (wx.showModal({
        confirmColor: "#ff9500",
        content: "使用代金券将放弃使用兑换券",
        success: function(t) {
            t.confirm && (s(o), e(o));
        }
    }), !1) : 2 != l || l == o.coupon_type || (wx.showModal({
        confirmColor: "#ff9500",
        content: "使用兑换券将放弃使用代金券",
        success: function(t) {
            t.confirm && (s(o), e(o));
        }
    }), !1));
}

function s(o) {
    for (var e in r.data.selfCouponList) {
        var t = r.data.selfCouponList[e];
        t.category == o.category && (t.isSelect = !1);
    }
}

function a() {
    var o = "", e = "";
    for (var t in r.data.selfCouponList) 1 == r.data.selfCouponList[t].isSelect && ("2" == r.data.selfCouponList[t].category ? e = e + r.data.selfCouponList[t].id + "," : o = o + r.data.selfCouponList[t].id + ",");
    if (e = e.slice(0, e.length - 1), 0 == (o = o.slice(0, o.length - 1)).length && 0 == e.length) return r.data.selfCouponBottomShow = !1, 
    void r.selfCalculatePriceIsSuccess(!0);
    r.data.selfCouponBottomShow = !0, r.data.selfCouponIDs = o, r.data.selfGoodCouponIDs = e, 
    r.delegate.calculatePriceWithSelfCoupons(o, e);
}

function n(e, t) {
    for (var s in e) {
        var a = e[s];
        if (!(a.promo_id && a.promo_id.length > 0 && (1 == a.promo_is_addition_type || a.choseNum <= a.promo_num))) for (var n in r.data.selfCouponList) {
            var l = r.data.selfCouponList[n];
            if (2 == l.category && (1 == l.could_use && l.can_use_goods && l.can_use_goods.length > 0)) if ("2" == l.coupon_type) {
                var i = 0;
                for (var p in l.can_use_goods) {
                    d = l.can_use_goods[p];
                    for (var c in e) {
                        var f = e[c];
                        if (f.goods_id == d) {
                            C = t ? f.member_price : f.nonmember_price;
                            f.promo_id.length > 0 ? i += parseFloat(C) * (f.choseNum - parseInt(f.promo_num)) : i += parseFloat(C) * f.choseNum, 
                            "3" == f.goods_type && f.allAddPrice && (i += parseFloat(f.allAddPrice));
                        }
                    }
                    if (parseFloat(l.condition_price) > 0) {
                        if (i >= parseFloat(l.condition_price)) {
                            g = r.data.selfCouponList.splice(n, 1);
                            r.data.selfCouponList.unshift(g[0]), l.can_use = "1";
                            break;
                        }
                    } else if (i >= parseFloat(l.replace_price)) {
                        g = r.data.selfCouponList.splice(n, 1);
                        r.data.selfCouponList.unshift(g[0]), l.can_use = "1";
                        break;
                    }
                }
            } else for (var p in l.can_use_goods) {
                var d = l.can_use_goods[p];
                if (a.goods_id == d) {
                    var C = t ? a.member_price : a.nonmember_price;
                    if ("3" == a.goods_type && a.allAddPrice && (C = parseFloat(C) + parseFloat(a.allAddPrice)), 
                    parseFloat(C) <= parseFloat(l.constant_price)) break;
                    var g = r.data.selfCouponList.splice(n, 1);
                    r.data.selfCouponList.unshift(g[0]), l.can_use = "1";
                    break;
                }
            }
        }
    }
    var _ = o(r.data.selfCouponList);
    u({
        selfCouponList: r.data.selfCouponList,
        canUseCouponCount: _
    });
}

function u(o) {
    r.delegate.upDateInterface(o);
}

var l = getApp().urlService, i = require("../../../../util/publicTool.js").setData, p = require("../../../../request/couponListPayRequest.js").couponListPayRequest, r = new Object();

r.couponPage = 1, r.setDelegate = function(o) {
    o && (r.delegate = o, r.clear());
}, r.data = {
    selfCouponList: [],
    total_page: 0,
    selfCouponIDs: "",
    selfGoodCouponIDs: "",
    selfCouponBottomShow: !1
}, r.historyData = {
    selfCouponIDs: "",
    selfGoodCouponIDs: "",
    selfCouponBottomShow: !1,
    historyCouponPriceEntity: null
}, r.loadSelfCouponList = function(o, e, t, s) {
    if (e && r.clear(), r.data.total_page < r.couponPage && !e) console.log("没有更多了"); else {
        p.type_id = s, o.page = r.couponPage.toFixed(0), r.couponPage += 1;
        var a = l.urls.couponListPay, n = l.urlParameter(o);
        l.wxRequest.getRequest(a, n).then(function(s) {
            console.log(s), p.decodeRes(s) && (i(r.data, {
                selfCouponList: r.data.selfCouponList.concat(p.successObj.couponRequestData.lists),
                total_page: p.successObj.couponRequestData.total_page
            }), e && r.showGoodCouponListWhenGoodDes(t, !!(o.card_id && o.card_id.length > 0)));
        }).finally(function() {});
    }
}, r.loadMoreSelfCoupons = function() {}, r.reloadSelfCouponList = function(e, t, s) {
    var a = l.urls.couponListPay, c = l.urlParameter(e);
    l.wxRequest.getRequest(a, c).then(function(s) {
        if (p.decodeRes(s)) {
            var a = p.successObj.couponRequestData.lists, l = r.data.selfGoodCouponIDs.split(","), c = r.data.selfCouponIDs.split(","), f = l.concat(c);
            for (var d in a) {
                var C = a[d];
                for (var g in f) C.id != f[g] || (C.isSelect = !0, console.log("已选择券：" + C.coupon_info));
            }
            i(r.data, {
                selfCouponList: a,
                total_page: p.successObj.couponRequestData.total_page
            }), n(t, !!(e.card_id && e.card_id.length > 0)), a.sort(function(o, e) {
                return parseFloat(e.can_use) - parseFloat(o.can_use);
            });
            var _ = o(a), h = a.length - _;
            u({
                selfCouponList: a,
                total_page: p.successObj.couponRequestData.total_page,
                canUseCouponCount: _,
                selfCouponTitle: _ > 0 ? "优惠券(" + _ + ")" : "优惠券",
                noUseSelfCouponCount: h,
                noUseItemTitle: h > 0 ? "不可用券(" + h + ")" : ""
            }), i(r.data, {
                selfCouponList: a,
                total_page: p.successObj.couponRequestData.total_page
            });
        }
    }).finally(function() {});
}, r.showGoodCouponListCanUse = n, r.showGoodCouponListWhenGoodDes = function(o, e) {
    var t = 0;
    for (var s in r.data.selfCouponList) {
        var a = r.data.selfCouponList[s];
        if (2 == a.category && (a.can_use = "0", a.isSelect = !1), "1" == a.can_use) {
            var l = r.data.selfCouponList.splice(s, 1);
            r.data.selfCouponList.splice(t++, 0, l[0]);
        }
    }
    r.data.selfGoodCouponIDs = "", n(o, e), u({
        selfCouponBottomShow: r.data.selfCouponIDs.length > 0
    });
}, r.selfCouponClick = function(o) {
    var s = o.currentTarget.dataset.index;
    if (0 != r.data.selfCouponList[s].can_use) {
        var a = r.data.selfCouponList[s];
        (a.isSelect || t(a)) && e(a);
    }
}, r.getSelfCouponNums = function() {
    var o = 0;
    for (var e in r.data.selfCouponList) r.data.selfCouponList[e].isSelect && (o += 1);
    return o;
}, r.getSelfMovieCouponNums = function() {
    return r.historyData.selfCouponIDs;
}, r.getSelfGoodsCouponNums = function() {
    return r.historyData.selfGoodCouponIDs;
}, r.saveSelectCouponHistory = function(o) {
    if (!o) return r.historyData.selfCouponIDs = "", r.historyData.selfGoodCouponIDs = "", 
    void (r.historyData.priceEntity = o);
    r.historyData.selfCouponIDs = r.data.selfCouponIDs, r.historyData.selfGoodCouponIDs = r.data.selfGoodCouponIDs, 
    r.historyData.priceEntity = o;
}, r.backSelectCouponHistory = function() {
    for (var e in r.data.selfCouponList) (n = r.data.selfCouponList[e]).isSelect = !1;
    r.data.selfCouponIDs = r.historyData.selfCouponIDs, r.data.selfGoodCouponIDs = r.historyData.selfGoodCouponIDs;
    var t = r.historyData.selfGoodCouponIDs.split(","), s = r.historyData.selfCouponIDs.split(","), a = t.concat(s);
    for (var e in r.data.selfCouponList) {
        var n = r.data.selfCouponList[e];
        for (var l in a) n.id != a[l] || (n.isSelect = !0);
    }
    var i = o(r.data.selfCouponList), p = r.data.selfCouponList.length - i;
    console.log("-------------self coupon-------------"), console.log(r.delegate.delegate.data.couponRightShow), 
    u({
        selfCouponList: r.data.selfCouponList,
        canUseCouponCount: i,
        selfCouponTitle: i > 0 ? "优惠券(" + i + ")" : "优惠券",
        noUseSelfCouponCount: p,
        noUseItemTitle: p > 0 ? "不可用券(" + p + ")" : "",
        selfCouponPriceEntity: r.historyData.priceEntity ? r.historyData.priceEntity : {},
        selfCouponBottomShow: r.data.selfCouponIDs.length > 0 || r.data.selfGoodCouponIDs.length > 0
    });
}, r.clear = function() {
    r.couponPage = 1, r.data = {
        selfCouponList: [],
        selfCouponIDs: "",
        selfGoodCouponIDs: "",
        selfCouponBottomShow: !1
    }, r.historyData = {
        selfCouponIDs: "",
        selfGoodCouponIDs: "",
        selfCouponBottomShow: !1,
        historyCouponPriceEntity: null
    };
}, module.exports = r;