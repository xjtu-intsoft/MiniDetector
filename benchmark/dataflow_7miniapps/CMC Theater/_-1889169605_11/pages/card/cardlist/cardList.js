var a = require("./../../../config/httpHtlper.js"), e = require("../../../util/codecontol.js"), t = require("../../../util/util.js");

Page({
    data: {
        list: [],
        showDefault: !0,
        showDialog: !1,
        memberCard: {},
        isLoaded: !1
    },
    onLoad: function(a) {
        this.data.fromFlag = a.fromFlag, this.getCardList();
    },
    onUnload: function() {
        console.log("---cardList---onUnload------");
    },
    onShow: function() {
        getApp().userIsLogin() ? (console.log("-----cardList---------" + getApp().globalData.isLoadCardList), 
        getApp().globalData.isLoadCardList && (this.getCardList(), getApp().globalData.isLoadCardList = !1)) : getApp().alignLogin();
    },
    getCardList: function() {
        var e = this;
        a.card_list("").then(function(a) {
            if (1 == a.data.status) {
                var r = a.data.data.card_data.length;
                getApp().getUserInfo().card_num = r && r > 0 ? r + "" : "0";
                for (var o = [], c = {}, n = 0; n < r; n++) {
                    var i = a.data.data.card_data[n];
                    "1" == i.default_card && (c = i), i.valid_time_old = i.valid_time, i.valid_time && (i.valid_time = t.formatDate2(i.valid_time, "yyyy.MM.dd"));
                    var d = "";
                    if (i.card_num) {
                        for (var s = i.card_num.length, l = 0; l < s; l++) d += i.card_num[l], (l + 1) % 4 == 0 && (d += " ");
                        i.card_num = d;
                    }
                    "1" == i.card_recharge ? i.temp_recharge = !0 : i.temp_recharge = !1, i.no_color = "";
                    var g = {
                        golden: "ecz_bg1",
                        red: "ecz_bg2",
                        purple: "ecz_bg3",
                        green: "ecz_bg4",
                        blue: "ecz_bg5",
                        black: "ecz_bg6"
                    };
                    i.card_color ? (i.card_bg = g[i.card_color], i.wx_text_color = "white") : "0" == i.can_buy_with_online_pay ? (i.card_bg = "card_chongzhi_bg", 
                    i.wx_text_color = "chongzhi", i.no_color = "card_recharge_no_color") : (i.card_bg = "card_quanyi_bg", 
                    i.wx_text_color = "quanyi"), i.isShowBalance = !1, "0" == i.can_buy_with_online_pay && (i.isShowBalance = !0), 
                    i.badText = "", i.isShowBadCard = !1, "1" != i.card_status && (i.price && "" != i.price && (i.price = parseFloat(i.price) + ""), 
                    i.wx_text_color = "white", i.card_bg = "card_guoqi_bg", i.badText = e.getbadText(i.card_status), 
                    "5" == i.card_status && ("0" == i.can_buy_with_online_pay && "1" == i.card_recharge ? i.isShowBadCard = !0 : "1" != i.can_buy_with_online_pay && "5" != i.type_id || "1" != i.card_recharge || (i.isShowBadCard = !0))), 
                    i.isShowQR = !0, o.push(i);
                }
                var _ = -1;
                c && (_ = o.indexOf(c)), console.log(" default index = " + _), _ > -1 && (o.splice(_, 1), 
                o.unshift(c)), e.setData({
                    list: o,
                    isLoaded: !0
                });
            }
        });
    },
    getbadText: function(a) {
        switch (a) {
          case "2":
            return "已挂失";

          case "3":
            return "已退还";

          case "4":
            return "已注销";

          case "5":
            return "已过期";

          case "6":
            return "已作废";

          case "8":
            return "未启用";

          case "9":
            return "已休眠";

          case "10":
            return "已冻结";

          default:
            return "无信息";
        }
    },
    itemClick: function(a) {
        var e = a.currentTarget.dataset.bean;
        e && (console.log(e), wx.navigateTo({
            url: "/pages/card/cardDetails/cardDetails?bean=" + getApp().encodeDataAndJsonStringify(e)
        }));
    },
    qrcodeClick: function(a) {
        var t = a.target.dataset.bean;
        console.log(t), e.barcode("oneCanvas", t.card_num, "580", "124"), e.qrcode("twoCanvas", t.card_num, "400", "400"), 
        this.setData({
            showDialog: !0,
            memberCard: t
        });
    },
    dismissDialog: function() {
        console.log("=============="), this.setData({
            showDialog: !1
        });
    },
    addCard: function(a) {
        wx.navigateTo({
            url: "/pages/card/bind/bindCard"
        });
    },
    rechargeClick: function(a) {
        var e = a.target.dataset.bean;
        console.log(a), wx.navigateTo({
            url: "/pages/card/recharge/cardRecharge?cardDetails=false&bean=" + getApp().encodeDataAndJsonStringify(e)
        });
    },
    onPullDownRefresh: function() {
        this.getCardList(), wx.stopPullDownRefresh();
    },
    touchStart: function(a) {
        console.log(a);
    },
    touchEnd: function(a) {
        console.log(a), this.dismissDialog();
    }
});