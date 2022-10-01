var e = getApp();

Component({
    properties: {},
    data: {
        previewPcprompt: !1
    },
    lifetimes: {
        attached: function() {
            this.setData({
                previewPcprompt: e.previewPcprompt
            });
        }
    },
    pageLifetimes: {
        show: function() {}
    },
    methods: {
        knowledge: function() {
            e.burying.setPoint(e, 814), e.previewPcprompt = !1, this.setData({
                previewPcprompt: !1
            });
        }
    }
});