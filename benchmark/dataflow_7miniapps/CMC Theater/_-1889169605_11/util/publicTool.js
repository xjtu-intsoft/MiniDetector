function n(n) {
    return function(t) {
        return new Promise(function(e, i) {
            t.success = function(n) {
                e(n);
            }, t.fail = function(n) {
                i(n);
            }, n(t);
        });
    };
}

module.exports = {
    getAllValueWithObjc: function(n) {
        var t = [];
        for (var e in n) t.unshift(n[e]);
        return t.reverse();
    },
    setData: function(n, t) {
        for (var e in t) n[e] = t[e];
    },
    promiseTime: function(n) {
        return new Promise(function(t) {
            setTimeout(function() {
                t();
            }, n);
        });
    },
    promiseModal: function(t) {
        return n(wx.showModal)(t);
    }
};