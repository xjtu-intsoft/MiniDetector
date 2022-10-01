function e(e) {
    var a = new Object();
    a.page = c, a.sortType = e.data.allSort[e.data.sortSelectIndex].value, a.member = e.data.allMember[e.data.memberSelectIndex].level, 
    a.phone = e.data.phone, t(e, a);
}

function t(e, t) {
    s = !0, wx.showNavigationBarLoading(), wx.request({
        url: getApp().globalData.urlHost + "user/showDirectUserCountDetail.do",
        data: n.addBaseRequest(t),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(t) {
            var a = r.transformSuccessData(t);
            if (l.checkResultCode(a)) {
                var o = e.data.items, n = a.resultBody.rows;
                1 == c && (o = new Array()), i = n.length >= u, c++, n = o.concat(n), e.setData({
                    sum: a.resultBody.total,
                    items: n
                });
            }
        },
        fail: function(e) {
            r.showNetError();
        },
        complete: function(e) {
            s = !1, wx.hideNavigationBarLoading();
        }
    });
}

function a(t) {
    wx.request({
        url: getApp().globalData.urlHost + "user/showMemberLevel.do",
        data: n.getBaseRequest(),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(a) {
            var o = r.transformSuccessData(a);
            if (l.checkResultCode(o)) {
                var n = o.resultBody;
                n[t.data.memberSelectIndex].level;
                t.setData({
                    allMember: n
                }), e(t);
            }
        },
        fail: function(e) {
            r.showNetError();
        },
        complete: function(e) {}
    });
}

Page({
    data: {
        allMember: [],
        memberSelectIndex: 0,
        allSort: [ {
            name: "倒序",
            value: 1
        }, {
            name: "正序",
            value: 2
        } ],
        sortSelectIndex: 0,
        items: [],
        phone: ""
    },
    onLoad: function(e) {
        c = 1, o = -1, a(this);
    },
    onConfirmPhone: function(t) {
        this.setData({
            phone: t.detail.value
        }), c = 1, e(this);
    },
    bindPickerMemberChange: function(t) {
        var a = this.data.allMember;
        this.setData({
            memberSelectIndex: t.detail.value,
            member: a[t.detail.value].level
        }), c = 1, e(this);
    },
    bindPickerSortChange: function(t) {
        this.data.allSort;
        this.setData({
            sortSelectIndex: t.detail.value
        }), c = 1, e(this);
    },
    onItemClick: function(e) {
        var t = e.currentTarget.dataset.position;
        o = t;
        var a = this.data.items[t];
        a = encodeURIComponent(JSON.stringify(a)), wx.navigateTo({
            url: "../lowerLevelMemberInfo/lowerLevelMemberInfo?data=" + a
        });
    },
    onShow: function() {
        if (getApp().globalData.updateRemark) {
            var e = getApp().globalData.updateRemarkContent, t = this.data.items;
            t.length > o && o >= 0 && (t[o].remark = e, this.setData({
                items: t
            }), getApp().globalData.updateRemark = !1);
        }
    },
    onScrollBottom: function(t) {
        !s && i && e(this);
    },
    onShareAppMessage: function() {
        return r.getShareInfo();
    }
});

var o = -1, r = require("../../utils/util.js"), n = require("../../utils/requestUtil.js"), l = require("../../utils/resultCodeUtil.js"), s = !1, i = !1, u = 20, c = 1;