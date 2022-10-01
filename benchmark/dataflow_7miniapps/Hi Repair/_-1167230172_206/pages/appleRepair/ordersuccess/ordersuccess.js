require("../../../util/util"), require("../../../comm/script/fetch"), require("../../../comm/script/config"), 
getApp();

Page({
    data: {
        orderData: null
    },
    onLoad: function(e) {
        console.log("options"), console.log(e), this.setData({
            orderData: JSON.parse(e.data)
        });
    },
    goToHome: function() {
        wx.reLaunch({
            url: "/pages/repair/home/home"
        });
    },
    goToOrder: function() {
        wx.reLaunch({
            url: "../../personal/myOrderDetail/myOrderDetail?order_sn=" + (this.data.orderData.order_sn ? this.data.orderData.order_sn : "") + "&type=" + (this.data.orderData.type ? 1 == this.data.orderData.type || 2 == this.data.orderData.type ? 1 : 3 : "") + "&order_id=" + this.data.orderData.order_id
        });
    },
    tiaozhuan: function() {
        wx.navigateTo({
            url: "../../appleRepair/fault/fault"
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