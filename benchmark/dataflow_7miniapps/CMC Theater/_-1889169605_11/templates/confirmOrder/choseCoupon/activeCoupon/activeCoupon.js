function o(o) {
    var e = o.split(","), n = new Set(e);
    return o = "", n.forEach(function(e, n, a) {
        o = o + e + ",";
    }), o = o.slice(0, o.length - 1), i.data.duplicateTitle = "", e.length != n.size && (i.data.duplicateTitle = "你输入的" + e.length + "张优惠券存在重复," + n.size + "张有效"), 
    o;
}

function e(o) {
    for (var e in i.data.couponList) {
        var n = i.data.couponList[e];
        if (n.selected && n.channel != o.channel) return 0;
        if (n.selected && n.card_num && n.card_num.length > 0 && "3" == o.channel && n.card_num != o.card_num) return 2;
    }
    return 1;
}

function n(o, e) {
    var n = "";
    for (var a in i.data.couponList) 1 == i.data.couponList[a].selected && i.data.newCouponNum != i.data.couponList[a].couponNum && (n = n + i.data.couponList[a].couponNum + ",");
    if (console.log("---------couponNums = " + n + " curcoupon selected = " + i.data.curCoupon.selected), 
    i.data.curCoupon.selected && (n = n + i.data.newCouponNum + ","), n && n.length > 0 && (n = n.slice(0, n.length - 1)), 
    console.log("-----end ----couponNums = " + n), 0 == n.length) return i.data.couponBottomShow = !1, 
    void i.calculatePriceIsSuccess(!0);
    i.data.couponBottomShow = !0, i.data.couponNums = n, i.delegate.calculatePriceWithCoupons(n, o, e);
}

function a(o, e, n) {
    if (1 == o.data.status) {
        var a = o.data.data.list, u = parseInt(o.data.data.can_use_count), s = parseInt(o.data.data.un_can_use_count);
        if (1 == n && (u = 0, s = 0), a && 0 == a.length) return void (i.delegate.delegate.data.isNeedShowCoupon = !1);
        i.delegate.delegate.data.isNeedShowCoupon = !0;
        var l = i.delegate.delegate.data.couponList;
        console.log("localCouponList = ", l), 1 == n && (e = i.delegate.delegate.data.choseGoodListArr), 
        console.log("goods Arr = ", e);
        for (var p in a) {
            var d = a[p];
            if ("1" == d.category) d.tempCategoryName = "电影券", "1" == d.can_use && 1 == n ? u += 1 : 1 == n && (s += 1); else if ("2" == d.category) {
                if (d.tempCategoryName = "卖品券", "1" == d.can_use && 2 == n) u -= r = c(d, e, n), 
                s += r; else if (1 == n) {
                    var r = c(d, e, n);
                    0 == r ? u += 1 : s += 1;
                }
            } else "3" == d.category && (d.tempCategoryName = "通用券", 1 == n && ("1" == d.can_use ? u += 1 : s += 1));
            d.selected = !1, d.isShowDetail = !1, d.image = "/images/newcoupon/quan_xianxia_bg.png", 
            d.rule_image = "/images/newcoupon/icon_offline_coupon_arrow_down.png", d.isNoUse = !0, 
            "0" == d.can_use && (d.isNoUse = !1, d.image = "/images/newcoupon/duihuan_shixiao_bg.png", 
            d.rule_image = "/images/newcoupon/icon_offline_coupon_arrow_down_shixiao.png");
            var f = d.coupon_num;
            d.couponNum = f;
            var g = "";
            if (f) {
                for (var _ = f.length, m = 0; m < _; m++) g += f[m], (m + 1) % 4 == 0 && (g += " ");
                d.tempCouponNum = g;
            }
            "3" == d.channel && (d.tempCouponNum = d.coupon_num, d.couponNum = d.member_coupon_id), 
            "2" == d.channel && 2 == n && (d.couponNum = d.member_coupon_id);
            for (var m in l) {
                var w = l[m];
                w.selected && w.member_coupon_id == d.member_coupon_id && (d.selected = w.selected, 
                d.isShowDetail = w.isShowDetail, console.log("--------本地已经选择了券-------", d));
            }
        }
        console.log("========================"), console.log("can_use_count:" + u + " un_can_use_count:" + s), 
        a.sort(function(o, e) {
            return parseFloat(e.can_use) - parseFloat(o.can_use);
        }), t({
            couponList: a,
            newCouponNum: "",
            duplicateTitle: "",
            inputNum: "",
            offLineCanUseCount: u,
            offlineNoCanUseCount: s,
            nooffLineCouponItemTitle: s > 0 ? "不可用券(" + s + ")" : ""
        });
    }
}

function t(o) {
    i.data = o, u(o), console.log("=====================");
}

function u(o) {
    i.delegate.upDateInterface(o);
}

function c(o, e, n) {
    if ("2" == o.category && "0" == o.can_use && 2 == n) return 1;
    if ("2" == o.category && 1 == n) return o.can_use = "0", 1;
    for (var a in e) {
        var t = e[a], u = t.goods_id;
        if (2 == n && (t.choseNum = t.buyCount, u = t.id), 0 == o.allow_goods_list.length || -1 != o.allow_goods_list.indexOf(u)) return o.can_use = "1", 
        0;
    }
    return o.can_use = "0", 1;
}

var i = new Object();

i.setDelegate = function(o) {
    o && (i.delegate = o, i.clear());
}, i.data = {
    couponList: [],
    newCouponNum: "",
    duplicateTitle: "",
    inputNum: ""
}, i.addCoupon = function() {
    if (i.data.newCouponNum && i.data.newCouponNum.length > 0) {
        for (var o = i.data.newCouponNum.split(","), e = 0; e < o.length; e++) i.data.couponList.push({
            couponNum: o[e],
            selected: !0
        });
        i.data.duplicateTitle.length > 0 && wx.showModal({
            content: i.data.duplicateTitle,
            confirmText: "我知道了",
            showCancel: !1
        }), i.data.newCouponNum = "";
    }
    u({
        couponList: i.data.couponList,
        couponBottomShow: !0,
        inputNum: ""
    });
}, i.addcouponSubmit = function(e) {
    var a = e.detail.value.couponNum;
    if ((a = a.replace(/\s/g, "")).length <= 0) wx.showToast({
        title: "请输入券码",
        icon: "none"
    }); else {
        a = o(a);
        for (var t in i.data.couponList) {
            var u = i.data.couponList[t].couponNum;
            if (-1 != a.indexOf(u)) return void wx.showToast({
                title: "请勿重复添加",
                icon: "none"
            });
        }
        i.data.newCouponNum = a, n(!0);
    }
}, i.couponClick = function(o) {
    var a = o.currentTarget.dataset.index, t = i.data.couponList[a];
    if ("0" != t.can_use) {
        var c = 0;
        if (1 == e(t)) {
            if (3 == t.channel) c = 3; else {
                if (2 != t.channel) return;
                var s = t.coupon_info;
                if (i.data.selectedMovieCouponInfo && s != i.data.selectedMovieCouponInfo) return void getApp().showModalApp("当前订单只支持一种优惠方式");
                if (i.data.selectedGoodCouponInfo && s != i.data.selectedGoodCouponInfo) return void getApp().showModalApp("当前订单只支持一种优惠方式");
                c = 2;
            }
            i.setSeletedCouponInfo = function() {
                var o = !1;
                for (var e in i.data.couponList) {
                    var n = i.data.couponList[e];
                    n.selected && (o = !0, "1" == n.category ? i.data.selectedMovieCouponInfo = n.coupon_info : "2" == n.category && (i.data.selectedGoodCouponInfo = n.coupon_info));
                }
                o || (i.data.selectedMovieCouponInfo = "", i.data.couponNums = "", i.data.selectedGoodCouponInfo = ""), 
                console.log("selected coupon info  = ", i.data.selectedMovieCouponInfo);
            }, i.data.couponList[a].selected = !i.data.couponList[a].selected;
            var l = i.data.couponNums;
            i.calculatePriceIsSuccess = function(o) {
                o ? (u({
                    couponList: i.data.couponList,
                    couponBottomShow: i.data.couponBottomShow
                }), i.setSeletedCouponInfo()) : (i.data.couponList[a].selected = !i.data.couponList[a].selected, 
                i.data.couponNums = l, i.setSeletedCouponInfo(), console.log("券使用失败 ======== index =" + a + " couponNums =" + l));
            }, i.data.curCoupon = t, i.data.newCouponNum = "3" == t.channel ? t.member_coupon_id : t.couponNum, 
            n(!0, c);
        } else getApp().showModalApp("当前订单只支持一种优惠方式");
    } else console.log("---券不可用----");
}, i.getActiveCouponNums = function() {
    var o = "", e = !1;
    for (var n in i.data.couponList) {
        var a = i.data.couponList[n];
        a.selected && (e = "3" == a.channel, o = o + a.couponNum + ",");
    }
    return o.length > 0 && (o = o.slice(0, o.length - 1)), i.delegate.delegate.data.isInnerCardCoupon = e, 
    o;
}, i.onlineCouponRuleClick = function(o) {
    var e = i.delegate.delegate.data.couponList, n = o.currentTarget.dataset.index;
    console.log("------index---------" + n);
    var a = e[n];
    a.isShowDetail = !a.isShowDetail, a.isShowDetail ? (a.rule_image = "/images/newcoupon/icon_offline_coupon_arrow_up.png", 
    "0" == a.can_use && (a.rule_image = "/images/newcoupon/icon_offline_coupon_arrow_up_shixiao.png")) : (a.rule_image = "/images/newcoupon/icon_offline_coupon_arrow_down.png", 
    "0" == a.can_use && (a.rule_image = "/images/newcoupon/icon_offline_coupon_arrow_down_shixiao.png")), 
    t({
        couponList: e
    });
}, i.getOffLineCouponList = function(o, e) {
    a(o, [], e);
}, i.setOfflineData = t, i.dealOffLineCouponList = a, i.getOffLineCouponListWhenGoodChange = function(o, e, n) {
    var a = i.delegate.delegate.data.couponList, u = 0, s = 0, l = 0;
    for (var p in a) {
        var d = a[p];
        d.selected = 2 != n && d.selected, d.selected && (l += 1), "1" == d.category ? "1" == d.can_use && 1 == e ? u += 1 : s += 1 : "2" == d.category ? 0 == c(d, o, e) ? u += 1 : s += 1 : "3" == d.category && 1 == e && ("1" == d.can_use ? u += 1 : s += 1), 
        d.image = "/images/newcoupon/quan_xianxia_bg.png", d.rule_image = "/images/newcoupon/icon_offline_coupon_arrow_down.png", 
        d.isNoUse = !0, "0" == d.can_use && (d.isNoUse = !1, d.image = "/images/newcoupon/duihuan_shixiao_bg.png", 
        d.rule_image = "/images/newcoupon/icon_offline_coupon_arrow_down_shixiao.png"), 
        console.log("加减卖品线下券是否可用 can_use_count:" + u + " un_can_use_count:" + s);
    }
    a.sort(function(o, e) {
        return parseFloat(e.can_use) - parseFloat(o.can_use);
    }), t({
        couponList: a,
        offLineCanUseCount: u,
        offlineNoCanUseCount: s,
        nooffLineCouponItemTitle: s > 0 ? "不可用券(" + s + ")" : "",
        offLineCouponSelectedCount: l,
        couponBottomShow: l > 0
    });
}, i.clear = function() {
    i.data = {
        couponList: [],
        newCouponNum: "",
        duplicateTitle: "",
        couponNums: "",
        inputNum: "",
        curCouponInfo: "",
        selectedMovieCouponInfo: ""
    };
}, module.exports = i;