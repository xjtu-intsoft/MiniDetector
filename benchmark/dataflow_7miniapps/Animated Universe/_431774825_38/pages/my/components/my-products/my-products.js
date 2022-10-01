function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var t = require("../../../../utils/util.js"), a = require("../../../../utils/event.js");

Component({
    properties: {
        hasMoreData: Boolean
    },
    data: {
        isHidden: !0,
        selectUrls: {},
        deleteText: "删除",
        noSelect: !0
    },
    methods: {
        receiveData: function(e, t) {
            var a = this.data.list;
            a = "refresh" == t ? e : a.concat(e), this.setData({
                list: a
            });
        },
        rtClick: function() {
            this.setData({
                isHidden: !1
            }), a.mtaEvent("myPageTapDel");
        },
        loadImg: function(t) {
            var a = "list[" + t.target.dataset.index + "].bgColor";
            this.setData(e({}, a, ""));
        },
        previewImages: function(e) {
            if (this.data.isHidden) {
                var t = e.currentTarget.dataset, i = t.list, s = t.index, n = [];
                i.forEach(function(e) {
                    n.push(e.url);
                });
                var l = wx.getStorageSync("user_Id");
                a.mtaEvent("myWorksPicView", l, n[s]), wx.previewImage({
                    current: n[s],
                    urls: n
                });
            }
        },
        deletePro: function() {
            var e = this, i = this.data, s = [];
            for (var n in i.selectUrls) s.push(i.selectUrls[n]);
            s.length && wx.showModal({
                title: "确认删除",
                content: "删除的作品无法恢复",
                success: function(a) {
                    a.confirm && (t.pageFun.loadding(), t.pageAjax.callAjax({
                        url: "delete_my_ugc",
                        params: {
                            url: JSON.stringify(s)
                        },
                        success: function(a) {
                            t.pageFun.closeLoadding(), e.setData({
                                isHidden: !0,
                                selectUrls: {},
                                deleteText: "删除"
                            }), e.triggerEvent("refreshData");
                        },
                        fail: function() {
                            t.pageFun.closeLoadding(), wx.showToast({
                                title: "删除失败",
                                image: "/images/icon_delete_failed.png"
                            });
                        }
                    }));
                }
            }), a.mtaEvent("mypageTapDelText");
        },
        cancel: function() {
            this.setData({
                isHidden: !0
            }), a.mtaEvent("mypageTapCancelText");
        },
        selectPro: function(i) {
            var s, n = this.data, l = n.list, r = i.target.dataset.index, c = l[r], o = "list[" + r + "].isSelected", d = n.selectUrls, u = "";
            c.isSelected ? delete d[r] : (d[r] = c.url, a.mtaEvent("mypageTapSelected"));
            var g = t.verify.isFullObject(d);
            u = g ? "删除(" + Object.keys(d).length + ")" : "删除", this.setData((s = {}, e(s, o, !c.isSelected), 
            e(s, "deleteText", u), s)), n.noSelect && g ? this.setData({
                noSelect: !1
            }) : n.noSelect || g || this.setData({
                noSelect: !0
            });
        }
    }
});