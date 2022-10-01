var t = require("../../utils/util.js"), e = require("../../utils/event.js");

Component({
    properties: {
        type: Number,
        item: Object,
        page: String
    },
    methods: {
        textClick: function() {
            this.triggerEvent("textClick", this.data.item);
        },
        goWiki: function(e) {
            this.triggerEvent("goWiki"), t.submitFormId(e.detail.formId);
        },
        drawImage: function(i) {
            var a = wx.getStorageSync("user_Id"), r = this.data.item;
            if (2 == this.data.type ? e.mtaEvent("toutiaoBaikeFriends", a, r.gifnews_id, r.bk_id) : (1 == r.subject_type && e.mtaEvent("toutiaoOnePicSubjectFriends", a, r.show_type, r.subject_id, r.subject_type), 
            e.mtaEvent("toutiaoSubjectFriends", a, r.show_type, r.subject_id, r.subject_type)), 
            "slideshow" == this.data.page) t.pageFun.drawImage(r, 4); else if (3 == r.article_type) {
                var s = r.ip_list, o = t.format.toObject(s.banner_size);
                t.pageFun.drawEWM({
                    shareText1: s.name,
                    shareText2: t.format.shortStr(s.description, 15),
                    topUrl: s.banner,
                    guid: s.guid,
                    whRate: o.width / o.height
                }), e.mtaEvent("indexPageIphomeShareCicle");
            } else t.pageFun.drawImage(r, 1);
            t.submitFormId(i.detail.formId);
        },
        onShareWeChat: function(i) {
            var a = this.data, r = a.item, s = wx.getStorageSync("user_Id"), o = r.subject_type;
            2 == a.type ? e.mtaEvent("toutiaoBaikeShare", s, r.gifnews_id, r.bk_id) : 3 == r.article_type ? e.mtaEvent("indexPageIphomeShare") : 1 != o && 2 != o || (1 == o && e.mtaEvent("toutiaoOnePicSubjectShare", s, r.show_type, r.subject_id, r.subject_type), 
            e.mtaEvent("toutiaoSubjectShare", s, r.show_type, r.subject_id, r.subject_type)), 
            t.submitFormId(i.detail.formId);
        }
    }
});