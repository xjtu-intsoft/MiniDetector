var e = require("../../../comm/script/fetch"), a = (require("../../../comm/script/config"), 
new getApp());

Page({
    data: {
        expressInfo: [],
        searchData: null,
        expressCode: ""
    },
    onLoad: function(e) {
        console.log(JSON.parse(e.data)), this.setData({
            searchData: JSON.parse(e.data)
        }), this.getExpressInfo(this.data.searchData.brandid, this.data.searchData.expressnumber);
    },
    makePhonecall: function(e) {
        wx.makePhoneCall({
            phoneNumber: e.currentTarget.dataset.tel
        });
    },
    getExpressInfo: function(t, s) {
        var r = this, o = a.globalData.hwxUserInfo.token, n = {
            order_id: this.data.searchData.id
        };
        e.getSfRoute(o, n, function(e) {
            r.setData({
                expressCode: e.mailNo,
                expressInfo: e.routes
            });
        }, function(e) {
            console.log(e);
        });
    }
});