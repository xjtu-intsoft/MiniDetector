var e = require("@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Burying = void 0;

var t = e(require("@babel/runtime/helpers/classCallCheck.js")), r = e(require("@babel/runtime/helpers/createClass.js")), n = require("317BC7770691379C571DAF700C91E9B3.js"), s = function() {
    function e() {
        (0, t.default)(this, e);
    }
    return (0, r.default)(e, [ {
        key: "setPoint",
        value: function(e, t, r) {
            var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "ButtonClick";
            334 == t && (n.POINTMAP[t].ButtonTitle = "打开问题" + r.index), 409 == t && (n.POINTMAP[t].ButtonTitle = r), 
            458 == t && (n.POINTMAP[t].ButtonTitle = r), n.POINTMAP[t] ? e.sensorsData({
                event: s,
                params: {
                    data: n.POINTMAP[t],
                    index: t
                }
            }) : console.log("按钮埋点已废弃,埋点编号:", t);
        }
    }, {
        key: "setSensorEvent",
        value: function(e, t, r) {
            e.sensorsData({
                event: r,
                params: t
            });
        }
    } ]), e;
}();

exports.Burying = s;