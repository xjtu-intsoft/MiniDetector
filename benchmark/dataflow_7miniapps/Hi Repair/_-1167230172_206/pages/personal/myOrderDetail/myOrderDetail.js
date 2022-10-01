var e = require("../../../comm/script/fetch"), t = (require("../../../comm/script/config"), 
new getApp()), a = (t.getParams, {
    1: {
        1: {
            1: "下单成功",
            2: "工程师已接单",
            3: "工程师已出发",
            4: "工程师维修中",
            5: "订单已完成",
            0: "订单已取消"
        },
        11: {
            1: "下单成功",
            2: "工程师已接单",
            3: "工程师已出发",
            4: "工程师维修中",
            5: "订单已完成",
            0: "订单已取消"
        },
        2: {
            1: "下单成功",
            11: "待邮寄",
            12: "已邮寄",
            13: "维修中心已签收",
            2: "已预约",
            3: "工程师维修中",
            4: "工程师维修中",
            14: "维修完成，待签收",
            15: "维修完成",
            5: "维修完成",
            0: "订单已取消"
        },
        13: {
            1: "下单成功",
            11: "待邮寄",
            12: "已邮寄",
            13: "维修中心已签收",
            2: "已预约",
            3: "工程师维修中",
            4: "工程师维修中",
            14: "维修完成，待签收",
            15: "维修完成",
            5: "维修完成",
            0: "订单已取消"
        },
        3: {
            1: "下单成功",
            2: "下单成功",
            3: "下单成功",
            4: "到店维修中",
            5: "订单已完成",
            0: "订单已取消"
        },
        12: {
            1: "下单成功",
            2: "下单成功",
            3: "下单成功",
            4: "到店维修中",
            5: "订单已完成",
            0: "订单已取消"
        }
    },
    2: {
        1: {
            1: "下单成功",
            2: "工程师已接单",
            3: "工程师已出发",
            4: "工程师维修中",
            5: "订单已完成",
            0: "订单已取消"
        },
        11: {
            1: "下单成功",
            2: "工程师已接单",
            3: "工程师已出发",
            4: "工程师维修中",
            5: "订单已完成",
            0: "订单已取消"
        },
        2: {
            1: "下单成功",
            11: "待邮寄",
            12: "已邮寄",
            13: "维修中心已签收",
            2: "已预约",
            3: "工程师维修中",
            4: "工程师维修中",
            14: "维修完成，待签收",
            15: "维修完成",
            5: "维修完成",
            0: "订单已取消"
        },
        13: {
            1: "下单成功",
            11: "待邮寄",
            12: "已邮寄",
            13: "维修中心已签收",
            2: "已预约",
            3: "工程师维修中",
            4: "工程师维修中",
            14: "维修完成，待签收",
            15: "维修完成",
            5: "维修完成",
            0: "订单已取消"
        },
        3: {
            1: "下单成功",
            4: "到店维修中",
            5: "订单已完成",
            0: "订单已取消"
        },
        12: {
            1: "下单成功",
            4: "到店维修中",
            5: "订单已完成",
            0: "订单已取消"
        }
    },
    3: {
        31: {
            1: "下单成功",
            2: "工程师已接单",
            3: "工程师已出发",
            4: "回收检测中...",
            5: "确认回收，打款成功",
            0: "订单已取消"
        },
        32: {
            1: "下单成功，请根据中心地址前往",
            4: "到店回收中",
            5: "确认回收，打款成功",
            0: "已取消"
        }
    }
}), i = {
    1: {
        1: {
            1: "正在为您匹配工程师",
            2: "感谢您的耐心等待，稍后工程师会主动与您联系",
            3: "请耐心等待工程师到达",
            4: "感谢您对Hi维修的信任，专业的我们给您专业的服务",
            5: "感谢您对Hi维修的信任，期待再次选择",
            0: "很抱歉没能给您提供服务，期待您的再次选择"
        },
        11: {
            1: "正在为您匹配工程师",
            2: "感谢您的耐心等待，稍后工程师会主动与您联系",
            3: "请耐心等待工程师到达",
            4: "感谢您对Hi维修的信任，专业的我们给您专业的服务",
            5: "感谢您对Hi维修的信任，期待再次选择",
            0: "很抱歉没能给您提供服务，期待您的再次选择"
        },
        2: {
            1: "感谢您对Hi维修的信任，请根据维修中心地址邮寄",
            11: "感谢您对Hi维修的信任，请根据维修中心地址邮寄",
            12: "感谢您对Hi维修的信任，收件后我们会尽快维修",
            13: "感谢您对Hi维修的信任，专业的我们给您专业的服务",
            2: "感谢您对Hi维修的信任，专业的我们给您专业的服务",
            3: "感谢您对Hi维修的信任，专业的我们给您专业的服务",
            4: "感谢您对Hi维修的信任，专业的我们给您专业的服务",
            14: "感谢您对Hi维修的信任，期待您的再次选择",
            15: "感谢您对Hi维修的信任，期待您的再次选择",
            5: "感谢您对Hi维修的信任，期待您的再次选择",
            0: "很抱歉没能给您提供服务，期待您的再次选择"
        },
        13: {
            1: "感谢您对Hi维修的信任，请根据维修中心地址邮寄",
            11: "感谢您对Hi维修的信任，请根据维修中心地址邮寄",
            12: "感谢您对Hi维修的信任，收件后我们会尽快维修",
            13: "感谢您对Hi维修的信任，专业的我们给您专业的服务",
            2: "感谢您对Hi维修的信任，专业的我们给您专业的服务",
            3: "感谢您对Hi维修的信任，专业的我们给您专业的服务",
            4: "感谢您对Hi维修的信任，专业的我们给您专业的服务",
            14: "感谢您对Hi维修的信任，期待您的再次选择",
            15: "感谢您对Hi维修的信任，期待您的再次选择",
            5: "感谢您对Hi维修的信任，期待您的再次选择",
            0: "很抱歉没能给您提供服务，期待您的再次选择"
        },
        3: {
            1: "感谢您对Hi维修的信任，请根据中心地址前往",
            2: "感谢您对Hi维修的信任，请根据中心地址前往",
            3: "感谢您对Hi维修的信任，请根据中心地址前往",
            4: "感谢您对Hi维修的信任，专业的我们给您专业的服务",
            5: "感谢您对Hi维修的信任，期待再次选择",
            0: "很抱歉没能给您提供服务，期待您的再次选择"
        },
        12: {
            1: "感谢您对Hi维修的信任，请根据中心地址前往",
            2: "感谢您对Hi维修的信任，请根据中心地址前往",
            3: "感谢您对Hi维修的信任，请根据中心地址前往",
            4: "感谢您对Hi维修的信任，专业的我们给您专业的服务",
            5: "感谢您对Hi维修的信任，期待再次选择",
            0: "很抱歉没能给您提供服务，期待您的再次选择"
        }
    },
    2: {
        1: {
            1: "正在为您匹配工程师",
            2: "感谢您的耐心等待，稍后工程师会主动与您联系",
            3: "请耐心等待工程师到达",
            4: "感谢您对Hi维修的信任，专业的我们给您专业的服务",
            5: "感谢您对Hi维修的信任，期待再次选择",
            0: "很抱歉没能给您提供服务，期待您的再次选择"
        },
        11: {
            1: "正在为您匹配工程师",
            2: "感谢您的耐心等待，稍后工程师会主动与您联系",
            3: "请耐心等待工程师到达",
            4: "感谢您对Hi维修的信任，专业的我们给您专业的服务",
            5: "感谢您对Hi维修的信任，期待再次选择",
            0: "很抱歉没能给您提供服务，期待您的再次选择"
        },
        2: {
            1: "感谢您对Hi维修的信任，请根据维修中心地址邮寄",
            11: "感谢您对Hi维修的信任，请根据维修中心地址邮寄",
            12: "感谢您对Hi维修的信任，收件后我们会尽快维修",
            13: "感谢您对Hi维修的信任，专业的我们给您专业的服务",
            2: "感谢您对Hi维修的信任，专业的我们给您专业的服务",
            3: "感谢您对Hi维修的信任，专业的我们给您专业的服务",
            4: "感谢您对Hi维修的信任，专业的我们给您专业的服务",
            14: "感谢您对Hi维修的信任，期待您的再次选择",
            15: "感谢您对Hi维修的信任，期待您的再次选择",
            5: "感谢您对Hi维修的信任，期待您的再次选择",
            0: "很抱歉没能给您提供服务，期待您的再次选择"
        },
        13: {
            1: "感谢您对Hi维修的信任，请根据维修中心地址邮寄",
            11: "感谢您对Hi维修的信任，请根据维修中心地址邮寄",
            12: "感谢您对Hi维修的信任，收件后我们会尽快维修",
            13: "感谢您对Hi维修的信任，专业的我们给您专业的服务",
            2: "感谢您对Hi维修的信任，专业的我们给您专业的服务",
            3: "感谢您对Hi维修的信任，专业的我们给您专业的服务",
            4: "感谢您对Hi维修的信任，专业的我们给您专业的服务",
            14: "感谢您对Hi维修的信任，期待您的再次选择",
            15: "感谢您对Hi维修的信任，期待您的再次选择",
            5: "感谢您对Hi维修的信任，期待您的再次选择",
            0: "很抱歉没能给您提供服务，期待您的再次选择"
        },
        3: {
            1: "感谢您对Hi维修的信任，请根据中心地址前往",
            2: "感谢您对Hi维修的信任，请根据中心地址前往",
            3: "感谢您对Hi维修的信任，请根据中心地址前往",
            4: "感谢您对Hi维修的信任，专业的我们给您专业的服务",
            5: "感谢您对Hi维修的信任，期待再次选择",
            0: "很抱歉没能给您提供服务，期待您的再次选择"
        },
        12: {
            1: "感谢您对Hi维修的信任，请根据中心地址前往",
            2: "感谢您对Hi维修的信任，请根据中心地址前往",
            3: "感谢您对Hi维修的信任，请根据中心地址前往",
            4: "感谢您对Hi维修的信任，专业的我们给您专业的服务",
            5: "感谢您对Hi维修的信任，期待再次选择",
            0: "很抱歉没能给您提供服务，期待您的再次选择"
        }
    },
    3: {
        31: {
            1: "正在为您匹配工程师",
            2: "感谢您的耐心等待，稍后工程师会主动与您联系",
            3: "请耐心等待工程师到达",
            4: "感谢您对Hi维修的信任，期待您的再次选择",
            5: "感谢您对Hi维修的信任，期待您的再次选择",
            0: "很抱歉没能给您提供服务，期待您的再次选择"
        },
        32: {
            1: "感谢您对Hi维修的信任",
            4: "感谢您对Hi维修的信任，专业的工程师给您专业的服务",
            5: "感谢您对Hi维修的信任",
            0: "感谢您对Hi维修的信任，期待再次选择"
        }
    }
};

Page({
    data: {
        tipsText: "",
        showTipModal: !1,
        isFullSucreen: !!t.globalData.isFullSucreen,
        showMoreExpressBtn: !0,
        showBtn: !1,
        isMap: !1,
        markers: [ {
            iconPath: "https://pic.hiweixiu.com/hiweixiu-mobile/img/enginer.png",
            id: 0,
            longitude: 121.457189,
            latitude: 31.243703,
            width: 70,
            height: 83
        } ],
        orderDetail: null,
        order_sn: null,
        type: null,
        order_id: null,
        isOneKeyOrder: !1,
        longitude: null,
        latitude: null,
        expressInfo: [],
        expressName: null,
        expressCode: null,
        swiperHeight: "auto",
        currentIndex: 0,
        isshowCommitResult: !1,
        showEditModel: !1,
        nameEdit: "",
        accountEdit: ""
    },
    onLoad: function(e) {
        this.setData({
            order_sn: e.order_sn,
            order_id: e.order_id,
            type: e.type
        });
    },
    onShow: function() {
        this.getOrderDetail();
    },
    refreshEngineerLocation: function(a) {
        var i = this, s = t.globalData.hwxUserInfo.token;
        e.refreshEngineerLocation(s, a.currentTarget.dataset.number, function(e) {
            i.setData({
                longitude: e.longitude ? e.longitude : null,
                latitude: e.latitude ? e.latitude : null
            });
        });
    },
    getOrderDetail: function() {
        var s = this, n = t.globalData.hwxUserInfo.token;
        wx.showLoading(), e.getOrderDetail(n, this.data.type, this.data.order_id, this.data.order_sn, function(e) {
            switch (1 == e.category_id || 31 == e.category_id || 11 == e.category_id ? e.time_name = "预约时间" : 0 == e.status ? e.time_name = "取消时间" : 5 == e.status && (e.time_name = "完成时间"), 
            s.setData({
                isMap: 1 == e.category_id && 3 == e.status
            }), e.showCommentBtn = !1, e.showExpressBtn = !1, e.showCancelBtn = !1, e.showcomplainBtn = !0, 
            e.category_id) {
              case 1:
              case 11:
                switch (e.category_name = "上门维修", e.status) {
                  case 1:
                    e.showCancelBtn = !0;
                    break;

                  case 5:
                    e.is_comment ? e.showCommentBtn = !1 : e.showCommentBtn = !0;
                }
                break;

              case 2:
              case 13:
                switch (e.category_name = "邮寄维修", e.status) {
                  case 1:
                  case 11:
                    e.showCancelBtn = !0, e.showExpressBtn = !0;
                    break;

                  case 5:
                    e.is_comment ? e.showCommentBtn = !1 : e.showCommentBtn = !0;
                }
                break;

              case 3:
              case 12:
                switch (e.category_name = "到店维修", e.status) {
                  case 1:
                    e.showCancelBtn = !0;
                    break;

                  case 5:
                    e.is_comment ? e.showCommentBtn = !1 : e.showCommentBtn = !0;
                }
                break;

              case 31:
                switch (e.category_name = "上门回收", e.status) {
                  case 1:
                    e.showCancelBtn = !0;
                    break;

                  case 5:
                    e.showCommentBtn = !0;
                }
                break;

              case 32:
                e.category_name = "到店回收";
            }
            var t, n;
            e.order_type && !e.fault_info.length ? (s.setData({
                isOneKeyOrder: !0
            }), 1 == e.status ? (e.statusName = "下单成功，正在为您确认故障", e.statusTip = "感谢您对Hi维修的信任，客服会在2小时内给您来电") : 0 == e.status && (e.statusName = "订单已取消", 
            e.statusTip = "很抱歉没能给您提供服务，期待您的再次选择")) : (console.log(e.category_type, e.category_id, e.status), 
            e.statusName = a[e.category_type][e.category_id][e.status], e.statusTip = i[e.category_type][e.category_id][e.status]), 
            12 == e.status || 14 == e.status ? (12 == e.status ? (t = e.express_info.send_off_express_number, 
            n = e.express_info.send_off_type, s.setData({
                expressName: e.express_info.send_off_type_name,
                expressCode: e.express_info.send_off_express_number
            })) : (t = e.express_info.send_back_express_number, n = e.express_info.send_back_type, 
            s.setData({
                expressName: e.express_info.send_back_type_name,
                expressCode: e.express_info.send_back_express_number
            })), s.getExpressInfo(n, t)) : wx.hideLoading();
            var o = s;
            if (e.assess_info && e.assess_info.equal.length) {
                var r = e.assess_info.equal.length;
                o.setData({
                    swiperHeight: 96 * r + "rpx"
                });
            }
            s.setData({
                longitude: e.enginnner_info.longitude ? e.enginnner_info.longitude : null,
                latitude: e.enginnner_info.latitude ? e.enginnner_info.latitude : null,
                orderDetail: e
            });
        }, function(e) {
            console.log("err"), console.log(e), wx.showToast({
                title: "数据请求失败",
                image: "../../../img/wx_index/warning.png",
                duration: 2e3
            }), wx.hideLoading();
        });
    },
    showModel: function(e) {
        var t = e.currentTarget.dataset.text;
        this.setData({
            tipsText: t,
            showTipModal: !0
        });
    },
    closeModalShow: function() {
        this.setData({
            showTipModal: !1
        });
    },
    onPullDownRefresh: function() {},
    onShareAppMessage: function() {},
    makePhonecall: function(t) {
        var a = 1 == t.currentTarget.dataset.type ? 1 : 3 == t.currentTarget.dataset.type ? 2 : "";
        if ("1" == t.currentTarget.dataset.shield) return wx.showLoading({
            title: "请稍等",
            mask: !0
        }), void e.phoneSheild(t.currentTarget.dataset.tel, a, function(e) {
            wx.hideLoading(), wx.showToast({
                title: e.message,
                icon: "none",
                image: "",
                duration: 1500
            });
        }, function(e) {
            wx.hideLoading(), wx.showToast({
                title: e.split("！")[0],
                icon: "none",
                image: "",
                duration: 1500
            });
        });
        wx.makePhoneCall({
            phoneNumber: t.currentTarget.dataset.tel
        });
    },
    showModelBtn: function() {
        this.setData({
            showBtn: !this.data.showBtn
        });
    },
    showMoreExpress: function() {
        this.setData({
            showMoreExpressBtn: !1
        });
    },
    commentOrder: function(e) {
        wx.navigateTo({
            url: "../orderComment/orderComment?id=" + e.currentTarget.dataset.orderid + "&sn=" + e.currentTarget.dataset.ordersn + "&src=" + e.currentTarget.dataset.src + "&mould=" + e.currentTarget.dataset.mould + "&color=" + e.currentTarget.dataset.color + "&category=" + e.currentTarget.dataset.category
        });
    },
    editExpress: function(e) {
        var t = {
            name: e.currentTarget.dataset.device.mould_name,
            color: e.currentTarget.dataset.device.color,
            type: e.currentTarget.dataset.device.category,
            src: e.currentTarget.dataset.device.o_pic,
            orderid: this.data.order_id,
            ordersn: this.data.order_sn
        };
        wx.navigateTo({
            url: "../postDevice/postDevice?device=" + JSON.stringify(t)
        });
    },
    complainOrder: function() {
        wx.makePhoneCall({
            phoneNumber: "4000171010"
        });
    },
    cancelOrder: function(e) {
        wx.navigateTo({
            url: "../orderCancel/orderCancel?type=" + e.currentTarget.dataset.type + "&id=" + e.currentTarget.dataset.orderid + "&sn=" + e.currentTarget.dataset.ordersn
        });
    },
    openLocation: function(e) {
        wx.openLocation({
            latitude: Number(e.currentTarget.dataset.lat),
            longitude: Number(e.currentTarget.dataset.lng),
            scale: 18
        });
    },
    getExpressInfo: function(a, i) {
        var s = this, n = t.globalData.hwxUserInfo.token;
        e.getExpressInfo(n, a, i, function(e) {
            s.setData({
                expressInfo: e
            }), wx.hideLoading();
        }, function(e) {
            console.log("err"), console.log(e), s.setData({
                expressInfo: []
            }), wx.hideLoading();
        });
    },
    changeTap: function(e) {
        this.setData({
            currentIndex: e.currentTarget.dataset.index
        });
        var t = 0 == e.currentTarget.dataset.index ? 96 : 180, a = 0 == e.currentTarget.dataset.index ? this.data.orderDetail.assess_info.equal.length : this.data.orderDetail.assess_info.diff.length;
        this.setData({
            swiperHeight: t * a + "rpx"
        });
    },
    showCommitResult: function() {
        var e = this.data.isshowCommitResult;
        this.setData({
            isshowCommitResult: !e
        });
    },
    swiperChange: function(e) {
        this.setData({
            currentIndex: e.detail.current
        });
        var t = 0 == e.detail.current ? 96 : 180, a = 0 == e.detail.current ? this.data.orderDetail.assess_info.equal.length : this.data.orderDetail.assess_info.diff.length;
        this.setData({
            swiperHeight: t * a + "rpx"
        });
    },
    goZhibaoDetail: function() {
        wx.navigateTo({
            url: "../warrantyDetail/warrantyDetail?warranty=" + JSON.stringify(this.data.orderDetail.fault_info)
        });
    },
    editMsg: function() {
        this.setData({
            showEditModel: !0
        });
    },
    closeModel: function() {
        this.setData({
            showEditModel: !1
        });
    },
    getEditAccount: function(e) {
        this.setData({
            accountEdit: e.detail.value
        });
    },
    getEditName: function(e) {
        this.setData({
            nameEdit: e.detail.value
        });
    },
    confirmEdit: function() {
        var a = this;
        console.log(this.data.nameEdit), console.log(this.data.accountEdit), console.log(this.data.order_id), 
        wx.showLoading();
        var i = t.globalData.hwxUserInfo.token, s = {
            name: this.data.nameEdit ? this.data.nameEdit : this.data.orderDetail.account_username,
            account: this.data.accountEdit ? this.data.accountEdit : this.data.orderDetail.account_number,
            order_id: this.data.order_id
        };
        e.editPayers(i, s, function(e) {
            wx.hideLoading(), a.setData({
                showEditModel: !1
            }), a.getOrderDetail();
        }, function(e) {
            wx.hideLoading(), wx.showToast({
                title: e,
                icon: "none",
                image: "",
                duration: 1500,
                mask: !1
            }), a.setData({
                showEditModel: !1
            });
        });
    },
    copyText: function() {
        wx.setClipboardData({
            data: this.data.order_id,
            success: function(e) {
                wx.showToast({
                    title: "复制成功",
                    icon: "success",
                    duration: 2e3
                });
            }
        });
    }
});