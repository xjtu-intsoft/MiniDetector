var t = getApp();

Component({
    options: {
        multipleSlots: !0
    },
    properties: {
        senderAvator: String,
        nickName: String,
        picData: Object
    },
    data: {
        random: +new Date()
    },
    lifetimes: {
        attached: function() {}
    },
    methods: {
        _shareButtonClick: function(t) {},
        _toHome: function() {
            wx.switchTab({
                url: "/pages/cardMain/cardMain"
            });
        },
        _closeGuide: function() {
            t.burying.setPoint(t, 890), this.triggerEvent("toHome");
        }
    }
});