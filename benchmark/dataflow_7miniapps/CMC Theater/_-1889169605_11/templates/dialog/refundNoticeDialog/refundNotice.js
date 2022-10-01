function e() {
    var e = t(getApp().getStorage().storageKeys.ISREADPROTOCOL), a = wx.getStorageSync(e);
    return console.log("key =" + e + " value =" + a), a ? (console.log("已存在"), !0) : (console.log("不存在"), 
    !1);
}

function t(e) {
    var t = getApp(), a = t.getUserInfo(), o = t.getCinema();
    return e + a.mobile + o.id;
}

function a() {
    var e = t(getApp().getStorage().storageKeys.PROTOCOLUPDATETIME), a = wx.getStorageSync(e);
    return console.log(a), console.log("update time key =" + e), a;
}

function o() {
    l.delegate.setData({
        isShowDialog: !1
    }), setTimeout(function() {
        l.delegate.setData({
            isShow: !1
        });
    }, 350);
}

var l = new Object();

l.setDelegate = function(t) {
    t && (l.updateTime = a(), l.delegate = t, l.delegate.setData({
        isShowDialog: !1,
        isShow: !1,
        isNon: !0,
        protocolSrc: e() ? l.srcSelected : l.srcDefault
    }));
}, l.showDialog = function(e) {
    if (console.log(l.delegate.data.calculateData), l.delegate.data.calculateData.protocolAndRule) {
        "1" == l.delegate.data.calculateData.protocolAndRule.is_update && (wx.showToast({
            icon: "none",
            title: "退票协议更新"
        }), l.delegate.data.calculateData.protocolAndRule.is_update = "0");
        var t = null, t = l.delegate.data.calculateData.protocolAndRule;
        t = e ? t.member : t.nonmember, l.delegate.setData({
            isShow: !0,
            isNon: !e,
            protocolAndRule: t
        }), setTimeout(function() {
            l.delegate.setData({
                isShowDialog: !0
            });
        }, 10);
    } else console.log("计算价格接口还未返回");
}, l.hiddenDialog = o, l.tabClick = function(e) {
    console.log("tab click type=" + e), "nonmember" == e ? l.delegate.setData({
        isNon: !0,
        protocolAndRule: l.delegate.data.calculateData.protocolAndRule.nonmember
    }) : "member" == e && l.delegate.setData({
        isNon: !1,
        protocolAndRule: l.delegate.data.calculateData.protocolAndRule.member
    });
}, l.protocolClick = function() {
    var a = t(getApp().getStorage().storageKeys.ISREADPROTOCOL), n = e();
    wx.setStorage({
        key: a,
        data: n ? "" : "1"
    }), l.delegate.setData({
        protocolSrc: n ? l.srcDefault : l.srcSelected
    }), n || o();
}, l.isReadProtocol = e, l.setProtocolUpdateTime = function(e) {
    var a = t(getApp().getStorage().storageKeys.PROTOCOLUPDATETIME);
    e && (l.updateTime = e, wx.setStorage({
        key: a,
        data: e
    }));
}, l.setProtocolStatus = function(e) {
    var a = t(getApp().getStorage().storageKeys.ISREADPROTOCOL);
    wx.setStorage({
        key: a,
        data: e
    }), "" == e && l.delegate.setData({
        protocolSrc: l.srcDefault
    });
}, l.updateTime = "", l.srcDefault = "/images/common/wodehuiyuanka_icon_danxuan_weixuan.png", 
l.srcSelected = "/images/common/wodehuiyuanka_icon_danxuan_xuanzhong.png", module.exports = l;