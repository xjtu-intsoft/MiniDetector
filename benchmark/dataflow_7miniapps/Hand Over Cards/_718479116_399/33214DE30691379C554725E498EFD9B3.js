var e = require("@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

for (var t = e(require("D2B6A9300691379CB4D0C137ABDFD9B3.js")), a = [ {
    name: "TYellow-NewAngle",
    uName: "beige190626-1.jpg",
    sType: "charactor",
    stu: "onLine",
    photo: {
        l: !0
    }
}, {
    name: "TKWhite-Empty",
    uName: "white190617-5.jpg",
    sType: "charactor",
    stu: "onLine",
    photo: {
        l: !0
    }
}, {
    name: "TGold",
    uName: "yellow190314-4.jpg",
    sType: "charactor",
    stu: "onLine",
    photo: {
        l: !0
    }
}, {
    name: "TKRed-Chaos",
    uName: "red190617-1.jpg",
    sType: "charactor",
    stu: "onLine",
    photo: {
        l: !0
    }
}, {
    name: "TSblack-Circle",
    uName: "black190617-1.jpg",
    sType: "charactor",
    stu: "onLine",
    photo: {
        l: !0
    }
}, {
    name: "TKBlue-Empty",
    uName: "blue190617-1.jpg",
    sType: "charactor",
    stu: "onLine",
    photo: {
        l: !0
    }
}, {
    name: "TKGreen-Empty",
    uName: "green190617-1.jpg",
    sType: "charactor",
    stu: "onLine",
    photo: {
        l: !0
    }
}, {
    name: "TKPurple-Empty",
    uName: "purple190617-1.jpg",
    sType: "charactor",
    stu: "onLine",
    photo: {
        l: !0
    }
}, {
    name: "TKWhite-NewEmpty",
    uName: "n-white-2-new.jpg",
    sType: "charactor",
    stu: "onLine",
    photo: {
        l: !0
    }
} ].concat([ {
    name: "TPWhite-rectangle",
    uName: "white191218.jpg",
    sType: "business",
    bpUrl: "defaultBusiness_20191217.png",
    stu: "onLine",
    photo: {
        b: !0
    }
}, {
    name: "TPBlack-rectangle",
    uName: "black191218.png",
    sType: "business",
    bpUrl: "defaultBusiness_20191217.png",
    stu: "onLine",
    photo: {
        b: !0
    }
} ]), o = 0; o < a.length; o++) a[o].bcUrl = "https://img-1255379270.file.myqcloud.com/model/default/" + a[o].uName, 
a[o].type = t.default.common;

var n = {
    data: a,
    getchooseTempData: function(e) {
        return a.filter(function(t) {
            return t.name == e;
        })[0];
    }
};

exports.default = n;