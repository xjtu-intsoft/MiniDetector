var e = require("../../../comm/script/fetch"), t = getApp();

Page({
    data: {
        selectedindex: 0,
        banner: "",
        couponList: [],
        faultList: [],
        isLogin: !1
    },
    onLoad: function(o) {
        this.getLybInfo();
        var n = this, i = t.globalData.hwxUserInfo.phone, c = t.globalData.hwxUserInfo.token;
        i && c && e.getIsLogin(c, function(e) {
            "1" == e.is_login ? n.setData({
                isLogin: !0
            }) : n.setData({
                isLogin: !1
            });
        }, function(e) {
            n.setData({
                isLogin: !1
            });
        });
    },
    getLybInfo: function() {
        var o = this;
        wx.showLoading({
            mask: !0
        });
        var n = t.globalData.hwxUserInfo.token;
        e.getLybInfo(n, function(e) {
            o.setData({
                banner: e.banner_info,
                couponList: e.coupon_info,
                faultList: e.fault_info
            }), console.log(o.data.couponList), wx.hideLoading();
        }, function(e) {
            wx.hideLoading();
        });
    },
    goMoreModel: function() {
        wx.navigateTo({
            url: "../../repair/chooseDevice/chooseDevice"
        });
    },
    tabFalut: function(e) {
        var t = e.currentTarget.dataset.index;
        this.setData({
            selectedindex: t
        }), console.log(t), 0 == t ? wx.createSelectorQuery().selectViewport().scrollOffset(function(e) {
            wx.createSelectorQuery().select(".coupon_maodian").boundingClientRect(function(t) {
                wx.createSelectorQuery().select(".title_wrap").boundingClientRect(function(o) {
                    wx.pageScrollTo({
                        scrollTop: t.top - o.height + e.scrollTop,
                        duration: 300
                    });
                }).exec();
            }).exec();
        }).exec() : 1 == t ? wx.createSelectorQuery().selectViewport().scrollOffset(function(e) {
            wx.createSelectorQuery().select(".ghdc").boundingClientRect(function(t) {
                wx.createSelectorQuery().select(".title_wrap").boundingClientRect(function(o) {
                    wx.pageScrollTo({
                        scrollTop: t.top - o.height + e.scrollTop,
                        duration: 300
                    });
                }).exec();
            }).exec();
        }).exec() : 2 == t ? wx.createSelectorQuery().selectViewport().scrollOffset(function(e) {
            wx.createSelectorQuery().select(".ghwp").boundingClientRect(function(t) {
                wx.createSelectorQuery().select(".title_wrap").boundingClientRect(function(o) {
                    wx.pageScrollTo({
                        scrollTop: t.top - o.height + e.scrollTop,
                        duration: 300
                    });
                }).exec();
            }).exec();
        }).exec() : wx.createSelectorQuery().selectViewport().scrollOffset(function(e) {
            wx.createSelectorQuery().select(".ghnp").boundingClientRect(function(t) {
                wx.createSelectorQuery().select(".title_wrap").boundingClientRect(function(o) {
                    wx.pageScrollTo({
                        scrollTop: t.top - o.height + e.scrollTop,
                        duration: 300
                    });
                }).exec();
            }).exec();
        }).exec();
    },
    selectPhone: function(e) {
        var t = e.currentTarget.dataset, o = {};
        o.faultid = t.faultid, o.name = t.name, o.id = t.id, o.color_id = t.color_id, o.rp_id = t.rp_id;
        var n = JSON.stringify(o);
        wx.redirectTo({
            url: "../../repair/faultDetail/faultDetail?info=" + n
        });
    },
    onShareAppMessage: function(e) {
        return {
            title: "Hi维修手机上门维修回收平台",
            path: "/pages/repair/home/home",
            imageUrl: "https://pic.hiweixiu.com/hiweixiu-mobile/img/wxshare.png"
        };
    },
    getPhoneNumber: function(o) {
        var n = encodeURIComponent(o.detail.iv), i = encodeURIComponent(o.detail.encryptedData), c = this, r = wx.getStorageSync("CODE");
        "undefined" != i ? e.getWxLogin(encodeURIComponent(r), i, n, function(e) {
            t.setHwxUserInfo(e.token, e.phone_number), c.setData({
                isLogin: !0
            }), c.getLybInfo();
        }, function(e) {
            wx.showToast({
                title: "微信授权登录失败",
                icon: "none",
                duration: 1e3,
                complete: function() {
                    wx.navigateTo({
                        url: "../../personal/login/login"
                    });
                }
            });
        }) : wx.navigateTo({
            url: "../../personal/login/login"
        });
    },
    repairCouponget: function(o) {
        var n = this, i = t.globalData.hwxUserInfo.token, c = {
            batch_number: o.currentTarget.dataset.number,
            phone_number: t.globalData.hwxUserInfo.phone
        };
        e.getFulishecoupon(i, c, function(e) {
            wx.showToast({
                title: "领取成功",
                duration: 1e3,
                mask: !1
            }), setTimeout(function() {
                n.getLybInfo();
            }, 1e3);
        }, function(e) {
            wx.showToast({
                title: e,
                icon: "none",
                image: "",
                duration: 1e3
            }), setTimeout(function() {
                n.getLybInfo();
            }, 1e3);
        });
    },
    goSelectPhone: function() {
        wx.navigateTo({
            url: "../../repair/chooseDevice/chooseDevice"
        });
    }
});