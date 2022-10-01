var t = require("../../../comm/script/fetch"), e = (require("../../../comm/script/config"), 
new getApp());

e.getParams;

Page({
    data: {
        isShowKf: !1,
        isShowModal: !1,
        conditionList: [ {
            name: "维修订单",
            type: 1
        }, {
            name: "回收订单",
            type: 3
        } ],
        tabIndex: 0,
        orderList: [],
        repairType: 1,
        showNoNet: !1
    },
    getPersonalOrderList: function(a) {
        var r = this, s = e.globalData.hwxUserInfo.token;
        wx.showLoading({
            title: "加载中",
            mask: !0
        }), t.getPersonalOrderList(s, a, function(t) {
            t.forEach(function(t) {
                t.showComplainBtn = !0, t.showContactBtn = !1, t.showCommentBtn = !1, t.showExpressBtn = !1, 
                t.isShowKf = !1, t.showWatchExpressBtn = !1, 0 == t.status ? (t.statusName = "已取消", 
                t.showComplainBtn = !0) : 1 == t.status ? (t.statusName = "已下单", t.showComplainBtn = !0) : 5 == t.status && (t.statusName = "已完成", 
                Number(t.is_comment) || 3 == t.category_type ? t.showComplainBtn = !0 : t.showCommentBtn = !0), 
                1 == t.category_id || 31 == t.category_id || 11 == t.category_id ? 2 == t.status ? (t.statusName = "已接单", 
                t.showContactBtn = !0) : 3 == t.status ? (t.statusName = "已出发", t.showContactBtn = !0) : 4 == t.status && (t.statusName = "维修中", 
                t.showContactBtn = !0) : 3 == t.category_id || 12 == t.category_id || 32 == t.category_id ? 4 == t.status ? (t.statusName = "维修中", 
                t.showComplainBtn = !0) : 2 == t.status && (t.statusName = "等待到店", t.showComplainBtn = !0) : 2 != t.category_id && 13 != t.category_id && 33 != t.category_id || (11 == t.status ? (t.statusName = "待邮寄", 
                t.showComplainBtn = !1, t.showExpressBtn = !0) : 12 == t.status ? (t.statusName = "已寄出", 
                t.showWatchExpressBtn = !0) : 13 == t.status ? (t.statusName = "维修中心签收", t.showWatchExpressBtn = !0) : 4 == t.status ? (t.statusName = "维修中", 
                t.showComplainBtn = !0) : 2 == t.status ? (t.statusName = "已预约", t.showComplainBtn = !0) : 14 == t.status ? (t.statusName = "寄回中", 
                t.showWatchExpressBtn = !0) : 15 == t.status ? (t.statusName = "用户签收", t.showWatchExpressBtn = !0) : 1e4 == t.status ? (t.statusName = "待取件", 
                t.showComplainBtn = !0) : 10001 == t.status ? (t.statusName = "已取件", t.showWatchExpressBtn = !0) : 10002 == t.status ? (t.statusName = "回收失败，已寄回", 
                t.showWatchExpressBtn = !0) : 10003 == t.status ? (t.statusName = "已签收", t.showWatchExpressBtn = !0) : 10004 == t.status ? (t.statusName = "回收失败，待寄回", 
                t.showComplainBtn = !0) : 10006 == t.status ? (t.statusName = "待检测", t.showComplainBtn = !0) : 10005 == t.status && (t.statusName = "待确认", 
                t.showComplainBtn = !0));
            }), r.setData({
                orderList: t
            }), wx.hideLoading(), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
        }, function(t) {
            console.log(t), wx.hideLoading(), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh(), 
            r.setData({
                showNoNet: !0
            });
        });
    },
    showPreview: function() {
        wx.previewImage({
            current: "https://image.hiweixiu.com/web-template/home_csr_img_background.png",
            urls: [ "https://image.hiweixiu.com/web-template/home_csr_img_background.png" ]
        });
    },
    goOrderDetail: function(t) {
        console.log(t.currentTarget.dataset), 1 == t.currentTarget.dataset.type ? wx.navigateTo({
            url: "../myOrderDetail/myOrderDetail?order_sn=" + t.currentTarget.dataset.ordersn + "&type=" + t.currentTarget.dataset.type + "&order_id=" + t.currentTarget.dataset.orderid
        }) : 3 == t.currentTarget.dataset.type && wx.navigateTo({
            url: "../recycleOrderDetail/recycleOrderDetail?order_sn=" + t.currentTarget.dataset.ordersn + "&type=" + t.currentTarget.dataset.type + "&order_id=" + t.currentTarget.dataset.orderid
        });
    },
    commentOrder: function(t) {
        wx.navigateTo({
            url: "../orderComment/orderComment?id=" + t.currentTarget.dataset.orderid + "&sn=" + t.currentTarget.dataset.ordersn + "&src=" + t.currentTarget.dataset.src + "&mould=" + t.currentTarget.dataset.mould + "&color=" + t.currentTarget.dataset.color + "&category=" + t.currentTarget.dataset.category
        });
    },
    complainOrder: function() {
        wx.makePhoneCall({
            phoneNumber: "4000171010"
        });
    },
    editExpress: function(t) {
        var e = {
            name: t.currentTarget.dataset.device.mould_name,
            color: t.currentTarget.dataset.device.color,
            type: t.currentTarget.dataset.device.category,
            src: t.currentTarget.dataset.device.o_pic,
            orderid: t.currentTarget.dataset.device.id,
            ordersn: t.currentTarget.dataset.device.order_sn
        };
        wx.navigateTo({
            url: "../postDevice/postDevice?device=" + JSON.stringify(e)
        });
    },
    showExpressInfo: function(t) {
        var e, a, r;
        12 == t.currentTarget.dataset.status ? (e = t.currentTarget.dataset.offtype, a = t.currentTarget.dataset.offexpressnumber, 
        r = t.currentTarget.dataset.offexpressname) : 14 == t.currentTarget.dataset.status && (e = t.currentTarget.dataset.backtype, 
        a = t.currentTarget.dataset.backexpressnumber, r = t.currentTarget.dataset.backexpressname);
        var s = {
            brandid: e,
            expressnumber: a,
            expressname: r,
            src: t.currentTarget.dataset.src,
            color: t.currentTarget.dataset.color,
            mould_name: t.currentTarget.dataset.mould,
            category: t.currentTarget.dataset.category,
            id: t.currentTarget.dataset.id
        };
        3 == t.currentTarget.dataset.categorytype ? wx.navigateTo({
            url: "../expressInforecycle/expressInforecycle?data=" + JSON.stringify(s)
        }) : wx.navigateTo({
            url: "../expressInfo/expressInfo?data=" + JSON.stringify(s)
        });
    },
    contactEnginer: function(e) {
        if ("1" == e.currentTarget.dataset.shield) return wx.showLoading({
            title: "正在拨打电话中",
            mask: !0
        }), void t.phoneSheild(e.currentTarget.dataset.phone, this.data.tabIndex + 1, function(t) {
            wx.hideLoading(), wx.showToast({
                title: t.message,
                icon: "none",
                image: "",
                duration: 1500
            });
        }, function(t) {
            wx.hideLoading(), wx.showToast({
                title: t.split("！")[0],
                icon: "none",
                image: "",
                duration: 1500
            });
        });
        wx.makePhoneCall({
            phoneNumber: e.currentTarget.dataset.phone
        });
    },
    onLoad: function(t) {},
    onShow: function() {
        this.getPersonalOrderList(this.data.repairType);
    },
    switchTab: function(t) {
        this.setData({
            tabIndex: t.currentTarget.dataset.index,
            repairType: t.currentTarget.dataset.type
        }), this.getPersonalOrderList(t.currentTarget.dataset.type);
    },
    onPullDownRefresh: function() {
        wx.showNavigationBarLoading(), this.getPersonalOrderList(this.data.repairType);
    },
    refreshNow: function() {
        this.getPersonalOrderList(this.data.repairType);
    },
    hideModal: function() {
        this.setData({
            isShowModal: !1
        });
    },
    showKf: function(t) {
        console.log(t.currentTarget.dataset.index);
        var e = this.data.orderList;
        e.forEach(function(e, a) {
            a == t.currentTarget.dataset.index ? e.isShowKf = !e.isShowKf : e.isShowKf = !1;
        }), console.log(e), this.setData({
            orderList: e
        });
    },
    makePhoncall: function() {
        wx.makePhoneCall({
            phoneNumber: "4000171010"
        });
    }
});