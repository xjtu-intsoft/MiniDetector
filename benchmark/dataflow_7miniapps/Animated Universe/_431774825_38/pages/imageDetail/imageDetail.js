var e, t = require("../../utils/util.js"), a = require("../../utils/event.js"), i = t.pageFun.imageDetail.imageDetailWiki, s = t.pageFun.imageDetail.imageDetailStory, r = t.pageFun.imageDetail.imageDetailManySubject, n = t.pageFun.imageDetail.imageDetailOneSubject, d = t.pageFun.imageDetail.imageDetailIpHome, c = t.pageFun.imageDetail.imageDetailSearchPage, o = 0;

Page({
    data: {
        list: [ {
            text: "保存图片",
            url: "/images/icon_save_picture.png"
        }, {
            text: "推荐给朋友",
            url: "/images/wechat.png",
            type: "share"
        }, {
            text: "发送图片",
            url: "/images/icon_send_picture.png"
        }, {
            text: "加字改字",
            url: "/images/icon_add_characters.png"
        } ],
        preList: [],
        curIndex: 0,
        isHidden: !0,
        params: "",
        dataList: [],
        resource_id: 0,
        source: 5,
        rightText: ""
    },
    onLoad: function(a) {
        if (t.pageFun.loadding(), t.pageFun.isGoAuthorise(), a.scene) {
            var i = decodeURIComponent(a.scene);
            (a = {
                item: {
                    type: n,
                    params: {
                        sg_id: 0,
                        sp_id: 0,
                        page: 0,
                        subject_id: i
                    }
                }
            }).item = JSON.stringify(a.item);
        }
        a = t.pageFun.cacheData(a);
        var s = this;
        this.setData({
            params: a.item
        });
        try {
            JSON.parse(a.item).type == c && this.setData({
                rightText: "（复制查看图片来源）"
            });
        } catch (e) {}
        t.pageAjax.imageDetailLoadData(a.item, function(t, a, i, r, n, d, c) {
            "" !== t[a] && 0 !== t.length || s.imgError(), s.setData({
                urlList: t,
                curIndex: a,
                resource_id: i,
                dataList: r,
                shareText: n,
                preList: d
            }), e = c;
        });
    },
    onShow: function() {
        var e = this.data, t = JSON.parse(e.params);
        o = Date.parse(new Date());
        var s = t.params, r = t.type, d = wx.getStorageSync("user_Id");
        r == i ? a.mtaEvent("baikePreviewPic", d, s.gifnews_id, s.bk_id, s.bkm_id, s.bkp_id, e.resource_id) : r == n && a.mtaEvent("subjectDetailPreviewPic", d, s.subject_id, s.sg_id, s.sp_id, e.resource_id);
    },
    imgLoad: function() {
        t.pageFun.closeLoadding();
    },
    imgError: function() {
        t.pageFun.closeLoadding(), wx.showToast({
            title: "图片加载失败，请重试 ",
            icon: "none"
        });
    },
    onShareAppMessage: function(a) {
        var o, u, g = this.data, m = g.dataList, p = JSON.parse(g.params), l = p.params, h = p.type, _ = g.curIndex, w = m[_];
        if (this.mtaEventFn("share"), h == i) l.bkp_id = w.bkp_id, t.pageFun.cacheTesterData(a.from, "bk_id:" + l.bk_id), 
        o = "/pages/dynamicWiki/dynamicWiki?bk_id=" + l.bk_id; else if (h == r) l.subject_id = w.subject_id, 
        g.shareText = w.share_text, u = w.subject_show_name, t.pageFun.cacheTesterData(a.from, "subject_id:" + l.subject_id), 
        o = "pages/streamImages/streamImages?item=" + JSON.stringify({
            theme_id: l.theme_id,
            type: 3
        }); else if (h == n) {
            l.sp_id = w.sp_id, t.pageFun.cacheTesterData(a.from, "subject_id:" + l.subject_id);
            var x = e.subject;
            u = x.subject_show_name, o = "pages/streamImages/streamImages?item=" + JSON.stringify(1 == x.subject_type ? {
                theme_id: x.show_all,
                type: 3
            } : {
                type: 1,
                article_id: l.subject_id
            });
        } else h == d ? (l.id = w.id, t.pageFun.cacheTesterData(a.from, "ipHome_id:" + l.id), 
        o = "pages/streamImages/streamImages?item=" + JSON.stringify({
            ip_id: l.ip_id,
            type: 4
        })) : h == c ? (l.index = _, g.shareText = l.searchText + "表情了解一下", t.pageFun.cacheTesterData(a.from, "searchText:" + l.searchText), 
        o = "pages/searchPage/searchPage?showType=3&value=" + l.searchText) : h == s && (o = "/pages/dynamicWiki/dynamicWiki?bk_id=" + l.bk_id);
        return "button" === a.from ? {
            title: g.shareText,
            imageUrl: t.toolFuns.isGIFIphone(g.preList[_])
        } : {
            path: o,
            title: u || g.shareText,
            imageUrl: t.toolFuns.isGIFIphone(g.preList[_])
        };
    },
    closeTip: function(e) {
        1 == e.detail ? (wx.setStorageSync("noFirstPreview", 1), a.mtaEvent("imageDetailNoMoreTip")) : a.mtaEvent("imageDetailMeKnow"), 
        this.setData({
            isHidden: !0
        }), this.preview();
    },
    fun: function(e) {
        var a = e.currentTarget.dataset.index;
        if (0 == a) this.saveImage(); else if (2 == a) this.previewImage(); else if (3 == a) {
            var i = this.data;
            this.mtaEventFn("addText"), wx.navigateTo({
                url: "/pages/addText/addText?image_url=" + i.preList[i.curIndex]
            });
        }
        t.submitFormId(e.detail.formId);
    },
    previewImage: function() {
        wx.getStorageSync("noFirstPreview") ? this.preview() : this.setData({
            isHidden: !1
        });
    },
    mtaEventFn: function(e) {
        var t, s = this.data, r = JSON.parse(s.params), d = wx.getStorageSync("user_Id"), c = r.params, o = r.type, u = s.dataList;
        "friends" == e ? t = [ "baikePreViewFriends", "subjectDetailPreViewFriends" ] : "download" == e ? t = [ "baikePreViewPicDownload", "subjectDetailPreViewPicDownload" ] : "share" == e && (t = [ "baikePreViewShare", "subjectDetailPreViewShare" ]), 
        "addText" == e ? a.mtaEvent("imageDetailAddText") : o == i ? a.mtaEvent(t[0], d, c.gifnews_id, c.bk_id, c.bkm_id, u[s.curIndex].bkp_id) : o == n && a.mtaEvent(t[1], d, c.subject_id, c.sg_id, c.sp_id);
    },
    preview: function() {
        var e = this.data;
        this.mtaEventFn("friends"), wx.previewImage({
            current: e.preList[e.curIndex],
            urls: e.preList
        });
    },
    saveImage: function() {
        t.pageFun.loadding();
        var e = this.data;
        this.mtaEventFn("download"), wx.downloadFile({
            url: e.preList[e.curIndex],
            success: function(e) {
                200 != e.statusCode ? (t.pageFun.closeLoadding(), wx.showToast({
                    title: "保存失败，请重试",
                    icon: "none"
                })) : t.toolFuns.downloadImg(e.tempFilePath, "保存失败，请打开保存相册权限");
            },
            fail: function() {
                t.pageFun.closeLoadding(), wx.showToast({
                    title: "保存失败，请重试",
                    icon: "none"
                });
            }
        });
    },
    changeImg: function(e) {
        var i = "left" == e.target.dataset.type ? -1 : 1, s = this.data, r = s.curIndex + 1 + i;
        r < 1 || r > s.preList.length || (i > 0 ? a.mtaEvent("imageDetailTapPreviousPiece") : a.mtaEvent("imageDetailTapNextPiece"), 
        this.setData({
            curIndex: this.data.curIndex + i
        }), t.submitFormId(e.detail.formId));
    },
    swiperChangeImg: function(e) {
        this.setData({
            curIndex: e.detail.current
        });
    },
    copy: function() {
        try {
            var e = this.data, t = e.urlList, a = e.curIndex;
            e.params;
            wx.setClipboardData({
                data: t[a].desc,
                success: function(e) {
                    wx.showToast({
                        title: "在浏览器中打开",
                        duration: 3e3
                    });
                }
            });
        } catch (e) {}
    }
});