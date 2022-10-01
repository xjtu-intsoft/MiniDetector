var e = new Object();

e.decodeRes = function(s) {
    e.successObj = {}, e.failObj = {};
    var r = s.data;
    if ("0" !== r.errcode) return this.failObj = {
        isError: !0,
        errcode: r.errcode,
        msg: r.msg
    }, !1;
    var t = r.data;
    return this.successObj.userData = t, !0;
}, module.exports = {
    sendMessageRequest: e
};