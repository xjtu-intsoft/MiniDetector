function a() {
    wx.checkSession({
        success: function() {
            e();
        },
        fail: function() {
            e();
        }
    });
}

function e() {
    wx.login({
        success: function(a) {
            if (a.code) {
                var e = n.getOpenId(a.code, t.cinema_id, t.order_num, t.formId, t.activity_id);
                wx.request({
                    url: e[0],
                    data: e[1],
                    success: function(a) {
                        if (console.log(a), "0" != a.data.errcode) return t.isLoading = !1, void wx.showModal({
                            content: a.data.msg,
                            success: function(a) {}
                        });
                        var e = a.data.data.open_id;
                        t.open_id = e, i(t.cinema_id, t.card_num, t.recharge, t.pay_code, t.open_id, t.formId, t.activity_id);
                    },
                    fail: function(a) {
                        wx.hideLoading(), t.isLoading = !1;
                    }
                });
            } else t.isLoading = !1;
        }
    });
}

function i(a, e, i, o, c, r, d) {
    n.recharge(a, e, i, o, c, r, d).then(function(a) {
        if (console.log(a), 1 == a.data.status) {
            a.data.data.alipay, a.data.data.alipayApp;
            var n = a.data.data.order_no, o = a.data.data.weixinLite;
            console.log("isRecharge = " + t.isRecharge), o ? wx.requestPayment({
                timeStamp: o.timeStamp,
                nonceStr: o.nonceStr,
                package: o.package,
                signType: o.signType,
                paySign: o.paySign,
                success: function(a) {
                    t.isLoading = !1, getApp().globalData.isLoadCardList = !0;
                    var o = "/pages/card/rechargeResult/rechargeResult?cardNum=" + e + "&reCharge=" + i + "&orderNum=" + n + "&isRecharge=" + t.isRecharge + "&activity_id=" + d;
                    getApp().globalData.isIOS ? wx.redirectTo({
                        url: o
                    }) : wx.navigateTo({
                        url: o
                    }), t.isRecharge;
                },
                fail: function(a) {
                    t.isLoading = !1, "requestPayment:fail cancel" == a.errMsg ? getApp().showModalApp("取消支付") : getApp().showModalApp("支付失败");
                }
            }) : (t.isLoading = !1, wx.showToast({
                icon: "none",
                title: "数据错误"
            }));
        } else a.cancelShowError = !0, t.isLoading = !1, getApp().showModalApp(a.data.msg);
    });
}

var n = require("./../config/httpHtlper.js"), t = new Object();

t.isRecharge = !1, t.isLoading = !1, t.cardRecharge = function(e, i, n, o, c, r, d) {
    return t.card_num = e, t.recharge = i, t.pay_code = n, t.cinema_id = o, t.order_num = c, 
    t.formId = r, t.activity_id = d, a();
}, t.pay = function(e, i) {
    return t.isRecharge = !1, t.cinema_id = i, t.paymoney = e, a();
}, module.exports = t;