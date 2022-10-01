require("../../../comm/script/config");

var t = require("../../../comm/script/fetch"), o = (require("../../../util/util"), 
getApp());

Page({
    data: {
        isFullSucreen: !!o.globalData.isFullSucreen,
        pageLoading: !0,
        isLogin: !1,
        colorIschoose: !0,
        colorOpen: !1,
        colorVal: [ 0 ],
        currentColorId: "",
        selectedColor: "",
        isWarranty: !1,
        warrantyTxt: "保修外",
        isWarrantyIndex: 0,
        childOpenIndex: -1,
        selectedFault: [],
        faultIndex: 0,
        repairTypeIndex: 0,
        isShowNotFound: !1,
        showModal: !1,
        allAttrTotalPrice: "0.00",
        allOfficialPrice: "0.00",
        showCoformModel: !1,
        showUnderLinePrice: !1,
        couponsData: null,
        curNumber: null,
        couponsNum: null,
        loginDialogShow: !1,
        showCouponModal: !1,
        couponList: []
    },
    onLoad: function(t) {
        wx.showLoading({
            title: "获取数据中",
            mask: !0
        }), wx.showNavigationBarLoading(), this.colorAnimation = wx.createAnimation({
            duration: 300
        }), this.imageAnimation = wx.createAnimation({
            duration: 300
        }), this.faultListAnimation = wx.createAnimation({
            duration: 300
        }), this.couponAnimation = wx.createAnimation({
            duration: 300
        });
        var o = t.info.toLowerCase();
        console.log(o), this.setData({
            info: JSON.parse(o)
        }), this.getRepairMsg();
    },
    onShow: function() {
        var e = o.globalData.hwxUserInfo.phone, a = o.globalData.hwxUserInfo.token, n = this;
        e && a && t.getIsLogin(a, function(t) {
            "1" == t.is_login ? n.setData({
                isLogin: !0
            }) : n.setData({
                isLogin: !1
            });
        }, function(t) {
            n.setData({
                isLogin: !1
            });
        }), this.getCoupon(), this.getFulicouponList();
    },
    getRepairMsg: function() {
        var o = this;
        t.getMouldDetail({
            mould_id: o.data.info.mouldid || o.data.info.id
        }, function(t) {
            o.setData({
                phoneAttr: t
            }), wx.setNavigationBarTitle({
                title: t.mould.name + " 维修故障"
            }), -1 != o.data.phoneAttr.mould.name.indexOf("iPhone") ? setTimeout(function() {
                o.imageAnimation.translateX("0").step(), console.log("timeout"), o.setData({
                    imageAnimation: o.imageAnimation.export(),
                    isShowNotFound: !0
                });
            }, 1e4) : (o.imageAnimation.translateX("0").step(), o.setData({
                imageAnimation: o.imageAnimation.export(),
                isShowNotFound: !0
            })), o.getMouldAttr(o.data.info.color_id || t.mould.colors[0].id), o.setData({
                currentColorId: t.mould.colors[0].id,
                colorChoosedTxt: t.mould.colors[0].name
            }), o.data.info.color_id && t.mould.colors.forEach(function(t, e, a) {
                if (t.id == o.data.info.color_id) {
                    var n = [];
                    n.push(e), o.setData({
                        currentColorId: t.id,
                        colorChoosedTxt: t.name,
                        colorVal: n,
                        colorIschoose: !0,
                        faultModalShow: !1
                    });
                }
            });
        }, function(t) {
            console.log("err6666"), console.log(t), wx.showToast({
                title: t,
                icon: "none",
                duration: 1e3
            }), wx.hideLoading(), wx.hideNavigationBarLoading();
        });
    },
    getMouldAttr: function(o) {
        var e = this;
        t.getMouldAttr({
            color_id: o,
            mould_id: e.data.info.mouldid || e.data.info.id
        }, function(t) {
            wx.hideLoading(), wx.hideNavigationBarLoading();
            var o = t;
            o.forEach(function(t) {
                t.selected = !1, t.selected_num = 0, t.showtotast = !1;
            }), console.log("-------------"), console.log(e.data.info), console.log(o);
            for (var a = function(t) {
                e.data.info.faultid == o[t].id && e.setData({
                    childOpenIndex: t
                }), o[t].faulttype_details.forEach(function(a, n, i) {
                    if (a.selected = !1, a.rp_id == e.data.info.rp_id) {
                        a.selected = !0, a.index = t, a.child_index = n, o[t].selected_num = 1;
                        var s;
                        s = a;
                        var l = e.data.selectedFault;
                        l.unshift(s);
                        var r = e.data.faultAttr, d = e.data.repairTypeList;
                        e.setData({
                            repairTypeList: d,
                            selectedFault: l,
                            faultAttr: r
                        }), e.getTotalPrice(l);
                    }
                });
            }, n = 0; n < o.length; n++) a(n);
            e.setData({
                faultAttr: o,
                pageLoading: !1
            });
        }, function(t) {
            wx.showToast({
                title: t,
                icon: "none",
                duration: 1e3
            }), e.setData({
                pageLoading: !1
            }), wx.hideLoading(), wx.hideNavigationBarLoading();
        });
    },
    getTotalPrice: function(t) {
        for (var o = t, e = 0, a = 0, n = !1, i = 0; i < o.length; i++) this.data.isWarranty ? e += 1 * o[i].honai_price : e += 1 * o[i].price, 
        1 == o[i].is_show_underlined_price && (n = !0), console.log(o[i].underlined_price), 
        a += 1 * o[i].underlined_price;
        this.setData({
            allAttrTotalPrice: e.toFixed(2),
            allOfficialPrice: a.toFixed(2),
            showUnderLinePrice: n
        });
    },
    childOpen: function(t) {
        console.log(t);
        var o = t.currentTarget.dataset;
        o.index == this.data.childOpenIndex ? this.setData({
            childOpenIndex: -1
        }) : this.setData({
            childOpenIndex: o.index
        });
    },
    chooseChildItem: function(t) {
        var o = this;
        if (console.log(t), 0 == t.currentTarget.dataset.selected) {
            var e;
            e = s = t.currentTarget.dataset;
            var a = (i = this).data.selectedFault;
            a.unshift(e), (n = i.data.faultAttr)[s.index].faulttype_details[s.child_index].selected = !0, 
            n[s.index].selected_num = n[s.index].selected_num + 1, "34" != n[s.index].id && "84" != n[s.index].id || 2 != n[s.index].selected_num || n[s.index].showtotast || (wx.showToast({
                title: "同类故障无需重复选择",
                icon: "none",
                duration: 2e3
            }), n[s.index].showtotast = !0), this.setData({
                selectedFault: a,
                faultAttr: n
            }), this.getTotalPrice(a);
        } else {
            var n, i = this, s = t.currentTarget.dataset;
            console.log(s.index, s.child_index), (n = i.data.faultAttr)[s.index].faulttype_details[s.child_index].selected = !1, 
            n[s.index].selected_num = n[s.index].selected_num - 1, this.setData({
                faultAttr: n
            }), this.data.selectedFault.forEach(function(t, e, a) {
                if (t.rp_id == s.rp_id) {
                    var n = a;
                    a.splice(e, 1), i.setData({
                        selectedFault: n
                    }), o.getTotalPrice(n);
                }
            }), 0 == this.data.selectedFault.length && (this.faultListAnimation.translateY("120%").step(), 
            this.setData({
                faultListAnimation: this.faultListAnimation.export(),
                showModal: !1
            }));
        }
    },
    dialogUpShow: function() {
        this.colorAnimation.translateY(0).step(), this.setData({
            colorAnimation: this.colorAnimation.export(),
            isModelShow: !0
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
    dialogDownHidden: function() {
        this.colorAnimation.translateY("100%").step(), this.setData({
            colorAnimation: this.colorAnimation.export(),
            isModelShow: !1
        });
    },
    choosePhoneColor: function(t) {
        var o = t.currentTarget.dataset;
        this.data.currentColorId != o.id && (this.setData({
            colorChoosedTxt: o.name,
            colorIschoose: !0,
            currentColorId: o.id
        }), wx.removeStorageSync("selectedFault"), this.setData({
            selectedFault: [],
            allAttrTotalPrice: "0.00",
            allOfficialPrice: "0.00",
            "info.faultid": "",
            "info.rp_id": ""
        }), this.getMouldAttr(o.id));
    },
    colorSure: function() {
        this.data.colorIschoose || (wx.removeStorageSync("selectedFault"), this.setData({
            selectedFault: [],
            allAttrTotalPrice: "",
            allOfficialPrice: "0.00"
        }), this.setData({
            colorChoosedTxt: this.data.phoneAttr.mould.colors[0].name,
            colorIschoose: !0,
            currentColorId: this.data.phoneAttr.mould.colors[0].id
        }), this.getMouldAttr(this.data.phoneAttr.mould.colors[0].id)), this.dialogDownHidden();
    },
    selectWarranty: function(t) {
        console.log(t.currentTarget.dataset), 1 == t.currentTarget.dataset.iswarrantyindex ? this.setData({
            warrantyTxt: "保修内",
            isWarrantyIndex: 1,
            isWarranty: !0
        }) : this.setData({
            warrantyTxt: "保修外",
            isWarrantyIndex: 0,
            isWarranty: !1
        }), this.getTotalPrice(this.data.selectedFault);
    },
    next: function() {
        if (console.log(this.data.colorIschoose, this.data.currentColorId), !this.data.colorIschoose && this.data.phoneAttr.mould.colors.length > 1) return wx.showToast({
            title: "请选择机型颜色",
            icon: "none"
        }), void this.dialogUpShow();
        0 != this.data.selectedFault.length ? this.goToCreateOrder() : wx.showToast({
            title: "请选择故障类型",
            icon: "none"
        });
    },
    goToCreateOrder: function() {
        for (var t = [], o = 0; o < this.data.selectedFault.length; o++) t.push(this.data.selectedFault[o].rp_id);
        this.data.selectedFault.forEach(function(t) {
            getApp().mtj.trackEvent("choose_fault", {
                choose_fault: t.name
            });
        }), getApp().mtj.trackEvent("malfunction_amount", {
            choose_quantity: this.data.selectedFault.length
        }), console.log("this.data.selectedFault==="), console.log(this.data.selectedFault), 
        wx.setStorageSync("selectedFault", this.data.selectedFault), wx.navigateTo({
            url: "../createOrder/createOrder?mouldId=" + (this.data.phoneAttr.mould.id || this.data.info.id) + "&mouldName=" + this.data.phoneAttr.mould.name + "&color=" + this.data.currentColorId + "&colorName=" + this.data.colorChoosedTxt + "&is_warrantable=" + this.data.isWarrantyIndex + "&rp_id=" + t.join(",")
        });
    },
    goToChooseDevice: function() {
        wx.redirectTo({
            url: "../chooseDevice/chooseDevice?faultInfo=" + JSON.stringify(this.data.info) + "&back=1"
        });
    },
    goToFaultDes: function() {
        wx.navigateTo({
            url: "../repairDesWeb/repairDesWeb?model_id=" + this.data.phoneAttr.mould.id
        });
    },
    controllFaultList: function(t) {
        (this.data.selectedFault.length || "open" != t.currentTarget.dataset.type) && (this.data.showModal ? this.faultListAnimation.translateY("120%").step() : this.faultListAnimation.translateY("4rpx").step(), 
        this.setData({
            faultListAnimation: this.faultListAnimation.export(),
            showModal: !this.data.showModal
        }));
    },
    oneKeyOrder: function() {
        var e = this;
        wx.showLoading();
        var a = o.globalData.hwxUserInfo.token;
        wx.getStorageSync("latlng") && t.switchLngLat({
            lat: JSON.parse(wx.getStorageSync("latlng")).lat,
            lng: JSON.parse(wx.getStorageSync("latlng")).lng
        }, function(t) {}, function(t) {});
        var n = wx.getStorageSync("latlng"), i = {
            lng: n ? JSON.parse(wx.getStorageSync("latlng")).lng : "",
            lat: n ? JSON.parse(wx.getStorageSync("latlng")).lat : "",
            mould_id: this.data.info.mouldid
        };
        t.oneKeyOrder(a, i, function(t) {
            wx.hideLoading(), e.closeCofirmModel(), wx.showToast({
                title: "咨询已提交，客服将尽快与您取得联系",
                icon: "none",
                duration: 3e3
            });
        }, function(t) {
            wx.hideLoading();
        });
    },
    getPhoneNumberLogin: function(e) {
        var a = encodeURIComponent(e.detail.iv), n = encodeURIComponent(e.detail.encryptedData), i = this;
        wx.login({
            success: function(e) {
                wx.setStorageSync("CODE", e.code);
                wx.getStorageSync("CODE");
                "undefined" != n ? t.getWxLogin(encodeURIComponent(e.code), n, a, function(t) {
                    console.log(t), o.setHwxUserInfo(t.token, t.phone_number), i.setData({
                        isLogin: !0,
                        showCoformModel: !0
                    }), i.oneKeyOrder();
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
    },
    getCoupon: function() {
        var o = this;
        t.getRepairFaultCoupon(function(t) {
            o.setData({
                couponsData: t.coupons,
                couponsNum: t.total
            });
        }, function(t) {});
    },
    getCouponItem: function(t) {
        console.log(t);
        var e = t.currentTarget.dataset;
        if (this.setData({
            curNumber: e.number
        }), 1 != e.is_bound) if (this.data.isLogin) {
            var a = {};
            a.phone_number = o.globalData.hwxUserInfo.phone, a.batch_number = e.number, this.PostRepairFaultCouponReceive(a);
        } else this.setData({
            loginDialogShow: !0
        });
    },
    PostRepairFaultCouponReceive: function(o) {
        var e = this;
        t.PostRepairFaultCouponReceive(o, function(t) {
            wx.showToast({
                title: "领取成功"
            }), e.getCoupon();
        }, function(t) {
            wx.showToast({
                title: t
            });
        });
    },
    cancelLoginDialog: function() {
        this.setData({
            loginDialogShow: !1
        });
    },
    getPhoneNumber: function(e) {
        var a = encodeURIComponent(e.detail.iv), n = encodeURIComponent(e.detail.encryptedData), i = this, s = wx.getStorageSync("CODE");
        "undefined" != n ? t.getWxLogin(encodeURIComponent(s), n, a, function(t) {
            console.log(t), o.setHwxUserInfo(t.token, t.phone_number), i.setData({
                isLogin: !0
            }), i.getCoupon(), i.getFulicouponList(), i.setData({
                loginDialogShow: !1
            });
        }, function(t) {
            console.log("err6666"), console.log(t), wx.showToast({
                title: "微信授权登录失败",
                icon: "none",
                duration: 1e3,
                complete: function() {
                    wx.navigateTo({
                        url: "../../personal/login/login"
                    });
                }
            });
        }) : wx.navigateTo({
            url: "../../personal/login/login"
        });
    },
    couponShow: function(t) {
        this.data.showCouponModal ? this.couponAnimation.translateY("120%").step() : this.couponAnimation.translateY("4rpx").step(), 
        this.setData({
            couponAnimation: this.couponAnimation.export(),
            showCouponModal: !this.data.showCouponModal
        });
    },
    getFulicouponList: function() {
        var e = this, a = o.globalData.hwxUserInfo.token, n = [];
        t.getFulicouponList(a, {
            type: 1
        }, function(t) {
            t.forEach(function(t) {
                t.active = !1, n.push(t);
            }), e.setData({
                couponList: n
            }), wx.hideLoading();
        }, function(t) {
            wx.hideLoading();
        });
    },
    lingquNow: function(t) {
        var e = o.globalData.hwxUserInfo.token, a = t.currentTarget.dataset.number;
        this.data.isLogin ? this.repairCouponget(e, a) : this.setData({
            loginDialogShow: !0
        });
    },
    repairCouponget: function(e, a) {
        var n = this, i = {
            batch_number: a,
            phone_number: o.globalData.hwxUserInfo.phone
        };
        t.getFulishecoupon(e, i, function(t) {
            wx.showToast({
                title: "领取成功",
                duration: 1500,
                mask: !1
            }), n.setData({
                number: null
            }), setTimeout(function() {
                n.getFulicouponList();
            }, 1500);
        }, function(t) {
            wx.showToast({
                title: t,
                icon: "none",
                image: "",
                duration: 1500
            }), n.setData({
                number: null
            }), setTimeout(function() {
                n.getFulicouponList();
            }, 1500);
        });
    }
});