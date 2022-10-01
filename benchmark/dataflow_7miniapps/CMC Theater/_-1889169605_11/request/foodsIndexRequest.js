function o(o, e) {
    var r = 0;
    for (var i in o) o[i].scroll_id = "header" + o[i].id, o[i].selectCount = 0, o[i].offectMinY = r, 
    r += parseInt((30 + 165 * e[o[i].id].length) * a.retail), o[i].offectMaxY = r;
}

function e(o) {
    var e = s(d.getCart("foodCart"));
    if (!(e.length <= 0)) for (var r in e) {
        var i = e[r];
        if (3 != i.goods_type) {
            var t = o[i.cinema_goods_type_id];
            for (var n in t) if (i.id == t[n].id) {
                i.rowIndex = n, t[n].buyCount = i.buyCount, i.price = t[n].price;
                break;
            }
        } else i.buyCount = d.getOptionGoodEdgeCount("foodCart", i);
    }
}

function r(o, e) {
    console.log(o);
    var r = o;
    o.length > 3 && (r = o.slice(0, 3));
    for (var i in r) {
        var s = r[i];
        t(s), s.price = n.priceFormat(s.price), s.rowIndex = -1, s.scroll_id = "food" + s.id;
        var d = e[s.cinema_goods_type_id];
        for (var a in d) if (s.id == d[a].id) {
            s.rowIndex = a;
            break;
        }
    }
    return r;
}

function i(o) {
    var e = s(o);
    for (var r in e) for (var i in e[r]) {
        var d = e[r][i];
        d.buyCount = 0, d.price = n.priceFormat(d.price), d.scroll_id = "food" + d.id, 1 == d.over_inventory_sell_flag && (d.inventory = "999"), 
        t(d);
    }
}

function t(o) {
    o.showPrice = n.priceFormat(o.price), o.promo_id && o.promo_id.length > 0 ? (o.havePromo = !0, 
    o.promo_is_addition_type && 1 == o.promo_is_addition_type ? (o.promoPic = "/images/addmore/Tag_jiajiagou_1.png", 
    o.promoPicW = "70rpx", o.promoTextIndexW = "75rpx", o.isAddMore = !0) : (o.showPrice = n.priceFormat(o.promo_price), 
    o.promoPic = "/images/addmore/Tag_tehui.png", o.promoPicW = "50rpx", o.promoTextIndexW = "55rpx", 
    o.isAddMore = !1)) : (o.havePromo = !1, o.promoPic = "", o.promoPicW = "0", o.promoTextIndexW = "0");
}

var s = require("../util/publicTool.js").getAllValueWithObjc, d = require("../pages/find/findHome/findAllSelectGoodsCart.js").allSelectGoodsCart, n = require("./../util/strUtil.js"), a = new Object();

wx.getSystemInfo({
    success: function(o) {
        a.retail = o.windowWidth / 750;
    }
}), a.theGoodisPromo = t, a.decodeRes = function(t) {
    a.successObj = {}, a.failObj = {};
    var s = t.data;
    if ("0" !== s.errcode) return !1;
    var d = s.data;
    return this.successObj.hotfoods = r(d.hot_list, d.list), i(d.list), o(d.type, d.list), 
    e(d.list), this.successObj.indexList = d.type, this.successObj.foodsList = d.list, 
    !0;
}, module.exports = {
    foodsIndexRequest: a
};