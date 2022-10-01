var e = require("@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.CardMainEditAll = void 0;

var a = e(require("@babel/runtime/helpers/classCallCheck.js")), r = e(require("@babel/runtime/helpers/createClass.js")), t = (getApp(), 
function() {
    function e() {
        (0, a.default)(this, e);
    }
    return (0, r.default)(e, [ {
        key: "switchPlaceholder",
        value: function() {
            return {
                name: "请输入您的名字",
                company: "请输入公司/单位名称",
                job: "请输入部门/职务名称",
                mophone1: "请输入手机号",
                mophone2: "请输入手机号",
                mophone3: "请输入手机号",
                phone1: "请输入电话号码",
                phone2: "请输入电话号码",
                phone3: "请输入电话号码",
                email1: "请输入邮箱",
                email2: "请输入邮箱",
                addr1: "请输入地址",
                addr2: "请输入地址",
                addr3: "请输入地址",
                fax: "请输入传真",
                wechat: "请输入微信号",
                website: "请输入网址"
            };
        }
    }, {
        key: "pickerChange",
        value: function(e, a, r) {
            var t = e.detail.value, i = a[t], l = {};
            l.push = [ i.item[0], i.name, "" ], l.name = i.name, i.item.length > 1 ? a[t].item.splice(0, 1) : a.splice(t, 1), 
            l.desc = a, r && r(l);
        }
    } ]), e;
}());

exports.CardMainEditAll = t;