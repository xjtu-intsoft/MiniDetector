var t = require("../../53A493630691379C35C2FB642113E9B3.js");

Page({
    data: {
        progress: 0
    },
    onLoad: function(t) {},
    onReady: function() {},
    onShow: function() {
        var n = this;
        (0, t.updateMicrov)().then(function(t) {
            n.setData({
                progress: 210
            }), t.onUpdateReady(function() {
                n.setData({
                    progress: 510
                }), setTimeout(function() {
                    t.applyUpdate();
                }, 3e3);
            }), t.onUpdateFailed(function() {
                wx.showModal({
                    title: "已经有新版本了哟~",
                    content: "新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~"
                });
            });
        }).catch(function(t) {
            console.log("小程序没有更新");
        });
    },
    ss: function() {}
});