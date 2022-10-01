var e = {
    name: "sensors",
    appid: "xxxxx",
    server_url: "production" == require("5F520E160691379C39346611585FD9B3.js").default.env ? "https://api.microvcard.com/sa?project=production" : "https://api.microvcard.com/sa?project=default",
    send_timeout: 1e3,
    use_client_time: !1,
    show_log: !1,
    allow_amend_share_path: !0,
    autoTrack: {
        appLaunch: !1,
        appShow: !0,
        appHide: !0,
        pageShow: !0,
        pageShare: !0
    },
    batch_send: !0,
    datasend_timeout: 3e3
};

module.exports = e;