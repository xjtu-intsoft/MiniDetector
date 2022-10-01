function e(e, t) {
    console.log("choseCityName =" + t);
    for (var r in e) {
        var s = e[r];
        s.distance = a(parseFloat(s.lat), parseFloat(s.lng), t);
    }
    for (var c = 0; c < e.length - 1; c++) for (var i = 0; i < e.length - 1 - c; i++) {
        var n = e[i], o = e[i + 1];
        if (parseFloat(n.distance) > parseFloat(o.distance) || 0 == parseFloat(n.distance)) {
            var l = e.splice(i + 1, 1);
            e.splice(i, 0, l[0]);
        }
    }
}

var a = require("../util/locationUtil.js").getFlatternDistance, t = new Object();

t.successObj = {}, t.failObj = {}, t.decryCinemaList = e, t.decodeRes = function(a, t) {
    var r = a.data;
    if ("0" !== r.errcode) return !1;
    var s = r.data.cinema_data;
    return console.log("影院列表返回，解析数据decodeRes"), e(s, t), this.successObj.cinemaArr = s, 
    !0;
}, module.exports = {
    cinemaListRequest: t
};