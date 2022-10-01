var t = require("../../../../comm/script/fetch"), e = getApp();

Component({
    data: {
        background: "",
        showCoformModel: !1
    },
    properties: {
        data: Object
    },
    methods: {
        quickOrder: function() {
            getApp().mtj.trackEvent("quick_order_start", {
                parameter_name: "一键下单"
            }), this.setData({
                showCoformModel: !this.data.showCoformModel
            });
        },
        closeCofirmModel: function() {
            this.setData({
                showCoformModel: !this.data.showCoformModel
            });
        },
        oneKeyOrder: function() {
            var o = this;
            wx.showLoading();
            var a = e.globalData.hwxUserInfo.token, r = wx.getStorageSync("latlng"), n = {
                lng: r ? JSON.parse(wx.getStorageSync("latlng")).lng : "",
                lat: r ? JSON.parse(wx.getStorageSync("latlng")).lat : ""
            };
            t.oneKeyOrder(a, n, function(t) {
                wx.hideLoading(), o.closeCofirmModel(), wx.showToast({
                    title: "咨询已提交，客服将尽快与您取得联系",
                    icon: "none",
                    duration: 3e3
                });
            }, function(t) {
                wx.hideLoading();
            });
        }
    },
    lifetimes: {
        attached: function() {
            var t = this.data.data.meta.theme, e = this.data.data.items;
            this.setData({
                background: t.bgType ? "url(".concat(t.background, ")  no-repeat") : t.background,
                myDevice: e.mydevice,
                hotFault: e.fault_list
            });
        }
    }
});