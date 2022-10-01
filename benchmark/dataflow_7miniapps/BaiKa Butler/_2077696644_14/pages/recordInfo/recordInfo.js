function t(t) {
    var e = new Object(), o = t.data.cardInfo.cardId;
    e.cardId = o, e.statu = t.data.stateData[t.data.stateIndex].flag, a(t, e);
}

function a(t, a) {
    e.showLoading(), wx.request({
        url: getApp().globalData.urlHost + "business/showCostAndRepaymentBillDate.do",
        data: o.addBaseRequest(a),
        method: getApp().globalData.requestType,
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(a) {
            e.dismissLoading();
            var o = e.transformSuccessData(a);
            if (s.checkResultCode(o)) {
                var n = o.resultBody;
                t.setData({
                    record: n
                });
            }
        },
        fail: function(t) {
            e.dismissLoading(), e.showNetError();
        },
        complete: function(t) {}
    });
}

Page({
    data: {
        cardInfo: {},
        recordData: {},
        stateData: [ {
            name: "成功",
            flag: 1
        }, {
            name: "失败",
            flag: 2
        } ],
        stateIndex: 0,
        showChoseState: !1,
        record: []
    },
    onLoad: function(t) {
        var a = decodeURIComponent(t.data);
        this.setData({
            cardInfo: JSON.parse(a)
        });
    },
    onShow: function() {
        t(this);
    },
    onHiddenStateOption: function(a) {
        var e = a.currentTarget.dataset.position;
        this.setData({
            stateIndex: e,
            showChoseState: !1
        }), t(this);
    },
    onSwitchState: function(t) {
        var a = this.data.showChoseState;
        this.setData({
            showChoseState: !a
        });
    },
    onClickItem: function(t) {
        var a = t.currentTarget.dataset.position, e = this.data.record[a], o = this.data.cardInfo.cardId, s = this.data.stateIndex;
        wx.navigateTo({
            url: "../recordMonthInfo/recordMonthInfo?data=" + encodeURIComponent(JSON.stringify(e)) + "&cardId=" + o + "&stateIndex=" + s
        });
    },
    onShareAppMessage: function() {
        return e.getShareInfo();
    }
});

var e = require("../../utils/util.js"), o = (require("../../utils/bankUtil.js"), 
require("../../utils/requestUtil.js")), s = require("../../utils/resultCodeUtil.js");