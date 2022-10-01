var t = require("../../../comm/script/fetch"), e = (require("../../../comm/script/config"), 
require("../../../util/util"), getApp());

Page({
    data: {
        navBarHeight: e.globalData.navBarHeight,
        menuHeight: e.globalData.menuHeight,
        isShow: !1,
        scrollTop: 0,
        windowHeight: 0,
        rate: 0,
        onlyPhone: !1,
        myMouldInfo: {},
        type: 1,
        brandList: [],
        typeListData: [],
        padList: [],
        selectedBrand: {},
        typeIndex: 0,
        faultInfo: [],
        animate: !1,
        phoneList: [],
        scrollWidth: 0,
        brandId: "",
        fault_id: "",
        back: !1,
        myModule: null,
        statusbar: e.globalData.statusBarHeight,
        column: 3,
        isLogin: !1,
        showCoformModel: !1,
        imageShow: !1,
        timer: null
    },
    imgLoad: function() {
        this.setData({
            animate: !0
        });
    },
    onLoad: function(t) {
        var a = this;
        t.id && this.setData({
            brandId: t.id
        }), t.fault_id && this.setData({
            fault_id: t.fault_id
        }), t.back && this.setData({
            back: !0
        }), this.loadBrandList(), wx.getSystemInfo({
            success: function(t) {
                var i = t.windowWidth / 750;
                a.setData({
                    windowHeight: t.windowHeight,
                    rate: i,
                    myMouldInfo: e.globalData.hwxDeviceInfo
                });
            },
            fail: function(t) {
                console.log("err----"), console.log(t);
            }
        }), this.getHwxDeviceInfo(), this.imageAnimation = wx.createAnimation({
            duration: 300
        });
    },
    onShow: function() {
        var a = e.globalData.hwxUserInfo.phone, i = e.globalData.hwxUserInfo.token, n = this;
        a && i && t.getIsLogin(i, function(t) {
            "1" == t.is_login ? n.setData({
                isLogin: !0
            }) : n.setData({
                isLogin: !1
            });
        }, function(t) {
            n.setData({
                isLogin: !1
            });
        });
    },
    imageError: function(t) {
        var e = t.currentTarget.dataset.phoneindex, a = this.data.typeListData[this.data.typeIndex].devices;
        for (var i in a) i == e && (a[i].src = "../../../img/wx_repair/default.png");
        this.data.typeListData[this.data.typeIndex].devices = a, this.setData({
            typeListData: this.data.typeListData
        });
    },
    loadBrandList: function() {
        wx.showLoading({
            title: "加载中",
            mask: !0
        });
        var t = wx.getStorageSync("BRANDLIST");
        t && t.length ? (t.length > 0 && (this.setData({
            brandList: t,
            selectedBrand: t[0]
        }), this.loadMouldList()), this.getBrands(t)) : this.getBrands();
    },
    getBrands: function(e) {
        var a = this;
        t.getBrands.call(a, function(t) {
            JSON.stringify(e) != JSON.stringify(t) && t.length > 0 && (a.setData({
                brandList: t,
                selectedBrand: t[0]
            }), a.loadMouldList()), wx.setStorage({
                key: "BRANDLIST",
                data: t
            });
        }, function(t) {
            wx.hideLoading(), wx.showToast({
                title: t,
                icon: "none",
                duration: 1e3
            });
        });
    },
    loadMouldList: function() {
        this.getDevices();
    },
    getDevices: function() {
        var e = this;
        t.getDevices.call(e, {
            brand_id: e.data.selectedBrand.brand_id,
            group_by: "series"
        }, function(t) {
            e.loadMouldData(t);
        }, function(t) {
            wx.hideLoading(), wx.showToast({
                title: t,
                icon: "none",
                duration: 1e3
            });
        });
    },
    loadMouldData: function(t) {
        var e, a = this, i = t.length;
        t.length > 1 && (e = 150 * i + 40 + "rpx"), console.log(this.data.brandId);
        var n = 0;
        t.forEach(function(t, e) {
            t.series_id == a.data.brandId && (n = e);
        }), this.setData({
            scrollTop: 0,
            typeListData: t,
            isShow: !0,
            scrollWidth: e,
            typeIndex: n
        }), wx.hideLoading();
    },
    selectType: function(t) {
        var e = this;
        if (getApp().mtj.trackEvent("chose_model", {
            touch_count: 0,
            touch_brand: 0,
            touch_type: 1,
            touch_model: 0
        }), t.currentTarget) {
            var a = t.currentTarget.dataset;
            this.setData({
                typeIndex: a.index
            });
        }
        if (clearTimeout(this.data.timer), "24" == this.data.selectedBrand.brand_id && "0" == this.data.typeIndex) {
            this.setData({
                imageShow: !1
            });
            var i = this;
            i.data.timer = setTimeout(function() {
                i.imageAnimation.translateX(0).step(), i.setData({
                    imageShow: !0,
                    imageAnimation: e.imageAnimation.export()
                });
            }, 1e4);
        } else this.imageAnimation.translateX(0).step(), this.setData({
            imageShow: !0,
            imageAnimation: this.imageAnimation.export()
        });
    },
    selectBrand: function(t) {
        var e = this, a = t.currentTarget.dataset.idx, i = t.currentTarget.dataset.id;
        if (getApp().mtj.trackEvent("chose_model", {
            touch_count: 0,
            touch_brand: 1,
            touch_type: 0,
            touch_model: 0
        }), i != this.data.selectedBrand.brand_id) {
            var n = this.data.brandList[a];
            if (this.setData({
                selectedBrand: n,
                typeIndex: 0,
                animate: !1,
                brandId: 0
            }), this.loadMouldList(), clearTimeout(this.data.timer), "24" == this.data.selectedBrand.brand_id && "0" == this.data.typeIndex) {
                this.setData({
                    imageShow: !1
                });
                var o = this;
                o.data.timer = setTimeout(function() {
                    o.imageAnimation.translateX(0).step(), o.setData({
                        imageShow: !0,
                        imageAnimation: e.imageAnimation.export()
                    });
                }, 1e4);
            } else this.imageAnimation.translateX(0).step(), this.setData({
                imageShow: !0,
                imageAnimation: this.imageAnimation.export()
            });
        }
    },
    goToSearch: function() {
        getApp().mtj.trackEvent("chose_model", {
            touch_count: 1,
            touch_brand: 0,
            touch_type: 0,
            touch_model: 0
        }), wx.navigateTo({
            url: "../searchDevice/searchDevice"
        });
    },
    onShareAppMessage: function(t) {
        return {
            title: "Hi维修手机上门维修回收平台",
            path: "/pages/repair/home/home",
            imageUrl: "https://pic.hiweixiu.com/hiweixiu-mobile/img/wxshare.png"
        };
    },
    selectPhone: function(t) {
        var e = t.currentTarget.dataset;
        e.id = e.mouldid, e.brandId = this.data.selectedBrand.brand_id, getApp().mtj.trackEvent("choose_model", {
            select_model: e.mouldname
        }), getApp().mtj.trackEvent("chose_model", {
            touch_count: 0,
            touch_brand: 0,
            touch_type: 0,
            touch_model: 1
        });
        var a = JSON.stringify(e);
        this.data.back ? wx.redirectTo({
            url: "../faultDetail/faultDetail?info=" + a
        }) : wx.navigateTo({
            url: "../faultDetail/faultDetail?info=" + a
        });
    },
    goBack: function() {
        wx.navigateBack({
            delta: 1,
            fail: function() {
                console.log("无返回"), wx.switchTab({
                    url: "../home/home"
                });
            }
        });
    },
    getHwxDeviceInfo: function() {
        var a, i, n, o, s = this, d = e.globalData.wxDeviceInfo;
        a = d.brand, i = d.model, o = "", "unknown" == (n = e.handleModel(a, i)) && (o = i.match(/<(\S*)>/)[1]), 
        t.getMouldMine({
            mould_name: encodeURIComponent(n),
            brands: a,
            device_name: o,
            fault_id: s.data.fault_id
        }, function(t) {
            console.log("data==="), console.log(t), s.setData({
                myModule: t
            }), e.setHiDeviceInfo(t);
        }, function(t) {});
    },
    goMyPhone: function() {
        console.log(this.data.myModule);
        var t = this.data.myModule, e = JSON.stringify(t);
        this.data.back ? wx.redirectTo({
            url: "../faultDetail/faultDetail?info=" + e
        }) : wx.navigateTo({
            url: "../faultDetail/faultDetail?info=" + e
        });
    },
    showImage: function() {
        this.imageAnimation.translateX(0).step(), this.setData({
            imageAnimation: this.imageAnimation.export(),
            showCoformModel: !this.data.showCoformModel
        });
    },
    closeCofirmModel: function() {
        this.imageAnimation.translateX("70%").step(), this.setData({
            imageAnimation: this.imageAnimation.export(),
            showCoformModel: !this.data.showCoformModel
        });
    },
    oneKeyOrder: function() {
        var a = this;
        wx.showLoading();
        var i = e.globalData.hwxUserInfo.token;
        wx.getStorageSync("latlng") && t.switchLngLat({
            lat: JSON.parse(wx.getStorageSync("latlng")).lat,
            lng: JSON.parse(wx.getStorageSync("latlng")).lng
        }, function(t) {}, function(t) {});
        var n = wx.getStorageSync("latlng"), o = {
            lng: n ? JSON.parse(wx.getStorageSync("latlng")).lng : "",
            lat: n ? JSON.parse(wx.getStorageSync("latlng")).lat : ""
        };
        t.oneKeyOrder(i, o, function(t) {
            wx.hideLoading(), a.closeCofirmModel(), wx.showToast({
                title: "咨询已提交，客服将尽快与您取得联系",
                icon: "none",
                duration: 3e3
            });
        }, function(t) {
            wx.hideLoading();
        });
    },
    getPhoneNumberLogin: function(a) {
        var i = encodeURIComponent(a.detail.iv), n = encodeURIComponent(a.detail.encryptedData), o = this;
        wx.login({
            success: function(a) {
                wx.setStorageSync("CODE", a.code);
                wx.getStorageSync("CODE");
                "undefined" != n ? t.getWxLogin(encodeURIComponent(a.code), n, i, function(t) {
                    console.log(t), e.setHwxUserInfo(t.token, t.phone_number), o.setData({
                        isLogin: !0,
                        showCoformModel: !0
                    }), o.oneKeyOrder();
                }, function(t) {
                    console.log("err6666"), console.log(t), wx.showToast({
                        title: "授权之后才可以一键下单哦",
                        icon: "none",
                        duration: 1e3,
                        complete: function() {}
                    });
                }) : wx.navigateTo({
                    url: "../../personal/login/login"
                });
            },
            fail: function() {},
            complete: function() {}
        });
    }
});