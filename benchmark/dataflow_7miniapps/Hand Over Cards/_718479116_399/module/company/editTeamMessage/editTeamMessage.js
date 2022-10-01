var t = getApp(), e = require("../../../7931C4950691379C1F57AC929AD2E9B3.js");

Component({
    properties: {
        teamMessage: {
            type: Object,
            value: {},
            observer: function(t) {
                console.log("observer", t), this._baseFun(t);
            }
        }
    },
    data: {
        loading: !1,
        canSave: !1,
        contentTestFail: !1,
        attestation: !1
    },
    methods: {
        _baseFun: function(t) {
            t.entName && t.entName.trim().length > 0 ? this.setData({
                canSave: !0
            }) : this.setData({
                canSave: !1
            });
        },
        _focus: function() {
            t.burying.setPoint(t, 738);
        },
        _input: function(t) {
            var e = t.currentTarget.dataset.n, a = t.detail.value;
            a && a.trim().length > 0 ? !this.data.canSave && this.setData({
                canSave: !0
            }) : this.data.canSave && this.setData({
                canSave: !1
            }), a = a && a.trim().length > 40 ? a.slice(0, 40) : a.trim(), console.log("处理后字符长度", a.length), 
            this.data.teamMessage[e] = a, this.data.contentTestFail && this.setData({
                contentTestFail: !1
            }), this.data.attestation && this.setData({
                attestation: !1
            });
        },
        _blur: function(t) {
            var e = t.currentTarget.dataset.n;
            console.log(t.detail.value);
            var a = t.detail.value;
            a = a && a.trim().length > 40 ? a.slice(0, 40) : a.trim(), console.log("处理后字符长度", a.length), 
            this.data.teamMessage[e] = String(a) || "";
        },
        _save: function() {
            var a = this;
            if (!this.data.loading) {
                this.setData({
                    loading: !0
                }), t.burying.setPoint(t, 737);
                var n = this.data.teamMessage.entName, s = this.data.teamMessage.entId, i = [];
                i.push(n), t.contentTestFun(i, function(t) {
                    t.allwords <= 0 ? a._teamAttestation(n, function(t) {
                        console.log("rrr", t), t.checkResult ? (a.setData({
                            attestation: !0
                        }), a.closeLoading()) : a._teamMessageSave({
                            entName: n,
                            entId: s
                        }, function(t) {
                            a.triggerEvent("save", n);
                        }, function() {
                            a.closeLoading();
                        });
                    }, function() {
                        a.closeLoading();
                    }) : (e.testShowmodal(), a.setData({
                        contentTestFail: !0
                    }), a.closeLoading());
                }, function() {
                    a.closeLoading();
                });
            }
        },
        closeLoading: function() {
            this.setData({
                loading: !1
            });
        },
        _teamAttestation: function(e, a, n) {
            t.setRequest({
                url: "wxEntExpandCheckEntName",
                method: "POST",
                data: {
                    entName: e
                }
            }, function(t) {
                a && a(t);
            }, function() {
                n && n();
            });
        },
        _teamMessageSave: function(e, a, n) {
            t.setRequest({
                url: "wxEntExpandEditorTeam",
                method: "POST",
                data: {
                    entName: e.entName,
                    entId: e.entId
                }
            }, function(t) {
                a && a(t);
            }, function() {
                n && n();
            });
        },
        _cancel: function() {
            t.burying.setPoint(t, 736), this.triggerEvent("cancel");
        }
    }
});