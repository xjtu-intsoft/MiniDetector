function e(e) {
    return (e = e.toString())[1] ? e : "0" + e;
}

function t(e, t, n) {
    return e ? e.replace(new RegExp(t, "gm"), n) : "";
}

module.exports = {
    formatTime: function(t) {
        var n = t.getFullYear(), r = t.getMonth() + 1, o = t.getDate(), a = t.getHours(), i = t.getMinutes(), s = t.getSeconds();
        return [ n, r, o ].map(e).join("/") + " " + [ a, i, s ].map(e).join(":");
    },
    checkMobile: function(e) {
        return /^1[3|4|5|7|8][0-9]\d{4,8}$/.test(e);
    },
    writeObj: function(e) {
        var t = "";
        for (var n in e) t += n + e[n];
        return t;
    },
    transformSuccessData: function(e) {
        var t = decodeURIComponent(e.data);
        return JSON.parse(t);
    },
    showToast: function(e) {
        wx.showModal({
            title: "提示",
            content: e,
            success: function(e) {}
        });
    },
    showLoading: function() {
        wx.showLoading({
            title: "加载中"
        });
    },
    dismissLoading: function() {
        wx.hideLoading();
    },
    showToastAndFinish: function(e) {
        wx.showModal({
            title: "提示",
            content: e,
            success: function(e) {
                wx.navigateBack({
                    delta: 1
                });
            }
        });
    },
    addCardNumBlank: function(e) {
        if (!e) return "";
        for (var n = t(e, " ", "").split(""), r = "", o = 0; o < n.length; o++) 0 != o && o % 4 == 0 && (r += " "), 
        r += n[o];
        return r;
    },
    replaceAll: t,
    getLast4: function(e) {
        return e.length <= 4 ? e : e.substring(e.length - 4);
    },
    getMDHMDate: function(e) {
        var t = new Date(e);
        return t.getMonth() + 1 + "-" + t.getDate() + " " + t.getHours() + ":" + t.getMinutes();
    },
    addMoneySymbol: function(e) {
        if (!e) return "";
        for (var n = t(e, " ", "").split(""), r = "", o = 0, a = n.length - 1; a >= 0; a--) 0 != o && o % 3 == 0 && (r = "," + r), 
        o++, r = n[a] + r;
        return r;
    },
    showNetError: function() {
        wx.showToast({
            title: "连接错误",
            duration: 2e3,
            image: "../../images/ic_net_error.png"
        });
    },
    getShareInfo: function() {
        var e = getApp().globalData.shareInfo;
        return {
            title: e.shareTitle,
            imageUrl: e.shareImage,
            path: "pages/home/home?recommendId=" + e.phone
        };
    },
    reportErrorMessageOperate: function(e, t) {
        var n = require("requestUtil.js"), r = new Object();
        r.type = e, r.cardId = t, wx.request({
            url: getApp().globalData.urlHost + "user/countPointMsgPage.do",
            data: n.addBaseRequest(r),
            method: getApp().globalData.requestType,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            }
        });
    }
};