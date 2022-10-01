getApp(), require("../../comm/script/fetch");

Page({
    properties: {},
    data: {
        prizes: [ {
            title: "1元红包",
            background: "#f9e3bb",
            fonts: [ {
                text: "1元红包",
                top: "18%"
            } ]
        }, {
            title: "100元红包",
            fonts: [ {
                text: "100元红包",
                top: "18%"
            } ],
            imgs: [ {
                src: "http://pic.90sjimg.com/original_origin_pic/18/12/23/563f2942d366f1a83c51afed6721354f.png",
                height: 80
            } ]
        }, {
            title: "0.5元红包",
            background: "#f9e3bb",
            fonts: [ {
                text: "0.5元红包",
                top: "18%"
            } ]
        }, {
            title: "1000元红包",
            background: "#f6f",
            imgs: [ {
                src: "http://pic.90sjimg.com/original_origin_pic/18/12/23/563f2942d366f1a83c51afed6721354f.png",
                height: 80
            } ]
        }, {
            title: "10元红包",
            background: "#f9e3bb",
            fonts: [ {
                text: "10元红包",
                top: "18%"
            } ]
        }, {
            title: "1000元红包",
            background: "#f6f",
            imgs: [ {
                src: "http://pic.90sjimg.com/original_origin_pic/18/12/23/563f2942d366f1a83c51afed6721354f.png",
                height: 80
            } ]
        }, {
            title: "1000元红包",
            background: "#f6f",
            imgs: [ {
                src: "http://pic.90sjimg.com/original_origin_pic/18/12/23/563f2942d366f1a83c51afed6721354f.png",
                height: 80
            } ]
        }, {
            title: "50元红包",
            background: "#f8d384",
            fonts: [ {
                text: "50元红包",
                top: "18%"
            } ]
        } ],
        defaultStyle: {
            fontColor: "#d64737",
            fontSize: "14px"
        },
        blocks: [ {
            padding: "13px",
            background: "#d64737"
        } ],
        buttons: [ {
            radius: "50px",
            background: "#f6f"
        }, {
            radius: "45px",
            background: "#fff"
        }, {
            radius: "41px",
            background: "#000",
            pointer: !0
        }, {
            imgs: [ {
                src: "https://imusae-download.90sheji.com/imusae/download/2021/05/07/b05ffa90fd555f6495904c3ec169c113.png?sign=12689fdb41e4cc964aa7a2850c7971f6&t=61042200&imageMogr2/thumbnail/804x/crop/!x800-0a0/auto-orient/interlace/1/sharpen/1/quality/85/format/webp",
                height: 60
            } ]
        } ],
        showLuck: !1
    },
    start: function() {
        var t = this.selectComponent("#myLucky");
        t.play(), setTimeout(function() {
            Math.random();
            t.stop(3);
        }, 3e3);
    },
    end: function(t) {
        console.log(t.detail);
    },
    showLuckDialog: function() {
        this.setData({
            showLuck: !this.data.showLuck
        });
    },
    lifetimes: {
        attached: function() {},
        detached: function() {}
    }
});