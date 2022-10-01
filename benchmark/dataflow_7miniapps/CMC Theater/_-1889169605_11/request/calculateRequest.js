function e(e, i) {
    if (e.nonMemberPrice) {
        if (e.nonMemberPrice.warning && e.nonMemberPrice.warning.length > 0) {
            if (!e.defaultCardPrice) return void wx.showModal({
                showCancel: !1,
                content: e.nonMemberPrice.warning,
                title: "",
                confirmText: "我知道了",
                success: function(e) {
                    wx.navigateBack();
                }
            });
        } else if (e.nonMemberPrice.totalGoodsPrice = r.priceFormat(e.nonMemberPrice.goods_price), 
        e.nonMemberPrice.newTotalPrice = r.priceFormat(e.nonMemberPrice.total_price), e.nonMemberPrice.total_service_fee && e.nonMemberPrice.total_service_fee.length > 0) {
            t = parseFloat(e.nonMemberPrice.ticket_price_and_coupon_subsidy) - parseFloat(e.nonMemberPrice.total_service_fee);
            e.nonMemberPrice.ticket_price_and_coupon_subsidy = r.priceFormat(t.toFixed(2));
        }
        c.successObj.onlinePriceEntity = e.nonMemberPrice;
    }
    if (e.defaultCardPrice) {
        if (e.defaultCardPrice.warning && e.defaultCardPrice.warning.length > 0 && wx.showToast({
            title: e.defaultCardPrice.warning,
            icon: "none"
        }), e.defaultCardPrice.totalGoodsPrice = r.priceFormat(e.defaultCardPrice.goods_price), 
        e.defaultCardPrice.newTotalPrice = r.priceFormat(e.defaultCardPrice.total_price), 
        e.defaultCardPrice.total_service_fee && e.defaultCardPrice.total_service_fee.length > 0) {
            t = parseFloat(e.defaultCardPrice.ticket_price_and_coupon_subsidy) - parseFloat(e.defaultCardPrice.total_service_fee);
            e.defaultCardPrice.ticket_price_and_coupon_subsidy = r.priceFormat(t.toFixed(2));
        }
        c.successObj.cardPriceEntity = e.defaultCardPrice;
    }
    if (e.price) {
        if (e.price.warning && e.price.warning.length > 0 && wx.showModal({
            confirmColor: "#ff9500",
            title: e.price.warning,
            icon: "none"
        }), e.price.totalGoodsPrice = r.priceFormat(e.price.goods_price), e.price.newTotalPrice = r.priceFormat(e.price.total_price), 
        e.price.coupon_total_subsidy = r.priceFormat(e.price.coupon_total_subsidy), e.price.total_service_fee && e.price.total_service_fee.length > 0) {
            var t = parseFloat(e.price.ticket_price_and_coupon_subsidy) - parseFloat(e.price.total_service_fee);
            e.price.ticket_price_and_coupon_subsidy = r.priceFormat(t.toFixed(2));
        }
        "0" == i ? c.successObj.onlinePriceEntity = e.price : "1" == i ? c.successObj.cardPriceEntity = e.price : "2" == i ? (c.successObj.couponPriceEntity = e.price, 
        e.offline_coupon_notice && e.offline_coupon_notice.coupon_name && (c.successObj.couponPriceEntity.offline_coupon_notice = e.offline_coupon_notice, 
        c.successObj.couponPriceEntity.warning = e.warning)) : "3" == i && (c.successObj.selfCouponPriceEntity = e.price);
    }
}

var r = require("../util/strUtil.js"), c = new Object();

c.decodeRes = function(r, i) {
    c.successObj = {}, c.failObj = {}, c.successObj.onlinePriceEntity = null, c.successObj.cardPriceEntity = null, 
    c.successObj.couponPriceEntity = null, c.successObj.selfCouponPriceEntity = null;
    var t = r.data;
    if ("0" !== t.errcode) return this.failObj = {
        isError: !0,
        errcode: t.errcode,
        msg: t.msg
    }, !1;
    var o = t.data;
    return e(o, i), this.successObj.calculateData = o, c.successObj, !0;
}, module.exports = {
    calculateRequest: c
};