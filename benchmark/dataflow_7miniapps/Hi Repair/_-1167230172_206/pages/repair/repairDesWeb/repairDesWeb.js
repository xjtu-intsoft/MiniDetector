Page({
    data: {
        model_id: ""
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
        }), this.setData({
            model_id: e.model_id
        });
    }
});