var t = getApp();

Component({
    properties: {},
    data: {
        emailValue: "",
        emailFormatError: !1,
        emailNull: !1
    },
    methods: {
        _ss: function() {},
        _focus: function(t) {
            this.data.emailNull && this.setData({
                emailNull: !1
            }), this.data.emailFormatError && this.setData({
                emailFormatError: !1
            });
        },
        _input: function(t) {
            this.data.emailValue = t.detail.value;
        },
        _return: function() {
            this.triggerEvent("return");
        },
        _confirm: function() {
            var a = this, e = this.data.emailValue;
            if (t.burying.setPoint(t, 155), !e || e.trim().length <= 0) this.setData({
                emailNull: !0,
                emailValue: ""
            }); else {
                /^(\w|\W)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})*$/.test(e) ? this.data.loading || (this.setData({
                    loading: !0
                }), t.setRequest({
                    url: "exportCard",
                    data: {
                        email: e
                    }
                }, function(t) {
                    t.count <= 5 ? wx.showToast({
                        title: "操作成功",
                        icon: "none"
                    }) : wx.showToast({
                        title: "操作频繁，请稍后再试",
                        icon: "none"
                    }), a.triggerEvent("confirm");
                })) : this.setData({
                    emailFormatError: !0
                });
            }
        }
    }
});