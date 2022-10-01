var t = require("../../../comm/script/fetch"), e = (require("../../../comm/script/config"), 
require("../../../util/util"), getApp());

Page({
    timeView: void 0,
    data: {
        noDefaultAddress: !0,
        tipsShow: !1,
        wayList: [ {
            name: "到店维修",
            active: !0,
            id: 3,
            sort: 2,
            detail: "下单后门店电话确认"
        }, {
            name: "邮寄维修",
            active: !0,
            id: 2,
            sort: 3,
            detail: "运费需用户自行承担"
        } ],
        wayChoosedTxt: "请选择维修方式",
        wayIschoose: !1,
        category: "",
        centerList: [],
        center_id: "",
        centerIndex: "",
        centerIschoose: !1,
        centerChoosedTxt: "请选择维修中心",
        modelChoosedTxt: "请选择机型型号",
        imei: "",
        remark: "",
        defaultAddress: "",
        isModelShow: !1,
        totalPrice: "",
        payPrice: "",
        discount: "",
        manual_fee: "",
        night_fee: "",
        visit_fee: "",
        city_coupon: null,
        couponData: "",
        coupon_code: "",
        couponIsChoose: !1,
        wenXinTiShi: [ "1、具体维修时间以工程师预约为准；", "2、损坏零件工程师需要收回，如需自留需另补差价；", "3、该维修价格为预计金额，实际金额以工程师检测故障为准；", "4、上门通过技术调试(未涉及零件)即完成维修，则仅收取90元修复费；", "注：因城市差异价格会略有不同" ],
        modelValues: [ 0, 0 ],
        modelval: [ 0, 0 ]
    },
    onLoad: function(t) {
        if (wx.removeStorageSync("origin"), "addressList" == t.origin) {
            var e = wx.getStorageSync("address");
            this.setData({
                defaultAddress: e,
                noDefaultAddress: !1
            }), console.log("1111");
        } else wx.removeStorageSync("optionsLs"), wx.removeStorageSync("address"), console.log("22222"), 
        this.getDefaultAddress(t.rp_id), wx.showLoading({
            title: "加载中",
            mask: !0
        });
        this.getCenterList(), this.getReminder(), this.wayAnimation = wx.createAnimation({
            duration: 300
        }), this.timeAnimation = wx.createAnimation({
            duration: 300
        }), this.centerAnimation = wx.createAnimation({
            duration: 300
        }), this.getMemoryUp();
    },
    onShow: function() {
        e.checkIsLogin(this, !0), this.data.couponIsChoose ? this.setData({
            totalPrice: this.data.couponData.price,
            payPrice: this.data.couponData.payprice,
            discount: this.data.couponData.discount,
            manual_fee: this.data.couponData.manual_fee,
            night_fee: this.data.couponData.night_fee,
            visit_fee: this.data.couponData.visit_fee
        }) : this.data.rp_id && this.popDown();
    },
    wayUp: function() {
        "" != this.data.defaultAddress ? (this.wayAnimation.translateY(0).step(), this.setData({
            wayAnimation: this.wayAnimation.export(),
            isModelShow: !0
        })) : wx.showToast({
            title: "请先新增地址",
            image: "../../../img/wx_index/warning.png",
            duration: 2e3
        });
    },
    chooseWay: function(t) {
        if (console.log(t), t.currentTarget.dataset.active) {
            var e = t.currentTarget.dataset.txt, a = t.currentTarget.dataset.category;
            this.setData({
                wayIschoose: !0,
                wayChoosedTxt: e,
                category: a
            }), this.popDown(), this.clearCoupon();
        } else wx.showToast({
            title: "暂不支持",
            image: "../../../img/wx_index/warning.png",
            duration: 2e3
        });
    },
    clearCoupon: function() {
        this.setData({
            couponData: "",
            coupon_code: "",
            couponIsChoose: !1
        });
    },
    modelUp: function() {
        this.timeAnimation.translateY(0).step(), this.setData({
            timeAnimation: this.timeAnimation.export(),
            isModelShow: !0
        });
    },
    getMemoryUp: function(e, a) {
        var i = this;
        t.getMemoryUp.call(i, function(t) {
            i.setData({
                modelAttr: t,
                faults: t[0].faults
            });
        }, function(t) {
            wx.showToast({
                title: t,
                icon: "none",
                duration: 1e3
            });
        });
    },
    modelChange: function(t) {
        var e = t.detail.value, a = this.data.modelValues;
        if (e[0] == a[0]) if (e[1] == a[1]) this.clearCoupon(); else {
            console.log("升级类型 改变 ");
            i = this.data.modelAttr[e[0]].model_name + "/" + this.data.modelAttr[e[0]].faults[e[1]].fault_detail_name;
            this.setData({
                faults: this.data.modelAttr[e[0]].faults,
                modelChoosedTxt: i,
                modelIschoose: !0,
                rp_id: this.data.modelAttr[e[0]].faults[e[1]].rp_id,
                modelValues: e,
                modelval: e
            });
        } else {
            console.log("model 改变 ");
            var i = this.data.modelAttr[e[0]].model_name + "/" + this.data.modelAttr[e[0]].faults[0].fault_detail_name;
            this.setData({
                faults: this.data.modelAttr[e[0]].faults,
                modelChoosedTxt: i,
                modelIschoose: !0,
                rp_id: this.data.modelAttr[e[0]].faults[0].rp_id,
                modelValues: e,
                modelval: [ e[0], 0 ]
            });
        }
    },
    confirmTime: function() {
        if (!this.data.modelIschoose) {
            var t = this.data.modelAttr[0].model_name + " / " + this.data.modelAttr[0].faults[0].fault_detail_name;
            this.setData({
                faults: this.data.modelAttr[0].faults,
                modelChoosedTxt: t,
                modelIschoose: !0,
                rp_id: this.data.modelAttr[0].faults[0].rp_id
            });
        }
        this.popDown();
    },
    getCenterList: function() {
        var e = this;
        t.getCenterList.call(e, function(t) {
            console.log(t), e.setData({
                centerList: t
            });
        }, function(t) {});
    },
    getReminder: function() {
        var e = this;
        t.getReminders.call(e, function(t) {
            console.log(t), e.setData({
                wenXinTiShi: t.content
            });
        }, function(t) {});
    },
    centerUp: function() {
        this.centerAnimation.translateY(0).step(), this.setData({
            centerAnimation: this.centerAnimation.export(),
            isModelShow: !0
        });
    },
    centerChange: function(t) {
        console.log(t);
        var e = t.detail.value;
        this.setData({
            centerChoosedTxt: this.data.centerList[e[0]].name,
            centerIschoose: !0,
            center_id: this.data.centerList[e[0]].id,
            centerIndex: e[0]
        }), this.clearCoupon();
    },
    confirmCenter: function() {
        this.data.centerIschoose || this.setData({
            centerChoosedTxt: this.data.centerList[0].name,
            centerIschoose: !0,
            center_id: this.data.centerList[0].id,
            centerIndex: 0
        }), this.popDown();
    },
    popDown: function() {
        this.wayAnimation.translateY("100%").step(), this.timeAnimation.translateY("100%").step(), 
        this.centerAnimation.translateY("100%").step(), this.setData({
            timeAnimation: this.timeAnimation.export(),
            wayAnimation: this.wayAnimation.export(),
            centerAnimation: this.centerAnimation.export(),
            isModelShow: !1
        });
        var t = {};
        t.city_id = this.data.defaultAddress.city_id, t.rp_id = this.data.rp_id, t.is_warrantable = this.data.is_warrantable, 
        t.category = this.data.category, t.district_id = this.data.defaultAddress.district_id, 
        t.reserve_time = this.data.reserve_time, t.reserve_time2 = this.data.reserve_time2, 
        this.data.centerIschoose && 1 != this.data.category && (t.city_id = this.data.centerList[this.data.centerIndex].city, 
        t.district_id = this.data.centerList[this.data.centerIndex].district), this.getCityPrice(t);
    },
    setIMEI: function(t) {
        this.setData({
            imei: t.detail.value
        });
    },
    setRemark: function(t) {
        this.setData({
            remark: t.detail.value
        });
    },
    addAddress: function(t) {
        wx.redirectTo({
            url: "../../personal/addAddress/addAddress?origin=memory"
        });
    },
    selectAddress: function(t) {
        wx.redirectTo({
            url: "../../personal/addressList/addressList?origin=memory"
        });
    },
    createOrder: function() {
        this.data.noDefaultAddress ? wx.showToast({
            title: "请填写地址",
            image: "../../../img/wx_index/warning.png",
            duration: 1500
        }) : this.data.wayIschoose ? 2 != this.data.category || this.data.imei ? 1 == this.data.category || this.data.centerIschoose ? (wx.showLoading({
            title: "正在下单中",
            mask: !0
        }), this.getCreateOrder()) : wx.showToast({
            title: "请选择维修中心",
            image: "../../../img/wx_index/warning.png",
            duration: 1500
        }) : wx.showToast({
            title: "请输入imei号",
            image: "../../../img/wx_index/warning.png",
            duration: 1500
        }) : wx.showToast({
            title: "请选择维修方式",
            image: "../../../img/wx_index/warning.png",
            duration: 1500
        });
    },
    getCreateOrder: function() {
        var a = {};
        a.rp_id = this.data.rp_id, a.category = this.data.category, a.remark = this.data.remark, 
        a.user_address_id = this.data.defaultAddress.id, a.is_warrantable = this.data.is_warrantable, 
        1 == this.data.category ? (a.reserve_time = this.data.reserve_time, a.reserve_time2 = this.data.reserve_time2, 
        console.log(111111)) : 3 == this.data.category ? a.weixiucenter_id = this.data.center_id : 2 == this.data.category && (a.weixiucenter_id = this.data.center_id, 
        a.imei = this.data.imei), this.data.couponIsChoose ? a.coupon_code = this.data.coupon_code : a.coupon_code = "", 
        console.log(a);
        var i = e.globalData.hwxUserInfo.token;
        console.log(a), t.getCreateOrder.call(this, i, a, function(t) {
            wx.hideLoading(), wx.navigateTo({
                url: "../orderSubmitted/orderSubmitted"
            });
        }, function(t) {
            wx.hideLoading(), wx.showToast({
                title: t,
                icon: "none",
                duration: 1500
            });
        });
    },
    goToCoupon: function() {
        if (this.data.noDefaultAddress) wx.showToast({
            title: "请填写地址",
            image: "../../../img/wx_index/warning.png",
            duration: 1500
        }); else if (this.data.wayIschoose) if (1 == this.data.category || this.data.centerIschoose) {
            var t = {};
            t.rp_id = this.data.rp_id, t.category = this.data.category, t.is_warrantable = 0, 
            1 == this.data.category ? (t.reserve_time = this.data.reserve_time, t.reserve_time2 = this.data.reserve_time2, 
            t.city = this.data.defaultAddress.city_id, t.district = this.data.defaultAddress.district_id) : (3 == this.data.category || 2 == this.data.category) && (t.city = this.data.centerList[this.data.centerIndex].city, 
            t.district = this.data.centerList[this.data.centerIndex].district), wx.navigateTo({
                url: "../couponList/couponList?info=" + JSON.stringify(t)
            });
        } else wx.showToast({
            title: "请选择维修中心",
            image: "../../../img/wx_index/warning.png",
            duration: 1500
        }); else wx.showToast({
            title: "请选择维修方式",
            image: "../../../img/wx_index/warning.png",
            duration: 1500
        });
    },
    toUserAgreement: function() {
        wx.navigateTo({
            url: "../userAgreementWeb/userAgreementWeb"
        });
    },
    tipsOpen: function() {
        this.setData({
            tipsShow: !this.data.tipsShow
        });
    },
    getDefaultAddress: function(a) {
        var i = this, s = e.globalData.hwxUserInfo.token;
        t.getDefaultAddress.call(i, s, function(t) {
            console.log(t), i.setData({
                defaultAddress: t,
                noDefaultAddress: !1
            }), wx.hideLoading();
        }, function(t) {
            i.setData({
                noDefaultAddress: !0
            }), wx.hideLoading(), console.log(t);
        });
    },
    getCityPrice: function(e) {
        var a = this;
        t.getCityPrice.call(a, e, function(t) {
            console.log(t), a.setData({
                totalPrice: t.price,
                payPrice: t.payprice,
                discount: t.discount,
                manual_fee: t.manual_fee,
                night_fee: t.night_fee,
                visit_fee: t.visit_fee,
                city_coupon: t.city_coupon
            });
        }, function(t) {});
    },
    stopTouchMove: function() {},
    stopTap: function() {}
});