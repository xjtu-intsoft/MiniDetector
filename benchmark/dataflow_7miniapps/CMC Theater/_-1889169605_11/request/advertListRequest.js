var e = new Object();

e.decodeRes = function(t) {
    e.successObj = {}, e.failObj = {};
    var s = t.data;
    if ("0" !== s.errcode) return !1;
    var r = s.data;
    return this.successObj.advertListData = r, !0;
}, module.exports = {
    advertListRequest: e
};