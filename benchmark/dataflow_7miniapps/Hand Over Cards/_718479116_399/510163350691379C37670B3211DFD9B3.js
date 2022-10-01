Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.returnE = function(e) {
    var t = e;
    e.detail && e.detail.value ? t.miniValue = e.detail.value : t.miniValue;
    e.currentTarget && e.currentTarget.dataset ? t.miniDataset = e.currentTarget.dataset : t.miniDataset = {};
    e.detail && e.detail.userInfo && (t.miniUserInfo = e.detail.userInfo);
    return t;
}, exports.booleanSwitch = function(e, t) {
    var a = !1;
    t && (a = t);
    switch (e) {
      case "true":
        a = !0;
        break;

      case "false":
        a = !1;
        break;

      case !0:
        a = !0;
        break;

      case !1:
        a = !1;
    }
    return a;
};