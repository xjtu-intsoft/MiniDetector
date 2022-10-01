function l() {
    n.ballOne = e("1"), n.ballTwo = e("2"), n.ballThree = e("3"), n.ballFour = e("4"), 
    n.ballFive = e("5");
}

function e(l) {
    return {
        ballMove: !1,
        ballAnimation: !1,
        ballNum: l
    };
}

function a(l) {
    switch (l.ballNum) {
      case "1":
        n.delegate.setData({
            ballOne: l
        });
        break;

      case "2":
        n.delegate.setData({
            ballTwo: l
        });
        break;

      case "3":
        n.delegate.setData({
            ballThree: l
        });
        break;

      case "4":
        n.delegate.setData({
            ballFour: l
        });
        break;

      case "5":
        n.delegate.setData({
            ballFive: l
        });
    }
}

function t(l) {
    var e;
    e = n.ballOne.ballMove ? n.ballTwo.ballMove ? n.ballThree.ballMove ? n.ballFour.ballMove ? n.ballFive.ballMove ? n.ballOne : n.ballFive : n.ballFour : n.ballThree : n.ballTwo : n.ballOne;
    var a = l.touches[0].clientX, t = l.touches[0].clientY;
    return a = 10 * parseInt(a / 10), t = 10 * parseInt(t / 10), e.ballMove = !0, e.ballAnimation = !1, 
    e.ballX = a * n.retaio - 25, e.ballY = t * n.retaio - 25, e;
}

var n = new Object();

wx.getSystemInfo({
    success: function(l) {
        n.retaio = 750 / l.windowWidth, n.endX = 63, n.endY = l.windowHeight * n.retaio - 80;
    }
}), l(), n.setDelegate = function(l) {
    n.delegate = l;
}, n.data = {
    balls: [],
    showBalls: []
}, n.showBallWithEvent = function(l) {
    var e = t(l);
    a(e), setTimeout(function() {
        e.ballMove = !0, e.ballAnimation = !0, e.ballX = n.endX, e.ballY = n.endY, a(e);
    }, 10), setTimeout(function() {
        e.ballMove = !1, e.ballAnimation = !1, a(e);
    }, 510);
}, n.initBalls = l, module.exports = n;