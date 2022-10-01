require("../../../util/util");

var e = require("../../../comm/script/fetch"), t = (require("../../../comm/script/config"), 
getApp());

Page({
    data: {
        autoplay: !0,
        interval: 7e3,
        duration: 500,
        active_color: "#ffffff",
        url: "https://pic.hiweixiu.com/hiweixiu-mobile/img/bannerbg.png",
        background: "",
        isFullSucreen: t.globalData.isFullSucreen,
        selectedIndex: 0,
        bannerInfo: [],
        bannerIndex: 0,
        couponList: [],
        isLogin: !1,
        number: null,
        scrollViewHeight: 0
    },
    onLoad: function(n) {
        n.index && this.setData({
            selectedIndex: n.index
        }), this.getFuliBanner(), this.getFulicouponList(), this.calculateScrollViewHeight();
        var i = this, o = t.globalData.hwxUserInfo.phone, a = t.globalData.hwxUserInfo.token;
        o && a && e.getIsLogin(a, function(e) {
            "1" == e.is_login ? i.setData({
                isLogin: !0
            }) : i.setData({
                isLogin: !1
            });
        }, function(e) {
            i.setData({
                isLogin: !1
            });
        });
    },
    calculateScrollViewHeight: function() {
        var e = this;
        wx.createSelectorQuery().select(".fulishe_title").boundingClientRect(function(t) {
            wx.createSelectorQuery().select(".type_wrap").boundingClientRect(function(n) {
                e.setData({
                    scrollViewHeight: wx.getSystemInfoSync().windowHeight - t.height - n.height + "px"
                });
            }).exec();
        }).exec();
    },
    getFuliBanner: function() {
        var n = this, i = t.globalData.hwxUserInfo.token;
        e.getFuliBanner(i, function(e) {
            console.log(e), n.setData({
                bannerInfo: e
            });
        }, function(e) {});
    },
    changeType: function(e) {
        var t = e.currentTarget.dataset.index;
        2 == t ? this.setData({
            bannerIndex: 1
        }) : this.setData({
            bannerIndex: 0
        }), 3 != t ? (this.setData({
            selectedIndex: t
        }), this.getFulicouponList()) : wx.navigateToMiniProgram({
            appId: "wx05173ac0eee13384",
            path: this.data.bannerInfo.page_path
        });
    },
    getFulicouponList: function() {
        var n = this;
        wx.showLoading();
        var i = t.globalData.hwxUserInfo.token, o = {
            type: this.data.selectedIndex
        }, a = {
            repairList: [],
            recycleList: []
        };
        e.getFulicouponList(i, o, function(e) {
            e.forEach(function(e) {
                e.active = !1, 0 != e.coupon_type ? a.repairList.push(e) : a.recycleList.push(e);
            }), a.repairList.length && (a.repairList[0].show = !0), a.recycleList.length && (a.recycleList[0].show = !0);
            var t = a.repairList.concat(a.recycleList);
            console.log(a, t), n.setData({
                couponList: t
            }), wx.hideLoading();
        }, function(e) {
            wx.hideLoading();
        });
    },
    onShareAppMessage: function(e) {
        return {
            title: "Hi维修手机上门维修回收平台",
            path: "/pages/repair/home/home",
            imageUrl: "https://pic.hiweixiu.com/hiweixiu-mobile/img/wxshare.png"
        };
    },
    getPhoneNumber: function(n) {
        n.currentTarget.dataset.origin;
        var i = encodeURIComponent(n.detail.iv), o = encodeURIComponent(n.detail.encryptedData), a = this;
        this.setData({
            number: n.currentTarget.dataset.number
        });
        var r = wx.getStorageSync("CODE");
        "undefined" != o ? e.getWxLogin(encodeURIComponent(r), o, i, function(e) {
            t.setHwxUserInfo(e.token, e.phone_number), a.setData({
                isLogin: !0
            }), a.getFulicouponList();
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
    lingquNow: function(e) {
        var n = t.globalData.hwxUserInfo.token, i = e.currentTarget.dataset.number;
        "0" == e.currentTarget.dataset.shr ? this.repairCouponget(n, i) : this.recycleCouponget(n, i);
    },
    repairCouponget: function(n, i) {
        var o = this, a = {
            batch_number: i,
            phone_number: t.globalData.hwxUserInfo.phone
        };
        e.getFulishecoupon(n, a, function(e) {
            wx.showToast({
                title: "领取成功",
                duration: 1500,
                mask: !1
            }), o.setData({
                number: null
            }), setTimeout(function() {
                o.getFulicouponList();
            }, 1500);
        }, function(e) {
            wx.showToast({
                title: e,
                icon: "none",
                image: "",
                duration: 1500
            }), o.setData({
                number: null
            }), setTimeout(function() {
                o.getFulicouponList();
            }, 1500);
        });
    },
    recycleCouponget: function(t, n) {
        var i = this, o = {
            coupon_batch_number: n
        };
        e.getRecyclecoupon(t, o, function(e) {
            wx.showToast({
                title: "领取成功",
                duration: 1500,
                mask: !1
            }), i.setData({
                number: null
            }), setTimeout(function() {
                i.getFulicouponList();
            }, 1500);
        }, function(e) {
            wx.showToast({
                title: e,
                icon: "none",
                image: "",
                duration: 1500
            }), i.setData({
                number: null
            }), setTimeout(function() {
                i.getFulicouponList();
            }, 1500);
        });
    },
    useNow: function(e) {
        0 != e.currentTarget.dataset.shr ? wx.navigateTo({
            url: "../../recycle/phonelist/phonelist"
        }) : wx.navigateTo({
            url: "../chooseDevice/chooseDevice?tyleIndex=0"
        });
    },
    showRules: function(e) {
        console.log(e.currentTarget.dataset.index);
        var t = this.data.couponList;
        t.forEach(function(t, n) {
            n == e.currentTarget.dataset.index && (t.active = !t.active);
        }), this.setData({
            couponList: t
        });
    }
});