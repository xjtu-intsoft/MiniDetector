var e = require("../../../comm/script/fetch"), t = getApp();

Page({
    data: {
        isFullSucreen: !!t.globalData.isFullSucreen,
        selectIndex: 0,
        couponList: [],
        coupon_code: "",
        showModel: !1,
        inputValue: ""
    },
    onLoad: function(e) {
        this.getUserCoupon();
    },
    onReady: function() {},
    changeType: function(e) {
        this.setData({
            selectIndex: e.currentTarget.dataset.index
        }), this.getUserCoupon();
    },
    getUserCoupon: function() {
        var o = this;
        wx.showLoading({
            mask: !0
        });
        var n = t.globalData.hwxUserInfo.token, i = {
            type: this.data.selectIndex
        }, a = {
            repairList: [],
            recycleList: []
        };
        e.getUserCoupon(n, i, function(e) {
            e.forEach(function(e) {
                e.active = !1, 0 != e.coupon_type ? a.repairList.push(e) : a.recycleList.push(e);
            }), a.repairList.length && (a.repairList[0].show = !0), a.recycleList.length && (a.recycleList[0].show = !0);
            var t = a.repairList.concat(a.recycleList);
            o.setData({
                couponList: t
            }), wx.hideLoading();
        }, function(e) {
            wx.hideLoading();
        });
    },
    showRules: function(e) {
        console.log(e.currentTarget.dataset.index);
        var t = this.data.couponList;
        t.forEach(function(t, o) {
            o == e.currentTarget.dataset.index && (t.active = !t.active);
        }), this.setData({
            couponList: t
        });
    },
    useNow: function(e) {
        0 == e.currentTarget.dataset.type ? wx.navigateTo({
            url: "../../recycle/phonelist/phonelist"
        }) : wx.navigateTo({
            url: "../../repair/chooseDevice/chooseDevice?tyleIndex=0"
        });
    },
    getMoreCoupon: function() {
        wx.navigateTo({
            url: "../../repair/fulishe/fulishe"
        });
    },
    getValue: function(e) {
        console.log(e.detail.value), this.setData({
            coupon_code: e.detail.value
        });
    },
    bindCoupon: function() {
        var o = this, n = t.globalData.hwxUserInfo.token, i = {
            coupon_code: this.data.coupon_code
        };
        wx.showLoading({
            title: "兑换中",
            mask: !0
        }), e.bindCoupon(n, i, function(e) {
            wx.hideLoading(), wx.showToast({
                title: "兑换成功",
                duration: 1e3,
                mask: !0
            }), setTimeout(function() {
                o.getUserCoupon(), o.setData({
                    inputValue: ""
                });
            }, 1e3);
        }, function(e) {
            wx.hideLoading(), wx.showToast({
                title: e,
                icon: "none",
                duration: 1500,
                mask: !0
            }), o.setData({
                inputValue: ""
            });
        });
    },
    bindVoucher: function() {
        this.setData({
            showModel: !0
        });
    },
    hideModel: function() {
        this.setData({
            showModel: !1
        });
    }
});