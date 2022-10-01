var e = getApp();

Page({
    data: {
        order_sn: "",
        type: "",
        order_id: "",
        isFullSucreen: !!e.globalData.isFullSucreen,
        isShowModel: !1
    },
    onLoad: function(e) {
        console.log(e), this.setData({
            order_sn: e.order_sn,
            type: e.type,
            order_id: e.order_id,
            time: JSON.parse(e.info).time,
            user_name: JSON.parse(e.info).user_name,
            user_phone: JSON.parse(e.info).user_phone,
            user_address: JSON.parse(e.info).user_address,
            address: JSON.parse(e.info).address,
            lng: JSON.parse(e.info).lng,
            lat: JSON.parse(e.info).lat,
            shopName: JSON.parse(e.info).shopName,
            tel: JSON.parse(e.info).tel,
            typeIndex: JSON.parse(e.info).lx,
            totalPrice: JSON.parse(e.info).totalPrice
        }), 2 == JSON.parse(e.info).lx && this.setData({
            isShowModel: !0
        });
    },
    callPhone: function(e) {
        wx.makePhoneCall({
            phoneNumber: e.currentTarget.dataset.phone
        });
    },
    openPhoneLocation: function() {
        wx.openLocation({
            latitude: Number(this.data.lat),
            longitude: Number(this.data.lng),
            name: this.data.shopName,
            address: this.data.address,
            scale: 28
        });
    },
    closeModel: function() {
        this.setData({
            isShowModel: !1
        });
    },
    backIndex: function() {
        wx.switchTab({
            url: "../../recycle/home/home"
        });
    },
    seeOrder: function() {
        wx.redirectTo({
            url: "../../personal/recycleOrderDetail/recycleOrderDetail?order_sn=" + this.data.order_sn + "&type=" + this.data.type + "&order_id=" + this.data.order_id
        });
    },
    goPage: function(e) {
        wx.switchTab({
            url: e.currentTarget.dataset.url
        });
    }
});