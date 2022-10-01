var e = getApp();

Page({
    data: {
        user_id: null,
        device_id: null,
        title: null,
        items: [ {
            value: "与话题无关"
        }, {
            value: "虚假信息"
        }, {
            value: "广告"
        }, {
            value: "其他"
        } ]
    },
    checkboxChange: function(e) {
        this.data.title = e.detail.value;
    },
    bindFormSubmit: function(t) {
        var a = this;
        return a.data.user_id ? a.data.title ? void (t.detail.value.content ? t.detail.value.content.length < 10 ? e.show_erro("说了至少10个字！", "error") : wx.request({
            url: "https://api.998jx.com/micro/account/complaint",
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: {
                token: e.globalData.userInfo.token,
                user_id: a.data.user_id,
                device_id: a.data.device_id,
                title: a.data.title,
                content: t.detail.value.content
            },
            success: function(t) {
                1 == t.data.ret ? (wx.showToast({
                    title: "举报成功"
                }), setTimeout(function() {
                    wx.navigateBack({
                        delta: 1
                    });
                }, 2e3)) : e.show_erro(t.data.msg, "faild");
            }
        }) : e.show_erro("请填写举报说明", "error")) : (e.show_erro("请选择举报类型", "error"), !1) : (e.show_erro("用户不存在", "error"), 
        !1);
    },
    onLoad: function(t) {
        var a = this;
        console.log(t), a.data.user_id = t.user, a.data.device_id = t.item, wx.request({
            url: "https://zu.998jx.com/micro/account/getinfo",
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: {
                token: e.globalData.userInfo.token
            },
            success: function(e) {
                e.data.data.mobile || wx.navigateTo({
                    url: "/pages/phonenumber/phonenumber?bind=1"
                });
            }
        });
    }
});