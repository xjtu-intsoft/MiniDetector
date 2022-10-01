var o = require("../../../comm/script/fetch"), t = (require("../../../comm/script/config"), 
require("../../../util/util"), getApp());

Page({
    data: {
        isFullSucreen: !!t.globalData.isFullSucreen,
        couponList: "",
        couponChoose: !1,
        couponIndex: "",
        inputCode: "",
        info: null
    },
    onLoad: function(o) {
        var t = JSON.parse(o.info);
        this.setData({
            info: t,
            payPrice: o.price
        }), (Number(o.index) || 0 == Number(o.index)) && this.setData({
            couponChoose: !0,
            couponIndex: Number(o.index)
        }), wx.showLoading({
            title: "加载中"
        }), this.getCouponUseable(t.rp_id, t.city);
    },
    getCouponUseable: function(e, n) {
        var a = t.globalData.hwxUserInfo.token, i = this;
        o.getCouponUseable.call(i, a, e, n, i.data.payPrice, function(o) {
            o.list.forEach(function(o) {
                o.active = !1;
            }), i.setData({
                couponList: o.list
            }), wx.hideLoading();
        }, function(o) {
            wx.hideLoading(), console.log(o);
        });
    },
    showRules: function(o) {
        console.log(o.currentTarget.dataset.index);
        var t = this.data.couponList;
        t.forEach(function(t, e) {
            e == o.currentTarget.dataset.index && (t.active = !t.active);
        }), this.setData({
            couponList: t
        });
    },
    setCouponCode: function(o) {
        this.setData({
            inputCode: o.detail.value
        });
    },
    useBtn: function() {
        wx.showLoading({
            title: "加载中"
        }), this.getCouponUseable(this.datainfo.rp_id, this.datainfo.city);
    },
    chooseCoupon: function(o) {
        console.log(o);
        var t = o.currentTarget.dataset;
        console.log(t), "1" == t.useable ? this.couponUse(t.couponcode, t.index) : wx.showToast({
            title: "当前优惠券不可用",
            icon: "none",
            duration: 1500
        });
    },
    couponUse: function(e, n) {
        wx.showLoading({
            title: "正在使用",
            mask: !0
        });
        var a = {};
        a.coupon_code = e, a.city = this.data.info.city, a.district = this.data.info.district, 
        a.plan_id = this.data.info.rp_id, a.plan_id2 = this.data.info.rp_id2, a.is_warrantable = this.data.info.is_warrantable, 
        a.category = this.data.info.category, a.reserve_time = this.data.info.reserve_time, 
        a.reserve_time2 = this.data.info.reserve_time2, console.log(e), console.log(a);
        var i = this, s = t.globalData.hwxUserInfo.token;
        o.getUseCoupon.call(i, s, a, function(o) {
            i.setData({
                couponChoose: !0,
                couponIndex: n
            });
            var t = getCurrentPages(), e = t[t.length - 2];
            console.log("使用优惠券，并修改支付的价格"), e.setData({
                couponData: o,
                couponIsChoose: !0,
                coupon_code: o.coupon_code,
                couponIndex: n,
                firstGet: !1
            }), wx.navigateBack({
                delta: 1
            }), wx.hideLoading();
        }, function(o) {
            wx.hideLoading(), console.log(o), wx.showToast({
                title: o,
                icon: "none",
                duration: 2e3
            });
        });
    },
    noUseCoupon: function() {
        var o = getCurrentPages();
        o[o.length - 2].setData({
            couponData: "",
            couponIsChoose: !1,
            noUseCoupon: !0,
            firstGet: !1,
            coupon_code: "",
            couponIndex: null
        }), wx.navigateBack({
            delta: 1
        });
    },
    onShow: function() {}
});