function r(r) {
    return r.sort(function(r, t) {
        var e = r.pinyin, s = t.pinyin;
        return e > s ? 1 : e < s ? -1 : 0;
    });
}

function t(r) {
    var t, e, s = [], n = [], i = [];
    for (var u in r) (t = r[u].pinyin[0].toUpperCase()) !== e && (s.push(t), i.length > 0 && n.push(i), 
    i = [], e = t), i.push(r[u]);
    return n.push(i), [ s, n ];
}

var e = new Object();

e.successObj = {}, e.failObj = {}, e.decodeRes = function(e) {
    var s = e.data;
    if ("0" !== s.errcode) return !1;
    var n = t(r(s.data.all_city));
    return this.successObj.cityHeaders = n[0], this.successObj.cityArrs = n[1], !0;
}, module.exports = {
    cityListRequest: e
};