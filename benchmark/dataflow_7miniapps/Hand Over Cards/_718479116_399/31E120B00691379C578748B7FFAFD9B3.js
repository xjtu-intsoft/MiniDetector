Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.typeFun = function(r) {
    var e = "default-message";
    switch (r) {
      case "warn":
        e = "warn-message";
        break;

      case "primary":
        e = "primary-message";
        break;

      case "default":
        e = "default-message";
    }
    return e = "m-" + e;
}, exports.iconSrcFun = function(r, e) {
    var s = {
        arrows: "",
        close: ""
    };
    switch (r) {
      case "warn":
        s.arrows = "arrows-warn", s.close = "close-warn";
        break;

      case "primary":
        s.arrows = "arrows-primary", s.close = "close-primary";
        break;

      case "default":
      default:
        s.arrows = "arrows", s.close = "close";
    }
    return s.arrows = "../_images/" + s.arrows + ".png", s.close = "../_images/" + s.close + ".png", 
    "arrows" == e ? s.arrows : "close" == e && s.close;
};