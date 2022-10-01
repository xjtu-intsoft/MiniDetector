Page({
    data: {
        estimateResult: null,
        titleIndex: 0,
        scrollViewHeight: 0,
        currentEstimate: null
    },
    onLoad: function(t) {
        var e;
        e = 0 == this.data.titleIndex ? JSON.parse(t.result).user_estimate_detail : JSON.parse(t.result).user_engineer_estimate_diff, 
        this.setData({
            estimateResult: JSON.parse(t.result),
            currentEstimate: e
        });
        var s = this;
        wx.createSelectorQuery().select(".title").boundingClientRect(function(t) {
            s.setData({
                scrollViewHeight: wx.getSystemInfoSync().windowHeight - t.height + "px"
            });
        }).exec();
    },
    chooseTab: function(t) {
        var e, s = t.currentTarget.dataset.index;
        s != this.data.titleIndex && (e = 0 == s ? this.data.estimateResult.user_estimate_detail : this.data.estimateResult.user_engineer_estimate_diff, 
        this.setData({
            titleIndex: s,
            currentEstimate: e
        }), console.log(this.data.currentEstimate));
    }
});