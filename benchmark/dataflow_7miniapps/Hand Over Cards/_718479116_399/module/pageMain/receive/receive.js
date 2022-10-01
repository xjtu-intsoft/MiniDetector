getApp();

Component({
    properties: {
        receiveText: {
            type: String
        },
        leftText: {
            type: String
        },
        rightText: {
            type: String
        }
    },
    data: {},
    methods: {
        _leftBtn: function() {
            this.triggerEvent("noNeed");
        },
        _rightBtn: function() {
            this.triggerEvent("toReceive");
        }
    }
});