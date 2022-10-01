var t = require("../../utils/util.js"), e = require("../../utils/requestUtil.js"), a = require("../../utils/resultCodeUtil.js");

Page({
    data: {
        wechatList: []
    },
    onLoad: function(s) {
        var r = this;
        wx.request({
            url: getApp().globalData.urlHost + "user/queryKefuWeiXinInfo.do",
            data: e.getBaseRequest(),
            method: getApp().globalData.requestType,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(e) {
                var s = t.transformSuccessData(e);
                a.checkResultCode(s) && r.setData({
                    wechatList: s.resultBody
                });
            },
            fail: function(e) {
                t.showNetError();
            }
        });
    },
    copyWechat: function(t) {
        wx.setClipboardData({
            data: t.target.id,
            success: function(t) {
                wx.showToast({
                    title: "复制成功"
                });
            }
        });
    }
});