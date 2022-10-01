var o = require("../../../comm/script/fetch");

require("../../../comm/script/config");

Page({
    data: {
        QAList: []
    },
    onLoad: function(o) {
        this.getQA();
    },
    getQA: function() {
        var e = this;
        wx.showLoading(), o.getQuestionAndAnswer(function(o) {
            console.log("res++++"), console.log(o), e.setData({
                QAList: o
            }), wx.hideLoading();
        }, function(o) {
            console.log("err"), console.log(o), wx.hideLoading();
        });
    }
});