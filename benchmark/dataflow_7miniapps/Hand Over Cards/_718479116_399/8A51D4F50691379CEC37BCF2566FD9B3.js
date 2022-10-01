Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.loadingFun = function(e) {
    var t = !1;
    switch (e) {
      case "true":
        t = !0;
        break;

      case "false":
        t = !1;
        break;

      case !0:
        t = !0;
        break;

      case !1:
        t = !1;
    }
    return t;
}, exports.infoFun = function(e, t, n, a) {
    var i = getApp();
    e.detail.iv ? "sync" == t ? i.setUnion(e.detail, function() {
        n && n();
    }, function() {
        a && a("fail");
    }) : (n && n(), i.setUnion(e.detail)) : a && a("refuse");
};