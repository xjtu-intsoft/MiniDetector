Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.svgIcon = function(e, s) {
    var n = "";
    if (e) return n = function(r) {
        for (var e = r.split("-"), s = "", n = 0; n < e.length; n++) {
            if (0 != n) {
                var t = e[n];
                e[n] = t.substring(0, 1).toUpperCase() + t.substring(1);
            }
            s += e[n];
        }
        return s;
    }(e), r.svgXml(n, s);
}, exports.iconClassName = function(r) {
    var e = "";
    switch (r) {
      case "loading":
        e = "m-icon-loading";
    }
    return e;
};

var r = new (require("5E0064570691379C38660C5020AFD9B3.js").SVGCON)();