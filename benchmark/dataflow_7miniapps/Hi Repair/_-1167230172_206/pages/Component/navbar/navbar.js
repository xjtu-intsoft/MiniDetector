require("../../../util/util"), require("../../../comm/script/fetch"), require("../../../comm/script/config");

var t = getApp();

Component({
    data: {
        statusBarHeight: t.globalData.statusBarHeight
    },
    properties: {
        bgcolor: String
    }
});