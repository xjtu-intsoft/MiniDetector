var e = require("./apiPath/a.js"), i = require("./apiPath/bOrigin.js"), t = require("./apiPath/dOrigin.js"), r = require("./apiPath/vOrigin.js"), s = require("./apiPath/lOrigin.js"), n = require("./apiPath/tOrigin.js"), a = require("./apiPath/rOrigin.js"), u = require("./apiPath/s.js"), o = require("./apiPath/e.js"), c = require("./apiPath/i.js"), l = require("./apiPath/fileSeparator.js"), p = require("./apiPath/pathUtil.js"), f = p.getValue(e), m = (p.getValue(u), 
p.getValue(o)), g = p.getValue(c), d = new Object();

d.movieList = function() {
    return l.s1 + i.m + i.o + i.v + i.i + i.e + l.s1 + i.m + i.o + i.v + i.i + i.e + l.s2 + i.o + i.n + i.l + i.i + i.n + i.e + l.s2 + i.l + i.i + i.s + i.t;
}, d.movieComingList = function() {
    return l.s1 + i.m + i.o + i.v + i.i + i.e + l.s1 + i.m + i.o + i.v + i.i + i.e + l.s2 + i.c + i.o + i.m + i.i + i.n + i.g + l.s2 + i.l + i.i + i.s + i.t;
}, d.playInfo = function() {
    return l.s1 + i.c + i.i + i.n + i.e + i.m + f.a + l.s1 + i.p + i.l + i.a + i.y + l.s2 + i.i + i.n + i.f + i.o;
}, d.cityList = function() {
    return l.s1 + i.c + i.i + i.t + i.y + l.s1 + i.l + i.i + i.s + i.t;
}, d.cinemaList = function() {
    return l.s1 + i.c + i.i + i.n + i.e + i.m + f.a + l.s1 + i.l + i.i + i.s + i.t;
}, d.cinemaDetail = function() {
    return l.s1 + i.c + i.i + i.n + i.e + i.m + f.a + l.s1 + i.c + i.i + i.n + i.e + i.m + f.a + l.s2 + f.i + i.n + f.f + i.o;
}, d.init = function() {
    return l.s1 + i.a + i.p + i.p + l.s1 + i.i + i.n + i.i + i.t;
}, d.advertList = function() {
    return l.s1 + i.a + t.d + r.v + m.e + a.r + n.t + l.s1 + s.l + g.i + e.s + e.t;
}, d.movieInfo = function() {
    return l.s1 + i.m + t.o + r.v + f.i + a.e + l.s1 + i.m + t.o + r.v + f.i + a.e + l.s2 + f.i + i.n + i.f + f.o;
}, d.seat = function() {
    return l.s1 + i.p + t.l + r.a + f.y + l.s1 + i.s + t.e + r.a + f.t;
}, d.lock_seat = function() {
    return l.s1 + i.u + t.s + r.e + f.r + l.s1 + i.l + f.o + i.c + i.k + l.s2 + i.s + t.e + r.a + f.t;
}, d.lock_seat_log = function() {
    return l.s1 + i.u + t.s + r.e + f.r + l.s1 + i.g + t.e + f.t + l.s2 + f.l + f.o + f.c + f.k + l.s2 + i.s + t.e + r.a + f.t + l.s2 + f.l + f.o + f.g;
}, d.unlock_seat = function() {
    return l.s1 + i.u + t.s + r.e + f.r + l.s1 + f.u + f.n + f.l + f.o + i.c + i.k + l.s2 + i.s + t.e + r.a + f.t;
}, d.orderCreate = function() {
    return l.s1 + i.o + t.r + r.d + f.e + f.r + l.s1 + i.n + t.g + l.s2 + f.c + f.r + f.e + f.a + i.t + i.e;
}, d.orderBuy = function() {
    return l.s1 + i.t + t.i + r.c + f.k + f.e + i.t + l.s1 + i.n + t.g + l.s2 + f.b + f.u + f.y;
}, d.calculatePrice = function() {
    return l.s1 + i.p + t.r + r.i + f.c + f.e + l.s1 + i.c + i.a + i.l + f.c + f.u + f.l + f.a + f.t + f.e;
}, d.cancelOrder = function() {
    return l.s1 + i.o + t.r + r.d + f.e + f.r + l.s1 + i.c + i.a + i.n + f.c + f.e + i.l + l.s2 + f.m + i.y + l.s2 + i.o + t.r + r.d + f.e + f.r;
}, d.updateCompleted = function() {
    return l.s1 + i.u + t.p + r.d + f.a + f.t + i.e + l.s2 + i.c + i.o + i.m + f.p + f.l + i.e + f.t + r.e + f.d + l.s1 + i.r + t.e + r.n + f.o + f.v + i.a + i.t + f.e;
}, module.exports = d;