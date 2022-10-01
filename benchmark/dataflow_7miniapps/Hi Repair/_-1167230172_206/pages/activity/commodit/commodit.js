Component({
    data: {},
    properties: {
        config: Object,
        goodslist: {
            type: Object
        }
    },
    methods: {
        goFalutPage: function(e) {
            var t = e.currentTarget.dataset, a = {
                faultid: t.faultid,
                name: t.name,
                id: t.id,
                color_id: t.colorid,
                rp_id: t.rpid
            }, i = JSON.stringify(a);
            wx.navigateTo({
                url: "../../repair/faultDetail/faultDetail?info=" + i
            });
        },
        goPage: function(e) {
            e.currentTarget.dataset;
            wx.navigateTo({
                url: "../../repair/chooseDevice/chooseDevice"
            });
        }
    }
});