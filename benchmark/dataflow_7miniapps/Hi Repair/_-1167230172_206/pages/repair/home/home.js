var e = require("../../../comm/script/config"), t = require("../../../comm/script/fetch"), o = (require("../../../util/util"), 
getApp());

Page({
    data: {
        navBarHeight: o.globalData.navBarHeight,
        lat: "",
        lng: "",
        meta: null,
        viewCom: null,
        paddingTop: 0,
        scrollHeight: 0,
        triggered: !1,
        showBone: !0,
        isShowKf: !1,
        isShowModal: !1,
        city: "",
        modalInfo: null,
        showRef: !1,
        isShowNotFound: !1,
        showModal: !1,
        showCoformModel: !1,
        contact: null,
        tc_bg: "",
        ani: null,
        showLuck: !0
    },
    closeRef: function() {
        var e = wx.createAnimation({
            duration: 300,
            timingFunction: "ease",
            delay: 100
        });
        e.rotateX(90).step(), this.setData({
            ani: e.export()
        });
        var t = wx.createAnimation({
            duration: 200,
            timingFunction: "ease",
            delay: 400
        });
        t.opacity(0).step(), this.setData({
            ani3: t.export()
        }), setTimeout(function() {
            this.setData({
                showRef: !1
            }), console.log(this.selectComponent("#swiperbanner")), this.selectComponent("#swiperbanner").setData({
                current: 0
            });
        }.bind(this), 600);
    },
    onLoad: function(e) {
        var t = this;
        wx.getSystemInfo({
            success: function(e) {
                console.log(e);
            }
        }), o.globalData.ref || (o.globalData.ref = e.ref), this.imageAnimation = wx.createAnimation({
            duration: 300
        }), setTimeout(function() {
            t.imageAnimation.translateX(0).step(), t.setData({
                imageAnimation: t.imageAnimation.export(),
                isShowNotFound: !0
            });
        }, 1e4), this.checkLogin(), this.getHwxDeviceInfo(), this.getHomeView(!1);
    },
    onReady: function(e) {
        var t = this;
        wx.getLocation({
            type: "wgs84",
            success: function(e) {
                var o = e.latitude, n = e.longitude;
                wx.setStorageSync("latlng", JSON.stringify({
                    lat: e.latitude,
                    lng: e.longitude
                })), t.setData({
                    lat: o,
                    lng: n
                });
                var i = o + "," + n;
                wx.setStorage({
                    key: "LATLNG",
                    data: i
                });
            },
            fail: function() {
                console.log("用户拒绝");
            },
            complete: function() {
                console.log("接口调用结束");
            }
        });
    },
    onShow: function() {
        this.data.showBone || this.calculateFixedHeight();
    },
    getHomeView: function() {
        var e = this, n = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        wx.showLoading({
            title: "加载中..."
        });
        var i = o.globalData.wxDeviceInfo, a = {
            mould_name: i.model,
            lng: this.data.lng,
            lat: this.data.lat,
            city_name: ""
        };
        t.getHomeView(a, function(t) {
            e.setData({
                meta: t.meta.theme ? t.meta.theme.background : "",
                viewCom: t.view,
                showBone: !1,
                contact: t.meta.contact
            }, function() {
                n || e.setData({
                    showRef: !0
                }), e.calculateFixedHeight(), wx.stopPullDownRefresh(), wx.hideLoading();
            });
        }, function(e) {
            wx.stopPullDownRefresh(), wx.hideLoading();
        });
    },
    calculateFixedHeight: function() {
        var e = this;
        setTimeout(function() {
            wx.createSelectorQuery().select(".homeContainer").boundingClientRect(function(t) {
                wx.createSelectorQuery().select(".fixed").boundingClientRect(function(o) {
                    console.log("res.height--==="), console.log(t.height), e.setData({
                        scrollHeight: t.height - o.height
                    });
                }).exec();
            }).exec();
        }, 30);
    },
    toTop: function() {
        wx.startPullDownRefresh(), setTimeout(function() {
            wx.stopPullDownRefresh();
        }, 2e3);
    },
    onRefresh: function() {
        var e = this;
        this._freshing || (this._freshing = !0, setTimeout(function() {
            e.setData({
                triggered: !1
            }), e._freshing = !1;
        }, 3e3));
    },
    onPullDownRefresh: function() {
        console.log(1111), this.getHomeView();
    },
    goSearch: function() {
        wx.navigateTo({
            url: "../searchDevice/searchDevice"
        });
    },
    makePhoncall: function() {
        wx.makePhoneCall({
            phoneNumber: "4000171010"
        });
    },
    getHwxDeviceInfo: function() {
        var e, n, i, a, s = this, c = o.globalData.wxDeviceInfo;
        e = c.brand, n = c.model, a = "", "unknown" == (i = o.handleModel(e, n)) && (a = n.match(/<(\S*)>/)[1]), 
        t.getMouldMine({
            mould_name: encodeURIComponent(i),
            brands: e,
            device_name: a
        }, function(e) {
            o.setHiDeviceInfo(e), s.setSelectedDeviceInfo();
        }, function(e) {});
    },
    setSelectedDeviceInfo: function() {
        try {
            wx.setStorageSync(e.storageKeys.selectedDevice, o.globalData.hwxDeviceInfo);
        } catch (e) {}
    },
    checkLogin: function() {
        var e = this, n = o.globalData.hwxUserInfo.phone, i = o.globalData.hwxUserInfo.token;
        n && i && t.getIsLogin(i, function(t) {
            "1" == t.is_login ? e.setData({
                isLogin: !0
            }) : e.setData({
                isLogin: !1
            });
        }, function(t) {
            console.log("err6666"), console.log(t), e.setData({
                isLogin: !1
            });
        });
    },
    showKf: function() {
        this.setData({
            isShowKf: !this.data.isShowKf
        });
    },
    showPreview: function() {
        7 == this.data.contact.csr_route_type && wx.previewImage({
            current: this.data.contact.csr_modal_background,
            urls: [ this.data.contact.csr_modal_background ]
        });
    },
    hideModal: function() {
        this.setData({
            isShowModal: !1
        });
    },
    goPage: function(e) {
        console.log(e.currentTarget.dataset.item);
        var t = e.currentTarget.dataset.item;
        1 == t.route_type ? wx.navigateTo({
            url: decodeURIComponent(t.url)
        }) : 3 == t.route_type ? wx.navigateToMiniProgram({
            appId: t.appid,
            path: t.url
        }) : 2 == t.route_type && wx.navigateTo({
            url: "../bannerWeb/bannerWeb?info=" + encodeURIComponent(t.url)
        });
    },
    showImage: function() {
        this.data.isShowNotFound ? this.imageAnimation.translateX("70%").step() : this.imageAnimation.translateX(0).step(), 
        this.setData({
            imageAnimation: this.imageAnimation.export(),
            isShowNotFound: !this.data.isShowNotFound,
            showCoformModel: !this.data.showCoformModel
        });
    },
    getPhoneNumberLogin: function(e) {
        var n = encodeURIComponent(e.detail.iv), i = encodeURIComponent(e.detail.encryptedData), a = this;
        wx.login({
            success: function(e) {
                wx.setStorageSync("CODE", e.code);
                wx.getStorageSync("CODE");
                "undefined" != i ? t.getWxLogin(encodeURIComponent(e.code), i, n, function(e) {
                    console.log(e), o.setHwxUserInfo(e.token, e.phone_number), a.setData({
                        isLogin: !0,
                        showCoformModel: !0
                    });
                }, function(e) {
                    console.log("err6666"), console.log(e), wx.showToast({
                        title: "授权之后才可以一键下单哦",
                        icon: "none",
                        duration: 1e3,
                        complete: function() {}
                    });
                }) : wx.navigateTo({
                    url: "../../personal/login/login"
                });
            },
            fail: function() {},
            complete: function() {}
        });
    },
    showPreviewGou: function() {
        console.log("showPreviewGou"), wx.previewImage({
            current: "https://image.hiweixiu.com/web-template/mfxtc.png",
            urls: [ "https://image.hiweixiu.com/web-template/mfxtc.png" ]
        });
    }
});