var e = require("@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.LowerCanvas = void 0;

var a = e(require("@babel/runtime/helpers/classCallCheck.js")), t = e(require("@babel/runtime/helpers/createClass.js")), s = function() {
    function e() {
        (0, a.default)(this, e);
    }
    return (0, t.default)(e, [ {
        key: "lowVersionCanvas",
        value: function(e, a) {
            var t, s;
            wx.chooseImage({
                count: 1,
                sizeType: [ "compressed" ],
                success: function(r) {
                    wx.getImageInfo({
                        src: r.tempFilePaths[0],
                        success: function(n) {
                            t = n.height, s = n.width, t > s ? e.setData({
                                "lowerCanvas.width": s,
                                "lowerCanvas.height": s
                            }) : e.setData({
                                "lowerCanvas.width": t,
                                "lowerCanvas.height": t
                            });
                            var i = wx.createCanvasContext(e.data.lowerCanvas.canvasId);
                            t > s ? i.drawImage(r.tempFilePaths[0], 0, -(t - s) / 2, s, t) : i.drawImage(r.tempFilePaths[0], -(s - t) / 2, 0, s, t), 
                            i.draw(!1, function(t) {
                                wx.canvasToTempFilePath({
                                    canvasId: e.data.lowerCanvas.canvasId,
                                    success: function(e) {
                                        a && a(e.tempFilePath);
                                    }
                                });
                            });
                        }
                    });
                }
            });
        }
    } ]), e;
}();

exports.LowerCanvas = s;