function t(t) {
    var s = t.resultCode;
    return console.log("data: " + JSON.stringify(t)), 1e4 == s || (10033 == s ? (wx.showModal({
        title: "提示",
        content: t.resultMsg,
        success: function(t) {
            t.confirm && wx.navigateTo({
                url: "../authBank/authBank"
            });
        }
    }), !1) : 10042 == s ? (wx.showModal({
        title: "提示",
        content: t.resultMsg,
        success: function(t) {
            t.confirm && (getApp().globalData.userSessionId = "", wx.setStorageSync("userSessionId", null), 
            wx.navigateTo({
                url: "../login/login"
            }));
        }
    }), !1) : (12001 == s ? (getApp().globalData.userSessionId = "", wx.setStorageSync("userSessionId", null), 
    wx.navigateTo({
        url: "../login/login"
    })) : 12002 == s || e(t.resultMsg), !1));
}

function e(t) {
    wx.showModal({
        title: "提示",
        content: t
    });
}

var s = require("/util.js");

module.exports = {
    checkResultCode: t,
    checkResult: function(e) {
        return t(s.transformSuccessData(e));
    },
    showToast: e
};