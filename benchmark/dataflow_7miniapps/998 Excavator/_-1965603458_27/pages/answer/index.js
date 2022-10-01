var t = getApp(), e = wx.getBackgroundAudioManager();

Page({
    data: {
        question: {
            level: ""
        },
        answer: "",
        time_txt: "",
        timer: "",
        timer_total: 20,
        timer_muisc: !1,
        saveday: "",
        showpop: !1,
        popmsg: "",
        level_rang: "",
        question_sort: "id",
        showerror: !1,
        share_times: 0,
        erro_times: 0,
        left_erro: 0,
        left_share: 6,
        userInfo: ""
    },
    onLoad: function(e) {
        var a = this;
        e.t && (t.globalData.refer = e.t), t.auth(function(e) {
            a.setData({
                userInfo: e
            });
            var o = wx.getStorageSync("lastgamestatus");
            wx.request({
                method: "POST",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                url: "https://api.998jx.com/micro/answer/last_level",
                data: {
                    token: t.globalData.userInfo.token
                },
                success: function(t) {
                    a.data.share_times = t.data.share_times, a.data.erro_times = t.data.erro_times, 
                    50 == t.data.level_top && (a.data.question_sort = "rand"), a.data.erro_times > 0 && "error" == o ? (a.data.question.level = t.data.level, 
                    a.setData({
                        showerror: !0,
                        left_share: 6 - a.data.share_times,
                        left_erro: 0 - a.data.erro_times,
                        question: t.data.data,
                        answer: t.data.data.answer
                    })) : a.load_question();
                }
            });
        });
    },
    shownotes: function() {
        var t = this;
        wx.showToast({
            title: "离【吊装王者】还差" + (51 - t.data.question.level) + "关,加油哦!",
            icon: "none",
            duration: 5e3
        });
    },
    formSubmit: function(e) {
        var a = this;
        wx.request({
            url: "https://api.998jx.com/micro/answer/successmsg",
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: {
                token: t.globalData.userInfo.token,
                level: a.data.question.level,
                formId: e.detail.formId
            }
        });
    },
    load_question: function() {
        var e = this;
        clearTimeout(e.data.timer), wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/answer/question",
            data: {
                token: t.globalData.userInfo.token,
                question_sort: e.data.question_sort
            },
            success: function(t) {
                1 == t.data.ret ? (e.data.share_times = t.data.data.share_times, e.data.erro_times = t.data.data.erro_times, 
                t.data.data.level > 40 ? e.data.timer_total = 10 : t.data.data.level > 30 ? e.data.timer_total = 12 : t.data.data.level > 20 ? e.data.timer_total = 14 : t.data.data.level > 10 && (e.data.timer_total = 16), 
                e.setData({
                    question: t.data.data,
                    answer: t.data.data.answer
                }), t.data.data.msg ? (e.data.level_name = t.data.data.level_name, e.playsound("level"), 
                e.setData({
                    showpop: !0,
                    level_rang: t.data.data.level_rang,
                    popmsg: t.data.data.msg
                })) : e.counttime(e.data.timer_total)) : -1 == t.data.ret ? e.setData({
                    popsuccess: !0,
                    gift: t.data.gift
                }) : e.pop_register();
            }
        });
    },
    gonext: function() {
        var t = this;
        t.setData({
            showpop: !1
        }), t.counttime(t.data.timer_total);
    },
    counttime: function(t) {
        var e = this;
        if (clearTimeout(e.data.timer), "undefined" == typeof time) var a = t;
        if (0 == t) e.setData({
            time_txt: "回答超时"
        }), t = a, e.goerro(); else {
            5 == t && (e.playsound("timer"), e.data.timer_muisc = !0);
            var o = t;
            o < 10 && (o = "0" + o), e.setData({
                time_txt: o
            }), t--, e.data.timer = setTimeout(function() {
                e.counttime(t);
            }, 1e3);
        }
    },
    restart: function() {
        var e = this;
        e.data.question_sort = "rand", wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/answer/restart",
            data: {
                token: t.globalData.userInfo.token
            },
            success: function(t) {
                e.setData({
                    popsuccess: !1
                }), e.load_question();
            }
        });
    },
    onUnload: function() {
        var t = this;
        clearTimeout(t.data.timer), t.data.timer_muisc && e.stop();
    },
    playsound: function(t) {
        if ("error" == t) a = "http://images.998jx.com/youxi/error.mp3"; else if ("success" == t) a = "http://images.998jx.com/youxi/success.mp3"; else if ("level" == t) a = "http://images.998jx.com/youxi/level.mp3"; else if ("timer" == t) var a = "http://images.998jx.com/youxi/timer.mp3";
        e.title = t, e.epname = t, e.singer = "none", e.src = a, e.onError(function(t) {
            console.log(t);
        });
    },
    goerro: function() {
        var e = this;
        clearTimeout(e.data.timer), e.playsound("error"), e.data.erro_times++, wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/answer/save_erro",
            data: {
                token: t.globalData.userInfo.token
            }
        }), wx.setStorageSync("lastgamestatus", "error"), e.data.left_erro = 0 - e.data.erro_times, 
        e.data.left_share = 6 - e.data.share_times, e.data.showerror = !0, e.setData({
            showerror: e.data.showerror,
            left_erro: e.data.left_erro,
            left_share: e.data.left_share
        });
    },
    jumpnext: function() {
        var t = this;
        t.data.showerror = !1, t.setData({
            showerror: t.data.showerror
        }), t.load_question();
    },
    doanswer: function(e) {
        var a = this;
        e.target.dataset.id != a.data.question.answer ? a.goerro() : (a.playsound("success"), 
        wx.showToast({
            title: "回答正确"
        }), wx.setStorageSync("lastgamestatus", "success"), wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/answer/save",
            data: {
                token: t.globalData.userInfo.token,
                id: a.data.question.id,
                erro_times: a.data.erro_times
            },
            success: function(t) {
                setTimeout(function() {
                    a.load_question();
                }, 1500);
            }
        }));
    },
    gotop: function() {
        wx.navigateTo({
            url: "/pages/answertop/index"
        });
    },
    pop_register: function() {
        var t = this;
        t.data.pop_register = !0, t.setData({
            pop_register: t.data.pop_register
        });
    },
    register: function(e) {
        if (e.detail.encryptedData) {
            var a = {
                token: t.globalData.userInfo.token,
                encryptedData: e.detail.encryptedData,
                iv: e.detail.iv
            };
            wx.request({
                url: "https://api.998jx.com/micro/account/user_register",
                method: "POST",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                data: a,
                success: function(e) {
                    0 == e.data.ret ? t.show_erro(e.data.msg, "error") : (t.globalData.userInfo = e.data.userInfo, 
                    wx.redirectTo({
                        url: "/pages/answer/index"
                    }));
                }
            });
        }
    },
    moneysend: function() {
        var e = this;
        e.playsound("level"), e.setData({
            moneysend: !0
        }), wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/answer/sendpoint",
            data: {
                token: t.globalData.userInfo.token
            }
        });
    },
    hidenbox: function() {
        this.setData({
            gift: 0
        });
    },
    onShareAppMessage: function(e) {
        var a = this;
        return "button" == e.from && "btnshare" == e.target.dataset.id ? {
            title: "10年老司机居然栽在了这台铲车上！",
            path: "/pages/answer/start?t=" + t.getcsid(),
            imageUrl: a.data.question.images,
            success: function(e) {
                console.log("shared"), a.data.share_times++, wx.request({
                    method: "POST",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    url: "https://api.998jx.com/micro/answer/save_share",
                    data: {
                        token: t.globalData.userInfo.token
                    },
                    success: function() {
                        wx.showModal({
                            title: "",
                            showCancel: !1,
                            confirmText: "继续闯关",
                            content: "正确答案：" + a.data.question.answer,
                            success: function(t) {
                                a.data.showerror = !1, a.counttime(a.data.timer_total), a.setData({
                                    showerror: a.data.showerror
                                });
                            }
                        });
                    },
                    fail: function(t) {
                        console.log(t);
                    }
                });
            }
        } : "button" == e.from && " btnLpk" == e.target.dataset.id ? {
            title: "这100家品牌铲车，你见过几个？",
            path: "/pages/answer/start?t=" + t.getcsid()
        } : "button" == e.from && "btnpk" == e.target.dataset.id ? {
            title: "这个铲车品牌你尽管猜，答对了算我输！",
            path: "/pages/answer/start?t=" + t.getcsid()
        } : {
            title: "@所有人, 江湖救急！大师这铲车什么牌子？",
            path: "/pages/answer/start?t=" + t.getcsid()
        };
    }
});