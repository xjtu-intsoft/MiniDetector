var t = require("../../510163350691379C37670B3211DFD9B3.js"), e = require("../../31E120B00691379C578748B7FFAFD9B3.js");

Component({
    externalClasses: [ "mini-class" ],
    properties: {
        type: {
            type: String,
            value: "",
            observer: function(t) {
                t && this.setData({
                    typeName: (0, e.typeFun)(t)
                });
            }
        },
        text: {
            type: String,
            value: ""
        },
        miniStyle: {
            type: String,
            value: ""
        },
        icon: {
            type: String,
            value: "",
            observer: function(t) {
                if (t) {
                    var n = (0, e.iconSrcFun)(this.data.type, t);
                    n && this.setData({
                        iconSrc: n,
                        iconShow: !0
                    });
                }
            }
        },
        button: {
            type: [ String, Boolean ],
            value: !1,
            observer: function(e) {
                this.setData({
                    button: (0, t.booleanSwitch)(e, !1)
                });
            }
        },
        buttonText: {
            type: String,
            value: ""
        },
        mark: {
            type: [ String, Boolean, Array, Object ],
            value: ""
        }
    },
    data: {
        typeName: "m-default-message",
        iconShow: !1,
        iconSrc: ""
    },
    methods: {
        _messageTap: function(e) {
            this.triggerEvent("message", (0, t.returnE)(e));
        },
        _arrowsTap: function(e) {
            this.triggerEvent("arrows", (0, t.returnE)(e));
        },
        _closeTap: function(e) {
            this.triggerEvent("close", (0, t.returnE)(e));
        },
        _buttonTap: function(e) {
            this.triggerEvent("button", (0, t.returnE)(e));
        }
    }
});