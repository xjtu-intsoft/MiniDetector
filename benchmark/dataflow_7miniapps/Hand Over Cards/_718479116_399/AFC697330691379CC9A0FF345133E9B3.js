var e = require("@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.wxRequest = void 0;

var t = e(require("@babel/runtime/helpers/classCallCheck.js")), r = e(require("@babel/runtime/helpers/createClass.js")), a = e(require("@babel/runtime/helpers/possibleConstructorReturn.js")), u = e(require("@babel/runtime/helpers/getPrototypeOf.js")), l = e(require("@babel/runtime/helpers/inherits.js"));

function n() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
        !0;
    } catch (e) {
        return !1;
    }
}

var i = function(e) {
    (0, l.default)(o, e);
    var i, c = (i = o, function() {
        var e, t = (0, u.default)(i);
        if (n()) {
            var r = (0, u.default)(this).constructor;
            e = Reflect.construct(t, arguments, r);
        } else e = t.apply(this, arguments);
        return (0, a.default)(this, e);
    });
    function o() {
        return (0, t.default)(this, o), c.call(this);
    }
    return (0, r.default)(o, [ {
        key: "requestUrl",
        value: function(e, t, r, a) {
            var u = {
                url: e.url,
                data: e.data ? e.data : "",
                method: e.method ? e.method : "GET",
                extra: e.extra ? e.extra : "",
                sCallback: function(e) {
                    t && t(e);
                },
                fCallback: function(e) {
                    r && r(e);
                },
                cCallback: function(e) {
                    a && a(e);
                }
            };
            this.request(u);
        }
    }, {
        key: "upldUrl",
        value: function(e, t, r, a) {
            var u = {
                url: e.url,
                data: e.data ? e.data : {},
                filePath: e.filePath,
                sCallback: function(e) {
                    t && t(e);
                },
                fCallback: function(e) {
                    r && r(e);
                },
                cCallback: function(e) {
                    a && a(e);
                }
            };
            this.upload(u);
        }
    }, {
        key: "errLogFun",
        value: function(e) {
            var t = {
                data: e
            };
            this.errLog(t);
        }
    }, {
        key: "experiment",
        value: function(e, t, r, a) {
            var u = {
                url: e.url,
                data: !!e.data && e.data,
                method: e.method ? e.method : "GET",
                header: e.header ? e.header : {},
                sCallback: function(e) {
                    t && t(e);
                },
                fCallback: function(e) {
                    r && r(e);
                },
                cCallback: function(e) {
                    a && a(e);
                }
            };
            this.experimentRequest(u);
        }
    } ]), o;
}(require("25DD3FD70691379C43BB57D049D1E9B3.js").Base);

exports.wxRequest = i;