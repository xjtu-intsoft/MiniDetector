var e = require("@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.BuildPForm = void 0;

var a = e(require("@babel/runtime/helpers/classCallCheck.js")), t = e(require("@babel/runtime/helpers/createClass.js")), r = function() {
    function e() {
        (0, a.default)(this, e), this.initData = {}, this.buildData = {
            form: {
                form: [],
                alter: []
            },
            hengshu: "heng",
            id: 1,
            userpic: !1
        };
    }
    return (0, t.default)(e, [ {
        key: "buildForm",
        value: function(e, a) {
            var t = this;
            this.initData = e, !e || Object.keys(e).length <= 0 ? this.disposeNull(function() {
                a && a(t.buildData);
            }) : this.disposeData(function() {
                a && a(t.buildData);
            });
        }
    }, {
        key: "disposeNull",
        value: function(e) {
            this.buildData = {
                form: {
                    form: [ [ "name", "姓名", "" ], [ "company", "公司/单位", "" ], [ "job", "部门/职务", "" ], [ "mophone1", "手机", "" ], [ "addr1", "地址", "" ] ],
                    alter: [ {
                        mark: "mophone",
                        item: [ "mophone2", "mophone3" ],
                        name: "手机"
                    }, {
                        mark: "email",
                        item: [ "email1", "email2" ],
                        name: "邮箱"
                    }, {
                        mark: "phone",
                        item: [ "phone1", "phone2", "phone3" ],
                        name: "电话"
                    }, {
                        mark: "addr",
                        item: [ "addr2", "addr3" ],
                        name: "地址"
                    }, {
                        mark: "website",
                        item: [ "website" ],
                        name: "网址"
                    }, {
                        mark: "wechat",
                        item: [ "wechat" ],
                        name: "微信"
                    }, {
                        mark: "fax",
                        item: [ "fax" ],
                        name: "传真"
                    }, {
                        mark: "remark",
                        item: [ "remark" ],
                        name: "其他"
                    } ]
                },
                hengshu: "heng",
                id: 11,
                userpic: !1
            }, e && e();
        }
    }, {
        key: "disposeData",
        value: function(e) {
            this.buildData.form.form = this.form(), this.buildData.form.alter = this.alter(), 
            this.initData.hengshu && (this.buildData.hengshu = this.initData.hengshu), this.initData.id && (this.buildData.id = this.initData.id), 
            this.initData.userpic && (this.buildData.userpic = this.initData.userpic), e && e();
        }
    }, {
        key: "form",
        value: function() {
            for (var e = [], a = this.baseItem(), t = 0; t < a.length; t++) (a[t].maybe || this.initData[a[t].after]) && e.push([ a[t].front, a[t].name, this.initData[a[t].after] ? this.initData[a[t].after] : "" ]);
            return e;
        }
    }, {
        key: "alter",
        value: function() {
            for (var e, a, t = {}, r = this.baseItem(), n = {}, i = [ "mophone", "email", "phone", "addr", "website", "wechat", "fax", "remark" ], m = [], o = 0; o < r.length; o++) if (e = this.initData[r[o].after], 
            n = {
                mark: "",
                item: [],
                name: ""
            }, !r[o].maybe && !e) for (var f = 0; f < i.length; f++) if (r[o].after.indexOf(i[f]) >= 0) {
                t[i[f]] ? t[i[f]].item.push(r[o].front) : (n.mark = i[f], n.item.push(r[o].front), 
                n.name = r[o].name, t[i[f]] = n);
                break;
            }
            a = Object.keys(t);
            for (o = 0; o < a.length; o++) m.push(t[a[o]]);
            return m;
        }
    }, {
        key: "baseItem",
        value: function() {
            return [ {
                front: "name",
                after: "name",
                maybe: !0,
                name: "姓名"
            }, {
                front: "company",
                after: "company",
                maybe: !0,
                name: "公司/单位"
            }, {
                front: "job",
                after: "job",
                maybe: !0,
                name: "部门/职务"
            }, {
                front: "mophone1",
                after: "mophone1",
                maybe: !0,
                name: "手机"
            }, {
                front: "mophone2",
                after: "mophone2",
                maybe: !1,
                name: "手机"
            }, {
                front: "mophone3",
                after: "mophone3",
                maybe: !1,
                name: "手机"
            }, {
                front: "email1",
                after: "email1",
                maybe: !1,
                name: "邮箱"
            }, {
                front: "email2",
                after: "email2",
                maybe: !1,
                name: "邮箱"
            }, {
                front: "phone1",
                after: "phone1",
                maybe: !1,
                name: "电话"
            }, {
                front: "phone2",
                after: "phone2",
                maybe: !1,
                name: "电话"
            }, {
                front: "phone3",
                after: "phone3",
                maybe: !1,
                name: "电话"
            }, {
                front: "addr1",
                after: "addr1",
                maybe: !0,
                name: "地址"
            }, {
                front: "addr2",
                after: "addr2",
                maybe: !1,
                name: "地址"
            }, {
                front: "addr3",
                after: "addr3",
                maybe: !1,
                name: "地址"
            }, {
                front: "wechat",
                after: "wechat",
                maybe: !1,
                name: "微信"
            }, {
                front: "website",
                after: "website",
                maybe: !1,
                name: "网址"
            }, {
                front: "fax",
                after: "fax",
                maybe: !1,
                name: "传真"
            }, {
                front: "remark",
                after: "remark",
                maybe: !1,
                name: "其他"
            } ];
        }
    } ]), e;
}();

exports.BuildPForm = r;