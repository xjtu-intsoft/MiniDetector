var e = function(e) {
    return (e = e.toString())[1] ? e : "0" + e;
};

module.exports = {
    formatTime: function(t) {
        var n = t.getFullYear(), r = t.getMonth() + 1, a = t.getDate(), u = t.getHours(), o = t.getMinutes(), l = t.getSeconds();
        return [ n, r, a ].map(e).join("/") + " " + [ u, o, l ].map(e).join(":");
    },
    throttle: function(e, t) {
        null != t && null != t || (t = 1500);
        var n = null;
        return function() {
            var r = +new Date();
            (r - n > t || !n) && (e.apply(this, arguments), n = r);
        };
    },
    getMonthWeek: function(e, t, n) {
        var r = new Date(e, parseInt(t) - 1, n), a = r.getDay(), u = r.getDate();
        return Math.ceil((u + 6 - a) / 7);
    },
    getYearNumber: function(e, t, n) {
        var r = new Date(e, parseInt(t) - 1, n), a = new Date(e, 0, 1), u = Math.round((r.valueOf() - a.valueOf()) / 864e5);
        return Math.ceil((u + (a.getDay() + 1 - 1)) / 7);
    },
    currentdayInyear: function() {
        var e = new Date().getFullYear().toString(), t = new Date() - new Date(e), n = Math.ceil(t / 864e5) + 1;
        return console.log("今天是%s年中的第%s天", e, n), n;
    }
};