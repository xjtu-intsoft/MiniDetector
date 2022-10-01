var t = getApp(), a = require("../../../7931C4950691379C1F57AC929AD2E9B3.js");

Component({
    options: {
        multipleSlots: !0
    },
    properties: {
        openGid: {
            type: String,
            value: ""
        },
        groupMycard: {
            type: Object,
            value: null
        },
        roofPlacementList: Array,
        otherCardData: Array,
        myMessage: {
            type: Object,
            value: {}
        },
        myPage: {
            type: String,
            value: "stickCard",
            observer: function(t) {
                this.setData({
                    customAvatar: wx.getStorageSync("customAvatar")
                });
            }
        },
        avarMark: {
            type: String,
            value: ""
        },
        cardNum: {
            type: Number,
            value: -1
        },
        minimalistModel: {
            type: Object
        },
        cards: {
            type: Object
        },
        newlyAdd: {
            type: Object
        }
    },
    data: {
        ifShare: !1,
        anonymous: t.source.anonymous,
        systemInfo: t.systemInfo,
        newCardData: {},
        newCardShow: !1,
        newCardAnimation: "",
        customAvatar: "",
        mycard: !1
    },
    lifetimes: {
        attached: function() {
            this.setData({
                customAvatar: wx.getStorageSync("customAvatar")
            });
        }
    },
    attached: function() {
        this.setData({
            customAvatar: wx.getStorageSync("customAvatar")
        });
    },
    methods: {
        _stickCard: function() {
            this.triggerEvent("stickCard"), this.data.otherCardData.length <= 1 ? t.burying.setPoint(t, 177) : t.burying.setPoint(t, 178);
        },
        _toEdit: function() {
            var a = this;
            console.log("groupMycard", this.data.groupMycard);
            var e = this.data.groupMycard;
            t.setRequest({
                url: "selectById",
                data: {
                    id: e.id,
                    formtoken: e.formtoken
                }
            }, function(i) {
                console.log("去编辑页我的名片", i), "WebTemp" == (e = i).modelIndex.type || (t.temporaryData.edit.data = e), 
                a.toWebview(e);
            });
        },
        toWebview: function(a) {
            console.log("temporaryData", a), "WebTemp" == a.modelIndex.type ? wx.navigateTo({
                url: "/pages/cardMain/webcardEdit/webcardEdit?id=" + a.id + "&main=stickCard&formtoken=" + a.formtoken
            }) : (!a.customAvatar.name && this.data.touxiang && this.data.touxiang.avatarurl && (a.customAvatar.name = this.data.touxiang.avatarurl, 
            a.customAvatar.url = this.data.touxiang.avatarurl, t.temporaryData.edit.data.customAvatar = a.customAvatar), 
            wx.navigateTo({
                url: "/pages/mainPage/cardMain/cardTempEdit/cardTempEdit?id=".concat(a.id, "&formtoken=").concat(a.formtoken, "&main=stickCard")
            }));
        },
        _toLower: function(t) {
            "bottom" == t.detail.direction && this.triggerEvent("toLower", t.detail.direction);
        },
        _refresh: function(t) {
            console.log("_refresh", t), "top" == t.detail.direction && this.triggerEvent("fresh", t.detail.direction);
        },
        _toWallDetail: function(t) {
            var e = t.detail.currentTarget.dataset, i = e.formtoken, r = e.id;
            this.data.groupMycard ? wx.navigateTo({
                url: "/pages/subpackagePage/cardWall/innerCardDetail/innerCardDetail?cid=" + r + "&main=stickCard&formtoken=" + i
            }) : a.showtoast("请先贴上名片", "none", 2e3);
        },
        _stickCardUserInfo: function(a) {
            this.triggerEvent("stickCardUserInfo", a), this.data.otherCardData.length <= 1 ? t.burying.setPoint(t, 177) : t.burying.setPoint(t, 178);
        },
        _toStart: function() {
            this.data.maidian = !0;
        },
        _toScroll: function() {
            this.data.maidian && (this.data.maidian = !1, t.burying.setPoint(t, 186));
        },
        _toMaintip: function() {
            t.burying.setPoint(t, 705), this.selectComponent("#toMaintip").show();
        },
        _toMain: function() {
            try {
                wx.setStorageSync("dialog-addMinicardToAirWindows", {
                    show: !0
                });
            } catch (t) {}
            wx.switchTab({
                url: "/pages/cardMain/cardMain"
            });
        }
    }
});