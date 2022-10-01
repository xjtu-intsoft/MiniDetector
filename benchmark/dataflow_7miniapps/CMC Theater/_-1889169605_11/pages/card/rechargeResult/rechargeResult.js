var a = require("./../../../config/httpHtlper.js");

Page({
    data: {
        depositResultObj: {},
        order_num: "",
        card_num: "",
        recharge: 0,
        showChance: !1,
        noAcitivity: !1,
        activity_url: "",
        isRecharge: !1,
        activity_id: ""
    },
    onLoad: function(a) {
        this.data.card_num = a.cardNum, this.data.recharge = a.reCharge, this.data.order_num = a.orderNum, 
        this.data.isRecharge = a.isRecharge, this.data.activity_id = a.activity_id, console.log("options充值状态"), 
        console.log(a), this.asyncDepositResult();
    },
    asyncDepositResult: function() {
        console.log("init");
        var t = this;
        a.depositResult({
            card_num: t.data.card_num,
            order_id: t.data.order_num,
            activity_id: t.data.activity_id
        }).then(function(a) {
            if (console.log(t.data.card_num, t.data.order_num), console.log(a), 1 == a.data.status) {
                var e = a.data.data, i = t.data.recharge, r = t.data.card_num, o = !0, d = !1;
                1 == a.data.data.order_status ? (o = !0, "" == e.activity.url ? d = !0 : (d = !1, 
                t.data.activity_url = e.activity.url)) : 3 == a.data.data.order_status ? o = !1 : (o = !0, 
                d = !0), t.setData({
                    depositResultObj: e,
                    showChance: o,
                    recharge: i,
                    card_num: r,
                    noAcitivity: d
                });
            } else console.log("error"), a.cancelShowError = !0, getApp().showModalApp(a.data.msg);
        });
    },
    jumpBack: function() {
        wx.navigateBack({});
    },
    refrushStatus: function() {
        this.asyncDepositResult();
    },
    onUnload: function() {
        if (!getApp().globalData.isIOS) {
            var a = getCurrentPages(), t = 1;
            "pages/card/cardDetails/cardDetails" == a[a.length - 1].route && (t = 2), wx.navigateBack({
                delta: t
            });
        }
    },
    gotoChance: function() {
        console.log("this.data.order_num", this.data.order_num);
        var a = "/pages/card/activity/activityDetail?" + ("orderNum=" + this.data.order_num + "&isRecharge=" + this.data.isRecharge + "&activity_url=" + encodeURIComponent(this.data.activity_url));
        getApp().globalData.isIOS ? wx.redirectTo({
            url: a
        }) : wx.navigateTo({
            url: a
        });
    }
});