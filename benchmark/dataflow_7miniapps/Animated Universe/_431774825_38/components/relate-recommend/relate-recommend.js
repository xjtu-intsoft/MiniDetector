function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var t, a = require("../../utils/util.js"), i = require("../../utils/event.js"), r = a.pageFun.imageDetail.imageDetailWiki, n = a.pageFun.imageDetail.imageDetailManySubject, s = a.pageFun.imageDetail.imageDetailOneSubject;

Component((t = {
    data: {
        list: []
    }
}, e(t, "data", {
    item: {
        leftIcon: "icon_tag",
        leftText: "相关推荐",
        bg: "000"
    }
}), e(t, "properties", {
    params: String,
    mtStyle: String,
    source: String
}), e(t, "attached", function() {
    var e = this;
    a.pageAjax.callAjax({
        url: "list_recommend",
        success: function(t) {
            var i = t.result;
            i.forEach(function(e) {
                e.bgColor = a.pageFun.randomColor();
            }), e.setData({
                list: i
            });
        }
    });
}), e(t, "methods", {
    loadImg: function(t) {
        var a = "list[" + t.target.dataset.index + "].bgColor";
        this.setData(e({}, a, ""));
    },
    clickedTopic: function(e) {
        var t = e.detail.value;
        this.eventStat(t), a.indexSubjectGoPage({
            subject_type: t.type,
            subject_id: t.target
        }), a.submitFormId(e.detail.formId);
    },
    eventStat: function(e) {
        var t = this.data, a = void 0, o = void 0;
        t.params && (o = (a = JSON.parse(t.params)).params);
        var c = t.source, u = wx.getStorageSync("user_Id"), l = void 0;
        a && (l = a.type), l == r ? i.mtaEvent("baikePreViewRecommend", u, o.gifnews_id, o.bk_id, o.bkm_id, e.rec_id) : l == n || l == s ? i.mtaEvent("subjectDetailPreViewRecommend", u, o.subject_id, o.sg_id, o.sp_id, e.rec_id) : "searchPageNoData" == c && i.mtaEvent("searchPageNoResultTapRelRecommend");
    }
}), t));