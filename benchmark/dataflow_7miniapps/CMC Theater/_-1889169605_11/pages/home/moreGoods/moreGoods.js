var t = require("../../../templates/confirmOrder/choseGoods/choseGoods.js");

require("../../../util/strUtil.js");

Page({
    data: {
        goodListData: [],
        payType: "",
        currentPriceEntity: "",
        selectCard: null,
        choseGoodListArr: [],
        optionGoodsMap: []
    },
    onLoad: function(t) {
        var e = this.getOrderConfirmPage();
        this.setData({
            goodListData: e.data.goodListData,
            payType: e.data.payType,
            currentPriceEntity: e.data.currentPriceEntity,
            selectCard: e.data.selectCard
        });
    },
    loadMoreGoods: function() {
        this.getOrderConfirmPage().loadMoreGoods(), this.setData({
            goodListData: this.getOrderConfirmPage().data.goodListData
        });
    },
    optionGoodsClick: function(t) {
        console.log("==========", t), this.getOrderConfirmPage().optionGoodsClick(t), this.data.index = t.currentTarget.dataset.index;
    },
    listAddNum: function(t) {
        this.getOrderConfirmPage().listAddNum(t), this.upDatePriceWhenGoodChange();
    },
    listDecNum: function(t) {
        this.getOrderConfirmPage().listDecNum(t), this.upDatePriceWhenGoodChange();
    },
    upDatePriceWhenGoodChange: function() {
        var t = this.getOrderConfirmPage();
        this.setData({
            optionGoodsMap: t.data.optionGoodsMap,
            goodListData: t.data.goodListData,
            currentPriceEntity: t.data.currentPriceEntity
        });
    },
    hiddenChoseGoods: function() {
        this.getOrderConfirmPage().hiddenChoseGoods(), wx.navigateBack();
    },
    getOrderConfirmPage: function() {
        var t = getCurrentPages();
        return t[t.length - 1 - 1];
    },
    optionGoodsBack: function(e) {
        this.data.index, e.goods_id;
        t.listAddGood(e);
        var o = getCurrentPages();
        o[o.length - 1 - 1 - 1].listAddGood(), this.upDatePriceWhenGoodChange();
    }
});