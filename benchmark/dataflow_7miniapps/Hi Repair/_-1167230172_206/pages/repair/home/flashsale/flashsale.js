Component({
    data: {
        background: "",
        currentIndex: 0,
        showMore: !0,
        swiperHeight: 200,
        scrollLeft: 0
    },
    properties: {
        data: Object
    },
    methods: {
        chooseType: function(e) {
            console.log(e);
            var t = e.currentTarget.dataset;
            this.setData({
                currentIndex: t.index,
                swiperHeight: 262 * this.data.data.items[t.index].children.length,
                scrollLeft: 50 * t.index
            });
        },
        topSwiper: function(e) {
            var t = e.detail.current;
            this.setData({
                currentIndex: t,
                swiperHeight: 262 * this.data.data.items[t].children.length,
                scrollLeft: 50 * t
            });
        },
        goCreateOrder: function(e) {
            console.log(e);
            var t = e.currentTarget.dataset.data;
            console.log(t);
            var a = [];
            a.push(t), wx.setStorageSync("selectedFault", a), wx.navigateTo({
                url: "../createOrder/createOrder?mouldId=" + t.mouldId + "&mouldName=" + t.mouldName + "&color=" + t.color_id + "&colorName=" + t.colorName + "&is_warrantable=" + t.is_warrantable + "&rp_id=" + t.rp_id
            });
        },
        showMore: function() {
            this.setData({
                showMore: !this.data.showMore
            });
        }
    },
    lifetimes: {
        attached: function() {
            var e = this.data.data.meta.theme;
            this.setData({
                background: e.bgType ? "url(".concat(e.background, ")  no-repeat") : e.background,
                swiperHeight: 262 * this.data.data.items[0].children.length
            });
        }
    }
});