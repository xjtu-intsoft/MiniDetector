var a = require("../../510163350691379C37670B3211DFD9B3.js"), t = require("../../7C1233310691379C1A745B364F8FD9B3.js");

Component({
    externalClasses: [ "mini-class" ],
    properties: {
        icon: {
            type: String,
            value: "",
            observer: function(a) {
                if (a && !this.data.backgroundImage && this.setData({
                    backgroundImage: (0, t.svgIcon)(a, this.data.color)
                }), a) {
                    var e = (0, t.iconClassName)(a);
                    e && this.setData({
                        iconClass: e
                    });
                }
            }
        },
        color: {
            type: String,
            value: "",
            observer: function(a) {
                a && this.data.icon && this.setData({
                    backgroundImage: (0, t.svgIcon)(this.data.icon, a)
                });
            }
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
        backgroundImage: "",
        iconClass: ""
    },
    methods: {
        _tap: function(t) {
            this.triggerEvent("minitap", (0, a.returnE)(t));
        }
    }
});