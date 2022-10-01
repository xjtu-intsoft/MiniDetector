var e = require("../../../comm/script/fetch");

require("../../../comm/script/config"), getApp();

Page({
    data: {
        searchModel: "",
        searchResult: null,
        showSearchResult: !1,
        scrollViewHeight: ""
    },
    onLoad: function(e) {
        var t = this;
        wx.createSelectorQuery().select(".search_container").boundingClientRect(function(e) {
            t.setData({
                scrollViewHeight: wx.getSystemInfoSync().windowHeight - e.height + "px"
            });
        }).exec();
    },
    onReady: function() {},
    onShow: function() {},
    confirmSearch: function(e) {
        wx.showToast({
            title: "加载中...",
            image: "../../../img/wx_recycle/loadingfault.gif"
        }), this.searchInputModel(e.detail.value);
    },
    searchValue: function(e) {
        wx.showToast({
            title: "加载中...",
            image: "../../../img/wx_recycle/loadingfault.gif"
        }), this.setData({
            searchModel: e.currentTarget.dataset.search
        }), this.searchInputModel(e.currentTarget.dataset.search);
    },
    searchInputModel: function(t) {
        var a = this, c = {
            word: t
        };
        e.searchModel(c, function(e) {
            console.log(e), a.setData({
                showSearchResult: !0,
                searchResult: e
            }), wx.hideToast();
        }, function(e) {
            console.log(e), a.setData({
                showSearchResult: !0,
                searchResult: []
            }), wx.hideToast();
        });
    },
    clearSearch: function() {
        this.setData({
            searchModel: "",
            showSearchResult: !1
        });
    },
    cancelSearch: function() {
        wx.navigateBack();
    },
    goPage: function() {
        wx.switchTab({
            url: "../home/home"
        });
    },
    goGujia: function(e) {
        wx.navigateTo({
            url: "../faultprice/faultprice?mid=" + e.currentTarget.dataset.mid + "&name=" + e.currentTarget.dataset.name
        });
    }
});