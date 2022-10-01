var t = require("../../utils/event.js");

Page({
    data: {
        isLoadPage: !1
    },
    onLoad: function() {
        this.data.isLoadPage = !0;
    },
    onShow: function() {
        this.data.isLoadPage || this.selectComponent(".my-activity-win").isRefreshData(), 
        this.data.isLoadPage = !1;
    },
    onUnload: function() {
        t.mtaEvent("activityListReturn");
    }
});