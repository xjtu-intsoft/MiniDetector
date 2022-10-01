var e = getApp();

Component({
    options: {
        styleIsolation: "apply-shared"
    },
    properties: {
        enterprisesData: {
            type: Object,
            value: {},
            observer: function(e) {
                try {
                    e && e.entId && (console.log(e && e.entId), this.setData({
                        enterprisesData: e
                    }), this._getDate(e));
                } catch (e) {}
            }
        },
        optionsL: Object,
        useNumb: String
    },
    data: {
        systemInfo: e.systemInfo,
        copy_location: "",
        enterprisesData: "",
        serviceRestDate: "",
        serviceRestDay: "",
        serviceNewDate: "",
        showCardStyleDialog: !1
    },
    lifetimes: {},
    methods: {
        _getDate: function(t) {
            var a = this;
            e.setRequest({
                url: "entMsgPage",
                method: "post",
                data: t
            }, function(e) {
                var t = Number(e.runoutTime), s = (t - new Date().getTime()) / 24 / 60 / 60 / 1e3;
                s = Math.ceil(s), a.setData({
                    serviceRestDate: i(t),
                    serviceRestDay: s
                });
                var n = new Date(Number(e.runoutTime));
                function i(e) {
                    var t = new Date(e), a = t.getFullYear(), s = t.getMonth() + 1, n = t.getDate();
                    return s < 10 && (s = "0" + s), n < 10 && (n = "0" + n), a + "-" + s + "-" + n;
                }
                n.setDate(n.getDate() + 1), a.setData({
                    serviceNewDate: i(n)
                });
            });
        },
        _settingTmpStyle: function() {
            e.burying.setPoint(e, 943);
            var t = this.data.enterprisesData;
            0 == this.data.optionsL.entState ? (console.log("企业已到期"), this.setData({
                showCardStyleDialog: !0
            })) : wx.navigateTo({
                url: "/pages/companyManage/configurationStyle/configurationStyle?entId=" + t.entId + "&roleId=" + t.roleId
            });
        },
        _shareWebCompany: function() {
            e.burying.setPoint(e, 942);
        },
        _closePanel: function() {
            this.setData({
                showCardStyleDialog: !1
            });
        },
        _renew: function() {
            var t = this.data.enterprisesData, a = this.data.serviceRestDate, s = this.data.serviceNewDate, n = "试用";
            0 == t.entState ? n = "到期" : 0 == t.experienceState ? n = "付费" : 10 == t.experienceState ? n = "试用" : 100 == t.experienceState ? n = "付费" : 110 == t.experienceState && (n = "试用"), 
            10 != this.data.enterprisesData.experienceState && 110 != this.data.enterprisesData.experienceState || 1 != this.data.enterprisesData.entState ? 10 != this.data.enterprisesData.experienceState && 110 != this.data.enterprisesData.experienceState && 0 != this.data.enterprisesData.experienceState || 0 != this.data.enterprisesData.entState || e.burying.setPoint(e, 937) : e.burying.setPoint(e, 936), 
            wx.navigateTo({
                url: "/pages/companyManage/servicePay/servicePay?company=".concat(encodeURIComponent(this.data.enterprisesData.entName), "&comStatus=").concat(n, "&restDate=").concat(a, "&newDate=").concat(s, "&entId=").concat(this.data.enterprisesData.entId, "&restDay=").concat(this.data.serviceRestDay)
            });
        }
    }
});