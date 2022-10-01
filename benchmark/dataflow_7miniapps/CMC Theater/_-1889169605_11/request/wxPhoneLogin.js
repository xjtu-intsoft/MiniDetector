var e = new Object();

e.getParam = function(e, t, o) {
    return {
        encrypted_data: e,
        iv: t,
        wx_code: o
    };
}, e.wx_phone_fast_login = function(e) {
    return getApp().urlService.wxRequest.getRequest(getApp().urlService.urls.wx_phone_login, getApp().urlService.urlParameter(e)).then(function(e) {
        if (console.log("接口内res22222222222"), 1 == e.data.status) {
            console.log("接口通过"), console.log("接口数据", e);
            var t = e.data.data.user_data;
            return getApp().globalData.session_id = t.session_id, getApp().setUserInfo(t), e;
        }
        console.log("接口数据错误");
    });
}, module.exports = e;