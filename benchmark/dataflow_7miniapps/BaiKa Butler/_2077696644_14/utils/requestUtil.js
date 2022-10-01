function e(e) {
    return e.appType = getApp().globalData.appType, e.version = "2.0", e.userSessionId = getApp().globalData.userSessionId, 
    getApp().globalData.oaccType && (e.oaccType = getApp().globalData.oaccType), e;
}

module.exports = {
    getBaseRequest: function() {
        var t = new Object();
        JSON.stringify(e(t));
        return {
            jsonData: JSON.stringify(e(t))
        };
    },
    addBaseRequest: function(t) {
        return console.log("add BaseRequest: " + JSON.stringify(e(t))), {
            jsonData: JSON.stringify(e(t))
        };
    }
};