function curry(l, n) {
    return function r() {
        null == n && (n = l.length);
        var t = [].slice.call(arguments);
        return t.length >= n ? l.apply(this, t) : function() {
            return r.apply(this, t.concat([].slice.call(arguments)));
        };
    };
}

module.exports = curry;