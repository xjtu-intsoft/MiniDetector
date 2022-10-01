require("../../../@babel/runtime/helpers/Arrayincludes");

var e = getApp();

Component({
    properties: {},
    data: {
        systemInfo: e.systemInfo,
        popOver: {
            show: !1,
            data: ""
        }
    },
    lifetimes: {
        attached: function() {
            var t = this;
            e.setRequest({
                url: "popOver"
            }, function(e) {
                t.setData({
                    "popOver.data": e.popover,
                    "popOver.show": Boolean(e.popover)
                });
            });
        }
    },
    methods: {
        ss: function() {},
        _closePop: function() {
            e.burying.setPoint(e, 630), this.setData({
                "popOver.show": !1
            });
        },
        _sensorClick: function() {
            e.burying.setPoint(e, 631);
        },
        _jumpPage: function() {
            e.burying.setPoint(e, 631);
            var t = this.data.popOver.data || null;
            if (this.setData({
                "popOver.show": !1
            }), t) {
                [ "pages/cardMain/cardMain", "pages/cardsFolder/cardsFolder", "pages/cardWall/cardWall" ].includes(t.miniPath) ? wx.switchTab({
                    url: "/" + t.miniPath
                }) : wx.navigateTo({
                    url: "/" + t.miniPath
                });
            }
        }
    }
});