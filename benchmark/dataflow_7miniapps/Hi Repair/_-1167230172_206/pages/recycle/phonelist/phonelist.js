var e = require("../../../comm/script/fetch");

require("../../../comm/script/config"), getApp();

Page({
    data: {
        seriesData: [],
        brandData: [],
        modelData: [],
        seriesSelectedIndex: 0,
        scrollViewHeight: "",
        brandSelectedIndex: 0
    },
    onLoad: function(e) {
        var t = this;
        wx.createSelectorQuery().select(".search_container").boundingClientRect(function(e) {
            wx.createSelectorQuery().select(".series_wrap").boundingClientRect(function(a) {
                t.setData({
                    scrollViewHeight: wx.getSystemInfoSync().windowHeight - e.height - a.height + "px"
                });
            }).exec();
        }).exec(), this.getRecycleModelList();
    },
    getRecycleModelList: function() {
        var t = this;
        wx.showLoading({
            title: "加载中..."
        }), e.getRecycleModelList(function(e) {
            console.log(e), t.setData({
                seriesData: e,
                brandData: e[0].brand_info,
                modelData: e[0].brand_info[0].mould_info
            }), wx.hideLoading();
        }, function(e) {
            wx.hideLoading();
        });
    },
    onPullDownRefresh: function() {},
    selectSeries: function(e) {
        var t = e.currentTarget.dataset.index;
        this.setData({
            seriesSelectedIndex: t,
            brandData: this.data.seriesData[t].brand_info,
            modelData: this.data.seriesData[t].brand_info[0].mould_info,
            brandSelectedIndex: 0
        });
    },
    selectBrand: function(e) {
        var t = e.currentTarget.dataset.index;
        this.setData({
            brandSelectedIndex: t,
            modelData: this.data.brandData[t].mould_info
        });
    },
    goSearch: function() {
        wx.navigateTo({
            url: "../searchmodel/searchmodel"
        });
    },
    goGujia: function(e) {
        var t = e.currentTarget.dataset.mid, a = e.currentTarget.dataset.name;
        wx.navigateTo({
            url: "../faultprice/faultprice?mid=" + t + "&name=" + a
        });
    }
});