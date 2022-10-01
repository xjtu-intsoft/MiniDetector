var e = getApp(), t = !1;

Component({
    properties: {
        enterprisesData: {
            type: Object,
            value: {},
            observer: function(t) {
                t && Object.keys(t).length && t.msgId && (e.burying.setSensorEvent(e, {
                    DueDate: t.residueDate + "天"
                }, "ServiceExpirationDisplay"), this._timeDate(t.runoutTime), this._companyState(t));
            }
        }
    },
    data: {},
    methods: {
        _companyState: function(e) {
            var t = "试用";
            0 == e.entState ? t = "到期" : 0 == e.experienceState ? t = "付费" : 10 == e.experienceState ? t = "试用" : 100 == e.experienceState ? t = "付费" : 110 == e.experienceState && (t = "试用"), 
            this.setData({
                companyPayStatus: t
            });
        },
        _timeDate: function(e) {
            var t = Number(e);
            this.setData({
                serviceRestDate: s(t)
            });
            var a = new Date(Number(e));
            function s(e) {
                var t = new Date(e), a = t.getFullYear(), s = t.getMonth() + 1, n = t.getDate();
                return s < 10 && (s = "0" + s), n < 10 && (n = "0" + n), a + "-" + s + "-" + n;
            }
            a.setDate(a.getDate() + 1), this.setData({
                serviceNewDate: s(a)
            });
        },
        _toRenewal: function() {
            var t = this.data.serviceRestDate, a = this.data.serviceNewDate, s = this.data.companyPayStatus;
            this.data.enterprisesData.residueDate ? e.burying.setPoint(e, 938) : e.burying.setPoint(e, 939), 
            wx.navigateTo({
                url: "/pages/companyManage/servicePay/servicePay?company=".concat(encodeURIComponent(this.data.enterprisesData.entName), "&comStatus=").concat(s, "&restDate=").concat(t, "&newDate=").concat(a, "&entId=").concat(this.data.enterprisesData.entId, "&restDay=").concat(this.data.enterprisesData.residueDate)
            });
        },
        _closeMsgTip: function() {
            var a = this;
            !t && this.data.enterprisesData.msgId && (e.burying.setPoint(e, 940), t = !0, e.setRequest({
                url: "messageProcess",
                data: {
                    msgId: this.data.enterprisesData.msgId
                }
            }, function(e) {
                t = !1, a.triggerEvent("closeMsg", !0), console.log(e);
            }));
        }
    }
});