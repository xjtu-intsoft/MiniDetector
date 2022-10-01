function dateformat() {}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = dateformat, dateformat.format = function(t, e) {
    var a = {
        "M+": t.getMonth() + 1,
        "d+": t.getDate(),
        "h+": t.getHours(),
        "m+": t.getMinutes(),
        "s+": t.getSeconds(),
        "q+": Math.floor((t.getMonth() + 3) / 3),
        S: t.getMilliseconds()
    };
    this.isNotEmpty(e) || (e = "yyyy-MM-dd hh:mm:ss"), /(y+)/.test(e) && (e = e.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length)));
    for (var r in a) new RegExp("(" + r + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? a[r] : ("00" + a[r]).substr(("" + a[r]).length)));
    return e;
}, dateformat.formatToDate = function(t) {
    return this.isNotEmpty(t) ? new Date(Date.parse(t.replace(/-/g, "/"))) : "";
}, dateformat.getDateStart = function(t) {
    var e = this.getDateStartStr(t, "yyyy-MM-dd");
    return new Date(Date.parse(e));
}, dateformat.getDateStartStr = function(t, e) {
    void 0 === e && (e = "yyyy-MM-dd");
    var a = this.format(t, e);
    return a += " 00:00:00";
}, dateformat.getDateEnd = function(t) {
    var e = this.getDateEndStr(t, "yyyy-MM-dd");
    return new Date(Date.parse(e));
}, dateformat.getDateEndStr = function(t, e) {
    void 0 === e && (e = "yyyy-MM-dd");
    var a = this.format(t, e);
    return a += " 23:59:59";
}, dateformat.compareDate = function(t, e) {
    if (t && e) {
        if (t.getTime() > e.getTime()) return 1;
        if (t.getTime() == e.getTime()) return 0;
        if (t.getTime() < e.getTime()) return -1;
    }
}, dateformat.isLeapYear = function(t) {
    return t instanceof Date ? 0 == t.getYear() % 4 && (t.getYear() % 100 != 0 || t.getYear() % 400 == 0) : (console.warn("argument format is wrong"), 
    !1);
}, dateformat.isValidDate = function(t) {
    if (this.isNotEmpty(t)) {
        var e = t.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
        if (null == e) return !1;
        var a = new Date(e[1], e[3] - 1, e[4]);
        return 0 != +(a.getFullYear() == e[1] && a.getMonth() + 1 == e[3] && a.getDate() == e[4]);
    }
}, dateformat.addDay = function(t, e) {
    return this.isNotEmpty(t) && this.isNotEmpty(e) && t instanceof Date && "number" == typeof e ? t.setDate(t.getDate() + e) : console.warn("date or dayNum format wrong"), 
    t;
}, dateformat.addDayStr = function(t, e) {
    var a = "";
    return this.isNotEmpty(t) && this.isNotEmpty(e) && "number" == typeof e ? (a = this.formatToDate(t), 
    a.setDate(a.getDate() + e)) : console.warn("dateStr or dayNum format wrong"), a;
}, dateformat.addMonth = function(t, e) {
    return this.isNotEmpty(t) && this.isNotEmpty(e) && t instanceof Date && "number" == typeof e ? t.setMonth(t.getMonth() + e) : console.warn("date or monthNum format wrong"), 
    t;
}, dateformat.addMonthStr = function(t, e) {
    var a = "";
    return this.isNotEmpty(t) && this.isNotEmpty(e) && "number" == typeof e ? (a = this.formatToDate(t), 
    a.setMonth(a.getMonth() + e)) : console.warn("date or monthNum format wrong"), a;
}, dateformat.addYear = function(t, e) {
    return this.isNotEmpty(t) && this.isNotEmpty(e) && t instanceof Date && "number" == typeof e ? t.setYear(t.getFullYear() + e) : console.warn("date or yearNum format wrong"), 
    t;
}, dateformat.addYearStr = function(t, e) {
    var a = "";
    return this.isNotEmpty(t) && this.isNotEmpty(e) && "number" == typeof e ? (a = this.formatToDate(t), 
    a.setYear(a.getFullYear() + e)) : console.warn("date or yearNum format wrong"), 
    a;
}, dateformat.isNotEmpty = function(t) {
    return "" !== t && null !== t && void 0 !== t || (console.warn("argument format is wrong"), 
    !1);
}, dateformat.getWeek = function(t, e) {
    if (t) {
        this.isNotEmpty(e) || (e = 0);
        var a = t.getDay(), r = "";
        switch (e) {
          case this.WEEKTYPE.ZH_DAYNAME:
            r = this._options.ZH.dayNames[a];
            break;

          case this.WEEKTYPE.ZH_SDAYNAME:
            r = this._options.ZH.shortDayNames[a];
            break;

          case this.WEEKTYPE.US_DAYNAME:
            r = this._options.US.dayNames[a];
            break;

          case this.WEEKTYPE.US_SDAYNAME:
            r = this._options.US.shortDayNames[a];
        }
        return r;
    }
}, dateformat.WEEKTYPE = {
    ZH_DAYNAME: 0,
    ZH_SDAYNAME: 1,
    US_DAYNAME: 2,
    US_SDAYNAME: 3
}, dateformat._options = {
    ZH: {
        dayNames: [ "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ],
        shortDayNames: [ "周日", "周一", "周二", "周三", "周四", "周五", "周六" ],
        monthNames: [ "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月" ],
        shortMonthNames: [ "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月" ]
    },
    US: {
        dayNames: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
        shortDayNames: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
        monthNames: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
        shortMonthNames: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
    }
};