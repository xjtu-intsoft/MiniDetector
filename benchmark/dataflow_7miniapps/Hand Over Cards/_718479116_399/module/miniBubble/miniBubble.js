var e = getApp();

Component({
    properties: {
        updateBubble: {
            type: Object,
            value: {},
            observer: function(e) {
                e && this._bubbleFun(e);
            }
        }
    },
    data: {},
    methods: {
        _bubbleFun: function(e) {
            "pages/company/company" == getCurrentPages()[getCurrentPages().length - 1].route ? this._companyFun(e) : this._getBubbleMessage();
        },
        _companyFun: function(e) {
            var t = this, a = [];
            e.bussnessData && (a = e.bussnessData), wx.getStorageSync("companyMiniBubble_dotted") && this._removeDotted(), 
            this._mycardGet(function(e) {
                e.list.length > 0 && (a.length > 0 ? t._companyTabbarName() : t._noCompanyTabbarName(), 
                wx.setStorageSync("checkPersonRequest", {
                    req: !0,
                    data: a
                }));
            });
        },
        _getBubbleMessage: function() {
            var e = this, t = [], a = wx.getStorageSync("companyMiniBubble_dotted");
            this._mycardGet(function(n) {
                n.list.length > 0 ? e._businessGet(function(n) {
                    n && (t = n), t.length > 0 ? (e._removeDotted(), e._companyTabbarName()) : (a && a.click || e._showDotted(), 
                    e._noCompanyTabbarName()), wx.setStorageSync("checkPersonRequest", {
                        req: !0,
                        data: n
                    });
                }) : e._businessGet(function(a) {
                    a && (t = a), t.length > 0 ? e._companyTabbarName() : e._noCompanyTabbarName(), 
                    wx.setStorageSync("checkPersonRequest", {
                        req: !0,
                        data: a
                    });
                });
            });
        },
        _showDotted: function() {
            try {
                wx.showTabBarRedDot({
                    index: 3
                }), wx.setStorageSync("companyMiniBubble_dotted", {
                    click: !1
                });
            } catch (e) {}
        },
        _removeDotted: function() {
            try {
                wx.hideTabBarRedDot({
                    index: 3
                }), wx.setStorageSync("companyMiniBubble_dotted", {
                    click: !0
                });
            } catch (e) {}
        },
        _noCompanyTabbarName: function() {
            try {
                wx.setTabBarItem({
                    index: 3,
                    text: "企业版"
                });
            } catch (e) {}
        },
        _companyTabbarName: function() {
            try {
                wx.setTabBarItem({
                    index: 3,
                    text: "我的企业"
                });
            } catch (e) {}
        },
        _mycardGet: function(t) {
            e.ifFresh.mycard ? e.setRequest({
                url: "mycard"
            }, function(e) {
                t && t(e);
            }) : t && t(e.mycard);
        },
        _businessGet: function(t) {
            var a = wx.getStorageSync("checkPersonRequest");
            a && a.data ? t && t(a.data) : e.setRequest({
                url: "checkPerson",
                data: {
                    openId: e.client.openid
                }
            }, function(e) {
                t && t(e);
            });
        }
    }
});