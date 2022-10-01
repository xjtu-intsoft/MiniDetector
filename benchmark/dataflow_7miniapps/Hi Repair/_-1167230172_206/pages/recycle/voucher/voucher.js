var e = require("../../../comm/script/fetch"), t = (require("../../../comm/script/config"), 
getApp());

Page({
    data: {
        isFullSucreen: !!t.globalData.isFullSucreen,
        couponList: [],
        selectedIndex: null,
        price: 0
    },
    onLoad: function(e) {
        this.setData({
            selectedIndex: Number(e.index) || 0 == Number(e.index) ? Number(e.index) : null,
            price: e.price
        }), this.getMineCoupon();
    },
    showRules: function(e) {
        console.log(e.currentTarget.dataset.index);
        var t = this.data.couponList;
        t.forEach(function(t, a) {
            a == e.currentTarget.dataset.index && (t.active = !t.active);
        }), this.setData({
            couponList: t
        });
    },
    getMineCoupon: function() {
        wx.showLoading();
        var a = t.globalData.hwxUserInfo.token, i = this, n = {
            evaluated_price: this.data.price ? this.data.price : 0
        };
        e.getRecycleVoucher(a, n, function(e) {
            e.list.forEach(function(e) {
                e.active = !1, e.add_price = Number(e.add_price), e.min_price = Number(e.min_price);
            }), i.setData({
                couponList: e.list
            }), wx.hideLoading();
        }, function(e) {
            wx.hideLoading(), console.log("mes+++"), console.log(e);
        });
    },
    selectVoucher: function(e) {
        if (e.currentTarget.dataset.price > this.data.price) wx.showToast({
            title: "不满足使用条件",
            icon: "none",
            image: "",
            duration: 1500
        }); else {
            this.setData({
                selectedIndex: e.currentTarget.dataset.index
            });
            var t = e.currentTarget.dataset.item, a = {
                data: t,
                use: 1
            };
            t.index = e.currentTarget.dataset.index, wx.setStorageSync("VOUCHER", a), wx.navigateBack({
                delta: 1
            });
        }
    },
    noUseVoucher: function() {
        wx.setStorageSync("VOUCHER", {
            data: null,
            use: 0
        }), wx.navigateBack({
            delta: 1
        });
    }
});