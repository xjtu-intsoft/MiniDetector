module.exports = {
    msgGroups: function(e) {
        var i = {
            mophone: "/images/cdetails/i-mophone.png",
            wechat: "/images/cdetails/i-wechat.png",
            email: "/images/cdetails/i-email.png",
            phone: "/images/cdetails/i-phone.png",
            fax: "/images/cdetails/i-fax.png",
            addr: "/images/cdetails/i-addr.png",
            website: "/images/cdetails/i-website.png",
            custom: "/images/cdetails/i-custom.png",
            title: "/images/cdetails/i-title.png",
            qq: "/images/cdetails/i-qq.png",
            englishName: "/images/cdetails/i-en.png",
            dept: "/images/cdetails/i-dept.png",
            postCode: "/images/cdetails/i-postCode.png",
            offiaccount: "/images/cdetails/i-offiaccount.png",
            weibo: "/images/cdetails/i-weibo.png"
        }, a = [ [ "mophone1", "手机" ], [ "mophone2", "手机" ], [ "mophone3", "手机" ], [ "wechat", "微信" ], [ "wechat2", "微信" ], [ "wechat3", "微信" ], [ "addr1", "地址" ], [ "addr2", "地址" ], [ "addr3", "地址" ], [ "email1", "邮箱" ], [ "email2", "邮箱" ], [ "email3", "邮箱" ], [ "phone1", "座机" ], [ "phone2", "座机" ], [ "phone3", "座机" ], [ "fax", "传真" ], [ "website", "网址" ], [ "qq", "QQ" ], [ "dept", "部门" ], [ "postCode", "邮编" ], [ "offiaccount", "公众号" ], [ "weibo", "微博" ] ], o = [], t = [];
        e.showconfig && e.showconfig.custom && (o = e.showconfig.custom);
        for (var s = 0; s < a.length; s++) if (e[a[s][0]] && e[a[s][0]].trim().length) {
            var n = a[s][0], m = "";
            m = "mophone1" == n || "mophone2" == n || "mophone3" == n ? i.mophone : "addr1" == n || "addr2" == n || "addr3" == n ? i.addr : "email1" == n || "email2" == n || "email3" == n ? i.email : "phone1" == n || "phone2" == n || "phone3" == n ? i.phone : "wechat" == n || "wechat2" == n || "wechat3" == n ? i.wechat : i[n], 
            t.push({
                name: n,
                detail: a[s][1],
                msg: e[n],
                bindSrc: m
            });
        }
        if (o.length > 0) for (var d = 0; d < o.length; d++) o[d][1] && t.push({
            name: "custom",
            detail: o[d][0],
            msg: o[d][1],
            bindSrc: i.custom
        });
        return t;
    }
};