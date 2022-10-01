var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
    return typeof a;
} : function(a) {
    return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
}, t = getApp();

Page({
    data: {
        userinfo: {},
        showmore: !1,
        showmore_txt: "+ 更多",
        loaded: !1,
        submit: !1,
        selectedcatname: "",
        selectedcatid: "19",
        cert_label: "行驶证",
        cattalog_array: [],
        ccyear_array: [],
        options_array: [],
        options_values: [],
        deviceimage_cnt: 0,
        image: [],
        serverfiles: [],
        servercert: "",
        textshow: !0,
        pricefocus: !1,
        backfeild: ""
    },
    onLoad: function(a) {
        var e = this;
        e.data.itemid = a.id, t.auth(function(a) {
            if (!a.token) return !1;
            e.getcatalog(), e.getyears(), e.getlocation(), e.get_default();
        });
    },
    get_default: function() {
        var a = this;
        wx.request({
            url: "https://api.998jx.com/micro/device/edit_newdevice",
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: {
                token: t.globalData.userInfo.token,
                itemid: a.data.itemid
            },
            success: function(t) {
                var e = t.data.data;
                a.getoptions(e.catid, e.options), a.data.serverfiles = e.server_image, a.data.servercert = e.images_cert_server, 
                a.data.selectedcatid = e.catid, a.data.userinfo = {
                    contact_name: e.ownername,
                    mobile: e.ownerphone,
                    address: e.address
                };
                var o;
                o = 19 != e.catid && 24 != e.catid ? "身份证" : "行驶证", a.setData({
                    selectedcatname: e.catname,
                    deviceimage_cnt: e.image.length,
                    image: e.image,
                    image_cert: e.images_cert,
                    ccyear_text: e.cctime,
                    price: e.price,
                    userinfo: a.data.userinfo,
                    cert_label: o,
                    introduce: e.introduce
                });
            }
        });
    },
    changecattalog: function() {
        var a = this, t = [];
        if (!a.data.cattalog_array) return !1;
        for (var e = 1; e < a.data.cattalog_array.length; e++) t.push({
            id: a.data.cattalog_array[e].catid,
            text: a.data.cattalog_array[e].catname
        });
        a.showmodel("设备类型", t, "setcatalog");
    },
    setcatalog: function(a) {
        var t;
        t = 19 != a.currentTarget.dataset.id && 24 != a.currentTarget.dataset.id ? "身份证" : "行驶证";
        var e = this;
        e.setData({
            textshow: !0,
            selectedcatname: a.currentTarget.dataset.text,
            selectedcatid: a.currentTarget.dataset.id,
            cert_label: t,
            model_array: []
        }), e.getoptions(a.currentTarget.dataset.id);
    },
    change_options: function(t) {
        var e = this;
        if ("object" == (void 0 === t ? "undefined" : a(t))) o = t.currentTarget.id; else var o = t;
        for (var r = 0; r < e.data.options_array.length; r++) o == e.data.options_array[r].oid && e.showmodel(e.data.options_array[r].placeholder, e.data.options_array[r].value_array, "set_options", o);
    },
    set_options: function(a) {
        for (var t = this, e = a.currentTarget.dataset.opid, o = 0; o < t.data.options_array.length; o++) e == t.data.options_array[o].oid && (t.data.options_array[o].selected = a.currentTarget.dataset.text, 
        t.data.options_values[e] = a.currentTarget.dataset.text, t.setData({
            options_array: t.data.options_array,
            model_array: []
        }));
    },
    changeyear: function() {
        for (var a = this, t = [], e = 0; e < a.data.ccyear_array.length; e++) t.push({
            id: e,
            text: a.data.ccyear_array[e]
        });
        a.showmodel("出厂年份", t, "setyear");
    },
    setyear: function(a) {
        this.setData({
            model_array: [],
            ccyear_text: a.currentTarget.dataset.text,
            pricefocus: !0,
            textshow: !0
        });
    },
    showmodel: function(a, t, e, o) {
        var r = this;
        if (!o) var o = "";
        r.setData({
            textshow: !1,
            model_title: a,
            model_array: t,
            backfunction: e,
            backfeild: o
        });
    },
    tap_hide: function() {
        this.setData({
            model_array: []
        });
    },
    getoptions: function(a, e) {
        var o = this;
        o.data.options_array = [], o.data.options_values = [], wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/device/dynamic_options",
            data: {
                token: t.globalData.userInfo.token,
                sub_catid: a
            },
            success: function(a) {
                for (var t = a.data.data, r = 0; r < t.length; r++) {
                    for (var i = [], n = 1; n < t[r].value.length; n++) i.push({
                        id: n,
                        text: t[r].value[n]
                    });
                    if (e) {
                        var s = "";
                        for (var c in e) c == t[r].oid && (s = e[c]);
                    }
                    o.data.options_values[t[r].oid] = s, o.data.options_array.push({
                        oid: t[r].oid,
                        fieldname: t[r].name,
                        placeholder: i.length ? "请选择" : "请填写",
                        value_array: i,
                        selected: s,
                        ck_options: !1
                    });
                }
                o.setData({
                    options_array: o.data.options_array
                });
            }
        });
    },
    change_options_input: function(a) {
        for (var t = this, e = 0; e < t.data.options_array.length; e++) a.currentTarget.id == t.data.options_array[e].oid && (t.data.options_values[t.data.options_array[e].oid] = a.detail.value, 
        t.data.options_array[e].selected = a.detail.value);
    },
    getcatalog: function() {
        var a = this, e = wx.getStorageSync("options");
        e ? a.setData({
            cattalog_array: e.catalog_list,
            selectedcatname: a.data.selectedcatname
        }) : wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/data/get_option",
            data: {
                token: t.globalData.userInfo.token
            },
            success: function(t) {
                a.setData({
                    cattalog_array: t.data.data.catalog_list
                }), e = t.data.data, wx.setStorageSync("options", e);
            }
        });
    },
    getyears: function() {
        for (var a = this, t = new Date().getFullYear(), e = [], o = parseInt(t - 25); o <= t; o++) e.push(o);
        e.reverse(), a.data.ccyear_array = e;
    },
    buildercode: function() {
        wx.request({
            url: "https://api.998jx.com/micro/account/buildercode",
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: {
                token: t.globalData.userInfo.token
            },
            success: function(a) {
                console.log(a.data);
            }
        });
    },
    getlocation: function() {
        var a = this;
        t.globalData.latitude || wx.getLocation({
            type: "gcj02",
            success: function(e) {
                t.globalData.latitude = e.latitude, t.globalData.longitude = e.longitude, a.savexy(e.latitude, e.longitude);
            },
            fail: function() {
                t.show_erro("定位失败", "faild"), wx.navigateTo({
                    url: "/pages/auth/info"
                });
            }
        });
    },
    savexy: function(a, e) {
        var o = this;
        t.globalData.addr_saved || wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/account/savexy",
            data: {
                token: t.globalData.userInfo.token,
                x: a,
                y: e
            },
            success: function(a) {
                1 == a.data.ret && a.data.address && (t.globalData.addr_saved = !0, o.setData({
                    address: a.data.address
                }));
            }
        });
    },
    getPhoneNumber: function(a) {
        var e = this;
        "getPhoneNumber:ok" == a.detail.errMsg ? t.auth(function(o) {
            if (!o.token) return !1;
            wx.request({
                url: "https://api.998jx.com/micro/account/decode_phone",
                method: "POST",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                data: {
                    token: t.globalData.userInfo.token,
                    encryptedData: a.detail.encryptedData,
                    iv: a.detail.iv
                },
                success: function(a) {
                    a.data.ret ? (t.show_erro("获取成功"), e.setData({
                        ck_ownerphone: !1,
                        ownerphone: a.data.data
                    })) : (t.show_erro("获取失败", "faild"), setTimeout(function() {
                        wx.navigateTo({
                            url: "/pages/phonenumber/phonenumber?bind=1"
                        });
                    }, 1500));
                }
            });
        }) : wx.navigateTo({
            url: "/pages/phonenumber/phonenumber?bind=1"
        });
    },
    sendmsg: function(a) {
        wx.request({
            url: "https://api.998jx.com/micro/device/notify",
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: {
                token: t.globalData.userInfo.token,
                device_id: a
            },
            success: function(a) {}
        });
    },
    showmore: function() {
        var a = this;
        a.setData({
            showmore: !a.data.showmore,
            showmore_txt: "+ 更多" == a.data.showmore_txt ? "- 收起" : "+ 更多"
        });
    },
    uploadimg: function() {
        var a = this;
        wx.chooseImage({
            count: 9 - a.data.deviceimage_cnt,
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(e) {
                a.data.deviceimage_cnt > 9 || e.tempFilePaths.forEach(function(e, o) {
                    wx.showLoading({
                        title: "上传中..."
                    }), wx.uploadFile({
                        url: "https://api.998jx.com/micro/upload",
                        filePath: e,
                        name: "imgFile",
                        formData: {
                            token: t.globalData.userInfo.token
                        },
                        success: function(r) {
                            wx.hideLoading();
                            var i = JSON.parse(r.data);
                            i.ret ? (a.data.deviceimage_cnt = a.data.deviceimage_cnt + 1, a.data.image = a.data.image.concat(e), 
                            a.data.serverfiles = a.data.serverfiles.concat(i.url), a.setData({
                                deviceimage_cnt: a.data.deviceimage_cnt,
                                image: a.data.image,
                                ck_image: !1
                            })) : t.show_erro(o + " 图片格式不支持");
                        }
                    });
                });
            }
        });
    },
    delimage: function(a) {
        var t = this, e = a.currentTarget.id;
        t.data.deviceimage_cnt--, t.data.image.splice(e, 1), t.data.serverfiles.splice(e, 1), 
        this.setData({
            image: t.data.image,
            deviceimage_cnt: t.data.deviceimage_cnt
        });
    },
    uploadcert: function() {
        var a = this;
        wx.chooseImage({
            count: 1,
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(e) {
                a.setData({
                    image_cert: e.tempFilePaths,
                    ck_image_cert: !1
                }), wx.showLoading({
                    title: "上传中..."
                }), wx.uploadFile({
                    url: "https://api.998jx.com/micro/upload",
                    filePath: e.tempFilePaths[0],
                    name: "imgFile",
                    formData: {
                        token: t.globalData.userInfo.token
                    },
                    success: function(t) {
                        wx.hideLoading();
                        var e = JSON.parse(t.data);
                        e.ret && (a.data.servercert = e.url);
                    }
                });
            }
        });
    },
    openmap: function(a) {
        var t = this;
        wx.chooseLocation({
            success: function(a) {
                t.setData({
                    address: a.address,
                    ck_address: !1
                });
            }
        });
    },
    changeprice: function(a) {
        this.setData({
            ck_price: !(a.detail.value < 2e3)
        });
    },
    formSubmit: function(a) {
        var e = this, o = (a.detail.formId, a.detail.value, "{"), r = !0;
        for (var i in e.data.options_values) if (o = o + '"' + i + '":"' + e.data.options_values[i] + '",', 
        "" == e.data.options_values[i]) {
            r = !1;
            for (n = 0; n < e.data.options_array.length; n++) i == e.data.options_array[n].oid && (e.data.options_array[n].ck_options = !0);
        } else for (var n = 0; n < e.data.options_array.length; n++) i == e.data.options_array[n].oid && (e.data.options_array[n].ck_options = !1);
        o = o.substr(0, o.length - 1) + "}";
        var s = e.data.selectedcatid, c = a.detail.value.catname, d = a.detail.value.ccyear, l = a.detail.value.introduce, u = a.detail.value.address, p = a.detail.value.ownerphone, m = e.data.serverfiles.length, g = a.detail.value.contact_name, h = a.detail.value.price, _ = e.data.servercert;
        if ((!s || !d || !u || !_ || m < 3 || g.length < 2 || !h || !l || h > 2e3) && (r = !1), 
        e.setData({
            options_array: e.data.options_array,
            ck_cattalog: !s,
            ck_ccyear: !d,
            ck_introduce: !l,
            ck_price: !(h && h < 2e3),
            ck_address: !u,
            ck_ownerphone: !p,
            ck_contact_name: !(g.length >= 2),
            ck_image: !(m >= 3),
            ck_image_cert: !_
        }), !r) return wx.vibrateShort({}), t.show_erro("请完善设备资料", "error"), e.setData({
            showmore: !0
        }), !1;
        e.data.submit = !0, e.setData({
            submit: !0
        });
        var f = {
            token: t.globalData.userInfo.token,
            itemid: e.data.itemid,
            catid: s,
            catname: c,
            op: o,
            ccyear: d,
            price: h,
            images: e.data.serverfiles,
            introduce: l,
            address: u,
            contact_name: g,
            ownerphone: p,
            images_cert: e.data.servercert,
            is_idcert: "身份证" == e.data.cert_label ? "yes" : "no"
        };
        wx.request({
            url: "https://api.998jx.com/micro/device/edit_newdevice",
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: f,
            success: function(a) {
                1 == a.data.ret ? (t.show_erro(a.data.msg), e.sendmsg(a.data.device_id), setTimeout(function() {
                    wx.switchTab({
                        url: "/pages/account/index"
                    });
                }, "1500")) : t.show_erro(a.data.msg, "faild");
            }
        });
    }
});