var a = require("../../../templates/home/couponDetail/couponDetail.js"), e = require("../../../config/httpHtlper.js"), t = require("../../../util/strUtil.js");

Page({
    data: {
        coupon_package_pic: [],
        currentSwiper: 0,
        allPrice: 0,
        target_id: "",
        tips: [],
        isAgree: !1,
        selectedNum: 1,
        canDel: !1,
        canAdd: !0,
        item: {},
        requestData: {},
        isCreatingOrder: !1,
        order_num: "",
        perPrice: 0
    },
    onLoad: function(e) {
        a.setDelegate(this), this.data.target_id = e.coupon_package_id;
    },
    onShow: function() {
        var a = this;
        e.getCouponPackageDetail(this.data.target_id).then(function(e) {
            if (1 == e.data.status) a.dealData(e.data.data); else if (e.cancelShowError = !0, 
            e.data.msg) {
                var t = e.data.errcode;
                wx.showModal({
                    showCancel: !1,
                    content: e.data.msg,
                    confirmText: "我知道了",
                    success: function(a) {
                        a.confirm && "401312" == t && wx.navigateBack({});
                    }
                });
            }
        });
    },
    changeCurrent: function(a) {
        this.setData({
            currentSwiper: a.detail.current
        });
    },
    selectedClick: function() {
        this.setData({
            isAgree: !this.data.isAgree
        });
    },
    protocolClick: function() {
        var a = encodeURIComponent(this.data.requestData.coupon_protocol);
        wx.navigateTo({
            url: "/pages/find/promotionDetial/promotionDetial?promotion_url=" + a + "&flag=coupon_package_xiyi"
        });
    },
    confirmGobuy: function() {
        if (getApp().userIsLogin()) {
            var a = this;
            this.data.isAgree ? 0 != a.data.selectedNum && (this.data.isCreatingOrder ? wx.showToast({
                icon: "none",
                title: "订单创建中"
            }) : (this.data.isCreatingOrder = !0, e.couponPackageOrderCreate(a.data.requestData.goods_id, a.data.selectedNum, a.data.allPrice).then(function(e) {
                if (1 == e.data.status) {
                    console.log("couponPackageOrderCreate", e);
                    var t = e.data.data.exist_unfinished_order, o = e.data.data.order_num;
                    if (a.data.order_num = o, a.data.allPrice = e.data.data.total_amount, a.data.isCreatingOrder = !1, 
                    1 == t) return void getApp().showModalCallBackTitle(e.data.data.tip, "去支付", "知道了", "提示", !0, function(a) {
                        a.confirm && wx.navigateTo({
                            url: "/pages/find/findCouponPackageOrderDetail/orderCouponPackageDetail?fromFlag=coupon_package_detail&order_num=" + o
                        });
                    });
                    if (0 == e.data.data.total_amount) return void wx.navigateTo({
                        url: "/pages/find/findCouponPackageOrderDetail/orderCouponPackageDetail?fromFlag=coupon_package_detail&order_num=" + a.data.order_num
                    });
                    a.wxPay();
                } else a.data.isCreatingOrder = !1;
            }))) : wx.showToast({
                icon: "none",
                title: "请先勾选用户券包协议"
            });
        } else wx.navigateTo({
            url: "/pages/login/wxLogin/wxLogin"
        });
    },
    wxPay: function() {
        var a = this;
        wx.checkSession({
            success: function() {
                console.log("登录未过期--------------------"), a.login();
            },
            fail: function() {
                console.log("登录过期--------------------"), a.login();
            }
        });
    },
    login: function() {
        var a = this;
        wx.login({
            success: function(t) {
                if (t.code) {
                    console.log(t);
                    var o = e.getOpenId(t.code, "", a.data.order_num, "");
                    console.log(o), wx.request({
                        url: o[0],
                        data: o[1],
                        success: function(t) {
                            if (console.log("成功 3rd_session"), console.log(t), "0" == t.data.errcode) {
                                var o = t.data.data.open_id;
                                console.log("open_id = " + o), a.data.open_id = o;
                                var i = getApp().globalData.pay_code;
                                e.goodBuy(a.data.order_num, a.data.allPrice, i, o).then(function(e) {
                                    if (console.log(e), 1 == e.data.status) {
                                        var t = e.data.data.weixinLite;
                                        t ? wx.requestPayment({
                                            timeStamp: t.timeStamp,
                                            nonceStr: t.nonceStr,
                                            package: t.package,
                                            signType: t.signType,
                                            paySign: t.paySign,
                                            success: function(e) {
                                                console.log(e), wx.showToast({
                                                    icon: "none",
                                                    title: "支付成功"
                                                }), wx.navigateTo({
                                                    url: "/pages/find/findCouponPackageOrderDetail/orderCouponPackageDetail?fromFlag=coupon_package_detail&order_num=" + a.data.order_num
                                                });
                                            },
                                            fail: function(a) {
                                                console.log(a), "requestPayment:fail cancel" == a.errMsg ? getApp().showModalApp("取消支付") : getApp().showModalApp("支付失败");
                                            }
                                        }) : wx.showToast({
                                            icon: "none",
                                            title: "数据错误"
                                        });
                                    }
                                    wx.hideLoading();
                                });
                            } else getApp().showModalApp(t.data.msg);
                        },
                        fail: function(a) {
                            console.log("失败 3rd_session"), console.log(a), wx.hideLoading(), wx.showToast({
                                icon: "none",
                                title: "支付失败"
                            });
                        }
                    });
                } else console.log("获取用户登录态失败！" + t.errMsg), wx.hideLoading(), wx.showToast({
                    icon: "none",
                    title: "支付失败"
                });
            }
        });
    },
    clickcouponadd: function() {
        return this.data.selectedNum == this.data.requestData.buy_num_limit && 0 != this.data.requestData.inventory ? (getApp().showModalApp(this.data.requestData.addition_msg), 
        this.data.canAdd = !1, void this.setData({
            canAdd: !1
        })) : 0 == this.data.requestData.inventory ? (getApp().showModalApp("可购买券包数量不足"), 
        this.data.canAdd = !1, void this.setData({
            canAdd: !1
        })) : (this.data.selectedNum += 1, this.data.allPrice = this.data.selectedNum * this.data.perPrice, 
        this.data.allPrice = t.priceFormat(this.data.allPrice + ""), void this.setData({
            allPrice: this.data.allPrice,
            canDel: !0,
            selectedNum: this.data.selectedNum
        }));
    },
    clickcoupondel: function() {
        1 != this.data.selectedNum && this.data.canDel ? (this.data.selectedNum -= 1, this.data.allPrice = this.data.selectedNum * this.data.perPrice, 
        this.data.allPrice = t.priceFormat(this.data.allPrice + ""), this.setData({
            allPrice: this.data.allPrice,
            canAdd: !0,
            canDel: 1 != this.data.selectedNum,
            selectedNum: this.data.selectedNum
        })) : this.setData({
            canDel: !1
        });
    },
    couponItemClick: function(e) {
        var t = e.currentTarget.dataset.index, o = this.data.requestData.coupons[t];
        console.log(t, o), this.setData({
            item: o
        }), a.showDialog();
    },
    dismissDialog: function() {
        a.hiddenDialog();
    },
    dealData: function(a) {
        var e = {
            image: "/images/find/Tag_guanying.png",
            title: "观影券"
        }, o = {
            image: "/images/find/Tag_canyin.png",
            title: "卖品券"
        }, i = {
            image: "/images/find/Tag_shangjiquan.png",
            title: "商家券"
        };
        a.tips = [], a.ticket_coupon_count > 0 && (e.count = a.ticket_coupon_count + "张", 
        a.tips.push(e)), a.good_coupon_count > 0 && (o.count = a.good_coupon_count + "张", 
        a.tips.push(o)), a.third_coupon_count > 0 && (i.count = a.third_coupon_count + "张", 
        a.tips.push(i)), 0 == a.buy_num_limit || 0 == a.inventory ? this.data.selectedNum = 0 : this.data.selectedNum = 1, 
        this.data.perPrice = a.price, a.promo_id && a.promo_id.length > 0 && (this.data.perPrice = a.promo_price), 
        this.data.allPrice = this.data.selectedNum * this.data.perPrice, a.price = t.priceFormat(a.price), 
        this.data.allPrice = t.priceFormat(this.data.allPrice + "");
        for (var n = 0; n < a.coupons.length; n++) {
            var c = a.coupons[n];
            c.showTime = c.validate_date_start + "-" + c.validate_date_end;
            var s = "兑换券";
            "1" == c.coupon_type ? (c.coupon_bg = "/images/newcoupon/jifenduihuan_duihuan.png", 
            c.image = "/images/newcoupon/duihuan_bg.png", c.showPrice = t.priceFormat(c.constant_price)) : (c.coupon_bg = "/images/newcoupon/jifenduihuan_daijin.png", 
            s = "代金券", c.image = "/images/newcoupon/daijin_bg.png", c.showPrice = t.priceFormat(c.replace_price)), 
            "1" == c.category ? (c.background = "coupon-package-content-coupon-item-guanying-bg", 
            c.coupon_item_desc = "观影" + s, c.endImage = "/images/newcoupon/duihuanquan_dianying_icon.png") : (c.background = "coupon-package-content-coupon-item-maipin-bg", 
            c.coupon_item_desc = "卖品" + s, c.endImage = "/images/newcoupon/duihuanquan_maipin_icon.png"), 
            c.coupon_color = "coupon_color", "4" == c.channel && (c.coupon_bg = "/images/newcoupon/shangjiaquan_quanbao_bg.png", 
            c.background = "coupon-package-content-coupon-item-shangjiaquan-bg", c.image = "/images/newcoupon/business_coupon_bg.png", 
            c.coupon_type = "1", c.showPrice = t.priceFormat(c.price), c.coupon_color = "shangjia_coupon_color", 
            c.isNoUse = !0), c.is_new = "0";
        }
        this.setData({
            requestData: a,
            coupon_package_pic: a.advs,
            allPrice: this.data.allPrice,
            selectedNum: this.data.selectedNum
        }), 0 != a.inventory || getApp().showModalBaseCallBack("当前券包已售罄", "我知道了", !1, function(a) {});
    }
});