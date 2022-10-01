function n(n) {
    if (0 != y.seatBestList.length) if (1 == n) {
        var i = y.seatBestList[0];
        console.log("getLeftSeat", "status:" + i.status + " name = " + i.sitname), e(i);
    } else {
        var u = y.seatBestList.length;
        console.log("size ===== " + u);
        for (var l = 0; l < u; l++) {
            var r = g(i = y.seatBestList[l]), a = m(i);
            if (2 != n) {
                if (3 == n && null != r && null != a) return e(r), e(i), void e(a);
                var o = g(r), _ = m(a);
                if (3 != n) {
                    if (4 == n) {
                        if (null != r && null != o && null != a) return void (null != a && null != _ && null != r ? r.priority + o.priority + a.priority <= a.priority + _.priority + r.priority ? (e(o), 
                        e(r), e(i), e(a)) : (e(r), e(i), e(a), e(_)) : (e(o), e(r), e(i), e(a)));
                        if (null != a && null != _ && null != r) return e(r), e(i), e(a), void e(_);
                    }
                    var t = g(o), s = m(_), x = g(t), c = m(s), p = g(x), v = m(c);
                    if (4 != n) {
                        if (5 == n && null != r && null != o && null != a && null != _) return e(o), e(r), 
                        e(i), e(a), void e(_);
                        if (5 == n) {
                            if (null != r && null != o && null != t && null != a) return void (null != a && null != _ && null != s && null != r ? r.priority + o.priority + t.priority + a.priority <= a.priority + _.priority + s.priority + r.priority ? (e(t), 
                            e(o), e(r), e(i), e(a)) : (e(r), e(i), e(a), e(_), e(s)) : (e(t), e(o), e(r), e(i), 
                            e(a)));
                            if (null != a && null != _ && null != s && null != r) return e(r), e(i), e(a), e(_), 
                            void e(s);
                        }
                        if (5 != n) {
                            if (6 == n) {
                                if (null != r && null != o && null != t && null != a && null != _) return void (null != a && null != _ && null != s && null != r && null != o ? r.priority + o.priority + t.priority + a.priority + _.priority <= a.priority + _.priority + s.priority + r.priority + o.priority ? (e(t), 
                                e(o), e(r), e(i), e(a), e(_)) : (e(o), e(r), e(i), e(a), e(_), e(s)) : (e(t), e(o), 
                                e(r), e(i), e(a), e(_)));
                                if (null != a && null != _ && null != s && null != r && null != o) return e(o), 
                                e(r), e(i), e(a), e(_), void e(s);
                            }
                            if (6 == n) {
                                if (null != r && null != o && null != t && null != x && null != a) return void (null != a && null != _ && null != s && null != c && null != r ? r.priority + o.priority + t.priority + x.priority + a.priority <= a.priority + _.priority + s.priority + c.priority + r.priority ? (e(x), 
                                e(t), e(o), e(r), e(i), e(a)) : (e(r), e(i), e(a), e(_), e(s), e(c)) : (e(x), e(t), 
                                e(o), e(r), e(i), e(a)));
                                if (null != a && null != _ && null != s && null != c && null != r) return e(r), 
                                e(i), e(a), e(_), e(s), void e(c);
                            }
                            if (6 != n) ; else {
                                if (null != r && null != o && null != t && null != x && null != p) return void (null != a && null != _ && null != s && null != c && null != v ? r.priority + o.priority + t.priority + x.priority + p.priority <= a.priority + _.priority + s.priority + c.priority + v.priority ? (e(p), 
                                e(x), e(t), e(o), e(r), e(i)) : (e(i), e(a), e(_), e(s), e(c), e(v)) : (e(p), e(x), 
                                e(t), e(o), e(r), e(i)));
                                if (null != a && null != _ && null != s && null != c && null != v) return e(i), 
                                e(a), e(_), e(s), e(c), void e(v);
                            }
                        } else {
                            if (null != r && null != o && null != t && null != x) return void (null != a && null != _ && null != s && null != c ? r.priority + o.priority + t.priority + x.priority <= a.priority + _.priority + s.priority + c.priority ? (e(x), 
                            e(t), e(o), e(r), e(i)) : (e(i), e(a), e(_), e(s), e(c)) : (e(x), e(t), e(o), e(r), 
                            e(i)));
                            if (null != a && null != _ && null != s && null != c) return e(i), e(a), e(_), e(s), 
                            void e(c);
                        }
                    } else {
                        if (null != r && null != o && null != t) return void (null != a && null != _ && null != s ? r.priority + o.priority + t.priority <= a.priority + _.priority + s.priority ? (e(t), 
                        e(o), e(r), e(i)) : (e(i), e(a), e(_), e(s)) : (e(t), e(o), e(r), e(i)));
                        if (null != a && null != _ && null != s) return e(i), e(a), e(_), void e(s);
                    }
                } else {
                    if (null != r && null != o) return void (null != a && null != _ ? r.priority + o.priority <= a.priority + _.priority ? (e(o), 
                    e(r), e(i)) : (e(i), e(a), e(_)) : (e(o), e(r), e(i)));
                    if (null != a && null != _) return e(i), e(a), void e(_);
                }
            } else {
                if (null != r) return void (null != a ? r.priority <= a.priority ? (e(r), e(i)) : (e(i), 
                e(a)) : (e(r), e(i)));
                if (null != a) return e(i), void e(a);
            }
        }
    }
}

function e(n) {
    n.status = "" + f, y.setImages(n), y.selectSeatArray.push(n);
}

function i() {
    for (var n = y.selectSeatArray.length - 1; n >= 0; n--) {
        var e = y.selectSeatArray[n], i = y.seatArray[e.index];
        i.status = "" + v, y.setImages(i), y.selectSeatArray.splice(n, 1);
    }
}

function u() {
    x() || (e(m(y.selectSeatArray[y.selectSeatArray.length - 1])), a(y.selectSeatArray[0]), 
    x() || (e(m(y.selectSeatArray[y.selectSeatArray.length - 1])), a(y.selectSeatArray[0])));
}

function l(n) {
    var e = n.status, i = y.selectSeatArray.length;
    if (e == v) {
        var u = !1;
        if (n.relation_sit) if (y.promo_num > 0) {
            if (!(i + 2 <= y.promo_num)) return y.Changed_Status_Out_Of_MaxPromoNum_Msg;
            u = !0;
        } else i + 2 <= y.SystemSelectTicketMax && (u = !0); else if (y.promo_num > 0) {
            if (!(i + 1 <= y.promo_num)) return y.Changed_Status_Out_Of_MaxPromoNum_Msg;
            u = !0;
        } else i + 1 <= y.SystemSelectTicketMax && (u = !0);
        return u ? (n.relation_sit ? (r(n), r(y.seatArray[n.relation_sit_index])) : r(n), 
        y.Changed_Status_Seat_Change) : y.Changed_Status_Out_Of_MaxSeatNum_Msg;
    }
    e != d && e != f || (n.relation_sit ? (a(n), a(y.seatArray[n.relation_sit_index])) : a(n));
}

function r(n) {
    n.status = "" + d, y.setImages(n), y.selectSeatArray.push(n), console.log("add====" + n.status);
}

function a(n) {
    for (var e = 0; e < y.selectSeatArray.length; e++) if (y.selectSeatArray[e].sitname == n.sitname) {
        y.selectSeatArray.splice(e, 1), n.status = "" + v, y.setImages(n);
        break;
    }
}

function o(n) {
    if (parseInt(n.status) == v) {
        for (var e = 0; e < y.seatBestList.length; e++) {
            var i = y.seatBestList[e];
            if (n.priority < i.priority) return void y.seatBestList.splice(e, 0, n);
        }
        y.seatBestList.push(n);
    }
}

function _() {
    var n = [], e = y.selectSeatArray.length;
    console.log("size = " + e);
    for (var i = 0; i < e; i++) {
        var u = y.selectSeatArray[i], l = parseInt(u.ordinate_vertical), r = parseInt(u.ordinate_horizontal), a = n.length;
        console.log("sizeRank = " + a + " i = " + i);
        for (var o = !1, _ = 0; _ < a; _++) {
            var t = (g = n[_])[0], s = parseInt(t.ordinate_vertical);
            if (r == parseInt(t.ordinate_horizontal)) {
                o = !0, s > l ? g.unshift(u) : g.push(u);
                break;
            }
        }
        if (!o) {
            console.log("新建一排  i = " + i);
            var g = [];
            g.push(u), n.push(g);
        }
    }
    return n;
}

function t(n) {
    if (1 == n.length) return s(i = n[0], i);
    var e = [], i = n[0];
    e.push(i);
    for (var u = null, l = parseInt(i.ordinate_vertical), r = 1; r < n.length; r++) {
        u = n[r];
        var a = parseInt(u.ordinate_vertical);
        if (console.log("isRankSeatRuleOk  x0 =" + l + " xNext =" + a + " i =" + r), a == l + 1) e.push(u), 
        l = a; else {
            if (console.log("isRankSeatRuleOk 不挨着  x0 =" + l + " xNext =" + a), !s(e[0], e[e.length - 1])) return !1;
            if (a == l + 2 && null != m(e[e.length - 1])) return !1;
            e.splice(0, e.length), e.push(u);
        }
    }
    return s(e[0], e[e.length - 1]);
}

function s(n, e) {
    var i = g(n);
    if (null == i) return console.log("左1非可选座位"), !0;
    var u = m(e);
    if (null == u) return console.log("右1非可选座位"), !0;
    if (console.log(u), null == g(i)) return console.log("左2非可选座位"), !1;
    console.log("左2可选座位，即左1，左2都是可选座位");
    var l = m(u);
    return console.log(l), null == l ? (console.log("右2非可选座位"), !1) : (console.log("右2可选座位，即右1，右2都是可选座位"), 
    !0);
}

function g(n) {
    if (null == n) return null;
    var e = parseInt(n.ordinate_vertical), i = parseInt(n.ordinate_horizontal);
    console.log("getLeftSeat11==y=" + e + " x=" + i + " max_x = " + y.rc.x + " max_y = " + y.rc.y);
    var u = e - 1 + (i - 1) * y.rc.y, l = (i - 1) * y.rc.y;
    if (i - 1 >= 0) {
        var r = u - 1;
        if (console.log("getLeftSeat11==preRowSitIndex=" + l + " index=" + r), r <= -1 || r < l) return null;
        var a = y.seatArray[r];
        return void 0 == a || a.relation_sit ? null : parseInt(a.status) == v ? a : null;
    }
    return null;
}

function m(n) {
    if (null == n) return null;
    var e = parseInt(n.ordinate_vertical), i = e - 1 + (parseInt(n.ordinate_horizontal) - 1) * y.rc.y;
    if (e - 1 + 1 < y.rc.y) {
        var u = i + 1, l = y.seatArray[u];
        return void 0 == l || l.relation_sit ? null : parseInt(l.status) == v ? l : null;
    }
    return null;
}

function x() {
    var n = _();
    console.log("rankSeatList==========" + n.length), console.log(n);
    for (var e = n.length, i = 0; i < e; i++) {
        var u = t(n[i]);
        if (console.log("isSuccess==========" + u + " i = " + i), !u) return !1;
    }
    return !0;
}

function c(n) {
    var e = n.fenquId;
    e && y.area_price[e] ? (n.price = y.area_price[e].price, n.service_fee = y.area_price[e].service_fee, 
    y.area_price[e].flag > 6 ? n.fenquId = 6 : n.fenquId = y.area_price[e].flag) : (n.price = y.area_price[1].price, 
    n.service_fee = y.area_price[1].service_fee, n.fenquId = "1");
}

function p(n) {
    var e = n.seat_type, i = n.status;
    3 == e ? 0 == i ? "r" == n.relation_sit_p ? n.src = y["qinglv_kexuan_r_" + n.fenquId] : n.src = y["qinglv_kexuan_l_" + n.fenquId] : 10 == i || 11 == i ? "r" == n.relation_sit_p ? n.src = y["qinglv_yixuan_r_" + n.fenquId] : n.src = y["qinglv_yixuan_l_" + n.fenquId] : "r" == n.relation_sit_p ? n.src = y.qinglv_yishou_r : n.src = y.qinglv_yishou_l : n.src = 4 == e ? 0 == i ? y["zhendong_kexuan_" + n.fenquId] : 10 == i || 11 == i ? y["zhendong_yixuan_" + n.fenquId] : y.yishou : 0 == i ? y["kexuan_" + n.fenquId] : 10 == i || 11 == i ? y["yixuan_" + n.fenquId] : y.yishou;
}

var y = new Object();

y.rc = {}, y.seatArray = [], y.seatBestList = [], y.selectSeatArray = [], y.seatBestList = [], 
y.area_price = {}, y.promo_id = "", y.promo_num = -1, y.promo_num_original = -1, 
y.SystemSelectTicketMax = 4, y.mBestCount = -1, y.bestSeatCountMax = -1, y.setPrice = function(n) {
    c(n);
}, y.setImages = function(n) {
    p(n);
}, y.isRuleOk = function() {
    return x();
}, y.addSeatPriority = function(n) {
    o(n);
}, y.onClickSeat = function(n) {
    return l(n);
}, y.getBestSeats = function(e) {
    n(e);
}, y.cancelAllSelectSeat = function() {
    i();
}, y.getNextBestSeatArray = function() {
    u();
}, y.Status_Null = -1, y.SEAT_EMPTY = "", y.Changed_Status_Out_Of_MaxSeatNum_Msg = 2, 
y.Changed_Status_Out_Of_MaxPromoNum_Msg = 3, y.Changed_Status_Seat_Change = 0;

y.fenqu_ex_1 = "/images/common/fenqu_ex_1.png", y.fenqu_ex_2 = "/images/common/fenqu_ex_2.png", 
y.fenqu_ex_3 = "/images/common/fenqu_ex_3.png", y.fenqu_ex_4 = "/images/common/fenqu_ex_4.png", 
y.fenqu_ex_5 = "/images/common/fenqu_ex_5.png", y.fenqu_ex_6 = "/images/common/fenqu_ex_6.png", 
y.yishou = "/images/common/xuanzuo_yishou.png", y.kexuan_1 = "/images/common/xuanzuo_kexuan_1.png", 
y.kexuan_2 = "/images/common/xuanzuo_kexuan_2.png", y.kexuan_3 = "/images/common/xuanzuo_kexuan_3.png", 
y.kexuan_4 = "/images/common/xuanzuo_kexuan_4.png", y.kexuan_5 = "/images/common/xuanzuo_kexuan_5.png", 
y.kexuan_6 = "/images/common/xuanzuo_kexuan_6.png", y.yixuan_1 = "/images/common/xuanzuo_yixuan_1.png", 
y.yixuan_2 = "/images/common/xuanzuo_yixuan_2.png", y.yixuan_3 = "/images/common/xuanzuo_yixuan_3.png", 
y.yixuan_4 = "/images/common/xuanzuo_yixuan_4.png", y.yixuan_5 = "/images/common/xuanzuo_yixuan_5.png", 
y.yixuan_6 = "/images/common/xuanzuo_yixuan_6.png", y.zhendong_kexuan_1 = "/images/common/xuanzuo_zhendong_kexuan_1.png", 
y.zhendong_kexuan_2 = "/images/common/xuanzuo_zhendong_kexuan_2.png", y.zhendong_kexuan_3 = "/images/common/xuanzuo_zhendong_kexuan_3.png", 
y.zhendong_kexuan_4 = "/images/common/xuanzuo_zhendong_kexuan_4.png", y.zhendong_kexuan_5 = "/images/common/xuanzuo_zhendong_kexuan_5.png", 
y.zhendong_kexuan_6 = "/images/common/xuanzuo_zhendong_kexuan_6.png", y.zhendong_yixuan_1 = "/images/common/xuanzuo_zhendong_yixuan_1.png", 
y.zhendong_yixuan_2 = "/images/common/xuanzuo_zhendong_yixuan_2.png", y.zhendong_yixuan_3 = "/images/common/xuanzuo_zhendong_yixuan_3.png", 
y.zhendong_yixuan_4 = "/images/common/xuanzuo_zhendong_yixuan_4.png", y.zhendong_yixuan_5 = "/images/common/xuanzuo_zhendong_yixuan_5.png", 
y.zhendong_yixuan_6 = "/images/common/xuanzuo_zhendong_yixuan_6.png", y.qinglv_kexuan_l_1 = "/images/common/xuanzuo_qinglv_kexuan_l_1.png", 
y.qinglv_kexuan_l_2 = "/images/common/xuanzuo_qinglv_kexuan_l_2.png", y.qinglv_kexuan_l_3 = "/images/common/xuanzuo_qinglv_kexuan_l_3.png", 
y.qinglv_kexuan_l_4 = "/images/common/xuanzuo_qinglv_kexuan_l_4.png", y.qinglv_kexuan_l_5 = "/images/common/xuanzuo_qinglv_kexuan_l_5.png", 
y.qinglv_kexuan_l_6 = "/images/common/xuanzuo_qinglv_kexuan_l_6.png", y.qinglv_kexuan_r_1 = "/images/common/xuanzuo_qinglv_kexuan_r_1.png", 
y.qinglv_kexuan_r_2 = "/images/common/xuanzuo_qinglv_kexuan_r_2.png", y.qinglv_kexuan_r_3 = "/images/common/xuanzuo_qinglv_kexuan_r_3.png", 
y.qinglv_kexuan_r_4 = "/images/common/xuanzuo_qinglv_kexuan_r_4.png", y.qinglv_kexuan_r_5 = "/images/common/xuanzuo_qinglv_kexuan_r_5.png", 
y.qinglv_kexuan_r_6 = "/images/common/xuanzuo_qinglv_kexuan_r_6.png", y.qinglv_yixuan_l_1 = "/images/common/xuanzuo_qinglv_yixuan_l_1.png", 
y.qinglv_yixuan_l_2 = "/images/common/xuanzuo_qinglv_yixuan_l_2.png", y.qinglv_yixuan_l_3 = "/images/common/xuanzuo_qinglv_yixuan_l_3.png", 
y.qinglv_yixuan_l_4 = "/images/common/xuanzuo_qinglv_yixuan_l_4.png", y.qinglv_yixuan_l_5 = "/images/common/xuanzuo_qinglv_yixuan_l_5.png", 
y.qinglv_yixuan_l_6 = "/images/common/xuanzuo_qinglv_yixuan_l_6.png", y.qinglv_yixuan_r_1 = "/images/common/xuanzuo_qinglv_yixuan_r_1.png", 
y.qinglv_yixuan_r_2 = "/images/common/xuanzuo_qinglv_yixuan_r_2.png", y.qinglv_yixuan_r_3 = "/images/common/xuanzuo_qinglv_yixuan_r_3.png", 
y.qinglv_yixuan_r_4 = "/images/common/xuanzuo_qinglv_yixuan_r_4.png", y.qinglv_yixuan_r_5 = "/images/common/xuanzuo_qinglv_yixuan_r_5.png", 
y.qinglv_yixuan_r_6 = "/images/common/xuanzuo_qinglv_yixuan_r_6.png", y.qinglv_yishou_l = "/images/common/xuanzuo_qinglv_yishou_l.png", 
y.qinglv_yishou_r = "/images/common/xuanzuo_qinglv_yishou_r.png";

var v = 0, f = 11, d = 10;

module.exports = y;