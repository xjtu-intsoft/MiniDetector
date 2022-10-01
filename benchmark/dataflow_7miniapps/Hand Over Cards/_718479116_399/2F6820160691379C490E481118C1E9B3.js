var e = require("@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Abtest = void 0;

var t = e(require("@babel/runtime/helpers/classCallCheck.js")), s = e(require("@babel/runtime/helpers/createClass.js")), n = function() {
    function e(s, n, u, r) {
        (0, t.default)(this, e), this.testNum = "A", this.testName = "ABT_0019", this.wxRequestIn = s, 
        this.token = n, this.sensors = u, this.gloabelOptions = r;
    }
    return (0, s.default)(e, [ {
        key: "setABTest",
        value: function(e) {
            var t = this;
            this.getABtestNode(this.wxRequestIn, this.token).then(function(s) {
                s[t.testName] && (t.testNum = s[t.testName]), t.setLaunchABtest(t.sensors, t.gloabelOptions, t.testNum, t.testName), 
                e && e(s);
            }).catch(function(s) {
                t.setLaunchABtest(t.sensors, t.gloabelOptions, t.testNum, t.testName), e && e(s);
            });
        }
    }, {
        key: "getABtestNode",
        value: function(e, t) {
            return new Promise(function(s, n) {
                e.requestUrl({
                    url: "abTest",
                    header: {
                        token: t
                    }
                }, s, n);
            });
        }
    }, {
        key: "setLaunchABtest",
        value: function(e, t, s, n) {
            e.quick("appLaunch", t, {
                ABTestGourpInfo: "".concat(n, "_").concat(s)
            });
        }
    } ]), e;
}();

exports.Abtest = n;