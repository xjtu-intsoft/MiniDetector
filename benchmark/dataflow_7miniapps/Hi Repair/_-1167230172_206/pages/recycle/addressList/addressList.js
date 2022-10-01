require("../../../comm/script/config");

var e = require("../../../comm/script/fetch"), t = (require("../../../util/util"), 
getApp());

Page({
    data: {
        isFullSucreen: !!t.globalData.isFullSucreen,
        pageLoading: !0,
        origin: "",
        delIndex: -1,
        items: [],
        typeIndex: ""
    },
    onLoad: function(e) {
        console.log(e);
        console.log(2222);
        var t = wx.getStorageSync("origin");
        console.log(t), this.setData({
            origin: t,
            typeIndex: e.typeIndex
        });
    },
    onShow: function() {
        var a = this;
        wx.showLoading({
            title: "地址信息加载中",
            mask: !0
        });
        var n = t.globalData.hwxUserInfo.token;
        console.log(n), e.getAddressList.call(a, n, function(e) {
            console.log(e), a.setData({
                items: e,
                pageLoading: !1
            }), wx.hideLoading();
        }, function(e) {
            a.setData({
                pageLoading: !1
            }), console.log("err6666"), console.log(e), wx.showToast({
                title: e,
                icon: "none",
                duration: 1e3
            });
        });
    },
    touchStart: function(e) {
        this.setData({
            startX: e.changedTouches[0].clientX,
            startY: e.changedTouches[0].clientY,
            delIndex: -1
        });
    },
    touchMove: function(e) {
        var t = e.currentTarget.dataset.index, a = this.data.delIndex, n = this.data.startX, o = this.data.startY, s = e.changedTouches[0].clientX, d = e.changedTouches[0].clientY, i = this.angle({
            X: n,
            Y: o
        }, {
            X: s,
            Y: d
        });
        Math.abs(i) > 30 || (a = s > n ? -1 : t, this.setData({
            delIndex: a
        }));
    },
    angle: function(e, t) {
        var a = t.X - e.X, n = t.Y - e.Y;
        return 360 * Math.atan(n / a) / (2 * Math.PI);
    },
    del: function(e) {
        var t = this;
        wx.showModal({
            title: "温馨提示",
            content: "确定要删除该地址吗？",
            confirmColor: "#FF7A00",
            success: function(a) {
                a.confirm ? (console.log("用户点击确定"), t.getDelateAddress(e)) : a.cancel && console.log("用户点击取消");
            }
        });
    },
    getDelateAddress: function(a) {
        var n = this, o = t.globalData.hwxUserInfo.token;
        wx.showLoading({
            title: "删除中"
        }), e.getDelateAddress(o, a.currentTarget.dataset.id, function(e) {
            n.data.items.splice(a.currentTarget.dataset.index, 1), n.setData({
                items: n.data.items
            }), wx.hideLoading();
        }, function(e) {
            wx.hideLoading(), wx.showToast({
                title: e,
                icon: "none",
                duration: 1e3
            });
        });
    },
    addNewAddress: function(e) {
        wx.redirectTo({
            url: "../addAddress/addAddress?origin=addressList"
        });
    },
    editAddress: function(e) {
        console.log(e);
        var t = e.currentTarget.dataset.info;
        wx.redirectTo({
            url: "../../personal/addAddress/addAddress?info=" + JSON.stringify(t)
        });
    },
    chooseAddress: function(e) {
        console.log(e.currentTarget.dataset.address);
        var t = e.currentTarget.dataset.address;
        wx.setStorageSync("recycleAddress", t), wx.navigateBack({
            delta: 1
        });
    }
});