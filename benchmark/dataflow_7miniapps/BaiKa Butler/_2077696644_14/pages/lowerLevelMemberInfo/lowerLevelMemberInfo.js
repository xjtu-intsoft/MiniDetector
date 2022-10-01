function e(e, s) {
    t.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "user/addSubRemark.do",
        data: a.addBaseRequest(s),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            t.dismissLoading();
            var a = t.transformSuccessData(e);
            r.checkResultCode(a) && (wx.showToast({
                title: "修改成功"
            }), getApp().globalData.updateRemark = !0, getApp().globalData.updateRemarkContent = s.remark);
        },
        fail: function(e) {
            t.showNetError(), t.dismissLoading();
        },
        complete: function(e) {}
    });
}

Page({
    data: {},
    onLoad: function(e) {
        var t = decodeURIComponent(e.data);
        console.log("data: " + JSON.parse(t)), this.setData({
            userBeen: JSON.parse(t)
        });
    },
    onShow: function() {},
    onInputRemark: function(e) {
        this.setData({
            remark: e.detail.value
        });
    },
    onRemark: function(t) {
        var a = new Object();
        a.subUserId = this.data.userBeen.userId, a.remark = this.data.remark, e(0, a);
    },
    onShareAppMessage: function() {
        return t.getShareInfo();
    }
});

var t = require("../../utils/util.js"), a = require("../../utils/requestUtil.js"), r = require("../../utils/resultCodeUtil.js");