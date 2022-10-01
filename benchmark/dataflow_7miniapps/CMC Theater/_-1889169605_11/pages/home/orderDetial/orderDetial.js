var e = require("../../../util/codecontol.js"), t = require("../../../request/orderDetialRequest.js").orderDetialRequest, a = getApp().urlService, i = require("../../../util/util.js"), o = require("../../../templates/showpricedetial/showpricedetial.js");

Page({
    data: {
        qrcodePatch: "",
        barcodePatch: "",
        barcanvHidden: !1,
        canvasHidden: !1,
        requestData: {},
        orderComfimEntity: {},
        formID: "",
        isShowDialog: !1,
        isShow: !1
    },
    onLoad: function(e) {
        var t = this;
        o.setOrderDelegate(t);
        var a = e.orderComfimEntity ? getApp().decodeDataAndJsonParse(e.orderComfimEntity) : "";
        a.order_info.start_time = i.formatDatelong(a.order_info.start_time), t.setData({
            orderComfimEntity: a,
            servive_phone: getApp().globalData.appServicePhone
        }), 1 == t.data.orderComfimEntity.order_type || 2 == t.data.orderComfimEntity.order_type ? setTimeout(function() {
            t.startDownLoad();
        }, 500) : t.startDownLoad();
    },
    showPriceDetial: function() {
        this.orderDetialUpdateMaskView(), o.show();
    },
    hiddenPriceDetial: function() {
        o.hidden();
    },
    orderDetialUpdateMaskView: function() {
        o.orderDetialUpdateMaskView(this.data.requestData);
    },
    startDownLoad: function() {
        var e = this;
        this.setData({
            canvasHidden: !1,
            barcanvHidden: !1
        });
        var i = a.urls.orderDetial, o = a.urlParameter({
            order_num: this.data.orderComfimEntity.order_info.order_num,
            order_type: "ticket",
            order_type_num: "1"
        });
        a.wxRequest.getRequest(i, o).then(function(a) {
            if (console.log("res"), console.log(a), t.decodeRes(a)) {
                var i = t.successObj.serial_number_1 + t.successObj.serial_number_2;
                e.createQrCode(i, "qr_canvas"), e.createBarCode(i, "bar_canvas"), t.successObj.ticket_qrcode_data.length > 0 ? t.successObj.qrcode_enable : t.successObj.qrcode_enable = 0, 
                e.setData({
                    requestData: t.successObj
                });
            }
            wx.stopPullDownRefresh();
        });
    },
    refundTicket: function(e) {
        var t = this;
        e && (t.data.formID = e.detail.formId), t.showReturnDialog();
    },
    goRefund: function() {
        var e = this, t = a.urls.ticketRefund, i = a.urlParameter({
            order_num: this.data.orderComfimEntity.order_info.order_num,
            form_id: this.data.formID,
            refund_handle_fee: this.data.requestData.refund_settings.refund_handle_fee
        });
        a.wxRequest.getRequest(t, i).then(function(t) {
            console.log(t), "0" == t.data.errcode && e.startDownLoad();
        });
    },
    goback: function() {
        switch (this.data.orderComfimEntity.order_type) {
          case "1":
          case "2":
            wx.switchTab({
                url: "/pages/home/cinema/cinema"
            });
            break;

          case "3":
            wx.navigateBack();
            break;

          default:
            wx.navigateBack();
        }
    },
    refush: function() {
        this.startDownLoad();
    },
    callPhone: function() {
        if (this.data.requestData.tel && this.data.requestData.tel.length > 0) {
            var e = this.data.requestData.tel.split(",");
            wx.showActionSheet({
                itemList: e,
                success: function(t) {
                    wx.makePhoneCall({
                        phoneNumber: e[t.tapIndex]
                    });
                }
            });
        }
    },
    clickBottomBtn: function(e) {
        var t = e.currentTarget.dataset.btntype;
        console.log(t), 1 == t ? this.refundTicket() : 2 == t && this.startDownLoad();
    },
    createQrCode: function(t, a) {
        var i = this;
        e.qrcode(a, t, "415", "415"), setTimeout(function() {
            i.canvasToQrImage(!0);
        }, 1e3);
    },
    createBarCode: function(t, a) {
        var i = this;
        e.barcode(a, t, "500", "150"), setTimeout(function() {
            i.canvasToBarImage(!0);
        }, 1e3);
    },
    canvasToQrImage: function(e) {
        var t = this;
        wx.canvasToTempFilePath({
            canvasId: "qr_canvas",
            success: function(e) {
                var a = e.tempFilePath;
                t.setData({
                    qrcodePatch: a,
                    canvasHidden: !0
                });
            },
            fail: function(a) {
                console.log("错"), e && setTimeout(function() {
                    t.canvasToQrImage(!1);
                }, 2e3);
            }
        });
    },
    canvasToBarImage: function(e) {
        var t = this;
        wx.canvasToTempFilePath({
            canvasId: "bar_canvas",
            success: function(e) {
                var a = e.tempFilePath;
                t.setData({
                    barcodePatch: a,
                    barcanvHidden: !0
                });
            },
            fail: function(a) {
                console.log("错"), e && setTimeout(function() {
                    t.canvasToBarImage(!1);
                }, 2e3);
            }
        });
    },
    buyDetailClick: function() {
        console.log("=============buyDetailClick"), this.orderDetialUpdateMaskView(this.data.requestData), 
        o.show();
    },
    returnDetailClick: function() {
        o.returnTicketDataMaskiew(this.data.requestData), o.show();
    },
    progressClick: function(e) {
        var t = e.target.dataset.bean;
        if (console.log("=============="), console.log(t), console.log(this.data.orderComfimEntity.order_type), 
        t && t.order_num && this.data.orderComfimEntity.order_type) {
            t.order_type = this.data.orderComfimEntity.order_info.order_type;
            var a = getApp().encodeDataAndJsonStringify(t);
            wx.navigateTo({
                url: "/pages/mime/orderProgress/progress?bean=" + a
            });
        }
    },
    dialogOkClick: function() {
        this.hiddenReturnDialog(), this.goRefund();
    },
    dialogCloseClick: function() {
        this.hiddenReturnDialog();
    },
    dismissDialog: function() {
        this.hiddenReturnDialog();
    },
    showReturnDialog: function() {
        var e = this;
        this.setData({
            isShow: !0
        }), setTimeout(function() {
            e.setData({
                isShowDialog: !0
            });
        }.bind(this), 10);
    },
    hiddenReturnDialog: function() {
        this.setData({
            isShowDialog: !1
        }), setTimeout(function() {
            this.setData({
                isShow: !1
            });
        }.bind(this), 10);
    },
    gotoAutoTicket: function() {
        console.log(this.data.requestData.ticket_qrcode_data);
        var e = this.data.requestData.serial_number_1, t = this.data.requestData.serial_number_2, a = this.data.requestData.group_member_id, i = this.data.requestData.cinema_num, o = this.data.requestData.checkin_code_type;
        if (o && ("2" == o || "3" == o)) return o = "2" == o ? "2" : "1", void wx.navigateToMiniProgram({
            appId: "wxd47a439504db41ec",
            path: "/pages/tickets/enter/index",
            envVersion: "trial",
            extraData: {
                ssc1: e,
                ssc2: t,
                form_openid: a,
                m_num: i,
                qr_type: o
            }
        });
        wx.navigateTo({
            url: "./autoTicket/autoTicket?ticket_qrcode_data=" + getApp().encodeDataAndJsonStringify(this.data.requestData.ticket_qrcode_data)
        });
    },
    onPullDownRefresh: function() {
        console.log("-----------------"), this.startDownLoad();
    },
    touchStart: function() {},
    touchEnd: function() {
        this.hiddenReturnDialog();
    },
    move: function() {},
    onShareAppMessage: function() {
        var e = this.data.requestData.movie_name, t = this.data.requestData.movie_img_url, a = this.data.requestData.movie_id;
        return t && t.length > 0 ? -1 == t.indexOf("?") && (t += "?op=imageView2&mode=1&width=300&height=240") : t = "", 
        {
            title: e,
            imageUrl: t,
            path: "/moviePages/pages/detail/movieDetails?id=" + a + "&fromFlag=wx_mini_ticket_order_movie",
            desc: ""
        };
    },
    optionGoodsClick: function(e) {
        console.log("index = ", e.target.dataset.index);
        var t = e.target.dataset.index, a = this.data.requestData.goods_data_list[t];
        a.expandText = "展开" == a.expandText ? "收起" : "展开", this.setData({
            requestData: this.data.requestData
        });
    }
});