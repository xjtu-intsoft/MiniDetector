function e(e) {
    e.setData({
        showTeach: !1
    }), wx.navigateToMiniProgram({
        appId: "wx0781b1307683ced6",
        envVersion: "develop",
        success: function(t) {
            e.cancelWelcomeTip();
        }
    });
}

function t(e) {
    1 != k && (a(e), k = 1), b && clearTimeout(b), b = setTimeout(function() {
        o(e);
    }, 500);
}

function a(e) {
    var t = wx.createAnimation({
        duration: 300,
        timingFunction: "ease"
    });
    t.translateX(30).scale(.8).step(), e.setData({
        scrollAnimation: t.export(),
        scrallState: 1
    });
}

function o(e) {
    k = 0, n(e);
}

function n(e) {
    var t = wx.createAnimation({
        duration: 100,
        timingFunction: "ease"
    });
    t.translateX(0).step(), e.setData({
        scrollAnimation: t.export(),
        scrallState: 2
    });
}

function s() {
    return;
}

function i(e) {
    wx.navigateTo({
        url: "../inputBill/inputBill?position=" + e
    });
}

function r(e, t) {
    var a = e.data.cards[t].showFillBill;
    wx.navigateTo({
        url: "../ebankLogin/ebankLogin?position=" + t + "&showFillBill=" + a
    });
}

function c(e, t) {
    S.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "bank/deleteBankCard.do",
        data: q.addBaseRequest(t),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(t) {
            S.dismissLoading();
            var a = S.transformSuccessData(t);
            I.checkResultCode(a) && g(e);
        },
        fail: function(e) {
            S.dismissLoading(), S.showNetError();
        }
    });
}

function d(e) {
    wx.showNavigationBarLoading(), wx.request({
        url: getApp().globalData.urlHost + "bank/showBankCards.do",
        data: q.getBaseRequest(),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(t) {
            var a = S.transformSuccessData(t);
            if (I.checkResultCode(a)) {
                var o = a.resultBody;
                getApp().globalData.homeCardsInfo = o, e.setData({
                    cards: o
                }), s();
            }
        },
        fail: function(e) {
            S.showNetError();
        },
        complete: function(e) {
            wx.hideNavigationBarLoading();
        }
    });
}

function u(e, t) {
    N || (N = !0, wx.request({
        url: getApp().globalData.urlHost + "user/bindReferrer.do",
        data: q.addBaseRequest(t),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(t) {
            1e4 == S.transformSuccessData(t).resultCode && (getApp().globalData.recommendId = "", 
            wx.removeStorageSync("recommendId"), getApp().globalData.recommendType = "", wx.removeStorageSync("recommendType"), 
            l(e));
        },
        complete: function(e) {
            N = !1;
        }
    }));
}

function l(e) {
    e.setData({
        showBindResult: !0
    });
}

function p(e) {
    L || (L = !0, wx.request({
        url: getApp().globalData.urlHost + "user/showPersonalCenter.do",
        data: q.getBaseRequest(),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(t) {
            var a = S.transformSuccessData(t);
            if (I.checkResultCode(a)) {
                var o = a.resultBody;
                e.setData({
                    userInfo: o
                }), getApp().globalData.userInfo = o;
                var n = getApp().globalData.recommendId;
                if (n) {
                    var s = getApp().globalData.recommendType;
                    if (!o.referrer) {
                        var i = new Object();
                        i.phone = n, i.type = s, u(e, i);
                    }
                }
            }
        },
        fail: function(e) {
            S.showNetError();
        },
        complete: function(e) {
            L = !1;
        }
    }));
}

function h(e, t) {
    S.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "bank/unLockBankCard.do",
        data: q.addBaseRequest(t),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(t) {
            S.dismissLoading();
            var a = S.transformSuccessData(t);
            I.checkResultCode(a) && g(e);
        },
        fail: function(e) {
            S.dismissLoading(), S.showNetError();
        }
    });
}

function g(e) {
    wx.request({
        url: getApp().globalData.urlHost + "bank/showUserAccountInfo.do",
        data: q.addBaseRequest({
            versionId: getApp().globalData.versionId
        }),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(t) {
            var a = S.transformSuccessData(t);
            I.checkResultCode(a) && (e.setData({
                totalSum: a.resultBody
            }), getApp().globalData.totalSum = a.resultBody, 1 == e.data.totalSum.isShowModel && 0 == a.resultBody.isOpenAccount && getApp().globalData.isFirst && (e.setData({
                hiddenWelcomeTip: !1
            }), getApp().globalData.isFirst = !1), e.data.totalSum.isHadReadMsg && (e.data.showNewMessageTipTimer = setInterval(function() {
                e.setData({
                    showNewMessageTip: !e.data.showNewMessageTip
                });
            }, 500)), v(e), d(e), f(e), p(e), m(e), y(e), T(e), x(e), B(e));
        },
        fail: function(e) {
            S.showNetError();
        }
    });
}

function f(e) {
    wx.request({
        url: getApp().globalData.urlHost + "bank/showFrozenAmount.do",
        data: q.getBaseRequest(),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(t) {
            var a = S.transformSuccessData(t);
            I.checkResultCode(a) && e.setData({
                totalFrozenAmount: a.resultBody.frozenAmount
            });
        },
        fail: function(e) {
            S.showNetError();
        }
    });
}

function w(e, t) {
    wx.request({
        url: getApp().globalData.urlHost + "user/weixinAuthLogin.do",
        data: q.addBaseRequest(t),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(t) {
            var a = S.transformSuccessData(t);
            if (1e4 == a.resultCode) {
                var o = a.resultBody.userSessionId;
                getApp().globalData.userSessionId = o, wx.setStorageSync("userSessionId", o), R = !0, 
                g(e);
            } else 12002 == a.resultCode || wx.reLaunch({
                url: "../login/login"
            });
        },
        fail: function(e) {
            S.showNetError();
        }
    });
}

function m(e) {
    wx.request({
        url: getApp().globalData.urlHost + "user/showOfficeAccountInfo.do",
        data: q.getBaseRequest(),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            var t = S.transformSuccessData(e);
            if (1e4 == t.resultCode) {
                var a = t.resultBody;
                getApp().globalData.officeAccountInfo = a;
            }
        },
        fail: function(e) {
            S.showNetError();
        }
    });
}

function D(e) {
    wx.request({
        url: getApp().globalData.urlHost + "user/showShareInfo.do",
        data: q.getBaseRequest(),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(e) {
            var t = S.transformSuccessData(e);
            if (1e4 == t.resultCode) {
                var a = t.resultBody;
                getApp().globalData.shareInfo = a;
            }
        },
        fail: function(e) {
            S.showNetError();
        }
    });
}

function T(e) {
    wx.request({
        url: getApp().globalData.urlHost + "user/queryProclamationConfig.do",
        data: q.getBaseRequest(),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(t) {
            var a = S.transformSuccessData(t);
            if (1e4 == a.resultCode) {
                var o = a.resultBody, n = "";
                o.length > 0 && (n = (n = o[0].content).replace(/\n/g, "")), e.setData({
                    firstAnnouncement: n
                });
            }
        }
    });
}

function y(e) {
    wx.request({
        url: getApp().globalData.urlHost + "user/queryNoticeConfig.do",
        data: q.getBaseRequest(),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(t) {
            var a = t.data;
            if (console.log("通知: " + JSON.stringify(a)), 1e4 == a.resultCode) {
                if (!a.resultBody) return void C(e);
                var o = a.resultBody.id;
                if (o) {
                    var n = new Date(), s = n.getFullYear() + "-" + n.getMonth() + "-" + n.getDay() + o;
                    wx.getStorageSync(s) ? C(e) : (wx.setStorageSync(s, "true"), 1 == a.resultBody.type ? e.setData({
                        showTextNotification: !0,
                        notificationContent: a.resultBody.content
                    }) : e.setData({
                        showImgNotification: !0,
                        notificationImage: "data:image/png;base64," + a.resultBody.content
                    }));
                } else C(e);
            } else C(e);
        },
        fail: function(e) {}
    });
}

function C(e) {
    wx.request({
        url: getApp().globalData.urlHost + "bank/showUserBindChannel.do",
        data: q.getBaseRequest(),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(t) {
            var a = S.transformSuccessData(t);
            1e4 == a.resultCode && e.setData({
                channelBindTip: a.resultBody
            });
        },
        fail: function(e) {}
    });
}

function v(e) {
    wx.request({
        url: getApp().globalData.urlHost + "bank/showUsingTutorialsConfig.do",
        data: q.getBaseRequest(),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(t) {
            var a = S.transformSuccessData(t);
            if (1e4 == a.resultCode) {
                var o = a.resultBody;
                1 == o.isShow ? e.setData({
                    showTeach: !0
                }) : 0 == o.isShow && e.setData({
                    showTeach: !1
                });
            }
        },
        fail: function(e) {
            S.showNetError();
        }
    });
}

function x(e) {
    wx.request({
        url: getApp().globalData.urlHost + "bank/showEroorMsgCount.do",
        data: q.getBaseRequest(),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(t) {
            var a = S.transformSuccessData(t);
            if (1e4 == a.resultCode) {
                var o = a.resultBody.count;
                o > 0 && e.setData({
                    showErrorMessageDialog: !0,
                    errorMessageCount: o
                });
            }
        },
        fail: function(e) {
            S.showNetError();
        }
    });
}

function B(e) {
    wx.request({
        url: getApp().globalData.urlHost + "user/showForceBindCard.do",
        data: q.getBaseRequest(),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(t) {
            var a = S.transformSuccessData(t);
            1e4 == a.resultCode && e.setData({
                forceBindCard: a.resultBody
            });
        },
        fail: function(e) {
            S.showNetError();
        }
    });
}

function A(e, t) {
    S.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "user/modifyLocation.do",
        data: q.addBaseRequest(t),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(t) {
            S.dismissLoading();
            var a = S.transformSuccessData(t);
            I.checkResultCode(a) && (wx.showToast({
                title: "修改成功!"
            }), B(e));
        },
        fail: function(e) {
            S.dismissLoading(), S.showNetError();
        }
    });
}

Page({
    data: {
        animationData: "",
        hiddenDeleteCard: !0,
        hiddenLockCard: null,
        hiddenEditTip: !0,
        hiddenWelcomeTip: !0,
        showContactBtn: !1,
        showBindResult: !1,
        forceBindCard: {},
        resultBody: {},
        touchStartTime: 0,
        touchEndTime: 0,
        totalFrozenAmount: 0,
        hiddenBillTip: !0,
        scrallState: -1,
        firstAnnouncement: "",
        showImgNotification: !1,
        showTextNotification: !1,
        userInfo: {
            isLogin: 0
        },
        totalSum: {
            workingAmount: 0,
            totalBalance: 0,
            merchantAmount: 0
        },
        channelBindTip: {
            isShowPop: 0
        },
        showTeach: !1,
        showNewMessageTipTimer: void 0,
        showNewMessageTip: !1,
        showErrorMessageDialog: !1,
        errorMessageCount: 0
    },
    onLoad: function(e) {
        e.oaccType && (getApp().globalData.oaccType = e.oaccType);
        var t = e.recommendId;
        if (t && "undefined" != t && (getApp().globalData.recommendId = t, wx.setStorageSync("recommendId", t), 
        getApp().globalData.recommendType = 3, wx.setStorageSync("recommendType", 3)), e.scene) {
            var a = decodeURIComponent(e.scene);
            a && "undefined" != a && (getApp().globalData.recommendId = a, wx.setStorageSync("recommendId", a), 
            getApp().globalData.recommendType = 2, wx.setStorageSync("recommendType", 2));
        }
        e.sesseionId && (getApp().globalData.userSessionId = e.sesseionId, wx.setStorageSync("userSessionId", e.sesseionId)), 
        e.page && wx.navigateTo({
            url: "../" + e.page + "/" + e.page
        }), D();
    },
    onTeach: function() {
        e(this);
    },
    cancelWelcomeTip: function() {
        this.setData({
            hiddenWelcomeTip: !0
        });
    },
    onProductsAndCompanies: function() {
        this.cancelWelcomeTip(), wx.navigateTo({
            url: "../productsAndCompanies/productsAndCompanies"
        });
    },
    onErrorMessage: function() {
        wx.navigateTo({
            url: "../errorMessageList/errorMessageList"
        });
    },
    cancelErrorMessage: function() {
        this.setData({
            showErrorMessageDialog: !1
        });
    },
    onNextErrorMessage: function() {
        this.setData({
            showErrorMessageDialog: !1
        }), wx.navigateTo({
            url: "../errorMessageList/errorMessageList"
        });
    },
    cancelChannelNotifcation: function() {
        var e = this.data.channelBindTip;
        e.isShowPop = 0, this.setData({
            channelBindTip: e
        });
    },
    onNextChannelNotifcation: function() {
        var e = this.data.channelBindTip;
        e.isShowPop = 0, this.setData({
            channelBindTip: e
        });
        var t = this.data.channelBindTip.channelId;
        wx.navigateTo({
            url: "../moreAuthBank/moreAuthBank?channelId=" + t
        });
    },
    onLogin: function() {
        wx.navigateTo({
            url: "../login/login"
        });
    },
    cancelBindResult: function() {
        this.setData({
            showBindResult: !1
        });
    },
    onCancelNotification: function() {
        this.setData({
            showImgNotification: !1,
            showTextNotification: !1
        }), C(this);
    },
    onScrollCard: function(e) {
        t(this);
    },
    onAccountMoney: function(e) {
        1 == this.data.userInfo.isLogin && 1 == this.data.totalSum.isShowModel && wx.navigateTo({
            url: "../accountMoney/accountMoney"
        });
    },
    showAccountMoneyHelp: function(e) {
        wx.showModal({
            title: "帮助",
            showCancel: !1,
            confirmColor: "#25B136",
            content: "系统消费用于还款\n（可点击进入手动还款）"
        });
    },
    onMoreNotification: function(e) {
        1 == this.data.totalSum.isShowModel && wx.navigateTo({
            url: "../announcementList/announcementList"
        });
    },
    onRebindChannel: function(e) {
        var t = e.currentTarget.dataset.position, a = this.data.cards[t];
        a.channelId = a.channel, a.cardNumber = a.last4CardNo, wx.navigateTo({
            url: "../RebindCard/RebindCard?cardInfo=" + encodeURIComponent(JSON.stringify(a))
        });
    },
    onUnLockCard: function(e) {
        var t = this, a = e.currentTarget.dataset.position;
        wx.showModal({
            title: "提示",
            content: "是否解锁",
            success: function(e) {
                if (e.confirm) {
                    var o = new Object();
                    o.cardId = a, h(t, o);
                }
            }
        });
    },
    onLockCard: function(e) {
        this.setData({
            hiddenLockCard: e.currentTarget.dataset.position
        });
    },
    confirmLockCard: function() {
        var e = this;
        S.showLoading(), wx.request({
            url: getApp().globalData.urlHost + "bank/lockBankCard.do",
            data: q.addBaseRequest({
                cardId: e.data.hiddenLockCard
            }),
            method: getApp().globalData.requestType,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                S.dismissLoading(), e.hiddenLockCardModel();
                var a = S.transformSuccessData(t);
                I.checkResultCode(a) && g(e);
            },
            fail: function(e) {
                S.dismissLoading(), S.showNetError();
            }
        });
    },
    hiddenLockCardModel: function() {
        this.setData({
            hiddenLockCard: null
        });
    },
    channelForCard: function(e) {
        var t = e.currentTarget.dataset.position, a = this.data.cards[t];
        wx.navigateTo({
            url: "../moreAuthBankForCard/moreAuthBankForCard?cardInfo=" + encodeURIComponent(JSON.stringify(a))
        });
    },
    onHide: function() {
        clearInterval(this.data.showNewMessageTipTimer);
    },
    onShow: function() {
        if (R) g(this); else {
            var e = this;
            wx.login({
                success: function(t) {
                    var a = new Object();
                    a.jsCode = t.code, w(e, a);
                }
            });
        }
    },
    addNewCard: function(t) {
        if (this.data.showTeach) {
            var a = this;
            return wx.showModal({
                title: "提示",
                content: "为了快速了解产品如何使用，请先观看《使用教程》",
                showCancel: !0,
                cancelText: "取消",
                confirmText: "去观看",
                success: function(t) {
                    t.confirm ? e(a) : a.setData({
                        showTeach: !1
                    });
                }
            });
        }
        1 == this.data.totalSum.isOpenAccount ? wx.navigateTo({
            url: "../addCard/addCard"
        }) : (this.cancelWelcomeTip(), wx.navigateTo({
            url: "../authBank/authBank"
        }));
    },
    touchStart: function(e) {
        this.data.touchStartTime = e.timeStamp;
    },
    touchEnd: function(e) {
        this.data.touchEndTime = e.timeStamp;
    },
    onClickItem: function(e) {
        if (!(this.data.touchEndTime - this.data.touchStartTime > 200)) {
            var t = e.currentTarget.dataset.position;
            wx.navigateTo({
                url: "../cardInfo/cardInfo?position=" + t
            });
        }
    },
    onLongClickItem: function(e) {
        var t = e.currentTarget.dataset.position, a = this.data.cards[t];
        this.setData({
            hiddenDeleteCard: !1,
            deleteCardPosition: t,
            deleteCardName: a.bankName
        });
    },
    confirmDeleteCard: function(e) {
        this.setData({
            hiddenDeleteCard: !0
        });
        var t = this.data.deleteCardPosition, a = this.data.cards[t], o = new Object();
        o.cardId = a.cardId, c(this, o);
    },
    cancelDeleteCard: function(e) {
        this.setData({
            hiddenDeleteCard: !0
        });
    },
    onClickUpdateBill: function(e) {
        var t = e.currentTarget.dataset.position;
        if (!wx.getStorageSync("showBillTip")) return this.setData({
            hiddenBillTip: !1
        });
        var a = this.data.cards[t];
        if (0 == a.accountDay && 0 == a.repaymentDay) return this.setData({
            hiddenEditTip: !1,
            cardPosition: t
        });
        a.ebankConfig ? r(this, t) : i(t);
    },
    confirmEditTip: function() {
        var e = this;
        this.cancelEditTip(), this.onClickItem({
            currentTarget: {
                dataset: {
                    position: e.data.cardPosition
                }
            }
        });
    },
    cancelEditTip: function() {
        this.setData({
            hiddenEditTip: !0
        });
    },
    confirmBillTip: function() {
        this.cancelBillTip();
    },
    cancelBillTip: function() {
        wx.setStorageSync("showBillTip", "true"), this.setData({
            hiddenBillTip: !0
        });
    },
    changeContactBtn: function() {
        var e = this;
        this.setData({
            showContactBtn: !e.data.showContactBtn
        });
    },
    callContact: function() {
        wx.navigateTo({
            url: "../customerServiceWeChat/customerServiceWeChat"
        });
    },
    confirmForceBindCard: function() {
        wx.navigateTo({
            url: "../moreAuthBank/moreAuthBank"
        });
    },
    bindRegionChange: function(e) {
        var t = this;
        wx.showModal({
            content: "是否确定定位到 " + e.detail.value[0] + e.detail.value[1] + " ？系统将按照定位消费该地区的商户",
            success: function(a) {
                a.confirm && A(t, {
                    province: e.detail.value[0],
                    city: e.detail.value[1],
                    provinceCode: e.detail.code[0],
                    cityCode: e.detail.code[1]
                });
            }
        });
    },
    onShareAppMessage: function(e) {
        return S.getShareInfo();
    }
});

var b, S = require("../../utils/util.js"), q = (require("../../utils/bankUtil.js"), 
require("../../utils/requestUtil.js")), I = require("../../utils/resultCodeUtil.js"), k = -1, N = !1, L = !1, R = !1;