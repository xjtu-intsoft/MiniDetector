var e = require("url.js"), r = require("./../util/wxRequest.js"), t = require("./../util/md5.js"), a = "240";

module.exports = {
    lockSeat: function(t, a, u) {
        var n = {
            show_id: t,
            seat_ids: a,
            force_lock: u
        };
        return r.getRequest(e.urlPath.lock_seat, e.urlParameter(n));
    },
    unLockSeat: function(t, a, u) {
        var n = {
            show_id: t,
            seat_ids: a,
            lock_flag: u
        };
        return r.getRequest(e.urlPath.unlock_seat, e.urlParameter(n));
    },
    getLockSeat: function(t) {
        var a = {
            show_id: t
        };
        return r.getRequest(e.urlPath.lock_seat_log, e.urlParameter(a));
    },
    movieOnList: function(t) {
        var u = {
            width: a,
            movie_page_num: t
        };
        return r.getRequest(e.urlPath.movieList, e.urlParameter(u));
    },
    movieComingList: function(t) {
        var u = {
            width: a,
            movie_page_num: t
        };
        return r.getRequest(e.urlPath.movieComingList, e.urlParameter(u));
    },
    movieInfo: function(t, u, n) {
        var o = {
            width: a,
            movie_id: t
        };
        return u && u.length > 0 && (o = {
            width: a,
            movie_id: t,
            cinema_id: u,
            city_id: n
        }), r.getRequest(e.urlPath.movieInfo, e.urlParameter(o));
    },
    login: function(a, u, n, o) {
        var i = {
            user_name: a,
            user_password: u = t.hex_md5(u),
            code: n,
            user_code: o
        };
        return r.getRequest(e.urlPath.login, e.urlParameter(i));
    },
    logout: function() {
        var t = {};
        return r.getRequest(e.urlPath.logout, e.urlParameter(t));
    },
    userInfo: function() {
        return r.getRequest(e.urlPath.user_info, e.urlParameter({}));
    },
    orderList: function(t) {
        var u = {
            width: a,
            order_status: t
        };
        return r.getRequest(e.urlPath.order_list, e.urlParameter(u));
    },
    change_pwd: function(t, a) {
        var u = {
            old_pswd: t,
            new_pswd: a
        };
        return r.getRequest(e.urlPath.change_pwd, e.urlParameter(u));
    },
    update_user_info: function(t, a, u, n, o, i, d, c) {
        var l = {
            type: t,
            content: a,
            birthday: u,
            city_name: n,
            city_id: o,
            movie_hobby_ids: i,
            age: d,
            sex: c
        };
        return r.getRequest(e.urlPath.update_user_info, e.urlParameter(l));
    },
    set_phone: function(t, a, u) {
        var n = {
            type: t,
            mobile: a,
            code: u
        };
        return r.getRequest(e.urlPath.set_phone, e.urlParameter(n));
    },
    add_suggestion: function(t, a, u, n, o) {
        var i = {
            contact: t,
            content: a,
            phone_model: u,
            phone_system: n,
            app_version: o
        };
        return r.getRequest(e.urlPath.add_suggestion, e.urlParameter(i));
    },
    suggestion_list: function() {
        var t = {};
        return r.getRequest(e.urlPath.suggestion_list, e.urlParameter(t));
    },
    qa_list: function() {
        var t = {};
        return r.getRequest(e.urlPath.question, e.urlParameter(t));
    },
    unfinished_order: function(t) {
        var a = {
            order_num: t
        };
        return r.getRequest(e.urlPath.unfinished_order, e.urlParameter(a));
    },
    card_list: function(t) {
        var a;
        return a = t ? {
            show_id: t
        } : {}, r.getRequest(e.urlPath.card_list, e.urlParameter(a));
    },
    bind_card: function(t, a, u, n, o, i) {
        var d = {
            cinema_id: t,
            card_num: a,
            card_pass: u,
            show_id: n,
            code: o,
            type: i
        };
        return r.getRequest(e.urlPath.bind_card, e.urlParameter(d));
    },
    unbind_card: function(t, a) {
        var u = {
            card_num: t,
            cinema_id: a
        };
        return r.getRequest(e.urlPath.unbind_card, e.urlParameter(u));
    },
    card_transaction: function(t, a) {
        var u = {
            cinema_id: t,
            card_num: a
        };
        return r.getRequest(e.urlPath.card_transaction, e.urlParameter(u));
    },
    bindCardVerifyMobile: function(t, a, u) {
        var n = {
            cinema_id: t,
            card_num: a,
            card_pw: u
        };
        return r.getRequest(e.urlPath.card_verify_mobile, e.urlParameter(n));
    },
    getSmsMessage: function(t, a, u) {
        var n = {
            type: t,
            mobile: a,
            code: u
        };
        return r.getRequest(e.urlPath.send_message, e.urlParameter(n));
    },
    playSeat: function(t) {
        var u = {
            show_id: t,
            width: a
        };
        return r.getRequest(e.urlPath.seat_list, e.urlParameter(u));
    },
    init: function() {
        return r.getRequest(e.urlPath.init, e.urlParameter({}));
    },
    recharge: function(t, a, u, n, o, i) {
        var d = {
            cinema_id: t,
            card_num: a,
            recharge_value: u,
            pay_code: n,
            form_id: i,
            open_id: o
        };
        return r.getRequest(e.urlPath.recharge, e.urlParameter(d));
    },
    getHeadUrl: function() {
        var r = {
            type: "1"
        }, t = e.urlParameter(r), a = "";
        for (var u in t) a += u + "=" + t[u] + "&";
        a = a.substr(0, a.length - 1);
        var n = e.urlPath.update_user_head;
        return console.log(n + "?" + a), [ n, t ];
    },
    advertList: function(t, a) {
        var u = {
            cinema_id: t,
            promotion_type: a
        };
        return r.getRequest(e.urlPath.advertList, e.urlParameter(u));
    },
    getOnLineList: function(t) {
        var a = {
            cinema_id: t
        };
        return r.getRequest(e.urlPath.online_list, e.urlParameter(a));
    },
    getOnLineCardDetails: function(t, a, u) {
        var n = {
            card_id: t,
            bind_cinema_id: a,
            exchange_code: u
        };
        return r.getRequest(e.urlPath.online_card_details, e.urlParameter(n));
    },
    onLineCreat: function(t, a, u, n, o) {
        var i = {
            out_level_id: t,
            password: a,
            pay_money: u,
            cinema_id: n,
            card_id: o
        };
        return r.getRequest(e.urlPath.online_creat, e.urlParameter(i));
    },
    onLineCardBug: function(t, a, u, n, o) {
        var i = {
            order_num: t,
            pay_type: a,
            pay_money: u,
            form_id: o,
            open_id: n
        };
        return r.getRequest(e.urlPath.online_card_bug, e.urlParameter(i));
    },
    onLineStatus: function(t) {
        var a = {
            order_num: t
        };
        return r.getRequest(e.urlPath.online_card_status, e.urlParameter(a));
    },
    getOpenId: function(r, t, a, u) {
        var n = {
            code: r,
            order_num: a,
            form_id: u,
            cinema_id: t
        }, o = e.urlParameter(n), i = "";
        for (var d in o) i += d + "=" + o[d] + "&";
        i = i.substr(0, i.length - 1);
        var c = e.urlPath.openid;
        return console.log(c + "?" + i), [ c, o ];
    },
    getSalesList: function(t) {
        var a = {
            promo_id: t
        };
        return r.getRequest(e.urlPath.additional_goods_list, e.urlParameter(a));
    },
    modifyCardPwd: function(t, a, u, n) {
        var o = {
            card_num: t,
            card_pass: a,
            cinema_id: u,
            code: n
        };
        return r.getRequest(e.urlPath.update_card_pwd, e.urlParameter(o));
    },
    getCardInfo: function(t) {
        var a = {
            member_bind_card_id: t
        };
        return r.getRequest(e.urlPath.card_info, e.urlParameter(a));
    },
    getCouponList: function(t, a, u, n) {
        var o = {
            card_id: t,
            is_only_goods_type: a,
            page: u,
            price: n
        };
        return r.getRequest(e.urlPath.couponListPay, e.urlParameter(o));
    },
    modifyCardPwdVerifyCode: function(t) {
        var a = {
            card_num: t
        };
        return r.getRequest(e.urlPath.card_modify_pwd_vertify_code, e.urlParameter(a));
    },
    codeLogin: function(t, a, u, n) {
        var o = {
            code: t,
            qr_code: a,
            mobile: u,
            wx_code: n
        };
        return r.getRequest(e.urlPath.validate_code_loginreg, e.urlParameter(o));
    },
    codeValidate: function(t, a) {
        var u = {
            graph_validate_code: t,
            mobile: a
        };
        return r.getRequest(e.urlPath.validate_code, e.urlParameter(u));
    },
    loginByOpenId: function(t) {
        var a = {
            wx_code: t
        };
        return r.getRequest(e.urlPath.login_openid, e.urlParameter(a));
    },
    orderProgress: function(t, a) {
        var u = {
            order_num: t,
            order_type: a
        };
        return r.getRequest(e.urlPath.order_progress, e.urlParameter(u));
    },
    couponShare: function(t, a) {
        var u = {
            activity_id: t,
            red_envelope_pool_id: a
        };
        return r.getRequest(e.urlPath.coupon_share, e.urlParameter(u));
    },
    getScoreExchangeCoupons: function(t) {
        var a = {
            page: t
        };
        return r.getRequest(e.urlPath.score_exchange_coupons, e.urlParameter(a));
    },
    getScoreExchangeRecodList: function(t, a) {
        var u = {
            card_num: t,
            page: a
        };
        return r.getRequest(e.urlPath.score_exchange_recod_list, e.urlParameter(u));
    },
    scoreExchange: function(t, a, u, n) {
        var o = {
            card_num: t,
            card_password: a,
            id: u,
            point: n
        };
        return r.getRequest(e.urlPath.score_exchange, e.urlParameter(o));
    },
    codeExchangeCheck: function(t, a, u) {
        var n = {
            code: t
        };
        return r.getRequest(e.urlPath.code_exchange_check, e.urlParameter(n));
    },
    bindOfflineCoupon: function(t, a, u) {
        var n = {
            coupon_code: t,
            cinema_id: a,
            from_goods: u
        };
        return r.getRequest(e.urlPath.bind_offline_coupon, e.urlParameter(n));
    },
    codeExchange: function(t, a, u) {
        var n = {
            exchange_code: t,
            password: a,
            bind_cinema_id: u
        };
        return r.getRequest(e.urlPath.code_exchange, e.urlParameter(n));
    },
    depositResult: function(t) {
        var a = {
            order_id: t.order_id,
            card_num: t.card_num,
            activity_id: t.activity_id
        };
        return console.log(e.urlPath.depositResult, e.urlParameter(a)), r.getRequest(e.urlPath.deposit_result, e.urlParameter(a));
    },
    getOffLineCouponList: function(t) {
        var a = {
            request_from: t
        };
        return r.getRequest(e.urlPath.offline_coupon_list, e.urlParameter(a));
    },
    getCouponPackageDetail: function(t) {
        var a = {
            id: t
        };
        return r.getRequest(e.urlPath.coupon_package_detail, e.urlParameter(a));
    },
    couponPackageOrderCreate: function(t, a, u) {
        var n = {
            id: t,
            num: a,
            pay_money: u
        };
        return r.getRequest(e.urlPath.coupon_package_order_create, e.urlParameter(n));
    },
    couponPackageOrderDetail: function(t, a, u) {
        var n = {
            order_num: t,
            order_type_num: a,
            wait_pay: u
        };
        return r.getRequest(e.urlPath.coupon_package_order_detail, e.urlParameter(n));
    },
    couponPackageOrderCancel: function(t) {
        var a = {
            order_num: t
        };
        return r.getRequest(e.urlPath.coupon_package_order_cancel, e.urlParameter(a));
    },
    goodBuy: function(t, a, u, n) {
        var o = {
            order_num: t,
            pay_money: a,
            pay_type: u,
            open_id: n
        };
        return r.getRequest(e.urlPath.goodBuy, e.urlParameter(o));
    },
    unRegisterInfo: function() {
        return r.getRequest(e.urlPath.user_un_register_info, e.urlParameter({}));
    },
    unRegisterInfoMobileCode: function() {
        return r.getRequest(e.urlPath.user_un_register_mobile_code, e.urlParameter({}));
    },
    unRegisterInfoLogOff: function(t) {
        var a = {
            validate_code: t
        };
        return r.getRequest(e.urlPath.user_un_register, e.urlParameter(a));
    },
    deleteOrder: function(t, a) {
        var u = {
            order_num: t,
            order_type_num: a
        };
        return r.getRequest(e.urlPath.delete_order, e.urlParameter(u));
    },
    saveCompanion: function(t, a, u, n, o) {
        var i = {
            id: t,
            name: a,
            identity: u,
            mobile: n,
            identity_type: o
        };
        return r.getRequest(e.urlPath.save_companion, e.urlParameter(i));
    },
    getContactList: function() {
        return r.getRequest(e.urlPath.contact_list, e.urlParameter({}));
    },
    deleteContact: function(t) {
        var a = {
            id: t
        };
        return r.getRequest(e.urlPath.deleteContact, e.urlParameter(a));
    }
};