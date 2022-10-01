require("../../../@babel/runtime/helpers/Arrayincludes");

var t = getApp();

Component({
    properties: {
        introValue: String,
        introTest: {
            value: !1,
            type: Boolean,
            observer: function(t) {
                this.setData({
                    testFail: t
                });
            }
        }
    },
    data: {
        areaShow: !1,
        areaFocus: !1,
        testFail: !1
    },
    methods: {
        _textAreaForce: function() {
            var e = this;
            getCurrentPages()[getCurrentPages().length - 1].route.includes("ocrEdit/ocrEdit") && t.burying.setPoint(t, 227), 
            this.setData({
                areaShow: !0
            }), setTimeout(function() {
                e.setData({
                    areaFocus: !0
                });
            }, 200);
        },
        _input: function(t) {
            this.data.introValue = t.detail.value, this.data.testFail && this.setData({
                testFail: !1
            }), this.triggerEvent("introFun", this.data.introValue);
        },
        _blur: function(t) {
            this.setData({
                areaShow: !1,
                introValue: this.data.introValue
            });
        }
    }
});