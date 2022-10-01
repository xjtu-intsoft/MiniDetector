var t = getApp();

Component({
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
        }
    },
    lifetimes: {
        attached: function() {
            console.log("attached");
        }
    },
    data: {
        animation: "",
        platform: t.systemInfo.platform
    },
    methods: {
        _ss: function() {},
        _moveWidth: function() {
            var i = 112, a = 8;
            i /= t.systemInfo.shiftX, a /= t.systemInfo.shiftX;
            var n = this.data.sheetList.length;
            this.data.slotNumber && this.data.slotNumber > 0 && (n += this.data.slotNumber), 
            this.data.moveWidth = n * i + a;
        },
        _initAnimation: function() {
            this.animation = wx.createAnimation({
                duration: 200,
                timingFunction: "ease"
            });
        },
        _animationUp: function() {
            var t = this;
            this.animation.translateY(-this.data.moveWidth).step();
            setTimeout(function() {
                t.setData({
                    animationT: t.animation.export()
                });
            }, 100);
        },
        _animationDown: function() {
            this.animation.translateY(0).step();
            var t = this;
            this.setData({
                animationT: this.animation.export()
            }), setTimeout(function() {
                t.setData({
                    slotNumber: 0
                });
            }, 200);
        },
        _itemTap: function(t) {
            var i = this;
            this._animationDown(), setTimeout(function() {
                i.triggerEvent("itemTap", t.currentTarget.dataset.i);
            }, 200);
        },
        _back: function() {
            var t = this;
            this._animationDown(), setTimeout(function() {
                t.triggerEvent("backTap");
            }, 200);
        }
    }
});