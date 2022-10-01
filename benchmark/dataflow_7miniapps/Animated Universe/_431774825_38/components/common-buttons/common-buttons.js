var e = require("../../utils/event.js");

Component({
    properties: {
        source: Number
    },
    methods: {
        tap: function() {
            this.eventStat();
            for (var e = getCurrentPages(), t = 0; t < e.length; t++) if ("pages/index/index" == e[t].route) return void wx.navigateBack({
                delta: e.length - t
            });
            wx.reLaunch({
                url: "/pages/index/index"
            });
        },
        eventStat: function() {
            var t = this.data.source, a = wx.getStorageSync("user_Id"), i = {
                0: "searchPageHasResultTapHome",
                1: "subjectDetailToMain",
                2: "baikeMorePageToMain",
                3: "subjectDetailToMain",
                4: "baikePageToMain",
                5: "imageDetailToMain",
                6: "ipHomeDetailToMain"
            }[t];
            i && e.mtaEvent(i, a);
        }
    }
});