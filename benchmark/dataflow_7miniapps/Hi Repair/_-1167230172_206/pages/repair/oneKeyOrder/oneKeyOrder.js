require("../../../comm/script/config");

var e = require("../../../comm/script/fetch"), o = (require("../../../util/util"), 
getApp());

Page({
    data: {
        isFullSucreen: !!o.globalData.isFullSucreen,
        items: [],
        pageLoading: !0
    },
    onShow: function() {
        var n = this;
        wx.showLoading({
            title: "地址信息加载中",
            mask: !0
        });
        var t = o.globalData.hwxUserInfo.token;
        console.log(t), e.getAddressList.call(n, t, function(e) {
            console.log(e), n.setData({
                items: e,
                pageLoading: !1
            }), wx.hideLoading();
        }, function(e) {
            wx.hideLoading(), n.setData({
                pageLoading: !1
            }), console.log("err6666"), console.log(e), wx.showToast({
                title: e,
                icon: "none",
                duration: 1e3
            });
        });
    },
    oneKeyOrder: function(e) {
        console.log(e);
        var o = this, n = e.currentTarget.dataset.info;
        wx.showModal({
            title: "",
            content: "是否使用此地址下单",
            confirmColor: "#000000",
            cancelColor: "#ababab",
            success: function(e) {
                e.confirm ? (console.log("用户点击确定"), o.getQuickOrder(n)) : e.cancel && console.log("用户点击取消");
            }
        });
    },
    getQuickOrder: function(n) {
        wx.showLoading({
            title: "正在下单"
        });
        var t = o.globalData.hwxUserInfo.token, i = {};
        i.user_address_id = n.id, i.user_name = n.user_name, i.phone_number = n.mobile;
        e.getQuickOrder.call(this, t, i, function(e) {
            console.log(e), wx.hideLoading(), wx.navigateTo({
                url: "../orderSubmitted/orderSubmitted?data=" + JSON.stringify(e)
            });
        }, function(e) {
            console.log("err6666"), console.log(e), wx.showToast({
                title: e,
                icon: "none",
                duration: 1e3
            });
        });
    },
    callPhone: function(e) {
        wx.makePhoneCall({
            phoneNumber: "4000171010"
        });
    },
    addNewAddress: function(e) {
        wx.navigateTo({
            url: "../oneKeyAddressOrder/oneKeyAddressOrder"
        });
    },
    editAddress: function(e) {
        wx.showLoading({
            title: "加载中"
        }), console.log(e);
        var o = e.currentTarget.dataset.info;
        wx.navigateTo({
            url: "../oneKeyAddressOrder/oneKeyAddressOrder?info=" + JSON.stringify(o)
        }), wx.hideLoading();
    }
});