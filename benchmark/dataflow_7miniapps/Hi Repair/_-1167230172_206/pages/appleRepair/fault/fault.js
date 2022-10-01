var e = require("../../../@babel/runtime/helpers/defineProperty"), t = require("../../../@babel/runtime/helpers/objectSpread2"), a = getApp(), i = require("../../../comm/script/fetch");

Page({
    data: {
        deviceInfo: null,
        deviceId: "",
        myModelName: "",
        colorList: [],
        colorId: "",
        colorName: "",
        faultList: [],
        faultId: "",
        faultDetailList: [],
        selectedWay: null,
        selectedRepair: !1,
        showButton: !1,
        repairWay: null,
        posTop: 0,
        scrollTop: 0,
        viewid: "",
        isPos: !1,
        name: "",
        id: "",
        isLogin: !1,
        btnText: "请先登录",
        isFullSucreen: !!a.globalData.isFullSucreen,
        disabled: !0,
        rp_id: null,
        isShowKf: !1,
        istrue_scroll: !1,
        scrollEndTimer: null
    },
    onLoad: function(e) {
        a.globalData.ref || (a.globalData.ref = e.ref);
        var t = this;
        setTimeout(function() {
            wx.createSelectorQuery().select(".mouldDetailContainer").boundingClientRect(function(e) {
                t.setData({
                    posTop: e.top
                });
            }).exec(), console.log("this.data.myModelName===="), console.log(wx.getStorageSync("latlng")), 
            wx.getStorageSync("latlng") && i.switchLngLat({
                lat: JSON.parse(wx.getStorageSync("latlng")).lat,
                lng: JSON.parse(wx.getStorageSync("latlng")).lng
            }, function(e) {}, function(e) {});
        });
    },
    scollThis: function(e) {
        e.detail.scrollTop > this.data.posTop - 10 ? this.setData({
            isPos: !0
        }) : this.setData({
            isPos: !1
        }), this.setData({
            istrue_scroll: !0
        });
        var t = this;
        this.scrollEndTimer && (clearTimeout(this.scrollEndTimer), this.scrollEndTimer = null), 
        this.scrollEndTimer = setTimeout(function() {
            console.log("滑动结束"), t.setData({
                istrue_scroll: !1
            });
        }, 2e3);
    },
    onShow: function() {
        var e = this, t = a.globalData.hwxUserInfo.phone, o = a.globalData.hwxUserInfo.token;
        t && o && i.getIsLogin(o, function(t) {
            "1" == t.is_login ? e.setData({
                isLogin: !0,
                btnText: "立即预约"
            }) : e.setData({
                isLogin: !1,
                btnText: "请先登录"
            });
        }, function(t) {
            e.setData({
                isLogin: !1,
                btnText: "请先登录"
            });
        });
        var l, n, s, r = a.globalData.wxDeviceInfo, c = this.data.name, d = this.data.id, u = "";
        d == this.data.deviceId && this.data.deviceId || (c && d ? (s = c, this.setData({
            deviceId: d,
            colorId: "",
            colorList: [],
            faultList: [],
            faultId: "",
            faultDetailList: [],
            selectedRepair: !1,
            repairWay: null,
            disabled: !0,
            selectedWay: null
        }), wx.showLoading()) : (l = r.brand, n = r.model, "unknown" == (s = a.handleModel(l, n)) && (u = n.match(/<(\S*)>/)[1])), 
        this.getMyDevicePrice(s, l, u), this.setData({
            myModelName: s
        }));
    },
    getMyDevicePrice: function(e, t, a) {
        var o = this;
        wx.showLoading();
        var l = {
            mould_name: e,
            brands: t,
            device_name: a,
            has_official_part: 1
        };
        i.getMouldMine(l, function(e) {
            console.log("res"), console.log(e), o.setData({
                deviceInfo: e,
                deviceId: e.id,
                colorId: "",
                id: e.id,
                name: e.name
            }), o.getMouldAttr();
        }, function(e) {
            o.setData({
                deviceInfo: null
            }), wx.hideLoading(), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
        });
    },
    getRepairMsg: function(e) {
        var t = this;
        i.getMouldDetail({
            mould_id: e,
            has_official_part: 1
        }, function(e) {
            var a = e.mould.colors;
            a.map(function(e) {
                return e.selected = !1;
            }), t.setData({
                colorList: a
            }), wx.hideLoading(), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
        }, function(e) {
            wx.showToast({
                title: e,
                icon: "none",
                duration: 1e3
            }), wx.hideLoading(), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
        });
    },
    chooseColor: function(e) {
        var a = e.currentTarget.dataset.index, i = e.currentTarget.dataset.item;
        if (i.id != this.data.colorId) {
            var o = this.data.colorList;
            this.setData({
                colorList: o.map(function(e, i) {
                    return t(t({}, e), {}, i == a ? {
                        selected: !0
                    } : {
                        selected: !1
                    });
                }),
                colorId: i.id,
                colorName: i.name,
                rp_id: i.rp_id,
                selectedRepair: !0,
                disabled: !0,
                showButton: !0,
                selectedWay: null,
                isShowKf: !1
            });
            var l = this;
            wx.createSelectorQuery().select(".mouldContainer").boundingClientRect(function(e) {
                wx.createSelectorQuery().select("#repairtype").boundingClientRect(function(t) {
                    wx.createSelectorQuery().select(".scrollview").scrollOffset(function(a) {
                        l.setData({
                            scrollTop: t.top + a.scrollTop - e.height
                        });
                    }).exec();
                }).exec();
            }).exec();
        }
    },
    getMouldAttr: function(e) {
        var t = this;
        wx.showLoading();
        var a = this;
        i.getAppleFault({
            mould_id: a.data.deviceId,
            has_official_part: 1
        }, function(e) {
            e.map(function(e) {
                return e.selected = !1;
            }), t.setData({
                faultList: e,
                selectedWay: 1
            }), wx.hideLoading(), wx.hideNavigationBarLoading();
        }, function(e) {
            wx.showToast({
                title: e,
                icon: "none",
                duration: 1e3
            }), a.setData({
                pageLoading: !1
            }), wx.hideLoading(), wx.hideNavigationBarLoading();
        });
    },
    callphone: function() {
        wx.makePhoneCall({
            phoneNumber: "4000171010"
        });
    },
    chooseFault: function(e) {
        var t = e.currentTarget.dataset.index, a = e.currentTarget.dataset.item;
        if (a.id != this.data.faultId) {
            var i = this.data.faultList;
            i.map(function(e, a) {
                return e.selected = !1, a == t && (e.selected = !0), e;
            }), a.faulttype_details.map(function(e) {
                return e.selected = !1;
            }), this.setData({
                faultList: i,
                faultId: a.id,
                faultDetailList: a.faulttype_details,
                selectedRepair: !1,
                disabled: !0,
                repairWay: null,
                selectedWay: null,
                isPos: !0,
                colorId: "",
                colorName: "",
                colorList: [],
                isShowKf: !1
            });
            var o = this;
            wx.createSelectorQuery().select(".mouldContainer").boundingClientRect(function(e) {
                wx.createSelectorQuery().select("#repairsol").boundingClientRect(function(t) {
                    wx.createSelectorQuery().select(".scrollview").scrollOffset(function(a) {
                        o.setData({
                            scrollTop: t.top + a.scrollTop - e.height
                        });
                    }).exec();
                }).exec();
            }).exec();
        }
    },
    chooseRepair: function(e) {
        var t = e.currentTarget.dataset.index, a = e.currentTarget.dataset.item;
        if (a.id != this.data.faultId) {
            var i = this.data.faultDetailList;
            i.map(function(e, a) {
                return e.selected = !1, a == t && (e.selected = !0), e;
            });
            var o = a.colors;
            o.map(function(e) {
                return e.selected = !1;
            }), this.setData({
                colorList: o,
                faultDetailList: i,
                repairWay: a,
                selectedRepair: !1,
                colorId: "",
                colorName: "",
                disabled: !0,
                isShowKf: !1
            });
            var l = this;
            wx.createSelectorQuery().select(".mouldContainer").boundingClientRect(function(e) {
                wx.createSelectorQuery().select("#colorsol").boundingClientRect(function(t) {
                    wx.createSelectorQuery().select(".scrollview").scrollOffset(function(a) {
                        l.setData({
                            scrollTop: t.top + a.scrollTop - e.height
                        });
                    }).exec();
                }).exec();
            }).exec();
        }
    },
    selectWay: function(e) {
        var t = e.currentTarget.dataset.index;
        this.setData({
            selectedWay: t,
            showButton: !0,
            disabled: !1,
            isShowKf: !1
        });
    },
    goOrder: function() {
        var t;
        if (!this.data.disabled) {
            if (!this.data.isLogin) return wx.navigateTo({
                url: "../../personal/chooseLogin/chooseLogin"
            });
            this.setData({
                isShowKf: !1
            });
            var a = (t = {
                model_name: this.data.myModelName,
                repair_id: this.data.rp_id,
                price: this.data.repairWay.price,
                official_price: this.data.repairWay.official_price,
                fault_name: this.data.repairWay.name,
                fault_desc: this.data.repairWay.fault_descr,
                color_name: this.data.colorName,
                type: this.data.selectedWay
            }, e(t, "type", this.data.selectedWay), e(t, "holiday_manual_fee", this.data.repairWay.holiday_manual_fee), 
            e(t, "holiday_name", this.data.repairWay.holiday_name), t);
            wx.navigateTo({
                url: "../order/order?data=" + JSON.stringify(a)
            });
        }
    },
    goSelectPhone: function() {
        wx.navigateTo({
            url: "../phonemodel/phonemodel"
        });
    },
    hideModal: function() {
        this.setData({
            isShowModal: !1
        });
    },
    showKf: function() {
        this.setData({
            isShowKf: !this.data.isShowKf
        });
    },
    makePhoncall: function() {
        wx.makePhoneCall({
            phoneNumber: "4000171010"
        });
    },
    showPreview: function() {
        wx.previewImage({
            current: "https://image.hiweixiu.com/web-template/home_csr_img_background.png",
            urls: [ "https://image.hiweixiu.com/web-template/home_csr_img_background.png" ]
        });
    }
});