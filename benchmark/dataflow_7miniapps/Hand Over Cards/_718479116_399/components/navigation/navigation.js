var t = getApp();

Component({
    options: {
        multipleSlots: !0
    },
    properties: {
        type: {
            type: String,
            value: "common"
        },
        zIndex: {
            type: Number
        },
        iconPath: {
            type: String,
            value: "/images/toLeft-white.png"
        },
        iconStyle: {
            type: String,
            value: "width:16rpx;height:32rpx;"
        },
        topTitle: {
            type: String,
            value: "递名片"
        },
        topBg: {
            type: String,
            value: "#ffffff"
        },
        titleColor: {
            type: String,
            value: "#000"
        },
        showText: {
            type: Boolean,
            value: !0
        },
        position: {
            type: String,
            value: "center"
        }
    },
    data: {
        systemInfo: t.systemInfo,
        menuButton: {}
    },
    lifetimes: {
        attached: function() {
            this.setData({
                menuButton: t.systemInfo.menuButton
            });
        },
        moved: function() {},
        detached: function() {}
    },
    methods: {
        _ss: function() {},
        _minitap: function() {
            this.triggerEvent("minitap");
        }
    }
});