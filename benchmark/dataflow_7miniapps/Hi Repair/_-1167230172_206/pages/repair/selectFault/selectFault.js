require("../../../util/util");

var t = require("../../../comm/script/fetch");

require("../../../comm/script/config"), getApp();

Page({
    data: {
        faultList: [],
        toPad: !1
    },
    onLoad: function(e) {
        var o = this;
        e.toPad && this.setData({
            toPad: !0
        }), t.getAllFaults(function(t) {
            var e = [];
            t.forEach(function(t, o, a) {
                var i = {};
                1 != t.jump_type && (i.id = t.Id, i.content = t.Name, i.imgUrl = t.icon, i.desc = t.desc, 
                i.bind = "goToChooseDevice", e.push(i));
            }), o.setData({
                faultList: e
            });
        }, function(t) {});
    },
    goToChooseDevice: function(t) {
        var e = t.currentTarget.dataset, o = "../chooseDevice/chooseDevice?faultInfo=" + JSON.stringify(e);
        this.data.toPad && (o += "&toPad=true"), wx.navigateTo({
            url: o
        });
    }
});