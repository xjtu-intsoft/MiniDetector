var t = getApp();

Component({
    properties: {
        adverCon: {
            type: Array,
            value: [],
            observer: function(t) {
                this._obserFun(t);
            }
        }
    },
    lifetimes: {
        attached: function() {}
    },
    pageLifetimes: {
        show: function() {
            this.data.advertisementCon.length > 0 && this.data.advertisementCon[this.data.current] && t.burying.setSensorEvent(t, {
                AdvertisingTag: "首页-" + this.data.advertisementCon[this.data.current].advertisingTag
            }, "AdvertisingSpaceDisplay");
        }
    },
    data: {
        advertisementCon: [],
        startIn: !1,
        markTime: new Date().getTime(),
        current: 0
    },
    methods: {
        _obserFun: function(e) {
            for (var a = [], n = 0; n < e.length; n++) e[n].show && a.push(e[n]);
            this.setData({
                current: 0,
                advertisementCon: a
            }), a.length > 0 && !this.data.startIn && (this.data.startIn = !0, t.burying.setSensorEvent(t, {
                AdvertisingTag: "首页-" + a[0].advertisingTag
            }, "AdvertisingSpaceDisplay"));
        },
        _toMinipro: function(e) {
            var a = e.currentTarget.dataset.i, n = this.data.advertisementCon[a].appid, i = this.data.advertisementCon[a].path;
            try {
                wx.navigateToMiniProgram({
                    appId: n,
                    path: i,
                    extraData: {
                        source: "minicard"
                    },
                    success: function(e) {
                        console.log("跳转成功", i), t.burying.setPoint(t, 285);
                    },
                    fail: function(e) {
                        t.burying.setPoint(t, 286);
                    }
                });
            } catch (e) {}
        },
        _change: function(e) {
            var a = e.detail.current;
            t.burying.setSensorEvent(t, {
                AdvertisingTag: "首页-" + this.data.advertisementCon[a].advertisingTag
            }, "AdvertisingSpaceDisplay");
        }
    }
});