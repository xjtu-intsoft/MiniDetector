var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../@babel/runtime/helpers/defineProperty")), r = e(require("../../6E935FA60691379C08F537A12FF1E9B3.js"));

function i(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t && (i = i.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, i);
    }
    return r;
}

function n(e) {
    for (var r = 1; r < arguments.length; r++) {
        var n = null != arguments[r] ? arguments[r] : {};
        r % 2 ? i(Object(n), !0).forEach(function(r) {
            (0, t.default)(e, r, n[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
}

var a = getApp();

Component({
    behaviors: [],
    properties: {
        canvasCheck: {
            type: Boolean,
            value: !1,
            observer: function(e, t) {
                console.log("canvasCheck", e, t), e && this.buildAnimation();
            }
        },
        pageOrigin: {
            type: String
        }
    },
    data: n({}, r.default.data, {
        isBuildShow: !1,
        buildSucImg: a.source.buildSuc,
        showCircle: !0
    }),
    lifetimes: {},
    methods: n({}, r.default.options, {
        buildAnimation: function() {
            var e, t, r = this;
            this.animation = wx.createAnimation({
                duration: 800,
                timingFunction: "ease"
            }), this.draw("runCanvasS", 100, 300, this), clearTimeout(e), clearTimeout(t), e = setTimeout(function() {
                r.animation.translateX(144 / a.systemInfo.shiftX).step(), r.setData({
                    cmShadeAni: r.animation.export()
                }), r.animation.translateX(0).opacity(1).step(), r.setData({
                    starShow: r.animation
                }), t = setTimeout(function() {
                    r.setData({
                        showCircle: !1
                    });
                }, 300);
            }, 450);
        }
    })
});