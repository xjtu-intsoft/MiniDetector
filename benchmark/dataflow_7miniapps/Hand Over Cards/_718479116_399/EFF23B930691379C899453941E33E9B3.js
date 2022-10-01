Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = "mycard", r = require("5F520E160691379C39346611585FD9B3.js").default.env;

"dev" == r ? e = "mycard_dev" : "test" == r ? e = "mycard_test" : "pre" == r ? e = "mycard_pre" : "production" == r && (e = "mycard");

var t = {
    storageName: e
};

exports.default = t;