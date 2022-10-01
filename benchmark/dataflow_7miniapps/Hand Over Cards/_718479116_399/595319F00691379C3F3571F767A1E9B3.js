var t = require("@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = t(require("@babel/runtime/helpers/defineProperty.js"));

function a(t, e) {
    var a = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e && (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), a.push.apply(a, r);
    }
    return a;
}

var r = {
    data: function(t) {
        for (var r = 1; r < arguments.length; r++) {
            var o = null != arguments[r] ? arguments[r] : {};
            r % 2 ? a(Object(o), !0).forEach(function(a) {
                (0, e.default)(t, a, o[a]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : a(Object(o)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
            });
        }
        return t;
    }({}, t(require("E7A690C50691379C81C0F8C2B6B1E9B3.js")).default),
    _pick: function(t, e) {
        var a = {};
        return e.map(function(e) {
            a[e] = t[e];
        }), a;
    },
    webSvgData: function() {
        var t = this._pick(this.data.cbData, [ "bpUrl", "name", "company", "job", "phone1", "mophone1", "mophone2", "email1", "addr1", "wechat", "fax", "website", "showconfig", "phone2", "phone3", "mophone2", "mophone3", "email2", "email3", "addr2", "addr3", "wechat2", "wechat3", "title", "englishName", "qq", "dept", "postCode", "offiaccount", "weibo" ]);
        for (var e in t) t[e] = null === t[e] ? "" : t[e];
        return t.tempName = this.data.tempName, t;
    },
    createWebData: function() {
        var t = this._pick(this.data.cbData, [ "id", "customAvatar", "intro", "desc", "video", "userpic", "name", "company", "job", "phone1", "phone2", "phone3", "mophone1", "mophone2", "mophone3", "email1", "email2", "email3", "addr1", "addr2", "addr3", "wechat", "wechat2", "wechat3", "fax", "website", "showconfig", "webCustomList", "title", "englishName", "qq", "dept", "postCode", "offiaccount", "weibo" ]);
        return t.userpic = t.userpic && t.userpic.name, t.tempName = this.data.tempName, 
        t.customAvatar = t.customAvatar && t.customAvatar.name, t;
    },
    formDataGet: function() {
        var t = this, e = this.data.initData.formData.form;
        return e && e.forEach(function(e) {
            e[2] = t.data.cbData[e[0]] ? t.data.cbData[e[0]] : "";
        }), e;
    },
    autoFillImg: function() {
        var t = this.data.cbData.showconfig.configShow || {}, e = (this.data.cbData.showconfig.custom || []).filter(function(t) {
            return "true" == t[2];
        });
        return Object.keys(t).length + e.length < 4;
    },
    getShowNum: function() {
        var t = this.data.cbData.showconfig.configShow || {}, e = 0, a = (this.data.cbData.showconfig.custom || []).filter(function(t) {
            return "true" == t[2];
        });
        for (var r in t) t[r] && this.data.cbData[r] && e++;
        return e + a.length || 0;
    },
    initSetting: function() {}
};

exports.default = r;