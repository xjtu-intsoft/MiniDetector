function a(a) {
    var e = a.coordinate.split(",");
    a.lng = e[0], a.lat = e[1];
    var n = [];
    a.address.length && n.push({
        image: "../../../images/cinemaDetail/yingyuanxiangqing_icon_dizhi.png",
        desc: a.address,
        arrowimage: "test",
        bindtap: "goCinemaMap"
    });
    var i = "";
    a.bus_line.length && (i += "公交 : " + a.bus_line + "\n"), a.subway.length && (i += "地铁 : " + a.subway + "\n"), 
    a.car.length && (i += "驾车 : " + a.car + "\n"), i.length && n.push({
        image: "../../../images/cinemaDetail/yingyuanxiangqing_icon_luxian.png",
        desc: i,
        arrowimage: "test",
        bindtap: "clickRoadlineCell"
    }), a.baseInfo = n;
}

var e = new Object();

e.successObj = {}, e.failObj = {}, e.decodeRes = function(e) {
    var n = e.data;
    if ("0" !== n.errcode) return !1;
    var i = n.data.cinema_data;
    return a(i), this.successObj.cinemaDetailData = i, !0;
}, module.exports = {
    cinemaDetailRequest: e
};