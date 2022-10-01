var t = getApp();

Component({
    properties: {},
    data: {
        limitDays: 7
    },
    lifetimes: {
        attached: function() {
            t.burying.setSensorEvent(t, {
                PopupPromptTrigger: "企业创建成功弹窗",
                PopupPromptMainButton: "邀请微信好友加入"
            }, "PopupPromptShow"), setTimeout(function() {
                t.ifFresh.mycard = !0;
            }, 1500);
        }
    },
    methods: {
        _ss: function() {},
        _closeModel: function() {
            t.ifFresh.mycard = !0, this.triggerEvent("closeModel");
        }
    }
});