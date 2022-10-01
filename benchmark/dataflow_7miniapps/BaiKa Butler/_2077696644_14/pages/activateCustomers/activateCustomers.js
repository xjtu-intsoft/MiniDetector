function t(t) {
    var a = new Object();
    a.page = u, a.flag = t.data.isActivated, e(t, a);
}

function e(t, e) {
    r = !0, wx.showNavigationBarLoading();
    var l = getApp().globalData.urlHost;
    0 == t.data.isDirect ? l += "user/showIndirectUserDetail.do" : l += "user/showDirectUserDetail.do", 
    wx.request({
        url: l,
        data: i.addBaseRequest(e),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            var i = a.transformSuccessData(e);
            if (s.checkResultCode(i)) {
                var r = t.data.userItems, l = i.resultBody.rows;
                1 == u && (r = new Array());
                for (var c = 0; c < l.length; c++) l[c].headImage || (l[c].headImage = "../../images/ic_head_three.png");
                o = l.length >= n, l = r.concat(l), t.setData({
                    userItems: l,
                    sum: i.resultBody.total
                });
            }
        },
        fail: function(t) {
            a.showNetError();
        },
        complete: function(t) {
            r = !1, wx.hideNavigationBarLoading();
        }
    });
}

Page({
    data: {
        userItems: [],
        isDirect: 1,
        isActivated: 1,
        sum: 0
    },
    onLoad: function(e) {
        u = 1, 0 == e.type ? (wx.setNavigationBarTitle({
            title: "直接用户"
        }), this.setData({
            isDirect: 1
        })) : (wx.setNavigationBarTitle({
            title: "间接用户"
        }), this.setData({
            isDirect: 0
        })), t(this);
    },
    onShow: function() {},
    onCallPhone: function(t) {
        var e = t.currentTarget.dataset.phone;
        e && wx.makePhoneCall({
            phoneNumber: e
        });
    },
    radioChange: function(e) {
        this.setData({
            isActivated: e.detail.value
        }), u = 1, t(this);
    },
    onScrollBottom: function(e) {
        !r && o && (u++, t(this));
    },
    onShareAppMessage: function() {
        return a.getShareInfo();
    }
});

var a = require("../../utils/util.js"), i = require("../../utils/requestUtil.js"), s = require("../../utils/resultCodeUtil.js"), r = !1, o = !1, n = 20, u = 1;