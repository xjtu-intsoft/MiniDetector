function o(o) {
    var a = g.urls.goodList, t = g.urlParameter({
        page_num: o
    });
    g.wxRequest.getRequest(a, t).then(function(o) {
        if (m.decodeRes(o)) {
            var a = m.successObj.goodListData.goods_data;
            p.data.goodListData.goods_data = p.data.goodListData.goods_data.concat(a), p.data.goodListData.total_page_num = m.successObj.goodListData.total_page_num, 
            p.data.goodListData.cinema_goods_name = m.successObj.goodListData.cinema_goods_name, 
            p.delegate.setData({
                goodListData: p.data.goodListData
            });
        }
    });
}

function a(o) {
    if ("3" == o.goods_type && p.data.optionGoodsMap[o.goods_id]) {
        if (p.data.optionGoodsMap[o.goods_id] == o.promo_num) return getApp().showModalApp("特惠商品限购" + o.promo_num + "份"), 
        !1;
    } else if (o.choseNum == o.goods_inventory) return getApp().showModalApp("没有更多卖品了"), 
    !1;
    return !0;
}

function t(o) {
    var t = o.goods_id;
    if ("3" == o.goods_type) {
        t = o.map_key;
        var d = p.data.choseGoodList[t];
        if (d && !a(o)) return;
        d || (d = p.data.goodListData.goods_data[o.index]), p.data.choseGoodList[t] ? (d.choseNum += 1, 
        o.choseNum = d.choseNum, p.data.optionGoodsMap[o.goods_id] += 1) : (d.choseNum = 1, 
        p.data.optionGoodsMap[o.goods_id] ? p.data.optionGoodsMap[o.goods_id] += 1 : p.data.optionGoodsMap[o.goods_id] = 1), 
        o.member_price = d.member_price, o.nonmember_price = d.nonmember_price, o.promo_member_price = d.promo_member_price, 
        o.promo_nonmember_price = d.promo_nonmember_price, o.promo_is_addition_type = d.promo_is_addition_type, 
        o.promo_num = d.promo_num, o.promo_id = d.promo_id, o.goods_pic_url = d.goods_pic_url, 
        o.over_inventory_sell_flag = d.over_inventory_sell_flag, o.goods_inventory = d.goods_inventory, 
        o.goods_name = d.goods_name, o.goods_alias = d.goods_alias, o.promo_msg_member = d.promo_msg_member, 
        o.promo_msg_nonmember = d.promo_msg_nonmember, o.promo_num_text = d.promo_num_text, 
        o.promo_num = d.promo_num, o.src = d.src, o.promo_style = d.promo_style, p.data.choseGoodList[t] = o;
    } else p.data.choseGoodList[t] = o;
    e();
}

function e() {
    var o = !0, a = !1, t = void 0;
    try {
        for (var e, d = p.data.goodListData.goods_data[Symbol.iterator](); !(o = (e = d.next()).done); o = !0) {
            var s = e.value;
            p.data.optionGoodsMap[s.goods_id] ? (s.dotNum = p.data.optionGoodsMap[s.goods_id], 
            console.log(" dot num = ", s.dotNum)) : s.dotNum = 0;
        }
    } catch (o) {
        a = !0, t = o;
    } finally {
        try {
            !o && d.return && d.return();
        } finally {
            if (a) throw t;
        }
    }
    console.log("goods map ", p.data.optionGoodsMap), console.log("chose good list = ", p.data.choseGoodList), 
    p.delegate.setData({
        goodListData: p.data.goodListData,
        choseGoodListArr: c(p.data.choseGoodList),
        optionGoodsMap: p.data.optionGoodsMap
    });
}

function d(o, a) {
    return a ? o.choseNum * parseFloat(o.member_price) : o.choseNum * parseFloat(o.nonmember_price);
}

function s(o, a) {
    if (o.additional_goods && o.additional_goods.length > 0) {
        if (o.additional_goods && o.additional_goods.length > 0) {
            console.log("---------------");
            var t = i(o, a), e = n(o.additional_goods, a);
            return parseFloat(t) + parseFloat(e);
        }
        return i(o, a);
    }
    if ("0" == o.promo_is_addition_type) {
        if (o.promo_num && o.choseNum > o.promo_num) {
            var s = o.choseNum, r = o.promo_num, g = o.choseNum - r;
            o.choseNum = r;
            var m = i(o, a);
            o.choseNum = g;
            var c = d(o, a);
            return o.choseNum = s, parseFloat(m) + parseFloat(c);
        }
        return i(o, a);
    }
    return d(o, a);
}

function i(o, a) {
    return a ? o.choseNum * parseFloat(o.promo_member_price) : o.choseNum * parseFloat(o.promo_nonmember_price);
}

function n(o, a) {
    var t = 0;
    for (var e in o) t += a ? parseFloat(o[e].member_price) : parseFloat(o[e].nonmember_price);
    return t;
}

function r(o, a) {
    var t = "";
    if (o.additional_goods && o.additional_goods.length > 0) {
        for (var e in o.additional_goods) {
            var d = o.additional_goods[e];
            t += a ? d.id + "-" + d.ng_strategy_goods_id + "," : d.id + "-" + d.ng_strategy_goods_id + "-" + o.goods_id + ",";
        }
        t = t.slice(0, t.length - 1);
    }
    return t;
}

var g = getApp().urlService, m = require("../../../request/goodsListRequest.js").goodListRequest, c = require("../../../util/publicTool.js").getAllValueWithObjc, p = new Object();

p.setDelegate = function(o) {
    o && (p.delegate = o, p.clear());
}, p.data = {
    page_num: "1",
    goodListData: {
        goods_data: []
    },
    choseGoodList: {},
    optionGoodsMap: {}
}, p.show = function() {
    p.delegate.setData({
        goodDisplay: !0
    }), setTimeout(function() {
        p.delegate.setData({
            goodDisplayAnimation: !0
        });
    }, 100);
}, p.hidden = function() {
    p.delegate.setData({
        goodDisplayAnimation: !1
    }), setTimeout(function() {
        p.delegate.setData({
            goodDisplay: !1
        });
    }, 320);
}, p.clear = function() {
    p.data = {
        page_num: "1",
        goodListData: {
            goods_data: []
        },
        choseGoodList: {},
        optionGoodsMap: {}
    };
}, p.listAddNum = function(o) {
    console.log(o);
    var e = o.currentTarget.dataset.index, d = p.data.goodListData.goods_data[e];
    (a(d) || "3" == d.goods_type) && (d.index = e, d.choseNum += 1, t(d));
}, p.listDecNum = function(o) {
    var a = o.currentTarget.dataset.index, t = p.data.goodListData.goods_data[a], d = t.goods_id;
    0 != t.choseNum && (t.choseNum -= 1, p.data.choseGoodList[d] = t, 0 == t.choseNum && (t.additional_goods = [], 
    delete p.data.choseGoodList[d]), e());
}, p.choseAddNum = function(o) {
    var t = o.currentTarget.dataset.goodid, d = null;
    if (c(p.data.choseGoodList).length > 0) {
        if (d = p.data.choseGoodList[t], !a(d)) return;
        "3" == d.goods_type && p.data.optionGoodsMap[d.goods_id] && (p.data.optionGoodsMap[d.goods_id] += 1);
    } else {
        (d = p.data.goodListData.goods_data[0]).index = 0;
        var s = d.goods_id;
        p.data.choseGoodList[s] = d;
    }
    d.choseNum += 1, p.data.goodListData.goods_data[d.index].choseNum = d.choseNum, 
    e();
}, p.choseDecNum = function(o) {
    var a = o.currentTarget.dataset.goodid, t = p.data.choseGoodList[a];
    console.log("chose dec num  111111111 = ", t), "3" == t.goods_type && p.data.optionGoodsMap[t.goods_id] && (p.data.optionGoodsMap[t.goods_id] -= 1, 
    0 == p.data.optionGoodsMap[t.goods_id] && delete p.data.optionGoodsMap[t.goods_id]), 
    void 0 != t && 0 != t.choseNum && (t.choseNum -= 1, 0 == t.choseNum && (t.additional_goods = [], 
    delete p.data.choseGoodList[a]), p.data.goodListData.goods_data[t.index].choseNum = t.choseNum, 
    e());
}, p.loadMoreGoods = function() {
    console.log("加载更多"), p.data.page_num != p.data.goodListData.total_page_num ? (p.data.page_num = (parseInt(p.data.page_num) + 1).toString(), 
    p.loadGoodList()) : wx.showToast({
        icon: "none",
        title: "没有更多了"
    });
}, p.getAllGoodsPrice = function(o) {
    var a = p.delegate.data.choseGoodListArr, t = 0;
    for (var e in a) {
        var i = a[e];
        i.promo_is_addition_type ? t += s(i, o) : t += d(i, o);
    }
    return console.log("totalGoodsPrice = " + t), t;
}, p.optionGoodsClick = function(o) {
    var a = o.currentTarget.dataset.index, t = p.data.goodListData.goods_data[a];
    return t.index = a, t;
}, p.listAddGood = t, p.getOptionGoodsJson = function() {
    var o = p.delegate.data.choseGoodListArr, a = [];
    for (var t in o) {
        var e = o[t];
        if ("3" == e.goods_type) {
            var d = {};
            d.id = e.goods_id, d.num = e.choseNum, d.addtion_goods = r(e, !0);
            var s = [];
            for (var i in e.component) {
                var n = e.component[i], g = {};
                g.index = n.index;
                var m = [];
                for (var c in n.members) {
                    var _ = n.members[c], u = {};
                    u.goods_id = _.id, u.goods_count = _.numCount, m.push(u);
                }
                g.members = m, s.push(g);
            }
            d.optional_package = s, a.push(d);
        }
    }
    return console.log(getApp().encodeDataAndJsonStringify(a)), console.log("json array= ", a), 
    0 == a.length ? "" : getApp().encodeDataAndJsonStringify(a);
}, p.getAdditionInfos = r, p.getOptionGoodAllAddPrice = function(o) {
    var a = 0;
    if (console.log("all add price good = ", o), o.component && o.component.length > 0) for (var t in o.component) {
        console.log("k = ", t);
        var e = o.component[t];
        for (var d in e.members) {
            var s = e.members[d];
            s.numCount = s.num, s.addPrice && "0" != s.addPrice && (a += parseFloat(s.addPrice));
        }
    }
    return a;
}, p.isCanAdd = a, p.loadGoodList = function() {
    o(p.data.page_num);
}, module.exports = p;