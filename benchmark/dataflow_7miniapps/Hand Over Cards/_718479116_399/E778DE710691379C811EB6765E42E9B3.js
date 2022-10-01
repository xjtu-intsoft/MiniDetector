var e = require("@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ExperimentFormEdit = void 0;

var t, r = e(require("@babel/runtime/helpers/classCallCheck.js")), n = e(require("@babel/runtime/helpers/createClass.js")), a = new (require("AFC697330691379CC9A0FF345133E9B3.js").wxRequest)(), s = function() {
    function e() {
        (0, r.default)(this, e);
    }
    return (0, n.default)(e, [ {
        key: "addLogTime",
        value: function() {
            function e(e) {
                return e < 10 ? "0" + e : e;
            }
            return new Date().getFullYear() + "-" + e(new Date().getMonth() + 1) + "-" + e(new Date().getDate()) + " " + e(new Date().getHours()) + ":" + e(new Date().getMinutes()) + ":" + e(new Date().getSeconds());
        }
    }, {
        key: "timeAdjest",
        value: function() {
            var e = this.addLogTime(), r = t.clientMessage.newvst;
            return !r || !((e = new Date(e).getTime()) - new Date(r.added_at).getTime() > 648e5);
        }
    }, {
        key: "customerAdjest",
        value: function() {
            var e, r = this.addLogTime(), n = t.clientMessage.newvst;
            return !n || (e = n.added_at, r.split(" ")[0] == e.split(" ")[0]);
        }
    }, {
        key: "categoryFun",
        value: function() {
            var e = "E";
            try {
                if (this.customerAdjest()) switch (t.clientMessage.crc32 % 4) {
                  case 0:
                    e = "A";
                    break;

                  case 1:
                    e = "B";
                    break;

                  case 2:
                    e = "C";
                    break;

                  case 3:
                    e = "D";
                }
            } catch (e) {}
            return e;
        }
    }, {
        key: "documentData",
        value: function(e) {
            var r = this;
            if (t = getApp(), !this.timeAdjest()) return 0;
            var n = this.categoryFun(), s = "";
            s = "update_time" == e.updateKey ? "ctx._source." + e.updateKey + " = params.time" : "ctx._source.update_time = params.time;ctx._source." + e.updateKey + " = true", 
            a.experiment({
                url: "accountsform/person/" + t.clientOpenid + "/_update",
                method: "POST",
                header: {
                    user: "wyk",
                    password: "youknowforsearch"
                },
                data: {
                    script: {
                        inline: s,
                        lang: "painless",
                        params: {
                            time: this.addLogTime()
                        }
                    },
                    upsert: {
                        openid: t.clientOpenid,
                        client_message: t.clientMessage.newvst,
                        created_time: t.clientMessage.newvst ? t.clientMessage.newvst.created_at : this.addLogTime(),
                        first_time: this.addLogTime(),
                        update_time: this.addLogTime(),
                        form_show: "form_show" == e.updateKey,
                        form_save: !1,
                        category: n
                    }
                }
            }, function(e) {
                "updated" != e.result || t.experimentCon.formEdit.req ? "created" == e.result && (t.experimentCon.formEdit.status = n, 
                t.experimentCon.formEdit.req = !0) : r.getDocument();
            });
        }
    }, {
        key: "deleteDocument",
        value: function(e) {
            t = getApp(), a.experiment({
                url: "accountsform",
                header: {
                    user: "wyk",
                    password: "youknowforsearch"
                },
                method: "DELETE"
            }, function(e) {});
        }
    }, {
        key: "deleteDocumentId",
        value: function(e) {
            t = getApp(), a.experiment({
                url: "accountsform/person/" + t.clientOpenid,
                header: {
                    user: "wyk",
                    password: "youknowforsearch"
                },
                method: "DELETE"
            }, function(e) {});
        }
    }, {
        key: "getDocument",
        value: function(e) {
            t = getApp(), a.experiment({
                url: "accountsform/person/" + t.clientOpenid,
                header: {
                    user: "wyk",
                    password: "youknowforsearch"
                },
                method: "GET"
            }, function(e) {
                t.experimentCon.formEdit.status = e._source.category, t.experimentCon.formEdit.req = !0;
                try {
                    wx.setStorageSync("experimentFormEdit", {
                        status: e._source.category,
                        req: !0
                    });
                } catch (e) {}
            });
        }
    }, {
        key: "searchDocument",
        value: function(e) {
            a.experiment({
                url: "accountsform/person/_search",
                header: {
                    user: "wyk",
                    password: "youknowforsearch"
                },
                method: "GET"
            }, function(e) {});
        }
    } ]), e;
}();

exports.ExperimentFormEdit = s;