var t = require("../../@babel/runtime/helpers/interopRequireDefault");

require("../../@babel/runtime/helpers/Arrayincludes");

var e = t(require("../../@babel/runtime/helpers/typeof")), a = require("../../B4B2EDD40691379CD2D485D3D830E9B3.js"), i = t(require("../../52320AA70691379C345462A0E510E9B3.js")), n = require("../../7931C4950691379C1F57AC929AD2E9B3.js"), o = getApp(), s = null, r = "", u = !1;

Component({
    behaviors: [],
    options: {
        multipleSlots: !0
    },
    properties: {
        autoVideo: {
            type: Boolean,
            value: !1,
            observer: function(t) {
                t && this.setData({
                    dynamicCardVideoPlay: !0
                });
            }
        },
        videos: {
            type: Array,
            value: []
        },
        currentRoute: {
            type: String,
            value: null
        },
        introFlag: Boolean,
        freshNum: {
            type: Number,
            value: 0
        },
        userData: {
            type: Object,
            value: null,
            observer: function(t) {
                console.log("userData", t, t.cardType, (0, e.default)(t.cardType));
                var i = t;
                this._introFun(t), t && (this._setSpecialStyle(), this.setData({
                    groups: (0, a.msgGroups)(i)
                }), this._companyShowFun(i), this._touxiangGet(t.openid), this.handleIndustryData());
            }
        },
        configSetting: {
            type: Object,
            value: {
                copyToWechat: !0,
                saveToContact: !0
            },
            observer: function() {}
        },
        exchangeIf: {
            type: Boolean,
            value: !1
        },
        myProperty: {
            type: String,
            value: "",
            observer: function(t, e, a) {}
        },
        videocontainerHeight: {
            type: String,
            value: "100%;"
        },
        wechatMessage: {
            type: Object,
            value: {},
            observer: function(t) {
                t && Object.keys(t).length > 0 && (this.data.ifWechatMessage = !0);
            }
        },
        stickCard: {
            type: Boolean,
            value: !0,
            observer: function(t) {
                this.setData({
                    stickCardStatus: t
                });
            }
        },
        ifShade: {
            type: String
        },
        markData: String,
        hideCopy: {
            type: String
        }
    },
    data: {
        systemInfo: o.systemInfo,
        ifWechatMessage: !1,
        anonymous: o.source.anonymous,
        someData: {},
        beizhuShow: !1,
        copyToast: {
            show: !1
        },
        groups: [],
        videoPath: "",
        hideVideo: !0,
        music: null,
        clickItem: {
            show: !1,
            index: 0,
            left: 2,
            msg: {}
        },
        lockIf: !1,
        stickCardStatus: !0,
        minimalistModel: i.default,
        isGoupDetail: !1,
        isEditDetail: !1,
        introData: "",
        showPopCompany: !1,
        companyWebShow: !1
    },
    lifetimes: {
        created: function() {
            console.log("方法created");
        },
        attached: function() {
            console.log("方法attached"), this.initMusic();
        },
        moved: function() {},
        detached: function() {
            console.log("方法detached");
        }
    },
    ready: function() {},
    methods: {
        handleIndustryData: function() {
            if (!u) {
                u = !0;
                var t, e = this.data.userData;
                t = e.industry_data ? "string" == typeof e.industry_data ? e.industry_data.split(",") : e.industry_data : "", 
                this.setData({
                    industry_data: t
                }), this.data.groups.length <= 0 && this.setData({
                    groups: (0, a.msgGroups)(this.data.userData)
                }), setTimeout(function() {
                    u = !1;
                }, 500);
            }
        },
        _introFun: function(t) {
            t && t.intro && t.intro.trim().length > 0 ? this.setData({
                introData: t.intro
            }) : this.setData({
                introData: ""
            });
        },
        _companyShowFun: function(t) {
            t.company_data && Object.keys(t.company_data).length > 0 ? this.setData({
                companyWebShow: !0
            }) : this.setData({
                companyWebShow: !1
            });
        },
        _setSpecialStyle: function() {
            try {
                getCurrentPages() && (((r = getCurrentPages()[getCurrentPages().length - 1].route).includes("innerCardDetail") || r.includes("cardTempEdit")) && this.setData({
                    isGoupDetail: !0
                }), r.includes("cardTempEdit") && this.setData({
                    isEditDetail: !0
                }));
            } catch (t) {}
        },
        _touxiangGet: function(t) {
            var e = this, a = null;
            clearTimeout(a), a = setTimeout(function() {
                if (!e.data.ifWechatMessage) return e.data.userData.openid ? void o.setRequest({
                    url: "getUsersAvatarNickname",
                    data: {
                        openid: t
                    }
                }, function(t) {
                    e.setData({
                        wechatMessage: t
                    }), e.triggerEvent("touxiangGet", t);
                }) : (e.setData({
                    wechatMessage: {}
                }), void e.triggerEvent("touxiangGet", {}));
            }, 200);
        },
        _clickCard: function() {
            this.data.ifShade || ("pages/cardAll/howEnter/howEnter" == r && "landing-notGroup" == this.data.markData && o.burying.setPoint(o, 534), 
            r.includes("innerCardDetail") && o.burying.setPoint(o, 190));
        },
        _playVideo: function(t) {
            if (!this.data.ifShade) {
                this.setData({
                    hideVideo: !1,
                    videoPath: t.currentTarget.dataset.thumbUrl
                }), this.videoContent = wx.createVideoContext("myVideo", this);
                var e = this.videoContent;
                setTimeout(function() {
                    e.requestFullScreen(), e.play();
                }, 100);
            }
        },
        _sceenchange: function(t) {
            t.detail && !t.detail.fullScreen && this.videoContent.stop();
        },
        initMusic: function() {
            try {
                s = wx.createInnerAudioContext(), wx.setInnerAudioOption({
                    mixWithOther: !1
                }), s.src = o.source.audioUrl, s.volume = .1, s.onStop(function() {
                    console.log("音频中断播放");
                }), s.onPlay(function() {}), s.onCanplay(function() {});
            } catch (t) {
                console.log("基础版本库低于2.3.0");
            }
        },
        _containerstart: function() {
            var t = this;
            this.data.clickItem.show && setTimeout(function() {
                t.setData({
                    "clickItem.show": !1
                });
            }, 100);
        },
        showQuickDetail: function(t) {
            var e = this;
            if (!this.data.ifShade) {
                o.burying.setPoint(o, 34);
                var a = t.currentTarget.dataset.idx, i = t.touches[0] ? t.touches[0].clientX : 10;
                setTimeout(function() {
                    e.setData({
                        clickItem: {
                            show: !0,
                            index: a,
                            left: i,
                            msg: e.data.groups[a]
                        }
                    }), e.data.systemInfo["2.3.0"] && s.play();
                }, 200);
            }
        },
        ss: function() {},
        _phoneTap: function(t) {
            this.data.ifShade || wx.makePhoneCall({
                phoneNumber: t.currentTarget.dataset.messa
            });
        },
        _mapTap: function(t) {
            this.data.ifShade || o.setRequest({
                url: "position",
                data: {
                    position: t.currentTarget.dataset.messa
                }
            }, function(e) {
                try {
                    wx.openLocation({
                        latitude: e.location.lat,
                        longitude: e.location.lng,
                        name: t.currentTarget.dataset.messa,
                        scale: 15
                    });
                } catch (t) {
                    n.showtoast("未获取到位置", "loading", 2e3);
                }
            });
        },
        _preview: function(t) {
            if (!this.data.ifShade) {
                for (var e = [], a = t.currentTarget.dataset.allpic, i = 0; i < a.length; i++) e.push(a[i].url);
                wx.previewImage({
                    current: t.currentTarget.dataset.url,
                    urls: e
                });
            }
        },
        _detailLongTap: function(t) {
            wx.setClipboardData({
                data: t.currentTarget.dataset.messa,
                success: function(t) {
                    n.showtoast("复制成功", "success", 1e3);
                }
            }), o.gioCustome({
                t: "cardDetail.004"
            });
        },
        _addToAddr: function(t) {
            this.data.ifShade || this.data.userData && ("pages/cardAll/enterShow/enterShow" == r && o.burying.setPoint(o, 50), 
            "pages/cardAll/howEnter/howEnter" == r && "landing-notGroup" == this.data.markData && o.burying.setPoint(o, 537), 
            r.includes("innerCardDetail") && o.burying.setPoint(o, 192), n.saveAddress(this.data.userData));
        },
        _copyAll: function(t) {
            if (!this.data.ifShade) {
                var e = t.currentTarget.dataset.msg;
                wx.setClipboardData({
                    data: e,
                    success: function(t) {
                        n.showtoast("复制成功：" + e, "none", 2e3);
                    }
                }), "pages/cardAll/howEnter/howEnter" == r && "landing-notGroup" == this.data.markData && o.burying.setPoint(o, 536), 
                r.includes("innerCardDetail") && o.burying.setPoint(o, 191);
            }
        },
        _copyTap: function(t) {
            if (!this.data.ifShade) {
                var e = t.currentTarget.dataset.msg;
                wx.setClipboardData({
                    data: e,
                    success: function() {
                        n.showtoast("复制成功", "success", 1e3);
                    }
                });
            }
        },
        _dynamicVideoPlay: function() {
            this.data.ifShade || ("pages/cardAll/howEnter/howEnter" != getCurrentPages()[getCurrentPages().length - 1].route || o.systemInfo["2.7.0"] ? this.setData({
                dynamicCardVideoPlay: !0
            }) : wx.navigateTo({
                url: "../../companyManage/previewVideoCard/previewVideoCard?self=newCardDetail"
            }));
        },
        _toLookHomePageS: function(t) {
            this.triggerEvent("tolookhomepages", t), "pages/cardAll/howEnter/howEnter" == r && "landing-notGroup" == this.data.markData && o.burying.setPoint(o, 535), 
            o.gioCustome({
                t: "cardDetail.010"
            });
        },
        _toLookHomePage: function(t) {
            this.triggerEvent("tolookhomepage", t), "pages/cardAll/howEnter/howEnter" == r && "landing-notGroup" == this.data.markData && o.burying.setPoint(o, 535), 
            o.gioCustome({
                t: "cardDetail.011"
            });
        },
        _toRelavenceBillO: function(t) {
            this.triggerEvent("torelavencebillo", t), o.gioCustome({
                t: "cardDetail.012"
            });
        },
        _certifiedCompany: function(t) {
            this.setData({
                showPopCompany: !this.data.showPopCompany
            });
        },
        _toLookMiniweb: function(t) {
            this.triggerEvent("lookMiniweb", t), wx.navigateTo({
                url: "/pages/companyManage/miniWebDetail/miniWebDetail?entId=" + t.currentTarget.dataset.entid
            });
        }
    }
});