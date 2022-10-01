var e = new Object();

e.getList = function(e, t) {
    return getApp().urlService.wxRequest.getRequest(getApp().urlService.urls.offline_coupon_list, getApp().urlService.urlParameter({})).then(function(e) {
        if (console.log("res22222222222"), 1 == e.data.status) {
            var t = e.data.data.list;
            return t;
        }
        return t;
    });
}, e.getParam = function(e, t) {
    return {
        card_id: e,
        card_num: t
    };
}, module.exports = e;