var e, a, t = new (require("../../../AFC697330691379CC9A0FF345133E9B3.js").wxRequest)(), i = require("../../../7931C4950691379C1F57AC929AD2E9B3.js"), s = getApp();

Page({
    data: {
        systemInfo: s.systemInfo,
        compatibleManage: s.compatibleManage,
        actionSheet: {
            show: !1,
            addressList: !1,
            share: !0,
            canIUse: s.compatibleManage.shareMenu,
            delete: !0,
            more: !0,
            edit: !1
        }
    },
    onLoad: function(t) {
        console.log("batchReceiveShow.onload", t), a = t, e = this, this.setData({
            options: t
        }), s.compatibleManage.shareMenu && wx.hideShareMenu();
    },
    onShow: function() {
        this.singleData(), this.animation = wx.createAnimation({
            duration: 300,
            timingFunction: "ease"
        });
    },
    singleData: function() {
        var n = this;
        t.requestUrl({
            url: "selectById",
            data: {
                id: a.id,
                formtoken: a.formtoken
            }
        }, function(t) {
            e.setData({
                singleData: t
            }), "mine" == a.mark ? (n.setData({
                deleted: t.isDel
            }), t.isDel || s.compatibleManage.shareMenu && wx.showShareMenu({
                withShareTicket: !0
            })) : "saved" == a.mark && s.compatibleManage.shareMenu && wx.showShareMenu({
                withShareTicket: !0
            });
        }, function() {
            n.data.singleData || n.setData({
                "netError.show": !0
            });
        }, function() {
            i.hidetoast();
        });
    },
    againRequest: function() {
        i.showtoast("加载中...", "loading", 8e3), this.setData({
            "netError.show": !1
        }), this.onShow();
    },
    setting: function() {
        this.setData({
            "actionSheet.show": !0
        }), this.animation.translateY(-200).step(), this.setData({
            "actionSheet.sheetAnimation": this.animation.export()
        });
    },
    actionSheetContainerClick: function() {
        this.animation.translateY(200).step(), this.setData({
            "actionSheet.sheetAnimation": this.animation.export()
        }), setTimeout(function() {
            e.setData({
                "actionSheet.show": !e.data.actionSheet.show
            });
        }, 200);
    },
    addressListClick: function(e) {
        i.saveAddress(this.data.singleData);
    },
    deleteCard: function(e) {
        i.deletemodal("确定删除" + this.data.singleData.name + "的名片?", function() {
            i.showtoast("删除中...", "loading", 8e3), t.requestUrl({
                url: "cardsOtherCard",
                extra: "/" + a.id,
                method: "DELETE"
            }, function(e) {
                i.showtoast("删除成功", "success", 1e3), setTimeout(function() {
                    wx.navigateBack({
                        delta: 1
                    });
                }, 600);
            });
        });
    },
    toLookHomePage: function() {
        this.data.singleData;
        wx.navigateTo({
            url: "/pages/cardMain/homePage/homePage?id=" + a.id + "&detail=enterShow&st=lookOther"
        });
    },
    toLookHomePageS: function() {
        var e = this.data.singleData;
        wx.navigateTo({
            url: "/pages/cardMain/homePage/homePage?id=" + e.id + "&detail=batchReceiveShow&st=lookSelf&ctype=self"
        });
    },
    save: function(a) {
        var n = this;
        this.setData({
            loading: !0
        });
        var o = this.data.singleData, h = [ {
            openid: o.openid,
            id: o.id
        } ];
        t.requestUrl({
            url: "batchSave",
            data: {
                forwarderOpenid: e.data.options.shareOthers,
                openid_id: h
            },
            method: "POST"
        }, function(a) {
            s.rsListObj.ifFresh = !0, e.data.blurUp = !0, i.showtoast("保存成功", "success", 1e3), 
            e.setData({
                "options.mark": "saved"
            }), e.onShow();
        }, "", function() {
            n.setData({
                loading: !1
            });
        });
    },
    onHide: function() {},
    ss: function() {},
    shareCardClick: function() {
        !s.compatibleManage.shareMenu && i.showmodal({
            data: "点击右上角三个点，选择“分享”",
            cancel: !1,
            text: "我知道了"
        }), s.gioCustome({
            t: "batchReceiveShow.001"
        });
    },
    shareButtonClick: function() {
        !s.compatibleManage.shareMenu && i.shareButton(this, "发送本张名片", "点击右上角，选择“分享”");
    },
    onShareAppMessage: function() {
        if ("mine" != a.mark || this.data.deleted) return "saved" == a.mark ? i.shareAppMessa({
            title: "我向您转发" + this.data.singleData.name + "的名片，请点击查看",
            path: "pages/cardAll/howEnter/howEnter?id=" + a.id + "&shareOthers=" + s.client.openid + "&shareType=03&formtoken=" + this.data.singleData.formtoken
        }) : i.shareAppMessa({
            title: "我向您推荐“递名片”",
            path: "pages/cardMy/about/about?shareOthers=batchReceiveShow&shareType=05",
            imageUrl: s.source.shareImage
        });
        var e = s.source.sharePrefix + this.data.singleData.userpic.name;
        return i.shareAppMessa({
            title: "我是" + this.data.singleData.name + "，邀请您与我交换名片",
            path: "pages/cardAll/howEnter/howEnter?id=" + a.id + "&shareOthers=3&shareType=02&formtoken=" + this.data.singleData.formtoken,
            imageUrl: e
        });
    }
});