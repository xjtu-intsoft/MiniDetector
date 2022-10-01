var t = getApp();

Component({
    options: {
        multipleSlots: !0
    },
    properties: {
        ifGroup: {
            type: String
        },
        zIndex: {
            type: Number
        },
        topType: {
            type: String,
            value: "",
            observer: function(t) {
                "home" == t ? this.setData({
                    iconCon: {
                        path: "/images/toHome.png",
                        tap: "_home"
                    }
                }) : "prePage" == t ? this.setData({
                    iconCon: {
                        path: "/images/back.png",
                        blackPath: "/images/toLeft-white.png",
                        tap: "_prePage"
                    }
                }) : "prePageQA" == t ? this.setData({
                    iconCon: {
                        path: "/images/back.png",
                        blackPath: "/images/toLeft-white.png",
                        tap: "_prePageQA"
                    }
                }) : "backRenmai" == t ? this.setData({
                    iconCon: {
                        path: "/images/back.png",
                        tap: "_backRenmai"
                    }
                }) : "upperPage" == t ? this.setData({
                    iconCon: {
                        path: "/images/back.png",
                        tap: "_upperPage"
                    }
                }) : "howEnter" == t ? this.setData({
                    iconCon: {
                        path: "/images/back.png",
                        tap: "_home",
                        tapTitle: "首页"
                    }
                }) : "setting" == t ? this.setData({
                    iconCon: {
                        path: "/images/my.png",
                        whitePath: "/images/my-white.png",
                        tap: "_toMy"
                    }
                }) : "backHome" == t ? this.setData({
                    iconCon: {
                        path: "/images/back.png",
                        blackPath: "/images/toLeft-white.png",
                        tap: "_home"
                    }
                }) : "backCompany" == t ? this.setData({
                    iconCon: {
                        path: "/images/back.png",
                        tap: "_backCompany"
                    }
                }) : "buildCard" == t ? this.setData({
                    iconCon: {
                        path: "/images/back.png",
                        tap: "_buildBack"
                    }
                }) : "character" == t ? this.setData({
                    iconCon: {
                        path: "/images/back.png",
                        tap: "_home",
                        tapTitle: "首页"
                    }
                }) : "blankCardmain" == t && this.setData({
                    iconCon: {
                        path: "",
                        tap: "_ss",
                        tapTitle: ""
                    }
                });
            }
        },
        topTitle: {
            type: String,
            value: "递名片"
        },
        topBg: {
            type: String,
            value: "#ffffff"
        },
        titleColor: {
            type: String,
            value: "#000"
        },
        showText: {
            type: String
        },
        position: {
            type: String
        },
        iconColor: String,
        buildFinish: Boolean
    },
    data: {
        systemInfo: t.systemInfo,
        menuButton: {},
        iconCon: {
            path: "",
            tap: ""
        }
    },
    lifetimes: {
        attached: function() {
            this.setData({
                menuButton: t.systemInfo.menuButton
            });
        },
        moved: function() {},
        detached: function() {}
    },
    methods: {
        _ss: function() {},
        _toMy: function() {
            wx.navigateTo({
                url: "/pages/cardMy/cardMy"
            }), this.triggerEvent("toMyPage");
        },
        _home: function() {
            wx.switchTab({
                url: "/pages/cardMain/cardMain"
            }), this.triggerEvent("home");
        },
        _back: function() {
            this.triggerEvent("_back");
        },
        _prePage: function() {
            wx.navigateBack({
                delta: 1
            }), this.triggerEvent("prePage");
        },
        _prePageQA: function() {
            this.triggerEvent("prePageQA");
        },
        _backCompany: function() {
            wx.switchTab({
                url: "/pages/company/company"
            }), this.triggerEvent("backCompany");
        },
        _backRenmai: function() {
            wx.switchTab({
                url: "/pages/cardsFolder/cardsFolder"
            }), this.triggerEvent("backRenmai");
        },
        _upperPage: function() {
            wx.navigateBack({
                delta: 2
            }), this.triggerEvent("upperPage");
        },
        _buildBack: function() {
            this.triggerEvent("buildBack");
        }
    }
});