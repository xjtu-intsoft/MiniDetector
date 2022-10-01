function e(e, t, i) {
    return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = i, e;
}

function t(e) {
    var e = JSON.stringify(e);
    wx.navigateTo({
        url: "/pages/imageDetail/imageDetail?item=" + e
    });
}

function i(e) {
    var t = e.getFullYear(), i = e.getMonth() + 1, n = e.getDate(), o = e.getHours(), r = e.getMinutes(), s = e.getSeconds();
    return [ t, i, n ].map(a).join("-") + " " + [ o, r, s ].map(a).join(":");
}

function a(e) {
    return (e = e.toString())[1] ? e : "0" + e;
}

function n(e, t) {
    if (getApp().globalData.openCount) {
        var a = wx.getStorageSync("openCountData"), n = getCurrentPages(), o = {
            share_info: n[n.length - 1].route + "&" + e + "&" + t,
            ctime: i(new Date())
        };
        a || (a = []), a.push(o), wx.setStorageSync("openCountData", a);
    }
}

function o(e, t, i) {
    wx.showToast({
        title: i || p,
        icon: "none"
    }), e && t && setTimeout(function() {
        e(t);
    }, 1500);
}

var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, s = require("sha1.js"), u = "https://newsapi.dongtu.com/", c = 1, l = 2, f = 3, g = 4, d = 5, m = 6, p = "服务器飞到外太空了？请重试 ", h = require("md5.min.js"), w = require("event.js"), _ = "ios" == wx.getSystemInfoSync().platform, v = function(e) {
    var t = "";
    return e.key = "aklfaojeoaj", e.timestamp = new Date().getTime(), Object.keys(e).sort().forEach(function(i, a) {
        t += (0 == a ? "" : "&") + i + "=" + e[i];
    }), delete e.key, s(t);
}, x = function(e, t) {
    return e += "060ff30ef71a4e82bc259466fb9e69a8", Object.keys(t).sort().forEach(function(i, a) {
        e += (0 == a ? "" : "&") + i + "=" + t[i];
    }), h(e).toUpperCase();
}, b = function(e) {
    function t() {
        e.host ? (a.fs = "medium", a.partner = "bqss_wxxcx", a.ssl_res = !0, a.app_id = "19b41d7a75e844958e7fe97874bc09f6", 
        a.timestamp = new Date().getTime(), a.signature = x("/" + e.url, a)) : (g || (m || (m = wx.getStorageSync("user_Id")), 
        a.user_id = m), a.sign = v(a)), wx.request({
            url: i,
            data: a,
            header: d,
            method: n,
            success: function(e) {
                if (200 == e.statusCode) {
                    var t = e.data;
                    if (304 == t.code) return void wx.showToast({
                        title: "图片包含敏感内容",
                        icon: "none"
                    });
                    if (305 == t.code) return void wx.showToast({
                        title: "文案包含敏感内容",
                        icon: "none"
                    });
                    l ? r && r(t) : 0 == t.code ? r && r(t) : (s && s(e), f || o());
                } else s && s(e), f || o();
            },
            fail: function(e) {
                s && s(e), f || o();
            },
            complete: function(e) {
                c && c(e);
            }
        });
    }
    var i = ({
        host1: "https://miniapi.dongtu.com/mini-api/",
        host2: "https://apis.dongtu.com/open/v2/"
    }[e.host] || u) + e.url, a = e.params || {}, n = e.method || "POST", r = e.success, s = e.fail, c = e.complete, l = e.notUseCodeZero, f = e.noDefaultFail, g = e.callAjaxNoUser, d = e.header || {
        "content-type": "application/x-www-form-urlencoded"
    };
    if (a.version = "v2.2.4", g) t(); else {
        var m = wx.getStorageSync("user_Id");
        if (!m) return;
        t();
    }
}, y = {
    isFullObject: function(e) {
        return !(!e || "object" != (void 0 === e ? "undefined" : r(e)) || "{}" == JSON.stringify(e));
    }
}, S = {
    toObject: function(e) {
        return "string" == typeof e ? JSON.parse(e) : e;
    },
    urlFormat: function(e) {
        return -1 == e.indexOf(".") ? "/images/" + e + ".png" : e;
    },
    shortStr: function(e, t) {
        return e.length > t && (e = e.slice(0, t) + "..."), e;
    }
}, I = function(e, t, i) {
    wx.getSetting({
        success: function(a) {
            function n() {
                wx.hideLoading(), wx.saveImageToPhotosAlbum({
                    filePath: e,
                    success: function() {
                        wx.showToast({
                            title: "已存到本地相册"
                        }), i && setTimeout(function() {
                            i(e);
                        }, 1500);
                    },
                    fail: function() {
                        o(i, e);
                    }
                });
            }
            a.authSetting["scope.writePhotosAlbum"] ? n() : wx.authorize({
                scope: "scope.writePhotosAlbum",
                success: function() {
                    n();
                },
                fail: function() {
                    o(i, e, t);
                }
            });
        },
        fail: function() {
            o(i, e);
        }
    });
}, T = function() {
    var e = getCurrentPages(), t = e[e.length - 1], i = t.route;
    return -1 != i.indexOf("streamImage") ? "streamImage," + t.data.item.type : i;
}, j = {
    drawImage: function(e, t) {
        function i() {
            wx.previewImage({
                urls: [ a ]
            }), wx.downloadFile({
                url: a,
                success: function(e) {
                    200 != e.statusCode ? (util.pageFun.closeLoadding(), wx.showToast({
                        title: "保存失败，请重试",
                        icon: "none"
                    })) : I(e.tempFilePath, "分享失败，请打开保存相册权限");
                },
                fail: function() {
                    j.closeLoadding(), wx.showToast({
                        title: "分享失败，请重试",
                        icon: "none"
                    });
                }
            });
        }
        j.loadding();
        var a = "https://newsapi.dongtu.com/wx/getwxacodeunlimit?page=", o = {};
        if (1 == t) 2 == e.article_type ? (o.subject_id = e.subject_id, 1 == e.subject_type && (o.share_type = 1)) : o.bk_id = e.bk_id; else if (3 == t) {
            var r = e.item, s = r.type;
            1 == s ? o.subject_id = r.article_id : 2 == s ? o.bk_id = r.bk_id : 3 == s && (o.share_type = 2, 
            o.subject_id = r.subject_id);
        } else 4 == t && (o.subject_id = e.article_id);
        void 0 !== o.bk_id ? n("cicle", "bk_id:" + o.bk_id) : n("cicle", "subject_id:" + o.subject_id), 
        b({
            url: "share_info",
            params: o,
            success: function(e) {
                a = e.result.share_picture, i();
            },
            fail: function() {
                j.closeLoadding();
            }
        });
    },
    goImageDetail: t,
    cacheData: function(e) {
        var t = wx.getStorageSync("onLoad_params");
        return wx.getStorageSync("user_Id") || wx.setStorageSync("onLoad_params", e), t ? (wx.setStorageSync("onLoad_params", ""), 
        t) : e;
    },
    isGoAuthorise: function() {
        wx.getStorageSync("user_Id") || getApp().getLogin();
    },
    loadding: function() {
        wx.showLoading();
    },
    closeLoadding: function() {
        wx.hideLoading();
    },
    randomColor: function() {
        var e = [ "#00cec9", "#0984e3", "#6c5ce7", "#fab1a0", "#ff7675", "#fd79a8", "#ffeaa7", "#fdcb6e" ];
        return e[Math.floor(Math.random() * e.length)];
    },
    stream: {
        streamManyImg: 1,
        streamWiki: 2,
        streamOneImg: 3,
        streamIpHome: 4
    },
    imageDetail: {
        imageDetailWiki: c,
        imageDetailStory: l,
        imageDetailManySubject: f,
        imageDetailOneSubject: g,
        imageDetailIpHome: d,
        imageDetailSearchPage: m
    },
    getPageParams: function(e, t) {
        var i = "/pages/" + e + "/" + e + "?";
        for (var a in t) i += a + "=" + t[a] + "&";
        return i.slice(0, -1);
    },
    cacheTesterData: n,
    switchTitle: function(e, t, i, a, n) {
        n || (n = 50);
        var o = t.data, r = o.titleState;
        if (a) var s = t.selectComponent(a);
        if (e.scrollTop > n) r || (i = i, o.titleState = !0, wx.setNavigationBarTitle({
            title: i
        }), a && s.switchBanner()); else if (r) {
            var i = "";
            o.titleState = !1, wx.setNavigationBarTitle({
                title: i
            }), a && s.switchBanner();
        }
    },
    localStorage: function(e, t) {
        var i = wx.getStorageSync(e) || [];
        if (t) {
            for (var a = 0; a < i.length; a++) i[a] == t && i.splice(a, 1);
            i.unshift(t), wx.setStorageSync(e, i);
        } else {
            if (null !== t) return i.slice(0, 20);
            wx.setStorageSync(e, null);
        }
    },
    clickStory: function(e) {
        var i = T(), a = void 0;
        -1 != i.indexOf("dynamicWiki") && (i = "baike"), e.show_url ? (a = "baike" == i ? [ "BktoutiaoNewsBigImageToWebview", "BktoutiaoNewsSmallImageToWebview", "BktoutiaoNewsBigImageToWebview", "BktoutiaoNewsThreeImageToWebview" ] : [ "toutiaoNewsBigImageToWebview", "toutiaoNewsSmallImageToWebview", "toutiaoNewsBigImageToWebview", "toutiaoNewsThreeImageToWebview" ], 
        wx.navigateTo({
            url: "/pages/webview/webview?url=" + e.show_url + "&gifnews_id=" + e.gifnews_id + "&theme_id=" + e.theme_id
        })) : (a = "baike" == i ? [ "BktoutiaoNewsBigImageToImageDetail", "BktoutiaoNewsfSmallImageToImageDetail", "BktoutiaoNewsBigImageToImageDetail", "BktoutiaoNewsThreeImageToImageDetail" ] : [ "toutiaoNewsBigImageToImageDetail", "toutiaoNewsfSmallImageToImageDetail", "toutiaoNewsBigImageToImageDetail", "toutiaoNewsThreeImageToImageDetail" ], 
        t({
            type: 2,
            params: {
                gifnews_id: e.gifnews_id,
                resource_id: e.pictures[0].resource_id,
                bk_id: e.bk_id
            }
        }));
        var n = wx.getStorageSync("user_Id");
        w.mtaEvent(a[e.show_type - 1], n, e.gifnews_id, e.theme_id);
    },
    isHavePhone: function(e) {
        function t() {
            wx.getStorageSync("user_phone") ? e() : wx.navigateTo({
                url: "/pages/bindPhone/bindPhone"
            });
        }
        if (0 == wx.getStorageSync("user_Id")) wx.navigateTo({
            url: "/pages/authorise/authorise"
        }); else if (wx.getStorageSync("user_phone")) e(); else {
            var i = wx.setStorageSync("openId");
            i ? getApp()._getUserInfo(i, function() {
                t();
            }) : getApp().getLogin(function() {
                t();
            });
        }
    },
    drawEWM: function(e) {
        function t() {
            g.draw(!1, function() {
                wx.canvasToTempFilePath({
                    x: 0,
                    y: 0,
                    width: r,
                    height: l,
                    destWidth: r,
                    destHeight: l,
                    canvasId: "myCanvas",
                    success: function(e) {
                        wx.previewImage({
                            current: e.tempFilePath,
                            urls: [ e.tempFilePath ]
                        }), I(e.tempFilePath, "分享失败，请打开保存相册权限");
                    },
                    fail: function(e) {}
                }, this);
            });
        }
        wx.showLoading({
            title: "正在生成二维码"
        });
        var i = "《" + e.shareText1 + "》了解一下？", a = e.topUrl, n = e.whRate, o = "https://newsapi.dongtu.com/wx/getwxacodeunlimit?scene=4," + e.guid + "&page=pages/streamImages/streamImages", r = 750, s = 32, u = (r - 700) / 2, c = 700 / n, l = 714 + c, f = {
            width: 244,
            left: 256
        }, g = wx.createCanvasContext("myCanvas");
        g.setTextAlign("left"), g.setFillStyle("#ffffff"), g.fillRect(0, 0, r, l), g.setTextBaseline("top"), 
        g.setFontSize(40), g.setFillStyle("#1D1F2C"), g.fillText(i, 16, s), s = 158;
        var d = function() {
            wx.hideLoading(), wx.showToast({
                title: "图片下载失败",
                icon: "none"
            });
        };
        wx.downloadFile({
            url: a,
            success: function(e) {
                200 === e.statusCode ? (g.drawImage(e.tempFilePath, u, s, 700, c), s += c + 70, 
                wx.downloadFile({
                    url: o,
                    success: function(e) {
                        200 === e.statusCode ? (g.drawImage(e.tempFilePath, f.left, s, f.width, f.width), 
                        s += f.width + 48, g.setFillStyle("#F5376C"), g.setFontSize(32), g.setTextAlign("center"), 
                        g.fillText("长按图片 识别小程序码", r / 2, s), s += 54, g.setFillStyle("#272935"), g.fillText("只看精彩，聊天有料", r / 2, s), 
                        t()) : d();
                    },
                    fail: function() {
                        d();
                    }
                })) : d();
            },
            fail: function(e) {
                d();
            }
        });
    },
    refreshUserInfo: function() {
        var e = new Date().getTime(), t = wx.getStorageSync("timestampUserInfo");
        if (t) {
            if (e - t > 2e3) {
                var i = wx.getStorageSync("openId");
                getApp()._getUserInfo(i);
            }
        } else wx.setStorageSync("timestampUserInfo", e), getApp().getLogin();
    },
    reverseCanvasData: function(e) {
        for (var t = e.width, i = e.height, a = 0, n = 0; n < i / 2; n++) for (var o = 0; o < 4 * t; o++) a = e.data[n * t * 4 + o + ""], 
        e.data[n * t * 4 + o + ""] = e.data[(i - n - 1) * t * 4 + o + ""], e.data[(i - n - 1) * t * 4 + o + ""] = a;
        return e;
    },
    isReverseCanvas: function() {
        var e = function(e, t) {
            var i, a = e.length, n = !0;
            for (i = 0; i < a; i++) {
                if (!n) return n;
                n = e[i] === t[i];
            }
            return n;
        };
        "ios" == wx.getSystemInfoSync().platform ? function(t) {
            var i = wx.createCanvasContext(t);
            i.setFillStyle("red"), i.fillRect(0, 0, 1, 1), i.setFillStyle("yellow"), i.fillRect(1, 1, 1, 1), 
            i.draw(!1, function() {
                wx.canvasGetImageData({
                    canvasId: t,
                    x: 0,
                    y: 0,
                    width: 2,
                    height: 2,
                    success: function(t) {
                        var i = [ 255, 0, 0, 255 ], a = [ 255, 255, 0, 255 ], n = t.width, o = t.height, r = t.data, s = n * o * 4, u = r.slice(0, 4), c = r.slice(s - 4, s), l = e(i, u) && e(a, c);
                        try {
                            wx.setStorageSync("isOrientationRight", l);
                        } catch (e) {}
                    }
                });
            });
        }("judgeCanvas") : wx.setStorageSync("isOrientationRight", !0);
    },
    statsEventDuration: function(e) {
        var t = new Date().getTime();
        return e ? t - e : t;
    },
    calPageName: T,
    performanceOptimize: function(t, i, a) {
        function n(t, n) {
            var o, r = a + ".", u = void 0, l = void 0;
            c.columnFlag ? (u = c.nodeIndexs[n - g] || -1, l = c.nodeIndexs[n + g] || t + g) : (u = t - g, 
            l = t + g), i.setData((o = {}, e(o, r + "prevIndex", t), e(o, r + "index1", u), 
            e(o, r + "index2", l), e(o, r + "topHeight", u > 0 ? s[u].offsetTop : 0), o));
        }
        a = a || "pfmOpt";
        var o = i.data, r = t.scrollTop, s = o.list, u = s.length, c = o[a], l = c.index1 > 0 ? c.index1 : 0, f = c.index2 < u ? c.index2 : u, g = c.showNum, d = void 0;
        for (d = l; d < f; d++) try {
            var m = s[d];
            if (m.columnFlag && m.columnFlag != c.columnFlag) continue;
            var p = m.offsetTop;
            if (!p) return void function(e) {
                if (!c.isRefreshTopHeight) {
                    c.isRefreshTopHeight = !0;
                    var t = e || 0, i = wx.createSelectorQuery();
                    for (d = t; d < u; d++) i.select("#cell-" + d).boundingClientRect();
                    i.exec(function(e) {
                        for (c.isRefreshTopHeight = !1, d = t; d < u; d++) {
                            var i = e[d - t];
                            !s[d].offsetTop && i && i.top < 500 && (s[d].offsetTop = i.bottom + r);
                        }
                    });
                }
            }(d);
            if (p >= r) {
                Math.abs(c.prevIndex - d) >= Math.floor(g / 3) && (m.columnFlag ? n(d, m.columnIndex) : n(d));
                break;
            }
        } catch (t) {}
    },
    pageSharePath: {}
}, D = {
    callAjax: b,
    imageDetailLoadData: function(e, t) {
        function i() {
            t(s, u, p, n, w, v, o);
        }
        function a(e, t, i) {
            e == t && (u = i);
        }
        var n, o, r = (e = JSON.parse(e)).type, s = [], u = 0, p = 0, h = {}, w = "", _ = 0, v = [];
        if (r == c) b({
            url: "baike_preview",
            params: e.params,
            success: function(t) {
                (n = t.result.list).forEach(function(t, i) {
                    try {
                        s.push({
                            url: t.picture_url,
                            desc: t.title.trim()
                        });
                    } catch (e) {}
                    v.push(t.picture_url), a(t.bkp_id, e.params.bkp_id, i);
                });
                try {
                    p = n[u].resource_id;
                } catch (e) {}
                _++ >= 1 && i();
            },
            fail: function() {
                j.closeLoadding();
            }
        }), h.bk_id = e.params.bk_id, b({
            url: "share_info",
            params: h,
            success: function(e) {
                w = e.result.share_text, _++ >= 1 && i();
            },
            fail: function() {
                j.closeLoadding();
            }
        }); else if (r == f) b({
            url: "all_subject_preview",
            params: e.params,
            success: function(t) {
                (n = t.result).forEach(function(t, i) {
                    var n = t.pictures[0];
                    try {
                        s.push({
                            url: n.resource_url,
                            desc: n.title.trim()
                        });
                    } catch (e) {}
                    v.push(n.resource_url), a(t.subject_id, e.params.subject_id, i);
                }), p = n[u].pictures[0].resource_id, i();
            },
            fail: function() {
                j.closeLoadding();
            }
        }); else if (r == g) b({
            url: "subject_preview",
            params: e.params,
            success: function(t) {
                var r = o = t.result;
                n = r.list, w = r.subject.share_text, n.forEach(function(t, i) {
                    try {
                        s.push({
                            url: t.resource_url,
                            desc: t.title.trim()
                        });
                    } catch (e) {}
                    v.push(t.resource_url), a(t.sp_id, e.params.sp_id, i);
                }), p = n[u].resource_id, i();
            },
            fail: function() {
                j.closeLoadding();
            }
        }); else if (r == l) b({
            url: "news_preview",
            params: {
                gifnews_id: e.params.gifnews_id
            },
            success: function(t) {
                var o = t.result;
                n = o.list, w = o.news_title, n.forEach(function(t, i) {
                    try {
                        s.push({
                            url: t.resource_url,
                            desc: t.title.trim()
                        });
                    } catch (e) {}
                    v.push(t.resource_url), a(t.resource_id, e.params.resource_id, i);
                }), p = n[u].resource_id, i();
            },
            fail: function() {
                j.closeLoadding();
            }
        }); else if (r == d) b({
            url: "ipaccount/detail",
            params: {
                ip_id: e.params.ip_id
            },
            success: function(t) {
                var o = t.result;
                n = o.emoticons, w = o.description;
                try {
                    w.length > 15 && (w = w.slice(0, 15) + "...");
                } catch (e) {}
                n.forEach(function(t, i) {
                    try {
                        s.push({
                            url: t.main,
                            desc: !1
                        });
                    } catch (e) {}
                    v.push(t.main), a(t.id, e.params.id, i);
                }), p = "", i();
            },
            fail: function() {
                j.closeLoadding();
            }
        }); else if (r == m) {
            var x = e.params;
            u = x.index, v = x.arr.map(function(e) {
                return e.url;
            }), w = x.searchText, n = v, s = x.arr, i();
        }
    },
    testDataSend: function() {
        if (getApp().globalData.openCount) {
            try {
                var e = {
                    user_id: wx.getStorageSync("user_Id"),
                    name: getApp().globalData.userInfo.nickName,
                    data: JSON.stringify(wx.getStorageSync("openCountData"))
                };
            } catch (e) {}
            b({
                url: "wb_share",
                params: e,
                success: function() {
                    wx.showToast({
                        title: "不要点我",
                        icon: "none"
                    }), wx.setStorageSync("openCountData", []);
                },
                fail: function() {
                    wx.showLoading({
                        duration: 1e3
                    });
                },
                noDefaultFail: !0
            });
        }
    },
    downloadFile: function(e) {
        var t = e.url, i = e.success;
        wx.downloadFile({
            url: t,
            success: function(e) {
                200 === e.statusCode ? i(e.tempFilePath) : o();
            },
            fail: function() {
                o();
            }
        });
    }
}, k = function(e) {
    return /\.gif$/i.test(e) ? _ ? e : "" : e;
}, F = {
    calAppearLeastNum: function(t) {
        var i = [], a = void 0;
        for (a = 0; a < 256; a++) i.push(e({}, a, 0));
        for (a = 0; a < t.length; a++) {
            var n = t[a];
            i[n][n]++;
        }
        return i.sort(function(e, t) {
            return e[Object.keys(e)[0]] - t[Object.keys(t)[0]];
        }), i;
    },
    colorHextoRGB: function(e) {
        return 4 == e.length && (e = e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]), e = e.slice(-6), 
        [ parseInt("0x" + e.substr(0, 2)), parseInt("0x" + e.substr(2, 2)), parseInt("0x" + e.substr(4, 2)) ];
    },
    isSubArray: function(e, t) {
        for (var i = 0; i < e.length; i++) {
            var a = e[i];
            if (a[0] == t[0] && a[1] == t[1] && a[2] == t[2]) return i;
        }
        return -1;
    },
    findSameColorIndex: function(e, t, i) {
        function a(e) {
            return e * e;
        }
        for (var n, o, r = 0; r < e.length; r++) if (r != i) {
            var s = function(e, t) {
                return a(e[0] - t[0]) + a(e[1] - t[1]) + a(e[2] - t[2]);
            }(e[r], t);
            if (0 == s) return r;
            (!n || n > s) && (n = s, o = r);
        }
        return o;
    },
    encode64: function(e) {
        for (var t, i, a, n, o, r, s, u = "", c = 0, l = e.length, f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="; c < l; ) n = (t = e.charCodeAt(c++)) >> 2, 
        o = (3 & t) << 4 | (i = e.charCodeAt(c++)) >> 4, r = (15 & i) << 2 | (a = e.charCodeAt(c++)) >> 6, 
        s = 63 & a, isNaN(i) ? r = s = 64 : isNaN(a) && (s = 64), u = u + f.charAt(n) + f.charAt(o) + f.charAt(r) + f.charAt(s);
        return u;
    },
    downloadImg: I,
    imgToshort: function(e) {
        return -1 == e.indexOf("imageView2") && e && (e += "?imageView2/0/w/320"), e;
    },
    isGIFIphone: k
};

module.exports = {
    host: u,
    subscribe: function(e, t, i) {
        b({
            url: "subscribe",
            params: {
                object_type: e,
                object_id: t
            },
            success: function(e) {
                wx.showToast({
                    title: "订阅成功"
                }), i();
            }
        });
    },
    shareArticle: function(e) {
        if (e[0] && (e = e[0]), "button" != e.from) return {
            title: "我觉得这个小程序不错，发你看看"
        };
        var t = e.target.dataset.item, i = t.subject_type;
        if (1 == t.article_type) return n(e.from, "bk_id:" + t.bk_id), {
            title: t.share_text,
            imageUrl: k(t.baike[0].picture_url.picture_url),
            path: "/pages/dynamicWiki/dynamicWiki?bk_id=" + t.bk_id
        };
        if (2 == t.article_type) {
            n(e.from, "subject_id:" + t.subject_id);
            var a = k(t.pictures[0].resource_url);
            if (1 == i) return o = {
                type: 4,
                params: {
                    subject_id: t.subject_id,
                    sg_id: 0,
                    sp_id: 0,
                    page: 0
                }
            }, {
                title: t.share_text,
                imageUrl: a,
                path: "/pages/imageDetail/imageDetail?item=" + JSON.stringify(o)
            };
            if (2 == i) return o = {
                type: 1,
                article_id: t.subject_id
            }, {
                title: t.share_text,
                imageUrl: a,
                path: "/pages/streamImages/streamImages?item=" + JSON.stringify(o)
            };
            if (3 == i) return {
                title: t.share_text,
                imageUrl: a,
                path: "/pages/subjectDetail/subjectDetail?subject_id=" + t.subject_id
            };
        } else if (3 == t.article_type) {
            var o = {
                type: 4,
                ip_id: t.ip_list.guid
            }, r = wx.getStorageSync("user_Id");
            return r && 0 != r && (o.share_user_id = r), {
                title: "《" + t.ip_list.name + "》了解一下？",
                imageUrl: k(t.ip_list.banner),
                path: "/pages/streamImages/streamImages?item=" + JSON.stringify(o)
            };
        }
    },
    indexSubjectGoPage: function(e) {
        var i = e.subject_type;
        if (1 == i || 2 == i) {
            var a = wx.getStorageSync("user_Id"), n = [ "toutiaoOnePicViewSubject", "toutiaoViewSubject" ];
            w.mtaEvent(n[i - 1], a, e.show_type, e.subject_id, e.subject_type);
        }
        if (1 == i) t(o = {
            type: 4,
            params: {
                subject_id: e.subject_id,
                sg_id: 0,
                sp_id: 0,
                page: 0
            }
        }); else if (2 == i) o = {
            type: 1,
            article_id: e.subject_id
        }, wx.navigateTo({
            url: "/pages/streamImages/streamImages?item=" + JSON.stringify(o)
        }); else if (3 == i) wx.navigateTo({
            url: "/pages/subjectDetail/subjectDetail?subject_id=" + e.subject_id
        }); else if (3 == e.article_type) {
            var o = {
                type: 4,
                ip_id: e.ip_list.guid
            };
            wx.navigateTo({
                url: "/pages/streamImages/streamImages?item=" + JSON.stringify(o)
            }), w.mtaEvent("indexPageTapIpHome");
        }
    },
    verify: y,
    pageFun: j,
    pageAjax: D,
    format: S,
    submitFormId: function(e) {
        setTimeout(function() {
            b({
                url: "user_wx_form",
                params: {
                    form_id: e
                },
                noDefaultFail: !0
            });
        }, 1e3);
    },
    apiFailUserInfo: p,
    toolFuns: F
};