Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.typeFun = function(e) {
    var t = "default-popover";
    switch (e) {
      case "input":
        t = "input-popover";
        break;

      case "tip":
        t = "tip-popover";
        break;

      case "intro":
        t = "intro-popover";
    }
    return t = "m-" + t;
}, exports.booleanFun = function(e, t) {
    var n = e;
    switch (t) {
      case "true":
        n = !0;
        break;

      case "false":
        n = !1;
        break;

      case !0:
        n = !0;
        break;

      case !1:
        n = !1;
    }
    return n;
}, exports.confirmFun = function(e, t, n) {
    var o = getApp(), r = [];
    r.push(e), o.contentTestFun(r, function(e) {
        e.allwords <= 0 ? t && t() : n && n("敏感词检测失败");
    }, function() {
        n && n();
    });
}, exports.wechatWarnFun = function() {
    wx.showModal({
        title: "",
        content: "根据微信规范，您输入的内容包含敏感词汇，请重新编辑后再提交",
        confirmText: "知道了",
        showCancel: !1
    });
};