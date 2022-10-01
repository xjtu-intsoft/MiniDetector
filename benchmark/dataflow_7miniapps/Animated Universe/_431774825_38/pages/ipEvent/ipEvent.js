var e = require("../../utils/util.js"), t = require("../../utils/event.js");

Page({
    data: {
        eventData: null,
        bannerImageDisplay: !0
    },
    onLoad: function(t) {
        var i = this;
        e.pageAjax.callAjax({
            url: "ipaccount/activity",
            params: {
                ip_id: t.ip_id
            },
            success: function(e) {
                var a = e.result.share_view_count, r = a.toString(), n = void 0, u = void 0, s = void 0;
                a < 10 ? (n = 0, u = Number(r[0])) : a < 100 ? (n = Number(r[0]), u = Number(r[1])) : a < 1e3 ? (n = Number(r[0]), 
                u = Number(r[1]), s = Number(r[2])) : n = u = s = 9, i.setData({
                    eventData: e.result,
                    firstNum: n,
                    secondNum: u,
                    thirdNum: s,
                    ip_id: t.ip_id,
                    join_count: e.result.join_count,
                    text_color: e.result.text_color
                });
            },
            fail: function() {
                i.setData({
                    eventData: !1
                });
            }
        });
    },
    onShareAppMessage: function() {
        var e = wx.getStorageSync("user_Id"), t = {
            type: 4,
            ip_id: this.data.ip_id,
            share_user_id: e
        };
        return {
            title: "动图宇宙",
            path: "/pages/streamImages/streamImages?item=" + JSON.stringify(t)
        };
    },
    toAgreement: function() {
        t.mtaEvent("ipHomeLotteryPageAgreement"), wx.navigateTo({
            url: "../ipEventDisclaimer/ipEventDisclaimer"
        });
    },
    formSubmit: function(i) {
        e.submitFormId(i.detail.formId), t.mtaEvent("ipHomeLotteryPageShare");
    }
});