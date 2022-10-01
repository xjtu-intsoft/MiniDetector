var e = require("@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.EditMini = void 0, require("@babel/runtime/helpers/Arrayincludes.js");

var o = e(require("@babel/runtime/helpers/typeof.js")), r = e(require("@babel/runtime/helpers/classCallCheck.js")), n = e(require("@babel/runtime/helpers/createClass.js")), a = e(require("52320AA70691379C345462A0E510E9B3.js")), t = function() {
    function e() {
        (0, r.default)(this, e);
    }
    return (0, n.default)(e, [ {
        key: "defaultCardType",
        value: function() {
            return "TKWhite-NewEmpty";
        }
    }, {
        key: "baseData",
        value: function() {
            return {
                tempType: "common",
                formData: [ [ "name", "姓名", "", "填写真实姓名，商务沟通更加可信", {
                    secure: 1,
                    must: 1,
                    show: 1,
                    icon: "",
                    placeholder: 0
                } ], [ "job", "职位", "", "请填写职位", {
                    secure: 1,
                    must: 1,
                    show: 1,
                    icon: "",
                    placeholder: 0
                } ], [ "company", "公司", "", "填写公司全称或产品名", {
                    secure: 1,
                    must: 1,
                    show: 1,
                    icon: "",
                    placeholder: 0
                } ], [ "mophone1", "手机", "", "填写手机号", {
                    secure: 1,
                    must: 0,
                    show: 1,
                    icon: "add",
                    placeholder: 0
                } ], [ "mophone2", "手机", "", "填写手机号", {
                    secure: 1,
                    must: 0,
                    show: 0,
                    icon: "del",
                    placeholder: 0
                } ], [ "mophone3", "手机", "", "填写手机号", {
                    secure: 1,
                    must: 0,
                    show: 0,
                    icon: "del",
                    placeholder: 0
                } ], [ "wechat", "微信", "", "填写微信号", {
                    secure: 1,
                    must: 0,
                    show: 1,
                    icon: "add",
                    placeholder: 0
                } ], [ "wechat2", "微信", "", "填写微信号", {
                    secure: 1,
                    must: 0,
                    show: 0,
                    icon: "del",
                    placeholder: 0
                } ], [ "wechat3", "微信", "", "填写微信号", {
                    secure: 1,
                    must: 0,
                    show: 0,
                    icon: "del",
                    placeholder: 0
                } ], [ "addr1", "地址", "", "请填写地址", {
                    secure: 1,
                    must: 0,
                    show: 1,
                    icon: "add",
                    placeholder: 0
                } ], [ "addr2", "地址", "", "请填写地址", {
                    secure: 1,
                    must: 0,
                    show: 0,
                    icon: "del",
                    placeholder: 0
                } ], [ "addr3", "地址", "", "请填写地址", {
                    secure: 1,
                    must: 0,
                    show: 0,
                    icon: "del",
                    placeholder: 0
                } ], [ "email1", "邮箱", "", "请填写邮箱", {
                    secure: 1,
                    must: 0,
                    show: 0,
                    icon: "add",
                    placeholder: 0
                } ], [ "email2", "邮箱", "", "请填写邮箱", {
                    secure: 1,
                    must: 0,
                    show: 0,
                    icon: "del",
                    placeholder: 0
                } ], [ "email3", "邮箱", "", "请填写邮箱", {
                    secure: 1,
                    must: 0,
                    show: 0,
                    icon: "del",
                    placeholder: 0
                } ], [ "phone1", "座机", "", "请填写座机", {
                    secure: 1,
                    must: 0,
                    show: 0,
                    icon: "add",
                    placeholder: 0
                } ], [ "phone2", "座机", "", "请填写座机", {
                    secure: 1,
                    must: 0,
                    show: 0,
                    icon: "del",
                    placeholder: 0
                } ], [ "phone3", "座机", "", "请填写座机", {
                    secure: 1,
                    must: 0,
                    show: 0,
                    icon: "del",
                    placeholder: 0
                } ], [ "website", "网址", "", "请填写网址", {
                    secure: 1,
                    must: 0,
                    show: 0,
                    icon: "del",
                    placeholder: 0
                } ], [ "fax", "传真", "", "请填写传真", {
                    secure: 1,
                    must: 0,
                    show: 0,
                    icon: "del",
                    placeholder: 0
                } ], [ "industry", "行业", {
                    industry: "",
                    industry_data: ""
                }, "设置所在行业，达成更多商务合作", {
                    secure: 1,
                    must: 0,
                    show: 1,
                    icon: "del",
                    placeholder: 0
                } ] ],
                avaDefaultName: "morenTouxiang.png",
                itemShowConfig: {
                    mophone1: !0,
                    wechat: !0,
                    addr1: !0
                }
            };
        }
    }, {
        key: "initServerDataFun",
        value: function() {
            return {
                id: "",
                name: "",
                company: "",
                job: "",
                addr1: "",
                addr2: "",
                addr3: "",
                mophone1: "",
                mophone2: "",
                mophone3: "",
                phone1: "",
                phone2: "",
                phone3: "",
                email1: "",
                email2: "",
                email3: "",
                wechat: "",
                wechat2: "",
                wechat3: "",
                website: "",
                remark: "",
                fax: "",
                industry: "",
                industry_data: "",
                userpic: "",
                logo: "",
                bpUrl: "defaultBusiness_20191217.png",
                intro: "",
                desc: [],
                video: [],
                tempName: "",
                title: "",
                englishName: "",
                qq: "",
                dept: "",
                postCode: "",
                offiaccount: "",
                weibo: "",
                showconfig: {
                    custom: [],
                    configShow: {
                        mophone1: !0,
                        wechat: !0,
                        addr1: !0
                    }
                },
                folder: "TEMPLATES_V9",
                createCardFlag: !1,
                customAvatar: "",
                createCardType: ""
            };
        }
    }, {
        key: "serverFun",
        value: function(e, o, r) {
            for (var n = this.initServerDataFun(), a = [], t = 0; t < e.length; t++) "custom" != e[t][0] ? 1 == e[t][4].show && ("industry" == e[t][0] ? n.industry = e[t][2].industry : n[e[t][0]] = e[t][2]) : r[e[t][0] + t] ? a.push([ e[t][1], e[t][2], "true" ]) : a.push([ e[t][1], e[t][2], "false" ]);
            return n.showconfig.custom = a, o && (n.showconfig.configShow = o), n;
        }
    }, {
        key: "serverFunFast",
        value: function(e) {
            for (var o = this.initServerDataFun(), r = 0; r < e.length; r++) o[e[r][0]] = e[r][2];
            return o;
        }
    }, {
        key: "testFun",
        value: function(e, o) {
            for (var r = [], n = 0; n < e.length; n++) r.push(e[n][2]);
            return o && r.push(o), r;
        }
    }, {
        key: "autoFun",
        value: function(e, o) {
            return Math.floor(Math.random() * (o - e + 1) + e);
        }
    }, {
        key: "autoMiniModelFun",
        value: function() {
            var e = this.autoFun(0, a.default.data.length - 1);
            return a.default.data[e];
        }
    }, {
        key: "svgIfFun",
        value: function(e, r, n, a) {
            var t = !1;
            (0, o.default)(e);
            return ("name" == e.n || "company" == e.n || "job" == e.n || "custom" != e.n && r[e.n] || "custom" == e.n && n[e.n + e.i]) && (t = !0), 
            a && "old-charactor" == a.sType && (t = "name" == e.n || "company" == e.n || "job" == e.n || "mophone1" == e.n || "email1" == e.n || "addr1" == e.n || "phone1" == e.n), 
            t;
        }
    }, {
        key: "configAdjuest",
        value: function(e, o) {
            for (var r = Object.keys(e), n = Object.keys(o), a = 0, t = 0; t < r.length; t++) e[r[t]] && a++;
            for (var u = 0; u < n.length; u++) o[n[u]] && a++;
            return console.log("fff", a, e, o), !(a >= 4);
        }
    }, {
        key: "pickFormData",
        value: function(e) {
            return this.baseData().formData.filter(function(o) {
                if (e.includes(o[0])) return o;
            });
        }
    } ]), e;
}();

exports.EditMini = t;