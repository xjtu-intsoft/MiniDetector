var t = getApp();

Page({
    data: {
        userInfo: t.globalData.userInfo,
        from_me: 0,
        to_me: 0,
        favorite: 0,
        device_list: [],
        itemid: "",
        page: 1,
        total_page: "",
        deviceimage_cnt: 0,
        loaded: !1,
        state: "在售"
    },
    onLoad: function() {
        var e = this;
        t.auth(function(t) {
            if (!t.token) return !1;
            e.load_account();
        });
    },
    clickstatus: function(e) {
        var a = this, o = e.currentTarget.dataset.itemid, n = e.currentTarget.dataset.status;
        6 != n && 2 != n && wx.showModal({
            title: "提示",
            content: "更新设备状态为已售后将无法再改为在售状态！",
            success: function(e) {
                e.confirm && (wx.showLoading({
                    title: "处理中..."
                }), wx.request({
                    method: "POST",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    url: "https://api.998jx.com/micro/device/changestatus",
                    data: {
                        token: t.globalData.userInfo.token,
                        device_id: o,
                        status: n
                    },
                    success: function(t) {
                        wx.hideLoading(), a.data.device_list = [], a.data.page = 1, a.load_account();
                    }
                }));
            }
        });
    },
    openchat: function() {
        wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/account/starchat",
            data: {
                token: t.globalData.userInfo.token
            }
        });
    },
    changebg: function() {
        var e = this;
        wx.showModal({
            title: "修改微信名片",
            content: "您确认修改微信名片背景图片?",
            success: function(a) {
                a.confirm && wx.chooseImage({
                    count: 1,
                    sizeType: [ "compressed" ],
                    sourceType: [ "album", "camera" ],
                    success: function(a) {
                        a.tempFilePaths.forEach(function(a, o) {
                            wx.showLoading({
                                title: "上传中..."
                            }), wx.uploadFile({
                                url: "https://api.998jx.com/micro/upload",
                                filePath: a,
                                name: "imgFile",
                                formData: {
                                    token: t.globalData.userInfo.token,
                                    ref: "accountbg"
                                },
                                success: function(a) {
                                    wx.hideLoading();
                                    var n = JSON.parse(a.data);
                                    n.ret ? (e.setData({
                                        background: n.show_url
                                    }), wx.setStorageSync("account_background", n.show_url), e.savebg(n.show_url)) : t.show_erro(o + " 图片格式不支持");
                                }
                            });
                        });
                    }
                });
            }
        });
    },
    clickid: function(e) {
        var a = this, o = e.currentTarget.dataset.itemid;
        a.setData({
            itemid: o
        }), a.data.itemid == e.currentTarget.dataset.itemid && wx.showModal({
            title: "提示",
            content: "您确认删除该设备",
            success: function(e) {
                e.confirm && (wx.showLoading({
                    title: "处理中..."
                }), wx.request({
                    method: "POST",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    url: "https://api.998jx.com/micro/device/delete_device",
                    data: {
                        token: t.globalData.userInfo.token,
                        itemid: a.data.itemid
                    },
                    success: function(t) {
                        wx.hideLoading(), a.data.device_list = [], a.data.page = 1, a.load_account();
                    }
                }));
            }
        });
    },
    onShow: function() {
        var t = this;
        t.data.loaded && (t.data.device_list = [], t.data.page = 1, t.load_account());
    },
    previewimg: function(t) {
        var e = this, a = t.target.dataset.src, o = t.currentTarget.dataset.list, n = e.data.device_list[o].image;
        wx.previewImage({
            current: a,
            urls: n
        });
    },
    upcomplaint: function(e) {
        var a = e.currentTarget.dataset.itemid;
        wx.showModal({
            title: "举报申诉",
            content: "请确认该设备已修改或删除, 为维护圈子环境,申诉失败将再禁言30天",
            confirmText: "申诉",
            success: function(e) {
                e.confirm && wx.request({
                    method: "POST",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    url: "https://api.998jx.com/micro/account/reject",
                    data: {
                        token: t.globalData.userInfo.token,
                        device_id: a
                    },
                    success: function(e) {
                        t.show_erro("已进入人工处理");
                    }
                });
            }
        });
    },
    refresh: function(e) {
        var a = this, o = e.currentTarget.dataset.itemid;
        wx.showModal({
            title: "提示",
            content: "刷新设备将消耗10积分",
            success: function(e) {
                e.confirm && wx.request({
                    method: "POST",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    url: "https://api.998jx.com/micro/device/refresh",
                    data: {
                        token: t.globalData.userInfo.token,
                        device_id: o
                    },
                    success: function(e) {
                        wx.hideLoading(), 1 == e.data.ret ? (t.show_erro(e.data.msg), a.data.device_list = [], 
                        a.data.page = 1, a.load_account()) : wx.showModal({
                            title: "提示",
                            content: "积分余额不足",
                            confirmText: "立即充值",
                            success: function(t) {
                                t.confirm && wx.navigateTo({
                                    url: "/pages/recharge/recharge"
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    load_account: function() {
        var e = this;
        wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/account/mydevice",
            data: {
                token: t.globalData.userInfo.token,
                page: e.data.page
            },
            success: function(t) {
                var a = t.data.data;
                if (e.data.total_page = t.data.total_page, e.data.loaded = !0, -1 == t.data.ret) wx.navigateTo({
                    url: "/pages/phonenumber/phonenumber?bind=1&from_url=account"
                }); else {
                    for (var o = 0; o < a.length; o++) e.data.device_list.push(a[o]);
                    e.setData({
                        device_list: e.data.device_list
                    });
                }
            }
        });
    },
    onReachBottom: function() {
        var t = this;
        console.log(t.data.page), console.log(t.data.total_page), t.data.page < t.data.total_page && (wx.showLoading({
            title: "加载中..."
        }), setTimeout(function() {
            wx.hideLoading();
        }, 500), t.data.page = t.data.page + 1, t.load_account());
    },
    toPage: function() {
        wx.switchTab({
            url: "../deviceadd/index"
        });
    }
});