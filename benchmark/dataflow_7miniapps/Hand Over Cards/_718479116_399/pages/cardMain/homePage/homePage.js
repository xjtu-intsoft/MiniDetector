var a, t, e, i = getApp(), n = require("../../../7931C4950691379C1F57AC929AD2E9B3.js");

Page({
    data: {
        systemInfo: i.systemInfo
    },
    onLoad: function(i) {
        console.log("homePage.onload", i), t = this, e = i, a = getCurrentPages(), this.qiyeDataFun();
    },
    qiyeDataFun: function() {
        "lookSelf" == e.st && ("cardMain" == e.detail ? this.setData({
            qiyeData: i.mycard.defCard.company_data,
            optionsL: e
        }) : this.setData({
            qiyeData: a[a.length - 2].data.singleData.company_data,
            optionsL: e
        })), "look" == e.st && this.setData({
            qiyeData: i.mycard.defCard.company_data,
            optionsL: e
        }), "lookOther" == e.st && this.setData({
            qiyeData: a[a.length - 2].data.singleData.company_data,
            optionsL: e
        }), "teamMemb" == e.main && this.setData({
            qiyeData: a[a.length - 2].data.singleData
        });
    },
    preview: function(a) {
        wx.previewImage({
            urls: [ a.currentTarget.dataset.detail ]
        });
    },
    onShow: function() {
        var a = this;
        t.setData({
            qiyeData: t.data.qiyeData
        }), i.upEnterpriseInfor && i.setRequest({
            url: "webEntWebsiteFind",
            data: {
                entId: this.data.qiyeData.entId
            }
        }, function(t) {
            a.setData({
                qiyeData: t
            }), i.upEnterpriseInfor = !1;
        });
    },
    toChanpinShow: function(a) {
        wx.navigateTo({
            url: "../product/product?detail=show&id=" + e.id + "&ind=" + a.currentTarget.dataset.ind
        });
    },
    toEdit: function() {
        wx.navigateTo({
            url: "../buildHomePage/buildHomePage?id=" + e.id + "&detail=edit&main=" + e.main
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onShareAppMessage: function() {
        return n.shareAppMessa({
            title: "我向您推荐“递名片”",
            path: "pages/cardMy/about/about?shareOthers=homePage&shareType=05",
            imageUrl: i.source.shareImage
        });
    }
});