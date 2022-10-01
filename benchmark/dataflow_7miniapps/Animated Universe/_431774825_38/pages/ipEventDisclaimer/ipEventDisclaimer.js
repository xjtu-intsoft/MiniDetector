var e = require("../../utils/event.js");

Page({
    onUnload: function() {
        e.mtaEvent("ipHomeLotteryPageReturn");
    }
});