var t = getApp(), i = require("../../../7931C4950691379C1F57AC929AD2E9B3.js");

Component({
    properties: {},
    data: {
        custom: {},
        confirmClick: !1
    },
    methods: {
        _input: function(t) {
            var i = t.detail.value.trim().length;
            this.data.custom.value = t.detail.value.trim(), i > 0 ? !this.data.custom.confirm && this.setData({
                "custom.confirm": !0
            }) : this.data.custom.confirm && this.setData({
                "custom.confirm": !1
            }), this.data.custom.fail && this.setData({
                "custom.fail": !1
            });
        },
        _cancel: function() {
            this.triggerEvent("customCancel");
        },
        _confirm: function() {
            var a = this;
            if (!this.data.confirmClick) {
                this.setData({
                    confirmClick: !0
                });
                var s = [];
                s.push(this.data.custom.value), t.contentTestFun([ s ], function(t) {
                    t.allwords <= 0 ? a.triggerEvent("customConfirm", a.data.custom.value) : (a.setData({
                        "custom.fail": !0,
                        "custom.confirm": !1
                    }), i.hidetoast(), i.testShowmodal());
                }, "", function() {
                    setTimeout(function() {
                        a.setData({
                            confirmClick: !1
                        });
                    }, 100);
                });
            }
        }
    }
});