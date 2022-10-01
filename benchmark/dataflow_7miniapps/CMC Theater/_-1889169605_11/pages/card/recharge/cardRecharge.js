var e = require("./../../../config/httpHtlper.js"), a = require("./../../../util/wxPaymentUtil.js"), t = require("./../../../util/strUtil.js");

Page({
    data: {
        memberCard: {},
        recharge: "",
        hasFocus: !1,
        cardDetails: !1,
        pay_code: "weixin",
        selected_position: 0,
        recharge_position: 0,
        isShow: !1,
        isShowDialog: !1,
        rechargeChange: !1,
        value: [ 0, 0 ],
        nums: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
        advertListData: [],
        activity_id: "",
        deposit_amount: ""
    },
    onLoad: function(a) {
        var t = this;
        console.log(a);
        var i = a.cardDetails, r = getApp().decodeDataAndJsonParse(a.bean), s = "请选择充值金额";
        if (r && "5" == r.type_id ? (wx.setNavigationBarTitle({
            title: "权益卡续费"
        }), s = "请选择续费金额") : (s = "请选择充值金额", wx.setNavigationBarTitle({
            title: "会员卡充值"
        })), r) {
            for (var o = new Array(), c = 1; c <= 99; c++) o[c - 1] = 100 * c;
            this.setData({
                nums: o,
                pay_code: getApp().globalData.pay_code,
                rechargeDesc: s,
                cardDetails: i
            });
            var d = this;
            e.getCardInfo(r.id).then(function(e) {
                if (e.cancelShowError = !0, 1 == e.data.status) {
                    console.log(e), console.log("res");
                    var a = e.data.data.card_data;
                    if (a.card_status = "", a) {
                        var i = a.recharge_card_rule, r = {};
                        r.price = "100", r.price1 = "其他金额", r.isSelected = !1, r.style = "pay_border_dashed", 
                        a.deposit_activity && (d.data.activity_id = a.deposit_activity.activity_id, d.data.deposit_amount = a.deposit_activity.deposit_amount), 
                        console.log("recharge_card_rule"), console.log(i), i ? console.log("1") : (console.log("2"), 
                        i = [], r.isSelected = !0);
                        for (var s = "", o = i.length, c = 0; c < o; c++) i[c].style = "pay_border_solid", 
                        i[c].price1 = i[c].price + "元", c == o - 1 ? (i[c].isSelected = !0, d.data.selected_position = c, 
                        s = i[c].price) : i[c].isSelected = !1;
                        i.splice(i.length, 1, r), a.recharge_card_rule = i;
                        var n = Math.ceil(a.lowest_recharge / 100);
                        n < 0 && (n = 0), t.data.recharge_position = 0, console.log("pickerIndex = " + n + " recharge_position = " + t.data.recharge_position);
                        for (var l = new Array(), c = n; c <= 99; c++) l.push(100 * c);
                        var h = e.data.data.ads;
                        t.setData({
                            nums: l,
                            recharge: s,
                            value: [ 0, 0 ],
                            memberCard: a,
                            advertListData: h,
                            currentSwiper: 0
                        });
                    }
                } else wx.showModal({
                    confirmColor: "#ff9500",
                    showCancel: !1,
                    content: e.data.msg,
                    confirmText: "我知道了",
                    success: function(e) {
                        wx.navigateBack({});
                    }
                });
            });
        } else getApp().showModalApp("数据错误");
    },
    bindfocus: function(e) {
        console.log(e);
    },
    input: function(e) {
        var a = e.detail.value;
        console.log(e), this.setData({
            recharge: a
        });
    },
    onUnload: function(e) {
        a.isLoading = !1;
    },
    formSubmit: function(e) {
        if (this.data.recharge) if (a.isLoading) console.log("正在调用接口"); else {
            a.isLoading = !0, console.log(e);
            var t = e.detail.formId, i = this.formatPrice(this.data.recharge), r = "确认充值" + i + "元", s = this;
            this.data.memberCard && "5" == this.data.memberCard.type_id && (r = "确认续费" + i + "元"), 
            wx.showModal({
                confirmColor: "#ff9500",
                content: r,
                success: function(e) {
                    e.confirm ? s.payClick(t) : e.cancel && (a.isLoading = !1);
                }
            });
        }
    },
    payClick: function(e) {
        var i = this;
        if (this.data.recharge) {
            if (this.data.clickTime) {
                var r = new Date().getTime();
                if (r - this.data.clickTime < 1e3) return void (this.data.clickTime = r);
                this.data.clickTime = r;
            } else this.data.clickTime = new Date().getTime();
            var s = this.data.pay_code;
            if (s) {
                console.log("cardDetails = " + i.data.cardDetails), "true" == i.data.cardDetails ? a.isRecharge = !0 : a.isRecharge = !1;
                var o = "";
                parseFloat(this.data.recharge) >= parseFloat(i.data.deposit_amount) && (o = this.data.activity_id), 
                a.cardRecharge(t.trimStr(this.data.memberCard.card_num), this.data.recharge, s, this.data.memberCard.cinema_id, "", e, o);
            } else a.isLoading = !1, wx.showToast({
                title: "数据错误",
                icon: "none"
            });
        } else a.isLoading = !1, wx.showToast({
            title: "充值金额为空",
            icon: "none"
        });
    },
    rechargeClick: function(e) {
        console.log(e);
        var a = e.currentTarget.dataset.index;
        if ("5" != this.data.memberCard.type_id || a != this.data.memberCard.recharge_card_rule.length - 1) {
            this.data.memberCard.recharge_card_rule[this.data.selected_position].isSelected = !1, 
            this.data.memberCard.recharge_card_rule[a].isSelected = !0;
            var t = this.data.memberCard.recharge_card_rule[a].price;
            if ("5" == this.data.memberCard.type_id) this.setData({
                memberCard: this.data.memberCard,
                recharge: t,
                selected_position: a
            }); else {
                if (a == this.data.memberCard.recharge_card_rule.length - 1) return this.setData({
                    isShow: !0
                }), void setTimeout(function() {
                    this.setData({
                        isShowDialog: !0
                    });
                }.bind(this), 200);
                this.setData({
                    memberCard: this.data.memberCard,
                    recharge: t,
                    selected_position: a
                });
            }
        }
    },
    dismissDialog: function() {
        this.setData({
            isShowDialog: !1
        }), setTimeout(function() {
            this.setData({
                isShow: !1
            });
        }.bind(this), 350);
    },
    bindChange: function(e) {
        console.log(e);
        var a = e.detail.value[0];
        console.log("index = " + a), this.data.recharge_position = a;
    },
    okClick: function(e) {
        this.dismissDialog();
        var a = this.data.nums[this.data.recharge_position] + "";
        console.log("rechargeValue = ", a);
        for (var t = this.data.memberCard, i = t.recharge_card_rule, r = 0; r < i.length; r++) if (r == i.length - 1) {
            var s = i[r];
            s.price1 = a + "元", s.isSelected = !0, s.style = "pay_border_dashed";
        } else i[r].isSelected = !1;
        this.setData({
            memberCard: t,
            recharge: a,
            rechargeChange: !0,
            selected_position: i.length - 1
        });
    },
    formatPrice: function(e) {
        return -1 == e.indexOf(".") && (e += ".00"), e;
    }
});