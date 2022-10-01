function e(e, r, n, p, s) {
    p = p >= e.length ? 0 : p;
    for (var _ in e) {
        var a = e[_];
        a.scroll_id = "scroll" + a.movie_id, a.backBlurImg = a.movie_img_url, a.refrushTimeData = {};
        var l = a.days;
        r !== l[0].show_date && (l.unshift({
            show_date: r,
            preferetial: "2"
        }), a.shows[r] = []);
        var c = s >= l.length ? 0 : s, b = new Map();
        for (var h in l) {
            var u = l[h];
            u.last_show_date = o(r, u.show_date);
            var y = u.show_date;
            b.set(y, []), u.is_select = 0 == h;
        }
        _ == p ? (a.isSelect = !0, a.selectDateIndex = c, l[0].is_select = !1, l[c].is_select = !0) : a.isSelect = !1, 
        a.refrushTimeData = b;
        var d = a.shows, b = a.refrushTimeData;
        for (var f in l) {
            var g = l[f].show_date, T = d[g];
            for (var w in T) {
                var v = T[w];
                t(v), i(b, g, v, n, a);
                var B;
                if (0 == w) v.time_type = m(g, v), B = v.time_type; else {
                    var D = m(g, v);
                    B == D ? v.time_type = "0" : (v.time_type = D, B = D);
                }
            }
        }
    }
}

function t(e) {
    parseFloat(e.member_discount_amount) >= 1e3 ? e.member_discount_amount = parseInt(e.member_discount_amount).toFixed(0) : e.member_discount_amount = n.priceFormat(e.member_discount_amount), 
    -1 != e.member_price && (parseFloat(e.member_price) >= 1e3 ? e.member_price = parseInt(e.member_price).toFixed(0) : e.member_price = n.priceFormat(e.member_price)), 
    -1 != e.nonmember_price && (parseFloat(e.nonmember_price) >= 1e3 ? e.nonmember_price = parseInt(e.nonmember_price).toFixed(0) : e.nonmember_price = n.priceFormat(e.nonmember_price)), 
    e.showLeft = !1, e.leftTitle = "", e.bottomLeftTitle = "", e.showMemberHui = !1, 
    e.showBottomPrice = !1, e.showBottomMemberPrice = !1;
    e.promo_desc.length;
    -1 == e.nonmember_price ? (e.showType = 3, "1" == e.member_promotion_type ? (e.showMemberHui = !0, 
    e.leftTitle = "特惠") : "2" == e.member_promotion_type ? (e.showLeft = !0, e.leftTitle = "首单") : (e.showLeft = !0, 
    e.leftTitle = "")) : -1 == e.member_price ? (e.showType = 4, "1" == e.nonmember_promotion_type ? (e.showLeft = !0, 
    e.leftTitle = "特惠") : "2" == e.nonmember_promotion_type && (e.showLeft = !0, e.leftTitle = "首单")) : "nonmember" == e.user_type ? (e.showType = 2, 
    e.showBottomMemberPrice = !0, "1" == e.nonmember_promotion_type ? (e.showLeft = !0, 
    e.leftTitle = "特惠") : "2" == e.nonmember_promotion_type && (e.showLeft = !0, e.leftTitle = "首单"), 
    "1" == e.member_promotion_type ? e.bottomLeftTitle = "主推卡特惠" : "2" == e.member_promotion_type ? e.bottomLeftTitle = "主推卡首单" : e.bottomLeftTitle = "主推卡") : (e.showType = 1, 
    e.showBottomPrice = !1, "1" == e.member_promotion_type ? (e.showMemberHui = !0, 
    e.leftTitle = "特惠", e.bottomLeftTitle = "主推卡特惠") : "2" == e.member_promotion_type ? (e.showLeft = !0, 
    e.leftTitle = "首单", e.bottomLeftTitle = "主推卡首单") : (e.showLeft = !0, e.leftTitle = "", 
    e.bottomLeftTitle = "主推卡"));
}

function i(e, t, i, m, o) {
    var p = e.get(t);
    if ("card" == i.user_type ? i.isMember = !0 : "nonmember" == i.user_type && (i.isMember = !1), 
    i.isShowPreemption = !1, i.preemption && i.preemption.is_preemption_show && "1" == i.preemption.is_preemption_show) if ("-1" == i.preemption.status) {
        if (i.preemption.member_priority_tip && i.preemption.member_priority_tip.length > 0) {
            var s = i.preemption.member_priority_tip[0].length > 0 ? i.preemption.member_priority_tip[0][0].split("{$}") : [], _ = i.preemption.member_priority_tip[0].length > 1 ? i.preemption.member_priority_tip[0][1] : "";
            s.length >= 2 && (s[0].length > 0 ? i.preemption.selltimeRightTip0 = s[0] : i.preemption.selltimeRightTip0 = "", 
            s[1].length > 0 ? (i.preemption.selltimeRightTip2 = s[1], i.preemption.selltimeRightTip1 = _) : (i.preemption.selltimeRightTip2 = "", 
            i.preemption.selltimeRightTip1 = _));
        }
        p.push(i), i.isShowPreemption = !0, i.buyBtnDesc = "待开售", i.preemption.forwordTime = i.preemption.nomember_buy_count_down - i.preemption.member_buy_count_down, 
        i.isMember ? i.buyBtnType = "6" : i.buyBtnType = "7";
    } else if ("1" == i.preemption.status) {
        if (i.preemption.member_priority_tip && i.preemption.member_priority_tip.length > 1) {
            var s = i.preemption.member_priority_tip[1].length > 0 ? i.preemption.member_priority_tip[1][0].split("{$}") : [], _ = i.preemption.member_priority_tip[1].length > 1 ? i.preemption.member_priority_tip[1][1] : "";
            console.log(_), s.length >= 2 && (s[0].length > 0 ? i.preemption.selltimeRightTip0 = s[0] : i.preemption.selltimeRightTip0 = "", 
            s[1].length > 0 ? (i.preemption.selltimeRightTip2 = s[1], i.preemption.selltimeRightTip1 = _) : (i.preemption.selltimeRightTip2 = "", 
            i.preemption.selltimeRightTip1 = _));
        }
        p.push(i), i.isMember || (i.isShowPreemption = !0), i.buyBtnDesc = "优先购", i.buyBtnType = "8";
    } else "0" == i.preemption.status && (r(t, i.start_time, m) ? (i.buyBtnType = "1", 
    i.buyBtnDesc = "停售") : "1" == i.is_all_sold ? (i.buyBtnType = "2", i.buyBtnDesc = "售完") : i.promo_desc.length ? (i.buyBtnType = "3", 
    i.buyBtnDesc = "购票") : "2" == i.remain_seat_type ? (i.buyBtnType = "4", i.buyBtnDesc = "购票") : (i.buyBtnType = "5", 
    i.buyBtnDesc = "购票")); else r(t, i.start_time, m) ? (i.buyBtnType = "1", i.buyBtnDesc = "停售") : "1" == i.is_all_sold ? (i.buyBtnType = "2", 
    i.buyBtnDesc = "停售") : i.promo_desc.length ? (i.buyBtnType = "3", i.buyBtnDesc = "购票") : "2" == i.remain_seat_type ? (i.buyBtnType = "4", 
    i.buyBtnDesc = "购票") : (i.buyBtnType = "5", i.buyBtnDesc = "购票");
    i.service_fee = n.priceFormat(i.service_fee), "-1" != i.member_price && (i.member_price = n.priceFormat(i.member_price)), 
    "-1" != i.nonmember_price && (i.nonmember_price = n.priceFormat(i.nonmember_price));
}

function r(e, t, i) {
    var r = e + " " + t + ":00", m = new Date(r).getTime(), o = parseInt(t.split(":")[0]);
    return o >= 0 && o <= 5 && (m += 864e5), new Date().getTime() + 6e4 * parseInt(i) > m;
}

function m(e, t) {
    var i = e + " " + t.start_time + ":00", r = (new Date(i).getTime(), parseInt(t.start_time.split(":")[0]));
    return r >= 0 && r <= 5 ? (t.time_type_img = "", "4") : r >= 6 && r <= 11 ? (t.time_type_img = "/images/cinema/shouye_icon_zaochang.png", 
    "1") : r >= 12 && r <= 17 ? (t.time_type_img = "/images/cinema/shouye_icon_wuchang.png", 
    "2") : (t.time_type_img = "/images/cinema/shouye_icon_wanchang.png", "3");
}

function o(e, t) {
    var i = new Date(t), r = i.getMonth() + 1 + "月" + i.getDate() + "日", m = new Date(e).getTime(), o = i.getTime();
    return m === o ? "今天" + r : m + 864e5 === o ? "明天" + r : m + 1728e5 === o ? "后天" + r : "周" + "日一二三四五六".charAt(new Date(t).getDay()) + r;
}

var n = require("../util/strUtil.js"), p = new Object();

p.decodeRes = function(t, i, r) {
    p.successObj = {}, p.failObj = {
        isError: !1
    };
    var m = t.data;
    if ("0" !== m.errcode) return this.failObj = {
        isError: !0,
        errcode: m.errcode,
        msg: m.msg
    }, !1;
    var o = m.data;
    return o.cinema_data.isShowMainPushCard = !1, o.cinema_data && o.cinema_data.default_cinema_card_level_id && "0" != o.cinema_data.default_cinema_card_level_id && (o.cinema_data.isShowMainPushCard = !0), 
    this.successObj.cinemaData = o.cinema_data, this.successObj.cinemaData.today = o.today, 
    this.successObj.selectMovieIndex = i, o.movie_data.length ? (e(o.movie_data, o.today, o.cinema_data.can_sell_minutes, this.successObj.selectMovieIndex, r), 
    this.successObj.movieData = o.movie_data, !0) : (this.failObj = {
        isError: !0,
        errcode: m.errcode,
        msg: "该影院暂无排片"
    }, !1);
}, module.exports = {
    cinemaRequest: p
};