function e(e, r, u) {
    var o = n.urlPath.openid, c = n.urlParameter({
        code: e,
        order_num: r,
        form_id: u
    });
    return t.getRequest(o, c);
}

var r = require("./wxApi"), t = require("./wxRequest"), n = require("../config/url.js"), u = new Object();

u.getOpenId = function(t, n) {
    return r.wxLogin()().then(function(r) {
        return r.code ? e(r.code, t, n) : "";
    }).catch(function(e) {
        return "";
    }).then(function(e) {
        return e.data.data.open_id ? e.data.data.open_id : "";
    }).catch(function(e) {
        return console.log(e), "";
    });
}, module.exports = u;