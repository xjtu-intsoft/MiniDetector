require("../../../util/publicTool.js").setData;

var e = require("./activeCoupon/activeCoupon.js"), o = require("./selfCoupon/selfCoupon.js"), t = new Object();

t.setDelegate = function(n) {
    n && (t.delegate = n, e.setDelegate(t), o.setDelegate(t), t.showSelfCoupon());
}, t.show = function() {
    o.backSelectCouponHistory(), t.delegate.setData({
        couponDisplay: !0
    }), setTimeout(function() {
        t.delegate.setData({
            couponDisplayAnimation: !0
        });
    }, 100);
}, t.hidden = function(e) {
    e && 1 == e.currentTarget.dataset.needbackhistory && o.backSelectCouponHistory(), 
    t.delegate.setData({
        couponDisplayAnimation: !1
    }), setTimeout(function() {
        t.delegate.setData({
            couponDisplay: !1
        });
    }, 320);
}, t.showSelfCoupon = function() {
    t.delegate.setData({
        goSelfCoupon: !0
    });
}, t.showActiveCoupon = function() {
    t.delegate.setData({
        goSelfCoupon: !1
    });
}, t.addActiveCoupon = e.addCoupon, t.setOfflineData = e.setOfflineData, t.addcouponSubmit = e.addcouponSubmit, 
t.couponClick = e.couponClick, t.offLineCouponClick = e.couponClick, t.onlineCouponRuleClick = e.onlineCouponRuleClick, 
t.getActiveCouponNums = e.getActiveCouponNums, t.getOffLineCouponList = e.getOffLineCouponList, 
t.getOffLineCouponListWhenGoodChange = e.getOffLineCouponListWhenGoodChange, t.showGoodCouponListCanUse = o.showGoodCouponListCanUse, 
t.showGoodCouponListWhenGoodDes = o.showGoodCouponListWhenGoodDes, t.loadSelfCouponList = o.loadSelfCouponList, 
t.loadMoreSelfCoupons = o.loadMoreSelfCoupons, t.reloadSelfCouponList = o.reloadSelfCouponList, 
t.selfCouponClick = o.selfCouponClick, t.getSelfCouponNums = o.getSelfCouponNums, 
t.getSelfMovieCouponNums = o.getSelfMovieCouponNums, t.getSelfGoodsCouponNums = o.getSelfGoodsCouponNums, 
t.saveSelectCouponHistory = o.saveSelectCouponHistory, t.upDateInterface = function(e) {
    t.delegate.setData(e);
}, t.calculatePriceWithCoupons = function(o, n, u) {
    t.delegate && (t.calculatePriceIsSuccess = e.calculatePriceIsSuccess, t.delegate.calculatePriceWithCoupons(o, n, u));
}, t.calculatePriceWithSelfCoupons = function(e, n) {
    t.delegate && (t.selfCalculatePriceIsSuccess = o.selfCalculatePriceIsSuccess, t.delegate.calculatePriceWithSelfCoupons(e, n));
}, module.exports = t;