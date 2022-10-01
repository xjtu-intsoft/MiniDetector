var t = getApp();

Component({
    properties: {
        myCard: {
            type: Object,
            value: {},
            observer: function(t) {
                var a = this.data.cardData, i = !1;
                if (a.id) {
                    for (var s = 0; s < t.list.length; s++) if (t.list[s].id == a.id) {
                        a = t.list[s], i = !0;
                        break;
                    }
                    this.setData({
                        cardData: i ? a : t.list[0],
                        list: t.list
                    });
                } else this.setData({
                    cardData: t.list[0],
                    list: t.list
                });
                this.data.animation || this._stickCardAnimation();
            }
        },
        ownerData: Object
    },
    data: {
        systemInfo: t.systemInfo,
        cardData: {},
        list: [],
        switchList: {
            show: !1
        },
        animation: ""
    },
    lifetimes: {
        attached: function() {}
    },
    methods: {
        _aa: function() {},
        _clickCard: function() {
            console.log("获取名片详情", this.data.cardData);
            var a = this.data.cardData.id, i = this.data.cardData.formtoken;
            t.setRequest({
                url: "selectById",
                data: {
                    isGroup: !1,
                    id: a,
                    formtoken: i
                }
            }, function(s) {
                t.temporaryData.edit.data = s, s.modelIndex.type, wx.navigateTo({
                    url: "/pages/mainPage/cardMain/cardTempEdit/cardTempEdit?id=".concat(a, "&formtoken=").concat(i, "&main=howEnter")
                });
            }), this.data.ownerData.intransitIf ? t.burying.setPoint(t, 556) : t.burying.setPoint(t, 547);
        },
        _switch: function() {
            this.setData({
                "switchList.show": !0
            }), this.data.ownerData.intransitIf ? t.burying.setPoint(t, 555) : t.burying.setPoint(t, 546);
        },
        _selectCard: function(t) {
            this.setData({
                "switchList.show": !1,
                cardData: this.data.list[t.detail]
            }), this.triggerEvent("switchSendCard", this.data.list[t.detail].id);
        },
        _closeSwitchCard: function() {
            this.setData({
                "switchList.show": !1
            });
        },
        _clickSend: function() {
            this.data.ownerData.intransitIf ? t.burying.setPoint(t, 554) : t.burying.setPoint(t, 545);
        },
        _stickCardAnimation: function() {
            this.setData({
                animation: this.data.systemInfo.modelX ? "animationX" : "animation-normal"
            });
        }
    }
});