function validator() {
    this.cache = [];
}

function getFromtIDCard(t, r) {
    var e = {}, n = {
        11: "北京",
        12: "天津",
        13: "河北",
        14: "山西",
        15: "内蒙古",
        21: "辽宁",
        22: "吉林",
        23: "黑龙江",
        31: "上海",
        32: "江苏",
        33: "浙江",
        34: "安徽",
        35: "福建",
        36: "江西",
        37: "山东",
        41: "河南",
        42: "湖北",
        43: "湖南",
        44: "广东",
        45: "广西",
        46: "海南",
        50: "重庆",
        51: "四川",
        52: "贵州",
        53: "云南",
        54: "西藏",
        61: "陕西",
        62: "甘肃",
        63: "青海",
        64: "宁夏",
        65: "新疆",
        71: "台湾",
        81: "香港",
        82: "澳门",
        91: "国外"
    }, i = function(t) {
        return !1 !== /(^\d{15}$)|(^\d{17}(\d|X)$)/.test(t);
    }, u = function(t) {
        var r = t.substr(0, 2);
        return void 0 != n[r] && (e.province = {
            key: r,
            value: n[r]
        }, !0);
    }, a = function(t) {
        var r = t.length;
        if (15 === r) {
            var n = /^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/, i = t.match(n), u = i[2], a = i[3], o = i[4], f = "19" + u + "/" + a + "/" + o, c = t.substring(14, 15);
            return e.date = f, e.sex = c % 2 == 0 ? "女" : "男", s("19" + u, a, o, new Date(f));
        }
        if (18 === r) {
            var d = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/, i = t.match(d), u = i[2], a = i[3], o = i[4], f = u + "/" + a + "/" + o, c = t.substring(16, 17);
            return e.date = f, e.sex = c % 2 == 0 ? "女" : "男", s(u, a, o, new Date(f));
        }
        return !1;
    }, s = function(t, r, e, n) {
        var i = new Date(), u = i.getFullYear();
        if (n.getFullYear() === t && n.getMonth() + 1 === r && n.getDate() === e) {
            var a = u - t;
            return a >= 0 && a <= 130;
        }
        return !1;
    }, o = function(t) {
        if (t = f(t), 18 === t.length) {
            var r, e = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2), n = new Array("1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"), i = 0;
            for (r = 0; r < 17; r++) i += t.substr(r, 1) * e[r];
            return +n[i % 11] == +t.substr(17, 1);
        }
        return !1;
    }, f = function(t) {
        if (15 === t.length) {
            var r, e = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2), n = new Array("1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"), i = 0;
            for (t = t.substr(0, 6) + "19" + t.substr(6, t.length - 6), r = 0; r < 17; r++) i += t.substr(r, 1) * e[r];
            return t += n[i % 11];
        }
        return t;
    };
    return !(1 != +t || !function(t) {
        return !1 !== i(t) && (!1 !== u(t) && (!1 !== a(t) && !1 !== o(t)));
    }(r)) && e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), validator.prototype.add = function(t, r) {
    var e = this;
    r.forEach(function(r, n) {
        var i = r.rule.split(":"), u = i.shift(), a = r.errMsg;
        i.unshift(t), i.push(a), e.cache.push(function() {
            if (!strategies[u]) throw "验证规则:" + u + "还没有添加！";
            return strategies[u].apply(e, i);
        });
    });
}, validator.prototype.start = function() {
    for (var t, r, e = 0; t = this.cache[e++]; ) if (r = t()) return r;
};

var strategies = {
    isEmpty: function(t, r) {
        if (!t) return r;
    },
    isNumber: function(t, r) {
        if (isNaN(t) || !t) return r;
    },
    limitName: function(t, r) {
        if (!t.match(/^[a-zA-Z][a-zA-Z0-9_]*$/g)) return r;
    },
    limitMoney: function(t, r) {
        if (!t.match(/^(0|[1-9]\d*)?(\.\d{1,2})?$/g)) return r;
    },
    limitIDCard: function(t, r) {
        if (!getFromtIDCard(1, t)) return r;
    },
    lengthLimit: function(t, r, e) {
        var n = r.split("-"), i = t.length, u = n.length;
        if ({
            1: function() {
                return +i != +n[0];
            },
            2: function() {
                return i < n[0] || i > n[1];
            }
        }[u]()) return e;
    },
    telPhone: function(t, r) {
        if (!/^1[345789]\d{9}$/.test(t)) return r;
    },
    isReg: function isReg(value, reg, errMsg) {
        if (!eval(reg).test(value)) return errMsg;
    },
    isBol: function(t, r) {
        if (!t) return r;
    },
    integer: function(t, r) {
        if (!/^[1-9][0-9]*$/.test(t)) return r;
    }
};

exports.validator = validator, exports.strategies = strategies, exports.getFromtIDCard = getFromtIDCard;