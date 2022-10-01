function e() {
    try {
        var e = wx.getStorageSync("ebankCardId" + s.cardId);
        if (e && "" != e) return void a();
    } catch (e) {}
    u.onUpdateByVip();
}

function t() {
    var e = new Object();
    e.cardId = s.cardId, wx.request({
        url: getApp().globalData.urlHost + "bank/getPublicKey.do",
        data: i.addBaseRequest(e),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            var t = l.transformSuccessData(e);
            if (f.checkResultCode(t)) {
                var a = t.resultBody.publicKey;
                r(a = "-----BEGIN PUBLIC KEY-----" + a + "-----END PUBLIC KEY-----");
            } else u.onUpdateError(t.resultMsg);
        },
        fail: function(e) {
            u.onUpdateError("网络连接错误");
        },
        complete: function(e) {}
    });
}

function r(e) {
    try {
        var t = JSON.parse(wx.getStorageSync("ebankCardId" + s.cardId)), r = p.decryptPwd(t.encodedStr), a = p.encryptWithKey(r, e), o = new Object();
        o.cardId = s.cardId, o.encodedStr = a, o.smsPassword = g, o.extracode = t.extracode, 
        n(o);
    } catch (e) {
        u.onUpdateError("账号密码加密失败，请重试");
    }
}

function a() {
    0 == c.isSmsPassword ? t() : o();
}

function o() {
    var e = JSON.parse(wx.getStorageSync("ebankCardId" + s.cardId)), t = p.decryptPwd(e.encodedStr).split(":")[0], r = new Object();
    r.cardId = s.cardId, r.phone = t, wx.request({
        url: getApp().globalData.urlHost + "bank/sendEbankSmsCode.do",
        data: i.addBaseRequest(r),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            var t = l.transformSuccessData(e), r = (t.resultCode, t.resultMsg);
            1e4 == t.resultCode ? u.onNeedSmsCode("请输入验证码") : u.onUpdateError(r);
        },
        fail: function(e) {
            u.onUpdateError("网络连接错误");
        },
        complete: function(e) {}
    });
}

function n(e) {
    wx.request({
        url: getApp().globalData.urlHost + "bank/updateBankBill.do",
        data: i.addBaseRequest(e),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            try {
                var t = l.transformSuccessData(e), r = t.resultCode, a = t.resultMsg;
                1e4 == r ? u.onSuccess(a) : 13001 == r ? u.onNeedSmsCode(a) : 13002 == r ? u.onInputSmsCode(a) : 13003 == r ? (d(), 
                u.onUpdateError(a)) : 13004 == r ? u.onInputSmsCode(a) : u.onUpdateError(a);
            } catch (e) {
                u.onUpdateError(JSON.stringify(e));
            }
        },
        fail: function(e) {
            u.onUpdateError("网络连接失败，请稍后重试");
        },
        complete: function(e) {}
    });
}

function d() {
    try {
        wx.removeStorageSync("ebankCardId" + s.cardId);
    } catch (e) {}
}

var c, s, u, l = require("/util.js"), p = require("/encryptUtil.js"), i = require("/requestUtil.js"), f = require("/resultCodeUtil.js"), g = "";

module.exports = {
    loadBill: function() {
        s.ebankConfig ? (c = s.ebankConfig, e()) : u.onUpdateByNormal();
    },
    setCardInfo: function(e) {
        s = e;
    },
    setCallBack: function(e) {
        u = e;
    },
    setSmsCode: function(e) {
        g = e, t();
    },
    authSmsCode: function(e) {
        var t = new Object();
        t.cardId = s.cardId, t.smsCode = e, wx.request({
            url: getApp().globalData.urlHost + "bank/authSmsCode.do",
            data: i.addBaseRequest(t),
            method: getApp().globalData.requestType,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(e) {
                var t = l.transformSuccessData(e), r = t.resultCode, a = t.resultMsg;
                1e4 == t.resultCode ? u.onSuccess(a) : 10004 == r ? u.onInputSmsCode(a) : (d(), 
                u.onUpdateError(a));
            },
            fail: function(e) {
                u.onUpdateError("网络连接失败，请稍后重试");
            },
            complete: function(e) {}
        });
    }
};