var a, t, e = require("../../../AFC697330691379CC9A0FF345133E9B3.js"), r = (require("../../../FFA36E830691379C99C506846003E9B3.js"), 
new e.wxRequest()), s = require("../../../7931C4950691379C1F57AC929AD2E9B3.js"), o = getApp();

Page({
    data: {
        systemInfo: o.systemInfo,
        share: {
            checked: {},
            num: 0
        },
        netError: {
            show: !1
        }
    },
    onLoad: function(e) {
        console.log("batchReceive.onLoad", e), a = this, t = e, o.compatibleManage.navigationBarLoading && wx.showNavigationBarLoading();
    },
    onShow: function() {
        var t = this;
        o.tokenGet(function() {
            a.batchReiveData(), s.hidetoast();
        }, function() {
            t.data.groupData || t.setData({
                "netError.show": !0
            }), s.hidetoast(), o.compatibleManage.navigationBarLoading && wx.hideNavigationBarLoading();
        });
    },
    againRequest: function() {
        s.showtoast("加载中...", "loading", 8e3), this.setData({
            "netError.show": !1
        }), o.netMark.token = !0, this.onShow();
    },
    batchReiveData: function() {
        var a = this, e = this, n = t.batchShareKeys;
        r.requestUrl({
            url: "batchShareList",
            data: n,
            method: "POST"
        }, function(a) {
            a.saved_card.length > 100 && e.setData({
                "groupData.saved_card": a.saved_card.slice(0, 100)
            }), a.nosave_card.length > 100 && e.setData({
                "groupData.nosave_card": a.nosave_card.slice(0, 100)
            }), e.setData({
                groupData: a
            });
        }, function() {
            a.data.groupData || a.setData({
                "netError.show": !0
            });
        }, function() {
            s.hidetoast(), o.compatibleManage.navigationBarLoading && wx.hideNavigationBarLoading();
        });
    },
    returnT: function() {
        wx.switchTab({
            url: "../../cardsFolder/cardsFolder"
        });
    },
    formid: function(a) {
        o.formidSend(a.detail.formId);
    },
    radioAll: function(a) {
        var t = {}, e = 0;
        if (!a.currentTarget.dataset.check) {
            for (var r = 0; r < this.data.groupData.nosave_card.length; r++) t[this.data.groupData.nosave_card[r].id] = !0;
            e = this.data.groupData.nosave_card.length;
        }
        this.setData({
            "share.all": !a.currentTarget.dataset.check,
            "share.checked": t,
            "share.num": e
        });
    },
    radioClick: function(a) {
        var t = this.data.share.checked, e = this.data.share.num, r = !1;
        t[a.currentTarget.dataset.id] = !a.currentTarget.dataset.check, a.currentTarget.dataset.check ? e-- : ++e == this.data.groupData.nosave_card.length && (r = !0), 
        this.setData({
            "share.all": r,
            "share.checked": t,
            "share.num": e
        });
    },
    save: function() {
        for (var a = this, e = Object.keys(this.data.share.checked), n = [], i = this.data.groupData.nosave_card, h = 0; h < e.length; h++) if (this.data.share.checked[e[h]]) for (var c = 0; c < i.length; c++) i[c].id == e[h] && n.push({
            openid: i[c].openid,
            id: e[h]
        });
        s.showtoast("保存中...", "loading", 8e3), this.setData({
            "share.loading": !0
        }), console.log(n, "saveCard", t, this.data.share), r.requestUrl({
            url: "batchSave",
            data: {
                forwarderOpenid: t.openid,
                openid_id: n
            },
            method: "POST"
        }, function(t) {
            o.rsListObj.ifFresh = !0, a.batchReiveData(), a.setData({
                share: {
                    checked: {},
                    num: 0
                }
            }), s.showtoast("操作成功", "success", 1e3);
        }, function() {}, function() {
            a.setData({
                "share.loading": !1
            });
        });
    },
    toLook: function(a) {
        wx.navigateTo({
            url: "../batchReceiveShow/batchReceiveShow?id=" + a.currentTarget.dataset.id + "&mark=" + a.currentTarget.dataset.detail + "&main=batchReceive&shareOthers=" + t.openid + "&formtoken=" + a.currentTarget.dataset.formtoken
        });
    },
    onHide: function() {},
    onShareAppMessage: function() {
        return s.shareAppMessa({
            title: "我向您推荐“递名片”",
            path: "pages/cardMy/about/about?shareOthers=batchReceive&shareType=05",
            imageUrl: o.source.shareImage
        });
    }
});