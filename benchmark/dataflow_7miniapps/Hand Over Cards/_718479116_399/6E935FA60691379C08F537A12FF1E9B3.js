Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = {
    data: {
        percentage: "",
        animTime: ""
    },
    options: {
        run: function(t, a, e) {
            var i = 2 * Math.PI / 100 * t - .5 * Math.PI;
            this.data.ctx2.arc(a, e, a - 1, -.5 * Math.PI, i);
            var n = this.data.ctx2.createLinearGradient(210, 0, 0, 210);
            n.addColorStop(0, "#5242BE"), n.addColorStop(1, "#519AF0"), this.data.ctx2.setStrokeStyle(n), 
            this.data.ctx2.setLineWidth("2"), this.data.ctx2.setLineCap("butt"), this.data.ctx2.stroke(), 
            this.data.ctx2.beginPath(), this.data.ctx2.setFontSize(40), this.data.ctx2.setFillStyle(n), 
            this.data.ctx2.setTextAlign("center"), this.data.ctx2.setTextBaseline("middle"), 
            this.data.ctx2.draw();
        },
        canvasTap: function(t, a, e, i, n) {
            var c = this;
            if (++t > a) return !1;
            c.run(t, i, n), setTimeout(function() {
                c.canvasTap(t, a, e, i, n);
            }, e);
        },
        draw: function(t, a, e, i) {
            t;
            var n = wx.createCanvasContext(t);
            i.setData({
                ctx2: n,
                percentage: a,
                animTime: e
            });
            var c = i.data.animTime / i.data.percentage;
            i.createSelectorQuery().select("#" + t).boundingClientRect(function(t) {
                console.log(t);
                try {
                    var a = parseInt(t.width / 2), e = parseInt(t.height / 2);
                    i.canvasTap(0, i.data.percentage, c, a, e);
                } catch (t) {}
            }).exec();
        }
    }
};

exports.default = t;