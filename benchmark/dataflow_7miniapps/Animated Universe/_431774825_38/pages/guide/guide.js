var t = require("../../utils/event.js");

Page({
    data: {
        list: [ {
            url: "/images/guide_book.png",
            text1: "动图头条",
            text2: "只看精彩 聊天有料"
        }, {
            url: "/images/guide_message.png",
            text1: "尬聊神器",
            text2: "跟谁聊天 都有话题"
        }, {
            url: "/images/guide_face.png",
            text1: "海量表情",
            text2: "斗图会输 不存在的"
        }, {
            url: "/images/guide_star.png",
            text1: "自定义表情",
            text2: "上传图片 制作表情"
        } ]
    },
    getUserInfo: function(e) {
        t.mtaEvent("authorize");
        var n = function() {
            var t = wx.getStorageSync("launch_path") || "/pages/index/index";
            wx.reLaunch({
                url: t
            });
        };
        e.detail.userInfo ? (t.mtaEvent("guideConfirm"), getApp().getLogin(function() {
            n();
        })) : (t.mtaEvent("guideCancel"), wx.setStorageSync("user_Id", "0"), n());
    },
    toStart: function() {
        t.mtaEvent("guideStartSoon");
    }
});