require("../../../comm/script/config");

var t = require("../../../comm/script/fetch");

require("../../../util/util"), getApp();

Page({
    data: {
        inputShowed: !1,
        latestSearchShow: !0,
        searchResultShow: !1,
        noResultShow: !1,
        haveResultShow: !1,
        resultList: "",
        searchData: [],
        word: "",
        word2: "",
        popularData: []
    },
    onLoad: function() {
        this.searchStorge(), this.getPopularData();
    },
    getPopularData: function() {
        var e = this;
        t.getRepairPopularSearch(function(t) {
            e.setData({
                popularData: t
            });
        }, function(t) {});
    },
    popularJump: function(t) {
        var e = t.currentTarget.dataset.url;
        wx.navigateTo({
            url: e
        });
    },
    onShareAppMessage: function(t) {
        return {
            title: "Hi维修手机上门维修回收平台",
            path: "/pages/repair/home/home",
            imageUrl: "https://pic.hiweixiu.com/hiweixiu-mobile/img/wxshare.png"
        };
    },
    showInput: function() {
        this.setData({
            inputShowed: !0
        });
    },
    hideInput: function() {
        this.setData({
            word: "",
            inputShowed: !1,
            latestSearchShow: !0,
            searchResultShow: !1
        }), this.searchStorge();
    },
    clearInput: function() {
        this.setData({
            word: "",
            latestSearchShow: !0,
            searchResultShow: !1
        }), this.searchStorge();
    },
    inputTyping: function(t) {
        this.searchRequest(t.detail.value);
    },
    searchInputAction: function(t) {
        this.data.word = t.detail.value, wx.showLoading({
            title: "正在搜索",
            mask: !0
        }), this.setSearchStorage(), this.searchRequest(t.detail.value);
    },
    searchRequest: function(e) {
        var a = this;
        t.getSearchDevice(e, function(t) {
            wx.hideLoading(), console.log(t);
            for (var r = [], o = 0; o < t.length; o++) {
                var s = t[o];
                s.searchArray = a.getHilightStrArray(t[o].MouldName, e.trim()), r.push(s);
            }
            a.setData({
                latestSearchShow: !1,
                searchResultShow: !0,
                noResultShow: !1,
                haveResultShow: !0,
                word2: e,
                resultList: r
            });
        }, function(t) {
            wx.hideLoading(), a.setData({
                latestSearchShow: !1,
                searchResultShow: !0,
                noResultShow: !0,
                haveResultShow: !1,
                resultList: ""
            });
        });
    },
    getHilightStrArray: function(t, e) {
        var a = e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
        return console.log(a), t.replace(new RegExp("".concat(a), "ig"), "%%".concat(e, "%%")).split("%%");
    },
    setSearchStorage: function() {
        if ("" != this.data.word) {
            var t = wx.getStorageSync("searchData") || [];
            t.push(this.data.word), wx.setStorageSync("searchData", t);
        }
    },
    searchLatest: function(t) {
        console.log(t);
        var e = t.currentTarget.dataset.latestword;
        this.setData({
            word: e,
            inputShowed: !0
        }), this.searchRequest(e);
    },
    historyDelate: function() {
        wx.removeStorageSync("searchData"), this.setData({
            searchData: []
        });
    },
    goToDevice: function(t) {
        var e = JSON.stringify(t.currentTarget.dataset);
        wx.navigateTo({
            url: "../faultDetail/faultDetail?info=" + e
        });
    },
    searchStorge: function() {
        var t = wx.getStorageSync("searchData");
        console.log(wx.getStorageSync("searchData")), "" != t && this.setData({
            searchData: t.reverse()
        });
    }
});