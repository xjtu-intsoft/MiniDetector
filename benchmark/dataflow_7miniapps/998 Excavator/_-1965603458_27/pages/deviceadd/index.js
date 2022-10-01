var a, t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
    return typeof a;
} : function(a) {
    return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
}, e = getApp();

Page({
    data: {
        userinfo: {},
        showmore: !1,
        showmore_txt: "+ 更多",
        loaded: !1,
        submit: !1,
        selectedcatname: "请选择",
        selectedcatid: "",
        cert_label: "身份证",
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
        backfeild: "",
        cert: ""
    },
    onLoad: function() {
        var a = this;
        e.auth(function(t) {
            if (!e.globalData.userInfo.cs) return e.checklogin(), !1;
            a.checkuser(), a.getcatalog(), a.getyears(), a.buildercode();
        });
    },
    removeckprice: function() {
        this.setData({
            ck_price: !1
        });
    },
    removeckintroduce: function() {
        this.setData({
            ck_introduce: !1
        });
    },
    checkuser: function() {
        var a = this;
        wx.showLoading({
            title: ""
        }), wx.request({
            url: "https://api.998jx.com/micro/device/add_newdevice",
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: {
                token: e.globalData.userInfo.token
            },
            success: function(t) {
                wx.hideLoading(), "1" == t.data.ret ? (a.data.cert = t.data.data.cert, a.setData({
                    userinfo: t.data.data
                })) : "-2" == t.data.ret ? wx.showModal({
                    title: "",
                    content: t.data.msg,
                    showCancel: !1,
                    success: function() {
                        wx.redirectTo({
                            url: "/pages/index/index"
                        });
                    }
                }) : "-3" == t.data.ret && wx.showModal({
                    title: "",
                    content: t.data.msg,
                    success: function(a) {
                        a.confirm ? wx.navigateTo({
                            url: "/pages/upgrade/index"
                        }) : wx.reLaunch({
                            url: "/pages/index/index"
                        });
                    }
                });
            },
            fail: function(a) {
                e.show_erro("网络不给力", "faild");
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
        var t = this;
        t.setData({
            textshow: !0,
            ck_cattalog: !1,
            selectedcatname: a.currentTarget.dataset.text,
            selectedcatid: a.currentTarget.dataset.id,
            model_array: []
        }), t.getoptions(a.currentTarget.dataset.id);
    },
    change_options: function(a) {
        var e = this;
        if ("object" == (void 0 === a ? "undefined" : t(a))) o = a.currentTarget.id; else var o = a;
        for (var r = 0; r < e.data.options_array.length; r++) o == e.data.options_array[r].oid && e.showmodel(e.data.options_array[r].placeholder, e.data.options_array[r].value_array, "set_options", o);
    },
    onShareAppMessage: function(a) {
        return {
            title: "998二手挖机圈,卖车就是快",
            path: "pages/deviceadd/index?t=" + e.getcsid()
        };
    },
    set_options: function(a) {
        for (var t = this, e = a.currentTarget.dataset.opid, o = 0; o < t.data.options_array.length; o++) e == t.data.options_array[o].oid && (t.data.options_array[o].selected = a.currentTarget.dataset.text, 
        t.data.options_array[o].ck_options = !1, t.data.options_values[e] = a.currentTarget.dataset.text, 
        t.setData({
            options_array: t.data.options_array,
            model_array: []
        }), t.setData({
            textshow: !0
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
            ck_ccyear: !1,
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
            textshow: !0,
            model_array: []
        });
    },
    getoptions: function(t) {
        var o = this;
        o.data.options_array = [], o.data.options_values = [], wx.showLoading({
            title: ""
        }), wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/device/dynamic_options",
            data: {
                token: e.globalData.userInfo.token,
                sub_catid: t
            },
            success: function(a) {
                wx.hideLoading();
                for (var t = a.data.data, e = 0; e < t.length; e++) {
                    for (var r = [], n = 1; n < t[e].value.length; n++) r.push({
                        id: n,
                        text: t[e].value[n]
                    });
                    o.data.options_values[t[e].oid] = "", o.data.options_array.push({
                        oid: t[e].oid,
                        fieldname: t[e].name,
                        placeholder: r.length ? "请选择" : "请填写",
                        value_array: r,
                        selected: "",
                        ck_options: !1
                    });
                }
                o.setData({
                    options_array: o.data.options_array
                });
            },
            fail: function(r) {
                clearTimeout(a), e.show_erro("网络不给力", "faild"), a = setTimeout(function() {
                    o.getoptions(t);
                }, 3e3);
            }
        });
    },
    change_options_input: function(a) {
        for (var t = this, e = 0; e < t.data.options_array.length; e++) a.currentTarget.id == t.data.options_array[e].oid && (t.data.options_values[t.data.options_array[e].oid] = a.detail.value, 
        t.data.options_array[e].selected = a.detail.value, t.data.options_array[e].ck_options = !1);
        t.setData({
            options_array: t.data.options_array
        });
    },
    getcatalog: function() {
        var a = this, t = wx.getStorageSync("options");
        t ? a.setData({
            cattalog_array: t.catalog_list,
            selectedcatname: a.data.selectedcatname
        }) : wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/data/get_option",
            data: {
                token: e.globalData.userInfo.token
            },
            success: function(e) {
                a.setData({
                    cattalog_array: e.data.data.catalog_list
                }), t = e.data.data, wx.setStorageSync("options", t);
            }
        });
    },
    getyears: function() {
        for (var a = this, t = new Date().getFullYear(), e = [], o = parseInt(t - 25); o <= t; o++) e.push(o);
        e.reverse(), a.data.ccyear_array = e;
    },
    buildercode: function() {
        var a = this;
        wx.request({
            url: "https://api.998jx.com/micro/account/buildercode",
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: {
                token: e.globalData.userInfo.token
            },
            success: function(t) {
                a.data.qrCode = t.data.url;
            }
        });
    },
    getlocation: function() {
        var a = this;
        e.globalData.latitude || wx.getLocation({
            type: "gcj02",
            success: function(t) {
                e.globalData.latitude = t.latitude, e.globalData.longitude = t.longitude, a.savexy(t.latitude, t.longitude);
            },
            fail: function(a) {
                wx.showModal({
                    title: "定位失败",
                    content: "是否立即开启定位",
                    success: function(a) {
                        a.confirm ? wx.navigateTo({
                            url: "/pages/auth/info"
                        }) : a.cancel && console.log("用户点击取消");
                    }
                });
            }
        });
    },
    savexy: function(a, t) {
        var o = this;
        e.globalData.addr_saved || wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/account/savexy",
            data: {
                token: e.globalData.userInfo.token,
                x: a,
                y: t
            },
            success: function(a) {
                1 == a.data.ret && a.data.address && (e.globalData.addr_saved = !0, o.setData({
                    address: a.data.address
                }));
            }
        });
    },
    getPhoneNumber: function(a) {
        var t = this;
        "getPhoneNumber:ok" == a.detail.errMsg ? e.auth(function(o) {
            if (!o.token) return !1;
            wx.request({
                url: "https://api.998jx.com/micro/account/decode_phone",
                method: "POST",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                data: {
                    token: e.globalData.userInfo.token,
                    encryptedData: a.detail.encryptedData,
                    iv: a.detail.iv
                },
                success: function(a) {
                    a.data.ret ? (e.show_erro("获取成功"), t.setData({
                        ck_ownerphone: !1,
                        ownerphone: a.data.data
                    })) : (e.show_erro("获取失败", "faild"), setTimeout(function() {
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
                token: e.globalData.userInfo.token,
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
            success: function(t) {
                a.data.deviceimage_cnt > 9 || t.tempFilePaths.forEach(function(t, o) {
                    wx.showLoading({
                        title: "上传中..."
                    }), wx.uploadFile({
                        url: "https://api.998jx.com/micro/upload",
                        filePath: t,
                        name: "imgFile",
                        formData: {
                            token: e.globalData.userInfo.token
                        },
                        success: function(r) {
                            wx.hideLoading();
                            var n = JSON.parse(r.data);
                            n.ret ? (a.data.deviceimage_cnt = a.data.deviceimage_cnt + 1, a.data.image = a.data.image.concat(t), 
                            a.data.serverfiles = a.data.serverfiles.concat(n.url), a.setData({
                                deviceimage_cnt: a.data.deviceimage_cnt,
                                image: a.data.image,
                                ck_image: !1
                            })) : e.show_erro(o + " 图片格式不支持");
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
            success: function(t) {
                a.setData({
                    image_cert: t.tempFilePaths,
                    ck_image_cert: !1
                }), wx.showLoading({
                    title: "上传中..."
                }), wx.uploadFile({
                    url: "https://api.998jx.com/micro/upload",
                    filePath: t.tempFilePaths[0],
                    name: "imgFile",
                    formData: {
                        token: e.globalData.userInfo.token
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
            },
            fail: function() {
                wx.showModal({
                    title: "定位失败",
                    content: "无法打开地图,是否立即开启？",
                    success: function(a) {
                        a.confirm ? wx.navigateTo({
                            url: "/pages/auth/info"
                        }) : a.cancel && console.log("用户点击取消");
                    }
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
        if (!e.globalData.userInfo.cs) return e.checklogin(), !1;
        var t = this, o = (a.detail.formId, "{"), r = !0;
        for (var n in t.data.options_values) if (o = o + '"' + n + '":"' + t.data.options_values[n] + '",', 
        "" == t.data.options_values[n]) {
            r = !1;
            for (i = 0; i < t.data.options_array.length; i++) n == t.data.options_array[i].oid && (t.data.options_array[i].ck_options = !0);
        } else for (var i = 0; i < t.data.options_array.length; i++) n == t.data.options_array[i].oid && (t.data.options_array[i].ck_options = !1);
        o = o.substr(0, o.length - 1) + "}";
        var s = t.data.selectedcatid, c = a.detail.value.catname, d = a.detail.value.ccyear, l = a.detail.value.introduce, u = a.detail.value.address, p = a.detail.value.ownerphone, g = t.data.serverfiles.length, h = a.detail.value.contact_name, m = a.detail.value.price, f = t.data.servercert;
        if (/^[0-9]*(\.[0-9]{1,2})?$/.test(m) || (m = !1), (!s || !d || !u || g < 3 || h.length < 2 || !m || !l || m > 2e3) && (r = !1), 
        t.setData({
            options_array: t.data.options_array,
            ck_cattalog: !s,
            ck_ccyear: !d,
            ck_introduce: !l,
            ck_price: !(m && m < 2e3),
            ck_address: !u,
            ck_ownerphone: !p,
            ck_contact_name: !(h.length >= 2),
            ck_image: !(g >= 3)
        }), "身份证" == t.data.cert_label && "" == t.data.cert && (f || (r = !1, t.setData({
            ck_image_cert: !f
        }))), !r) return wx.vibrateShort(), wx.pageScrollTo({
            scrollTop: 0,
            duration: 300
        }), e.show_erro("请完善设备资料", "error"), t.showmore(), !1;
        t.data.submit = !0, t.setData({
            submit: !0
        });
        var _ = {
            token: e.globalData.userInfo.token,
            catid: s,
            catname: c,
            op: o,
            ccyear: d,
            price: m,
            images: t.data.serverfiles,
            images_cert: t.data.servercert,
            introduce: l,
            address: u,
            contact_name: h,
            ownerphone: p,
            is_idcert: "身份证" == t.data.cert_label ? "yes" : "no"
        };
        wx.request({
            url: "https://api.998jx.com/micro/device/add_newdevice",
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: _,
            success: function(a) {
                1 == a.data.ret ? (t.sendmsg(a.data.device_id), wx.setStorage({
                    key: "share",
                    data: {
                        share_msg: a.data.share_msg,
                        share_text: a.data.msg,
                        equipmentPic: t.data.image,
                        introduce: l,
                        price: m,
                        qrCode: t.data.qrCode
                    },
                    success: function() {
                        setTimeout(function() {
                            wx.navigateTo({
                                url: "/pages/success/success"
                            });
                        }, 1e3);
                    }
                })) : e.show_erro(a.data.msg, "faild");
            }
        });
    },
    onShow: function() {
        var a = this;
        e.auth(function(t) {
            if (!e.globalData.userInfo.cs) return e.checklogin(), !1;
            a.checkuser(), a.getlocation();
        }), a.data.submit && a.setData({
            submit: !1,
            ccyear_text: "",
            price: "",
            deviceimage_cnt: 0,
            image: [],
            serverfiles: [],
            introduce: "",
            servercert: "",
            image_cert: ""
        });
    }
});