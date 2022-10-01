var o = require("../../home/confirmOrder/confirmOrderTimeDown.js"), a = require("./../../../config/httpHtlper.js"), t = require("./../../../util/strUtil.js");

getApp().urlService;

Page({
    data: {
        isShow: !1,
        wait_pay: 0,
        order: {},
        isPaying: !1,
        isShowBackView: !1
    },
    onLoad: function(a) {
        console.log(a), o.setDelegate(this), o.type = 1;
        var t = a.fromFlag;
        this.data.order.order_num = a.order_num;
        var e = 0, n = !1;
        "order_unfinished_coupon_package" == t ? e = 1 : "coupon_package_detail" == t && (n = !0), 
        this.startLoadData(this.data.order.order_num, e, n);
    },
    onHide: function() {
        o.setCountDownEnd(!0);
    },
    onUnload: function() {
        o.setCountDownEnd(!0);
    },
    beginTimeDown: function(a) {
        o.beginTimeDown(a);
    },
    startLoadData: function(e, n, i) {
        var s = this;
        a.couponPackageOrderDetail(e, "10", n).then(function(a) {
            if (console.log("res = ", a), wx.stopPullDownRefresh(), 1 == a.data.status) {
                var e = a.data.data;
                e.price = t.priceFormat(e.price), e.total_price = t.priceFormat(e.total_price), 
                s.beginTimeDown(e.lock_ttl), o.countDownTime(e.lock_ttl), o.setCountDownEnd(!1), 
                s.setData({
                    order: e,
                    isShow: i,
                    wait_pay: n,
                    isShowBackView: i
                });
            }
        });
    },
    cancelOrder: function() {
        a.couponPackageOrderCancel(this.data.order.order_num).then(function(o) {
            1 == o.data.status && wx.navigateBack({});
        });
    },
    orderPay: function() {
        var o = this;
        this.data.isPaying || (this.data.isPaying = !0, o.wxPay());
    },
    wxPay: function() {
        var o = this;
        wx.checkSession({
            success: function() {
                console.log("登录未过期--------------------"), o.login();
            },
            fail: function() {
                console.log("登录过期--------------------"), o.login();
            }
        });
    },
    login: function() {
        var o = this;
        wx.login({
            success: function(t) {
                if (t.code) {
                    console.log(t);
                    var e = a.getOpenId(t.code, "", o.data.order.order_num, "");
                    console.log(e), wx.request({
                        url: e[0],
                        data: e[1],
                        success: function(t) {
                            if (console.log("成功 3rd_session"), console.log(t), "0" != t.data.errcode) return getApp().showModalApp(t.data.msg), 
                            void (o.data.isPaying = !1);
                            var e = t.data.data.open_id;
                            console.log("open_id = " + e), o.data.open_id = e, a.goodBuy(o.data.order.order_num, o.data.order.total_price, getApp().globalData.pay_code, e).then(function(a) {
                                if (console.log(a), 1 == a.data.status) {
                                    var t = a.data.data.weixinLite;
                                    t ? wx.requestPayment({
                                        timeStamp: t.timeStamp,
                                        nonceStr: t.nonceStr,
                                        package: t.package,
                                        signType: t.signType,
                                        paySign: t.paySign,
                                        success: function(a) {
                                            console.log(a), wx.showToast({
                                                icon: "none",
                                                title: "支付成功"
                                            }), o.startLoadData(o.data.order.order_num, "0", !0);
                                        },
                                        fail: function(o) {
                                            console.log(o), "requestPayment:fail cancel" == o.errMsg ? getApp().showModalApp("取消支付") : getApp().showModalApp("支付失败");
                                        }
                                    }) : wx.showToast({
                                        icon: "none",
                                        title: "数据错误"
                                    });
                                }
                                wx.hideLoading(), o.data.isPaying = !1;
                            });
                        },
                        fail: function(a) {
                            console.log("失败 3rd_session"), console.log(a), wx.hideLoading(), o.data.isPaying = !1, 
                            wx.showToast({
                                icon: "none",
                                title: "支付失败"
                            });
                        }
                    });
                } else console.log("获取用户登录态失败！" + t.errMsg), wx.hideLoading(), o.data.isPaying = !1, 
                wx.showToast({
                    icon: "none",
                    title: "支付失败"
                });
            },
            fail: function(a) {
                o.data.isPaying = !1;
            }
        });
    },
    closeClick: function() {
        this.setData({
            isShow: !1
        });
    },
    goCouponList: function() {
        wx.navigateTo({
            url: "/minePages/pages/coupon/coupon"
        }), this.setData({
            isShow: !1
        });
    },
    goBuyTicket: function() {
        console.log("goBuyTicket-----------"), wx.switchTab({
            url: "/pages/home/cinema/cinema"
        }), this.setData({
            isShow: !1
        });
    },
    goBack: function() {
        wx.switchTab({
            url: "/pages/find/findHome/findHome"
        });
    },
    callPhone: function() {
        if (this.data.order.tel && this.data.order.tel.length > 0) {
            var o = this.data.order.tel.split(",");
            wx.showActionSheet({
                itemList: o,
                success: function(a) {
                    wx.makePhoneCall({
                        phoneNumber: o[a.tapIndex]
                    });
                }
            });
        }
    },
    onPullDownRefresh: function() {
        this.startLoadData(this.data.order.order_num, this.data.wait_pay, this.data.isShow);
    }
});