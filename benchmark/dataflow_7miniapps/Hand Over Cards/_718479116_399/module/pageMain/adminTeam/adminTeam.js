var e = getApp();

Component({
    properties: {
        adminStatus: Object
    },
    data: {
        currentDevicePhoneNumer: e.currentDevicePhoneNumer,
        teamBg: e.source.team_bg,
        systemInfo: e.systemInfo
    },
    lifetimes: {
        attached: function() {}
    },
    pageLifetimes: {
        show: function() {
            this.setData({
                currentDevicePhoneNumer: e.currentDevicePhoneNumer
            });
        }
    },
    methods: {
        getClaimCards: function(t, n) {
            var r = this;
            e.setRequest({
                url: "wxEntExpandCardMsgByIphone",
                data: {
                    iphone: t.phoneNumber,
                    entId: t.entId
                }
            }, function(n) {
                console.log("getcards", n), n.length ? (e.burying.setSensorEvent(e, {
                    IsMatched: "是",
                    OwnedEnterprise: t.entName
                }, "TeamCardPhoneCheck"), r.triggerEvent("hasSamePhoneFun", {
                    teamData: t,
                    matchCardList: n
                })) : (e.burying.setSensorEvent(e, {
                    IsMatched: "否",
                    OwnedEnterprise: t.entName
                }, "TeamCardPhoneCheck"), r.triggerEvent("hasSamePhoneFun", {
                    teamData: t,
                    matchCardList: []
                }));
            });
        },
        getcurrentDevicePhoneNumer: function(t) {
            e.burying.setPoint(e, 806);
            var n = {};
            (n = {
                entId: t.currentTarget.dataset.entId,
                entName: t.currentTarget.dataset.entName,
                phoneNumber: ""
            }).phoneNumber = e.currentDevicePhoneNumer, this.getClaimCards(n);
        },
        getPhoneNumber: function(t) {
            var n = this;
            e.burying.setPoint(e, 806);
            var r = {};
            r = {
                entId: t.currentTarget.dataset.entId,
                entName: t.currentTarget.dataset.entName,
                phoneNumber: ""
            }, t.detail.iv ? (e.burying.setPoint(e, 808), e.setRequest({
                url: "getWxPhone",
                data: {
                    iv: t.detail.iv,
                    encryptedData: t.detail.encryptedData
                }
            }, function(e) {
                n.setData({
                    currentDevicePhoneNumer: e.phoneNumber || ""
                }), r.phoneNumber = e.phoneNumber, e.phoneNumber && n.getClaimCards(r);
            })) : e.burying.setPoint(e, 809);
        }
    }
});