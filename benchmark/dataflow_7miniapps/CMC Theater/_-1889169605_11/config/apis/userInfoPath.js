var s = require("./apiPath/a.js"), e = require("./apiPath/bOrigin.js"), r = require("./apiPath/dOrigin.js"), n = require("./apiPath/vOrigin.js"), i = (require("./apiPath/lOrigin.js"), 
require("./apiPath/tOrigin.js"), require("./apiPath/rOrigin.js"), require("./apiPath/AA.js"), 
require("./apiPath/s.js"), require("./apiPath/e.js"), require("./apiPath/i.js"), 
require("./apiPath/fileSeparator.js")), u = require("./apiPath/pathUtil.js"), t = (require("./apiPath/bOrigin.js"), 
u.getValue(s)), o = new Object();

o.user_info = function() {
    return i.s1 + t.u + e.s + t.e + e.r + i.s1 + t.u + e.s + t.e + t.r + i.s2 + t.i + t.n + t.f + e.o;
}, o.wx_phone_login = function() {
    return i.s1 + t.v + "2" + i.s1 + t.u + e.s + t.e + e.r + i.s1 + t.w + e.e + t.c + t.h + e.a + e.t + i.s2 + t.f + e.a + e.s + e.t + i.s2 + e.l + e.o + t.g + t.i + e.n;
}, o.sendLoginMessage = function() {
    return i.s1 + t.u + e.s + t.e + e.r + i.s1 + t.s + e.e + t.n + t.d + i.s2 + e.l + e.o + t.g + t.i + e.n + i.s2 + t.o + t.r + i.s2 + e.r + t.e + e.g + i.s2 + t.v + t.a + e.l + e.i + t.d + e.a + e.t + t.e + i.s2 + e.c + t.o + e.d + t.e;
}, o.codeLogin = function() {
    return i.s1 + t.u + e.s + t.e + e.r + i.s1 + t.v + t.a + e.l + e.i + t.d + e.a + e.t + t.e + i.s2 + e.c + t.o + e.d + t.e + i.s2 + e.l + e.o + t.g + t.i + e.n + i.s2 + t.o + t.r + i.s2 + e.r + t.e + e.g;
}, o.login_openid = function() {
    return i.s1 + t.u + e.s + t.e + e.r + i.s1 + t.g + e.e + t.t + i.s2 + t.i + e.n + t.f + e.o + i.s2 + e.b + e.y + i.s2 + t.o + t.p + e.e + e.n + t.i + e.d;
}, o.send_message = function() {
    return i.s1 + t.u + e.s + t.e + e.r + i.s1 + t.s + e.e + t.n + t.d + i.s2 + t.m + e.e + t.s + t.s + t.a + e.g + e.e;
}, o.logout = function() {
    return i.s1 + t.u + e.s + t.e + e.r + i.s1 + t.l + t.o + e.g + t.o + t.u + e.t;
}, o.update_user_info = function() {
    return i.s1 + t.u + e.s + t.e + e.r + i.s1 + t.u + t.p + e.d + t.a + t.t + e.e + i.s2 + t.u + e.s + t.e + e.r + i.s2 + t.i + t.n + t.f + e.o;
}, o.user_login = function() {
    return i.s1 + e.u + r.s + n.e + t.r + i.s1 + e.l + r.o + n.g + t.i + e.n;
}, o.send_message = function() {
    return i.s1 + e.u + r.s + n.e + t.r + i.s1 + t.s + t.e + e.n + t.d + i.s2 + t.m + e.e + t.s + e.s + e.a + n.g + t.e;
}, o.set_phone = function() {
    return i.s1 + e.u + r.s + n.e + t.r + i.s1 + t.s + t.e + e.t + i.s2 + t.p + e.h + t.o + e.n + e.e;
}, o.user_un_register_info = function() {
    return i.s1 + e.v + "2" + i.s1 + e.u + r.s + n.e + t.r + i.s1 + t.l + t.o + e.g + t.o + e.f + t.f + i.s2 + t.a + e.g + t.r + e.e + e.e + n.m + t.e + n.n + t.t;
}, o.user_un_register_mobile_code = function() {
    return i.s1 + e.v + "2" + i.s1 + e.u + r.s + n.e + t.r + i.s1 + t.s + e.e + t.n + t.d + i.s2 + t.l + t.o + e.g + t.o + e.f + t.f + i.s2 + t.v + e.a + t.l + e.i + e.d + n.a + t.t + n.e + i.s2 + t.c + e.o + t.d + e.e;
}, o.user_un_register = function() {
    return i.s1 + e.v + "2" + i.s1 + e.u + r.s + n.e + t.r + i.s1 + t.l + t.o + e.g + t.o + e.f + t.f;
}, o.contact_list = function() {
    return i.s1 + e.v + "2" + i.s1 + e.u + r.s + n.e + t.r + i.s1 + e.g + r.e + n.t + i.s2 + t.c + t.o + e.m + t.p + e.a + t.n + t.i + t.o + t.n + i.s2 + e.l + r.i + n.s + t.t;
}, o.deleteContact = function() {
    return i.s1 + e.v + "2" + i.s1 + e.u + r.s + n.e + t.r + i.s1 + e.d + r.e + n.l + i.s2 + t.c + t.o + e.m + t.p + e.a + t.n + t.i + t.o + t.n;
}, o.save_companion = function() {
    return i.s1 + e.v + "2" + i.s1 + e.u + r.s + n.e + t.r + i.s1 + e.s + r.a + n.v + t.e + i.s2 + t.c + t.o + e.m + t.p + e.a + t.n + t.i + t.o + t.n;
}, module.exports = o;