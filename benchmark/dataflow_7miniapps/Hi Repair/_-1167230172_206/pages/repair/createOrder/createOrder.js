var t, e = require("../../../@babel/runtime/helpers/defineProperty"), a = require("../../../comm/script/fetch"), i = getApp();

Page({
    data: (t = {
        createOrderShow: !1,
        pageLoading: !0,
        isFullSucreen: !!i.globalData.isFullSucreen,
        cardCur: 0,
        swiperList: [ {
            id: 11121
        }, {
            id: 22222
        } ],
        showSwiper: !0,
        rp_id2: "",
        detailBgShow: !1,
        tipsShow: !1,
        animationData: {},
        text: "苹果官方配件仅支持北京、深圳、杭州、广州、成都、重庆、南京，其他城市请联系热线客服！",
        addTipShow: !0,
        rp_id: "",
        mouldId: "",
        mouldName: "",
        colorId: "",
        selectedFault: [],
        is_warrantable: 0,
        noDefaultAddress: !0
    }, e(t, "tipsShow", !1), e(t, "category", 1), e(t, "canGetTime", !1), e(t, "dateList", []), 
    e(t, "periods", []), e(t, "timeChoosedTxt", "请选择预约时间"), e(t, "timeIschoose", !1), 
    e(t, "reserve_time", ""), e(t, "reserve_time2", ""), e(t, "centerList", []), e(t, "center_id", ""), 
    e(t, "centerIndex", ""), e(t, "centerIschoose", !1), e(t, "centerChoosedTxt", "请选择维修中心"), 
    e(t, "imei", ""), e(t, "remark", ""), e(t, "inputShow", !1), e(t, "remark_focus", !1), 
    e(t, "defaultAddress", ""), e(t, "isModelShow", !0), e(t, "totalPrice", ""), e(t, "payPrice", ""), 
    e(t, "underlined_discount", ""), e(t, "total_discount", ""), e(t, "discount", ""), 
    e(t, "manual_fee", ""), e(t, "holidayName", ""), e(t, "night_fee", ""), e(t, "visit_fee", ""), 
    e(t, "city_coupon", null), e(t, "couponData", ""), e(t, "coupon_code", ""), e(t, "couponIsChoose", !1), 
    e(t, "firstGet", !0), e(t, "noUseCoupon", !1), e(t, "wenXinTiShi", [ "1、具体维修时间以工程师预约为准；", "2、损坏零件工程师需要收回，如需自留需另补差价；", "3、该维修价格为预计金额，实际金额以工程师检测故障为准；", "4、上门通过技术调试(未涉及零件)即完成维修，则仅收取90元修复费；", "注：因城市差异价格会略有不同" ]), 
    e(t, "timeValues", [ 0, 0 ]), e(t, "timeval", [ 0, 0 ]), e(t, "ellipsis", -1), e(t, "detailFaultMore", !0), 
    e(t, "couponIndex", null), e(t, "selectFaultLs", null), e(t, "couponCount", 0), 
    e(t, "tipData", ""), e(t, "showTipData", !1), e(t, "showTipModal", !1), e(t, "tipsText", ""), 
    t),
    showModel: function(t) {
        var e = t.currentTarget.dataset.text;
        this.setData({
            tipsText: e,
            showTipModal: !0
        });
    },
    closeModalShow: function() {
        this.setData({
            showTipModal: !1
        });
    },
    onLoad: function(t) {
        console.log("我是onload------");
        var e = wx.getStorageSync("selectedFault");
        if (console.log("selectFaultLs---==="), console.log(e), e.forEach(function(t, e) {
            t.active = !1;
        }), this.setData({
            selectFaultLs: e
        }), wx.removeStorageSync("origin"), "addressList" == t.origin) {
            var a = wx.getStorageSync("optionsLs"), i = wx.getStorageSync("address");
            this.setData({
                mouldId: a.mouldId,
                mouldName: a.mouldName,
                colorId: a.color,
                colorName: a.colorName,
                is_warrantable: a.is_warrantable,
                rp_id: a.rp_id,
                selectedFault: e,
                defaultAddress: i,
                noDefaultAddress: !1
            });
        } else if ("createOrder" == t.origin) {
            a = wx.getStorageSync("optionsLs");
            this.setData({
                mouldId: a.mouldId,
                mouldName: a.mouldName,
                colorId: a.color,
                colorName: a.colorName,
                is_warrantable: a.is_warrantable,
                rp_id: a.rp_id,
                selectedFault: e
            });
        } else wx.removeStorageSync("optionsLs"), wx.removeStorageSync("address"), this.setData({
            mouldId: t.mouldId,
            mouldName: t.mouldName,
            colorId: t.color,
            colorName: t.colorName,
            is_warrantable: t.is_warrantable,
            rp_id: t.rp_id,
            selectedFault: e
        }), wx.setStorageSync("optionsLs", t);
        console.log(this.data.rp_id), t.createOrderTabIndex && this.setData({
            category: t.createOrderTabIndex
        }), this.getPackCouponList(), this.getCenterList(), this.getReminder(), this.detailAnimation = wx.createAnimation({
            duration: 300
        }), this.timeAnimation = wx.createAnimation({
            duration: 300
        }), this.centerAnimation = wx.createAnimation({
            duration: 300
        }), this.imeiAnimation = wx.createAnimation({
            duration: 300
        }), this.orderAnimation = wx.createAnimation({
            duration: 300,
            transformOrigin: "100% 100% 0"
        }), wx.getStorageSync("createOrder") && this.setData({
            createOrderShow: !0
        }), this.orderAnimation.scale(.96).step({
            duration: 200
        }), this.orderAnimation.scale(1.04).step({
            duration: 200
        }), this.orderAnimation.scale(1).step({
            duration: 200
        });
        var s = this;
        setTimeout(function() {
            s.setData({
                orderAnimation: s.orderAnimation.export()
            });
        }, 600), setTimeout(function() {
            s.setData({
                createOrderShow: !1
            }), wx.setStorageSync("createOrder", !1);
        }, 5e3);
    },
    onShow: function() {
        console.log("我是onshow======"), wx.showLoading({
            title: "加载中",
            mask: !0
        }), this.data.noDefaultAddress && this.getDefaultAddress(this.data.rp_id), this.data.defaultAddress.district_id ? this.getWayList(this.data.defaultAddress.district_id, this.data.rp_id) : wx.hideLoading(), 
        this.setPrice();
    },
    setPrice: function() {
        console.log("选择完优惠券之后返回", this.data.couponIsChoose), this.data.couponIsChoose ? this.setData({
            totalPrice: this.data.couponData.price,
            payPrice: this.data.couponData.payprice,
            underlined_discount: this.data.couponData.underlined_discount,
            total_discount: this.data.couponData.total_discount,
            discount: this.data.couponData.discount,
            recommend_fault_discounts_price: this.data.couponData.recommend_fault_discounts_price,
            manual_fee: this.data.couponData.holiday_manual_fee,
            holidayName: this.data.couponData.holiday_name,
            night_fee: this.data.couponData.night_fee,
            visit_fee: this.data.couponData.visit_fee
        }) : (console.log("//   当不使用优惠券时需要更新之前可能使用优惠券的价格；"), this.popDown());
    },
    scrolltxt: function() {
        var t = wx.createAnimation({
            duration: 9e4,
            timingFunction: "linear"
        });
        t.translate(-Number(12 * this.data.text.length), 0).step(), this.setData({
            animationData: t.export()
        }), this.recoveraAnimation = setInterval(function() {
            t.translate(255, 0).step({
                duration: 0
            }), this.setData({
                animationData: t.export()
            });
        }.bind(this), 9e4), this.restartAnimation = setInterval(function() {
            t.translate(-Number(12 * this.data.text.length), 0).step(), this.setData({
                animationData: t.export()
            });
        }.bind(this), 90001);
    },
    getWayList: function(t, e) {
        var i = this;
        a.getWayList.call(i, t, e, function(t) {
            t[0].active ? (i.getReserveTime(i.data.defaultAddress.city_id, i.data.defaultAddress.district_id), 
            i.setData({
                canGetTime: !0
            })) : 1 == i.data.category && i.setData({
                canGetTime: !1,
                category: 2
            }), i.data.couponIsChoose || i.data.noUseCoupon || (console.log("城市价格"), i.popDown()), 
            wx.hideLoading(), i.setData({
                pageLoading: !1
            });
        }, function(t) {
            wx.hideLoading(), i.setData({
                pageLoading: !1
            });
        });
    },
    clearCoupon: function() {
        this.setData({
            couponData: "",
            coupon_code: "",
            couponIsChoose: !1
        });
    },
    timeUp: function() {
        this.data.defaultAddress.city_id || this.data.defaultAddress.district_id ? this.data.canGetTime && (this.timeAnimation.translateY(0).step(), 
        this.setData({
            timeAnimation: this.timeAnimation.export(),
            isModelShow: !0
        })) : wx.showToast({
            title: "请先添加地址",
            image: "../../../img/wx_index/warning.png",
            duration: 2e3
        });
    },
    continueOrder: function() {
        this.setData({
            isModelShow: !1,
            showTipData: !1
        });
    },
    getReserveTime: function(t, e) {
        var i = this, s = {
            city: t,
            district: e,
            rp_id: this.data.rp_id
        };
        a.getRepairTime.call(i, s, function(t) {
            i.setData({
                dateList: t.time_list,
                periods: t.time_list[0].periods,
                tipData: t.tips,
                isModelShow: !!t.tips,
                showTipData: !!t.tips
            }), i.data.timeIschoose || i.confirmTime();
        }, function(t) {
            wx.showToast({
                title: t,
                icon: "none",
                duration: 1e3
            });
        });
    },
    timeChange: function(t) {
        var e = t.detail.value, a = this.data.timeValues;
        if (e[0] == a[0]) if (e[1] == a[1]) ; else {
            i = this.data.dateList[e[0]].date + this.data.dateList[e[0]].periods[e[1]].start_time + "~" + this.data.dateList[e[0]].periods[e[1]].next_time;
            this.setData({
                periods: this.data.dateList[e[0]].periods,
                timeChoosedTxt: i,
                timeIschoose: !0,
                reserve_time: this.data.dateList[e[0]].periods[e[1]].start_datetime,
                reserve_time2: this.data.dateList[e[0]].periods[e[1]].next_datetime,
                timeValues: e,
                timeval: e
            });
        } else {
            var i = this.data.dateList[e[0]].date + this.data.dateList[e[0]].periods[0].start_time + "~" + this.data.dateList[e[0]].periods[0].next_time;
            this.setData({
                periods: this.data.dateList[e[0]].periods,
                timeChoosedTxt: i,
                timeIschoose: !0,
                reserve_time: this.data.dateList[e[0]].periods[0].start_datetime,
                reserve_time2: this.data.dateList[e[0]].periods[0].next_datetime,
                timeValues: e,
                timeval: [ e[0], 0 ]
            });
        }
    },
    confirmTime: function() {
        if (!this.data.timeIschoose) {
            var t = this.data.dateList[0].date + " " + this.data.dateList[0].periods[0].start_time + "~" + this.data.dateList[0].periods[0].next_time;
            this.setData({
                periods: this.data.dateList[0].periods,
                timeChoosedTxt: t,
                timeIschoose: !0,
                reserve_time: this.data.dateList[0].periods[0].start_datetime,
                reserve_time2: this.data.dateList[0].periods[0].next_datetime
            });
        }
        console.log("时间弹窗确认按钮"), this.clearCoupon(), this.popDown();
    },
    getCenterList: function() {
        var t = this;
        a.getCenterList.call(t, function(e) {
            t.setData({
                centerList: e
            });
        }, function(t) {});
    },
    getReminder: function() {
        var t = this;
        a.getReminders.call(t, function(e) {
            t.setData({
                wenXinTiShi: e.content
            });
        }, function(t) {});
    },
    centerUp: function() {
        this.centerAnimation.translateY(0).step(), this.setData({
            centerAnimation: this.centerAnimation.export(),
            isModelShow: !0
        });
    },
    imeiUp: function() {
        this.imeiAnimation.translateY(0).step(), this.setData({
            imeiAnimation: this.imeiAnimation.export(),
            isModelShow: !0
        });
    },
    centerChange: function(t) {
        var e = t.detail.value;
        this.setData({
            centerChoosedTxt: this.data.centerList[e[0]].name,
            centerIschoose: !0,
            center_id: this.data.centerList[e[0]].id,
            centerIndex: e[0]
        });
    },
    confirmCenter: function() {
        this.data.centerIschoose || this.setData({
            centerChoosedTxt: this.data.centerList[0].name,
            centerIschoose: !0,
            center_id: this.data.centerList[0].id,
            centerIndex: 0
        }), this.clearCoupon(), console.log("维修中心 弹窗确认按钮"), this.popDown();
    },
    popDown: function() {
        this.timeAnimation.translateY("100%").step(), this.centerAnimation.translateY("100%").step(), 
        this.imeiAnimation.translateY("100%").step(), this.setData({
            timeAnimation: this.timeAnimation.export(),
            centerAnimation: this.centerAnimation.export(),
            imeiAnimation: this.imeiAnimation.export(),
            isModelShow: !1,
            showTipData: !1
        });
        var t = {};
        t.city_id = this.data.defaultAddress.city_id, t.rp_id = this.data.rp_id, t.is_warrantable = this.data.is_warrantable, 
        t.category = this.data.category, t.district_id = this.data.defaultAddress.district_id, 
        t.reserve_time = this.data.reserve_time, t.reserve_time2 = this.data.reserve_time2, 
        t.rp_id2 = this.data.rp_id2, this.data.centerIschoose && 1 != this.data.category && (t.city_id = this.data.centerList[this.data.centerIndex].city, 
        t.district_id = this.data.centerList[this.data.centerIndex].district), this.getCityPrice(t);
    },
    setIMEI: function(t) {
        this.setData({
            imei: t.detail.value
        });
    },
    showInput: function() {
        this.setData({
            inputShow: !0,
            remark_focus: !0
        });
    },
    hideInput: function() {
        this.setData({
            inputShow: !1,
            remark_focus: !1
        });
    },
    setRemark: function(t) {
        this.setData({
            remark: t.detail.value
        });
    },
    addAddress: function(t) {
        wx.redirectTo({
            url: "../../personal/addAddress/addAddress?origin=createOrder&createOrderTabIndex=" + this.data.category
        });
    },
    selectAddress: function(t) {
        wx.redirectTo({
            url: "../../personal/addressList/addressList?createOrderTabIndex=" + this.data.category
        });
    },
    createOrder: function() {
        (this.data.canGetTime || 1 != this.data.category || this.data.noDefaultAddress) && (this.data.noDefaultAddress ? wx.showToast({
            title: "请填写地址",
            image: "../../../img/wx_index/warning.png",
            duration: 1500
        }) : 1 != this.data.category || this.data.timeIschoose ? 1 == this.data.category || this.data.centerIschoose ? 2 != this.data.category || this.data.imei ? (wx.showLoading({
            title: "正在下单中",
            mask: !0
        }), this.getCreateOrder()) : wx.showToast({
            title: "请输入imei号",
            image: "../../../img/wx_index/warning.png",
            duration: 1500
        }) : wx.showToast({
            title: "请选择维修中心",
            image: "../../../img/wx_index/warning.png",
            duration: 1500
        }) : wx.showToast({
            title: "请选择预约时间",
            image: "../../../img/wx_index/warning.png",
            duration: 1500
        }));
    },
    getCreateOrder: function() {
        var t = {};
        t.rp_id = this.data.rp_id, t.category = this.data.category, t.remark = this.data.remark, 
        t.user_address_id = this.data.defaultAddress.id, t.rp_id2 = this.data.rp_id2, t.is_warrantable = this.data.is_warrantable, 
        1 == this.data.category ? (t.reserve_time = this.data.reserve_time, t.reserve_time2 = this.data.reserve_time2) : 3 == this.data.category ? t.weixiucenter_id = this.data.center_id : 2 == this.data.category && (t.weixiucenter_id = this.data.center_id, 
        t.imei = this.data.imei), this.data.couponIsChoose ? t.coupon_code = this.data.coupon_code : t.coupon_code = "";
        var e = i.globalData.hwxUserInfo.token;
        a.getGeocoder({
            location: wx.getStorageSync("LATLNG"),
            key: "QC4BZ-GDAKG-JDSQP-IFXXY-FJWRT-GSBK7"
        }, function(t) {
            console.log("res-------"), console.log(t), getApp().mtj.trackEvent("login_city", {
                area: t.ad_info.city
            });
        }, function(t) {
            console.log("err======"), console.log(t);
        }), a.getCreateOrder.call(this, e, t, i.globalData.ref, function(t) {
            wx.hideLoading(), wx.navigateTo({
                url: "../orderSubmitted/orderSubmitted?data=" + JSON.stringify(t)
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
        var t = this, e = [];
        if (this.data.selectedFault.forEach(function(a) {
            0 == t.data.is_warrantable ? e.push(a.price) : a.honai_price ? e.push(a.honai_price) : e.push(a.price);
        }), this.data.noDefaultAddress) wx.showToast({
            title: "请填写地址",
            image: "../../../img/wx_index/warning.png",
            duration: 1500,
            mask: !0
        }); else if (1 != this.data.category || this.data.timeIschoose) if (1 == this.data.category || this.data.centerIschoose) {
            var a = {};
            a.rp_id = this.data.rp_id, a.rp_id2 = this.data.rp_id2, a.category = this.data.category, 
            a.is_warrantable = this.data.is_warrantable, 1 == this.data.category ? (a.reserve_time = this.data.reserve_time, 
            a.reserve_time2 = this.data.reserve_time2, a.city = this.data.defaultAddress.city_id, 
            a.district = this.data.defaultAddress.district_id) : (3 == this.data.category || 2 == this.data.category) && (a.city = this.data.centerList[this.data.centerIndex].city, 
            a.district = this.data.centerList[this.data.centerIndex].district), wx.navigateTo({
                url: "../couponList/couponList?info=" + JSON.stringify(a) + "&index=" + this.data.couponIndex + "&price=" + e
            });
        } else wx.showToast({
            title: "请选择维修中心",
            image: "../../../img/wx_index/warning.png",
            duration: 1500,
            mask: !0
        }); else wx.showToast({
            title: "请选择预约时间",
            image: "../../../img/wx_index/warning.png",
            duration: 1500,
            mask: !0
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
    getDefaultAddress: function(t) {
        var e = this, s = i.globalData.hwxUserInfo.token;
        a.getDefaultAddress.call(e, s, function(a) {
            e.getWayList(a.district_id, t), e.setData({
                defaultAddress: a,
                noDefaultAddress: !1
            });
        }, function(t) {
            wx.hideLoading(), e.setData({
                pageLoading: !1
            }), e.setData({
                noDefaultAddress: !0
            });
        });
    },
    getCityPrice: function(t) {
        var e = this;
        a.getCityPrice.call(e, t, function(t) {
            e.setData({
                totalPrice: t.price,
                recommend_fault_discounts_price: t.recommend_fault_discounts_price,
                payPrice: t.payprice,
                underlined_discount: t.underlined_discount,
                total_discount: t.total_discount,
                discount: t.discount,
                manual_fee: t.holiday_manual_fee,
                holidayName: t.holiday_name,
                night_fee: t.night_fee,
                visit_fee: t.visit_fee,
                city_coupon: t.city_coupon
            }), e.data.couponIsChoose || !e.data.firstGet || e.data.noUseCoupon ? console.log("that.getDefaultCoupon();11111111111111") : (console.log("that.getDefaultCoupon();22222222222222222222"), 
            e.getDefaultCoupon()), e.setData({
                firstGet: !0
            });
        }, function(t) {});
    },
    getDefaultCoupon: function() {
        var t, e, s, o, n = this, r = i.globalData.hwxUserInfo.token;
        if (1 == this.data.category) {
            if (!this.data.reserve_time) return;
            s = this.data.reserve_time, o = this.data.reserve_time2, t = this.data.defaultAddress.city_id, 
            e = this.data.defaultAddress.district_id;
        } else if (3 == this.data.category) {
            if ("" === this.data.centerIndex) return;
            t = this.data.centerList[this.data.centerIndex].city, e = this.data.centerList[this.data.centerIndex].district;
        } else if (2 == this.data.category) {
            if ("" === this.data.centerIndex) return;
            t = this.data.centerList[this.data.centerIndex].city, e = this.data.centerList[this.data.centerIndex].district;
        }
        var d = [];
        this.data.selectFaultLs.length && this.data.selectFaultLs.forEach(function(t) {
            0 == n.data.is_warrantable ? d.push(t.price) : d.push(t.honai_price);
        }), console.log("this.data.selectFaultL----"), console.log(this.data.selectFaultLs), 
        console.log(d);
        var c = {
            normal_usable: {
                useable_status: 2,
                price: d,
                city: t,
                rp_id: this.data.rp_id
            },
            normal_use: {
                city: t,
                district: e,
                plan_id: this.data.rp_id,
                plan_id2: this.data.rp_id2,
                is_warrantable: this.data.is_warrantable,
                category: this.data.category,
                reserve_time: s,
                reserve_time2: o
            }
        };
        a.getDefaultCoupon(r, c, function(t) {
            n.setData({
                couponData: t,
                couponIsChoose: !0,
                coupon_code: t.coupon_code,
                couponIndex: 0
            }), n.setPrice();
        }, function(t) {}), this.getCouponUseable(this.data.rp_id, t, d);
    },
    getCouponUseable: function(t, e, s) {
        var o = i.globalData.hwxUserInfo.token, n = this;
        a.getCouponUseable.call(n, o, t, e, s, function(t) {
            var e = 0;
            t.list.forEach(function(t) {
                "1" == t.useable && e++;
            }), n.setData({
                couponCount: e
            });
        }, function(t) {
            console.log(t);
        });
    },
    closeTipShow: function() {
        clearInterval(this.data.interval), this.setData({
            addTipShow: !1
        });
    },
    ellipsis: function(t) {
        var e = t.currentTarget.dataset.index;
        this.data.ellipsis == e ? this.setData({
            ellipsis: -1
        }) : this.setData({
            ellipsis: e
        });
    },
    chooseWay: function(t) {
        var e = t.currentTarget.dataset;
        this.setData({
            category: e.index,
            couponIndex: null
        }), this.clearCoupon(), this.popDown();
    },
    cardSwiper: function(t) {
        this.setData({
            cardCur: t.detail.current || 0
        });
    },
    getPackCouponList: function() {
        var t = this;
        a.getPackCoupon.call(t, t.data.rp_id, function(e) {
            var a = e;
            0 === e.length && t.setData({
                showSwiper: !1
            }), a.forEach(function(t) {
                t.packCouponSelected = !0;
            }), console.log("data_ls==-==-="), console.log(a), t.setData({
                swiperList: a,
                swiperCurrentIndex: 0
            });
        }, function(e) {
            t.setData({
                showSwiper: !1
            });
        });
    },
    addFault: function(t) {
        var e = t.currentTarget.dataset, a = this.data.swiperList;
        a.forEach(function(t, a, i) {
            t.rp_id == e.rp_id && (t.packCouponSelected = !1);
        }), this.canShowSwiper(), 1 == e.index ? this.setData({
            cardCur: 0,
            swiperCurrentIndex: 0
        }) : this.setData({
            cardCur: 1
        }), this.setData({
            swiperList: a
        });
        var i = {};
        (i = e).price = e.reduced_price, console.log(i);
        var s = this.data.selectedFault;
        s.push(i), this.setData({
            selectedFault: s
        }), this.clearCoupon(), this.popDown();
    },
    canShowSwiper: function() {
        this.data.swiperList.every(function(t) {
            return !1 === t.packCouponSelected;
        }) ? this.setData({
            showSwiper: !1
        }) : this.setData({
            showSwiper: !0
        }), this.getRpId2(), console.log("判断打包优惠轮播，显示隐藏"), this.popDown();
    },
    getRpId2: function() {
        var t, e = this.data.swiperList, a = [];
        e.forEach(function(t, e, i) {
            0 == t.packCouponSelected && a.push(t.rp_id);
        }), t = a.join(","), this.setData({
            rp_id2: t
        });
    },
    deleteCouponFault: function(t) {
        var e = this, a = t.currentTarget.dataset, i = this.data.selectedFault;
        i.forEach(function(t, e, s) {
            a.rp_id == t.rp_id && i.splice(e, 1);
        }), this.setData({
            selectedFault: i
        });
        var s = this.data.swiperList;
        s.forEach(function(t, i, s) {
            a.rp_id == t.rp_id && (t.packCouponSelected = !0, e.setData({
                cardCur: 0,
                swiperCurrentIndex: 0
            }));
        }), this.setData({
            swiperList: s
        }), this.canShowSwiper(), this.clearCoupon(), this.popDown();
    },
    showDetailBg: function() {
        this.data.payPrice && (this.data.detailBgShow ? this.detailBgDown() : this.detailBgUp());
    },
    detailBgUp: function() {
        this.data.isFullSucreen ? this.detailAnimation.translateY("-23%").step() : this.detailAnimation.translateY(0).step(), 
        this.setData({
            detailAnimation: this.detailAnimation.export(),
            detailBgShow: !0
        });
    },
    detailBgDown: function() {
        this.detailAnimation.translateY("180%").step(), this.setData({
            detailAnimation: this.detailAnimation.export(),
            detailBgShow: !1
        });
    },
    goCenter: function(t) {
        var e = t.currentTarget.dataset;
        wx.openLocation({
            latitude: Number(e.lat),
            longitude: Number(e.lng),
            name: e.name,
            address: e.address,
            scale: 28
        });
    },
    callCenter: function(t) {
        var e = t.currentTarget.dataset;
        wx.makePhoneCall({
            phoneNumber: e.phone
        });
    },
    showDetailMore: function() {
        this.setData({
            detailFaultMore: !this.data.detailFaultMore
        });
    },
    showFaultDetail: function(t) {
        var a = t.currentTarget.dataset.active, i = t.currentTarget.dataset.index, s = "selectedFault[".concat(i, "].active");
        this.setData(e({}, s, !a));
    }
});