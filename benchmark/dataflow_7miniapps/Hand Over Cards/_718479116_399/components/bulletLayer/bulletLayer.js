var t = require("../../510163350691379C37670B3211DFD9B3.js"), i = require("../../8A51D4F50691379CEC37BCF2566FD9B3.js"), n = getApp();

Component({
    externalClasses: [ "mini-class" ],
    options: {
        multipleSlots: !0
    },
    properties: {
        title: {
            type: String,
            value: ""
        },
        buttonText: {
            type: String,
            value: ""
        },
        loading: {
            type: [ Boolean, String ],
            value: !1,
            observer: function(i) {
                this.setData({
                    loading: (0, t.booleanSwitch)(i, !1)
                });
            }
        },
        openType: {
            type: String,
            value: ""
        },
        showTop: {
            type: Boolean,
            value: !0
        },
        animationHeight: {
            type: Number,
            value: 0,
            observer: function(t) {
                this._moveWidth(t), this._initAnimation(), this._animationUp();
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
    lifetimes: {
        attached: function() {
            this.setData({
                platform: wx.getSystemInfoSync().platform
            });
        }
    },
    data: {
        animation: "",
        moveWidth: 0
    },
    methods: {
        _ss: function() {},
        _moveWidth: function(t) {
            var i = t;
            i /= n.systemInfo.shiftX, this.data.moveWidth = i;
        },
        _initAnimation: function() {
            this.animation = wx.createAnimation({
                duration: 200,
                timingFunction: "ease"
            });
        },
        _animationUp: function() {
            var t = this;
            this.animation.translateY(-this.data.moveWidth).step(), setTimeout(function() {
                t.setData({
                    animationT: t.animation.export()
                });
            }, 100);
        },
        _animationDown: function() {
            this.animation.translateY(0).step(), this.setData({
                animationT: this.animation.export()
            });
        },
        _tap: function(i) {
            var n = this;
            this._animationDown(), setTimeout(function() {
                n.triggerEvent("minitap", (0, t.returnE)(i));
            }, 200);
        },
        _getUserInfo: function(n) {
            var e = this;
            (0, i.infoFun)(n, "sync", function() {
                e._animationDown(), e.triggerEvent("getuserinfosync", (0, t.returnE)(n));
            }, function(i) {
                n.miniError = i, e.triggerEvent("getuserinfosyncfail", (0, t.returnE)(n));
            });
        },
        _back: function(i) {
            this.triggerEvent("backtap", (0, t.returnE)(i));
        }
    }
});