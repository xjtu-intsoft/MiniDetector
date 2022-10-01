Component({
    properties: {
        modalShow: {
            type: Boolean
        },
        buttonText: {
            type: String
        },
        text: {
            type: String
        }
    },
    data: {},
    methods: {
        _ss: function() {},
        _button: function() {
            this._closeModal(), this.triggerEvent("modalButton");
        },
        _closeModal: function() {
            this.setData({
                modalShow: !1
            });
        }
    }
});