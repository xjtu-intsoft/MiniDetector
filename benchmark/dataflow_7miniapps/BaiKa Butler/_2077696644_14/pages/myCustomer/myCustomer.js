function e(e) {
    var a = new Object();
    a.page = i, t(e, a);
}

function t(e, t) {
    n = !0, wx.showNavigationBarLoading(), wx.request({
        url: getApp().globalData.urlHost + "user/showSubUserDetail.do",
        data: o.addBaseRequest(t),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(t) {
            var o = a.transformSuccessData(t);
            if (r.checkResultCode(o)) {
                var n = e.data.userItems, l = o.resultBody.rows;
                1 == i && (n = new Array());
                for (var c = 0; c < l.length; c++) l[c].headImage || (l[c].headImage = "../../images/ic_head_three.png");
                s = l.length >= u, l = n.concat(l), e.setData({
                    userItems: l
                });
            }
        },
        fail: function(e) {
            a.showNetError();
        },
        complete: function(e) {
            n = !1, wx.hideNavigationBarLoading();
        }
    });
}

Page({
    data: {
        userItems: []
    },
    onLoad: function(e) {
        i = 1, this.setData({
            totalSum: e.total,
            yestodaySum: e.yestoday
        });
    },
    onShow: function() {
        e(this);
    },
    onCallPhone: function(e) {
        var t = e.currentTarget.dataset.phone;
        t && wx.makePhoneCall({
            phoneNumber: t
        });
    },
    onScrollBottom: function(t) {
        !n && s && (i++, e(this));
    },
    onShareAppMessage: function() {
        return a.getShareInfo();
    }
});

var a = require("../../utils/util.js"), o = require("../../utils/requestUtil.js"), r = require("../../utils/resultCodeUtil.js"), n = !1, s = !1, u = 20, i = 1;