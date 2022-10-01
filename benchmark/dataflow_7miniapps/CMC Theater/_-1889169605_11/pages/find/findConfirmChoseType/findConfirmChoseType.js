var e = require("../../../templates/find/findPicker/findPicker.js");

Page({
    data: {
        choseType: "none",
        choseTypedata: {},
        selfShowTime: !1,
        serverShowType: "none",
        isSetPickerDelegate: !1
    },
    onLoad: function(e) {
        var t = getApp().decodeDataAndJsonParse(e.choseTypedata);
        if (this.setSelectTypeData(t), this.setData({
            choseTypedata: t
        }), getApp().hall_id && getApp().hall_id.length > 0) {
            for (var i in t.deliveryds) if (t.deliveryds[i].id == getApp().hall_id) {
                var a = t.deliveryds.splice(i, 1);
                t.deliveryds.unshift(a[0]);
                break;
            }
            getApp().hall_id = "", this.clickTakeService();
        }
    },
    setPicerDelegate: function(t) {
        0 == this.data.isSetPickerDelegate && (this.data.isSetPickerDelegate = !0, e.setDelegate(this, t));
    },
    setSelectTypeData: function(e) {
        var t = e.selectTypeData;
        "none" != t.choseType ? "takeSelf" == t.choseType ? this.setData({
            choseType: t.choseType,
            takeSelfTimeData: {
                timeStr: t.time,
                buyTimeStr: t.buytime
            }
        }) : "takeService" == t.choseType && (console.log(t.time), this.setData({
            choseType: t.choseType,
            sendServeDeliveryData: {
                deliveryString: t.location
            },
            sendServeTimeData: {
                timeStr: t.time,
                buyTimeStr: t.buytime
            }
        })) : this.setPicerDelegate(e);
    },
    onShow: function() {},
    clickTakeSelf: function() {
        console.log("点击了前提自取"), this.setPicerDelegate(this.data.choseTypedata), this.setData({
            choseType: "takeSelf",
            selfShowTime: !0
        });
    },
    clickTakeSelfChoseTime: function() {
        console.log("点击了自取时间选择"), this.setPicerDelegate(this.data.choseTypedata), this.setData({
            selfShowTime: !this.data.selfShowTime
        });
    },
    clickTakeService: function() {
        this.setPicerDelegate(this.data.choseTypedata), this.setData({
            choseType: "takeService",
            serverShowType: "none" == this.data.serverShowType ? "delivery" : this.data.serverShowType
        });
    },
    clickTakeServiceTimeDelivery: function() {
        this.setPicerDelegate(this.data.choseTypedata), this.setData({
            serverShowType: "delivery" == this.data.serverShowType ? "none" : "delivery"
        });
    },
    clickTakeServiceTime: function() {
        this.setPicerDelegate(this.data.choseTypedata), "time" != this.data.serverShowType && (e.clickTakeServiceTime(), 
        this.setData({
            serverShowType: "time"
        }));
    },
    clickTakeOut: function() {
        this.setData({
            choseType: "takeOut"
        });
    },
    firstPickerChange: function(t) {
        e.firstPickerChange(t);
    },
    secondPickerChange: function(t) {
        e.secondPickerChange(t);
    },
    thirdPickerChange: function(t) {
        e.thirdPickerChange(t);
    },
    choseTakeType: function() {
        var t = {};
        if (t.choseType = this.data.choseType, "takeSelf" == t.choseType) {
            if ("1" == this.data.choseTypedata.is_show_time && (!e.data.takeSelfTime.dataDic.timeStr || e.data.takeSelfTime.dataDic.timeStr.length <= 0)) return void wx.showToast({
                icon: "none",
                title: "请选择自取时间"
            });
            t.location = "前台自取", t.time = e.data.takeSelfTime.dataDic.timeStr, t.buytime = e.data.takeSelfTime.dataDic.buyTimeStr;
        } else if ("takeService" == t.choseType) {
            if (!e.data.sendServeDelivery.dataDic.deliveryString || e.data.sendServeDelivery.dataDic.deliveryString.length <= 0) return void wx.showToast({
                icon: "none",
                title: "请选择送餐地点"
            });
            if ("请选择" == e.data.sendServeTime.dataDic.timeStr || e.data.sendServeTime.dataDic.timeStr.length <= 0) return void wx.showToast({
                icon: "none",
                title: "请选择取餐时间"
            });
            t.location = e.data.sendServeDelivery.dataDic.deliveryString, t.time = e.data.sendServeTime.dataDic.timeStr, 
            t.buytime = e.data.sendServeTime.dataDic.buyTimeStr;
        } else {
            if ("takeOut" != t.choseType) return void wx.showToast({
                icon: "none",
                title: "请选择取餐方式"
            });
            console.log("selectTypeData.choseType", t.choseType), t.location = "外卖配送", t.takeOutLocation = "请填写收货地址";
        }
        var i = getCurrentPages();
        i[i.length - 2].setData({
            selectTypeData: t
        }), wx.navigateBack();
    },
    setDeliveryTime: function() {}
});