var t = getApp();

Component({
    properties: {
        myCard: {
            type: Object,
            value: {},
            observer: function(t) {
                this._cardFun(t);
            }
        }
    },
    data: {
        haveCard: !1
    },
    methods: {
        _cardFun: function(t) {
            t && t.list && t.list.length > 0 ? this.setData({
                haveCard: !0
            }) : this.setData({
                haveCard: !1
            });
        },
        _share: function() {
            t.burying.setPoint(t, 1068);
        },
        _build: function() {
            t.burying.setPoint(t, 1068), wx.showToast({
                title: "请先制作名片",
                icon: "none",
                duration: 1e3
            }), setTimeout(function() {
                wx.navigateTo({
                    url: "/pages/mainPage/cardMain/cardFormBuild/cardFormBuild?butt=build&main=cardsFolder&id=none",
                    success: function() {}
                });
            }, 1e3);
        }
    }
});