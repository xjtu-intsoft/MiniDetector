Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.typeFun = function(e) {
    var t = "default-button";
    switch (e) {
      case "primary":
        t = "primary-button";
        break;

      case "weaken":
        t = "weaken-button";
        break;

      case "disabled":
        t = "disabled-button";
        break;

      case "warn":
        t = "warn-button";
        break;

      case "weaken-primary":
        t = "weaken-primary-button";
        break;

      case "plain-weaken":
        t = "plain-weaken-button";
    }
    return t = "m-" + t;
}, exports.sizeFun = function(e) {
    var t = "default-size-button";
    switch (e) {
      case "mini":
        t = "mini-size-button";
    }
    return t = "m-" + t;
}, exports.openTypeFun = function(e) {
    var t = "";
    switch (e) {
      case "share":
        t = "share";
        break;

      case "getPhoneNumber":
        t = "getPhoneNumber";
        break;

      case "getUserInfoSync":
      case "getUserInfo":
        t = "getUserInfo";
    }
    return t;
}, exports.infoFun = function(e, t, n, a) {
    var r = getApp();
    e.detail.iv ? "sync" == t ? r.setUnion(e.detail, function() {
        n && n();
    }, function() {
        a && a("fail");
    }) : (n && n(), r.setUnion(e.detail)) : a && a("refuse");
}, exports.getWxPhoneFun = function(e, t, n) {
    var a = getApp();
    e.detail.iv ? a.setRequest({
        url: "getWxPhone",
        data: {
            iv: e.detail.iv,
            encryptedData: e.detail.encryptedData
        }
    }, function(e) {
        t && t(e);
    }, function() {
        n && n("fail");
    }) : n && n("refuse");
};