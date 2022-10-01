module.exports = {
    formatDate: function(t) {
        var n = t.getFullYear(), r = t.getMonth() + 1, e = t.getDate(), o = t.getHours(), a = t.getMinutes(), u = t.getSeconds();
        return [ n, r, e ].map(formatNumber).join("/") + " " + [ o, a, u ].map(formatNumber).join(":");
    },
    formatDate2: function(t, n) {
        try {
            if (!t) return console.log("日期错误=====date=" + t), "";
            t = (t += "").replace(/-/g, "/");
            var r = new Date(t), e = r.getFullYear(), o = r.getMonth() + 1, a = r.getDate(), u = r.getHours(), i = r.getMinutes(), g = r.getSeconds();
            return "yyyy/MM/dd HH:mm" == n ? [ e, o, a ].map(function(t) {
                return (t = t.toString())[1] ? t : "0" + t;
            }).join("/") + " " + [ u, i ].map(function(t) {
                return (t = t.toString())[1] ? t : "0" + t;
            }).join(":") : "yyyy年MM月dd日" == n ? [ e ].map(function(t) {
                return (t = t.toString()) + "年";
            }) + [ o ].map(function(t) {
                return (t = t.toString())[1] ? t + "月" : "0" + t + "月";
            }) + [ a ].map(function(t) {
                return (t = t.toString())[1] ? t + "日" : "0" + t + "日";
            }) : "yyyy.MM.dd" == n ? [ e ].map(function(t) {
                return (t = t.toString()) + ".";
            }) + [ o ].map(function(t) {
                return (t = t.toString())[1] ? t + "." : "0" + t + ".";
            }) + [ a ].map(function(t) {
                return (t = t.toString())[1] ? t : "0" + t;
            }) : [ e, o, a ].map(formatNumber).join("/") + " " + [ u, i, g ].map(formatNumber).join(":");
        } catch (n) {
            return console.log(n), t;
        }
    },
    formatTime: function(t) {
        if ("number" != typeof t || t < 0) return t;
        var n = parseInt(t / 3600);
        return t %= 3600, [ n, parseInt(t / 60), t %= 60 ].map(function(t) {
            return (t = t.toString())[1] ? t : "0" + t;
        }).join(":");
    },
    formatDateShort: function(t) {
        if (!t) return console.log("日期错误=====date=" + t), "";
        t = (t += "").replace(/-/g, "/");
        var n = new Date(t);
        console.log("date = " + n);
        n.getFullYear();
        var r = n.getMonth() + 1, e = n.getDate(), o = n.getHours(), a = n.getMinutes();
        try {
            return [ r ].map(function(t) {
                return (t = t.toString())[1] ? t + "月" : "0" + t + "月";
            }) + [ e ].map(function(t) {
                return (t = t.toString())[1] ? t + "日" : "0" + t + "日";
            }) + " " + [ o, a ].map(function(t) {
                return (t = t.toString())[1] ? t : "0" + t;
            }).join(":");
        } catch (t) {
            console.log(t);
        }
        return t;
    },
    formatLocation: function(t, n) {
        return "string" == typeof t && "string" == typeof n && (t = parseFloat(t), n = parseFloat(n)), 
        t = t.toFixed(2), n = n.toFixed(2), {
            longitude: t.toString().split("."),
            latitude: n.toString().split(".")
        };
    },
    compareDate: function(t) {
        return "星 期 " + "日一二三四五六".charAt(new Date(t).getDay());
    },
    formatDatelong: function(t) {
        if (!t) return console.log("日期错误=====date=" + t), "";
        t = (t += "").replace(/-/g, "/");
        var n = new Date(t), r = n.getFullYear(), e = n.getMonth() + 1, o = n.getDate(), a = n.getHours(), u = n.getMinutes();
        try {
            return [ r ].map(function(t) {
                return (t = t.toString()) + "年";
            }) + [ e ].map(function(t) {
                return (t = t.toString())[1] ? t + "月" : "0" + t + "月";
            }) + [ o ].map(function(t) {
                return (t = t.toString())[1] ? t + "日" : "0" + t + "日";
            }) + " " + [ a, u ].map(function(t) {
                return (t = t.toString())[1] ? t : "0" + t;
            }).join(":");
        } catch (t) {}
        return t;
    }
};