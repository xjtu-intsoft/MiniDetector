function t(t) {
    return t * u / 180;
}

var e = require("./wxApi"), i = require("./wxRequest"), a = "https://apis.map.qq.com/ws/geocoder/v1/?l&get_poi=1", n = "T7FBZ-ZG3K4-M4OUJ-X7PWM-76EBS-2NBPD", o = 0, c = 0, r = new Object();

r.locationResult = !1, r.cityName = "", r.address = "", r.locationTime = 0;

var s = 6378.137, u = Math.PI;

module.exports = {
    getLocation: function(t) {
        var s = e.wxPromisify(wx.getLocation), u = new Date().getTime();
        return new Promise(function(e, l) {
            u <= r.locationTime + 3e5 && 1 == r.locationResult && 0 == t ? e(r) : s({
                type: "wgs84"
            }).then(function(t) {
                o = t.latitude, c = t.longitude;
                var e = t.latitude + "," + t.longitude, r = {
                    key: n,
                    location: e
                };
                return i.getRequest(a, r);
            }).catch(function(t) {
                r.locationResult = !1, r.cityName = "定位失败", r.address = "定位失败", e(r);
            }).then(function(t) {
                console.log("定位结果数据未处理：", t), r.locationResult = !0, r.cityName = t.data.result.ad_info.city, 
                r.address = t.data.result.address, r.locationTime = new Date().getTime(), e(r);
            }).catch(function(t) {
                r.locationResult = !1, r.cityName = "定位失败", r.address = "定位失败", e(r);
            });
        });
    },
    getFlatternDistance: function(e, i, a) {
        if (console.log("定位城市：" + r.cityName + " 当前选择城市" + a), 0 == o && 0 == c) return 0;
        if (-1 == r.cityName.indexOf(a) && -1 == a.indexOf(r.cityName)) return 0;
        var n, u, l, d, m = t((o + e) / 2), f = t((o - e) / 2), g = t((c - i) / 2), h = Math.sin(f), y = Math.sin(g), w = Math.sin(m), M = s;
        return n = (h *= h) * (1 - (y *= y)) + (1 - (w *= w)) * y, u = (1 - h) * (1 - y) + w * y, 
        (2 * (l = Math.atan(Math.sqrt(n / u))) * M * (1 + 1 / 298.257 * ((3 * (d = Math.sqrt(n * u) / l) - 1) / 2 / u * w * (1 - h) - (3 * d + 1) / 2 / n * (1 - w) * h))).toFixed(1);
    }
};