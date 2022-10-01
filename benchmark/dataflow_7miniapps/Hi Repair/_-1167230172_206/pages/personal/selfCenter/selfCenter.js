require("../../../util/util");

var e = require("../../../comm/script/fetch"), o = (require("../../../comm/script/config"), 
getApp());

Page({
    data: {
        message: {},
        hwxUserInfo: {},
        isLogin: !1,
        holderName: "点击登录",
        coupons_count: 0,
        orders_count: 0,
        isShowModal: !1
    },
    onLoad: function() {
        var e, t, n, i = o.globalData.wxDeviceInfo;
        console.log("deviceInfo____"), console.log(i), e = i.brand, t = i.model, n = o.handleModel(e, t), 
        console.log("newModel++++++"), console.log(n), "unknown" == n && t.match(/<(\S*)>/)[1], 
        this.setData({
            myModelName: n
        }), this.getMyDevicePrice(n);
    },
    onShow: function() {
        this.setData({
            coupons_count: 0,
            orders_count: 0
        }), this.checkLogin();
    },
    getMyDevicePrice: function(o) {
        var t = this, n = {
            model_name: o
        };
        e.getMyDevicePrice(n, function(e) {
            t.setData({
                deviceInfo: e
            }), wx.hideLoading(), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
        }, function(e) {
            console.log("err"), console.log(e), t.setData({
                deviceInfo: null
            }), wx.hideLoading(), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
        });
    },
    goPersonalAddress: function() {
        wx.navigateTo({
            url: "../addressList/addressList?from=selfcenter"
        });
    },
    checkLogin: function() {
        var t = this, n = o.globalData.hwxUserInfo.phone, i = o.globalData.hwxUserInfo.token;
        n && i ? e.getIsLogin(i, function(e) {
            "1" == e.is_login ? (t.setData({
                isLogin: !0,
                holderName: n
            }), t.getUserDataList(i), t.getMyCoupon(i)) : t.setData({
                isLogin: !1,
                holderName: "点击登录"
            });
        }, function(e) {
            console.log("err6666"), console.log(e), t.setData({
                isLogin: !1,
                holderName: "点击登录"
            });
        }) : t.setData({
            isLogin: !1,
            holderName: "点击登录"
        });
    },
    onShareAppMessage: function(e) {
        return {
            title: "Hi维修手机上门维修回收平台",
            path: "/pages/repair/home/home",
            imageUrl: "https://pic.hiweixiu.com/hiweixiu-mobile/img/wxshare.png"
        };
    },
    goToLogin: function() {
        this.data.isLogin || wx.navigateTo({
            url: "../chooseLogin/chooseLogin"
        });
    },
    getUserDataList: function(o) {
        var t = this;
        e.getUserDataList.call(t, o, function(e) {
            console.log(e), t.setData({
                orders_count: e.orders_count
            }), wx.hideLoading();
        }, function(e) {
            wx.hideLoading(), console.log(e);
        });
    },
    getMyCoupon: function(o) {
        var t = this;
        e.getMyCoupon.call(t, o, 1, function(e) {
            console.log(e), t.setData({
                coupons_count: e.length
            }), wx.hideLoading();
        }, function(e) {
            wx.hideLoading(), console.log(e);
        });
    },
    myOrder: function(e) {
        this.data.isLogin ? wx.navigateTo({
            url: "../myOrderList/myOrderList"
        }) : wx.showToast({
            title: "请先登录",
            icon: "none"
        });
    },
    myCoupon: function(e) {
        this.data.isLogin ? wx.navigateTo({
            url: "../usercoupon/usercoupon"
        }) : wx.showToast({
            title: "请先登录",
            icon: "none"
        });
    },
    showPreview: function() {
        wx.previewImage({
            current: "https://image.hiweixiu.com/web-template/home_csr_img_background.png",
            urls: [ "https://image.hiweixiu.com/web-template/home_csr_img_background.png" ]
        });
    },
    showPreviewGou: function() {
        console.log("showPreviewGou"), wx.previewImage({
            current: "https://image.hiweixiu.com/web-template/mfxtc.png",
            urls: [ "https://image.hiweixiu.com/web-template/mfxtc.png" ]
        });
    },
    myFeedback: function(e) {
        this.data.isLogin ? wx.navigateTo({
            url: "../myFeedBackWeb/myFeedBackWeb?token=" + o.globalData.hwxUserInfo.token
        }) : wx.showToast({
            title: "请先登录",
            icon: "none"
        });
    },
    myHelpCenter: function(e) {
        wx.navigateTo({
            url: "../helpcenter/helpcenter"
        });
    },
    aboutUs: function(e) {
        wx.navigateTo({
            url: "../../repair/aboutusWeb/aboutusWeb"
        });
    },
    callPhone: function(e) {
        wx.makePhoneCall({
            phoneNumber: "4000171010"
        });
    },
    goToStoreAddress: function() {
        wx.navigateTo({
            url: "../../storeAddress/storeAddress"
        });
    },
    goSetting: function() {
        wx.navigateTo({
            url: "../setting/setting"
        });
    },
    tiaozhuan: function(e) {
        var o = e.currentTarget.dataset.type;
        "repair" == o ? wx.switchTab({
            url: "/pages/repair/home/home"
        }) : "recycle" == o && wx.navigateTo({
            url: "/pages/repair/fulishe/fulishe?index=2"
        });
    },
    changeModel: function() {
        wx.navigateTo({
            url: "/pages/recycle/phonelist/phonelist"
        });
    },
    getPrice: function(e) {
        var o = e.currentTarget.dataset.mid, t = e.currentTarget.dataset.name;
        getApp().mtj.trackEvent("recycling_machine", {
            select_model: t
        }), wx.navigateTo({
            url: "/pages/recycle/faultprice/faultprice?mid=" + o + "&name=" + t
        });
    },
    stopTouchMove: function() {},
    stopTap: function() {},
    startmessage: function() {
        wx.showLoading();
    },
    completemessage: function(e) {
        console.log(e.detail.errcode), wx.hideLoading(), 0 == e.detail.errcode ? this.setData({
            isShowModal: !0
        }) : -3002 == e.detail.errcode ? wx.showToast({
            title: "获取插件配置信息失败",
            icon: "none",
            duration: 2e3
        }) : -3004 == e.detail.errcode ? wx.showToast({
            title: "用户授权失败",
            icon: "none",
            duration: 2e3
        }) : -3005 == e.detail.errcode ? wx.showToast({
            title: "客服消息发送失败",
            icon: "none",
            duration: 2e3
        }) : -3006 == e.detail.errcode ? wx.showToast({
            title: "已经是好友关系啦",
            icon: "none",
            duration: 2e3
        }) : -3008 == e.detail.errcode && wx.showToast({
            title: "当前配置没有客服人员",
            icon: "none",
            duration: 2e3
        });
    },
    hideModal: function() {
        this.setData({
            isShowModal: !1
        });
    }
});