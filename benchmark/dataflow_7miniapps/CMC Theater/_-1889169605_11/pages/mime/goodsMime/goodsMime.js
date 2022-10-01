require("./../../../config/httpHtlper.js"), require("./../../../config/appStorage.js");

var e = getApp().urlService;

Page({
    data: {
        clickTypes: [ "order", "card", "suggestion", "question", "about", "coupon" ],
        userInfo: {},
        haveNewCoupon: !1,
        coupon_info: ""
    },
    onLoad: function(e) {},
    onShow: function() {
        var e = this;
        if (getApp().userIsLogin()) {
            console.log("获取缓存session newCouponID = " + getApp().globalData.newCouponID + " expire_coupon = " + getApp().globalData.will_be_expire_coupon);
            var o = getApp().getUserInfo();
            if (o) {
                var a = "", t = !1;
                "0" != getApp().globalData.newCouponID ? (a = "您有新的优惠券", t = "0" != getApp().globalData.newCouponID) : "0" != getApp().globalData.will_be_expire_coupon ? (a = "您有" + getApp().globalData.will_be_expire_coupon + "张优惠券即将过期！", 
                t = "0" != getApp().globalData.will_be_expire_coupon) : wx.hideTabBarRedDot({
                    index: 3
                }), this.isHaveNewCoupon(), this.setData({
                    userInfo: o,
                    haveNewCoupon: t,
                    coupon_info: a
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
        return getApp().userIsLogin() ? void wx.navigateTo({
            url: "/minePages/pages/user/info/userInfo?user=" + getApp().encodeDataAndJsonStringify(this.data.userInfo)
        }) : (getApp().globalData.isUserInfo = !0, void wx.navigateTo({
            url: "/pages/login/wxLogin/wxLogin"
        }));
    },
    personclick: function(e) {
        console.log(e), getApp().globalData.isUserInfo = !1, e.target.dataset.type == this.data.clickTypes[0] ? getApp().userIsLogin() ? wx.navigateTo({
            url: "/minePages/pages/orderLists/orderLists?onlyGoods=1"
        }) : wx.navigateTo({
            url: "/pages/login/wxLogin/wxLogin"
        }) : e.target.dataset.type == this.data.clickTypes[1] ? (console.log("personClick----------------type= " + e.target.dataset.type), 
        getApp().userIsLogin() ? wx.navigateTo({
            url: "/pages/card/cardlist/cardList"
        }) : wx.navigateTo({
            url: "/pages/login/wxLogin/wxLogin"
        })) : e.target.dataset.type == this.data.clickTypes[2] ? (console.log("personClick----------------type= " + e.target.dataset.type), 
        wx.navigateTo({
            url: "/minePages/pages/suggestion/suggestion"
        })) : e.target.dataset.type == this.data.clickTypes[3] ? (console.log("personClick----------------type= " + e.target.dataset.type), 
        wx.navigateTo({
            url: "/minePages/pages/question/questionList"
        })) : e.target.dataset.type == this.data.clickTypes[4] ? (console.log("personClick----------------type= " + e.target.dataset.type), 
        wx.navigateTo({
            url: "/pages/mime/about/about"
        })) : e.currentTarget.dataset.type == this.data.clickTypes[5] && (console.log("personClick----------------type= " + e.target.dataset.type), 
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
        })), console.log(e.target.dataset.type, this.data.clickTypes[5]);
    },
    topclick: function() {
        console.log("去登陆"), wx.navigateTo({
            url: "/pages/login/wxLogin/wxLogin"
        });
    },
    isHaveNewCoupon: function() {
        if (getApp().userIsLogin()) {
            var o = this, a = e.urls.checkCoupon, t = e.urlParameter({});
            e.wxRequest.getRequest(a, t).then(function(e) {
                if (console.log("------------券------------"), 0 == e.data.errcode) {
                    var a = e.data.data.have_new_coupon, t = e.data.data.date, n = e.data.data.will_be_expire_coupon, i = "", s = !1;
                    "0" != n ? (console.log("------------有过期券"), i = "您有" + n + "张优惠券即将过期！", s = !0, 
                    getApp().setExpireDate(t)) : console.log("------------没有过期券"), getApp().globalData.will_be_expire_coupon = n, 
                    "0" != a ? (console.log("------新券发送-------"), i = "您有新的优惠券", s = !0) : console.log("------无新券发送-------"), 
                    getApp().globalData.newCouponID = a, console.log("-------haveNewCoupon =" + s + " coupon_info=" + i), 
                    o.setData({
                        haveNewCoupon: s,
                        coupon_info: i
                    });
                }
            });
        }
    }
});