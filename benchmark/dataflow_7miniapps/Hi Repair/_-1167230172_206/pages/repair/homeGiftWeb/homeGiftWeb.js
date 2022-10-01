require("../../../util/util"), require("../../../comm/script/fetch"), require("../../../comm/script/config");

var e = getApp();

Page({
    data: {
        webUrl: "",
        userToken: "haha",
        phone: "",
        href: ""
    },
    onLoad: function(t) {
        wx.getSystemInfo({
            success: function(e) {
                Number(e.SDKVersion.replace(/\./g, "")) < 164 && wx.showModal({
                    title: "小提示",
                    content: "当前微信版本过低，无法正常查看，请升级到最新微信版本后重试。",
                    complete: function() {
                        wx.navigateBack();
                    }
                });
            }
        }), e.globalData.hwxUserInfo.token && this.setData({
            userToken: e.globalData.hwxUserInfo.token,
            phone: e.globalData.hwxUserInfo.phone
        }), console.log(t), t.href && this.setData({
            href: t.href
        });
    },
    onShow: function() {
        console.log(1), this.onLoad(this.data);
        Date.parse(new Date());
        var e = "";
        e = this.data.href ? this.data.href + "?phone_number=" + this.data.phone + "&token=" + this.data.userToken : "https://m2.hiweixiu.com/activity/coupon?phone_number=" + this.data.phone + "&token=" + this.data.userToken, 
        console.log(e), this.setData({
            webUrl: e
        });
    }
});