function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var t = getApp().urlService, a = require("./../../../util/mathUtil.js"), r = require("../findHome/findAllSelectGoodsCart.js").allSelectGoodsCart, n = require("../../../request/foodsIndexRequest.js").foodsIndexRequest, i = require("../../../util/strUtil.js");

Page({
    data: {
        option_package_pic: [],
        currentSwiper: 0,
        good_id: "",
        allPrice: "",
        isConfirmAdd: !0,
        confirmCount: 0,
        currentConfirmCount: 0,
        component: [],
        fromFlag: "",
        requestData: {}
    },
    onLoad: function(e) {
        console.log(e);
        var a = this;
        this.data.good_id = e.good_id, this.data.fromFlag = e.fromFlag, this.data.index = e.index;
        var r = t.urls.optionGoodsDetail, n = t.urlParameter({
            goods_id: e.good_id,
            goods_type: "3"
        });
        t.wxRequest.getRequest(r, n).then(function(e) {
            console.log("res", e);
            var t = e.data;
            if ("0" == t.errcode) {
                var r = t.data;
                a.dealWithData(r);
            }
        }).finally(function() {
            wx.stopPullDownRefresh();
        });
    },
    onShow: function() {},
    changeCurrent: function(e) {
        this.setData({
            currentSwiper: e.detail.current
        });
    },
    selectedItem: function(t) {
        var r, n = t.currentTarget.dataset.group, i = t.currentTarget.dataset.index, o = this.data.component[n], d = o.members[i];
        if (!d.heighLighted && o.selectedNum != o.gnum) {
            if (d.heighLighted = 1, d.canDel = !0, d.numCount = 1, o.selectedNum += 1, d.addPrice > "0" && (this.data.allPrice = a.add(this.data.allPrice, d.addPrice)), 
            o.selectedNum == o.gnum) {
                this.data.currentConfirmCount += 1;
                for (var s = 0; s < o.members.length; s++) o.members[s].canAdd = !1;
            }
            this.setData((r = {}, e(r, "component[" + n + "]", o), e(r, "allPrice", this.data.allPrice), 
            e(r, "isConfirmAdd", this.data.currentConfirmCount == this.data.confirmCount), r));
        }
    },
    clickgoodsdel: function(t) {
        var r, n = t.currentTarget.dataset.group, i = t.currentTarget.dataset.index, o = this.data.component[n], d = o.members[i];
        if (d.canDel) {
            if (d.numCount -= 1, o.selectedNum -= 1, d.addPrice > "0" && (this.data.allPrice = a.sub(this.data.allPrice, d.addPrice)), 
            0 == d.numCount && (d.canDel = !1, d.heighLighted = 0), o.selectedNum + 1 == o.gnum) {
                this.data.currentConfirmCount -= 1;
                for (var s = 0; s < o.members.length; s++) o.members[s].canAdd = !0;
            }
            this.setData((r = {}, e(r, "component[" + n + "]", o), e(r, "allPrice", this.data.allPrice), 
            e(r, "isConfirmAdd", !1), r));
        }
    },
    clickgoodsadd: function(t) {
        var r, n = t.currentTarget.dataset.group, i = t.currentTarget.dataset.index, o = this.data.component[n], d = o.members[i];
        if (d.canAdd) {
            if (d.numCount += 1, d.canDel = !0, o.selectedNum += 1, d.addPrice > "0" && (this.data.allPrice = a.add(this.data.allPrice, d.addPrice)), 
            1 == d.numCount && (d.heighLighted = 1), o.selectedNum == o.gnum) {
                this.data.currentConfirmCount += 1;
                for (var s = 0; s < o.members.length; s++) o.members[s].canAdd = !1;
            }
            this.setData((r = {}, e(r, "component[" + n + "]", o), e(r, "allPrice", this.data.allPrice), 
            e(r, "isConfirmAdd", this.data.currentConfirmCount == this.data.confirmCount), r));
        }
    },
    finishedAdd: function() {
        if (this.data.isConfirmAdd) {
            for (var e = "", t = "", i = [], o = 0, d = this.data.component, s = 0; s < d.length; s++) {
                for (var c = d[s], m = c, u = [], l = 0; l < c.members.length; l++) 1 == (h = c.members[l]).heighLighted && h.numCount > 0 && (e += h.name + "x" + h.numCount + " + ", 
                t += h.id + "x" + h.numCount + " + ", o = a.add(o, a.mul(h.addPrice, h.numCount)), 
                u.push(h));
                m.members = u, i.push(m);
            }
            e = e.slice(0, e.length - 3), t = t.slice(0, t.length - 3);
            var h = this.data.requestData;
            if (h.map_key = h.id + " + " + t, h.content = e, h.showPrice = this.data.allPrice, 
            h.price = this.data.allPrice + "", h.component = i, console.log("good", h), "find" == this.data.fromFlag) h.scroll_id = "food" + h.map_key, 
            1 == h.over_inventory_sell_flag && (h.inventory = "999"), n.theGoodisPromo(h), h.showPrice = this.data.allPrice + "", 
            h = r.addGoods("foodCart", h); else if ("ticketOrderConfirm" == this.data.fromFlag) {
                h.component = d, h.choseNum = 1, h.index = this.data.index, h.optionGroupGoodText = e, 
                h.goods_id = h.id, h.allAddPrice = o;
                var g = getCurrentPages();
                g[g.length - 1 - 1].optionGoodsBack(h);
            }
            wx.navigateBack();
        } else getApp().showModalApp("还有商品未选择到规定数量");
    },
    dealWithData: function(e) {
        console.log("data", e), this.data.requestData = e;
        var t = e.component;
        this.data.confirmCount = t.length;
        var r = e.price;
        e.promo_id && e.promo_id > 0 && (r = e.promo_price), r = i.priceFormat(r), r = parseFloat(r);
        for (var n = 0; n < this.data.confirmCount; n++) {
            var o = t[n];
            if (1 == o.members.length && o.gnum > 0) o.selectedNum = parseInt(o.gnum), this.data.currentConfirmCount += 1, 
            o.group_name = o.group_name && o.group_name.length > 0 ? o.group_name : "必选商品", 
            o.members[0].addPrice > "0" && (r = a.add(r, parseFloat(o.members[0].addPrice) * o.gnum)), 
            (s = o.members[0]).heighLighted = 1, s.canAdd = !1, s.canDel = !1, s.numCount = o.selectedNum; else {
                o.selectedNum = 0, o.group_name = o.group_name && o.group_name.length > 0 ? o.group_name : "可选商品";
                for (d = 0; d < o.members.length; d++) 1 == (s = o.members[d]).recommend ? (s.heighLighted = 1, 
                s.numCount = 1, s.addPrice > "0" && (r = a.add(r, parseFloat(s.addPrice))), s.canDel = !0, 
                o.selectedNum += 1) : (s.heighLighted = 0, s.numCount = 0, s.canDel = !1), s.canAdd = !1;
                if (o.selectedNum < o.gnum) for (var d = 0; d < o.members.length; d++) {
                    var s = o.members[d];
                    s.canAdd = !0;
                } else this.data.currentConfirmCount += 1;
            }
        }
        this.setData({
            option_package_pic: e.option_package_pic,
            component: t,
            isConfirmAdd: 0 != this.data.confirmCount && this.data.currentConfirmCount == this.data.confirmCount,
            allPrice: r,
            name: e.name
        });
    }
});