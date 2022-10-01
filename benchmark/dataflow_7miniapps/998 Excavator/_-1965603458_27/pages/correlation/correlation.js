var i = getApp();

Page({
    data: {
        items: [ {
            id: "0",
            app_name: "起重",
            i_png: "./../../images/icon/i_qz.png",
            used: "二手",
            rent: "租赁",
            talents: "人才",
            color: "#F39800"
        }, {
            id: "1",
            app_name: "混凝土",
            i_png: "./../../images/icon/i_hnt.png",
            used: "二手",
            rent: "租赁",
            talents: "人才",
            color: "#9DBA44"
        }, {
            id: "2",
            app_name: "铲运",
            i_png: "./../../images/icon/i_cy.png",
            used: "二手",
            rent: "租赁",
            talents: "人才",
            color: "#E36860"
        }, {
            id: "3",
            app_name: "挖掘",
            i_png: "./../../images/icon/i_wj.png",
            used: "二手",
            rent: "租赁",
            talents: "人才",
            color: "#3392FF"
        }, {
            id: "4",
            app_name: "桩工",
            i_png: "./../../images/icon/i_zg.png",
            used: "二手",
            rent: "租赁",
            talents: "人才",
            color: "#AA89BD"
        }, {
            id: "5",
            app_name: "挖掘",
            i_png: "./../../images/icon/i_lm.png",
            used: "二手",
            rent: "租赁",
            talents: "人才",
            color: "#3392ff"
        } ]
    },
    app_skip: function(a) {
        0 == a.target.id && wx.switchTab({
            url: "../index/index"
        }), 1 == a.target.id && wx.navigateToMiniProgram({
            appId: "wxeaefb304f2517fdb",
            envVersion: "trial",
            fail: function() {
                i.show_erro("网络连接失败", "faild");
            }
        }), 2 == a.target.id && wx.navigateToMiniProgram({
            appId: "wx260f67efde427995",
            envVersion: "trial",
            fail: function() {
                i.show_erro("网络连接失败", "faild");
            }
        }), 3 == a.target.id && wx.navigateToMiniProgram({
            appId: "wx41e9d8b0b1126275",
            envVersion: "trial",
            fail: function() {
                i.show_erro("网络连接失败", "faild");
            }
        }), 4 == a.target.id && wx.navigateToMiniProgram({
            appId: "wxa437acede824da05",
            envVersion: "trial",
            fail: function() {
                i.show_erro("网络连接失败", "faild");
            }
        }), 5 == a.target.id && wx.navigateToMiniProgram({
            appId: "wx30c6f5b9064d3c66",
            envVersion: "trial",
            fail: function() {
                i.show_erro("网络连接失败", "faild");
            }
        });
    },
    rent_skip: function(a) {
        0 == a.target.id && wx.navigateToMiniProgram({
            appId: "wxfe7e918bfb47b8b2",
            path: "pages/device/index",
            envVersion: "trial",
            extraData: {
                id: 4
            },
            fail: function() {
                i.show_erro("网络连接失败", "faild");
            }
        }), 1 == a.target.id && wx.navigateToMiniProgram({
            appId: "wxfe7e918bfb47b8b2",
            path: "pages/device/index",
            envVersion: "trial",
            extraData: {
                id: 18
            },
            fail: function() {
                i.show_erro("网络连接失败", "faild");
            }
        }), 2 == a.target.id && wx.navigateToMiniProgram({
            appId: "wxfe7e918bfb47b8b2",
            path: "pages/device/index",
            envVersion: "trial",
            extraData: {
                id: 5
            },
            fail: function() {
                i.show_erro("网络连接失败", "faild");
            }
        }), 3 == a.target.id && wx.navigateToMiniProgram({
            appId: "wxfe7e918bfb47b8b2",
            path: "pages/device/index",
            envVersion: "trial",
            extraData: {
                id: 17
            },
            fail: function() {
                i.show_erro("网络连接失败", "faild");
            }
        }), 4 == a.target.id && wx.navigateToMiniProgram({
            appId: "wxfe7e918bfb47b8b2",
            path: "pages/device/index",
            envVersion: "trial",
            extraData: {
                id: 6
            },
            fail: function() {
                i.show_erro("网络连接失败", "faild");
            }
        }), 5 == a.target.id && wx.navigateToMiniProgram({
            appId: "wxfe7e918bfb47b8b2",
            path: "pages/device/index",
            envVersion: "trial",
            extraData: {
                id: 16
            },
            fail: function() {
                i.show_erro("网络连接失败", "faild");
            }
        });
    },
    talents_skip: function(i) {
        wx.showModal({
            title: "提示",
            content: "该功能尚未开放,尽请期待"
        });
    },
    onLoad: function(i) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});