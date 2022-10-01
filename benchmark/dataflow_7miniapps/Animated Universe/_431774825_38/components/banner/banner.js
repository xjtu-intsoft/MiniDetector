var e = require("../../utils/util.js"), a = require("../../utils/event.js");

Component({
    properties: {
        item: Object
    },
    data: {
        hiddenSearch: !0
    },
    methods: {
        switchBanner: function() {
            this.setData({
                hiddenSearch: !this.data.hiddenSearch
            });
        },
        goSearchPage: function() {
            wx.navigateTo({
                url: "/pages/searchPage/searchPage"
            });
            var t = e.pageFun.calPageName();
            t.indexOf("index") ? a.mtaEvent("indexPageSearchIcon") : t.indexOf("dtyz") && a.mtaEvent("dtyzPageSearchIcon");
        }
    }
});