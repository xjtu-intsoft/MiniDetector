var e = require("../../../comm/script/fetch"), t = (require("../../../comm/script/config"), 
getApp());

Page({
    data: {
        navBarHeight: t.globalData.navBarHeight,
        deviceInfo: null,
        hotRecycleData: [],
        myModelName: "",
        nearbyRepaircenter: null,
        isGlocation: !1,
        autoplay: !0,
        interval: 7e3,
        duration: 500,
        active_color: "#ffffff",
        bannerData: [],
        isShowModal: !1,
        isShowKf: !1,
        contact: {
            tel: "4000171010",
            csr_qr: "https://image.hiweixiu.com/web-template/csr_qr%403x.png",
            csr_route_type: 5,
            csr_url: "d7145f012b862b4ddad56b075199b93a",
            csr_modal_bgType: 1,
            csr_modal_background: "https://image.hiweixiu.com/web-template/home_csr_background.png"
        },
        scrollHeight: "",
        item: {
            description: "首页活动模块，左 1 右 2",
            type: "page:home:module:activities_l1r2:v1",
            meta: {
                title: "Hi维修-手机维修回收丨苹果官方IRP合作服务商",
                theme: {
                    bgType: 0,
                    background: "#F8F8F8"
                }
            },
            items: [ {
                title: "苹果原厂配件官网可查",
                src: "https://pic.hiweixiu.com/images/miniprogram/weapp/recycle/index/acl1.png",
                route_type: 7,
                url: "/pages/appleRepair/fault/fault",
                bg: "https://image.hiweixiu.com/web-template/recy/home/huishou-shen%403x.png",
                extra: {
                    app_id: "gh_39e49190b8a1"
                }
            }, {
                title: "领券中心",
                src: "https://pic.hiweixiu.com/images/miniprogram/weapp/recycle/index/acr1.png",
                route_type: 1,
                url: "/pages/repair/fulishe/fulishe?index=2"
            }, {
                title: "二手优品",
                src: "https://pic.hiweixiu.com/images/miniprogram/weapp/recycle/index/acr2.png",
                route_type: 3,
                url: "/pages/repair/chooseDevice/chooseDevice?id=15"
            } ]
        },
        modalData: null,
        iconData: [ {
            src: "../../../img/wx_recycle/home/msj.png",
            text: "卖手机"
        }, {
            src: "../../../img/wx_recycle/home/msj.png",
            text: "卖平板"
        }, {
            src: "../../../img/wx_recycle/home/msj.png",
            text: "卖笔记本"
        }, {
            src: "../../../img/wx_recycle/home/msj.png",
            text: "卖耳机"
        }, {
            src: "../../../img/wx_recycle/home/msj.png",
            text: "卖手表"
        } ]
    },
    onLoad: function(a) {
        var n = this;
        wx.showLoading({
            title: "加载中..."
        }), wx.showNavigationBarLoading();
        var i, o, r, c = t.globalData.wxDeviceInfo;
        console.log("deviceInfo____"), console.log(c), i = c.brand, o = c.model, r = t.handleModel(i, o), 
        console.log("newModel++++++"), console.log(r), "unknown" == r && o.match(/<(\S*)>/)[1], 
        this.setData({
            myModelName: r
        }), this.getMyDevicePrice(r), this.getHotRecycle();
        var l = this;
        wx.getLocation({
            type: "wgs84",
            success: function(e) {
                var t = e.latitude, a = {
                    lng: e.longitude,
                    lat: t
                };
                l.setData({
                    isGlocation: !0
                }), l.getRepairCenter(a);
            },
            fail: function(e) {
                l.setData({
                    isGlocation: !1
                }), l.getRepairCenter({
                    lng: 121.457189,
                    lat: 31.243703
                });
            }
        }), e.getRecycleBanner(function(e) {
            n.setData({
                bannerData: e
            });
        }, function(e) {}), e.getRecycleModal(function(e) {
            e.length > 0 && n.setData({
                modalData: e[0],
                isShowModal: !0
            }), console.log(e);
        }, function(e) {}), wx.createSelectorQuery().select(".homeContainer").boundingClientRect(function(e) {
            wx.createSelectorQuery().select(".fixed").boundingClientRect(function(t) {
                console.log("res.height--==="), console.log(e.height), l.setData({
                    scrollHeight: e.height - t.height
                });
            }).exec();
        }).exec();
    },
    showKf: function() {
        this.setData({
            isShowKf: !this.data.isShowKf
        });
    },
    goPage: function() {
        1 == this.data.modalData.link_type ? wx.navigateTo({
            url: this.data.modalData.link_url
        }) : 3 == this.data.modalData.link_type ? wx.navigateToMiniProgram({
            appId: this.data.modalData.appid,
            path: this.data.modalData.link_url
        }) : 2 == this.data.modalData.link_type && wx.navigateTo({
            url: "../bannerWeb/bannerWeb?info=" + encodeURIComponent(this.data.modalData.link_url)
        });
    },
    showPreview: function() {
        wx.previewImage({
            current: "https://image.hiweixiu.com/web-template/recy/home/huishou-shen%403x.png",
            urls: [ "https://image.hiweixiu.com/web-template/recy/home/huishou-shen%403x.png" ]
        });
    },
    makePhoncall: function() {
        wx.makePhoneCall({
            phoneNumber: "4000171010"
        });
    },
    startmessage: function(e) {
        wx.showLoading();
        var t = getCurrentPages(), a = t[t.length - 1], n = t[t.length - 2];
        console.log(a, n), console.log(e.currentTarget), console.log(e.currentTarget.dataset.url), 
        a.setData({
            tc_bg: e.currentTarget.dataset.url
        }), getApp().mtj.trackEvent("recycling_service", {
            name: e.currentTarget.dataset.name
        });
    },
    completemessage: function(e) {
        console.log(e.detail.errcode), wx.hideLoading();
        var t = getCurrentPages(), a = t[t.length - 1];
        0 == e.detail.errcode ? a.setData({
            isShowModal: !0
        }) : -3002 == e.detail.errcode ? wx.showToast({
            title: "获取插件配置信息失败",
            icon: "none",
            duration: 2e3
        }) : -3004 == e.detail.errcode ? wx.showToast({
            title: "用户授权失败",
            icon: "none",
            duration: 2e3
        }) : -3005 == e.detail.errcode ? wx.showToast({
            title: "客服消息发送失败",
            icon: "none",
            duration: 2e3
        }) : -3006 == e.detail.errcode ? wx.showToast({
            title: "已经是好友关系啦",
            icon: "none",
            duration: 2e3
        }) : -3008 == e.detail.errcode && wx.showToast({
            title: "当前配置没有客服人员",
            icon: "none",
            duration: 2e3
        });
    },
    hideModal: function() {
        this.setData({
            isShowModal: !1
        });
    },
    getRepairCenter: function(t) {
        var a = this;
        e.getNearbyRepaircenter(t, function(e) {
            e.distance < 100 && e.distance ? e.nearDistance = e.distance.toFixed(1) + "米" : e.nearDistance = (e.distance / 1e3).toFixed(1) + "公里", 
            a.setData({
                nearbyRepaircenter: e
            });
        }, function(e) {
            console.log("err"), console.log(e);
        });
    },
    getHotRecycle: function() {
        var t = this;
        e.getHotRecycle(function(e) {
            t.setData({
                hotRecycleData: e
            });
        });
    },
    getMyDevicePrice: function(t) {
        var a = this, n = {
            model_name: t
        };
        e.getMyDevicePrice(n, function(e) {
            a.setData({
                deviceInfo: e
            }), wx.hideLoading(), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
        }, function(e) {
            console.log("err"), console.log(e), a.setData({
                deviceInfo: null
            }), wx.hideLoading(), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
        });
    },
    onPullDownRefresh: function() {
        wx.showNavigationBarLoading(), this.getMyDevicePrice(this.data.myModelName);
    },
    changeModel: function() {
        wx.navigateTo({
            url: "../phonelist/phonelist"
        });
    },
    getPrice: function(e) {
        var t = e.currentTarget.dataset.mid, a = e.currentTarget.dataset.name;
        getApp().mtj.trackEvent("recycling_machine", {
            select_model: a
        }), wx.navigateTo({
            url: "../faultprice/faultprice?mid=" + t + "&name=" + a
        });
    },
    goNavTab: function(e) {
        getApp().mtj.trackEvent("recycling_equipment"), wx.navigateTo({
            url: e.currentTarget.dataset.set
        });
    },
    goTab: function(e) {
        wx.switchTab({
            url: e.currentTarget.dataset.set
        });
    },
    openLocation: function(e) {
        wx.openLocation({
            latitude: Number(e.currentTarget.dataset.lat),
            longitude: Number(e.currentTarget.dataset.lng),
            scale: 18
        });
    },
    goOtherRepaircenter: function() {
        wx.navigateTo({
            url: "../../storeAddress/storeAddress"
        });
    },
    goGujia: function(e) {
        var t = e.currentTarget.dataset.mid, a = e.currentTarget.dataset.name;
        wx.navigateTo({
            url: "../faultprice/faultprice?mid=" + t + "&name=" + a
        });
    },
    goSearchPage: function() {
        getApp().mtj.trackEvent("recycling_serch", {
            select_model: ""
        }), wx.navigateTo({
            url: "../searchmodel/searchmodel"
        });
    },
    bannerJump: function(e) {
        var t = e.target.dataset;
        getApp().mtj.trackEvent("recycling_banner"), "" != t.jump && ("https://api.hiweixiu.com/era/v1/test/test" == t.jump ? wx.navigateToMiniProgram({
            appId: "wx05173ac0eee13384",
            path: "pages/home/feature/index?alias=Syc7OVQHlR",
            extraData: {
                foo: "bar"
            },
            success: function(e) {}
        }) : "hiyouxuan" == t.jump ? wx.navigateToMiniProgram({
            appId: "wx05173ac0eee13384",
            path: "pages/common/blank-page/index?weappSharePath=pages/home/dashboard/index?kdt_id=40983300",
            extraData: {
                foo: "bar"
            },
            success: function(e) {}
        }) : t.jump.match(/(\/)?pages\//).length > 0 ? wx.navigateTo({
            url: t.jump
        }) : wx.navigateTo({
            url: "../bannerWeb/bannerWeb?info=" + encodeURIComponent(t.jump)
        }));
    }
});