var e, t, a = new (require("../../../418BE4810691379C27ED8C86F260E9B3.js").CardAllPro)(), s = require("../../../7931C4950691379C1F57AC929AD2E9B3.js"), r = getApp();

Page({
    data: {
        selected: {
            name: [],
            checked: {}
        },
        systemInfo: r.systemInfo,
        platform: r.systemInfo.platform,
        ifshareMenu: r.compatibleManage.shareMenu
    },
    onLoad: function(a) {
        e = this;
        var s = (t = getCurrentPages())[t.length - 2].data.batchShareData, r = t[t.length - 2].data.letterList;
        this.setData({
            receiveDataShare: s,
            letterList: r
        });
    },
    onShow: function() {},
    selectAll: function(e) {
        var t = {}, a = [], s = !0, r = "x0";
        if (e.currentTarget.dataset.all) s = !1; else {
            for (var i = 0; i < this.data.receiveDataShare.length; i++) for (var c = 0; c < this.data.receiveDataShare[i].items.length; c++) t[this.data.receiveDataShare[i].items[c].id] = !0, 
            a.push({
                name: this.data.receiveDataShare[i].items[c].name,
                id: this.data.receiveDataShare[i].items[c].id
            });
            r = "x" + (a.length - 1);
        }
        this.setData({
            "selected.checked": t,
            "selected.name": a,
            "selected.all": s,
            "selected.toView": r
        });
    },
    radioClick: function(e) {
        var t = this.data.selected.checked, a = this.data.selected.name, s = !0, r = !1;
        if (t[e.currentTarget.dataset.id] = !e.currentTarget.dataset.checked, e.currentTarget.dataset.checked) {
            s = !1;
            for (var i = 0; i < a.length; i++) a[i].id == e.currentTarget.dataset.id && a.splice(i, 1);
        } else {
            for (var c = 0; c < this.data.receiveDataShare.length; c++) for (var h = 0; h < this.data.receiveDataShare[c].items.length; h++) this.data.receiveDataShare[c].items[h].id == e.currentTarget.dataset.id && a.push({
                name: this.data.receiveDataShare[c].items[h].name,
                id: this.data.receiveDataShare[c].items[h].id
            }), t[this.data.receiveDataShare[c].items[h].id] || (s = !1);
            r = "x" + (a.length - 1);
        }
        this.setData({
            "selected.checked": t,
            "selected.name": a,
            "selected.all": s,
            "selected.toView": r
        });
    },
    nameClick: function(e) {
        for (var t = Object.keys(this.data.selected.checked), a = this.data.selected.name, s = 0; s < t.length; s++) t[s] == e.currentTarget.dataset.id && (this.data.selected.checked[t[s]] = !1);
        a.splice(e.currentTarget.dataset.ind, 1), this.setData({
            "selected.checked": this.data.selected.checked,
            "selected.name": a,
            "selected.all": !1
        });
    },
    focus: function(e) {
        this.data.selected.noResult && this.setData({
            "selected.noResult": !1
        });
    },
    search: function(e) {
        for (var t = this, a = [], r = !1, i = 0; i < this.data.receiveDataShare.length; i++) for (var c = 0; c < this.data.receiveDataShare[i].items.length; c++) a.push(this.data.receiveDataShare[i].items[c]);
        e.detail.value || !this.data.selected.noResult && !this.data.selected.result ? s.regMatch(e.detail.value, a, function(a) {
            a.length <= 0 ? (r = e.detail.value, t.setData({
                "selected.noResult": !0,
                "selected.result": !1,
                "selected.noResultValue": r
            })) : t.setData({
                "selected.noResult": !1,
                "selected.result": !0,
                "selected.resultData": a
            });
        }) : this.setData({
            "selected.noResult": !1,
            "selected.result": !1
        });
    },
    touchStart: function(e) {
        "android" == this.data.platform || this.setData({
            scranimation: !1
        });
    },
    touchMove: function(t) {
        var i = this, c = 160 / r.systemInfo.shiftX;
        a.touchMove(t, e.data.letterList, c, function(t) {
            t != i.data.datas && s.throttle((e.data.datas = t, void ("top" == t ? (e.setData({
                lettershow: t,
                toView: t
            }), e.setData({
                scSuccesView: t
            })) : e.setData({
                lettershow: t,
                toView: t
            }))), 200);
        });
    },
    clickLetter: function(t) {
        var s = 160 / r.systemInfo.shiftX;
        a.clickLetter(t, e.data.letterList, s, function(t) {
            if (!t) return 0;
            "top" == t ? (e.setData({
                lettershow: t,
                toView: t
            }), e.setData({
                scSuccesView: t
            })) : e.setData({
                lettershow: t,
                toView: t
            }), e.data.datas = t, setTimeout(function() {
                e.setData({
                    lettershow: !1
                });
            }, 300);
        });
    },
    touchEnd: function() {
        this.setData({
            lettershow: !1
        });
    },
    ss: function() {},
    shareCardClick: function() {
        this.data.ifshareMenu || s.showmodal({
            data: "点击右上角三个点，选择“分享”",
            cancel: !1,
            text: "我知道了"
        }), r.gioCustome({
            t: "batchShare.001"
        });
    },
    onShareAppMessage: function() {
        for (var e = [], t = 0; t < this.data.selected.name.length; t++) e.push(this.data.selected.name[t].id);
        var a = JSON.stringify(e);
        return e.length > 0 ? s.shareAppMessa({
            title: "我向您分享了" + e.length + "张名片，请惠存",
            path: "pages/cardAll/batchReceive/batchReceive?shareOthers=batchShare&batchShareKeys=" + a + "&shareType=06",
            imageUrl: r.source.batchShare
        }) : s.shareAppMessa({
            title: "我向您推荐“递名片”",
            path: "pages/cardMy/about/about?shareOthers=batchShare&shareType=05",
            imageUrl: r.source.shareImage
        });
    }
});