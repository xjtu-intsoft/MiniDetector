var a = getApp();

Page({
    data: {
        ccyear_array: "",
        brand_array: null,
        cattalog_array: null,
        selectedcatname: null,
        selectedcatid: null,
        deviceimage_cnt: 0,
        image: [],
        serverfiles: [],
        userinfo: {},
        showmore: !1,
        showmore_txt: "+ 更多",
        loaded: !1,
        submit: !1,
        model_title: null,
        textshow: !0,
        model_array: [],
        pricefocus: !1,
        notes: null,
        introduce: null,
        oid: null,
        mid: null,
        showModal: !1,
        showTextarea: !0,
        share_text: "",
        share_msg: "",
        equipmentPic: [],
        qrCode: "",
        news: [],
        previewImage: null
    },
    new_roll: function(e) {
        this.setData({
            news: a.globalData.news
        });
    },
    openmap: function(a) {
        var e = this;
        wx.chooseLocation({
            success: function(a) {
                e.setData({
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
    buildercode: function() {
        var e = this;
        wx.request({
            url: "https://api.998jx.com/micro/account/buildercode",
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: {
                token: a.globalData.userInfo.token
            },
            success: function(a) {
                var t = a.data.url.replace("http", "https");
                wx.downloadFile({
                    url: t,
                    success: function(a) {
                        e.setData({
                            qrCode: a.tempFilePath
                        });
                    }
                });
            }
        });
    },
    changecattalog: function() {
        var a = this, e = [];
        if (!a.data.cattalog_array) return !1;
        for (var t = 1; t < a.data.cattalog_array.length; t++) e.push({
            id: a.data.cattalog_array[t].catid,
            text: a.data.cattalog_array[t].catname
        });
        a.showmodel("设备类型", e, "setcatalog");
    },
    setcatalog: function(a) {
        var e = this;
        e.dynamic_options(a.currentTarget.dataset.id), e.setData({
            textshow: !0,
            selectedcatname: a.currentTarget.dataset.text,
            selectedcatid: a.currentTarget.dataset.id,
            model_array: [],
            ck_cattalog: !1
        });
    },
    hasval: function(a) {
        var e = this;
        "model" == a.target.dataset.id && ("" == a.detail.value ? e.setData({
            ck_model: !0
        }) : e.setData({
            ck_model: !1
        })), "price" == a.target.dataset.id && ("" == a.detail.value ? e.setData({
            ck_price: !0
        }) : e.setData({
            ck_price: !1
        })), "introduce" == a.target.dataset.id && ("" == a.detail.value ? e.setData({
            ck_introduce: !0
        }) : e.setData({
            ck_introduce: !1
        }));
    },
    dynamic_options: function(e) {
        var t = this;
        wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/device/dynamic_options",
            data: {
                token: a.globalData.userInfo.token,
                sub_catid: e
            },
            success: function(a) {
                t.data.oid = a.data.data[0].oid, t.data.mid = a.data.data[1].oid, t.data.brand_array = a.data.data[0].value;
            }
        });
    },
    changebrand: function() {
        for (var a = this, e = [], t = 1; t < a.data.brand_array.length; t++) e.push({
            id: t,
            text: a.data.brand_array[t]
        });
        a.showmodel("设备品牌", e, "setbrand");
    },
    setbrand: function(a) {
        var e = this;
        e.setData({
            textshow: !0,
            brand_text: a.currentTarget.dataset.text,
            model_array: [],
            ck_brand: !1
        }), e.data.indexyear;
    },
    changeyear: function() {
        for (var a = this, e = [], t = 0; t < a.data.ccyear_array.length; t++) e.push({
            id: t,
            text: a.data.ccyear_array[t]
        });
        a.showmodel("出厂年份", e, "setyear");
    },
    setyear: function(a) {
        this.setData({
            model_array: [],
            ccyear_text: a.currentTarget.dataset.text,
            pricefocus: !0,
            textshow: !0,
            ck_ccyear: !1
        });
    },
    showmodel: function(a, e, t) {
        this.setData({
            textshow: !1,
            model_title: a,
            model_array: e,
            backfunction: t
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
        var e = this;
        wx.chooseImage({
            count: 9 - e.data.deviceimage_cnt,
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(t) {
                for (var o = [], r = 0; r < t.tempFiles.length; r++) o.push(t.tempFiles[r].path);
                e.data.equipmentPic = o, console.log(o), console.log(e.data.equipmentPic), e.setData({
                    previewImage: t.tempFilePaths,
                    equipmentPic: o
                }), e.data.deviceimage_cnt > 9 || t.tempFilePaths.forEach(function(t, o) {
                    wx.showLoading({
                        title: "上传中..."
                    }), wx.uploadFile({
                        url: "https://api.998jx.com/micro/upload",
                        filePath: t,
                        name: "imgFile",
                        formData: {
                            token: a.globalData.userInfo.token
                        },
                        success: function(r) {
                            wx.hideLoading();
                            var d = JSON.parse(r.data);
                            d.ret ? (e.data.deviceimage_cnt = e.data.deviceimage_cnt + 1, e.data.image = e.data.image.concat(t), 
                            e.data.serverfiles = e.data.serverfiles.concat(d.url), e.setData({
                                deviceimage_cnt: e.data.deviceimage_cnt,
                                image: e.data.image,
                                ck_image: !1
                            })) : a.show_erro(o + " 图片格式不支持");
                        }
                    });
                });
            }
        });
    },
    delimage: function(a) {
        var e = this, t = a.currentTarget.id;
        e.data.deviceimage_cnt--, e.data.image.splice(t, 1), e.data.serverfiles.splice(t, 1), 
        this.setData({
            image: e.data.image,
            deviceimage_cnt: e.data.deviceimage_cnt
        });
    },
    previewImage: function(a) {
        var e = this, t = a.currentTarget.id;
        wx.previewImage({
            current: e.data.image[t],
            urls: e.data.image
        });
    },
    formSubmit: function(e) {
        if (a.checklogin()) {
            var t = this;
            t.data.formId = e.detail.formId;
            var o = t.data.selectedcatid, r = e.detail.value.catname, d = e.detail.value.brand, n = e.detail.value.ccyear, i = e.detail.value.introduce;
            t.data.introduce = i;
            var c = e.detail.value.address, s = e.detail.value.ownerphone, l = t.data.serverfiles.length, u = e.detail.value.contact_name, m = e.detail.value.price;
            t.data.price = m;
            var h = e.detail.value.model;
            if (!o || !d || !n || h.length < 2 || !c || l < 3 || u.length < 2 || m <= 0 || !i || m > 2e3) return t.setData({
                ck_cattalog: !o,
                ck_brand: !d,
                ck_ccyear: !n,
                ck_introduce: !i,
                ck_price: !(m > 0 && m < 2e3),
                ck_address: !c,
                ck_ownerphone: !s,
                ck_contact_name: !(u.length >= 2),
                ck_model: !(h.length >= 2),
                ck_image: !(l >= 3),
                showmore: !0
            }), a.show_erro("请完善发布信息", "error"), !1;
            t.setData({
                submit: !0
            }), wx.request({
                url: "https://api.998jx.com/micro/device/add_device",
                method: "POST",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                data: {
                    token: a.globalData.userInfo.token,
                    catid: t.data.selectedcatid,
                    catname: r,
                    brand: d,
                    ccyear: n,
                    price: m,
                    images: t.data.serverfiles,
                    introduce: i,
                    address: c,
                    contact_name: u,
                    ownerphone: s,
                    model: h,
                    oid: t.data.oid,
                    mid: t.data.mid
                },
                success: function(e) {
                    t.setData({
                        share_msg: e.data.share_msg,
                        share_text: e.data.msg
                    }), console.log(t.data.equipmentPic), wx.setStorage({
                        key: "share",
                        data: {
                            share_msg: e.data.share_msg,
                            share_text: e.data.msg,
                            equipmentPic: t.data.equipmentPic,
                            introduce: t.data.introduce,
                            price: t.data.price,
                            qrCode: t.data.qrCode
                        },
                        success: function() {
                            setTimeout(function() {
                                wx.navigateTo({
                                    url: "/pages/success/success"
                                });
                            }, 1e3);
                        }
                    }), 1 == e.data.ret ? (t.setData({}), t.sendmsg(e.data.device_id), t.setData({
                        showmore: !1,
                        submit: !1,
                        selectedcatid: null,
                        selectedcatname: null,
                        brand_text: null,
                        indexyear: null,
                        price: "",
                        model: "",
                        deviceimage_cnt: 0,
                        image: [],
                        serverfiles: [],
                        introduce: []
                    })) : a.show_erro(e.data.msg, "faild");
                }
            });
        }
    },
    sendmsg: function(e) {
        var t = this;
        wx.request({
            url: "https://api.998jx.com/micro/device/notify",
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: {
                token: a.globalData.userInfo.token,
                formId: t.data.formId,
                device_id: e
            },
            success: function(a) {}
        });
    },
    getPhoneNumber: function(e) {
        var t = this;
        "getPhoneNumber:ok" == e.detail.errMsg ? a.auth(function(o) {
            if (!o.token) return !1;
            wx.request({
                url: "https://api.998jx.com/micro/account/decode_phone",
                method: "POST",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                data: {
                    token: a.globalData.userInfo.token,
                    encryptedData: e.detail.encryptedData,
                    iv: e.detail.iv
                },
                success: function(e) {
                    e.data.ret ? (a.show_erro("获取成功"), t.setData({
                        ck_ownerphone: !1,
                        ownerphone: e.data.data
                    })) : (a.show_erro("获取失败", "faild"), setTimeout(function() {
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
    checkuser: function() {
        var e = this;
        a.auth(function(t) {
            wx.request({
                url: "https://api.998jx.com/micro/device/add_device",
                method: "POST",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                data: {
                    token: a.globalData.userInfo.token
                },
                success: function(a) {
                    return e.data.loaded = !0, -2 == a.data.ret ? (e.setData({
                        notes: a.data.msg
                    }), !1) : -3 != a.data.ret ? (e.setData({
                        notes: null,
                        userinfo: a.data.data
                    }), !0) : void e.setData({
                        notes: a.data.msg
                    });
                }
            });
        });
    },
    savexy: function(e, t) {
        var o = this;
        a.globalData.addr_saved || wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/account/savexy",
            data: {
                token: a.globalData.userInfo.token,
                x: e,
                y: t
            },
            success: function(e) {
                1 == e.data.ret && e.data.address && (a.globalData.addr_saved = !0, o.setData({
                    address: e.data.address
                }));
            }
        });
    },
    getlocation: function() {
        var e = this;
        a.globalData.latitude || wx.getLocation({
            type: "gcj02",
            success: function(t) {
                a.globalData.latitude = t.latitude, a.globalData.longitude = t.longitude, e.savexy(t.latitude, t.longitude);
            },
            fail: function() {
                a.show_erro("定位失败", "faild"), wx.navigateTo({
                    url: "/pages/auth/info"
                });
            }
        });
    },
    onShow: function() {
        if (a.checklogin()) return !1;
    },
    tap_hide: function() {
        this.setData({
            model_array: [],
            textshow: !0
        });
    },
    get_option: function() {
        var e = this, t = wx.getStorageSync("homemenu2");
        t ? e.setData({
            brand_array: t.option_list[0].value,
            cattalog_array: t.catalog_list,
            ccyear_array: e.data.ccyear_array
        }) : wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/data/get_option",
            data: {
                token: a.globalData.userInfo.token
            },
            success: function(a) {
                wx.setStorageSync("homemenu2", a.data.data), e.setData({
                    brand_array: a.data.data.option_list[0].value,
                    cattalog_array: a.data.data.catalog_list,
                    ccyear_array: e.data.ccyear_array
                });
            }
        });
    },
    onLoad: function() {
        return void wx.switchTab({
            url: "/pages/deviceadd/index"
        });
    },
    onHide: function() {
        this.setData({
            textshow: !0
        });
    }
});