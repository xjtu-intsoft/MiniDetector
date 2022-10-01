Component({
    properties: {
        myCard: {
            type: Object,
            value: {},
            observer: function(t) {
                this.setData({
                    listData: t.list,
                    picPre: t.pic_prefix
                });
            }
        },
        switchList: {
            type: Object,
            value: {},
            observer: function(t) {
                t.show && this.setData({
                    "switchList.animationName": "toUpAnimation"
                });
            }
        }
    },
    data: {
        listData: [],
        picPre: ""
    },
    methods: {
        _clickItem: function(t) {
            var i = this;
            this.setData({
                "switchList.animationName": "toDownAnimation"
            }), setTimeout(function() {
                i.triggerEvent("selectCard", t.currentTarget.dataset.i);
            }, 200);
        },
        _close: function() {
            var t = this;
            this.setData({
                "switchList.animationName": "toDownAnimation"
            }), setTimeout(function() {
                t.triggerEvent("closeSwitchCard");
            }, 200);
        }
    }
});