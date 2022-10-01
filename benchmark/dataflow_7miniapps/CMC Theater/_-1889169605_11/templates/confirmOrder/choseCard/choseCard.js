function a(a) {
    var e = {
        canuse: !0,
        showPayBtn: !0,
        showRecharge: !0,
        showPayBtnTitle: "使用此卡"
    };
    return "1" == a.card_status || (e.canuse = !1, e.showRecharge = !1, e.showPayBtnTitle = a.card_status_desc, 
    n.data.cardStatus = e, n.delegate.setData({
        cardStatus: e
    }), !1);
}

function e(a, e) {
    var t = "去支付", r = "goBuy";
    if (e) {
        var d = a.can_buy_with_online_pay, c = a.recharge, s = e.balance;
        "1" != d && parseFloat(s) - parseFloat(a.newTotalPrice) < 0 && ("1" == c ? (t = "余额不足,去充值", 
        r = "cardChange") : (t = "余额不足", r = "nouse")), n.delegate.setData({
            mainPayBtnTitle: t,
            mainPayBtnActive: r
        });
    } else n.delegate.setData({
        mainPayBtnTitle: t,
        mainPayBtnActive: r
    });
}

function t(a) {
    var e = r();
    if (e) {
        var t = {
            canuse: !0,
            showPayBtn: !0,
            showRecharge: !0,
            showPayBtnTitle: "使用此卡"
        }, d = a.show_can_use, c = a.can_buy_with_online_pay, s = a.recharge, i = e.balance;
        "1" == d ? "1" == c ? t.showRecharge = !1 : parseFloat(i) - parseFloat(a.newTotalPrice) < 0 ? "1" == s ? (t.canuse = !1, 
        t.showPayBtnTitle = "余额不足") : (t.canuse = !1, t.showRecharge = !1, t.showPayBtnTitle = "余额不足") : "1" == s || (t.showRecharge = !1) : (t.showRecharge = !1, 
        t.canuse = !1, "good" == n.cardType ? t.showPayBtnTitle = "此卡不支持本商品" : "ticket" == n.cardType ? t.showPayBtnTitle = "此卡不支持本场次" : t.showPayBtnTitle = "此卡不支持"), 
        n.data.cardStatus = t, n.delegate.setData({
            cardStatus: t
        });
    }
}

function r() {
    return n.data.selectCardIndex == o ? null : n.data.cardList[n.data.selectCardIndex];
}

function d(a) {
    if ("1" != a.card_status) return a.show_color = "card_guoqi_bg", a.text_color = "card-whiteColor", 
    void (a.baddesc_logo_text = a.card_status_desc.replace("此卡", ""));
    switch (a.card_color) {
      case "golden":
        a.show_color = "ecz_bg1", a.text_color = "card-whiteColor";
        break;

      case "red":
        a.show_color = "ecz_bg2", a.text_color = "card-whiteColor";
        break;

      case "purple":
        a.show_color = "ecz_bg3", a.text_color = "card-whiteColor";
        break;

      case "green":
        a.show_color = "ecz_bg4", a.text_color = "card-whiteColor";
        break;

      case "blue":
        a.show_color = "ecz_bg5", a.text_color = "card-whiteColor";
        break;

      case "black":
        a.show_color = "ecz_bg6", a.text_color = "card-whiteColor";
        break;

      default:
        "1" == a.can_buy_with_online_pay || "5" == a.type_id ? (a.show_color = "card_quanyi_bg", 
        a.text_color = "card-quanyiColor") : (a.show_color = "card_chongzhi_bg", a.text_color = "card-chongzhiColor");
    }
}

function c() {
    var a = n.getSelectCard();
    if (a) {
        for (var e in n.data.cardList) {
            var t = n.data.cardList[e];
            if (t.id == a.id) {
                var r = n.data.cardList.length, d = n.data.cardList[r - 1];
                n.data.cardList[r - 1] = t, n.data.cardList[e] = d;
                break;
            }
        }
        n.delegate.setData({
            cardList: n.data.cardList
        });
    }
}

var s = getApp().urlService, i = require("../../../util/publicTool.js").setData, o = -1, n = new Object();

n.setDelegate = function(a, e) {
    a && (n.delegate = a, n.cardType = e, n.clear());
}, n.clear = function() {
    n.data = {
        cardList: [],
        cardListOpen: !0,
        selectCardIndex: o,
        toview: 0
    }, n.delegate.setData(n.data);
}, n.show = function() {
    n.delegate.setData({
        cardDisplay: !0
    }), setTimeout(function() {
        n.delegate.setData({
            cardDisplayAnimation: !0
        });
    }, 100);
}, n.hidden = function() {
    n.delegate.setData({
        cardDisplayAnimation: !1
    }), setTimeout(function() {
        n.delegate.setData({
            cardDisplay: !1
        }), c(), i(n.data, {
            selectCardIndex: o,
            cardListOpen: !0
        }), n.delegate.setData({
            selectCardIndex: o,
            cardListOpen: !0
        });
    }, 320);
}, n.addcard = function() {
    wx.navigateTo({
        url: "/pages/card/bind/bindCard"
    });
}, n.goChange = function() {
    if (n.data.selectCardIndex != o) {
        var a = n.data.cardList[n.data.selectCardIndex];
        wx.navigateTo({
            url: "/pages/card/recharge/cardRecharge?bean=" + getApp().encodeDataAndJsonStringify(a)
        });
    }
}, n.getSelectCard = r, n.loadCardList = function() {
    var a = s.urls.card_list, r = s.urlParameter({});
    s.wxRequest.getRequest(a, r).then(function(a) {
        var r = n.delegate.data.selectCard ? n.delegate.data.selectCard : null;
        if (a.data.data.card_data.length) {
            var c = a.data.data.card_data, s = [];
            for (var i in c) {
                var o = c[i];
                o.valid_time = o.valid_time.substr(0, 10), d(o), r && r.id == o.id && (r = o), "1" != o.type || ("1" == o.default_card ? s.push(o) : s.unshift(o));
            }
            n.data.cardList = s;
        } else n.data.cardList = [];
        r ? (n.delegate.setData({
            cardList: n.data.cardList,
            selectCard: r,
            cardCount: n.data.cardList ? n.data.cardList.length : 0
        }), e(n.delegate.data.cardPriceEntity, r)) : n.delegate.setData({
            cardList: n.data.cardList,
            cardCount: n.data.cardList ? n.data.cardList.length : 0
        }), t(n.delegate.data.cardPriceEntity);
    }).finally(function(a) {});
}, n.selectcard = function(e) {
    var t = e.currentTarget.dataset.index;
    if (n.data.cardListOpen = !n.data.cardListOpen, 1 == n.data.cardListOpen) i(n.data, {
        selectCardIndex: o,
        cardListOpen: !0
    }), n.delegate.setData({
        selectCardIndex: o,
        cardListOpen: !0
    }); else {
        i(n.data, {
            toview: 0,
            selectCardIndex: t,
            cardListOpen: !1
        }), n.delegate.setData({
            toview: 0,
            selectCardIndex: t,
            cardListOpen: !1
        });
        var r = n.data.cardList[t];
        a(r) && n.delegate.calculatePriceWithCard(r);
    }
}, n.cardIsCanUse = t, n.selectCardBalanceIsEnough = e, module.exports = n;