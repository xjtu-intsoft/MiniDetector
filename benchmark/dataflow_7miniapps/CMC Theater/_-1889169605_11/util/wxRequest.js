function t(t) {
    return function() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new e(function(e, r) {
            n.success = function(t) {
                wx.hideLoading();
                try {
                    0 == t.data.status && 205 == t.data.errcode ? (t.cancelShowError = !0, getApp().alignLogin()) : 1e4 == t.data.errcode ? wx.reLaunch({
                        url: "/pages/login/tending/tending?tend_message=" + t.data.data.date_time
                    }) : 0 != t.data.errcode && (t.showError = function() {
                        t.cancelShowError || t.data.msg && wx.showModal({
                            confirmColor: "#ff9500",
                            showCancel: !1,
                            content: t.data.msg,
                            confirmText: "我知道了"
                        });
                    }, setTimeout(t.showError, 100));
                } catch (t) {}
                e(t);
            }, n.fail = function(t) {
                wx.hideLoading(), r(t);
            }, t(n);
        });
    };
}

var e = require("./es6-promise.auto.js");

e.prototype.finally = function(t) {
    var e = this.constructor;
    return this.then(function(n) {
        return e.resolve(t()).then(function() {
            return n;
        });
    }, function(n) {
        return e.resolve(t()).then(function() {
            throw n;
        });
    });
}, module.exports = {
    postRequest: function(e, n) {
        var r = t(wx.request);
        return wx.showLoading({
            title: "加载中..."
        }), r({
            url: e,
            method: "POST",
            data: n,
            header: {
                "content-type": "application/x-www-form-urlencoded",
                timestamp: new Date().getTime()
            }
        });
    },
    getRequest: function(e, n) {
        var r = t(wx.request);
        return wx.showLoading({
            title: "加载中..."
        }), r({
            url: e,
            method: "GET",
            data: n,
            header: {
                "Content-Type": "application/json",
                timestamp: new Date().getTime()
            }
        });
    }
};