var t = getApp();

Component({
    properties: {},
    data: {
        systemInfo: t.systemInfo,
        showTip: !1,
        infor: "大家把名片贴到群通讯录里，就能互相认识了。信息永不过时，找合作、找资源更方便。"
    },
    methods: {
        ss: function() {},
        show: function() {
            this.setData({
                showTip: !0
            });
        },
        closeTip: function() {
            t.burying.setPoint(t, 707), this.setData({
                showTip: !1
            });
        },
        _toMain: function() {
            t.burying.setPoint(t, 708), this.triggerEvent("toMain");
        }
    }
});