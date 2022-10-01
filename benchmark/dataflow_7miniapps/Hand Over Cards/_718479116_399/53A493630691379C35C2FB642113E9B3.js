Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.updateMicrov = function() {
    if (wx.canIUse("getUpdateManager")) {
        var e = wx.getUpdateManager();
        return new Promise(function(t, n) {
            e.onCheckForUpdate(function(a) {
                a.hasUpdate ? t(e) : n(e);
            });
        });
    }
    wx.showModal({
        title: "提示",
        content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
    });
};