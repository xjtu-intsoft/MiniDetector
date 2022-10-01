var e = getApp();

Component({
    options: {
        multipleSlots: !0
    },
    properties: {
        defCard: {
            type: Object,
            value: {}
        },
        mycardList: {
            type: Object,
            value: []
        },
        defcardId: {
            type: Number,
            value: {}
        },
        wechatMessage: Object
    },
    data: {
        duration: 0,
        showAdd: !1,
        cards: [],
        current: 0,
        cardReceiveMask: !1,
        userMaxCardNum: e.userMaxCardNum,
        freshNum: new Date().getTime(),
        autherizedDetailShow: !1
    },
    lifetimes: {
        attached: function() {
            console.log(e), this.setData({
                cardReceiveMask: e.cardReceiveMask
            });
        }
    },
    pageLifetimes: {
        show: function() {
            this.setData({
                cardReceiveMask: e.cardReceiveMask
            });
        }
    },
    methods: {
        _certifiedCompany: function() {
            var e = this;
            if (this.data.autherizedDetailShow) this.setData({
                autherizedDetailShow: !1
            }); else try {
                wx.createSelectorQuery().in(e).select("#autherized-id").boundingClientRect(function(t) {
                    console.log(t), e.setData({
                        autherizedDetailShow: !0,
                        markLeft: t.left - 60
                    });
                }).exec();
            } catch (t) {
                e.setData({
                    autherizedDetailShow: !0
                });
            }
        },
        _codeTap: function() {
            e.burying.setPoint(e, 1013), this.triggerEvent("codeTap", !0), this.cardReceiveMaskFalse();
        },
        _switchCard: function() {
            e.burying.setPoint(e, 836), this.triggerEvent("switchCard");
        },
        cardReceiveMaskFalse: function() {
            this.setData({
                cardReceiveMask: !1
            }), e.cardReceiveMask = !1, e.burying.setPoint(e, 1014);
        },
        _cardEdit: function(t) {
            var a = this, i = t.currentTarget.dataset.card;
            this.data.cardReceiveMask ? e.burying.setPoint(e, 1012) : e.burying.setPoint(e, 625), 
            e.setRequest({
                url: "selectById",
                data: {
                    id: i.id,
                    formtoken: i.formtoken
                }
            }, function(e) {
                a.cardReceiveMaskFalse(), e && Object.keys(e).length && a.triggerEvent("cardEdit", {
                    card: i,
                    data: e
                });
            });
        }
    }
});