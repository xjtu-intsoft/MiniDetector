var t = getApp();

Page({
    data: {
        tabs: [ "我出的价", "有人砍价" ],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,
        usepoint: 0,
        gave_list: [],
        receive_list: []
    },
    onLoad: function(a) {
        var e = this;
        t.auth(function(t) {
            e.get_kanjia();
        }), wx.getSystemInfo({
            success: function(t) {
                e.setData({
                    sliderLeft: (t.windowWidth / e.data.tabs.length - 96) / 2,
                    sliderOffset: t.windowWidth / e.data.tabs.length * e.data.activeIndex
                });
            }
        });
    },
    tabClick: function(t) {
        this.setData({
            sliderOffset: t.currentTarget.offsetLeft,
            activeIndex: t.currentTarget.id
        });
    },
    get_kanjia: function() {
        var a = this;
        wx.request({
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "https://api.998jx.com/micro/account/myprice",
            data: {
                token: t.globalData.userInfo.token
            },
            success: function(t) {
                a.setData({
                    gave_list: t.data.data.gave_list,
                    receive_list: t.data.data.receive_list
                });
            }
        });
    },
    call_number: function(t) {
        var a = this;
        a.data.to_id = t.currentTarget.dataset.to_id, a.callout();
    },
    callout: function(a) {
        if (t.checklogin()) {
            var e = this;
            t.auth(function(a) {
                wx.request({
                    method: "POST",
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    url: "https://api.998jx.com/micro/trade/call_out",
                    data: {
                        token: t.globalData.userInfo.token,
                        toid: e.data.to_id,
                        usepoint: e.data.usepoint
                    },
                    success: function(a) {
                        if ("-3" == a.data.ret) t.show_erro(a.data.msg, "faild"); else {
                            if ("-1" == a.data.ret) return void wx.navigateTo({
                                url: "/pages/phonenumber/phonenumber?bind=1"
                            });
                            if ("-5" == a.data.ret) wx.showModal({
                                title: a.data.msg,
                                content: a.data.details,
                                success: function(t) {
                                    t.confirm && (e.data.usepoint = 1, e.callout(), e.data.usepoint = 0);
                                }
                            }); else {
                                if ("-4" == a.data.ret) return void e.setData({
                                    modaltitle: a.data.msg,
                                    modalcontent: a.data.details,
                                    showModal: !0
                                });
                                a.data.ret && wx.makePhoneCall({
                                    phoneNumber: a.data.phoneNumber,
                                    fail: function(a) {
                                        t.show_erro("拨号取消", "error");
                                    }
                                });
                            }
                        }
                    }
                });
            });
        }
    },
    onCancel: function() {
        this.setData({
            showModal: !1
        }), wx.navigateTo({
            url: "/pages/upgrade/index"
        });
    },
    onConfirm: function() {
        this.setData({
            showModal: !1
        }), wx.navigateTo({
            url: "/pages/recharge/recharge"
        });
    },
    delet_modal: function() {
        this.setData({
            showModal: !1
        });
    }
});