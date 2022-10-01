function t(t, r) {
    var e, i, o;
    try {
        e = t.toString().split(".")[1].length;
    } catch (t) {
        e = 0;
    }
    try {
        i = r.toString().split(".")[1].length;
    } catch (t) {
        i = 0;
    }
    return o = Math.pow(10, Math.max(e, i)), (n(t, o) + n(r, o)) / o;
}

function r(t, r) {
    var n, e, i, o;
    try {
        n = t.toString().split(".")[1].length;
    } catch (t) {
        n = 0;
    }
    try {
        e = r.toString().split(".")[1].length;
    } catch (t) {
        e = 0;
    }
    return i = Math.pow(10, Math.max(n, e)), o = n >= e ? n : e, ((t * i - r * i) / i).toFixed(o);
}

function n(t, r) {
    var n = 0, e = t.toString(), i = r.toString();
    try {
        n += e.split(".")[1].length;
    } catch (t) {}
    try {
        n += i.split(".")[1].length;
    } catch (t) {}
    return Number(e.replace(".", "")) * Number(i.replace(".", "")) / Math.pow(10, n);
}

function e(t, r) {
    var n, e, i = 0, o = 0;
    try {
        i = t.toString().split(".")[1].length;
    } catch (t) {}
    try {
        o = r.toString().split(".")[1].length;
    } catch (t) {}
    return n = Number(t.toString().replace(".", "")), e = Number(r.toString().replace(".", "")), 
    n / e * Math.pow(10, o - i);
}

Number.prototype.add = function(r) {
    return t(r, this);
}, Number.prototype.sub = function(t) {
    return r(this, t);
}, Number.prototype.mul = function(t) {
    return n(t, this);
}, Number.prototype.div = function(t) {
    return e(this, t);
}, module.exports = {
    add: t,
    sub: r,
    div: e,
    mul: n
};