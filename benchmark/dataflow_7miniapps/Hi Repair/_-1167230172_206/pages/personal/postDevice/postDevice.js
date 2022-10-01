var e = require("../../../comm/script/fetch"), t = (require("../../../comm/script/config"), 
new getApp());

t.getParams;

Page({
    data: {
        deviceInfo: {},
        index: null,
        expressCompany: [],
        expressNumber: "",
        expressRemark: ""
    },
    onLoad: function(e) {
        this.getExpressList(), this.setData({
            deviceInfo: JSON.parse(e.device)
        }), console.log(this.data.deviceInfo);
    },
    getExpressList: function() {
        var i = this, s = t.globalData.hwxUserInfo.token;
        e.getExpressList(s, function(e) {
            i.setData({
                expressCompany: e
            });
        });
    },
    getExpressNumber: function(e) {
        this.setData({
            expressNumber: e.detail.value
        });
    },
    getExpressRemark: function(e) {
        this.setData({
            expressRemark: e.detail.value
        });
    },
    onReady: function() {},
    selectExpressCompany: function(e) {
        this.setData({
            index: e.detail.value
        });
    },
    confirmCommit: function() {
        var i = t.globalData.hwxUserInfo.token, s = this.data.index ? this.data.expressCompany[this.data.index].id : "", a = {
            number: this.data.expressNumber,
            company_id: s,
            remark: this.data.expressRemark,
            order_id: this.data.deviceInfo.orderid,
            order_sn: this.data.deviceInfo.ordersn
        };
        this.data.expressNumber ? s ? this.data.expressNumber.match(/^[a-zA-Z0-9]{0,25}$/i) ? (wx.showLoading({
            title: "请稍等",
            mask: !0,
            success: function(e) {},
            fail: function() {},
            complete: function() {}
        }), e.postDevice(i, a, function(e) {
            console.log("res"), console.log(e), wx.hideLoading(), wx.showToast({
                title: "填写成功",
                mask: !0,
                duration: 2e3
            }), setTimeout(function() {
                wx.navigateBack();
            }, 2e3);
        }, function(e) {
            console.log("err"), console.log(e), wx.showToast({
                title: "信息填写错误",
                image: "../../../img/wx_index/warning.png",
                duration: 2e3
            });
        })) : wx.showToast({
            title: "快递单号输入错误",
            image: "../../../img/wx_index/warning.png",
            duration: 2e3
        }) : wx.showToast({
            title: "请填写快递公司",
            image: "../../../img/wx_index/warning.png",
            duration: 2e3
        }) : wx.showToast({
            title: "请填写物流单号",
            image: "../../../img/wx_index/warning.png",
            duration: 2e3
        });
    }
});