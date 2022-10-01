var e = require("./../../../config/url.js");

Page({
    data: {
        activity_url: "",
        bizUrl: "https://group10.leying365.com",
        orderNum: "",
        isRecharge: !1
    },
    onLoad: function(e) {
        console.log(e);
        var t = e.activity_url.length > 0 ? decodeURIComponent(e.activity_url) : "";
        this.data.orderNum = e.orderNum, this.data.isRecharge = e.isRecharge, console.log("options"), 
        console.log(e);
        var a = e.navTitle;
        a && wx.setNavigationBarTitle({
            title: a
        }), this.data.original_url = decodeURIComponent(t), console.log("decodeURIComponent = " + this.data.original_url);
    },
    onShow: function() {
        this.setShowData();
    },
    backAfterQuickLogin: function() {
        this.setShowData();
    },
    setShowData: function() {
        var t = this.data.bizUrl, a = this.data.original_url;
        console.log("defaultUrl index ==" + a.indexOf("http://group.leying.com"));
        var o = "sessionId=" + getApp().globalData.session_id + "&group=" + e.publicParameter.group + "&orderNum=" + this.data.orderNum + "&ver=" + e.publicParameter.ver + "&channel=" + getApp().getChannel() + "&from_scene" + getApp().getFromScene();
        o = -1 == a.indexOf("?") ? "?" + o : "&" + o, a = a.replace("http://group.leying.com", t), 
        a += o, this.setData({
            activity_url: a
        }), console.log("load_url =" + a);
    },
    onUnload: function() {
        if (!getApp().globalData.isIOS) {
            var e = getCurrentPages(), t = 1;
            "pages/card/rechargeResult/rechargeResult" == e[e.length - 1].route && (t = this.data.isRecharge ? 3 : 2), 
            wx.navigateBack({
                delta: t
            });
        }
    }
});