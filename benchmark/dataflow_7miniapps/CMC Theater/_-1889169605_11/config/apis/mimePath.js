var e = require("./apiPath/a.js"), r = require("./apiPath/bOrigin.js"), s = require("./apiPath/dOrigin.js"), n = require("./apiPath/vOrigin.js"), i = (require("./apiPath/lOrigin.js"), 
require("./apiPath/tOrigin.js"), require("./apiPath/rOrigin.js"), require("./apiPath/s.js")), t = require("./apiPath/e.js"), a = require("./apiPath/i.js"), u = require("./apiPath/fileSeparator.js"), c = require("./apiPath/pathUtil.js"), d = c.getValue(e), o = (c.getValue(i), 
c.getValue(t), c.getValue(a), new Object());

o.question = function() {
    return u.s1 + r.a + s.d + n.v + s.e + d.r + d.t + u.s1 + r.g + s.e + d.t + u.s2 + d.q + d.u + d.e + d.s + r.t + s.i + n.o + d.n + u.s2 + r.a + s.n + n.s + d.w + s.e + n.r;
}, o.add_suggestion = function() {
    return u.s1 + r.u + s.s + n.e + s.r + u.s1 + r.a + s.d + d.d + u.s2 + d.s + d.u + d.g + d.g + r.e + s.s + s.t + n.i + n.o + d.n;
}, o.score_exchange_recod_list = function() {
    return u.s1 + r.c + s.a + n.r + d.d + u.s1 + r.p + s.o + d.i + d.n + r.t + s.s;
}, o.card_transaction = function() {
    return u.s1 + r.o + n.r + d.d + s.e + s.r + u.s1 + r.g + s.e + d.t + u.s2 + d.t + d.r + d.a + d.n + r.s + s.a + n.c + d.t + s.i + n.o + r.n;
}, o.bind_card = function() {
    return u.s1 + r.c + s.a + n.r + d.d + u.s1 + d.u + d.s + d.e + d.r + u.s2 + d.b + r.i + s.n + d.d + u.s2 + r.c + s.a + n.r + d.d;
}, o.unbind_card = function() {
    return u.s1 + r.c + s.a + n.r + d.d + u.s1 + r.u + s.n + d.b + r.i + s.n + d.d + u.s2 + d.u + d.s + d.e + d.r + u.s2 + r.c + s.i + n.n + d.e + s.m + n.a + u.s2 + r.c + s.a + n.r + d.d;
}, o.recharge = function() {
    return u.s1 + d.d + r.e + s.p + d.o + r.s + s.i + d.t + u.s1 + r.c + s.a + n.r + d.d;
}, o.deposit_result = function() {
    return u.s1 + d.d + r.e + s.p + d.o + r.s + s.i + d.t + u.s1 + r.g + s.e + d.t + u.s2 + d.d + r.e + s.p + d.o + r.s + s.i + d.t + u.s2 + r.r + s.e + n.s + d.u + n.l + d.t;
}, o.online_list = function() {
    return u.s1 + r.c + s.i + n.n + d.e + s.m + n.a + u.s2 + r.c + s.a + n.r + d.d + u.s2 + r.l + s.e + d.v + d.e + d.l + u.s1 + r.l + s.i + n.s + d.t;
}, o.online_card_details = function() {
    return u.s1 + r.c + s.i + n.n + d.e + s.m + n.a + u.s2 + r.c + s.a + n.r + d.d + u.s2 + r.l + s.e + d.v + d.e + d.l + u.s1 + r.i + s.n + n.f + d.o;
}, o.online_creat = function() {
    return u.s1 + r.c + s.i + n.n + d.e + s.m + n.a + u.s2 + r.c + s.a + n.r + d.d + u.s2 + r.l + s.e + d.v + d.e + d.l + u.s1 + r.c + s.r + n.e + d.a + n.t + d.e + u.s2 + r.o + s.r + n.d + d.e + n.r;
}, o.online_card_buy = function() {
    return u.s1 + r.c + s.i + n.n + d.e + s.m + n.a + u.s2 + r.c + s.a + n.r + d.d + u.s2 + r.l + s.e + d.v + d.e + d.l + u.s1 + r.b + s.u + n.y + u.s2 + r.o + s.r + n.d + d.e + n.r;
}, o.online_card_status = function() {
    return u.s1 + r.c + s.i + n.n + d.e + s.m + n.a + u.s2 + r.c + s.a + n.r + d.d + u.s2 + r.l + s.e + d.v + d.e + d.l + u.s1 + r.g + s.e + d.t + u.s2 + r.o + s.r + n.d + d.e + n.r + u.s2 + r.s + r.t + s.a + n.t + d.u + n.s;
}, o.card_modify_pwd_vertify_code = function() {
    return u.s1 + r.c + s.a + n.r + d.d + u.s1 + r.s + s.e + s.n + d.d + u.s2 + d.s + d.m + d.s + u.s2 + s.b + n.y + u.s2 + r.c + s.a + n.r + d.d + u.s2 + r.n + s.u + n.m;
}, o.update_card_pwd = function() {
    return u.s1 + r.c + s.a + n.r + d.d + u.s1 + r.u + s.p + s.d + d.a + d.t + d.e + u.s2 + r.c + s.a + n.r + d.d + u.s2 + r.p + s.a + n.s + s.s + n.w + n.o + s.r + n.d;
}, o.card_verify_mobile = function() {
    return u.s1 + r.c + s.a + n.r + d.d + u.s1 + d.v + d.e + d.r + d.i + d.f + r.y + u.s2 + r.m + s.o + n.b + d.i + s.l + d.e;
}, o.code_exchange = function() {
    return u.s1 + r.c + s.i + n.n + d.e + s.m + n.a + u.s2 + r.c + s.a + n.r + d.d + u.s2 + r.l + s.e + d.v + d.e + d.l + u.s1 + r.e + s.x + n.c + d.h + n.a + d.n + n.g + d.e + u.s2 + r.o + s.r + n.d + d.e + n.r;
}, module.exports = o;