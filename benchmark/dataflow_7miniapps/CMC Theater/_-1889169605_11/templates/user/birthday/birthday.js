var e = new Object();

e.setDelegate = function(t) {
    t && (e.delegate = t, e.delegate.setData({
        isShowDialog: !1,
        isShow: !1
    }));
}, e.showDialog = function() {
    e.delegate.setData({
        isShow: !0
    }), setTimeout(function() {
        e.delegate.setData({
            isShowDialog: !0
        });
    }, 10);
}, e.hiddenDialog = function() {
    e.delegate.setData({
        isShowDialog: !1
    }), setTimeout(function() {
        e.delegate.setData({
            isShow: !1
        });
    }, 350);
}, module.exports = e;