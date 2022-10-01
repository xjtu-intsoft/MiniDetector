var e = getApp();

Component({
    properties: {
        businessList: {
            type: Array,
            value: [],
            observer: function(t, a) {
                this.setData({
                    inviteTeamGuidePage: e.inviteTeamGuidePage
                }), this.enterprises(t);
            }
        }
    },
    data: {
        alone: !0,
        business: null,
        showDotted: !1,
        inviteTeamGuidePage: !1
    },
    lifetimes: {
        attached: function() {
            this.setDotted();
        }
    },
    methods: {
        setDotted: function() {
            try {
                wx.getStorageSync("companyManageDotted") ? this.setData({
                    showDotted: !1
                }) : this.setData({
                    showDotted: !0
                });
            } catch (e) {}
        },
        inviteTeamHide: function() {
            e.inviteTeamGuidePage = !1, this.setData({
                inviteTeamGuidePage: !1
            });
        },
        statsTeam: function() {
            e.inviteTeamGuidePage = !1, wx.switchTab({
                url: "/pages/company/company"
            }), this.setData({
                inviteTeamGuidePage: !1
            }), e.burying.setPoint(e, 624);
        },
        _createTeam: function() {
            e.burying.setPoint(e, 623), this.setDotted();
            try {
                wx.setStorageSync("companyManageDotted", !0), this.setData({
                    showDotted: !1
                });
            } catch (e) {}
            wx.navigateTo({
                url: "../companyManage/createTeam/createTeam?pagefrom=cardMain"
            });
        },
        switchingPrises: function() {
            this.enterprises(this.data.businessList);
        },
        enterprises: function(e) {
            var t = wx.getStorageSync("entId"), a = [];
            if (t) {
                a = e[0];
                for (var i = 0; i < e.length; i++) if (e[i].entId == t) {
                    a = e[i];
                    break;
                }
                this.setData({
                    business: a
                });
            }
        }
    }
});