require("./../../config/httpHtlper.js"), require("./../../config/appStorage.js");

Page({
    data: {
        clickTypes: [ "order", "card", "suggestion", "question", "about", "coupon", "scoreExchange", "codeOpenCard", "mineQrCode", "contact", "setting" ],
        userInfo: {},
        haveNewCoupon: !1,
        coupon_info: "",
        exchange_coupon_switch: "0"
    },
    onLoad: function(e) {
        getApp().isIos8() || getApp().isChoseCity("personcenter") && getApp().isChoseCinema("personcenter") && getApp().globalData.init && getApp().globalData.init.exchange_coupon_switch && this.setData({
            exchange_coupon_switch: getApp().globalData.init.exchange_coupon_switch
        });
    },
    onShow: function() {
        var e = this;
        if (getApp().userIsLogin()) {
            console.log("获取缓存session newCouponID = " + getApp().globalData.newCouponID + " expire_coupon = " + getApp().globalData.will_be_expire_coupon);
            var t = getApp().getUserInfo();
            if (t) {
                var o = "", a = !1;
                "0" != getApp().globalData.newCouponID ? (o = "您有新的优惠券", a = "0" != getApp().globalData.newCouponID) : "0" != getApp().globalData.will_be_expire_coupon ? (o = "您有" + getApp().globalData.will_be_expire_coupon + "张优惠券即将过期！", 
                a = "0" != getApp().globalData.will_be_expire_coupon) : wx.hideTabBarRedDot({
                    index: 3
                }), this.setData({
                    userInfo: t,
                    haveNewCoupon: a,
                    coupon_info: o
                });
            }
        } else console.log("无缓存session"), e.setData({
            userInfo: {},
            haveNewCoupon: !1
        }), wx.hideTabBarRedDot({
            index: 3
        });
    },
    headError: function() {
        console.log("--------------");
    },
    loginClick: function(e) {
        return getApp().userIsLogin() ? (getApp().globalData.isUserInfo = !1, void wx.navigateTo({
            url: "/minePages/pages/user/info/userInfo?user=" + getApp().encodeDataAndJsonStringify(this.data.userInfo)
        })) : (getApp().globalData.isUserInfo = !0, void wx.navigateTo({
            url: "/pages/login/wxLogin/wxLogin"
        }));
    },
    personclick: function(e) {
        if (console.log(e), getApp().globalData.isUserInfo = !1, e.target.dataset.type == this.data.clickTypes[0]) getApp().userIsLogin() ? wx.navigateTo({
            url: "/minePages/pages/orderLists/orderLists"
        }) : wx.navigateTo({
            url: "/pages/login/wxLogin/wxLogin"
        }); else if (e.target.dataset.type == this.data.clickTypes[1]) console.log("personClick----------------type= " + e.target.dataset.type), 
        getApp().userIsLogin() ? wx.navigateTo({
            url: "/pages/card/cardlist/cardList"
        }) : wx.navigateTo({
            url: "/pages/login/wxLogin/wxLogin"
        }); else if (e.target.dataset.type == this.data.clickTypes[9]) console.log("personClick----------------type= " + e.target.dataset.type), 
        wx.navigateTo({
            url: "/minePages/pages/setting/setting"
        }); else if (e.target.dataset.type == this.data.clickTypes[10]) console.log("personClick----------------type= " + e.target.dataset.type), 
        getApp().userIsLogin() ? wx.navigateTo({
            url: "/minePages/pages/contactLists/contactLists"
        }) : wx.navigateTo({
            url: "/pages/login/wxLogin/wxLogin"
        }); else if (e.target.dataset.type == this.data.clickTypes[4]) console.log("personClick----------------type= " + e.target.dataset.type), 
        wx.navigateTo({
            url: "/pages/mime/about/about"
        }); else if (e.currentTarget.dataset.type == this.data.clickTypes[5]) console.log("personClick----------------type= " + e.currentTarget.dataset.type), 
        getApp().userIsLogin() ? (getApp().globalData.newCouponID = "0", getApp().globalData.will_be_expire_coupon = "0", 
        this.setData({
            haveNewCoupon: !1,
            coupon_info: ""
        }), wx.hideTabBarRedDot({
            index: 3
        }), wx.navigateTo({
            url: "/minePages/pages/coupon/coupon"
        })) : wx.navigateTo({
            url: "/pages/login/wxLogin/wxLogin"
        }); else if (e.currentTarget.dataset.type == this.data.clickTypes[6]) if (console.log("personClick----------------type= " + e.target.dataset.type), 
        getApp().userIsLogin()) {
            if (console.log(getApp().getUserInfo()), "0" == getApp().getUserInfo().card_num) return void getApp().showModalCallBackTitle("您还没有会员卡", "去办理", "我知道了", "", !0, function(e) {
                e.confirm && wx.navigateTo({
                    url: "/pages/card/cardlist/cardList"
                });
            });
            wx.navigateTo({
                url: "/minePages/pages/score/scoreExchange"
            });
        } else wx.navigateTo({
            url: "/pages/login/wxLogin/wxLogin"
        }); else e.currentTarget.dataset.type == this.data.clickTypes[7] ? (console.log("personClick----------------type= " + e.target.dataset.type), 
        getApp().userIsLogin() ? wx.navigateTo({
            url: "/minePages/pages/codeOpenCard/openCard"
        }) : wx.navigateTo({
            url: "/pages/login/wxLogin/wxLogin"
        })) : e.currentTarget.dataset.type == this.data.clickTypes[8] && (getApp().userIsLogin() ? wx.navigateTo({
            url: "/pages/mime/mineQrCode/qrCode"
        }) : wx.navigateTo({
            url: "/pages/login/wxLogin/wxLogin"
        }));
    },
    topclick: function() {
        console.log("去登陆"), wx.navigateTo({
            url: "/pages/login/wxLogin/wxLogin"
        });
    }
});