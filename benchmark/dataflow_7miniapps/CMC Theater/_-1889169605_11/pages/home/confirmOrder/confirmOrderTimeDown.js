function n() {
    var n = 1 == e.type ? "订单已超时，请返回重新购买" : "订单已超时，请返回重新选座";
    wx.showModal({
        showCancel: !1,
        content: n,
        success: function(n) {
            n.confirm && wx.navigateBack();
        }
    });
}

function t(n) {
    var t = parseInt(n / 60), a = parseInt(n) % 60;
    t < 10 && (t = "0" + t), a < 10 && (a = "0" + a), e.delegate.setData({
        countDownTime: t + ":" + a
    });
}

var e = new Object();

e.type = 0, e.setDelegate = function(n) {
    n && (e.delegate = n, e.data.countDownEnd = !1);
}, e.data = {
    countDownEnd: !1
}, e.beginTimeDown = function(a) {
    var o = parseInt(a);
    clearInterval(e.intervalId), e.intervalId = setInterval(function() {
        if (o -= 1, !e.data.countDownEnd && (t(o), o <= 0)) {
            if (clearInterval(e.intervalId), e.delegate.setData({
                countDownTime: "00:00",
                countDownOverTime: !0
            }), e.data.countDownEnd) return;
            n();
        }
    }, 1e3);
}, e.setCountDownEnd = function(n) {
    e.data.countDownEnd = n;
}, e.showOverAlert = n, e.countDownTime = t, module.exports = e;