function o(o) {
    for (var r in o) {
        var m = o[r];
        m.map_key = m.goods_id, m.optionGroupGoodText = "", console.log("promo_is_addition_type = " + m.promo_is_addition_type), 
        m.choseNum = 0, m.member_price = e.priceFormat(m.member_price), m.nonmember_price = e.priceFormat(m.nonmember_price), 
        "1" == m.over_inventory_sell_flag && (m.goods_inventory = "999"), m.src = "", m.promo_style = "tehui_image", 
        "1" == m.promo_is_addition_type && (m.src = "/images/addmore/Tag_jiajiagou_1.png", 
        m.promo_style = "jiajiaogu_image"), "0" == m.promo_is_addition_type && (m.src = "/images/addmore/Tag_tehui.png", 
        m.promo_style = "tehui_image", m.promo_member_price = e.priceFormat(m.promo_member_price), 
        m.promo_nonmember_price = e.priceFormat(m.promo_nonmember_price), m.promo_num_text = "", 
        m.promo_num > 0 && (m.promo_num_text = "限购" + m.promo_num + "份，超出数量以原价计算", "3" == m.goods_type && (m.goods_inventory = m.promo_num, 
        m.promo_num_text = "限购" + m.promo_num + "份")));
    }
}

var e = require("../util/strUtil.js"), r = new Object();

r.decodeRes = function(e) {
    r.successObj = {}, r.failObj = {};
    var m = e.data;
    if ("0" !== m.errcode) return !1;
    var i = m.data;
    return o(i.goods_data), this.successObj.goodListData = i, !0;
}, module.exports = {
    goodListRequest: r
};