function e(e, r, a) {
    return r in e ? Object.defineProperty(e, r, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = a, e;
}

function r(r) {
    if (r && r.goods) {
        r.goods_coupon_save_fee = a.priceFormat(r.goods_coupon_save_fee);
        var c = [];
        for (var o in r.goods) {
            var i = r.goods[o];
            i.price = a.priceFormat(i.price);
            var t = parseFloat(i.price) * parseInt(i.num);
            i.buyCount = parseInt(i.num), i.totalPrice = a.priceFormat(t.toFixed(2)), c.push(i);
            for (var s in i.additional_goods) {
                var d;
                i.is_promo = "2";
                var n = i.additional_goods[s];
                c.push((d = {
                    buyCount: "1",
                    totalPrice: "",
                    isAddMore: !0
                }, e(d, "totalPrice", a.priceFormat(n.price)), e(d, "price", a.priceFormat(n.price)), 
                e(d, "name", n.goods_alias), e(d, "pic", n.pic), d));
            }
        }
        r.goods = c, r.newTotalPrice = a.priceFormat(r.price);
    }
}

var a = require("./../util/strUtil.js"), c = new Object();

c.decodeRes = function(e, a) {
    c.successObj = {}, c.failObj = {}, c.successObj.memberPrice = null, c.successObj.nonmemberPrice = null;
    var o = e.data;
    return "0" === o.errcode && (o.data.price ? "cardPay" == a || "couponCardPay" == a ? (r(o.data.price), 
    c.successObj.memberPrice = o.data.price) : (r(o.data.price), "couponOfflinePay" == a && (o.data.price.offLineCouponOKText = "确认选择", 
    o.data.price.detailedPriceTitle = "已优惠" + o.data.price.goods_coupon_save_fee), c.successObj.nonmemberPrice = o.data.price) : (r(o.data.defaultCardPrice), 
    c.successObj.memberPrice = o.data.defaultCardPrice, r(o.data.nonMemberPrice), c.successObj.nonmemberPrice = o.data.nonMemberPrice), 
    c.successObj.requestData = o.data, !0);
}, module.exports = {
    goodsCalculateRequest: c
};