var e = getApp();

require("../../../7931C4950691379C1F57AC929AD2E9B3.js");

Page({
    data: {
        anonymous: e.source.anonymous,
        whitePaper1: e.source.whitePaper1,
        whitePaper2: e.source.whitePaper2,
        whitePaper3: e.source.whitePaper3,
        wp1: e.source.wp1,
        wp2: e.source.wp2,
        wp3: e.source.wp3,
        wp4: e.source.wp4,
        wp5: e.source.wp5
    },
    onLoad: function(r) {
        this.setData({
            mycard: e.mycard
        });
    },
    ss: function() {},
    send: function() {
        e.burying.setPoint(e, 508);
    },
    toBuildCardd: function() {
        wx.navigateTo({
            url: "/pages/mainPage/cardMain/cardFormBuild/cardFormBuild?butt=build&main=whitePaper&id=none"
        });
    }
});