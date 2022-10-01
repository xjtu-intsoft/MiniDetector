var e = require("../../../comm/script/fetch"), o = getApp();

Page({
    data: {
        isFullSucreen: !!o.globalData.isFullSucreen,
        couponList: [],
        couponIndex: -1,
        payPrice: ""
    },
    onLoad: function(e) {
        var o = JSON.parse(e.info);
        this.setData({
            info: o,
            payPrice: e.price
        }), (Number(e.index) || 0 == Number(e.index)) && this.setData({
            couponChoose: !0,
            couponIndex: Number(e.index)
        }), this.getCouponUseable(o.rp_id, o.city);
    },
    getCouponUseable: function(t, i) {
        wx.showLoading({
            title: "加载中"
        });
        var a = o.globalData.hwxUserInfo.token, n = this;
        e.getCouponUseable.call(n, a, t, i, n.data.payPrice, function(e) {
            e.list.forEach(function(e) {
                e.active = !1;
            }), n.setData({
                couponList: e.list
            }), console.log("data.list-=-=-="), console.log(e.list), wx.hideLoading();
        }, function(e) {
            wx.hideLoading(), console.log(e);
        });
    },
    chooseCoupon: function(e) {
        console.log(e);
        var o = e.currentTarget.dataset;
        "1" == o.useable ? this.couponUse(o.couponcode, o.index) : wx.showToast({
            title: "当前优惠券不可用",
            icon: "none",
            duration: 1500
        });
    },
    couponUse: function(t, i) {
        wx.showLoading({
            title: "正在使用",
            mask: !0
        });
        var a = {};
        a.coupon_code = t, a.city = this.data.info.city, a.district = this.data.info.district, 
        a.plan_id = this.data.info.rp_id, a.plan_id2 = this.data.info.rp_id2, a.is_warrantable = this.data.info.is_warrantable, 
        a.category = this.data.info.category, a.reserve_time = this.data.info.reserve_time, 
        a.reserve_time2 = this.data.info.reserve_time2;
        var n = this, s = o.globalData.hwxUserInfo.token;
        e.getUseCoupon.call(n, s, a, function(e) {
            n.setData({
                couponChoose: !0,
                couponIndex: i
            });
            var o = getCurrentPages();
            o[o.length - 2].setData({
                couponData: e,
                couponIndex: i,
                visit_fee: e.visit_fee,
                night_fee: e.night_fee
            }), wx.navigateBack({
                delta: 1
            }), wx.hideLoading();
        }, function(e) {
            wx.hideLoading(), console.log(e), wx.showToast({
                title: e,
                icon: "none",
                duration: 2e3
            });
        });
    }
});