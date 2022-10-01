var e = require("@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Token = void 0;

var t = e(require("@babel/runtime/helpers/classCallCheck.js")), o = e(require("@babel/runtime/helpers/createClass.js")), n = require("F672DA860691379C9014B281A112E9B3.js"), r = require("9E9DC1C00691379CF8FBA9C727F2E9B3.js"), i = function() {
    function e() {
        (0, t.default)(this, e), this.restUrl = n.Config.restUrl, this.tokenUrl = n.Config.restUrl + n.Config.urlName.token, 
        this.sessionUrl = n.Config.restUrl + n.Config.urlName.session;
    }
    return (0, o.default)(e, [ {
        key: "getTokenFromServer",
        value: function(e, t) {
            var o, i, s = this, a = "";
            i = function(i) {
                !function(i) {
                    wx.request({
                        url: s.tokenUrl,
                        method: "GET",
                        header: {
                            "content-type": "application/json"
                        },
                        data: {
                            code: i
                        },
                        success: function(i) {
                            if (console.log("请求token接口成功", i), a = i.data.status.toString(), (o = getApp()).config.restUrl = s.restUrl, 
                            "200" == a) {
                                console.log("成功拿到token", i.data.data.token), o.client.openid = i.data.data.openid, 
                                o.client.token = i.data.data.token, o.netMark.token = !0, n.Config.token = i.data.data.token, 
                                e && e();
                                try {
                                    wx.setStorageSync && wx.setStorageSync("client", o.client);
                                } catch (e) {}
                            } else console.log("拿到token失败"), 404 == a ? wx.showModal({
                                title: "提示",
                                content: "微信小程序“递名片”版本过低，请删除后，重新搜索“递名片”使用。",
                                showCancel: !1,
                                confirmColor: o ? o.source.sceneColor : "#3F51B5"
                            }) : "601" == a ? wx.redirectTo({
                                url: "/pages/update/update"
                            }) : wx.showToast({
                                title: "网络异常,请稍后再试",
                                icon: "none",
                                duration: 3e3
                            }), o.ifFresh.token = !0, o.netMark.token = !1, t && t(), r.error("获取token失败success回调：" + JSON.stringify(i));
                        },
                        fail: function(e) {
                            console.log("获取token失败", e), (o = getApp()) && (o.ifFresh.token = !0), o && (o.netMark.token = !1), 
                            t && t(), wx.showToast({
                                title: "网络异常,请稍后再试",
                                icon: "none",
                                duration: 3e3
                            }), r.error("获取token失败fail回调：" + JSON.stringify(e));
                        }
                    });
                }(i);
            }, wx.login({
                success: function(e) {
                    console.log("调用微信登录，成功", e), i && i(e.code);
                },
                fail: function(e) {
                    console.log("调用微信登录，失败", e), (o = getApp()) && (o.ifFresh.token = !0), o && (o.netMark.token = !1), 
                    t && t();
                }
            });
        }
    } ]), e;
}();

exports.Token = i;