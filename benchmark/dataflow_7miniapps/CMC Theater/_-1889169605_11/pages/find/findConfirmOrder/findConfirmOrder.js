var e = getApp().urlService, t = require("../findHome/findAllSelectGoodsCart.js").allSelectGoodsCart, a = require("../../../util/publicTool.js").getAllValueWithObjc, o = require("../../../request/goodsCalculateRequest.js").goodsCalculateRequest, i = require("../../../util/weiPayUtil.js"), s = require("../../../util/wxApi.js").wxPayRequest, n = require("../../../util/publicTool.js").promiseTime, r = require("../../../config/httpHtlper.js"), d = require("../../../util/aes.js"), c = d.enc.Utf8.parse("1de&^*-#gsol&^*-"), l = d.enc.Utf8.parse("1rue%#ls;1&8^*-#"), u = require("../../../templates/confirmOrder/choseCard/choseCard.js"), h = require("../../../templates/find/choseCoupon/choseCoupon.js"), p = require("../../../templates/find/findPicker/findPicker.js"), f = "cardPay";

Page({
    data: {
        shouldLoadCard: !0,
        cartKey: "",
        can_use_count: 0,
        cartGoods: [],
        payType: "online",
        tempPayType: "online",
        memberPriceDefault: {},
        nomemberPriceDefault: {},
        nomemberPrice: {},
        memberPrice: {},
        currentPrice: {},
        totalPrice: "0",
        requestData: {},
        choseTypedata: {},
        selectTypeData: {},
        scrollHeight: 0,
        selectCard: null,
        cardPass: "",
        hiddenInputPass: !0,
        canChangePhoneNum: !0,
        phoneNumber: "",
        isCouponSelected: !1,
        showLogin: !0,
        selectedCount: 0,
        needCancel: !0,
        formID: "",
        isloadingDelivery: !1,
        isCreatingOrder: !1,
        showUserProtocol: !0,
        couponLists: [],
        couponList: [],
        inputCouponNum: "",
        goSelfCoupon: !0,
        nooffLineCouponItemTitle: "",
        noUseItemTitle: "",
        couponBottomShow: !1,
        offLineCanUseCount: 0,
        isNeedShowCoupon: !1
    },
    onLoad: function(e) {
        if (this.data.isLogin = !1, getApp().userIsLogin() && (getApp().globalData.isLogin = !1), 
        wx.setNavigationBarTitle({
            title: "确认订单"
        }), u.setDelegate(this, "good"), h.setDelegate(this), e.cartKey) {
            this.data.cartKey = e.cartKey;
            var o = a(t.getCart(this.data.cartKey));
            this.data.cartGoods = o;
        }
        this.setScrollHeight(), this.calculatePrice(this.getGoodInfo({
            is_first: "1"
        })), getApp().globalData.hall_id && (this.data.hall_id = getApp().globalData.hall_id), 
        this.getOffLineCouponList();
    },
    onShow: function() {
        this.setOnShow();
    },
    setOnShow: function() {
        var e = getApp().getUserInfo();
        this.setData({
            phoneNumber: this.data.phoneNumber && this.data.phoneNumber.length > 0 ? this.data.phoneNumber : e && e.mobile ? e.mobile : "",
            canChangePhoneNum: this.phoneNumCanChange(),
            isCreatingOrder: !1
        }), getApp().userIsLogin() && this.setData({
            showLogin: !0
        }), getApp().globalData.isLogin && (getApp().globalData.isLogin = !1, this.calculatePrice(this.getGoodInfo({
            is_first: "1"
        })), this.data.shouldLoadCard = !0, this.data.isLogin = !0, t.clearCart()), this.data.shouldLoadCard && (this.loadCardList(), 
        this.data.shouldLoadCard = !1, this.data.isloadingDelivery = !1);
    },
    onUnload: function() {
        if (this.data.needCancel && getApp().userIsLogin()) {
            this.data.isLogin && (getApp().globalData.onlyGoods ? wx.reLaunch({
                url: "/pages/find/findFoodHome/findFoodHome"
            }) : wx.switchTab({
                url: "/pages/find/findHome/findHome"
            }), getApp().globalData.goodsLogin = !0), console.log("释放释放释放" + this.data.isLogin);
            var t = e.urls.cancelGoodOrder, a = e.urlParameter({});
            e.wxRequest.getRequest(t, a).then(function(e) {});
        }
    },
    gobuy: function(e) {
        var t = this;
        if (!t.gotoLogin()) if (e && (t.data.formID = e.detail.formId), t.data.phoneNumber && t.data.phoneNumber.length <= 0) wx.showToast({
            icon: "none",
            title: "请输入手机号"
        }); else {
            var a = /0\d{2,3}-\d{7,8}/;
            /^1\d{10}$/.test(t.data.phoneNumber) || a.test(t.data.phoneNumber) ? t.data.payType == f && "1" != t.data.selectCard.can_buy_with_online_pay && parseFloat(t.data.selectCard.balance) < parseFloat(t.data.currentPrice.price) ? getApp().showModalApp("会员卡余额不足") : t.validateGetGoodTypeIsChose() && (t.data.payType == f && "1" == t.data.currentPrice.card_pay_verify && t.data.cardPass.length <= 0 ? t.setData({
                hiddenInputPass: !1
            }) : wx.showModal({
                confirmColor: "#ff9500",
                title: "提示",
                content: "确认购买？",
                success: function(e) {
                    e.confirm ? t.orderCreate() : e.cancel && t.setData({
                        cardPass: ""
                    });
                }
            })) : wx.showToast({
                icon: "none",
                title: "请输入正确的手机号"
            });
        }
    },
    orderCreate: function() {
        var t = this;
        if (t.data.currentPrice) if (t.data.isCreatingOrder) wx.showToast({
            icon: "none",
            title: "订单创建中"
        }); else {
            var a = e.urls.goodCreateOrder, o = "takeOut" == t.data.selectTypeData.choseType ? "1" : "0", i = t.getGoodInfo({
                mobile: t.data.phoneNumber,
                is_delivery: "takeService" == t.data.selectTypeData.choseType ? "1" : "0",
                is_takeout: o,
                receiver: "1" == o ? t.data.selectTypeData.receiver : "",
                delivery_location: "takeSelf" == t.data.selectTypeData.choseType ? "" : "takeOut" == t.data.selectTypeData.choseType ? t.data.selectTypeData.takeOutLocation : t.data.selectTypeData.location,
                delivery_time: "takeOut" == t.data.selectTypeData.choseType ? "" : "takeSelf" == t.data.selectTypeData.choseType && 1 != t.data.choseTypedata.is_show_time ? "" : t.data.selectTypeData.buytime,
                pay_money: t.data.currentPrice.price,
                goods_coupon_id: "couponOfflinePay" == t.data.payType ? "" : t.data.selectedCount > 0 ? h.getCouponIds() : "",
                member_coupon_id: "couponOfflinePay" == t.data.payType && t.data.selectedCount > 0 ? h.getActiveCouponNums() : ""
            });
            switch (t.data.payType) {
              case f:
                i.card_id = t.data.selectCard.id, i.card_num = t.data.selectCard.card_num, i.card_password = d.encrypt(t.data.cardPass, c, l), 
                t.setData({
                    cardPass: ""
                });
            }
            i = e.urlParameter(i), t.beginOrderCreate(a, i);
        } else wx.showToast({
            icon: "none",
            title: "数据获取中"
        });
    },
    beginOrderCreate: function(a, o) {
        var r = this;
        r.data.isCreatingOrder = !0, e.wxRequest.postRequest(a, o).then(function(e) {
            if (0 == e.data.errcode) {
                var t = e.data.data.orderNum;
                return r.data.order_num = t, i.getOpenId(t, r.data.formID);
            }
        }).then(function(e) {
            if (e.length > 0) {
                var t = e, a = r.data.order_num;
                return r.data.isWxPay = r.isNeedWxPay(o), r.data.isWxPay ? r.buyWeixinPay(a, t) : r.orderBuy(a, t);
            }
        }).then(function(e) {
            if (0 == e.data.errcode) {
                if (console.log("支付成功"), r.data.isWxPay) {
                    var a = e.data.data.weixinLite;
                    return s(a);
                }
                t.clearCart(), r.data.needCancel = !1, wx.reLaunch({
                    url: "/pages/find/findOrderDetail/findOrderDetail?order_num=" + r.data.order_num + "&cartKey=" + r.data.cartKey
                });
            } else r.goodsUpdateErr(e);
        }).then(function(e) {
            return console.log("微信支付成功"), n(200);
        }).then(function(e) {
            t.clearCart(), r.data.needCancel = !1, wx.reLaunch({
                url: "/pages/find/findOrderDetail/findOrderDetail?order_num=" + r.data.order_num + "&cartKey=" + r.data.cartKey
            });
        }).finally(function() {
            r.data.isCreatingOrder = !1;
        });
    },
    isNeedWxPay: function(e) {
        var t = this;
        switch (t.data.payType) {
          case "couponOfflinePay":
          case "online":
            return "0" != e.pay_money;

          case f:
            return "1" == t.data.selectCard.can_buy_with_online_pay && "0" != e.pay_money;
        }
    },
    orderBuy: function(t, a) {
        var o = this, i = e.urls.goodBuy, s = e.urlParameter({
            order_num: t,
            pay_money: o.data.currentPrice.price,
            pay_type: "",
            open_id: a
        });
        return e.wxRequest.getRequest(i, s);
    },
    buyWeixinPay: function(t, a) {
        var o = this, i = e.urls.goodBuy, s = e.urlParameter({
            order_num: t,
            pay_money: o.data.currentPrice.price,
            pay_type: getApp().globalData.pay_code,
            open_id: a
        });
        return e.wxRequest.getRequest(i, s);
    },
    validateGetGoodTypeIsChose: function() {
        if ("takeSelf" == this.data.selectTypeData.choseType) {
            if (1 == this.data.choseTypedata.is_show_time && this.data.selectTypeData.buytime.length <= 0) return wx.showToast({
                icon: "none",
                title: "请选择取餐时间"
            }), !1;
        } else if ("takeService" == this.data.selectTypeData.choseType) {
            if (!(this.data.selectTypeData.location && this.data.selectTypeData.location.length > 0)) return wx.showToast({
                icon: "none",
                title: "请选择送餐地点"
            }), !1;
            if (!(this.data.selectTypeData.buytime && this.data.selectTypeData.buytime.length > 0)) return wx.showToast({
                icon: "none",
                title: "请选择送餐时间"
            }), !1;
        } else {
            if ("takeOut" != this.data.selectTypeData.choseType) return wx.showToast({
                icon: "none",
                title: "请选择配送方式"
            }), !1;
            if ("请填写收货地址" == this.data.selectTypeData.takeOutLocation) return wx.showToast({
                icon: "none",
                title: "请填写收货地址"
            }), !1;
        }
        return !0;
    },
    setScrollHeight: function() {
        var e = this;
        wx.getSystemInfo({
            success: function(t) {
                var a = t.windowHeight * (750 / t.windowWidth) * .7 - 210;
                e.setData({
                    scrollHeight: a
                });
            }
        });
    },
    goodsUpdateErr: function(e) {
        if (681 == e.data.errcode || 1e3 == e.data.errcode) {
            if (e.cancelShowError = !0, 1e3 == e.data.errcode) wx.showModal({
                confirmColor: "#ff9500",
                showCancel: !1,
                content: e.data.msg,
                success: function(e) {
                    e.confirm && wx.navigateBack();
                }
            }); else if (681 == e.data.errcode) {
                for (var a = e.data.data.ids, o = 0; o < a.length; o++) t.removeGoodsCart(this.data.cartKey, {
                    id: a[o]
                });
                wx.showModal({
                    confirmColor: "#ff9500",
                    showCancel: !1,
                    content: e.data.msg,
                    success: function(e) {
                        if (e.confirm) {
                            var t = getCurrentPages();
                            wx.navigateBack({
                                delta: t.length
                            });
                        }
                    }
                });
            }
        } else this.data.tempPayType == f && this.setData({
            selectCardIndex: -1,
            cardListOpen: !0
        });
    },
    loadCardList: function() {
        u.loadCardList();
    },
    selectcard: function(e) {
        u.selectcard(e);
    },
    calculatePriceWithCard: function(e) {
        this.data.tempPayType = f, this.calculatePrice(this.getGoodInfo({
            is_first: "0",
            card_id: e.id,
            card_num: e.card_num,
            goods_coupon_id: ""
        }));
    },
    choseCard: function() {
        var e = this;
        this.data.selectedCount > 0 ? wx.showModal({
            confirmColor: "#ff9500",
            title: "",
            content: "优惠方式已发生改变，请重新选择优惠券",
            success: function(t) {
                t.confirm && e.choseCardConfirm();
            }
        }) : this.choseCardConfirm();
    },
    choseCardConfirm: function() {
        this.didChoseCardPay(), this.hiddenChoseCard(), this.setData({
            isCouponSelected: !1,
            selectedCount: 0
        });
    },
    didChoseCardPay: function() {
        this.setData({
            selectCard: u.getSelectCard(),
            currentPrice: this.data.memberPrice,
            payType: f
        }), this.getCouponList(1);
    },
    deleateCard: function() {
        var e = this;
        this.data.selectedCount > 0 ? wx.showModal({
            confirmColor: "#ff9500",
            title: "",
            content: "优惠方式已发生改变，请重新选择优惠券",
            success: function(t) {
                t.confirm && e.giveUpCard();
            }
        }) : this.giveUpCard();
    },
    giveUpCard: function() {
        this.data.payType == f ? (this.didChoseOnlinePay(), this.hiddenChoseCard()) : this.hiddenChoseCard();
    },
    didChoseOnlinePay: function() {
        var e = h.clearSelected();
        this.data.nomemberPrice.goods_coupon_save_fee = "0", this.getCouponList(1), this.setData({
            selectCard: null,
            currentPrice: this.data.nomemberPriceDefault,
            payType: "online",
            isCouponSelected: !1,
            selectedCount: 0,
            couponLists: e || []
        });
    },
    addcard: function() {
        this.data.shouldLoadCard = !0, u.addcard();
    },
    goChange: function() {
        u.goChange();
    },
    cardIsCanUse: function(e) {
        u.cardIsCanUse(e);
    },
    showChoseCard: function() {
        this.gotoLogin() || u.show();
    },
    hiddenChoseCard: function() {
        u.hidden();
    },
    startGetDelivery: function() {
        var t = this, a = e.urls.getDelivery, o = e.urlParameter({});
        e.wxRequest.getRequest(a, o).then(function(e) {
            console.log(e);
            var a = e.data;
            if ("0" !== a.errcode) return !1;
            t.data.choseTypedata.deliveryds = a.data, t.goChoseType();
        }).finally(function() {
            t.data.isloadingDelivery = !1, wx.stopPullDownRefresh();
        });
    },
    getGoodInfo: function(e) {
        var t = "", a = "", o = [];
        for (var i in this.data.cartGoods) {
            var s = this.data.cartGoods[i];
            if ("shopCart" != this.data.cartKey || s.isSelect) if (3 != s.goods_type) {
                t = t + s.id + "-" + s.buyCount + ",";
                for (var n in s.moreGoods) {
                    var r = s.moreGoods[n];
                    a = a + r.id + "-" + r.ng_strategy_goods_id + "-" + s.id + ",";
                }
            } else {
                var d = {};
                d.id = s.id, d.num = s.buyCount;
                var c = [];
                for (var l in s.component) {
                    var u = s.component[l], h = {};
                    h.index = u.index;
                    var p = [];
                    for (var n in u.members) {
                        var f = u.members[n], y = {};
                        y.goods_id = f.id, y.goods_count = f.numCount, p.push(y);
                    }
                    h.members = p, c.push(h);
                }
                var g = "";
                for (var n in s.moreGoods) g = g + (r = s.moreGoods[n]).id + "-" + r.ng_strategy_goods_id + ",";
                g = g.slice(0, g.length - 1), d.optional_package = c, d.addtion_goods = g, o.push(d);
            }
        }
        return t = t.slice(0, t.length - 1), a = a.slice(0, a.length - 1), e.goods_info = t, 
        e.additional_goods_info = a, e.option_goods_info = o.length > 0 ? getApp().encodeDataAndJsonStringify(o) : "", 
        e;
    },
    goChoseType: function() {
        if ("1" == this.data.requestData.is_delivery || "1" == this.data.requestData.is_show_time || "1" == this.data.requestData.is_takeout) {
            if (!this.data.choseTypedata.deliveryds && "1" == this.data.requestData.is_delivery) {
                if (console.log("加载影厅"), this.data.isloadingDelivery) return;
                return this.data.isloadingDelivery = !0, void this.startGetDelivery();
            }
            this.data.choseTypedata.time_setting = this.data.requestData.time_setting, this.data.choseTypedata.is_delivery = this.data.requestData.is_delivery, 
            this.data.choseTypedata.is_show_time = this.data.requestData.is_show_time, this.data.choseTypedata.is_takeout = this.data.requestData.is_takeout, 
            this.data.choseTypedata.selectTypeData = this.data.selectTypeData, console.log(this.data.selectTypeData, this.data.choseTypedata), 
            console.log("去取餐方式选择" + this.data.hall_id), this.data.hall_id && "none" == this.data.selectTypeData.choseType ? this.getDeliveryTime() : wx.navigateTo({
                url: "/pages/find/findConfirmChoseType/findConfirmChoseType?choseTypedata=" + getApp().encodeDataAndJsonStringify(this.data.choseTypedata)
            });
        }
    },
    goChoseAddress: function() {
        var e = this;
        wx.getSetting({
            success: function(t) {
                console.log(123, t), void 0 == t.authSetting["scope.address"] || t.authSetting["scope.address"] ? wx.chooseAddress({
                    success: function(t) {
                        console.log("res", t), e.data.selectTypeData.takeOutLocation = t.provinceName + t.cityName + t.countyName + t.detailInfo, 
                        e.data.phoneNumber = t.telNumber.length > 0 ? t.telNumber : e.data.phoneNumber, 
                        e.data.selectTypeData.receiver = t.userName, e.setData({
                            phoneNumber: e.data.phoneNumber,
                            selectTypeData: e.data.selectTypeData
                        });
                    }
                }) : wx.openSetting({});
            }
        });
    },
    cardPassInput: function(e) {
        this.data.cardPass = e.detail.value;
    },
    modalOk: function() {
        var e = this;
        e.setData({
            hiddenInputPass: !0
        }), e.data.cardPass.length <= "0" ? wx.showModal({
            confirmColor: "#ff9500",
            content: "请输入会员卡密码",
            showCancel: !1,
            success: function(t) {
                t.confirm && e.setData({
                    hiddenInputPass: !1
                });
            }
        }) : e.gobuy();
    },
    modalCancel: function() {
        this.setData({
            cardPass: "",
            hiddenInputPass: !0
        });
    },
    currentInputNum: function(e) {
        this.setData({
            phoneNumber: e.detail.value
        });
    },
    phoneNumCanChange: function() {
        var e = getApp().globalData.init;
        return (!e.is_allowed_customized_order_phone || "1" == e.is_allowed_customized_order_phone) && !!getApp().userIsLogin();
    },
    nouse: function() {},
    choseGoodClick: function() {
        console.log("显示券列表"), this.gotoLogin() || h.show();
    },
    hideCouponClick: function() {
        h.hide();
    },
    itemClick: function(e) {
        console.log("item");
        var t = e.currentTarget.dataset.bean;
        if ("0" != t.can_use) {
            if (t.isSelected || !h.isSameCoupon(t)) {
                this.data.curCouponClick = t, this.data.isCouponClick = !0;
                t.id;
                var a = "", o = "", i = h.getCouponIds(t);
                this.data.selectCard ? (a = this.data.selectCard.id, o = this.data.selectCard.card_num, 
                this.data.tempPayType = "couponCardPay") : this.data.tempPayType = "couponOnlinePay", 
                this.calculatePrice(this.getGoodInfo({
                    is_first: "0",
                    card_id: a,
                    goods_coupon_id: i,
                    card_num: o
                }));
            }
        } else console.log("不可用券");
    },
    selectedCoupon: function() {
        console.log("selectedCoupon");
        var e = this.data.couponLists, t = (this.data.currentPrice.goods.length, !1), a = 0;
        for (var o in e) {
            var i = e[o];
            "2" == this.data.curCouponClick.coupon_type && i.id != this.data.curCouponClick.id && (i.isSelected = !1), 
            i.id == this.data.curCouponClick.id && (i.isSelected = !i.isSelected), i.isSelected && (a += 1);
        }
        a > 0 && (t = !0), this.data.selectedCountTemp = a, this.setData({
            isCouponSelected: t,
            couponLists: e || []
        });
    },
    payClick: function() {
        console.log("payClick");
        var e = this, t = this.data.couponList, a = !1;
        for (var o in t) if (t[o].selected) {
            a = !0;
            break;
        }
        this.clearSelectedOffLineCouponList(), "couponOfflinePay" == e.data.payType || a ? wx.showModal({
            content: "使用活动优惠券将放弃使用线下优惠券",
            success: function(t) {
                t.confirm && e.payEntityUse();
            }
        }) : this.payEntityUse();
    },
    payEntityUse: function() {
        var e = this.data.currentPrice;
        e = this.data.payType == f ? this.data.memberPrice : this.data.nomemberPrice;
        var t = this.data.selectedCountTemp;
        this.data.isCouponSelected ? this.setData({
            selectedCount: t,
            currentPrice: e
        }) : this.restore(), h.hide();
    },
    clearSelectedOffLineCouponList: function() {
        var e = this.data.couponList;
        for (var t in e) e[t].selected && (e[t].selected = !1);
        this.setData({
            couponList: e,
            couponPriceEntity: {},
            couponBottomShow: !1
        });
    },
    restore: function() {
        var e = this.data.currentPrice;
        e = this.data.payType == f ? this.data.memberPriceDefault : this.data.nomemberPriceDefault;
        var t = h.clearSelected();
        this.setData({
            isCouponSelected: !1,
            selectedCount: 0,
            couponLists: t || [],
            currentPrice: e
        });
    },
    getCouponList: function(e) {
        var t = "", a = "";
        "online" == this.data.payType || this.data.payType == f && (t = this.data.selectCard.id), 
        a = this.data.currentPrice.price, h.getCouponList(t, "1", e, a);
    },
    loadCoupons: function(e) {
        "bottom" == e.detail.direction && (console.log("底部加载更多卖品券"), this.data.page != this.data.total_page && (this.data.page += 1, 
        this.getCouponList(this.data.page)));
    },
    calculatePrice: function(t) {
        var a = this, i = e.urls.goodsCalculate;
        t = e.urlParameter(t), e.wxRequest.postRequest(i, t).then(function(e) {
            if (console.log(e), o.decodeRes(e, a.data.tempPayType)) {
                console.log(o);
                var i = o.successObj.nonmemberPrice ? o.successObj.nonmemberPrice : a.data.nomemberPrice, s = o.successObj.memberPrice ? o.successObj.memberPrice : a.data.memberPrice;
                if (1 == t.is_first) {
                    if (s.defaultCard ? (a.data.payType = f, a.setData({
                        selectCard: s.defaultCard
                    })) : i && (a.data.payType = "online"), 1 == t.is_first) if (1 != o.successObj.requestData.is_delivery && 1 != o.successObj.requestData.is_show_time && 1 != o.successObj.requestData.is_takeout) {
                        n = {
                            location: "前台自取",
                            choseType: "takeSelf"
                        };
                        a.setData({
                            selectTypeData: n
                        });
                    } else {
                        var n = {
                            location: "请选择",
                            choseType: "none"
                        };
                        a.setData({
                            selectTypeData: n
                        });
                    }
                    a.setData({
                        currentPrice: "online" == a.data.payType ? i : s
                    });
                }
                a.data.tempPayType == f ? a.cardIsCanUse(s) : "online" == a.data.tempPayType || ("couponOfflinePay" == a.data.tempPayType ? (console.log("that.data.couponAdd", a.data.couponAdd), 
                h.calculatePriceIsSuccess(!0)) : "couponCardPay" != a.data.tempPayType && "couponOnlinePay" != a.data.tempPayType || (console.log("_that.data.tempPayType", a.data.tempPayType), 
                a.selectedCoupon())), 1 == t.is_first ? a.setData({
                    memberPriceDefault: s,
                    nomemberPriceDefault: i,
                    memberPrice: s,
                    nomemberPrice: i,
                    requestData: o.successObj.requestData
                }) : a.setData({
                    memberPrice: s,
                    nomemberPrice: i,
                    requestData: o.successObj.requestData
                }), 1 == t.is_first && (a.data.page = 1, a.getCouponList(1), a.data.hall_id && "none" == a.data.selectTypeData.choseType && a.getWapChoseTypeInfo());
            } else a.goodsUpdateErr(e), h.calculatePriceIsSuccess(!1);
        }).finally(function() {
            wx.stopPullDownRefresh();
        });
    },
    choseCouponTouchEnd: function() {
        h.hide(), h.isSelectedCoupon();
    },
    phoneClick: function(e) {
        this.gotoLogin() || console.log(e);
    },
    gotoLogin: function() {
        return getApp().globalData.isShowedUserProtocol ? !getApp().userIsLogin() && (wx.navigateTo({
            url: "/pages/login/wxLogin/wxLogin"
        }), !0) : (this.setData({
            showUserProtocol: getApp().globalData.isShowedUserProtocol
        }), !0);
    },
    dialogNoClick: function() {},
    getWapChoseTypeInfo: function() {
        this.startGetDelivery();
    },
    getDeliveryTime: function() {
        var t = "";
        e.urls.getDeliveryTime;
        if (this.data.choseTypedata && this.data.choseTypedata.deliveryds && this.data.choseTypedata.deliveryds.length > 0) {
            for (var a = 0; a < this.data.choseTypedata.deliveryds.length; a++) {
                var o = this.data.choseTypedata.deliveryds[a];
                if (o.id == this.data.hall_id) {
                    t = this.data.hall_id, console.log("delivery========"), console.log(o);
                    var i = this.data.choseTypedata.deliveryds.splice(a, 1);
                    this.data.choseTypedata.deliveryds.unshift(i[0]);
                    break;
                }
            }
            t && t.length > 0 ? (p.setDelegate(this, this.data.choseTypedata), p.clickTakeServiceTime()) : (getApp().globalData.hall_id = "", 
            this.data.hall_id = "");
        }
    },
    setDeliveryTime: function() {
        console.log("================setDeliveryTime=");
        var e = {};
        e.choseType = "takeService", e.location = p.data.sendServeDelivery.dataDic.deliveryString, 
        e.time = p.data.sendServeTime.dataDic.timeStr, e.buytime = p.data.sendServeTime.dataDic.buyTimeStr, 
        console.log(e), this.setData({
            selectTypeData: e
        });
    },
    addCoupon: function(e) {
        var t = this, a = this.data.inputCouponNum;
        if (a) {
            a = (a = a.trim()).replace(/[\r\n\t]/g, "");
            var o = getApp().getCinema().id;
            r.bindOfflineCoupon(a, o, "1").then(function(e) {
                if (console.log(e), 1 == e.data.status) {
                    var a = e.data.data.success, o = e.data.data.failedList, i = e.data.data.message, s = e.data.data.channel;
                    if ("1" == a) {
                        getApp().showModalApp(i), t.setData({
                            inputCouponNum: o || ""
                        });
                        var n = t.getCurrentCouponType();
                        t.refreshCouponList(n, s);
                    } else getApp().showModalAppWithTitle(i, "添加失败");
                }
            });
        } else wx.showToast({
            icon: "none",
            title: "请输入优惠券码"
        });
    },
    closeCoupon: function(e) {
        h.hide();
    },
    inputCouponEvent: function(e) {
        var t = e.detail.value;
        console.log(t), this.data.inputCouponNum = t, this.setData({
            inputCouponNum: t
        });
    },
    clearInput: function() {
        this.setData({
            inputCouponNum: ""
        });
    },
    refreshSelfCouponList: function() {
        var e = "", t = "";
        this.data.payType == f && (e = this.data.selectCard.id), t = this.data.currentPrice.price, 
        this.data.page = 1, h.reloadSelfCouponList(e, "1", "1", t);
    },
    refreshCouponList: function(e, t) {
        var a = this;
        if (1 == e) {
            if ("1" == t) return h.showSelfCoupon(), void a.refreshSelfCouponList();
            a.getOffLineCouponList();
        } else {
            if ("2" == t) return h.showActiveCoupon(), void a.getOffLineCouponList();
            a.refreshSelfCouponList();
        }
    },
    getCurrentCouponType: function() {
        return console.log("goSelfCoupon-------" + this.data.goSelfCoupon), this.data.goSelfCoupon ? 0 : 1;
    },
    dismissDialog: function() {
        this.setData({
            showUserProtocol: !0
        });
    },
    not_agree: function() {
        this.dismissDialog();
    },
    agree: function() {
        this.dismissDialog(), this.gotoLogin();
    },
    clickActiveCoupon: function() {
        h.showActiveCoupon();
    },
    clickSelfCoupon: function() {
        h.showSelfCoupon();
    },
    swiperChange: function(e) {
        0 == e.detail.current ? h.showSelfCoupon() : h.showActiveCoupon();
    },
    getOffLineCouponList: function() {
        var e = this;
        r.getOffLineCouponList("2").then(function(t) {
            h.dealOffLineCouponList(t, e.data.cartGoods, 2);
        });
    },
    onlineCouponRuleClick: function(e) {
        h.onlineCouponRuleClick(e);
    },
    couponClick: function(e) {
        h.couponClick(e);
    },
    calculatePriceWithCoupons: function(e, t, a) {
        this.data.tempPayType = "couponOfflinePay", this.data.couponAdd = !1, this.calculatePrice(this.getGoodInfo({
            is_first: "0",
            member_coupon_id: e
        }));
    },
    deleCoupon: function() {
        "couponOfflinePay" == this.data.payType ? (this.didChoseOnlinePay(), h.hide()) : h.hide();
    },
    choseCoupon: function() {
        var e = this, t = "";
        e.data.currentPrice.goods.length > 0 && (e.data.currentPrice.goods[0].buyCount > 1 || e.data.currentPrice.goods.length > 1) && (t = "选择线下券支付，订单价格将按照线下市场价计算。您可分两次订单，价格更优惠。"), 
        t.length > 0 ? wx.showModal({
            title: "温馨提示",
            content: t,
            success: function(t) {
                t.confirm && (e.didChoseCouponPay(), h.hide());
            }
        }) : (e.didChoseCouponPay(), h.hide());
    },
    didChoseCouponPay: function() {
        var e = this;
        e.data.payType = "couponOfflinePay", e.data.selectCard = null;
        var t = this.data.currentPrice;
        t = this.data.nomemberPrice, e.data.gobuycouponNum = h.getActiveCouponNums();
        var a = e.data.gobuycouponNum.split(",").length;
        e.setData({
            selectedCount: a,
            selectCard: e.data.selectCard,
            currentPrice: t
        });
    },
    expandClick: function(e) {
        var t = e.currentTarget.dataset.index, a = this.data.currentPrice.goods[t];
        a.expand ? a.expand = !a.expand : a.expand = !0, this.setData({
            currentPrice: this.data.currentPrice
        });
    },
    scanQRcode: function() {
        var e = this;
        wx.scanCode({
            onlyFromCamera: !0,
            success: function(t) {
                var a = t.result;
                e.data.inputCouponNum = a, e.setData({
                    inputCouponNum: a
                }), e.addCoupon();
            },
            fail: function(e) {
                console.log("fail", e);
            }
        });
    }
});