module.exports = {
    imageUtil: function(i) {
        var e = {}, t = i.detail.width, o = i.detail.height, g = o / t;
        return console.log("originalWidth: " + t), console.log("originalHeight: " + o), 
        wx.getSystemInfo({
            success: function(i) {
                var l = i.windowWidth, n = i.windowHeight;
                g < n / l ? (e.imageWidth = l, e.imageHeight = l * o / t) : (e.imageHeight = n, 
                e.imageWidth = n * t / o);
            }
        }), console.log("缩放后的宽: " + e.imageWidth), console.log("缩放后的高: " + e.imageHeight), 
        e;
    }
};