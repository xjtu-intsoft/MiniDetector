var a = require("./../../../config/httpHtlper.js"), e = require("../../../util/strUtil.js");

Page({
    data: {
        sales: [],
        is_overlap: "0",
        is_memeber: "0"
    },
    onLoad: function(o) {
        var i = this, t = getApp().decodeDataAndJsonParse(o.bean), s = t.promo_id;
        this.data.goods_id = t.goods_id, "3" == t.goods_type && (this.data.goods_id = t.map_key);
        var d = o.is_memeber;
        this.data.index = o.index, console.log(o), a.getSalesList(s).then(function(a) {
            if (console.log(a), 1 == a.data.status) {
                for (var o = a.data.data.list, s = a.data.data.is_overlap, n = 0; n < o.length; n++) {
                    o[n].isSelected = !1, o[n].src = "/images/common/wodehuiyuanka_icon_danxuan_weixuan.png";
                    var r = o[n].member_price, c = o[n].nonmember_price;
                    if (o[n].member_price = e.priceFormat(parseFloat(r).toFixed(2)), o[n].nonmember_price = e.priceFormat(parseFloat(c).toFixed(2)), 
                    t.additional_goods && t.additional_goods.length > 0) for (var l = 0; l < t.additional_goods.length; l++) if (o[n].id == t.additional_goods[l].id) {
                        o[n].isSelected = !0, o[n].src = "/images/common/wodehuiyuanka_icon_danxuan_xuanzhong.png";
                        break;
                    }
                }
                i.setData({
                    sales: o,
                    is_overlap: s,
                    is_memeber: d
                });
            } else getApp().showModalApp(a.data.msg);
        });
    },
    okClick: function() {
        for (var a = [], e = this.data.sales, o = 0; o < e.length; o++) e[o].isSelected && a.splice(a.length, 1, e[o]);
        console.log(a);
        var i = getCurrentPages(), t = i[i.length - 2];
        console.log(t), t.getGoods().data.choseGoodList[this.data.goods_id].additional_goods = a;
        t.data.choseGoodListArr.length > 0 ? (t.data.choseGoodListArr[this.data.index].additional_goods = a, 
        t.setData({
            isLoad: !0,
            choseGoodListArr: t.data.choseGoodListArr
        })) : (t.data.goodListData.goods_data[0].additional_goods = a, t.setData({
            isLoad: !0,
            choseGoodListArr: t.data.goodListData
        })), wx.navigateBack({});
    },
    itemClick: function(a) {
        var e = a.currentTarget.dataset.index;
        console.log(e);
        var o = this.data.is_overlap, i = this.data.sales;
        if (o && "0" == o) for (var t = 0; t < i.length; t++) e == t ? (i[t].isSelected = !0, 
        i[t].src = "/images/common/wodehuiyuanka_icon_danxuan_xuanzhong.png") : (i[t].isSelected = !1, 
        i[t].src = "/images/common/wodehuiyuanka_icon_danxuan_weixuan.png"); else i[e].isSelected ? (i[e].isSelected = !1, 
        i[e].src = "/images/common/wodehuiyuanka_icon_danxuan_weixuan.png") : (i[e].isSelected = !0, 
        i[e].src = "/images/common/wodehuiyuanka_icon_danxuan_xuanzhong.png");
        this.setData({
            sales: i
        });
    }
});