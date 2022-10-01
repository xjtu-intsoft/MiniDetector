var t, a = require("@babel/runtime/helpers/interopRequireDefault.js")(require("@babel/runtime/helpers/defineProperty.js")), s = getApp(), i = null;

module.exports = Behavior({
    behaviors: [],
    data: (t = {
        endtime: "",
        iosMoveIn: "",
        startPosi: "",
        startPosiY: "",
        movePosi: "",
        movePosiY: "",
        movewidth: 132 / s.systemInfo.shiftX,
        animationios: "",
        scroy: "",
        aaa: ""
    }, (0, a.default)(t, "endtime", ""), (0, a.default)(t, "androidlongtap", ""), t),
    methods: {
        animationInit: function() {
            i = wx.createAnimation({
                duration: 300,
                timingFunction: "ease"
            });
        },
        iosstart: function(t) {
            this.data.endtime = "true", this.data.startPosi = t.touches[0].pageX, this.data.startPosiY = t.touches[0].pageY, 
            this.setData({
                delopengid: t.currentTarget.dataset.openGid,
                delind: t.currentTarget.dataset.i
            }), console.log("iosstart执行");
        },
        iosmove: function(t) {
            console.log("iosmove执行move"), this.data.movePosi = t.touches[0].pageX, this.data.movePosiY = t.touches[0].pageY, 
            this.data.startPosi - this.data.movePosi >= 15 && this.data.movePosiY - this.data.startPosiY <= 4 && this.data.movePosiY - this.data.startPosiY >= -4 ? (this.data.iosMoveIn = !0, 
            i.translateX(-this.data.movewidth).step(), this.setData({
                animationios: i.export(),
                scroy: !1
            }), i.translateX(0).step(), this.setData({
                aaa: i.export()
            })) : this.data.startPosi - this.data.movePosi <= 15 ? (this.data.iosMoveIn = !1, 
            i.translateX(0).step(), this.setData({
                animationios: i.export(),
                scroy: !0
            })) : this.data.scroy || this.setData({
                scroy: !0
            }), this.data.startPosi - this.data.movePosi <= 15 && this.data.startPosi - this.data.movePosi >= -15 && (this.setData({
                endtime: "false",
                androidlongtap: ";"
            }), clearTimeout(this.data.timer));
        },
        iosend: function(t) {
            this.data.movePosi = void 0, this.data.endtime = "false", this.data.scroy || this.setData({
                scroy: !0
            });
        }
    }
});