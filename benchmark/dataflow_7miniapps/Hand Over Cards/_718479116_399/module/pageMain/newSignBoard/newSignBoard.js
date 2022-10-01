require("../../../7931C4950691379C1F57AC929AD2E9B3.js");

var e = getApp();

Component({
    options: {
        multipleSlots: !0
    },
    properties: {
        sentenceData: {
            type: Object,
            value: {}
        },
        mainshowTopTip: Boolean
    },
    data: {
        systemInfo: e.systemInfo,
        sentences: {
            day: "",
            week: "",
            month: "",
            year: "",
            sentence: ""
        }
    },
    methods: {
        _signTodayBac: function() {
            e.burying.setPoint(e, 622), this.triggerEvent("showStZheZhao");
        },
        _signToday: function() {
            e.burying.setPoint(e, 621), this.triggerEvent("showStZheZhao");
        }
    }
});