var r = require("./apiPath/a.js"), e = require("./apiPath/bOrigin.js"), i = require("./apiPath/dOrigin.js"), s = require("./apiPath/vOrigin.js"), t = (require("./apiPath/lOrigin.js"), 
require("./apiPath/tOrigin.js"), require("./apiPath/rOrigin.js"), require("./apiPath/AA.js"), 
require("./apiPath/s.js"), require("./apiPath/e.js"), require("./apiPath/i.js"), 
require("./apiPath/fileSeparator.js")), n = require("./apiPath/pathUtil.js"), u = (require("./apiPath/bOrigin.js"), 
n.getValue(r)), o = new Object();

o.getLastOrder = function() {
    return t.s1 + u.o + e.r + e.d + u.e + e.r + t.s1 + u.g + e.e + u.t + t.s2 + u.l + e.a + u.s + e.t + t.s2 + u.o + e.r + e.d + u.e + e.r;
}, o.noGetOrder = function() {
    return t.s1 + u.o + e.r + e.d + u.e + e.r + t.s1 + u.i + e.g + u.n + e.o + u.r + u.e + t.s2 + u.l + e.a + u.s + e.t + t.s2 + u.o + e.r + e.d + u.e + e.r;
}, o.order_list = function() {
    return t.s1 + e.o + i.r + s.d + s.e + u.r + t.s1 + u.m + e.o + u.v + u.i + u.e + t.s2 + u.t + u.i + e.c + u.k + e.e + u.t + t.s2 + u.o + e.r + u.d + e.e + e.r + s.s;
}, o.unfinished_order = function() {
    return t.s1 + e.o + i.r + s.d + s.e + u.r + t.s1 + u.u + e.n + u.f + u.i + u.n + u.i + u.s + e.h + u.e + e.d + t.s2 + u.o + e.r + u.d + e.e + e.r;
}, o.order_detial = function() {
    return t.s1 + e.o + i.r + s.d + s.e + u.r + t.s1 + u.g + e.e + u.t + t.s2 + u.m + e.y + t.s2 + e.o + i.r + s.d + s.e + u.r + t.s2 + u.r + e.e + u.s + u.u + u.l + u.t;
}, o.ticket_refund = function() {
    return t.s1 + e.t + i.i + s.c + s.k + s.e + u.t + t.s1 + u.r + e.e + u.f + u.u + u.n + u.d;
}, o.good_refund = function() {
    return t.s1 + e.o + i.r + s.d + s.e + s.r + t.s1 + u.r + e.e + u.f + u.u + u.n + u.d;
}, o.order_progress = function() {
    return t.s1 + e.o + i.r + s.d + s.e + u.r + t.s1 + u.g + e.e + u.t + t.s2 + e.o + i.r + s.d + s.e + u.r + t.s2 + u.p + e.r + u.o + u.g + u.r + u.e + u.s + u.s;
}, o.delete_order = function() {
    return t.s1 + e.v + "2" + t.s1 + e.o + i.r + s.d + s.e + u.r + t.s1 + u.d + e.e + u.l + u.e + u.t + u.e + t.s2 + e.o + i.r + s.d + s.e + u.r;
}, module.exports = o;