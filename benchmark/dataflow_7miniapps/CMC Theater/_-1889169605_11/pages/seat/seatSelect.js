var e = require("./../../config/httpHtlper.js"), t = require("./../../util/util.js"), a = require("./../../util/mathUtil.js"), o = require("./seatRule.js");

Page({
    data: {
        animationData: {},
        seat_num: [],
        width: 0,
        isRecommendClick: !1,
        isChange: !1,
        time_list: [],
        time_index: 0,
        scroll_id: "id_2",
        hall_name: "",
        cinema_name: "",
        language: "",
        movie_name: "",
        movie_format: "",
        order_info: {},
        movie: {},
        selectedSeat: [],
        seat_data: [],
        area_price: [],
        fenqu_bg: [],
        area_flag: "0",
        allPrice: "",
        time: "",
        show_id: "",
        lockInfo: {},
        willChange: !1,
        hasSelected: !1,
        sX: 0,
        sY: 0,
        deltaX: 0,
        deltaY: 0,
        preDeltaX: 0,
        preDeltaY: 0,
        baseScale: .6,
        scrollH: 350,
        bottomH: 280,
        reminderH: 0,
        hall_reminder_type: "0",
        showLogin: !0,
        dialogShowType: "0",
        showUserProtocol: !0
    },
    initWH: function() {
        var e = this;
        this.data.otherH = 510, wx.getSystemInfo({
            success: function(t) {
                console.log(t.pixelRatio), console.log(t.windowWidth), console.log(t.windowHeight), 
                console.log(t.screenWidth), console.log(t.screenHeight), console.log(t.statusBarHeight);
                var a = t.windowWidth / 750, o = e.data.otherH, i = t.windowHeight - o * a;
                e.data.windowHeight = t.windowHeight, e.data.scrollH = i, e.data.scale = a, console.log("1rpx = " + a + "px"), 
                console.log("564rpx = " + o * a + "px   scrollH = " + i), console.log("statusBarHeight = " + t.statusBarHeight + " sw:" + t.screenWidth + "sh:" + t.screenHeight + " ww:" + t.windowWidth + " wh:" + t.windowHeight + " pratio=" + t.pixelRatio);
            }
        });
    },
    onLoad: function(e) {
        this.initWH();
        var t = wx.createAnimation({
            duration: 200,
            timingFunction: "linear",
            transformOrigin: "0 0"
        });
        this.animation = t;
        var a = getApp().globalData.movie;
        console.log(a), console.log("----------选座页面--------");
        var o = e.show_id;
        this.data.today = e.today, this.data.show_id = o;
        var i = a.days, s = a.shows, l = [], r = 0, n = "";
        for (var c in i) {
            var d = i[c].show_date, h = s[d];
            if (h && h.length > 0) {
                h.length;
                for (var m in h) {
                    var _ = h[m];
                    _.show_date = 0 == m ? this.compareDate(this.data.today, d) : "", _.date = d, "-1" == _.nonmember_price ? _.showPrice = _.member_price : _.showPrice = _.nonmember_price, 
                    _.time_index = l.length, _.scroll_id = "id_" + _.time_index, _.show_id == o && (r = _.time_index, 
                    n = _.scroll_id), l.push(_);
                }
            }
        }
        this.data.time_index = r, this.data.time_list = l, this.data.scroll_id = n, this.data.movie_name = a.movie_name, 
        this.data.movie_format = a.movie_format, console.log("scroll_id = " + n);
    },
    compareDate: function(e, t) {
        var a = new Date(t), o = (a.getMonth(), a.getDate(), new Date(e).getTime()), i = a.getTime();
        return o === i ? "今 天" : o + 864e5 === i ? "明 天" : o + 1728e5 === i ? "后 天" : "星 期 " + "日一二三四五六".charAt(new Date(t).getDay());
    },
    onShow: function() {
        (getApp().userIsLogin() || this.data.showLogin) && (getApp().userIsLogin() && this.setData({
            showLogin: !0
        }), this.clearSeatRule(), this.playSeat());
    },
    onUnload: function() {
        if (console.log("-----返回-------"), console.log(this.data.lockInfo), this.clearSeatRule(), 
        getApp().globalData.isUnLockSeat) {
            if (1 == this.data.lockInfo.exist_unfinished_order) console.log("-----exist_unfinished_order==1没有取消锁座-------"); else if (this.data.lockInfo.seat_id) {
                if (!getApp().userIsLogin()) return;
                e.unLockSeat(this.data.show_id, this.data.lockInfo.seat_id, this.data.lockInfo.lock_flag).then(function(e) {
                    console.log("-----unLockSeat-------"), console.log(e);
                });
            }
        } else console.log("-----没有取消锁座-------");
    },
    intColumnArr: function(e) {
        for (var t = [], a = [], o = e.max_x, i = e.max_y, s = 1; s <= o; s++) t.push(s);
        for (var l = 68 * -o / 2 * this.data.baseScale, s = 1; s <= i; s++) a.push(s);
        console.log("行：" + o + " 列:" + i + " dy = " + l), this.data.row_x = t, this.data.column_y = a;
    },
    onScroll: function(e) {},
    scrollstart: function(e) {
        this.mode = "none", console.log("scrollstart  touches size = " + e.touches.length), 
        2 == e.touches.length ? (this.mode = "zoom", this.data.xMove = Math.abs(e.touches[1].clientX - e.touches[0].clientX), 
        this.data.yMove = Math.abs(e.touches[1].clientY - e.touches[0].clientY), this.data.old_distance = Math.sqrt(this.data.xMove * this.data.xMove + this.data.yMove * this.data.yMove)) : e.touches.length, 
        this.data.c1 = !0;
    },
    scrollmove: function(e) {
        if (2 == e.touches.length) {
            this.mode = "zoom", this.data.xMove1 = Math.abs(e.touches[1].clientX - e.touches[0].clientX), 
            this.data.yMove1 = Math.abs(e.touches[1].clientY - e.touches[0].clientY), this.data.new_distance = Math.sqrt(this.data.xMove1 * this.data.xMove1 + this.data.yMove1 * this.data.yMove1);
            var t = this.data.new_distance - this.data.old_distance, a = this.data.baseScale + .005 * t;
            t > 0 && this.data.c1 ? .6 == this.data.baseScale && (this.data.c1 = !1, a = 1.2, 
            this.data.baseScale = a, this.animation.scale(1.2).step(), this.setData({
                animationData: this.animation.export()
            })) : t < 0 && this.data.c1 && 1.2 == this.data.baseScale && (this.data.c1 = !1, 
            a = .6, this.data.baseScale = a, this.animation.scale(.6).step(), this.setData({
                animationData: this.animation.export()
            })), this.data.c1;
        }
    },
    scrollend: function(e) {
        var t = this;
        console.log("scrollend  touches size = " + e.touches.length + " mode = " + this.mode), 
        console.log("end===deltaX=" + this.data.deltaX + " deltaY=" + this.data.deltaY), 
        this.data.c1 = !0, this.data.preDeltaX = this.data.deltaX, this.data.preDeltaY = this.data.deltaY, 
        "zoom" != this.mode && setTimeout(function() {
            t.mode = "none", console.log("scrollend  mode = " + t.mode);
        }, 200);
    },
    selectSeat: function(e) {
        if (console.log("点击选座----------------------- mode = " + this.mode), "zoom" != this.mode && "drag" != this.mode && !this.gotoLogin()) {
            var t = e.currentTarget.dataset.index, a = o.seatArray[t];
            if (console.log("点击选座----------------------- index =" + t), void 0 != a && null != a) {
                if ("0" == a.status) if (o.selectSeatArray.length <= o.SystemSelectTicketMax) {
                    var i = o.onClickSeat(a);
                    console.log("selectSeat====add===== status =" + i), i == o.Changed_Status_Out_Of_MaxPromoNum_Msg ? parseFloat(o.promo_num_original) > parseFloat(o.bestSeatCountMax) ? this.showModaleNoOkCallBack("亲，您只能选择" + o.bestSeatCountMax + "个座位哦！") : this.showModaleNoOkCallBack("每人限购" + o.promo_num + "张特惠票！") : i == o.Changed_Status_Out_Of_MaxSeatNum_Msg && this.showModaleNoOkCallBack("亲，您只能选择" + o.bestSeatCountMax + "个座位哦！");
                } else this.showModaleNoOkCallBack("亲，您只能选择" + o.bestSeatCountMax + "个座位哦！"); else if ("10" == a.status) o.onClickSeat(a); else if ("11" == a.status) o.onClickSeat(a); else if ("1" == a.status) return;
                this.showAllPrice(), this.setData({
                    seat_data: o.seatArray,
                    selectedSeat: o.selectSeatArray
                });
            }
        }
    },
    delete_seat: function(e) {
        var t = e.currentTarget.dataset.index;
        console.log("==取消座位=index=" + t);
        o.seatArray, o.selectSeatArray;
        var a = o.selectSeatArray[t];
        o.onClickSeat(a), this.showAllPrice(), this.setData({
            seat_data: o.seatArray,
            selectedSeat: o.selectSeatArray
        });
    },
    seatClear: function(e) {
        console.log("==重选座位=="), o.cancelAllSelectSeat(), this.showAllPrice();
    },
    recommendClick: function(e) {
        if (!this.gotoLogin()) {
            var t = e.target.dataset.num;
            console.log("num = " + t), o.cancelAllSelectSeat(), console.log("getBestSeats = " + o.seatBestList.length), 
            o.getBestSeats(t), console.log("getNextBestSeatArray = "), o.getNextBestSeatArray();
            var a = o.selectSeatArray.length;
            if (0 != a) {
                var i = o.seatArray.length;
                console.log("selectSize=" + a);
                for (var s = 0; s < a; s++) {
                    for (var l = o.selectSeatArray[s], r = 0; r < i; r++) {
                        var n = o.seatArray[r];
                        if (n && l.sitname == n.sitname) {
                            n.status = l.status, n.src = l.src;
                            break;
                        }
                    }
                    console.log("i=" + s + " seat = "), console.log(l);
                }
                this.showAllPrice(), this.setData({
                    selectedSeat: o.selectSeatArray,
                    seat_data: o.seatArray
                });
            } else this.showModaleNoOkCallBack("当前场次座位数量紧张，请手动选择");
        }
    },
    creatOrder: function(e) {
        var t = this;
        if (o.selectSeatArray.length > 0) if (o.isRuleOk()) {
            console.log("==可以下单==");
            for (var a = "", i = "", s = 0; s < o.selectSeatArray.length; s++) {
                var l = o.selectSeatArray[s];
                a += l.sitid + ",", i += l.sitname + ",";
            }
            a = a.substring(0, a.length - 1), i = i.substring(0, i.length - 1), console.log("seat_ids = " + a), 
            console.log("seat_infos = " + i);
            var r = this.data.time_list[this.data.time_index], n = this.data.today;
            console.log(r.date + "  " + n), n == r.date ? t.lockseat(i, a) : wx.showModal({
                confirmColor: "#ff9500",
                content: "您目前选择的是" + r.date + "的场次，请您仔细核对日期场次，祝观影愉快！",
                success: function(e) {
                    e.confirm && t.lockseat(i, a);
                }
            });
        } else console.log("==不可以下单=="), this.showModaleNoOkCallBack("亲，中间不能留出空位"); else console.log("==没有选择座位==");
    },
    lockseat: function(t, a) {
        var o = this;
        e.lockSeat(this.data.show_id, a, "-1").then(function(e) {
            console.log(e), 1 == e.data.status ? o.gotoOrderConfirm(e, t) : 504 == e.data.errcode && (e.cancelShowError = !0, 
            wx.showModal({
                confirmColor: "#ff9500",
                content: e.data.msg,
                success: function(e) {
                    e.confirm && o.lockSeatAgain(o.data.show_id, t, a, "1");
                }
            }));
        });
    },
    lockSeatAgain: function(t, a, o, i) {
        var s = this;
        console.log("==有待支付订单，重新锁座=="), e.lockSeat(t, o, i).then(function(e) {
            console.log(e), s.gotoOrderConfirm(e, a);
        });
    },
    gotoOrderConfirm: function(e, t) {
        e.data.data.lock_flag;
        var a = e.data.data.lock_ttl, o = e.data.data.seat_id, i = e.data.data;
        getApp().globalData.isUnLockSeat = !0, this.setData({
            lockInfo: i
        });
        var s = this.data.order_info;
        s.seat_info = t, s.seat_ids = o;
        var l = {};
        l.seat_ids = e.data.data.seat_id, l.show_id = this.data.show_id, l.order_type = "1", 
        l.allPrice = this.data.allPrice, s.movie_name = this.data.movie_name, s.movie_format = this.data.movie_format + " " + this.data.language, 
        l.order_info = s, l.lock_ttl = a, wx.navigateTo({
            url: "/pages/home/confirmOrder/confirmOrder?orderComfimEntity=" + getApp().encodeDataAndJsonStringify(l)
        });
    },
    changeClick: function(e) {
        console.log("==更换场次==" + this.data.scroll_id + " isChange = " + this.data.isChange);
        var t = !this.data.isChange, a = this.data.scroll_id, o = this.data.scrollH;
        o = t ? this.data.scrollH - 140 * this.data.scale : this.data.scrollH + 140 * this.data.scale, 
        this.setData({
            scrollH: o,
            isChange: t,
            scroll_id: a
        });
    },
    timeClick: function(e) {
        console.log(e), console.log("==更换时间==");
        var t = e.target.dataset.bean.time_index, a = e.target.dataset.bean.show_id, o = e.target.dataset.bean.scroll_id;
        console.log("==更换时间==" + o), this.data.scroll_id = o, this.setData({
            time_index: t,
            show_id: a,
            deltaX: 0,
            deltaY: 0,
            preDeltaX: 0,
            preDeltaY: 0,
            baseScale: .6,
            isRecommendClick: !1,
            allPrice: "",
            selectedSeat: []
        }), this.clearSeatRule(), this.playSeat();
    },
    getSeatIndex: function(e, t) {
        for (var a = e.length, o = 0; o < a; o++) if (e[o].sitname == t.sitname) return o;
    },
    showAllPrice: function() {
        var e = o.selectSeatArray.length, t = 280, i = this.data.scrollH, s = this.data.windowHeight, l = this.data.scale;
        if (e > 4 ? (t = 358, i = s - (this.data.otherH + 68 + 10) * l - this.data.reminderH) : i = s - this.data.otherH * l - this.data.reminderH, 
        0 != e) {
            var r = "", n = 0, c = "", d = !0, h = o.selectSeatArray[0].area_id, m = o.selectSeatArray[0].price, _ = {};
            for (var g in o.selectSeatArray) {
                var u = o.selectSeatArray[g];
                u.area_id == h && u.price == m || (d = !1), _[u.area_id] ? _[u.area_id].count += 1 : _[u.area_id] = {
                    count: 1,
                    price: u.price
                }, r = a.add(r, o.selectSeatArray[g].price), n = a.add(n, o.selectSeatArray[g].service_fee);
            }
            if (d) c = n > 0 ? e > 1 ? "(" + o.selectSeatArray[0].price + "x" + e + " 含服务费¥" + n + ")" : "(含服务费¥" + n + ")" : "(" + o.selectSeatArray[0].price + "x" + e + ")"; else {
                var f = "";
                for (var S in _) f += _[S].price + "x" + _[S].count + "+";
                f = f.substring(0, f.length - 1), c = n > 0 ? e > 1 ? "(" + f + " 含服务费¥" + n + ")" : "(含服务费¥" + n + ")" : "(" + f + ")";
            }
            console.log("allPrice===" + r), this.setData({
                allPrice: r,
                bottomH: t,
                scrollH: i,
                isRecommendClick: !0,
                priceInfo: c
            });
        } else this.setData({
            seat_data: o.seatArray,
            selectedSeat: [],
            isRecommendClick: !1,
            allPrice: "",
            bottomH: t,
            scrollH: i,
            priceInfo: ""
        });
    },
    clearSeatRule: function() {
        o.rc = {}, o.seatArray = [], o.seatBestList = [], o.selectSeatArray = [], o.seatBestList = [], 
        o.area_price = {}, o.promo_id = "", o.promo_num = -1, o.SystemSelectTicketMax = 4, 
        o.mBestCount = -1, o.bestSeatCountMax = -1;
    },
    showModaleNoOkCallBack: function(e) {
        wx.showModal({
            confirmColor: "#ff9500",
            showCancel: !1,
            title: "",
            content: e,
            confirmText: "我知道了"
        });
    },
    reminderClick: function() {
        this.showModaleNoOkCallBack(this.data.hall_reminder);
    },
    playSeat: function() {
        var a = this, i = this;
        e.playSeat(this.data.show_id).then(function(e) {
            if (1 == e.data.status) {
                try {
                    var s = e.data.data.play_data, l = (e.data.data.session_id, a.data.scrollH), r = s.hall_reminder, n = s.hall_reminder_type;
                    n && "2" == n && i.showModaleNoOkCallBack(r);
                    var c = [], d = s.area_price, h = s.area_flag, m = s.hall_name, _ = s.cinema_name, g = s.language, u = s.movie_name, f = {};
                    f.movie_name = s.movie_name, f.movie_format = s.media, f.cinema_name = s.cinema_name, 
                    f.hall_name = s.hall_name, f.start_time = s.play_date + " " + s.start_time, -1 != s.movie_img_url.indexOf("?") ? f.movie_img_url = s.movie_img_url.substring(0, s.movie_img_url.indexOf("?")) : f.movie_img_url = s.movie_img_url, 
                    f.service_fee = s.service_fee;
                    var S = s.allow_buy_seat_num, v = s.play_date + " " + s.start_time;
                    v = t.formatDatelong(v);
                    var p = s.max_x, w = s.max_y;
                    if (o.rc.y = w, o.rc.x = p, d && d.length > 0) {
                        for (var y = 0; y < d.length; y++) {
                            var x = d[y], A = x.area_id;
                            0 == y && "1" == A ? x.flag = 1 : d.length > 6 ? x.flag = y + 1 : x.flag = y + (6 - d.length + 1), 
                            o.area_price[A] = x, console.log(" hasDefaultArea = false k =" + y + " flag = " + x.flag + " old id = " + A);
                        }
                        console.log(d), c = [ o.fenqu_ex_1, o.fenqu_ex_2, o.fenqu_ex_3, o.fenqu_ex_4, o.fenqu_ex_5, o.fenqu_ex_6 ];
                    }
                    o.bestSeatCountMax = S, o.SystemSelectTicketMax = S, o.promo_id = s.promo_id, o.promo_id && (o.promo_num_original = s.promo_num, 
                    o.promo_num = s.promo_num, parseInt(o.promo_num) > parseInt(o.SystemSelectTicketMax) && (o.promo_num = o.SystemSelectTicketMax), 
                    o.mBestCount = o.promo_num, o.bestSeatCountMax = o.promo_num, o.SystemSelectTicketMax = o.bestSeatCountMax), 
                    console.log("----- canBuySeatNum = " + S + " SystemSelectTicketMax = " + o.SystemSelectTicketMax);
                    var k = [], C = "";
                    console.log(" all seat = " + p * w);
                    var M = new Array(p * w);
                    o.seatArray = new Array(p * w);
                    for (var b = s.seat_data, D = b.length, H = 0; H < D; H++) {
                        var L = b[H];
                        (N = {}).sitid = L[0], N.seat_type = L[1], N.status = L[2], N.ordinate_horizontal = L[3], 
                        N.ordinate_vertical = L[4], N.sitname = L[5], N.relation_sit = L[6], N.priority = L[7], 
                        N.fenquId = L[8], N.area_id = L[8], N.seat_type, "0" == h ? (N.price = d[0].price, 
                        N.service_fee = d[0].service_fee, N.fenquId = "1", N.area_id = "1") : o.setPrice(N);
                        var P = N.ordinate_horizontal, O = (Y = N.ordinate_vertical) - 1 + (P - 1) * w;
                        N.index = O, M.splice(O, 0, N), o.seatArray.splice(O, 0, N), N.relation_sit || o.addSeatPriority(N), 
                        N.relation_sit && O > 0 && o.seatArray[O - 1] && o.seatArray[O - 1].relation_sit == N.relation_sit && (N.relation_sit_index = O - 1, 
                        N.relation_sit_p = "r", o.seatArray[O - 1].relation_sit_index = O, o.seatArray[O - 1].relation_sit_p = "l"), 
                        o.setImages(N);
                    }
                    var I = {};
                    I.status = "" + o.Status_Null, I.relation_sit = o.SEAT_EMPTY;
                    for (var B = p * w, T = 0; T < B; T++) {
                        var N = M[T];
                        void 0 == N && (M[T] = I);
                    }
                    wx.setNavigationBarTitle({
                        title: s.cinema_name
                    });
                    var q = 187.5;
                    q = S >= 4 ? 187.5 : 750 / S, i.intColumnArr(s);
                    for (T = 1; T <= p; T++) {
                        for (var O = (T - 1) * w, C = "", R = "", Y = 1; Y <= w; Y++) {
                            var X = M[O = Y - 1 + (T - 1) * w];
                            if (X && (R = X.sitname), R) break;
                        }
                        R ? (C = R.substring(0, R.indexOf("排")), k.push(C)) : k.push("");
                    }
                    var U = [];
                    if (o.bestSeatCountMax > 0) for (T = 0; T < o.bestSeatCountMax; T++) U[T] = T + 1;
                    a.animation.scale(.6).step(), i.setData({
                        time_index: i.data.time_index,
                        time_list: i.data.time_list,
                        scroll_id: i.data.scroll_id,
                        movie_format: i.data.movie_format,
                        scrollH: l,
                        movie_name: u,
                        animationData: a.animation.export(),
                        width: q,
                        seat_num: U,
                        time: v,
                        seat_data: M,
                        columnArr: k,
                        order_info: f,
                        isRecommendClick: !1,
                        hall_reminder: r,
                        hall_reminder_type: n,
                        allPrice: "",
                        selectedSeat: o.selectSeatArray,
                        fenqu_bg: c,
                        hall_name: m,
                        cinema_name: _,
                        language: g,
                        area_flag: h,
                        area_price: d,
                        row_x: i.data.row_x,
                        column_y: i.data.column_y
                    }, function() {
                        console.log("---------界面渲染完毕---------------");
                    }), i.getLockSeat();
                } catch (e) {
                    console.log(e), wx.showModal({
                        confirmColor: "#ff9500",
                        title: "",
                        showCancel: "false",
                        content: "数据错误",
                        confirmText: "我知道了"
                    });
                }
                0 == i.data.reminderH && wx.createSelectorQuery().select(".hall_reminder").boundingClientRect(function(e) {
                    e && 0 != e.height && (console.log("reminder height = " + e.height), console.log("reminder width = " + e.width), 
                    i.data.reminderH = e.height, l -= e.height, i.setData({
                        scrollH: l,
                        reminderH: e.height
                    }));
                }).exec();
            }
        });
    },
    getLockSeat: function() {
        var t = this;
        getApp().userIsLogin() && e.getLockSeat(t.data.show_id).then(function(e) {
            if (console.log(e), e.cancelShowError = !0, 1 == e.data.status) {
                var a = e.data.data;
                if (a.seat_id) {
                    getApp().globalData.isUnLockSeat = !0, t.setData({
                        lockInfo: a
                    });
                    var i = a.seat_id.split(",");
                    if (i) {
                        for (var s = i.length, l = o.seatArray.length, r = 0; r < s; r++) for (var n = i[r], c = 0; c < l; c++) {
                            var d = o.seatArray[c];
                            if (d && d.sitid == n && (console.log("seatId = " + n), d.status = "0", o.onClickSeat(d), 
                            i.length > o.promo_num && o.setImages(d), d.relation_sit)) {
                                for (var h = o.selectSeatArray.length, m = [], _ = 0; _ < h; _++) -1 == m.indexOf(o.selectSeatArray[_]) && m.push(o.selectSeatArray[_]);
                                o.selectSeatArray = m;
                            }
                        }
                        t.showAllPrice(), t.setData({
                            seat_data: o.seatArray,
                            selectedSeat: o.selectSeatArray
                        });
                    }
                } else getApp().globalData.isUnLockSeat = !0;
            }
        });
    },
    gotoLogin: function() {
        return getApp().globalData.isShowedUserProtocol ? !getApp().userIsLogin() && (wx.navigateTo({
            url: "/pages/login/wxLogin/wxLogin"
        }), !0) : (this.setData({
            showUserProtocol: getApp().globalData.isShowedUserProtocol
        }), !0);
    },
    dialogNoClick: function() {},
    dismissDialog: function() {
        this.setData({
            showUserProtocol: !0
        });
    },
    not_agree: function() {
        this.dismissDialog();
    },
    agree: function() {
        this.dismissDialog(), this.gotoLogin();
    }
});