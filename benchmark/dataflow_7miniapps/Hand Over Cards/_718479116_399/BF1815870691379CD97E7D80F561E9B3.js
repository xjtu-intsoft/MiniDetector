var e = require("@babel/runtime/helpers/interopRequireDefault.js")(require("@babel/runtime/helpers/typeof.js")), t = {}, r = {
    para: {
        name: "sensors",
        server_url: "",
        send_timeout: 1e3,
        use_client_time: !1,
        show_log: !0,
        allow_amend_share_path: !0,
        max_string_length: 300,
        datasend_timeout: 3e3,
        autoTrack: {
            appLaunch: !0,
            appShow: !0,
            appHide: !0,
            pageShow: !0,
            pageShare: !0
        }
    }
}, n = "object" == (0, e.default)(n) ? n : {};

n.info = function() {
    if (r.para.show_log && "object" == ("undefined" == typeof console ? "undefined" : (0, 
    e.default)(console)) && console.log) try {
        return console.log.apply(console, arguments);
    } catch (e) {
        console.log(arguments[0]);
    }
}, r.setPara = function(i) {
    r.para = t.extend2Lev(r.para, i), t.isObject(r.para.register) && t.extend(t.info.properties, r.para.register), 
    r.para.openid_url || (r.para.openid_url = r.para.server_url.replace(/([^\/])\/(sa)(\.gif){0,1}/, "$1/mp_login")), 
    "number" != typeof r.para.send_timeout && (r.para.send_timeout = 1e3);
    var a = {
        send_timeout: 6e3,
        max_length: 6
    };
    !0 === r.para.batch_send ? (r.para.batch_send = t.extend({}, a), r.para.use_client_time = !0) : "object" == (0, 
    e.default)(r.para.batch_send) && (r.para.use_client_time = !0, r.para.batch_send = t.extend({}, a, r.para.batch_send)), 
    r.para.server_url || n.info("请使用 setPara() 方法设置 server_url 数据接收地址,详情可查看https://www.sensorsdata.cn/manual/mp_sdk_new.html#112-%E5%BC%95%E5%85%A5%E5%B9%B6%E9%85%8D%E7%BD%AE%E5%8F%82%E6%95%B0");
}, r.status = {};

var i = Array.prototype, a = Function.prototype, s = Object.prototype, o = i.slice, c = s.toString, u = s.hasOwnProperty, p = "utm_source utm_medium utm_campaign utm_content utm_term", f = {
    1001: "发现栏小程序主入口，“最近使用”列表",
    1005: "顶部搜索框的搜索结果页",
    1006: "发现栏小程序主入口搜索框的搜索结果页",
    1007: "单人聊天会话中的小程序消息卡片",
    1008: "群聊会话中的小程序消息卡片",
    1011: "扫描二维码",
    1012: "长按图片识别二维码",
    1013: "手机相册选取二维码",
    1014: "小程序模版消息",
    1017: "前往体验版的入口页",
    1019: "微信钱包",
    1020: "公众号 profile 页相关小程序列表",
    1022: "聊天顶部置顶小程序入口",
    1023: "安卓系统桌面图标",
    1024: "小程序 profile 页",
    1025: "扫描一维码",
    1026: "附近小程序列表",
    1027: "顶部搜索框搜索结果页“使用过的小程序”列表",
    1028: "我的卡包",
    1029: "卡券详情页",
    1030: "自动化测试下打开小程序",
    1031: "长按图片识别一维码",
    1032: "手机相册选取一维码",
    1034: "微信支付完成页",
    1035: "公众号自定义菜单",
    1036: "App 分享消息卡片",
    1037: "小程序打开小程序",
    1038: "从另一个小程序返回",
    1039: "摇电视",
    1042: "添加好友搜索框的搜索结果页",
    1043: "公众号模板消息",
    1044: "带 shareTicket 的小程序消息卡片（详情)",
    1045: "朋友圈广告",
    1046: "朋友圈广告详情页",
    1047: "扫描小程序码",
    1048: "长按图片识别小程序码",
    1049: "手机相册选取小程序码",
    1052: "卡券的适用门店列表",
    1053: "搜一搜的结果页",
    1054: "顶部搜索框小程序快捷入口",
    1056: "音乐播放器菜单",
    1057: "钱包中的银行卡详情页",
    1058: "公众号文章",
    1059: "体验版小程序绑定邀请页",
    1064: "微信连Wi-Fi状态栏",
    1067: "公众号文章广告",
    1068: "附近小程序列表广告",
    1069: "移动应用",
    1071: "钱包中的银行卡列表页",
    1072: "二维码收款页面",
    1073: "客服消息列表下发的小程序消息卡片",
    1074: "公众号会话下发的小程序消息卡片",
    1077: "摇周边",
    1078: "连Wi-Fi成功页",
    1079: "微信游戏中心",
    1081: "客服消息下发的文字链",
    1082: "公众号会话下发的文字链",
    1084: "朋友圈广告原生页",
    1089: "微信聊天主界面下拉",
    1090: "长按小程序右上角菜单唤出最近使用历史",
    1091: "公众号文章商品卡片",
    1092: "城市服务入口",
    1095: "小程序广告组件",
    1096: "聊天记录",
    1097: "微信支付签约页",
    1099: "页面内嵌插件",
    1102: "公众号 profile 页服务预览",
    1103: "发现栏小程序主入口，“我的小程序”列表",
    1104: "微信聊天主界面下拉，“我的小程序”栏",
    1129: "微信爬虫访问"
}, h = "直接打开";

r.status.referrer = "直接打开";

var d = null, l = 0, g = "", m = !1;

function _(e, n, i) {
    var a = r.autoTrackCustom[i];
    if (e[n]) {
        var s = e[n];
        e[n] = function() {
            "onLaunch" === n && (this[r.para.name] = r), !r.para.autoTrackIsFirst || t.isObject(r.para.autoTrackIsFirst) && !r.para.autoTrackIsFirst[i] ? (s.apply(this, arguments), 
            a.apply(this, arguments)) : (!0 === r.para.autoTrackIsFirst || t.isObject(r.para.autoTrackIsFirst) && r.para.autoTrackIsFirst[i]) && (a.apply(this, arguments), 
            s.apply(this, arguments));
        };
    } else e[n] = function() {
        "onLaunch" === n && (this[r.para.name] = r), a.apply(this, arguments);
    };
}

r.lib_version = "1.13.4", function() {
    a.bind;
    var e = i.forEach, r = i.indexOf, s = Array.isArray, p = {}, f = t.each = function(t, r, n) {
        if (null == t) return !1;
        if (e && t.forEach === e) t.forEach(r, n); else if (t.length === +t.length) {
            for (var i = 0, a = t.length; i < a; i++) if (i in t && r.call(n, t[i], i, t) === p) return !1;
        } else for (var s in t) if (u.call(t, s) && r.call(n, t[s], s, t) === p) return !1;
    };
    t.logger = n, t.extend = function(e) {
        return f(o.call(arguments, 1), function(t) {
            for (var r in t) void 0 !== t[r] && (e[r] = t[r]);
        }), e;
    }, t.extend2Lev = function(e) {
        return f(o.call(arguments, 1), function(r) {
            for (var n in r) void 0 !== r[n] && (t.isObject(r[n]) && t.isObject(e[n]) ? t.extend(e[n], r[n]) : e[n] = r[n]);
        }), e;
    }, t.coverExtend = function(e) {
        return f(o.call(arguments, 1), function(t) {
            for (var r in t) void 0 !== t[r] && void 0 === e[r] && (e[r] = t[r]);
        }), e;
    }, t.isArray = s || function(e) {
        return "[object Array]" === c.call(e);
    }, t.isFunction = function(e) {
        try {
            return /^\s*\bfunction\b/.test(e);
        } catch (e) {
            return !1;
        }
    }, t.isArguments = function(e) {
        return !(!e || !u.call(e, "callee"));
    }, t.toArray = function(e) {
        return e ? e.toArray ? e.toArray() : t.isArray(e) || t.isArguments(e) ? o.call(e) : t.values(e) : [];
    }, t.values = function(e) {
        var t = [];
        return null == e || f(e, function(e) {
            t[t.length] = e;
        }), t;
    }, t.include = function(e, t) {
        var n = !1;
        return null == e ? n : r && e.indexOf === r ? -1 != e.indexOf(t) : (f(e, function(e) {
            if (n || (n = e === t)) return p;
        }), n);
    };
}(), t.trim = function(e) {
    return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
}, t.isObject = function(e) {
    return null != e && "[object Object]" == c.call(e);
}, t.isEmptyObject = function(e) {
    if (t.isObject(e)) {
        for (var r in e) if (u.call(e, r)) return !1;
        return !0;
    }
    return !1;
}, t.isUndefined = function(e) {
    return void 0 === e;
}, t.isString = function(e) {
    return "[object String]" == c.call(e);
}, t.isDate = function(e) {
    return "[object Date]" == c.call(e);
}, t.isBoolean = function(e) {
    return "[object Boolean]" == c.call(e);
}, t.isNumber = function(e) {
    return "[object Number]" == c.call(e) && /[\d\.]+/.test(String(e));
}, t.isJSONString = function(e) {
    try {
        JSON.parse(e);
    } catch (e) {
        return !1;
    }
    return !0;
}, t.decodeURIComponent = function(e) {
    var t = "";
    try {
        t = decodeURIComponent(e);
    } catch (r) {
        t = e;
    }
    return t;
}, t.encodeDates = function(e) {
    return t.each(e, function(r, n) {
        t.isDate(r) ? e[n] = t.formatDate(r) : t.isObject(r) && (e[n] = t.encodeDates(r));
    }), e;
}, t.formatDate = function(e) {
    function t(e) {
        return e < 10 ? "0" + e : e;
    }
    return e.getFullYear() + "-" + t(e.getMonth() + 1) + "-" + t(e.getDate()) + " " + t(e.getHours()) + ":" + t(e.getMinutes()) + ":" + t(e.getSeconds()) + "." + t(e.getMilliseconds());
}, t.searchObjDate = function(e) {
    t.isObject(e) && t.each(e, function(r, n) {
        t.isObject(r) ? t.searchObjDate(e[n]) : t.isDate(r) && (e[n] = t.formatDate(r));
    });
}, t.formatString = function(e) {
    return e.length > r.para.max_string_length ? (n.info("字符串长度超过限制，已经做截取--" + e), e.slice(0, r.para.max_string_length)) : e;
}, t.searchObjString = function(e) {
    t.isObject(e) && t.each(e, function(r, n) {
        t.isObject(r) ? t.searchObjString(e[n]) : t.isString(r) && (e[n] = t.formatString(r));
    });
}, t.unique = function(e) {
    for (var t, r = [], n = {}, i = 0; i < e.length; i++) (t = e[i]) in n || (n[t] = !0, 
    r.push(t));
    return r;
}, t.strip_sa_properties = function(e) {
    return t.isObject(e) ? (t.each(e, function(r, i) {
        if (t.isArray(r)) {
            var a = [];
            t.each(r, function(e) {
                t.isString(e) ? a.push(e) : n.info("您的数据-", r, "的数组里的值必须是字符串,已经将其删除");
            }), 0 !== a.length ? e[i] = a : (delete e[i], n.info("已经删除空的数组"));
        }
        t.isString(r) || t.isNumber(r) || t.isDate(r) || t.isBoolean(r) || t.isArray(r) || (n.info("您的数据-", r, "-格式不满足要求，我们已经将其删除"), 
        delete e[i]);
    }), e) : e;
}, t.strip_empty_properties = function(e) {
    var r = {};
    return t.each(e, function(e, t) {
        null != e && (r[t] = e);
    }), r;
}, t.utf8Encode = function(e) {
    var t, r, n, i, a = "";
    for (t = r = 0, n = (e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, 
    i = 0; i < n; i++) {
        var s = e.charCodeAt(i), o = null;
        s < 128 ? r++ : o = s > 127 && s < 2048 ? String.fromCharCode(s >> 6 | 192, 63 & s | 128) : String.fromCharCode(s >> 12 | 224, s >> 6 & 63 | 128, 63 & s | 128), 
        null !== o && (r > t && (a += e.substring(t, r)), a += o, t = r = i + 1);
    }
    return r > t && (a += e.substring(t, e.length)), a;
}, t.base64Encode = function(e) {
    var r, n, i, a, s, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", c = 0, u = 0, p = "", f = [];
    if (!e) return e;
    e = t.utf8Encode(e);
    do {
        r = (s = e.charCodeAt(c++) << 16 | e.charCodeAt(c++) << 8 | e.charCodeAt(c++)) >> 18 & 63, 
        n = s >> 12 & 63, i = s >> 6 & 63, a = 63 & s, f[u++] = o.charAt(r) + o.charAt(n) + o.charAt(i) + o.charAt(a);
    } while (c < e.length);
    switch (p = f.join(""), e.length % 3) {
      case 1:
        p = p.slice(0, -2) + "==";
        break;

      case 2:
        p = p.slice(0, -1) + "=";
    }
    return p;
}, t.getCurrentPath = function() {
    var e = "未取到";
    try {
        var t = getCurrentPages();
        e = t[t.length - 1].route;
    } catch (e) {
        n.info(e);
    }
    return e;
}, t.getCurrentUrl = function(e) {
    var r = t.getCurrentPath(), n = "";
    return t.isObject(e) && e.sensors_mp_url_query && (n = e.sensors_mp_url_query), 
    r ? n ? r + "?" + n : r : "未取到";
}, t.getPath = function(e) {
    return "string" == typeof e ? e.replace(/^\//, "") : "取值异常";
}, t.getQueryParam = function(e, r) {
    var n = new RegExp("[\\?&]" + r + "=([^&#]*)").exec(e);
    return null === n || n && "string" != typeof n[1] && n[1].length ? "" : t.decodeURIComponent(n[1]);
}, r.initialState = {
    queue: [],
    isComplete: !1,
    systemIsComplete: !1,
    storeIsComplete: !1,
    checkIsComplete: function() {
        this.systemIsComplete && this.storeIsComplete && (this.isComplete = !0, this.queue.length > 0 && (t.each(this.queue, function(e) {
            r[e[0]].apply(r, o.call(e[1]));
        }), r.queue = []));
    }
}, t.getPrefixUtm = function(e, r, n) {
    if (r = r || "", n = n || "_", !t.isObject(e)) return {};
    var i = {}, a = {};
    for (var s in e) -1 !== (" " + p + " ").indexOf(" " + s + " ") ? i[r + s] = e[s] : a[n + s] = e[s];
    return {
        $utms: i,
        otherUtms: a
    };
}, t.convertObjToParam = function(e) {
    var t = [];
    for (var r in e) t.push(r + "=" + e[r]);
    return t.join("&");
}, t.getSource = function(e) {
    if (t.isObject(e)) {
        if (t.isEmptyObject(e)) return {};
        for (var n in e) -1 === (" " + p + " ").indexOf(" " + n + " ") ? delete e[n] : e[n] = e[n].replace("?", "*");
        e = "?" + (e = t.convertObjToParam(e));
    } else e = t.decodeURIComponent(e);
    var i = p.split(" "), a = p.split(" "), s = "", o = {};
    return 2 !== (e = e.split("?")).length ? {} : (e = "?" + (e = e[1]), t.isArray(r.para.source_channel) && r.para.source_channel.length > 0 && (a = a.concat(r.para.source_channel), 
    a = t.unique(a)), t.each(a, function(r) {
        s = t.getQueryParam(e, r), (s = t.decodeURIComponent(s)).length && t.include(i, r) && (o[r] = s);
    }), o);
}, t.getObjFromQuery = function(e) {
    var r = e.split("?"), n = {};
    return r && r[1] ? (t.each(r[1].split("&"), function(e) {
        var t = e.split("=");
        t[0] && t[1] && (n[t[0]] = t[1]);
    }), n) : {};
}, t.setStorageSync = function(e, t) {
    var r = function() {
        wx.setStorageSync(e, t);
    };
    try {
        r();
    } catch (e) {
        try {
            r();
        } catch (e) {
            n.info("setStorage fail");
        }
    }
}, t.getStorageSync = function(e) {
    var t = "";
    try {
        t = wx.getStorageSync(e);
    } catch (r) {
        try {
            t = wx.getStorageSync(e);
        } catch (e) {
            n.info("getStorage fail");
        }
    }
    return t;
}, t.getUtm = function(e, r, n) {
    var i = t.getSource(e);
    return void 0 === n && r ? {
        pre1: t.getPrefixUtm(i, r).$utms || {},
        pre2: {}
    } : void 0 !== n && r ? {
        pre1: t.getPrefixUtm(i, r).$utms || {},
        pre2: t.getPrefixUtm(i, n).$utms || {}
    } : {
        pre1: {},
        pre2: {}
    };
}, t.getMPScene = function(e) {
    return "number" == typeof e || "string" == typeof e && "" !== e ? (e = String(e), 
    f[e] || e) : "未取到值";
}, t.getShareDepth = function() {
    if ("number" == typeof l && 0 !== l) {
        var e = r.store.getDistinctId(), t = r.store.getFirstId();
        return !g || g !== e && g !== t ? l + 1 : l;
    }
    return 1;
}, t.setShareInfo = function(e, r) {
    var n = {};
    if (!(e && t.isObject(e.query) && e.query.sampshare)) return {};
    if (n = t.decodeURIComponent(e.query.sampshare), !t.isJSONString(n)) return {};
    var i = (n = JSON.parse(n)).d, a = n.p, s = n.i;
    "string" == typeof s ? (r.$share_distinct_id = s, g = s) : r.$share_distinct_id = "取值异常", 
    "number" == typeof i ? (r.$share_depth = i, l = i) : r.$share_depth = "-1", r.$share_url_path = "string" == typeof a ? a : "取值异常";
}, t.getShareInfo = function() {
    return JSON.stringify({
        i: r.store.getDistinctId() || "取值异常",
        p: t.getCurrentPath(),
        d: t.getShareDepth()
    });
}, t.setUtm = function(e, r) {
    var n = {};
    if (e && t.isObject(e.query)) {
        var i = (n = t.extend({}, e.query)).scene;
        i && (i = -1 !== (i = t.decodeURIComponent(i)).indexOf("?") ? "?" + i.replace(/\?/g, "") : "?" + i, 
        t.extend(n, t.getObjFromQuery(i))), e.query.q && t.extend(n, t.getObjFromQuery(t.decodeURIComponent(e.query.q)));
    }
    if (e && t.isObject(e.referrerInfo) && e.referrerInfo.extraData) {
        var a = {};
        t.isObject(e.referrerInfo.extraData) && !t.isEmptyObject(e.referrerInfo.extraData) ? a = e.referrerInfo.extraData : t.isJSONString(e.referrerInfo.extraData) && (a = JSON.parse(e.referrerInfo.extraData)), 
        t.extend(n, a);
    }
    var s = t.getUtm(n, "$", "$latest_");
    return t.extend(r, s.pre1), s;
}, t.wxrequest = function(e) {
    var n = wx.request(e);
    setTimeout(function() {
        t.isObject(n) && t.isFunction(n.abort) && n.abort();
    }, r.para.datasend_timeout);
}, t.info = {
    currentProps: {},
    properties: {
        $lib: "MiniProgram",
        $lib_version: String("1.13.4")
    },
    getSystem: function() {
        var e = this.properties;
        wx.getNetworkType({
            success: function(t) {
                e.$network_type = t.networkType;
            },
            complete: function() {
                wx.getSystemInfo({
                    success: function(t) {
                        e.$manufacturer = t.brand, e.$model = t.model, e.$screen_width = Number(t.screenWidth), 
                        e.$screen_height = Number(t.screenHeight), e.$os = t.system.split(" ")[0], e.$os_version = t.system.split(" ")[1];
                    },
                    complete: function() {
                        r.initialState.systemIsComplete = !0, r.initialState.checkIsComplete();
                    }
                });
            }
        });
    }
}, r._ = t, r.prepareData = function(i, a) {
    var s = {
        distinct_id: this.store.getDistinctId(),
        lib: {
            $lib: "MiniProgram",
            $lib_method: "code",
            $lib_version: String("1.13.4")
        },
        properties: {}
    };
    t.extend(s, i), t.isObject(i.properties) && !t.isEmptyObject(i.properties) && t.extend(s.properties, i.properties), 
    i.type && "profile" === i.type.slice(0, 7) || (r.para.batch_send && (s._track_id = Number(String(Math.random()).slice(2, 5) + String(Math.random()).slice(2, 4) + String(Date.now()).slice(-4))), 
    s.properties = t.extend({}, t.info.properties, r.store.getProps(), t.info.currentProps, s.properties), 
    "object" == (0, e.default)(r.store._state) && "number" == typeof r.store._state.first_visit_day_time && r.store._state.first_visit_day_time > new Date().getTime() ? s.properties.$is_first_day = !0 : s.properties.$is_first_day = !1), 
    s.properties.$time && t.isDate(s.properties.$time) ? (s.time = 1 * s.properties.$time, 
    delete s.properties.$time) : r.para.use_client_time && (s.time = 1 * new Date()), 
    t.searchObjDate(s), t.searchObjString(s), n.info(s), r.sendStrategy.send(s);
}, r.store = {
    verifyDistinctId: function(e) {
        return "number" == typeof e && (e = String(e), /^\d+$/.test(e) || (e = "unexpected_id")), 
        "string" == typeof e && "" !== e || (e = "unexpected_id"), e;
    },
    storageInfo: null,
    getUUID: function() {
        return Date.now() + "-" + Math.floor(1e7 * Math.random()) + "-" + Math.random().toString(16).replace(".", "") + "-" + String(31242 * Math.random()).replace(".", "").slice(0, 8);
    },
    getStorage: function() {
        return this.storageInfo || (this.storageInfo = r._.getStorageSync("sensorsdata2015_wechat") || ""), 
        this.storageInfo;
    },
    _state: {},
    mem: {
        mdata: [],
        getLength: function() {
            return this.mdata.length;
        },
        add: function(e) {
            this.mdata.push(e);
        },
        clear: function(e) {
            this.mdata.splice(0, e);
        }
    },
    toState: function(e) {
        var r = null;
        t.isJSONString(e) ? (r = JSON.parse(e)).distinct_id ? this._state = r : this.set("distinct_id", this.getUUID()) : t.isObject(e) && (r = e).distinct_id ? this._state = r : this.set("distinct_id", this.getUUID());
    },
    getFirstId: function() {
        return this._state.first_id;
    },
    getDistinctId: function() {
        return this._state.distinct_id;
    },
    getProps: function() {
        return this._state.props || {};
    },
    setProps: function(e, r) {
        var n = this._state.props || {};
        r ? this.set("props", e) : (t.extend(n, e), this.set("props", n));
    },
    set: function(t, r) {
        var n = {};
        for (var i in "string" == typeof t ? n[t] = r : "object" == (0, e.default)(t) && (n = t), 
        this._state = this._state || {}, n) this._state[i] = n[i];
        this.save();
    },
    change: function(e, t) {
        this._state[e] = t;
    },
    save: function() {
        r._.setStorageSync("sensorsdata2015_wechat", this._state);
    },
    init: function() {
        var e = this.getStorage();
        if (e) this.toState(e); else {
            m = !0;
            var t = new Date(), n = t.getTime();
            t.setHours(23), t.setMinutes(59), t.setSeconds(60), r.setOnceProfile({
                $first_visit_time: new Date()
            }), this.set({
                distinct_id: this.getUUID(),
                first_visit_time: n,
                first_visit_day_time: t.getTime()
            });
        }
    }
}, r.setProfile = function(e, t) {
    r.prepareData({
        type: "profile_set",
        properties: e
    }, t);
}, r.setOnceProfile = function(e, t) {
    r.prepareData({
        type: "profile_set_once",
        properties: e
    }, t);
}, r.appendProfile = function(e, i) {
    if (!t.isObject(e)) return !1;
    t.each(e, function(r, i) {
        t.isString(r) ? e[i] = [ r ] : t.isArray(r) || (delete e[i], n.info("appendProfile属性的值必须是字符串或者数组"));
    }), r.prepareData({
        type: "profile_append",
        properties: e
    }, i);
}, r.incrementProfile = function(e, n) {
    if (!t.isObject(e)) return !1;
    var i = e;
    t.isString(e) && ((e = {})[i] = 1), r.prepareData({
        type: "profile_increment",
        properties: e
    }, n);
}, r.track = function(e, t, r) {
    this.prepareData({
        type: "track",
        event: e,
        properties: t
    }, r);
}, r.identify = function(e, t) {
    if ("string" != typeof e && "number" != typeof e) return !1;
    e = r.store.verifyDistinctId(e);
    var n = r.store.getFirstId();
    !0 === t ? n ? r.store.set("first_id", e) : r.store.set("distinct_id", e) : n ? r.store.change("first_id", e) : r.store.change("distinct_id", e);
}, r.trackSignup = function(e, t, n, i) {
    r.prepareData({
        original_id: r.store.getFirstId() || r.store.getDistinctId(),
        distinct_id: e,
        type: "track_signup",
        event: t,
        properties: n
    }, i), r.store.set("distinct_id", e);
}, r.registerApp = function(e) {
    t.isObject(e) && !t.isEmptyObject(e) && (t.info.currentProps = t.extend(t.info.currentProps, e));
}, r.register = function(e) {
    t.isObject(e) && !t.isEmptyObject(e) && r.store.setProps(e);
}, r.clearAllRegister = function() {
    r.store.setProps({}, !0);
}, r.login = function(e) {
    if ("string" != typeof e && "number" != typeof e) return !1;
    e = r.store.verifyDistinctId(e);
    var t = r.store.getFirstId(), n = r.store.getDistinctId();
    e !== n && (t || r.store.set("first_id", n), r.trackSignup(e, "$SignUp"));
}, r.openid = {
    getRequest: function(e) {
        wx.login({
            success: function(n) {
                n.code && r.para.appid && r.para.openid_url ? t.wxrequest({
                    url: r.para.openid_url + "&code=" + n.code + "&appid=" + r.para.appid,
                    method: "GET",
                    complete: function(r) {
                        t.isObject(r) && t.isObject(r.data) && r.data.openid ? e(r.data.openid) : e();
                    }
                }) : e();
            }
        });
    },
    getWXStorage: function() {
        var e = r.store.getStorage();
        if (e && t.isObject(e)) return e.openid;
    },
    getOpenid: function(e) {
        if (!r.para.appid) return e(), !1;
        var t = this.getWXStorage();
        t ? e(t) : this.getRequest(e);
    }
}, r.initial = function() {
    this._.info.getSystem(), this.store.init();
}, r.init = function(e) {
    if (!0 === this.hasInit) return !1;
    this.hasInit = !0, r.setPara(e), r.para.batch_send && r.sendStrategy.batchInterval(), 
    r.initialState.storeIsComplete = !0, r.initialState.checkIsComplete();
}, r.getPresetProperties = function() {
    if (t.info && t.info.properties && t.info.properties.$lib) {
        var e = {};
        t.each(t.info.currentProps, function(t, r) {
            0 === r.indexOf("$") && (e[r] = t);
        });
        var n = t.extend(e, {
            $url_path: t.getCurrentPath()
        }, t.info.properties, r.store.getProps());
        return delete n.$lib, n;
    }
    return {};
}, t.autoExeQueue = function() {
    return {
        items: [],
        enqueue: function(e) {
            this.items.push(e), this.start();
        },
        dequeue: function() {
            return this.items.shift();
        },
        getCurrentItem: function() {
            return this.items[0];
        },
        isRun: !1,
        start: function() {
            this.items.length > 0 && !this.isRun && (this.isRun = !0, this.getCurrentItem().start());
        },
        close: function() {
            this.dequeue(), this.isRun = !1, this.start();
        }
    };
}, r.requestQueue = function(e) {
    this.url = e.url;
}, r.requestQueue.prototype.isEnd = function() {
    this.received || (this.received = !0, this.close());
}, r.requestQueue.prototype.start = function() {
    var e = this;
    setTimeout(function() {
        e.isEnd();
    }, r.para.send_timeout), t.wxrequest({
        url: this.url,
        method: "GET",
        complete: function() {
            e.isEnd();
        }
    });
}, r.dataQueue = t.autoExeQueue(), r.sendStrategy = {
    dataHasSend: !0,
    dataHasChange: !1,
    onAppHide: function() {
        r.para.batch_send && this.batchSend();
    },
    send: function(e) {
        if (r.para.batch_send) {
            if (this.dataHasChange = !0, r.store.mem.getLength() >= 300) return n.info("数据量存储过大，有异常"), 
            !1;
            r.store.mem.add(e), r.store.mem.getLength() >= r.para.batch_send.max_length && this.batchSend();
        } else this.queueSend(e);
    },
    queueSend: function(e) {
        e = JSON.stringify(e), e = -1 !== r.para.server_url.indexOf("?") ? r.para.server_url + "&data=" + encodeURIComponent(t.base64Encode(e)) : r.para.server_url + "?data=" + encodeURIComponent(t.base64Encode(e));
        var n = new r.requestQueue({
            url: e
        });
        n.close = function() {
            r.dataQueue.close();
        }, r.dataQueue.enqueue(n);
    },
    wxrequest: function(e) {
        if (t.isArray(e.data) && e.data.length > 0) {
            var n = Date.now();
            e.data.forEach(function(e) {
                e._flush_time = n;
            }), e.data = JSON.stringify(e.data), t.wxrequest({
                url: r.para.server_url,
                method: "POST",
                dataType: "text",
                data: "data_list=" + encodeURIComponent(t.base64Encode(e.data)),
                success: function() {
                    e.success(e.len);
                }
            });
        } else e.success(e.len);
    },
    batchSend: function() {
        if (this.dataHasSend) {
            var e = r.store.mem.mdata, t = e.length;
            t > 0 && (this.dataHasSend = !1, this.wxrequest({
                data: e,
                len: t,
                success: this.batchRemove.bind(this)
            }));
        }
    },
    batchRemove: function(e) {
        r.store.mem.clear(e), this.dataHasSend = !0, this.dataHasChange = !0, this.batchWrite();
    },
    is_first_batch_write: !0,
    batchWrite: function() {
        var e = this;
        this.dataHasChange && (this.is_first_batch_write && (this.is_first_batch_write = !1, 
        setTimeout(function() {
            e.batchSend();
        }, 1e3)), this.dataHasChange = !1, r._.setStorageSync("sensors_mp_prepare_data", r.store.mem.mdata));
    },
    batchInterval: function() {
        var e = this;
        !function t() {
            setTimeout(function() {
                e.batchWrite(), t();
            }, 1e3);
        }(), function t() {
            setTimeout(function() {
                e.batchSend(), t();
            }, r.para.batch_send.send_timeout);
        }();
    }
}, r.setOpenid = function(e, t) {
    r.store.set("openid", e), t ? r.store.set("distinct_id", e) : r.identify(e, !0);
}, r.initWithOpenid = function(e, n) {
    (e = e || {}).appid && (r.para.appid = e.appid), r.openid.getOpenid(function(i) {
        i && r.setOpenid(i, e.isCoverLogin), n && t.isFunction(n) && n(i), r.init(e);
    });
}, t.each([ "setProfile", "setOnceProfile", "track", "register", "clearAllRegister", "quick", "incrementProfile", "appendProfile" ], function(e) {
    var t = r[e];
    r[e] = function() {
        r.initialState.isComplete ? t.apply(r, arguments) : r.initialState.queue.push([ e, arguments ]);
    };
}), t.setQuery = function(e) {
    if (e && t.isObject(e) && !t.isEmptyObject(e)) {
        var r = [];
        return t.each(e, function(e, n) {
            "q" === n && t.isString(e) && 0 === e.indexOf("http") || "scene" === n || r.push(n + "=" + e);
        }), r.join("&");
    }
    return "";
}, r.autoTrackCustom = {
    trackCustom: function(e, n, i) {
        var a = r.para.autoTrack[e], s = "";
        r.para.autoTrack && a && ("function" == typeof a ? (s = a(), t.isObject(s) && t.extend(n, s)) : t.isObject(a) && (t.extend(n, a), 
        r.para.autoTrack[e] = !0), r.track(i, n));
    },
    appLaunch: function(n, i) {
        "object" != (0, e.default)(this) || this.trackCustom || (this[r.para.name] = r);
        var a = {};
        n && n.path && (a.$url_path = t.getPath(n.path)), t.setShareInfo(n, a);
        var s = t.setUtm(n, a);
        m ? (a.$is_first_time = !0, t.isEmptyObject(s.pre1) || r.setOnceProfile(s.pre1)) : a.$is_first_time = !1, 
        t.isEmptyObject(s.pre2) || r.registerApp(s.pre2), n.scene = n.scene || "未取到值", a.$scene = t.getMPScene(n.scene), 
        r.registerApp({
            $latest_scene: a.$scene
        }), a.$url_query = t.setQuery(n.query), i ? (a = t.extend(a, i), r.track("$MPLaunch", a)) : r.para.autoTrack && r.para.autoTrack.appLaunch && r.autoTrackCustom.trackCustom("appLaunch", a, "$MPLaunch");
    },
    appShow: function(e, n) {
        var i = {};
        d = new Date().getTime(), e && e.path && (i.$url_path = t.getPath(e.path)), t.setShareInfo(e, i);
        var a = t.setUtm(e, i);
        t.isEmptyObject(a.pre2) || r.registerApp(a.pre2), e.scene = e.scene || "未取到值", i.$scene = t.getMPScene(e.scene), 
        r.registerApp({
            $latest_scene: i.$scene
        }), i.$url_query = t.setQuery(e.query), n ? (i = t.extend(i, n), r.track("$MPShow", i)) : r.para.autoTrack && r.para.autoTrack.appShow && r.autoTrackCustom.trackCustom("appShow", i, "$MPShow");
    },
    appHide: function(e) {
        var n = new Date().getTime(), i = {};
        i.$url_path = t.getCurrentPath(), d && n - d > 0 && (n - d) / 36e5 < 24 && (i.event_duration = (n - d) / 1e3), 
        e ? (i = t.extend(i, e), r.track("$MPHide", i)) : r.para.autoTrack && r.para.autoTrack.appHide && r.autoTrackCustom.trackCustom("appHide", i, "$MPHide"), 
        r.sendStrategy.onAppHide();
    },
    pageLoad: function(e) {
        e && t.isObject(e) && (this.sensors_mp_url_query = t.setQuery(e));
    },
    pageShow: function(e) {
        var n = {}, i = t.getCurrentPath();
        n.$referrer = h, n.$url_path = i, r.status.last_referrer = h, this.sensors_mp_url_query && (n.$url_query = this.sensors_mp_url_query), 
        e ? (n = t.extend(n, e), r.track("$MPViewScreen", n)) : r.para.onshow ? r.para.onshow(r, i, this) : r.para.autoTrack && r.para.autoTrack.pageShow && r.autoTrackCustom.trackCustom("pageShow", n, "$MPViewScreen"), 
        h = i, r.status.referrer = i;
    },
    pageShare: function(n, i) {
        var a = n.onShareAppMessage;
        n.onShareAppMessage = function() {
            var n = a.apply(this, arguments);
            return r.para.autoTrack && r.para.autoTrack.pageShare && r.autoTrackCustom.trackCustom("pageShare", {
                $url_path: t.getCurrentPath(),
                $share_depth: t.getShareDepth()
            }, "$MPShare"), r.para.allow_amend_share_path && ("object" != (0, e.default)(n) && ((n = {}).path = t.getCurrentUrl(this)), 
            "object" != (0, e.default)(n) || void 0 !== n.path && "" !== n.path || (n.path = t.getCurrentUrl(this)), 
            "object" == (0, e.default)(n) && "string" == typeof n.path && (-1 === n.path.indexOf("?") ? n.path = n.path + "?" : "&" !== n.path.slice(-1) && (n.path = n.path + "&")), 
            n.path = n.path + "sampshare=" + encodeURIComponent(t.getShareInfo())), n;
        };
    }
}, r.quick = function() {
    var e = arguments[0], i = arguments[1], a = arguments[2], s = t.isObject(a) ? a : {};
    "appLaunch" === e || "appShow" === e ? i ? r.autoTrackCustom[e](i, s) : n.info("App的launch和show，在sensors.quick第二个参数必须传入App的options参数") : "appHide" === e && (s = t.isObject(i) ? i : {}, 
    r.autoTrackCustom[e](s));
};

var y = App;

App = function(e) {
    _(e, "onLaunch", "appLaunch"), _(e, "onShow", "appShow"), _(e, "onHide", "appHide"), 
    y.apply(this, arguments);
};

var b = Page;

Page = function(e) {
    _(e, "onLoad", "pageLoad"), _(e, "onShow", "pageShow"), "function" == typeof e.onShareAppMessage && r.autoTrackCustom.pageShare(e), 
    b.apply(this, arguments);
}, r.initial(), module.exports = r;