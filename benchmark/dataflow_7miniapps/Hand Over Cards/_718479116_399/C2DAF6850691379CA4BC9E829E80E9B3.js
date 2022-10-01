Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.matchFun = function(a, t) {
    var e = [], r = 10, i = a;
    if (!i || i.trim().length <= 0 || (n = i, new RegExp("[&+#]").test(n))) return t.setData({
        addrMartchData: []
    }), 0;
    wx.showNavigationBarLoading && wx.showNavigationBarLoading();
    var n;
    getApp().setRequest({
        url: "baseSuggestion",
        data: {
            keyword: i.substr(0, 40)
        }
    }, function(a) {
        r = a.length;
        for (var i = 0; i < r; i++) e.push([ a[i].address, a[i].title ]);
        t.setData({
            addrMartchData: e
        });
    }, function() {
        t.setData({
            addrMartchData: []
        });
    }, function() {
        wx.hideNavigationBarLoading && wx.hideNavigationBarLoading();
    });
};