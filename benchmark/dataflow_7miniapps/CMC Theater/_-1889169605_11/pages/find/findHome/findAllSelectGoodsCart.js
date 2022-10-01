require("../../../config/appStorage.js");

var e = new Object();

e.cinemasDic = {}, e.cartTypeDic = {}, e.goodsDic = {};

e.addGoods = function(t, a) {
    var o = e.getCart(t);
    (!a.map_key || a.map_key.length <= 0) && (a.map_key = a.id);
    var n = o[a.map_key];
    if (n ? n.buyCount = n.buyCount + 1 : (a.buyCount = 1, o[a.map_key] = a, n = a), 
    n.buyCount > n.inventory) n.addSuccess = !1, n.buyCount = n.buyCount - 1, wx.showModal({
        confirmColor: "#ff9500",
        showCancel: !1,
        content: "没有更多商品"
    }); else {
        if (3 == n.goods_type) {
            var i = e.getCartPackage(t), r = i[n.id];
            r && r > 0 ? i[n.id] += 1 : i[n.id] = 1;
        }
        n.addSuccess = !0;
    }
    return n;
}, e.setGood = function(t, a) {
    var o = e.getCart(t);
    (!a.map_key || a.map_key.length <= 0) && (a.map_key = a.id), o[a.map_key] = a;
}, e.descGoodsCart = function(t, a) {
    var o = e.getCart(t), n = o[a.map_key];
    if (n) {
        if (n.buyCount = n.buyCount > 0 ? n.buyCount - 1 : 0, 0 == n.buyCount && (n.moreGoods = null, 
        delete o[n.map_key]), 3 == n.goods_type) {
            var i = e.getCartPackage(t), r = i[n.id];
            r > 0 ? (r -= 1, i[n.id] -= 1, 0 == r && delete i[n.id]) : (i[n.id] = 0, delete i[n.id]);
        }
        return n;
    }
    return a;
}, e.removeGoodsCart = function(t, a) {
    var o = e.getCart(t), n = o[a.map_key];
    if (n && (n.buyCount = 0, n.moreGoods = null, delete o[n.map_key], 3 == n.goods_type)) {
        var i = e.getCartPackage(t), r = i[n.id];
        r > 0 ? (r -= 1, i[n.id] -= 1, 0 == r && delete i[n.id]) : (i[n.id] = 0, delete i[n.id]);
    }
}, e.getCart = function(t) {
    var a = getApp().getCinema().id, o = e.cinemasDic[a];
    o || (o = {}, e.cinemasDic[a] = o);
    var n = o[t];
    return n || (n = {}, o[t] = n), n;
}, e.getCartPackage = function(t) {
    var a = getApp().getCinema().id, o = e.cinemasDic[a];
    o || (o = {}, e.cinemasDic[a] = o);
    var n = o[t + "option_package"];
    return n || (n = {}, o[t + "option_package"] = n), n;
}, e.getGood = function(t, a) {
    var o = e.getCart(t);
    (!a.map_key || a.map_key.length <= 0) && (a.map_key = a.id);
    var n = o[a.map_key];
    if (n) return n;
}, e.getOptionGoodEdgeCount = function(t, a) {
    var o = e.getCartPackage(t)[a.id];
    return o > 0 ? o : 0;
}, e.clearCartWithType = function(t) {
    var a = getApp().getCinema().id, o = e.cinemasDic[a];
    o && (o[t] = {}, o[t + "option_package"] = {});
}, e.clearCart = function() {
    e.cinemasDic = {};
}, module.exports = {
    allSelectGoodsCart: e
};