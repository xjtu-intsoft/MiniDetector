var t = getApp(), a = [], s = [], n = "", i = !1, r = !1, e = !1, u = !1, d = !1;

Page({
    data: {
        systemInfo: t.systemInfo,
        industryTags: [],
        showInpBor: !1,
        industryTagsVal: "",
        maxlength: 18
    },
    onLoad: function(a) {
        this.setData({
            hasDel: !1
        }), a;
        var s = [], n = getCurrentPages(), i = n[n.length - 2];
        console.log(i.data, "上个页面数据");
        var r = i.data.temporaryDataFormData;
        if (r && r.industry && r.industry_data) {
            for (var e = r.industry, u = r.industry_data, d = 0; d < u.length; d++) s.push({
                code: e[d],
                val: u[d]
            });
            this.setData({
                industryTags: s
            });
        }
        this.data.industryTags.length <= 0 && (this.setData({
            industryfocus: !0
        }), t.burying.setPoint(t, 795));
    },
    onShow: function() {},
    viewTap: function() {
        this.data.industryfocus || (this.setData({
            industryfocus: !0
        }), t.burying.setPoint(t, 795));
    },
    focusIndustry: function() {
        console.log("focus");
        var t = this.data.industryTags;
        !0, r = !1, e = !1, u = !1, d = !1;
        for (var a = 0; a < t.length; a++) t[a].showdel = !1;
        this.setData({
            industryTags: t,
            showInpBor: !0
        });
    },
    getIndustryData: function(a) {
        var s = this, n = this.data.industryTags, i = "";
        a && t.setRequest({
            url: "industrySearch",
            data: {
                keyWords: a
            }
        }, function(t) {
            if ((i = t).length > 0) for (var a = 0; a < i.length; a++) for (var r = 0; r < n.length; r++) i[a] && i[a].industryCode == n[r].code && (i.splice(a, a + 1), 
            a--);
            s.setData({
                industryData: i
            });
        }, "", function() {});
    },
    inputIndustry: function(t) {
        var a = this.data.industryTags;
        if (t.detail.value) {
            if (a.length >= 10) return void this.setData({
                industryTagsVal: ""
            });
            i && (i = !1);
            var s = t.detail.value;
            this.setData({
                industryTagsVal: t.detail.value
            }), s && s.trim().length >= 2 && this.getIndustryData(s);
        } else i ? (this.data.industryTagsVal && this.setData({
            industryTagsVal: ""
        }), a = a.splice(0, a.length - 1), this.setData({
            industryTags: a
        })) : this.data.industryTags.length > 0 && !t.detail.value && !i && (i = !0);
    },
    selectIndustry: function(a) {
        var s = this, n = a.currentTarget.dataset;
        console.log("sel"), d = !0, this.data.industryTags.push({
            val: n.industry,
            code: n.industrycode
        }), this.setData({
            industryTags: this.data.industryTags,
            industryTagsVal: "",
            industryData: []
        }), t.burying.setPoint(t, 796), setTimeout(function() {
            s.setData({
                industryfocus: !0
            }), t.burying.setPoint(t, 795);
        }, 500);
    },
    backClick: function() {
        u = !0;
    },
    confirmIndustry: function(t) {
        !1, r ? r = !1 : t.detail.value.trim() && (this.data.industryTags.length >= 10 || (e = !0, 
        this.industryItem("confirm", t)));
    },
    inputBlur: function(t) {
        if (!1, u && this.data.industryData && this.data.industryData.length > 0 && this.setData({
            industryData: []
        }), !d) return e ? (this.setData({
            showInpBor: !1
        }), void (e = !1)) : void (t.detail.value.trim() ? this.data.industryTags.length >= 10 ? this.setData({
            showInpBor: !1
        }) : (r = !0, this.industryItem("blur", t)) : this.setData({
            showInpBor: !1
        }));
    },
    industryItem: function(a, s) {
        var n = this;
        t.setRequest({
            url: "createIndustryCustom",
            data: {
                industryName: s.detail.value.trim()
            }
        }, function(i) {
            "blur" == a && n.data.industryData && n.data.industryData.length > 0 || (n.data.industryTags.push({
                val: s.detail.value.trim(),
                code: i.industryCode
            }), n.setData({
                industryTags: n.data.industryTags,
                industryTagsVal: "",
                industryData: []
            }), t.burying.setPoint(t, 795), "confirm" == a && "android" == t.systemInfo.platform && setTimeout(function() {
                n.setData({
                    industryfocus: !0
                });
            }, 150));
        }, "", function() {});
    },
    itemClick: function(a) {
        for (var s = a.currentTarget.dataset.ind, n = this.data.industryTags, i = 0; i < n.length; i++) n[i].showdel = !1;
        n[s].showdel = !0, this.setData({
            industryTags: n
        }), t.burying.setPoint(t, 799);
    },
    delIndustry: function(a) {
        var s = a.currentTarget.dataset.ind, n = this.data.industryTags;
        n.splice(s, 1), this.setData({
            industryTags: n,
            hasDel: !0
        }), t.burying.setPoint(t, 805);
    },
    prePage: function() {
        t.burying.setPoint(t, 797);
    },
    handleIndustry: function(t) {
        var i = this.data.industryTags;
        if (this.data.hasDel && this.data.industryTags.length <= 0) n = "", a = [], t && t(); else {
            a = [], s = [], n = "";
            for (var r = 0; r < i.length; r++) a.push(i[r].val), s.push(i[r].code);
            for (var e = 0; e < s.length; e++) n += s[e] + ",";
            n = n.substring(0, n.length - 1), t && t();
        }
    },
    completeBtn: function() {
        t.burying.setPoint(t, 798), this.data.industryTags.length <= 0 && !this.data.hasDel || this.handleIndustry(function() {
            t.temporaryData.edit.enterMark = "industryMark", t.temporaryData.edit.industryData = {
                industry: n,
                industry_data: a
            }, wx.navigateBack({
                delta: 1
            });
        });
    }
});