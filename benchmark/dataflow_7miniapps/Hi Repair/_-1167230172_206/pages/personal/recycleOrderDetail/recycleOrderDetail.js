var e = require("../../../comm/script/fetch"), t = (require("../../../comm/script/config"), 
new getApp()), a = (t.getParams, {
    3: {
        31: {
            1: "下单成功",
            2: "工程师已接单",
            3: "工程师已出发",
            4: "回收检测中...",
            5: "回收完成",
            0: "订单已取消"
        },
        32: {
            1: "下单成功，请根据中心地址前往",
            2: "等待到店",
            5: "回收完成",
            0: "已取消"
        },
        33: {
            0: "已取消",
            1: "下单成功",
            10000: "待顺丰上门取件",
            10001: "已寄出",
            10002: "回收失败，已寄回",
            10003: "用户已签收",
            10004: "回收失败，待寄回",
            10005: "工程师已估价，请确认回收价格",
            10006: "质检中心已签收，等待检测",
            2: "质检中心已签收，等待检测",
            5: "回收完成"
        }
    }
});

Page({
    data: {
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
        accountEdit: "",
        showConfirmModel: !1,
        showRefuseModel: !1
    },
    onLoad: function(e) {
        this.setData({
            order_sn: e.order_sn,
            order_id: e.order_id,
            type: e.type
        });
    },
    refueseRecycle: function() {
        var a = this, n = t.globalData.hwxUserInfo.token, o = {
            order_id: this.data.order_id,
            type: 0
        };
        e.cfRecycle(n, o, function(e) {
            wx.showToast({
                title: "已拒绝回收",
                duration: 1500,
                mask: !0,
                complete: function() {
                    a.setData({
                        showRefuseModel: !1
                    });
                }
            }), a.getOrderDetail();
        }, function(e) {
            wx.showToast({
                title: e,
                icon: "none",
                duration: 1500,
                mask: !0,
                complete: function() {
                    a.getOrderDetail();
                }
            });
        });
    },
    toggleRefuseRecycleModel: function(e) {
        var t = e.currentTarget.dataset.bool;
        this.setData({
            showRefuseModel: !!parseInt(t)
        });
    },
    toggleRecycleModel: function(e) {
        var t = e.currentTarget.dataset.bool;
        this.setData({
            showConfirmModel: !!parseInt(t)
        });
    },
    confirmRecycle: function() {
        var a = this, n = t.globalData.hwxUserInfo.token, o = {
            order_id: this.data.order_id,
            type: 1
        };
        e.cfRecycle(n, o, function(e) {
            wx.showToast({
                title: "已确认回收",
                duration: 1500,
                mask: !0,
                complete: function() {
                    a.setData({
                        showConfirmModel: !1
                    }), a.getOrderDetail();
                }
            });
        }, function(e) {
            wx.showToast({
                title: e,
                icon: "none",
                duration: 1500,
                mask: !0,
                complete: function() {
                    a.getOrderDetail();
                }
            });
        });
    },
    onShow: function() {
        this.getOrderDetail();
    },
    getSfRoute: function() {
        var a = this, n = t.globalData.hwxUserInfo.token, o = {
            order_id: this.data.order_id
        };
        e.getSfRoute(n, o, function(e) {
            a.setData({
                expressCode: e.mailNo,
                expressInfo: e.routes
            });
        }, function(e) {
            console.log(e);
        });
    },
    goExpressInfoDetail: function(e) {
        var t = {
            id: e.currentTarget.dataset.id
        };
        wx.navigateTo({
            url: "../expressInforecycle/expressInforecycle?data=" + JSON.stringify(t)
        });
    },
    refreshEngineerLocation: function(a) {
        var n = this, o = t.globalData.hwxUserInfo.token;
        e.refreshEngineerLocation(o, a.currentTarget.dataset.number, function(e) {
            n.setData({
                longitude: e.longitude ? e.longitude : null,
                latitude: e.latitude ? e.latitude : null
            });
        });
    },
    getdate: function(e) {
        var t = new Date(e), a = t.getFullYear(), n = t.getMonth() + 1, o = t.getDate();
        return a + "-" + (n < 10 ? "0" + n : n) + "-" + (o < 10 ? "0" + o : o) + " " + t.toTimeString().substr(0, 8);
    },
    getOrderDetail: function() {
        var n = this, o = t.globalData.hwxUserInfo.token;
        wx.showLoading(), e.getOrderDetail(o, this.data.type, this.data.order_id, this.data.order_sn, function(e) {
            switch (1 == e.category_id || 31 == e.category_id || 11 == e.category_id ? e.time_name = "预约时间" : 0 == e.status ? e.time_name = "取消时间" : 5 == e.status && (e.time_name = "完成时间"), 
            n.setData({
                isMap: 1 == e.category_id && 3 == e.status
            }), e.showCommentBtn = !1, e.showExpressBtn = !1, e.showCancelBtn = !1, e.showcomplainBtn = !0, 
            e.showConfirm = !1, e.category_id) {
              case 31:
                switch (e.category_name = "上门回收", e.status) {
                  case 1:
                    e.showCancelBtn = !0;
                }
                break;

              case 32:
                switch (e.category_name = "到店回收", e.status) {
                  case 1:
                    e.showCancelBtn = !0;
                }
                break;

              case 33:
                switch (e.category_name = "邮寄回收", e.status) {
                  case 1:
                  case 1e4:
                    e.showCancelBtn = !0;
                    break;

                  case 10005:
                    e.showConfirm = !0;
                }
            }
            console.log("res.create_time------"), console.log(e.create_time), console.log(t);
            var t = "", o = "";
            t = n.getdate(new Date(e.create_time.replace(/\-/g, "/")).getTime() + 2592e5), e.engineer_expected_price_date && (o = n.getdate(new Date(e.engineer_expected_price_date.replace(/\-/g, "/")).getTime() + 1728e5));
            var r = function(e, t) {
                return {
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
                            2: "感谢您对Hi维修的信任，专业的工程师给您专业的服务",
                            5: "感谢您对Hi维修的信任",
                            0: "感谢您对Hi维修的信任，期待再次选择"
                        },
                        33: {
                            0: "感谢您对Hi维修的信任，期待再次选择",
                            1: "感谢您对Hi维修的信任",
                            10000: "此价格72小时内有效，".concat(e, "前开始回收可享受平台报价哦。"),
                            10001: "已为您锁定回收价格，检测完成，确认回收即刻打款",
                            10002: "回收失败，已寄回",
                            10003: "用户已签收",
                            10004: "很抱歉没能为您提供服务，期待您的再次选择",
                            10005: "此报价仅在48小时内有效，".concat(t, "前确认回收可享受此报价哦"),
                            10006: "请耐心等待工程师检测，最终回收价格需您确认方可回收完成",
                            2: "请耐心等待工程师检测，最终回收价格需您确认方可回收完成",
                            5: "我们会在2小时内，将回收款转入您的收款账号中"
                        }
                    }
                };
            }(t, o);
            e.statusName = a[e.category_type][e.category_id][e.status], e.statusTip = r[e.category_type][e.category_id][e.status], 
            1e4 != e.status && 10001 != e.status && 10002 != e.status && 5 != e.status && 10006 != e.status && 10005 != e.status || n.getSfRoute(), 
            n.setData({
                longitude: e.enginnner_info.longitude ? e.enginnner_info.longitude : null,
                latitude: e.enginnner_info.latitude ? e.enginnner_info.latitude : null,
                orderDetail: e
            }), wx.hideLoading();
        }, function(e) {
            console.log("err"), console.log(e), wx.showToast({
                title: "数据请求失败",
                image: "../../../img/wx_index/warning.png",
                duration: 2e3
            }), wx.hideLoading();
        });
    },
    onPullDownRefresh: function() {},
    onShareAppMessage: function() {},
    makePhonecall: function(t) {
        if ("1" == t.currentTarget.dataset.shield) return wx.showLoading({
            title: "请稍等",
            mask: !0
        }), void e.phoneSheild(t.currentTarget.dataset.tel, 2, function(e) {
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
    showCommitResult: function() {
        wx.navigateTo({
            url: "../estimateresult/estimateresult?result=" + JSON.stringify(this.data.orderDetail.estimate_info)
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
        wx.showLoading();
        var n = t.globalData.hwxUserInfo.token, o = {
            name: this.data.nameEdit ? this.data.nameEdit : this.data.orderDetail.account_username,
            account: this.data.accountEdit ? this.data.accountEdit : this.data.orderDetail.account_number,
            order_id: this.data.order_id
        };
        e.editPayers(n, o, function(e) {
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
    rePrice: function(e) {
        console.log(e.currentTarget.dataset.device);
        var t = e.currentTarget.dataset.device;
        wx.redirectTo({
            url: "../../recycle/faultprice/faultprice?mid=" + t.mould_id + "&name=" + t.mould_name
        });
    }
});