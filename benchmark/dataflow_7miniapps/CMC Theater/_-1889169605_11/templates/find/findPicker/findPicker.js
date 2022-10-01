function e(e) {
    if (e && !(e.length <= 0)) {
        for (var i = [], r = 0; r < e.length; r++) {
            var d = e[r];
            "1" == d.address_type || "3" == d.address_type ? i.push(d.address) : i.push(d.name);
        }
        var n = {
            deliveryds: e,
            rowArr: s("排"),
            lewArr: s("号"),
            firstArr: i,
            indexs: [ 0, 0, 0 ]
        };
        a(n, e[0]), t(n);
    }
}

function a(e, a) {
    e.selectDelivery = a;
    var t = {
        type: v
    };
    "1" == a.address_type || "3" == a.address_type ? (e.secondArr = [], e.thirdArr = [], 
    t.firstPickerWidth = "width100", t.secondPickerWidth = "width0", t.thirdPickerWidth = "width0") : a.tables && a.tables.length > 0 ? (e.secondArr = a.tables, 
    e.thirdArr = [], t.firstPickerWidth = "width60", t.secondPickerWidth = "width40", 
    t.thirdPickerWidth = "width0") : (e.secondArr = e.rowArr, e.thirdArr = e.lewArr, 
    t.firstPickerWidth = "width50", t.secondPickerWidth = "width25", t.thirdPickerWidth = "width25"), 
    m.data.sendServeDelivery.dataDic = e, m.data.sendServeDelivery.pickerTypeDic = t;
}

function t(e) {
    var a = e.indexs, t = e.firstArr[a[0]];
    a[1] >= e.secondArr.length ? a[2] >= e.thirdArr.length ? e.deliveryString = t : e.deliveryString = t + " - " + e.thirdArr[a[2]] : (t = t + " - " + e.secondArr[a[1]], 
    a[2] >= e.thirdArr.length ? e.deliveryString = t : e.deliveryString = t + e.thirdArr[a[2]]), 
    m.delegate.setData({
        sendServeDeliveryData: m.data.sendServeDelivery.dataDic,
        sendServeDeliveryType: m.data.sendServeDelivery.pickerTypeDic,
        sendServeTimeData: m.data.sendServeTime.dataDic
    });
}

function i(e, a) {
    if (e) {
        var t = e.start_time, i = e.end_time, n = e.time_interval;
        if (!(parseInt(n) < 1)) {
            for (var s = t.split(":"), c = i.split(":"), l = parseInt(s[0]) < 6 ? parseInt(s[0]) + 24 : parseInt(s[0]), v = parseInt(c[0]) < 6 ? parseInt(c[0]) + 24 : parseInt(c[0]), D = [], m = l; m <= v; m++) {
                var S = m >= 24 ? m - 24 : m;
                S < 6 ? D.push("0" + S.toFixed(0)) : D.push(S.toFixed(0));
            }
            var h = {};
            l == v ? (h.startArr = d(parseInt(s[1]), parseInt(c[1]), n), h.middleArr = d(parseInt(s[1]), parseInt(c[1]), n), 
            h.endArr = d(parseInt(s[1]), parseInt(c[1]), n)) : v - l == 1 ? (h.startArr = d(parseInt(s[1]), 60, n), 
            h.endArr = d(0, parseInt(c[1]), n)) : (h.startArr = d(parseInt(s[1]), 60, n), h.middleArr = d(0, 60, n), 
            h.endArr = d(0, parseInt(c[1]), n));
            var T = D[0], p = [], f = {
                dateArr: p = T >= 0 && T < 6 ? [ "明天" ] : [ "今天" ],
                hourArr: D,
                minArr: h.startArr,
                minDic: h,
                indexs: a,
                time_setting: e
            };
            return r(f), f;
        }
    }
}

function r(e) {
    var a, t, i = e.indexs;
    if (1 == i.length) {
        var r = e.dateArr[i[0]], d = (a = r.split("-")[0]).split(":")[0];
        a = parseInt(d) >= 0 && parseInt(d) < 6 ? "明天 " + r.split("-")[0] : "今天 " + r.split("-")[0], 
        t = n(e.time_setting.date, parseInt(d) < 6) + " " + r.split("-")[0];
    } else 3 == i.length ? (a = e.dateArr[i[0]] + e.hourArr[i[1]] + " : " + e.minArr[i[2]], 
    t = n(e.time_setting.date, "明天" == e.dateArr[i[0]]) + " " + e.hourArr[i[1]] + ":" + e.minArr[i[2]]) : (a = "", 
    t = "");
    e.timeStr = a, e.buyTimeStr = t;
}

function d(e, a, t) {
    var i = parseInt(t), r = parseInt(60 / i), d = [];
    if (0 == r) return d.push(e.toFixed(0)), d;
    for (var n = 0; n <= r; n++) {
        var s = n * i;
        s >= 60 || s >= e && s <= a && (s < 10 ? d.push("0" + s.toFixed(0)) : d.push(s.toFixed(0)));
    }
    return d.length <= 0 && d.push(e.toFixed(0)), d;
}

function n(e, a) {
    var t = 1e3 * parseInt(e);
    a && (t += 864e5);
    var i = new Date(t), r = parseInt(i.getMonth()) + 1;
    return i.getFullYear() + "-" + r + "-" + i.getDate();
}

function s(e) {
    for (var a = [], t = 1; t <= 50; t++) a.push(parseInt(t).toFixed(0) + e);
    for (t = 0; t < 26; t++) a.push(String.fromCharCode(65 + t) + e);
    return a;
}

function c() {
    var e = m.data.sendServeDelivery.dataDic.selectDelivery, a = l.urls.getDeliveryTime, t = {
        delivery_id: e.id
    };
    t = l.urlParameter(t), l.wxRequest.getRequest(a, t).then(function(a) {
        if (console.log(a), "2" == e.time_type) m.data.sendServeTime.dataDic = i(a.data.data, 3 == m.data.sendServeTime.dataDic.indexs.length ? m.data.sendServeTime.dataDic.indexs : [ 0, 0, 0 ]), 
        m.data.sendServeTime.dataDic.time_type = "2", m.data.sendServeTime.pickerTypeDic = {
            type: D,
            firstPickerWidth: "width40",
            secondPickerWidth: "width20",
            thirdPickerWidth: "width40",
            firstAlign: "align-right",
            secondAlign: "",
            thirdAlign: "align-left"
        }, m.delegate.setData({
            sendServeTimeData: m.data.sendServeTime.dataDic,
            sendServeTimeType: m.data.sendServeTime.pickerTypeDic
        }); else {
            var t = {
                dateArr: a.data.data.times,
                hourArr: [],
                minArr: [],
                indexs: [ 0 ],
                time_setting: {
                    date: a.data.data.date
                }
            };
            m.data.sendServeTime.dataDic = t, m.data.sendServeTime.dataDic.time_type = "1", 
            r(m.data.sendServeTime.dataDic), m.data.sendServeTime.pickerTypeDic = {
                type: D,
                firstPickerWidth: "width100",
                secondPickerWidth: "width0",
                thirdPickerWidth: "width0",
                firstAlign: "align-center",
                secondAlign: "",
                thirdAlign: ""
            }, m.delegate.setData({
                sendServeTimeData: t,
                sendServeTimeType: m.data.sendServeTime.pickerTypeDic
            });
        }
        m.delegate.setDeliveryTime();
    }).finally(function() {});
}

var l = getApp().urlService, v = "sendServeAdressPicker", D = "sendServeTimePicker", m = new Object();

m.setDelegate = function(e, a) {
    e && (m.delegate = e, m.clear(), m.initializeData(a));
}, m.clear = function() {
    m.data = {
        takeSelfTime: {
            dataDic: {
                indexs: [ 0, 0, 0 ]
            }
        },
        sendServeDelivery: {},
        sendServeTime: {
            dataDic: {
                timeStr: "请选择",
                indexs: [ 0, 0, 0 ]
            }
        }
    };
}, m.initializeData = function(a) {
    m.data.takeSelfTime.dataDic = i(a.time_setting, m.data.takeSelfTime.dataDic.indexs), 
    m.data.takeSelfTime.pickerTypeDic = {
        type: "takeSelfPicker",
        firstPickerWidth: "width40",
        secondPickerWidth: "width20",
        thirdPickerWidth: "width40",
        firstAlign: "align-right",
        secondAlign: "",
        thirdAlign: "align-left"
    }, m.delegate.setData({
        takeSelfTimeData: m.data.takeSelfTime.dataDic,
        takeSelfTimeType: m.data.takeSelfTime.pickerTypeDic,
        sendServeTimeData: m.data.sendServeTime.dataDic
    }), console.log(a.deliveryds), e(a.deliveryds);
}, m.clickTakeServiceTime = function() {
    console.log("请求送餐时间滚轮数据"), c();
}, m.firstPickerChange = function(e) {
    var i = e.currentTarget.dataset.type, d = e.detail.value;
    switch (i) {
      case "takeSelfPicker":
        break;

      case v:
        a(m.data.sendServeDelivery.dataDic, m.data.sendServeDelivery.dataDic.deliveryds[d[0]]), 
        m.data.sendServeTime.dataDic.timeStr = "请选择", m.data.sendServeDelivery.dataDic.indexs[0] = d[0], 
        t(m.data.sendServeDelivery.dataDic);
        break;

      case D:
        if ("2" == m.data.sendServeTime.dataDic.time_type) return;
        m.data.sendServeTime.dataDic.indexs[0] = d[0], r(m.data.sendServeTime.dataDic), 
        m.delegate.setData({
            sendServeTimeData: m.data.sendServeTime.dataDic
        });
    }
}, m.secondPickerChange = function(e) {
    var a = e.currentTarget.dataset.type, i = e.detail.value;
    switch (a) {
      case "takeSelfPicker":
        d = parseInt(m.data.takeSelfTime.dataDic.hourArr[i[0]]);
        m.data.takeSelfTime.dataDic.dateArr = d >= 0 && d < 6 ? [ "明天" ] : [ "今天" ], 0 == i[0] ? m.data.takeSelfTime.dataDic.minArr = m.data.takeSelfTime.dataDic.minDic.startArr : i[0] < m.data.takeSelfTime.dataDic.hourArr.length - 1 ? m.data.takeSelfTime.dataDic.minArr = m.data.takeSelfTime.dataDic.minDic.middleArr : m.data.takeSelfTime.dataDic.minArr = m.data.takeSelfTime.dataDic.minDic.endArr, 
        m.data.takeSelfTime.dataDic.indexs[1] = i[0], r(m.data.takeSelfTime.dataDic), m.delegate.setData({
            takeSelfTimeData: m.data.takeSelfTime.dataDic
        });
        break;

      case v:
        m.data.sendServeDelivery.dataDic.indexs[1] = i[0], t(m.data.sendServeDelivery.dataDic);
        break;

      case D:
        if (console.log(m.data.sendServeTime.dataDic), "1" == m.data.sendServeTime.dataDic.time_type) return;
        var d = parseInt(m.data.sendServeTime.dataDic.hourArr[i[0]]);
        m.data.sendServeTime.dataDic.dateArr = d >= 0 && d < 6 ? [ "明天" ] : [ "今天" ], 0 == i[0] ? m.data.sendServeTime.dataDic.minArr = m.data.sendServeTime.dataDic.minDic.startArr : i[0] < m.data.sendServeTime.dataDic.hourArr.length - 1 ? m.data.sendServeTime.dataDic.minArr = m.data.sendServeTime.dataDic.minDic.middleArr : m.data.sendServeTime.dataDic.minArr = m.data.sendServeTime.dataDic.minDic.endArr, 
        m.data.sendServeTime.dataDic.indexs[1] = i[0], r(m.data.sendServeTime.dataDic), 
        m.delegate.setData({
            sendServeTimeData: m.data.sendServeTime.dataDic
        });
    }
}, m.thirdPickerChange = function(e) {
    var a = e.currentTarget.dataset.type;
    console.log(a);
    var i = e.detail.value;
    switch (a) {
      case "takeSelfPicker":
        m.data.takeSelfTime.dataDic.indexs[2] = i[0], r(m.data.takeSelfTime.dataDic), m.delegate.setData({
            takeSelfTimeData: m.data.takeSelfTime.dataDic
        });
        break;

      case v:
        m.data.sendServeDelivery.dataDic.indexs[2] = i[0], t(m.data.sendServeDelivery.dataDic);
        break;

      case D:
        if ("1" == m.data.sendServeTime.dataDic.time_type) return;
        m.data.sendServeTime.dataDic.indexs[2] = i[0], r(m.data.sendServeTime.dataDic), 
        m.delegate.setData({
            sendServeTimeData: m.data.sendServeTime.dataDic
        });
    }
}, module.exports = m;