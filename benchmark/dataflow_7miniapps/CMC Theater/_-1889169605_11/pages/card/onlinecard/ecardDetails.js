var a = require("./../../../config/httpHtlper.js"), t = (require("./../../../config/appStorage.js"), 
require("./../../../util/strUtil.js"), require("./../../../util/md5.js"));

Page({
    data: {
        city_id: "",
        cinema_id: "",
        eCardDetails: {},
        cinemas: [],
        curCinemas: [],
        pwds: [],
        nums: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 12 ],
        canUseCinemas: "(当前城市没有适用的影城)",
        isAgree: !0,
        isAllCity: !1,
        xieyi_src: "/images/common/wodehuiyuanka_icon_danxuan_xuanzhong.png",
        msg: "立即开通",
        btnText: "去购票",
        price: "",
        btnClass: "",
        isShowDialog: !1,
        isShow: !1,
        isError: !0,
        errorMsg: "",
        isOpenCardSuccess: !1,
        fromType: "",
        shouldBackMovie: !1,
        isShowSeeCardList: !1
    },
    onLoad: function(t) {
        var e = this, i = getApp().decodeDataAndJsonParse(t.bean);
        console.log(t);
        var o;
        if (t.city && (o = getApp().decodeDataAndJsonParse(t.city)), "true" == t.backmovie && (this.data.shouldBackMovie = !0, 
        this.data.isShowSeeCardList = !0), t.fromType && (this.data.fromType = t.fromType, 
        "wx_gzh_jump" != this.data.fromType && "wx_youjia_jump" != this.data.fromType || (this.data.shouldBackMovie = !0, 
        this.data.isShowSeeCardList = !0), "guagauka" == this.data.fromType && (this.data.isShowSeeCardList = !0)), 
        i) {
            o ? (console.log("---------city存在---------------"), this.data.city_id = o.id) : (o = getApp().getCity()) && (this.data.city_id = o.id), 
            console.log(" city_id ===== " + this.data.city_id);
            var s = "", n = "";
            i.bind_cinema_id && (s = i.bind_cinema_id), i.exchange_code && (n = i.exchange_code), 
            this.data.bind_cinema_id = s, this.data.exchange_code = n, a.getOnLineCardDetails(i.id, s, n).then(function(a) {
                if (a.cancelShowError = !0, 1 == a.data.status) {
                    var t = a.data.data;
                    if (console.log(t), t) {
                        t.price = parseFloat(t.price) + "", t.no_color = "";
                        var i = {
                            golden: "ecz_bg1",
                            red: "ecz_bg2",
                            purple: "ecz_bg3",
                            green: "ecz_bg4",
                            blue: "ecz_bg5",
                            black: "ecz_bg6"
                        };
                        if (t.wx_text_color = "white", t.color ? t.card_bg = i[t.color] : t.card_bg = i.golden, 
                        t.privilege) for (g = 0; g < t.privilege.length; g++) {
                            var o = t.privilege[g];
                            "1" == o.id ? o.src = "/images/common/bangding_icon_guanying.png" : "2" == o.id ? o.src = "/images/common/bangding_icon_goupiao.png" : "3" == o.id ? o.src = "/images/common/bangding_icon_meishi.png" : "4" == o.id && (o.src = "/images/common/bangding_icon_libao.png");
                        }
                        var s = t.cinema_all, n = [], d = 0, r = 0, c = "", l = !1;
                        if (s && s.length > 0) {
                            for (var g = 0; g < s.length; g++) {
                                var h = s[g];
                                r += h.cinema.length, h.id == e.data.city_id ? (l = !0, c = h.name, s.splice(g, 1), 
                                s.unshift(h), d = h.cinema.length, n[0] = h) : h.name = "全国其他地区";
                            }
                            if (d >= 0) {
                                var u = "(" + c + "地区" + d + "家，全国" + r + "家)";
                                e.data.canUseCinemas = u;
                            }
                        }
                        e.setCardStatus(t.price, t.renew_price, t.status, t.msg);
                        var m = !1;
                        d == r && (m = !0);
                        var p = "去购票";
                        "exchangeCode" == e.data.fromType ? t.msg = "立即兑换" : "ticketOrder" == e.data.fromType ? p = "继续购票" : "guagauka" == e.data.fromType && (p = "返回"), 
                        e.setData({
                            curCinemas: n,
                            cinemas: s,
                            isIn: l,
                            canUseCinemas: e.data.canUseCinemas,
                            isAllCity: m,
                            eCardDetails: t,
                            msg: t.msg,
                            btnText: p,
                            fromType: e.data.fromType,
                            shouldBackMovie: e.data.shouldBackMovie,
                            isShowSeeCardList: e.data.isShowSeeCardList
                        });
                    }
                } else "102" == a.data.errcode ? e.setData({
                    isError: !1,
                    errorMsg: a.data.msg
                }) : getApp().showModalApp(a.data.msg);
                wx.hideLoading();
            });
        }
    },
    imgClick: function(a) {
        this.data.isAgree ? this.setData({
            isAgree: !1,
            xieyi_src: "/images/common/wodehuiyuanka_icon_danxuan_weixuan.png"
        }) : this.setData({
            isAgree: !0,
            xieyi_src: "/images/common/wodehuiyuanka_icon_danxuan_xuanzhong.png"
        });
    },
    xiyiClick: function(a) {
        var t = encodeURIComponent(this.data.eCardDetails.url);
        wx.navigateTo({
            url: "/pages/find/promotionDetial/promotionDetial?flag=xieyi&promotion_url=" + t
        });
    },
    num_click: function(a) {
        var t = a.currentTarget.dataset.index;
        console.log("index == " + t);
        var e = this.data.pwds;
        if (11 == t) {
            if (0 == e.length) return;
            return e.splice(e.length - 1, 1), void this.setData({
                pwds: e
            });
        }
        if (6 != e.length && 9 != t && (e.push(this.data.nums[t]), this.setData({
            pwds: e
        }), console.log(e), 6 == e.length)) {
            for (var i = "", o = 0; o < e.length; o++) i += e[o];
            this.data.pwd_param = i, this.setData({
                pwds: [],
                isShowDialog: !1
            });
            var s = this;
            setTimeout(function() {
                this.setData({
                    isShow: !1
                }), s.onLineCreat();
            }.bind(this), 350);
        }
    },
    formSubmit: function(a) {
        console.log(a);
        var t = a.detail.formId;
        this.data.form_id = t, this.payClick();
    },
    payClick: function() {
        var a = this;
        if (this.data.isAgree) {
            if ("刷新" == this.data.msg) return void this.onLineStatus();
            if ("开卡失败" == this.data.msg) return;
            wx.showModal({
                content: a.data.eCardDetails.notice,
                success: function(t) {
                    t.confirm && (a.setData({
                        isShow: !0
                    }), setTimeout(function() {
                        a.setData({
                            isShowDialog: !0
                        });
                    }.bind(a), 200));
                }
            });
        } else wx.showToast({
            icon: "none",
            title: "请仔细阅读影院会员卡协议并同意"
        });
    },
    allCityClick: function(a) {
        this.setData({
            curCinemas: this.data.cinemas,
            isAllCity: !0
        });
    },
    onLineCreat: function() {
        var e = this, i = "", o = "";
        if ("1" == this.data.eCardDetails.status && (i = this.data.eCardDetails.price), 
        this.data.money = i, o = this.data.pwd_param, console.log("pwd = " + o), o = t.hex_md5(o), 
        "exchangeCode" != this.data.fromType) a.onLineCreat(this.data.eCardDetails.out_level_id, o, i, this.data.eCardDetails.cinema_id, this.data.eCardDetails.id).then(function(a) {
            if (console.log(a), 1 == a.data.status) {
                var t = a.data.data;
                e.data.order = t, e.wxPay();
            }
        }); else {
            this.data.exchange_code;
            var s = this.data.exchange_code, n = this.data.bind_cinema_id;
            a.codeExchange(s, o, n).then(function(a) {
                if (console.log(a), 1 == a.data.status) {
                    var t = a.data.data;
                    t.order_num = t.orderNum, e.data.order = t, e.setOpenCardStatus(a);
                }
            });
        }
    },
    wxPay: function() {
        var a = this;
        wx.checkSession({
            success: function() {
                console.log("登录未过期--------------------"), a.login();
            },
            fail: function() {
                console.log("登录过期--------------------"), a.login();
            }
        });
    },
    login: function() {
        var t = this;
        wx.login({
            success: function(e) {
                if (e.code) {
                    console.log(e);
                    var i = a.getOpenId(e.code, t.data.eCardDetails.cinema_id, t.data.order.order_num, t.data.form_id);
                    console.log(i), wx.request({
                        url: i[0],
                        data: i[1],
                        success: function(e) {
                            if (console.log("成功 3rd_session"), console.log(e), "0" == e.data.errcode) {
                                var i = e.data.data.open_id;
                                console.log("open_id = " + i), t.data.open_id = i, a.onLineCardBug(t.data.order.order_num, getApp().globalData.pay_code, t.data.money, i, t.data.form_id).then(function(a) {
                                    if (console.log(a), 1 == a.data.status) {
                                        var e = a.data.data.weixinLite;
                                        e ? wx.requestPayment({
                                            timeStamp: e.timeStamp,
                                            nonceStr: e.nonceStr,
                                            package: e.package,
                                            signType: e.signType,
                                            paySign: e.paySign,
                                            success: function(a) {
                                                console.log(a), wx.showToast({
                                                    icon: "none",
                                                    title: "支付成功"
                                                }), t.onLineStatus(), getApp().globalData.isLoadCardList = !0;
                                            },
                                            fail: function(a) {
                                                console.log(a), "requestPayment:fail cancel" == a.errMsg ? getApp().showModalApp("取消支付") : getApp().showModalApp("支付失败");
                                            }
                                        }) : wx.showToast({
                                            icon: "none",
                                            title: "数据错误"
                                        });
                                    } else getApp().showModalApp(a.data.msg);
                                    wx.hideLoading();
                                });
                            } else getApp().showModalApp(e.data.msg);
                        },
                        fail: function(a) {
                            console.log("失败 3rd_session"), console.log(a), wx.hideLoading(), wx.showToast({
                                icon: "none",
                                title: "支付失败"
                            });
                        }
                    });
                } else console.log("获取用户登录态失败！" + e.errMsg), wx.hideLoading(), wx.showToast({
                    icon: "none",
                    title: "支付失败"
                });
            }
        });
    },
    onLineStatus: function() {
        var t = this, e = this.data.order.order_num;
        a.onLineStatus(e).then(function(a) {
            console.log(a), 1 == a.data.status && t.setOpenCardStatus(a);
        });
    },
    setOpenCardStatus: function(a) {
        if ("exchangeCode" == this.data.fromType) {
            var t = getCurrentPages(), e = t[t.length - 2];
            console.log(t), console.log(e), e.setData({
                isCodeOpenFinished: !0
            });
        }
        var i = this.data.order.order_num, o = this, s = a.data.data.status, n = a.data.data.msg;
        if ("2" == s) getApp().globalData.isLoadCardList = !0, o.setData({
            isOpenCardSuccess: !0
        }); else if ("3" == s) {
            var d = "立即开通", r = "开卡失败";
            "exchangeCode" == o.data.fromType && (d = "立即兑换", r = "兑换失败"), o.setData({
                msg: d
            }), wx.showModal({
                confirmColor: "#ff9500",
                showCancel: !1,
                content: n,
                title: r,
                confirmText: "我知道了",
                success: function() {
                    getApp().globalData.isLoadCardList = !1, "ticketOrder" == o.data.fromType && (getApp().globalData.confirOpenObjc = {
                        status: "3",
                        orderNum: i
                    }, wx.navigateBack({}));
                }
            });
        } else "1" == s && (o.setData({
            msg: "刷新"
        }), wx.showModal({
            confirmColor: "#ff9500",
            showCancel: !1,
            content: n,
            title: "处理中",
            confirmText: "我知道了",
            success: function() {
                getApp().globalData.isLoadCardList = !0, "ticketOrder" == o.data.fromType && (getApp().globalData.confirOpenObjc = {
                    status: "1",
                    orderNum: i
                }, wx.navigateBack({}));
            }
        }));
    },
    setCardStatus: function(a, t, e, i) {
        this.setData({
            msg: i
        }), e && ("1" == e ? this.setData({
            price: a,
            btnClass: ""
        }) : "2" == e ? this.setData({
            price: t,
            btnClass: ""
        }) : "3" != e && "4" != e && "5" != e || this.setData({
            price: a,
            btnClass: "buy_btn_grey"
        }));
    },
    dismissDialog: function() {
        this.setData({
            isShowDialog: !1
        }), setTimeout(function() {
            this.setData({
                isShow: !1
            });
        }.bind(this), 350);
    },
    showDialog: function() {
        var a = wx.createAnimation({
            duration: 200,
            timingFunction: "linear",
            delay: 0
        });
        this.animation = a, a.translateY(200).step(), this.setData({
            animationData: a.export(),
            isShowDialog: !0
        }), setTimeout(function() {
            a.translateY(0).step(), this.setData({
                animationData: a.export()
            });
        }.bind(this), 200);
    },
    hideDialog: function() {
        var a = wx.createAnimation({
            duration: 200,
            timingFunction: "linear",
            delay: 0
        });
        this.animation = a, a.translateY(300).step(), this.setData({
            animationData: a.export()
        }), setTimeout(function() {
            a.translateY(0).step(), this.setData({
                animationData: a.export(),
                isShowDialog: !1
            });
        }.bind(this), 200);
    },
    move: function() {},
    goBuyTicket: function() {
        console.log("goBuyTicket-----------"), this.data.shouldBackMovie ? wx.switchTab({
            url: "/pages/home/cinema/cinema"
        }) : "ticketOrder" == this.data.fromType ? (getApp().globalData.confirOpenObjc = {
            status: "2",
            orderNum: this.data.order.order_num
        }, wx.navigateBack({})) : "guagauka" == this.data.fromType ? wx.navigateBack({
            delta: 2
        }) : wx.switchTab({
            url: "/pages/home/cinema/cinema"
        });
    },
    goCards: function() {
        console.log(this.data.fromType), "exchangeCode" != this.data.fromType && "home_advert" != this.data.fromType ? "ticketOrder" != this.data.fromType && wx.navigateBack({
            delta: 2
        }) : wx.redirectTo({
            url: "/pages/card/cardlist/cardList?fromFlag=ecardDetails"
        });
    },
    closeClick: function() {
        console.log("closeClick-----------");
    }
});