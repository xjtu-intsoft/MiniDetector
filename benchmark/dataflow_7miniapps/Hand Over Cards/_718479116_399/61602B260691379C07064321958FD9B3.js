Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.svgIcon = function(e, i) {
    var s, a = "", r = "black";
    i && i.indexOf("#") >= 0 && (i.replace("#", "%23"), r = i);
    switch (e) {
      case "arrows-right":
        s = t;
        break;

      default:
        console.warn("当前icon不存在");
    }
    s && (a = "data:image/svg+xml,%3Csvg t='" + s.svg.t + "' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='" + s.svg["p-id"] + "' width='200' height='200'%3E%3Cpath d='" + s.path.d + "' fill='" + r + "' p-id='" + s.path["p-id"] + "'%3E%3C/path%3E%3C/svg%3E");
    return a;
};

var t = {
    svg: {
        t: "1601360992702",
        "p-id": "3712"
    },
    path: {
        d: "M703.3 511.9L295.7 917.3c-14.9 14.8-38.9 14.7-53.6-0.2-14.8-15-14.7-39 0.2-53.8l353.1-351.1-353-348.7c-14.9-14.8-15.1-38.8-0.4-53.8 7-7.2 16.7-11.3 26.7-11.3 10.1-0.1 19.8 3.9 26.9 10.9l407.7 402.6z",
        fill: "#2979FF",
        "p-id": "3713"
    }
};