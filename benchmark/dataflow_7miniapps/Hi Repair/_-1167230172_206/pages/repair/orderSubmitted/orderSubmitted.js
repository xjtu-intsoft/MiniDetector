require("../../../util/util"), require("../../../comm/script/fetch"), require("../../../comm/script/config"), 
getApp();

Page({
    data: {
        orderData: null
    },
    onLoad: function(a) {
        console.log("options"), console.log(a), this.setData({
            orderData: JSON.parse(a.data)
        });
    },
    goToOrderList: function() {
        wx.reLaunch({
            url: "/pages/personal/myOrderList/myOrderList"
        });
    },
    tiaozhuan: function() {
        wx.navigateTo({
            url: "../../appleRepair/fault/fault"
        });
    },
    goToOrder: function() {
        this.data.orderData.order_sn && this.data.orderData.category_type && this.data.orderData.oid ? wx.reLaunch({
            url: "../../personal/myOrderDetail/myOrderDetail?order_sn=" + (this.data.orderData.order_sn ? this.data.orderData.order_sn : "") + "&type=" + (this.data.orderData.category_type ? 1 == this.data.orderData.category_type || 2 == this.data.orderData.category_type ? 1 : 3 : "") + "&order_id=" + this.data.orderData.oid
        }) : wx.reLaunch({
            url: "/pages/personal/myOrderList/myOrderList"
        });
    },
    hideModal: function() {
        this.setData({
            isShowModal: !1
        });
    },
    showPreview: function() {
        wx.previewImage({
            current: "https://image.hiweixiu.com/web-template/home_csr_img_background.png",
            urls: [ "https://image.hiweixiu.com/web-template/home_csr_img_background.png" ]
        });
    }
});