var t = require("../../utils/event.js");

Component({
    properties: {
        isCallBack: String
    },
    methods: {
        getUserInfo: function(e) {
            e.detail.userInfo && (t.mtaEvent("authorize"), this.data.isCallBack ? this.triggerEvent("authorise") : getApp().getLogin(function() {
                wx.setStorageSync("authoriseSuccessBack", 1), wx.navigateBack();
            }));
        }
    }
});