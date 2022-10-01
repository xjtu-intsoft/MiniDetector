var e = require("../../../comm/script/fetch"), o = getApp();

Page({
    data: {
        data: null
    },
    onLoad: function(e) {
        console.log(11111), console.log(e), wx.navigateToMiniProgram({
            appId: "wx05173ac0eee13384",
            path: e.path,
            extraData: {
                foo: "bar"
            },
            success: function(e) {}
        });
    },
    getPhoneNumber: function(n) {
        var a = encodeURIComponent(n.detail.iv), t = encodeURIComponent(n.detail.encryptedData), c = this, i = wx.getStorageSync("CODE");
        e.getWxLogin(encodeURIComponent(i), t, a, function(n) {
            o.setHwxUserInfo(n.token, n.phone_number), e.getOpenid({
                open_id: n.openid
            }, function(e) {
                c.setData({
                    data: e
                }), wx.showToast({
                    title: "登陆成功",
                    icon: "success",
                    duration: 2e3
                });
            });
        }, function(e) {
            console.log("err6666"), console.log(e), c.goToLogin();
        });
    },
    payMoney: function() {
        var e = this.data.data;
        console.log(e), wx.requestPayment({
            timeStamp: e.timeStamp + "",
            nonceStr: e.nonceStr,
            package: e.package,
            signType: e.signType,
            paySign: e.paySign,
            success: function(e) {
                console.log("res++++++"), console.log(e);
            },
            fail: function(e) {
                console.log("res=======失败"), console.log(e);
            }
        });
    },
    youzan: function() {
        wx.navigateToMiniProgram({
            appId: "wx05173ac0eee13384",
            path: "packages/goods/detail/index?alias=366nelavf83wk",
            extraData: {
                foo: "bar"
            },
            success: function(e) {}
        });
    }
});