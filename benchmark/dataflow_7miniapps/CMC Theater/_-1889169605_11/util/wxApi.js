function n(n) {
    return function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new t(function(t, r) {
            e.success = function(n) {
                t(n);
            }, e.fail = function(n) {
                r(n);
            }, n(e);
        });
    };
}

var t = require("./es6-promise.auto.js");

t.prototype.finally = function(n) {
    var t = this.constructor;
    return this.then(function(e) {
        return t.resolve(n()).then(function() {
            return e;
        });
    }, function(e) {
        return t.resolve(n()).then(function() {
            throw e;
        });
    });
}, module.exports = {
    wxPromisify: n,
    wxLogin: function() {
        return n(wx.login);
    },
    wxGetUserInfo: function() {
        return n(wx.getUserInfo);
    },
    wxGetSystemInfo: function() {
        return n(wx.getSystemInfo);
    },
    wxPayRequest: function(t) {
        return n(wx.requestPayment)({
            appId: t.appId,
            timeStamp: t.timeStamp,
            nonceStr: t.nonceStr,
            package: t.package,
            signType: t.signType,
            paySign: t.paySign
        });
    }
};