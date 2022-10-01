function e(e) {
    for (var a = 0; a < e.length; a++) {
        var o = e[a];
        o.status && "ok" != o.status && (o.is_new = "0", o.will_be_expire_coupon_notice = o.status_desc), 
        o.isSelect = !1, o.showTime = o.validate_date_start + "-" + o.validate_date_end, 
        o.endImage = o.category && "1" != o.category ? "/images/newcoupon/duihuanquan_maipin_icon.png" : "/images/newcoupon/duihuanquan_dianying_icon.png", 
        console.log(o.endImage), "1" == o.coupon_type ? (o.showPrice = i.priceFormat(o.constant_price), 
        o.tip = "兑换券", o.image = "/images/newcoupon/duihuan_bg.png", o.nouse_image = "/images/newcoupon/duihuan_shixiao_bg.png") : "2" == o.coupon_type && (o.showPrice = i.priceFormat(o.replace_price), 
        o.image = "/images/newcoupon/daijin_bg.png", o.nouse_image = "/images/newcoupon/daijin_shixiao_bg.png", 
        o.condition_price > 0 ? o.tip = "满" + i.priceFormat(o.condition_price) + "可用" : o.tip = "立减"), 
        2 != o.category ? (o.could_use = o.can_use, "3" == n.type_id && (o.could_use = "0", 
        o.can_use = "0")) : (o.could_use = o.can_use, o.can_use = "0", "3" == n.type_id && (o.could_use = "0"));
    }
}

var i = require("../util/strUtil.js"), n = new Object();

n.successObj = {}, n.failObj = {}, n.type_id = "", n.decodeRes = function(i) {
    var a = i.data;
    if ("0" !== a.errcode) return !1;
    var o = a.data;
    return e(o.lists), n.successObj.couponRequestData = o, !0;
}, module.exports = {
    couponListPayRequest: n
};