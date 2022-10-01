var a, t, e = require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../@babel/runtime/helpers/defineProperty")), n = new (require("../../../AFC697330691379CC9A0FF345133E9B3.js").wxRequest)(), i = require("../../../7931C4950691379C1F57AC929AD2E9B3.js"), s = getApp();

Page((a = {
    data: {
        systemInfo: s.systemInfo,
        compatibleManage: s.compatibleManage,
        mycard: "",
        options: "",
        singleData: "",
        freshNum: 0,
        avatar: "",
        exchangeTime: "",
        hasHuifa: !1,
        changeCard: !1,
        loaded: !1
    },
    onPullDownRefresh: function() {
        this.data.freshNum++, this.onShow();
    },
    onLoad: function(a) {
        console.log("entershow.onload", a), t = a, this, this.setData({
            options: a,
            mycard: s.mycard,
            route: encodeURIComponent(this.route.slice(this.route.lastIndexOf("/") + 1))
        }), this.getUserSetting(), s.compatibleManage.navigationBarLoading && wx.showNavigationBarLoading();
    },
    onShow: function() {
        this.singleDataFunc(), this.huifaList(), this.mycardGet();
    },
    mycardGet: function() {
        var a = this;
        s.setRequest({
            url: "mycard"
        }, function(t) {
            a.setData({
                mycard: t
            });
        });
    },
    animationInit: function() {
        this.animation = wx.createAnimation({
            duration: 300,
            timingFunction: "ease"
        });
    },
    getUsersAvatar: function() {
        var a = this;
        n.requestUrl({
            url: "getUsersAvatarNickname",
            data: {
                openid: a.data.singleData.openid
            }
        }, function(t) {
            a.setData({
                avatar: t
            });
        });
    },
    getfwWechat: function(a) {
        var t = this;
        n.requestUrl({
            url: "getUsersAvatarNickname",
            data: {
                openid: a
            }
        }, function(a) {
            t.setData({
                fwAvatar: a
            });
        });
    },
    singleDataFunc: function() {
        var a = this, e = "", o = this;
        n.requestUrl({
            url: "selectById",
            data: {
                formtoken: t.formtoken
            }
        }, function(t) {
            console.log("selectById接口", t), t.forwarderOpenid && a.getfwWechat(t.forwarderOpenid), 
            o.setData({
                singleData: t,
                loaded: !0,
                freshNum: o.data.freshNum
            }), e = t.addtime ? t.addtime.split(" ")[0].split("-") : 0, o.getUsersAvatar(), 
            a.setData({
                exchangeTime: t.addtime ? "".concat(e[0], "-").concat(e[1], "-").concat(e[2]) : "",
                rsExchangeTime: t.addtime ? "".concat(e[0], "年").concat(e[1], "月").concat(e[2], "日") : ""
            }), o.data.singleData.isDel || 5 == t.sence ? s.compatibleManage.shareMenu && wx.hideShareMenu({}) : s.compatibleManage.shareMenu && wx.showShareMenu({
                withShareTicket: !0
            }), o.statusClassify(t);
        }, function() {
            a.data.singleData || a.setData({
                "netError.show": !0
            });
        }, function() {
            wx.stopPullDownRefresh(), i.hidetoast(), s.compatibleManage.navigationBarLoading && wx.hideNavigationBarLoading();
        });
    },
    statusClassify: function(a) {
        a.exchange;
    },
    againRequest: function() {
        i.showtoast("加载中...", "loading", 8e3), this.setData({
            "netError.show": !1
        }), this.onShow();
    },
    uppDataSend: function() {
        this.huifaList(), this.sendCardFresh();
    },
    huifaList: function() {
        var a = this, e = {}, i = [], s = "";
        n.requestUrl({
            url: "sendCardList",
            data: {
                openid: t.openid,
                id: t.id
            }
        }, function(n) {
            a.setData({
                sendCardList: n.list
            }), s = n.exchangeFlag, console.log("exchangeH", s), "1" === t.id ? e["huifaCon.exchange"] = "递名片团队" : e["huifaCon.exchange"] = "" == s ? "来自转发" : "不是来自转发", 
            a.setData(e), a.data.huifaCon.data = i;
        });
    },
    toBuildcard: function() {
        i.showmodal({
            data: "去上传我的名片"
        }, function() {
            wx.navigateTo({
                url: "/pages/mainPage/cardMain/cardFormBuild/cardFormBuild?butt=build&main=enterShow&id=none",
                success: function() {}
            });
        });
    },
    singleSendMycard: function() {
        var a = this;
        i.showmodal({
            data: "发送名片给" + this.data.singleData.name
        }, function() {
            a.setData({
                "huifaCon.loading": !0,
                "huifaCon.tab": "ss"
            }), a.huifaCard(s.mycard.list[0].id, function() {
                a.setData({
                    "huifaCon.loading": !1,
                    "huifaCon.con": "对方已有我的名片",
                    "huifaCon.show": !1
                });
            }), s.gioCustome({
                t: "enterShow.001"
            });
        }, function() {
            s.gioCustome({
                t: "enterShow.002"
            });
        });
    },
    ss: function() {},
    sendMycard: function() {
        var a = this;
        if (0 == s.mycard.list.length) wx.showToast({
            title: "请先制作名片",
            icon: "loading",
            duration: 1500,
            mask: !0,
            success: function() {
                setTimeout(function() {
                    a.buildCard();
                }, 2e3);
            }
        }); else {
            s.burying.setPoint(s, 49);
            try {
                this.selectComponent("#changeCard")._switchCard();
            } catch (a) {
                this.setData({
                    changeCard: !0
                });
            }
        }
    },
    buildCard: function() {
        wx.navigateTo({
            url: "/pages/mainPage/cardMain/cardFormBuild/cardFormBuild?butt=build&main=cardsFolder&id=none",
            success: function() {}
        });
    },
    sendCardFresh: function(a) {
        this.setData({
            hasHuifa: !0
        });
    },
    returnT: function() {
        this.setData({
            "huifaCon.show": !1
        });
    }
}, (0, e.default)(a, "ss", function() {}), (0, e.default)(a, "huifa", function() {
    var a = this;
    this.setData({
        "huifaCon.loading": !0
    }), this.huifaCard(this.data.huifaId, function() {
        a.data.huifaCon.data[a.data.huifaIndex].exchange = "已发待收", a.setData({
            "huifaCon.show": !1,
            "huifaCon.loading": !1
        });
    }, function() {
        a.setData({
            "huifaCon.loading": !1
        });
    }), s.gioCustome({
        t: "enterShow.001"
    });
}), (0, e.default)(a, "radioClick", function(a) {
    var t = {}, e = this.data.huifaCon.data, n = a.currentTarget.dataset.detail;
    if ("已发待收" == n || "对方已有" == n) ; else {
        this.data.huifaCon;
        for (var i = {}, s = 0; s < e.length; s++) i[e[s].id] = e[s].exchange;
        i[a.currentTarget.dataset.id] = !n, t["huifaCon.checked"] = i, n ? t["huifaCon.buttonStatus"] = !1 : (t["huifaCon.buttonStatus"] = !0, 
        this.data.huifaId = a.currentTarget.dataset.id, this.data.huifaIndex = a.currentTarget.dataset.ind), 
        this.setData(t);
    }
}), (0, e.default)(a, "huifaCard", function(a, t) {
    i.showtoast("发送中...", "loading", 5e3), n.requestUrl({
        url: "returnCard",
        method: "POST",
        data: {
            id: a,
            othersOpenid: this.data.singleData.openid
        }
    }, function(a) {
        console.log("returnCard接口", a), i.showtoast("发送成功", "success", 1e3), t && t();
    }, function() {
        i.hidetoast();
    });
}), (0, e.default)(a, "shareToOther", function() {
    s.burying.setPoint(s, 48);
}), (0, e.default)(a, "deleteCard", function(a) {
    var e;
    i.deletemodal("确定要删除" + this.data.singleData.name + "的名片吗？", function() {
        i.showtoast("删除中...", "loading", 8e3), n.requestUrl({
            url: "cardsOtherCard",
            method: "DELETE",
            extra: "/" + t.id
        }, function(a) {
            console.log("cardsOtherCard接口", a), (e = wx.getStorageSync("clicks")) && e[t.id] && (e[t.id] = "", 
            wx.setStorageSync("clicks", e)), i.showtoast("删除成功", "success", 1e3), s.rsListObj.ifFresh = !0, 
            "manyCardImg" == t.main && (s.rsListObj.delCardInfo[0] = t.id, s.rsListObj.delCardInfo[1] = t.i), 
            "searchPage" == t.main && (getCurrentPages()[getCurrentPages().length - 2].data.delSeaCard = t.id), 
            setTimeout(function() {
                wx.navigateBack({
                    delta: 1
                });
            }, 600), "cardAll" == t.main && (getCurrentPages()[getCurrentPages().length - 2].data.cardList[t.indi].items.splice(t.ind, 1), 
            getCurrentPages()[getCurrentPages().length - 2].data.cardList[t.indi].items.length <= 0 && getCurrentPages()[getCurrentPages().length - 2].data.cardList.splice(t.indi, 1), 
            getCurrentPages()[getCurrentPages().length - 2].data.updateReceive.cardList = !0);
        });
    });
}), (0, e.default)(a, "toLookHomePage", function() {
    wx.navigateTo({
        url: "../../cardMain/homePage/homePage?id=" + t.id + "&detail=enterShow&st=lookOther"
    });
}), (0, e.default)(a, "shareCardClick", function() {
    s.compatibleManage.shareMenu || i.showmodal({
        data: "点击右上角三个点，选择“分享”",
        cancel: !1,
        text: "我知道了"
    }), s.gioCustome({
        t: "enterShow.003"
    });
}), (0, e.default)(a, "returnCard", function() {
    s.burying.setPoint(s, 149), console.log("回发", this.data.mycard), this.setData({
        returnOpenid: this.data.singleData.openid
    }), this.data.mycard.list.length >= 1 ? this.setData({
        "confirmCon.show": !0,
        "confirmCon.animationName": "newToUpAnimation"
    }) : wx.navigateTo({
        url: "/pages/mainPage/cardMain/cardFormBuild/cardFormBuild?butt=build&main=enterShow&id=none",
        success: function() {}
    });
}), (0, e.default)(a, "selectCard", function(a) {
    this.setData({
        hasBorder: a.currentTarget.dataset.id
    });
}), (0, e.default)(a, "getUserSetting", function() {
    var a = this;
    s.getSettingMessage(function(t) {
        console.log("getSettingMessage", t), a.setData({
            getSettingMessage: t.u
        });
    });
}), (0, e.default)(a, "onGotUserInfo", function(a) {
    var t = this;
    console.log(a, "授权时的e"), a.detail.iv && s.setUnion(a.detail, function() {
        t.returnCard(), t.setData({
            getSettingMessage: !0
        });
    });
}), (0, e.default)(a, "partFreshFun", function(a) {
    this.setData({
        "singleData.isHavingMycard": !0
    });
}), (0, e.default)(a, "edit", function() {
    s.temporaryData.edit.data = this.data.singleData, this.data.loaded && wx.navigateTo({
        url: "/pages/subpackagePage/cardFolder/ocrEdit/ocrEdit?id=".concat(this.data.singleData.id, "&cardindex=-1&main=enterShow")
    });
}), (0, e.default)(a, "onShareAppMessage", function() {
    return "WTeam" != this.data.singleData.exchange && this.data.singleData.id ? i.shareAppMessa({
        title: "我向您转发" + this.data.singleData.name + "的名片，请点击查看",
        path: "pages/cardAll/howEnter/howEnter?id=" + this.data.singleData.id + "&shareOthers=" + s.client.openid + "&shareType=01&formtoken=" + t.formtoken
    }) : i.shareAppMessa({
        title: "我向您推荐“递名片”",
        path: "pages/cardMy/about/about?shareOthers=enterShow&shareType=05"
    });
}), a));