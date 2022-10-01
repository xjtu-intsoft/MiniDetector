var t = getApp().urlService, e = require("../../../request/calculateRequest.js").calculateRequest, o = require("../../../util/weiPayUtil.js"), a = require("../../../util/strUtil.js"), i = require("../../../config/httpHtlper.js"), n = require("../../../util/util.js"), s = require("../../../util/wxApi.js").wxPayRequest, r = require("../../../util/publicTool.js").promiseTime, d = require("../../../util/publicTool.js").promiseModal, c = require("../../../templates/confirmOrder/choseGoods/choseGoods.js"), l = require("../../../templates/confirmOrder/choseCard/choseCard.js"), u = require("../../../templates/confirmOrder/choseCoupon/choseCoupon.js"), p = require("../../../templates/showpricedetial/showpricedetial.js"), h = require("../../../templates/dialog/refundNoticeDialog/refundNotice.js"), f = require("./confirmOrderTimeDown.js"), C = require("../../../util/aes.js"), g = C.enc.Utf8.parse("1de&^*-#gsol&^*-"), y = C.enc.Utf8.parse("1rue%#ls;1&8^*-#");

Page({
    data: {
        orderComfimEntity: {},
        maskviewData: {},
        scrollHeight: 0,
        couponScrollHeight: 0,
        goodScrollHeight: 0,
        cardList: [],
        couponList: [],
        selfCouponList: [],
        goodListData: {},
        calculateData: {},
        choseGoodListArr: [],
        optionGoodsMap: [],
        cardListOpen: !0,
        hiddenNum: !0,
        selectCard: null,
        cardStatus: {},
        payType: "0",
        tempPayType: "0",
        onlinePriceEntity: {},
        cardPriceEntity: {},
        couponPriceEntity: {},
        selfCouponPriceEntity: {},
        canUseCouponCount: 0,
        offLineCanUseCount: 0,
        currentPriceEntity: null,
        saveMoney: 0,
        gobuycouponNum: "",
        couponAdd: !1,
        couponBottomShow: !1,
        couponRightShow: "添加影票及餐饮优惠券",
        phoneNumber: "",
        cardPass: "",
        hiddenInputPass: !0,
        countDownTime: "00:00",
        countDownEnd: !1,
        countDownOverTime: !1,
        page_num: "1",
        inputNum: "",
        inputCouponNum: "",
        phoneCanChange: !0,
        buttonTitle: "去支付",
        isLoad: !1,
        formID: "",
        isWxPay: !1,
        isCreatingOrder: !1,
        detialDisplay: !1,
        maincardBtnTitle: "立即开通",
        maincardBtnSelect: "handleCard",
        confirOpenObjc: null,
        activeCouponDidAlert: !1,
        cardCount: 0,
        memberDeleteCard: !1,
        idCardTips: "请填写观影人信息",
        isShowCertification: !1,
        selectedContacts: []
    },
    onLoad: function(t) {
        l.setDelegate(this, "ticket"), u.setDelegate(this), c.setDelegate(this), p.setOrderDelegate(this), 
        h.setDelegate(this), f.setDelegate(this);
        var e = t.orderComfimEntity ? getApp().decodeDataAndJsonParse(t.orderComfimEntity) : "";
        this.beginTimeDown(e.lock_ttl), e.order_info.showSeatCount = e.order_info.seat_info.split(",").length, 
        e.order_info.showSeatInfo = e.order_info.seat_info.replace(/\,/g, " "), e.order_info.show_time = n.formatDatelong(e.order_info.start_time);
        var o, a = getApp().globalData.init;
        if (o = !a.is_allowed_customized_order_phone || "1" == a.is_allowed_customized_order_phone, 
        this.setData({
            orderComfimEntity: e,
            phoneCanChange: o
        }), "1" == e.order_type) c.loadGoodList(); else {
            var i = e.goods.goods_data;
            this.data.goodListData.cinema_goods_name = e.goods.cinema_goods_name;
            var s = [];
            for (var r in i) {
                var d = i[r];
                if (d.promo_is_addition_type = "", d.choseNum = parseInt(d.good_num), d.price = (parseFloat(d.price) / d.choseNum).toFixed(2), 
                d.member_price = (parseFloat(d.member_price) / d.choseNum).toFixed(2), d.nonmember_price = (parseFloat(d.nonmember_price) / d.choseNum).toFixed(2), 
                "1" == d.is_promo && (d.promo_is_addition_type = "0", d.promo_member_price = d.member_price, 
                d.promo_nonmember_price = d.nonmember_price), "3" == d.goods_type && (d.isExpand = !1, 
                d.allAddPrice = c.getOptionGoodAllAddPrice(d)), s.push(d), d.additional_goods && d.additional_goods.length > 0) for (var C in d.additional_goods) {
                    var g = {}, y = d.additional_goods[C];
                    g.promo_is_addition_type = "1", g.goods_alias = y.goods_alias, g.goods_content = y.goods_content, 
                    g.goods_id = y.goods_id, g.goods_pic_url = y.goods_pic_url, g.id = y.id, g.good_num = "1", 
                    g.choseNum = parseInt(y.goods_num), g.member_price = (parseFloat(y.member_price) / g.choseNum).toFixed(2), 
                    g.nonmember_price = (parseFloat(y.nonmember_price) / g.choseNum).toFixed(2), g.promo_member_price = g.member_price, 
                    g.promo_nonmember_price = g.promo_nonmember_price, g.ng_strategy_goods_id = g.ng_strategy_goods_id, 
                    s.push(g);
                }
            }
            e.goods.goods_data_list = s, this.data.selectedContacts = e.order_info.companion_info, 
            this.data.selectedContacts && this.data.selectedContacts.length > 0 && this.data.selectedContacts.forEach(function(t) {
                t.isSelected = !0, t.id = t.companion_id;
            }), this.setData({
                orderComfimEntity: e,
                choseGoodListArr: s,
                selectedContacts: this.data.selectedContacts,
                idCardTips: ""
            });
        }
        this.setScrollHeight(), this.firstLoad(), this.getOffLineCouponList(), this.loadCardList();
    },
    onShow: function() {
        var t = this;
        f.setCountDownEnd(!1), t.setData({
            phoneNumber: getApp().globalData.userInfo.mobile,
            hiddenNum: !0,
            isCreatingOrder: !1
        }), getApp().globalData.confirOpenObjc && setTimeout(function() {
            t.data.countDownOverTime ? getApp().globalData.confirOpenObjc = null : (t.data.confirOpenObjc = getApp().globalData.confirOpenObjc, 
            getApp().globalData.confirOpenObjc = null, t.showMainCardBtnState(t.data.confirOpenObjc.status));
        }, 1e3), console.log("============isLoadCardList=", getApp().globalData.isLoadCardList), 
        getApp().globalData.isLoadCardList && (t.loadCardList(), t.getOffLineCouponList(), 
        getApp().globalData.isLoadCardList = !1), t.data.isLoad && (t.data.currentPriceEntity = t.setGoodsPriceAndTotalPrice(t.data.currentPriceEntity, !!t.data.selectCard), 
        t.setData({
            currentPriceEntity: t.data.currentPriceEntity
        }), t.data.isLoad = !1);
    },
    firstLoad: function() {
        getApp().globalData.isLoadCardList = !1;
        var t = this.getPriceCalculatparameterList({});
        t.is_first = "1", this.calculatePrice(t);
    },
    onHide: function() {
        f.setCountDownEnd(!0);
    },
    onUnload: function() {
        f.setCountDownEnd(!0);
    },
    beginTimeDown: function(t) {
        f.beginTimeDown(t);
    },
    calculatePrice: function(o) {
        var a = this, i = t.urls.calculatePrice, o = t.urlParameter(o);
        t.wxRequest.postRequest(i, o).then(function(t) {
            if (console.log("1111parameter", o, t), e.tempPayType = a.data.tempPayType, t.data.data && !t.data.data.defaultCardPrice && t.data.data.nonMemberPrice && t.data.data.nonMemberPrice.code && "400210" == t.data.data.nonMemberPrice.code || "400210" == t.data.errcode && "1" == o.is_first) {
                var i = 1;
                return getApp().globalData.mainNeedRefush, "1" == a.data.orderComfimEntity.order_type && (i = 2), 
                void wx.showModal({
                    showCancel: !1,
                    content: t.data.data.nonMemberPrice.warning,
                    title: "",
                    confirmText: "我知道了",
                    success: function(t) {
                        wx.navigateBack({
                            delta: i
                        });
                    }
                });
            }
            if (e.decodeRes(t, a.data.tempPayType)) {
                "1" == a.data.tempPayType && a.cardIsCanUse(e.successObj.cardPriceEntity), "2" == a.data.tempPayType && (a.data.couponAdd ? (a.data.couponAdd = !1, 
                a.addActiveCoupon()) : u.calculatePriceIsSuccess(!0)), "3" == a.data.tempPayType && u.selfCalculatePriceIsSuccess(!0), 
                e.successObj.onlinePriceEntity && (a.data.onlinePriceEntity = e.successObj.onlinePriceEntity), 
                e.successObj.cardPriceEntity && (a.data.cardPriceEntity = e.successObj.cardPriceEntity), 
                e.successObj.couponPriceEntity && (a.setGoodsPriceAndTotalPrice(e.successObj.couponPriceEntity, !1), 
                a.data.couponPriceEntity = e.successObj.couponPriceEntity), e.successObj.selfCouponPriceEntity && (a.setGoodsPriceAndTotalPrice(e.successObj.selfCouponPriceEntity, !!a.data.selectCard), 
                a.data.selfCouponPriceEntity = e.successObj.selfCouponPriceEntity), "1" == o.is_first && (console.log(e.successObj), 
                e.successObj.cardPriceEntity ? (a.data.selectCard = e.successObj.cardPriceEntity.default_card, 
                a.didChoseCardPay()) : (a.didChoseOnlinePay(), a.loadSelfCouponList(!0)), a.data.currentPriceEntity.warning && a.data.currentPriceEntity.warning.length > 0 && wx.showToast({
                    title: a.data.currentPriceEntity.warning,
                    icon: "none"
                }));
                var n = e.successObj.calculateData;
                parseFloat(a.data.orderComfimEntity.allPrice) > 0 && parseFloat(a.data.orderComfimEntity.allPrice) != parseFloat(a.data.currentPriceEntity.newTotalPrice) && "1" == o.is_first ? d({
                    showCancel: !1,
                    content: "由于活动限制等原因，价格发生变动，请仔细核对价格，以支付价格为准",
                    confirmText: "我知道了"
                }).then(function(t) {
                    if (n.warning && n.warning.length > 0) return d({
                        showCancel: !1,
                        content: n.warning,
                        confirmText: "我知道了"
                    });
                }).then(function(t) {}) : n.warning && n.warning.length > 0 && d({
                    showCancel: !1,
                    content: n.warning,
                    confirmText: "我知道了"
                }).then(function(t) {}), h.setProtocolUpdateTime(n.protocolAndRule.update_time), 
                "1" == n.protocolAndRule.is_update && h.setProtocolStatus(""), a.setData({
                    calculateData: n,
                    onlinePriceEntity: a.data.onlinePriceEntity,
                    cardPriceEntity: a.data.cardPriceEntity,
                    selfCouponPriceEntity: a.data.selfCouponPriceEntity,
                    couponPriceEntity: a.data.couponPriceEntity
                });
            } else "1" == a.data.tempPayType && a.setData({
                selectCardIndex: -1,
                cardListOpen: !0
            }), "3" == a.data.tempPayType && u.selfCalculatePriceIsSuccess(!1), "2" != a.data.tempPayType || a.data.couponAdd || u.calculatePriceIsSuccess(!1);
        });
    },
    getPriceCalculatparameterList: function(t) {
        t.update_time = h.updateTime, t.seat_ids = this.data.orderComfimEntity.seat_ids, 
        t.is_first = "0", t.show_id = this.data.orderComfimEntity.show_id;
        var e = "", o = "";
        for (var a in this.data.choseGoodListArr) {
            var i = this.data.choseGoodListArr[a];
            "3" != i.goods_type && "1" != i.promo_is_addition_type && (e = e + i.goods_id + "-" + i.choseNum + ",", 
            i.additional_goods && i.additional_goods.length > 0 && (o += c.getAdditionInfos(i, !1) + ","));
        }
        return e = e.slice(0, e.length - 1), o = o.slice(0, o.length - 1), e = this.mergerGoods(e), 
        t.option_goods_info = this.getOptionGoodsJson(), t.goods_info = e, t.additional_goods_info = o, 
        t;
    },
    getNoGoodsPrice: function(t) {
        return parseFloat(t.total_service_fee) + parseFloat(t.handle_fee) + parseFloat(t.ticket_price_and_coupon_subsidy) - parseFloat(t.coupon_total_subsidy);
    },
    setGoodsPriceAndTotalPrice: function(t, e) {
        var o = this.getAllGoodsPrice(e);
        if (t.totalGoodsPrice = a.priceFormat(o.toFixed(2)), "0" == this.data.payType && t.cinema_card_level_info) {
            var i = (parseFloat(t.cinema_card_level_info.card_discount_amount) - this.getAllGoodsPrice(!0) + this.getAllGoodsPrice(!1)).toFixed(2);
            t.openSaveMoney = a.priceFormat(i);
        }
        "1" == this.data.payType && this.data.cardPriceEntity && this.data.onlinePriceEntity && this.calculateSavePrice(this.data.cardPriceEntity, this.data.onlinePriceEntity), 
        parseFloat(t.goods_coupon_save_fee) > 0 && (o -= parseFloat(t.goods_coupon_save_fee)) < 0 && (o = 0);
        var n = parseFloat(t.total_service_fee) + parseFloat(t.handle_fee) + parseFloat(t.ticket_price_and_coupon_subsidy) - parseFloat(t.coupon_total_subsidy);
        n < 0 && (n = 0);
        var s = "电影票¥" + a.priceFormat(t.ticket_price_and_coupon_subsidy);
        if (parseFloat(t.totalGoodsPrice) > 0 && (s = s + " + 小吃¥" + t.totalGoodsPrice), 
        parseFloat(t.handle_fee) > 0 && (s = s + " + 手续费¥" + a.priceFormat(t.handle_fee)), 
        parseFloat(t.total_service_fee) > 0 && (s = s + " + 服务费¥" + a.priceFormat(t.total_service_fee)), 
        parseFloat(t.coupon_total_subsidy) > 0 || parseFloat(t.goods_coupon_save_fee) > 0) {
            var r = parseFloat(t.coupon_total_subsidy) + parseFloat(t.goods_coupon_save_fee);
            t.totalSubsidy = a.priceFormat(r.toFixed(2)), s = s + " - 优惠¥" + t.totalSubsidy;
        } else t.totalSubsidy = "0";
        var d = "确认选择";
        t.offline_coupon_notice ? (s = "可优惠 ¥" + parseFloat(t.totalSubsidy), d = "还需选择" + t.offline_coupon_notice.need + "张") : s = "已优惠 ¥" + t.totalSubsidy, 
        t.offLineCouponOKText = d, t.detailedPriceTitle = s;
        var c = o + n;
        return t.newTotalPrice = a.priceFormat(c.toFixed(2)), this.selectCardBalanceIsEnough(t, this.data.selectCard), 
        console.log("setGoodsPriceAndTotalPrice =  ", t), t;
    },
    mergerGoods: function(t) {
        if (t) {
            var e = t.split(","), o = new Map();
            for (var a in e) {
                var i = e[a].split("-"), n = i[0], s = i[1];
                if (0 == a) o.set(n, s); else if (o.get(n)) {
                    var r = parseFloat(o.get(n)) + parseFloat(s);
                    o.set(n, r);
                } else o.set(n, s);
            }
            t = "", o.forEach(function(e, o, a) {
                t += o + "-" + e + ",";
            });
        }
        return t.slice(0, t.length - 1);
    },
    getAllGoodsPrice: function(t) {
        var e = this.data.choseGoodListArr, o = 0;
        if ("1" == this.data.orderComfimEntity.order_type) for (var a in e) {
            var i = e[a];
            console.log("getAllGoodsPrice good =", i), i.promo_is_addition_type ? o += this.getPromoAllGoodsPrice(i, t) : o += this.getNoPromoAllGoodsPrice(i, t), 
            "3" == i.goods_type && (o += parseFloat(i.allAddPrice) * i.choseNum);
        } else if ("2" == this.data.orderComfimEntity.order_type) for (var a in e) if ((i = e[a]).additional_goods && i.additional_goods.length > 0) {
            o += this.getNoPromoAllGoodsPrice(i, t);
            for (var n in i.additional_goods) o += t ? i.choseNum * parseFloat(i.additional_goods[n].member_price) : i.choseNum * parseFloat(i.additional_goods[n].nonmember_price);
        } else "1" != i.promo_is_addition_type && (o += this.getNoPromoAllGoodsPrice(i, t));
        return o;
    },
    getNoPromoAllGoodsPrice: function(t, e) {
        return e ? t.choseNum * parseFloat(t.member_price) : t.choseNum * parseFloat(t.nonmember_price);
    },
    getPromoAllGoodsPrice: function(t, e) {
        if (t.additional_goods && t.additional_goods.length > 0) {
            if (t.additional_goods && t.additional_goods.length > 0) {
                console.log("---------------");
                var o = this.getPromoPrice(t, e), a = this.getAddtionsPrice(t.additional_goods, e);
                return parseFloat(o) + parseFloat(a);
            }
            return this.getPromoPrice(t, e);
        }
        if ("0" == t.promo_is_addition_type) {
            if (t.promo_num && t.choseNum > t.promo_num) {
                var i = t.choseNum, n = t.promo_num, s = t.choseNum - n;
                t.choseNum = n;
                var r = this.getPromoPrice(t, e);
                t.choseNum = s;
                var d = this.getNoPromoAllGoodsPrice(t, e);
                return t.choseNum = i, parseFloat(r) + parseFloat(d);
            }
            return this.getPromoPrice(t, e);
        }
        return this.getNoPromoAllGoodsPrice(t, e);
    },
    getPromoPrice: function(t, e) {
        return e ? t.choseNum * parseFloat(t.promo_member_price) : t.choseNum * parseFloat(t.promo_nonmember_price);
    },
    getAddtionsPrice: function(t, e) {
        var o = 0;
        for (var a in t) o += e ? parseFloat(t[a].member_price) : parseFloat(t[a].nonmember_price);
        return o;
    },
    setScrollHeight: function() {
        var t = this;
        wx.getSystemInfo({
            success: function(e) {
                var o = e.windowHeight * (750 / e.windowWidth) * .7 - 210, a = e.windowHeight * (750 / e.windowWidth) * .7 - 88, i = e.windowHeight * (750 / e.windowWidth) * .7 - 180;
                t.setData({
                    scrollHeight: o,
                    couponScrollHeight: a,
                    goodScrollHeight: i
                });
            }
        });
    },
    showChoseCard: function() {
        l.show();
    },
    hiddenChoseCard: function() {
        l.hidden();
    },
    showChoseCoupon: function() {
        console.log("showChoseCoupon------------------"), this.data.selfCouponPriceEntity.total_price && (console.log("selfCouponPriceEntity------------------"), 
        this.data.selfCouponPriceEntity = this.setGoodsPriceAndTotalPrice(this.data.selfCouponPriceEntity, !!this.data.selectCard), 
        this.setData({
            selfCouponPriceEntity: this.data.selfCouponPriceEntity
        }), console.log(this.data.selfCouponPriceEntity)), u.show();
    },
    hiddenChoseCoupon: function(t) {
        u.hidden(t);
    },
    showPriceDetial: function() {
        this.data.currentPriceEntity && (this.data.isShow && h.hiddenDialog(), this.data.detialDisplay ? p.hidden() : (this.updateMaskViewData(), 
        p.show()));
    },
    hiddenPriceDetial: function() {
        p.hidden();
    },
    updateMaskViewData: function() {
        var t = this.data.currentPriceEntity, e = this.data.choseGoodListArr, o = this.data.goodListData.cinema_goods_name, a = this.data.selectCard;
        p.confirmOrderUpdateMaskView(t, e, o, a, this.data.orderComfimEntity.order_type);
    },
    selectcard: function(t) {
        l.selectcard(t);
    },
    cardIsCanUse: function(t) {
        l.cardIsCanUse(t);
    },
    selectCardBalanceIsEnough: function(t, e) {
        l.selectCardBalanceIsEnough(t, e);
    },
    addcard: function() {
        l.addcard();
    },
    goChange: function() {
        l.goChange();
    },
    choseCard: function() {
        var t = this;
        "2" == t.data.payType ? wx.showModal({
            title: "温馨提示",
            content: "使用会员卡将放弃使用优惠券",
            success: function(e) {
                e.confirm && (t.didChoseCardPay(), t.hiddenChoseCard());
            }
        }) : "3" == t.data.payType ? wx.showModal({
            content: "优惠方式已发生改变,请重新选择优惠券",
            success: function(e) {
                e.confirm && (t.didChoseCardPay(), t.hiddenChoseCard());
            }
        }) : (t.didChoseCardPay(), t.hiddenChoseCard());
    },
    didChoseCardPay: function() {
        console.log("----------------didChoseCardPay-----------------"), this.data.payType = "1", 
        this.data.selectCard = l.getSelectCard() ? l.getSelectCard() : this.data.selectCard, 
        this.data.cardPriceEntity = this.setGoodsPriceAndTotalPrice(this.data.cardPriceEntity, !0), 
        this.clearSelectedOffLineCouponList(), this.setData({
            selectCard: this.data.selectCard,
            currentPriceEntity: this.data.cardPriceEntity,
            payType: "1",
            couponRightShow: (this.data.canUseCouponCount, "添加影票及餐饮优惠券"),
            gobuycouponNum: ""
        }), this.loadSelfCouponList(!0);
    },
    deleateCard: function() {
        var t = this;
        if (!t.data.onlinePriceEntity.code || "400210" != t.data.onlinePriceEntity.code || this.data.memberDeleteCard) {
            if (t.data.onlinePriceEntity.warning && t.data.onlinePriceEntity.warning.length > 0) return t.hiddenChoseCard(), 
            void getApp().showModalApp(t.data.onlinePriceEntity.warning);
            "1" == t.data.payType || "3" == t.data.payType ? (t.data.selectCard = null, "3" == t.data.payType && (u.getSelfGoodsCouponNums().length > 0 || u.getSelfMovieCouponNums().length > 0) ? wx.showModal({
                content: "优惠方式已发生改变,请重新选择优惠券",
                showCancel: !1,
                success: function(e) {
                    e.confirm && (t.didChoseOnlinePay(), t.hiddenChoseCard(), t.loadSelfCouponList(!0));
                }
            }) : (t.didChoseOnlinePay(), t.hiddenChoseCard(), t.loadSelfCouponList(!0))) : t.hiddenChoseCard();
        } else {
            t.hiddenChoseCard(), this.data.memberDeleteCard = !0;
            var e = this.getPriceCalculatparameterList({});
            this.calculatePrice(e);
        }
    },
    didChoseOnlinePay: function() {
        this.data.selectCard = null, this.data.payType = "0", this.data.onlinePriceEntity = this.setGoodsPriceAndTotalPrice(this.data.onlinePriceEntity, !1), 
        this.setData({
            selectCard: this.data.selectCard,
            currentPriceEntity: this.data.onlinePriceEntity,
            payType: this.data.payType,
            couponRightShow: (this.data.canUseCouponCount, "添加影票及餐饮优惠券")
        });
    },
    calculatePriceWithCard: function(t) {
        this.data.tempPayType = "1";
        var e = this.getPriceCalculatparameterList({});
        e.is_first = "0", e.card_id = t.id, this.calculatePrice(e);
    },
    choseCoupon: function() {
        var t = this;
        if (!t.data.couponPriceEntity.offline_coupon_notice) {
            var e = "";
            e = "1" == t.data.payType ? "使用线下优惠券将放弃使用会员卡优惠" : "3" == t.data.payType ? t.data.selectCard ? "使用线下优惠券将放弃使用会员卡和活动优惠券" : "使用线下优惠券将放弃使用活动优惠券" : "", 
            (e = "选择线下券支付，订单价格将按照线下市场价计算。您可分两次订单，价格更优惠。").length > 0 && -1 != this.data.orderComfimEntity.seat_ids.indexOf(",") ? wx.showModal({
                title: "温馨提示",
                content: e,
                success: function(e) {
                    e.confirm && (t.didChoseCouponPay(), t.hiddenChoseCoupon());
                }
            }) : (t.didChoseCouponPay(), t.hiddenChoseCoupon());
        }
    },
    didChoseCouponPay: function() {
        var t = this;
        t.data.pay_type = "2", t.data.selectCard = null, t.data.couponPriceEntity = t.setGoodsPriceAndTotalPrice(t.data.couponPriceEntity, !1), 
        t.data.gobuycouponNum = u.getActiveCouponNums();
        t.data.gobuycouponNum.split(",").length;
        t.setData({
            couponRightShow: "-¥" + this.data.couponPriceEntity.totalSubsidy,
            selectCard: t.data.selectCard,
            payType: t.data.pay_type,
            currentPriceEntity: t.data.couponPriceEntity,
            offLineCouponSelectedCount: u.getActiveCouponNums()
        });
    },
    deleCoupon: function() {
        "2" == this.data.payType ? (this.didChoseOnlinePay(), this.hiddenChoseCoupon()) : this.hiddenChoseCoupon();
    },
    couponClick: function(t) {
        u.offLineCouponClick(t);
    },
    addcouponSubmit: function(t) {
        var e = this, o = "";
        if ((o = "1" == e.data.payType ? "使用线下优惠券将放弃使用会员卡优惠" : "3" == e.data.payType ? e.data.selectCard ? "使用线下优惠券将放弃使用会员卡和活动优惠券" : "使用线下优惠券将放弃使用活动优惠券" : "").length > 0 && !e.data.activeCouponDidAlert) return e.data.activeCouponDidAlert = !0, 
        void wx.showModal({
            title: "温馨提示",
            content: o,
            success: function(e) {
                e.confirm && u.addcouponSubmit(t);
            }
        });
        u.addcouponSubmit(t);
    },
    addActiveCoupon: function() {
        u.addActiveCoupon();
    },
    calculatePriceWithCoupons: function(t, e, o) {
        this.data.tempPayType = "2", this.data.couponAdd = !1;
        var a = this.getPriceCalculatparameterList({});
        a.is_first = "0", a.member_coupon_id = "", a.quan_code = "", 3 == o ? a.member_coupon_id = t : a.quan_code = t, 
        this.calculatePrice(a);
    },
    loadCardList: function() {
        l.loadCardList();
    },
    loadMoreGoods: function() {
        c.loadMoreGoods();
    },
    listAddNum: function(t) {
        console.log("确认订单========"), c.listAddNum(t), this.listAddGood();
    },
    listAddGood: function() {
        u.showGoodCouponListCanUse(this.data.choseGoodListArr, !!this.data.selectCard), 
        u.getOffLineCouponListWhenGoodChange(this.data.choseGoodListArr, 1, 1), this.upDatePriceWhenGoodChange();
    },
    listDecNum: function(t) {
        var e = this, o = u.getSelfGoodsCouponNums();
        return o && o.length > 0 ? (wx.showModal({
            content: "您购物车的商品发生变化，请重新选择优惠券",
            showCancel: !1,
            confirmText: "我知道了",
            success: function(o) {
                o.confirm && (c.listDecNum(t), e.showGoodCouponListWhenGoodDes(), e.upDatePriceWhenGoodChange());
            }
        }), !1) : (c.listDecNum(t), e.showGoodCouponListWhenGoodDes(), e.upDatePriceWhenGoodChange(), 
        !0);
    },
    choseAddNum: function(t) {
        c.choseAddNum(t), u.showGoodCouponListCanUse(this.data.choseGoodListArr, !!this.data.selectCard), 
        u.getOffLineCouponListWhenGoodChange(this.data.choseGoodListArr, 1, 1), this.upDatePriceWhenGoodChange();
    },
    choseDecNum: function(t) {
        var e = this, o = u.getSelfGoodsCouponNums(), a = u.getActiveCouponNums();
        o && o.length > 0 || a && a.length > 0 ? wx.showModal({
            content: "您购物车的商品发生变化，请重新选择优惠券",
            showCancel: !1,
            confirmText: "我知道了",
            success: function(o) {
                o.confirm && (c.choseDecNum(t), e.showGoodCouponListWhenGoodDes(), e.upDatePriceWhenGoodChange());
            }
        }) : (c.choseDecNum(t), e.showGoodCouponListWhenGoodDes(), e.upDatePriceWhenGoodChange());
    },
    showGoodCouponListWhenGoodDes: function() {
        u.showGoodCouponListWhenGoodDes(this.data.choseGoodListArr, !!this.data.selectCard), 
        u.getOffLineCouponListWhenGoodChange(this.data.choseGoodListArr, 1, 2), this.data.selfCouponPriceEntity.goods_coupon_save_fee = "0", 
        this.data.currentPriceEntity.goods_coupon_save_fee = "0", this.data.couponPriceEntity.goods_coupon_save_fee = "0", 
        this.data.couponPriceEntity.coupon_total_subsidy = "0", console.log("-支付方式--" + this.data.payType + " canUseCouponCount = " + this.data.canUseCouponCount + " offLineCanUseCount = " + this.data.offLineCanUseCount);
        var t = "";
        "3" == this.data.payType && this.data.selfCouponPriceEntity.coupon_total_subsidy > 0 ? t = "-¥" + parseFloat(this.data.selfCouponPriceEntity.coupon_total_subsidy) : "2" == this.data.payType && this.data.couponPriceEntity.coupon_total_subsidy > 0 ? t = "-¥" + parseFloat(this.data.couponPriceEntity.coupon_total_subsidy) : (this.data.canUseCouponCount, 
        t = "添加影票及餐饮优惠券"), console.log("selfGoBuyCouponCount = " + u.getSelfCouponNums()), 
        this.setData({
            couponRightShow: t,
            selfGoBuyCouponCount: u.getSelfCouponNums(),
            offLineCouponSelectedCount: u.getActiveCouponNums()
        });
    },
    upDatePriceWhenGoodChange: function() {
        var t = this.setGoodsPriceAndTotalPrice(this.data.currentPriceEntity, !!this.data.selectCard), e = t.totalGoodsPrice, o = t.detailedPriceTitle;
        this.data.selfCouponPriceEntity.totalGoodsPrice = e, this.data.selfCouponPriceEntity.detailedPriceTitle = o, 
        this.data.couponPriceEntity.totalGoodsPrice = e, this.data.couponPriceEntity.detailedPriceTitle = o, 
        "3" == this.data.payType ? u.saveSelectCouponHistory(t) : u.saveSelectCouponHistory(null), 
        this.setData({
            currentPriceEntity: t,
            selfCouponPriceEntity: this.data.selfCouponPriceEntity,
            couponPriceEntity: this.data.couponPriceEntity
        });
    },
    calculateSavePrice: function(t, e) {
        if ("1" == this.data.payType && t && e) {
            var o = this.getAllGoodsPrice(!0), i = this.getAllGoodsPrice(!1), n = this.getNoGoodsPrice(t), s = i + this.getNoGoodsPrice(e) - o - n;
            this.setData({
                saveMoney: s > 0 ? a.priceFormat(s.toFixed(2)) : "0"
            });
        } else this.setData({
            saveMoney: "0"
        });
    },
    currentInputNum: function(t) {
        this.setData({
            phoneNumber: t.detail.value
        });
    },
    cardChange: function() {
        this.data.selectCard && wx.navigateTo({
            url: "/pages/card/recharge/cardRecharge?bean=" + getApp().encodeDataAndJsonStringify(this.data.selectCard)
        });
    },
    goBuy: function(t) {
        var e = this;
        if (t && (e.data.formID = t.detail.formId), !this.data.currentPriceEntity.refund_settings || "1" != this.data.currentPriceEntity.refund_settings.refund || "1" != this.data.currentPriceEntity.refund_settings.order_can_refund || this.isReadOrUpdate()) if (this.data.detialDisplay && p.hidden(), 
        this.data.isShow && h.hiddenDialog(), ("1" == e.data.payType || "3" == e.data.payType) && e.data.selectCard && "1" == e.data.currentPriceEntity.card_pay_verify && e.data.cardPass.length <= 0) e.setData({
            hiddenInputPass: !1
        }); else if (e.data.phoneNumber && e.data.phoneNumber.length <= 0) wx.showToast({
            icon: "none",
            title: "请输入手机号"
        }); else if (/^1\d{10}$/.test(e.data.phoneNumber)) if ("1" != e.data.calculateData.is_show_companion || e.data.selectedContacts && 0 != e.data.selectedContacts.length) if (("1" == e.data.payType || "3" == e.data.payType) && e.data.selectCard && "1" != e.data.selectCard.can_buy_with_online_pay && parseFloat(e.data.selectCard.balance) < parseFloat(e.data.currentPriceEntity.newTotalPrice)) wx.showModal({
            content: "会员卡余额不足",
            showCancel: !1,
            confirmText: "我知道了"
        }); else {
            var o = e.data.orderComfimEntity.order_info;
            o.seatInfo = o.seat_info.replace(/\,/g, "、");
            var a = "您确定购买 " + o.cinema_name + " " + o.show_time + "的 《" + o.movie_name + "》 " + o.seatInfo + "座位么？";
            wx.showModal({
                title: "提示",
                content: a,
                success: function(t) {
                    t.confirm ? e.orderCreate() : t.cancel && e.setData({
                        cardPass: ""
                    });
                }
            });
        } else this.setData({
            isShowCertification: !0
        }); else wx.showToast({
            icon: "none",
            title: "请输入正确的手机号"
        }); else this.data.isShow || this.refunNoticeClick();
    },
    orderCreate: function() {
        var e = this;
        if (e.data.currentPriceEntity) if (e.data.isCreatingOrder) wx.showToast({
            icon: "none",
            title: "订单创建中"
        }); else {
            var o = t.urls.orderCreate, a = "", i = "";
            for (var n in e.data.choseGoodListArr) {
                var s = e.data.choseGoodListArr[n];
                "3" != s.goods_type && (a = a + s.goods_id + "-" + s.choseNum + ",", s.additional_goods && s.additional_goods.length > 0 && (i += c.getAdditionInfos(s, !1) + ","));
            }
            a = a.slice(0, a.length - 1), a = e.mergerGoods(a), i = i.slice(0, i.length - 1);
            var r = this.getOptionGoodsJson(), d = {
                phone: e.data.phoneNumber,
                seat_info: e.data.orderComfimEntity.order_info.seat_info,
                seat_ids: e.data.orderComfimEntity.seat_ids,
                show_id: e.data.orderComfimEntity.show_id,
                promo_id: e.data.currentPriceEntity.promo_id,
                goods_info: a,
                additional_goods_info: i,
                pay_money: e.data.currentPriceEntity.newTotalPrice,
                option_goods_info: r,
                companion_info: e.data.selectedContacts.length > 0 ? JSON.stringify(e.data.selectedContacts) : ""
            };
            switch (e.data.payType) {
              case "1":
                d.card_id = e.data.selectCard.id, d.card_password = C.encrypt(e.data.cardPass, g, y), 
                e.setData({
                    cardPass: ""
                });
                break;

              case "2":
                e.data.isInnerCardCoupon ? d.member_coupon_id = e.data.gobuycouponNum : d.coupon = e.data.gobuycouponNum;
                break;

              case "3":
                d.coupon_id = u.getSelfMovieCouponNums(), d.goods_coupon_id = u.getSelfGoodsCouponNums(), 
                e.data.selectCard && (d.card_id = e.data.selectCard.id, d.card_password = C.encrypt(e.data.cardPass, g, y), 
                e.setData({
                    cardPass: ""
                }));
            }
            d = t.urlParameter(d), e.beginOrderCreate(o, d);
        } else wx.showToast({
            icon: "none",
            title: "数据获取中"
        });
    },
    beginOrderCreate: function(e, a) {
        var i = this;
        i.data.isCreatingOrder = !0, console.log("create parameter =", a), t.wxRequest.postRequest(e, a).then(function(t) {
            if (console.log("create"), 0 == t.data.errcode) {
                getApp().globalData.isUnLockSeat = !1;
                var e = t.data.data.order_num;
                return i.data.orderComfimEntity.order_info.order_num = e, o.getOpenId(e, i.data.formID);
            }
            if (400210 == t.data.errcode) {
                var a = 1;
                return getApp().globalData.mainNeedRefush, "1" == i.data.orderComfimEntity.order_type && (a = 2), 
                void wx.showModal({
                    showCancel: !1,
                    content: t.data.data.nonMemberPrice.warning,
                    title: "",
                    confirmText: "我知道了",
                    success: function(t) {
                        wx.navigateBack({
                            delta: a
                        });
                    }
                });
            }
        }).then(function(t) {
            if (console.log("openid"), t.length > 0) {
                var e = t, o = i.data.orderComfimEntity.order_info.order_num;
                return i.data.isWxPay = i.isNeedWxPay(), i.data.isWxPay ? i.buyWeixinPay(o, e) : i.orderBuy(o, e);
            }
        }).then(function(t) {
            if (console.log("wxpay or orderBuy"), 0 == t.data.errcode) {
                if (i.data.isWxPay) {
                    var e = t.data.data.weixinLite;
                    return s(e);
                }
                wx.reLaunch({
                    url: "/pages/home/orderDetial/orderDetial?orderComfimEntity=" + getApp().encodeDataAndJsonStringify(i.data.orderComfimEntity)
                });
            }
        }).then(function(t) {
            return r(200);
        }).then(function() {
            wx.reLaunch({
                url: "/pages/home/orderDetial/orderDetial?orderComfimEntity=" + getApp().encodeDataAndJsonStringify(i.data.orderComfimEntity)
            });
        }).finally(function() {
            console.log("finally=============="), i.data.isCreatingOrder = !1;
        });
    },
    orderBuy: function(e, o) {
        console.log("订单结算");
        var a = t.urls.orderBuy, i = t.urlParameter({
            order_num: e,
            pay_money: this.data.currentPriceEntity.newTotalPrice,
            pay_type: "",
            open_id: o
        });
        return t.wxRequest.getRequest(a, i);
    },
    isNeedWxPay: function() {
        if (0 == parseFloat(this.data.currentPriceEntity.newTotalPrice)) return !1;
        var t = this;
        switch (t.data.payType) {
          case "0":
            return !0;

          case "1":
            return "1" == t.data.selectCard.can_buy_with_online_pay;

          case "2":
            return parseFloat(t.data.currentPriceEntity.newTotalPrice) > 0;

          case "3":
            return parseFloat(t.data.currentPriceEntity.newTotalPrice) > 0 && (!t.data.selectCard || "1" == t.data.selectCard.can_buy_with_online_pay);
        }
    },
    buyWeixinPay: function(e, o) {
        var a = t.urls.orderBuy, i = t.urlParameter({
            order_num: e,
            pay_money: this.data.currentPriceEntity.newTotalPrice,
            pay_type: getApp().globalData.pay_code,
            open_id: o
        });
        return t.wxRequest.getRequest(a, i);
    },
    cancelOrder: function() {
        console.log("取消订单");
        var e = t.urls.cancelOrder, o = t.urlParameter({
            type: "1",
            id: this.data.orderComfimEntity.order_info.order_num
        });
        t.wxRequest.getRequest(e, o).then(function(t) {
            0 == t.data.errcode && wx.switchTab({
                url: "/pages/mime/personCenter"
            });
        });
    },
    nouse: function() {},
    cardPassInput: function(t) {
        this.data.cardPass = t.detail.value;
    },
    modalOk: function() {
        var t = this;
        t.setData({
            hiddenInputPass: !0
        }), t.data.cardPass.length <= "0" ? wx.showModal({
            content: "请输入会员卡密码",
            showCancel: !1,
            success: function(e) {
                e.confirm && t.setData({
                    hiddenInputPass: !1
                });
            }
        }) : t.goBuy();
    },
    modalCancel: function() {
        console.log("取消"), this.setData({
            cardPass: "",
            hiddenInputPass: !0
        });
    },
    clickPhoneView: function() {
        this.data.phoneCanChange && this.setData({
            hiddenNum: !1
        });
    },
    phoneInputBlur: function() {
        console.log("失去焦点"), this.setData({
            hiddenNum: !0
        });
    },
    clickActiveCoupon: function() {
        this.data.onlinePriceEntity.code && "400210" == this.data.onlinePriceEntity.code ? getApp().showModalApp(this.data.onlinePriceEntity.warning) : u.showActiveCoupon();
    },
    clickSelfCoupon: function() {
        u.showSelfCoupon();
    },
    swiperChange: function(t) {
        0 == t.detail.current ? u.showSelfCoupon() : u.showActiveCoupon();
    },
    loadSelfCouponList: function(t) {
        t && this.showGoodCouponListWhenGoodDes();
        var e = this.data.orderComfimEntity.show_id, o = this.data.selectCard ? this.data.cardPriceEntity.promo_id : this.data.onlinePriceEntity.promo_id, a = this.data.selectCard ? this.data.cardPriceEntity.ticket_price_and_coupon_subsidy : this.data.onlinePriceEntity.ticket_price_and_coupon_subsidy, i = this.data.selectCard ? this.data.cardPriceEntity.subsidy_type : this.data.onlinePriceEntity.subsidy_type, n = this.data.selectCard ? this.data.selectCard.id : "", s = this.data.selectCard ? this.data.selectCard.type_id : "";
        u.loadSelfCouponList({
            show_id: e,
            use_strategy: o,
            price: a,
            subsidy_type: i,
            card_id: n,
            is_only_goods_type: 0,
            goods_info: ""
        }, t, this.data.choseGoodListArr, s);
    },
    selfCouponClick: function(t) {
        u.selfCouponClick(t);
    },
    choseSelfCoupon: function() {
        var t = this, e = this.data.couponList, o = !1;
        for (var a in e) if (e[a].selected) {
            o = !0;
            break;
        }
        this.clearSelectedOffLineCouponList(), "2" == t.data.payType || o ? wx.showModal({
            content: "使用活动优惠券将放弃使用线下优惠券",
            success: function(e) {
                e.confirm && (t.didChoseSelfCouponPay(), t.hiddenChoseCoupon());
            }
        }) : (t.didChoseSelfCouponPay(), t.hiddenChoseCoupon());
    },
    didChoseSelfCouponPay: function() {
        this.data.payType = "3", this.data.selfCouponPriceEntity = this.setGoodsPriceAndTotalPrice(this.data.selfCouponPriceEntity, !!this.data.selectCard), 
        u.saveSelectCouponHistory(this.data.selfCouponPriceEntity), this.setData({
            payType: this.data.payType,
            currentPriceEntity: this.data.selfCouponPriceEntity,
            couponRightShow: "-¥" + this.data.selfCouponPriceEntity.totalSubsidy,
            selfGoBuyCouponCount: u.getSelfCouponNums()
        });
    },
    deleSelfCoupon: function() {
        "3" == this.data.payType ? (u.saveSelectCouponHistory(null), this.data.selectCard ? this.didChoseCardPay() : this.didChoseOnlinePay(), 
        this.hiddenChoseCoupon()) : this.hiddenChoseCoupon();
    },
    showContent: function(t) {
        var e = t.currentTarget.dataset.content;
        e && e.length > 0 && wx.showModal({
            title: "卖品详情",
            content: e,
            confirmText: "我知道了",
            showCancel: !1
        });
    },
    loadMoreSelfCoupons: function() {
        console.log("加载更多自营券"), this.loadSelfCouponList(!1);
    },
    calculatePriceWithSelfCoupons: function(t, e) {
        this.data.tempPayType = "3";
        var o = this.getPriceCalculatparameterList({});
        o.is_first = "0", o.coupon_id = t, o.goods_coupon_id = e, this.data.selectCard && (o.card_id = this.data.selectCard.id), 
        this.calculatePrice(o);
    },
    jiajiagouClick: function(t) {
        var e, o = t.currentTarget.dataset.index, a = this.data.choseGoodListArr;
        if (0 != (e = a.length > 0 ? a[o] : this.data.goodListData.goods_data[0]).choseNum) {
            var i = "0";
            this.data.selectCard && null != this.data.selectCard && (i = "1"), wx.navigateTo({
                url: "/pages/find/shopSalesList/shopSalesList?bean=" + getApp().encodeDataAndJsonStringify(e) + "&is_memeber=" + i + "&index=" + o
            });
        } else wx.showToast({
            icon: "none",
            title: "请您选择卖品数量"
        });
    },
    getGoods: function() {
        return c;
    },
    refunNoticeClick: function() {
        if (console.log("退票说明"), this.data.detialDisplay && p.hidden(), this.data.isShow) h.hiddenDialog(); else {
            this.data.payType;
            this.data.selectCard ? h.showDialog(!0) : h.showDialog(!1);
        }
    },
    dismissDialog: function() {
        h.hiddenDialog();
    },
    tabClick: function(t) {
        var e = t.currentTarget.dataset.type;
        h.tabClick(e);
    },
    selectedClick: function() {
        h.protocolClick();
    },
    protocolClick: function() {
        var t = encodeURIComponent(this.data.calculateData.protocolAndRule.protocol);
        console.log("url === " + t), wx.navigateTo({
            url: "/pages/find/promotionDetial/promotionDetial?promotion_url=" + t + "&flag=ticket_order_refund_xiyi"
        });
    },
    isReadOrUpdate: function() {
        return h.isReadProtocol() ? !this.isProtocolUpdate() : !this.isProtocolUpdate() && (wx.showToast({
            icon: "none",
            title: "请您认真阅读并同意退票协议"
        }), !1);
    },
    isProtocolUpdate: function() {
        return "1" == this.data.calculateData.protocolAndRule.is_update && (wx.showToast({
            icon: "none",
            title: "退票协议更新"
        }), this.data.calculateData.protocolAndRule.is_update = "0", !0);
    },
    move: function() {},
    handleCard: function(t) {
        var e = t.currentTarget.dataset.cardid;
        if (e && e.length > 0) {
            console.log("hello world");
            var o = {
                id: e
            }, a = "";
            o && (a = (a = a + (a.length > 0 ? "&" : "?") + "bean=" + getApp().encodeDataAndJsonStringify(o)) + (a.length > 0 ? "&" : "?") + "fromType=ticketOrder", 
            wx.navigateTo({
                url: "/pages/card/onlinecard/ecardDetails" + a
            }));
        }
    },
    getOpenState: function() {
        var t = this.data.confirOpenObjc.orderNum;
        t && t.length > 0 && this.onLineStatus(t);
    },
    onLineStatus: function(t) {
        var e = this;
        i.onLineStatus(t).then(function(t) {
            if (1 == t.data.status) {
                var o = t.data.data.status, a = t.data.data.msg;
                wx.showModal({
                    showCancel: !1,
                    content: a,
                    confirmText: "我知道了"
                }), e.showMainCardBtnState(o);
            }
        });
    },
    showMainCardBtnState: function(t) {
        switch (parseInt(t)) {
          case 1:
            this.setData({
                maincardBtnTitle: "获取卡状态",
                maincardBtnSelect: "getOpenState"
            });
            break;

          case 2:
            this.setData({
                maincardBtnTitle: "立即开通",
                maincardBtnSelect: "handleCard",
                confirOpenObjc: null
            }), this.firstLoad();
            break;

          case 3:
            this.setData({
                maincardBtnTitle: "立即开通",
                maincardBtnSelect: "handleCard",
                confirOpenObjc: null
            });
            break;

          default:
            console.log("heiheihei"), this.setData({
                maincardBtnTitle: "立即开通",
                maincardBtnSelect: "handleCard"
            });
        }
    },
    addCoupon: function(t) {
        var e = this, o = this.data.inputCouponNum;
        if (o) {
            o = (o = o.trim()).replace(/[\r\n\t]/g, "");
            var a = getApp().getCinema().id;
            i.bindOfflineCoupon(o, a, "0").then(function(t) {
                if (console.log(t), 1 == t.data.status) {
                    var o = t.data.data.success, a = t.data.data.failedList, i = t.data.data.message, n = t.data.data.channel;
                    if ("1" == o) {
                        getApp().showModalApp(i);
                        var s = e.getCurrentCouponType();
                        e.refreshCouponList(s, n), e.setData({
                            inputCouponNum: a
                        });
                    } else getApp().showModalAppWithTitle(i, "添加失败");
                }
            });
        } else wx.showToast({
            icon: "none",
            title: "请输入优惠券码"
        });
    },
    refreshCouponList: function(t, e) {
        var o = this;
        if (1 == t) {
            if ("1" == e) return u.showSelfCoupon(), void o.reloadSelfCouponList();
            console.log(u.delegate), o.getOffLineCouponList();
        } else {
            if ("2" == e) return u.showActiveCoupon(), void o.getOffLineCouponList();
            o.reloadSelfCouponList();
        }
    },
    reloadSelfCouponList: function() {
        var t = this.data.orderComfimEntity.show_id, e = this.data.selectCard ? this.data.cardPriceEntity.promo_id : this.data.onlinePriceEntity.promo_id, o = this.data.selectCard ? this.data.cardPriceEntity.ticket_price_and_coupon_subsidy : this.data.onlinePriceEntity.ticket_price_and_coupon_subsidy, a = this.data.selectCard ? this.data.cardPriceEntity.subsidy_type : this.data.onlinePriceEntity.subsidy_type, i = this.data.selectCard ? this.data.selectCard.id : "", n = this.data.selectCard ? this.data.selectCard.type_id : "";
        u.reloadSelfCouponList({
            show_id: t,
            use_strategy: e,
            price: o,
            subsidy_type: a,
            card_id: i,
            is_only_goods_type: 0,
            goods_info: ""
        }, this.data.choseGoodListArr, n);
    },
    getOffLineCouponList: function() {
        i.getOffLineCouponList("1").then(function(t) {
            console.log("--------------offline coupon list "), u.getOffLineCouponList(t, 1);
        });
    },
    getCurrentCouponType: function() {
        return console.log("goSelfCoupon-------" + this.data.goSelfCoupon), this.data.goSelfCoupon ? 0 : 1;
    },
    inputCouponEvent: function(t) {
        var e = t.detail.value;
        console.log(e), this.data.inputCouponNum = e, this.setData({
            inputCouponNum: e
        });
    },
    clearInput: function() {
        this.setData({
            inputCouponNum: ""
        });
    },
    onlineCouponRuleClick: function(t) {
        console.log(t), u.onlineCouponRuleClick(t);
    },
    clearSelectedOffLineCouponList: function() {
        var t = this.data.couponList;
        for (var e in t) t[e].selected && (t[e].selected = !1);
        this.setData({
            couponList: t,
            couponPriceEntity: {},
            couponBottomShow: !1
        });
    },
    showChoseGoods: function() {
        if (console.log("999999 显示卖品列表", c), this.data.currentPriceEntity) {
            this.data.goodListData || (this.data.goodListData = []), "goodListData=" + getApp().encodeDataAndJsonStringify(this.data.goodListData) + "&", 
            "payType=" + getApp().encodeDataAndJsonStringify(this.data.payType) + "&", "currentPriceEntity=" + getApp().encodeDataAndJsonStringify(this.data.currentPriceEntity), 
            this.data.selectCard && "&selectCard=" + getApp().encodeDataAndJsonStringify(this.data.selectCard) + "&", 
            wx.navigateTo({
                url: "/pages/home/moreGoods/moreGoods"
            });
        }
    },
    hiddenChoseGoods: function() {
        console.log("-----------------确认订单"), console.log("chose goods ", c), console.log("this.data.choseGoodListArr = ", this.data.choseGoodListArr);
    },
    expandClick: function(t) {
        console.log(t);
        var e = t.target.dataset.index, o = this.data.choseGoodListArr;
        if (o && o.length > 0) {
            var a = o[e];
            console.log("expand good = ", a), "3" != a.goods_type && "2" != a.goods_type || (a.isExpand = !a.isExpand, 
            this.setData({
                choseGoodListArr: o
            }));
        }
    },
    optionGoodsClick: function(t) {
        var e = c.optionGoodsClick(t), o = e.goods_id, a = e.index;
        c.isCanAdd(e) && wx.navigateTo({
            url: "/pages/find/findOptionGoods/findOptionGoods?good_id=" + o + "&index=" + a + "&fromFlag=ticketOrderConfirm"
        });
    },
    optionGoodsBack: function(t) {
        t.goods_id;
        c.listAddGood(t), this.listAddGood();
    },
    getOptionGoodsJson: function() {
        return c.getOptionGoodsJson();
    },
    userProtocolClick: function(t) {
        wx.navigateTo({
            url: "/pages/login/agreement/agreement"
        });
    },
    policyClick: function(t) {
        var e = "/pages/find/promotionDetial/promotionDetial?promotion_url=" + encodeURIComponent("http://group.leying.com/app-privacy-policy/index") + "&flag=yinsizhengce";
        wx.navigateTo({
            url: e
        });
    },
    certificationCloseClick: function() {
        this.setData({
            isShowCertification: !1
        });
    },
    certificationOkClick: function() {
        this.data.orderComfimEntity.order_info.showSeatCount;
        this.setData({
            isShowCertification: !1
        }), this.showCertificate();
    },
    setCertificationStatus: function() {
        this.setData({
            idCardTips: ""
        });
    },
    showCertificate: function() {
        wx.navigateTo({
            url: "/minePages/pages/contactLists/contactLists?isConfirm=true&seatCount=" + this.data.orderComfimEntity.order_info.showSeatCount + "&selectedContacts=" + getApp().encodeDataAndJsonStringify(this.data.selectedContacts)
        });
    },
    scanQRcode: function() {
        var t = this;
        wx.scanCode({
            onlyFromCamera: !0,
            success: function(e) {
                var o = e.result;
                t.data.inputCouponNum = o, t.setData({
                    inputCouponNum: o
                }), t.addCoupon();
            },
            fail: function(t) {
                console.log("fail", t);
            }
        });
    }
});