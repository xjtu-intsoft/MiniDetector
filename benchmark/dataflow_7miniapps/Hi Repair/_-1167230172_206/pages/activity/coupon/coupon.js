require("../../../util/util");

var e = require("../../../comm/script/fetch"), t = (require("../../../comm/script/config"), 
getApp());

Component({
    data: {},
    properties: {
        config: Object,
        couponlist: {
            type: Object
        },
        islogin: Boolean,
        activitystatus: Number,
        params: Object
    },
    methods: {
        lingquNow: function(e) {
            if (1 != this.properties.activitystatus && 3 != this.properties.activitystatus) {
                var o = t.globalData.hwxUserInfo.token, n = e.currentTarget.dataset.number;
                this.repairCouponget(o, n);
            } else {
                var i = getCurrentPages();
                (i.length > 1 ? i[1] : i[0]).setData({
                    showModal: !0
                });
            }
        },
        repairCouponget: function(o, n) {
            var i = this, a = {
                batch_number: n,
                phone_number: t.globalData.hwxUserInfo.phone
            };
            e.getFulishecoupon(o, a, function(e) {
                wx.showToast({
                    title: "领取成功",
                    duration: 1500,
                    mask: !1
                });
                var t = getCurrentPages();
                (t.length > 1 ? t[1] : t[0]).getActivityConfig(i.properties.params);
            }, function(e) {
                wx.showToast({
                    title: e,
                    icon: "none",
                    image: "",
                    duration: 1500
                }), (pages.length > 1 ? pages[1] : pages[0]).getActivityConfig(i.properties.params);
            });
        },
        recycleCouponget: function(t, o) {
            var n = this, i = {
                coupon_batch_number: o
            };
            e.getRecyclecoupon(t, i, function(e) {
                wx.showToast({
                    title: "领取成功",
                    duration: 1500,
                    mask: !1
                });
                var t = getCurrentPages(), o = t.length > 1 ? t[1] : t[0];
                console.log("page-=-=-=-"), console.log(o), o.getActivityConfig(n.properties.params);
            }, function(e) {
                wx.showToast({
                    title: e,
                    icon: "none",
                    image: "",
                    duration: 1500
                });
            });
        },
        goToLogin: function() {
            wx.navigateTo({
                url: "../../personal/login/login"
            });
        },
        getPhoneNumber: function(o) {
            var n = encodeURIComponent(o.detail.iv), i = encodeURIComponent(o.detail.encryptedData), a = this;
            if ("undefined" != i) {
                var r = wx.getStorageSync("CODE");
                e.getWxLogin(encodeURIComponent(r), i, n, function(e) {
                    t.setHwxUserInfo(e.token, e.phone_number);
                    var o = getCurrentPages(), n = o.length > 1 ? o[1] : o[0];
                    n.setData({
                        isLogin: !0
                    }), n.getActivityConfig(a.properties.params);
                }, function(e) {
                    console.log("err6666"), console.log(e);
                });
            } else a.goToLogin();
        }
    }
});