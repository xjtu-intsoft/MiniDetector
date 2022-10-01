var t = require("../../510163350691379C37670B3211DFD9B3.js"), i = getApp();

Component({
    externalClasses: [ "mini-class" ],
    options: {
        multipleSlots: !0
    },
    properties: {
        slotNumber: {
            type: Number,
            value: 0
        },
        sheetList: {
            type: Array,
            value: [],
            observer: function(t) {
                this._moveWidth(), this._initAnimation(), this._animationUp();
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
            this._platform();
        }
    },
    data: {
        animation: "",
        platform: i.systemInfo.platform,
        modelX: i.systemInfo.modelX
    },
    methods: {
        _platform: function() {
            this.setData({
                platform: i.systemInfo.platform,
                modelX: i.systemInfo.modelX
            });
        },
        _ss: function() {},
        _moveWidth: function() {
            var t = 112, n = 8, e = 0;
            t /= i.systemInfo.shiftX, n /= i.systemInfo.shiftX;
            var a = this.data.sheetList.length;
            this.data.modelX && (e = 20 / i.systemInfo.shiftX), this.data.slotNumber && this.data.slotNumber > 0 && (a += this.data.slotNumber), 
            this.data.moveWidth = a * t + t + n + e - .1 * a;
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
            var t = this;
            this.animation.translateY(0).step(), this.setData({
                animationT: this.animation.export()
            }), setTimeout(function() {
                t.setData({
                    slotNumber: 0
                });
            }, 200);
        },
        _itemTap: function(i) {
            var n = this;
            this._animationDown(), setTimeout(function() {
                n.triggerEvent("listitem", (0, t.returnE)(i));
            }, 200);
        },
        _itemTapDisabled: function(i) {
            i.miniDisabled = !0, this.triggerEvent("listitem", (0, t.returnE)(i));
        },
        _cancel: function(i) {
            var n = this;
            this._animationDown(), setTimeout(function() {
                n.triggerEvent("cancel", (0, t.returnE)(i));
            }, 200);
        },
        _back: function(i) {
            var n = this;
            this._animationDown(), setTimeout(function() {
                n.triggerEvent("backtap", (0, t.returnE)(i));
            }, 200);
        }
    }
});