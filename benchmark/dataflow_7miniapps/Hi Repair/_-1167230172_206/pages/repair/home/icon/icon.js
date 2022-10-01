Component({
    data: {
        background: "",
        fontcolor: ""
    },
    properties: {
        data: Object
    },
    methods: {
        jumpPage: function(e) {
            var t = e.currentTarget.dataset, a = t.type;
            5 != a && (1 == a ? t.index ? wx.navigateTo({
                url: t.url + "?tyleIndex=" + t.index
            }) : wx.navigateTo({
                url: t.url
            }) : 3 == a ? wx.navigateToMiniProgram({
                appId: t.extra.app_id,
                path: t.url,
                success: function(e) {}
            }) : 6 == a ? wx.switchTab({
                url: t.url
            }) : 7 == a ? (console.log(t.bg), wx.previewImage({
                current: t.bg,
                urls: [ t.bg ]
            })) : wx.navigateTo({
                url: "../bannerWeb/bannerWeb?info=" + encodeURIComponent(t.url)
            }), "修手机" == t.name && getApp().mtj.trackEvent("repair_phone"), "修平板" == t.name && getApp().mtj.trackEvent("repair_ipad"), 
            "手机回收" == t.name && getApp().mtj.trackEvent("home_recycling"), "以旧换新" == t.name && getApp().mtj.trackEvent("home_changenew"), 
            "数码回收" == t.name && getApp().mtj.trackEvent("home_recycling2"), "换屏幕" == t.name && getApp().mtj.trackEvent("repair_screen"), 
            "换电池" == t.name && getApp().mtj.trackEvent("repair_battery"), "内存升级" == t.name && getApp().mtj.trackEvent("repair_ram"), 
            "主板维修" == t.name && getApp().mtj.trackEvent("repair_motherboard"), "其他" == t.name && getApp().mtj.trackEvent("repair_other"), 
            getApp().mtj.trackEvent("home_statistics", {
                parameter_name: t.name
            }));
        },
        startmessage: function(e) {
            wx.showLoading();
            var t = getCurrentPages(), a = t[t.length - 1], r = t[t.length - 2];
            console.log(a, r), console.log(e.currentTarget), console.log(e.currentTarget.dataset.url), 
            a.setData({
                tc_bg: e.currentTarget.dataset.url
            });
        },
        completemessage: function(e) {
            console.log(e.detail.errcode), wx.hideLoading();
            var t = getCurrentPages(), a = t[t.length - 1];
            0 == e.detail.errcode ? a.setData({
                isShowModal: !0
            }) : -3002 == e.detail.errcode ? wx.showToast({
                title: "获取插件配置信息失败",
                icon: "none",
                duration: 2e3
            }) : -3004 == e.detail.errcode ? wx.showToast({
                title: "用户授权失败",
                icon: "none",
                duration: 2e3
            }) : -3005 == e.detail.errcode ? wx.showToast({
                title: "客服消息发送失败",
                icon: "none",
                duration: 2e3
            }) : -3006 == e.detail.errcode ? wx.showToast({
                title: "已经是好友关系啦",
                icon: "none",
                duration: 2e3
            }) : -3008 == e.detail.errcode && wx.showToast({
                title: "当前配置没有客服人员",
                icon: "none",
                duration: 2e3
            });
        }
    },
    lifetimes: {
        attached: function() {
            var e = this.data.data.meta.theme;
            this.setData({
                background: e.bgType ? "url(".concat(e.background, ")  no-repeat") : e.background,
                fontcolor: e.fontColor
            }), console.log("this.data.data==="), console.log(this.data.data);
        }
    }
});