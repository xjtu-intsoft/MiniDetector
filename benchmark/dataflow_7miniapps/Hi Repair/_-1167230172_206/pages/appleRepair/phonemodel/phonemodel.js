getApp();

var e = require("../../../comm/script/fetch");

Page({
    data: {
        selectedIndex: 1,
        seriesList: [],
        phoneList: []
    },
    onLoad: function(e) {
        this.getDevices();
    },
    getDevices: function() {
        var t = this;
        wx.showLoading(), e.getDevices({
            brand_id: 24,
            group_by: "series",
            has_official_part: 1
        }, function(e) {
            var i = [];
            e.forEach(function(e) {
                i.push(e);
            }), i[0].devices.map(function(e) {
                return e.selected = !1;
            }), t.setData({
                seriesList: i,
                phoneList: i[0].devices
            }), wx.hideLoading();
        }, function(e) {
            wx.hideLoading(), wx.showToast({
                title: e,
                icon: "none",
                duration: 1e3
            });
        });
    },
    getTitle: function(e) {
        return "手机" == e ? "iPhone" : "平板" == e ? "iPad" : "iWatch";
    },
    selectSeries: function(e) {
        var t = e.currentTarget.dataset.index, i = this.data.seriesList[t].devices;
        i.map(function(e) {
            return e.selected = !1;
        }), console.log(t), console.log("arr-=-=-="), console.log(i), this.setData({
            selectedIndex: t + 1,
            phoneList: i
        });
    },
    selectModel: function(e) {
        var t = e.currentTarget.dataset.name, i = e.currentTarget.dataset.id, n = getCurrentPages(), s = n[n.length - 2];
        console.log(s), s.setData({
            name: t,
            id: i,
            showButton: !1,
            disabled: !0
        }), wx.navigateBack();
    }
});