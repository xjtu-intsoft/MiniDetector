Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.matchFun = function(t, a) {
    var e = [], n = 10, i = t;
    return new Promise(function(t, r) {
        if (!i || i.trim().length <= 0 || (o = i, new RegExp("[&+#]").test(o))) return t([]), 
        !1;
        var o;
        wx.showNavigationBarLoading && wx.showNavigationBarLoading(), getApp().setRequest({
            url: "baseSuggestion",
            data: {
                keyword: i.substr(0, 40)
            }
        }, function(i) {
            n = i.length;
            for (var r = 0; r < n; r++) e.push([ i[r].address, i[r].title ]);
            a.setData({
                addrMartchData: e
            }), t(e);
        }, function() {
            t([]);
        }, function() {
            wx.hideNavigationBarLoading && wx.hideNavigationBarLoading();
        });
    });
};