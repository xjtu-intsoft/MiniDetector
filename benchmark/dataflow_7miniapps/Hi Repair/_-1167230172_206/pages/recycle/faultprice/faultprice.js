var t = require("../../../comm/script/fetch"), e = (require("../../../comm/script/config"), 
getApp());

Page({
    data: {
        isFullSucreen: !!e.globalData.isFullSucreen,
        faultData: [],
        progressIndex: 0,
        showProgressFault: 0,
        modelName: "iphone XR",
        scrollViewHeight: null,
        scrollTop: 0,
        progressLength: [],
        mid: null,
        isLogin: !1,
        faultInfoWrapHeight: "auto",
        showCoformModel: !1
    },
    onLoad: function(t) {
        var e = t.mid ? t.mid : 1656, a = t.name ? t.name : "iPhone XS MAX";
        this.setData({
            modelName: a,
            mid: e
        }), this.filterData(), this.getFaultSelect(e);
    },
    getFaultSelect: function(e) {
        var a = this;
        wx.showLoading({
            title: "加载中..."
        });
        var o = {
            mid: e
        };
        t.getFaultSelect(o, function(t) {
            var e = [];
            t.forEach(function(t, a) {
                "1" === t.required && e.push(a);
            }), a.setData({
                progressLength: e,
                faultData: t
            });
            var o = a;
            wx.createSelectorQuery().select(".fault_progress_container").boundingClientRect(function(t) {
                wx.createSelectorQuery().select(".fault_detail_container").boundingClientRect(function(e) {
                    wx.createSelectorQuery().select(".gujia_btn").boundingClientRect(function(a) {
                        console.log("gurect--"), console.log(a), wx.createSelectorQuery().select(".fault_title_wrap").boundingClientRect(function(n) {
                            console.log("titleWrap---"), console.log(n), o.setData({
                                scrollViewHeight: wx.getSystemInfoSync().windowHeight - t.height - e.height - a.height + "px",
                                faultInfoWrapHeight: wx.getSystemInfoSync().windowHeight - t.height - e.height - a.height - 2 * n.height + "px"
                            });
                        }).exec();
                    }).exec();
                }).exec();
            }).exec(), wx.hideLoading();
        }, function(t) {
            wx.hideLoading();
        });
    },
    onShow: function() {
        var t = e.globalData.hwxUserInfo.token;
        this.setData({
            isLogin: !!t
        });
    },
    filterData: function() {
        this.data.faultData.forEach(function(t) {
            t.selectedFaultName = "", t.child.forEach(function(t) {
                t.selected = !1;
            });
        });
    },
    selectFault: function(t) {
        var e = t.currentTarget.dataset.index, a = t.currentTarget.dataset.eleindex, o = t.currentTarget.dataset.required, n = this.selectData(e, a), i = (this.data.progressIndex, 
        0);
        if (n.forEach(function(t, e) {
            t.selectedFaultName && i++;
        }), console.log("data===="), console.log(n), !t.currentTarget.dataset.selected || "1" != o) {
            console.log(i, e, this.data.showProgressFault), e >= this.data.progressIndex ? (this.setData({
                faultData: n
            }), "1" == o && (this.setData({
                progressIndex: i
            }), e == this.data.showProgressFault && this.setData({
                showProgressFault: this.data.showProgressFault + 1
            }))) : (console.log(22222), this.setData({
                faultData: n
            }), "1" == o && this.setData({
                progressIndex: i
            }));
            var s = this;
            this.data.progressIndex != this.data.faultData.length && e + 1 != this.data.faultData.length && setTimeout(function() {
                wx.createSelectorQuery().select(".fault_title_wrap").boundingClientRect(function(t) {
                    s.setData({
                        scrollTop: t.height * (s.data.progressIndex - 1 < 0 ? 0 : s.data.progressIndex - 1)
                    });
                }).exec();
            }, 300);
        }
    },
    selectData: function(t, e) {
        var a = this.data.faultData;
        return a.forEach(function(a, o) {
            t == o && a.child.forEach(function(t, o) {
                e == o ? "1" != a.is_multiple ? (t.selected = !0, a.selectedFaultName = t.attr_fault_info) : t.selected = !t.selected : "1" != a.is_multiple && (t.selected = !1);
            });
        }), a;
    },
    editFault: function(t) {
        var e = t.currentTarget.dataset.index, a = t.currentTarget.dataset.required, o = this.data.faultData;
        o.forEach(function(t, a) {
            e == a && (t.selectedFaultName = "", t.child.forEach(function(t) {
                t.selected = !1;
            }));
        }), this.setData({
            faultData: o
        }), "1" == a && this.setData({
            progressIndex: this.data.progressIndex - 1
        });
    },
    watchImage: function(t) {
        wx.previewImage({
            current: t.currentTarget.dataset.src,
            urls: [ t.currentTarget.dataset.src ]
        });
    },
    showAgree: function() {
        this.data.progressLength.length == this.data.progressIndex ? this.setData({
            showCoformModel: !0
        }) : wx.showToast({
            title: "您还有故障未选择",
            icon: "none",
            duration: 1500
        });
    },
    closeCofirmModel: function() {
        this.setData({
            showCoformModel: !1
        });
    },
    gujiaNow: function() {
        if (this.data.progressLength.length == this.data.progressIndex) {
            wx.showToast({
                title: "估价中...",
                image: "../../../img/wx_recycle/loadingfault.gif",
                mask: !0
            });
            var e = [];
            this.data.faultData.forEach(function(t) {
                t.child.forEach(function(t) {
                    t.selected && e.push(t.id);
                });
            });
            var a = {
                mid: this.data.mid,
                attrs: e
            };
            t.getFaultPrice(a, function(t) {
                wx.hideToast(), wx.setStorageSync("FAULTPRICE", t), wx.navigateTo({
                    url: "../commitorder/commitorder?faultprice=" + JSON.stringify(t)
                });
            }, function(t) {
                wx.hideToast(), wx.showToast({
                    title: t,
                    icon: "none",
                    duration: 1500
                });
            });
        } else wx.showToast({
            title: "您还有故障未选择",
            icon: "none",
            duration: 1500
        });
    },
    getPhoneNumber: function(a) {
        var o = encodeURIComponent(a.detail.iv), n = encodeURIComponent(a.detail.encryptedData), i = this, s = wx.getStorageSync("CODE");
        "undefined" != n ? t.getWxLogin(encodeURIComponent(s), n, o, function(t) {
            console.log(t), e.setHwxUserInfo(t.token, t.phone_number), i.setData({
                isLogin: !0,
                showCoformModel: !1
            }), i.gujiaNow();
        }, function(t) {
            console.log("err6666"), console.log(t), wx.showToast({
                title: "微信授权登录失败",
                icon: "none",
                duration: 1e3,
                complete: function() {
                    wx.navigateTo({
                        url: "../../personal/login/login"
                    });
                }
            });
        }) : wx.navigateTo({
            url: "../../personal/login/login"
        });
    },
    toUserAgreement: function() {
        wx.navigateTo({
            url: "../userAgreementWeb/userAgreementWeb"
        });
    }
});