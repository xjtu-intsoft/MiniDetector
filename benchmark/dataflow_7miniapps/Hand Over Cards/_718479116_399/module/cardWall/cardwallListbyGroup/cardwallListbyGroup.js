var t = getApp(), e = require("../../../11743E110691379C77125616A620E9B3.js"), i = require("../../../7931C4950691379C1F57AC929AD2E9B3.js");

Component({
    properties: {
        records: Object,
        delind: Number
    },
    behaviors: [ e ],
    lifetimes: {
        attached: function() {
            this.animationInit();
        }
    },
    data: {},
    methods: {
        delCardWall: function(e) {
            var l = this;
            t.burying.setPoint(t, 701), i.wallDelete("无法再查看该群的名片", function() {
                l.triggerEvent("delCardWall", e);
            }, function() {});
        },
        toWallDetail: function(t) {
            this.triggerEvent("toWallDetail", t);
        }
    }
});