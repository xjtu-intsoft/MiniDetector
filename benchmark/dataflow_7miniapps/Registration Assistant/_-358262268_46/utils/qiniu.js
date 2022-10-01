!function() {
    function n(n) {
        l = {
            qiniuRegion: "",
            qiniuImageURLPrefix: "",
            qiniuUploadToken: "",
            qiniuUploadTokenURL: "",
            qiniuUploadTokenFunction: null,
            qiniuShouldUseQiniuFileName: !1
        }, e(n);
    }
    function e(n) {
        n.region ? l.qiniuRegion = n.region : console.error("qiniu uploader need your bucket region"), 
        n.uptoken ? l.qiniuUploadToken = n.uptoken : n.uptokenURL ? l.qiniuUploadTokenURL = n.uptokenURL : n.uptokenFunc && (l.qiniuUploadTokenFunction = n.uptokenFunc), 
        n.domain && (l.qiniuImageURLPrefix = n.domain), l.qiniuShouldUseQiniuFileName = n.shouldUseQiniuFileName;
    }
    function i(n, i, a, r, t, p) {
        if (null == n) return void console.error("qiniu uploader need filePath to upload");
        if (r && e(r), l.qiniuUploadToken) o(n, i, a, r, t, p); else if (l.qiniuUploadTokenURL) u(function() {
            o(n, i, a, r, t, p);
        }); else {
            if (!l.qiniuUploadTokenFunction) return void console.error("qiniu uploader need one of [uptoken, uptokenURL, uptokenFunc]");
            if (l.qiniuUploadToken = l.qiniuUploadTokenFunction(), null == l.qiniuUploadToken && l.qiniuUploadToken.length > 0) return void console.error("qiniu UploadTokenFunction result is null, please check the return value");
            o(n, i, a, r, t, p);
        }
    }
    function o(n, e, i, o, u, r) {
        if (null == l.qiniuUploadToken && l.qiniuUploadToken.length > 0) return void console.error("qiniu UploadToken is null, please check the init config or networking");
        var t = a(l.qiniuRegion), p = n.split("//")[1];
        o && o.key && (p = o.key);
        var c = {
            token: l.qiniuUploadToken
        };
        l.qiniuShouldUseQiniuFileName || (c.key = p);
        var s = wx.uploadFile({
            url: t,
            filePath: n,
            name: "file",
            formData: c,
            success: function(n) {
                var o = n.data;
                n.data.hasOwnProperty("type") && "Buffer" === n.data.type && (o = String.fromCharCode.apply(null, n.data.data));
                try {
                    var u = JSON.parse(o), a = l.qiniuImageURLPrefix + "/" + u.key;
                    u.imageURL = a, console.log(u), e && e(u);
                } catch (n) {
                    console.log("parse JSON failed, origin String is: " + o), i && i(n);
                }
            },
            fail: function(n) {
                console.error(n), i && i(n);
            }
        });
        s.onProgressUpdate(function(n) {
            u && u(n);
        }), r && r(function() {
            s.abort();
        });
    }
    function u(n) {
        wx.request({
            url: l.qiniuUploadTokenURL,
            success: function(e) {
                var i = e.data.uptoken;
                i && i.length > 0 ? (l.qiniuUploadToken = i, n && n()) : console.error("qiniuUploader cannot get your token, please check the uptokenURL or server");
            },
            fail: function(n) {
                console.error("qiniu UploadToken is null, please check the init config or networking: " + n);
            }
        });
    }
    function a(n) {
        var e = null;
        switch (n) {
          case "ECN":
            e = "https://up.qbox.me";
            break;

          case "NCN":
            e = "https://up-z1.qbox.me";
            break;

          case "SCN":
            e = "https://up-z2.qbox.me";
            break;

          case "NA":
            e = "https://up-na0.qbox.me";
            break;

          case "ASG":
            e = "https://up-as0.qbox.me";
            break;

          default:
            console.error("please make the region is with one of [ECN, SCN, NCN, NA, ASG]");
        }
        return e;
    }
    var l = {
        qiniuRegion: "",
        qiniuImageURLPrefix: "",
        qiniuUploadToken: "",
        qiniuUploadTokenURL: "",
        qiniuUploadTokenFunction: null,
        qiniuShouldUseQiniuFileName: !1
    };
    module.exports = {
        init: n,
        upload: i
    };
}();