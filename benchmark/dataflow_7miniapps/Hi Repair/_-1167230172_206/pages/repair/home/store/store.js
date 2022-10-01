Component({
    data: {
        background: "",
        items: null
    },
    properties: {
        data: Object
    },
    methods: {
        openPhoneLocation: function(e) {
            wx.openLocation({
                latitude: Number(e.currentTarget.dataset.lat),
                longitude: Number(e.currentTarget.dataset.lng),
                name: e.currentTarget.dataset.name,
                address: e.currentTarget.dataset.address,
                scale: 28
            });
        },
        callCenter: function(e) {
            var t = e.currentTarget.dataset;
            wx.makePhoneCall({
                phoneNumber: t.tel
            });
        },
        goMore: function() {
            wx.navigateTo({
                url: "../../storeAddress/storeAddress"
            });
        },
        showPreview: function() {
            wx.previewImage({
                current: "https://image.hiweixiu.com/web-template/home_csr_img_background.png",
                urls: [ "https://image.hiweixiu.com/web-template/home_csr_img_background.png" ]
            });
        }
    },
    lifetimes: {
        attached: function() {
            var e = this.data.data.meta.theme, t = this.data.data.items;
            this.setData({
                background: e.bgType ? "url(".concat(e.background, ")  no-repeat") : e.background,
                items: t
            });
        }
    }
});