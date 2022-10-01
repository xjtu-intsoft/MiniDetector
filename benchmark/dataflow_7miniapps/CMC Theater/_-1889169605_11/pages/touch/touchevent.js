Page({
    data: {
        dx: 0,
        dy: 0,
        mx: 0,
        my: 0,
        lx: 0,
        ly: 0,
        animationData: {},
        times: [ 1, 2, 3, 4, 5, 6 ]
    },
    onReady: function() {
        var t = wx.createCanvasContext("seats");
        t.setStrokeStyle("#00ffff"), t.setLineWidth(1), t.setFillStyle("red"), t.rect(10, 10, 150, 110), 
        t.fill(), t.drawImage("./../../images/common/xuanzuo_kexuan_1.png", 10, 10, 38, 34), 
        t.drawImage("./../../images/common/xuanzuo_kexuan_1.png", 48, 10, 38, 34), t.stroke(), 
        t.draw();
    },
    canvasHandler: function(t) {
        console.log(t), 0 == t.target.dataset.scale ? this.rotateAndScale(!1) : this.rotateAndScale(!0);
    },
    rotateAndScale: function(t) {
        var a = wx.createAnimation({
            duration: 1e3,
            timingFunction: "ease"
        });
        this.data.animation = a, t ? this.data.animation.scale(1, 1).step() : this.data.animation.scale(.5, .5).step(), 
        this.setData({
            animationData: this.data.animation.export()
        });
    },
    start: function(t) {
        console.log("start========================"), console.log(t), this.dx = t.changedTouches[0].clientX, 
        this.dy = t.changedTouches[0].clientY;
    },
    move: function(t) {
        console.log(t);
        var a = t.changedTouches[0].clientX, e = t.changedTouches[0].clientY, n = a - this.dx + this.data.lx, o = e - this.dy + this.data.ly;
        console.log("move==== cx = " + a + " cy = " + e + " mx = " + n + " my = " + o), 
        this.setData({
            mx: n,
            my: o
        });
    },
    end: function(t) {
        console.log(t), this.setData({
            lx: this.data.mx,
            ly: this.data.my
        }), console.log("end======================== lx = " + this.data.lx + " ly = " + this.data.ly);
    }
});