var a = require("./../../../config/httpHtlper.js"), e = require("./../../../util/strUtil.js"), t = require("./../../../util/util.js"), r = require("./../../../util/codecontol.js");

Page({
    data: {
        memberCard: {},
        transcation: [],
        item: {},
        isCardDetails: !0,
        showDialog: !1
    },
    onLoad: function(a) {
        var e = getApp().decodeDataAndJsonParse(a.bean);
        e.isShowQR = !1, e.isShowBadCard = !1, e.show_validate_time = !0, e.valid_time = t.formatDate2(e.valid_time_old, "yyyy年MM月dd日"), 
        e.temp_recharge && (e.text_recharge = "充值", e.text_left = "卡余额(元)", e.text_type_value = e.balance, 
        "5" == e.type_id && (e.text_left = "有效期", e.text_recharge = "续卡", e.text_type_value = e.valid_time, 
        e.show_validate_time = !1)), this.data.memberCard = e, this.getCardInfo(e), this.setData({
            memberCard: e,
            item: getApp().decodeDataAndJsonParse(a.bean)
        });
    },
    dismissDialog: function(a) {
        console.log("=============="), this.setData({
            showDialog: !1
        });
    },
    unBind: function(a) {
        r.barcode("oneCanvas", this.data.memberCard.card_num, "580", "124"), r.qrcode("twoCanvas", this.data.memberCard.card_num, "400", "400"), 
        this.setData({
            showDialog: !0,
            memberCard: this.data.memberCard
        });
    },
    deleteClick: function() {
        var a = this, e = this.data.memberCard.unbind_notice;
        e && e.length > 0 ? getApp().showModalBaseCallBack(e, "确定", !0, function(e) {
            e.confirm && a.deleteCard();
        }) : this.deleteCard();
    },
    deleteCard: function() {
        a.unbind_card(e.trimStr(this.data.memberCard.card_num), this.data.memberCard.cinema_id).then(function(a) {
            console.log(a), 1 == a.data.status && (getApp().globalData.isLoadCardList = !0, 
            getApp().globalData.isUnRegisterDeleteCard = !0, wx.showToast({
                icon: "none",
                title: "删除成功",
                duration: 2e3,
                success: function() {
                    wx.navigateBack({});
                }
            }));
        });
    },
    gotoRechare: function(a) {
        var e = this, t = "/pages/card/recharge/cardRecharge?cardDetails=true&bean=" + getApp().encodeDataAndJsonStringify(e.data.memberCard);
        getApp().globalData.isIOS ? wx.redirectTo({
            url: t
        }) : wx.navigateTo({
            url: t
        });
    },
    gotoTranscation: function() {
        var a = this;
        wx.navigateTo({
            url: "/pages/card/transcation/recordList?bean=" + getApp().encodeDataAndJsonStringify(a.data.memberCard)
        });
    },
    modifyPwd: function() {
        var a = this;
        this.isCardValidate() || (a.data.memberCard.mobile ? wx.navigateTo({
            url: "/pages/card/pwd/modifyPwd?bean=" + getApp().encodeDataAndJsonStringify(a.data.memberCard)
        }) : getApp().showModalApp(a.data.memberCard.mobile_msg));
    },
    scoreExchange: function() {
        console.log(this.data.memberCard);
        var a = this.data.memberCard.card_num;
        wx.navigateTo({
            url: "/pages/card/score/scoreExchangeRecodList?card_num=" + a
        });
    },
    callPhone: function() {
        if (this.data.memberCard.cinema_tel && this.data.memberCard.cinema_tel.length > 0) {
            var a = this.data.memberCard.cinema_tel.split(",");
            wx.showActionSheet({
                itemList: a,
                success: function(e) {
                    wx.makePhoneCall({
                        phoneNumber: a[e.tapIndex]
                    });
                }
            });
        }
    },
    isCardValidate: function() {
        return "1" != this.data.memberCard.card_status && (getApp().showModalApp(this.data.memberCard.card_status_desc), 
        !0);
    },
    getCardInfo: function(e) {
        var t = this, r = this;
        a.getCardInfo(e.id).then(function(a) {
            if (1 == a.data.status) {
                var e = a.data.data.card_data;
                e.card_status = "", e && (r.data.memberCard.card_status_notice = e.card_status_notice, 
                r.data.memberCard.cinema_tel = e.cinema_tel, r.data.memberCard.unbind_notice = e.unbind_notice, 
                t.setData({
                    memberCard: r.data.memberCard
                }));
            } else wx.showModal({
                confirmColor: "#ff9500",
                showCancel: !1,
                content: a.data.msg,
                confirmText: "我知道了"
            });
        });
    }
});