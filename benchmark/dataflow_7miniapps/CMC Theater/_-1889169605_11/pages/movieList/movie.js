var a = require("./../../config/httpHtlper.js");

Page({
    data: {
        movie_page_num: 1,
        movie_page_num_comming: 1,
        loadMore: getApp().globalData.load_more,
        movie_data: [],
        advert_data: [],
        movie_data_comming: [],
        isHot: !0,
        isComing: !1,
        isHideLoadMore: !0,
        hotColor: "black",
        commingColor: "black",
        is_show_trailer: "0"
    },
    mvoie_detail: function(a) {
        var t = a.target.dataset.id;
        console.log("movie_id = " + t.movie_id), t && t.movie_id && wx.navigateTo({
            url: "/moviePages/pages/detail/movieDetails?id=" + t.movie_id + "&sell_status=" + t.sell_status
        });
    },
    hotClick: function() {
        console.log("isHot = " + this.data.isHot);
        {
            if (!this.data.isHot) return this.data.isComing ? (console.log("====================="), 
            void this.setData({
                isHot: !0,
                isComing: !1
            })) : void 0;
            this.data.isComing = !1;
        }
    },
    comingClick: function() {
        var t = this;
        if (this.data.isComing) this.data.isHot = !1; else if (this.data.isHot && this.data.movie_data_comming.length > 0) this.setData({
            isHot: !1,
            isComing: !0
        }); else {
            var e = this.data.isComing, o = this;
            a.movieComingList("1").then(function(a) {
                if (a.data.status = 1) {
                    var i = o.setMoviesComingData(a.data.data.movie_data), s = a.data.data.is_show_trailer;
                    t.setData({
                        isHot: !1,
                        isComing: !e,
                        movie_data_comming: i,
                        is_show_trailer: s
                    }), i && 0 == i.length && wx.showToast({
                        title: "暂无即将上映的影片",
                        icon: "none"
                    });
                }
            });
        }
    },
    goToSeat: function(a) {
        console.log(a);
        var t = a.target.dataset.id;
        console.log("id = " + t), t && (getApp().globalData.willShowMovieId = t, getApp().globalData.mainNeedRefush = !1, 
        wx.switchTab({
            url: "/pages/home/cinema/cinema"
        }));
    },
    onLoad: function(a) {
        getApp().isIos8() || getApp().isChoseCity("movielist") && getApp().isChoseCinema("movielist") && this.getData();
    },
    onShow: function() {
        getApp().globalData.isCinemaChange && (this.setData({
            advert_data: [],
            isHot: !0,
            isComing: !1,
            movie_data_comming: []
        }), this.getData(), getApp().globalData.isCinemaChange = !1);
        var t = getApp().getCinema().id;
        if (t) {
            var e = this;
            a.advertList(t, "1").then(function(a) {
                console.log(a), 1 == a.data.status && e.setData({
                    advert_data: a.data.data,
                    currentSwiper: 0
                });
            });
        }
    },
    getData: function() {
        var t = this;
        a.movieOnList("1").then(function(a) {
            if (console.log(a), 1 == a.data.status) {
                for (var e = a.data.data.is_show_trailer, o = 0; o < a.data.data.movie_data.length; o++) {
                    var i = a.data.data.movie_data[o], s = i.movie_abstract;
                    s && (s = (s = (s = s.replace(/(^\s+)|(\s+$)/g, "")).replace(/\r\n/g, "")).replace(/\n/g, ""), 
                    i.movie_abstract = s);
                }
                t.setData({
                    movie_data: a.data.data.movie_data,
                    is_show_trailer: e
                });
            }
            wx.stopPullDownRefresh({
                complete: function() {
                    console.log("==================================stopPullDownRefresh");
                }
            });
        });
    },
    selectCinema: function(a) {
        console.log("影院"), wx.navigateTo({
            url: "/pages/home/cinemaList/cinemaList?type=shouldback"
        });
    },
    imageClick: function(a) {
        var t = a.target.dataset.index, e = this.data.advert_data, o = e[t], i = o.jump_type;
        if (console.log("jump_type = " + i), "" != i) {
            if (!getApp().userIsLogin()) return void wx.navigateTo({
                url: "/pages/login/wxLogin/wxLogin"
            });
            if (1 == i) return void wx.navigateTo({
                url: "/pages/card/bind/bindCard?isFromAdvert=true"
            });
            if (2 == i) return void wx.navigateTo({
                url: "/pages/card/cardlist/cardList"
            });
            if (10 == i) {
                var s = o.target_id;
                return void wx.navigateTo({
                    url: "/pages/find/findShopCouponPackageDetail/findShopCouponPackageDetail?coupon_package_id=" + s
                });
            }
        }
        var n = e[t].advert_url;
        n ? (console.log("地址：" + n), n = encodeURIComponent(n), wx.navigateTo({
            url: "/pages/find/promotionDetial/promotionDetial?promotion_url=" + n
        })) : console.log("地址为空不跳转");
    },
    imageError: function(a) {
        console.log(a);
        var t = a.target.dataset.index, e = this.data.advert_data;
        e[t].error = !0, this.setData({
            advert_data: e
        });
    },
    onPullDownRefresh: function() {
        console.log("onPullDownRefresh", new Date());
        t = this;
        if (this.data.isHot) this.data.movie_page_num = 1, this.getData(); else if (this.data.isComing) {
            this.data.movie_page_num_comming = 1;
            var t = this;
            a.movieComingList(this.data.movie_page_num_comming + "").then(function(a) {
                if (1 == a.data.status) {
                    var e = a.data.data.is_show_trailer, o = t.setMoviesComingData(a.data.data.movie_data);
                    t.setData({
                        movie_data_comming: o,
                        is_show_trailer: e
                    });
                }
            }).then(function(a) {
                wx.stopPullDownRefresh();
            });
        }
    },
    stopPullDownRefresh: function() {
        wx.stopPullDownRefresh({
            complete: function(a) {
                wx.hideToast(), console.log(a, new Date());
            }
        });
    },
    onReachBottom: function() {
        console.log("---加载更多----");
        var t = this, e = [];
        this.data.isHot ? (this.data.movie_page_num += 1, a.movieOnList(this.data.movie_page_num + "").then(function(a) {
            if (console.log(a), console.log("=isHot=" + t.data.isHot), a.data.data.movie_data.length > 0) {
                var o = a.data.data.is_show_trailer;
                e = t.data.movie_data;
                for (var i = 0; i < a.data.data.movie_data.length; i++) {
                    var s = a.data.data.movie_data[i], n = s.movie_abstract;
                    n && (n = (n = (n = n.replace(/(^\s+)|(\s+$)/g, "")).replace(/\r\n/g, "")).replace(/\n/g, ""), 
                    s.movie_abstract = n), e.push(s);
                }
                t.setData({
                    movie_data: e,
                    is_show_trailer: o
                }), console.log("== all movie_data size = " + t.data.movie_data.length);
            } else wx.showToast({
                icon: "none",
                title: "没有更多数据"
            }), t.setData({
                isHideLoadMore: !0
            });
        })) : this.data.isComing && (this.data.movie_page_num_comming += 1, a.movieComingList(this.data.movie_page_num_comming + "").then(function(a) {
            if (console.log("res", a), 1 == a.data.status) {
                console.log("=isComing=" + t.data.isComing);
                var o = a.data.data.is_show_trailer;
                if (e = t.data.movie_data_comming, a.data.data.movie_data.length > 0) {
                    for (var i = 0; i < a.data.data.movie_data.length; i++) e.push(a.data.data.movie_data[i]);
                    var s = t.setMoviesComingData(e);
                    t.setData({
                        movie_data_comming: s,
                        is_show_trailer: o
                    }), console.log("==all  movie_data_comming size = " + t.data.movie_data_comming.length);
                } else wx.showToast({
                    icon: "none",
                    title: "没有更多数据"
                }), t.setData({
                    isHideLoadMore: !0
                });
            } else t.setData({
                isHideLoadMore: !0
            });
        }));
    },
    setMoviesComingData: function(a) {
        var t = "", e = a;
        if (e && e.length > 0) for (var o = 0; o < e.length; o++) {
            var i = e[o];
            i.movie_show_date1 = i.movie_show_date + " " + i.movie_show_week;
            var s = i.movie_abstract;
            s && (s = (s = (s = s.replace(/(^\s+)|(\s+$)/g, "")).replace(/\r\n/g, "")).replace(/\n/g, ""), 
            i.movie_abstract = s), 0 == o ? (t = i.movie_show_date, i.show_line = !0) : t == i.movie_show_date ? (i.movie_show_date1 = "", 
            i.show_line = !0) : (e[o - 1].show_line = !1, t = i.movie_show_date, i.show_line = !0), 
            console.log("movie_show_date = " + i.movie_show_date);
        }
        return e;
    },
    compareDate: function(a) {
        return " 星期" + "日一二三四五六".charAt(new Date(a).getDay());
    },
    onShareAppMessage: function() {
        return {
            path: "/pages/movieList/movie?type=movielist"
        };
    }
});