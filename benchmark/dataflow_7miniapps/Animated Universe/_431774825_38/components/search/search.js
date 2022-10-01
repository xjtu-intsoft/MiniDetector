var e = require("../../utils/util.js"), a = require("../../utils/event.js");

e.pageFun.stream.streamManyImg, e.pageFun.stream.streamWiki, e.pageFun.stream.streamOneImg;

Component({
    methods: {
        goSearchPage: function() {
            this.commonEvent("searchFace"), wx.navigateTo({
                url: "/pages/searchPage/searchPage"
            });
        },
        goAddTextPage: function() {
            this.commonEvent("makeFace"), wx.navigateTo({
                url: "/pages/addText/addText"
            });
        },
        commonEvent: function(t) {
            for (var c = [ "index", "dtyz", "streamImage" ], i = {
                searchFace: {
                    index: "indexPageSearchFace",
                    dtyz: "dtyzPageSearchFace",
                    streamImage: [ "ManyPicSubjectDetailPageSearchFace", "baikeDetailPageSearchFace", "onePicSubjectDetailPageSearchFace" ]
                },
                makeFace: {
                    index: "indexPageMakeFace",
                    dtyz: "dtyzPageMakeFace",
                    streamImage: [ "ManyPicSubjectDetailPageMakeFace", "baikeDetailPageMakeFace", "onePicSubjectDetailPageMakeFace" ]
                }
            }[t], r = e.pageFun.calPageName(), n = 0; n < c.length; n++) {
                var g = c[n];
                if (-1 != r.indexOf(g)) {
                    var m = i[g];
                    Array.isArray(m) && (m = m[r.split(",")[1] - 1]), a.mtaEvent(m);
                    break;
                }
            }
        }
    }
});