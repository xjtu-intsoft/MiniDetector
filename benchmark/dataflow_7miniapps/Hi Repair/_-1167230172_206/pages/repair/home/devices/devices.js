var t = require("../../../../comm/script/fetch"), e = getApp();

Component({
    data: {
        background: "",
        myDevice: null,
        hotFault: [],
        selectIndex: 0,
        selectedDevice: null,
        officeBtn: [],
        button_type: null,
        showCouponModal: !1,
        couponList: [],
        loginDialogShow: !1,
        isLogin: !1
    },
    properties: {
        data: Object
    },
    methods: {
        selectHot: function(t) {
            var e = t.currentTarget.dataset;
            this.setData({
                selectIndex: e.index
            });
        },
        bindIcon: function(t) {
            var e = t.currentTarget.dataset;
            "热门故障下单" == e.maidian && (getApp().mtj.trackEvent("home_statistics", {
                parameter_name: "热门故障下单"
            }), getApp().mtj.trackEvent("popular_repairs", {
                select_model: "热门故障下单"
            }), getApp().mtj.trackEvent("go_repair", {
                select_model: e.name,
                choose_fault: e.faulttype_detail_name
            })), this.data.selectedDevice.faultid = e.faultid, this.data.selectedDevice.name = e.name, 
            this.data.selectedDevice.id = e.id || this.data.selectedDevice.id, this.data.selectedDevice.color_id = e.color_id, 
            this.data.selectedDevice.rp_id = e.rp_id, this.data.selectedDevice.underlined_price = e.underlined_price, 
            this.data.selectedDevice.is_show_underlined_price = e.is_show_underlined_price;
            var o = JSON.stringify(this.data.selectedDevice);
            wx.navigateTo({
                url: "../faultDetail/faultDetail?info=" + o
            });
        },
        goFuli: function() {
            wx.navigateTo({
                url: "../fulishe/fulishe"
            });
        },
        morePhone: function() {
            wx.navigateTo({
                url: "../chooseDevice/chooseDevice"
            });
        },
        officeClick: function(t) {
            getApp().mtj.trackEvent("home_discount"), console.log(decodeURIComponent(t.currentTarget.dataset.item.url)), 
            t.currentTarget.dataset.item.url && wx.navigateTo({
                url: decodeURIComponent(t.currentTarget.dataset.item.url)
            });
        },
        couponShow: function(t) {
            this.couponAnimation = wx.createAnimation({
                duration: 300
            }), this.data.showCouponModal ? this.couponAnimation.translateY("120%").step() : this.couponAnimation.translateY("4rpx").step(), 
            this.setData({
                couponAnimation: this.couponAnimation.export(),
                showCouponModal: !this.data.showCouponModal
            });
        },
        getFulicouponList: function() {
            var o = this, n = e.globalData.hwxUserInfo.token, i = [];
            t.getRepairHomeCoupon(n, {
                type: 1
            }, function(t) {
                t.forEach(function(t) {
                    t.active = !1, i.push(t);
                }), o.setData({
                    couponList: i
                }), wx.hideLoading();
            }, function(t) {
                wx.hideLoading();
            });
        },
        lingquNow: function(t) {
            var o = e.globalData.hwxUserInfo.token, n = t.currentTarget.dataset.number;
            this.data.isLogin ? this.repairCouponget(o, n) : this.setData({
                loginDialogShow: !0
            });
        },
        repairCouponget: function(o, n) {
            var i = this, a = {
                batch_number: n,
                phone_number: e.globalData.hwxUserInfo.phone
            };
            t.getFulishecoupon(o, a, function(t) {
                wx.showToast({
                    title: "领取成功",
                    duration: 1500,
                    mask: !1
                }), i.setData({
                    number: null
                }), setTimeout(function() {
                    i.getFulicouponList();
                }, 1500);
            }, function(t) {
                wx.showToast({
                    title: t,
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
        cancelLoginDialog: function() {
            this.setData({
                loginDialogShow: !1
            }), this.couponShow();
        },
        getPhoneNumber: function(o) {
            var n = encodeURIComponent(o.detail.iv), i = encodeURIComponent(o.detail.encryptedData), a = this, s = wx.getStorageSync("CODE");
            "undefined" != i ? t.getWxLogin(encodeURIComponent(s), i, n, function(t) {
                console.log(t), e.setHwxUserInfo(t.token, t.phone_number), a.setData({
                    isLogin: !0
                }), a.getFulicouponList(), a.setData({
                    loginDialogShow: !1
                });
            }, function(t) {
                console.log("err6666"), console.log(t), wx.showToast({
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
        }
    },
    lifetimes: {
        attached: function() {
            var o = this.data.data.meta.theme, n = this.data.data.items;
            console.log(n), this.setData({
                background: o.bgType ? "url(".concat(o.background, ")  no-repeat") : o.background,
                myDevice: n.mydevice,
                selectedDevice: n.mydevice,
                hotFault: n.fault_list,
                officeBtn: n.buttons,
                button_type: n.button_type
            });
            var i = e.globalData.hwxUserInfo.phone, a = e.globalData.hwxUserInfo.token, s = this;
            i && a && t.getIsLogin(a, function(t) {
                "1" == t.is_login ? s.setData({
                    isLogin: !0
                }) : s.setData({
                    isLogin: !1
                });
            }, function(t) {
                s.setData({
                    isLogin: !1
                });
            }), this.getFulicouponList();
        }
    },
    pageLifetimes: {
        show: function() {
            var o = e.globalData.hwxUserInfo.phone, n = e.globalData.hwxUserInfo.token, i = this;
            o && n && t.getIsLogin(n, function(t) {
                "1" == t.is_login ? i.setData({
                    isLogin: !0,
                    loginDialogShow: !1
                }) : i.setData({
                    isLogin: !1
                });
            }, function(t) {
                i.setData({
                    isLogin: !1
                });
            }), this.getFulicouponList();
        },
        hide: function() {},
        resize: function(t) {}
    }
});