function o() {
    var o = wx.showModal;
    Object.defineProperty(wx, "showModal", {
        get: function() {
            return o.before(function() {
                arguments[0].confirmColor || (arguments[0].confirmColor = "#ff9500");
            });
        }
    });
}

function n() {
    o();
}

Function.prototype.before = function(o) {
    var n = this;
    return function() {
        return !1 !== o.apply(this, arguments) && n.apply(this, arguments);
    };
}, Function.prototype.after = function(o) {
    var n = this;
    return function() {
        var t = n.apply(this, arguments);
        return !1 !== t && (o.apply(this, arguments), t);
    };
}, module.exports = {
    runAop: function() {
        n(), n = function() {
            console.log("我只能执行一次");
        };
    }
};