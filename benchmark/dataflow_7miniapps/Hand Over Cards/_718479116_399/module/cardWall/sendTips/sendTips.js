var s = getApp(), t = require("../../../7931C4950691379C1F57AC929AD2E9B3.js");

Component({
    properties: {},
    data: {
        systemInfo: s.systemInfo,
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
        closeTip: function(t) {
            s.burying.setPoint(s, 703), this.setData({
                showTip: !1
            });
        },
        setClipboard: function() {
            s.burying.setPoint(s, 702);
            var o = this;
            wx.setClipboardData({
                data: this.data.infor,
                success: function(s) {
                    console.log("copt success", s), t.showtoast("已复制", "success", 1500), o.setData({
                        showTip: !1
                    });
                }
            });
        }
    }
});