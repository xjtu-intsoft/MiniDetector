function r(r) {
    return r ? r.replace(/\s+/g, "") : r;
}

var t = new Object();

t.trimStr = function(t) {
    return r(t);
}, t.addSpaceEveryFour = function(r, t) {
    return r.replace(/(.{4})/g, "$1 ");
}, t.priceFormat = function(r) {
    var t = r.split(".");
    if (t.length <= 1) return r;
    var e = t[1];
    return e.length >= 2 ? "0" == (e = e.substr(0, 2)).substr(1, 2) && 0 == (e = e.substr(0, 1)) ? t[0] : t[0] + "." + e : 0 == e ? t[0] : t[0] + "." + e;
}, module.exports = t;