var e = require("./../../../config/url.js");

Page({
    data: {
        promotion_url: "",
        share_url: "",
        bizUrl: "https://group10.leying365.com"
    },
    onLoad: function(e) {
        console.log(e), this.data.title = e.title;
        var t = e.share;
        t && "undefined" != t ? (this.data.share = t = getApp().decodeDataAndJsonParse(t), 
        t && t.url && 0 != t.url.length || wx.hideShareMenu()) : wx.hideShareMenu();
        var a = e.promotion_url.length > 0 ? e.promotion_url : "", i = e.flag;
        "xieyi" == i ? (wx.hideShareMenu(), wx.setNavigationBarTitle({
            title: "会员卡协议"
        })) : "ticket_order_refund_xiyi" == i ? (wx.hideShareMenu(), wx.setNavigationBarTitle({
            title: "退票说明"
        })) : "coupon_package_xiyi" == i ? (wx.hideShareMenu(), wx.setNavigationBarTitle({
            title: "券包协议"
        })) : "yinsizhengce" == i && (wx.hideShareMenu(), wx.setNavigationBarTitle({
            title: "隐私政策"
        })), this.data.original_url = decodeURIComponent(a), console.log("decodeURIComponent = " + this.data.original_url);
    },
    onShow: function() {
        getApp().userIsLogin() || getApp().globalData.didLoadQuickLogin ? this.setShowData() : getApp().wxQuickLogin(this);
    },
    backAfterQuickLogin: function() {
        this.setShowData();
    },
    setShowData: function() {
        var t = this.data.bizUrl, a = "http://group.leying.com", i = this.data.original_url;
        console.log("defaultUrl index ==" + i.indexOf(a));
        var o = "sessionId=" + getApp().globalData.session_id + "&group=" + e.publicParameter.group + "&cinemaId=" + getApp().getCinema().id + "&ver=" + e.publicParameter.ver + "&channel=" + getApp().getChannel() + "&from_scene" + getApp().getFromScene();
        o = -1 == i.indexOf("?") ? "?" + o : "&" + o, -1 != i.indexOf("huodong.leying.com") ? (i = t + "/app/middleware-page?url=", 
        o = encodeURIComponent(this.data.original_url + o)) : -1 != i.indexOf(a) ? i = i.replace(a, t) : (i = t + "/app/middleware-page?url=", 
        o = encodeURIComponent(this.data.original_url + o)), i += o, this.data.promotion_url = "", 
        this.setData({
            share_url: i,
            promotion_url: i
        }), console.log("load_url =" + i);
    },
    jsMessage: function(e) {
        console.log("=============================="), console.log(e.detail.data);
        e.detail.data;
        if (e.detail.data && e.detail.data.length > 0) {
            var t = e.detail.data[0];
            this.data.original_url = t;
            var a = e.detail.data[0];
            this.data.couponShareObj = a;
        }
    },
    onHide: function() {
        console.log("onhide"), this.setData({
            share_url: "",
            promotion_url: ""
        });
    },
    onShareAppMessage: function() {
        var e = this.data.title && this.data.title.length > 0 ? this.data.title : "", t = encodeURIComponent(this.data.original_url), a = this.data.couponShareObj, i = "";
        console.log("share_url =" + this.data.original_url), console.log(a), console.log("----------");
        var o = this.data.share;
        return a && a.url && a.url.length > 0 ? (t = encodeURIComponent(a.url), i = a.image_url, 
        (e = a.title) || (e = ""), {
            title: e,
            imageUrl: i,
            path: "/pages/find/promotionDetial/promotionDetial?promotion_url=" + t + "&share=" + getApp().encodeDataAndJsonStringify(a),
            desc: ""
        }) : {
            title: e,
            path: "/pages/find/promotionDetial/promotionDetial?promotion_url=" + t + "&title=" + e + "&share=" + getApp().encodeDataAndJsonStringify(o),
            desc: ""
        };
    }
});