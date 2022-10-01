var t = require("../../../utils/util.js");

require("../../../utils/event.js");

Component({
    properties: {
        item: Object
    },
    data: {
        width: 472,
        bgColor: t.pageFun.randomColor()
    },
    methods: {
        loadImg: function(t) {
            this.setData({
                bgColor: ""
            });
        },
        clickStory: function() {
            t.pageFun.clickStory(this.data.item);
        }
    }
});