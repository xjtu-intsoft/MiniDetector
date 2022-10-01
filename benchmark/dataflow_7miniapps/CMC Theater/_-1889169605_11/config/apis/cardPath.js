var e = require("./apiPath/a.js"), r = require("./apiPath/bOrigin.js"), s = require("./apiPath/dOrigin.js"), n = require("./apiPath/vOrigin.js"), i = (require("./apiPath/lOrigin.js"), 
require("./apiPath/tOrigin.js"), require("./apiPath/rOrigin.js"), require("./apiPath/s.js")), a = require("./apiPath/e.js"), t = require("./apiPath/i.js"), c = require("./apiPath/fileSeparator.js"), u = require("./apiPath/pathUtil.js"), d = u.getValue(e), o = (u.getValue(i), 
u.getValue(a), u.getValue(t), new Object());

o.card_list = function() {
    return c.s1 + r.c + s.a + n.r + d.d + c.s1 + r.g + s.e + d.t + c.s2 + d.u + d.s + d.e + d.r + c.s2 + r.c + s.i + n.n + d.e + s.m + n.a + c.s2 + r.c + s.a + n.r + d.d;
}, o.card_info = function() {
    return c.s1 + r.c + s.a + n.r + d.d + c.s1 + r.g + s.e + d.t + c.s2 + d.c + d.a + d.r + d.d + c.s2 + r.i + s.n + n.f + d.o;
}, o.score_exchange_recod_list = function() {
    return c.s1 + r.c + s.a + n.r + d.d + c.s1 + r.p + s.o + d.i + d.n + r.t + s.s;
}, o.card_transaction = function() {
    return c.s1 + r.o + n.r + d.d + s.e + s.r + c.s1 + r.g + s.e + d.t + c.s2 + d.t + d.r + d.a + d.n + r.s + s.a + n.c + d.t + s.i + n.o + r.n;
}, o.bind_card = function() {
    return c.s1 + r.c + s.a + n.r + d.d + c.s1 + d.u + d.s + d.e + d.r + c.s2 + d.b + r.i + s.n + d.d + c.s2 + r.c + s.a + n.r + d.d;
}, o.unbind_card = function() {
    return c.s1 + r.c + s.a + n.r + d.d + c.s1 + r.u + s.n + d.b + r.i + s.n + d.d + c.s2 + d.u + d.s + d.e + d.r + c.s2 + r.c + s.i + n.n + d.e + s.m + n.a + c.s2 + r.c + s.a + n.r + d.d;
}, o.recharge = function() {
    return c.s1 + d.d + r.e + s.p + d.o + r.s + s.i + d.t + c.s1 + r.c + s.a + n.r + d.d;
}, o.deposit_result = function() {
    return c.s1 + d.d + r.e + s.p + d.o + r.s + s.i + d.t + c.s1 + r.g + s.e + d.t + c.s2 + d.d + r.e + s.p + d.o + r.s + s.i + d.t + c.s2 + r.r + s.e + n.s + d.u + n.l + d.t;
}, o.online_list = function() {
    return c.s1 + r.c + s.i + n.n + d.e + s.m + n.a + c.s2 + r.c + s.a + n.r + d.d + c.s2 + r.l + s.e + d.v + d.e + d.l + c.s1 + r.l + s.i + n.s + d.t;
}, o.online_card_details = function() {
    return c.s1 + r.c + s.i + n.n + d.e + s.m + n.a + c.s2 + r.c + s.a + n.r + d.d + c.s2 + r.l + s.e + d.v + d.e + d.l + c.s1 + r.i + s.n + n.f + d.o;
}, o.online_creat = function() {
    return c.s1 + r.c + s.i + n.n + d.e + s.m + n.a + c.s2 + r.c + s.a + n.r + d.d + c.s2 + r.l + s.e + d.v + d.e + d.l + c.s1 + r.c + s.r + n.e + d.a + n.t + d.e + c.s2 + r.o + s.r + n.d + d.e + n.r;
}, o.online_card_buy = function() {
    return c.s1 + r.c + s.i + n.n + d.e + s.m + n.a + c.s2 + r.c + s.a + n.r + d.d + c.s2 + r.l + s.e + d.v + d.e + d.l + c.s1 + r.b + s.u + n.y + c.s2 + r.o + s.r + n.d + d.e + n.r;
}, o.online_card_status = function() {
    return c.s1 + r.c + s.i + n.n + d.e + s.m + n.a + c.s2 + r.c + s.a + n.r + d.d + c.s2 + r.l + s.e + d.v + d.e + d.l + c.s1 + r.g + s.e + d.t + c.s2 + r.o + s.r + n.d + d.e + n.r + c.s2 + r.s + r.t + s.a + n.t + d.u + n.s;
}, o.card_modify_pwd_vertify_code = function() {
    return c.s1 + r.c + s.a + n.r + d.d + c.s1 + r.s + s.e + s.n + d.d + c.s2 + d.s + d.m + d.s + c.s2 + s.b + n.y + c.s2 + r.c + s.a + n.r + d.d + c.s2 + r.n + s.u + n.m;
}, o.update_card_pwd = function() {
    return c.s1 + r.c + s.a + n.r + d.d + c.s1 + r.u + s.p + s.d + d.a + d.t + d.e + c.s2 + r.c + s.a + n.r + d.d + c.s2 + r.p + s.a + n.s + s.s + n.w + n.o + s.r + n.d;
}, o.card_verify_mobile = function() {
    return c.s1 + r.c + s.a + n.r + d.d + c.s1 + d.v + d.e + d.r + d.i + d.f + r.y + c.s2 + r.m + s.o + n.b + d.i + s.l + d.e;
}, o.code_exchange = function() {
    return c.s1 + r.c + s.i + n.n + d.e + s.m + n.a + c.s2 + r.c + s.a + n.r + d.d + c.s2 + r.l + s.e + d.v + d.e + d.l + c.s1 + r.e + s.x + n.c + d.h + n.a + d.n + n.g + d.e + c.s2 + r.o + s.r + n.d + d.e + n.r;
}, o.code_exchange_check = function() {
    return c.s1 + r.e + s.x + n.c + d.h + n.a + d.n + n.g + d.e + c.s2 + r.c + s.o + n.u + d.p + n.o + d.n + c.s1 + r.c + s.h + n.e + d.c + n.k;
}, o.saveUserRelationShip = function() {
    return c.s1 + r.u + s.s + n.e + d.r + c.s1 + r.s + s.a + n.v + d.e + c.s2 + r.u + s.s + n.e + d.r + c.s2 + r.e + s.m + n.p + d.l + r.o + d.y + r.e + r.e + c.s2 + r.r + s.e + n.l + d.a + r.t + d.i + r.o + r.n + c.s2 + r.s + s.h + n.i + d.p;
}, module.exports = o;