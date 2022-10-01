var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, e = require("../../utils/util.js");

Component({
    properties: {
        item: Object
    },
    data: {
        showItem: {}
    },
    attached: function() {
        this.init();
    },
    methods: {
        init: function() {
            var e = this.data.item;
            e && "object" == (void 0 === e ? "undefined" : t(e)) && (e.leftText && "object" != t(e.leftText) && (e.leftText = {
                text: e.leftText,
                size: "36"
            }), e.rightText && "object" != t(e.rightText) && (e.rightText = {
                text: e.rightText,
                size: "28"
            }), e.leftIcon && ("object" != t(e.leftIcon) ? e.leftIcon = {
                url: this.formatImg(e.leftIcon),
                width: "32",
                height: "32"
            } : e.leftIcon.url = this.formatImg(e.leftIcon.url)), e.rightIcon && ("object" != t(e.rightIcon) ? e.rightIcon = {
                url: this.formatImg(e.rightIcon),
                width: "32",
                height: "22"
            } : e.rightIcon.url = this.formatImg(e.rightIcon.url)), this.setData({
                showItem: e
            }));
        },
        formatImg: function(t) {
            return -1 == t.indexOf(".") ? "/images/" + t + ".png" : t;
        },
        rtClick: function() {
            this.triggerEvent("rtClick", this.data.item);
        },
        submitFormId: function(t) {
            e.submitFormId(t.detail.formId);
        },
        rtTextClick: function() {
            this.triggerEvent("rtTextClick");
        }
    }
});