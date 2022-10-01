var t = require("../../utils/util.js"), e = require("../../utils/event.js");

Component({
    properties: {
        item: Object,
        type: String
    },
    methods: {
        subscribe: function(i) {
            if (0 != wx.getStorageSync("user_Id")) {
                var s = this.data.item;
                if ("0" === this.data.type) {
                    r = wx.getStorageSync("user_Id");
                    e.mtaEvent("subscribeSub", r, s.ssi_id, s.object_type, s.object_id);
                } else if ("1" === this.data.type) {
                    r = wx.getStorageSync("user_Id");
                    e.mtaEvent("toutiaoSubscribe", r, s.ssi_id, s.object_type, s.object_id);
                } else if ("2" === this.data.type) {
                    var r = wx.getStorageSync("user_Id");
                    e.mtaEvent("subjectDetailSubscribe", r, s.object_type, s.object_id);
                }
                var a = this;
                t.subscribe(s.object_type, s.object_id, function() {
                    a.setData({
                        "item.user_sub": 1
                    });
                }), t.submitFormId(i.detail.formId);
            } else wx.navigateTo({
                url: "/pages/authorise/authorise"
            });
        },
        submitFormId: function(e) {
            t.submitFormId(e.detail.formId);
        }
    }
});