var e = require("../../../../utils/util.js"), i = require("../../../../utils/event.js");

Component({
    properties: {
        item: Object
    },
    methods: {
        goPage: function(t) {
            var r = this.data.item, d = wx.getStorageSync("user_Id");
            i.mtaEvent("subscribeRedirect", d, r.ssi_id, r.redirect_type, r.redirect_id), 102 == r.redirect_type ? (r.subject_id = r.redirect_id, 
            e.indexSubjectGoPage(r)) : 51 == r.redirect_type && wx.navigateTo({
                url: "/pages/dynamicWiki/dynamicWiki?bk_id=" + r.redirect_id
            }), e.submitFormId(t.detail.formId);
        }
    }
});