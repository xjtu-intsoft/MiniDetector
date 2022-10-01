var t = require("../../510163350691379C37670B3211DFD9B3.js"), e = require("../../97DAAD100691379CF1BCC51724CFD9B3.js");

Component({
    externalClasses: [ "mini-class" ],
    properties: {
        type: {
            type: String,
            value: "",
            observer: function(t) {}
        },
        title: {
            type: String,
            value: ""
        },
        text: {
            type: String,
            value: ""
        },
        miniStyle: {
            type: String,
            value: ""
        },
        loading: {
            type: [ Boolean, String ],
            value: !1,
            observer: function(e) {
                this.setData({
                    loading: (0, t.booleanSwitch)(e, !1)
                });
            }
        },
        confirmText: {
            type: String,
            value: "确定"
        },
        cancelText: {
            type: String,
            value: "取消"
        },
        confirmColor: {
            type: String,
            value: "",
            observer: function(t) {
                console.log("canc", t);
            }
        },
        cancelColor: {
            type: String,
            value: "",
            observer: function(t) {
                console.log("canc", t);
            }
        },
        confirmDisabled: {
            type: [ Boolean, String ],
            value: !0,
            observer: function(e) {
                this.setData({
                    confirmDisabled: (0, t.booleanSwitch)(e, !0)
                });
            }
        },
        confirm: {
            type: [ Boolean, String ],
            value: !0,
            observer: function(e) {
                this.setData({
                    confirm: (0, t.booleanSwitch)(e, !0)
                });
            }
        },
        cancel: {
            type: [ Boolean, String ],
            value: !0,
            observer: function(e) {
                this.setData({
                    cancel: (0, t.booleanSwitch)(e, !0)
                });
            }
        },
        placeholder: {
            type: String,
            value: ""
        },
        checkMessage: {
            type: [ Boolean, String ],
            value: !0,
            observer: function(e) {
                this.setData({
                    checkMessage: (0, t.booleanSwitch)(e, !0)
                });
            }
        },
        value: {
            type: String,
            value: "",
            observer: function(t) {
                t && t.trim().length > 0 && this.data.confirmDisabled && !this.data.inputDisabled && this.setData({
                    confirmDisabled: !1
                });
            }
        },
        inputDisabled: {
            type: [ Boolean, String ],
            value: !1,
            observer: function(e) {
                this.setData({
                    inputDisabled: (0, t.booleanSwitch)(e, !1)
                }), (e || "true" == e) && !this.data.confirmDisabled && this.setData({
                    confirmDisabled: !0
                });
            }
        },
        warnTip: {
            type: String,
            value: ""
        },
        mark: {
            type: [ String, Boolean, Array, Object ],
            value: ""
        }
    },
    lifetimes: {
        attached: function() {
            console.log("attached");
        }
    },
    data: {
        checkPass: !0,
        sensiteve: !1
    },
    methods: {
        _focus: function(e) {
            this.triggerEvent("focus", (0, t.returnE)(e));
        },
        _input: function(e) {
            e.detail.value && e.detail.value.trim().length > 0 && this.data.confirmDisabled && this.setData({
                confirmDisabled: !1
            }), !this.data.checkPass && this.setData({
                checkPass: !0
            }), this.data.sensiteve && this.setData({
                sensiteve: !1
            }), this.data.value = e.detail.value, this.triggerEvent("input", (0, t.returnE)(e));
        },
        _blur: function(e) {
            this.triggerEvent("blur", (0, t.returnE)(e));
        },
        _inputConfirm: function(e) {
            this.triggerEvent("inputconfirm", (0, t.returnE)(e));
        },
        _cancel: function(e) {
            this.triggerEvent("cancel", (0, t.returnE)(e));
        },
        _confirm: function(e) {
            var i = this;
            e.miniValue = this.data.value, "input" != this.data.type || "input" == this.data.type && !this.data.checkMessage ? this.triggerEvent("confirm", (0, 
            t.returnE)(e)) : this._inputButtonConfirm(function() {
                i.triggerEvent("confirm", (0, t.returnE)(e));
            });
        },
        _inputButtonConfirm: function(t) {
            var i = this;
            this.setData({
                loading: !0
            }), (0, e.confirmFun)(this.data.value, function() {
                t && t();
            }, function(t) {
                "敏感词检测失败" == t && i.setData({
                    checkPass: !1,
                    sensiteve: "您输入的内容包含敏感词汇"
                }), i.setData({
                    loading: !1
                });
            });
        },
        _disabled: function(e) {
            this.triggerEvent("disabled", (0, t.returnE)(e));
        }
    }
});