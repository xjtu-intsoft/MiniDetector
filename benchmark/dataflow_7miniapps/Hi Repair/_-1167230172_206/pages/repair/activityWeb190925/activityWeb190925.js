require("../../../util/util"), require("../../../comm/script/fetch"), require("../../../comm/script/config"), 
getApp();

Page({
    data: {
        webUrl: "",
        userToken: "haha",
        phone: ""
    },
    onLoad: function(e) {
        wx.getSystemInfo({
            success: function(e) {
                Number(e.SDKVersion.replace(/\./g, "")) < 164 && wx.showModal({
                    title: "小提示",
                    content: "当前微信版本过低，无法正常查看，请升级到最新微信版本后重试。",
                    complete: function() {
                        wx.navigateBack();
                    }
                });
            }
        }), console.log(e), "screen" == e.type ? this.setData({
            webUrl: "https://mtg.hiweixiu.com/?ref=rmhdpm/screen"
        }) : "dc" == e.type ? this.setData({
            webUrl: "https://mtg.hiweixiu.com/?ref=rmhddc/"
        }) : "memory" == e.type && this.setData({
            webUrl: "https://mtg.hiweixiu.com/?ref=rmhdnc/memory"
        });
    }
});