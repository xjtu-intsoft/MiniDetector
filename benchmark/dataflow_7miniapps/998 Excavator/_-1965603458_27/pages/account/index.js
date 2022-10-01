var a = getApp();

Page({
    data: {
        userInfo: a.globalData.userInfo,
        user_phone: "/images/icon/guest_account.png",
        from_me: 0,
        to_me: 0,
        favorite: 0,
        device_list: [],
        itemid: "",
        page: 1,
        deviceimage_cnt: 0,
        loaded: !1,
        background: "http://images.998jx.com/micro/account_wajue.jpg",
        state: "在售",
        issue_num: 1,
        hideGuidance: !0,
        is_vip: !1,
        msg_read: 1
    },
    updateinfo: function(t) {
        var e = this;
        "getUserInfo:ok" == t.detail.errMsg ? (a.globalData.userInfo.avatars = t.detail.userInfo.avatarUrl, 
        a.globalData.userInfo.username = t.detail.userInfo.nickName, e.data.userInfo && (e.data.userInfo.username = t.detail.userInfo.nickName, 
        e.data.userInfo.avatars = t.detail.userInfo.avatarUrl), e.setData({
            userInfo: e.data.userInfo
        }), wx.showLoading({
            title: ""
        }), wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/account/update",
            data: {
                token: a.globalData.userInfo.token,
                username: t.detail.userInfo.nickName,
                avatars: t.detail.userInfo.avatarUrl
            },
            success: function() {
                wx.hideLoading(), e.load_account();
            }
        })) : a.show_erro("网络不给力", "faild");
    },
    openchat: function() {
        wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/account/starchat",
            data: {
                token: a.globalData.userInfo.token
            }
        });
    },
    changebg: function() {
        var t = this;
        wx.showModal({
            title: "修改微信名片",
            content: "您确认修改微信名片背景图片?",
            success: function(e) {
                e.confirm && wx.chooseImage({
                    count: 1,
                    sizeType: [ "compressed" ],
                    sourceType: [ "album", "camera" ],
                    success: function(e) {
                        e.tempFilePaths.forEach(function(e, o) {
                            wx.showLoading({
                                title: "上传中..."
                            }), wx.uploadFile({
                                url: "https://api.998jx.com/micro/upload",
                                filePath: e,
                                name: "imgFile",
                                formData: {
                                    token: a.globalData.userInfo.token,
                                    ref: "accountbg"
                                },
                                success: function(e) {
                                    wx.hideLoading();
                                    var n = JSON.parse(e.data);
                                    n.ret ? (t.setData({
                                        background: n.show_url
                                    }), wx.setStorageSync("account_background", n.show_url), t.savebg(n.show_url)) : a.show_erro(o + " 图片格式不支持");
                                }
                            });
                        });
                    }
                });
            }
        });
    },
    savebg: function(t) {
        wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/account/savebg",
            data: {
                token: a.globalData.userInfo.token,
                bg_url: t
            },
            success: function(a) {}
        });
    },
    onShow: function() {
        var t = this;
        a.globalData.userInfo && a.globalData.userInfo.mobile ? t.setData({
            mask: !1
        }) : (a.checklogin(), t.setData({
            mask: !0
        })), t.data.loaded && (t.data.device_list = [], t.data.page = 1, t.load_account());
    },
    previewimg: function(a) {
        var t = this, e = a.target.dataset.src, o = a.currentTarget.dataset.list, n = t.data.device_list[o].image;
        wx.previewImage({
            current: e,
            urls: n
        });
    },
    upcomplaint: function(t) {
        var e = t.currentTarget.dataset.itemid;
        wx.showModal({
            title: "举报申诉",
            content: "请确认该设备已修改或删除, 为维护圈子环境,申诉失败将再禁言30天",
            confirmText: "申诉",
            success: function(t) {
                t.confirm && wx.request({
                    method: "POST",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    url: "https://api.998jx.com/micro/account/reject",
                    data: {
                        token: a.globalData.userInfo.token,
                        device_id: e
                    },
                    success: function(t) {
                        a.show_erro("已进入人工处理");
                    }
                });
            }
        });
    },
    clickstatus: function(t) {
        var e = this, o = t.currentTarget.dataset.itemid, n = t.currentTarget.dataset.status;
        6 != n && wx.showModal({
            title: "提示",
            content: "更新设备状态为已售后将无法再改为在售状态！",
            success: function(t) {
                t.confirm && (wx.showLoading({
                    title: "处理中..."
                }), e.setData({
                    state: "已售"
                }), wx.request({
                    method: "POST",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    url: "https://api.998jx.com/micro/device/changestatus",
                    data: {
                        token: a.globalData.userInfo.token,
                        device_id: o,
                        status: n
                    },
                    success: function(a) {
                        wx.hideLoading(), e.data.device_list = [], e.data.page = 1, e.load_account();
                    }
                }));
            }
        });
    },
    refresh: function(t) {
        var e = this, o = t.currentTarget.dataset.itemid;
        wx.showLoading({
            title: "处理中..."
        }), wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/device/refresh",
            data: {
                token: a.globalData.userInfo.token,
                device_id: o
            },
            success: function(t) {
                wx.hideLoading(), 1 == t.data.ret ? (a.show_erro(t.data.msg), e.data.device_list = [], 
                e.data.page = 1, e.load_account()) : wx.showModal({
                    title: "刷新失败",
                    content: t.data.msg,
                    confirmText: "升级会员",
                    success: function(a) {
                        a.confirm && wx.navigateTo({
                            url: "/pages/upgrade/index"
                        });
                    }
                });
            }
        });
    },
    load_account: function() {
        var t = this;
        wx.showLoading({
            title: "加载中"
        }), wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/account/index",
            data: {
                token: a.globalData.userInfo.token,
                page: t.data.page
            },
            success: function(e) {
                if (wx.hideLoading(), t.data.loaded = !0, t.setData({
                    userInfo: a.globalData.userInfo
                }), 1 == e.data.ret) {
                    var o = e.data.data.total_cnt;
                    1 == e.data.data.user_info.customer_group_id && t.setData({
                        is_vip: !0
                    }), t.setData({
                        show_money: e.data.data.show_money,
                        userInfo: e.data.data.user_info,
                        from_me: e.data.data.from_me,
                        to_me: e.data.data.to_me,
                        point: e.data.data.point,
                        device_list: t.data.device_list,
                        favorite: e.data.data.favorite,
                        issue_num: o,
                        msg_read: e.data.data.user_info.msg_read
                    });
                }
            }
        });
    },
    onLoad: function() {
        var t = this;
        a.auth(function(e) {
            var o = wx.getStorageSync("account_background");
            o && t.setData({
                background: o,
                hideGuidance: !0
            }), a.globalData.userInfo.username && t.setData({
                userInfo: a.globalData.userInfo
            }), t.buildercode(), t.load_account();
        }), setTimeout(function() {
            t.setData({
                hideGuidance: !1
            });
        }, 5e3);
    },
    buildercode: function() {
        var t = this;
        wx.request({
            url: "https://api.998jx.com/micro/account/buildercode",
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: {
                token: a.globalData.userInfo.token,
                account: 1
            },
            success: function(a) {
                t.data.myercode = a.data.url;
            }
        });
    },
    openpubcode: function() {
        var a = this, t = a.data.myercode.substring(0, a.data.myercode.indexOf("_")) + ".jpg";
        wx.previewImage({
            urls: [ t ]
        });
    },
    onReachBottom: function() {
        var a = this;
        a.data.page < a.data.total_page && (wx.showLoading({
            title: "加载中..."
        }), setTimeout(function() {
            wx.hideLoading();
        }, 500), a.data.page = a.data.page + 1, a.load_account());
    },
    onShareAppMessage: function(t) {
        var e = this;
        return "button" === t.from ? {
            title: t.target.dataset.price + t.target.dataset.title,
            imageUrl: t.target.dataset.image.replace(".small", ""),
            path: "/pages/userinfo/index?t=" + a.getcsid() + "&id=" + e.data.userInfo.customer_id,
            success: function(a) {}
        } : "menu" === t.from ? {
            title: "我的小程序名片",
            path: "/pages/userinfo/index?t=" + a.getcsid() + "&id=" + e.data.userInfo.customer_id,
            success: function(a) {}
        } : void 0;
    },
    toPage: function() {
        wx.switchTab({
            url: "../deviceaddq/index"
        });
    },
    setting: function() {
        wx.openSetting({
            success: function(a) {}
        });
    },
    hideGuidance: function() {
        this.setData({
            hideGuidance: !1
        });
    },
    to_vip: function() {
        wx.navigateTo({
            url: "/pages/upgrade/index"
        });
    },
    versions: function() {
        var a = wx.getUpdateManager();
        a.onCheckForUpdate(function(t) {
            0 == t.hasUpdate ? wx.showModal({
                title: "提示",
                content: "当前已是最新版本"
            }) : a.onUpdateReady(function() {
                wx.showModal({
                    title: "更新提示",
                    content: "新版本已经准备好，是否重启应用？",
                    success: function(t) {
                        t.confirm && a.applyUpdate();
                    }
                });
            });
        });
    },
    get_useravatars: function(t) {
        this.setData({
            user_phone: t.detail.userInfo.avatarUrl
        }), wx.request({
            url: "https://api.998jx.com/micro/account/user_register",
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: {
                token: a.globalData.userInfo.token,
                encryptedData: t.detail.encryptedData,
                iv: t.detail.iv
            },
            success: function(a) {
                console.log(a);
            }
        });
    },
    upgrade: function() {
        wx.navigateTo({
            url: "/pages/upgrade/index"
        });
    },
    kanjia: function() {
        wx.navigateTo({
            url: "/pages/kanjia/kanjia"
        }), this.setData({
            msg_read: 1
        });
    }
});