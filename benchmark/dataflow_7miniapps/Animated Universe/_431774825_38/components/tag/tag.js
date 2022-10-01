var t = require("../../utils/util.js"), e = require("../../utils/event.js");

Component({
    properties: {
        tags: Array,
        item: Object
    },
    data: {
        dict: {
            1: "../../images/icon_tag.png",
            2: "../../images/icon_tag.png",
            9: "../../images/icon_tag.png",
            10: "../../images/icon_tag.png",
            11: "../../images/icon_tag.png"
        }
    },
    methods: {
        click: function(e) {
            t.submitFormId(e.detail.formId);
        },
        goPage: function(a) {
            var i = this.data.tags[a.currentTarget.dataset.index].subject;
            if (i) {
                i.from = "tag";
                var g = wx.getStorageSync("user_Id");
                e.mtaEvent("subjectTag", g, this.data.tags[a.currentTarget.dataset.index].tag_name, i.subject_id), 
                t.indexSubjectGoPage(i);
            }
        }
    }
});