Component({
    properties: {
        modalShow: {
            type: Boolean,
            value: !1,
            observer: function(t) {}
        },
        iconType: {
            type: String,
            value: "success",
            observer: function(t) {
                this._iconTypeFun(t);
            }
        },
        buttonType: {
            type: String,
            value: "text",
            observer: function(t) {}
        },
        title: {
            type: String,
            value: "提示",
            observer: function(t) {}
        },
        text: {
            type: String,
            value: "欢迎使用递名片",
            observer: function(t) {}
        },
        tip: {
            type: String,
            value: "",
            observer: function(t) {}
        },
        buttonText: {
            type: String,
            value: "使用递名片",
            observer: function(t) {}
        },
        cancelText: {
            type: String,
            value: "取消",
            observer: function(t) {}
        },
        titleColor: {
            type: String,
            value: "#000000",
            observer: function(t) {}
        },
        textColor: {
            type: String,
            value: "#999999",
            observer: function(t) {}
        },
        cancelColor: {
            type: String,
            value: "#999999",
            observer: function(t) {}
        },
        tipColor: {
            type: String,
            value: "#999999",
            observer: function(t) {}
        },
        buttonColor: {
            type: String,
            value: "#2979FF",
            observer: function(t) {}
        },
        closeShow: {
            type: Boolean,
            value: !1,
            observer: function(t) {}
        },
        extraData: {
            type: Object,
            value: {},
            observer: function(t) {}
        },
        cancel: {
            type: Boolean,
            value: !0,
            observer: function(t) {}
        },
        iconShow: {
            type: Boolean,
            value: !0,
            observer: function(t) {}
        },
        titleShow: {
            type: Boolean,
            value: !0,
            observer: function(t) {}
        }
    },
    data: {
        iconPath: "modal-success.png"
    },
    methods: {
        _ss: function() {},
        _iconTypeFun: function(t) {
            var e = "modal-success.png";
            "success" == t && (e = "modal-success.png"), "warn" == t && (e = "modal-warn.png"), 
            this.setData({
                iconPath: e
            });
        },
        _button: function() {
            this._closeModal(), this.triggerEvent("modalButton", this.data.extraData);
        },
        _cancel: function() {
            this._closeModal(), this.triggerEvent("modalCancel", this.data.extraData);
        },
        _close: function() {
            this._closeModal(), this.triggerEvent("modalClose", this.data.extraData);
        },
        _back: function() {
            this.triggerEvent("modalBack", this.data.extraData);
        },
        _closeModal: function() {
            this.setData({
                modalShow: !1
            });
        }
    }
});