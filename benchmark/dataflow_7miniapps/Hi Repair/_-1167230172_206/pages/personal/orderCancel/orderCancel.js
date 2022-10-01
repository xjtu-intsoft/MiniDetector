var e = require("../../../comm/script/fetch"), n = (require("../../../comm/script/config"), 
new getApp());

Page({
    data: {
        cancelReasonList: [],
        reasonIndex: -1,
        order_id: null,
        order_sn: null,
        type: null,
        cancel_id: null,
        cancel: "",
        showTextarea: !1
    },
    onLoad: function(e) {
        this.getCancelReason(e.type), this.setData({
            order_id: e.id,
            order_sn: e.sn,
            type: e.type
        });
    },
    onReady: function() {},
    onShow: function() {},
    selectReason: function(e) {
        this.setData({
            reasonIndex: e.currentTarget.dataset.index,
            cancel_id: e.currentTarget.dataset.id
        }), this.setData({
            showTextarea: 61 == e.currentTarget.dataset.id
        });
    },
    getCancelReason: function(t) {
        var a = this, o = n.globalData.hwxUserInfo.token;
        e.getCancelReason(o, t, function(e) {
            a.setData({
                cancelReasonList: e
            });
        }, function(e) {
            console.log(e);
        });
    },
    inputChange: function(e) {
        this.setData({
            cancel: e.detail.value
        });
    },
    confirmCancel: function() {
        var t = n.globalData.hwxUserInfo.token, a = this.data, o = a.order_id, i = a.order_sn, c = a.type, s = a.cancel_id, r = a.cancel;
        console.log(o, i, c, s, r), s ? 61 != s || r || wx.showToast({
            title: "请输入原因",
            image: "../../../img/wx_index/warning.png",
            duration: 1500
        }) : wx.showToast({
            title: "请选择原因",
            image: "../../../img/wx_index/warning.png",
            duration: 1500
        }), wx.showLoading(), r = 61 == s ? r : "", e.cancelOrder(t, o, i, c, s, r, function(e) {
            wx.showToast({
                title: "取消成功",
                duration: 1500
            }), setTimeout(function() {
                wx.navigateBack();
            }, 1500), wx.hideLoading();
        }, function(e) {
            console.log("err+++++"), console.log(e), wx.hideLoading(), wx.showToast({
                title: "取消失败",
                image: "../../../img/wx_index/warning.png",
                duration: 1500
            });
        });
    },
    contactService: function() {
        wx.makePhoneCall({
            phoneNumber: "4000171010"
        });
    }
});