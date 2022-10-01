function o(o) {
    for (var s = 0; s < o.length; s++) o[s].price = e.priceFormat(o[s].price), i(o[s]);
}

function i(o) {
    o.showPrice = e.priceFormat(o.price), "1" == o.over_inventory_sell_flag && (o.inventory = "999"), 
    o.promo_id && o.promo_id.length > 0 ? (o.havePromo = !0, o.promo_is_addition_type && 1 == o.promo_is_addition_type ? (o.promoPic = "/images/addmore/Tag_jiajiagou_1.png", 
    o.promoPicW = "70rpx", o.promoTextIndexW = "75rpx") : (o.promoPic = "/images/addmore/Tag_tehui.png", 
    o.promoPicW = "50rpx", o.promoTextIndexW = "55rpx", o.showPrice = e.priceFormat(o.promo_price))) : (o.promoPic = "", 
    o.promoPicW = "0", o.promoTextIndexW = "0");
}

function s(o) {
    for (var i in o) o[i].showDesc = o[i].promotion_name + " —— " + o[i].promotion_desc, 
    2 == o[i].promotion_status ? o[i].status_icon = "../../../images/promation/huodong_icon_guoqi.png" : o[i].status_icon = "../../../images/promation/huodong_icon_jinxing.png";
}

var e = require("../util/strUtil.js"), r = new Object();

r.decodeRes = function(i) {
    r.successObj = {}, r.failObj = {};
    var e = i.data;
    if ("0" !== e.errcode) return !1;
    var t = e.data.promotion_data;
    return s(t), this.successObj.promotionData = t, e.data.good.length > 3 ? this.successObj.goods = e.data.good.slice(0, 3) : this.successObj.goods = e.data.good, 
    e.data.food.length > 3 ? this.successObj.foods = e.data.food.slice(0, 3) : this.successObj.foods = e.data.food, 
    o(this.successObj.goods), o(this.successObj.foods), !0;
}, module.exports = {
    findPromListRequest: r
};