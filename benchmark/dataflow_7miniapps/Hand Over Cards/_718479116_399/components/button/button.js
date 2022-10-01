var e = require("../../510163350691379C37670B3211DFD9B3.js"), t = require("../../85F3D4A60691379CE395BCA1A67FD9B3.js");

Component({
    externalClasses: [ "mini-class" ],
    options: {
        multipleSlots: !0
    },
    properties: {
        type: {
            type: String,
            value: "",
            observer: function(e) {
                this.setData({
                    typeName: (0, t.typeFun)(e)
                });
            }
        },
        size: {
            type: String,
            value: "",
            observer: function(e) {
                this.setData({
                    sizeName: (0, t.sizeFun)(e)
                });
            }
        },
        loading: {
            type: [ Boolean, String ],
            value: !1,
            observer: function(t) {
                this.setData({
                    loading: (0, e.booleanSwitch)(t, !1)
                });
            }
        },
        openType: {
            type: String,
            value: "",
            observer: function(e) {
                this.setData({
                    openTypeNew: (0, t.openTypeFun)(e)
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
        mark: {
            type: [ String, Boolean, Array, Object ],
            value: ""
        }
    },
    data: {
        typeName: "m-default-button",
        sizeName: "m-default-size-button",
        loading: !1,
        openTypeNew: ""
    },
    created: function() {},
    methods: {
        _tap: function(t) {
            this.triggerEvent("minitap", (0, e.returnE)(t));
        },
        _getUserInfoSync: function(n) {
            var r = this;
            (0, t.infoFun)(n, "sync", function() {
                r.triggerEvent("getuserinfosync", (0, e.returnE)(n));
            }, function(t) {
                n.miniError = t, r.triggerEvent("getuserinfosyncfail", (0, e.returnE)(n));
            });
        },
        _getUserInfo: function(n) {
            var r = this;
            (0, t.infoFun)(n, "", function() {
                r.triggerEvent("getuserinfo", (0, e.returnE)(n));
            }, function(t) {
                n.miniError = t, r.triggerEvent("getuserinfofail", (0, e.returnE)(n));
            });
        },
        _getPhoneNumber: function(n) {
            var r = this;
            (0, t.getWxPhoneFun)(n, function(t) {
                n.miniPhoneMessage = t, r.triggerEvent("getphonenumber", (0, e.returnE)(n));
            }, function(t) {
                n.miniError = t, r.triggerEvent("getphonenumberfail", (0, e.returnE)(n));
            });
        }
    }
});